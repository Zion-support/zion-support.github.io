
=======
import Head from 'next / head';
;
interface Slide {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  id: string;
  title: string;
  content: string;
  chart?: {;
    type: string;
    data: Array<{ label: string; value: number }>;
}: {
  slide: Slide;
  is_active: boolean;
  on_click: () => void;
}) {
  const result = await requireAdminRole(ctx);
  // @ts-ignore;
  if ('redirect' in result) return result;
  return result;
  });  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [versionTag, setVersionTag] = useState<string | null>(null);
  const [history, setHistory] = useState<;
    { id: string; createdAt: string, version: string }[];
  >([]);
  const activeSlide = slides[activeIndex];

  const onAssetDrop = useCallback((e: React && React.DragEvent<HTMLDivElement>) => {;
    e && e.preventDefault();
    const files = Array && Array.from(e && e.dataTransfer.files || []);
    setBuilder(b => ({ ...b, assets: [...b && b.assets, ...files] }));  }, []);

  const prevent = (e: React && React.DragEvent) => {;
    e && e.preventDefault();
    e && e.stopPropagation(),;
  };

  const operatorPrompt = useMemo(;
    () =>;
      `Create a 10-slide investor pitch deck for a high-growth AI services marketplace. Include market size, traction, business model, team, token strategy, and call to action.`,;
    [];
  );
  const autoFetchMetrics = useCallback(async () => {;
=======
    const files = Array.from(e.dataTransfer.files || []);
    setBuilder((b) => ({ ...b, assets: [...b.assets, ...files] }))
  }, []);

  const prevent = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation()
  };

  const operatorPrompt = useMemo(() => `Create a 10-slide investor pitch deck for a high-growth AI services marketplace. Include market size, traction, business model, team, token strategy, and call to action.`, []);

  const autoFetchMetrics = useCallback(async () => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    setLoading(true);
    try {;
      const res = await fetch('/api/admin/pitch/metrics');
      const data = await res && res.json();
=======
    >;
      <div className='font - semibold text - sm line - clamp - 2'>;
        {slide.title || 'Untitled'}
      </div>;
      <div className='text - xs text - gray - 500 dark:text - gray - 400 line - clamp - 3 mt - 1 whitespace - pre - wrap'>;
        {slide.content || '—'}
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
export default /**
 * PitchGenerator - Function description
 */
function PitchGenerator() {
  const [builder, set_builder] = useState < BuilderState>({
    mission: '',
    funding_stage: '',
    vision: '',
    round_type: '',
    target_raise: '',
    assets: [],
  });  const [slides, set_slides] = useState < Slide[]>([]);
  const [active_index, setActiveIndex] = useState (0);
  const [loading, set_loading] = useState (false);
  const [version_tag, setVersionTag] = useState < string | null>(null);
  const [history, set_history] = useState<;
    { id: string; created_at: string, version: string }[];
  >([]);
  const active_slide = slides[active_index];
;
  const onAssetDrop = useCallback ((e: React.DragEvent < HTMLDivElement>) => {
    e.prevent_default ();
    const files = Array.from (e.data_transfer.files || []);
    set_builder (boolean => ({ ...b, assets: [...b.assets, ...files] }));  }, []);
;
  const prevent = (e: React.DragEvent) =>: any {
    e.prevent_default ();
    e.stop_propagation (),
  }
;
  const operator_prompt = useMemo (
    () =>;
      `Create a 10 - slide investor pitch deck for a high - growth AI services marketplace. Include market size, traction, business model, team, token strategy, and call to action.`,
    []);
  const autoFetchMetrics = useCallback (async () => {
    set_loading (true);
    try {
      const res = await fetch ('/api / admin / pitch / metrics');
      const data = await res.json ();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      return data;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }, []);

  const buildDeck = useCallback(async () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    setLoading(true);
    try {;
      const metrics = await autoFetchMetrics();
      setActiveIndex(0);
      const v = json.version |`v${new Date().toISOString()}`;
      setVersionTag(v);
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      ]);
    } catch (e) {;
      // noop;
    } finally {;
      setLoading(false);
    }
  }, [autoFetchMetrics, builder, operatorPrompt]);
        });
        const json = await res.json ();
        set_slides (arr =>;
          arr.map ((s, i) =>;
            index === idx;
              ? {
                  ...s
                  title: json.title |s.title
                  content: json.content |s.content
=======

  const rephraseSlide = useCallback(;
    async (idx: number) => {;
      if (!slides[idx]) return;
      setLoading(true),;
      try {;
        const res = await fetch('/api/admin/pitch/rewrite', {;
          method: 'POST',;
          headers: { 'Content-Type': 'application/json' },;
          body: JSON && JSON.stringify({ slide: slides[idx] }),;
        });
        const json = await res && res.json();
        setSlides(arr =>;
          arr && arr.map((s, i) =>;
            i === idx;
              ? {;
                  ...s,;
                  title: json && json.title || s && s.title,;
                  content: json && json.content || s && s.content,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                }
  );
  const addSlide = useCallback(async () => {;
    setLoading(true);
    try {;
      const res = await fetch('/api/admin/pitch/add-slide', { method: 'POST' });
      ]);
      setActiveIndex(slides && slides.length);
    } catch (e) {;
    } finally {;
      setLoading(false);    }
  }, [slides.length]);
  const exportPdf = useCallback(async () => {
    setLoading(true);
    try {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `pitch-deck-${versionTag |'draft'}.pdf`;
      a.click();
  }, [slides, versionTag]);
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

  const exportGoogleSlides = useCallback(async () => {;
    setLoading(true);
    try {;
      const res = await fetch('/api/admin/pitch/export', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          slides,;
          format: 'gslides',;
          version: versionTag,;
        }),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      const json = await res && res.json();
      if (json && json.url) {;
        window && window.open(json.url, '_blank');
      }
    } catch (e) {;
    } finally {;
      setLoading(false);    }
  }, [slides, versionTag]);
  const renderChartPreview = (slide: Slide) => {
    if (!slide.chart) return null
    const { type, data } = slide.chart;
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

  const updateActiveSlide = (updates: Partial<Slide>) => {;
    setSlides(arr =>;
      arr && arr.map((s, i) => (i === activeIndex ? { ...s, ...updates } : s));
    );  };

  const renderChartPreview = (slide: Slide) => {;
    if (!slide && slide.chart) return null,;
    const { type, data } = slide && slide.chart;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <div className='mt-3'>;
        <div className='text-xs text-gray-500 dark:text-gray-400'>;
          Chart preview: {type}
        </div>;
        <div className='flex gap-2 items-end h-24 mt-2'>;
          {type === 'bar' &&;
            data && data.map(d => (;
              <div
                key={d && d.label}
                className='bg-blue-500 w-6'
                style={{ height: `${Math && Math.max(4, d && d.value)}px` }}
                title={`${d && d.label}: ${d && d.value}`}
              />;
            ))}
          {type === 'funnel' && (;
            <div className='w-full'>;
              <div className='flex flex-col gap-1'>;
                {data && data.map((d, idx) => (;
                  <div
                    key={d && d.label}
                    className='bg-purple-500 text-white text-xs px-2 py-1'
                    style={{ width: `${100 - idx * 12}%` }}>;
                    {d && d.label}: {d && d.value}
                  </div>                ))}
              </div>;
            </div>;
          )}
          {type === 'timeline' && (;
            <div className='text-xs grid grid-cols-4 gap-2 w-full'>;
              {data && data.map(d => (;
                <div key={d && d.label} className='border p-1 rounded'>;
                  <div className='font-medium'>{d && d.label}</div>                  <div>{d && d.value}</div>;
                </div>;
              ))}
            </div>;
          )}
        </div>;
      </div>;
    );
  }

  return (
    <>;
      <Head>;
        <title>Pitch Generator - Admin</title>;
        <meta name="description" content="Generate pitch decks and presentations" />;
      </Head>;
      <div className='space-y-6'>;
        <div className='flex items-center justify-between'>;
          <h1 className='text-2xl font-semibold'>Pitch Generator</h1>;
          <div className='flex gap-2'>;
            <button
              onClick={buildDeck}
              disabled={loading}
              className='px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50'>;
              Generate Deck;
            </button>;
            <button
              onClick={exportPdf}
              Export to Google Slides;
            </button>;
          </div>;
        </div>;
              <input
                value={builder && builder.mission}
                onChange={e =>;
                  setBuilder({ ...builder, mission: e && e.target.value });
                }
                className='w-full border rounded px-2 py-1 bg-transparent';
              />;
              <label className='block text-sm mt-3 mb-1'>;
                Current funding stage;
              </label>;
              <input
                value={builder && builder.fundingStage}
                onChange={e =>;
                  setBuilder({ ...builder, fundingStage: e && e.target.value });
                }
                className='w-full border rounded px-2 py-1 bg-transparent';
              />;
              <label className='block text-sm mt-3 mb-1'>Vision/goals</label>;
              <textarea
                value={builder && builder.vision}
                onChange={e =>;
                  setBuilder({ ...builder, vision: e && e.target.value });
                }
                className='w-full border rounded px-2 py-1 bg-transparent';
                rows={3}
              />;
              <label className='block text-sm mt-3 mb-1'>Round type</label>;
              <select
                value={builder && builder.roundType}
                onChange={e =>;
                  setBuilder({ ...builder, roundType: e && e.target.value as any });
                }
                className='w-full border rounded px-2 py-1 bg-transparent';
              >;
                <option value=''>Select</option>                <option>Seed</option>;
                <option>Series A</option>;
                <option>Token Sale</option>;
              </select>;
              <label className='block text-sm mt-3 mb-1'>;
                Target raise amount;
              </label>;
              <input
                value={builder && builder.targetRaise}
                onChange={e =>;
                  setBuilder({ ...builder, targetRaise: e && e.target.value });
                }
              <div
                onDrop={onAssetDrop}
                onDragOver={prevent}
                onDragEnter={prevent}
                <li>GMV, MRR, YoY growth</li>
                <li>Total completed projects</li>
                <li>Global reach</li>
                <li>Conversion funnel</li>
                <li>Notable clients or case studies</li>
              </ul>
            </div>
                className='px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm'>;
                Refresh;
              </button>;
              <ul className='text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300'>                <li>Active users (30d)</li>;
                <li>GMV, MRR, YoY growth</li>;
                <li>Total completed projects</li>;
                <li>Global reach</li>;
                <li>Conversion funnel</li>;
                <li>Notable clients or case studies</li>;
              </ul>;
            </div>;

            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>;
              <div className='font-medium mb-2'>History</div>;
              <div className='text-xs text-gray-500 dark:text-gray-400'>;
                Version: {versionTag || '—'}
              </div>;
              <ul className='mt-2 space-y-1 text-sm'>;
                {history && history.map(h => (;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  <li
                    key={h && h.id}
                    className='flex justify-between border rounded px-2 py-1'>;
                    <span>{h && h.version}</span>;
                    <span className='text-gray-500 dark:text-gray-400'>;
                      {new Date(h && h.createdAt).toLocaleString()}
                    </span>                  </li>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                ))}
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
            {activeSlide && (;
              <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>;
                <div className='flex items-center justify-between'>;
                  <input
                    value={activeSlide && activeSlide.title}
                    onChange={e => updateActiveSlide({ title: e && e.target.value })}
                    className='font-semibold text-lg bg-transparent border-b focus:outline-none';
                  />;
                  <div className='flex gap-2'>;
                    <button
                      onClick={() => rephraseSlide(activeIndex)}
                      disabled={loading}
                      className='px-2 py-1 rounded bg-blue-600 text-white text-sm disabled:opacity-50';
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
            )}
          </div>;
        </div>;
      </main>;
    </>;
  );
=======
      </div>
    </EnhancedLayout>
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
                    className='border rounded px - 2 py - 1';
                  >;
                    Timeline;
                  </button>;
                </div>              </div>)}
          </div>;
        </div>;
</main>;
    </>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
