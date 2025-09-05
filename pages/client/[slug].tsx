import React, {_useEffect, _useState} from 'react';
import type {_NextPage, _GetServerSideProps} from 'next';
import ReviewSummary from '../../components/reviews/ReviewSummary';
import ReviewCard from '../../components/reviews/ReviewCard';
import type {_PublicReview, _ReviewsSummary} from '../../types/reviews';

type Props = {_clientId: string};

const ClientPage: NextPage<Props> = (_{_clientId}) => {_const [summary, _setSummary] = useState<ReviewsSummary | null>(null);
  const [reviews, _setReviews] = useState<PublicReview[]>([]);

  useEffect__(() => {
    (_async () => {
      const _res = await fetch(`/api/reviews/list?targetType=client&targetId=${clientId}`);
      const _data = await res.json();
      if (res.ok) {_setSummary(data.summary); setReviews(data.reviews);}
    })();
  }, [clientId]);

  async function handleReport(_id: string) {_await fetch('/api/reviews/report', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_reviewId: id, _reason: 'Inappropriate content'})});
  }

  return (_<main className="max-w-4xl mx-auto p-6 space-y-6">
      <header className="enhanced-card">
        <h1 className="text-3xl font-bold">Client: {_clientId}</h1>
      </header>
      {_summary && <ReviewSummary summary={summary} />}
      <section className="grid gap-4">
        {_reviews.map((r) => (<ReviewCard key={r.id} review={_r} onReport={_handleReport} />))}
        {_!reviews.length && (<div className="enhanced-card">No public reviews yet.</div>)}
      </section>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (_ctx) => {_const { slug} = ctx.query as {_slug: string};
  return {_props: { clientId: slug} };
};

export default ClientPage;