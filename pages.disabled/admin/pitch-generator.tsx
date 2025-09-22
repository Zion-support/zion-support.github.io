:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useCallback, useMemo, useState } from 'react',
import Head from 'next/head',
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { GetServerSideProps  } from 'next';
import { requireAdminRole } from '../../utils/auth';
export type Slide = any;
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
export const getServerSideProps: GetServerSideProps = async ctx => {

export const getServerSideProps: GetServerSideProps = async ctx => {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const result = await requireAdminRole(ctx);
  // @ts-ignore
  if ('redirect' in result) return result;
  return result;
}
export default function PitchGenerator() {
  const [builder, setBuilder] = useState<BuilderState>({

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

=======
};
export default function PitchGenerator() {;
  const [builder, setBuilder] = useState<BuilderState>({;
    mission: '',;
    fundingStage: '',;
    vision: '',;
    roundType: '',;
    targetRaise: '',;
    assets: [],;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
export default function PitchGenerator() {
  const [builder, setBuilder] = useState<BuilderState>({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
export default function PitchGenerator() {
  const [builder, setBuilder] = useState<BuilderState>({
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
=======
}
export default function PitchGenerator() {
  const [builder, setBuilder] = useState<BuilderState>({
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    mission: '',
    fundingStage: '',
    vision: '',
    roundType: '',
=======
'
    mission: '','
    fundingStage: '','
    vision: '','
    roundType: '','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
    targetRaise: '',
<<<<<<< HEAD
    assets: [],;
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  });  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [versionTag, setVersionTag] = useState<string | null>(null);
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
import React, { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { GetServerSideProps } from 'next';
import { requireAdminRole } from '../../utils/auth';
export type Slide = {

}

function SlidePreview({ slide, isActive, onClick }: { slide: Slide, isActive: boolean, onClick: () => void }) {
  return (
    <button onClick={onClick} className={`w-56 shrink-0 border rounded-md p-3 text-left bg-white/70 dark:bg-gray-900 ${isActive ? 'ring-2 ring-blue-500' : 'border-gray-200 dark:border-gray-800'}`}>
      <div className="font-semibold text-sm line-clamp-2">{slide.title || 'Untitled'}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 mt-1 whitespace-pre-wrap">{slide.content || '—'}</div>
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    assets: [],
  });
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [versionTag, setVersionTag] = useState<string | null>(null);
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/metrics');
      const data = await res.json();
return data;
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
    const files = Array.from(e.dataTransfer.files || []);
    setBuilder((b) => ({ ...b, assets: [...b.assets, ...files] }))
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
return data;
    } catch (e) {
      return {};
    } finally {
      setLoading(false);
    }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }, []);

  const prevent = (e: React.DragEvent) => {}
    e.preventDefault();
    e.stopPropagation()
  };

  const operatorPrompt = useMemo(() => `Create a 10-slide investor pitch deck for a high-growth AI services marketplace. Include market size, traction, business model, team, token strategy, and call to action.`, []);

  const autoFetchMetrics = useCallback(async () => {}
    setLoading(true);
    try {;'
      const res = await fetch('/api/admin/pitch/metrics');
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
    >;
      <div className='font - semibold text - sm line - clamp - 2'>;
=======

    >;'
      <div className='font - semibold text - sm line - clamp - 2'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
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
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
  }, []);

  const buildDeck = useCallback(async () => {;
    setLoading(true);
    try {;
      const metrics = await autoFetchMetrics();
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      ]);
    } catch (e) {;
      // noop;
    } finally {;
      setLoading(false);
    }
  }, [autoFetchMetrics, builder, operatorPrompt]);
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD

:pages_backup/admin/pitch-generator.tsx
        });
        const json = await res.json ();
        set_slides (arr =>;
          arr.map ((s, i) =>;
            index === idx;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
    setLoading(true);
    try {'
      const res = await fetch('/api/admin/pitch/metrics');
      const data = await res.json();
      return data;
:pages_backup/admin/pitch-generator.tsx
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              ? {
                  ...s
                  title: json.title |s.title
                  content: json.content |s.content
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } catch (error) {
      return {  } catch (error) {
    console.error("Error:", error);
=======

    } catch (error) {}
      return {  } catch (error) {}
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
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
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    setLoading(true);
    try {;
      const res = await fetch('/api/admin/pitch/add-slide', { method: 'POST' });
      const json = await res.json();
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

      ]);
      setActiveIndex(slides && slides.length);
    } catch (e) {;
    } finally {;
      setLoading(false);    }

:pages_backup/admin/pitch-generator.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      const url = URL.createObjectURL(blob);
=======

      const url = URL.createObjectURL(blob);'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
      const a = document.createElement('a');
      a.href = url;'`
      a.download = `pitch-deck-${versionTag |'draft'}.pdf`;
      a.click();
<<<<<<< HEAD

<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
      const json = await res.json();
      });
      const json = await res && res.json();
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      if (json && json.url) {;
        window.open(json.url, '_blank');
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const updateActiveSlide = (updates: Partial<Slide>) => {
    setSlides((arr) => arr.map((s, i) => (i === activeIndex ? { ...s, ...updates } : s)))
  },
  const renderChartPreview = (slide: Slide) => {
    if (!slide.chart) return null,
    const { type, data } = slide.chart,
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
URL.revokeObjectURL(url);
    } catch (e) {
    } finally {
      setLoading(false);
    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
      });
      const json = await res && res.json();
      if (json && json.url) {;'
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return (
return (
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      <div className="mt-3">
        <div className="text-xs text-gray-500 dark:text-gray-400">Chart preview: {type}</div>
        <div className="flex gap-2 items-end h-24 mt-2">
          {type === 'bar' && data.map((d) => (
            <div key={d.label} className="bg-blue-500 w-6" style={{ height: `${Math.max(4, d.value)}px` }} title={`${d.label}: ${d.value}`} />
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          {type === 'funnel' && (
            <div className="w-full">
              <div className="flex flex-col gap-1">
                {data.map((d, idx) => (
<<<<<<< HEAD
<<<<<<< HEAD

              </div>
            </div>
          )}

          {type === 'timeline' && (

          {type === 'timeline' && (
            <div className="text-xs grid grid-cols-4 gap-2 w-full">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          {type === 'timeline' && (
            <div className="text-xs grid grid-cols-4 gap-2 w-full">
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

"
      <div className="mt-3">"
        <div className="text-xs text-gray-500 dark:text-gray-400">Chart preview: {type}</div>"
        <div className="flex gap-2 items-end h-24 mt-2">'
          {type === 'bar' && data.map((d) => ("`
            <div key={d.label} className="bg-blue-500 w-6" style={{ height: `${Math.max(4, d.value)}px` }} title={`${d.label}: ${d.value}`} />

'
          {type === 'funnel' && ("
            <div className="w-full">"
              <div className="flex flex-col gap-1">
                {data.map((d, idx) => (
"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
                  <div key={d.label} className="bg-purple-500 text-white text-xs px-2 py-1" style={{ width: `${100 - idx * 12}%` }}>{d.label}: {d.value}</div>
                ))  } catch (error) {"
    console.error("Error:", error);"
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

:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          {type === 'timeline' && (
            <div className="text-xs grid grid-cols-4 gap-2 w-full">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              {data.map((d) => (
                <div key={d.label} className="border p-1 rounded">
                  <div className="font-medium">{d.label}</div>
                  <div>{d.value}</div>
                </div>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </div>
      </div>
    )
  };

:pages_backup/admin/pitch-generator.tsx
  return (
=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              ))  } catch (error) {
    console.error("Error:", error);
=======

              ))  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/admin/pitch-generator.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
        </div>
      </div>
    )
  },

  return (

:pages_backup/admin/pitch-generator.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
    )
  };

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
);
  };

origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  return (

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
    <EnhancedLayout>
      <Head>
        <title>Pitch Generator - Admin</title>
      </Head>
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Pitch Generator</h1>
          <div className="flex gap-2">
            <button onClick={buildDeck} disabled={loading} className="px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50">Generate Deck</button>
            <button onClick={exportPdf} disabled={loading || slides.length === 0} className="px-3 py-2 rounded bg-gray-900 text-white disabled:opacity-50">Download PDF</button>
            <button onClick={exportGoogleSlides} disabled={loading || slides.length === 0} className="px-3 py-2 rounded bg-green-600 text-white disabled:opacity-50">Export to Google Slides</button>
          </div>
        </div>
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
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
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
                Drag & drop logos, photos here
                <div className="text-xs mt-1">{builder.assets.length} file(s) added</div>
              </div>
            </div>
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">Auto Data</div>
              <button onClick={autoFetchMetrics} className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">Refresh</button>
              <ul className="text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300">
:pages_backup/admin/pitch-generator.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
              <div className='font-medium mb-2'>Auto Data</div>
              <button
                onClick={autoFetchMetrics}
                className='px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm'
              >
                Refresh
              </button>
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
              <ul className='text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300'>                <li>Active users (30d)</li>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">Auto Data</div>
              <button onClick={autoFetchMetrics} className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">Refresh</button>
              <ul className="text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300">
:pages_backup/admin/pitch-generator.tsx
=======
                <li>Active users (30d)</li>

              <ul className='text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
                <li>Active users (30d)</li>
=======
=======
"
      <div className="space-y-6">"
        <div className="flex items-center justify-between">"
          <h1 className="text-2xl font-semibold">Pitch Generator</h1>"
          <div className="flex gap-2">"
            <button onClick={buildDeck} disabled={loading} className="px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50">Generate Deck</button>"
            <button onClick={exportPdf} disabled={loading || slides.length === 0} className="px-3 py-2 rounded bg-gray-900 text-white disabled:opacity-50">Download PDF</button>"
            <button onClick={exportGoogleSlides} disabled={loading || slides.length === 0} className="px-3 py-2 rounded bg-green-600 text-white disabled:opacity-50">Export to Google Slides</button>
          </div>
        </div>

                Drag & drop logos, photos here"
                <div className="text-xs mt-1">{builder.assets.length} file(s) added</div>
              </div>
            </div>

"
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">"
              <div className="font-medium mb-2">Auto Data</div>"
              <button onClick={autoFetchMetrics} className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">Refresh</button>"
              <ul className="text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300">
                <li>Active users (30d)</li>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              <ul className='text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300'>
origin/cursor/automate-test-improve-and-merge-code-2533
                <li>Active users (30d)</li>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
                <li>GMV, MRR, YoY growth</li>
                <li>Total completed projects</li>
                <li>Global reach</li>
                <li>Conversion funnel</li>
                <li>Notable clients or case studies</li>
              </ul>
            </div>
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
              <div className='font-medium mb-2'>History</div>
              <div className='text-xs text-gray-500 dark:text-gray-400'>
                Version: {versionTag |'—'}
                Version: {versionTag || '—'}
              </div>
              <ul className='mt-2 space-y-1 text-sm'>
                {history.map(h => (
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

              </div>'
              <ul className='mt-2 space-y-1 text-sm'>
                {history.map(h => (
:pages_backup/admin/pitch-generator.tsx
=======

                Version: {versionTag || '—'}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx

<div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
              <div className='font-medium mb-2'>History</div>
              <div className='text-xs text-gray-500 dark:text-gray-400'>
                Version: {versionTag |'—'}
origin/cursor/automate-test-improve-and-merge-code-2533
              </div>
              <ul className='mt-2 space-y-1 text-sm'>
                {history.map(h => (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
                className='mt-4 border-2 border-dashed rounded-md p-4 text-center text-sm text-gray-500 dark:text-gray-400'>;
                Drag & drop logos, photos here;'
                <div className='text-xs mt-1'>;
                  {builder && builder.assets.length} file(s) added;
                </div>;
              </div>;
            </div>;
'
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>;'
              <div className='font-medium mb-2'>Auto Data</div>;
:pages_backup/admin/pitch-generator.tsx
              <button
                onClick={autoFetchMetrics}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
'
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>;'
              <div className='font-medium mb-2'>History</div>;'
              <div className='text-xs text-gray-500 dark:text-gray-400'>;'
                Version: {versionTag || '—'}
              </div>;'
              <ul className='mt-2 space-y-1 text-sm'>;
                {history && history.map(h => (;

:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                  <li
                    key={h && h.id}
=======

                  <li;
                    key={h && h.id}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
                    className='flex justify-between border rounded px-2 py-1'>;
                    <span>{h && h.version}</span>;'
                    <span className='text-gray-500 dark:text-gray-400'>;
                      {new Date(h && h.createdAt).toLocaleString()}
                    </span>                  </li>;
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD

            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">History</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Version: {versionTag || '—'}</div>
              <ul className="mt-2 space-y-1 text-sm">
                {history.map((h) => (
                  <li key={h.id} className="flex justify-between border rounded px-2 py-1">
                    <span>{h.version}</span>
                    <span className="text-gray-500 dark:text-gray-400">{new Date(h.createdAt).toLocaleString()}</span>
                  </li>

:pages_backup/admin/pitch-generator.tsx
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
                ))}

              </ul>;
            </div>;
          </div>;
'
          <div className='lg:col-span-2 space-y-4'>;'
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>;'
              <div className='flex items-center justify-between'>;'
                <div className='font-medium'>Slides</div>;'
                <div className='text-sm text-gray-500 dark:text-gray-400'>;
                  {slides && slides.length} total;
                </div>;
              </div>;'
              <div className='mt-3 flex gap-3 overflow-x-auto py-2'>;
                {slides && slides.map((s, i) => (;

:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
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
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
                  <SlidePreview
=======
                  <SlidePreview;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
                    key={s && s.id}
                    slide={s}
                    isActive={i === activeIndex}
                    onClick={() => setActiveIndex(i)}
                  />;
                ))}
:pages_backup/admin/pitch-generator.tsx
                <button
                  onClick={addSlide}
<<<<<<< HEAD
<<<<<<< HEAD

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
:pages_backup/admin/pitch-generator.tsx
                <button;
                  onClick={addSlide}

:pages_backup/admin/pitch-generator.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
                <button;
                  on_click={add_slide}
                  className='w - 56 shrink - 0 border rounded - md p - 3 text - left bg - gray - 50 dark:bg - gray - 800 border - dashed border - 2 text - gray - 500';
                >;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
                  + Add Slide;
                </button>;
              </div>;
            </div>;
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
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
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
                    >;
                      Rephrase;
                    </button>;
                  </div>;
                </div>;
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD

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

:pages_backup/admin/pitch-generator.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                    }
=======

                    }'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
                    className='border rounded px-2 py-1';
                  >;
                    Bar Chart;
                  </button>;
:pages_backup/admin/pitch-generator.tsx
                  <button
<<<<<<< HEAD
<<<<<<< HEAD

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

:pages_backup/admin/pitch-generator.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                    }
=======
                  <button;
                    }'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
                    className='border rounded px-2 py-1';
                  >;
                    Funnel;
                  </button>;
:pages_backup/admin/pitch-generator.tsx
                  <button
<<<<<<< HEAD
<<<<<<< HEAD

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

:pages_backup/admin/pitch-generator.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                    }
=======
                  <button;
                    }'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
                    className='border rounded px-2 py-1';
                  >;
                    Timeline;
                  </button>;
                </div>              </div>;
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
}
}
}
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
}
}

:pages_backup/admin/pitch-generator.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

}
}
}
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">History</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Version: {versionTag || '—'}</div>
=======
"
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">"
              <div className="font-medium mb-2">History</div>'"
              <div className="text-xs text-gray-500 dark:text-gray-400">Version: {versionTag || '—'}</div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
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
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
          </div>;
        </div>;
      </main>;
    </>;
  );
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
      </div>
    </EnhancedLayout>
  )
}
                <textarea;
                  value={active_slide.content}
                  on_change={e => updateActiveSlide ({ content: e.target.value })}'
                  className='w - full mt - 3 border rounded px - 2 py - 1 bg - transparent';
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
                    <span className='text-gray-500 dark:text-gray-400'>
                      {new Date(h.createdAt).toLocaleString()}
                    </span>                  </li>
                ))}
              </ul>
            </div>
:pages_backup/admin/pitch-generator.tsx
          </div>'
          <div className='lg:col-span-2 space-y-4'>'
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>'
              <div className='flex items-center justify-between'>'
                <div className='font-medium'>Slides</div>'
                <div className='text-sm text-gray-500 dark:text-gray-400'>
                  {slides.length} total;
                </div>
              </div>'
              <div className='mt-3 flex gap-3 overflow-x-auto py-2'>
                {slides.map((s, i) => (
                  <SlidePreview;
                    key={s.id}
                    slide={s}
                    isActive={i === activeIndex}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
:pages_backup/admin/pitch-generator.tsx
                <button;
                  onClick={addSlide}'
                  className='w-56 shrink-0 border rounded-md p-3 text-left bg-gray-50 dark:bg-gray-800 border-dashed border-2 text-gray-500'
                >
                  + Add Slide;
                </button>
              </div>
            </div>
            {/* Active Slide Editor */}
:pages_backup/admin/pitch-generator.tsx
            {activeSlide && ('
              <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>'
                <div className='flex items-center justify-between'>
                  <input;
                    value={activeSlide.title}
                    onChange={e => updateActiveSlide({ title: e.target.value })}'
                    className='font-semibold text-lg bg-transparent border-b focus:outline-none'
                  />'
                  <div className='flex gap-2'>
                    <button;
                      onClick={() => rephraseSlide(activeIndex)}
                      disabled={loading}'
                      className='px-2 py-1 rounded bg-blue-600 text-white text-sm disabled:opacity-50'
                    >
                      Rephrase;
                    </button>
                  </div>
                </div>
                <textarea;
                  value={activeSlide.content}
                  onChange={e => updateActiveSlide({ content: e.target.value })}'
                  className='w-full mt-3 border rounded px-2 py-1 bg-transparent'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
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
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                    className='border rounded px - 2 py - 1';
                  >;
                    Timeline;
                  </button>;
                </div>              </div>)}
:pages_backup/admin/pitch-generator.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
          </div>;
        </div>;
</main>;
    </>);
;
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
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
:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
