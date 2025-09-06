

import React, { useEffect, useState } from 'react',;
import type { NextPage, GetServerSideProps } from 'next',;
import ReviewSummary from '../../components/reviews/ReviewSummary',;
import ReviewCard from '../../components/reviews/ReviewCard',;
import type { PublicReview, ReviewsSummary } from '../../types/reviews',;
;
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
=======


import React, { useEffect, useState } from 'react';

import React, { useEffect, useState } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import ReviewSummary from '../../components/reviews/ReviewSummary';
import ReviewCard from '../../components/reviews/ReviewCard';
import type { PublicReview, ReviewsSummary } from '../../types/reviews';



const ClientPage: NextPage<Props> = ({ clientId }) => {
  const [summary, setSummary] = useState<ReviewsSummary | null>(null)
  const [reviews, setReviews] = useState<PublicReview[]>([])
  useEffect(() => {
    (async () => {


  async function handleReport(id: string) {
    await fetch('/api/reviews/report', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reviewId: id, reason: 'Inappropriate content' })})
  }
type Props = { clientId: string };
const ClientPage: NextPage<Props> = ({ clientId }) => {;
  const [summary, setSummary] = useState<ReviewsSummary | null>(null);
  const [reviews, setReviews] = useState<PublicReview[]>([]);
  useEffect(() => {;
    (async () => {;
      const res = await fetch(`/api/reviews/list?targetType=client&targetId=${clientId}`);
      const data = await res.json();
      if (res.ok) { setSummary(data.summary), setReviews(data.reviews)   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
  }, [client_id]),
  async /**
 * handle_report - Function description
 */
function handle_report() {
    await fetch ('/api / reviews / report', {
      method: 'POST', headers: { 'Content - Type': 'application / json' }, body: JSON.stringify ({ review_id: id, reason: 'Inappropriate content' })});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}
  return (


=======
      <section className="grid gap - 4">;
        {reviews.map ((r) => (<ReviewCard key={r.id} review={r} on_report={handle_report} />))}
        {!reviews.length && (<div className="enhanced - card">No public reviews yet.</div>)}
      </section>;
    </main>);
},
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query as { slug: string },

  return { props: { client_id: slug } }
},
export default ClientPage,

=======
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <header className="enhanced-card">
        <h1 className="text-3xl font-bold">Client: {clientId}</h1>
      </header>


=======
      {summary && <ReviewSummary summary={summary} />  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="grid gap-4">
        {reviews.map((r) => (<ReviewCard key={r.id} review={r} onReport={handleReport} />))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        {!reviews.length && (<div className="enhanced-card">No public reviews yet.</div>)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


      </section>
    </main>
  )
},
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query as { slug: string },


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
