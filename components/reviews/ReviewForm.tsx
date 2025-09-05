import React, {_useState} from 'react';
import StarRating from './StarRating';

export type ReviewFormValues = {_projectId: string;
  fromRole: 'client' | 'talent';
  fromId: string;
  rating: number;
  text: string;
  categories?: {
    communication?: number;
    qualityOfWork?: number;
    timeliness?: number;
    wouldWorkWithAgain?: boolean;};
  anonymous?: boolean;
};

type Props = {_initial: Pick<ReviewFormValues, _'projectId' | 'fromRole' | 'fromId'>;};

const ReviewForm: React.FC<Props> = (_{_initial}) => {_const [rating, _setRating] = useState(0);
  const [text, _setText] = useState('');
  const [anonymous, _setAnonymous] = useState(false);
  const [communication, _setCommunication] = useState<number | undefined>();
  const [qualityOfWork, _setQualityOfWork] = useState<number | undefined>();
  const [timeliness, _setTimeliness] = useState<number | undefined>();
  const [wouldWorkWithAgain, _setWouldWorkWithAgain] = useState<boolean>(false);
  const [submitting, _setSubmitting] = useState(false);
  const [message, _setMessage] = useState<string | null>(null);

  async function handleSubmit(_e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    try {
      const _res = await fetch('/api/reviews/submit', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_projectId: initial.projectId, _fromRole: initial.fromRole, _fromId: initial.fromId, _rating, _text, _anonymous, _categories: {
            communication, _qualityOfWork, _timeliness, _wouldWorkWithAgain}})});
      const _data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit');
      setMessage('Review submitted! Pending admin approval.');
    } catch (err: unknown) {_setMessage(err.message);} finally {_setSubmitting(false);}
  }

  return (_<form onSubmit={_handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Overall Rating</label>
        <StarRating value={_rating} onChange={_setRating} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Your Review</label>
        <textarea
          className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={_5}
          value={_text}
          onChange={_(e) => setText(e.target.value)}
          required
        />
      </div>

      <div className="flex items-center gap-3">
        <input id="anonymous" type="checkbox" checked={_anonymous} onChange={_(_e) => setAnonymous(e.target.checked)} />
        <label htmlFor="anonymous">Submit anonymously</label>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="enhanced-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Communication</span>
            <StarRating value={_communication || 0} onChange={_(_v) => setCommunication(v)} />
          </div>
          <span className="pill">Optional</span>
        </div>
        <div className="enhanced-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Quality of Work</span>
            <StarRating value={_qualityOfWork || 0} onChange={_(_v) => setQualityOfWork(v)} />
          </div>
          <span className="pill">Optional</span>
        </div>
        <div className="enhanced-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Timeliness</span>
            <StarRating value={_timeliness || 0} onChange={_(_v) => setTimeliness(v)} />
          </div>
          <span className="pill">Optional</span>
        </div>
        <div className="enhanced-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Would Work With Again</span>
            <input type="checkbox" checked={_wouldWorkWithAgain} onChange={_(_e) => setWouldWorkWithAgain(e.target.checked)} />
          </div>
          <span className="pill">Optional</span>
        </div>
      </div>

      <button
        type="submit"
        className="enhanced-button enhanced-button-primary"
        disabled={_submitting}
      >
        {_submitting ? 'Submitting...' : 'Submit Review'}
      </button>

      {_message && <p className="text-sm">{message}</p>}
    </form>
  );
};

export default ReviewForm;