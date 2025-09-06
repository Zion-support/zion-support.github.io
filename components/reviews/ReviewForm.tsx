import React, { useState } from 'react';
import StarRating from './StarRating';
export type ReviewFormValues = $2;
  fromRole: 'client' | 'talent',
  fromId: string,
  rating: number,
  text: string,
  categories?: {
    communication?: number,
    qualityOfWork?: number,
    timeliness?: number,
    wouldWorkWithAgain?: boolean
  },
  anonymous?: boolean
},

type Props = {
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>
},

const ReviewForm: React.FC<Props> = ({ initial }) => {
  const [rating, setRating] = useState($2);
  const [text, setText] = useState($2);
  const [anonymous, setAnonymous] = useState($2);
  const [communication, setCommunication] = useState<number | undefined>(),
  const [qualityOfWork, setQualityOfWork] = useState<number | undefined>(),
  const [timeliness, setTimeliness] = useState<number | undefined>(),
  const [wouldWorkWithAgain, setWouldWorkWithAgain] = useState<boolean>(false),
  const [submitting, setSubmitting] = useState($2);
  const [message, setMessage] = useState<string | null>(null),

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault($2);
    setSubmitting($2);
    setMessage($2);
    try {
      const res = await fetch('/api/reviews/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId: initial.projectId,
          fromRole: initial.fromRole,
          fromId: initial.fromId,
          rating,
          text,
          anonymous,
          categories: {
            communication,
            qualityOfWork,
            timeliness,
            wouldWorkWithAgain}})}),
      const data = await res.json($2);
      if (!res.ok) throw new Error($2);
      setMessage('Review submitted! Pending admin approval.')
    } catch (err: any) {
      setMessage(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit = $2;
export default ReviewForm,