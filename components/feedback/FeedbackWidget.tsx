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

  const [rating, setRating] = useState<null | 'up' | 'down'>(null);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

          aiModel})});
      if (!res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true)
    } catch (e: any) {
      setError(e?.message |'Something went wrong')
    } finally {
      setSubmitting(false)
=======

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            <button
              type="button"
              onClick={() => setRating(rating === 'up' ? null : 'up')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={rating === 'up'}
=======
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

            >
              <span>👍</span>
              <span>Yes</span>
            </button>
            <button

              onClick={() => setRating(rating === 'down' ? null : 'down')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
              aria-pressed={rating === 'down'}
            >
              <span>👎</span>
              <span>No</span>
            </button>
          </div>
          <textarea

              {submitting ? 'Submitting…' : 'Submit feedback'}
            </button>
          </div>
        </div>
      )}
    </div>

}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
