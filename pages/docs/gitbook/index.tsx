<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
function list(dir: string, baseDir: string) {
  const items = fs.readdirSync($2);
  return items.map((name) => {
    const full = path.join($2);
    const rel = path.relative($2);
    const stat = fs.statSync($2);
    return { name, rel, isDir: stat.isDirectory() }
  })
}

export async function getStaticProps() {
  const base = path.join(process.cwd(), 'docs/gitbook'),
  const sections = fs.existsSync(base)
    ? list(base, base).map((entry) => ({
        title: entry.name,
        items: entry.isDir ? list(path.join(base, entry.name), base) : []}))
    : [],
  return { props: { sections }, revalidate: 600}
}

export default function DocsIndex({ sections }: { sections: { title: string, items: { name: string, rel: string, isDir: boolean}[] }[] }) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Zion Docs (GitBook)</h1>
      <p className="text-gray-600 dark:text-gray-300">Browse the documentation structure. Files link to the repository for now.</p>
      <div className="space-y-4">
        {sections.map((s) => (
          <div key={s.title} className="border rounded p-4">
            <h2 className="font-semibold mb-2">{s.title}</h2>
            <ul className="list-disc pl-5 space-y-1">
              {s.items.map((it) => (
                <li key={it.rel}>
                  <a className="underline" href={`https://github.com/Zion-Holdings/zion.app/blob/main/docs/gitbook/${it.rel}`} target="_blank" rel="noreferrer">
                    {it.rel}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout/Layout';

export default function DocsGitbookIndex() {
  return (
    <Layout>
      <Head>
        <title>Docs Gitbook - Zion Tech Group</title>
        <meta name="description" content="Docs Gitbook solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Docs Gitbook</h1>
          <p className="text-lg text-gray-600">
            Professional docs gitbook solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}