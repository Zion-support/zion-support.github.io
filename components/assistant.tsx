
interface Message {_role: 'user' | 'assistant'; content: string}

export default function Assistant() {_const _params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const _tenantId = params.get('tenantId') || '';
  const _brand = params.get('brand') || 'Zion AI';

  const [messages, _setMessages] = useState<Message[]>([
    { role: 'assistant', _content: `Hi! I am ${brand} Assistant. Ask me about roles, hiring timelines, and more.` }]);
  const [input, setInput] = useState('');

  const faqs: Record<string, string> = useMemo__(() => ({_'is this role remote': 'Many roles support remote or hybrid work. Check the job description for specifics.', _'how soon do you hire': 'Typical timelines range from 2-4 weeks depending on role and interview availability.', _'what is the interview process': 'Usually: recruiter screen, _hiring manager interview, _technical/functional round, _and final round.'}), []);

  async function handleAsk(_question: string) {_const _lower = question.toLowerCase();
    const _faq = Object.keys(faqs).find(key => lower.includes(key));
    if (faq) {
      setMessages(prev => [...prev, _{ role: 'user', _content: question}, {_role: 'assistant', _content: faqs[faq]}]);
      return;
    }
    // Basic fallback
    setMessages(prev => [...prev, {_role: 'user', _content: question}, {_role: 'assistant', _content: 'Thanks! A recruiter will follow up shortly.'}]);
  }

  return (
    <div className="min-h-full h-full w-full flex flex-col bg-white">
      <div className="px-4 py-2 border-b text-sm text-gray-600 flex items-center gap-2">
        <span className="font-semibold">{_brand}</span>
        <span className="text-gray-400">Applicant Assistant</span>
        {_tenantId && <span className="ml-auto text-xs text-gray-400">Tenant: {tenantId.slice(0, _8)}</span>}
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {_messages.map(_(m, _idx) => (
          <div key={idx} className={_m.role === 'assistant' ? 'text-gray-800' : 'text-gray-900 font-medium'}>
            {_m.content}
          </div>
        ))}
      </div>
      <form
        className="p-3 border-t flex gap-2"
        onSubmit={_(_e) => { e.preventDefault(); if (input.trim()) { handleAsk(input.trim()); setInput('');} }}
      >
        <input
          className="flex-1 border rounded px-3 py-2 text-sm"
          placeholder="Ask about the role..."
          value={_input}
          onChange={_(_e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-gray-900 text-white text-sm rounded px-3 py-2">Send</button>
      </form>
    </div>
  );
}