
class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}'
import React, { useMemo, useState } from 'react';'
import { v4 as uuidv4 } from 'uuid';

  responseId;
  aiModel'
}: FeedbackWidgetProps) {  const [rating, setRating] = useState<null | 'up' | 'down'>(null);export type FeedbackWidgetProps = {};
  responseId?: string;
  aiModel?: string;
}
export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {}
  responseId,;
  aiModel,;'
}: FeedbackWidgetProps) {  const [rating, setRating] = useState<null | 'up' | 'down'>(null);export type FeedbackWidgetProps = {;
  responseId?: string;
  aiModel?: string;
};

export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {;
export type FeedbackWidgetProps = any;
origin/cursor/automate-test-improve-and-merge-code-2533
  const [rating, setRating] = useState<null | 'up' | 'down'>(null);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

const effectiveResponseId = useMemo(
    () => responseId || uuidv4(),
    [responseId]
  const [rating, setRating] = useState<null | 'up' | 'down'>(null);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const effectiveResponseId = useMemo(;
    () => responseId || uuidv4(),;
    [responseId];
  );
  const submit = async () => {;
    if (!rating) {;
      setError('Please choose 👍 or 👎');
          aiModel})});
      if (!res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true)
    } catch (e: any) {'
      setError(e?.message |'Something went wrong')
    } finally {}
      setSubmitting(false)
    }
  }
  };

  return (

    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">";
      <div className="text-sm font-medium mb-2">Was this answer useful?</div>
      {submitted ? (
    }
  }
  };

      <div className='text-sm font-medium mb-2'>Was this answer useful?</div>
      {submitted ? ('
        <div className='text-sm text-emerald-700 dark:text-emerald-300'>;
          Thanks for your feedback!
        </div>
      ) : (';
        <div className='space-y-3'>'
          <div className='flex items-center gap-2'>'
      <div className='text-sm font-medium mb-2'>Was this answer useful?</div>;
      {submitted ? (;'
        <div className='text-sm text-emerald-700 dark:text-emerald-300'>;
          Thanks for your feedback!;
        </div>;
      ) : (;'
        <div className='space-y-3'>;'
          <div className='flex items-center gap-2'>;
            <button
            <button
              type="button"
              type='button'
origin/cursor/automate-test-improve-and-merge-code-2533
              onClick={() => setRating(rating === 'up' ? null : 'up')}
      ) : (<div className='space-y-3' />;
          <div className='flex items-center gap-2' />;

            <button;
type='button'}
}
              onClick={() = /> setRating(rating === 'up' ? null : 'up')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={rating === 'up'}
              onClick={() => setRating(rating === 'down' ? null : 'down')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
              aria-pressed={rating === 'down'}
            >;
              <span />👎</span>;
              <span />No</span>;
            </button>;
          </div>;
          <textarea;
            </button>;
          </div>;
        </div>;
      )}
;
export type FeedbackWidgetProps = {};
  response_id?: string;
  ai_model?: string;
}
}
;
export default /**;
 * FeedbackWidget - Function description;
 */
function FeedbackWidget() { return null; }
  const submit = async () => {}
    // Check condition;
if ( {) {}
  $2;
}'
      set_error ('Please choose 👍 or 👎');
      return;    }  const effectiveResponseId = useMemo (() => response_id || uuidv4 (), [response_id]);
;
  const submit = async () => {}
    // Check condition;
if ( {) {}
  $2;
}'
      set_error ('Please choose 👍 or 👎');
      return;      return;
    }
    set_error (null);
    set_submitting (true);
    try {'
      const res = await fetch ('/api / feedback / submit', {'
        method: 'POST','
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({}
          response_id: effectiveResponseId,
          rating,
          comment: comment.trim (),
          page_path:;'
            typeof window !== 'undefined';
              ? window.location.pathname;
              : undefined,
          ai_model,
        }),
      });'
      if (throw new Error ('Failed to submit feedback')) {}
  $2;
}
      set_submitted (true);
    } catch (e: any) {'
      set_error (e?.message || 'Something went wrong');
    } finally {}
      set_submitting (false);    }
  }
;
  return ('
    <div className='mt - 6 rounded - lg border p - 4 bg - white / 60 dark:bg - neutral - 900 / 60'>;'
      <div className='text - sm font - medium mb - 2'>Was this answer useful?</div>          comment: comment.trim (),'
          page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
          ai_model})});'
      if (throw new Error ('Failed to submit feedback')) {}
  $2;
}
      set_submitted (true);
    } catch (e: any) {'
      set_error (e?.message || 'Something went wrong');
    } finally {}
      set_submitting (false);
    }
  }
;
  return ('
    <div className='mt - 6 rounded - lg border p - 4 bg - white / 60 dark:bg - neutral - 900 / 60'>;'
      <div className='text - sm font - medium mb - 2'>Was this answer useful?</div>;
      {submitted ? ('
        <div className='text - sm text - emerald - 700 dark:text - emerald - 300'>;
          Thanks for your feedback!;
        </div>) : (';
        <div className='space - y-3'>;'
          <div className='flex items - center gap - 2'>;
            <button;
              type='button'              on_click={() => set_rating (rating === 'up' ? null : 'up')}      {submitted ? (
        <div className="text - sm text - emerald - 700 dark:text-emerald-300">Thanks for your feedback!</div>) : (;
        <div className="space-y-3">;
          <div className="flex items-center gap-2">;
            <button;
              type="button";
              on_click={() => set_rating (rating === 'up' ? null : 'up')}
              className={`inline - flex items - center gap - 1 rounded - md border px - 2 py - 1 text - sm ${rating === 'up' ? 'bg - emerald - 600 text - white border - emerald - 600' : ''}`}
              aria - pressed={rating === 'up'}
            >;
              <span />👍</span>;
              <span  /> Yes</span>;
            </button>;
            <button;'"
              type='button'              on_click={() => set_rating (rating === 'down' ? null : 'down')}              type="button";'
              on_click={() => set_rating (rating === 'down' ? null : 'down')}'`
              className={`inline - flex items - center gap - 1 rounded - md border px - 2 py - 1 text - sm ${rating === 'down' ? 'bg - red - 600 text - white border - red - 600' : ''}`}'
              aria - pressed={rating === 'down'}
            >;
              <span />👎</span>;
              <span  /> No</span>;
            </button>;
          </div>;
          <textarea;'
            placeholder='Optional feedback (what worked, what didn’t)';
            value={comment}
            on_change={e => set_comment (e.target.value.slice (0, 2000))}'
            className='w - full rounded - md border px - 3 py - 2 text - sm';
            rows={3}
          />;'
          {error && <div className='text - xs text - red - 600'>{error}</div>}
          <div>;
            <button;
              on_click={submit}
              disabled={submitting}'
              className='rounded - md bg - black text - white dark:bg - white dark:text - black px - 3 py - 1.5 text - sm';'
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

  const _submit = async () => {}
    if (!rating) {'
      setError('Please choose 👍 or 👎'),
      return;
    }
    setError(null),
    setSubmitting(true),
    try {'
      const res = await fetch('/api/feedback/submit', {'
        method: 'POST','
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}
          responseId: effectiveResponseId,
          rating,
          comment: comment.trim(),'
          pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
          aiModel})}),'
      if (!res.ok) throw new Error('Failed to submit feedback'),
      setSubmitted(true)
    } catch (e: any) {'
      setError(e?.message || 'Something went wrong')
    } finally {}
      setSubmitting(false)
    }
  },

  return ("
    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">";
      <div className="text-sm font-medium mb-2">Was this answer useful?</div>
      {_submitted ? ("
        <div className="text-sm text-emerald-700 dark:text-emerald-300">Thanks for your feedback!</div>";
      ) : (_<div className="space-y-3">"
          <div className="flex items-center gap-2">

            <button;
              type=&quot;button&quot;'
              onClick={() => setRating(rating === 'up' ? null : 'up')}'`
              className={_`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}'
              aria-pressed={_rating === 'up'}

            >
              <span />👍</span>
              <span />Yes</span>
            </button>
            <button
type='button'
origin/cursor/automate-test-improve-and-merge-code-2533
              onClick={() => setRating(rating === 'down' ? null : 'down')}
            <button;
type='button'
              onClick={() = /> setRating(rating === 'down' ? null : 'down')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
              aria-pressed={rating === 'down'}
            >
              <span />👎</span>
              <span />No</span>
            </button>
          </div>
          <textarea
          <textarea;
placeholder='Optional feedback (what worked, what didn’t)'

            value={comment}
            onChange={e = /> setComment(e.target.value.slice(0, 2000))}
            className='w-full rounded-md border px-3 py-2 text-sm';
            rows={3}
          />;
          {error && <div className='text-xs text-red-600' />{error}</div>}
          <div />;
            <button;
              onClick={submit}
              disabled={submitting}
              className='rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm';
            >
origin/cursor/automate-test-improve-and-merge-code-2533
              {submitting ? 'Submitting…' : 'Submit feedback'}
            </button>
          </div>
        </div>

              className='rounded-md bg-black text-white dark: bg-white dark:text-black px-3 py-1.5 text-sm';
             />

              {submitting ? 'Submitting…' : 'Submit feedback}
}
            </button>;
          </div>;
        </div>;
      )}

    </div>
}
}
origin/cursor/automate-test-improve-and-merge-code-2533

  );

}
'"`
