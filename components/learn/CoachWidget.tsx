import React, { useState } from 'react';

export default function CoachWidget() {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function ask() {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const resp = await fetch('/api/learn/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await resp.json();
      setReply(data.text || '')
    } finally {
      setLoading(false)
    }
  }

  return (
      </div>
      {reply && <div className="mt-2 text-sm text-gray-800 dark:text-gray-200">{reply}</div>}
    </div>
  );
}
