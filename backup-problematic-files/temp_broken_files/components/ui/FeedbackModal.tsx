import { useState } from 'react',
export type FeedbackContext = { actionType?: string, metadata?: any },

export default function FeedbackModal({
  isOpen,
  onClose,
  defaultContext,
  defaultKind = 'general',
  userHeaders}: {
  isOpen: boolean,
  onClose: (submitted: boolean) => void,
  defaultContext?: FeedbackContext,
  defaultKind?: 'general' | 'bug' | 'feature',
  userHeaders?: Record<string string>
}) {
  const [rating, setRating] = useState<number>(0),
  const [hover, setHover] = useState<number>(0),
  const [kind, setKind] = useState<'general' | 'bug' | 'feature'>(defaultKind),
  const [comment, setComment] = useState(''),
  const [loading, setLoading] = useState(false),
  if (!isOpen) return null,

  async function submit() {
    if (rating < 1) return onClose(false),
    setLoading(true),
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(userHeaders || {}) },
        body: JSON.stringify({ rating, comment, kind, context: defaultContext || {} })})    } catch {}
    setLoading(false),
    onClose(true)
  }

  return (
    <div className=&quot;fixed inset-0 z-50 flex items-center justify-center bg-black/40&quot;>
      <div className=&quot;bg-white w-full max-w-md rounded shadow-lg p-5 space-y-4&quot;>
        <div className=&quot;text-lg font-medium&quot;>Was this helpful?</div>
        <div className=&quot;flex gap-2&quot;>
          {[1,2,3,4,5].map(n => (            <button,
key={n}
              onMouseEnter={_() => setHover(n)}
              onMouseLeave={_() => setHover(0)}
              onClick={_() => setRating(n)}
              className={_(hover >= n || rating >= n) ? 'text-yellow-500' : 'text-gray-300'}
              aria-label={_`${n} stars`}
            >★</button>
          ))}
        </div>
        <div className=&quot;text-sm&quot;>
          <label className=&quot;block mb-1&quot;>Optional comment</label>
          <textarea value={comment} onChange={(e)=>setComment(e.target.value)} className=&quot;w-full border rounded p-2&quot; rows={3} />
        </div>
        <div className=&quot;text-sm&quot;>
          <label className=&quot;block mb-1&quot;>Also</label>
          <div className=&quot;flex gap-3&quot;>
            <label className=&quot;inline-flex items-center gap-1&quot;><input type=&quot;radio&quot; checked={kind==='general'} onChange={()=>setKind('general')} />General</label>
            <label className=&quot;inline-flex items-center gap-1&quot;><input type=&quot;radio&quot; checked={kind==='bug'} onChange={()=>setKind('bug')} />Report a bug</label>
            <label className=&quot;inline-flex items-center gap-1&quot;><input type=&quot;radio&quot; checked={kind==='feature'} onChange={()=>setKind('feature')} />Suggest a feature</label>
          </div>
        </div>
        <div className=&quot;flex justify-end gap-2&quot;>
          <button onClick={()=>onClose(false)} className=&quot;px-3 py-2 rounded border&quot;>Later</button>
          <button onClick={submit} disabled={loading || rating<1} className=&quot;px-3 py-2 rounded bg-gray-900 text-white&quot;>{loading? 'Submitting…' : 'Submit'}</button>        </div>
      </div>
    </div>
  )}