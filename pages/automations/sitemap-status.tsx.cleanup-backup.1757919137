<<<<<<< HEAD
import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
import path from 'path',

type Props = { urlCount: number },
=======
import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';

type Props = { urlCount: number };
>>>>>>> origin/auto/autonomy-17186719616

const SitemapStatus: NextPage<Props> = ({ urlCount }) => {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Sitemap Status</h1>
      <p className="text-sm text-gray-600">Nightly generated. <a className="text-blue-500 underline" href="/sitemap.xml">View sitemap</a></p>
      <div className="enhanced-card">
        <div className="text-lg">Indexed URLs: {urlCount}</div>
      </div>
    </main>
<<<<<<< HEAD
  ),
},

export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicsitemap.xml'),
  let urlCount = 0,
  try {
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length,
  } catch {}
  return { props: { urlCount } },
},

export default SitemapStatus,
=======
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'public', 'sitemap.xml');
  let urlCount = 0;
  try {
    const raw = fs.readFileSync(p, 'utf8');
    urlCount = (raw.match(/<url>/g) || []).length;
  } catch {}
  return { props: { urlCount } };
};

export default SitemapStatus;
>>>>>>> origin/auto/autonomy-17186719616
