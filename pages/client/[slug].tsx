<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import ReviewSummary from '../../components/reviews/ReviewSummary';
import ReviewCard from '../../components/reviews/ReviewCard';
import type { PublicReview, ReviewsSummary } from '../../types/reviews';

type Props = { clientId: string },

const ClientPage: NextPage<Props> = ({ clientId }) => {
  const [summary, setSummary] = useState<ReviewsSummary | null>(null);
  const [reviews, setReviews] = useState<PublicReview[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/reviews/list?targetType=client&targetId=${clientId}`);
      const data = await res.json();
      if (res.ok) { setSummary(data.summary), setReviews(data.reviews) }
    })()
  }, [clientId]);

  async function handleReport(id: string) {
    await fetch('/api/reviews/report', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reviewId: id, reason: 'Inappropriate content' })})
  }

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <header className="enhanced-card">
        <h1 className="text-3xl font-bold">Client: {clientId}</h1>
      </header>
      {summary && <ReviewSummary summary={summary} />}
      <section className="grid gap-4">
        {reviews.map((r) => (<ReviewCard key={r.id} review={r} onReport={handleReport} />))}
        {!reviews.length && (<div className="enhanced-card">No public reviews yet.</div>)}
      </section>
    </main>
  )
};

<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query as { slug: string },
  return { props: { clientId: slug } }
};

export default ClientPage;
=======
export default ClientPage,
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function ClientSlug() {
  return (
    <Layout>
      <Head>
        <title>Client - Zion Tech Group</title>
        <meta name="description" content="Client solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Client</h1>
          <p className="text-lg text-gray-600">
            Professional client solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
