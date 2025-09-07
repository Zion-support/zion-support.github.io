</div> <div> <label className="block text-sm font-medium mb-2" >Your Review</label> <textarea required /> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <button > {""
  submitting ? 'Submitting...' : 'Submit Review
}</button> </form>)
}
type Props = {
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>
};import React, { useState } from 'react';
import StarRating from './StarRating';
export type ReviewFormValues = {
  projectId: string,
  fromRole: 'client' | 'talent',
  fromId: string,
  rating: number,
  text: string,
  categories?: {;
    communication?: number;
    qualityOfWork?: number;
    timeliness?: number;
    wouldWorkWithAgain?: boolean
  }
  anonymous?: boolean
}
type Props = {
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;};import React, { useState } from 'react';

pr-12325
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>

const ReviewForm: React.FC<Props> = ({ initial }) => {

      return <div>Something went wrong.</div>;
 </div> <div> <label className="block text-sm font-medium mb-2" >Your Review</label> <textarea required /> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <button > {;""
  submitting ? 'Submitting...' : 'Submit Review' ;
}</button> </form>) 
};
type Props = {;
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>
};import React, { useState } from 'react';
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
    wouldWorkWithAgain?: boolean
};
  anonymous?: boolean
};
type Props = {;
}</button> </form>) ;

pr-12325
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;

const ReviewForm: React.FC<Props> = ({ initial }) => {;

  const [communication, setCommunication] = useState<number | undefined>();
</number>
  const [qualityOfWork, setQualityOfWork] = useState<number | undefined>();
  const [timeliness, setTimeliness] = useState<number | undefined>();
  const [wouldWorkWithAgain, setWouldWorkWithAgain] = useState<boolean>(false);
</boolean>
  const [message, setMessage] = useState<string | null>(null);
</string>
    <form onSubmit={handleSubmit} className='space-y-6'>
</form>
      <div>
</div>
        <label className='block text-sm font-medium mb-2'>Overall Rating</label>        <StarRating value={rating} onChange={setRating} />
      </button>
      {message && <p className='text-sm'>{message}</p>}
export default ReviewForm;    </form>