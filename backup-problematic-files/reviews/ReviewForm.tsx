<<<<<<< HEAD
=======



>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
</div> <div> <label className="block text-sm font-medium mb-2" >Your Review</label> <textarea required /> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <button > {
  submitting ? 'Submitting...' : 'Submit Review'
}</button> </form>)
}
type Props = {
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;};import React, { useState } from 'react';
import StarRating from './StarRating';
export type ReviewFormValues = {


  projectId: string,
  fromRole: 'client' | 'talent',
  fromId: string,
  rating: number,
  text: string,
  categories?: {;
<<<<<<< HEAD
=======


>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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
<<<<<<< HEAD
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

    }
  }
  return (

        <StarRating value={rating} onChange={setRating} />
      </div>
      <div>

    <form onSubmit={handleSubmit} className='space-y-6'>
</form>
      <div>
</div>
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
        <label className='block text-sm font-medium mb-2'>Overall Rating</label>        <StarRating value={rating} onChange={setRating} />
      </div>
      <div>
<<<<<<< HEAD
=======


    }
  }
  return (


        <StarRating value={rating} onChange={setRating} />
      </div>
      <div>



>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
      >
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>
      {message && <p className='text-sm'>{message}</p>}
<<<<<<< HEAD
=======



>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
    </form>
  );
}
export default ReviewForm;    </form>
  )
}
export default ReviewForm;

<<<<<<< HEAD
      </button>
      {message && <p className='text-sm'>{message}</p>}
export default ReviewForm;    </form>
=======


>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
