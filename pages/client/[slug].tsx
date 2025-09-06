<<<<<<< HEAD

<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

import React, { useEffect, useState } from 'react';

=======

=======
<<<<<<< HEAD
type Props = { clientId: string },
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useEffect, useState } from 'react',;
import type { NextPage, GetServerSideProps } from 'next',;
import ReviewSummary from '../../components/reviews/ReviewSummary',;
import ReviewCard from '../../components/reviews/ReviewCard',;
import type { PublicReview, ReviewsSummary } from '../../types/reviews',;
;
type Props = { clientId: string },
<<<<<<< HEAD

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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextPage, GetServerSideProps } from 'next';
import ReviewSummary from '../../components/reviews/ReviewSummary';
import ReviewCard from '../../components/reviews/ReviewCard';
import type { PublicReview, ReviewsSummary } from '../../types/reviews';
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======

type Props = { clientId: string }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const ClientPage: NextPage<Props> = ({ clientId }) => {
  const [summary, setSummary] = useState<ReviewsSummary | null>(null)
  const [reviews, setReviews] = useState<PublicReview[]>([])
  useEffect(() => {
    (async () => {
<<<<<<< HEAD


=======
      const res = await fetch(`/api/reviews/list?targetType=client&targetId=${clientId}`);
      const data = await res.json();
      if (res.ok) { setSummary(data.summary), setReviews(data.reviews) }
    })()
<<<<<<< HEAD
  }, [clientId]);
=======
  }, [clientId])
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  async function handleReport(id: string) {
    await fetch('/api/reviews/report', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reviewId: id, reason: 'Inappropriate content' })})
import React, { useEffect, useState } from 'react',
import type { NextPage, GetServerSideProps } from 'next',
import ReviewSummary from '../../components / reviews / ReviewSummary',
import ReviewCard from '../../components / reviews / ReviewCard',
import type { PublicReview, ReviewsSummary } from '../../types / reviews',
;
type Props = { client_id: string },
const ClientPage: NextPage < Props> = ({ client_id }) => {
  const [summary, set_summary] = useState < ReviewsSummary | null>(null),
  const [reviews, set_reviews] = useState < PublicReview[]>([]),
  useEffect (() => {
    (async () => {
      const res = await fetch (`/api / reviews / list?target_type = client & target_id=${client_id}`),
      const data = await res.json (),
      if ( { set_summary (data.summary), set_reviews (data.reviews) }
    })()) {
  $2
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
  }
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (


=======
<<<<<<< HEAD
  return (
    <main className="max - w-4xl mx - auto p - 6 space - y-6">;
      <header className="enhanced - card">;
        <h1 className="text - 3xl font - bold">Client: {client_id}</h1>;
      </header>;
      {summary && <ReviewSummary summary={summary} />}
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
      </section>
    </main>
  )
},

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query as { slug: string }
  return { props: { clientId: slug } }
},

export default ClientPage

=======
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

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

  return { props: { client_id: slug } }
},
export default ClientPage,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <header className="enhanced-card">
        <h1 className="text-3xl font-bold">Client: {clientId}</h1>
      </header>

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      </section>
    </main>
  )
},
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query as { slug: string },

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  return { props: { clientId: slug } }
},
;
export default ClientPage,;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return { props: { clientId: slug }   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default ClientPage;
<<<<<<< HEAD

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
