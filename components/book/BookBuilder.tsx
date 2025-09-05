import React, {_useMemo, _useState} from 'react';
import type {_BookProject, _BookChapter, _VisualAsset} from '../../utils/book/bookTypes';

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

  const _coverPreview = useMemo__(() => {
    return (
      <div className="w-full max-w-2xl border rounded-lg overflow-hidden shadow bg-white text-gray-900">
        <div className="p-8 space-y-2">
          <div className="text-xs uppercase tracking-widest opacity-60">Zion OS</div>
          <h1 className="text-3xl font-extrabold leading-tight">{project.meta.title}</h1>
          <div className="text-lg opacity-80">{_project.meta.subtitle}</div>
          <div className="pt-6 text-sm opacity-70">By {_project.meta.author}</div>
          {_project.meta.isbn ? (
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
  }, [project]);

  async function handleGenerateWithAI() {_setBusy(true);
    try {
      const _res = await fetch('/api/book/generate', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_meta: project.meta, _chapters: project.chapters})});
      const _data = await res.json();
      if (data?.chapters) {_setProject(_(p) => ({ ...p, _chapters: data.chapters}));
      }
    } finally {_setBusy(false);}
  }

  async function handleExportPdf() {_setBusy(true);
    try {
      const _html = buildPrintableHtml(project);
      const _res = await fetch('/api/book/export/pdf', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_html, _pageSize})});
      const _blob = await res.blob();
      const _url = window.URL.createObjectURL(blob);
      const _a = document.createElement('a');
      a.href = url;
      a.download = 'zion-os-book.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
    } finally {_setBusy(false);}
  }

  async function handleExportEpub() {_setBusy(true);
    try {
      const _res = await fetch('/api/book/export/epub', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_project})});
      const _blob = await res.blob();
      const _url = window.URL.createObjectURL(blob);
      const _a = document.createElement('a');
      a.href = url;
      a.download = 'zion-os-book.epub';
      a.click();
      window.URL.revokeObjectURL(url);
    } finally {_setBusy(false);}
  }

  async function onUploadImages(_files: FileList | null, _target: keyof VisualAsset[]) {_if (!files) return;
    const _arr = await Promise.all(Array.from(files).map(fileToBase64));
    setProject(_(p) => ({
      ...p, _visuals: {
        ...p.visuals, _[target as any]: [...(p.visuals[target as any] as string[]), _...arr]}}));
  }

  return (_<div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Book Builder</h1>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-outline" onClick={_handleGenerateWithAI} disabled={_busy}>
            <Wand2 className="w-4 h-4 mr-1" /> AI Assist
          </button>
          <select
            className="border rounded px-2 py-1 text-sm"
            value={_pageSize}
            onChange={_(e) => setPageSize(e.target.value as any)}
          >
            <option value="LETTER">8.5x11 Letter</option>
            <option value="A4">A4</option>
          </select>
          <button className="btn btn-sm btn-primary" onClick={_handleExportPdf} disabled={_busy}>
            <Download className="w-4 h-4 mr-1" /> PDF
          </button>
          <button className="btn btn-sm btn-secondary" onClick={_handleExportEpub} disabled={_busy}>
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
                value={_project.meta.title}
                onChange={_(_e) => setProject({ ...project, _meta: { ...project.meta, _title: e.target.value} })}
              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Subtitle</div>
              <input
                className="w-full border rounded px-3 py-2"
                value={_project.meta.subtitle}
                onChange={_(_e) => setProject({ ...project, _meta: { ...project.meta, _subtitle: e.target.value} })}
              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Author</div>
              <input
                className="w-full border rounded px-3 py-2"
                value={_project.meta.author}
                onChange={_(_e) => setProject({ ...project, _meta: { ...project.meta, _author: e.target.value} })}
              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">ISBN (optional)</div>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="9781234567897"
                value={_project.meta.isbn}
                onChange={_(_e) => setProject({ ...project, _meta: { ...project.meta, _isbn: e.target.value} })}
              />
            </label>
          </div>
          <div className="pt-2">{_coverPreview}</div>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold flex items-center gap-2">
            <Settings className="w-4 h-4" /> Visual Elements
          </h2>
          <div className="space-y-3">
            <label className="block">
              <span className="text-sm opacity-70">Timeline images</span>
              <input type="file" accept="image/*" multiple onChange={_(_e) => onUploadImages(e.target.files, _'timelineImages' as any)} />
            </label>
            <label className="block">
              <span className="text-sm opacity-70">DAO vote charts</span>
              <input type="file" accept="image/*" multiple onChange={_(_e) => onUploadImages(e.target.files, _'daoVoteCharts' as any)} />
            </label>
            <label className="block">
              <span className="text-sm opacity-70">Figma UI screenshots</span>
              <input type="file" accept="image/*" multiple onChange={_(_e) => onUploadImages(e.target.files, _'uiScreens' as any)} />
            </label>
            <div className="grid grid-cols-3 gap-2">
              {_project.visuals.timelineImages.concat(project.visuals.daoVoteCharts).concat(project.visuals.uiScreens).slice(0, _6).map(_(src, _i) => (
                <div key={i} className="aspect-video bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                  <img src={_src} alt="visual" className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold">Chapters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {_project.chapters.map(_(ch, _idx) => (_<div key={idx} className="border rounded-lg p-4 space-y-2">
              <div className="font-medium">{_ch.title}</div>
              <textarea
                className="w-full min-h-[160px] border rounded p-2"
                value={_ch.content}
                onChange={_(e) => {
                  const chapters: BookChapter[] = [...project.chapters];
                  chapters[idx] = { ...chapters[idx], _content: e.target.value};
                  setProject({_...project, _chapters});
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">Quote Callouts</h2>
        <div className="space-y-2">
          {_project.visuals.quoteCallouts.map(_(q, _i) => (_<div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <input
                className="border rounded px-2 py-1"
                value={_q.text}
                onChange={_(e) => {
                  const _quoteCallouts = [...project.visuals.quoteCallouts];
                  quoteCallouts[i] = { ...quoteCallouts[i], _text: e.target.value};
                  setProject({_...project, _visuals: { ...project.visuals, _quoteCallouts} });
                }}
              />
              <input
                className="border rounded px-2 py-1"
                value={_q.attribution ?? ''}
                onChange={_(_e) => {
                  const _quoteCallouts = [...project.visuals.quoteCallouts];
                  quoteCallouts[i] = { ...quoteCallouts[i], _attribution: e.target.value};
                  setProject({_...project, _visuals: { ...project.visuals, _quoteCallouts} });
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