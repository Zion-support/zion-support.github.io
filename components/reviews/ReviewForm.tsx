<<<<<<< HEAD
import React, { useState } from 'react',
import StarRating from './StarRating',
export type ReviewFormValues = {
  projectId: string,
  fromRole: 'client' | 'talent',
  fromId: string,
  rating: number,
  text: string,
  categories?: {
    communication?: number,
    qualityOfWork?: number,
    timeliness?: number,
    wouldWorkWithAgain?: boolean
  },
  anonymous?: boolean
},

type Props = {
  initial: Pick<ReviewFormValues 'projectId' | 'fromRole' | 'fromId'>
},

const ReviewForm: React.FC<Props> = ({ initial }) => {
  const [rating, setRating] = useState(0),
  const [text, setText] = useState(''),
  const [anonymous, setAnonymous] = useState(false),
  const [communication, setCommunication] = useState<number | undefined>(),
  const [qualityOfWork, setQualityOfWork] = useState<number | undefined>(),
  const [timeliness, setTimeliness] = useState<number | undefined>(),
  const [wouldWorkWithAgain, setWouldWorkWithAgain] = useState<boolean>(false),
  const [submitting, setSubmitting] = useState(false),
  const [message, setMessage] = useState<string | null>(null),

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(),
    setSubmitting(true),
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
            wouldWorkWithAgain}})}),
      const data = await res.json(),
      if (!res.ok) throw new Error(data.error || 'Failed to submit'),
      setMessage('Review submitted! Pending admin approval.')
    } catch (err: any) {
      setMessage(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
      <div>
        <label className=&quot;block text-sm font-medium mb-2&quot;>Overall Rating</label>
        <StarRating value={rating} onChange={setRating} />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>

      <div>
        <label className=&quot;block text-sm font-medium mb-2&quot;>Your Review</label>
        <textarea
<<<<<<< HEAD
          className=&quot;w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
=======
          className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={_5}
          value={_text}
          onChange={_(e) => setText(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          required
        />
      </div>

<<<<<<< HEAD
      <div className=&quot;flex items-center gap-3&quot;>
        <input id=&quot;anonymous&quot; type=&quot;checkbox&quot; checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
        <label htmlFor=&quot;anonymous&quot;>Submit anonymously</label>
      </div>

      <div className=&quot;grid md:grid-cols-2 gap-4&quot;>
        <div className=&quot;enhanced-card&quot;>
          <div className=&quot;flex items-center justify-between mb-2&quot;>
            <span className=&quot;text-sm&quot;>Communication</span>
            <StarRating value={communication || 0} onChange={(v) => setCommunication(v)} />
=======
      <div className="flex items-center gap-3">
        <input id="anonymous" type="checkbox" checked={_anonymous} onChange={_(_e) => setAnonymous(e.target.checked)} />
        <label htmlFor="anonymous">Submit anonymously</label>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="enhanced-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Communication</span>
            <StarRating value={_communication || 0} onChange={_(_v) => setCommunication(v)} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          <span className=&quot;pill&quot;>Optional</span>
        </div>
<<<<<<< HEAD
        <div className=&quot;enhanced-card&quot;>
          <div className=&quot;flex items-center justify-between mb-2&quot;>
            <span className=&quot;text-sm&quot;>Quality of Work</span>
            <StarRating value={qualityOfWork || 0} onChange={(v) => setQualityOfWork(v)} />
=======
        <div className="enhanced-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Quality of Work</span>
            <StarRating value={_qualityOfWork || 0} onChange={_(_v) => setQualityOfWork(v)} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          <span className=&quot;pill&quot;>Optional</span>
        </div>
<<<<<<< HEAD
        <div className=&quot;enhanced-card&quot;>
          <div className=&quot;flex items-center justify-between mb-2&quot;>
            <span className=&quot;text-sm&quot;>Timeliness</span>
            <StarRating value={timeliness || 0} onChange={(v) => setTimeliness(v)} />
=======
        <div className="enhanced-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Timeliness</span>
            <StarRating value={_timeliness || 0} onChange={_(_v) => setTimeliness(v)} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          <span className=&quot;pill&quot;>Optional</span>
        </div>
<<<<<<< HEAD
        <div className=&quot;enhanced-card&quot;>
          <div className=&quot;flex items-center justify-between mb-2&quot;>
            <span className=&quot;text-sm&quot;>Would Work With Again</span>
            <input type=&quot;checkbox&quot; checked={wouldWorkWithAgain} onChange={(e) => setWouldWorkWithAgain(e.target.checked)} />
=======
        <div className="enhanced-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Would Work With Again</span>
            <input type="checkbox" checked={_wouldWorkWithAgain} onChange={_(_e) => setWouldWorkWithAgain(e.target.checked)} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          <span className=&quot;pill&quot;>Optional</span>
        </div>
      </div>

      <button
<<<<<<< HEAD
        type=&quot;submit&quot;
        className=&quot;enhanced-button enhanced-button-primary&quot;
        disabled={submitting}
=======
        type="submit"
        className="enhanced-button enhanced-button-primary"
        disabled={_submitting}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      >
        {_submitting ? 'Submitting...' : 'Submit Review'}
      </button>

<<<<<<< HEAD
      {message && <p className=&quot;text-sm&quot;>{message}</p>}
=======
      {_message && <p className="text-sm">{message}</p>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </form>
  )
},

export default ReviewForm,