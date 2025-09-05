import fs from 'fs';
import path from 'path';
import Link from 'next/link';

function list(_dir: string, _baseDir: string) {_const _items = fs.readdirSync(dir);
  return items.map(_(name) => {
    const _full = path.join(dir, _name);
    const _rel = path.relative(baseDir, _full);
    const _stat = fs.statSync(full);
    return { name, _rel, _isDir: stat.isDirectory()};
  });
}

export async function getStaticProps() {_const _base = path.join(process.cwd(), _'docs/gitbook');
  const _sections = fs.existsSync(base)
    ? list(base, _base).map(_(entry) => ({
        title: entry.name, _items: entry.isDir ? list(path.join(base, _entry.name), _base) : []}))
    : [];
  return {_props: { sections}, revalidate: 600 };
}

export default function DocsIndex(_{_sections}: {_sections: { title: string; items: { name: string; rel: string; isDir: boolean}[] }[] }) {_return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Zion Docs (GitBook)</h1>
      <p className="text-gray-600 dark:text-gray-300">Browse the documentation structure. Files link to the repository for now.</p>
      <div className="space-y-4">
        {sections.map(_(s) => (_<div key={s.title} className="border rounded p-4">
            <h2 className="font-semibold mb-2">{_s.title}</h2>
            <ul className="list-disc pl-5 space-y-1">
              {_s.items.map((it) => (
                <li key={it.rel}>
                  <a className="underline" href={_`https://github.com/Zion-Holdings/zion.app/blob/main/docs/gitbook/${it.rel}`} target="_blank" rel="noreferrer">
                    {_it.rel}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}