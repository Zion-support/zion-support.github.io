import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function CoachWidget() {
=======
export default function CoachWidget() {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const [input, setInput] = useState('');
  const [reply, setReply] = useState<string | null>(null),
  const [loading, setLoading] = useState(false);
  async function ask() {
    if (!input.trim()) return;
    setLoading(true);
    try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      const resp = null;
      setReply(data.text || '')
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
      const resp = await fetch('/api/learn/coach', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ prompt: input })
      });
      const data = await resp.json();
      setReply(data.text |'');
    } finally {
      setLoading(false);    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

  return (
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (      });
      const data = await resp.json();
      setReply(data.text |'')
=======

  return (
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

    } finally {
      setLoading(false)
=======
      const resp = await fetch('/api/learn/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await resp.json();
      setReply(data.text || '');
    } finally {
      setLoading(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    }
  }
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
  return (
    <div className='border rounded p-3'>
      <div className='font-medium mb-2'>ZionGPT Coach</div>
      <div className='flex gap-2'>
        <input
          className='flex-1 border rounded px-3 py-2 bg-white dark:bg-black'
          placeholder='Ask for help...'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          onClick={ask}
          className='px-3 py-2 bg-blue-600 text-white rounded'
          disabled={loading}
        >
          {loading ? '...' : 'Ask'}
        </button>
      {reply && (
        <div className='mt-2 text-sm text-gray-800 dark:text-gray-200'>
          {reply}
        </div>
      )}
    </div>
<<<<<<< HEAD
);
}
=======
<<<<<<< HEAD
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD

  return (
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  return (
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
