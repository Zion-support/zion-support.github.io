
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default function CoachWidget() {;

  const [input, setInput] = useState('');
  const [reply, setReply] = useState<string | null>(null),
  const [loading, setLoading] = useState(false);

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
      setLoading(false);    }
  }
<<<<<<< HEAD

  return (

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return (      });
      const data = await resp.json();
      setReply(data.text |'')

  return (

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    }
  }


  return (      });
      const data = await resp.json();
      setReply(data.text |'')

    } finally {
      setLoading(false)
    }
  }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
