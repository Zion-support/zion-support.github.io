

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
      setLoading(false);    }
  }

  return (

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





