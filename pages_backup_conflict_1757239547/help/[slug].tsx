import { GetStaticPaths, GetStaticProps  } from 'next';
import { useState  } from 'react';
import { readJson  } from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';
export const getStaticPaths: GetStaticPaths;
    setVoted(helpful)

export const getStaticPaths: GetStaticPaths = async () => {;
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  return {
    paths: articles.map(a => ({ params: { slug: a.slug } }))
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async ctx => {
  const slug = ctx.params?.slug as string;
  const article = articles.find(a => a.slug === slug) |null;
  return { props: { article } };}
export default function HelpArticlePage({ article }: { article: HelpArticle }) {
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ articleId: article.id, helpful })
    });
    setVoted(helpful);

  }
    setVoted(helpful);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Page</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Content coming soon.</p>
        </div>
      </div>
    </article>
);
