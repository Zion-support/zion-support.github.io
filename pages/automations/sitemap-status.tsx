import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs'
import path from 'path'
type Props = { urlCount: number },

const SitemapStatus: NextPage<Props> = ({ urlCount }) => {
  return (
    <main className=&quot;space-y-4&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Sitemap Status</h1>
      <p className=&quot;text-sm text-gray-600&quot;>Nightly generated. <a className=&quot;text-blue-500 underline&quot; href=&quot;/sitemap.xml&quot;>View sitemap</Link></p>
      <div className=&quot;enhanced-card&quot;>
        <div className=&quot;text-lg&quot;>Indexed URLs: {urlCount}</div>
import type {_NextPage, _GetServerSideProps} from 'next';
import fs from 'fs';
import path from 'path';

type Props = {_urlCount: number};

const SitemapStatus: NextPage<Props> = (_{_urlCount}) => {_return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Sitemap Status</h1>
      <p className="text-sm text-gray-600">Nightly generated. <a className="text-blue-500 underline" href="/sitemap.xml">View sitemap</a></p>
      <div className="enhanced-card">
        <div className="text-lg">Indexed URLs: {urlCount}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    </main>
  )
},

export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicsitemap.xml'),
  let urlCount = 0
  try {
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length
  } catch {}
  return { props: { urlCount } }
},

export default SitemapStatus