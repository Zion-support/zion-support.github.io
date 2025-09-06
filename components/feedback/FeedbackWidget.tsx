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


  );
  const submit = async () => {;
    if (!rating) {;
      setError('Please choose 👍 or 👎');

      return;    }  const effectiveResponseId = useMemo(() => responseId || uuidv4(), [responseId]);
  const submit = async () => {;
    if (!rating) {;

      setError('Please choose 👍 or 👎');
      return;      return;
      return
    }
    setError(null);
    setSubmitting(true);

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

      });
      if (!res && res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true);

    } catch (e: any) {;
      setError(e?.message || 'Something went wrong');
    } finally {;

      setSubmitting(false);    }
  }
  return (
    <div className='mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60'>
      <div className='text-sm font-medium mb-2'>Was this answer useful?</div>          comment: comment.trim()
          pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined
          aiModel})});
      if (!res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true)
    } catch (e: any) {
      setError(e?.message |'Something went wrong')
    } finally {
      setSubmitting(false)

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

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
  }
  };

  return (

=======
    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">
      <div className="text-sm font-medium mb-2">Was this answer useful?</div>
      {submitted ? (
=======
    }
  }
=======
  };

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
        <div className="text-sm text-emerald-700 dark:text-emerald-300">Thanks for your feedback!</div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-2">

            <button
              type="button"
              onClick={() => setRating(rating === 'up' ? null : 'up')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={rating === 'up'}
            >;
              <span>👍</span>;
              <span>Yes</span>;
            </button>;
            <button


              onClick={() => setRating(rating === 'down' ? null : 'down')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
              aria-pressed={rating === 'down'}
            >;
              <span>👎</span>;
              <span>No</span>;
            </button>;
          </div>;
          <textarea


              {submitting ? 'Submitting…' : 'Submit feedback'}
            </button>;
          </div>;
        </div>;
      )}


  );

}
=======

}
=======
    </div>;
  );
}
    </div>
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
            >
              <span>👍</span>
              <span>Yes</span>
            </button>
            <button
              type='button'              onClick={() => setRating(rating === 'down' ? null : 'down')}              type="button"
              onClick={() => setRating(rating === 'down' ? null : 'down')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
              aria-pressed={rating === 'down'}
            >
              <span>👎</span>
              <span>No</span>
            </button>
          </div>
          <textarea
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
              {submitting ? 'Submitting…' : 'Submit feedback'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
=======
}
=======
  );
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
