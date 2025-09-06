<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useMemo, useState } from 'react';
interface Message { role: 'user' | 'assistant', content: string }

export default function Assistant() {
  const params = null;
      return
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
import {useEffect, useMemo, useState} from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import {useEffect, useMemo, useState} from 'react';
interface Message {
  role: 'user' | 'assistant';
  content: string;
=======
import { useEffect, useMemo, useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function Assistant() {
  const params =
    typeof window !== 'undefined'
<<<<<<< HEAD
      ? new URLSearchParams(window.location.search)
<<<<<<< HEAD
      : new URLSearchParams();  const tenantId = params.get('tenantId') |'';
  const brand = params.get('brand') |'Zion AI';
  const [messages, setMessages] = useState<Message[]>([interface Message { role: 'user' | 'assistant', content: string }
export default function Assistant() {
=======
      ? new URLSearchParams(window.location.search);
      : new URLSearchParams();  const tenantId = params.get('tenantId') || '';
  const brand = params.get('brand') || 'Zion AI';

  const [messages, setMessages] = useState<Message[]>([interface Message { role: 'user' | 'assistant', content: string }

export default function Assistant() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const tenantId = params.get('tenantId') |'';
  const brand = params.get('brand') |'Zion AI';
=======
      : new URLSearchParams();
  const tenantId = params.get('tenantId') || '';
  const brand = params.get('brand') || 'Zion AI';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant'
      content: `Hi! I am ${brand} Assistant. Ask me about roles, hiring timelines, and more.`
    }
  ]);
  const [input, setInput] = useState('');
  const faqs: Record<string, string> = useMemo(
    () => ({
      'is this role remote':
        'Many roles support remote or hybrid work. Check the job description for specifics.'
      'how soon do you hire':
        'Typical timelines range from 2-4 weeks depending on role and interview availability.'
      'what is the interview process':
        'Usually: recruiter screen, hiring manager interview, technical/functional round, and final round.'
    })
    []
  );
<<<<<<< HEAD
    { role: 'assistant', content: `Hi! I am ${brand} Assistant. Ask me about roles, hiring timelines, and more.` }]);
  const [input, setInput] = useState('');
  const faqs: Record<string, string> = useMemo(() => ({
    'is this role remote': 'Many roles support remote or hybrid work. Check the job description for specifics.how soon do you hire': 'Typical timelines range from 2-4 weeks depending on role and interview availability.what is the interview process': 'Usually: recruiter screen, hiring manager interview, technical/functional round, and final round.'}), []);
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  async function handleAsk(question: string) {
    const lower = question.toLowerCase();
    const faq = Object.keys(faqs).find(key => lower.includes(key))
    if (faq) {
      setMessages(prev => [
        ...prev
        { role: 'user', content: question }
        { role: 'assistant', content: faqs[faq] }
      ]);
      return;

    }
    // Basic fallback
    setMessages(prev => [
      ...prev
      { role: 'user', content: question }
      {
        role: 'assistant'
        content: 'Thanks! A recruiter will follow up shortly.'
      }
    ]);
  }
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div className='min-h-full h-full w-full flex flex-col bg-white'>
      <div className='px-4 py-2 border-b text-sm text-gray-600 flex items-center gap-2'>
        <span className='font-semibold'>{brand}</span>
        <span className='text-gray-400'>Applicant Assistant</span>
        {tenantId && (
          <span className='ml-auto text-xs text-gray-400'>
            Tenant: {tenantId.slice(0, 8)}
          </span>
        )}
      </div>
      <div className='flex-1 overflow-auto p-4 space-y-3'>
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={
              m.role === 'assistant'
                ? 'text-gray-800'
                : 'text-gray-900 font-medium'
            }
<<<<<<< HEAD
          >            {m.content}    }
    // Basic fallback
    setMessages(prev => [...prev, { role: 'user', content: question }, { role: 'assistant', content: 'Thanks! A recruiter will follow up shortly.' }])
  }
  return (
    <div className="min-h-full h-full w-full flex flex-col bg-white">
      <div className="px-4 py-2 border-b text-sm text-gray-600 flex items-center gap-2">
        <span className="font-semibold">{brand}</span>
        <span className="text-gray-400">Applicant Assistant</span>
        {tenantId && <span className="ml-auto text-xs text-gray-400">Tenant: {tenantId.slice(0, 8)}</span>}
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {messages.map((m, idx) => (
          <div key={idx} className={m.role === 'assistant' ? 'text-gray-800' : 'text-gray-900 font-medium'}>
=======
          >
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            {m.content}
          </div>
        ))}
      </div>
      <form
        className='p-3 border-t flex gap-2'
        onSubmit={e => {
          e.preventDefault();
          if (input.trim()) {
            handleAsk(input.trim());
            setInput('');
          }
        }}
      >
        <input
          className='flex-1 border rounded px-3 py-2 text-sm'
          placeholder='Ask about the role...'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          type='submit'
          className='bg-gray-900 text-white text-sm rounded px-3 py-2'
        >
          Send
        </button>
      </form>
    </div>
<<<<<<< HEAD
  );      >
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
<<<<<<< HEAD
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

}
=======
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
