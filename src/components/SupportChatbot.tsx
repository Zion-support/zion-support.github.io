
        if (!res.ok) throw new Error(`API error: ${res.status}`),
        setMessages(prev => [...prev, { id: botId, role: 'assistant', message: '' }]),
