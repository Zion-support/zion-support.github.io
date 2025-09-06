
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
=======
export type FeedbackWidgetProps = {;
  responseId?: string;
  aiModel?: string;
}
export default function FeedbackWidget({
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  responseId
  aiModel
}: FeedbackWidgetProps) {  const [rating, setRating] = useState<null | 'up' | 'down'>(null);export type FeedbackWidgetProps = {
  responseId?: string;
  aiModel?: string
}
export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {
  responseId,
  aiModel,;
}: FeedbackWidgetProps) {  const [rating, setRating] = useState<null | 'up' | 'down'>(null);export type FeedbackWidgetProps = {;
  responseId?: string;
  aiModel?: string
};

export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const [rating, setRating] = useState<null | 'up' | 'down'>(null);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD

=======
  const effectiveResponseId = useMemo(
    () => responseId |uuidv4()
    [responseId]
  const [rating, setRating] = useState<null | 'up' | 'down'>(null);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const effectiveResponseId = useMemo(;
    () => responseId || uuidv4(),;
    [responseId];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
  const submit = async () => {;
    if (!rating) {;
      setError('Please choose 👍 or 👎');
<<<<<<< HEAD

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          aiModel})});
      if (!res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true)
    } catch (e: any) {
      setError(e?.message |'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }
  };

  return (

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">
      <div className="text-sm font-medium mb-2">Was this answer useful?</div>
      {submitted ? (
    }
  }
  };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
      <div className='text-sm font-medium mb-2'>Was this answer useful?</div>;
      {submitted ? (;
        <div className='text-sm text-emerald-700 dark:text-emerald-300'>;
          Thanks for your feedback!;
        </div>;
      ) : (;
        <div className='space-y-3'>;
          <div className='flex items-center gap-2'>;
            <button
<<<<<<< HEAD
              type='button'              onClick={() => setRating(rating === 'up' ? null : 'up')}      {submitted ? (

        <div className="text-sm text-emerald-700 dark:text-emerald-300">Thanks for your feedback!</div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-2">

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <button
              type="button"
              onClick={() => setRating(rating === 'up' ? null : 'up')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={rating === 'up'}
<<<<<<< HEAD
=======
            >;
              <span>👍</span>;
              <span>Yes</span>;
            </button>;
            <button


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              onClick={() => setRating(rating === 'down' ? null : 'down')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
              aria-pressed={rating === 'down'}
            >;
              <span>👎</span>;
              <span>No</span>;
            </button>;
          </div>;
          <textarea
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
export type FeedbackWidgetProps = {
  response_id?: string;
  ai_model?: string;
}
<<<<<<< HEAD
  );
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
        <div className="text - sm text - emerald - 700 dark:text-emerald-300">Thanks for your feedback!</div>) : (
        <div className="space-y-3">;
          <div className="flex items-center gap-2">;
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
            className="w - full rounded - md border px - 3 py-2 text-sm";
            rows={3}
          />;
          {error && <div className="text - xs text-red-600">{error}</div>}
          <div>;
            <button on_click={submit} disabled={submitting} className="rounded - md bg - black text - white dark:bg - white dark:text - black px - 3 py-1.5 text-sm">;
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
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            >
              <span>👍</span>
              <span>Yes</span>
            </button>
            <button
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              {submitting ? 'Submitting…' : 'Submit feedback'}
            </button>
          </div>
        </div>
      )}
    </div>
<<<<<<< HEAD

}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}
}
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
