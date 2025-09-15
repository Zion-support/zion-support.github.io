
interface Message { role: 'user' | 'assistant'; content: string }

export default function Assistant() {
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();

  async function handleAsk(question: string) {
    const lower = question.toLowerCase();
    const faq = Object.keys(faqs).find(key => lower.includes(key));
    if (faq) {
  }

  return (
    <div className="min-h-full h-full w-full flex flex-col bg-white">
      <div className="px-4 py-2 border-b text-sm text-gray-600 flex items-center gap-2">
        <span className="font-semibold">{brand}</span>
        <span className="text-gray-400">Applicant Assistant</span>
          <div key={idx} className={m.role === 'assistant' ? 'text-gray-800' : 'text-gray-900 font-medium'}>
            {m.content}
          </div>
        ))}
      </div>
      <form
        className="p-3 border-t flex gap-2"
      >
        <input
          className="flex-1 border rounded px-3 py-2 text-sm"
          placeholder="Ask about the role..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-gray-900 text-white text-sm rounded px-3 py-2">Send</button>
      </form>
    </div>
  );
}