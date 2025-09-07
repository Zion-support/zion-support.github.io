import React, { useCallback, useMemo, useState } from 'react',
import Head from 'next/head',

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { GetServerSideProps  } from 'next';
import { requireAdminRole } from '../../utils/auth';
export type Slide = any;

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
import React, { useState } from 'react';
import Head from 'next/head';
interface Slide {
  id: string;
  title: string;
  content: string;
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
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
export const getServerSideProps: GetServerSideProps = async ctx => {

export const getServerSideProps: GetServerSideProps = async ctx => {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const result = await requireAdminRole(ctx);
  // @ts-ignore
  if ('redirect' in result) return result;
  return result;

    mission: ''
    fundingStage: ''
    vision: ''
    roundType: ''
    targetRaise: ''
    assets: []

};
export default function PitchGenerator() {;
  const [builder, setBuilder] = useState<BuilderState>({;
    mission: '',;
    fundingStage: '',;
    vision: '',;
    roundType: '',;
    targetRaise: '',;
    assets: [],;

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======
<<<<<<< HEAD
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
export const getServerSideProps: GetServerSideProps = async ctx => {

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
    mission: '',
    fundingStage: '',
    vision: '',
    roundType: '',

    targetRaise: '',
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx

    assets: [],
  });

=======
    assets: [],;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  });  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [versionTag, setVersionTag] = useState<string | null>(null);
import React, { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { GetServerSideProps } from 'next';
import { requireAdminRole } from '../../utils/auth';
export type Slide = {
  id: string,
  title: string,
  content: string,
  chart?: {
    type: 'bar' | 'funnel' | 'timeline',
    data: Array<{ label: string, value: number }>
  }
};

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [versionTag, setVersionTag] = useState<string | null>(null);

    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/metrics');
      const data = await res.json();

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======
  const activeSlide = slides[activeIndex];



<<<<<<< HEAD
  const [history, setHistory] = useState<
    { id: string; createdAt: string, version: string }[]
  >([]);
  const activeSlide = slides[activeIndex];
  const onAssetDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files |[]);
    setBuilder(b => ({ ...b, assets: [...b.assets, ...files] }));  }, []);
  const prevent = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation()
  }
  const operatorPrompt = useMemo(
    () =>
      `Create a 10-slide investor pitch deck for a high-growth AI services marketplace. Include market size, traction, business model, team, token strategy, and call to action.`
    []
  );
  const autoFetchMetrics = useCallback(async () => {
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { GetServerSideProps } from 'next';
import { requireAdminRole } from '../../utils/auth';
export type Slide = {
<<<<<<< HEAD
  id: string;
  title: string;
  content: string;
  chart?: {;
    type: 'bar' | 'funnel' | 'timeline';
    data: Array<{ label: string, value: number }>;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
},;
type BuilderState = {
  mission: string;
  fundingStage: string;
  vision: string;
  roundType: 'Seed' | 'Series A' | 'Token Sale' | '';
  targetRaise: string;
  assets: File[];
};
function uid() {;
  return Math.random().toString(36).slice(2);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
  id: string,
  title: string,
  content: string,
  chart?: {
    type: 'bar' | 'funnel' | 'timeline',
    data: Array<{ label: string, value: number }>
  }
};

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
function SlidePreview({ slide, isActive, onClick }: { slide: Slide, isActive: boolean, onClick: () => void }) {
  return (
    <button onClick={onClick} className={`w-56 shrink-0 border rounded-md p-3 text-left bg-white/70 dark:bg-gray-900 ${isActive ? 'ring-2 ring-blue-500' : 'border-gray-200 dark:border-gray-800'}`}>
      <div className="font-semibold text-sm line-clamp-2">{slide.title || 'Untitled'}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 mt-1 whitespace-pre-wrap">{slide.content || '—'}</div>
    </button>
  )
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export const getServerSideProps: GetServerSideProps = async (ctx) => {;
  const result = await requireAdminRole(ctx);
  // @ts-ignore;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
};
export default function PitchGenerator(req, res) {
  try {
  const [builder, setBuilder] = useState<BuilderState>({ mission: '', fundingStage: '', vision: '', roundType: '', targetRaise: '', assets: [] }),;
=======
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result = await requireAdminRole(ctx);
  // @ts-ignore
  if ('redirect' in result) return result;
  return result
};

export default function PitchGenerator() {
  const [builder, setBuilder] = useState<BuilderState>({ mission: '', fundingStage: '', vision: '', roundType: '', targetRaise: '', assets: [] }),
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [versionTag, setVersionTag] = useState<string | null>(null);
<<<<<<< HEAD
=======
  const [history, setHistory] = useState<{ id: string, createdAt: string, version: string }[]>([]),


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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
  const autoFetchMetrics = useCallback(async () => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
    const files = Array.from(e.dataTransfer.files || []);
    setBuilder((b) => ({ ...b, assets: [...b.assets, ...files] }))

  }, []);
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx

  const prevent = (e: React.DragEvent) => {}
=======
  const prevent = (e: React.DragEvent) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
    e.preventDefault();
    e.stopPropagation()
  };
  const operatorPrompt = useMemo(() => `Create a 10-slide investor pitch deck for a high-growth AI services marketplace. Include market size, traction, business model, team, token strategy, and call to action.`, []);
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx

  const autoFetchMetrics = useCallback(async () => {}
=======
  const autoFetchMetrics = useCallback(async () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
    setLoading(true);
    try {;'
      const res = await fetch('/api/admin/pitch/metrics');
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    >;
      <div className='font - semibold text - sm line - clamp - 2'>;

        {slide.title || 'Untitled'}
      </div>;'
      <div className='text - xs text - gray - 500 dark:text - gray - 400 line - clamp - 3 mt - 1 whitespace - pre - wrap'>;'
        {slide.content || '—'}
      </div>;
    </button>);
;
export const getServerSideProps: GetServerSideProps = async ctx => {};
  const result = await requireAdminRole (ctx);
  // @ts - ignore;
  // Check condition;
if (return result) {}
  $2;
}
  return result;
}
;

    try {'
      const res = await fetch ('/api / admin / pitch / metrics');
      const data = await res.json ();
      return data;
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } catch (e) {;
      return {};
    } finally {;
      setLoading(false);    }
<<<<<<< HEAD
      const data = await res.json();
    </button>
  )
}

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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
  }, []);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const buildDeck = useCallback(async () => {;
    setLoading(true);
    try {;
      const metrics = await autoFetchMetrics();
<<<<<<< HEAD
      const res = await fetch('/api/admin/pitch/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
operatorPrompt;
          inputs: builder,
          metrics})});
      const json = await res.json();
      const newSlides: Slide[] = json.slides || [],
      setSlides(newSlides);
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
=======

      const res = await fetch('/api/admin/pitch/generate', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
operatorPrompt,
          inputs: builder,
          metrics,
        }),
      });
      const json = await res.json();
      const newSlides: Slide[] = json.slides || [];
      setSlides(newSlides);
      setActiveIndex(0);
      const v = json.version |`v${new Date().toISOString()}`;
      setVersionTag(v);
setHistory(h => [
        { id: uid(), createdAt: new Date().toISOString(), version: v },
        ...h,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ]);
    } catch (e) {;
      // noop;
    } finally {;
      setLoading(false);
    }
  }, [autoFetchMetrics, builder, operatorPrompt]);
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
    setLoading(true);
    try {'
      const res = await fetch('/api/admin/pitch/metrics');
      const data = await res.json();
      return data;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        });
        const json = await res.json ();
        set_slides (arr =>;
          arr.map ((s, i) =>;
            index === idx;
  const [history, setHistory] = useState<{ id: string, createdAt: string, version: string }[]>([]),;
  const activeSlide = slides[activeIndex];
  const onAssetDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {;
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files || []);
    setBuilder((b) => ({ ...b, assets: [...b.assets, ...files] }));
  }, []),;
  const prevent = (e: React.DragEvent) => {;
    e.preventDefault();
    e.stopPropagation();
  };
  const operatorPrompt = useMemo(() => `Create a 10-slide investor pitch deck for a high-growth AI services marketplace. Include market size, traction, business model, team, token strategy, and call to action.`, []),;
  const autoFetchMetrics = useCallback(async () => {;
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/metrics');
      const data = await res.json();
      return data;
    } catch (e) {
      return {}
    } finally {
      setLoading(false);    }
  }, []);
  const buildDeck = useCallback(async () => {
    setLoading(true);
    try {
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
      ]);
    } catch (e) {
      // noop
    } finally {
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
        const json = await res.json();
        setSlides(arr =>
          arr.map((s, i) =>
            i === idx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
              ? {
                  ...s
                  title: json.title |s.title
                  content: json.content |s.content
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx

=======
<<<<<<< HEAD
    },;
    [slides];
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
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
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======
                }

    },;
    [slides];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
  const addSlide = useCallback(async () => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx

    } catch (error) {
      return {  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}
    } finally {;
      setLoading(false);
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, []),;
  const buildDeck = useCallback(async () => {;
    setLoading(true);
    try {}
      const metrics = await autoFetchMetrics();'
      const res = await fetch('/api/admin/pitch/generate', {;'
        method: 'POST',;'
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({;
          operatorPrompt,;
          inputs: builder,;
          metrics})}),;
      const json = await res.json();
      const newSlides: Slide[] = json.slides || [];
      setSlides(newSlides);
      setActiveIndex(0);`
      const v = json.version || `v${new Date().toISOString()}`;
      setVersionTag(v);
      setHistory((h) => [{ id: uid(), createdAt: new Date().toISOString(), version: v }, ...h]);
    } catch (error) {}
      // noop;
    } finally {;
      setLoading(false);
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [autoFetchMetrics, builder, operatorPrompt]),;
  const rephraseSlide = useCallback(async (idx: number) => {;
    if (!slides[idx]) return;
    setLoading(true);
    try {'
      const res = await fetch('/api/admin/pitch/rewrite', {;'
        method: 'POST',;'
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ slide: slides[idx] })}),;
      const json = await res.json();
      setSlides((arr) => arr.map((s, i) => (i === idx ? { ...s, title: json.title || s.title, content: json.content || s.content } : s)));
    } catch (error) {}
    } finally {;
      setLoading(false);
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [slides]),;
  const addSlide = useCallback(async () => {;

    setLoading(true);
    try {;'
      const res = await fetch('/api/admin/pitch/add-slide', { method: 'POST' });

      const json = await res && res.json();
      setSlides(arr => [;
        ...arr,;
        {;
          id: uid(),;'
          title: json && json.title || 'New Slide',;'
          content: json && json.content || '',;
        },;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ]);
      setActiveIndex(slides && slides.length);
    } catch (e) {;
    } finally {;
      setLoading(false);    }
<<<<<<< HEAD
      setHistory((h) => [{ id: uid(), createdAt: new Date().toISOString(), version: v }, ...h])
    } catch (e) {
      // noop
    } finally {
      setLoading(false)
    }
}, [autoFetchMetrics, builder, operatorPrompt]);
  const rephraseSlide = useCallback(async (idx: number) => {
    if (!slides[idx]) return;
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/rewrite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slide: slides[idx] })}),
const json = await res.json();
      setSlides((arr) => arr.map((s, i) => (i === idx ? { ...s, title: json.title || s.title, content: json.content || s.content } : s)))
    } catch (e) {
    } finally {
      setLoading(false)
    }
}, [slides]);
  const addSlide = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/add-slide', { method: 'POST' }),
      const json = await res.json();
      setSlides((arr) => [...arr, { id: uid(), title: json.title || 'New Slide', content: json.content || '' }]),
      setActiveIndex(slides.length)
    } catch (e) {
    } finally {
      setLoading(false)
    }
}, [slides.length]);
  const exportPdf = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/export', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slides, format: 'pdf', version: versionTag }) }),
      const blob = await res.blob();
                }
              : s
          )
        );
      } catch (e) {
      } finally {
        setLoading(false);
      }
    }
    [slides]
  );
  const addSlide = useCallback(async () => {
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
    try {
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
      setActiveIndex(slides.length);
    } catch (e) {
    } finally {
      setLoading(false);    }
  }, [slides.length]);
  const exportPdf = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/export', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ slides, format: 'pdf', version: versionTag })
      });      const blob = await res.blob();
      setSlides((arr) => [...arr, { id: uid(), title: json.title || 'New Slide', content: json.content || '' }]),;
      setActiveIndex(slides.length);
    } catch (error) {
    } finally {;
      setLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [slides.length]),;
  const exportPdf = useCallback(async () => {;
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/export', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slides, format: 'pdf', version: versionTag }) }),;
      const blob = await res.blob();
=======

                }
              : s
          )
        );
      } catch (e) {
      } finally {
        setLoading(false);
      }
    }
    [slides]
  );

  const addSlide = useCallback(async () => {
    setLoading(true);
    try {
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
      setActiveIndex(slides.length);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }, [slides.length]);
  const exportPdf = useCallback(async () => {
    setLoading(true);
    try {
const res = await fetch('/api/admin/pitch/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slides, format: 'pdf', version: versionTag }),
      });
      const blob = await res.blob();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;'`
      a.download = `pitch-deck-${versionTag |'draft'}.pdf`;
      a.click();

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

URL.revokeObjectURL(url);
    } catch (e) {
    } finally {
      setLoading(false);
    }
<<<<<<< HEAD
}, [slides, versionTag]);
  const exportGoogleSlides = useCallback(async () => {
    setLoading(true);
    try {
=======

  }, [slides, versionTag]);
  const exportGoogleSlides = useCallback(async () => {
    setLoading(true);
    try {

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
      });
      const json = await res && res.json();
      if (json && json.url) {;'
        window && window.open(json.url, '_blank');
      }
    } catch (e) {;
    } finally {;
      setLoading(false);    }
  }, [slides, versionTag]);
<<<<<<< HEAD
      const res = await fetch('/api/admin/pitch/export', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slides, format: 'gslides', version: versionTag }) }),
      const json = await res.json();
      if (json && json.url) {
        window.open(json.url, '_blank')
      }
    } catch (e) {
    } finally {
      setLoading(false)
    }
}, [slides, versionTag]);
  const updateActiveSlide = (updates: Partial<Slide>) => {
    setSlides((arr) => arr.map((s, i) => (i === activeIndex ? { ...s, ...updates } : s)))
  };
  const renderChartPreview = (slide: Slide) => {
    if (!slide.chart) return null
    const { type, data } = slide.chart;
=======

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
  const updateActiveSlide = (updates: Partial<Slide>) => {;
    setSlides(arr =>;
      arr && arr.map((s, i) => (i === activeIndex ? { ...s, ...updates } : s));
    );  };
<<<<<<< HEAD
  const renderChartPreview = (slide: Slide) => {;
    if (!slide && slide.chart) return null,;
    const { type, data } = slide && slide.chart;
      URL.revokeObjectURL(url);
    } catch (e) {
    } finally {
      setLoading(false);    }
  }, [slides, versionTag]);
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
  const updateActiveSlide = (updates: Partial<Slide>) => {
    setSlides(arr =>
      arr.map((s, i) => (i === activeIndex ? { ...s, ...updates } : s))
    );  }
  const renderChartPreview = (slide: Slide) => {
    if (!slide.chart) return null
    const { type, data } = slide.chart;

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

  const renderChartPreview = (slide: Slide) => {;
    if (!slide && slide.chart) return null,;
    const { type, data } = slide && slide.chart;

<div className='mt-3'>
        <div className='text-xs text-gray-500 dark:text-gray-400'>
          Chart preview: {type}
        </div>
        <div className='flex gap-2 items-end h-24 mt-2'>
          {type === 'bar' &&
            data.map(d => (
              <div
                key={d.label}
                className='bg-blue-500 w-6'
                style={{ height: `${Math.max(4, d.value)}px` }}
                title={`${d.label}: ${d.value}`}
              />
            ))}

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======
    return (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="mt-3">
        <div className="text-xs text-gray-500 dark:text-gray-400">Chart preview: {type}</div>
        <div className="flex gap-2 items-end h-24 mt-2">
          {type === 'bar' && data.map((d) => (
            <div key={d.label} className="bg-blue-500 w-6" style={{ height: `${Math.max(4, d.value)}px` }} title={`${d.label}: ${d.value}`} />
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
          {type === 'funnel' && (
            <div className="w-full">
              <div className="flex flex-col gap-1">
                {data.map((d, idx) => (

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
                  <div key={d.label} className="bg-purple-500 text-white text-xs px-2 py-1" style={{ width: `${100 - idx * 12}%` }}>{d.label}: {d.value}</div>
                ))  } catch (error) {"
    console.error("Error:", error);"
=======
<<<<<<< HEAD
                  <div key={d.label} className="bg-purple-500 text-white text-xs px-2 py-1" style={{ width: `${100 - idx * 12}%` }}>{d.label}: {d.value}</div>
                  <div
                    key={d.label}
                    className='bg-purple-500 text-white text-xs px-2 py-1'
                    style={{ width: `${100 - idx * 12}%` }}
                  >
                    {d.label}: {d.value}
                  </div>                ))}
              </div>
            </div>
          )}
                  <div key={d.label} className="bg-purple-500 text-white text-xs px-2 py-1" style={{ width: `${100 - idx * 12}%` }}>{d.label}: {d.value}</div>
=======

                  <div key={d.label} className="bg-purple-500 text-white text-xs px-2 py-1" style={{ width: `${100 - idx * 12}%` }}>{d.label}: {d.value}</div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                ))  } catch (error) {
    console.error("Error:", error);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </div>;
          )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
          {type === 'timeline' && (
            <div className="text-xs grid grid-cols-4 gap-2 w-full">

              {data.map((d) => (
                <div key={d.label} className="border p-1 rounded">
                  <div className="font-medium">{d.label}</div>
                  <div>{d.value}</div>
                </div>

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======
<<<<<<< HEAD
              ))}
            </div>;
          )}
=======
              disabled={loading || slides && slides.length === 0}
              className='px-3 py-2 rounded bg-gray-900 text-white disabled:opacity-50'>;
              Download PDF;
            </button>;
            <button
              onClick={exportGoogleSlides}
              disabled={loading || slides && slides.length === 0}
              className='px-3 py-2 rounded bg-green-600 text-white disabled:opacity-50'>;
              : s));
      } catch (e) {
      } finally {
        set_loading (false);
      }
    },
    [slides]);
  const add_slide = useCallback (async () => {
    set_loading (true);
    try {
      const res = await fetch ('/api / admin / pitch / add - slide', { method: 'POST' });
      const json = await res.json ();
      set_slides (arr => [;
        ...arr,
        {
          id: uid (),
          title: json.title || 'New Slide',
          content: json.content || '',
        },
      ]);
      setActiveIndex (slides.length);
    } catch (e) {
    } finally {
      set_loading (false);    }
  }, [slides.length]);
;
  const export_pdf = useCallback (async () => {
    set_loading (true);
    try {
      const res = await fetch ('/api / admin / pitch / export', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ slides, format: 'pdf', version: version_tag }),
      });      const blob = await res.blob ();
      const url = URL.createObjectURL (blob);
      const array = document.create_element ('a');
      a.href = url;
      a.download = `pitch - deck-${version_tag || 'draft'}.pdf`;
      a.click ();
      URL.revokeObjectURL (url);
    } catch (e) {
    } finally {
      set_loading (false);    }
  }, [slides, version_tag]);
;
  const exportGoogleSlides = useCallback (async () => {
    set_loading (true);
    try {
      const res = await fetch ('/api / admin / pitch / export', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          slides,
          format: 'gslides',
          version: version_tag,
        }),
      });
      const json = await res.json ();
      // Check condition
if ( {) {
  $2
}
        window.open (json.url, '_blank');
      }
    } catch (e) {
    } finally {
      set_loading (false);    }
  }, [slides, version_tag]);
;
  const updateActiveSlide = (updates: Partial < Slide>) =>: any {
    set_slides (arr =>;
      arr.map ((s, i) => (index === active_index ? { ...s, ...updates } : s)));  }
;
  const renderChartPreview = (slide: Slide) =>: any {
    // Check condition
if (return null, ) {
  $2
}
    const { type, data } = slide.chart;
    return (
      <div className='mt - 3'>;
        <div className='text - xs text - gray - 500 dark:text - gray - 400'>;
          Chart preview: {type}
        </div>;
        <div className='flex gap - 2 items - end h - 24 mt - 2'>;
          {type === 'bar' &&;
            data.map (d => (
              <div;
                key={d.label}
                className='bg - blue - 500 w - 6';
                style={{ height: `${Math.max (4, d.value)}px` }}
                title={`${d.label}: ${d.value}`}
              />))}
          {type === 'funnel' && (
            <div className='w - full'>;
              <div className='flex flex - col gap - 1'>;
                {data.map ((d, idx) => (
                  <div;
                    key={d.label}
                    className='bg - purple - 500 text - white text - xs px - 2 py - 1';
                    style={{ width: `${100 - idx * 12}%` }}
                  >;
                    {d.label}: {d.value}
                  </div>                ))}
              </div>;
            </div>)}
          {type === 'timeline' && (
            <div className='text - xs grid grid - cols - 4 gap - 2 w - full'>;
              {data.map (d => (
                <div key={d.label} className='border p - 1 rounded'>;
                  <div className='font - medium'>{d.label}</div>                  <div>{d.value}</div>;
                </div>))}
            </div>)}
        </div>;
      </div>);
  }
;
  return (
    <>;
      <Head>;
        <title > Pitch Generator - Admin</title>;
        <meta name="description" content="Generate pitch decks and presentations" />;
      </Head>;
      <div className='space - y-6'>;
        <div className='flex items - center justify - between'>;
          <h1 className='text - 2xl font - semibold'>Pitch Generator</h1>;
          <div className='flex gap - 2'>;
            <button;
              on_click={build_deck}
              disabled={loading}
              className='px - 3 py - 2 rounded bg - blue - 600 text - white disabled:opacity - 50';
            >;
              Generate Deck;
            </button>;
            <button;
              on_click={export_pdf}
              disabled={loading || slides.length === 0}
              className='px - 3 py - 2 rounded bg - gray - 900 text - white disabled:opacity - 50';
            >;
              Download PDF;
            </button>;
            <button;
              on_click={exportGoogleSlides}
              disabled={loading || slides.length === 0}
              className='px - 3 py - 2 rounded bg - green - 600 text - white disabled:opacity - 50';
            >;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Export to Google Slides;
            </button>;
          </div>;
        </div>;
<<<<<<< HEAD
                className='w-full border rounded px-2 py-1 bg-transparent';
              />;
=======

                className='w-full border rounded px-2 py-1 bg-transparent';
              />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div
                onDrop={onAssetDrop}
                onDragOver={prevent}
                onDragEnter={prevent}
<<<<<<< HEAD
=======

                className='px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm'
              >
                Refresh
              </button>
              <ul className='text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300'>                <li>Active users (30d)</li>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
        </div>
      </div>
    )
  };
        </div>
      </div>
    );
  }

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

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
              ))  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

        </div>
      </div>
    )
  },

  return (
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx

                  <div
                    key={d.label}
                    className='bg-purple-500 text-white text-xs px-2 py-1'
                    style={{ width: `${100 - idx * 12}%` }}
                  >
                    {d.label}: {d.value}
                  </div>
                ))}
              </div>
            </div>
          )}
          {type === 'timeline' && (
<div className='text-xs grid grid-cols-4 gap-2 w-full'>
              {data.map(d => (
                <div key={d.label} className='border p-1 rounded'>
                  <div className='font-medium'>{d.label}</div>
origin/cursor/automate-test-improve-and-merge-code-2533
                  <div>{d.value}</div>
                </div>
        </div>
      </div>

    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

        </div>
      </div>
    )
  },

  return (

);
  };

origin/cursor/automate-test-improve-and-merge-code-2533

  return (

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
    <EnhancedLayout>
      <Head>
        <title>Pitch Generator - Admin</title>
      </Head>

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======

<<<<<<< HEAD
      <div className='space-y-6'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Pitch Generator</h1>
          <div className='flex gap-2'>
            <button
              onClick={buildDeck}
              disabled={loading}
              className='px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50'
            >
              Generate Deck
            </button>
            <button
              onClick={exportPdf}
              disabled={loading |slides.length === 0}
              className='px-3 py-2 rounded bg-gray-900 text-white disabled:opacity-50'
            >
              Download PDF
            </button>
            <button
              onClick={exportGoogleSlides}
              disabled={loading |slides.length === 0}
              className='px-3 py-2 rounded bg-green-600 text-white disabled:opacity-50'
            >
              Export to Google Slides
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-1 space-y-4'>
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
              <div className='font-medium mb-2'>Inputs</div>
              <label className='block text-sm mb-1'>Company mission</label>
              <input
                value={builder.mission}
                onChange={e =>
                  setBuilder({ ...builder, mission: e.target.value })
                }
                className='w-full border rounded px-2 py-1 bg-transparent'
              />
              <label className='block text-sm mt-3 mb-1'>
                Current funding stage
              </label>
              <input
                value={builder.fundingStage}
                onChange={e =>
                  setBuilder({ ...builder, fundingStage: e.target.value })
                }
                className='w-full border rounded px-2 py-1 bg-transparent'
              />
              <label className='block text-sm mt-3 mb-1'>Vision/goals</label>
              <textarea
                value={builder.vision}
                onChange={e =>
                  setBuilder({ ...builder, vision: e.target.value })
                }
                className='w-full border rounded px-2 py-1 bg-transparent'
                rows={3}
              />
              <label className='block text-sm mt-3 mb-1'>Round type</label>
              <select
                value={builder.roundType}
                onChange={e =>
                  setBuilder({ ...builder, roundType: e.target.value as any })
                }
                className='w-full border rounded px-2 py-1 bg-transparent'
              >
                <option value=''>Select</option>                <option>Seed</option>
                <option>Series A</option>
                <option>Token Sale</option>
              </select>
              <label className='block text-sm mt-3 mb-1'>
                Target raise amount
              </label>
              <input
                value={builder.targetRaise}
                onChange={e =>
                  setBuilder({ ...builder, targetRaise: e.target.value })
                }
                className='w-full border rounded px-2 py-1 bg-transparent'
              />
              <div
                onDrop={onAssetDrop}
                onDragOver={prevent}
                onDragEnter={prevent}
                className='mt-4 border-2 border-dashed rounded-md p-4 text-center text-sm text-gray-500 dark:text-gray-400'
              >
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Pitch Generator</h1>
          <div className="flex gap-2">
            <button onClick={buildDeck} disabled={loading} className="px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50">Generate Deck</button>
            <button onClick={exportPdf} disabled={loading || slides.length === 0} className="px-3 py-2 rounded bg-gray-900 text-white disabled:opacity-50">Download PDF</button>
            <button onClick={exportGoogleSlides} disabled={loading || slides.length === 0} className="px-3 py-2 rounded bg-green-600 text-white disabled:opacity-50">Export to Google Slides</button>
          </div>
        </div>
<<<<<<< HEAD
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-1 space-y-4'>
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
              <div className='font-medium mb-2'>Inputs</div>
              <label className='block text-sm mb-1'>Company mission</label>
              <input
                value={builder.mission}
                onChange={e =>
                  setBuilder({ ...builder, mission: e.target.value })
                }
                className='w-full border rounded px-2 py-1 bg-transparent'
              />
              <label className='block text-sm mt-3 mb-1'>
                Current funding stage
              </label>
              <input
                value={builder.fundingStage}
                onChange={e =>
                  setBuilder({ ...builder, fundingStage: e.target.value })
                }
                className='w-full border rounded px-2 py-1 bg-transparent'
              />
              <label className='block text-sm mt-3 mb-1'>Vision/goals</label>
              <textarea
                value={builder.vision}
                onChange={e =>
                  setBuilder({ ...builder, vision: e.target.value })
                }
                className='w-full border rounded px-2 py-1 bg-transparent'
                rows={3}
              />
              <label className='block text-sm mt-3 mb-1'>Round type</label>
              <select
                value={builder.roundType}
                onChange={e =>
                  setBuilder({ ...builder, roundType: e.target.value as any })
                }
                className='w-full border rounded px-2 py-1 bg-transparent'
              >
                <option value=''>Select</option>                <option>Seed</option>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">Inputs</div>
              <label className="block text-sm mb-1">Company mission</label>
              <input value={builder.mission} onChange={(e) => setBuilder({ ...builder, mission: e.target.value })} className="w-full border rounded px-2 py-1 bg-transparent" />
              <label className="block text-sm mt-3 mb-1">Current funding stage</label>
              <input value={builder.fundingStage} onChange={(e) => setBuilder({ ...builder, fundingStage: e.target.value })} className="w-full border rounded px-2 py-1 bg-transparent" />
              <label className="block text-sm mt-3 mb-1">Vision/goals</label>
              <textarea value={builder.vision} onChange={(e) => setBuilder({ ...builder, vision: e.target.value })} className="w-full border rounded px-2 py-1 bg-transparent" rows={3} />
              <label className="block text-sm mt-3 mb-1">Round type</label>
              <select value={builder.roundType} onChange={(e) => setBuilder({ ...builder, roundType: e.target.value as any })} className="w-full border rounded px-2 py-1 bg-transparent">
                <option value="">Select</option>
                <option>Seed</option>
                <option>Series A</option>
                <option>Token Sale</option>
              </select>
              <label className="block text-sm mt-3 mb-1">Target raise amount</label>
              <input value={builder.targetRaise} onChange={(e) => setBuilder({ ...builder, targetRaise: e.target.value })} className="w-full border rounded px-2 py-1 bg-transparent" />
              <div onDrop={onAssetDrop} onDragOver={prevent} onDragEnter={prevent} className="mt-4 border-2 border-dashed rounded-md p-4 text-center text-sm text-gray-500 dark:text-gray-400">
=======

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-1 space-y-4'>
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
              <div className='font-medium mb-2'>Inputs</div>
              <label className='block text-sm mb-1'>Company mission</label>
              <input
                value={builder.mission}
                onChange={e =>
                  setBuilder({ ...builder, mission: e.target.value })
                }
                className='w-full border rounded px-2 py-1 bg-transparent'
              />
              <label className='block text-sm mt-3 mb-1'>
                Current funding stage
              </label>
              <input
                value={builder.fundingStage}
                onChange={e =>
                  setBuilder({ ...builder, fundingStage: e.target.value })
                }
                className='w-full border rounded px-2 py-1 bg-transparent'
              />
              <label className='block text-sm mt-3 mb-1'>Vision/goals</label>
              <textarea
                value={builder.vision}
                onChange={e =>
                  setBuilder({ ...builder, vision: e.target.value })
                }
                className='w-full border rounded px-2 py-1 bg-transparent'
                rows={3}
              />
              <label className='block text-sm mt-3 mb-1'>Round type</label>
              <select
                value={builder.roundType}
                onChange={e =>
                  setBuilder({ ...builder, roundType: e.target.value as any })
                }
                className='w-full border rounded px-2 py-1 bg-transparent'
              >
                <option value=''>Select</option>
                <option>Seed</option>
                <option>Series A</option>
                <option>Token Sale</option>
              </select>
<label className='block text-sm mt-3 mb-1'>
                Target raise amount
              </label>
              <input
                value={builder.targetRaise}
                onChange={e =>
                  setBuilder({ ...builder, targetRaise: e.target.value })
                }
                className='w-full border rounded px-2 py-1 bg-transparent'
              />
              <div
                onDrop={onAssetDrop}
                onDragOver={prevent}
                onDragEnter={prevent}
                className='mt-4 border-2 border-dashed rounded-md p-4 text-center text-sm text-gray-500 dark:text-gray-400'
              >

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
              <div className='font-medium mb-2'>Auto Data</div>
              <button
                onClick={autoFetchMetrics}
                className='px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm'
              >
                Refresh
              </button>

            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">Auto Data</div>
              <button onClick={autoFetchMetrics} className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">Refresh</button>
              <ul className="text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300">

                <li>Active users (30d)</li>
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
                <li>GMV, MRR, YoY growth</li>
                <li>Total completed projects</li>
                <li>Global reach</li>
                <li>Conversion funnel</li>
                <li>Notable clients or case studies</li>
              </ul>
            </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
              </div>'
              <ul className='mt-2 space-y-1 text-sm'>
                {history.map(h => (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx

<div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
              <div className='font-medium mb-2'>History</div>
              <div className='text-xs text-gray-500 dark:text-gray-400'>
                Version: {versionTag |'—'}
origin/cursor/automate-test-improve-and-merge-code-2533
              </div>
              <ul className='mt-2 space-y-1 text-sm'>
                {history.map(h => (
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx

                className='mt-4 border-2 border-dashed rounded-md p-4 text-center text-sm text-gray-500 dark:text-gray-400'>;
                Drag & drop logos, photos here;'
=======
                className='mt-4 border-2 border-dashed rounded-md p-4 text-center text-sm text-gray-500 dark:text-gray-400'>;
<<<<<<< HEAD
=======
                Drag & drop logos, photos here;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
                <div className='text-xs mt-1'>;
                  {builder && builder.assets.length} file(s) added;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
'
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>;'
=======
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
              <div className='font-medium mb-2'>Auto Data</div>;

                className='px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm'>;
                Refresh;
              </button>;'
              <ul className='text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300'>                <li>Active users (30d)</li>;
                <li>GMV, MRR, YoY growth</li>;
                <li>Total completed projects</li>;
                <li>Global reach</li>;
                <li>Conversion funnel</li>;
                <li>Notable clients or case studies</li>;
              </ul>;
            </div>;
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
'
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>;'
              <div className='font-medium mb-2'>History</div>;'
              <div className='text-xs text-gray-500 dark:text-gray-400'>;'
=======
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>;
              <div className='font-medium mb-2'>History</div>;
              <div className='text-xs text-gray-500 dark:text-gray-400'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
                Version: {versionTag || '—'}
              </div>;'
              <ul className='mt-2 space-y-1 text-sm'>;
                {history && history.map(h => (;

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
                  <li

                    className='flex justify-between border rounded px-2 py-1'>;
                    <span>{h && h.version}</span>;'
                    <span className='text-gray-500 dark:text-gray-400'>;
                      {new Date(h && h.createdAt).toLocaleString()}
                    </span>                  </li>;

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">History</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Version: {versionTag || '—'}</div>
              <ul className="mt-2 space-y-1 text-sm">
                {history.map((h) => (
                  <li key={h.id} className="flex justify-between border rounded px-2 py-1">
                    <span>{h.version}</span>
                    <span className="text-gray-500 dark:text-gray-400">{new Date(h.createdAt).toLocaleString()}</span>
                  </li>
<<<<<<< HEAD
                ))}
=======

                ))}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </ul>;
            </div>;
          </div>;
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
'
          <div className='lg:col-span-2 space-y-4'>;'
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>;'
              <div className='flex items-center justify-between'>;'
                <div className='font-medium'>Slides</div>;'
=======
          <div className='lg:col-span-2 space-y-4'>;
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>;
              <div className='flex items-center justify-between'>;
                <div className='font-medium'>Slides</div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
                <div className='text-sm text-gray-500 dark:text-gray-400'>;
                  {slides && slides.length} total;
                </div>;
              </div>;'
              <div className='mt-3 flex gap-3 overflow-x-auto py-2'>;
                {slides && slides.map((s, i) => (;
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
                    key={h.id}
                    className='flex justify-between border rounded px-2 py-1'
                  >
                    <span>{h.version}</span>
                    <span className='text-gray-500 dark:text-gray-400'>
                      {new Date(h.createdAt).toLocaleString()}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

<div className='lg:col-span-2 space-y-4'>
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
              <div className='flex items-center justify-between'>
                <div className='font-medium'>Slides</div>
                <div className='text-sm text-gray-500 dark:text-gray-400'>
                  {slides.length} total
                </div>
              </div>
              <div className='mt-3 flex gap-3 overflow-x-auto py-2'>
                {slides.map((s, i) => (

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
                  <SlidePreview

                    key={s && s.id}
                    slide={s}
                    isActive={i === activeIndex}
                    onClick={() => setActiveIndex(i)}
                  />;
                ))}
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx

=======
                <button
                  onClick={addSlide}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
                  className='w-56 shrink-0 border rounded-md p-3 text-left bg-gray-50 dark:bg-gray-800 border-dashed border-2 text-gray-500'>;
        <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 6'>;
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
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
                  onClick={addSlide}
=======
                  on_click={add_slide}
                  className='w - 56 shrink - 0 border rounded - md p - 3 text - left bg - gray - 50 dark:bg - gray - 800 border - dashed border - 2 text - gray - 500';
                >;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  + Add Slide;
                </button>;
              </div>;
            </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Active Slide Editor */}
            {active_slide && ('
              <div className='border rounded - md p - 4 bg - white / 70 dark:bg - gray - 900'>;'
                <div className='flex items - center justify - between'>;
                  <input;
                    value={active_slide.title}
                    on_change={e => updateActiveSlide ({ title: e.target.value })}'
                    className='font - semibold text - lg bg - transparent border - b focus:outline - none';
                  />;'
                  <div className='flex gap - 2'>;
                    <button;
                      on_click={() => rephrase_slide (active_index)}
                      disabled={loading}'
                      className='px - 2 py - 1 rounded bg - blue - 600 text - white text - sm disabled:opacity - 50';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    >;
                      Rephrase;
                    </button>;
                  </div>;
                </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    }

                    className='border rounded px-2 py-1';
                  >;
                    Bar Chart;
                  </button>;
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======
                  <button
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    }

                    className='border rounded px-2 py-1';
                  >;
                    Funnel;
                  </button>;
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======
                  <button
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    }

                    className='border rounded px-2 py-1';
                  >;
                    Timeline;
                  </button>;
                </div>              </div>;

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="lg:col-span-2 space-y-4">
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div className="font-medium">Slides</div>
<div className="text-sm text-gray-500 dark:text-gray-400">{slides.length} total</div>
              </div>
              <div className="mt-3 flex gap-3 overflow-x-auto py-2">
                {slides.map((s, i) => (
                  <SlidePreview key={s.id} slide={s} isActive={i === activeIndex} onClick={() => setActiveIndex(i)} />
                ))}
                <button onClick={addSlide} className="w-56 shrink-0 border rounded-md p-3 text-left bg-gray-50 dark:bg-gray-800 border-dashed border-2 text-gray-500">+ Add Slide</button>
              </div>
            </div>
            {activeSlide && (
              <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
                <div className="flex items-center justify-between">
                  <input value={activeSlide.title} onChange={(e) => updateActiveSlide({ title: e.target.value })} className="font-semibold text-lg bg-transparent border-b focus:outline-none" />
                  <div className="flex gap-2">
                    <button onClick={() => rephraseSlide(activeIndex)} disabled={loading} className="px-2 py-1 rounded bg-blue-600 text-white text-sm disabled:opacity-50">Rephrase</button>
                  </div>
                </div>
                <textarea value={activeSlide.content} onChange={(e) => updateActiveSlide({ content: e.target.value })} className="w-full mt-3 border rounded px-2 py-1 bg-transparent" rows={10} />
                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  <button onClick={() => updateActiveSlide({ chart: { type: 'bar', data: [{ label: 'Q1', value: 20 }, { label: 'Q2', value: 40 }, { label: 'Q3', value: 60 }, { label: 'Q4', value: 80 }] } })} className="border rounded px-2 py-1">Bar Chart</button>
                  <button onClick={() => updateActiveSlide({ chart: { type: 'funnel', data: [{ label: 'Visitors', value: 100 }, { label: 'Signups', value: 40 }, { label: 'Projects', value: 15 }] } })} className="border rounded px-2 py-1">Funnel</button>
                  <button onClick={() => updateActiveSlide({ chart: { type: 'timeline', data: [{ label: 'MVP', value: 2023 }, { label: 'Seed', value: 2024 }, { label: 'Series A', value: 2025 }] } })} className="border rounded px-2 py-1">Timeline</button>
                </div>
                {renderChartPreview(activeSlide)}
              </div>
<<<<<<< HEAD
=======

            )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




}
}
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">History</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Version: {versionTag || '—'}</div>

              <ul className="mt-2 space-y-1 text-sm">
                {history.map((h) => ("
                  <li key={h.id} className="flex justify-between border rounded px-2 py-1">
                    <span>{h.version}</span>"
                    <span className="text-gray-500 dark:text-gray-400">{new Date(h.createdAt).toLocaleString()}</span>
                  </li>
                ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </ul>;
            </div>;
          </div>;"
          <div className="lg:col-span-2 space-y-4">;"
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">;"
              <div className="flex items-center justify-between">;"
                <div className="font-medium">Slides</div>;"
                <div className="text-sm text-gray-500 dark:text-gray-400">{slides.length} total</div>;
              </div>;"
              <div className="mt-3 flex gap-3 overflow-x-auto py-2">;
                {slides.map((s, i) => (;
                  <SlidePreview key={s.id} slide={s} isActive={i === activeIndex} onClick={() => setActiveIndex(i)} />;
                ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                <button onClick={addSlide} className="w-56 shrink-0 border rounded-md p-3 text-left bg-gray-50 dark:bg-gray-800 border-dashed border-2 text-gray-500">+ Add Slide</button>;
              </div>;
            </div>;
            {activeSlide && (;"
              <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">;"
                <div className="flex items-center justify-between">;"
                  <input value={activeSlide.title} onChange={(e) => updateActiveSlide({ title: e.target.value })} className="font-semibold text-lg bg-transparent border-b focus:outline-none" />;"
                  <div className="flex gap-2">;"
                    <button onClick={() => rephraseSlide(activeIndex)} disabled={loading} className="px-2 py-1 rounded bg-blue-600 text-white text-sm disabled:opacity-50">Rephrase</button>;
                  </div>;
                </div>;"
                <textarea value={activeSlide.content} onChange={(e) => updateActiveSlide({ content: e.target.value })} className="w-full mt-3 border rounded px-2 py-1 bg-transparent" rows={10} />;"
                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">;'"
                  <button onClick={() => updateActiveSlide({ chart: { type: 'bar', data: [{ label: 'Q1', value: 20 }, { label: 'Q2', value: 40 }, { label: 'Q3', value: 60 }, { label: 'Q4', value: 80 }] } })} className="border rounded px-2 py-1">Bar Chart</button>;'"
                  <button onClick={() => updateActiveSlide({ chart: { type: 'funnel', data: [{ label: 'Visitors', value: 100 }, { label: 'Signups', value: 40 }, { label: 'Projects', value: 15 }] } })} className="border rounded px-2 py-1">Funnel</button>;'"
                  <button onClick={() => updateActiveSlide({ chart: { type: 'timeline', data: [{ label: 'MVP', value: 2023 }, { label: 'Seed', value: 2024 }, { label: 'Series A', value: 2025 }] } })} className="border rounded px-2 py-1">Timeline</button>;
                </div>;
                {renderChartPreview(activeSlide)  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx

=======
<<<<<<< HEAD
            )}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
          </div>;
        </div>;
      </main>;
    </>;
  );
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
      </div>
    </EnhancedLayout>
  )
}
                <textarea;
                  value={active_slide.content}
                  on_change={e => updateActiveSlide ({ content: e.target.value })}'
                  className='w - full mt - 3 border rounded px - 2 py - 1 bg - transparent';
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx

              </div>

              <ul className='mt-2 space-y-1 text-sm'>
                {history.map(h => (
                  <li;
                    key={h.id}'
                    className='flex justify-between border rounded px-2 py-1'
                  >
                    <span>{h.version}</span>'

=======
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
              <div className='font-medium mb-2'>History</div>
              <div className='text-xs text-gray-500 dark:text-gray-400'>
                Version: {versionTag |'—'}
                Version: {versionTag || '—'}
              </div>
              <ul className='mt-2 space-y-1 text-sm'>
                {history.map(h => (
                  <li
                    key={h.id}
                    className='flex justify-between border rounded px-2 py-1'
                  >
                    <span>{h.version}</span>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
                    <span className='text-gray-500 dark:text-gray-400'>
                      {new Date(h.createdAt).toLocaleString()}
                    </span>                  </li>
                ))}
              </ul>
            </div>
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx

=======
          </div>
          <div className='lg:col-span-2 space-y-4'>
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
              <div className='flex items-center justify-between'>
                <div className='font-medium'>Slides</div>
                <div className='text-sm text-gray-500 dark:text-gray-400'>
                  {slides.length} total
                </div>
              </div>
              <div className='mt-3 flex gap-3 overflow-x-auto py-2'>
                {slides.map((s, i) => (
                  <SlidePreview
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
                    key={s.id}
                    slide={s}
                    isActive={i === activeIndex}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx

=======
                <button
                  onClick={addSlide}
                  className='w-56 shrink-0 border rounded-md p-3 text-left bg-gray-50 dark:bg-gray-800 border-dashed border-2 text-gray-500'
                >
                  + Add Slide
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
                </button>
              </div>
            </div>
            {/* Active Slide Editor */}
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx

=======
            {activeSlide && (
              <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
                <div className='flex items-center justify-between'>
                  <input
                    value={activeSlide.title}
                    onChange={e => updateActiveSlide({ title: e.target.value })}
                    className='font-semibold text-lg bg-transparent border-b focus:outline-none'
                  />
                  <div className='flex gap-2'>
                    <button
                      onClick={() => rephraseSlide(activeIndex)}
                      disabled={loading}
                      className='px-2 py-1 rounded bg-blue-600 text-white text-sm disabled:opacity-50'
                    >
                      Rephrase
                    </button>
                  </div>
                </div>
                <textarea
                  value={activeSlide.content}
                  onChange={e => updateActiveSlide({ content: e.target.value })}
                  className='w-full mt-3 border rounded px-2 py-1 bg-transparent'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
                  rows={10}
                />;'
                <div className='mt - 4 grid grid - cols - 3 gap - 2 text - sm'>;
                  <button;
                    on_click={() =>;
                      updateActiveSlide ({}
                        chart: {'
                          type: 'bar',
                          data: [;'
                            { label: 'Q1', value: 20 },'
                            { label: 'Q2', value: 40 },'
                            { label: 'Q3', value: 60 },'
                            { label: 'Q4', value: 80 },
                          ],
                        },
                      });
                    }'
                    className='border rounded px - 2 py - 1';
                  >;
                    Bar Chart;
                  </button>;
                  <button;
                    on_click={() =>;
                      updateActiveSlide ({}
                        chart: {'
                          type: 'funnel',
                          data: [;'
                            { label: 'Visitors', value: 100 },'
                            { label: 'Signups', value: 40 },'
                            { label: 'Projects', value: 15 },
                          ],
                        },
                      });
                    }'
                    className='border rounded px - 2 py - 1';
                  >;
                    Funnel;
                  </button>;
                  <button;
                    on_click={() =>;
                      updateActiveSlide ({}
                        chart: {'
                          type: 'timeline',
                          data: [;'
                            { label: 'MVP', value: 2023 },'
                            { label: 'Seed', value: 2024 },'
                            { label: 'Series A', value: 2025 },
                          ],
                        },
                      });
                    }
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
                    className='border rounded px - 2 py - 1';
                  >;
                    Timeline;
                  </button>;
                </div>              </div>)}
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
          </div>;
        </div>;
</main>;
    </>);
;
<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx

=======
<<<<<<< HEAD
                    className='border rounded px-2 py-1'
                  >
                    Timeline
                  </button>
                </div>              </div>
            )}
          </div>
        </div>
</main>
    </>
  );

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD:pages.disabled/admin/pitch-generator.tsx
              </div>
              <ul className='mt-2 space-y-1 text-sm'>
                {history.map(h => (
                  <li
                    key={h.id}
                    className='flex justify-between border rounded px-2 py-1'
                  >
                    <span>{h.version}</span>
                    <span className='text-gray-500 dark:text-gray-400'>
                      {new Date(h.createdAt).toLocaleString()}
                    </span>                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='lg:col-span-2 space-y-4'>
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
              <div className='flex items-center justify-between'>
                <div className='font-medium'>Slides</div>
                <div className='text-sm text-gray-500 dark:text-gray-400'>
                  {slides.length} total
                </div>
              </div>
              <div className='mt-3 flex gap-3 overflow-x-auto py-2'>
                {slides.map((s, i) => (
                  <SlidePreview
                    key={s.id}
                    slide={s}
                    isActive={i === activeIndex}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
                <button
                  onClick={addSlide}
                  className='w-56 shrink-0 border rounded-md p-3 text-left bg-gray-50 dark:bg-gray-800 border-dashed border-2 text-gray-500'
                >
                  + Add Slide
                </button>
              </div>
            </div>
            {/* Active Slide Editor */}
            {activeSlide && (
              <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
                <div className='flex items-center justify-between'>
                  <input
                    value={activeSlide.title}
                    onChange={e => updateActiveSlide({ title: e.target.value })}
                    className='font-semibold text-lg bg-transparent border-b focus:outline-none'
                  />
                  <div className='flex gap-2'>
                    <button
                      onClick={() => rephraseSlide(activeIndex)}
                      disabled={loading}
                      className='px-2 py-1 rounded bg-blue-600 text-white text-sm disabled:opacity-50'
                    >
                      Rephrase
                    </button>
                  </div>
                </div>
                <textarea
                  value={activeSlide.content}
                  onChange={e => updateActiveSlide({ content: e.target.value })}
                  className='w-full mt-3 border rounded px-2 py-1 bg-transparent'

                    className='border rounded px-2 py-1'
                  >
                    Timeline
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
</main>
    </>
  );
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/admin/pitch-generator.tsx
