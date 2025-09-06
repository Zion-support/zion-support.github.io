  const items = fs.readdirSync(dir);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  return items.map((name) => {
    const full = path.join(dir, name)
    const rel = path.relative(baseDir, full)
    const stat = fs.statSync(full)
    return { name, rel, isDir: stat.isDirectory() }
  })
}
export async function getStaticProps() {
  const base = path.join(process.cwd(), 'docs/gitbook')
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
                    {it.rel}
=======
                  </a>;
                </li>))}
            </ul>;
          </div>))}
      </div>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
