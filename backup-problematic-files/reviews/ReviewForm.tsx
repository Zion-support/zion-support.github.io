>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
</div> <div> <label className="block text-sm font-medium mb-2" >Your Review</label> <textarea required /> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <button > {
  submitting ? 'Submitting...' : 'Submit Review'
}</button> </form>)
}
type Props = {
initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;};import React, { useState } from 'react';

import StarRating from './StarRating';
export type ReviewFormValues = {
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
initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>
const ReviewForm: React.FC<Props> = ({ initial }) => {
<<<<<<< HEAD
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
initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;
const ReviewForm: React.FC<Props> = ({ initial }) => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [communication, setCommunication] = useState<number | undefined>();
</number>
  const [qualityOfWork, setQualityOfWork] = useState<number | undefined>();
  const [timeliness, setTimeliness] = useState<number | undefined>();
  const [wouldWorkWithAgain, setWouldWorkWithAgain] = useState<boolean>(false);
</boolean>
  const [message, setMessage] = useState<string | null>(null);
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
    <form onSubmit={handleSubmit} className='space-y-6'>
</form>
      <div>
</div>
        <label className='block text-sm font-medium mb-2'>Overall Rating</label>        <StarRating value={rating} onChange={setRating} />
</div>
      <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      >
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>
      {message && <p className='text-sm'>{message}</p>}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    </form>
  );
}
export default ReviewForm;    </form>
  )
}
export default ReviewForm;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      </button>
      {message && <p className='text-sm'>{message}</p>}
export default ReviewForm;    </form>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
