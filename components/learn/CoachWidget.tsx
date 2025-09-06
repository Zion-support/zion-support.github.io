import React, { useState } from 'react';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function CoachWidget() {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState<string | null>(null),
  const [loading, setLoading] = useState(false);
  async function ask() {
    if (!input.trim()) return;
    setLoading(true);
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const resp = null;
      setReply(data.text || '')
=======
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
  return (      });
      const data = await resp.json();
      setReply(data.text |'')
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
