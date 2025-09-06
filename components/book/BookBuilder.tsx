import React, { useMemo, useState } from 'react',
import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2 } from 'lucide-react',
import { buildPrintableHtml } from '../../utils/export/buildHtml'
import type { BookProject, BookChapter, VisualAsset } from '../../utils/book/bookTypes',
import { defaultChapters } from '../../utils/book/defaultOutline'
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

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string),
    reader.onerror = reject,
    reader.readAsDataURL(file)
  })
}

export default function BookBuilder() {
  const [project, setProject] = useState<BookProject>(initialProject),
  const [pageSize, setPageSize] = useState<'A4' | 'LETTER'>('LETTER'),
  const [busy, setBusy] = useState<boolean>(false),

const initialProject: BookProject = {_meta: {
    title: 'Zion OS: Building the Civilization Protocol', _subtitle: 'AI. Talent. Trust.', _author: 'Founder Name', _isbn: '', _publisher: 'Zion Tech Solutions'},
  chapters: defaultChapters,
  visuals: {_timelineImages: [], _daoVoteCharts: [], _uiScreens: [], _quoteCallouts: [
      { text: 'The marketplace is the new operating system.', _attribution: 'Founder'}]}};

function fileToBase64(_file: File): Promise<string> {_return new Promise(_(resolve, _reject) => {
    const _reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);});
}

export default function BookBuilder() {_const [project, _setProject] = useState<BookProject>(initialProject);
  const [pageSize, _setPageSize] = useState<'A4' | 'LETTER'>('LETTER');
  const [busy, _setBusy] = useState<boolean>(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _coverPreview = useMemo__(() => {
    return (
      <div className=&quot;w-full max-w-2xl border rounded-lg overflow-hidden shadow bg-white text-gray-900&quot;>
        <div className=&quot;p-8 space-y-2&quot;>
          <div className=&quot;text-xs uppercase tracking-widest opacity-60&quot;>Zion OS</div>
          <h1 className=&quot;text-3xl font-extrabold leading-tight&quot;>{project.meta.title}</h1>
          <div className=&quot;text-lg opacity-80&quot;>{project.meta.subtitle}</div>
          <div className=&quot;pt-6 text-sm opacity-70&quot;>By {project.meta.author}</div>
          {project.meta.isbn ? (
            <div className=&quot;pt-4&quot;>
              <img
                alt=&quot;ISBN barcode&quot;
                className=&quot;h-16&quot;
                src={`/api/barcode/isbn?code=${encodeURIComponent(project.meta.isbn)}`}
              />
            </div>
          ) : null}
        </div>
      </div>
    )
  }, [project]),

  async function handleGenerateWithAI() {
    setBusy(true),
    try {
      const res = await fetch('/api/book/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ meta: project.meta, chapters: project.chapters })}),
      const data = await res.json()
      if (data?.chapters) {
        setProject((p) => ({ ...p, chapters: data.chapters }))
      }
    } finally {
      setBusy(false)
    }
  }

  async function handleExportPdf() {
    setBusy(true),
    try {
      const html = buildPrintableHtml(project)
      const res = await fetch('/api/book/export/pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html, pageSize })}),
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url,
      a.download = 'zion-os-book.pdf',
      a.click(),
      URL.revokeObjectURL(url)
    } finally {
      setBusy(false)
    }
  }

  async function handleExportEpub() {
    setBusy(true),
    try {
      const res = await fetch('/api/book/export/epub', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ project })}),
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url,
      a.download = 'zion-os-book.epub',
      a.click(),
      URL.revokeObjectURL(url)
    } finally {
      setBusy(false)
    }
  }

  async function onUploadImages(files: FileList | null, target: keyof VisualAsset[]) {
    if (!files) return,
    const arr = await Promise.all(Array.from(files).map(fileToBase64))
    setProject((p) => ({
      ...p,
      visuals: {
        ...p.visuals,
        [target as any]: [...(p.visuals[target as any] as string[]), ...arr]}}))
  }

  return (
    <div className=&quot;space-y-8&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h1 className=&quot;text-2xl font-bold&quot;>Book Builder</h1>
        <div className=&quot;flex gap-2&quot;>
          <button className=&quot;btn btn-sm btn-outline&quot; onClick={handleGenerateWithAI} disabled={busy}>
            <Wand2 className=&quot;w-4 h-4 mr-1&quot; /> AI Assist
          </button>
          <select
            className=&quot;border rounded px-2 py-1 text-sm&quot;
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value as any)}
          >
            <option value=&quot;LETTER&quot;>8.5x11 Letter</option>
            <option value=&quot;A4&quot;>A4</option>
          </select>
          <button className=&quot;btn btn-sm btn-primary&quot; onClick={handleExportPdf} disabled={busy}>
            <Download className=&quot;w-4 h-4 mr-1&quot; /> PDF
          </button>
          <button className=&quot;btn btn-sm btn-secondary&quot; onClick={handleExportEpub} disabled={busy}>
            <FileType className=&quot;w-4 h-4 mr-1&quot; /> EPUB
          </button>
        </div>
      </div>

      <section className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-6&quot;>
        <div className=&quot;space-y-4&quot;>
          <h2 className=&quot;font-semibold flex items-center gap-2&quot;>
            <BookOpen className=&quot;w-4 h-4&quot; /> Cover & Branding
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-3&quot;>
            <label className=&quot;space-y-1&quot;>
              <div className=&quot;text-xs uppercase opacity-60&quot;>Title</div>
              <input
                className=&quot;w-full border rounded px-3 py-2&quot;
                value={project.meta.title}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, title: e.target.value } })}
              />
            </label>
            <label className=&quot;space-y-1&quot;>
              <div className=&quot;text-xs uppercase opacity-60&quot;>Subtitle</div>
              <input
                className=&quot;w-full border rounded px-3 py-2&quot;
                value={project.meta.subtitle}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, subtitle: e.target.value } })}
              />
            </label>
            <label className=&quot;space-y-1&quot;>
              <div className=&quot;text-xs uppercase opacity-60&quot;>Author</div>
              <input
                className=&quot;w-full border rounded px-3 py-2&quot;
                value={project.meta.author}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, author: e.target.value } })}
              />
            </label>
            <label className=&quot;space-y-1&quot;>
              <div className=&quot;text-xs uppercase opacity-60&quot;>ISBN (optional)</div>
              <input
                className=&quot;w-full border rounded px-3 py-2&quot;
                placeholder=&quot;9781234567897&quot;
                value={project.meta.isbn}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, isbn: e.target.value } })}
              />
            </label>
          </div>
          <div className=&quot;pt-2&quot;>{coverPreview}</div>
        </div>

        <div className=&quot;space-y-4&quot;>
          <h2 className=&quot;font-semibold flex items-center gap-2&quot;>
            <Settings className=&quot;w-4 h-4&quot; /> Visual Elements
          </h2>
          <div className=&quot;space-y-3&quot;>
            <label className=&quot;block&quot;>
              <span className=&quot;text-sm opacity-70&quot;>Timeline images</span>
              <input type=&quot;file&quot; accept=&quot;image/*&quot; multiple onChange={(e) => onUploadImages(e.target.files, 'timelineImages' as any)} />
            </label>
            <label className=&quot;block&quot;>
              <span className=&quot;text-sm opacity-70&quot;>DAO vote charts</span>
              <input type=&quot;file&quot; accept=&quot;image/*&quot; multiple onChange={(e) => onUploadImages(e.target.files, 'daoVoteCharts' as any)} />
            </label>
            <label className=&quot;block&quot;>
              <span className=&quot;text-sm opacity-70&quot;>Figma UI screenshots</span>
              <input type=&quot;file&quot; accept=&quot;image/*&quot; multiple onChange={(e) => onUploadImages(e.target.files, 'uiScreens' as any)} />
            </label>
            <div className=&quot;grid grid-cols-3 gap-2&quot;>
              {project.visuals.timelineImages.concat(project.visuals.daoVoteCharts).concat(project.visuals.uiScreens).slice(0, 6).map((src, i) => (
                <div key={i} className=&quot;aspect-video bg-gray-100 rounded flex items-center justify-center overflow-hidden&quot;>
                  <img src={src} alt=&quot;visual&quot; className=&quot;object-cover w-full h-full&quot; />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className=&quot;space-y-4&quot;>
        <h2 className=&quot;font-semibold&quot;>Chapters</h2>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
          {project.chapters.map((ch, idx) => (
            <div key={idx} className=&quot;border rounded-lg p-4 space-y-2&quot;>
              <div className=&quot;font-medium&quot;>{ch.title}</div>
              <textarea
                className=&quot;w-full min-h-[160px] border rounded p-2&quot;
                value={ch.content}
                onChange={(e) => {
                  const chapters: BookChapter[] = [...project.chapters]
                  chapters[idx] = { ...chapters[idx], content: e.target.value },
                  setProject({ ...project, chapters })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className=&quot;space-y-2&quot;>
        <h2 className=&quot;font-semibold&quot;>Quote Callouts</h2>
        <div className=&quot;space-y-2&quot;>
          {project.visuals.quoteCallouts.map((q, i) => (
            <div key={i} className=&quot;grid grid-cols-1 md:grid-cols-3 gap-2&quot;>
              <input
                className=&quot;border rounded px-2 py-1&quot;
                value={q.text}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts]
                  quoteCallouts[i] = { ...quoteCallouts[i], text: e.target.value },
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })
                }}
              />
              <input
                className=&quot;border rounded px-2 py-1&quot;
                value={q.attribution ?? ''}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts]
                  quoteCallouts[i] = { ...quoteCallouts[i], attribution: e.target.value },
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })
                }}
              />
              <input
                className="border rounded px-2 py-1"
                value={q.attribution ?? ''}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts]
                  quoteCallouts[i] = { ...quoteCallouts[i], attribution: e.target.value },
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
                }}
                placeholder=&quot;Attribution&quot;
              />
              <div />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}