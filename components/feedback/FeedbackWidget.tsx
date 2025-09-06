class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
};
export default function FeedbackWidget(): any ({;
  responseId,;
  aiModel,;
}: FeedbackWidgetProps) {  const [rating, setRating] = useState<null | 'up' | 'down'>(null);export type FeedbackWidgetProps = {;
  responseId?: string;
  aiModel?: string;
};
export default function FeedbackWidget(): any ({ responseId, aiModel }: FeedbackWidgetProps) {;
export type FeedbackWidgetProps = {
  responseId?: string;
  aiModel?: string
};
export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export type FeedbackWidgetProps = {;
  responseId?: string;
  aiModel?: string;
}
export default function FeedbackWidget({
<<<<<<< HEAD

=======
<<<<<<< HEAD
  responseId
  aiModel
}: FeedbackWidgetProps) {  const [rating, setRating] = useState<null | 'up' | 'down'>(null);export type FeedbackWidgetProps = {
  responseId?: string;
  aiModel?: string
}
export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {
=======
  responseId,
  aiModel,;
}: FeedbackWidgetProps) {  const [rating, setRating] = useState<null | 'up' | 'down'>(null);export type FeedbackWidgetProps = {;
  responseId?: string;
  aiModel?: string
};

export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [rating, setRating] = useState<null | 'up' | 'down'>(null);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
  const effectiveResponseId = useMemo(
    () => responseId |uuidv4()
    [responseId]
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  const effectiveResponseId = useMemo(() => responseId || uuidv4(), [responseId]);
  const effectiveResponseId = useMemo(;
    () => responseId || uuidv4(),;
    [responseId];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
  const submit = async () => {;
    if (!rating) {;
      setError('Please choose 👍 or 👎');
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return;    }  const effectiveResponseId = useMemo(() => responseId || uuidv4(), [responseId]);
  const submit = async () => {;
    if (!rating) {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      setError('Please choose 👍 or 👎');
      return;      return;
      return
    }
    setError(null);
    setSubmitting(true);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    try {;
      const res = await fetch('/api/feedback/submit', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          responseId: effectiveResponseId,;
          rating,;
          comment: comment && comment.trim(),;
          pagePath:;
            typeof window !== 'undefined';
              ? window && window.location.pathname;
              : undefined,;
          aiModel,;
        }),;
<<<<<<< HEAD

      });
      if (!res && res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true);

    } catch (e: any) {;
      setError(e?.message || 'Something went wrong');
    } finally {;

      setSubmitting(false);    }
<<<<<<< HEAD
=======

=======
      });
      if (!res && res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true);
    } catch (e: any) {;
      setError(e?.message || 'Something went wrong');
    } finally {;
      setSubmitting(false);    }
  }
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          responseId: effectiveResponseId,
          rating;
          comment: comment.trim(),
          pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
<<<<<<< HEAD

=======
=======
  const effectiveResponseId = useMemo(
    () => responseId |uuidv4()
    [responseId]
  );
  const submit = async () => {
    if (!rating) {
      setError('Please choose 👍 or 👎');
      return;    }  const effectiveResponseId = useMemo(() => responseId |uuidv4(), [responseId]);
  const submit = async () => {
    if (!rating) {
      setError('Please choose 👍 or 👎');
      return;      return
    }
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/feedback/submit', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          responseId: effectiveResponseId
          rating
          comment: comment.trim()
          pagePath:
            typeof window !== 'undefined'
              ? window.location.pathname
              : undefined
          aiModel
        })
      });
      if (!res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true);
    } catch (e: any) {
      setError(e?.message |'Something went wrong');
    } finally {
      setSubmitting(false);    }
<<<<<<< HEAD
  }
  return (
    <div className='mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60'>
      <div className='text-sm font-medium mb-2'>Was this answer useful?</div>          comment: comment.trim()
          pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          aiModel})});
      if (!res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true)
    } catch (e: any) {
      setError(e?.message |'Something went wrong')
    } finally {
      setSubmitting(false)
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className='mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60'>;
      <div className='text-sm font-medium mb-2'>Was this answer useful?</div>          comment: comment && comment.trim(),;
          pagePath: typeof window !== 'undefined' ? window && window.location.pathname : undefined,;
          aiModel})});
      if (!res && res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true);
    } catch (e: any) {;
      setError(e?.message || 'Something went wrong');
    } finally {;
      setSubmitting(false);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  return (

=======
=======
    }
  }
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">
      <div className="text-sm font-medium mb-2">Was this answer useful?</div>
      {submitted ? (
=======
    }
  }
=======
  };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  return (
    <div className='mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60'>
      <div className='text-sm font-medium mb-2'>Was this answer useful?</div>
      {submitted ? (
        <div className='text-sm text-emerald-700 dark:text-emerald-300'>
          Thanks for your feedback!
        </div>
      ) : (
        <div className='space-y-3'>
          <div className='flex items-center gap-2'>
            <button
              type='button'              onClick={() => setRating(rating === 'up' ? null : 'up')}      {submitted ? (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="text-sm text-emerald-700 dark:text-emerald-300">Thanks for your feedback!</div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <button
              type="button"
              onClick={() => setRating(rating === 'up' ? null : 'up')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={rating === 'up'}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            >;
              <span>👍</span>;
              <span>Yes</span>;
            </button>;
            <button
<<<<<<< HEAD


=======
              type="button"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              onClick={() => setRating(rating === 'down' ? null : 'down')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
              aria-pressed={rating === 'down'}
            >;
              <span>👎</span>;
              <span>No</span>;
            </button>;
          </div>;
          <textarea
<<<<<<< HEAD


=======
            placeholder="Optional feedback (what worked, what didn’t)"
            value={comment}
            onChange={(e) => setComment(e.target.value.slice(0, 2000))}
            className="w-full rounded-md border px-3 py-2 text-sm"
            rows={3}
          />;
          {error && <div className="text-xs text-red-600">{error}</div>}
          <div>
            <button onClick={submit} disabled={submitting} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {submitting ? 'Submitting…' : 'Submit feedback'}
            </button>;
          </div>;
        </div>;
      )}
<<<<<<< HEAD


  );

}
=======

}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </div>;
  );
}
    </div>
<<<<<<< HEAD

}

}

  );
}

=======
  );
}
;
export type FeedbackWidgetProps = {
  response_id?: string;
  ai_model?: string;
}
;
export default /**
 * FeedbackWidget - Function description
 */
function FeedbackWidget() {  const [rating, set_rating] = useState < null | 'up' | 'down'>(null);export type FeedbackWidgetProps = {
  response_id?: string;
  ai_model?: string;
}
;
export default /**
 * FeedbackWidget - Function description
 */
function FeedbackWidget() {
  const [rating, set_rating] = useState < null | 'up' | 'down'>(null);
  const [comment, set_comment] = useState ('');
  const [submitting, set_submitting] = useState (false);
  const [submitted, set_submitted] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  const effectiveResponseId = useMemo (
    () => response_id || uuidv4 (),
    [response_id]);
  const submit = async () => {
    // Check condition
if ( {) {
  $2
}
      set_error ('Please choose 👍 or 👎');
      return;    }  const effectiveResponseId = useMemo (() => response_id || uuidv4 (), [response_id]);
;
  const submit = async () => {
    // Check condition
if ( {) {
  $2
}
      set_error ('Please choose 👍 or 👎');
      return;      return;
    }
    set_error (null);
    set_submitting (true);
    try {
      const res = await fetch ('/api / feedback / submit', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          response_id: effectiveResponseId,
          rating,
          comment: comment.trim (),
          page_path:;
            typeof window !== 'undefined';
              ? window.location.pathname;
              : undefined,
          ai_model,
        }),
      });
      if (throw new Error ('Failed to submit feedback')) {
  $2
}
      set_submitted (true);
    } catch (e: any) {
      set_error (e?.message || 'Something went wrong');
    } finally {
      set_submitting (false);    }
  }
;
  return (
    <div className='mt - 6 rounded - lg border p - 4 bg - white / 60 dark:bg - neutral - 900 / 60'>;
      <div className='text - sm font - medium mb - 2'>Was this answer useful?</div>          comment: comment.trim (),
          page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
          ai_model})});
      if (throw new Error ('Failed to submit feedback')) {
  $2
}
      set_submitted (true);
    } catch (e: any) {
      set_error (e?.message || 'Something went wrong');
    } finally {
      set_submitting (false);
    }
  }
;
  return (
    <div className='mt - 6 rounded - lg border p - 4 bg - white / 60 dark:bg - neutral - 900 / 60'>;
      <div className='text - sm font - medium mb - 2'>Was this answer useful?</div>;
      {submitted ? (
        <div className='text - sm text - emerald - 700 dark:text - emerald - 300'>;
          Thanks for your feedback!;
        </div>) : (
        <div className='space - y-3'>;
          <div className='flex items - center gap - 2'>;
            <button;
              type='button'              on_click={() => set_rating (rating === 'up' ? null : 'up')}      {submitted ? (
        <div className="text - sm text - emerald - 700 dark:text - emerald - 300">Thanks for your feedback!</div>) : (
        <div className="space - y-3">;
          <div className="flex items - center gap - 2">;
            <button;
              type="button";
              on_click={() => set_rating (rating === 'up' ? null : 'up')}
              className={`inline - flex items - center gap - 1 rounded - md border px - 2 py - 1 text - sm ${rating === 'up' ? 'bg - emerald - 600 text - white border - emerald - 600' : ''}`}
              aria - pressed={rating === 'up'}
            >;
              <span>👍</span>;
              <span > Yes</span>;
            </button>;
            <button;
              type='button'              on_click={() => set_rating (rating === 'down' ? null : 'down')}              type="button";
              on_click={() => set_rating (rating === 'down' ? null : 'down')}
              className={`inline - flex items - center gap - 1 rounded - md border px - 2 py - 1 text - sm ${rating === 'down' ? 'bg - red - 600 text - white border - red - 600' : ''}`}
              aria - pressed={rating === 'down'}
            >;
              <span>👎</span>;
              <span > No</span>;
            </button>;
          </div>;
          <textarea;
            placeholder='Optional feedback (what worked, what didn’t)';
            value={comment}
            on_change={e => set_comment (e.target.value.slice (0, 2000))}
            className='w - full rounded - md border px - 3 py - 2 text - sm';
            rows={3}
          />;
          {error && <div className='text - xs text - red - 600'>{error}</div>}
          <div>;
            <button;
              on_click={submit}
              disabled={submitting}
              className='rounded - md bg - black text - white dark:bg - white dark:text - black px - 3 py - 1.5 text - sm';
            >              {submitting ? 'Submitting…' : 'Submit feedback'}            value={comment}
            on_change={(e) => set_comment (e.target.value.slice (0, 2000))}
            className="w - full rounded - md border px - 3 py - 2 text - sm";
            rows={3}
          />;
          {error && <div className="text - xs text - red - 600">{error}</div>}
          <div>;
            <button on_click={submit} disabled={submitting} className="rounded - md bg - black text - white dark:bg - white dark:text - black px - 3 py - 1.5 text - sm">;
              {submitting ? 'Submitting…' : 'Submit feedback'}
            </button>;
          </div>;
        </div>)}
    </div>);

  const _submit = async () => {
    if (!rating) {
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
    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">
      <div className="text-sm font-medium mb-2">Was this answer useful?</div>
      {_submitted ? (
        <div className="text-sm text-emerald-700 dark:text-emerald-300">Thanks for your feedback!</div>
      ) : (_<div className="space-y-3">
          <div className="flex items-center gap-2">

            <button
              type=&quot;button&quot;
              onClick={() => setRating(rating === 'up' ? null : 'up')}
              className={_`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={_rating === 'up'}
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            >
              <span>👍</span>
              <span>Yes</span>
            </button>
            <button
<<<<<<< HEAD
              type=&quot;button&quot;
=======
              type='button'              onClick={() => setRating(rating === 'down' ? null : 'down')}              type="button"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
            placeholder=&quot;Optional feedback (what worked, what didn’t)&quot;
            value={comment}
            onChange={(e) => setComment(e.target.value.slice(0, 2000))}
            className=&quot;w-full rounded-md border px-3 py-2 text-sm&quot;
            rows={3}
          />
          {error && <div className=&quot;text-xs text-red-600&quot;>{error}</div>}
          <div>
            <button onClick={submit} disabled={submitting} className=&quot;rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm&quot;>
=======
            placeholder='Optional feedback (what worked, what didn’t)'
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
            >              {submitting ? 'Submitting…' : 'Submit feedback'}            value={comment}
            onChange={(e) => setComment(e.target.value.slice(0, 2000))}
            className="w-full rounded-md border px-3 py-2 text-sm"
            rows={3}
          />
          {error && <div className="text-xs text-red-600">{error}</div>}
          <div>
            <button onClick={submit} disabled={submitting} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              {submitting ? 'Submitting…' : 'Submit feedback'}
            </button>
          </div>
        </div>
      )}
    </div>
<<<<<<< HEAD
  )

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
);
<<<<<<< HEAD
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
=======
  );
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
