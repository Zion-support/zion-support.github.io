<<<<<<< HEAD
import React, { useMemo, useState } from 'react';


=======
import React, { useMemo, useState } from 'react';'
import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2  } from 'lucide-react';'
import { buildPrintableHtml  } from '../../utils/export/buildHtml';'
import type { BookProject, BookChapter, VisualAsset } from '../../utils/book/bookTypes';'
import { defaultChapters  } from '../../utils/book/defaultOutline';'
const "initialProject": BookProject = {"meta": {"title": 'Zion "OS": Building the Civilization Protocol';'
    }
    "subtitle": 'AI. Talent. Trust.';'
    "author": 'Founder Name';'
    "isbn": '';'
    "publisher": 'Zion Tech Solutions'}'
  "chapters": defaultChapters;
import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2   } from 'lucide-react';'
import { buildPrintableHtml   } from '../../utils/export/buildHtml';'
const "initialProject": BookProject;"visuals": {"timelineImages": [];
    }
    "daoVoteCharts": [];
    "uiScreens": [];
    "quoteCallouts": [;
{"text": 'The marketplace is the new operating system.',"attribution": 'Founder'}]}}function fileToBase64("file": File): Promise<string> {return new Promise((resolve, reject) => {const reader = new FileReader()reader.onload = () => resolve(reader.result as string)reader.onerror = reject;'
}
reader.readAsDataURL(file)})export default function BookBuilder() {return (<div className='w-full max-w-2xl border rounded-lg overflow-hidden shadow bg-white text-gray-900'>;'
        <div className='p-8 space-y-2'>;'
          <div className='text-xs uppercase tracking-widest opacity-60'>;'
            }
            Zion OS;
          </div>;
          <h1 className='text-3xl font-extrabold leading-tight'>;'
            {project.meta.title}
          </h1>;
          <div className='text-lg opacity-80'>{project.meta.subtitle}</div>;'
          <div className='pt-6 text-sm opacity-70'>;'
            By {project.meta.author}
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2 } from 'lucide-react';
import { buildPrintableHtml } from '../../utils/export/buildHtml';
import type { BookProject, BookChapter, VisualAsset } from '../../utils/book/bookTypes';
import { defaultChapters } from '../../utils/book/defaultOutline';
<<<<<<< HEAD


=======
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
<<<<<<< HEAD


=======
    reader.readAsDataURL(file)
  })
}

export default function BookBuilder() {
  const [project, setProject] = useState<BookProject>(initialProject);
  const [pageSize, setPageSize] = useState<'A4' | 'LETTER'>('LETTER');
  const [busy, setBusy] = useState<boolean>(false);

  const coverPreview = useMemo(() => {
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
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
            <div className='pt-4'>
              <img
                alt='ISBN barcode'
                className='h-16'
          </div>;
          {project.meta.isbn ? (<div className='pt-4'>;
              <img;
                alt='ISBN barcode';
                className='h-16';

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [project, setProject] = useState<BookProject>(initialProject),
  const [pageSize, setPageSize] = useState<'A4' | 'LETTER'>('LETTER'),
  const [busy, setBusy] = useState<boolean>(false),

<<<<<<< HEAD
  const coverPreview = useMemo_(() => {


=======
  const coverPreview = useMemo(() => {
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <div className="pt-4">
              <img
                alt="ISBN barcode"
                className="h-16"
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
origin/cursor/automate-test-improve-and-merge-code-2533:components/book/BookBuilder.tsx
>>>>>>> origin/cursor/delete-old-data-records-6bba
                src={`/api/barcode/isbn?code=${encodeURIComponent(project.meta.isbn)}`}
                }
                alt='ISBN barcode';'
                className='h-16';'
import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2 } from 'lucide-react';'
import { buildPrintableHtml } from '../../utils/export/buildHtml';'
import type { BookProject, BookChapter, VisualAsset } from '../../utils/book/bookTypes';'
import { defaultChapters } from '../../utils/book/defaultOutline';'
const "initialProject": BookProject = {
  }
  "meta": {
    }
    "title": "title","
    "subtitle": 'AI. Talent. Trust.''
    "author": 'Founder Name''
    "isbn": '''
    "publisher": 'Zion Tech Solutions'}'
  "chapters": defaultChapters;
    "visuals": {
    }
    "timelineImages": []
    "daoVoteCharts": []
    "uiScreens": []
    "quoteCallouts": [
      { "text": 'The marketplace is the new operating system.', "attribution": 'Founder' }]}}'
function fileToBase64("file": File): Promise<string> {
  }
  return new Promise((resolve, reject) => {
}
const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject,
reader.readAsDataURL(file)
  })
}
export default function BookBuilder() {
}
return (;
      <div className="w-full max-w-2xl border rounded-lg overflow-hidden shadow bg-white text-gray-900">"
        <div className="p-8 space-y-2">"
          <div className="text-xs uppercase tracking-widest opacity-60">Zion OS</div>"
          <h1 className="text-3xl font-extrabold leading-tight">{project.meta.title}</h1>"
          <div className="text-lg opacity-80">{project.meta.subtitle}</div>"
          <div className="pt-6 text-sm opacity-70">By {project.meta.author}</div>"
          {project.meta.isbn ? (
                }
                src={`/api/barcode/isbn?code=${encodeURIComponent(project.meta.isbn)}`}`
              />
            </div>
          ) : null}
<<<<<<< HEAD
        </div>
      </div>

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
=======
        </div>;
)}, [project])async function handleGenerateWithAI() {setBusy(true)try {const res = await fetch('/api/book/generate', {"method": 'POST',"headers": { 'Content-Type': 'application/json' },"body": JSON.stringify({"meta": project.meta,"chapters": project.chapters})})const data = await res.json()if (data?.chapters) {setProject(p => ({ ...p, "chapters": data.chapters }))}'
    } finally {setBusy(false)}
  }
  async function handleExportPdf() {setBusy(true)try {const html = buildPrintableHtml(project)const res = await fetch('/api/book/export/pdf', {"method": 'POST',"headers": { 'Content-Type': 'application/json' },"body": JSON.stringify({ html, pageSize })})const blob = await res.blob()const url = URL.createObjectURL(blob)const a = document.createElement('a')a.href = url;'
      a.download = 'zion-os-book.pdf';'
      a.click()URL.revokeObjectURL(url)} finally {setBusy(false)}
  }
  async function handleExportEpub() {setBusy(true)try {const res = await fetch('/api/book/export/epub', {"method": 'POST',"headers": { 'Content-Type': 'application/json' },"body": JSON.stringify({ project })})const blob = await res.blob()const url = URL.createObjectURL(blob)const a = document.createElement('a')a.href = url;'
      a.download = 'zion-os-book.epub';'
      a.click()URL.revokeObjectURL(url)} finally {setBusy(false)}
  }async function onUploadImages() {if (!files) return;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'zion-os-book.pdf';
      a.click();

<<<<<<< HEAD
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

  }

  return (


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
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </select>
          <button
            className='btn btn-sm btn-primary'
            onClick={handleExportPdf}
            disabled={busy}
          >
            <Download className='w-4 h-4 mr-1' /> PDF
<<<<<<< HEAD

          </button>

:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
          <button
            className='btn btn-sm btn-secondary
            onClick={handleExportEpub}
            disabled={busy}
          >
            <FileType className=w-4 h-4 mr-1' /> EPUB
          </button>



=======
          </button>
          <button className="btn btn-sm btn-secondary" onClick={handleExportEpub} disabled={busy}>
            <FileType className="w-4 h-4 mr-1" /> EPUB
          </button>

          <button className="btn btn-sm btn-secondary" onClick={handleExportEpub} disabled={busy}>
            <FileType className="w-4 h-4 mr-1" /> EPUB
          </button>

>>>>>>> origin/cursor/delete-old-data-records-6bba
        </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6>
        <div className=space-y-4">
          <h2 className="font-semibold flex items-center gap-2>
            <BookOpen className=w-4 h-4" /> Cover & Branding
<<<<<<< HEAD

          </h2>



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
          </h2>

:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <label className=&quot;space-y-1&quot;>
</label>
              <div className=&quot;text-xs uppercase opacity-60&quot;>Subtitle</div>
              <input,
className=&quot;w-full border rounded px-3 py-2&quot;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <label className=&quot;space-y-1&quot;>
              <div className=&quot;text-xs uppercase opacity-60&quot;>Author</div>
              <input,
className=&quot;w-full border rounded px-3 py-2&quot;

<<<<<<< HEAD


                value={project.meta.author}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, author: e.target.value } })}              />
            </label>


            <label className=&quot;space-y-1&quot;>

              <div className=&quot;text-xs uppercase opacity-60&quot;>ISBN (optional)</div>
                placeholder=&quot;9781234567897&quot;


              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Subtitle</div>
              <input
                className="w-full border rounded px-3 py-2"
                value={project.meta.subtitle}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, subtitle: e.target.value } })}


              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Author</div>
              <input
                className="w-full border rounded px-3 py-2"
                value={project.meta.author}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, author: e.target.value } })}


              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">ISBN (optional)</div>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="9781234567897"




=======
            <label className=&quot;space-y-1&quot;>
              <div className=&quot;text-xs uppercase opacity-60&quot;>ISBN (optional)</div>
                placeholder=&quot;9781234567897&quot;

:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx

          <div className='pt-2'>{coverPreview}</div>
        </div>

        <div className='space-y-4'>
          <h2 className='font-semibold flex items-center gap-2'>
            <Settings className='w-4 h-4' /> Visual Elements

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

            <div className='grid grid-cols-3 gap-2>

              ))}
            <div className='grid grid-cols-3 gap-2'>

=======
                <div key={i} className="aspect-video bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                  <img src={src} alt="visual" className="object-cover w-full h-full" />
                </div>
              ))}
            <div className='grid grid-cols-3 gap-2'>
>>>>>>> origin/cursor/delete-old-data-records-6bba
              {project.visuals.timelineImages
                .concat(project.visuals.daoVoteCharts)
                .concat(project.visuals.uiScreens)
                .slice(0, 6)
                .map((src, i) => (
                  <div
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD


            <div key={idx} className="border rounded-lg p-4 space-y-2">
              <div className="font-medium">{ch.title}</div>
              <textarea
                className="w-full min-h-[160px] border rounded p-2"
                value={ch.content}
                onChange={(e) => {



=======
      <section className="space-y-4">
        <h2 className="font-semibold">Chapters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.chapters.map((ch, idx) => (

                  const chapters: BookChapter[] = [...project.chapters]
                  chapters[idx] = { ...chapters[idx], content: e.target.value }
                  setProject({ ...project, chapters })
                }}


>>>>>>> origin/cursor/delete-old-data-records-6bba
            <div key={idx} className=&quot;border rounded-lg p-4 space-y-2&quot;>
              <div className=&quot;font-medium&quot;>{ch.title}</div>
              <textarea,
className=&quot;w-full min-h-[160px] border rounded p-2&quot;
<<<<<<< HEAD



                value={ch.content}
                onChange={(e) => {

                  const chapters: BookChapter[] = [...project.chapters];,
                  chapters[idx] = { ...chapters[idx], content: e.target.value ;},
                  setProject({ ...project, chapters })                }}

            <div key={idx} className='border rounded-lg p-4 space-y-2'>
              <div className='font-medium'>{ch.title}</div>
              <textarea
                className='w-full min-h-[160px] border rounded p-2'
                value={ch.content}
                onChange={e => {
                  const chapters: BookChapter[] = [...project.chapters];

                  chapters[idx] = { ...chapters[idx], content: e.target.value ;};
                  setProject({ ...project, chapters });
                }}
origin/cursor/automate-test-improve-and-merge-code-2533:components/book/BookBuilder.tsx



=======
                value={ch.content}
                onChange={(e) => {
                  const chapters: BookChapter[] = [...project.chapters],
                  chapters[idx] = { ...chapters[idx], content: e.target.value },
                  setProject({ ...project, chapters })                }}

:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
>>>>>>> origin/cursor/delete-old-data-records-6bba
              />
            </div>
          ))}
        </div>
      </section>

<<<<<<< HEAD



=======
      <section className="space-y-2">
        <h2 className="font-semibold">Quote Callouts</h2>
        <div className="space-y-2">
          {project.visuals.quoteCallouts.map((q, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <input
                className="border rounded px-2 py-1"
                value={q.text}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts];
>>>>>>> origin/cursor/delete-old-data-records-6bba
                value={q.text}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts];
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx

            <div key={i} className='grid grid-cols-1 md:grid-cols-3 gap-2'>
              <input
                className='border rounded px-2 py-1'

<<<<<<< HEAD

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
                value={q.text}
                onChange={e => {
                  const quoteCallouts = [...project.visuals.quoteCallouts];
                  quoteCallouts[i] = {
                    ...quoteCallouts[i],
<<<<<<< HEAD

                    text: e.target.value;,
                  };
                  setProject({
                    ...project,
                    visuals: { ...project.visuals;, quoteCallouts },

=======
                    text: e.target.value,
                  };
                  setProject({
                    ...project,
                    visuals: { ...project.visuals, quoteCallouts },
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  });
                }}
              />
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
<<<<<<< HEAD


              <input
                className="border rounded px-2 py-1"
                value={q.attribution ?? ''}
                onChange={(e) => {



                value={q.attribution ?? ''}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts],
                  quoteCallouts[i] = { ...quoteCallouts[i], attribution: e.target.value },


                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })                }}
                placeholder=&quot;Attribution&quot;

=======
            <div key = $2;
                  quoteCallouts[i] = { ...quoteCallouts[i], text: e.target.value },
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })
                }}
              />

  )}
:components/book/BookBuilder.tsx
  );
};
  )}
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
  )
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
