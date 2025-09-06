import React, { useState } from 'react';
import Head from 'next/head';
interface Slide {
  id: string;
  title: string;
  content: string;
  chart?: {
    type: string;
    data: Array<{ label: string; value: number }>;
  }
function SlidePreview({
  slide
  isActive
  onClick
}: {
  slide: Slide;
  isActive: boolean;
  onClick: () => void;
}) {
    >
      <div className='font-semibold text-sm line-clamp-2'>
        {slide.title |'Untitled'}
      </div>
      <div className='text-xs text-gray-500 dark:text-gray-400 line-clamp-3 mt-1 whitespace-pre-wrap'>
        {slide.content |'—'}
      </div>
    </button>
  );
  const result = await requireAdminRole(ctx);
  // @ts-ignore;
  if ('redirect' in result) return result;
  return result;
    mission: ''
    fundingStage: ''
    vision: ''
    roundType: ''
    targetRaise: ''
    assets: []
    mission: '',
    fundingStage: '',
    vision: '',
    roundType: '',
    targetRaise: '',
    assets: [],;
  });  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [versionTag, setVersionTag] = useState<string | null>(null);
  }, []);

  const prevent = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation()
  };

  const operatorPrompt = useMemo(() => `Create a 10-slide investor pitch deck for a high-growth AI services marketplace. Include market size, traction, business model, team, token strategy, and call to action.`, []);

  const autoFetchMetrics = useCallback(async () => {
    setLoading(true);
    try {;
      const res = await fetch('/api/admin/pitch/metrics');
      const data = await res && res.json();
    >;
      <div className='font - semibold text - sm line - clamp - 2'>;
        {slide.title || 'Untitled'}
      </div>;
      <div className='text - xs text - gray - 500 dark:text - gray - 400 line - clamp - 3 mt - 1 whitespace - pre - wrap'>;
        {slide.content || ''}
      </div>;
    </button>);
;
export const getServerSideProps: GetServerSideProps = async ctx => {
  const result = await requireAdminRole (ctx);
  // @ts - ignore;
  // Check condition
if (return result) {
  $2
}
  return result;
}
;

    try {
      const res = await fetch ('/api / admin / pitch / metrics');
      const data = await res.json ();
      return data;
    } catch (e) {
      return {}
    } finally {
      set_loading (false);    }
  }, []);
  const buildDeck = useCallback(async () => {
  }, []);

  const buildDeck = useCallback(async () => {;
    setLoading(true);
    try {;
      const metrics = await autoFetchMetrics();
      const res = await fetch('/api/admin/pitch/generate', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          operatorPrompt
          inputs: builder
          metrics
        })
      });
      const json = await res.json();
      const newSlides: Slide[] = json.slides |[];      setSlides(newSlides);
      setActiveIndex(0);
      const v = json.version |`v${new Date().toISOString()}`;
      setVersionTag(v);
      setHistory(h => [
        { id: uid(), createdAt: new Date().toISOString(), version: v }
        ...h
      const res = await fetch('/api/admin/pitch/generate', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          operatorPrompt,;
          inputs: builder,;
          metrics,;
        }),;
      });
      const json = await res && res.json();
      const newSlides: Slide[] = json && json.slides || [];      setSlides(newSlides);
      setActiveIndex(0);
      const v = json && json.version || `v${new Date().toISOString()}`;
      setVersionTag(v);
      setHistory(h => [;
        { id: uid(), createdAt: new Date().toISOString(), version: v },;
        ...h,;
      ]);
    } catch (e) {;
      // noop;
    } finally {;
      setLoading(false);
    }
  }, [autoFetchMetrics, builder, operatorPrompt]);
  const rephraseSlide = useCallback(
    async (idx: number) => {
      if (!slides[idx]) return;
      setLoading(true)
      try {
        const res = await fetch('/api/admin/pitch/rewrite', {
          method: 'POST'
          headers: { 'Content-Type': 'application/json' }
          body: JSON.stringify({ slide: slides[idx] })
        });
              ? {
                  ...s
                  title: json.title |s.title
                  content: json.content |s.content

    } catch (error) {
      return {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } finally {;
      setLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, []),;
  const buildDeck = useCallback(async () => {;
    setLoading(true);
    try {
      const metrics = await autoFetchMetrics();
      const res = await fetch('/api/admin/pitch/generate', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({;
          operatorPrompt,;
          inputs: builder,;
          metrics})}),;
      const json = await res.json();
      const newSlides: Slide[] = json.slides || [];
      setSlides(newSlides);
      setActiveIndex(0);
      const v = json.version || `v${new Date().toISOString()}`;
      setVersionTag(v);
      setHistory((h) => [{ id: uid(), createdAt: new Date().toISOString(), version: v }, ...h]);
    } catch (error) {
      // noop;
    } finally {;
      setLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [autoFetchMetrics, builder, operatorPrompt]),;
  const rephraseSlide = useCallback(async (idx: number) => {;
    if (!slides[idx]) return;
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/rewrite', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ slide: slides[idx] })}),;
      const json = await res.json();
      setSlides((arr) => arr.map((s, i) => (i === idx ? { ...s, title: json.title || s.title, content: json.content || s.content } : s)));
    } catch (error) {
    } finally {;
      setLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [slides]),;
  const addSlide = useCallback(async () => {;
    setLoading(true);
    try {;
      const res = await fetch('/api/admin/pitch/add-slide', { method: 'POST' });
      const json = await res.json();
      setSlides(arr => [
        ...arr
        {
          id: uid()
          title: json.title |'New Slide'
          content: json.content |''
        }
      ]);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `pitch-deck-${versionTag |'draft'}.pdf`;
      a.click();
  const exportGoogleSlides = useCallback(async () => {
    setLoading(true);
    try {
  }, [slides && slides.length]);

  const exportPdf = useCallback(async () => {;
    setLoading(true);
    try {;
      const res = await fetch('/api/admin/pitch/export', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ slides, format: 'pdf', version: versionTag }),;
      });      const blob = await res && res.blob();
      const url = URL && URL.createObjectURL(blob);
      const a = document && document.createElement('a');
      a && a.href = url;
      a && a.download = `pitch-deck-${versionTag || 'draft'}.pdf`;
      a && a.click();
      URL && URL.revokeObjectURL(url);
    } catch (e) {;
    } finally {;
      setLoading(false);    }
  }, [slides, versionTag]);
  const updateActiveSlide = (updates: Partial<Slide>) => {;
    setSlides(arr =>;
      arr && arr.map((s, i) => (i === activeIndex ? { ...s, ...updates } : s));
    );  };

  const renderChartPreview = (slide: Slide) => {;
    if (!slide && slide.chart) return null,;
    const { type, data } = slide && slide.chart;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    } finally {;
      setLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [slides, versionTag]),
  const updateActiveSlide = (updates: Partial<Slide>) => {
    setSlides((arr) => arr.map((s, i) => (i === activeIndex ? { ...s, ...updates } : s)))
  },
  const renderChartPreview = (slide: Slide) => {
    if (!slide.chart) return null,
    const { type, data } = slide.chart,
    return (
      <div className="mt-3">
        <div className="text-xs text-gray-500 dark:text-gray-400">Chart preview: {type}</div>
        <div className="flex gap-2 items-end h-24 mt-2">
          {type === 'bar' && data.map((d) => (
            <div key={d.label} className="bg-blue-500 w-6" style={{ height: `${Math.max(4, d.value)}px` }} title={`${d.label}: ${d.value}`} />
          {type === 'funnel' && (
            <div className="w-full">
              <div className="flex flex-col gap-1">
                {data.map((d, idx) => (

                  <div key={d.label} className="bg-purple-500 text-white text-xs px-2 py-1" style={{ width: `${100 - idx * 12}%` }}>{d.label}: {d.value}</div>
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </div>;
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {type === 'timeline' && (
            <div className="text-xs grid grid-cols-4 gap-2 w-full">
              {data.map((d) => (
                <div key={d.label} className="border p-1 rounded">
                  <div className="font-medium">{d.label}</div>
                  <div>{d.value}</div>
                </div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
      </div>
    )
  },
  return (
    <EnhancedLayout>
      <Head>
        <title>Pitch Generator - Admin</title>
      </Head>


      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Pitch Generator</h1>
          <div className="flex gap-2">
            <button onClick={buildDeck} disabled={loading} className="px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50">Generate Deck</button>
            <button onClick={exportPdf} disabled={loading || slides.length === 0} className="px-3 py-2 rounded bg-gray-900 text-white disabled:opacity-50">Download PDF</button>
            <button onClick={exportGoogleSlides} disabled={loading || slides.length === 0} className="px-3 py-2 rounded bg-green-600 text-white disabled:opacity-50">Export to Google Slides</button>
          </div>
        </div>
                Drag & drop logos, photos here
                <div className='text-xs mt-1'>
                  {builder.assets.length} file(s) added
                </div>
              </div>
            </div>
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">Auto Data</div>
              <button onClick={autoFetchMetrics} className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">Refresh</button>
              <ul className="text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300">
                <li>Active users (30d)</li>
                <li>GMV, MRR, YoY growth</li>
                <li>Total completed projects</li>
                <li>Global reach</li>
                <li>Conversion funnel</li>
                <li>Notable clients or case studies</li>
              </ul>
            </div>
                Version: {versionTag || '—'}
              </div>
              <ul className='mt-2 space-y-1 text-sm'>
                {history.map(h => (
                  <li
                    key={h && h.id}
                    className='flex justify-between border rounded px-2 py-1'>;
                    <span>{h && h.version}</span>;
                    <span className='text-gray-500 dark:text-gray-400'>;
                      {new Date(h && h.createdAt).toLocaleString()}
                    </span>                  </li>;
                  <SlidePreview
                    key={s && s.id}
                    slide={s}
                    isActive={i === activeIndex}
                    onClick={() => setActiveIndex(i)}
                  />;
                ))}
                <button
                  onClick={addSlide}
                  + Add Slide;
                </button>;
              </div>;
            </div>;
            {/* Active Slide Editor */}
            {active_slide && (
              <div className='border rounded - md p - 4 bg - white / 70 dark:bg - gray - 900'>;
                <div className='flex items - center justify - between'>;
                  <input;
                    value={active_slide.title}
                    on_change={e => updateActiveSlide ({ title: e.target.value })}
                    className='font - semibold text - lg bg - transparent border - b focus:outline - none';
                  />;
                  <div className='flex gap - 2'>;
                    <button;
                      on_click={() => rephrase_slide (active_index)}
                      disabled={loading}
                      className='px - 2 py - 1 rounded bg - blue - 600 text - white text - sm disabled:opacity - 50';
                    >;
                      Rephrase;
                    </button>;
                  </div>;
                </div>;
                    }
                    className='border rounded px-2 py-1';
                  >;
                    Bar Chart;
                  </button>;
                  <button
                    }
                    className='border rounded px-2 py-1';
                  >;
                    Funnel;
                  </button>;
                  <button
                    }
                    className='border rounded px-2 py-1';
                  >;
                    Timeline;
                  </button>;
                </div>              </div>;
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">History</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Version: {versionTag || '—'}</div>
              <ul className="mt-2 space-y-1 text-sm">
                {history.map((h) => (
                  <li key={h.id} className="flex justify-between border rounded px-2 py-1">
                    <span>{h.version}</span>
                    <span className="text-gray-500 dark:text-gray-400">{new Date(h.createdAt).toLocaleString()}</span>
                  </li>
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </ul>;
            </div>;
          </div>;
          <div className="lg:col-span-2 space-y-4">;
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">;
              <div className="flex items-center justify-between">;
                <div className="font-medium">Slides</div>;
                <div className="text-sm text-gray-500 dark:text-gray-400">{slides.length} total</div>;
              </div>;
              <div className="mt-3 flex gap-3 overflow-x-auto py-2">;
                {slides.map((s, i) => (;
                  <SlidePreview key={s.id} slide={s} isActive={i === activeIndex} onClick={() => setActiveIndex(i)} />;
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <button onClick={addSlide} className="w-56 shrink-0 border rounded-md p-3 text-left bg-gray-50 dark:bg-gray-800 border-dashed border-2 text-gray-500">+ Add Slide</button>;
              </div>;
            </div>;
            {activeSlide && (;
              <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">;
                <div className="flex items-center justify-between">;
                  <input value={activeSlide.title} onChange={(e) => updateActiveSlide({ title: e.target.value })} className="font-semibold text-lg bg-transparent border-b focus:outline-none" />;
                  <div className="flex gap-2">;
                    <button onClick={() => rephraseSlide(activeIndex)} disabled={loading} className="px-2 py-1 rounded bg-blue-600 text-white text-sm disabled:opacity-50">Rephrase</button>;
                  </div>;
                </div>;
                <textarea value={activeSlide.content} onChange={(e) => updateActiveSlide({ content: e.target.value })} className="w-full mt-3 border rounded px-2 py-1 bg-transparent" rows={10} />;
                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">;
                  <button onClick={() => updateActiveSlide({ chart: { type: 'bar', data: [{ label: 'Q1', value: 20 }, { label: 'Q2', value: 40 }, { label: 'Q3', value: 60 }, { label: 'Q4', value: 80 }] } })} className="border rounded px-2 py-1">Bar Chart</button>;
                  <button onClick={() => updateActiveSlide({ chart: { type: 'funnel', data: [{ label: 'Visitors', value: 100 }, { label: 'Signups', value: 40 }, { label: 'Projects', value: 15 }] } })} className="border rounded px-2 py-1">Funnel</button>;
                  <button onClick={() => updateActiveSlide({ chart: { type: 'timeline', data: [{ label: 'MVP', value: 2023 }, { label: 'Seed', value: 2024 }, { label: 'Series A', value: 2025 }] } })} className="border rounded px-2 py-1">Timeline</button>;
                </div>;
                {renderChartPreview(activeSlide)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </main>;
    </>;
  );
      </div>
    </EnhancedLayout>
  )
}
                <textarea;
                  value={active_slide.content}
                  on_change={e => updateActiveSlide ({ content: e.target.value })}
                  className='w - full mt - 3 border rounded px - 2 py - 1 bg - transparent';
                  rows={10}
                />;
                <div className='mt - 4 grid grid - cols - 3 gap - 2 text - sm'>;
                  <button;
                    on_click={() =>;
                      updateActiveSlide ({
                        chart: {
                          type: 'bar',
                          data: [;
                            { label: 'Q1', value: 20 },
                            { label: 'Q2', value: 40 },
                            { label: 'Q3', value: 60 },
                            { label: 'Q4', value: 80 },
                          ],
                        },
                      });
                    }
                    className='border rounded px - 2 py - 1';
                  >;
                    Bar Chart;
                  </button>;
                  <button;
                    on_click={() =>;
                      updateActiveSlide ({
                        chart: {
                          type: 'funnel',
                          data: [;
                            { label: 'Visitors', value: 100 },
                            { label: 'Signups', value: 40 },
                            { label: 'Projects', value: 15 },
                          ],
                        },
                      });
                    }
                    className='border rounded px - 2 py - 1';
                  >;
                    Funnel;
                  </button>;
                  <button;
                    on_click={() =>;
                      updateActiveSlide ({
                        chart: {
                          type: 'timeline',
                          data: [;
                            { label: 'MVP', value: 2023 },
                            { label: 'Seed', value: 2024 },
                            { label: 'Series A', value: 2025 },
                          ],
                        },
                      });
                    }
          </div>;
        </div>;
</main>;
    </>);
;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
