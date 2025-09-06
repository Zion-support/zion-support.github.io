<<<<<<< HEAD
import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
=======
<<<<<<< HEAD

type Props = { urlCount: number }
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
type Props = { urlCount: number },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
const SitemapStatus: NextPage<Props> = ({ urlCount }) => {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Sitemap Status</h1>
      <p className="text-sm text-gray-600">Nightly generated. <a className="text-blue-500 underline" href="/sitemap.xml">View sitemap</a></p>
      <div className="enhanced-card">
        <div className="text-lg">Indexed URLs: {urlCount}</div>
      </div>
    </main>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicsitemap.xml')
  let urlCount = 0
  try {
    const raw = fs.readFileSync(p, 'utf8')
    urlCount = (raw.match(/<url>/g) |[]).length
  } catch {}
  return { props: { urlCount } }
}
export default SitemapStatus;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
import path from 'path',
type Props = { url_count: number },
const SitemapStatus: NextPage < Props> = ({ url_count }) => {
  return (
    <main className="space - y-4">;
      <h1 className="text - 2xl font - semibold">Sitemap Status</h1>;
      <p className="text - sm text - gray - 600">Nightly generated. <a className="text - blue - 500 underline" href="/sitemap.xml">View sitemap</a></p>;
      <div className="enhanced - card">;
        <div className="text - lg">Indexed URLs: {url_count}</div>;
      </div>;
    </main>);
},
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join (process.cwd (), 'publicsitemap.xml'),
  let url_count = 0,
  try {
    const raw = fs.readFileSync (p, 'utf8'),
    url_count = (raw.match (/<url>/g) || []).length;
  } catch {}
  return { props: { url_count } }
},
export default SitemapStatus,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
