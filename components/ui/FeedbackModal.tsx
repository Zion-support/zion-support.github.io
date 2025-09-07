
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useState } from 'react';

=======
<<<<<<< HEAD
=======
import { useState } from 'react';

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export type FeedbackContext = any;
    onClose(true)
export default function FeedbackModal({
  isOpen;
onClose,
defaultContext;
defaultKind = 'general'}
  userHeaders}
>>>>>>> origin/chore/fix-lint-and-merge
}: {
  isOpen,
  onClose,
  defaultContext,
  defaultKind = 'general'}
  userHeaders}
}: {;
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
export type FeedbackContext = { actionType?: string, metadata?: any };
export default function FeedbackModal({
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState } from 'react';
export type FeedbackContext = any;
    onClose(true)
export type FeedbackContext = { actionType?: string; metadata?: any }
export default function FeedbackModal({
  isOpen
onClose,
defaultContext
defaultKind = 'general'}
  userHeaders}
}: {
=======
>>>>>>> origin/chore/fix-lint-and-merge
  isOpen: boolean;
  onClose: (submitted: boolean) => void;
  defaultContext?: FeedbackContext;
  defaultKind?: 'general' | 'bug' | 'feature';
<<<<<<< HEAD
  userHeaders?: Record<string, string>;}) {export default function FeedbackModal(): any ({;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======
export type FeedbackContext = { actionType?: string, metadata?: any };
export default function FeedbackModal({

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  isOpen;
  onClose;
  defaultContext;
  defaultKind = 'general';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  userHeaders}: {;
  isOpen: boolean,;
  onClose: (submitted: boolean) => void,;
  defaultContext?: FeedbackContext;
  defaultKind?: 'general' | 'bug' | 'feature';
  userHeaders?: Record<string, string>
}) {
=======

  userHeaders}: {;
  isOpen: boolean,;
  onClose: (submitted: boolean) => void,;

  defaultContext?: FeedbackContext;
  defaultKind?: 'general' | 'bug' | 'feature';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [kind, setKind] = useState<general' | 'bug | feature'>(defaultKind);
  const [comment, setComment] = useState(');
  const [loading, setLoading] = useState(false);
  if (!isOpen) return null;
<<<<<<< HEAD
import { useState } from react';
export type FeedbackContext = { actionType?: string, metadata?: any },
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export default function FeedbackModal({
  isOpen,
  onClose,
  defaultContext,
  defaultKind = $2;
  userHeaders}: {
  isOpen: boolean,
  onClose: (submitted: boolean) => void,
  defaultContext?: FeedbackContext,
  defaultKind?: 'general | bug' | 'feature,
  userHeaders?: Record<string, string>
}) {
  const [rating, setRating] = useState<number>(0),
  const [hover, setHover] = useState<number>(0),
  const [kind, setKind] = useState<general' | 'bug | feature'>(defaultKind),
  const [comment, setComment] = useState($2);
  const [loading, setLoading] = useState($2);
  if (!isOpen) return null,
=======
}
  userHeaders?: Record<string, string    />;}
}) {
  const [rating, setRating] = useState<number    />(0);

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const [hover, setHover] = useState<number    />(0);

const [kind, setKind] = useState<'general' | 'bug' | 'feature'>(defaultKind);

const [comment, setComment] = useState('');

const [loading, setLoading] = useState(false);
  if (!isOpen) return null;
>>>>>>> origin/chore/fix-lint-and-merge

  async function submit() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    if (rating < 1) return onClose($2);
    setLoading($2);
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(userHeaders || {}) },
        body: JSON.stringify({ rating, comment, kind, context: defaultContext || {} })})
    } catch {}
    setLoading($2);
    onClose(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded shadow-lg p-5 space-y-4">
        <div className="text-lg font-medium">Was this helpful?</div>
        <div className="flex gap-2">
          {[1,2,3,4,5].map(n => (
            <button
              key={n}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(n)}
              className={(hover >= n || rating >= n) ? 'text-yellow-500' : 'text-gray-300'}
              aria-label={`${n} stars`}
            >★</button>
          ))}
        </div>
        <div className="text-sm">
          <label className="block mb-1">Optional comment</label>
          <textarea value={comment} onChange={(e)=>setComment(e.target.value)} className="w-full border rounded p-2" rows={3} />
        </div>
        <div className="text-sm">
          <label className="block mb-1">Also</label>
          <div className="flex gap-3">
            <label className="inline-flex items-center gap-1"><input type="radio" checked={kind==='general'} onChange={()=>setKind('general')} />General</label>
            <label className="inline-flex items-center gap-1"><input type="radio" checked={kind==='bug'} onChange={()=>setKind('bug')} />Report a bug</label>
            <label className="inline-flex items-center gap-1"><input type="radio" checked={kind==='feature'} onChange={()=>setKind('feature')} />Suggest a feature</label>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={()=>onClose(false)} className="px-3 py-2 rounded border">Later</button>
          <button onClick={submit} disabled={loading || rating<1} className="px-3 py-2 rounded bg-gray-900 text-white">{loading? 'Submitting…' : 'Submit'}</button>
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    if (rating < 1) return onClose(false);
    setLoading(true);
    try {
<<<<<<< HEAD
      await fetch('/api/feedback', {
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      });




<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        method: 'POST',

    setLoading(false);
    onClose(true);

        method: 'POST,
        headers: { Content-Type': 'application/json, ...(userHeaders || {}) }
        headers: { Content-Type': 'application/json, ...(userHeaders || {}) },
        body: JSON.stringify({ rating, comment, kind, context: defaultContext || {} })})
    } catch {}
<<<<<<< HEAD
    setLoading($2);
    onClose(true)
  }

            <button
}
=======
      await fetch('/api/feedback', {}
        method: 'POST'}
headers: { 'Content-Type': 'application/json', ...(userHeaders || {}) },
        body: JSON.stringify({
          rating;
comment}
kind;}
context: defaultContext |{}
        })
     
});
    setLoading(false);
    onClose(true);
  }
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'    />
      <div className='bg-white w-full max-w-md rounded shadow-lg p-5 space-y-4'    />
        <div className='text-lg font-medium'    />Was this helpful?</div>
        <div className='flex gap-2'    />
          {[1, 2, 3, 4, 5].map(n => (}
            <button;}
>>>>>>> origin/chore/fix-lint-and-merge
key={n}
              onMouseEnter={() =    /> setHover(n)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(n)}
<<<<<<< HEAD
import { useState  } from react';
export type FeedbackContext = any;
    onClose(true)export default function FeedbackModal({isOpen;
  onClose;
  defaultContext;
  defaultKind = 'general;
  userHeaders;
}: {isOpen,onClose,defaultContext,defaultKind = general',userHeaders}: {isOpen: boolean;
  onClose: (submitted: boolean) => void;
  defaultContext?: FeedbackContext;
  defaultKind?: 'general | bug' | 'feature;userHeaders?: Record<string, string>;}) {export default function FeedbackModal(): any ({isOpen;
  onClose;
  defaultContext;
  defaultKind = general';userHeaders?: Record<string, string>;
}) {const [rating, setRating] = useState<number>(0)const [hover, setHover] = useState<number>(0)const [kind, setKind] = useState<'general | bug' | 'feature>(defaultKind)const [comment, setComment] = useState(')const [loading, setLoading] = useState(false)if (!isOpen) return null;setLoading(false)onClose(true)method: 'POST,headers: { Content-Type': 'application/json, ...(userHeaders || {}) }body: JSON.stringify({ rating, comment, kind, context: defaultContext || {} })})} catch {}
    setLoading(false)onClose(true)}
  return (<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40>;
      <div className=bg-white w-full max-w-md rounded shadow-lg p-5 space-y-4">;
        <div className="text-lg font-medium>Was this helpful?</div>;
        <div className=flex gap-2">;
          {[1,2,3,4,5].map(n => (async function submit() {if (rating < 1) return onClose(false)setLoading(true)try {await fetch(/api/feedback', {method: 'POST,headers: { Content-Type': 'application/json, ...(userHeaders || {}) },body: JSON.stringify({rating;
          comment;
          kind;
          context: defaultContext |{}
        })})setLoading(false)onClose(true)}
  return (<div className=fixed inset-0 z-50 flex items-center justify-center bg-black/40'>;
      <div className='bg-white w-full max-w-md rounded shadow-lg p-5 space-y-4>;
        <div className=text-lg font-medium'>Was this helpful?</div>;
        <div className='flex gap-2>;
          {[1, 2, 3, 4, 5].map(n => (<button;
              key={n}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(n)}className={hover >= n || rating >= n ? text-yellow-500' : 'text-gray-300;
=======



    setLoading(false);
    onClose(true)
  }
  return (
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded shadow-lg p-5 space-y-4">
        <div className="text-lg font-medium">Was this helpful?</div>
        <div className="flex gap-2">
          {[1,2,3,4,5].map(n => (



            <button
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              key={n}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(n)}
<<<<<<< HEAD
              className={;
                hover >= n || rating >= n ? 'text-yellow-500' : 'text-gray-300';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

className={
                hover >= n || rating >= n ? 'text-yellow-500' : 'text-gray-300'

<<<<<<< HEAD
          ))}
          <button onClick={submit} disabled={loading || rating<1} className="px-3 py-2 rounded bg-gray-900 text-white>{loading? Submitting…' : 'Submit}</button>;
        </div>;

=======

className={
                hover >= n || rating >= n ? 'text-yellow-500' : 'text-gray-300'}
}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              }
              aria-label={`${n} stars`}
            >;
              ★;
            </button>;
          ))}
        </div>;
        <div className='text-sm'    />;
          <label className='block mb-1'    />Optional comment</label>;
          <textarea;
            value={comment}
            onChange={e =    /> setComment(e && e.target.value)}
            className='w-full border rounded p-2';
            rows={3}
          />;
        </div>;
        <div className='text-sm'    />;
          <label className='block mb-1'    />Also</label>;
          <div className='flex gap-3'    />;
            <label className='inline-flex items-center gap-1'    />;
              <input;
                type='radio';
                checked={kind === 'general'}
                onChange={() =    /> setKind('general')}
              />;
              General;
            </label>;
            <label className='inline-flex items-center gap-1'    />;
              <input;
                type='radio';
                checked={kind === 'bug'}
                onChange={() =    /> setKind('bug')}
              />;
              Report a bug;
            </label>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <label className='inline-flex items-center gap-1'    />;
              <input;
                type='radio';
                checked = {kind === 'feature'}
                onChange={() =    /> setKind('feature';}
}

<<<<<<< HEAD
=======
=======
            <label className='inline-flex items-center gap-1'>;
              <input
                type='radio'
                checked={kind === 'feature'}
                onChange={() => setKind('feature')}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export type FeedbackContext = { action_type?: string; metadata?: any }

export default function FeedbackModal ({is_open,on_close,default_context,default_kind = 'general',user_headers}: {is_open: boolean;
  on_close: (submitted: boolean) => void;
  default_context?: FeedbackContext;}
  default_kind?: 'general' | 'bug' | 'feature';}
>>>>>>> origin/chore/fix-lint-and-merge
  user_headers?: Record < string, string>;}) {export default function FeedbackModal ({is_open;
  on_close;
<<<<<<< HEAD

=======
  default_context;}
  default_kind = 'general';}
  user_headers}: {is_open: boolean,on_close: (submitted: boolean) => void,default_context?: FeedbackContext;
  default_kind?: 'general' | 'bug' | 'feature';}
  user_headers?: Record < string, string>;}
}) {const [rating, set_rating] = useState < number>(0)const [hover, set_hover] = useState < number>(0)const [kind, set_kind] = useState<'general' | 'bug' | 'feature'>(default_kind)const [comment, set_comment] = useState ('')const [loading, set_loading]  = useState (false)// Check condition;}
if (return null) {$2;}
>>>>>>> origin/chore/fix-lint-and-merge
}
  async /**;
 * submit - Function description;
 */;
function submit() {if (return on_close (false)) {$2;}
}
<<<<<<< HEAD

=======
    set_loading (true)try {await fetch ('/api / feedback', {method: 'POST'}
  headers: { 'Content - Type': 'application / json', ...(user_headers || {}) },body: JSON.stringify ({rating,comment,kind,context: default_context || }
}})})set_loading (false)on_close (true)}
  return (<div className='fixed inset - 0 z - 50 flex items - center justify - center bg - black / 40'    />;
      <div className='bg - white w - full max - w-md rounded shadow - lg p - 5 space - y-4'    />;
        <div className='text - lg font - medium'    />Was this helpful?</div>;
        <div className='flex gap - 2'    />;
          {[1, 2, 3, 4, 5].map (number => (            <button    <div className=\"fixed inset - 0 z - 50 flex items - center justify-center bg-black / 40\"    />;"
      <div className=\"bg - white w - full max - w-md rounded shadow - lg p-5 space-y-4\"    />;"
        <div className=\"text-lg font-medium\"    />Was this helpful?</div>;}"
        <div className=\"flex gap-2\"    />;}
>>>>>>> origin/chore/fix-lint-and-merge
          {[1, 2, 3, 4, 5].map (number => (key={n}
              onMouseEnter={() => set_hover (n)}
              onMouseLeave={() => set_hover (0)}
              on_click={() => set_rating (n)}
<<<<<<< HEAD

=======
              className={hover >= n || rating >= n ? 'text - yellow - 500' : 'text - gray - 300';}
>>>>>>> origin/chore/fix-lint-and-merge
              }
              aria - label={`${n} stars`}
            >;
              ★;
            </button>))}
        </div>;
<<<<<<< HEAD

=======
        <div className='text - sm'    />;
          <label className='block mb - 1'    />Optional comment</label>;
          <textarea;
            value={comment}
            on_change={e =    /> set_comment (e.target.value)}
            className='w - full border rounded p - 2';
            rows={3}
          />;
        </div>;
        <div className='text - sm'    />;
          <label className='block mb - 1'    />Also</label>;
          <div className='flex gap - 3'    />;
            <label className='inline - flex items - center gap - 1'    />;
              <input;
                type='radio';
                checked={kind === 'general'}
                on_change={() =    /> set_kind ('general')}
              />;
              General;
            </label>;
            <label className='inline - flex items - center gap - 1'    />;
              <input;
                type='radio';
                checked={kind === 'bug'}
                on_change={() =    /> set_kind ('bug')}
              />;
              Report a bug;
            </label>;
            <label className='inline - flex items - center gap - 1'    />;
              <input;
                type='radio';
                checked={kind === 'feature'}
<<<<<<< HEAD
                on_change={() =    /> set_kind ('feature')}
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
                on_change={() =    /> set_kind ('feature')}
>>>>>>> origin/chore/fix-lint-and-merge
=======
                on_change={() => set_kind ('feature')}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              />;
              Suggest a feature;
            </label>;
          </div>;
        </div>;
<<<<<<< HEAD
          ))}
<<<<<<< HEAD

=======
"
          <button onClick={submit} disabled={loading || rating<1} className=\"px-3 py-2 rounded bg-gray-900 text-white\"    />{loading? 'Submitting…' : 'Submit'}</button>
        </div>

        <div className='flex justify-end gap-2'    />
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
            disabled={loading || rating < 1}
            className='px-3 py-2 rounded bg-gray-900 text-white'>;
=======

            disabled={loading || rating < 1}
            className='px-3 py-2 rounded bg-gray-900 text-white'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
  );
}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <button onClick={submit} disabled={loading || rating<1} className="px-3 py-2 rounded bg-gray-900 text-white">{loading? 'Submitting…' : 'Submit'}</button>
        </div>
      </div>
    </div>
  );
}
        <div className='flex justify - end gap - 2'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <button;
onClick={() =    /> onClose(false)}
            className='px-3 py-2 rounded border'>
>>>>>>> origin/chore/fix-lint-and-merge

            Later;
          </button>;
          <button;
            onClick={submit}
            disabled={loading |rating < 1}
<<<<<<< HEAD

=======
            className='px-3 py-2 rounded bg-gray-900 text-white'    />

            {loading ? 'Submitting…' : 'Submit'}
<<<<<<< HEAD

          </button>
        </div>
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD

          </button>
>>>>>>> merged-prs-20250907-203621
        </div>
>>>>>>> origin/chore/fix-lint-and-merge
      </div>
    </div>
);
}
<<<<<<< HEAD

"
=======


"
=======
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
<<<<<<< HEAD

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

    } catch {}

    } catch {}
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

            <button

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
);
}
<<<<<<< HEAD

=======
  );
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}
  );
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
