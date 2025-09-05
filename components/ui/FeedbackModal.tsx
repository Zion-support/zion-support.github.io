<<<<<<< HEAD
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
=======

export type FeedbackContext = {_actionType?: string; metadata?: unknown};

export default function FeedbackModal(_{_isOpen, _onClose, _defaultContext, _defaultKind = 'general', _userHeaders}: {_isOpen: boolean;
  onClose: (submitted: boolean) => void;
  defaultContext?: FeedbackContext;
  defaultKind?: 'general' | 'bug' | 'feature';
  userHeaders?: Record<string, _string>;}) {_const [rating, _setRating] = useState<number>(0);
  const [hover, _setHover] = useState<number>(0);
  const [kind, _setKind] = useState<'general' | 'bug' | 'feature'>(defaultKind);
  const [comment, _setComment] = useState('');
  const [loading, _setLoading] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (!isOpen) return null,

  async function submit() {
    if (rating < 1) return onClose(false),
    setLoading(true),
    try {
<<<<<<< HEAD
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(userHeaders || {}) },
        body: JSON.stringify({ rating, comment, kind, context: defaultContext || {} })})
=======
      await fetch('/api/feedback', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json', _...(userHeaders || {}) },
        body: JSON.stringify({_rating, _comment, _kind, _context: defaultContext || {} })});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    } catch {}
    setLoading(false),
    onClose(true)
  }

<<<<<<< HEAD
  return (
    <div className=&quot;fixed inset-0 z-50 flex items-center justify-center bg-black/40&quot;>
      <div className=&quot;bg-white w-full max-w-md rounded shadow-lg p-5 space-y-4&quot;>
        <div className=&quot;text-lg font-medium&quot;>Was this helpful?</div>
        <div className=&quot;flex gap-2&quot;>
          {[1,2,3,4,5].map(n => (
=======
  return (_<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded shadow-lg p-5 space-y-4">
        <div className="text-lg font-medium">Was this helpful?</div>
        <div className="flex gap-2">
          {_[1, _2, _3, _4, _5].map(n => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <button
              key={n}
              onMouseEnter={_() => setHover(n)}
              onMouseLeave={_() => setHover(0)}
              onClick={_() => setRating(n)}
              className={_(hover >= n || rating >= n) ? 'text-yellow-500' : 'text-gray-300'}
              aria-label={_`${n} stars`}
            >★</button>
          ))}
        </div>
<<<<<<< HEAD
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
          <button onClick={submit} disabled={loading || rating<1} className=&quot;px-3 py-2 rounded bg-gray-900 text-white&quot;>{loading? 'Submitting…' : 'Submit'}</button>
=======
        <div className="text-sm">
          <label className="block mb-1">Optional comment</label>
          <textarea value={_comment} onChange={_(_e)=>setComment(e.target.value)} className="w-full border rounded p-2" rows={_3} />
        </div>
        <div className="text-sm">
          <label className="block mb-1">Also</label>
          <div className="flex gap-3">
            <label className="inline-flex items-center gap-1"><input type="radio" checked={_kind==='general'} onChange={_()=>setKind('general')} />General</label>
            <label className="inline-flex items-center gap-1"><input type="radio" checked={_kind==='bug'} onChange={_()=>setKind('bug')} />Report a bug</label>
            <label className="inline-flex items-center gap-1"><input type="radio" checked={_kind==='feature'} onChange={_()=>setKind('feature')} />Suggest a feature</label>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={_()=>onClose(false)} className="px-3 py-2 rounded border">Later</button>
          <button onClick={_submit} disabled={_loading || rating<1} className="px-3 py-2 rounded bg-gray-900 text-white">{_loading? 'Submitting…' : 'Submit'}</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </div>
    </div>
  )
}