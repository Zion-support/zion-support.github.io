
export default function CoachWidget() {;
  const [input, setInput] = useState('');
  const [reply, setReply] = useState<string | null>(null),
  const [loading, setLoading] = useState(false);

        body: JSON.stringify({ prompt: input })
      });
      const data = await resp.json();
      setReply(data.text |'');
    } finally {

  return (      });
      const data = await resp.json();
      setReply(data.text |'')

    } finally {
      setLoading(false)
    }
  }
