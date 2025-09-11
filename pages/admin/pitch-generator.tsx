
  };
function SlidePreview(): any ({;
  slide,;
  isActive,;
  onClick,;
}: {;
  slide: Slide;
  isActive: boolean;
  onClick: () => void;
}) {;
    >;
      <div className='font-semibold text-sm line-clamp-2'>;
        {slide && slide.title || 'Untitled'}
      </div>;
      <div className='text-xs text-gray-500 dark:text-gray-400 line-clamp-3 mt-1 whitespace-pre-wrap'>;
        {slide && slide.content || '—'}
      </div>;
    </button>;
  );
export const getServerSideProps: GetServerSideProps = async ctx => {;
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const result = await requireAdminRole(ctx);
  // @ts-ignore;
  if ('redirect' in result) return result;
  return result;

};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function PitchGenerator() {;
  const [builder, setBuilder] = useState<BuilderState>({;
    mission: '',;
    fundingStage: '',;
    vision: '',;
    roundType: '',;
    targetRaise: '',;
    assets: [],;

export const getServerSideProps: GetServerSideProps = async ctx => {;
  const result = await requireAdminRole(ctx);
  // @ts-ignore
  if ('redirect' in result) return result;
  return result;
}
export default function PitchGenerator() {
  const [builder, setBuilder] = useState<BuilderState>({
    mission: ''
    fundingStage: ''
    vision: ''
    roundType: ''
    targetRaise: ''
    assets: []
=======
=======
=======
=======
    mission: '',
    fundingStage: '',
    vision: '',
    roundType: '',
    targetRaise: '',
    assets: [],;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  });  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [versionTag, setVersionTag] = useState<string | null>(null);
type BuilderState = {
  mission: string,
  fundingStage: string,
  vision: string,
  roundType: 'Seed' | 'Series A' | 'Token Sale' | '',
  targetRaise: string,
  assets: File[]
};

function uid() {
  return Math.random().toString(36).slice(2)
}

function SlidePreview({ slide, isActive, onClick }: { slide: Slide, isActive: boolean, onClick: () => void }) {
  return (
    <button onClick={onClick} className={`w-56 shrink-0 border rounded-md p-3 text-left bg-white/70 dark:bg-gray-900 ${isActive ? 'ring-2 ring-blue-500' : 'border-gray-200 dark:border-gray-800'}`}>
      <div className="font-semibold text-sm line-clamp-2">{slide.title || 'Untitled'}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 mt-1 whitespace-pre-wrap">{slide.content || '—'}</div>
    </button>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result = await requireAdminRole(ctx);
  // @ts-ignore
  if ('redirect' in result) return result;
  return result
};

export default function PitchGenerator() {
  const [builder, setBuilder] = useState<BuilderState>({ mission: '', fundingStage: '', vision: '', roundType: '', targetRaise: '', assets: [] }),
  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [versionTag, setVersionTag] = useState<string | null>(null);
  const [history, setHistory] = useState<{ id: string, createdAt: string, version: string }[]>([]),


  const activeSlide = slides[activeIndex];



function uid() {
  return Math.random().toString(36).slice(2)
}

  const prevent = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation()
  };=======

  const operatorPrompt = useMemo(() => `Create a 10-slide investor pitch deck for a high-growth AI services marketplace. Include market size, traction, business model, team, token strategy, and call to action.`, []);

  const autoFetchMetrics = useCallback(async () => {    setLoading(true);
    try {;
      const res = await fetch('/api/admin/pitch/metrics');

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

    try {
      const res = await fetch ('/api / admin / pitch / metrics');
      const data = await res.json ();
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======      return data;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (e) {;
      return {};
    } finally {;
      setLoading(false);    }
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result = await requireAdminRole(ctx)
  // @ts-ignore
  if ('redirect' in result) return result,
  return result
},

export default function PitchGenerator() {
  const [builder, setBuilder] = useState<BuilderState>({ mission: '', fundingStage: '', vision: '', roundType: '', targetRaise: '', assets: [] }),
  const [slides, setSlides] = useState<Slide[]>([]),
  const [activeIndex, setActiveIndex] = useState(0),
  const [loading, setLoading] = useState(false),
  const [versionTag, setVersionTag] = useState<string | null>(null),
  const [history, setHistory] = useState<{ id: string, createdAt: string, version: string }[]>([]),

  const activeSlide = slides[activeIndex]

  const onAssetDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(),
    const files = Array.from(e.dataTransfer.files || [])
    setBuilder((b) => ({ ...b, assets: [...b.assets, ...files] }))
  }, []),

  const prevent = (e: React.DragEvent) => {
    e.preventDefault(),
    e.stopPropagation()
  },

  const operatorPrompt = useMemo(() => `Create a 10-slide investor pitch deck for a high-growth AI services marketplace. Include market size, traction, business model, team, token strategy, and call to action.`, []),

  const autoFetchMetrics = useCallback(async () => {
    setLoading(true),
    try {
      const res = await fetch('/api/admin/pitch/metrics')
      const data = await res.json()

      return data
    } catch (e) {
      return {}
    } finally {
      setLoading(false)
    }
}, []);
=======

  }, []);
  const buildDeck = useCallback(async () => {;
    setLoading(true);
    try {;
      const metrics = await autoFetchMetrics();
=======

  }, []);

  const buildDeck = useCallback(async () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    setLoading(true);
    try {;
      const metrics = await autoFetchMetrics();


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ]);
    } catch (e) {;
      // noop;
    } finally {;
      setLoading(false);
    }
  }, [autoFetchMetrics, builder, operatorPrompt]);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
  const build_deck = useCallback (async () => {
    set_loading (true);
    try {
      const metrics = await autoFetchMetrics ();
      const res = await fetch ('/api / admin / pitch / generate', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          operator_prompt,
          inputs: builder,
          metrics,
        }),
      });
      const json = await res.json ();
      const new_slides: Slide[] = json.slides || [];      set_slides (new_slides);
      setActiveIndex (0);
      const v = json.version || `v${new Date ().toISOString ()}`;
      setVersionTag (v);
      set_history (h => [;
        { id: uid (), created_at: new Date ().toISOString (), version: v },
        ...h,
      ]);
    } catch (e) {
      // noop;
    } finally {
      set_loading (false);
    }
  }, [autoFetchMetrics, builder, operator_prompt]);
;
  const rephrase_slide = useCallback (
    async (idx: number) => {
      // Check condition
if (return) {
  $2
}
      set_loading (true),
      try {
        const res = await fetch ('/api / admin / pitch / rewrite', {
          method: 'POST',
          headers: { 'Content - Type': 'application / json' },
          body: JSON.stringify ({ slide: slides[idx] }),
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        });
        const json = await res.json ();
        set_slides (arr =>;
          arr.map ((s, i) =>;
            index === idx;
    },;
    [slides];
  );
  const addSlide = useCallback(async () => {;

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

      const json = await res && res.json();
      setSlides(arr => [;
        ...arr,;
        {;
          id: uid(),;
          title: json && json.title || 'New Slide',;
          content: json && json.content || '',;
        },;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ]);
      setActiveIndex(slides && slides.length);
    } catch (e) {;
    } finally {;
      setLoading(false);    }
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
      });
      const json = await res && res.json();
      if (json && json.url) {;
        window && window.open(json.url, '_blank');
      }
    } catch (e) {;
    } finally {;
      setLoading(false);    }
  }, [slides, versionTag]);

  const updateActiveSlide = (updates: Partial<Slide>) => {;
    setSlides(arr =>;
      arr && arr.map((s, i) => (i === activeIndex ? { ...s, ...updates } : s));
    );  };  }, [slides, versionTag]);
  const exportGoogleSlides = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/export', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          slides
          format: 'gslides'
          version: versionTag
        })
      });
    } catch (error) {
    } finally {;
      setLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [slides, versionTag]),;
  const exportGoogleSlides = useCallback(async () => {;
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/export', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slides, format: 'gslides', version: versionTag }) }),;
      const json = await res.json();
      if (json && json.url) {;
        window.open(json.url, '_blank');
      }
    } catch (e) {
    } finally {
      setLoading(false);    }
  }, [slides, versionTag]);
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
=======
=======

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
        }),;      });
      const json = await res && res.json();
      if (json && json.url) {;
        window && window.open(json.url, '_blank');
      }
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (


    return (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {type === 'timeline' && (
            <div className="text-xs grid grid-cols-4 gap-2 w-full">
              {data.map((d) => (
                <div key={d.label} className="border p-1 rounded">
                  <div className="font-medium">{d.label}</div>
                  <div>{d.value}</div>
                </div>


                Drag & drop logos, photos here
                <div className="text-xs mt-1">{builder.assets.length} file(s) added</div>
              </div>
            </div>
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
              <div className='font-medium mb-2'>Auto Data</div>
              <button
                onClick={autoFetchMetrics}
                className='px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm'
              >
                Refresh
              </button>
              <ul className='text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300'>                <li>Active users (30d)</li>
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">Auto Data</div>
              <button onClick={autoFetchMetrics} className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">Refresh</button>
              <ul className="text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300">
                <li>Active users (30d)</li>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                Version: {versionTag || '—'}


              </div>
              <ul className='mt-2 space-y-1 text-sm'>
                {history.map(h => (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>;
              <div className='font-medium mb-2'>Auto Data</div>;
              <button
                onClick={autoFetchMetrics}

                ))}
              </ul>;
            </div>;
          </div>;
=======

                ))}

              </ul>;
            </div>;
          </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className='lg:col-span-2 space-y-4'>;
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>;
              <div className='flex items-center justify-between'>;
                <div className='font-medium'>Slides</div>;
                <div className='text-sm text-gray-500 dark:text-gray-400'>;
                  {slides && slides.length} total;
                </div>;
              </div>;
              <div className='mt-3 flex gap-3 overflow-x-auto py-2'>;
                {slides && slides.map((s, i) => (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  <SlidePreview
                    key={s && s.id}
                    slide={s}
                    isActive={i === activeIndex}
                    onClick={() => setActiveIndex(i)}
                  />;
                ))}
                <button
                  onClick={addSlide}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  className='w-56 shrink-0 border rounded-md p-3 text-left bg-gray-50 dark:bg-gray-800 border-dashed border-2 text-gray-500'>;
=======

                  className='w-56 shrink-0 border rounded-md p-3 text-left bg-gray-50 dark:bg-gray-800 border-dashed border-2 text-gray-500'>;
=======        <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 6'>;
          <div className='lg:col - span - 1 space - y-4'>;
            <div className='border rounded - md p - 4 bg - white / 70 dark:bg - gray - 900'>;
              <div className='font - medium mb - 2'>Inputs</div>;
              <label className='block text - sm mb - 1'>Company mission</label>;
              <input;
                value={builder.mission}
                on_change={e =>;
                  set_builder ({ ...builder, mission: e.target.value });
                }
                className='w - full border rounded px - 2 py - 1 bg - transparent';
              />;
              <label className='block text - sm mt - 3 mb - 1'>;
                Current funding stage;
              </label>;
              <input;
                value={builder.funding_stage}
                on_change={e =>;
                  set_builder ({ ...builder, funding_stage: e.target.value });
                }
                className='w - full border rounded px - 2 py - 1 bg - transparent';
              />;
              <label className='block text - sm mt - 3 mb - 1'>Vision / goals</label>;
              <textarea;
                value={builder.vision}
                on_change={e =>;
                  set_builder ({ ...builder, vision: e.target.value });
                }
                className='w - full border rounded px - 2 py - 1 bg - transparent';
                rows={3}
              />;
              <label className='block text - sm mt - 3 mb - 1'>Round type</label>;
              <select;
                value={builder.round_type}
                on_change={e =>;
                  set_builder ({ ...builder, round_type: e.target.value as any });
                }
                className='w - full border rounded px - 2 py - 1 bg - transparent';
              >;
                <option value=''>Select</option>                <option > Seed</option>;
                <option > Series A</option>;
                <option > Token Sale</option>;
              </select>;
              <label className='block text - sm mt - 3 mb - 1'>;
                Target raise amount;
              </label>;
              <input;
                value={builder.target_raise}
                on_change={e =>;
                  set_builder ({ ...builder, target_raise: e.target.value });
                }
                className='w - full border rounded px - 2 py - 1 bg - transparent';
              />;
              <div;
                on_drop={onAssetDrop}
                onDragOver={prevent}
                onDragEnter={prevent}
                className='mt - 4 border - 2 border - dashed rounded - md p - 4 text - center text - sm text - gray - 500 dark:text - gray - 400';
              >;
                Drag & drop logos, photos here;
                <div className='text - xs mt - 1'>;
                  {builder.assets.length} file (s) added;
                </div>;
              </div>;
            </div>;
            <div className='border rounded - md p - 4 bg - white / 70 dark:bg - gray - 900'>;
              <div className='font - medium mb - 2'>Auto Data</div>;
              <button;
                on_click={autoFetchMetrics}
                className='px - 2 py - 1 rounded bg - gray - 100 dark:bg - gray - 800 text - sm';
              >;
                Refresh;
              </button>;
              <ul className='text - sm mt - 2 list - disc ml - 5 text - gray - 600 dark:text - gray - 300'>                <li > Active users (30d)</li>;
                <li > GMV, MRR, YoY growth</li>;
                <li > Total completed projects</li>;
                <li > Global reach</li>;
                <li > Conversion funnel</li>;
                <li > Notable clients or case studies</li>;
              </ul>;
            </div>;
            <div className='border rounded - md p - 4 bg - white / 70 dark:bg - gray - 900'>;
              <div className='font - medium mb - 2'>History</div>;
              <div className='text - xs text - gray - 500 dark:text - gray - 400'>;
                Version: {version_tag || '—'}
              </div>;
              <ul className='mt - 2 space - y-1 text - sm'>;
                {history.map (h => (
                  <li;
                    key={h.id}
                    className='flex justify - between border rounded px - 2 py - 1';
                  >;
                    <span>{h.version}</span>;
                    <span className='text - gray - 500 dark:text - gray - 400'>;
                      {new Date (h.created_at).toLocaleString ()}
                    </span>                  </li>))}
              </ul>;
            </div>;
          </div>;
          <div className='lg:col - span - 2 space - y-4'>;
            <div className='border rounded - md p - 4 bg - white / 70 dark:bg - gray - 900'>;
              <div className='flex items - center justify - between'>;
                <div className='font - medium'>Slides</div>;
                <div className='text - sm text - gray - 500 dark:text - gray - 400'>;
                  {slides.length} total;
                </div>;
              </div>;
              <div className='mt - 3 flex gap - 3 overflow - x-auto py - 2'>;
                {slides.map ((s, i) => (
                  <SlidePreview;
                    key={s.id}
                    slide={s}
                    is_active={index === active_index}
                    on_click={() => setActiveIndex (i)}
                  />))}
                <button;
                  on_click={add_slide}
                  className='w - 56 shrink - 0 border rounded - md p - 3 text - left bg - gray - 50 dark:bg - gray - 800 border - dashed border - 2 text - gray - 500';
                >;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  + Add Slide;
                </button>;
              </div>;
            </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    >;
                      Rephrase;
                    </button>;
                  </div>;
                </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                />;
=======

                />;
                <div className='mt-4 grid grid-cols-3 gap-2 text-sm'>;
                  <button
                    onClick={() =>;
                      updateActiveSlide({;
                        chart: {;
                          type: 'bar',;
                          data: [;
                            { label: 'Q1', value: 20 },;
                            { label: 'Q2', value: 40 },;
                            { label: 'Q3', value: 60 },;
                            { label: 'Q4', value: 80 },;
                          ],;
                        },;
                      });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    }
                    className='border rounded px-2 py-1';
                  >;
                    Bar Chart;
                  </button>;
                  <button
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    onClick={() =>;
                      updateActiveSlide({;
                        chart: {;
                          type: 'funnel',;
                          data: [;
                            { label: 'Visitors', value: 100 },;
                            { label: 'Signups', value: 40 },;
                            { label: 'Projects', value: 15 },;
                          ],;
                        },;
                      });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    }
                    className='border rounded px-2 py-1';
                  >;
                    Funnel;
                  </button>;
                  <button
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    onClick={() =>;
                      updateActiveSlide({;
                        chart: {;
                          type: 'timeline',;
                          data: [;
                            { label: 'MVP', value: 2023 },;
                            { label: 'Seed', value: 2024 },;
                            { label: 'Series A', value: 2025 },;
                          ],;
                        },;
                      });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    }
                    className='border rounded px-2 py-1';
                  >;
                    Timeline;
                  </button>;
                </div>              </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
          <div className="lg:col-span-2 space-y-4">
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div className="font-medium">Slides</div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {activeSlide && (
              <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
                <div className="flex items-center justify-between">
                  <input value={activeSlide.title} onChange={(e) => updateActiveSlide({ title: e.target.value })} className="font-semibold text-lg bg-transparent border-b focus:outline-none" />
                  <div className="flex gap-2">
                    <button onClick={() => rephraseSlide(activeIndex)} disabled={loading} className="px-2 py-1 rounded bg-blue-600 text-white text-sm disabled:opacity-50">Rephrase</button>
                  </div>
                </div>
                <textarea value={activeSlide.content} onChange={(e) => updateActiveSlide({ content: e.target.value })} className="w-full mt-3 border rounded px-2 py-1 bg-transparent" rows={10} />
=======

                {renderChartPreview(activeSlide)}
              </div>

            )}
          </div>
        </div>
</main>
    </>
  );


=======

}
}
}

}
}
}            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
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

==============


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>
    </EnhancedLayout>
  )
}
}
}
}
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
      </div>;
    </EnhancedLayout>;
  );
=======>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
