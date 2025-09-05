import React, {_useCallback, _useMemo, _useState} from 'react';
import Head from 'next/head';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export type Slide = {_id: string;
  title: string;
  content: string;
  chart?: {
    type: 'bar' | 'funnel' | 'timeline';
    data: Array<{ label: string; value: number}>;
  };
};

type BuilderState = {_mission: string;
  fundingStage: string;
  vision: string;
  roundType: 'Seed' | 'Series A' | 'Token Sale' | '';
  targetRaise: string;
  assets: File[];};

function uid() {_return Math.random().toString(36).slice(2);}

function SlidePreview(_{_slide, _isActive, _onClick}: {_slide: Slide; isActive: boolean; onClick: () => void}) {_return (
    <button onClick={onClick} className={_`w-56 shrink-0 border rounded-md p-3 text-left bg-white/70 dark:bg-gray-900 ${isActive ? 'ring-2 ring-blue-500' : 'border-gray-200 dark:border-gray-800'}`}>
      <div className="font-semibold text-sm line-clamp-2">{_slide.title || 'Untitled'}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 mt-1 whitespace-pre-wrap">{_slide.content || '—'}</div>
    </button>
  );
}

export const getServerSideProps: GetServerSideProps = async (_ctx) => {_const _result = await requireAdminRole(ctx);
  // @ts-ignore
  if ('redirect' in result) return result;
  return result;};

export default function PitchGenerator() {_const [builder, _setBuilder] = useState<BuilderState>({ mission: '', _fundingStage: '', _vision: '', _roundType: '', _targetRaise: '', _assets: []});
  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [versionTag, setVersionTag] = useState<string | null>(null);
  const [history, setHistory] = useState<{_id: string; createdAt: string; version: string}[]>([]);

  const _activeSlide = slides[activeIndex];

  const _onAssetDrop = useCallback(_(e: React.DragEvent<HTMLDivElement>) => {_e.preventDefault();
    const _files = Array.from(e.dataTransfer.files || []);
    setBuilder(_(b) => ({ ...b, _assets: [...b.assets, _...files]}));
  }, []);

  const _prevent = (_e: React.DragEvent) => {_e.preventDefault();
    e.stopPropagation();};

  const _operatorPrompt = useMemo__(() => `Create a 10-slide investor pitch deck for a high-growth AI services marketplace. Include market size, traction, business model, team, token strategy, and call to action.`, []);

  const _autoFetchMetrics = useCallback(_async () => {_setLoading(true);
    try {
      const _res = await fetch('/api/admin/pitch/metrics');
      const _data = await res.json();
      return data;} catch (e) {_return {};
    } finally {_setLoading(false);}
  }, []);

  const _buildDeck = useCallback(_async () => {_setLoading(true);
    try {
      const _metrics = await autoFetchMetrics();
      const _res = await fetch('/api/admin/pitch/generate', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_operatorPrompt, _inputs: builder, _metrics})});
      const _json = await res.json();
      const newSlides: Slide[] = json.slides || [];
      setSlides(newSlides);
      setActiveIndex(0);
      const _v = json.version || `v${_new Date().toISOString()}`;
      setVersionTag(v);
      setHistory(_(h) => [{_id: uid(), _createdAt: new Date().toISOString(), _version: v}, ...h]);
    } catch (e) {_// noop} finally {_setLoading(false);}
  }, [autoFetchMetrics, builder, operatorPrompt]);

  const _rephraseSlide = useCallback(_async (idx: number) => {_if (!slides[idx]) return;
    setLoading(true);
    try {
      const _res = await fetch('/api/admin/pitch/rewrite', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_slide: slides[idx]})});
      const _json = await res.json();
      setSlides(_(arr) => arr.map(_(s, _i) => (i === idx ? {_...s, _title: json.title || s.title, _content: json.content || s.content} : s)));
    } catch (e) {} finally {_setLoading(false);}
  }, [slides]);

  const _addSlide = useCallback(_async () => {_setLoading(true);
    try {
      const _res = await fetch('/api/admin/pitch/add-slide', _{ method: 'POST'});
      const _json = await res.json();
      setSlides(_(arr) => [...arr, {_id: uid(), _title: json.title || 'New Slide', _content: json.content || ''}]);
      setActiveIndex(slides.length);
    } catch (e) {} finally {_setLoading(false);}
  }, [slides.length]);

  const _exportPdf = useCallback(_async () => {_setLoading(true);
    try {
      const _res = await fetch('/api/admin/pitch/export', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_slides, _format: 'pdf', _version: versionTag}) });
      const _blob = await res.blob();
      const _url = window.URL.createObjectURL(blob);
      const _a = document.createElement('a');
      a.href = url;
      a.download = `pitch-deck-${_versionTag || 'draft'}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (e) {} finally {_setLoading(false);}
  }, [slides, versionTag]);

  const _exportGoogleSlides = useCallback(_async () => {_setLoading(true);
    try {
      const _res = await fetch('/api/admin/pitch/export', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_slides, _format: 'gslides', _version: versionTag}) });
      const _json = await res.json();
      if (json && json.url) {_window.open(json.url, _'_blank');}
    } catch (e) {} finally {_setLoading(false);}
  }, [slides, versionTag]);

  const _updateActiveSlide = (_updates: Partial<Slide>) => {_setSlides(_(arr) => arr.map(_(s, _i) => (i === activeIndex ? { ...s, _...updates} : s)));
  };

  const _renderChartPreview = (_slide: Slide) => {_if (!slide.chart) return null;
    const { type, _data} = slide.chart;
    return (_<div className="mt-3">
        <div className="text-xs text-gray-500 dark:text-gray-400">Chart preview: {_type}</div>
        <div className="flex gap-2 items-end h-24 mt-2">
          {_type === 'bar' && data.map((d) => (
            <div key={d.label} className="bg-blue-500 w-6" style={_{ height: `${Math.max(4, _d.value)}px` }} title={_`${d.label}: ${_d.value}`} />
          ))}
          {_type === 'funnel' && (_<div className="w-full">
              <div className="flex flex-col gap-1">
                {data.map((d, _idx) => (
                  <div key={d.label} className="bg-purple-500 text-white text-xs px-2 py-1" style={_{ width: `${100 - idx * 12}%` }}>{_d.label}: {_d.value}</div>
                ))}
              </div>
            </div>
          )}
          {_type === 'timeline' && (_<div className="text-xs grid grid-cols-4 gap-2 w-full">
              {data.map((d) => (
                <div key={d.label} className="border p-1 rounded">
                  <div className="font-medium">{_d.label}</div>
                  <div>{_d.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (_<EnhancedLayout>
      <Head>
        <title>Pitch Generator - Admin</title>
      </Head>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Pitch Generator</h1>
          <div className="flex gap-2">
            <button onClick={_buildDeck} disabled={_loading} className="px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50">Generate Deck</button>
            <button onClick={_exportPdf} disabled={_loading || slides.length === 0} className="px-3 py-2 rounded bg-gray-900 text-white disabled:opacity-50">Download PDF</button>
            <button onClick={_exportGoogleSlides} disabled={_loading || slides.length === 0} className="px-3 py-2 rounded bg-green-600 text-white disabled:opacity-50">Export to Google Slides</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">Inputs</div>
              <label className="block text-sm mb-1">Company mission</label>
              <input value={_builder.mission} onChange={_(e) => setBuilder({ ...builder, _mission: e.target.value})} className="w-full border rounded px-2 py-1 bg-transparent" />
              <label className="block text-sm mt-3 mb-1">Current funding stage</label>
              <input value={_builder.fundingStage} onChange={_(_e) => setBuilder({ ...builder, _fundingStage: e.target.value})} className="w-full border rounded px-2 py-1 bg-transparent" />
              <label className="block text-sm mt-3 mb-1">Vision/goals</label>
              <textarea value={_builder.vision} onChange={_(_e) => setBuilder({ ...builder, _vision: e.target.value})} className="w-full border rounded px-2 py-1 bg-transparent" rows={_3} />
              <label className="block text-sm mt-3 mb-1">Round type</label>
              <select value={_builder.roundType} onChange={_(_e) => setBuilder({ ...builder, _roundType: e.target.value as any})} className="w-full border rounded px-2 py-1 bg-transparent">
                <option value="">Select</option>
                <option>Seed</option>
                <option>Series A</option>
                <option>Token Sale</option>
              </select>
              <label className="block text-sm mt-3 mb-1">Target raise amount</label>
              <input value={_builder.targetRaise} onChange={_(_e) => setBuilder({ ...builder, _targetRaise: e.target.value})} className="w-full border rounded px-2 py-1 bg-transparent" />

              <div onDrop={_onAssetDrop} onDragOver={_prevent} onDragEnter={_prevent} className="mt-4 border-2 border-dashed rounded-md p-4 text-center text-sm text-gray-500 dark:text-gray-400">
                Drag & drop logos, photos here
                <div className="text-xs mt-1">{_builder.assets.length} file(s) added</div>
              </div>
            </div>

            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">Auto Data</div>
              <button onClick={_autoFetchMetrics} className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">Refresh</button>
              <ul className="text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300">
                <li>Active users (30d)</li>
                <li>GMV, MRR, YoY growth</li>
                <li>Total completed projects</li>
                <li>Global reach</li>
                <li>Conversion funnel</li>
                <li>Notable clients or case studies</li>
              </ul>
            </div>

            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">History</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Version: {_versionTag || '—'}</div>
              <ul className="mt-2 space-y-1 text-sm">
                {_history.map(_(h) => (
                  <li key={h.id} className="flex justify-between border rounded px-2 py-1">
                    <span>{_h.version}</span>
                    <span className="text-gray-500 dark:text-gray-400">{_new Date(h.createdAt).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div className="font-medium">Slides</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{_slides.length} total</div>
              </div>
              <div className="mt-3 flex gap-3 overflow-x-auto py-2">
                {_slides.map(_(s, _i) => (_<SlidePreview key={s.id} slide={_s} isActive={_i === activeIndex} onClick={_() => setActiveIndex(i)} />
                ))}
                <button onClick={_addSlide} className="w-56 shrink-0 border rounded-md p-3 text-left bg-gray-50 dark:bg-gray-800 border-dashed border-2 text-gray-500">+ Add Slide</button>
              </div>
            </div>

            {_activeSlide && (_<div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
                <div className="flex items-center justify-between">
                  <input value={activeSlide.title} onChange={_(e) => updateActiveSlide({ title: e.target.value})} className="font-semibold text-lg bg-transparent border-b focus:outline-none" />
                  <div className="flex gap-2">
                    <button onClick={_() => rephraseSlide(activeIndex)} disabled={_loading} className="px-2 py-1 rounded bg-blue-600 text-white text-sm disabled:opacity-50">Rephrase</button>
                  </div>
                </div>
                <textarea value={_activeSlide.content} onChange={_(_e) => updateActiveSlide({ content: e.target.value})} className="w-full mt-3 border rounded px-2 py-1 bg-transparent" rows={_10} />

                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  <button onClick={_() => updateActiveSlide({ chart: { type: 'bar', _data: [{ label: 'Q1', _value: 20}, {_label: 'Q2', _value: 40}, {_label: 'Q3', _value: 60}, {_label: 'Q4', _value: 80}] } })} className="border rounded px-2 py-1">Bar Chart</button>
                  <button onClick={_() => updateActiveSlide({ chart: { type: 'funnel', _data: [{ label: 'Visitors', _value: 100}, {_label: 'Signups', _value: 40}, {_label: 'Projects', _value: 15}] } })} className="border rounded px-2 py-1">Funnel</button>
                  <button onClick={_() => updateActiveSlide({ chart: { type: 'timeline', _data: [{ label: 'MVP', _value: 2023}, {_label: 'Seed', _value: 2024}, {_label: 'Series A', _value: 2025}] } })} className="border rounded px-2 py-1">Timeline</button>
                </div>

                {_renderChartPreview(activeSlide)}
              </div>
            )}
          </div>
        </div>
      </div>
    </EnhancedLayout>
  );
}