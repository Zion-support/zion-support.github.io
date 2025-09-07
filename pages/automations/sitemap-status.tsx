<<<<<<< HEAD
import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
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
<<<<<<< HEAD
    const raw = fs.readFileSync(p, 'utf8');
    urlCount = (raw.match(/<url>/g) || []).length
  } catch {}
  return { props: { urlCount } }
};

export default SitemapStatus;
=======
    const raw = fs.readFileSync($2);
    urlCount = $2;
export default SitemapStatus,
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function sitemapstatus() {
  return (
    <Layout>
      <Head>
        <title>Sitemap Status - Zion Tech Group</title>
        <meta name="description" content="Sitemap Status solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap Status</h1>
          <p className="text-lg text-gray-600">
            Professional sitemap status solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
