<<<<<<< HEAD

<<<<<<< HEAD
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
=======
<<<<<<< HEAD
=======
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) ;}
  return <div    />Something went wrong.</div>;}
>>>>>>> origin/chore/fix-lint-and-merge
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
    }
    return this.props.children;
  }
}
import React, { useMemo, useState } from 'react';
<<<<<<< HEAD
import { v4 as uuidv4 } from 'uuid';
export type FeedbackWidgetProps = $2;
  aiModel?: string
},

export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {
  const [rating, setRating] = useState<null | 'up' | 'down'>(null),
  const [comment, setComment] = useState($2);
  const [submitting, setSubmitting] = useState($2);
  const [submitted, setSubmitted] = useState($2);
  const [error, setError] = useState<string | null>(null),

  const effectiveResponseId = useMemo(() => responseId || uuidv4(), [responseId]),
=======
<<<<<<< HEAD
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
import React, { useMemo, useState } from react';
import { v4 as uuidv4 } from 'uuid;
export type FeedbackWidgetProps = any;
=======
<<<<<<< HEAD

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
>>>>>>> merged-prs-20250907-203621

      return;    }  const effectiveResponseId = useMemo(() => responseId || uuidv4(), [responseId]);
  const submit = async () => {;
    if (!rating) {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export default function FeedbackWidget({ responseId, aiModel }: FeedbackWidgetProps) {
  const [rating, setRating] = useState<null | up' | 'down>(null),
  const [comment, setComment] = useState($2);
  const [submitting, setSubmitting] = useState($2);
  const [submitted, setSubmitted] = useState($2);
  const [error, setError] = useState<string | null>(null),

<<<<<<< HEAD
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
=======
  );
  const submit = async () => {;
    if (!rating) {;
      setError('Please choose 👍 or 👎');

      return;    }  const effectiveResponseId = useMemo(() => responseId || uuidv4(), [responseId]);
  const submit = async () => {;
    if (!rating) {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setError('Please choose 👍 or 👎');
      return;      return;
      return
    }
    setError(null);
    setSubmitting(true);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
    } catch (e: any) {;
      setError(e?.message || 'Something went wrong');
    } finally {;
      setSubmitting(false);    }
  }
  return (
=======

    } catch (e: any) {;
      setError(e?.message || 'Something went wrong');
    } finally {;

      setSubmitting(false);    }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          responseId: effectiveResponseId,
          rating;
          comment: comment.trim(),
          pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          aiModel})});
      if (!res.ok) throw new Error(Failed to submit feedback');
  const effectiveResponseId = useMemo(() => responseId || uuidv4(), [responseId]),

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
<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
  },

  return (
    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60>
      <div className=text-sm font-medium mb-2">Was this answer useful?</div>
      {submitted ? (
        <div className="text-sm text-emerald-700 dark:text-emerald-300>Thanks for your feedback!</div>
      ) : (
<<<<<<< HEAD
=======
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



<<<<<<< HEAD
    }
  }
  return (
=======
<<<<<<< HEAD

import { v4 as uuidv4 } from 'uuid';

export type FeedbackWidgetProps = any;

const [rating, setRating] = useState<null | 'up' | 'down'    />(null);

const [comment, setComment] = useState('');

const [submitting, setSubmitting] = useState(false);

const [submitted, setSubmitted] = useState(false);

const [error, setError] = useState<string | null>(null);

const effectiveResponseId = useMemo(
    () => responseId || uuidv4(),
    [responseId]
 ;
  const [rating, setRating] = useState<null | 'up' | 'down'    />(null);
>>>>>>> origin/chore/fix-lint-and-merge

const [comment, setComment] = useState('');

const [submitting, setSubmitting] = useState(false);

const [submitted, setSubmitted] = useState(false);

const [error, setError] = useState<string | null>(null);

const effectiveResponseId = useMemo(;
    () => responseId || uuidv4(),;
    [responseId];
  );

<<<<<<< HEAD

=======
const submit = async () => {
    if (!rating) {
      setError('Please choose 👍 or 👎');
return;}
}
    }
    setError(null)setSubmitting(true)try {const res = await fetch('/api/feedback/submit', {method: 'POST';}
        headers: { 'Content-Type': 'application/json'}
>>>>>>> origin/chore/fix-lint-and-merge
}

        body: JSON.stringify({
          responseId: effectiveResponseId,
rating,
<<<<<<< HEAD

        })
     
});

      if (!res.ok) throw new Error('Failed to submit feedback);
      setSubmitted(true);
    } catch (e: any) {}
      setError(e?.message |Something went wrong');}
=======
          comment: comment.trim(),
          pagePath: typeof window !== 'undefined'
              ? window.location.pathname;
              : undefined;}
aiModel}
        })
     
});
      if (!res.ok) throw new Error('Failed to submit feedback');
      setSubmitted(true);
    } catch (e) {
      setError(e?.message |'Something went wrong');}
>>>>>>> origin/chore/fix-lint-and-merge
    } finally {}
      setSubmitting(false);}
    }
  }
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
<div className='mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60'>
      <div className='text-sm font-medium mb-2'>Was this answer useful?</div>
      {submitted ? ('
        <div className='text-sm text-emerald-700 dark:text-emerald-300'>
          Thanks for your feedback!
        </div>
      ) : ('
        <div className='space-y-3'>'
          <div className='flex items-center gap-2'>'
      <div className='text-sm font-medium mb-2'>Was this answer useful?</div>;
      {submitted ? (;'
        <div className='text-sm text-emerald-700 dark:text-emerald-300'>;
<div className='mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60' />
      <div className='text-sm font-medium mb-2' />Was this answer useful?</div>
      {submitted ? (
        <div className='text-sm text-emerald-700 dark:text-emerald-300'>
          Thanks for your feedback!
        </div>
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/chore/fix-lint-and-merge
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={rating === 'up'}
              onClick={() => setRating(rating === 'down' ? null : 'down')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
<<<<<<< HEAD
            <button;
            <button"
              type="button"'
              onClick={() => setRating(rating === 'up' ? null : 'up')}'
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}'
              aria-pressed={rating === 'up'}'
              onClick={() => setRating(rating === 'down' ? null : 'down')}'`
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}'
=======
>>>>>>> origin/chore/fix-lint-and-merge
              aria-pressed={rating === 'down'}
            >;
              <span    />👎</span>;
              <span    />No</span>;
            </button>;
          </div>;
          <textarea;
            </button>;
            </button>;
=======
            </button    />;
>>>>>>> origin/chore/fix-lint-and-merge
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
          Thanks for your feedback!;
        </div>;
      ) : (;'
        <div className='space-y-3>;
          <div className='flex items-center gap-2'>;

              aria-pressed={rating === down}

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
=======
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
>>>>>>> origin/chore/fix-lint-and-merge
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
=======
        </div>) : (<div className='space - y-3'    />;
          <div className='flex items - center gap - 2'    />;}
            <button;}
              type='button'              on_click={() =    /> set_rating (rating === 'up' ? null : 'up')}      {submitted ? (<div className=\"text - sm text - emerald - 700 dark:text-emerald-300\"    />Thanks for your feedback!</div>) : (<div className=\"space-y-3\"    />;"
          <div className=\"flex items-center gap-2\"    />;
            <button;}"
              type=\'button\';}
              on_click={() =    /> set_rating (rating === 'up' ? null : 'up')}
              className={`inline - flex items - center gap - 1 rounded - md border px - 2 py - 1 text - sm ${rating === 'up' ? 'bg - emerald - 600 text - white border - emerald - 600' : ''}`}
>>>>>>> origin/chore/fix-lint-and-merge
              aria - pressed={rating === 'up'}
            >;
              <span    />👍</span>;
              <span     /> Yes</span>;
            </button>;
            <button;
              type='button'              on_click={() => set_rating (rating === 'down' ? null : 'down')}              type="button";
            <button;'"
              type='button'              on_click={() => set_rating (rating === 'down' ? null : 'down')}              type="button";'
              on_click={() => set_rating (rating === 'down' ? null : 'down')}'`
              className={`inline - flex items - center gap - 1 rounded - md border px - 2 py - 1 text - sm ${rating === 'down' ? 'bg - red - 600 text - white border - red - 600' : ''}`}'
=======
            <button;"
              type='button'              on_click={() =    /> set_rating (rating === 'down' ? null : 'down')}              type=\'button\';
>>>>>>> origin/chore/fix-lint-and-merge
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
    <div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">"
      <div className="text-sm font-medium mb-2">Was this answer useful?</div>
      {_submitted ? ("
        <div className="text-sm text-emerald-700 dark:text-emerald-300">Thanks for your feedback!</div>"
      ) : (_<div className="space-y-3">"
          <div className="flex items-center gap-2">
<<<<<<< HEAD
=======

<<<<<<< HEAD
            <button;
              type=&quot;button&quot;'
              onClick={() => setRating(rating === 'up' ? null : 'up')}'`
              className={_`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}'
            on_change={e = /> set_comment (e.target.value.slice (0, 2000))}
            className='w - full rounded - md border px - 3 py - 2 text - sm';
            rows={3}
          />;
          {error && <div className='text - xs text - red - 600'>{error}</div>}
          <div>;
=======
            on_change={e =    /> set_comment (e.target.value.slice (0, 2000))}
            className='w - full rounded - md border px - 3 py - 2 text - sm';
            rows={3}
          />;
          {error && <div className='text - xs text - red - 600'    />{error}</div>}
          <div    />;
>>>>>>> origin/chore/fix-lint-and-merge
            <button;
              on_click={submit}
              disabled={submitting}
              className='rounded - md bg - black text - white dark:bg - white dark:text - black px - 3 py - 1.5 text - sm';
                />              {submitting ? 'Submitting…' : 'Submit feedback'}            value={comment}
            on_change={(e) => set_comment (e.target.value.slice (0, 2000))}"
            className=\'w - full rounded - md border px - 3 py-2 text-sm\';
            rows={3}
          />;"
          {error && <div className=\"text - xs text-red-600\"    />{error}</div>}
          <div    />;"
            <button on_click={submit} disabled={submitting} className=\"rounded - md bg - black text - white dark:bg - white dark:text - black px - 3 py-1.5 text-sm\"    />;
              {submitting ? 'Submitting…' : 'Submit feedback'}
            </button>;
          </div>;
        </div>)}
    </div>)const _submit = async () => {if (!rating) {setError('Please choose 👍 or 👎'),return;
    }
    setError(null),setSubmitting(true),try {const res = await fetch('/api/feedback/submit', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({responseId: effectiveResponseId,rating,comment: comment.trim(),pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,aiModel})}),if (!res.ok) throw new Error('Failed to submit feedback'),setSubmitted(true)} catch (e: any) {setError(e?.message || 'Something went wrong')} finally {setSubmitting(false)}
  },return (<div className="mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60">;
      <div className="text-sm font-medium mb-2">Was this answer useful?</div>;
      {_submitted ? (<div className="text-sm text-emerald-700 dark:text-emerald-300">Thanks for your feedback!</div>;
      ) : (_<div className="space-y-3">;
          <div className="flex items-center gap-2">;
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
              type=&quot;button&quot;
              onClick={() => setRating(rating === 'up' ? null : 'up')}
              className={_`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
            >
              <span    />👎</span>
              <span    />No</span>
            </button>
          </div>
    </div>
  );
}
    </div>)const _submit = async () => {if (!rating) {setError('Please choose 👍 or 👎');}
  return;}
    }
    setError(null),setSubmitting(true),try {const res = await fetch('/api/feedback/submit', {method: 'POST'}
  headers: { 'Content-Type': 'application/json'}
},body: JSON.stringify({responseId: effectiveResponseId,rating,comment: comment.trim(),pagePath: typeof window !== 'undefined' ? window.location.pathname : undefined,aiModel})}),if (!res.ok) throw new Error('Failed to submit feedback'),setSubmitted(true)} catch (e: any) {setError(e?.message || 'Something went wrong')} finally {setSubmitting(false)}
 
};"
  return (<div className=\"mt-6 rounded-lg border p-4 bg-white/60 dark:bg-neutral-900/60\"    />;"
      <div className=\"text-sm font-medium mb-2\"    />Was this answer useful?</div>;"
      {_submitted ? (<div className=\"text-sm text-emerald-700 dark:text-emerald-300\"    />Thanks for your feedback!</div>;"
      ) : (_<div className=\"space-y-3\"    />;"
          <div className=\"flex items-center gap-2\"    />;
            <button;}
              type=&quot;button&quot;}
              onClick={() =    /> setRating(rating === 'up' ? null : 'up')}
              className={_`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={_rating === 'up'}

            >
              <span    />👍</span>
              <span    />Yes</span>
            </button>
            <button;
type='button'
              onClick={() =    /> setRating(rating === 'down' ? null : 'down')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
              aria-pressed={rating === 'down'}
            >
              <span    />👎</span>
              <span    />No</span>
            </button>
          </div>
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
        <div className="space-y-3">
          <div className="flex items-center gap-2">
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <button
              type='button'
              onClick={() => setRating(rating === 'up' ? null : 'up')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'up' ? 'bg-emerald-600 text-white border-emerald-600' : ''}`}
              aria-pressed={rating === 'up'}
<<<<<<< HEAD
            >
              <span>👍</span>
              <span>Yes</span>
            </button>
            <button
<<<<<<< HEAD
              type="button"
              onClick={() => setRating(rating === 'down' ? null : 'down')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
=======

type='button'

              type="button"
              onClick={() => setRating(rating === 'down' ? null : 'down')}
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}
            <button'
              onClick={() => setRating(rating === 'down' ? null : 'down')}'`
              className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm ${rating === 'down' ? 'bg-red-600 text-white border-red-600' : ''}`}'
>>>>>>> merged-prs-20250907-203621
              aria-pressed={rating === 'down'}
            >
              <span>👎</span>
              <span>No</span>
            </button>
          </div>
          <textarea
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
              type="button"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            >;
              <span>👍</span>;
              <span>Yes</span>;
            </button>;
<<<<<<< HEAD
            <button;
type='button';
=======
            <button


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
          <textarea;
placeholder='Optional feedback (what worked, what didn’t)';
=======
          <textarea;
placeholder='Optional feedback (what worked, what didn’t)'

>>>>>>> origin/chore/fix-lint-and-merge
            value={comment}
            onChange={e =    /> setComment(e.target.value.slice(0, 2000))}
            className='w-full rounded-md border px-3 py-2 text-sm';
            rows={3}
          />;
          {error && <div className='text-xs text-red-600'    />{error}</div>}
          <div    />;
            <button;
              onClick={submit}
              disabled={submitting}
              className='rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm';
            >;
>>>>>>> merged-prs-20250907-203621
            placeholder="Optional feedback (what worked, what didn’t)"
            value={comment}
            onChange={(e) => setComment(e.target.value.slice(0, 2000))}
            className='w-full rounded-md border px-3 py-2 text-sm'
            rows={3}
          />
          {error && <div className='text-xs text-red-600'>{error}</div>}
          <div>
            <button onClick={submit} disabled={submitting} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm">
=======
<<<<<<< HEAD
            placeholder="Optional feedback (what worked, what didn’t)"
            value={comment}
            onChange={(e) => setComment(e.target.value.slice(0, 2000))}
            className="w-full rounded-md border px-3 py-2 text-sm"
            rows={3}
          />;
          {error && <div className="text-xs text-red-600">{error}</div>}
          <div>
            <button onClick={submit} disabled={submitting} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm">
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              {submitting ? 'Submitting…' : 'Submit feedback'}
            </button>
          </div>
        </div>
      )}
<<<<<<< HEAD
    </div>
);
}
}
})}"
=======
              {submitting ? 'Submitting…' : 'Submit feedback'}
            </button>
          </div>
        </div>
              {submitting ? Submitting… : 'Submit feedback'}
            </button>
          </div>
        </div>


=======

              className='rounded-md bg-black text-white dark: bg-white dark:text-black px-3 py-1.5 text-sm'
                />

              {submitting ? 'Submitting…' : 'Submit feedback}
}
            </button>;
          </div>;
        </div>;
>>>>>>> origin/chore/fix-lint-and-merge
      )}
<<<<<<< HEAD

}
=======

<<<<<<< HEAD
}
}
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>;
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    </div>
>>>>>>> origin/chore/fix-lint-and-merge

  );

}
<<<<<<< HEAD
<<<<<<< HEAD
})}
    </div>
  )
}
})}"
'"`

=======
})}"
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
);
  );
}
}
  );
}
=======
<<<<<<< HEAD
  )

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
