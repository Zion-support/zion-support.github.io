<<<<<<< HEAD
import { GetStaticPaths, GetStaticProps  } from 'next';
import { useState  } from 'react';
import { readJson  } from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';

import {readJson} from '../../utils/fsDb';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { GetStaticPaths, GetStaticProps  } from 'next';
import { useState  } from 'react';
import { readJson  } from '../../utils/fsDb';
=======
import {GetStaticPaths, GetStaticProps} from 'next';
import {useState} from 'react';
import {readJson} from '../../utils/fsDb';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { HelpArticle } from '../../utils/support';

=======


import {GetStaticPaths, GetStaticProps} from 'next';
import {useState} from 'react';



>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import type { HelpArticle } from '../../utils/support';
export const getStaticPaths: GetStaticPaths = async () => {
  const articles = read_json < HelpArticle[]>('help / articles.json', []);
  return {
    paths: articles.map(a => ({ params: { slug: a.slug } }))
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async ctx => {
  const slug = ctx.params?.slug as string;
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
<<<<<<< HEAD
  const article = articles.find(a => a.slug === slug) |null;
  return { props: { article } };}

export const getStaticProps: GetStaticProps = async (ctx) => {
=======
  return {
<<<<<<< HEAD
    paths: articles.map(a => ({ params: { slug: a.slug } }))
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async ctx => {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const slug = ctx.params?.slug as string;
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  const article = articles.find((a) => a.slug === slug) || null;
  return { props: { article } }
};

export default function HelpArticlePage({ article }: { article: HelpArticle }) {
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
<<<<<<< HEAD
=======

export const getStaticPaths: GetStaticPaths = async () => {;
  const articles = readJson<HelpArticle[]>('help/articles && articles.json', []);
  return {;
    paths: articles && articles.map(a => ({ params: { slug: a && a.slug } })),;
    fallback: false,;
=======
    paths: articles.map(a => ({ params: { slug: a.slug } })),
    fallback: false,

  };
};

export const getStaticProps: GetStaticProps = async ctx => {;
  const slug = ctx && ctx.params?.slug as string;
  const articles = readJson<HelpArticle[]>('help/articles && articles.json', []);
  const article = articles && articles.find(a => a && a.slug === slug) || null;
  return { props: { article } };};

export default function HelpArticlePage({ article }: { article: HelpArticle }) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ articleId: article.id, helpful })
    });
<<<<<<< HEAD
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
            className='enhanced-button enhanced-button-secondary'
          >
            No
          </button>
        </div>
      </div>
    </article>
);
          >;
            No;
          </button>;
        </div>;
      </div>;
    </article>;
  );
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ articleId: article.id, helpful })});
    setVoted(helpful)
  }

=======
<<<<<<< HEAD
    setVoted(helpful);

  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import { readJson } from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';
export const getStaticPaths: GetStaticPaths = async () => {;
  const articles = readJson<HelpArticle[]>('help/articles.json', []),;
  return {;
    paths: articles.map((a) => ({ params: { slug: a.slug } })),;
    fallback: false  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
},;
export const getStaticProps: GetStaticProps = async (ctx) => {;
  const slug = ctx.params?.slug as string;
  const articles = readJson<HelpArticle[]>('help/articles.json', []),;
  const article = articles.find((a) => a.slug === slug) || null;
  return { props: { article }   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default function HelpArticlePage(req, res) {
  try {
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote(helpful: boolean) {;
    await fetch('/api/support/feedback', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' };
      body: JSON.stringify({ articleId: article.id, helpful })});
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    setVoted(helpful);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
  )
}
    </article>);
;
=======
<<<<<<< HEAD
);
<<<<<<< HEAD
=======

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  )
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
