import React, { useEffect, useState } from 'react',
import type { NextPage, GetServerSideProps } from 'next',
import ReviewSummary from '../../components/reviews/ReviewSummary'
import ReviewCard from '../../components/reviews/ReviewCard'
import type { PublicReview, ReviewsSummary } from '../../types/reviews',

type Props = { clientId: string },

const ClientPage: NextPage<Props> = ({ clientId }) => {
  const [summary, setSummary] = useState<ReviewsSummary | null>(null),
  const [reviews, setReviews] = useState<PublicReview[]>([]),

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/reviews/list?targetType=client&targetId=${clientId}`)
      const data = await res.json()
      if (res.ok) { setSummary(data.summary), setReviews(data.reviews) }
    })()
  }, [clientId]),

  async function handleReport(id: string) {
    await fetch('/api/reviews/report', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reviewId: id, reason: 'Inappropriate content' })})
  }

  return (
    <main className=&quot;max-w-4xl mx-auto p-6 space-y-6&quot;>
      <header className=&quot;enhanced-card&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Client: {clientId}</h1>
      </header>
      {summary && <ReviewSummary summary={summary} />}
      <section className=&quot;grid gap-4&quot;>
        {reviews.map((r) => (<ReviewCard key={r.id} review={r} onReport={handleReport} />))}
        {!reviews.length && (<div className=&quot;enhanced-card&quot;>No public reviews yet.</div>)}
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </section>
    </main>
  )
},

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query as { slug: string }
  return { props: { clientId: slug } }
},

export default ClientPage