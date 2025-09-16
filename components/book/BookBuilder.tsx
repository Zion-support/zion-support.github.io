import { defaultChapters } from '../../utils/book/defaultOutline';

const initialProject: BookProject = {
  meta: {
    title: 'Zion OS: Building the Civilization Protocol',
    subtitle: 'AI. Talent. Trust.',
    author: 'Founder Name',
    isbn: '',
  chapters: defaultChapters,
  visuals: {
    timelineImages: [],
    daoVoteCharts: [],
    uiScreens: [],
    quoteCallouts: [
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function BookBuilder() {

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

  async function handleGenerateWithAI() {
    setBusy(true);
    try {
      }
    } finally {
      setBusy(false);
    }
  }

  async function handleExportPdf() {
    setBusy(true);
    try {
      const html = buildPrintableHtml(project);
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

    if (!files) return;
    const arr = await Promise.all(Array.from(files).map(fileToBase64));
    setProject((p) => ({
      ...p,
      visuals: {
        ...p.visuals,
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
              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Subtitle</div>
              <input
                className="w-full border rounded px-3 py-2"
                value={project.meta.subtitle}
              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">Author</div>
              <input
                className="w-full border rounded px-3 py-2"
                value={project.meta.author}
              />
            </label>
            <label className="space-y-1">
              <div className="text-xs uppercase opacity-60">ISBN (optional)</div>
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="9781234567897"
                value={project.meta.isbn}
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
            <div key={idx} className="border rounded-lg p-4 space-y-2">
              <div className="font-medium">{ch.title}</div>
              <textarea
                className="w-full min-h-[160px] border rounded p-2"
                value={ch.content}
                onChange={(e) => {
                  const chapters: BookChapter[] = [...project.chapters];
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">Quote Callouts</h2>
        <div className="space-y-2">
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <input
                className="border rounded px-2 py-1"
                value={q.text}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts];
                }}
              />
              <input
                className="border rounded px-2 py-1"
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