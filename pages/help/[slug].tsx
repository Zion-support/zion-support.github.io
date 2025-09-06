import { GetStaticPaths, GetStaticProps  } from 'next';
import { useState  } from 'react';
import { readJson  } from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';
export const getStaticPaths: GetStaticPaths;
    setVoted(helpful)
export default function HelpArticlePage({ article }: { article: HelpArticle }) {
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ articleId: article.id, helpful }),
    });
    setVoted(helpful);
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
  );
