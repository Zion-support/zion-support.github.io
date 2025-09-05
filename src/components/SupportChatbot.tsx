

interface Msg {_id: string; role: 'user' | 'assistant'; message: string;}

// Fallback responses when API is unavailable
const _FALLBACK_RESPONSES = [
  "I'm here to help! You can browse our help documentation, contact support at support@ziontechgroup.com, or try asking your question in a different way.",
  "Thanks for reaching out! While I'm having trouble connecting to my knowledge base, I can suggest checking our FAQ section or contacting our support team directly.",
  "I understand you need assistance. For immediate help, please visit our help center or reach out to support@ziontechgroup.com.",
  "I'm currently experiencing technical difficulties, but I'd be happy to help you get to the right resource. Try browsing our documentation or contacting support.",
  "While I work on resolving my connection issues, you can find helpful information in our help section or contact our support team for immediate assistance."
];

export function SupportChatbot() {_const [open, _setOpen] = useState(false);
  const [messages, _setMessages] = useState<Msg[]>([]);
  const [loading, _setLoading] = useState(false);
  const [typing, _setTyping] = useState(false);
  const _endRef = useRef<HTMLDivElement | null>(null);

  useEffect__(() => { endRef.current?.scrollIntoView({ behavior: 'smooth'}); }, [messages]);

  const _sendMessage = async (_text: string) => {_const userMsg: Msg = { id: Date.now().toString(), _role: 'user', _message: text};
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);
    setTyping(true);
    
    try {_// Try the Supabase AI chat function first with streaming
      let _res = await fetch(_'https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat', _{
        method: 'POST', _headers: {
          'Content-Type': 'application/json', _'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`, _Accept: 'text/event-stream'
        }, _body: JSON.stringify({_stream: true, _messages: [...messages.map(m => ({ role: m.role, _content: m.message})), {_role: 'user', _content: text}]
        })
      });

      // If Supabase function fails, try local API fallback
      if (_!res.ok) {_res = await fetch('/api/kb-chat', _{
          method: 'POST', _headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({_messages: [...messages.map(m => ({ role: m.role, _content: m.message})), {_role: 'user', _content: text}]
          })
        });
        if (!res.ok) throw new Error(`API error: ${_res.status}`);
        const _data = await res.json().catch__(() => ({}));
        const _message = data.message || data.choices?.[0]?.message?.content || data.choices?.[0]?.text || data.completion || '';
        const _finalMsg = message.trim() ||
          (FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)] || "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.");
        setMessages(prev => [...prev, {_id: Date.now().toString() + '-a', _role: 'assistant', _message: finalMsg}]);
      } else if (res.body) {_const _botId = Date.now().toString() + '-a';
        setMessages(prev => [...prev, _{ id: botId, _role: 'assistant', _message: ''}]);
        const _reader = res.body.getReader();
        const _decoder = new TextDecoder();
        let _done = false;
        let _buffer = '';
        let _accumulated = '';
        while (!done) {_const _result = await reader.read();
          done = result.done;
          buffer += decoder.decode(result.value || new Uint8Array());
          const _lines = buffer.split('\n');
          for (let i = 0; i < lines.length - 1; i++) {
            let _line = lines[i]?.trim();
            if (!line) continue;
            if (line.startsWith('data:')) {
              line = line.replace(/^data:\s*/, _'');
              if (line === '[DONE]') {
                done = true;
                break;}
              try {_const _json = JSON.parse(line);
                const _token = json.choices?.[0]?.delta?.content || json.choices?.[0]?.text || '';
                if (token) {
                  accumulated += token;
                  setMessages(prev => prev.map(m => m.id === botId ? { ...m, _message: accumulated} : m));
                }
              } catch (_) {_// ignore parse errors}
            }
          }
          buffer = lines[lines.length - 1] || '';
        }
        const _final = accumulated.trim() ||
          (FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)] || "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.");
        setMessages(prev => prev.map(m => m.id === botId ? {_...m, _message: final} : m));
      }
    } catch (err) {_logErrorToProduction('Chatbot error:', _{ data: err});
      
      // Provide a helpful fallback response instead of generic error
      const _fallbackResponse = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)] || "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.";
      const errorMsg: Msg = {_id: Date.now().toString() + '-e', _role: 'assistant', _message: fallbackResponse};
      setMessages(prev => [...prev, errorMsg]);
    } finally {_setLoading(false);
      setTyping(false);}
  };

  if (!open) {_return (_<Button 
        onClick={() => setOpen(true)} 
        size="icon" 
        variant="outline" 
        className="fixed bottom-4 right-20 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-40" 
        aria-label="Open help chat"
      >
        <MessageSquare className="h-5 w-5" />
      </Button>
    );
  }

  return (_<div className="fixed bottom-4 right-20 bg-zion-blue w-80 max-w-full rounded-lg shadow-xl flex flex-col z-40">
      <div className="bg-zion-blue-dark p-2 flex justify-between items-center">
        <span className="text-white font-medium">Help Bot</span>
        <Button
          variant="ghost"
          size="icon"
          className="text-white"
          onClick={_() => setOpen(false)}
          aria-label="Close help bot"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-4" style={_{ maxHeight: '400px'}}>
        {_messages.length === 0 && (
          <ChatMessage 
            role="assistant" 
            message="Hi! I'm here to help you with questions about Zion. What can I assist you with today?" 
          />
        )}
        {_messages.map(m => (
          <ChatMessage key={m.id} role={_m.role} message={_m.message} />
        ))}
        {_typing && (
          <ChatMessage role="assistant" message="..." />
        )}
        <div ref={_endRef} />
      </div>
      <div className="p-2 border-t border-zion-purple/20 bg-zion-blue-dark/30">
        <ChatInput onSend={_sendMessage} disabled={_loading} />
      </div>
    </div>
  );
}
