import fs from 'fs';
import path from 'path';
import Link from 'next/link';

function list(dir: string, baseDir: string) {
  const items = fs.readdirSync(dir);
  return items.map((name) => {
    const full = path.join(dir, name);
    const rel = path.relative(baseDir, full);
    const stat = fs.statSync(full);
    return { name, rel, isDir: stat.isDirectory() };
  });
}

export async function getStaticProps() {
  const base = path.join(process.cwd(), 'docs/gitbook');
  const sections = fs.existsSync(base)
    ? list(base, base).map((entry) => ({
        title: entry.name,
        items: entry.isDir ? list(path.join(base, entry.name), base) : []}))
    : [];
  return { props: { sections }, revalidate: 600 };
}

export default function DocsIndex({ sections }: { sections: { title: string; items: { name: string; rel: string; isDir: boolean }[] }[] }) {
  return (
    <div className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-3xl font-bold&quot;>Zion Docs (GitBook)</h1>
      <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Browse the documentation structure. Files link to the repository for now.</p>
      <div className=&quot;space-y-4&quot;>
        {sections.map((s) => (
          <div key={s.title} className=&quot;border rounded p-4&quot;>
            <h2 className=&quot;font-semibold mb-2&quot;>{s.title}</h2>
            <ul className=&quot;list-disc pl-5 space-y-1&quot;>
              {s.items.map((it) => (
                <li key={it.rel}>
                  <a className=&quot;underline&quot; href={`https://github.com/Zion-Holdings/zion.app/blob/main/docs/gitbook/${it.rel}`} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>
                    {it.rel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}