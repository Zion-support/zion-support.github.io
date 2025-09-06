import Link from 'next/link';
import { readJson  } from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';
<<<<<<< HEAD
<<<<<<< HEAD
export async function getStaticProps() {

=======
export async function getStaticProps() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  return { props: { articles } }
export default function HelpIndex({ articles }: { articles: HelpArticle[] }) {
<<<<<<< HEAD
  const categories = Array.from(new Set(articles.map(a => a.category)));

=======

export async function getStaticProps() {;
  const articles = readJson<HelpArticle[]>('help/articles && articles.json', []);
  return { props: { articles } };

export default function HelpIndex(): any ({ articles }: { articles: HelpArticle[] }) {;
  const categories = Array && Array.from(new Set(articles && articles.map(a => a && a.category)));
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className='space-y-8'>;
      <h1 className='text-2xl font-semibold'>Help Center</h1>;
      {categories && categories.map(cat => (;
        <div key={cat} className='space-y-3'>;
          <h2 className='text-xl font-medium'>{cat}</h2>;
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>;
            {articles;
              .filter(a => a && a.category === (cat as any));
              .map(a => (;
                <Link key={a && a.id} href={`/help/${a && a.slug}`}>;
                  <a className='enhanced-card hover:shadow-md'>;
                    <div className='font-medium'>{a && a.title}</div>;
                    <div className='text-xs opacity-70 mt-1'>;
                      Last updated {new Date(a && a.updatedAt).toLocaleDateString()}
                    </div>                  </a>;
                </Link>;
              ))}
          </div>;
        </div>;
      ))}
<<<<<<< HEAD
    </div>
);
=======
    </div>;
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  const categories = Array.from(new Set(articles.map((a) => a.category)));
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Help Center</h1>
      {categories.map((cat) => (
        <div key={cat} className="space-y-3">
          <h2 className="text-xl font-medium">{cat}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles
              .filter((a) => a.category === (cat as any))
              .map((a) => (
                <Link key={a.id} href={`/help/${a.slug}`}>
                  <a className="enhanced-card hover:shadow-md">
                    <div className="font-medium">{a.title}</div>
                    <div className="text-xs opacity-70 mt-1">Last updated {new Date(a.updatedAt).toLocaleDateString()}</div>
                  </a>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
