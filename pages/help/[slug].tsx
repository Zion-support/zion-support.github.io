

=======

=======

=======

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {GetStaticPaths, GetStaticProps} from 'next';
import {useState} from 'react';



import type { HelpArticle } from '../../utils/support';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
import {read_json} from '../../utils / fs_db';
import type { HelpArticle } from '../../utils / support';
;export const getStaticPaths: GetStaticPaths = async () => {
  const articles = read_json < HelpArticle[]>('help / articles.json', []);
  return {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const getStaticPaths: GetStaticPaths = async () => {
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  return {
    paths: articles.map((a) => ({ params: { slug: a.slug } })),
    fallback: false}
};
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  const article = articles.find((a) => a.slug === slug) || null;
  return { props: { article } }
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156export default function HelpArticlePage({ article }: { article: HelpArticle }) {
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export const getStaticPaths: GetStaticPaths = async () => {;
  const articles = readJson<HelpArticle[]>('help/articles && articles.json', []);
  return {;
    paths: articles && articles.map(a => ({ params: { slug: a && a.slug } })),;
    fallback: false,;
    paths: articles.map(a => ({ params: { slug: a.slug } })),
    fallback: false,

  };
};

            className='enhanced-button enhanced-button-secondary';
=======    paths: articles.map (array => ({ params: { slug: a.slug } })),
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          >;
            No;
          </button>;
        </div>;
      </div>;

==============


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ articleId: article.id, helpful })});
    setVoted(helpful)
  }
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

}


  )
}
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
