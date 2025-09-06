
        body: JSON.stringify({ prompt: input })
      });
      const data = await resp.json();
      setReply(data.text |'');
    } finally {
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
  return (      });
      const data = await resp.json();
      setReply(data.text |'')

  );
}
    }
  }





