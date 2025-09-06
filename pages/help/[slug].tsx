import {GetStaticPaths, GetStaticProps} from 'next';
import {useState} from 'react';
import {read_json} from '../../utils / fs_db';
import type { HelpArticle } from '../../utils / support';
;
export const getStaticPaths: GetStaticPaths = async () => {
  const articles = read_json < HelpArticle[]>('help / articles.json', []);
  return {
    paths: articles.map (array => ({ params: { slug: a.slug } })),
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
          >;
            No;
          </button>;
        </div>;
      </div>;
    </article>);
;