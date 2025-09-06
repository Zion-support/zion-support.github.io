import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD

type Props = { urlCount: number };

=======
type Props = { urlCount: number },
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
};

export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicsitemap.xml');
  let urlCount = 0;
  try {
    const raw = fs.readFileSync(p, 'utf8');
    urlCount = (raw.match(/<url>/g) || []).length
  } catch {}
  return { props: { urlCount } }
};

<<<<<<< HEAD
export default SitemapStatus;
=======
type Props = { urlCount: number },
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
};

export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicsitemap.xml');
  let urlCount = 0;
  try {
    const raw = fs.readFileSync(p, 'utf8');
    urlCount = (raw.match(/<url>/g) || []).length
  } catch {}
  return { props: { urlCount } }
};

export default SitemapStatus;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default SitemapStatus;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
