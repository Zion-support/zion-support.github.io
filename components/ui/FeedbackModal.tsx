import { useState } from 'react';
<<<<<<< HEAD

<<<<<<< HEAD
export type FeedbackContext = { actionType?: string; metadata?: any }
export default function FeedbackModal({
  isOpen
  onClose
  defaultContext
  defaultKind = 'general'
  userHeaders
}: {
=======
export type FeedbackContext = { actionType?: string; metadata?: any };

export default function FeedbackModal(): any ({;
  isOpen,;
  onClose,;
  defaultContext,;
  defaultKind = 'general',;
  userHeaders,;
}: {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  isOpen: boolean;
  onClose: (submitted: boolean) => void;
  defaultContext?: FeedbackContext;
  defaultKind?: 'general' | 'bug' | 'feature';
  userHeaders?: Record<string, string>;}) {export default function FeedbackModal(): any ({;
=======
export type FeedbackContext = { actionType?: string, metadata?: any };

export default function FeedbackModal({
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  isOpen;
  onClose;
  defaultContext;
  defaultKind = 'general';
<<<<<<< HEAD
  userHeaders}: {
  isOpen: boolean
  onClose: (submitted: boolean) => void
=======
  userHeaders}: {;
  isOpen: boolean,;
  onClose: (submitted: boolean) => void,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  defaultContext?: FeedbackContext;
  defaultKind?: 'general' | 'bug' | 'feature';
<<<<<<< HEAD
  userHeaders?: Record<string, string>;
}) {;
=======
  userHeaders?: Record<string, string>
}) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [kind, setKind] = useState<'general' | 'bug' | 'feature'>(defaultKind);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  if (!isOpen) return null;
<<<<<<< HEAD
  async function submit() {
    if (rating < 1) return onClose(false);
    setLoading(true);
    try {
      await fetch('/api/feedback', {
<<<<<<< HEAD
        method: 'POST'
        headers: { 'Content-Type': 'application/json', ...(userHeaders |{}) }
        body: JSON.stringify({
          rating
          comment
          kind
          context: defaultContext |{}
        })
=======

  async function submit() {;
    if (rating < 1) return onClose(false);
    setLoading(true);
    try {;
      await fetch('/api/feedback', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json', ...(userHeaders || {}) },;
        body: JSON && JSON.stringify({;
          rating,;
          comment,;
          kind,;
          context: defaultContext || {},;
        }),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
    setLoading(false);
    onClose(true);

=======
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(userHeaders || {}) };
        body: JSON.stringify({ rating, comment, kind, context: defaultContext || {} })})
    } catch {}
    setLoading(false);
    onClose(true)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  }
  return (
<<<<<<< HEAD
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>;
      <div className='bg-white w-full max-w-md rounded shadow-lg p-5 space-y-4'>;
        <div className='text-lg font-medium'>Was this helpful?</div>;
        <div className='flex gap-2'>;
          {[1, 2, 3, 4, 5].map(n => (            <button    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">;
      <div className="bg-white w-full max-w-md rounded shadow-lg p-5 space-y-4">;
        <div className="text-lg font-medium">Was this helpful?</div>;
        <div className="flex gap-2">;
          {[1,2,3,4,5].map(n => (;
=======
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded shadow-lg p-5 space-y-4">
        <div className="text-lg font-medium">Was this helpful?</div>
        <div className="flex gap-2">
          {[1,2,3,4,5].map(n => (
            <button
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              key={n}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(n)}
<<<<<<< HEAD
<<<<<<< HEAD
              className={
                hover >= n |rating >= n ? 'text-yellow-500' : 'text-gray-300'
=======
              className={;
                hover >= n || rating >= n ? 'text-yellow-500' : 'text-gray-300';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              }
              aria-label={`${n} stars`}
            >;
              ★;
            </button>;
          ))}
        </div>;
        <div className='text-sm'>;
          <label className='block mb-1'>Optional comment</label>;
          <textarea
            value={comment}
            onChange={e => setComment(e && e.target.value)}
            className='w-full border rounded p-2';
            rows={3}
          />;
        </div>;
        <div className='text-sm'>;
          <label className='block mb-1'>Also</label>;
          <div className='flex gap-3'>;
            <label className='inline-flex items-center gap-1'>;
              <input
                type='radio'
                checked={kind === 'general'}
                onChange={() => setKind('general')}
              />;
              General;
            </label>;
            <label className='inline-flex items-center gap-1'>;
              <input
                type='radio'
                checked={kind === 'bug'}
                onChange={() => setKind('bug')}
              />;
              Report a bug;
            </label>;
            <label className='inline-flex items-center gap-1'>;
              <input
                type='radio'
                checked={kind === 'feature'}
                onChange={() => setKind('feature')}
              />;
              Suggest a feature;
            </label>;
          </div>;
        </div>;
        <div className='flex justify-end gap-2'>;
          <button
            onClick={() => onClose(false)}
            className='px-3 py-2 rounded border';
          >;
            Later;
          </button>;
          <button
            onClick={submit}
<<<<<<< HEAD
            disabled={loading |rating < 1}
            className='px-3 py-2 rounded bg-gray-900 text-white'
          >
=======
            disabled={loading || rating < 1}
            className='px-3 py-2 rounded bg-gray-900 text-white'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            {loading ? 'Submitting…' : 'Submit'}
          </button>        </div>;
      </div>;
    </div>;
  );
}              aria-label={`${n} stars`}
            >★</button>;
=======
              className={(hover >= n || rating >= n) ? 'text-yellow-500' : 'text-gray-300'}
              aria-label={`${n} stars`}
            >★</button>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          ))}
<<<<<<< HEAD
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
<<<<<<< HEAD
          <button onClick={submit} disabled={loading |rating<1} className="px-3 py-2 rounded bg-gray-900 text-white">{loading? 'Submitting…' : 'Submit'}</button>
        </div>
      </div>
    </div>
);
}
=======
        </div>;
        <div className="text-sm">;
          <label className="block mb-1" htmlFor="input-Optional comment">Optional comment</label>;
          <textarea value={comment} onChange={(e)=>setComment(e && e.target.value)} className="w-full border rounded p-2" rows={3} />;
        </div>;
        <div className="text-sm">;
          <label className="block mb-1" htmlFor="input-Also">Also</label>;
          <div className="flex gap-3">;
            <label className="inline-flex items-center gap-1"><input type="radio" checked={kind==='general'} onChange={()=>setKind('general')} />General</label>;
            <label className="inline-flex items-center gap-1"><input type="radio" checked={kind==='bug'} onChange={()=>setKind('bug')} />Report a bug</label>;
            <label className="inline-flex items-center gap-1"><input type="radio" checked={kind==='feature'} onChange={()=>setKind('feature')} />Suggest a feature</label>;
          </div>;
        </div>;
        <div className="flex justify-end gap-2">;
          <button onClick={()=>onClose(false)} className="px-3 py-2 rounded border">Later</button>;
          <button onClick={submit} disabled={loading || rating<1} className="px-3 py-2 rounded bg-gray-900 text-white">{loading? 'Submitting…' : 'Submit'}</button>;
        </div>;
      </div>;
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
          <button onClick={submit} disabled={loading || rating<1} className="px-3 py-2 rounded bg-gray-900 text-white">{loading? 'Submitting…' : 'Submit'}</button>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
