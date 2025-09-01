import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import GeoFilter, { GeoMode } from '../../components/ui/GeoFilter';

const BlogIndex: NextPage = () => {
  const [geo, setGeo] = useState<{ countryCode?: string; country?: string } | null>(null);
  const [mode, setMode] = useState<GeoMode>('global');
  const [countryCode, setCountryCode] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/geo/resolve');
        const data = await res.json();
        setGeo({ countryCode: data.countryCode, country: data.country });
        if (data.countryCode) setCountryCode(data.countryCode);
      } catch {}
    })();
  }, []);

  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'BR', name: 'Brazil' },
    { code: 'CA', name: 'Canada' },
    { code: 'PT', name: 'Portugal' },
    { code: 'JP', name: 'Japan' },
    { code: 'DE', name: 'Germany' },
  ];

  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      
      <main>
        <h1>Index</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog"><a>Back to Blog</a></Link>
      </main>
    </div>
  );
};

export default BlogIndex;