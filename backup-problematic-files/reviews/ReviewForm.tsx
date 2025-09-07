</div> <div> <label className="block text-sm font-medium mb-2" >Your Review</label> <textarea required /> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <button > {""
  submitting ? 'Submitting...' : 'Submit Review''
}</button> </form>)'
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;};import React, { useState } from 'react';'
</ReviewFormValues>'
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>'
</ReviewFormValues>
const ReviewForm: React.FC<Props> = ({ initial }) => {
</Props>
      return <div>Something went wrong.</div>;'
 </div> <div> <label className="block text-sm font-medium mb-2" >Your Review</label> <textarea required /> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <button > {;""
  submitting ? 'Submitting...' : 'Submit Review' ;'
}</button> </form>) ;'
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;};import React, { useState } from 'react';'
</ReviewFormValues>'
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;'
</ReviewFormValues>
const ReviewForm: React.FC<Props> = ({ initial }) => {;
</Props>
  const [communication, setCommunication] = useState<number | undefined>();
</number>
  const [qualityOfWork, setQualityOfWork] = useState<number | undefined>();
</number>
  const [timeliness, setTimeliness] = useState<number | undefined>();
</number>
  const [wouldWorkWithAgain, setWouldWorkWithAgain] = useState<boolean>(false);
</boolean>
  const [message, setMessage] = useState<string | null>(null);
</string>'
    <form onSubmit={handleSubmit} className='space-y-6'>'
</form>
      <div>
</div>'
        <label className='block text-sm font-medium mb-2'>Overall Rating</label>        <StarRating value={rating} onChange={setRating} />'
      </div>
      <div>
</div>
      </button>'
      {message && <p className='text-sm'>{message}</p>}'
    </form>
export default ReviewForm;    </form>'