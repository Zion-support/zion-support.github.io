 </div> <div> <label className="block text-sm font-medium mb-2" >Your Review</label> <textarea required /> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <button > {
  submitting ? 'Submitting...' : 'Submit Review' 
}</button> </form>) 
};

type Props = {
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;};
=======
import React, { useState } from 'react';
import StarRating from './StarRating';
export type ReviewFormValues = {
  projectId: string,
  fromRole: 'client' | 'talent',
  fromId: string,
  rating: number,
  text: string,
  categories?: {
    communication?: number;
    qualityOfWork?: number;
    timeliness?: number;
    wouldWorkWithAgain?: boolean
  };
  anonymous?: boolean
};

type Props = {
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
    setMessage(null);
    try {
      const res = await fetch('/api/reviews/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId: initial.projectId,
          fromRole: initial.fromRole,
          fromId: initial.fromId,
          rating,
          text,
          anonymous,
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          categories: {
            communication,
            qualityOfWork,
            timeliness,
            wouldWorkWithAgain,
          },
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit');
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
        <label className='block text-sm font-medium mb-2'>Your Review</label>
=======
      setSubmitting(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <label className='block text-sm font-medium mb-2'>Overall Rating</label>
=======
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="input-Overall Rating">Overall Rating</label>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <StarRating value={rating} onChange={setRating} />
      </div>

      <div>
<<<<<<< HEAD
        <label className='block text-sm font-medium mb-2'>Your Review</label>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <textarea
          className='w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows={5}
          value={text}
          onChange={e => setText(e.target.value)}          required
        />
      </div>

=======
          onChange={(e) => setText(e.target.value)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          required
        />
      </div>

<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className='flex items-center gap-3'>
        <input
          id='anonymous'
          type='checkbox'
          checked={anonymous}
          onChange={e => setAnonymous(e.target.checked)}
        />
        <label htmlFor='anonymous'>Submit anonymously</label>
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      </div>

      <div className='grid md:grid-cols-2 gap-4'>
        <div className='enhanced-card'>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-sm'>Communication</span>
            <StarRating
              value={communication || 0}
              onChange={v => setCommunication(v)}
            />
          </div>
          <span className='pill'>Optional</span>
        </div>
        <div className='enhanced-card'>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-sm'>Quality of Work</span>
            <StarRating
              value={qualityOfWork || 0}
              onChange={v => setQualityOfWork(v)}
            />
          </div>
          <span className='pill'>Optional</span>
        </div>
        <div className='enhanced-card'>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-sm'>Timeliness</span>
            <StarRating
              value={timeliness || 0}
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
        className='enhanced-button enhanced-button-primary'        disabled={submitting}
=======
          <span className="pill">Optional</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </div>
      </div>

      <button
<<<<<<< HEAD
        type='submit'
        className='enhanced-button enhanced-button-primary'
=======
        type="submit"
        className="enhanced-button enhanced-button-primary"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        disabled={submitting}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      >
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>

      {message && <p className='text-sm'>{message}</p>}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    </form>
  );
};

export default ReviewForm;
=======
export default ReviewForm;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
