      const resp = await fetch('/api/learn/coach', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
=======
=======

export default function CoachWidget() {;

  const [input, setInput] = useState('');
  const [reply, setReply] = useState<string | null>(null),
  const [loading, setLoading] = useState(false);

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },


=======


=======
  return (



  return (
    }
  }
  return (


  async function ask() {
    if (!input.trim()) return,
    setLoading(true),
    try {
      const resp = await fetch('/api/learn/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input })
      }),
      const data = await resp.json()
      setReply(data.text || '')
  return (      });
      const data = await resp.json();
      setReply(data.text |'')
  return (

    } finally {
      setLoading(false)
    }
  }
    }
  }





>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
