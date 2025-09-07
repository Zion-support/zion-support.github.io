import React, { useMemo, useState } from 'react';
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx

import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2 } from 'lucide-react';
import { buildPrintableHtml } from '../../utils/export/buildHtml';
import type { BookProject, BookChapter, VisualAsset } from '../../utils/book/bookTypes';
import { defaultChapters } from '../../utils/book/defaultOutline';
const initialProject: BookProject = $2;
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

import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2  } from 'lucide-react';
import { buildPrintableHtml  } from '../../utils/export/buildHtml';
import type { BookProject, BookChapter, VisualAsset } from '../../utils/book/bookTypes';
import { defaultChapters } from '../../utils/book/defaultOutline';
const initialProject: BookProject;

  visuals: {
    timelineImages: []
    daoVoteCharts: []
    uiScreens: []
    quoteCallouts: [
{
        text: 'The marketplace is the new operating system.',
        attribution: 'Founder',
      },
    ],
  },
};
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader($2);
    reader.onload = () => resolve($2);
    reader.onerror = $2;
    reader.readAsDataURL(file)
  })
}

export default function BookBuilder() {
  const [project, setProject] = useState<BookProject>(initialProject),
  const [pageSize, setPageSize] = useState<'A4' | 'LETTER'>('LETTER'),
  const [busy, setBusy] = useState<boolean>(false),

  const coverPreview = useMemo(() => {
                src={`/api/barcode/isbn?code=${encodeURIComponent(project.meta.isbn)}`}
              />
            </div>
          ) : null}
        </div>
      </div>
    )
  }, [project]),

  async function handleGenerateWithAI() {
    setBusy($2);
    try {
      const res = await fetch('/api/book/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ meta: project.meta, chapters: project.chapters })}),
      const data = await res.json($2);
      if (data?.chapters) {
        setProject((p) => ({ ...p, chapters: data.chapters }))
      }
    } finally {
      setBusy(false)
    }
  }
  async function handleExportPdf() {
    setBusy($2);
    try {
      const html = buildPrintableHtml($2);
      const res = await fetch('/api/book/export/pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html, pageSize })}),
      const blob = await res.blob($2);
      const url = URL.createObjectURL($2);
      const a = document.createElement($2);
      a.href = $2;
      a.download = $2;
      a.click($2);
      URL.revokeObjectURL(url)
    } finally {
      setBusy(false)
    }
  }
  async function handleExportEpub() {
    setBusy($2);
    try {
      const res = await fetch('/api/book/export/epub', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ project })}),
      const blob = await res.blob($2);
      const url = URL.createObjectURL($2);
      const a = document.createElement($2);
      a.href = $2;
      a.download = $2;
      a.click($2);
      URL.revokeObjectURL(url)
    } finally {
      setBusy(false)
    }
  }

  async function onUploadImages(files: FileList | null, target: keyof VisualAsset[]) {
    if (!files) return,
    const arr = $2;
    setProject((p) => ({
      ...p,
      visuals: {
        ...p.visuals,
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
          </select>
          <button
            className='btn btn-sm btn-primary'
            onClick={handleExportPdf}
            disabled={busy}
          >
            <Download className='w-4 h-4 mr-1' /> PDF
          </button>
          <button className="btn btn-sm btn-secondary" onClick={handleExportEpub} disabled={busy}>
            <FileType className="w-4 h-4 mr-1" /> EPUB
          </button>
        </div>
      </div>

<section className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='space-y-4'>
          <h2 className='font-semibold flex items-center gap-2'>
            <BookOpen className='w-4 h-4' /> Cover & Branding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Title</div>
              <input
                className="w-full border rounded px-3 py-2"
                value={project.meta.title}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, title: e.target.value } })}              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Subtitle</div>
              <input
                className="w-full border rounded px-3 py-2"
                value={project.meta.subtitle}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, subtitle: e.target.value } })}              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Author</div>
              <input
                className="w-full border rounded px-3 py-2"
                value={project.meta.author}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, author: e.target.value } })}              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">ISBN (optional)</div>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="9781234567897"
                value={project.meta.isbn}
                onChange={e =>
                  setProject({
                    ...project,
                    meta: { ...project.meta, isbn: e.target.value },
                  })
                }
              />
            </label>
          </div>
          <div className="pt-2">{coverPreview}</div>
        </div>
        <div className="space-y-4">
          <h2 className="font-semibold flex items-center gap-2">
            <Settings className="w-4 h-4" /> Visual Elements
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
          {project.chapters.map((ch, idx) => (
            <div key = $2;
                  chapters[idx] = { ...chapters[idx], content: e.target.value },
                  setProject({ ...project, chapters })
                }}

              />
            </div>
          ))}
        </div>
      </section>

<section className='space-y-2'>
        <h2 className='font-semibold'>Quote Callouts</h2>
        <div className='space-y-2'>
          {project.visuals.quoteCallouts.map((q, i) => (
            <div key = $2;
                  quoteCallouts[i] = { ...quoteCallouts[i], text: e.target.value },
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })
                }}
              />
              <input
                className = $2;
                  quoteCallouts[i] = { ...quoteCallouts[i], attribution: e.target.value },
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })
                }}
                placeholder="Attribution"
                value={q.attribution ?? ''}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts],
                  quoteCallouts[i] = { ...quoteCallouts[i], attribution: e.target.value },
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })                }}
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