import React, { useEffect, useState } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import ReviewSummary from '../../components/reviews/ReviewSummary';
import ReviewCard from '../../components/reviews/ReviewCard';
import type { PublicReview, ReviewsSummary } from '../../types/reviews';
type Props = $2;
const ClientPage: NextPage<Props> = ({ clientId }) => {
  const [summary, setSummary] = useState<ReviewsSummary | null>(null),
  const [reviews, setReviews] = useState<PublicReview[]>([]),

  useEffect(() => {
    (async () => {
      const res = await fetch($2);
      const data = await res.json($2);
      if (res.ok) { setSummary(data.summary), setReviews(data.reviews) }
    })()
  }, [clientId]),

  async function handleReport(id: string) {
    await fetch('/api/reviews/report', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reviewId: id, reason: 'Inappropriate content' })})
  }

  return (
    <main className = $2;
export const getServerSideProps: GetServerSideProps = $2;
  return { props: { clientId: slug} }
},

export default ClientPage,