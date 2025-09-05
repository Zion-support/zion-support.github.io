import React, { useEffect, useState } from 'react',
import type { NextPage, GetServerSideProps } from 'next',
import ReviewSummary from '../../components/reviews/ReviewSummary',
import ReviewCard from '../../components/reviews/ReviewCard',
import type { PublicReview, ReviewsSummary } from '../../types/reviews',

type Props = { clientId: string },

const ClientPage: NextPage<Props> = ({ clientId }) => {
  const [summary, setSummary] = useState<ReviewsSummary | null>(null),
  const [reviews, setReviews] = useState<PublicReview[]>([]),

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/reviews/list?targetType=client&targetId=${clientId}`),
      const data = await res.json(),
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
        {!reviews.length && (<div className=&quot;enhanced-card&quot;>No public reviews yet.</div>)}      </section>
    </main>
  )
},

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query as { slug: string },
  return { props: { clientId: slug } }
},
export default ClientPage,