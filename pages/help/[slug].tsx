

import type { HelpArticle } from '../../utils/support';




import type { HelpArticle } from '../../utils/support';

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = read_json < HelpArticle[]>('help / articles.json', []);
  return {

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
  const article = articles.find((a) => a.slug === slug) || null;
  return { props: { article } }
};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default function HelpArticlePage({ article }: { article: HelpArticle }) {


    paths: articles.map(a => ({ params: { slug: a.slug } })),
    fallback: false,

  };
};

export const getStaticProps: GetStaticProps = async ctx => {;
  const slug = ctx && ctx.params?.slug as string;
  const articles = readJson<HelpArticle[]>('help/articles && articles.json', []);
  const article = articles && articles.find(a => a && a.slug === slug) || null;
  return { props: { article } };};



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ articleId: article.id, helpful })
    });

    setVoted(helpful);

  }

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

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



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

    setVoted(helpful);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}


}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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

);

  )
}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

