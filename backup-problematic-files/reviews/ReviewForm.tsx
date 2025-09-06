<<<<<<< HEAD
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
<<<<<<< HEAD:components/reviews/ReviewForm.tsx
import React, { useState } from 'react';
=======
<<<<<<< HEAD:components/reviews/ReviewForm.tsx
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
import React, { useState } from 'react',;
import StarRating from './StarRating',;
export type ReviewFormValues = {;
  projectId: string,;
  fromRole: 'client' | 'talent',;
  fromId: string,;
  rating: number,;
  text: string,;
  categories?: {;
    communication?: number,;
    qualityOfWork?: number,;
    timeliness?: number,;
    wouldWorkWithAgain?: boolean;
  },;
  anonymous?: boolean;
},;
type Props = {;
  initial: Pick<ReviewFormValues 'projectId' | 'fromRole' | 'fromId'>;
},;
const ReviewForm: React.FC<Props> = ({ initial }) => {;
  const [rating, setRating] = useState(0),;
  const [text, setText] = useState(''),;
  const [anonymous, setAnonymous] = useState(false),;
  const [communication, setCommunication] = useState<number | undefined>(),;
  const [qualityOfWork, setQualityOfWork] = useState<number | undefined>(),;
  const [timeliness, setTimeliness] = useState<number | undefined>(),;
  const [wouldWorkWithAgain, setWouldWorkWithAgain] = useState<boolean>(false),;
  const [submitting, setSubmitting] = useState(false),;
  const [message, setMessage] = useState<string | null>(null),;
  async function handleSubmit(e: React.FormEvent) {;
    e.preventDefault(),;
    setSubmitting(true),;
    setMessage(null),;
    try {;
      const res = await fetch('/api/reviews/submit', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({;
          projectId: initial.projectId,;
          fromRole: initial.fromRole,;
          fromId: initial.fromId,;
          rating,;
          text,;
          anonymous,;
          categories: {;
            communication,;
            qualityOfWork,;
            timeliness,;
            wouldWorkWithAgain}})}),;
      const data = await res.json(),;
      if (!res.ok) throw new Error(data.error || 'Failed to submit'),;
      setMessage('Review submitted! Pending admin approval.');
    } catch (err: any) {;
      setMessage(err.message);
    } finally {;
      setSubmitting(false);
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/ReviewForm.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewForm.tsx
=======


=======


>>>>>>> main
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
</div> <div> <label className="block text-sm font-medium mb-2" >Your Review</label> <textarea required /> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <button > {
  submitting ? 'Submitting...' : 'Submit Review'
}</button> </form>)
}
type Props = {
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;};import React, { useState } from 'react';
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/ReviewForm.tsx
import StarRating from './StarRating';
export type ReviewFormValues = {
<<<<<<< HEAD
  projectId: string
  fromRole: 'client' | 'talent'
  fromId: string
  rating: number
  text: string
</div> <div> <label className="block text - sm font - medium mb - 2" >Your Review</label> <textarea required /> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <button > {
  submitting ? 'Submitting...' : 'Submit Review';
}</button> </form>);
}
;
type Props = {
  initial: Pick < ReviewFormValues, 'project_id' | 'from_role' | 'from_id'>;}import React, { useState } from 'react';
import StarRating from './StarRating';
export type ReviewFormValues = {
  project_id: string,
  from_role: 'client' | 'talent',
  from_id: string,
  rating: number,
  text: string,
  categories?: {
=======
=======
import StarRating from './StarRating';
export type ReviewFormValues = {

>>>>>>> main
  projectId: string,
  fromRole: 'client' | 'talent',
  fromId: string,
  rating: number,
  text: string,
  categories?: {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    communication?: number;
    qualityOfWork?: number;
    timeliness?: number;
========


  categories?: {
    communication?: number;
    qualityOfWork?: number;
    timeliness?: number;



>>>>>>>> main:components/reviews/ReviewForm.tsx
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
 </div> <div> <label className="block text-sm font-medium mb-2" >Your Review</label> <textarea required /> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <button > {;
  submitting ? 'Submitting...' : 'Submit Review' ;
}</button> </form>) ;
};
type Props = {;
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;};import React, { useState } from 'react';
import StarRating from './StarRating';
export type ReviewFormValues = {;
  projectId: string,;
  fromRole: 'client' | 'talent',;
  fromId: string,;
  rating: number,;
  text: string,;
  categories?: {;
    communication?: number;
    qualityOfWork?: number;
    timeliness?: number;
    wouldWorkWithAgain?: boolean;
  };
  anonymous?: boolean;
};
type Props = {;
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;
const ReviewForm: React.FC<Props> = ({ initial }) => {;
=======

    communication?: number;
    qualityOfWork?: number;
    timeliness?: number;
    wouldWorkWithAgain?: boolean
  }
  anonymous?: boolean
}
type Props = {
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>
const ReviewForm: React.FC<Props> = ({ initial }) => {
>>>>>>> main
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [communication, setCommunication] = useState<number | undefined>();
  const [qualityOfWork, setQualityOfWork] = useState<number | undefined>();
  const [timeliness, setTimeliness] = useState<number | undefined>();
  const [wouldWorkWithAgain, setWouldWorkWithAgain] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
========

>>>>>>>> main:components/reviews/ReviewForm.tsx
    wouldWorkWithAgain?: boolean;
  }
  anonymous?: boolean;
}
;
type Props = {
  initial: Pick < ReviewFormValues, 'project_id' | 'from_role' | 'from_id'>;
const ReviewForm: React.FC < Props> = ({ initial }) => {
  const [rating, set_rating] = useState (0);
  const [text, set_text] = useState ('');
  const [anonymous, set_anonymous] = useState (false);
  const [communication, set_communication] = useState < number | undefined>();
  const [qualityOfWork, setQualityOfWork] = useState < number | undefined>();
  const [timeliness, set_timeliness] = useState < number | undefined>();
  const [wouldWorkWithAgain, setWouldWorkWithAgain] = useState < boolean>(false);
  const [submitting, set_submitting] = useState (false);
  const [message, set_message] = useState < string | null>(null);
;
  async /**
 * handle_submit - Function description
 */
function handle_submit() {
    e.prevent_default ();
    set_submitting (true);
    set_message (null),
    try {
      const res = await fetch ('/api / reviews / submit', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          project_id: initial.project_id,
          from_role: initial.from_role,
          from_id: initial.from_id,
          rating,
          text,
          anonymous,
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
          categories: {
communication
========

          categories: {
            communication
>>>>>>>> main:components/reviews/ReviewForm.tsx
=======
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null)
    try {
      const res = await fetch('/api/reviews/submit', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          projectId: initial.projectId
          fromRole: initial.fromRole
          fromId: initial.fromId
          rating
          text
          anonymous
          categories: {
            communication
>>>>>>> main
            qualityOfWork
            timeliness
            wouldWorkWithAgain
          }
        })
      });
<<<<<<< HEAD
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
========


>>>>>>>> main:components/reviews/ReviewForm.tsx
  async function handleSubmit(): any (e: React && React.FormEvent) {;
    e && e.preventDefault();
    setSubmitting(true);
    setMessage(null),;
    try {;
      const res = await fetch('/api/reviews/submit', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          projectId: initial && initial.projectId,;
          fromRole: initial && initial.fromRole,;
          fromId: initial && initial.fromId,;
          rating,;
          text,;
          anonymous,;
          categories: {;
            communication,;
            qualityOfWork,;
            timeliness,;
            wouldWorkWithAgain,;
          },;
        }),;
      });
      const data = await res && res.json();
      if (!res && res.ok) throw new Error(data && data.error || 'Failed to submit');
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
========

>>>>>>>> main:components/reviews/ReviewForm.tsx
      setMessage('Review submitted! Pending admin approval.');
    } catch (err: any) {;
      setMessage(err && err.message);
    } finally {;
      setSubmitting(false);    }
  }
  return (
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
<<<<<<< HEAD:components/reviews/ReviewForm.tsx
========

>>>>>>>> main:components/reviews/ReviewForm.tsx
    <form onSubmit={handleSubmit} className='space-y-6'>;
      <div>;
        <label className='block text-sm font-medium mb-2'>Overall Rating</label>        <StarRating value={rating} onChange={setRating} />;
      </div>;
      <div>;
        <label className='block text-sm font-medium mb-2'>Your Review</label>          categories: {;
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
          projectId: initial.projectId,
          fromRole: initial.fromRole,
          fromId: initial.fromId,
          rating;
          text;
          anonymous;
          categories: {
========

=======
>>>>>>>> main:components/reviews/ReviewForm.tsx
      const data = await res.json ();
      if (throw new Error (data.error || 'Failed to submit')) {
  $2
}
      set_message ('Review submitted! Pending admin approval.');
    } catch (err: any) {
      set_message (err.message);
    } finally {
      set_submitting (false);    }
  }
  return (
    <form on_submit={handle_submit} className='space - y-6'>;
      <div>;
        <label className='block text - sm font - medium mb - 2'>Overall Rating</label>        <StarRating value={rating} on_change={set_rating} />;
      </div>;
      <div>;
        <label className='block text - sm font - medium mb - 2'>Your Review</label>          categories: {
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
=======
=======
      const data = await res.json();
      if (!res.ok) throw new Error(data.error |'Failed to submit');
      setMessage('Review submitted! Pending admin approval.');
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setSubmitting(false);    }
  }
  return (
>>>>>>> main
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <label className='block text-sm font-medium mb-2'>Overall Rating</label>        <StarRating value={rating} onChange={setRating} />
      </div>
      <div>
<<<<<<< HEAD
<<<<<<< HEAD:components/reviews/ReviewForm.tsx
        <label className='block text-sm font-medium mb-2'>Your Review</label>          categories: {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/ReviewForm.tsx
========
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>>> main:components/reviews/ReviewForm.tsx
            communication;
            qualityOfWork;
            timeliness;
            wouldWorkWithAgain}})});
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
<<<<<<< HEAD:components/reviews/ReviewForm.tsx
      const data = await res.json ();
      if (throw new Error (data.error || 'Failed to submit')) {
  $2
}
      set_message ('Review submitted! Pending admin approval.');
=======
      const data = await res.json();
      if (!res.ok) throw new Error(data.error |'Failed to submit');
      setMessage('Review submitted! Pending admin approval.')
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/ReviewForm.tsx
    } catch (err: any) {
      set_message (err.message);
    } finally {
<<<<<<< HEAD:components/reviews/ReviewForm.tsx
      const data = await res && res.json();
      if (!res && res.ok) throw new Error(data && data.error || 'Failed to submit');
      setMessage('Review submitted! Pending admin approval.');
    } catch (err: any) {;
      setMessage(err && err.message);
    } finally {;
      setSubmitting(false);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="input-Overall Rating">Overall Rating</label>
        <StarRating value={rating} onChange={setRating} />
      </div>
      <div>
    <form onSubmit={handleSubmit} className='space-y-6'>;
      <div>;
        <label className='block text-sm font-medium mb-2'>Overall Rating</label>    <form onSubmit={handleSubmit} className="space-y-6">;
      <div>;
        <label className="block text-sm font-medium mb-2" htmlFor="input-Overall Rating">Overall Rating</label>;
        <StarRating value={rating} onChange={setRating} />;
      </div>;
      <div>;
        <label className='block text-sm font-medium mb-2'>Your Review</label>;
=======
      setSubmitting(false)
<<<<<<< HEAD
=======
=======
        <label className='block text-sm font-medium mb-2'>Your Review</label>

>>>>>>> main:components/reviews/ReviewForm.tsx
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewForm.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD:components/reviews/ReviewForm.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <label className='block text-sm font-medium mb-2'>Overall Rating</label>    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="input-Overall Rating">Overall Rating</label>
=======
<<<<<<< HEAD
        <label className='block text-sm font-medium mb-2'>Your Review</label>

>>>>>>> main:components/reviews/ReviewForm.tsx
    }
  }

  return (
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Overall Rating</label>
=======

>>>>>>> main:components/reviews/ReviewForm.tsx
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/ReviewForm.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewForm.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <StarRating value={rating} onChange={setRating} />
      </div>
      <div>
<<<<<<< HEAD:components/reviews/ReviewForm.tsx
        <label className='block text-sm font-medium mb-2'>Your Review</label>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/ReviewForm.tsx
========


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
  }
  return (


>>>>>>>> main:components/reviews/ReviewForm.tsx
        <textarea
          className='w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows={5}
          value={text}
<<<<<<< HEAD:components/reviews/ReviewForm.tsx
          onChange={e => setText(e && e.target.value)}          required;
        />;
      </div>;
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
        <label className="block text-sm font-medium mb-2" htmlFor="input-Your Review">Your Review</label>
========

=======
        <label className="block text-sm font-medium mb-2" htmlFor="input-Your Review">Your Review</label>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>>> main:components/reviews/ReviewForm.tsx
        <textarea
          className="w-full rounded-md border border-gray-300 p-3 focus: outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          value={text}
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
          onChange={(e) => setText(e && e.target.value)}
          required;
        />;
      </div>;
      <div className='flex items-center gap-3'>;
========


>>>>>>>> main:components/reviews/ReviewForm.tsx
        <input
          id='anonymous'
          type='checkbox'
          checked={anonymous}
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
========

>>>>>>>> main:components/reviews/ReviewForm.tsx
          onChange={e => setAnonymous(e && e.target.checked)}
        />;
        <label htmlFor='anonymous'>Submit anonymously</label>;
      <div className='grid md:grid-cols-2 gap-4'>;
        <div className='enhanced-card'>;
          <div className='flex items-center justify-between mb-2'>;
            <span className='text-sm'>Communication</span>;
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
========

>>>>>>>> main:components/reviews/ReviewForm.tsx
            <StarRating
              value={communication |0}
              onChange={v => setCommunication(v)}
      set_submitting (false);
    }
  }
  return (
    <form on_submit={handle_submit} className='space - y-6'>;
      <div>;
        <label className='block text - sm font - medium mb - 2'>Overall Rating</label>    <form on_submit={handle_submit} className="space - y-6">;
      <div>;
        <label className="block text - sm font - medium mb - 2" html_for="input - Overall Rating">Overall Rating</label>;
        <StarRating value={rating} on_change={set_rating} />;
      </div>;
      <div>;
        <label className='block text - sm font - medium mb - 2'>Your Review</label>;
        <textarea;
          className='w - full rounded - md border border - gray - 300 p - 3 focus:outline - none focus:ring - 2 focus:ring - blue - 500';
          rows={5}
          value={text}
          on_change={e => set_text (e.target.value)}          required;
        />;
      </div>;
        <textarea;
          className="w - full rounded - md border border - gray - 300 p - 3 focus: outline - none focus:ring - 2 focus:ring - blue - 500";
          rows={5}
          value={text}
          on_change={(e) => set_text (e.target.value)}
          required;
        />;
      </div>;
      <div className='flex items - center gap - 3'>;
        <input;
          id='anonymous';
          type='checkbox';
          checked={anonymous}
          on_change={e => set_anonymous (e.target.checked)}
        />;
        <label html_for='anonymous'>Submit anonymously</label>;
      <div className='grid md:grid - cols - 2 gap - 4'>;
        <div className='enhanced - card'>;
          <div className='flex items - center justify - between mb - 2'>;
            <span className='text - sm'>Communication</span>;
            <StarRating;
              value={communication || 0}
              on_change={v => set_communication (v)}
            />;
          </div>;
          <span className='pill'>Optional</span>;
        </div>;
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
========

>>>>>>>> main:components/reviews/ReviewForm.tsx
        <div className='enhanced - card'>;
          <div className='flex items - center justify - between mb - 2'>;
            <span className='text - sm'>Quality of Work</span>;
            <StarRating;
              value={qualityOfWork || 0}
              on_change={v => setQualityOfWork (v)}
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
========

>>>>>>>> main:components/reviews/ReviewForm.tsx
            />;
          </div>;
          <span className='pill'>Optional</span>;
        </div>;
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
========

>>>>>>>> main:components/reviews/ReviewForm.tsx
        <div className='enhanced - card'>;
          <div className='flex items - center justify - between mb - 2'>;
            <span className='text - sm'>Timeliness</span>;
            <StarRating;
              value={timeliness || 0}
              on_change={v => set_timeliness (v)}
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
========

>>>>>>>> main:components/reviews/ReviewForm.tsx
            />;
          </div>;
          <span className='pill'>Optional</span>;
        </div>;
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
========

>>>>>>>> main:components/reviews/ReviewForm.tsx
              onChange={e => setWouldWorkWithAgain(e && e.target.checked)}
        <div className='enhanced - card'>;
          <div className='flex items - center justify - between mb - 2'>;
            <span className='text - sm'>Would Work With Again</span>;
            <input;
              type='checkbox';
              checked={wouldWorkWithAgain}
              on_change={e => setWouldWorkWithAgain (e.target.checked)}
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
========

>>>>>>>> main:components/reviews/ReviewForm.tsx
            />;
          </div>;
          <span className='pill'>Optional</span>        </div>;
      </div>;
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
      </button>;
      {message && <p className='text-sm'>{message}</p>}
    </form>;
  );
========

      </button>;


      {message && <p className='text-sm'>{message}</p>}
    </form>;
  );

>>>>>>>> main:components/reviews/ReviewForm.tsx
};
export default ReviewForm;    </form>;
  );
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
};
export default ReviewForm;
      <div className="flex items-center gap-3">
        <input id="anonymous" type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
        <label htmlFor="anonymous" htmlFor="input-Submit anonymously">Submit anonymously</label>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="enhanced-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Communication</span>
            <StarRating value={communication || 0} onChange={(v) => setCommunication(v)} />
          </div>
          <span className="pill">Optional</span>
        </div>
        <div className="enhanced-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Quality of Work</span>
            <StarRating value={qualityOfWork || 0} onChange={(v) => setQualityOfWork(v)} />
          </div>
          <span className="pill">Optional</span>
        </div>
        <div className="enhanced-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Timeliness</span>
            <StarRating value={timeliness || 0} onChange={(v) => setTimeliness(v)} />
          </div>
          <span className="pill">Optional</span>
        </div>
        <div className="enhanced-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Would Work With Again</span>
            <input type="checkbox" checked={wouldWorkWithAgain} onChange={(e) => setWouldWorkWithAgain(e.target.checked)} />
          </div>
          <span className="pill">Optional</span>
        </div>
      </div>
      <button
        type="submit"
        className="enhanced-button enhanced-button-primary"
      <button;
        type='submit';
        className='enhanced - button enhanced - button - primary'        disabled={submitting}          <span className="pill">Optional</span>;
        </div>;
      </div>;
      <button;
        type='submit';
        className='enhanced - button enhanced - button - primary'        type="submit";
        className="enhanced - button enhanced - button - primary";
        disabled={submitting}
      >;
        {submitting ? 'Submitting...' : 'Submit Review'}
========

        disabled={submitting}
      >;
        {submitting ? 'Submitting...' : 'Submit Review'}

>>>>>>>> main:components/reviews/ReviewForm.tsx
      </button>;
      {message && <p className='text - sm'>{message}</p>}
    </form>);
}
;
export default ReviewForm;    </form>);
}
;
export default ReviewForm;
;
<<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
      </div>

      <div>
        <label className=&quot;block text-sm font-medium mb-2&quot;>Your Review</label>
        <textarea
          className=&quot;w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
=======
          onChange={e => setText(e.target.value)}          required
        />
      </div>
        <textarea
          className="w-full rounded-md border border-gray-300 p-3 focus: outline-none focus:ring-2 focus:ring-blue-500"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/ReviewForm.tsx
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
<<<<<<< HEAD:components/reviews/ReviewForm.tsx

      <div className=&quot;flex items-center gap-3&quot;>
        <input id=&quot;anonymous&quot; type=&quot;checkbox&quot; checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
        <label htmlFor=&quot;anonymous&quot;>Submit anonymously</label>
      </div>

      <div className=&quot;grid md:grid-cols-2 gap-4&quot;>
        <div className=&quot;enhanced-card&quot;>
          <div className=&quot;flex items-center justify-between mb-2&quot;>
            <span className=&quot;text-sm&quot;>Communication</span>
            <StarRating value={communication || 0} onChange={(v) => setCommunication(v)} />
          </div>
          <span className=&quot;pill&quot;>Optional</span>
        </div>
        <div className=&quot;enhanced-card&quot;>
          <div className=&quot;flex items-center justify-between mb-2&quot;>
            <span className=&quot;text-sm&quot;>Quality of Work</span>
            <StarRating value={qualityOfWork || 0} onChange={(v) => setQualityOfWork(v)} />
          </div>
          <span className=&quot;pill&quot;>Optional</span>
        </div>
        <div className=&quot;enhanced-card&quot;>
          <div className=&quot;flex items-center justify-between mb-2&quot;>
            <span className=&quot;text-sm&quot;>Timeliness</span>
            <StarRating value={timeliness || 0} onChange={(v) => setTimeliness(v)} />
          </div>
          <span className=&quot;pill&quot;>Optional</span>
        </div>
        <div className=&quot;enhanced-card&quot;>
          <div className=&quot;flex items-center justify-between mb-2&quot;>
            <span className=&quot;text-sm&quot;>Would Work With Again</span>
            <input type=&quot;checkbox&quot; checked={wouldWorkWithAgain} onChange={(e) => setWouldWorkWithAgain(e.target.checked)} />
          </div>
          <span className=&quot;pill&quot;>Optional</span>
=======
      <div className='flex items-center gap-3'>
        <input
          id='anonymous'
          type='checkbox'
          checked={anonymous}
          onChange={e => setAnonymous(e.target.checked)}
        />
        <label htmlFor='anonymous'>Submit anonymously</label>
      <div className='grid md:grid-cols-2 gap-4'>
        <div className='enhanced-card'>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-sm'>Communication</span>
            <StarRating
              value={communication |0}
              onChange={v => setCommunication(v)}
            />
          </div>
          <span className='pill'>Optional</span>
        </div>
        <div className='enhanced-card'>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-sm'>Quality of Work</span>
            <StarRating
              value={qualityOfWork |0}
              onChange={v => setQualityOfWork(v)}
            />
          </div>
          <span className='pill'>Optional</span>
        </div>
        <div className='enhanced-card'>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-sm'>Timeliness</span>
            <StarRating
              value={timeliness |0}
              onChange={v => setTimeliness(v)}
            />
          </div>
          <span className='pill'>Optional</span>
        </div>
        <div className='enhanced-card'>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-sm'>Would Work With Again</span>
            <input
              type='checkbox'
              checked={wouldWorkWithAgain}
              onChange={e => setWouldWorkWithAgain(e.target.checked)}
            />
          </div>
          <span className='pill'>Optional</span>        </div>
      </div>
      <button
        type='submit'
        className='enhanced-button enhanced-button-primary'        disabled={submitting}          <span className="pill">Optional</span>
        </div>
      </div>
      <button
        type='submit'
        className='enhanced-button enhanced-button-primary'        type="submit"
        className="enhanced-button enhanced-button-primary"
        disabled={submitting}
=======
<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
        <label className="block text-sm font-medium mb-2">Your Review</label>
        <textarea
          className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
=======

>>>>>>> main:components/reviews/ReviewForm.tsx
          required
        />
      </div>

<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
      <div className="flex items-center gap-3">
        <input id="anonymous" type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
        <label htmlFor="anonymous">Submit anonymously</label>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="enhanced-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Communication</span>
            <StarRating value={communication || 0} onChange={(v) => setCommunication(v)} />
          </div>
          <span className="pill">Optional</span>
        </div>
        <div className="enhanced-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Quality of Work</span>
            <StarRating value={qualityOfWork || 0} onChange={(v) => setQualityOfWork(v)} />
          </div>
          <span className="pill">Optional</span>
        </div>
        <div className="enhanced-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Timeliness</span>
            <StarRating value={timeliness || 0} onChange={(v) => setTimeliness(v)} />
          </div>
          <span className="pill">Optional</span>
        </div>
        <div className="enhanced-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Would Work With Again</span>
            <input type="checkbox" checked={wouldWorkWithAgain} onChange={(e) => setWouldWorkWithAgain(e.target.checked)} />
          </div>
          <span className="pill">Optional</span>
=======
>>>>>>> main:components/reviews/ReviewForm.tsx
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/ReviewForm.tsx
        </div>
      </div>

      <button
<<<<<<< HEAD:components/reviews/ReviewForm.tsx
        type=&quot;submit&quot;
        className=&quot;enhanced-button enhanced-button-primary&quot;
        disabled={submitting}
      >
        {_submitting ? 'Submitting...' : 'Submit Review'}
      </button>

      {message && <p className=&quot;text-sm&quot;>{message}</p>}
=======
<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
        type="submit"
        className="enhanced-button enhanced-button-primary"
        disabled={submitting}
      >;
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>

      {message && <p className="text-sm">{message}</p>}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/ReviewForm.tsx
    </form>
  )
},

<<<<<<< HEAD:components/reviews/ReviewForm.tsx
export default ReviewForm

=======
export default ReviewForm,
=======

        disabled={submitting}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/ReviewForm.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewForm.tsx
=======

=======
        <label className='block text-sm font-medium mb-2'>Your Review</label>


>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewForm.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }
  return (


        <StarRating value={rating} onChange={setRating} />
      </div>
      <div>


>>>>>>> main
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      >
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>
      {message && <p className='text-sm'>{message}</p>}
<<<<<<< HEAD
<<<<<<< HEAD:components/reviews/ReviewForm.tsx
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/ReviewForm.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewForm.tsx
=======



>>>>>>> main
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    </form>
  );
}
export default ReviewForm;    </form>
  )
}
export default ReviewForm;
<<<<<<< HEAD
<<<<<<< HEAD:components/reviews/ReviewForm.tsx
<<<<<<< HEAD

=======
>>>>>>> main:components/reviews/ReviewForm.tsx
=======


>>>>>>> main
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/ReviewForm.tsx
=======
=======
>>>>>>> main:components/reviews/ReviewForm.tsx
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewForm.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/reviews/ReviewForm.tsx
========

>>>>>>>> main:components/reviews/ReviewForm.tsx
=======
>>>>>>> main
