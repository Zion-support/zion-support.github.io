import { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

export type FeedbackContext = { actionType?: string; metadata?: any };
=======
export type FeedbackContext = { actionType?: string, metadata?: any };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function FeedbackModal({
  isOpen;
  onClose;
  defaultContext;
  defaultKind = 'general';
  userHeaders}: {
  isOpen: boolean,
  onClose: (submitted: boolean) => void,
  defaultContext?: FeedbackContext;
  defaultKind?: 'general' | 'bug' | 'feature';
<<<<<<< HEAD
  userHeaders?: Record<string, string>;
=======
export type FeedbackContext = { actionType?: string, metadata?: any };

export default function FeedbackModal({
  isOpen;
  onClose;
  defaultContext;
  defaultKind = 'general';
  userHeaders}: {
  isOpen: boolean,
  onClose: (submitted: boolean) => void,
  defaultContext?: FeedbackContext;
  defaultKind?: 'general' | 'bug' | 'feature';
  userHeaders?: Record<string, string>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  userHeaders?: Record<string, string>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
}) {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [kind, setKind] = useState<'general' | 'bug' | 'feature'>(defaultKind);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  async function submit() {
    if (rating < 1) return onClose(false);
    setLoading(true);
    try {
      await fetch('/api/feedback', {
        method: 'POST',
<<<<<<< HEAD
<<<<<<< HEAD
        headers: { 'Content-Type': 'application/json', ...(userHeaders || {}) },
        body: JSON.stringify({
          rating,
          comment,
          kind,
          context: defaultContext || {},
        }),
      });
=======
        headers: { 'Content-Type': 'application/json', ...(userHeaders || {}) };
        body: JSON.stringify({ rating, comment, kind, context: defaultContext || {} })})
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    } catch {}
    setLoading(false);
    onClose(true)
  }

  return (
<<<<<<< HEAD
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
      <div className='bg-white w-full max-w-md rounded shadow-lg p-5 space-y-4'>
        <div className='text-lg font-medium'>Was this helpful?</div>
        <div className='flex gap-2'>
          {[1, 2, 3, 4, 5].map(n => (
=======
        headers: { 'Content-Type': 'application/json', ...(userHeaders || {}) };
        body: JSON.stringify({ rating, comment, kind, context: defaultContext || {} })})
    } catch {}
    setLoading(false);
    onClose(true)
  }

  return (
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded shadow-lg p-5 space-y-4">
        <div className="text-lg font-medium">Was this helpful?</div>
        <div className="flex gap-2">
          {[1,2,3,4,5].map(n => (
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <button
              key={n}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(n)}
<<<<<<< HEAD
<<<<<<< HEAD
              className={
                hover >= n || rating >= n ? 'text-yellow-500' : 'text-gray-300'
              }
=======
              className={(hover >= n || rating >= n) ? 'text-yellow-500' : 'text-gray-300'}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              aria-label={`${n} stars`}
            >★</button>
          ))}
        </div>
        <div className="text-sm">
          <label className="block mb-1" htmlFor="input-Optional comment">Optional comment</label>
          <textarea value={comment} onChange={(e)=>setComment(e.target.value)} className="w-full border rounded p-2" rows={3} />
        </div>
        <div className="text-sm">
          <label className="block mb-1" htmlFor="input-Also">Also</label>
          <div className="flex gap-3">
            <label className="inline-flex items-center gap-1"><input type="radio" checked={kind==='general'} onChange={()=>setKind('general')} />General</label>
            <label className="inline-flex items-center gap-1"><input type="radio" checked={kind==='bug'} onChange={()=>setKind('bug')} />Report a bug</label>
            <label className="inline-flex items-center gap-1"><input type="radio" checked={kind==='feature'} onChange={()=>setKind('feature')} />Suggest a feature</label>
          </div>
        </div>
<<<<<<< HEAD
        <div className='flex justify-end gap-2'>
          <button
            onClick={() => onClose(false)}
            className='px-3 py-2 rounded border'
          >
            Later
          </button>
          <button
            onClick={submit}
            disabled={loading || rating < 1}
            className='px-3 py-2 rounded bg-gray-900 text-white'
          >
            {loading ? 'Submitting…' : 'Submit'}
          </button>
=======
              className={(hover >= n || rating >= n) ? 'text-yellow-500' : 'text-gray-300'}
              aria-label={`${n} stars`}
            >★</button>
          ))}
        </div>
        <div className="text-sm">
          <label className="block mb-1" htmlFor="input-Optional comment">Optional comment</label>
          <textarea value={comment} onChange={(e)=>setComment(e.target.value)} className="w-full border rounded p-2" rows={3} />
        </div>
        <div className="text-sm">
          <label className="block mb-1" htmlFor="input-Also">Also</label>
          <div className="flex gap-3">
            <label className="inline-flex items-center gap-1"><input type="radio" checked={kind==='general'} onChange={()=>setKind('general')} />General</label>
            <label className="inline-flex items-center gap-1"><input type="radio" checked={kind==='bug'} onChange={()=>setKind('bug')} />Report a bug</label>
            <label className="inline-flex items-center gap-1"><input type="radio" checked={kind==='feature'} onChange={()=>setKind('feature')} />Suggest a feature</label>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={()=>onClose(false)} className="px-3 py-2 rounded border">Later</button>
          <button onClick={submit} disabled={loading || rating<1} className="px-3 py-2 rounded bg-gray-900 text-white">{loading? 'Submitting…' : 'Submit'}</button>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="flex justify-end gap-2">
          <button onClick={()=>onClose(false)} className="px-3 py-2 rounded border">Later</button>
          <button onClick={submit} disabled={loading || rating<1} className="px-3 py-2 rounded bg-gray-900 text-white">{loading? 'Submitting…' : 'Submit'}</button>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
