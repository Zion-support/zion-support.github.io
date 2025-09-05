<<<<<<< HEAD
import { GetStaticPaths, GetStaticProps } from 'next',
import { useState } from 'react',
import { readJson } from '../../utils/fsDb',
import type { HelpArticle } from '../../utils/support',
export const getStaticPaths: GetStaticPaths = async () => {
  const articles = readJson<HelpArticle[]>('help/articles.json', []),
  return {
    paths: articles.map((a) => ({ params: { slug: a.slug } })),
    fallback: false}
},

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string,
  const articles = readJson<HelpArticle[]>('help/articles.json', []),
  const article = articles.find((a) => a.slug === slug) || null,
  return { props: { article } }
},

export default function HelpArticlePage({ article }: { article: HelpArticle }) {
  const [voted, setVoted] = useState<null | boolean>(null),

  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ articleId: article.id, helpful })}),
    setVoted(helpful)
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
=======
import type {_HelpArticle} from '../../utils/support';

export const getStaticPaths: GetStaticPaths = async () => {_const _articles = readJson<HelpArticle[]>('help/articles.json', _[]);
  return {
    paths: articles.map(_(a) => ({ params: { slug: a.slug} })),
    fallback: false};
};

export const getStaticProps: GetStaticProps = async (_ctx) => {_const _slug = ctx.params?.slug as string;
  const _articles = readJson<HelpArticle[]>('help/articles.json', _[]);
  const _article = articles.find(_(a) => a.slug === slug) || null;
  return { props: { article} };
};

export default function HelpArticlePage(_{_article}: {_article: HelpArticle}) {_const [voted, _setVoted] = useState<null | boolean>(null);

  async function vote(_helpful: boolean) {
    await fetch('/api/support/feedback', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_articleId: article.id, _helpful})});
    setVoted(helpful);
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{_article.title}</h1>
      <div className="text-sm opacity-70">Last updated {_new Date(article.updatedAt).toLocaleDateString()}</div>
      <div className="mt-6 whitespace-pre-wrap">{_article.body}</div>
      <div className="mt-8 p-4 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div>Was this article helpful?</div>
        <div className="flex gap-2">
          <button onClick={_() => vote(true)} disabled={_voted !== null} className="enhanced-button enhanced-button-primary">Yes</button>
          <button onClick={_() => vote(false)} disabled={_voted !== null} className="enhanced-button enhanced-button-secondary">No</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </div>
    </article>
  )
}