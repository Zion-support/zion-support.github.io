import React, { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export type FeedbackWidgetProps = {
  responseId?: string;
  aiModel?: string
};

<<<<<<< HEAD
export default function FeedbackWidget({
  responseId,
  aiModel,
}: FeedbackWidgetProps) {
=======
export type FeedbackWidgetProps = {
  responseId?: string;
  aiModel?: string
};

export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const [rating, setRating] = useState<null | 'up' | 'down'>(null);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

<<<<<<< HEAD
<<<<<<< HEAD
  const effectiveResponseId = useMemo(
    () => responseId || uuidv4(),
    [responseId]
  );
=======
  const effectiveResponseId = useMemo(() => responseId || uuidv4(), [responseId]);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const effectiveResponseId = useMemo(() => responseId || uuidv4(), [responseId]);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const submit = async () => {
    if (!rating) {
      setError('Please choose 👍 or 👎');
<<<<<<< HEAD
<<<<<<< HEAD
      return;
=======
      return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/feedback/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          responseId: effectiveResponseId,
<<<<<<< HEAD
<<<<<<< HEAD
          rating,
=======
          rating;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          comment: comment.trim(),
          pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
          aiModel})});
      if (!res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true)
    } catch (e: any) {
      setError(e?.message || 'Something went wrong')
    } finally {
<<<<<<< HEAD
      setSubmitting(false);
=======
          rating;
          comment: comment.trim(),
          pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
          aiModel})});
      if (!res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true)
    } catch (e: any) {
      setError(e?.message || 'Something went wrong')
    } finally {
      setSubmitting(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setSubmitting(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60'>
      <div className='text-sm font-medium mb-2'>Was this answer useful?</div>
=======
    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">
      <div className="text-sm font-medium mb-2">Was this answer useful?</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      {submitted ? (
        <div className="text-sm text-emerald-700 dark:text-emerald-300">Thanks for your feedback!</div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <button
<<<<<<< HEAD
              type='button'
=======
    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">
      <div className="text-sm font-medium mb-2">Was this answer useful?</div>
      {submitted ? (
        <div className="text-sm text-emerald-700 dark:text-emerald-300">Thanks for your feedback!</div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              type="button"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              onClick={() => setRating(rating === 'up' ? null : 'up')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={rating === 'up'}
            >
              <span>👍</span>
              <span>Yes</span>
            </button>
            <button
<<<<<<< HEAD
<<<<<<< HEAD
              type='button'
=======
              type="button"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              type="button"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              onClick={() => setRating(rating === 'down' ? null : 'down')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
              aria-pressed={rating === 'down'}
            >
              <span>👎</span>
              <span>No</span>
            </button>
          </div>
          <textarea
<<<<<<< HEAD
<<<<<<< HEAD
            placeholder='Optional feedback (what worked, what didn’t)'
=======
            placeholder="Optional feedback (what worked, what didn’t)"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            value={comment}
            onChange={(e) => setComment(e.target.value.slice(0, 2000))}
            className="w-full rounded-md border px-3 py-2 text-sm"
            rows={3}
          />
          {error && <div className="text-xs text-red-600">{error}</div>}
          <div>
<<<<<<< HEAD
            <button
              onClick={submit}
              disabled={submitting}
              className='rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm'
            >
=======
            placeholder="Optional feedback (what worked, what didn’t)"
            value={comment}
            onChange={(e) => setComment(e.target.value.slice(0, 2000))}
            className="w-full rounded-md border px-3 py-2 text-sm"
            rows={3}
          />
          {error && <div className="text-xs text-red-600">{error}</div>}
          <div>
            <button onClick={submit} disabled={submitting} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <button onClick={submit} disabled={submitting} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {submitting ? 'Submitting…' : 'Submit feedback'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
