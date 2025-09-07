<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const result = await requireAdminRole(ctx);
  // @ts-ignore
  if ('redirect' in result) return result;
  return result;
<<<<<<< HEAD
}
export default function PitchGenerator() {
  const [builder, setBuilder] = useState<BuilderState>({

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======


  const result = await requireAdminRole(ctx);
  // @ts-ignore;
  if ('redirect' in result) return result;
  return result;
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD

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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD
    assets: [],;
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
    assets: [],;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
  });  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [versionTag, setVersionTag] = useState<string | null>(null);
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/metrics');
      const data = await res.json();
      return data;
    } catch (e) {
      return {}
    } finally {
      setLoading(false);    }
=======
<<<<<<< HEAD
  const [history, setHistory] = useState<;
    { id: string; createdAt: string, version: string }[];
  >([]);

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    assets: [],
  });
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [versionTag, setVersionTag] = useState<string | null>(null);
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
const [history, setHistory] = useState<
    { id: string; createdAt: string; version: string }[]
  >([]);

  const activeSlide = slides[activeIndex];
  const onAssetDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files || []);
setBuilder(b => ({ ...b, assets: [...b.assets, ...files] }));
  }, []);

  const prevent = (e: React.DragEvent) => {
    e.preventDefault();
e.stopPropagation();
  };

  const operatorPrompt = useMemo(
    () =>
      `Create a 10-slide investor pitch deck for a high-growth AI services marketplace. Include market size, traction, business model, team, token strategy, and call to action.`
    []
  );

  const autoFetchMetrics = useCallback(async () => {
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setLoading(true);
    try {
      const res = await fetch('/api/admin/pitch/metrics');
      const data = await res.json();
<<<<<<< HEAD
      return data;

=======

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

    } catch (e) {;
      return {};
    } finally {;
      setLoading(false);    }

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
  }, []);

  const buildDeck = useCallback(async () => {;
    setLoading(true);
    try {;
      const metrics = await autoFetchMetrics();
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
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
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx


<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
        });
        const json = await res.json ();
        set_slides (arr =>;
          arr.map ((s, i) =>;
            index === idx;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
    setLoading(true);
    try {'
      const res = await fetch('/api/admin/pitch/metrics');
      const data = await res.json();
      return data;
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              ? {
                  ...s
                  title: json.title |s.title
                  content: json.content |s.content
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  const addSlide = useCallback(async () => {
=======
                }

    },;
    [slides];

  );
  const addSlide = useCallback(async () => {;
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    setLoading(true);
    try {;
      const res = await fetch('/api/admin/pitch/add-slide', { method: 'POST' });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    setLoading(true);
    try {;
      const res = await fetch('/api/admin/pitch/add-slide', { method: 'POST' });
      const json = await res.json();

=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
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


<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    setLoading(true);
    try {;
      const res = await fetch('/api/admin/pitch/add-slide', { method: 'POST' });
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
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
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const url = URL.createObjectURL(blob);
=======

      const url = URL.createObjectURL(blob);'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
      const a = document.createElement('a');
      a.href = url;'`
      a.download = `pitch-deck-${versionTag |'draft'}.pdf`;
      a.click();
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD

<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
      const json = await res.json();
      });
      const json = await res && res.json();
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      if (json && json.url) {;
        window.open(json.url, '_blank');

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
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
=======
=======
      URL.revokeObjectURL(url)
    } catch (e) {
    } finally {
      setLoading(false)
    }

=======
  const updateActiveSlide = (updates: Partial<Slide>) => {
    setSlides((arr) => arr.map((s, i) => (i === activeIndex ? { ...s, ...updates } : s)))
  },
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD


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
const res = await fetch('/api/admin/pitch/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slides
          format: 'gslides'
          version: versionTag
        })
      });
      const json = await res.json();
      if (json && json.url) {
        window.open(json.url, '_blank');
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }, [slides, versionTag]);
  const updateActiveSlide = (updates: Partial<Slide>) => {
setSlides(arr =>
      arr.map((s, i) => (i === activeIndex ? { ...s, ...updates } : s))
    );
  };

origin/cursor/automate-test-improve-and-merge-code-2533
  const renderChartPreview = (slide: Slide) => {
    if (!slide.chart) return null,
    const { type, data } = slide.chart,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return (
<<<<<<< HEAD


    return (
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
    return (
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD


    return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <div className="mt-3">
        <div className="text-xs text-gray-500 dark:text-gray-400">Chart preview: {type}</div>
        <div className="flex gap-2 items-end h-24 mt-2">
          {type === 'bar' && data.map((d) => (
            <div key={d.label} className="bg-blue-500 w-6" style={{ height: `${Math.max(4, d.value)}px` }} title={`${d.label}: ${d.value}`} />
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          ))}
=======
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
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
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          {type === 'funnel' && (
            <div className="w-full">
              <div className="flex flex-col gap-1">
                {data.map((d, idx) => (
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
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
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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


<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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

              Export to Google Slides;
            </button>;
          </div>;
        </div>;

                className='w-full border rounded px-2 py-1 bg-transparent';
              />;


              <div
                onDrop={onAssetDrop}
                onDragOver={prevent}
                onDragEnter={prevent}

                className='px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm'
              >
                Refresh
              </button>
              <ul className='text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300'>                <li>Active users (30d)</li>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'
          {type === 'timeline' && ("
            <div className="text-xs grid grid-cols-4 gap-2 w-full">

              {data.map((d) => ("
                <div key={d.label} className="border p-1 rounded">"
                  <div className="font-medium">{d.label}</div>
                  <div>{d.value}</div>
                </div>

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
        </div>
      </div>
    )
  };

<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return (
=======
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
        </div>
      </div>
    );
  }

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
        </div>
      </div>
    )
  },


  return (


<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
=======
=======
          {type === 'timeline' && (
            <div className="text-xs grid grid-cols-4 gap-2 w-full">
              {data.map((d) => (
                <div key={d.label} className="border p-1 rounded">
                  <div className="font-medium">{d.label}</div>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
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
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD
    )
  };



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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



        </div>
      </div>
    )
  },
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
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

=======
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
                Drag & drop logos, photos here
                <div className="text-xs mt-1">{builder.assets.length} file(s) added</div>
              </div>
            </div>
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">Auto Data</div>
              <button onClick={autoFetchMetrics} className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">Refresh</button>
              <ul className="text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300">
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
              <ul className='text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300'>                <li>Active users (30d)</li>
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              <ul className='text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300'>                <li>Active users (30d)</li>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">Auto Data</div>
              <button onClick={autoFetchMetrics} className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm">Refresh</button>
              <ul className="text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300">
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
=======
              <ul className='text-sm mt-2 list-disc ml-5 text-gray-600 dark:text-gray-300'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx

              </div>'
              <ul className='mt-2 space-y-1 text-sm'>
                {history.map(h => (
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
              <button
                onClick={autoFetchMetrics}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              <button;
                onClick={autoFetchMetrics}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
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


<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                  <li
=======
                  <li
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                  <li
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx

            <div className="border rounded-md p-4 bg-white/70 dark:bg-gray-900">
              <div className="font-medium mb-2">History</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Version: {versionTag || '—'}</div>
              <ul className="mt-2 space-y-1 text-sm">
                {history.map((h) => (
                  <li key={h.id} className="flex justify-between border rounded px-2 py-1">
                    <span>{h.version}</span>
                    <span className="text-gray-500 dark:text-gray-400">{new Date(h.createdAt).toLocaleString()}</span>
                  </li>

<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
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

<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
=======
                  <li
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
                <button
                  onClick={addSlide}
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx

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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
                <button;
                  onClick={addSlide}

<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
                    >;
                      Rephrase;
                    </button>;
                  </div>;
                </div>;
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx

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

<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
                    }
=======

                    }'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
                    className='border rounded px-2 py-1';
                  >;
                    Bar Chart;
                  </button>;
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
                  <button
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx

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

<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
                    }
=======
                  <button;
                    }'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
                    className='border rounded px-2 py-1';
                  >;
                    Funnel;
                  </button>;
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
                  <button
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx

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

<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
}
}
}
=======

=======

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

            )}
<<<<<<< HEAD
          </div>
        </div>
</main>
    </>
  );

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
}
}

<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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

            )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx

}
}
}
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
          </div>;
        </div>;
      </main>;
    </>;
  );
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
              <div className='font-medium mb-2'>History</div>
              <div className='text-xs text-gray-500 dark:text-gray-400'>
<<<<<<< HEAD
                Version: {versionTag |'—'}
=======
                Version: {versionTag || '—'}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              </div>
=======

              </div>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
                    key={s.id}
                    slide={s}
                    isActive={i === activeIndex}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
                <button;
                  onClick={addSlide}'
                  className='w-56 shrink-0 border rounded-md p-3 text-left bg-gray-50 dark:bg-gray-800 border-dashed border-2 text-gray-500'
                >
                  + Add Slide;
=======
                <button
                  onClick={addSlide}
                  className='w-56 shrink-0 border rounded-md p-3 text-left bg-gray-50 dark:bg-gray-800 border-dashed border-2 text-gray-500'
                >
                  + Add Slide
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
                </button>
              </div>
            </div>
            {/* Active Slide Editor */}
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
                    className='border rounded px - 2 py - 1';
                  >;
                    Timeline;
                  </button>;
                </div>              </div>)}
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
          </div>;
        </div>;
</main>;
    </>);
;
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            <div className='border rounded-md p-4 bg-white/70 dark:bg-gray-900'>
              <div className='font-medium mb-2'>History</div>
              <div className='text-xs text-gray-500 dark:text-gray-400'>
                Version: {versionTag |'—'}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
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
<<<<<<< HEAD:pages_backup/admin/pitch-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/admin/pitch-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/admin/pitch-generator.tsx
=======




  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/admin/pitch-generator.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/admin/pitch-generator.tsx
