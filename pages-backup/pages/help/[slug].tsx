<<<<<<< HEAD
import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import { readJson } from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';
export const getStaticPaths: GetStaticPaths = async () => {
  const articles = readJson<HelpArticle[]>('help/articles.json', []),
  return {
    paths: articles.map((a) => ({ params: { slug: a.slug } })),
    fallback: false}
},

export const getStaticProps: GetStaticProps = $2;
  const articles = readJson<HelpArticle[]>('help/articles.json', []),
  const article = $2;
  return { props: { article } }
},

export default function HelpArticlePage({ article }: { article: HelpArticle}) {
  const [voted, setVoted] = useState<null | boolean>(null),

  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ articleId: article.id, helpful })}),
    setVoted(helpful)
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{article.title}</h1>
      <div className="text-sm opacity-70">Last updated {new Date(article.updatedAt).toLocaleDateString()}</div>
      <div className="mt-6 whitespace-pre-wrap">{article.body}</div>
      <div className="mt-8 p-4 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div>Was this article helpful?</div>
        <div className="flex gap-2">
          <button onClick={() => vote(true)} disabled={voted !== null} className="enhanced-button enhanced-button-primary">Yes</button>
          <button onClick={() => vote(false)} disabled={voted !== null} className="enhanced-button enhanced-button-secondary">No</button>
        </div>
      </div>
    </article>
  )
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function HelpSlug() {
  return (
    <Layout>
      <Head>
        <title>Help - Zion Tech Group</title>
        <meta name="description" content="Help solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Help</h1>
          <p className="text-lg text-gray-600">
            Professional help solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}