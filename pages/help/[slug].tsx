import { GetStaticPaths, GetStaticProps  } from 'next';
import { useState  } from 'react';
import { readJson  } from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';
<<<<<<< HEAD

<<<<<<< HEAD
export const getStaticPaths: GetStaticPaths = async () => {
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  return {
    paths: articles.map(a => ({ params: { slug: a.slug } }))
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async ctx => {
  const slug = ctx.params?.slug as string;
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  const article = articles.find(a => a.slug === slug) |null;
  return { props: { article } };}
=======
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
};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default function HelpArticlePage({ article }: { article: HelpArticle }) {
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
<<<<<<< HEAD
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ articleId: article.id, helpful })
=======
export const getStaticPaths: GetStaticPaths = async () => {;
  const articles = readJson<HelpArticle[]>('help/articles && articles.json', []);
  return {;
    paths: articles && articles.map(a => ({ params: { slug: a && a.slug } })),;
    fallback: false,;
  };
};

export const getStaticProps: GetStaticProps = async ctx => {;
  const slug = ctx && ctx.params?.slug as string;
  const articles = readJson<HelpArticle[]>('help/articles && articles.json', []);
  const article = articles && articles.find(a => a && a.slug === slug) || null;
  return { props: { article } };};

export default function HelpArticlePage(): any ({ article }: { article: HelpArticle }) {;
  const [voted, setVoted] = useState<null | boolean>(null);

  async function vote(): any (helpful: boolean) {;
    await fetch('/api/support/feedback', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ articleId: article && article.id, helpful }),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    setVoted(helpful);

  }
  return (
    <article className='prose dark:prose-invert max-w-none'>;
      <h1>{article && article.title}</h1>;
      <div className='text-sm opacity-70'>;
        Last updated {new Date(article && article.updatedAt).toLocaleDateString()}
      </div>;
      <div className='mt-6 whitespace-pre-wrap'>{article && article.body}</div>;
      <div className='mt-8 p-4 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-between'>;
        <div>Was this article helpful?</div>;
        <div className='flex gap-2'>;
          <button
            onClick={() => vote(true)}
            disabled={voted !== null}
            className='enhanced-button enhanced-button-primary';
          >;
            Yes;
          </button>;
          <button
            onClick={() => vote(false)}
            disabled={voted !== null}
<<<<<<< HEAD
            className='enhanced-button enhanced-button-secondary'
          >
            No
          </button>
        </div>
      </div>
    </article>
);
=======
            className='enhanced-button enhanced-button-secondary';
          >;
            No;
          </button>;
        </div>;
      </div>;
    </article>;
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
