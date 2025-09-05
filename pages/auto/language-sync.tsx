import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const LanguageSync: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Global Language Sync Agent</title>
        <meta name=&quot;description&quot; content=&quot;AI-powered translation backfill for locale files.&quot; />
      </Head>
      <main className=&quot;space-y-4&quot;>
        <h1 className=&quot;text-2xl font-bold&quot;>Global Language Sync Agent</h1>
        <p>This autonomous agent scans English strings and backfills missing translations in Portuguese, Spanish, and Arabic. It opens commits automatically.</p>
        <div className=&quot;space-x-4 text-blue-600 underline&quot;>
          <Link href=&quot;/public/locales/en/common.json&quot;>EN</Link>
          <Link href=&quot;/public/locales/pt/common.json&quot;>PT</Link>
          <Link href=&quot;/public/locales/es/common.json&quot;>ES</Link>
          <Link href=&quot;/public/locales/ar/common.json&quot;>AR</Link>
        </div>
      </main>
    </div>
  );
};

export default LanguageSync;