<<<<<<< HEAD
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import { readJson  } from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';
export async function getStaticProps() {


<<<<<<< HEAD
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import {readJson} from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export async function getStaticProps() {;
  const articles = readJson<HelpArticle[]>('help/articles && articles.json', []);
  return { props: { articles } };

<<<<<<< HEAD
export default function HelpIndex({ articles }: { articles: HelpArticle[] }) {;
  const categories = Array.from(new Set(articles.map(a => a.category)));
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

              ))}
          </div>;
        </div>;
      ))}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
);
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
);

}
}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======
  )
}

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


}
}

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
