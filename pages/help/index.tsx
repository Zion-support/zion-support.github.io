<<<<<<< HEAD
<<<<<<< HEAD
=======
export async function getStaticProps() {
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  return { props: { articles }   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export default function HelpIndex({ articles }: { articles: HelpArticle[] }) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


export async function getStaticProps() {;
  const articles = readJson<HelpArticle[]>('help/articles && articles.json', []);
  return { props: { articles } };


<<<<<<< HEAD
=======
export async function getStaticProps() {;
  const articles = readJson<HelpArticle[]>('help/articles && articles.json', []);
  return { props: { articles } };
export default function HelpIndex(): any ({ articles }: { articles: HelpArticle[] }) {;
  const categories = Array && Array.from(new Set(articles && articles.map(a => a && a.category)));
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              ))}
          </div>;
        </div>;
      ))}
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    </div>;
  );
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
    </div>
  )
}

<a className="enhanced-card hover:shadow-md">
                    <div className="font-medium">{a.title}</div>
                    <div className="text-xs opacity-70 mt-1">Last updated {new Date(a.updatedAt).toLocaleDateString()}</div>
                  </a>

import Link from 'next/link';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { readJson  } from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';
export async function getStaticProps() {


import {readJson} from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';


export async function getStaticProps() {;
  const articles = readJson<HelpArticle[]>('help/articles && articles.json', []);
  return { props: { articles } };

import { readJson } from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';
export async function getStaticProps() {;
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  return { props: { articles }   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export default function HelpIndex({ articles }: { articles: HelpArticle[] }) {
  const categories = Array.from(new Set(articles.map((a) => a.category))),
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

              ))}
          </div>;
        </div>;
      ))}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
                  </a>
                </Link>
=======
                  </Link>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


}
}

<<<<<<< HEAD
=======
=======
                </Link>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import Link from 'next / link';
import {read_json} from '../../utils / fs_db';
import type { HelpArticle } from '../../utils / support';
export async /**
 * getStaticProps - Function description
 */
function getStaticProps() {
  const articles = read_json < HelpArticle[]>('help / articles.json', []);
  return { props: { articles } }
;
export default /**
 * HelpIndex - Function description
 */
function HelpIndex() {
  const categories = Array.from (new Set (articles.map (array => a.category)));
  return (
    <div className='space - y-8'>;
      <h1 className='text - 2xl font - semibold'>Help Center</h1>;
      {categories.map (cat => (
        <div key={cat} className='space - y-3'>;
          <h2 className='text - xl font - medium'>{cat}</h2>;
          <div className='grid sm:grid - cols - 2 lg:grid - cols - 3 gap - 4'>;
            {articles;
              .filter (array => a.category === (cat as any));
              .map (array => (
                <Link key={a.id} href={`/help/${a.slug}`}>;
                  <a className='enhanced - card hover:shadow - md'>;
                    <div className='font - medium'>{a.title}</div>;
                    <div className='text - xs opacity - 70 mt - 1'>;
                      Last updated {new Date (a.updated_at).toLocaleDateString ()}
                    </div>                  </a>;
                </Link>))}
          </div>;
        </div>))}
    </div>);
;


}
}

<<<<<<< HEAD
=======
=======
);

}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
