import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import { readJson } from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';

<<<<<<< HEAD
=======
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export const getStaticPaths: GetStaticPaths = async () => {
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  return {
    paths: articles.map(a => ({ params: { slug: a.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const slug = ctx.params?.slug as string;
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  const article = articles.find(a => a.slug === slug) || null;
<<<<<<< HEAD
  return { props: { article } };};
=======
  return { props: { article } };
export const getStaticPaths: GetStaticPaths = async () => {
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  return {
    paths: articles.map((a) => ({ params: { slug: a.slug } })),
    fallback: false}
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  const article = articles.find((a) => a.slug === slug) || null;
  return { props: { article } }
  const article = articles.find((a) => a.slug === slug) || null;
  return { props: { article } }
ursor/integrate-build-improve-and-re-verify-b76c
};
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function HelpArticlePage({ article }: { article: HelpArticle }) {
  const [voted, setVoted] = useState<null | boolean>(null);

  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ articleId: article.id, helpful }),
    });
    setVoted(helpful);
<<<<<<< HEAD
=======
      body: JSON.stringify({ articleId: article.id, helpful })});
    setVoted(helpful)
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

  return (
    <article className='prose dark:prose-invert max-w-none'>
      <h1>{article.title}</h1>
      <div className='text-sm opacity-70'>
        Last updated {new Date(article.updatedAt).toLocaleDateString()}
      </div>
      <div className='mt-6 whitespace-pre-wrap'>{article.body}</div>
      <div className='mt-8 p-4 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-between'>
        <div>Was this article helpful?</div>
        <div className='flex gap-2'>
          <button
            onClick={() => vote(true)}
            disabled={voted !== null}
            className='enhanced-button enhanced-button-primary'
          >
            Yes
          </button>
          <button
            onClick={() => vote(false)}
            disabled={voted !== null}
            className='enhanced-button enhanced-button-secondary'
          >
            No
          </button>
        </div>
      </div>
    </article>
<<<<<<< HEAD
  );
=======
  );
      body: JSON.stringify({ articleId: article.id, helpful })});
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
}
  )
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
