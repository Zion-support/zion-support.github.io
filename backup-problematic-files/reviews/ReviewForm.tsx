

:backup-problematic-files/reviews/ReviewForm.tsx
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
:backup-problematic-files/reviews/ReviewForm.tsx
:backup-problematic-files/reviews/ReviewForm.tsx
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
</div> <div> <label className="block text-sm font-medium mb-2" >Your Review</label> <textarea required /> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <button > {
  submitting ? 'Submitting...' : 'Submit Review'
}</button> </form>)
}
type Props = {
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;};import React, { useState } from 'react';
import StarRating from './StarRating';
export type ReviewFormValues = {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  projectId: string,
  fromRole: 'client' | 'talent',
  fromId: string,
  rating: number,
  text: string,
  categories?: {;
:components/reviews/ReviewForm.tsx
        <label className='block text-sm font-medium mb-2'>Your Review</label>          categories: {
            communication;
            qualityOfWork;
            timeliness;
            wouldWorkWithAgain}})});
      const data = await res.json();
      if (!res.ok) throw new Error(data.error |'Failed to submit');
      setMessage('Review submitted! Pending admin approval.')
    } catch (err: any) {
      set_message (err.message);
    } finally {
      setSubmitting(false)
        <label className='block text-sm font-medium mb-2'>Your Review</label>

main:components/reviews/ReviewForm.tsx
:backup-problematic-files/reviews/ReviewForm.tsx
    }
  }
  return (
:components/reviews/ReviewForm.tsx
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <label className='block text-sm font-medium mb-2'>Overall Rating</label>    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="input-Overall Rating">Overall Rating</label>
        <label className='block text-sm font-medium mb-2'>Your Review</label>

main:components/reviews/ReviewForm.tsx
    }
  }

  return (
:backup-problematic-files/reviews/ReviewForm.tsx
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Overall Rating</label>

main:components/reviews/ReviewForm.tsx
:backup-problematic-files/reviews/ReviewForm.tsx
:backup-problematic-files/reviews/ReviewForm.tsx
        <StarRating value={rating} onChange={setRating} />
      </div>
      <div>
:components/reviews/ReviewForm.tsx
        <label className='block text-sm font-medium mb-2'>Your Review</label>
        <textarea
          className='w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows={5}
          value={text}
          onChange={e => setText(e.target.value)}          required
        />
      </div>
        <textarea
          className="w-full rounded-md border border-gray-300 p-3 focus: outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
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
:backup-problematic-files/reviews/ReviewForm.tsx
        <label className="block text-sm font-medium mb-2">Your Review</label>
        <textarea
          className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}

main:components/reviews/ReviewForm.tsx
          required
        />
      </div>

:backup-problematic-files/reviews/ReviewForm.tsx
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
main:components/reviews/ReviewForm.tsx
        </div>
      </div>

      <button
:backup-problematic-files/reviews/ReviewForm.tsx
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

        disabled={submitting}

:backup-problematic-files/reviews/ReviewForm.tsx
:backup-problematic-files/reviews/ReviewForm.tsx
=======

=======
        <label className='block text-sm font-medium mb-2'>Your Review</label>
    }
  }
  return (


        <StarRating value={rating} onChange={setRating} />
      </div>
      <div>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      >
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>
      {message && <p className='text-sm'>{message}</p>}
:backup-problematic-files/reviews/ReviewForm.tsx
:backup-problematic-files/reviews/ReviewForm.tsx
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </form>
  );
}
export default ReviewForm;    </form>
  )
}
export default ReviewForm;
main:components/reviews/ReviewForm.tsx
:backup-problematic-files/reviews/ReviewForm.tsx
main:components/reviews/ReviewForm.tsx
:backup-problematic-files/reviews/ReviewForm.tsx
=======

=======
=======
>>>>>>> main:components/reviews/ReviewForm.tsx
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/reviews/ReviewForm.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
