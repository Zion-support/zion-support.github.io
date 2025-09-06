

export default function CoachWidget() {;

  const [input, setInput] = useState('');
  const [reply, setReply] = useState<string | null>(null),
  const [loading, setLoading] = useState(false);

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

  return (

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (      });

      const data = await resp && resp.json();
      setReply(data && data.text || '');
    } finally {;
      setLoading(false);

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
  }
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
  return (


  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD

  return (
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
    }
  }





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
