<<<<<<< HEAD
<<<<<<< HEAD



=======

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {GetStaticPaths, GetStaticProps} from 'next';
import {useState} from 'react';



import type { HelpArticle } from '../../utils/support';
<<<<<<< HEAD
import {read_json} from '../../utils / fs_db';
import type { HelpArticle } from '../../utils / support';
;
export const getStaticPaths: GetStaticPaths = async () => {
  const articles = read_json < HelpArticle[]>('help / articles.json', []);
  return {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
import {read_json} from '../../utils / fs_db';
import type { HelpArticle } from '../../utils / support';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export const getStaticPaths: GetStaticPaths = async () => {
  const articles = read_json < HelpArticle[]>('help / articles.json', []);
  return {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const getStaticPaths: GetStaticPaths = async () => {
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  return {
    paths: articles.map((a) => ({ params: { slug: a.slug } })),
    fallback: false}
};
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  const article = articles.find((a) => a.slug === slug) || null;
  return { props: { article } }
};
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function HelpArticlePage({ article }: { article: HelpArticle }) {
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const getStaticPaths: GetStaticPaths = async () => {;
  const articles = readJson<HelpArticle[]>('help/articles && articles.json', []);
  return {;
    paths: articles && articles.map(a => ({ params: { slug: a && a.slug } })),;
    fallback: false,;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    paths: articles.map(a => ({ params: { slug: a.slug } })),
    fallback: false,

  };
};
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const getStaticProps: GetStaticProps = async ctx => {;
  const slug = ctx && ctx.params?.slug as string;
  const articles = readJson<HelpArticle[]>('help/articles && articles.json', []);
  const article = articles && articles.find(a => a && a.slug === slug) || null;
  return { props: { article } };};
<<<<<<< HEAD
<<<<<<< HEAD
export default function HelpArticlePage(): any ({ article }: { article: HelpArticle }) {;
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote(): any (helpful: boolean) {;
    await fetch('/api/support/feedback', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ articleId: article && article.id, helpful }),;
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className='enhanced-button enhanced-button-secondary';
=======


            className='enhanced-button enhanced-button-secondary';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    paths: articles.map (array => ({ params: { slug: a.slug } })),
    fallback: false,
  }
}
;
export const getStaticProps: GetStaticProps = async ctx => {
  const slug = ctx.params?.slug as string;
  const articles = read_json < HelpArticle[]>('help / articles.json', []);
  const article = articles.find (array => a.slug === slug) || null;
  return { props: { article } }}
;
export default /**
 * HelpArticlePage - Function description
 */
function HelpArticlePage() {
  const [voted, set_voted] = useState < null | boolean>(null);
;
  async /**
 * vote - Function description
 */
function vote() {
    await fetch ('/api / support / feedback', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ article_id: article.id, helpful }),
    });
    set_voted (helpful);
  }
  return (
    <article className='prose dark:prose - invert max - w-none'>;
      <h1>{article.title}</h1>;
      <div className='text - sm opacity - 70'>;
        Last updated {new Date (article.updated_at).toLocaleDateString ()}
      </div>;
      <div className='mt - 6 whitespace - pre - wrap'>{article.body}</div>;
      <div className='mt - 8 p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800 flex items - center justify - between'>;
        <div > Was this article helpful?</div>;
        <div className='flex gap - 2'>;
          <button;
            on_click={() => vote (true)}
            disabled={voted !== null}
            className='enhanced - button enhanced - button - primary';
          >;
            Yes;
          </button>;
          <button;
            on_click={() => vote (false)}
            disabled={voted !== null}
            className='enhanced - button enhanced - button - secondary';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >;
            No;
          </button>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ articleId: article.id, helpful })});
    setVoted(helpful)
  }
<<<<<<< HEAD
<<<<<<< HEAD
import { GetStaticPaths, GetStaticProps  } from 'next';
import { useState  } from 'react';
import { readJson  } from '../../utils/fsDb';
import {GetStaticPaths, GetStaticProps} from 'next';
import {useState} from 'react';
import {readJson} from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
export default function HelpArticlePage({ article }: { article: HelpArticle }) {;

  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ articleId: article.id, helpful })
    });


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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setVoted(helpful);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export const getStaticPaths: GetStaticPaths = async () => {;
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
export default function HelpArticlePage({ article }: { article: HelpArticle }) {
    paths: articles.map(a => ({ params: { slug: a.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ctx => {;
  const slug = ctx.params?.slug as string;
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  const article = articles.find(a => a.slug === slug) || null;
  return { props: { article } };};

export default function HelpArticlePage({ article }: { article: HelpArticle }) {;
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ articleId: article.id, helpful })
    });

    setVoted(helpful);

  }
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

    setVoted(helpful);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD



}


  )
}
<<<<<<< HEAD
    </article>);
;



    </article>);
;
        </div>
      </div>
    </article>
);

}
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

    </article>);
;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        </div>
      </div>
    </article>



}

=======

  )
}

    </article>);
;

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
