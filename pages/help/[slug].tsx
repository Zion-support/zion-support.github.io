import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import { readJson } from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  return {
    paths: articles.map((a) => ({ params: { slug: a.slug } })),
    fallback: false};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  const article = articles.find((a) => a.slug === slug) || null;
  return { props: { article } };
};

export default function HelpArticlePage({ article }: { article: HelpArticle }) {
  const [voted, setVoted] = useState<null | boolean>(null);

  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ articleId: article.id, helpful })});
    setVoted(helpful);
  }

  return (
    <article className=&quot;prose dark:prose-invert max-w-none&quot;>
      <h1>{article.title}</h1>
      <div className=&quot;text-sm opacity-70&quot;>Last updated {new Date(article.updatedAt).toLocaleDateString()}</div>
      <div className=&quot;mt-6 whitespace-pre-wrap&quot;>{article.body}</div>
      <div className=&quot;mt-8 p-4 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-between&quot;>
        <div>Was this article helpful?</div>
        <div className=&quot;flex gap-2&quot;>
          <button onClick={() => vote(true)} disabled={voted !== null} className=&quot;enhanced-button enhanced-button-primary&quot;>Yes</button>
          <button onClick={() => vote(false)} disabled={voted !== null} className=&quot;enhanced-button enhanced-button-secondary&quot;>No</button>
        </div>
      </div>
    </article>
  );
}