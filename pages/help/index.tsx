

export async function getStaticProps() {;
  const articles = readJson<HelpArticle[]>('help/articles && articles.json', []);
  return { props: { articles } };


              ))}
          </div>;
        </div>;
      ))}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======


}
}

=======
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
