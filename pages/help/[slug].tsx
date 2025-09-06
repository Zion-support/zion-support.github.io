<<<<<<< HEAD
import { GetStaticPaths, GetStaticProps  } from 'next';
import { useState  } from 'react';
import { readJson  } from '../../utils/fsDb';
import {GetStaticPaths, GetStaticProps} from 'next';
import {useState} from 'react';
import {readJson} from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



import {GetStaticPaths, GetStaticProps} from 'next';'
import {useState} from 'react';
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


'
import type { HelpArticle } from '../../utils/support';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import {read_json} from '../../utils / fs_db';
import type { HelpArticle } from '../../utils / support';
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export const getStaticPaths: GetStaticPaths = async () => {
=======

export const getStaticPaths: GetStaticPaths = async () => {';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const articles = read_json < HelpArticle[]>('help / articles.json', []);
  return {}
export const getStaticPaths: GetStaticPaths = async () => {';
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
<<<<<<< HEAD
  return {
<<<<<<< HEAD
<<<<<<< HEAD
    paths: articles.map(a => ({ params: { slug: a.slug } }))
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async ctx => {
=======
<<<<<<< HEAD
=======
    paths: articles.map((a) => ({ params: { slug: a.slug } })),
    fallback: false}
};


export const getStaticProps: GetStaticProps = async (ctx) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const slug = ctx.params?.slug as string;
=======
  return {}
  const slug = ctx.params?.slug as string;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  const article = articles.find((a) => a.slug === slug) || null;
  return { props: { article } }
};

<<<<<<< HEAD
<<<<<<< HEAD
export default function HelpArticlePage({ article }: { article: HelpArticle }) {
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
export const getStaticPaths: GetStaticPaths;
    setVoted(helpful)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
export default function HelpArticlePage({ article }: { article: HelpArticle }) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export const getStaticPaths: GetStaticPaths = async () => {;
=======
export default function HelpArticlePage({ article }: { article: HelpArticle }) {};
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote() { return null; }
    await fetch('/api/support/feedback', {}
export const getStaticPaths: GetStaticPaths = async () => {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const articles = readJson<HelpArticle[]>('help/articles && articles.json', []);
  return {;
    paths: articles && articles.map(a => ({ params: { slug: a && a.slug } })),;
    fallback: false,;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    paths: articles.map(a => ({ params: { slug: a.slug } })),
    fallback: false,

  };
};

export const getStaticProps: GetStaticProps = async ctx => {;
  const slug = ctx && ctx.params?.slug as string;'
  const articles = readJson<HelpArticle[]>('help/articles && articles.json', []);
  const article = articles && articles.find(a => a && a.slug === slug) || null;
  return { props: { article } };};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            className='enhanced-button enhanced-button-secondary';
    paths: articles.map (array => ({ params: { slug: a.slug } })),
    fallback: false,
  }
}
;
export const getStaticProps: GetStaticProps = async ctx => {};
  const slug = ctx.params?.slug as string;'
  const articles = read_json < HelpArticle[]>('help / articles.json', []);
  const article = articles.find (array => a.slug === slug) || null;
  return { props: { article } }}
;
export default /**;
 * HelpArticlePage - Function description;
 */
function HelpArticlePage() {}
  const [voted, set_voted] = useState < null | boolean>(null);
;
  async /**
 * vote - Function description;
 */
function vote() { return null; }
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ article_id: article.id, helpful }),
    });
    set_voted (helpful);
  }
  return ('
    <article className='prose dark:prose - invert max - w-none'>;
      <h1>{article.title}</h1>;'
      <div className='text - sm opacity - 70'>;
        Last updated {new Date (article.updated_at).toLocaleDateString ()}
      </div>;'
      <div className='mt - 6 whitespace - pre - wrap'>{article.body}</div>;'
      <div className='mt - 8 p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800 flex items - center justify - between'>;
        <div > Was this article helpful?</div>;'
        <div className='flex gap - 2'>;
          <button;
            on_click={() => vote (true)}
            disabled={voted !== null}'
            className='enhanced - button enhanced - button - primary';
          >;
            Yes;
          </button>;
          <button;
            on_click={() => vote (false)}
            disabled={voted !== null}'
            className='enhanced - button enhanced - button - secondary';

          >;
            No;
          </button>;
        </div>;
      </div>;


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      method: 'POST',
=======
'
      method: 'POST','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ articleId: article.id, helpful })});
    setVoted(helpful)
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function HelpArticlePage({ article }: { article: HelpArticle }) {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default function HelpArticlePage({ article }: { article: HelpArticle }) {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ articleId: article.id, helpful })
    });
<<<<<<< HEAD
<<<<<<< HEAD
    setVoted(helpful);

  }
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import { readJson } from '../../utils/fsDb';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import { readJson } from '../../utils/fsDb';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

export default function HelpArticlePage() { return null; }
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ articleId: article.id, helpful })
    });'
import { GetStaticPaths, GetStaticProps } from 'next';'
import { useState } from 'react';'
import { readJson } from '../../utils/fsDb';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import type { HelpArticle } from '../../utils/support';
export const getStaticPaths: GetStaticPaths = async () => {;'
  const articles = readJson<HelpArticle[]>('help/articles.json', []),;
  return {;
    paths: articles.map((a) => ({ params: { slug: a.slug } })),;
    fallback: false  } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
=======
=======
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ articleId: article.id, helpful }),
    });
    setVoted(helpful);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
}
},;
export const getStaticProps: GetStaticProps = async (ctx) => {;
  const slug = ctx.params?.slug as string;'
  const articles = readJson<HelpArticle[]>('help/articles.json', []),;
  const article = articles.find((a) => a.slug === slug) || null;
  return { props: { article }   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default function HelpArticlePage(req, res) {}
  try {};
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote() { return null; }
      headers: { 'Content-Type': 'application/json' };
      body: JSON.stringify({ articleId: article.id, helpful })});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setVoted(helpful);
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


export const getStaticPaths: GetStaticPaths = async () => {;'
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  return {}
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote() { return null; }
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ articleId: article.id, helpful })
    });

'
import { GetStaticPaths, GetStaticProps } from 'next';'
import { useState } from 'react';'
import { readJson } from '../../utils/fsDb';'
import type { HelpArticle } from '../../utils/support';
export const getStaticPaths: GetStaticPaths = async () => {;'
  const articles = readJson<HelpArticle[]>('help/articles.json', []),;
  return {;
    paths: articles.map((a) => ({ params: { slug: a.slug } })),;
    fallback: false  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
},;
export const getStaticProps: GetStaticProps = async (ctx) => {;
  const slug = ctx.params?.slug as string;'
  const articles = readJson<HelpArticle[]>('help/articles.json', []),;
  const article = articles.find((a) => a.slug === slug) || null;
  return { props: { article }   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default function HelpArticlePage(req, res) {}
  try {};
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote() { return null; }
      headers: { 'Content-Type': 'application/json' };
      body: JSON.stringify({ articleId: article.id, helpful })});
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setVoted(helpful);
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
<<<<<<< HEAD

}

export const getStaticPaths: GetStaticPaths = async () => {;
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  return {

  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ articleId: article.id, helpful })
    });

    setVoted(helpful);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
=======
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
=======


  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <article className="prose dark:prose-invert max-w-none">
      <h1>{article.title}</h1>"
      <div className="text-sm opacity-70">Last updated {new Date(article.updatedAt).toLocaleDateString()}</div>"
      <div className="mt-6 whitespace-pre-wrap">{article.body}</div>"
      <div className="mt-8 p-4 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-between">
<<<<<<< HEAD
        <div>Was this article helpful?</div>
<<<<<<< HEAD
        <div className="flex gap-2">
          <button onClick={() => vote(true)} disabled={voted !== null} className="enhanced-button enhanced-button-primary">Yes</button>
<<<<<<< HEAD
          <button onClick={() => vote(false)} disabled={voted !== null} className="enhanced-button enhanced-button-secondary">No</button>
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className="flex gap-2">
          <button onClick={() => vote(true)} disabled={voted !== null} className="enhanced-button enhanced-button-primary">Yes</button>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

}
  )
}

<<<<<<< HEAD
=======
          <button onClick={() => vote(false)} disabled={voted !== null} className="enhanced-button enhanced-button-secondary">No</button>
<<<<<<< HEAD

        </div>
      </div>
    </article>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        <div>Was this article helpful?</div>"
        <div className="flex gap-2">"
          <button onClick={() => vote(true)} disabled={voted !== null} className="enhanced-button enhanced-button-primary">Yes</button>

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  )
}

    </article>);
;



<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
        <div className='flex gap-2'>
          <button
            onClick={() => vote(true)}
            disabled={voted !== null}
            className='enhanced-button enhanced-button-primary'
          >
            Yes
          </button>
          <button
            onClick={() => vote(false)}
            disabled={voted !== null}
            className='enhanced-button enhanced-button-secondary'
          >
            No
          </button>
        </div>
      </div>
    </article>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
