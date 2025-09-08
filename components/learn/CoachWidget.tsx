
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

    }
  }
  return (





import React, { useState } from 'react';


export default function CoachWidget() {
  const [input, setInput] = useState('');


const [reply, setReply] = useState<string | null>(null),
  const [loading, setLoading] = useState(false);

  async function ask() {
    if (!input.trim()) return;
    setLoading(true);
    try {


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

    } finally {
      setLoading(false)
    }
  }

  return (
<div className='border rounded p-3'>
      <div className='font-medium mb-2'>ZionGPT Coach</div>
      <div className='flex gap-2'>
        <input
          className='flex-1 border rounded px-3 py-2 bg-white dark:bg-black'
          placeholder='Ask for help...'
origin/cursor/automate-test-improve-and-merge-code-2533

        </div>
      )}
    </div>
  );






