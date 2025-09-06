import React, { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export type FeedbackWidgetProps = {
  responseId?: string;
  aiModel?: string;
};

export default function FeedbackWidget({
  responseId,
  aiModel,
}: FeedbackWidgetProps) {  const [rating, setRating] = useState<null | 'up' | 'down'>(null);
=======
export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {
  const [rating, setRating] = useState<null | 'up' | 'down'>(null);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const effectiveResponseId = useMemo(
    () => responseId || uuidv4(),
    [responseId]
  );
  const submit = async () => {
    if (!rating) {
      setError('Please choose 👍 or 👎');
      return;    }
=======
  const effectiveResponseId = useMemo(() => responseId || uuidv4(), [responseId]);

  const submit = async () => {
    if (!rating) {
      setError('Please choose 👍 or 👎');
<<<<<<< HEAD
      return;
=======
      return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/feedback/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          responseId: effectiveResponseId,
          rating,
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          comment: comment.trim(),
          pagePath:
            typeof window !== 'undefined'
              ? window.location.pathname
              : undefined,
          aiModel,
        }),
      });
      if (!res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true);
    } catch (e: any) {
      setError(e?.message || 'Something went wrong');
    } finally {
      setSubmitting(false);    }
  };

  return (
    <div className='mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60'>
      <div className='text-sm font-medium mb-2'>Was this answer useful?</div>
=======
      setSubmitting(false)
    }
  };

  return (
<<<<<<< HEAD
    <div className='mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60'>
      <div className='text-sm font-medium mb-2'>Was this answer useful?</div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {submitted ? (
        <div className='text-sm text-emerald-700 dark:text-emerald-300'>
          Thanks for your feedback!
        </div>
      ) : (
        <div className='space-y-3'>
          <div className='flex items-center gap-2'>
            <button
              type='button'              onClick={() => setRating(rating === 'up' ? null : 'up')}
=======
              type="button"
              onClick={() => setRating(rating === 'up' ? null : 'up')}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={rating === 'up'}
            >
              <span>👍</span>
              <span>Yes</span>
            </button>
            <button
              type='button'              onClick={() => setRating(rating === 'down' ? null : 'down')}
=======
              type="button"
              onClick={() => setRating(rating === 'down' ? null : 'down')}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
              aria-pressed={rating === 'down'}
            >
              <span>👎</span>
              <span>No</span>
            </button>
          </div>
          <textarea
            placeholder='Optional feedback (what worked, what didn’t)'
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            value={comment}
            onChange={e => setComment(e.target.value.slice(0, 2000))}
            className='w-full rounded-md border px-3 py-2 text-sm'
            rows={3}
          />
          {error && <div className='text-xs text-red-600'>{error}</div>}
          <div>
            <button
              onClick={submit}
              disabled={submitting}
              className='rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm'
            >              {submitting ? 'Submitting…' : 'Submit feedback'}
=======
            <button onClick={submit} disabled={submitting} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm">
              {submitting ? 'Submitting…' : 'Submit feedback'}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
