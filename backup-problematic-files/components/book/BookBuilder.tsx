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
    return (
      <div className="w - full max - w-2xl border rounded - lg overflow - hidden shadow bg - white text - gray - 900">;
        <div className="p - 8 space - y-2">;
          <div className="text - xs uppercase tracking - widest opacity - 60">Zion OS</div>;
          <h1 className="text - 3xl font - extrabold leading - tight">{project.meta.title}</h1>;
          <div className="text - lg opacity - 80">{project.meta.subtitle}</div>;
          <div className="pt - 6 text - sm opacity - 70">By {project.meta.author}</div>;
          {project.meta.isbn ? (
              />;
            </label>;
            <label className="space - y-1">;
              <div className="text - xs uppercase opacity - 60">Subtitle</div>;
              <input;
                className="w - full border rounded px - 3 py - 2";
                value={project.meta.subtitle}
                on_change={(e) => set_project ({ ...project, meta: { ...project.meta, subtitle: e.target.value } })}
              />;
            </label>;
            <label className="space - y-1">;
              <div className="text - xs uppercase opacity - 60">Author</div>;
              <input;
                className="w - full border rounded px - 3 py - 2";
                value={project.meta.author}
                on_change={(e) => set_project ({ ...project, meta: { ...project.meta, author: e.target.value } })}
              />;
            </label>;
            <label className="space - y-1">;
              <div className="text - xs uppercase opacity - 60">ISBN (optional)</div>;
              <input;
                className="w - full border rounded px - 3 py - 2";
                placeholder="9781234567897";
                value={project.meta.isbn}
                }}
              />;
              <input;
                className="border rounded px - 2 py - 1";
                value={q.attribution ?? ''}
}