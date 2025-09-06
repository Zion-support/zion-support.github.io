import React, { useState } from 'react';
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
        body: JSON.stringify({ prompt: input })
      });
      const data = await resp.json();
      setReply(data.text |'');
    } finally {
      setLoading(false);    }
  }

=======

  return (


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (      });
      const data = await resp.json();
      setReply(data.text |'')
=======

  return (
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

    } finally {
      setLoading(false)
    }
  }





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
