<<<<<<< HEAD

export default function CoachWidget() {;
  const [input, setInput] = useState('');
  const [reply, setReply] = useState<string | null>(null),
  const [loading, setLoading] = useState(false);
  async function ask() {
    if (!input.trim()) return;
    setLoading(true);
    try {

      const resp = await fetch('/api/learn/coach', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }

=======
import React, { useState } from 'react';



import React, { useState } from 'react';
export default function CoachWidget() {
  const [input, setInput] = useState($2);
  const [reply, setReply] = useState<string | null>(null),
  const [loading, setLoading] = useState($2);
  async function ask() {
    if (!input.trim()) return,
    setLoading($2);
    try {
      const resp = await fetch('/api/learn/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input})
      }),
      const data = await resp.json($2);
      setReply(data.text || '')
        body: JSON.stringify({ prompt: input })
        body: JSON.stringify({ prompt: input ;})
      });
      const data = await resp.json();
      setReply(data.text |'');
    } finally {}



  return (



  return (      });
      const data = await resp.json();'
      setReply(data.text |'')

      const data = await resp && resp.json();
      setReply(data && data.text || '');
    } finally {;
      setLoading(false);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  }
  return (





import React, { useState } from 'react';

<<<<<<< HEAD

export default function CoachWidget() {
  const [input, setInput] = useState('');


const [reply, setReply] = useState<string | null>(null),
  const [loading, setLoading] = useState(false);

=======
export default function CoachWidget() {
  const [input, setInput] = useState('');

>>>>>>> origin/cursor/delete-old-data-records-6bba
  async function ask() {
    if (!input.trim()) return;
    setLoading(true);
    try {
<<<<<<< HEAD


=======
      const resp = await fetch('/api/learn/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input})
      }),
      const data = await resp.json($2);
      setReply(data.text || '')
    } finally {
      setLoading(false)
    }
  }

  return (

    </div>;
  );
}
    <div className="border rounded p-3">
      <div className="font-medium mb-2">ZionGPT Coach</div>
      <div className="flex gap-2">
        <input className="flex-1 border rounded px-3 py-2 bg-white dark:bg-black" placeholder="Ask for help..." value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={ask} className="px-3 py-2 bg-blue-600 text-white rounded" disabled={loading}>{loading ? '...' : 'Ask'}</button>
      </div>
      {reply && <div className="mt-2 text-sm text-gray-800 dark:text-gray-200">{reply}</div>}
    </div>
  );
}
  return (      });
    }
  );
}'
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState } from 'react';
export default /**
 * CoachWidget - Function description
 */
function CoachWidget() {
  const [input, set_input] = useState ('');
  const [reply, set_reply] = useState < string | null>(null);
  const [loading, set_loading] = useState (false);
;
  async /**
 * ask - Function description
 */
function ask() {
    if () return) {
  $2
}
    set_loading (true);
    try {
      const resp = await fetch ('/api / learn / coach', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ prompt: input }),
      });
      const data = await resp.json ();
      set_reply (data.text || '');
    } finally {
      set_loading (false);    }
  }
  return (      });
      const data = await resp.json ();
      set_reply (data.text || '');
    } finally {
      set_loading (false);
    }
  }
  return (
    <div className='border rounded p - 3'>;
      <div className='font - medium mb - 2'>ZionGPT Coach</div>;
      <div className='flex gap - 2'>;
        <input;
          className='flex - 1 border rounded px - 3 py - 2 bg - white dark:bg - black';
          placeholder='Ask for help...';export default function CoachWidget() {const [input, setInput] = useState('')const [reply, setReply] = useState<string | null>(null),const [loading, setLoading] = useState(false)async function ask() {if (!input.trim()) return;
    setLoading(true)try {const resp = null;
      setReply(data.text || '')} finally {setLoading(false)}
  }
  return (<div className='border rounded p-3'>;
      <div className='font-medium mb-2'>ZionGPT Coach</div>;
      <div className='flex gap-2'>;
        <input;
          className='flex-1 border rounded px-3 py-2 bg-white dark:bg-black';
          placeholder='Ask for help...';
          placeholder='Ask for help...';
      const resp = null;
      setReply(data.text || '')'
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    } finally {
      setLoading(false)
    }
  }
<<<<<<< HEAD

  return (
<div className='border rounded p-3'>
      <div className='font-medium mb-2'>ZionGPT Coach</div>
      <div className='flex gap-2'>
        <input
          className='flex-1 border rounded px-3 py-2 bg-white dark:bg-black'
          placeholder='Ask for help...'
origin/cursor/automate-test-improve-and-merge-code-2533
=======
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          onClick={ask}
          className='px-3 py-2 bg-blue-600 text-white rounded'
          disabled={loading}>{loading ? '...' : 'Ask'}
        </button>
      {reply && (
        <div className='mt-2 text-sm text-gray-800 dark:text-gray-200'>
          {reply}
>>>>>>> origin/cursor/delete-old-data-records-6bba

        </div>
      )}
    </div>
  );


<<<<<<< HEAD




=======
  );
>>>>>>> origin/cursor/delete-old-data-records-6bba
