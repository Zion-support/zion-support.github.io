import React, { useMemo, useState } from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx

pr-12325
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2 } from 'lucide-react';
import { buildPrintableHtml } from '../../utils/export/buildHtml';
import type { BookProject, BookChapter, VisualAsset } from '../../utils/book/bookTypes';
import { defaultChapters } from '../../utils/book/defaultOutline';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
const initialProject: BookProject = {
  meta: {
    title: 'Zion OS: Building the Civilization Protocol',
    subtitle: 'AI. Talent. Trust.',
    author: 'Founder Name',
    isbn: '',
    publisher: 'Zion Tech Solutions'},
  chapters: defaultChapters,
  visuals: {
    timelineImages: [],
    daoVoteCharts: [],
    uiScreens: [],
    quoteCallouts: [
      { text: 'The marketplace is the new operating system.', attribution: 'Founder' }]}},

<<<<<<< HEAD
=======
=======
const initialProject: BookProject = {;,
  meta: {
    title: 'Zion OS: Building the Civilization Protocol;,
  subtitle: 'AI. Talent. Trust.
    author: 'Founder Name;,
  isbn: publisher: 'Zion Tech Solutions';}
  chapters: defaultChapters
import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2  } from 'lucide-react';
import { buildPrintableHtml  } from '../../utils/export/buildHtml';
const initialProject: BookProject;
origin/cursor/automate-test-improve-and-merge-code-2533:components/book/BookBuilder.tsx
  visuals: {
    timelineImages: []
    daoVoteCharts: []
    uiScreens: []
    quoteCallouts: [
{
        text: 'The marketplace is the new operating system.';,
        attribution: 'Founder';,
      },
    ],
  },
};
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
    reader.readAsDataURL(file)
  })
}

export default function BookBuilder() {
<<<<<<< HEAD
  const [project, setProject] = useState<BookProject>(initialProject);
  const [pageSize, setPageSize] = useState<'A4' | 'LETTER'>('LETTER');
  const [busy, setBusy] = useState<boolean>(false);

  const coverPreview = useMemo(() => {
=======
<<<<<<< HEAD
  const [project, setProject] = useState<BookProject>(initialProject);
  const [pageSize, setPageSize] = useState<'A4' | 'LETTER'>('LETTER');
  const [busy, setBusy] = useState<boolean>(false);
=======
reader.readAsDataURL(file);
  });

export default function BookBuilder() {
    return (
<div className='w-full max-w-2xl border rounded-lg overflow-hidden shadow bg-white text-gray-900'>
        <div className='p-8 space-y-2'>
          <div className='text-xs uppercase tracking-widest opacity-60'>
            Zion OS
          </div>
          <h1 className='text-3xl font-extrabold leading-tight'>
            {project.meta.title}
          </h1>
          <div className='text-lg opacity-80'>{project.meta.subtitle}</div>
          <div className='pt-6 text-sm opacity-70'>
            By {project.meta.author}
          </div>
          {project.meta.isbn ? (
>>>>>>> origin/chore/fix-lint-and-merge
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
            <div className='pt-4'>
              <img
                alt='ISBN barcode'
                className='h-16'
<<<<<<< HEAD
          </div>;
          {project.meta.isbn ? (<div className='pt-4'>;
              <img;
                alt='ISBN barcode';
                className='h-16';
=======
<<<<<<< HEAD
:components/book/BookBuilder.tsx
  const [project, setProject] = useState<BookProject>(initialProject)
  const [pageSize, setPageSize] = useState<'A4' | 'LETTER'>('LETTER')
  const [busy, setBusy] = useState<boolean>(false)
  const coverPreview = useMemo(() => {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [project, setProject] = useState<BookProject>(initialProject),
  const [pageSize, setPageSize] = useState<'A4' | 'LETTER'>('LETTER'),
  const [busy, setBusy] = useState<boolean>(false),
<<<<<<< HEAD

  const coverPreview = useMemo(() => {
=======
  const coverPreview = useMemo_(() => {
<<<<<<< HEAD
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
    return (
      <div className="w-full max-w-2xl border rounded-lg overflow-hidden shadow bg-white text-gray-900">
        <div className="p-8 space-y-2">
          <div className="text-xs uppercase tracking-widest opacity-60">Zion OS</div>
          <h1 className="text-3xl font-extrabold leading-tight">{project.meta.title}</h1>
          <div className="text-lg opacity-80">{project.meta.subtitle}</div>
          <div className="pt-6 text-sm opacity-70">By {project.meta.author}</div>
          {project.meta.isbn ? (
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
:components/book/BookBuilder.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
            <div className="pt-4">
              <img
                alt="ISBN barcode"
                className="h-16"
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
            <div className=&quot;pt-4&quot;>              <img,
alt=&quot;ISBN barcode&quot;
                className=&quot;h-16&quot;
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======

            <div className=&quot;pt-4&quot;>              <img,
alt=&quot;ISBN barcode&quot;
                className=&quot;h-16&quot;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                src={`/api/barcode/isbn?code=${encodeURIComponent(project.meta.isbn)}`}
              />;
            </div>;
          ) : null}
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx

        </div>
      </div>
    )
  }, [project]);

  async function handleGenerateWithAI() {
    setBusy(true);
    try {
      const res = await fetch('/api/book/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ meta: project.meta, chapters: project.chapters })}),
      const data = await res.json();
      if (data?.chapters) {
        setProject((p) => ({ ...p, chapters: data.chapters }))
      }
    } finally {
      setBusy(false)
    }
  }

  async function handleExportPdf() {
    setBusy(true);
    try {
      const html = buildPrintableHtml(project);
      const res = await fetch('/api/book/export/pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html, pageSize })});
=======
origin/cursor/automate-test-improve-and-merge-code-2533:components/book/BookBuilder.tsx
>>>>>>> merged-prs-20250907-203621
                src={`/api/barcode/isbn?code=${encodeURIComponent(project.meta.isbn)}`}
              />
            </div>
          ) : null}
        </div>
      </div>
<<<<<<< HEAD
    )
  }, [project]);
=======
);
  }, [project]);

  async function handleGenerateWithAI() {
    setBusy(true)
    try {
      const res = await fetch('/api/book/generate', {
        method: 'POST';,
        headers: { 'Content-Type': 'application/json' ;},
body: JSON.stringify({
          meta: project.meta;,
          chapters: project.chapters;,
        }),
      });
      const data = await res.json();
      if (data?.chapters) {
        setProject(p => ({ ...p, chapters: data.chapters ;}));
      }
    } finally {
      setBusy(false);
    }
  }
  async function handleExportPdf() {
    setBusy(true)
    try {
      const html = buildPrintableHtml(project)
      const res = await fetch('/api/book/export/pdf', {
        method: 'POST';,
        headers: { 'Content-Type': 'application/json' ;},
body: JSON.stringify({ html;, pageSize }),
      });
>>>>>>> origin/chore/fix-lint-and-merge
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'zion-os-book.pdf';
      a.click();
<<<<<<< HEAD
      URL.revokeObjectURL(url)
    } finally {
      setBusy(false)
    }
  }

  async function handleExportEpub() {
    setBusy(true);
    try {
      const res = await fetch('/api/book/export/epub', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ project })}),
=======
URL.revokeObjectURL(url);
    } finally {
      setBusy(false);
    }
  }
  async function handleExportEpub() {
    setBusy(true)
    try {
      const res = await fetch('/api/book/export/epub', {
        method: 'POST';,
        headers: { 'Content-Type': 'application/json' ;},
body: JSON.stringify({ project ;}),
      });
>>>>>>> origin/chore/fix-lint-and-merge
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'zion-os-book.epub';
      a.click();
<<<<<<< HEAD
      URL.revokeObjectURL(url)
    } finally {
      setBusy(false)
    }
  }

  async function onUploadImages(files: FileList | null, target: keyof VisualAsset[]) {
    if (!files) return;
    const arr = await Promise.all(Array.from(files).map(fileToBase64));
    setProject((p) => ({
      ...p;
      visuals: {
        ...p.visuals;
        [target as any]: [...(p.visuals[target as any] as string[]), ...arr]}}))
=======
URL.revokeObjectURL(url);
    } finally {
      setBusy(false);
    }
  }

  async function onUploadImages(
    files: FileList | null;,
    target: keyof VisualAsset[]
  ) {
    if (!files) return;
    const arr = await Promise.all(Array.from(files).map(fileToBase64));
    setProject(p => ({
      ...p,
      visuals: {
        ...p.visuals,
        [target as any]: [...(p.visuals[target as any] as string[]), ...arr],
      },
    }));
>>>>>>> origin/chore/fix-lint-and-merge
  }

  return (
<<<<<<< HEAD
    <div className='space-y-8'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Book Builder</h1>
        <div className='flex gap-2'>
          <button
            className='btn btn-sm btn-outline'
<<<<<<< HEAD
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx

            <div className='pt-4>
              <img

            onClick={handleGenerateWithAI}
            disabled={busy}
          >
>>>>>>> merged-prs-20250907-203621

  async function handleGenerateWithAI() {
    setBusy(true);
    try {
      const res = await fetch('/api/book/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ meta: project.meta, chapters: project.chapters })}),
      const data = await res.json();
      if (data?.chapters) {
        setProject((p) => ({ ...p, chapters: data.chapters }))
      }
    } finally {
      setBusy(false)
    }
  }

  async function handleExportPdf() {
    setBusy(true);
    try {
      const html = buildPrintableHtml(project);
      const res = await fetch('/api/book/export/pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html, pageSize })});
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'zion-os-book.pdf';
      a.click();
      URL.revokeObjectURL(url)
    } finally {
      setBusy(false)
    }
  }

  async function handleExportEpub() {
    setBusy(true);
    try {
      const res = await fetch('/api/book/export/epub', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ project })}),
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'zion-os-book.epub';
      a.click();
      URL.revokeObjectURL(url)
    } finally {
      setBusy(false)
    }
  }

  async function onUploadImages(files: FileList | null, target: keyof VisualAsset[]) {
    if (!files) return;
    const arr = await Promise.all(Array.from(files).map(fileToBase64));
    setProject((p) => ({
      ...p;
      visuals: {
        ...p.visuals;
        [target as any]: [...(p.visuals[target as any] as string[]), ...arr]}}))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Book Builder</h1>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-outline" onClick={handleGenerateWithAI} disabled={busy}>
            <Wand2 className="w-4 h-4 mr-1" /> AI Assist
          </button>
          <select
            className="border rounded px-2 py-1 text-sm"
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value as any)}
          >
            <option value="LETTER">8.5x11 Letter</option>
            <option value="A4">A4</option>
<<<<<<< HEAD
=======
=======
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Book Builder</h1>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-outline" onClick={handleGenerateWithAI} disabled={busy}>
            <Wand2 className="w-4 h-4 mr-1" /> AI Assist
          </button>
<<<<<<< HEAD
:components/book/BookBuilder.tsx
          <select
            className="border rounded px-2 py-1 text-sm"
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value as any)}
          >
            <option value="LETTER">8.5x11 Letter</option>
            <option value="A4">A4</option>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <select,
className=&quot;border rounded px-2 py-1 text-sm&quot;
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value as any)}          >
            <option value=&quot;LETTER&quot;>8.5x11 Letter</option>
            <option value=&quot;A4&quot;>A4</option>
<<<<<<< HEAD
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </select>
          <button className="btn btn-sm btn-primary onClick={handleExportPdf} disabled={busy}>
            <Download className=w-4 h-4 mr-1" /> PDF
=======
            onClick={handleGenerateWithAI}
            disabled={busy}
          >
            <Wand2 className='w-4 h-4 mr-1' /> AI Assist
          </button>
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
          <select
            className='border rounded px-2 py-1 text-sm'
            value={pageSize}
            onChange={e => setPageSize(e.target.value as any)}
          >
            <option value='LETTER'>8.5x11 Letter</option>
            <option value='A4'>A4</option>
origin/cursor/automate-test-improve-and-merge-code-2533:components/book/BookBuilder.tsx
>>>>>>> merged-prs-20250907-203621
          </select>
          <button
            className='btn btn-sm btn-primary'
            onClick={handleExportPdf}
            disabled={busy}
          >
            <Download className='w-4 h-4 mr-1' /> PDF
>>>>>>> origin/chore/fix-lint-and-merge
          </button>
<<<<<<< HEAD
          <button className="btn btn-sm btn-secondary" onClick={handleExportEpub} disabled={busy}>
            <FileType className="w-4 h-4 mr-1" /> EPUB
          </button>
=======
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
          <button
            className='btn btn-sm btn-secondary
            onClick={handleExportEpub}
            disabled={busy}
          >
            <FileType className=w-4 h-4 mr-1' /> EPUB
          </button>
<<<<<<< HEAD

          <button className="btn btn-sm btn-secondary" onClick={handleExportEpub} disabled={busy}>
            <FileType className="w-4 h-4 mr-1" /> EPUB
          </button>
<<<<<<< HEAD
:components/book/BookBuilder.tsx
          <button className="btn btn-sm btn-secondary" onClick={handleExportEpub} disabled={busy}>
            <FileType className="w-4 h-4 mr-1" /> EPUB
          </button>
          <button className=&quot;btn btn-sm btn-secondary&quot; onClick={handleExportEpub} disabled={busy}>
            <FileType className=&quot;w-4 h-4 mr-1&quot; /> EPUB          </button>
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======

<<<<<<< HEAD
=======
          <button className=&quot;btn btn-sm btn-secondary&quot; onClick={handleExportEpub} disabled={busy}>
            <FileType className=&quot;w-4 h-4 mr-1&quot; /> EPUB          </button>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6>
        <div className=space-y-4">
          <h2 className="font-semibold flex items-center gap-2>
            <BookOpen className=w-4 h-4" /> Cover & Branding
=======
origin/cursor/automate-test-improve-and-merge-code-2533:components/book/BookBuilder.tsx
        </div>
      </div>

<section className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='space-y-4'>
          <h2 className='font-semibold flex items-center gap-2'>
            <BookOpen className='w-4 h-4' /> Cover & Branding
  chapters: defaultChapters;,
  visuals: {
    timelineImages: [];,
  daoVoteCharts: []
    uiScreens: [];,
  quoteCallouts: []
      { text: 'The marketplace is the new operating system.';, attribution: 'Founder' ;}]}}
function fileToBase64(file: File): Promise<string> {
</string>
      <div className="w-full max-w-2xl border rounded-lg overflow-hidden shadow bg-white text-gray-900">"
</div>"
        <div className="p-8 space-y-2">"
          <div className="text-xs uppercase tracking-widest opacity-60">Zion OS</div>""
          <h1 className="text-3xl font-extrabold leading-tight">{project.meta.title}</h1>""
          <div className="text-lg opacity-80">{project.meta.subtitle}</div>""
          <div className="pt-6 text-sm opacity-70">By {project.meta.author}</div>"
            </div>
    <div className="space-y-8">"
      <div className="flex items-center justify-between">"
        <h1 className="text-2xl font-bold">Book Builder</h1>""
        <div className="flex gap-2">"
          <button className="btn btn-sm btn-outline" onClick={handleGenerateWithAI} disabled={busy}>"
</button>"
            <Wand2 className="w-4 h-4 mr-1" /> AI Assist;"
</Wand2>
          </button>
          </select>"
          <button className="btn btn-sm btn-primary" onClick={handleExportPdf} disabled={busy}>"
            <Download className="w-4 h-4 mr-1" /> PDF;"

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">"
</section>"
        <div className="space-y-4">"
          <h2 className="font-semibold flex items-center gap-2">"
</h2>"
            <BookOpen className="w-4 h-4" /> Cover & Branding;"

pr-12325
>>>>>>> origin/chore/fix-lint-and-merge
          </h2>
<<<<<<< HEAD
=======
<<<<<<< HEAD
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======
<<<<<<< HEAD
:components/book/BookBuilder.tsx
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Title</div>
              <input
                className="w-full border rounded px-3 py-2"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-3&quot;>
            <label className=&quot;space-y-1&quot;>
              <div className=&quot;text-xs uppercase opacity-60&quot;>Title</div>
              <input,
className=&quot;w-full border rounded px-3 py-2&quot;
<<<<<<< HEAD
                value={project.meta.title}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, title: e.target.value } })}              />
            </label>
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
                value={project.meta.title}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, title: e.target.value } })}              />
            </label>
:components/book/BookBuilder.tsx
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Subtitle</div>
              <input
                className="w-full border rounded px-3 py-2"
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                value={project.meta.title}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, title: e.target.value } })}              />
            </label>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <label className=&quot;space-y-1&quot;>
</label>
              <div className=&quot;text-xs uppercase opacity-60&quot;>Subtitle</div>
              <input,
className=&quot;w-full border rounded px-3 py-2&quot;
<<<<<<< HEAD
</input>
              <div className=&quot;text-xs uppercase opacity-60&quot;>Author</div>
=======
<<<<<<< HEAD
                value={project.meta.subtitle}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, subtitle: e.target.value } })}              />
            </label>
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
                value={project.meta.subtitle}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, subtitle: e.target.value } })}              />
            </label>
:components/book/BookBuilder.tsx
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Author</div>
              <input
                className="w-full border rounded px-3 py-2"
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                value={project.meta.subtitle}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, subtitle: e.target.value } })}              />
            </label>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <label className=&quot;space-y-1&quot;>
              <div className=&quot;text-xs uppercase opacity-60&quot;>Author</div>
              <input,
className=&quot;w-full border rounded px-3 py-2&quot;
<<<<<<< HEAD
                value={project.meta.author}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, author: e.target.value } })}              />
            </label>
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
                value={project.meta.author}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, author: e.target.value } })}              />
            </label>
:components/book/BookBuilder.tsx
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">ISBN (optional)</div>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="9781234567897"
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                value={project.meta.author}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, author: e.target.value } })}              />
            </label>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <label className=&quot;space-y-1&quot;>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <div className=&quot;text-xs uppercase opacity-60&quot;>ISBN (optional)</div>
                placeholder=&quot;9781234567897&quot;
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <label className='space-y-1'>
              <div className='text-xs uppercase opacity-60'>Title</div>
<<<<<<< HEAD
              <input
                className='w-full border rounded px-3 py-2'
          >;
            <Wand2 className='w-4 h-4 mr-1' /> AI Assist;
          </button>;
          <select;
            className='border rounded px-2 py-1 text-sm';
            value={pageSize}
            onChange={e => setPageSize(e.target.value as any)}
          >;
            <option value='LETTER'>8.5x11 Letter</option>;
            <option value='A4'>A4</option>;
          </select>;
          <button;
            className='btn btn-sm btn-primary';
            onClick={handleExportPdf}
            disabled={busy}
          >;
            <Download className='w-4 h-4 mr-1' /> PDF;
          </button>;
          <button;
            className='btn btn-sm btn-secondary';
            onClick={handleExportEpub}
            disabled={busy}
          >;
            <FileType className='w-4 h-4 mr-1' /> EPUB;
          </button>;
        </div>;
      </div>;
<section className='grid grid-cols-1 lg:grid-cols-2 gap-6'>;
        <div className='space-y-4'>;
          <h2 className='font-semibold flex items-center gap-2'>;
            <BookOpen className='w-4 h-4' /> Cover & Branding;
          </h2>;
            <label className=&quot;space-y-1&quot;>;
              <div className=&quot;text-xs uppercase opacity-60&quot;>Subtitle</div>;
              <input,className=&quot;w-full border rounded px-3 py-2&quot;
            <label className=&quot;space-y-1&quot;>;
              <div className=&quot;text-xs uppercase opacity-60&quot;>Author</div>;
              <input,className=&quot;w-full border rounded px-3 py-2&quot;
            <label className=&quot;space-y-1&quot;>;
              <div className=&quot;text-xs uppercase opacity-60&quot;>ISBN (optional)</div>;
              <input,className=&quot;w-full border rounded px-3 py-2&quot;
                placeholder=&quot;9781234567897&quot;<div className='grid grid-cols-1 md:grid-cols-2 gap-3'>;
            <label className='space-y-1'>;
              <div className='text-xs uppercase opacity-60'>Title</div>;
              <input;
                className='w-full border rounded px-3 py-2';
                value={project.meta.title}
                onChange={e =>;
                  setProject({...project,meta: { ...project.meta, title: e.target.value },})}
              />;
            </label>;
            <label className='space-y-1'>;
              <div className='text-xs uppercase opacity-60'>Subtitle</div>;
              <input;
                className='w-full border rounded px-3 py-2';
                value={project.meta.subtitle}
                onChange={e =>;
                  setProject({...project,meta: { ...project.meta, subtitle: e.target.value },})}
              />;
            </label>;
            <label className='space-y-1'>;
              <div className='text-xs uppercase opacity-60'>Author</div>;
              <input;
                className='w-full border rounded px-3 py-2';
                value={project.meta.author}
>>>>>>> merged-prs-20250907-203621
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Title</div>
              <input
                className="w-full border rounded px-3 py-2"
                value={project.meta.title}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, title: e.target.value } })}
<<<<<<< HEAD
=======
=======
              <input
                className='w-full border rounded px-3 py-2'
                value={project.meta.title}
                onChange={e =>
                  setProject({
                    ...project,
                    meta: { ...project.meta;, title: e.target.value ;},
                  })
                }
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Subtitle</div>
              <input
                className="w-full border rounded px-3 py-2"
                value={project.meta.subtitle}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, subtitle: e.target.value } })}
<<<<<<< HEAD
=======
=======
                onChange={e =>
                  setProject({
                    ...project,
                    meta: { ...project.meta;, subtitle: e.target.value ;},
                  })
                }
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Author</div>
              <input
                className="w-full border rounded px-3 py-2"
                value={project.meta.author}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, author: e.target.value } })}
<<<<<<< HEAD
=======
=======
                onChange={e =>
                  setProject({
                    ...project,
                    meta: { ...project.meta;, author: e.target.value ;},
                  })
                }
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">ISBN (optional)</div>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="9781234567897"
<<<<<<< HEAD
=======
=======
                className='w-full border rounded px-3 py-2'
                placeholder='9781234567897'
origin/cursor/automate-test-improve-and-merge-code-2533:components/book/BookBuilder.tsx
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                value={project.meta.isbn}
                onChange={e =>
                  setProject({
                    ...project,
                    meta: { ...project.meta;, isbn: e.target.value ;},
                  })
                }
              />
            </label>
          </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
          <div className='pt-2'>{coverPreview}</div>
        </div>

        <div className='space-y-4'>
          <h2 className='font-semibold flex items-center gap-2'>
            <Settings className='w-4 h-4' /> Visual Elements
<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
          <div className="pt-2">{coverPreview}</div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold flex items-center gap-2">
            <Settings className="w-4 h-4" /> Visual Elements
<<<<<<< HEAD
          </h2>
          <div className="space-y-3">
            <label className="block">
              <span className="text-sm opacity-70">Timeline images</span>
              <input type="file" accept="image/*" multiple onChange={(e) => onUploadImages(e.target.files, 'timelineImages' as any)} />
            </label>
            <label className="block">
              <span className="text-sm opacity-70">DAO vote charts</span>
              <input type="file" accept="image/*" multiple onChange={(e) => onUploadImages(e.target.files, 'daoVoteCharts' as any)} />
            </label>
            <label className="block">
              <span className="text-sm opacity-70">Figma UI screenshots</span>
              <input type="file" accept="image/*" multiple onChange={(e) => onUploadImages(e.target.files, 'uiScreens' as any)} />
            </label>
            <div className="grid grid-cols-3 gap-2">
=======
=======
<<<<<<< HEAD
:components/book/BookBuilder.tsx
          <div className="pt-2">{coverPreview}</div>
        </div>
        <div className="space-y-4">
          <h2 className="font-semibold flex items-center gap-2">
            <Settings className="w-4 h-4" /> Visual Elements
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className=&quot;pt-2&quot;>{coverPreview}</div>        </div>

        <div className=&quot;space-y-4&quot;>
          <h2 className=&quot;font-semibold flex items-center gap-2&quot;>
            <Settings className=&quot;w-4 h-4&quot; /> Visual Elements
<<<<<<< HEAD
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </h2>
          <div className="space-y-3>
            <label className=block">
              <span className="text-sm opacity-70>Timeline images</span>
              <input type=file" accept="image/* multiple onChange={(e) => onUploadImages(e.target.files, timelineImages' as any)} />
            </label>
            <label className=block">
              <span className="text-sm opacity-70>DAO vote charts</span>
              <input type=file" accept="image/* multiple onChange={(e) => onUploadImages(e.target.files, 'daoVoteCharts as any)} />
            </label>
            <label className=block">
              <span className="text-sm opacity-70>Figma UI screenshots</span>
              <input type=file" accept="image/* multiple onChange={(e) => onUploadImages(e.target.files, uiScreens' as any)} />
            </label>
            <div className=grid grid-cols-3 gap-2">
>>>>>>> merged-prs-20250907-203621
              {project.visuals.timelineImages.concat(project.visuals.daoVoteCharts).concat(project.visuals.uiScreens).slice(0, 6).map((src, i) => (
                <div key={i} className="aspect-video bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                  <img src={src} alt="visual" className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
            <div className='grid grid-cols-3 gap-2>
=======
origin/cursor/automate-test-improve-and-merge-code-2533:components/book/BookBuilder.tsx
          </h2>
          <div className='space-y-3'>
            <label className='block'>
              <span className='text-sm opacity-70'>Timeline images</span>
              <input
                type='file'
                accept='image/*'
                multiple
                onChange={e =>
                  onUploadImages(e.target.files, 'timelineImages' as any)
                }
              />
            </label>
            <label className='block'>
              <span className='text-sm opacity-70'>DAO vote charts</span>
              <input
                type='file'
                accept='image/*'
                multiple
                onChange={e =>
                  onUploadImages(e.target.files, 'daoVoteCharts' as any)
                }
              />
            </label>
            <label className='block'>
              <span className='text-sm opacity-70'>Figma UI screenshots</span>
              <input
                type='file'
                accept='image/*'
                multiple
                onChange={e =>
                  onUploadImages(e.target.files, 'uiScreens' as any)
                }
              />
            </label>
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
            <div className="grid grid-cols-3 gap-2">
              {project.visuals.timelineImages.concat(project.visuals.daoVoteCharts).concat(project.visuals.uiScreens).slice(0, 6).map((src, i) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
:components/book/BookBuilder.tsx
                <div key={i} className="aspect-video bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                  <img src={src} alt="visual" className="object-cover w-full h-full" />
                </div>
                <div key={i} className=&quot;aspect-video bg-gray-100 rounded flex items-center justify-center overflow-hidden&quot;>
                  <img src={src} alt=&quot;visual&quot; className=&quot;object-cover w-full h-full&quot; />                </div>
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======

                <div key={i} className=&quot;aspect-video bg-gray-100 rounded flex items-center justify-center overflow-hidden&quot;>
                  <img src={src} alt=&quot;visual&quot; className=&quot;object-cover w-full h-full&quot; />                </div>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              ))}
            <div className='grid grid-cols-3 gap-2'>
>>>>>>> origin/chore/fix-lint-and-merge
              {project.visuals.timelineImages
                .concat(project.visuals.daoVoteCharts)
                .concat(project.visuals.uiScreens)
                .slice(0, 6)
                .map((src, i) => (
                  <div
<<<<<<< HEAD
                onChange={e =>;
                  setProject({...project,meta: { ...project.meta, author: e.target.value },})}
              />;
            </label>;
            <label className='space-y-1'>;
              <div className='text-xs uppercase opacity-60'>;
                ISBN (optional)</div>;
              <input;
                className='w-full border rounded px-3 py-2';
                placeholder='9781234567897';
                value={project.meta.isbn}
                onChange={e =>;
                  setProject({...project,meta: { ...project.meta, isbn: e.target.value },})}
              />;
            </label>;
          </div>;
          <div className='pt-2'>{coverPreview}</div>;
        </div>;
        <div className='space-y-4'>;
          <h2 className='font-semibold flex items-center gap-2'>;
            <Settings className='w-4 h-4' /> Visual Elements;
          </h2>;
          <div className='space-y-3'>;
            <label className='block'>;
              <span className='text-sm opacity-70'>Timeline images</span>;
              <input;
                type='file';
                accept='image/*';
                multiple;
                onChange={e =>;
                  onUploadImages(e.target.files, 'timelineImages' as any)}
              />;
            </label>;
            <label className='block'>;
              <span className='text-sm opacity-70'>DAO vote charts</span>;
              <input;
                type='file';
                accept='image/*';
                multiple;
                onChange={e =>;
                  onUploadImages(e.target.files, 'daoVoteCharts' as any)}
              />;
            </label>;
            <label className='block'>;
              <span className='text-sm opacity-70'>Figma UI screenshots</span>;
              <input;
                type='file';
                accept='image/*';
                multiple;
                onChange={e =>;
                  onUploadImages(e.target.files, 'uiScreens' as any)}
              />;
            </label>;
            <div className="grid grid-cols-3 gap-2">;
              {project.visuals.timelineImages.concat(project.visuals.daoVoteCharts).concat(project.visuals.uiScreens).slice(0, 6).map((src, i) => ())}<div className='grid grid-cols-3 gap-2'>;
              {project.visuals.timelineImages;
                .concat(project.visuals.daoVoteCharts).concat(project.visuals.uiScreens).slice(0, 6).map((src, i) => (<div;
                    key={i}
                    className='aspect-video bg-gray-100 rounded flex items-center justify-center overflow-hidden';
                  >;
                    <img;
                      src={src}

=======
                    key={i}
                    className='aspect-video bg-gray-100 rounded flex items-center justify-center overflow-hidden'
                  >
                    <img
                      src={src}
                      alt='visual'
                      className='object-cover w-full h-full'
                    />
                  </div>
                ))}
origin/cursor/automate-test-improve-and-merge-code-2533:components/book/BookBuilder.tsx
>>>>>>> origin/chore/fix-lint-and-merge
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      <section className="space-y-4">
        <h2 className="font-semibold">Chapters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.chapters.map((ch, idx) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
:components/book/BookBuilder.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
            <div key={idx} className="border rounded-lg p-4 space-y-2">
              <div className="font-medium">{ch.title}</div>
              <textarea
                className="w-full min-h-[160px] border rounded p-2"
                value={ch.content}
                onChange={(e) => {
<<<<<<< HEAD
                  const chapters: BookChapter[] = [...project.chapters],
                  chapters[idx] = { ...chapters[idx], content: e.target.value },
                  setProject({ ...project, chapters })
                }}
=======
<<<<<<< HEAD
                  const chapters: BookChapter[] = [...project.chapters],
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======
<section className='space-y-4'>
        <h2 className='font-semibold'>Chapters</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {project.chapters.map((ch, idx) => (
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
                onChange={(e) => setProject({ ...project, meta: { ...project.meta;, isbn: e.target.value ;} })}
          <div className="space-y-3">"
            <label className="block">"
</label>"
              <span className="text-sm opacity-70">Timeline images</span>""
              <input type="file" accept="image/*" multiple onChange={(e) => onUploadImages(e.target.files, 'timelineImages' as any)} />
              <span className="text-sm opacity-70">DAO vote charts</span>""
              <input type="file" accept="image/*" multiple onChange={(e) => onUploadImages(e.target.files, 'daoVoteCharts' as any)} />
              <span className="text-sm opacity-70">Figma UI screenshots</span>""
              <input type="file" accept="image/*" multiple onChange={(e) => onUploadImages(e.target.files, 'uiScreens' as any)} />
            <div className="grid grid-cols-3 gap-2">"
      <section className="space-y-4">"
        <h2 className="font-semibold">Chapters</h2>""
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
pr-12325
>>>>>>> origin/chore/fix-lint-and-merge
=======
                  const chapters: BookChapter[] = [...project.chapters]
                  chapters[idx] = { ...chapters[idx], content: e.target.value }
                  setProject({ ...project, chapters })
                }}
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <div key={idx} className=&quot;border rounded-lg p-4 space-y-2&quot;>
              <div className=&quot;font-medium&quot;>{ch.title}</div>
              <textarea,
className=&quot;w-full min-h-[160px] border rounded p-2&quot;
<<<<<<< HEAD
=======
<<<<<<< HEAD
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                value={ch.content}
                onChange={(e) => {
<<<<<<< HEAD
                  const chapters: BookChapter[] = [...project.chapters],
                  chapters[idx] = { ...chapters[idx], content: e.target.value },
                  setProject({ ...project, chapters })                }}
<<<<<<< HEAD

=======
                  const chapters: BookChapter[] = [...project.chapters];,
                  chapters[idx] = { ...chapters[idx], content: e.target.value ;},
                  setProject({ ...project, chapters })                }}
>>>>>>> origin/chore/fix-lint-and-merge
            <div key={idx} className='border rounded-lg p-4 space-y-2'>
              <div className='font-medium'>{ch.title}</div>
              <textarea
                className='w-full min-h-[160px] border rounded p-2'
                value={ch.content}
                onChange={e => {
                  const chapters: BookChapter[] = [...project.chapters];
<<<<<<< HEAD
                  chapters[idx] = { ...chapters[idx], content: e.target.value };
                  setProject({ ...project, chapters });
            <div key = $2;
                  chapters[idx] = { ...chapters[idx], content: e.target.value },
                  setProject({ ...project, chapters })
                }}
=======
                  chapters[idx] = { ...chapters[idx], content: e.target.value ;};
                  setProject({ ...project, chapters });
                }}
origin/cursor/automate-test-improve-and-merge-code-2533:components/book/BookBuilder.tsx
>>>>>>> origin/chore/fix-lint-and-merge
=======
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
              />
            </div>
          ))}
        </div>
      </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      <section className="space-y-2">
        <h2 className="font-semibold">Quote Callouts</h2>
        <div className="space-y-2">
          {project.visuals.quoteCallouts.map((q, i) => (
<<<<<<< HEAD
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <input
                className="border rounded px-2 py-1"
                value={q.text}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts];
=======
<<<<<<< HEAD
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <input
                className='border rounded px-2 py-1'

=======
<<<<<<< HEAD
:components/book/BookBuilder.tsx
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <input
                className="border rounded px-2 py-1"
            <div key={i} className=&quot;grid grid-cols-1 md:grid-cols-3 gap-2&quot;>
              <input,
className=&quot;border rounded px-2 py-1&quot;
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======

            <div key={i} className=&quot;grid grid-cols-1 md:grid-cols-3 gap-2&quot;>
              <input,
className=&quot;border rounded px-2 py-1&quot;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                value={q.text}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts];
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx

            <div key={i} className='grid grid-cols-1 md:grid-cols-3 gap-2'>
              <input
                className='border rounded px-2 py-1'

=======
<section className='space-y-2'>
        <h2 className='font-semibold'>Quote Callouts</h2>
        <div className='space-y-2'>
          {project.visuals.quoteCallouts.map((q, i) => (
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
            <div key={i} className='grid grid-cols-1 md:grid-cols-3 gap-2'>
              <input
                className='border rounded px-2 py-1'
origin/cursor/automate-test-improve-and-merge-code-2533:components/book/BookBuilder.tsx
>>>>>>> origin/chore/fix-lint-and-merge
                value={q.text}
                onChange={e => {
                  const quoteCallouts = [...project.visuals.quoteCallouts];
                  quoteCallouts[i] = {
                    ...quoteCallouts[i],
<<<<<<< HEAD
                    text: e.target.value,
                  };
                  setProject({
                    ...project,
                    visuals: { ...project.visuals, quoteCallouts },
=======
                    text: e.target.value;,
                  };
                  setProject({
                    ...project,
                    visuals: { ...project.visuals;, quoteCallouts },
>>>>>>> origin/chore/fix-lint-and-merge
                  });
                }}
              />
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
<<<<<<< HEAD
            <div key = $2;
>>>>>>> merged-prs-20250907-203621
                  quoteCallouts[i] = { ...quoteCallouts[i], text: e.target.value },
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })
                }}
              />
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
:components/book/BookBuilder.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
              <input
                className="border rounded px-2 py-1"
                value={q.attribution ?? ''}
                onChange={(e) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                  const quoteCallouts = [...project.visuals.quoteCallouts];
                  quoteCallouts[i] = { ...quoteCallouts[i], attribution: e.target.value },
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })
                }}
                placeholder="Attribution"
<<<<<<< HEAD
=======
=======
                  const quoteCallouts = [...project.visuals.quoteCallouts]
                  quoteCallouts[i] = { ...quoteCallouts[i], attribution: e.target.value }

                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })
                }}
                placeholder="Attribution"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <input,
className=&quot;border rounded px-2 py-1&quot;
              <input,
className=&quot;border rounded px-2 py-1&quot;
<<<<<<< HEAD
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                value={q.attribution ?? ''}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts],
                  quoteCallouts[i] = { ...quoteCallouts[i], attribution: e.target.value },
<<<<<<< HEAD
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })                }}
                placeholder=&quot;Attribution&quot;
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
:components/book/BookBuilder.tsx
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })
                }}
                placeholder="Attribution"
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })                }}
                placeholder=&quot;Attribution&quot;
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======

                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })                }}
                placeholder=&quot;Attribution&quot;
=======
                value={q.attribution ?? ''}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts],

>>>>>>> origin/chore/fix-lint-and-merge
              <input
                className='border rounded px-2 py-1'
                value={q.attribution ?? ''}
                onChange={e => {
                  const quoteCallouts = [...project.visuals.quoteCallouts];
                  quoteCallouts[i] = {
                    ...quoteCallouts[i],
<<<<<<< HEAD
                    attribution: e.target.value,
                  };
                  setProject({
                    ...project,
                    visuals: { ...project.visuals, quoteCallouts },
                  });
                }}
                placeholder='Attribution'
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })
                }}
                placeholder="Attribution"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
              />
              <div />
            </div>
          ))}
        </div>
      </section>
    </div>
<<<<<<< HEAD
  )
}
=======
<<<<<<< HEAD
                      alt='visual';
                      className='object-cover w-full h-full';
                    />;
                  </div>;
                ))}</div>;
          </div>;
        </div>;
      </section>;
<section className='space-y-4'>;
        <h2 className='font-semibold'>Chapters</h2>;
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>;
          {project.chapters.map((ch, idx) => (<div key={idx} className=&quot;border rounded-lg p-4 space-y-2&quot;>;
              <div className=&quot;font-medium&quot;>{ch.title}</div>;
              <textarea,className=&quot;w-full min-h-[160px] border rounded p-2&quot;
                value={ch.content}
                onChange={(e) => {const chapters: BookChapter[] = [...project.chapters],chapters[idx] = { ...chapters[idx], content: e.target.value },setProject({ ...project, chapters })                }}<div key={idx} className='border rounded-lg p-4 space-y-2'>;
              <div className='font-medium'>{ch.title}</div>;
              <textarea;
                className='w-full min-h-[160px] border rounded p-2';
                value={ch.content}
                onChange={e => {const chapters: BookChapter[] = [...project.chapters];
                  chapters[idx] = { ...chapters[idx], content: e.target.value }setProject({ ...project, chapters })}}/>;
            </div>;
          ))}
        </div>;
      </section>;
<section className='space-y-2'>;
        <h2 className='font-semibold'>Quote Callouts</h2>;
        <div className='space-y-2'>;
          {project.visuals.quoteCallouts.map((q, i) => (<div key={i} className='grid grid-cols-1 md:grid-cols-3 gap-2'>;
              <input;
                className='border rounded px-2 py-1';
                value={q.text}
                onChange={e => {const quoteCallouts = [...project.visuals.quoteCallouts];
                  quoteCallouts[i] = {...quoteCallouts[i],text: e.target.value,}setProject({...project,visuals: { ...project.visuals, quoteCallouts },})}}
              />;
                value={q.attribution ?? ''}
                onChange={(e) => {const quoteCallouts = [...project.visuals.quoteCallouts],quoteCallouts[i] = { ...quoteCallouts[i], attribution: e.target.value },<input;
                className='border rounded px-2 py-1';
                value={q.attribution ?? ''}
                onChange={e => {const quoteCallouts = [...project.visuals.quoteCallouts];
                  quoteCallouts[i] = {...quoteCallouts[i],attribution: e.target.value,}setProject({...project,visuals: { ...project.visuals, quoteCallouts },})}}
                placeholder='Attribution';
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })}}
                placeholder="Attribution";
              />;
              <div />;
            </div>;
          ))}
        </div>;
      </section>;
    </div>;
  )}
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx


  );
}

  )
}
=======
                    attribution: e.target.value;,
                  };
                  setProject({
                    ...project,
                    visuals: { ...project.visuals;, quoteCallouts },
                  });
                }}
                placeholder='Attribution'
                  setProject({ ...project, visuals: { ...project.visuals;, quoteCallouts } })
                }}
                placeholder="Attribution"
origin/cursor/automate-test-improve-and-merge-code-2533:components/book/BookBuilder.tsx
              />
</textarea>
      <section className="space-y-2">"
        <h2 className="font-semibold">Quote Callouts</h2>""
        <div className="space-y-2">"
pr-12325
              <div />
      </section>
    </div>
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533:components/book/BookBuilder.tsx
"
pr-12325
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
  )}
:components/book/BookBuilder.tsx
  );
};
  )}
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
