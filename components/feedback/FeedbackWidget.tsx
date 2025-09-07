<<<<<<< HEAD
<<<<<<< HEAD

class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
    }
    return this.props.children;
  }
}
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
import React, { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export type FeedbackWidgetProps = any;
  responseId?: string;
  aiModel?: string;
}
export default function FeedbackWidget({
  responseId
  aiModel
}: FeedbackWidgetProps) {  const [rating, setRating] = useState<null | 'up' | 'down'>(null);export type FeedbackWidgetProps = {
  responseId?: string;
  aiModel?: string
}
export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {
  const [rating, setRating] = useState<null | 'up' | 'down'>(null);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
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
  }
  return (
    <div className='mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60'>
      <div className='text-sm font-medium mb-2'>Was this answer useful?</div>          comment: comment.trim()
          pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined
          aiModel})});
      if (!res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true)
    } catch (e: any) {'
      setError(e?.message |'Something went wrong')
    } finally {}
      setSubmitting(false)

  }
export type FeedbackWidgetProps = any
const [rating, setRating] = useState<null | 'up' | 'down'    />(null)
  const submit = async () => {

const submit = async () => {
  if($2) {
      setError('Please choose 👍 or 👎')
return;}

    setError(null)setSubmitting(true)try {const res = await fetch('/api/feedback/submit', {method: 'POST';}
        headers: { "Content-Type": "application/json"}

        body: JSON.stringify({
          responseId: effectiveResponseId,
rating,
          comment: comment.trim(),
          pagePath: typeof window !== 'undefined'
              ? window.location.pathname
              : undefined;}
aiModel}
        })

})
      if (!res.ok) throw new Error('Failed to submit feedback')
      setSubmitted(true)
    } catch (e) {
      setError(e?.message |'Something went wrong');}
    } finally {}
      setSubmitting(false);}

  return (

      <div className='text-sm font-medium mb-2'>Was this answer useful?</div>
      {submitted ? ('
        <div className='text-sm text-emerald-700 dark:text-emerald-300'>
          Thanks for your feedback!
        </div>
      ) : ('
        <div className='space-y-3'>'
          <div className='flex items-center gap-2'>'
      <div className='text-sm font-medium mb-2'>Was this answer useful?</div>
      {submitted ? (;'
        <div className='text-sm text-emerald-700 dark:text-emerald-300'>
          Thanks for your feedback!
        </div>
      ) : (;'
        <div className='space-y-3'>;'
          <div className='flex items-center gap-2'>
              aria-pressed={rating === 'down'}
            >
              <span    />👎</span>
              <span    />No</span>
            </button>
          </div>
          <textarea
              className={`inline - flex items - center gap - 1 rounded - md border px - 2 py - 1 text - sm ${rating === 'up' ? 'bg - emerald - 600 text - white border - emerald - 600' : ''}`}

              aria - pressed={rating === 'up'}
            >
              <span    />👍</span>
              <span     /> Yes</span>
            </button>
              aria - pressed={rating === 'down'}
            >
              <span    />👎</span>
              <span     /> No</span>
            </button>
          </div>
          <textarea
            placeholder='Optional feedback (what worked, what didn’t)'
            value={comment}

              {submitting ? 'Submitting…' : 'Submit feedback'}
            </button>
          </div>
        </div>)}
    </div>)
  const _submit = async () => {}
  if($2) {'
      setError('Please choose 👍 or 👎'),
      return
    setError(null),
    setSubmitting(true),
    try {'
      const res = await fetch('/api/feedback/submit', {'
        method: 'POST','
        headers: { "Content-Type": "application/json" },
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

  },

  return ("
    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">"
      <div className="text-sm font-medium mb-2">Was this answer useful?</div>
      {_submitted ? ("
        <div className="text-sm text-emerald-700 dark:text-emerald-300">Thanks for your feedback!</div>"
      ) : (_<div className="space-y-3">"
          <div className="flex items-center gap-2">

            <button
              type=&quot;button&quot;'
              onClick={() => setRating(rating === 'up' ? null : 'up')}'`
              className={_`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}'

              aria-pressed={_rating === 'up'}

            >
              <span    />👍</span>
              <span    />Yes</span>
            </button>

              aria-pressed={rating === 'down'}
            >
              <span    />👎</span>
              <span    />No</span>
            </button>
          </div>

              {submitting ? 'Submitting…' : 'Submit feedback'}
            </button>
          </div>
        </div>

              className='rounded-md bg-black text-white dark: bg-white dark:text-black px-3 py-1.5 text-sm'
                />

              {submitting ? 'Submitting…' : 'Submit feedback}

            </button>
          </div>
        </div>
      )}

    </div>
);
}
}
<<<<<<< HEAD
})}"
=======
const submit = async () => {
  if (!rating) {
  <button type="button" onClick= {
  () => setRating (rating === 'up' ? null : 'up') 
}className= {
  `inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm $ {
  rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : '' 
}` 
}aria-pressed= {
  rating === 'up' 
}> <span>👍</span> <span>Yes</span> </button> <button > <span>👎</span> <span>No</span> </button> </div> <textarea </button> </div> </div>) 
}</div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
