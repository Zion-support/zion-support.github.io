import React from 'react';
<<<<<<< HEAD
export default function SEOIndex() {
  const [slugs, setSlugs] = React.useState<string[]>([]),

  React.useEffect(() => {
    // In a real app, list from API or build-time, here we rely on directory hint not available at runtime.
    setSlugs([])
  }, []),
=======
import Head from 'next/head';
import Layout from '../components/layout/Layout';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

export default function index() {
  return (
<<<<<<< HEAD
    <div>
      <h1 className="text-2xl font-semibold mb-4">SEO Landing Pages</h1>
      {slugs.length === 0 ? (
        <div className="text-sm text-gray-500">Generated pages will appear once deployed.</div>
      ) : (
        <ul className="list-disc ml-5">
          {slugs.map((s) => (
            <li key={s}><a className="text-cyan-600" href={`/seo/${s}`}>{s}</a></li>
          ))}
        </ul>
      )}
    </div>
  )
=======
    <Layout>
      <Head>
        <title>Index - Zion Tech Group</title>
        <meta name="description" content="Index solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Index</h1>
          <p className="text-lg text-gray-600">
            Professional index solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}