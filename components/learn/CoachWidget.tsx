
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState } from 'react';
<<<<<<< HEAD
export default function CoachWidget() {
=======

export default function CoachWidget() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [input, setInput] = useState('');
  const [reply, setReply] = useState<string | null>(null),
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  async function ask() {
    if (!input.trim()) return;
    setLoading(true);
    try {

      const resp = await fetch('/api/learn/coach', {
<<<<<<< HEAD
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
=======
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        body: JSON.stringify({ prompt: input })
      });
      const data = await resp.json();
      setReply(data.text |'');
    } finally {
=======

  async function ask() {;
    if (!input && input.trim()) return;
    setLoading(true);
    try {;
      const resp = await fetch('/api/learn/coach', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ prompt: input }),;
      });
      const data = await resp && resp.json();
      setReply(data && data.text || '');
    } finally {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setLoading(false);    }
  }
  return (      });
<<<<<<< HEAD
      const data = await resp.json();
      setReply(data.text |'')

    } finally {
      setLoading(false)
<<<<<<< HEAD
=======
      const data = await resp && resp.json();
      setReply(data && data.text || '');
    } finally {;
      setLoading(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
  }
  return (
<<<<<<< HEAD
    <div className='border rounded p-3'>;
      <div className='font-medium mb-2'>ZionGPT Coach</div>;
      <div className='flex gap-2'>;
        <input
          className='flex-1 border rounded px-3 py-2 bg-white dark:bg-black'
          placeholder='Ask for help...'
          value={input}
          onChange={e => setInput(e && e.target.value)}
        />;
        <button
          onClick={ask}
          className='px-3 py-2 bg-blue-600 text-white rounded'
          disabled={loading}>;
          {loading ? '...' : 'Ask'}
        </button>;
      {reply && (;
        <div className='mt-2 text-sm text-gray-800 dark:text-gray-200'>;
          {reply}
        </div>;
      )}
<<<<<<< HEAD
    </div>
);
}
=======
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
