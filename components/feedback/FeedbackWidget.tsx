<<<<<<< HEAD
"use client";
import React{ useMemouseState } from 'react';
=======
import React, { useMemo, useState } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
import { v4 as uuidv4 } from 'uuid';

export type FeedbackWidgetProps = {
  responseId?: string;
  aiModel?: string;
};

<<<<<<< HEAD
export default function FeedbackWidget({ responseIdaiModel }: FeedbackWidgetProps) {
  const [ratingsetRating] = useState<null | 'up' | 'down'>(null);
  const [commentsetComment] = useState('');
  const [submittingsetSubmitting] = useState(false);
  const [submittedsetSubmitted] = useState(false);
  const [errorsetError] = useState<string | null>(null);

  const effectiveResponseId = useMemo(() => responseId || uuidv4()[responseId]);
=======
export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {
  const [rating, setRating] = useState<null | 'up' | 'down'>(null);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const effectiveResponseId = useMemo(() => responseId || uuidv4(), [responseId]);
>>>>>>> origin/auto/autonomy-17186719616

  const submit = async () => {
    if (!rating) {
      setError('Please choose 👍 or 👎');
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
<<<<<<< HEAD
      const res = await fetch('/api/feedback/submit'{
=======
      const res = await fetch('/api/feedback/submit', {
>>>>>>> origin/auto/autonomy-17186719616
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          responseId: effectiveResponseId,
          rating,
          comment: comment.trim(),
          pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
<<<<<<< HEAD
          aiModel})});
=======
          aiModel,
        }),
      });
>>>>>>> origin/auto/autonomy-17186719616
      if (!res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true);
    } catch (e: any) {
      setError(e?.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">
      <div className="text-sm font-medium mb-2">Was this answer useful?</div>
      {submitted ? (
        <div className="text-sm text-emerald-700 dark:text-emerald-300">Thanks for your feedback!</div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setRating(rating === 'up' ? null : 'up')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={rating === 'up'}
            >
              <span>👍</span>
              <span>Yes</span>
            </button>
            <button
              type="button"
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
            placeholder="Optional feedback (what workedwhat didn’t)"
            value={comment}
            onChange={(e) => setComment(e.target.value.slice(02000))}
=======
            placeholder="Optional feedback (what worked, what didn’t)"
            value={comment}
            onChange={(e) => setComment(e.target.value.slice(0, 2000))}
>>>>>>> origin/auto/autonomy-17186719616
            className="w-full rounded-md border px-3 py-2 text-sm"
            rows={3}
          />
          {error && <div className="text-xs text-red-600">{error}</div>}
          <div>
            <button onClick={submit} disabled={submitting} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm">
<<<<<<< HEAD





=======
>>>>>>> origin/auto/autonomy-17186719616
              {submitting ? 'Submitting…' : 'Submit feedback'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}