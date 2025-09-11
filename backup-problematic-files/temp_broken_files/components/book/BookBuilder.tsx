import React, { useMemo, useState } from 'react';

import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2 } from 'lucide-react';
import { buildPrintableHtml } from '../../utils/export/buildHtml';
import type { BookProject, BookChapter, VisualAsset } from '../../utils/book/bookTypes';
import { defaultChapters } from '../../utils/book/defaultOutline';
const initialProject: BookProject = {
  meta: {
    title: 'Zion OS: Building the Civilization Protocol'
    subtitle: 'AI. Talent. Trust.'
    author: 'Founder Name'
    isbn: ''
    publisher: 'Zion Tech Solutions'}
  chapters: defaultChapters
  visuals: {
    timelineImages: []
    daoVoteCharts: []
    uiScreens: []
    quoteCallouts: [
      { text: 'The marketplace is the new operating system.', attribution: 'Founder' }]}}
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
export default function BookBuilder() {
<<<<<<< HEAD
:components/book/BookBuilder.tsx
  const [project, setProject] = useState<BookProject>(initialProject)
  const [pageSize, setPageSize] = useState<'A4' | 'LETTER'>('LETTER')
  const [busy, setBusy] = useState<boolean>(false)
  const coverPreview = useMemo(() => {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [project, setProject] = useState<BookProject>(initialProject),
  const [pageSize, setPageSize] = useState<'A4' | 'LETTER'>('LETTER'),
  const [busy, setBusy] = useState<boolean>(false),
  const coverPreview = useMemo_(() => {
<<<<<<< HEAD
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return (
      <div className="w-full max-w-2xl border rounded-lg overflow-hidden shadow bg-white text-gray-900">
        <div className="p-8 space-y-2">
          <div className="text-xs uppercase tracking-widest opacity-60">Zion OS</div>
          <h1 className="text-3xl font-extrabold leading-tight">{project.meta.title}</h1>
          <div className="text-lg opacity-80">{project.meta.subtitle}</div>
          <div className="pt-6 text-sm opacity-70">By {project.meta.author}</div>
          {project.meta.isbn ? (
<<<<<<< HEAD
:components/book/BookBuilder.tsx
            <div className="pt-4">
              <img
                alt="ISBN barcode"
                className="h-16"
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
                src={`/api/barcode/isbn?code=${encodeURIComponent(project.meta.isbn)}`}
              />
            </div>
          ) : null}
        </div>
      </div>
    )
  }, [project])
  async function handleGenerateWithAI() {
    setBusy(true)
    try {
      const res = await fetch('/api/book/generate', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ meta: project.meta, chapters: project.chapters })})
      const data = await res.json()
      if (data?.chapters) {
        setProject((p) => ({ ...p, chapters: data.chapters }))
      }
    } finally {
      setBusy(false)
    }
  }
  async function handleExportPdf() {
    setBusy(true)
    try {
      const html = buildPrintableHtml(project)
      const res = await fetch('/api/book/export/pdf', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ html, pageSize })})
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'zion-os-book.pdf'
      a.click()
      URL.revokeObjectURL(url)
    } finally {
      setBusy(false)
    }
  }
  async function handleExportEpub() {
    setBusy(true)
    try {
      const res = await fetch('/api/book/export/epub', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ project })})
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'zion-os-book.epub'
      a.click()
      URL.revokeObjectURL(url)
    } finally {
      setBusy(false)
    }
  }
  async function onUploadImages(files: FileList | null, target: keyof VisualAsset[]) {
    if (!files) return
    const arr = await Promise.all(Array.from(files).map(fileToBase64))
    setProject((p) => ({
      ...p
      visuals: {
        ...p.visuals
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
          </select>
          <button className="btn btn-sm btn-primary" onClick={handleExportPdf} disabled={busy}>
            <Download className="w-4 h-4 mr-1" /> PDF
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

          <button className=&quot;btn btn-sm btn-secondary&quot; onClick={handleExportEpub} disabled={busy}>
            <FileType className=&quot;w-4 h-4 mr-1&quot; /> EPUB          </button>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="font-semibold flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Cover & Branding
          </h2>
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
            <label className=&quot;space-y-1&quot;>
              <div className=&quot;text-xs uppercase opacity-60&quot;>Subtitle</div>
              <input,
className=&quot;w-full border rounded px-3 py-2&quot;
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
              <div className=&quot;text-xs uppercase opacity-60&quot;>ISBN (optional)</div>
              <input,
className=&quot;w-full border rounded px-3 py-2&quot;
                placeholder=&quot;9781234567897&quot;
<<<<<<< HEAD
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                value={project.meta.isbn}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, isbn: e.target.value } })}
              />
            </label>
          </div>
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
              {project.visuals.timelineImages.concat(project.visuals.daoVoteCharts).concat(project.visuals.uiScreens).slice(0, 6).map((src, i) => (
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
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="font-semibold">Chapters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.chapters.map((ch, idx) => (
<<<<<<< HEAD
:components/book/BookBuilder.tsx
            <div key={idx} className="border rounded-lg p-4 space-y-2">
              <div className="font-medium">{ch.title}</div>
              <textarea
                className="w-full min-h-[160px] border rounded p-2"
                value={ch.content}
                onChange={(e) => {
                  const chapters: BookChapter[] = [...project.chapters]
                  chapters[idx] = { ...chapters[idx], content: e.target.value }
                  setProject({ ...project, chapters })
                }}
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div key={idx} className=&quot;border rounded-lg p-4 space-y-2&quot;>
              <div className=&quot;font-medium&quot;>{ch.title}</div>
              <textarea,
className=&quot;w-full min-h-[160px] border rounded p-2&quot;
<<<<<<< HEAD
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                value={ch.content}
                onChange={(e) => {
                  const chapters: BookChapter[] = [...project.chapters],
                  chapters[idx] = { ...chapters[idx], content: e.target.value },
                  setProject({ ...project, chapters })                }}
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
              />
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-2">
        <h2 className="font-semibold">Quote Callouts</h2>
        <div className="space-y-2">
          {project.visuals.quoteCallouts.map((q, i) => (
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
                value={q.text}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts]
                  quoteCallouts[i] = { ...quoteCallouts[i], text: e.target.value }
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })
                }}
              />
<<<<<<< HEAD
:components/book/BookBuilder.tsx
              <input
                className="border rounded px-2 py-1"
                value={q.attribution ?? ''}
                onChange={(e) => {
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              />
              <div />
            </div>
          ))}
        </div>
      </section>
    </div>
<<<<<<< HEAD
  )}
:components/book/BookBuilder.tsx
  );
};
  )}
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
