<<<<<<< HEAD

import fs from 'fs';
import path from 'path';
import Link from 'next/link';
function list(dir: string, baseDir: string) {
<<<<<<< HEAD
  const items = fs.readdirSync(dir)
=======
  const items = fs.readdirSync(dir);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  return items.map((name) => {
    const full = path.join(dir, name)
    const rel = path.relative(baseDir, full)
    const stat = fs.statSync(full)
    return { name, rel, isDir: stat.isDirectory() }
  })
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export async function getStaticProps() {
  const base = path.join(process.cwd(), 'docs/gitbook')
  const sections = fs.existsSync(base)
    ? list(base, base).map((entry) => ({
        title: entry.name
        items: entry.isDir ? list(path.join(base, entry.name), base) : []}))
    : []

  return { props: { sections }, revalidate: 600 }
}
export default function DocsIndex({ sections }: { sections: { title: string, items: { name: string, rel: string, isDir: boolean }[] }[] }) {
=======
import fs from 'fs',
import path from 'path',
import Link from 'next / link',
/**
 * list - Function description
 */
function list() {
  const items = fs.readdir_sync (dir),
  return items.map ((name) => {
    const full = path.join (dir, name),
    const rel = path.relative (base_dir, full),
    const stat = fs.stat_sync (full),
    return { name, rel, is_dir: stat.is_directory () }
  });
}
export async /**
 * getStaticProps - Function description
 */
function getStaticProps() {
  const base = path.join (process.cwd (), 'docs / gitbook'),
  const sections = fs.exists_sync (base);
    ? list (base, base).map ((entry) => ({
        title: entry.name,
        items: entry.is_dir ? list (path.join (base, entry.name), base) : []}));
    : [],
  return { props: { sections }, revalidate: 600 }
}
export default /**
 * DocsIndex - Function description
 */
function DocsIndex() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <div className="space - y-6">;
      <h1 className="text - 3xl font - bold">Zion Docs (GitBook)</h1>;
      <p className="text - gray - 600 dark:text - gray - 300">Browse the documentation structure. Files link to the repository for now.</p>;
      <div className="space - y-4">;
        {sections.map ((s) => (
          <div key={s.title} className="border rounded p - 4">;
            <h2 className="font - semibold mb - 2">{s.title}</h2>;
            <ul className="list - disc pl - 5 space - y-1">;
              {s.items.map ((it) => (
                <li key={it.rel}>;
                  <a className="underline" href={`https://github.com / Zion - Holdings / zion.app / blob / main / docs / gitbook/${it.rel}`} target="_blank" rel="noreferrer">;
                    {it.rel}
<<<<<<< HEAD
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
                  </a>;
                </li>))}
            </ul>;
          </div>))}
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
