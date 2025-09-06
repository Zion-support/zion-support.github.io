</div> <div> <label className="block text-sm font-medium mb-2" >Your Review</label> <textarea required /> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <span className="pill" >Optional</span> </div> </div> <button > {
  submitting ? 'Submitting...' : 'Submit Review' 
}</button> </form>) 
};

type Props = {
  initial: Pick<ReviewFormValues, 'projectId' | 'fromRole' | 'fromId'>;};

};

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
    setMessage(null),
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

    }
  }

  return (

        <StarRating value={rating} onChange={setRating} />
      </div>

      <div>

          required
        />
      </div>

        </div>
      </div>

      <button

        disabled={submitting}

      >
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>

      {message && <p className='text-sm'>{message}</p>}

    </form>
  );
};

export default ReviewForm;