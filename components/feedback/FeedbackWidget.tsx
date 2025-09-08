
<<<<<<< HEAD


=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    return this.props.children;
  }
}
import React, { useMemo, useState } from 'react';
<<<<<<< HEAD
=======
import { v4 as uuidv4 } from 'uuid';
export type FeedbackWidgetProps = $2;
  aiModel?: string
},
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  const effectiveResponseId = useMemo(() => responseId || uuidv4(), [responseId]),
export type FeedbackWidgetProps = any;

export type FeedbackWidgetProps = {;
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
  responseId,
  aiModel,;
}: FeedbackWidgetProps) {  const [rating, setRating] = useState<null | 'up' | 'down'>(null);export type FeedbackWidgetProps = {;
  responseId?: string;
  aiModel?: string
};

export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {;
  const [rating, setRating] = useState<null | 'up' | 'down'>(null);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

      return;    }  const effectiveResponseId = useMemo(() => responseId || uuidv4(), [responseId]);
  const submit = async () => {;
    if (!rating) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba

export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {
  const [rating, setRating] = useState<null | up' | 'down>(null),
  const [comment, setComment] = useState($2);
  const [submitting, setSubmitting] = useState($2);
  const [submitted, setSubmitted] = useState($2);
  const [error, setError] = useState<string | null>(null),

<<<<<<< HEAD

  );
  const submit = async () => {;
    if (!rating) {;
      setError('Please choose 👍 or 👎');
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React, { useMemo, useState } from 'react';'

<<<<<<< HEAD

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


          responseId: effectiveResponseId,
          rating;
          comment: comment.trim(),
          pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,




          aiModel})});
      if (!res.ok) throw new Error(Failed to submit feedback');
  const effectiveResponseId = useMemo(() => responseId || uuidv4(), [responseId]),
=======
import { v4 as uuidv4 } from 'uuid';'

export type FeedbackWidgetProps = any;

const [rating, setRating] = useState<null | 'up' | 'down'>(null);'
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  },

  return (
    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60>
      <div className=text-sm font-medium mb-2">Was this answer useful?</div>
      {submitted ? (
        <div className="text-sm text-emerald-700 dark:text-emerald-300>Thanks for your feedback!</div>
      ) : (
<<<<<<< HEAD

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
      ) : (<div className='space-y-3'>;
          <div className='flex items-center gap-2'>;
  return (

    <div className=mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">"
      <div className=text-sm font-medium mb-2>Was this answer useful?</div>
      {submitted ? (
    }
  }
  }




=======

    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">
      <div className="text-sm font-medium mb-2">Was this answer useful?</div>
      {submitted ? (
    }
  }
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
      ) : (
        <div className=space-y-3'>'
          <div className=flex items-center gap-2>'
      <div className='text-sm font-medium mb-2>Was this answer useful?</div>;
      {submitted ? (;
        <div className='text-sm text-emerald-700 dark:text-emerald-300'>;
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
      {submitted ? (<div className='text-sm text-emerald-700 dark:text-emerald-300' />;
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
            <button;
              type="button";
              type='button';
            <button
            <button
              type="button"
              onClick={() => setRating(rating === 'up' ? null : 'up')}
<<<<<<< HEAD

=======
  return (
<div className='mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60'    />
      <div className='text-sm font-medium mb-2'    />Was this answer useful?</div>
      {submitted ? (
        <div className='text-sm text-emerald-700 dark:text-emerald-300'    />
          Thanks for your feedback!
        </div>
      ) : (
        <div className='space-y-3'    />
          <div className='flex items-center gap-2'    />

      <div className='text-sm font-medium mb-2'    />Was this answer useful?</div>;
      {submitted ? (<div className='text-sm text-emerald-700 dark:text-emerald-300'    />;
          Thanks for your feedback!;
        </div>;
      ) : (<div className='space-y-3'    />;
          <div className='flex items-center gap-2'    />;

            <button;
type='button'}
}
              onClick={() =    /> setRating(rating === 'up' ? null : 'up')}
>>>>>>> origin/cursor/delete-old-data-records-6bba
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={rating === 'up'}
              onClick={() => setRating(rating === 'down' ? null : 'down')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
<<<<<<< HEAD


=======
            <button;
            <button"
              type="button"'
              onClick={() => setRating(rating === 'up' ? null : 'up')}'
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}'
              aria-pressed={rating === 'up'}'
              onClick={() => setRating(rating === 'down' ? null : 'down')}'`
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}'
>>>>>>> origin/cursor/delete-old-data-records-6bba
              aria-pressed={rating === 'down'}
            >;
              <span    />👎</span>;
              <span    />No</span>;
            </button>;
          </div>;
          <textarea;
<<<<<<< HEAD

            </button    />;

=======
            </button>;
            </button>;
            </button    />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>;
        </div>;
      )}

export type FeedbackWidgetProps = {response_id?: string;}
  ai_model?: string;}
}
}

export default /**;
 * FeedbackWidget - Function description;
<<<<<<< HEAD
=======
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
        </div>) : ('
        <div className='space - y-3'>;'
          <div className='flex items - center gap - 2'>;
            <button;
              type='button'              on_click={() => set_rating (rating === 'up' ? null : 'up')}      {submitted ? (
        <div className='text - sm text - emerald - 700 dark:text-emerald-300'>Thanks for your feedback!</div>) : (
        <div className='space-y-3'>;
          <div className='flex items-center gap-2'>;
            <button;
              type='button';
              on_click={() => set_rating (rating === 'up' ? null : 'up')}
>>>>>>> origin/cursor/delete-old-data-records-6bba

 */;
function FeedbackWidget() {const [rating, set_rating] = useState < null | 'up' | 'down'>(null)const [comment, set_comment] = useState ('')const [submitting, set_submitting] = useState (false)const [submitted, set_submitted] = useState (false)const [error, set_error]  = useState < string | null>(null)const effectiveResponseId = useMemo (() => response_id || uuidv4 (),[response_id];
  const submit = async () => {// Check condition;}
if ( {) {$2;}
}
      set_error ('Please choose 👍 or 👎')return;    }

const effectiveResponseId = useMemo (() => response_id || uuidv4 (), [response_id];
  const submit = async () => {// Check condition;}
if ( {) {$2;}
}
      set_error ('Please choose 👍 or 👎')return;      return;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    set_error (null)set_submitting (true)try {const res = await fetch ('/api / feedback / submit', {method: 'POST'}
  headers: { 'Content - Type': 'application / json'}
},body: JSON.stringify ({response_id: effectiveResponseId,rating,comment: comment.trim (),page_path:;
            typeof window !== 'undefined';}
              ? window.location.pathname;}
              : undefined,ai_model})})if (throw new Error ('Failed to submit feedback')) {$2;}
}
      set_submitted (true)} catch (e: any) {set_error (e?.message || 'Something went wrong')} finally {set_submitting (false)}
 
}return (<div className='mt - 6 rounded - lg border p - 4 bg - white / 60 dark:bg - neutral - 900 / 60'    />;
      <div className='text - sm font - medium mb - 2'    />Was this answer useful?</div>          comment: comment.trim (),page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,ai_model})})if (throw new Error ('Failed to submit feedback')) {$2;}
}
      set_submitted (true)} catch (e: any) {set_error (e?.message || 'Something went wrong')} finally {set_submitting (false)}
 
}return (<div className='mt - 6 rounded - lg border p - 4 bg - white / 60 dark:bg - neutral - 900 / 60'    />;
      <div className='text - sm font - medium mb - 2'    />Was this answer useful?</div>;
      {submitted ? (<div className='text - sm text - emerald - 700 dark:text - emerald - 300'    />;
          Thanks for your feedback!;
<<<<<<< HEAD

        </div>) : (<div className='space - y-3'    />;
          <div className='flex items - center gap - 2'    />;}
            <button;}
              type='button'              on_click={() =    /> set_rating (rating === 'up' ? null : 'up')}      {submitted ? (<div className=\"text - sm text - emerald - 700 dark:text-emerald-300\"    />Thanks for your feedback!</div>) : (<div className=\"space-y-3\"    />;"
          <div className=\"flex items-center gap-2\"    />;
            <button;}"
              type=\'button\';}
              on_click={() =    /> set_rating (rating === 'up' ? null : 'up')}
              className={`inline - flex items - center gap - 1 rounded - md border px - 2 py - 1 text - sm ${rating === 'up' ? 'bg - emerald - 600 text - white border - emerald - 600' : ''}`}

=======
        </div>) : (<div className='space - y-3' />;
          <div className='flex items - center gap - 2' />;}
            <button;}
              type='button'              on_click={() = /> set_rating (rating === 'up' ? null : 'up')}      {submitted ? (<div className=\"text - sm text - emerald - 700 dark:text-emerald-300\" />Thanks for your feedback!</div>) : (<div className=\"space-y-3\" />;"
          <div className=\"flex items-center gap-2\" />;
            <button;}"
              type=\"button\";}
              on_click={() = /> set_rating (rating === 'up' ? null : 'up')}
              className={`inline - flex items - center gap - 1 rounded - md border px - 2 py - 1 text - sm ${rating === 'up' ? 'bg - emerald - 600 text - white border - emerald - 600' : ''}`}
            <button;'
              type='button'              on_click={() => set_rating (rating === 'up' ? null : 'up')}      {submitted ? ("
        <div className="text - sm text - emerald - 700 dark:text - emerald - 300">Thanks for your feedback!</div>) : ("
        <div className="space - y-3">;"
          <div className="flex items - center gap - 2">;
            <button;"
              type="button";'
              on_click={() => set_rating (rating === 'up' ? null : 'up')}'`
              className={`inline - flex items - center gap - 1 rounded - md border px - 2 py - 1 text - sm ${rating === 'up' ? 'bg - emerald - 600 text - white border - emerald - 600' : ''}`}'
              aria - pressed={rating === 'up'}
              className={`inline - flex items - center gap - 1 rounded - md border px - 2 py - 1 text - sm ${rating === up ? 'bg - emerald - 600 text - white border - emerald - 600' : }`}
            <button;'
              type='button              on_click={() => set_rating (rating === up' ? null : 'up)}      {submitted ? (
        <div className=text - sm text - emerald - 700 dark:text - emerald - 300">Thanks for your feedback!</div>) : ("
        <div className=space - y-3>;"
          <div className="flex items - center gap - 2>;
            <button;
              type="button";
              on_click={() => set_rating (rating === 'up' ? null : up)}'`
              className={`inline - flex items - center gap - 1 rounded - md border px - 2 py - 1 text - sm ${rating === 'up ? bg - emerald - 600 text - white border - emerald - 600' : '}`}
>>>>>>> origin/cursor/delete-old-data-records-6bba
              aria - pressed={rating === 'up'}
            >;
              <span    />👍</span>;
              <span     /> Yes</span>;
            </button>;
<<<<<<< HEAD

            <button;"
              type='button'              on_click={() =    /> set_rating (rating === 'down' ? null : 'down')}              type=\'button\';

=======
            <button;
              type='button'              on_click={() => set_rating (rating === 'down' ? null : 'down')}              type="button";
            <button;'"
              type='button'              on_click={() => set_rating (rating === 'down' ? null : 'down')}              type="button";'
              on_click={() => set_rating (rating === 'down' ? null : 'down')}'`
              className={`inline - flex items - center gap - 1 rounded - md border px - 2 py - 1 text - sm ${rating === 'down' ? 'bg - red - 600 text - white border - red - 600' : ''}`}'
            <button;"
              type='button'              on_click={() =    /> set_rating (rating === 'down' ? null : 'down')}              type=\'button\';
>>>>>>> origin/cursor/delete-old-data-records-6bba
              on_click={() => set_rating (rating === 'down' ? null : 'down')}
              className={`inline - flex items - center gap - 1 rounded - md border px - 2 py - 1 text - sm ${rating === 'down' ? 'bg - red - 600 text - white border - red - 600' : ''}`}
              aria - pressed={rating === 'down'}
            >;
              <span    />👎</span>;
              <span     /> No</span>;
            </button>;
          </div>;
          <textarea;
            placeholder='Optional feedback (what worked, what didn’t)';
            value={comment}
<<<<<<< HEAD
=======
            on_change={e => set_comment (e.target.value.slice (0, 2000))}
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
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD


=======
  return ("
    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">"
      <div className="text-sm font-medium mb-2">Was this answer useful?</div>
      {_submitted ? ("
        <div className="text-sm text-emerald-700 dark:text-emerald-300">Thanks for your feedback!</div>"
      ) : (_<div className="space-y-3">"
          <div className="flex items-center gap-2">

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

  },

  return ('
    <div className='mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60'>'
      <div className='text-sm font-medium mb-2'>Was this answer useful?</div>
      {_submitted ? ('
        <div className='text-sm text-emerald-700 dark:text-emerald-300'>Thanks for your feedback!</div>'
      ) : (_<div className='space-y-3'>'
          <div className='flex items-center gap-2'>

            <button
              type=&quot;button&quot;'
              onClick={() => setRating(rating === 'up' ? null : 'up')}'`
              className={_`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}'

              aria-pressed={_rating === 'up'}

            <button
              type='button'
              onClick={() => setRating(rating === 'up' ? null : 'up')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={rating === 'up'}

        <div className="space-y-3">
          <div className="flex items-center gap-2">
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <button
              type="button"
              onClick={() => setRating(rating === 'up' ? null : 'up')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={rating === 'up'}><span>👍</span>
              <span>Yes</span>
            </button>
            <button
              type='button'              onClick={() => setRating(rating === 'down' ? null : 'down')}              type="button"
              onClick={() => setRating(rating === 'down' ? null : 'down')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
              aria-pressed={rating === 'down'}><span>👎</span>
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
            rows={3}
          />;
          {error && <div className='text-xs text-red-600'>{error}</div>}'
          <div>;
            <button;
              onClick={submit}
              disabled={submitting}
              className='rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm';
            >;
            placeholder="Optional feedback (what worked, what didn’t)"
            value={comment}
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

  )

}
>>>>>>> origin/cursor/delete-old-data-records-6bba

