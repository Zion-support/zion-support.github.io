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
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}