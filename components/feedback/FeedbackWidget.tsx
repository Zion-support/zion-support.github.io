<<<<<<< HEAD
import React, { useMemo, useState } from 'react',
import { v4 as uuidv4 } from 'uuid',
export type FeedbackWidgetProps = {
  responseId?: string,
  aiModel?: string
},

export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {
  const [rating, setRating] = useState<null | 'up' | 'down'>(null),
  const [comment, setComment] = useState(''),
  const [submitting, setSubmitting] = useState(false),
  const [submitted, setSubmitted] = useState(false),
  const [error, setError] = useState<string | null>(null),

  const effectiveResponseId = useMemo(() => responseId || uuidv4(), [responseId]),
=======
import React, {_useMemo, _useState} from 'react';

export type FeedbackWidgetProps = {_responseId?: string;
  aiModel?: string;};

export default function FeedbackWidget(_{_responseId, _aiModel}: FeedbackWidgetProps) {_const [rating, _setRating] = useState<null | 'up' | 'down'>(null);
  const [comment, _setComment] = useState('');
  const [submitting, _setSubmitting] = useState(false);
  const [submitted, _setSubmitted] = useState(false);
  const [error, _setError] = useState<string | null>(null);

  const _effectiveResponseId = useMemo__(() => responseId || uuidv4(), _[responseId]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _submit = async () => {
    if (!rating) {
<<<<<<< HEAD
      setError('Please choose 👍 or 👎'),
      return
    }
    setError(null),
    setSubmitting(true),
    try {
      const res = await fetch('/api/feedback/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          responseId: effectiveResponseId,
          rating,
          comment: comment.trim(),
          pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
          aiModel})}),
      if (!res.ok) throw new Error('Failed to submit feedback'),
      setSubmitted(true)
    } catch (e: any) {
      setError(e?.message || 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  },

  return (
    <div className=&quot;mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60&quot;>
      <div className=&quot;text-sm font-medium mb-2&quot;>Was this answer useful?</div>
      {submitted ? (
        <div className=&quot;text-sm text-emerald-700 dark:text-emerald-300&quot;>Thanks for your feedback!</div>
      ) : (
        <div className=&quot;space-y-3&quot;>
          <div className=&quot;flex items-center gap-2&quot;>
=======
      setError('Please choose 👍 or 👎');
      return;}
    setError(null);
    setSubmitting(true);
    try {_const _res = await fetch('/api/feedback/submit', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_responseId: effectiveResponseId, _rating, _comment: comment.trim(), _pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined, _aiModel})});
      if (!res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true);
    } catch (e: unknown) {_setError(e?.message || 'Something went wrong');} finally {_setSubmitting(false);}
  };

  return (
    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">
      <div className="text-sm font-medium mb-2">Was this answer useful?</div>
      {_submitted ? (
        <div className="text-sm text-emerald-700 dark:text-emerald-300">Thanks for your feedback!</div>
      ) : (_<div className="space-y-3">
          <div className="flex items-center gap-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <button
              type=&quot;button&quot;
              onClick={() => setRating(rating === 'up' ? null : 'up')}
              className={_`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={_rating === 'up'}
            >
              <span>👍</span>
              <span>Yes</span>
            </button>
            <button
<<<<<<< HEAD
              type=&quot;button&quot;
              onClick={() => setRating(rating === 'down' ? null : 'down')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
              aria-pressed={rating === 'down'}
=======
              type="button"
              onClick={_() => setRating(rating === 'down' ? null : 'down')}
              className={_`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
              aria-pressed={_rating === 'down'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <span>👎</span>
              <span>No</span>
            </button>
          </div>
          <textarea
<<<<<<< HEAD
            placeholder=&quot;Optional feedback (what worked, what didn’t)&quot;
            value={comment}
            onChange={(e) => setComment(e.target.value.slice(0, 2000))}
            className=&quot;w-full rounded-md border px-3 py-2 text-sm&quot;
            rows={3}
          />
          {error && <div className=&quot;text-xs text-red-600&quot;>{error}</div>}
          <div>
            <button onClick={submit} disabled={submitting} className=&quot;rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm&quot;>
              {submitting ? 'Submitting…' : 'Submit feedback'}
=======
            placeholder="Optional feedback (what worked, what didn’t)"
            value={_comment}
            onChange={_(_e) => setComment(e.target.value.slice(0, _2000))}
            className="w-full rounded-md border px-3 py-2 text-sm"
            rows={_3}
          />
          {_error && <div className="text-xs text-red-600">{error}</div>}
          <div>
            <button onClick={_submit} disabled={_submitting} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm">
              {_submitting ? 'Submitting…' : 'Submit feedback'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </button>
          </div>
        </div>
      )}
    </div>
  )
}