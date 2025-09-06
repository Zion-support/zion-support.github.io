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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
</div> <div> <label className="block text-sm font-medium mb-2" >Your Review</label> <textarea required /> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <button > {
  submitting ? 'Submitting...' : 'Submit Review'
}</button> </form>)
}
type Props = {
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;};import React, { useState } from 'react';
import StarRating from './StarRating';
export type ReviewFormValues = {
<<<<<<< HEAD
  projectId: string
  fromRole: 'client' | 'talent'
  fromId: string
  rating: number
  text: string
  categories?: {
=======
  projectId: string,
  fromRole: 'client' | 'talent',
  fromId: string,
  rating: number,
  text: string,
  categories?: {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [communication, setCommunication] = useState<number | undefined>();
  const [qualityOfWork, setQualityOfWork] = useState<number | undefined>();
  const [timeliness, setTimeliness] = useState<number | undefined>();
  const [wouldWorkWithAgain, setWouldWorkWithAgain] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
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
            qualityOfWork
            timeliness
            wouldWorkWithAgain
          }
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error |'Failed to submit');
      setMessage('Review submitted! Pending admin approval.');
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setSubmitting(false);    }
  }
  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <label className='block text-sm font-medium mb-2'>Overall Rating</label>        <StarRating value={rating} onChange={setRating} />
      </div>
      <div>
<<<<<<< HEAD:components/reviews/ReviewForm.tsx
        <label className='block text-sm font-medium mb-2'>Your Review</label>          categories: {
            communication;
            qualityOfWork;
            timeliness;
            wouldWorkWithAgain}})});
      const data = await res.json();
      if (!res.ok) throw new Error(data.error |'Failed to submit');
      setMessage('Review submitted! Pending admin approval.')
    } catch (err: any) {
      setMessage(err.message)
    } finally {
      setSubmitting(false)
<<<<<<< HEAD
=======
=======
        <label className='block text-sm font-medium mb-2'>Your Review</label>


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
        </div>
      </div>

      <button
<<<<<<< HEAD:backup-problematic-files/reviews/ReviewForm.tsx
        type="submit"
        className="enhanced-button enhanced-button-primary"
        disabled={submitting}
      >;
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>

      {message && <p className="text-sm">{message}</p>}
    </form>
  )
},

export default ReviewForm,
=======

        disabled={submitting}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/ReviewForm.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewForm.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      >
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>
      {message && <p className='text-sm'>{message}</p>}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/ReviewForm.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewForm.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    </form>
  );
}
export default ReviewForm;    </form>
  )
}
export default ReviewForm;
<<<<<<< HEAD:components/reviews/ReviewForm.tsx
<<<<<<< HEAD


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/reviews/ReviewForm.tsx
=======
=======
>>>>>>> main:components/reviews/ReviewForm.tsx
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewForm.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
