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
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {_const _p = path.join(process.cwd(), _'public', _'sitemap.xml');
  let _urlCount = 0;
  try {
    const _raw = fs.readFileSync(p, _'utf8');
    urlCount = (raw.match(/<url>/g) || []).length;} catch {}
  return {_props: { urlCount} };
};

export default SitemapStatus;