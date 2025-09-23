<<<<<<< HEAD
"use client";
import React{ useMemouseState } from 'react';
DownloadImage as ImageIconFileTypeBookOpenSettingsWand2
import { buildPrintableHtml } from '../../utils/export/buildHtml';
import type { BookProjectBookChapterVisualAsset } from '../../utils/book/bookTypes';
=======
import React, { useMemo, useState } from 'react';
import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2 } from 'lucide-react';
import { buildPrintableHtml } from '../../utils/export/buildHtml';
import type { BookProject, BookChapter, VisualAsset } from '../../utils/book/bookTypes';
>>>>>>> origin/auto/autonomy-17186719616
import { defaultChapters } from '../../utils/book/defaultOutline';

const initialProject: BookProject = {
  meta: {
    title: 'Zion OS: Building the Civilization Protocol',
    subtitle: 'AI. Talent. Trust.',
    author: 'Founder Name',
    isbn: '',
<<<<<<< HEAD
    publisher: 'Zion Tech Solutions'},
=======
    publisher: 'Zion Tech Solutions',
  },
>>>>>>> origin/auto/autonomy-17186719616
  chapters: defaultChapters,
  visuals: {
    timelineImages: [],
    daoVoteCharts: [],
    uiScreens: [],
    quoteCallouts: [
<<<<<<< HEAD
      { text: 'The marketplace is the new operating system.'attribution: 'Founder' }]}};

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolvereject) => {
=======
      { text: 'The marketplace is the new operating system.', attribution: 'Founder' },
    ],
  },
};

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
>>>>>>> origin/auto/autonomy-17186719616
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function BookBuilder() {
<<<<<<< HEAD
  const [projectsetProject] = useState<BookProject>(initialProject);
  const [pageSizesetPageSize] = useState<'A4' | 'LETTER'>('LETTER');
  const [busysetBusy] = useState<boolean>(false);
=======
  const [project, setProject] = useState<BookProject>(initialProject);
  const [pageSize, setPageSize] = useState<'A4' | 'LETTER'>('LETTER');
  const [busy, setBusy] = useState<boolean>(false);
>>>>>>> origin/auto/autonomy-17186719616

  const coverPreview = useMemo(() => {
    return (
      <div className="w-full max-w-2xl border rounded-lg overflow-hidden shadow bg-white text-gray-900">
        <div className="p-8 space-y-2">
          <div className="text-xs uppercase tracking-widest opacity-60">Zion OS</div>
          <h1 className="text-3xl font-extrabold leading-tight">{project.meta.title}</h1>
          <div className="text-lg opacity-80">{project.meta.subtitle}</div>
          <div className="pt-6 text-sm opacity-70">By {project.meta.author}</div>
          {project.meta.isbn ? (
            <div className="pt-4">
              <img
                alt="ISBN barcode"
                className="h-16"
                src={`/api/barcode/isbn?code=${encodeURIComponent(project.meta.isbn)}`}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
<<<<<<< HEAD
  }[project]);
=======
  }, [project]);
>>>>>>> origin/auto/autonomy-17186719616

  async function handleGenerateWithAI() {
    setBusy(true);
    try {
<<<<<<< HEAD
      const res = await fetch('/api/book/generate'{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ meta: project.metachapters: project.chapters })});
      const data = await res.json();
      if (data?.chapters) {
        setProject((p) => ({ ...pchapters: data.chapters }));
=======
      const res = await fetch('/api/book/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ meta: project.meta, chapters: project.chapters }),
      });
      const data = await res.json();
      if (data?.chapters) {
        setProject((p) => ({ ...p, chapters: data.chapters }));
>>>>>>> origin/auto/autonomy-17186719616
      }
    } finally {
      setBusy(false);
    }
  }

  async function handleExportPdf() {
    setBusy(true);
    try {
      const html = buildPrintableHtml(project);
<<<<<<< HEAD
      const res = await fetch('/api/book/export/pdf'{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ htmlpageSize })});
=======
      const res = await fetch('/api/book/export/pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html, pageSize }),
      });
>>>>>>> origin/auto/autonomy-17186719616
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'zion-os-book.pdf';
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setBusy(false);
    }
  }

  async function handleExportEpub() {
    setBusy(true);
    try {
<<<<<<< HEAD
      const res = await fetch('/api/book/export/epub'{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ project })});
=======
      const res = await fetch('/api/book/export/epub', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ project }),
      });
>>>>>>> origin/auto/autonomy-17186719616
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'zion-os-book.epub';
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setBusy(false);
    }
  }

<<<<<<< HEAD
  async function onUploadImages(files: FileList | nulltarget: keyof VisualAsset[]) {
=======
  async function onUploadImages(files: FileList | null, target: keyof VisualAsset[]) {
>>>>>>> origin/auto/autonomy-17186719616
    if (!files) return;
    const arr = await Promise.all(Array.from(files).map(fileToBase64));
    setProject((p) => ({
      ...p,
      visuals: {
        ...p.visuals,
<<<<<<< HEAD
        [target as any]: [...(p.visuals[target as any] as string[])...arr]}}));
=======
        [target as any]: [...(p.visuals[target as any] as string[]), ...arr],
      },
    }));
>>>>>>> origin/auto/autonomy-17186719616
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
          </select>
          <button className="btn btn-sm btn-primary" onClick={handleExportPdf} disabled={busy}>
            <Download className="w-4 h-4 mr-1" /> PDF
          </button>
          <button className="btn btn-sm btn-secondary" onClick={handleExportEpub} disabled={busy}>
            <FileType className="w-4 h-4 mr-1" /> EPUB
          </button>
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="font-semibold flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Cover & Branding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Title</div>
              <input
                className="w-full border rounded px-3 py-2"
                value={project.meta.title}
<<<<<<< HEAD
                onChange={(e) => setProject({ ...projectmeta: { ...project.metatitle: e.target.value } })}
=======
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, title: e.target.value } })}
>>>>>>> origin/auto/autonomy-17186719616
              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Subtitle</div>
              <input
                className="w-full border rounded px-3 py-2"
                value={project.meta.subtitle}
<<<<<<< HEAD
                onChange={(e) => setProject({ ...projectmeta: { ...project.metasubtitle: e.target.value } })}
=======
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, subtitle: e.target.value } })}
>>>>>>> origin/auto/autonomy-17186719616
              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Author</div>
              <input
                className="w-full border rounded px-3 py-2"
                value={project.meta.author}
<<<<<<< HEAD
                onChange={(e) => setProject({ ...projectmeta: { ...project.metauthor: e.target.value } })}
=======
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, author: e.target.value } })}
>>>>>>> origin/auto/autonomy-17186719616
              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">ISBN (optional)</div>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="9781234567897"
                value={project.meta.isbn}
<<<<<<< HEAD
                onChange={(e) => setProject({ ...projectmeta: { ...project.metaisbn: e.target.value } })}
=======
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, isbn: e.target.value } })}
>>>>>>> origin/auto/autonomy-17186719616
              />
            </label>
          </div>
          <div className="pt-2">{coverPreview}</div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold flex items-center gap-2">
            <Settings className="w-4 h-4" /> Visual Elements
          </h2>
          <div className="space-y-3">
            <label className="block">
              <span className="text-sm opacity-70">Timeline images</span>
<<<<<<< HEAD
              <input type="file" accept="image/*" multiple onChange={(e) => onUploadImages(e.target.'files', 'timelineImages' as any)} />
            </label>
            <label className="block">
              <span className="text-sm opacity-70">DAO vote charts</span>
              <input type="file" accept="image/*" multiple onChange={(e) => onUploadImages(e.target.'files', 'daoVoteCharts' as any)} />
            </label>
            <label className="block">
              <span className="text-sm opacity-70">Figma UI screenshots</span>
              <input type="file" accept="image/*" multiple onChange={(e) => onUploadImages(e.target.'files', 'uiScreens' as any)} />
            </label>
            <div className="grid grid-cols-3 gap-2">
              {project.visuals.timelineImages.concat(project.visuals.daoVoteCharts).concat(project.visuals.uiScreens).slice(06).map((srci) => (
=======
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
              {project.visuals.timelineImages.concat(project.visuals.daoVoteCharts).concat(project.visuals.uiScreens).slice(0, 6).map((src, i) => (
>>>>>>> origin/auto/autonomy-17186719616
                <div key={i} className="aspect-video bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                  <img src={src} alt="visual" className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold">Chapters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<<<<<<< HEAD
          {project.chapters.map((chidx) => (
=======
          {project.chapters.map((ch, idx) => (
>>>>>>> origin/auto/autonomy-17186719616
            <div key={idx} className="border rounded-lg p-4 space-y-2">
              <div className="font-medium">{ch.title}</div>
              <textarea
                className="w-full min-h-[160px] border rounded p-2"
                value={ch.content}
                onChange={(e) => {
                  const chapters: BookChapter[] = [...project.chapters];
<<<<<<< HEAD
                  chapters[idx] = { ...chapters[idx]content: e.target.value };
                  setProject({ ...projectchapters });
=======
                  chapters[idx] = { ...chapters[idx], content: e.target.value };
                  setProject({ ...project, chapters });
>>>>>>> origin/auto/autonomy-17186719616
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">Quote Callouts</h2>
        <div className="space-y-2">
<<<<<<< HEAD
          {project.visuals.quoteCallouts.map((qi) => (
=======
          {project.visuals.quoteCallouts.map((q, i) => (
>>>>>>> origin/auto/autonomy-17186719616
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <input
                className="border rounded px-2 py-1"
                value={q.text}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts];
<<<<<<< HEAD
                  quoteCallouts[i] = { ...quoteCallouts[i]text: e.target.value };
                  setProject({ ...projectvisuals: { ...project.visualsquoteCallouts } });
=======
                  quoteCallouts[i] = { ...quoteCallouts[i], text: e.target.value };
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } });
>>>>>>> origin/auto/autonomy-17186719616
                }}
              />
              <input
                className="border rounded px-2 py-1"
<<<<<<< HEAD
                value={q.attribution ?? ', '}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts];
                  quoteCallouts[i] = { ...quoteCallouts[i]attribution: e.target.value };
                  setProject({ ...projectvisuals: { ...project.visualsquoteCallouts } });
=======
                value={q.attribution ?? ''}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts];
                  quoteCallouts[i] = { ...quoteCallouts[i], attribution: e.target.value };
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } });
>>>>>>> origin/auto/autonomy-17186719616
                }}
                placeholder="Attribution"
              />
              <div />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}