<<<<<<< HEAD
import React, { useEffect, useState } from 'react',;
import type { NextPage, GetServerSideProps } from 'next',;
import ReviewSummary from '../../components/reviews/ReviewSummary',;
import ReviewCard from '../../components/reviews/ReviewCard',;
import type { PublicReview, ReviewsSummary } from '../../types/reviews',;
;
type Props = { clientId: string },

import React, { useEffect, useState } from 'react';

=======
import React, { useEffect, useState } from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import type { NextPage, GetServerSideProps } from 'next';
import ReviewSummary from '../../components/reviews/ReviewSummary';
import ReviewCard from '../../components/reviews/ReviewCard';
import type { PublicReview, ReviewsSummary } from '../../types/reviews';
<<<<<<< HEAD

type Props = { clientId: string }
const ClientPage: NextPage<Props> = ({ clientId }) => {
  const [summary, setSummary] = useState<ReviewsSummary | null>(null)
  const [reviews, setReviews] = useState<PublicReview[]>([])
  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/reviews/list?targetType=client&targetId=${clientId}`)
      const data = await res.json()
      if (res.ok) { setSummary(data.summary), setReviews(data.reviews) }
    })()
  }, [clientId])
  async function handleReport(id: string) {
    await fetch('/api/reviews/report', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reviewId: id, reason: 'Inappropriate content' })})
=======
import React, { useEffect, useState } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import ReviewSummary from '../../components/reviews/ReviewSummary';
import ReviewCard from '../../components/reviews/ReviewCard';
import type { PublicReview, ReviewsSummary } from '../../types/reviews';
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
}
    })();
  }, [clientId]),;
  async function handleReport(id: string) {;
    await fetch('/api/reviews/report', {;
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reviewId: id, reason: 'Inappropriate content' })});
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <header className="enhanced-card">
        <h1 className="text-3xl font-bold">Client: {clientId}</h1>
      </header>
<<<<<<< HEAD
      {summary && <ReviewSummary summary={summary} />}
      <section className="grid gap-4">
        {reviews.map((r) => (<ReviewCard key={r.id} review={r} onReport={handleReport} />))}
        {!reviews.length && (<div className="enhanced-card">No public reviews yet.</div>)}
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      </section>
    </main>
  )
},
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query as { slug: string },
<<<<<<< HEAD
  return { props: { clientId: slug } }
},
;
export default ClientPage,;
=======
  return { props: { clientId: slug }   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default ClientPage;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
