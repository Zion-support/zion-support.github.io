
    }
    return this.props.children;
  }
}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import React, { useMemo, useState } from react';
import { v4 as uuidv4 } from 'uuid;
export type FeedbackWidgetProps = any;

export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {
  const [rating, setRating] = useState<null | up' | 'down>(null),
  const [comment, setComment] = useState($2);
  const [submitting, setSubmitting] = useState($2);
  const [submitted, setSubmitted] = useState($2);
  const [error, setError] = useState<string | null>(null),

import { v4 as uuidv4  } from uuid';
  responseId;
  aiModel;
}: FeedbackWidgetProps) {  const [rating, setRating] = useState<null | 'up | down'>(null)export type FeedbackWidgetProps = {responseId?: string;
  aiModel?: string;
}
export default function FeedbackWidget() {responseId,aiModel}: FeedbackWidgetProps) {  const [rating, setRating] = useState<null | 'up | down'>(null)export type FeedbackWidgetProps = {responseId?: string;
  aiModel?: string;
}export default function FeedbackWidget() {export type FeedbackWidgetProps = any;const [rating, setRating] = useState<null | 'up | down'>(null)const [comment, setComment] = useState(')const [submitting, setSubmitting] = useState(false)const [submitted, setSubmitted] = useState(false)const [error, setError]  = useState<string | null>(null)const effectiveResponseId = useMemo(() => responseId || uuidv4(),[responseId];
  const [rating, setRating] = useState<null | up' | 'down>(null)const [comment, setComment] = useState(')const [submitting, setSubmitting] = useState(false)const [submitted, setSubmitted] = useState(false)const [error, setError]  = useState<string | null>(null)const effectiveResponseId = useMemo(() => responseId || uuidv4(),[responseId];
  )const submit = async () => {if (!rating) {setError('Please choose 👍 or 👎)aiModel})})if (!res.ok) throw new Error(Failed to submit feedback')setSubmitted(true)} catch (e: any) {setError(e?.message |'Something went wrong)} finally {setSubmitting(false)}
  }
  }return (<div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60>;
      <div className=text-sm font-medium mb-2">Was this answer useful?</div>;
      {submitted ? (}
  }
  }const submit = async () => {if (!rating) {setError(Please choose 👍 or 👎')return;
  const submit = async () => {
    if (!rating) {
      setError('Please choose 👍 or 👎);
          aiModel})});
      if (!res.ok) throw new Error(Failed to submit feedback');
  const effectiveResponseId = useMemo(() => responseId || uuidv4(), [responseId]),
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

    if (!rating) {
      setError($2);
      return
    }
    setError($2);
    setSubmitting($2);
    try {
      const res = await fetch($2);
          pagePath: typeof window !== 'undefined ? window.location.pathname : undefined,
          aiModel})}),
      if (!res.ok) throw new Error($2);
      setSubmitted(true)
    } catch (e: any) {
      setError(e?.message || Something went wrong')
    } finally {
      setSubmitting(false)
    }
  },

  return (
    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60>
      <div className=text-sm font-medium mb-2">Was this answer useful?</div>
      {submitted ? (
        <div className="text-sm text-emerald-700 dark:text-emerald-300>Thanks for your feedback!</div>
      ) : (
    }
    setError(null)setSubmitting(true)try {const res = await fetch('/api/feedback/submit, {method: POST';
        headers: { 'Content-Type: application/json' }
        body: JSON.stringify({responseId: effectiveResponseId,rating,comment: comment.trim(),pagePath:;
            typeof window !== 'undefined;
              ? window.location.pathname;
              : undefined;
          aiModel;
        })})if (!res.ok) throw new Error(Failed to submit feedback')setSubmitted(true)} catch (e: any) {setError(e?.message |'Something went wrong)} finally {setSubmitting(false)}
  }return (<div className=mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60'>;
      <div className='text-sm font-medium mb-2>Was this answer useful?</div>;
      {submitted ? (<div className=text-sm text-emerald-700 dark:text-emerald-300'>;
          Thanks for your feedback!;
        </div>;
      ) : (<div className='space-y-3>;
          <div className=flex items-center gap-2'>;
      <div className='text-sm font-medium mb-2>Was this answer useful?</div>;
      {submitted ? (<div className=text-sm text-emerald-700 dark:text-emerald-300'>;
          Thanks for your feedback!;
        </div>;
      ) : (<div className='space-y-3>;
          <div className=flex items-center gap-2'>;
=======
  return (

    <div className=mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">"
      <div className=text-sm font-medium mb-2>Was this answer useful?</div>
      {submitted ? (
    }
  }
  }




const [comment, setComment] = useState('');'

const [submitting, setSubmitting] = useState(false);

const [submitted, setSubmitted] = useState(false);

const [error, setError] = useState<string | null>(null);

const effectiveResponseId = useMemo(;
    () => responseId || uuidv4(),;
    [responseId];
  );


}

        "body": JSON.stringify({
          }
          "responseId": effectiveResponseId,
rating,

        })
     
});

=======
      if (!res.ok) throw new Error('Failed to submit feedback);
      setSubmitted(true);
    } catch (e: any) {}
      setError(e?.message |Something went wrong');}
    } finally {}
      setSubmitting(false);}
    }
  }
origin/cursor/automate-test-improve-and-merge-code-2533
  return (

      <div className='text-sm font-medium mb-2>Was this answer useful?</div>
      {submitted ? (
        <div className='text-sm text-emerald-700 dark:text-emerald-300'>
          Thanks for your feedback!
        </div>
      ) : (
        <div className=space-y-3'>'
          <div className=flex items-center gap-2>'
      <div className='text-sm font-medium mb-2>Was this answer useful?</div>;
      {submitted ? (;
        <div className='text-sm text-emerald-700 dark:text-emerald-300'>;
=======
<div className=mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60 />
      <div className='text-sm font-medium mb-2' />Was this answer useful?</div>
      {submitted ? (
        <div className=text-sm text-emerald-700 dark:text-emerald-300 />
          Thanks for your feedback!
        </div>
      ) : (
        <div className='space-y-3' />
          <div className=flex items-center gap-2 />

      <div className='text-sm font-medium mb-2' />Was this answer useful?</div>;
      {submitted ? (<div className=text-sm text-emerald-700 dark:text-emerald-300 />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          Thanks for your feedback!;
        </div>;
      ) : (;'
        <div className='space-y-3>;
          <div className='flex items-center gap-2'>;

              aria-pressed={rating === down}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          </div>;
        </div>;
      )}export type FeedbackWidgetProps = {response_id?: string;
  ai_model?: string;
}
}export default /**;
 * FeedbackWidget - Function description;
 */;

if ( {) {$2;
}
      set_error ('Please choose 👍 or 👎')return;      return;'
    }

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              className={`inline - flex items - center gap - 1 rounded - md border px - 2 py - 1 text - sm ${rating === up ? 'bg - emerald - 600 text - white border - emerald - 600' : }`}
=======
            <button;'
              type='button              on_click={() => set_rating (rating === up' ? null : 'up)}      {submitted ? (
        <div className=text - sm text - emerald - 700 dark:text - emerald - 300">Thanks for your feedback!</div>) : ("
        <div className=space - y-3>;"
          <div className="flex items - center gap - 2>;
            <button;
              type="button";
              on_click={() => set_rating (rating === 'up' ? null : up)}'`
              className={`inline - flex items - center gap - 1 rounded - md border px - 2 py - 1 text - sm ${rating === 'up ? bg - emerald - 600 text - white border - emerald - 600' : '}`}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              aria - pressed={rating === 'up'}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            >;
              <span>👍</span>;
              <span > Yes</span>;
            </button>;

              aria - pressed={rating === 'down'}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            >;
              <span>👎</span>;
              <span > No</span>;
            </button>;
          </div>;
          <textarea;

            className='w - full rounded - md border px - 3 py - 2 text - sm;
            rows={3}
          />;
          {error && <div className=text - xs text - red - 600'>{error}</div>}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          <div>;
            <button;
              on_click={submit}
              disabled={submitting}

            >
              <span>👍</span>
              <span>Yes</span>
            </button>

              aria-pressed={rating === down}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            >
              <span>👎</span>
              <span>No</span>
            </button>
          </div>

            rows={3}
          />;
          {error && <div className='text-xs text-red-600'>{error}</div>}'
          <div>;
            <button;
              onClick={submit}
              disabled={submitting}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              {submitting ? Submitting… : 'Submit feedback'}
            </button>
          </div>
        </div>


      )}
    </div>
}
}
origin/cursor/automate-test-improve-and-merge-code-2533

}

=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
