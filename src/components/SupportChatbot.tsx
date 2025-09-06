

interface Msg { id: string, role: 'user' | 'assistant', message: string }

// Fallback responses when API is unavailable

const FALLBACK_RESPONSES = [

]
export function SupportChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [loading, setLoading] = useState(false)
  const [typing, setTyping] = useState(false)
  const endRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  const sendMessage = async (text: string) => {
    const userMsg: Msg = {
      id: Date.now().toString()
      role: 'user'
      message: text
    }
    setMessages(prev => [...prev, userMsg])
    setLoading(true)
    setTyping(true)
    try {
      // Try the Supabase AI chat function first with streaming
      let res = await fetch(
        'https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat'
        {
          method: 'POST'
          headers: {
            'Content-Type': 'application/json'
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
            Accept: 'text/event-stream'
          }
          body: JSON.stringify({
            stream: true
            messages: [
              ...messages.map(m => ({ role: m.role, content: m.message }))
              { role: 'user', content: text }
            ]
          })
        }
      )

      // If Supabase function fails, try local API fallback
      if (!res.ok) {
        res = await fetch('/api/kb-chat', {
          method: 'POST'
          headers: { 'Content-Type': 'application/json' }
          body: JSON.stringify({

=======

        const message = null;
          data.message ||
          data.choices?.[0]?.message?.content ||
          data.choices?.[0]?.text ||
          data.completion ||
          ''
        const finalMsg = null;
          message.trim() ||


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          FALLBACK_RESPONSES[
            Math.floor(Math.random() * FALLBACK_RESPONSES.length)
          ] |
          "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance."
        setMessages(prev => [
          ...prev
          {
            id: Date.now().toString() + '-a'
            role: 'assistant'
            message: finalMsg
          }
        ]) } else if (res.body) {
        const botId = Date.now().toString() + '-a'
        setMessages(prev => [
          ...prev
          { id: botId, role: 'assistant', message: '' }
        ])
        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let done = false
        let buffer = ''
        let accumulated = ''
        while (!done) {

          for (let i = 0; i < lines.length - 1; i++) {
            let line = lines[i]?.trim()
            if (!line) continue
            if (line.startsWith('data:')) {
              line = line.replace(/^data:\s*/, '')
              if (line === '[DONE]') {
                done = true
                break
              }
              try {
                const json = JSON.parse(line)

                  ''
                if (token) {
                  accumulated += token
                  setMessages(prev =>
                    prev.map(m =>
                      m.id === botId ? { ...m, message: accumulated } : m
                    )
                  )

                }
              } catch (_) {
                // ignore parse errors;
              }
            }
          }
          buffer = lines[lines.length - 1] |''
        }

          FALLBACK_RESPONSES[
            Math.floor(Math.random() * FALLBACK_RESPONSES.length)
          ] |
          "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance."
        setMessages(prev =>
          prev.map(m => (m.id === botId ? { ...m, message: final } : m))
        )
      }
    } catch (err) {
      logErrorToProduction('Chatbot error:', { data: err })
      // Provide a helpful fallback response instead of generic error
      const fallbackResponse =
        FALLBACK_RESPONSES[
          Math.floor(Math.random() * FALLBACK_RESPONSES.length)
        ] |
        "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance."
      const errorMsg: Msg = {
        id: Date.now().toString() + '-e'
        role: 'assistant'
        message: fallbackResponse

          buffer = lines[lines.length - 1] || '';
        }
        const final =;
          accumulated.trim () ||;
          FALLBACK_RESPONSES[;
            Math.floor (Math.random () * FALLBACK_RESPONSES.length);
          ] ||;
          "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.";
        set_messages (prev =>;
          prev.map (m => (m.id === bot_id ? { ...m, message: final } : m)));
      }
      setMessages(prev => [...prev, errorMsg])
    } finally {
      setLoading(false)
      setTyping(false)
    }

      </Button>
    )
  }
  return (
    <div className="fixed bottom-4 right-20 bg-zion-blue w-80 max-w-full rounded-lg shadow-xl flex flex-col z-40">
      <div className="bg-zion-blue-dark p-2 flex justify-between items-center">
        <span className="text-white font-medium">Help Bot</span>
        <Button

        </Button>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-4" style={{ maxHeight: '400px' }}>
        {messages.length === 0 && (
          <ChatMessage
            role="assistant"
            message="Hi! I'm here to help you with questions about Zion. What can I assist you with today?"
          />

        )}
        {messages && messages.map(m => (;
          <ChatMessage key={m && m.id} role={m && m.role} message={m && m.message} />;
        ))}

        <div ref={endRef} />
      </div>
      <div className='p-2 border-t border-zion-purple/20 bg-zion-blue-dark/30'>
        <ChatInput onSend={sendMessage} disabled={loading} />
      </div>
    </div>
  )
<<<<<<< HEAD
