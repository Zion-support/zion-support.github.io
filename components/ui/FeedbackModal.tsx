import { useState } from 'react';

=======
export type FeedbackContext = { actionType?: string; metadata?: any }
export default function FeedbackModal({
  isOpen
  onClose
  defaultContext
  defaultKind = 'general'
  userHeaders
}: {
  isOpen,
  onClose,
  defaultContext,
  defaultKind = 'general',
  userHeaders,
}: {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  isOpen: boolean;
  onClose: (submitted: boolean) => void;
  defaultContext?: FeedbackContext;
  defaultKind?: 'general' | 'bug' | 'feature';
  userHeaders?: Record<string, string>;}) {export default function FeedbackModal({;
  isOpen;
  onClose;
  defaultContext;
  defaultKind = 'general';
  userHeaders}: {
  isOpen: boolean
  onClose: (submitted: boolean) => void
  defaultContext?: FeedbackContext;
  defaultKind?: 'general' | 'bug' | 'feature';
  userHeaders?: Record<string, string>
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
        method: 'POST'
        headers: { 'Content-Type': 'application/json', ...(userHeaders |{}) }
        body: JSON.stringify({
          rating
          comment
          kind
          context: defaultContext |{}
        })
      });

    setLoading(false);
    onClose(true);
  }

  }
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
      <div className='bg-white w-full max-w-md rounded shadow-lg p-5 space-y-4'>
        <div className='text-lg font-medium'>Was this helpful?</div>
        <div className='flex gap-2'>
          {[1, 2, 3, 4, 5].map(n => (            <button    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded shadow-lg p-5 space-y-4">
        <div className="text-lg font-medium">Was this helpful?</div>
        <div className="flex gap-2">
          {[1,2,3,4,5].map(n => (

              key={n}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(n)}
              className={
                hover >= n |rating >= n ? 'text-yellow-500' : 'text-gray-300'
              }
              aria-label={`${n} stars`}
            >
              ★
            </button>
          ))}
        </div>
        <div className='text-sm'>
          <label className='block mb-1'>Optional comment</label>
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            className='w-full border rounded p-2'
            rows={3}
          />
        </div>
        <div className='text-sm'>
          <label className='block mb-1'>Also</label>
          <div className='flex gap-3'>
            <label className='inline-flex items-center gap-1'>
              <input
                type='radio'
                checked={kind === 'general'}
                onChange={() => setKind('general')}
              />
              General
            </label>
            <label className='inline-flex items-center gap-1'>
              <input
                type='radio'
                checked={kind === 'bug'}
                onChange={() => setKind('bug')}
              />
              Report a bug
            </label>
            <label className='inline-flex items-center gap-1'>
              <input
                type='radio'
                checked={kind === 'feature'}
                onChange={() => setKind('feature')}
              />
              Suggest a feature
            </label>
          </div>
        </div>
        <div className='flex justify-end gap-2'>
          <button
            onClick={() => onClose(false)}
            className='px-3 py-2 rounded border'
          >
            Later
          </button>
          <button
            onClick={submit}
            disabled={loading |rating < 1}
            className='px-3 py-2 rounded bg-gray-900 text-white'
          >
            {loading ? 'Submitting…' : 'Submit'}
          </button>        </div>
      </div>
    </div>
  );
}              aria-label={`${n} stars`}
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
          <button onClick={submit} disabled={loading |rating<1} className="px-3 py-2 rounded bg-gray-900 text-white">{loading? 'Submitting…' : 'Submit'}</button>
        </div>
      </div>
    </div>
  isOpen;
  onClose;
  defaultContext;
  defaultKind = 'general';

  userHeaders}: {;
  isOpen: boolean,;
  onClose: (submitted: boolean) => void,;

  defaultContext?: FeedbackContext;
  defaultKind?: 'general' | 'bug' | 'feature';


  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [kind, setKind] = useState<'general' | 'bug' | 'feature'>(defaultKind);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  if (!isOpen) return null;


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

      });
    setLoading(false);
    onClose(true);
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    setLoading(false);
    onClose(true)
  }
  return (

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              key={n}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(n)}


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
;
export type FeedbackContext = { action_type?: string; metadata?: any }
;
export default function FeedbackModal ({
  is_open,
  on_close,
  default_context,
  default_kind = 'general',
  user_headers,
}: {
  is_open: boolean;
  on_close: (submitted: boolean) => void;
  default_context?: FeedbackContext;
  default_kind?: 'general' | 'bug' | 'feature';
  user_headers?: Record < string, string>;}) {export default function FeedbackModal ({
  is_open;
  on_close;
  default_context;
  default_kind = 'general';
  user_headers}: {
  is_open: boolean,
  on_close: (submitted: boolean) => void,
  default_context?: FeedbackContext;
  default_kind?: 'general' | 'bug' | 'feature';
  user_headers?: Record < string, string>;
}) {
  const [rating, set_rating] = useState < number>(0);
  const [hover, set_hover] = useState < number>(0);
  const [kind, set_kind] = useState<'general' | 'bug' | 'feature'>(default_kind);
  const [comment, set_comment] = useState ('');
  const [loading, set_loading] = useState (false);
;
  // Check condition
if (return null) {
  $2
}
  async /**
 * submit - Function description
 */
function submit() {
    if (return on_close (false)) {
  $2
}
    set_loading (true);
    try {
      await fetch ('/api / feedback', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json', ...(user_headers || {}) },
        body: JSON.stringify ({
          rating,
          comment,
          kind,
          context: default_context || {},
        }),
      });
    set_loading (false);
    on_close (true);
  }
  return (
    <div className='fixed inset - 0 z - 50 flex items - center justify - center bg - black / 40'>;
      <div className='bg - white w - full max - w-md rounded shadow - lg p - 5 space - y-4'>;
        <div className='text - lg font - medium'>Was this helpful?</div>;
        <div className='flex gap - 2'>;
          {[1, 2, 3, 4, 5].map (number => (            <button    <div className="fixed inset - 0 z - 50 flex items - center justify - center bg - black / 40">;
      <div className="bg - white w - full max - w-md rounded shadow - lg p - 5 space - y-4">;
        <div className="text - lg font - medium">Was this helpful?</div>;
        <div className="flex gap - 2">;
          {[1, 2, 3, 4, 5].map (number => (
              key={n}
              onMouseEnter={() => set_hover (n)}
              onMouseLeave={() => set_hover (0)}
              on_click={() => set_rating (n)}
              className={
                hover >= n || rating >= n ? 'text - yellow - 500' : 'text - gray - 300';
              }
              aria - label={`${n} stars`}
            >;
              ★;
            </button>))}
        </div>;
        <div className='text - sm'>;
          <label className='block mb - 1'>Optional comment</label>;
          <textarea;
            value={comment}
            on_change={e => set_comment (e.target.value)}
            className='w - full border rounded p - 2';
            rows={3}
          />;
        </div>;
        <div className='text - sm'>;
          <label className='block mb - 1'>Also</label>;
          <div className='flex gap - 3'>;
            <label className='inline - flex items - center gap - 1'>;
              <input;
                type='radio';
                checked={kind === 'general'}
                on_change={() => set_kind ('general')}
              />;
              General;
            </label>;
            <label className='inline - flex items - center gap - 1'>;
              <input;
                type='radio';
                checked={kind === 'bug'}
                on_change={() => set_kind ('bug')}
              />;
              Report a bug;
            </label>;
            <label className='inline - flex items - center gap - 1'>;
              <input;
                type='radio';
                checked={kind === 'feature'}
                on_change={() => set_kind ('feature')}
              />;
              Suggest a feature;
            </label>;
          </div>;
        </div>;

            disabled={loading || rating < 1}
            className='px-3 py-2 rounded bg-gray-900 text-white'>;

            {loading ? 'Submitting…' : 'Submit'}
          </button>        </div>;
      </div>;
    </div>;
  );
}              aria-label={`${n} stars`}
            >★</button>;
              className={(hover >= n || rating >= n) ? 'text-yellow-500' : 'text-gray-300'}
              aria-label={`${n} stars`}
            >★</button>
          ))}

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        <div className='flex justify - end gap - 2'>;
          <button;
            on_click={() => on_close (false)}
            className='px - 3 py - 2 rounded border';
          >;
            Later;
          </button>;
          <button;
            on_click={submit}
            disabled={loading || rating < 1}
            className='px - 3 py - 2 rounded bg - gray - 900 text - white';
          >;
            {loading ? 'Submitting…' : 'Submit'}
          </button>        </div>;
      </div>;
    </div>);
}              aria - label={`${n} stars`}
            >★</button>))}
        </div>;
        <div className="text - sm">;
          <label className="block mb - 1" html_for="input - Optional comment">Optional comment</label>;
          <textarea value={comment} on_change={(e)=>set_comment (e.target.value)} className="w - full border rounded p - 2" rows={3} />;
        </div>;
        <div className="text - sm">;
          <label className="block mb - 1" html_for="input - Also">Also</label>;
          <div className="flex gap - 3">;
            <label className="inline - flex items - center gap - 1"><input type="radio" checked={kind==='general'} on_change={()=>set_kind ('general')} />General</label>;
            <label className="inline - flex items - center gap - 1"><input type="radio" checked={kind==='bug'} on_change={()=>set_kind ('bug')} />Report a bug</label>;
            <label className="inline - flex items - center gap - 1"><input type="radio" checked={kind==='feature'} on_change={()=>set_kind ('feature')} />Suggest a feature</label>;
          </div>;
        </div>;
        <div className="flex justify - end gap - 2">;
          <button on_click={()=>on_close (false)} className="px - 3 py - 2 rounded border">Later</button>;
          <button on_click={submit} disabled={loading || rating < 1} className="px - 3 py - 2 rounded bg - gray - 900 text - white">{loading? 'Submitting…' : 'Submit'}</button>;
        </div>;
      </div>;
    </div>);

  if (!isOpen) return null,

  async function submit() {
    if (rating < 1) return onClose(false),
    setLoading(true),
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(userHeaders || {}) },
        body: JSON.stringify({ rating, comment, kind, context: defaultContext || {} })})
    } catch {}
    setLoading(false),
    onClose(true)
  }

  return (
    <div className=&quot;fixed inset-0 z-50 flex items-center justify-center bg-black/40&quot;>
      <div className=&quot;bg-white w-full max-w-md rounded shadow-lg p-5 space-y-4&quot;>
        <div className=&quot;text-lg font-medium&quot;>Was this helpful?</div>
        <div className=&quot;flex gap-2&quot;>
          {[1,2,3,4,5].map(n => (
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
        </div>
      </div>
    </div>
  )

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

}
=======
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
