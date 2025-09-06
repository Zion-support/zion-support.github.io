<<<<<<< HEAD
<<<<<<< HEAD

=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useEffect, useState } from 'react';

=======
import React, { useEffect, useState } from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import type { NextPage, GetServerSideProps } from 'next';
import ReviewSummary from '../../components/reviews/ReviewSummary';
import ReviewCard from '../../components/reviews/ReviewCard';
import type { PublicReview, ReviewsSummary } from '../../types/reviews';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
type Props = any;
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
type Props = { clientId: string }
=======

type Props = { clientId: string };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const ClientPage: NextPage<Props> = ({ clientId }) => {
  const [summary, setSummary] = useState<ReviewsSummary | null>(null)
  const [reviews, setReviews] = useState<PublicReview[]>([])
  useEffect(() => {
    (async () => {
<<<<<<< HEAD
      const res = await fetch(`/api/reviews/list?targetType=client&targetId=${clientId}`)
      const data = await res.json()
      if (res.ok) { setSummary(data.summary), setReviews(data.reviews) }
    })()
  }, [clientId])
  async function handleReport(id: string) {
    await fetch('/api/reviews/report', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reviewId: id, reason: 'Inappropriate content' })})
  }
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
      </section>
    </main>
  )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query as { slug: string }
  return { props: { clientId: slug } }
}
export default ClientPage;
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
      const res = await fetch(
        `/api/reviews/list?targetType=client&targetId=${clientId}`
      );
      const data = await res.json();
      if (res.ok) {
        setSummary(data.summary);
        setReviews(data.reviews);
      }
    })();
  }, [clientId]);

  async function handleReport(id: string) {
    await fetch('/api/reviews/report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reviewId: id, reason: 'Inappropriate content' }),
    });
  }

  return (
    <main className='max-w-4xl mx-auto p-6 space-y-6'>
      <header className='enhanced-card'>
        <h1 className='text-3xl font-bold'>Client: {clientId}</h1>
      </header>
      {summary && <ReviewSummary summary={summary} />}
      <section className='grid gap-4'>
        {reviews.map(r => (
          <ReviewCard key={r.id} review={r} onReport={handleReport} />
        ))}
        {!reviews.length && (
          <div className='enhanced-card'>No public reviews yet.</div>
        )}
      </section>
    </main>
  );
};
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { slug } = ctx.query as { slug: string };
  return { props: { clientId: slug } };
};
}

export default ClientPage;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      </section>
    </main>
  )
},
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query as { slug: string },
<<<<<<< HEAD
=======
<<<<<<< HEAD
  return { props: { clientId: slug } }
},
;
export default ClientPage,;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return { props: { clientId: slug }   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default ClientPage;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
