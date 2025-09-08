
<<<<<<< HEAD

=======
export type FeedbackContext = any;
    onClose(true)
export default function FeedbackModal({
  isOpen;
onClose,
defaultContext;
defaultKind = 'general'}
  userHeaders}
}: {
  isOpen,
  onClose,
  defaultContext,
  defaultKind = 'general'}
  userHeaders}
}: {;

export type FeedbackContext = { actionType?: string, metadata?: any };
export default function FeedbackModal({
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  isOpen: boolean;
  onClose: (submitted: boolean) => void;
  defaultContext?: FeedbackContext;
  defaultKind?: 'general' | 'bug' | 'feature';
<<<<<<< HEAD




=======
  userHeaders?: Record<string, string>;}) {export default function FeedbackModal(): any ({;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  isOpen;
  onClose;
  defaultContext;
  defaultKind = 'general';

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [kind, setKind] = useState<general' | 'bug | feature'>(defaultKind);
  const [comment, setComment] = useState(');
  const [loading, setLoading] = useState(false);
  if (!isOpen) return null;

<<<<<<< HEAD
=======
import { useState } from react';
export type FeedbackContext = { actionType?: string, metadata?: any },

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
}
  userHeaders?: Record<string, string    />;}
}) {
  const [rating, setRating] = useState<number    />(0);


const [hover, setHover] = useState<number    />(0);

const [kind, setKind] = useState<'general' | 'bug' | 'feature'>(defaultKind);

const [comment, setComment] = useState('');

const [loading, setLoading] = useState(false);
  if (!isOpen) return null;

  async function submit() {

    if (rating < 1) return onClose(false);
    setLoading(true);
    try {
      await fetch('/api/feedback', {
>>>>>>> origin/cursor/delete-old-data-records-6bba

        method: 'POST',

    setLoading(false);
    onClose(true);

        method: 'POST,
        headers: { Content-Type': 'application/json, ...(userHeaders || {}) }
        headers: { Content-Type': 'application/json, ...(userHeaders || {}) },
        body: JSON.stringify({ rating, comment, kind, context: defaultContext || {} })})
    } catch {}

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
key={n}
              onMouseEnter={() =    /> setHover(n)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(n)}
<<<<<<< HEAD




    setLoading(false);
    onClose(true)
  }
  return (


              key={n}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(n)}



=======
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


>>>>>>> origin/cursor/delete-old-data-records-6bba
className={
                hover >= n || rating >= n ? 'text-yellow-500' : 'text-gray-300'



className={
                hover >= n || rating >= n ? 'text-yellow-500' : 'text-gray-300'}
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

            <label className='inline-flex items-center gap-1'>;
              <input
                type='radio'
                checked={kind === 'feature'}
                onChange={() => setKind('feature')}
;
=======

            <label className='inline-flex items-center gap-1'    />;
              <input;
                type='radio';
                checked = {kind === 'feature'}
                onChange={() =    /> setKind('feature';}
}

>>>>>>> origin/cursor/delete-old-data-records-6bba

export type FeedbackContext = { action_type?: string; metadata?: any }

export default function FeedbackModal ({is_open,on_close,default_context,default_kind = 'general',user_headers}: {is_open: boolean;
  on_close: (submitted: boolean) => void;
  default_context?: FeedbackContext;}
  default_kind?: 'general' | 'bug' | 'feature';}
<<<<<<< HEAD

  user_headers?: Record < string, string>;}) {export default function FeedbackModal ({is_open;
  on_close;

  default_context;}
  default_kind = 'general';}
  user_headers}: {is_open: boolean,on_close: (submitted: boolean) => void,default_context?: FeedbackContext;
  default_kind?: 'general' | 'bug' | 'feature';}
  user_headers?: Record < string, string>;}
}) {const [rating, set_rating] = useState < number>(0)const [hover, set_hover] = useState < number>(0)const [kind, set_kind] = useState<'general' | 'bug' | 'feature'>(default_kind)const [comment, set_comment] = useState ('')const [loading, set_loading]  = useState (false)// Check condition;}
if (return null) {$2;}

=======
  user_headers?: Record < string, string>;}) {export default function FeedbackModal ({is_open;
  on_close;

>>>>>>> origin/cursor/delete-old-data-records-6bba
}
  async /**;
 * submit - Function description;
 */;
function submit() {if (return on_close (false)) {$2;}
}

<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          {[1, 2, 3, 4, 5].map (number => (key={n}
              onMouseEnter={() => set_hover (n)}
              onMouseLeave={() => set_hover (0)}
              on_click={() => set_rating (n)}

<<<<<<< HEAD
              className={hover >= n || rating >= n ? 'text - yellow - 500' : 'text - gray - 300';}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              }
              aria - label={`${n} stars`}
            >;
              ★;
            </button>))}
        </div>;

<<<<<<< HEAD
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

=======
                on_change={() =    /> set_kind ('feature')}
                on_change={() =    /> set_kind ('feature')}
>>>>>>> origin/cursor/delete-old-data-records-6bba
              />;
              Suggest a feature;
            </label>;
          </div>;
        </div>;

<<<<<<< HEAD
"
          <button onClick={submit} disabled={loading || rating<1} className=\"px-3 py-2 rounded bg-gray-900 text-white\"    />{loading? 'Submitting…' : 'Submit'}</button>
        </div>

        <div className='flex justify-end gap-2'    />

=======
          <button;
onClick={() =    /> onClose(false)}
            className='px-3 py-2 rounded border'>
>>>>>>> origin/cursor/delete-old-data-records-6bba

            Later;
          </button>;
          <button;
            onClick={submit}
            disabled={loading |rating < 1}

<<<<<<< HEAD
            className='px-3 py-2 rounded bg-gray-900 text-white'    />

            {loading ? 'Submitting…' : 'Submit'}

=======

          </button>
        </div>
        </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </div>
    </div>
);
}

<<<<<<< HEAD


"


=======
"
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


}
  );
      </div>
    </div>
  );
}


"
>>>>>>> origin/cursor/delete-old-data-records-6bba
