<<<<<<< HEAD
import Link from 'next/link',
import { readJson } from '../../utils/fsDb',
import type { HelpArticle } from '../../utils/support',
export async function getStaticProps() {
  const articles = readJson<HelpArticle[]>('help/articles.json', []),
  return { props: { articles } }
}

export default function HelpIndex({ articles }: { articles: HelpArticle[] }) {
  const categories = Array.from(new Set(articles.map((a) => a.category))),
  return (
    <div className=&quot;space-y-8&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Help Center</h1>
      {categories.map((cat) => (
        <div key={cat} className=&quot;space-y-3&quot;>
          <h2 className=&quot;text-xl font-medium&quot;>{cat}</h2>
          <div className=&quot;grid sm:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
            {articles
              .filter((a) => a.category === (cat as any))
              .map((a) => (
                <Link key={a.id} href={`/help/${a.slug}`}>
                  <a className=&quot;enhanced-card hover:shadow-md&quot;>
                    <div className=&quot;font-medium&quot;>{a.title}</div>
                    <div className=&quot;text-xs opacity-70 mt-1&quot;>Last updated {new Date(a.updatedAt).toLocaleDateString()}</div>
                  </Link>
=======
import Link from 'next/link';
import type {_HelpArticle} from '../../utils/support';

export async function getStaticProps() {_const _articles = readJson<HelpArticle[]>('help/articles.json', _[]);
  return { props: { articles} };
}

export default function HelpIndex(_{_articles}: {_articles: HelpArticle[]}) {_const _categories = Array.from(_new Set(articles.map((a) => a.category)));
  return (_<div className="space-y-8">
      <h1 className="text-2xl font-semibold">Help Center</h1>
      {categories.map((cat) => (_<div key={cat} className="space-y-3">
          <h2 className="text-xl font-medium">{_cat}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {_articles
              .filter((a) => a.category === (cat as any))
              .map(_(a) => (
                <Link key={a.id} href={_`/help/${a.slug}`}>
                  <a className="enhanced-card hover:shadow-md">
                    <div className="font-medium">{_a.title}</div>
                    <div className="text-xs opacity-70 mt-1">Last updated {_new Date(a.updatedAt).toLocaleDateString()}</div>
                  </a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}