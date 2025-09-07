<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
</div> <div> <label className="block text-sm font-medium mb-2" >Your Review</label> <textarea required /> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <button > {
  submitting ? 'Submitting...' : 'Submit Review'
}</button> </form>)
}
type Props = {
<<<<<<< HEAD
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;};import React, { useState } from 'react';

import StarRating from './StarRating';
export type ReviewFormValues = {

=======
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>
=======
</div> <div> <label className="block text-sm font-medium mb-2" >Your Review</label> <textarea required /> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <button > {""
  submitting ? 'Submitting...' : 'Submit Review
}</button> </form>)
}
type Props = {
  initial: Pick<ReviewFormValues;, 'projectId' | 'fromRole' | 'fromId'>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
};import React, { useState } from 'react';
import StarRating from './StarRating';
export type ReviewFormValues = {
  projectId: string;,
  fromRole: 'client' | 'talent';,
  fromId: string;,
  rating: number;,
  text: string;,
  categories?: {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    communication?: number;
    qualityOfWork?: number;
    timeliness?: number;
    wouldWorkWithAgain?: boolean
  }
  anonymous?: boolean
}
type Props = {
<<<<<<< HEAD
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>
const ReviewForm: React.FC<Props> = ({ initial }) => {
<<<<<<< HEAD
=======
    communication?: number;
    qualityOfWork?: number;
    timeliness?: number;
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
=======
  initial: Pick<ReviewFormValues;, 'projectId' | 'fromRole' | 'fromId'>;};import React, { useState } from 'react';

pr-12325
  initial: Pick<ReviewFormValues;, 'projectId' | 'fromRole' | 'fromId'>

const ReviewForm: React.FC<Props> = ({ initial ;}) => {

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      return <div>Something went wrong.</div>;
 </div> <div> <label className="block text-sm font-medium mb-2" >Your Review</label> <textarea required /> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <button > {;""
  submitting ? 'Submitting...' : 'Submit Review' ;
}</button> </form>) 
};
type Props = {;
  initial: Pick<ReviewFormValues;, 'projectId' | 'fromRole' | 'fromId'>
};import React, { useState } from 'react';
export type ReviewFormValues = {;
  projectId: string;,;
  fromRole: 'client' | 'talent';,;
  fromId: string;,;
  rating: number;,;
  text: string;,;
  categories?: {;
    communication?: number;
    qualityOfWork?: number;
    timeliness?: number;
    wouldWorkWithAgain?: boolean
};
  anonymous?: boolean
};
type Props = {;
<<<<<<< HEAD
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;
const ReviewForm: React.FC<Props> = ({ initial }) => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [anonymous, setAnonymous] = useState(false);
=======
}</button> </form>) ;

pr-12325
  initial: Pick<ReviewFormValues;, 'projectId' | 'fromRole' | 'fromId'>;

const ReviewForm: React.FC<Props> = ({ initial ;}) => {;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const [communication, setCommunication] = useState<number | undefined>();
</number>
  const [qualityOfWork, setQualityOfWork] = useState<number | undefined>();
  const [timeliness, setTimeliness] = useState<number | undefined>();
  const [wouldWorkWithAgain, setWouldWorkWithAgain] = useState<boolean>(false);
</boolean>
  const [message, setMessage] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            qualityOfWork
            timeliness
            wouldWorkWithAgain
          }
        })
      });
<<<<<<< HEAD
      const data = await res.json();
      if (!res.ok) throw new Error(data.error |'Failed to submit');
      setMessage('Review submitted! Pending admin approval.');
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setSubmitting(false);    }
  }
  return (

            communication;
            qualityOfWork;
            timeliness;
            wouldWorkWithAgain}})});

    } catch (err: any) {
      set_message (err.message);
    } finally {

    }
  }
  return (

    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <label className='block text-sm font-medium mb-2'>Overall Rating</label>    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="input-Overall Rating">Overall Rating</label>

        <StarRating value={rating} onChange={setRating} />
      </div>
      <div>

          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>

          required
        />
      </div>

=======
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        </div>
      </div>

      <button

    </form>
  )
},

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }
  return (


        <StarRating value={rating} onChange={setRating} />
      </div>
      <div>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      setSubmitting(false);    }
  }
  return (
=======
</string>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <form onSubmit={handleSubmit} className='space-y-6'>
</form>
      <div>
</div>
        <label className='block text-sm font-medium mb-2'>Overall Rating</label>        <StarRating value={rating} onChange={setRating} />
<<<<<<< HEAD
      </div>
      <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      >
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>
      {message && <p className='text-sm'>{message}</p>}
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </form>
  );
}
export default ReviewForm;    </form>
  )
}
export default ReviewForm;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </button>
      {message && <p className='text-sm'>{message}</p>}
export default ReviewForm;    </form>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
