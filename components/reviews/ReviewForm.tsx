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
      </div>

      <div>
        <label className=&quot;block text-sm font-medium mb-2&quot;>Your Review</label>
        <textarea
          className=&quot;w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>

      <div className=&quot;flex items-center gap-3&quot;>
        <input id=&quot;anonymous&quot; type=&quot;checkbox&quot; checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
        <label htmlFor=&quot;anonymous&quot;>Submit anonymously</label>
      </div>

      <div className=&quot;grid md:grid-cols-2 gap-4&quot;>
        <div className=&quot;enhanced-card&quot;>
          <div className=&quot;flex items-center justify-between mb-2&quot;>
            <span className=&quot;text-sm&quot;>Communication</span>
            <StarRating value={communication || 0} onChange={(v) => setCommunication(v)} />
          </div>
          <span className=&quot;pill&quot;>Optional</span>
        </div>
        <div className=&quot;enhanced-card&quot;>
          <div className=&quot;flex items-center justify-between mb-2&quot;>
            <span className=&quot;text-sm&quot;>Quality of Work</span>
            <StarRating value={qualityOfWork || 0} onChange={(v) => setQualityOfWork(v)} />
          </div>
          <span className=&quot;pill&quot;>Optional</span>
        </div>
        <div className=&quot;enhanced-card&quot;>
          <div className=&quot;flex items-center justify-between mb-2&quot;>
            <span className=&quot;text-sm&quot;>Timeliness</span>
            <StarRating value={timeliness || 0} onChange={(v) => setTimeliness(v)} />
          </div>
          <span className=&quot;pill&quot;>Optional</span>
        </div>
        <div className=&quot;enhanced-card&quot;>
          <div className=&quot;flex items-center justify-between mb-2&quot;>
            <span className=&quot;text-sm&quot;>Would Work With Again</span>
            <input type=&quot;checkbox&quot; checked={wouldWorkWithAgain} onChange={(e) => setWouldWorkWithAgain(e.target.checked)} />
          </div>
          <span className=&quot;pill&quot;>Optional</span>
        </div>
      </div>

      <button
        type=&quot;submit&quot;
        className=&quot;enhanced-button enhanced-button-primary&quot;
        disabled={submitting}
      >
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>

      {message && <p className=&quot;text-sm&quot;>{message}</p>}
    </form>
  )
},

export default ReviewForm,