import React, {_useMemo, _useState} from 'react';

export type FeedbackWidgetProps = {_responseId?: string;
  aiModel?: string;};

export default function FeedbackWidget(_{_responseId, _aiModel}: FeedbackWidgetProps) {_const [rating, _setRating] = useState<null | 'up' | 'down'>(null);
  const [comment, _setComment] = useState('');
  const [submitting, _setSubmitting] = useState(false);
  const [submitted, _setSubmitted] = useState(false);
  const [error, _setError] = useState<string | null>(null);

  const _effectiveResponseId = useMemo__(() => responseId || uuidv4(), _[responseId]);

  const _submit = async () => {
    if (!rating) {
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
            <button
              type="button"
              onClick={() => setRating(rating === 'up' ? null : 'up')}
              className={_`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={_rating === 'up'}
            >
              <span>👍</span>
              <span>Yes</span>
            </button>
            <button
              type="button"
              onClick={_() => setRating(rating === 'down' ? null : 'down')}
              className={_`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
              aria-pressed={_rating === 'down'}
            >
              <span>👎</span>
              <span>No</span>
            </button>
          </div>
          <textarea
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
            </button>
          </div>
        </div>
      )}
    </div>
  );
}