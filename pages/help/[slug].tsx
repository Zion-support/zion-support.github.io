export const getStaticPaths: GetStaticPaths = async () => {
  const articles = read_json < HelpArticle[]>('help / articles.json', []);
  return {

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  const article = articles.find((a) => a.slug === slug) || null;
  return { props: { article } }
};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default function HelpArticlePage({ article }: { article: HelpArticle }) {
  const [voted, setVoted] = useState<null | boolean>(null);
  async function vote(helpful: boolean) {
    await fetch('/api/support/feedback', {
    });
    setVoted(helpful);

  }
  return (
    <article className='prose dark:prose-invert max-w-none'>;
      <h1>{article && article.title}</h1>;
      <div className='text-sm opacity-70'>;
        Last updated {new Date(article && article.updatedAt).toLocaleDateString()}
      </div>;
      <div className='mt-6 whitespace-pre-wrap'>{article && article.body}</div>;
      <div className='mt-8 p-4 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-between'>;
        <div>Was this article helpful?</div>;
        <div className='flex gap-2'>;
          <button
            onClick={() => vote(true)}
            disabled={voted !== null}
            className='enhanced-button enhanced-button-primary';
          >;
            Yes;
          </button>;
          <button
            onClick={() => vote(false)}
            disabled={voted !== null}
          >;
            No;
          </button>;
        </div>;
      </div>;
=======
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ articleId: article.id, helpful })});
    setVoted(helpful)
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{article.title}</h1>
      <div className="text-sm opacity-70">Last updated {new Date(article.updatedAt).toLocaleDateString()}</div>
      <div className="mt-6 whitespace-pre-wrap">{article.body}</div>
      <div className="mt-8 p-4 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div>Was this article helpful?</div>
        <div className="flex gap-2">
          <button onClick={() => vote(true)} disabled={voted !== null} className="enhanced-button enhanced-button-primary">Yes</button>
          <button onClick={() => vote(false)} disabled={voted !== null} className="enhanced-button enhanced-button-secondary">No</button>
        </div>
      </div>
    </article>
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </article>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
