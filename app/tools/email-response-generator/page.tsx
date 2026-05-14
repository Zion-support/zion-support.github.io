'use client';
import React, { useState, useCallback } from 'react';

type Tone = 'professional' | 'friendly' | 'formal' | 'casual' | 'empathetic' | 'persuasive';
type Purpose = 'reply' | 'follow_up' | 'introduction' | 'thank_you' | 'apology' | 'request' | 'announcement';

const TONE_DESCRIPTIONS: Record<Tone, string> = {
  professional: 'Business-appropriate, clear, and polished',
  friendly: 'Warm, approachable, and conversational',
  formal: 'Highly structured, traditional, and respectful',
  casual: 'Relaxed, informal, and straightforward',
  empathetic: 'Understanding, supportive, and considerate',
  persuasive: 'Compelling, action-oriented, and convincing',
};

const PURPOSE_DESCRIPTIONS: Record<Purpose, string> = {
  reply: 'Respond to an existing email thread',
  follow_up: 'Follow up on a previous conversation or action',
  introduction: 'Introduce yourself or your company',
  thank_you: 'Express gratitude or appreciation',
  apology: 'Address a concern or apologize for an issue',
  request: 'Ask for something — information, meeting, action',
  announcement: 'Share news, updates, or changes',
};

function generateEmailResponse(
  context: string,
  tone: Tone,
  purpose: Purpose,
  recipientName: string,
  senderName: string,
  keyPoints: string,
): string {
  const greetings: Record<Tone, string> = {
    professional: `Dear ${recipientName || 'Valued Contact'},`,
    friendly: `Hi ${recipientName || 'there'}!`,
    formal: `Dear ${recipientName || 'Sir/Madam'},`,
    casual: `Hey ${recipientName || ''},`.trimEnd(),
    empathetic: `Dear ${recipientName || 'Friend'},`,
    persuasive: `Dear ${recipientName || 'Valued Partner'},`,
  };

  const closings: Record<Tone, string> = {
    professional: `Best regards,\n${senderName}`,
    friendly: `Warm regards,\n${senderName}`,
    formal: `Yours sincerely,\n${senderName}`,
    casual: `Cheers,\n${senderName}`,
    empathetic: `With appreciation,\n${senderName}`,
    persuasive: `Looking forward to your response,\n${senderName}`,
  };

  const openers: Record<Purpose, string> = {
    reply: `Thank you for your message.`,
    follow_up: `I hope this message finds you well. Following up on our previous conversation,`,
    introduction: `I hope this email finds you well. My name is ${senderName}, and`,
    thank_you: `I wanted to take a moment to express my sincere gratitude for`,
    apology: `I sincerely apologize for`,
    request: `I hope you're doing well. I'm reaching out to`,
    announcement: `I'm excited to share some updates with you regarding`,
  };

  let body = '';

  if (context.trim()) {
    body += `In reference to ${context}, `;
  }

  if (keyPoints.trim()) {
    body += keyPoints;
  } else {
    const placeholderLines: Record<Purpose, string> = {
      reply: 'your message has been received and carefully reviewed. I will address your points below.',
      follow_up: 'I wanted to check in on the progress and next steps we discussed.',
      introduction: 'I am reaching out to explore potential collaboration opportunities.',
      thank_you: 'your support, time, and effort. It truly means a lot and has made a significant impact.',
      apology: 'the inconvenience caused. We take this matter seriously and are committed to making it right.',
      request: 'discuss an important matter and would appreciate your input on the following.',
      announcement: 'important developments that I believe will be of great interest to you.',
    };
    body += placeholderLines[purpose];
  }

  return `${greetings[tone]}\n\n${openers[purpose]} ${body}\n\n${closings[tone]}`;
}

export default function EmailResponseGenerator() {
  const [context, setContext] = useState('');
  const [tone, setTone] = useState<Tone>('professional');
  const [purpose, setPurpose] = useState<Purpose>('reply');
  const [recipientName, setRecipientName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [keyPoints, setKeyPoints] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    const result = generateEmailResponse(context, tone, purpose, recipientName, senderName, keyPoints);
    setOutput(result);
  }, [context, tone, purpose, recipientName, senderName, keyPoints]);

  const copyToClipboard = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetAll = () => {
    setContext('');
    setTone('professional');
    setPurpose('reply');
    setRecipientName('');
    setSenderName('');
    setKeyPoints('');
    setOutput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-10">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Email Response Generator</h1>
          <p className="mt-2 text-slate-400 max-w-xl mx-auto">Generate professional email responses instantly. Choose your tone, purpose, and context — get a polished draft in seconds.</p>
        </div>

        <div className="grid gap-6">
          {/* Context */}
          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6">
            <label className="block text-sm font-semibold text-slate-300 mb-2">Email Context (Optional)</label>
            <input
              type="text"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="e.g., 'Regarding project timeline extension' or 'Re: Q4 Budget Review'"
              className="w-full rounded-xl border border-slate-600/70 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />
          </div>

          {/* Recipient Name */}
          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6">
            <label className="block text-sm font-semibold text-slate-300 mb-2">Recipient Name (Optional)</label>
            <input
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="e.g., Sarah Chen"
              className="w-full rounded-xl border border-slate-600/70 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />
          </div>

          {/* Sender Name */}
          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6">
            <label className="block text-sm font-semibold text-slate-300 mb-2">Your Name</label>
            <input
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="e.g., John Smith"
              className="w-full rounded-xl border border-slate-600/70 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />
          </div>

          {/* Purpose */}
          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6">
            <label className="block text-sm font-semibold text-slate-300 mb-3">Purpose</label>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {Object.entries(PURPOSE_DESCRIPTIONS).map(([key, desc]) => (
                <button
                  key={key}
                  onClick={() => setPurpose(key as Purpose)}
                  className={`rounded-xl border p-3 text-left transition ${
                    purpose === key
                      ? 'border-blue-500 bg-blue-500/10 text-blue-300'
                      : 'border-slate-700/60 bg-slate-900/40 text-slate-400 hover:border-slate-500 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="text-xs font-semibold capitalize">{key.replace('_', ' ')}</div>
                  <div className="text-[10px] mt-1 opacity-70">{desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Tone */}
          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6">
            <label className="block text-sm font-semibold text-slate-300 mb-3">Tone</label>
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(TONE_DESCRIPTIONS).map(([key, desc]) => (
                <button
                  key={key}
                  onClick={() => setTone(key as Tone)}
                  className={`rounded-xl border p-3 text-left transition ${
                    tone === key
                      ? 'border-indigo-500 bg-indigo-500/10 text-indigo-300'
                      : 'border-slate-700/60 bg-slate-900/40 text-slate-400 hover:border-slate-500 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="text-xs font-semibold capitalize">{key}</div>
                  <div className="text-[10px] mt-1 opacity-70">{desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Key Points */}
          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6">
            <label className="block text-sm font-semibold text-slate-300 mb-2">Key Points to Include (Optional)</label>
            <textarea
              value={keyPoints}
              onChange={(e) => setKeyPoints(e.target.value)}
              rows={4}
              placeholder="List key points you want to address in the email, one per line..."
              className="w-full rounded-xl border border-slate-600/70 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />
          </div>

          {/* Generate Button */}
          <div className="flex gap-3">
            <button
              onClick={generate}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:from-blue-500 hover:to-indigo-500 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Generate Response
            </button>
            <button
              onClick={resetAll}
              className="rounded-xl border border-slate-700/60 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:bg-slate-800"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Output */}
        {output && (
          <div className="mt-6 rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-300">Generated Email Draft</h2>
              <div className="flex gap-2">
                <button
                  onClick={copyToClipboard}
                  className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-700 transition flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
            <pre className="whitespace-pre-wrap text-sm text-slate-200 font-mono bg-slate-950/80 rounded-xl p-4 border border-slate-700/40">{output}</pre>
          </div>
        )}

        {/* Tips */}
        <div className="mt-8 rounded-2xl border border-slate-700/60 bg-slate-900/30 p-6">
          <h3 className="text-sm font-semibold text-slate-300 mb-2">Tips for Best Results</h3>
          <ul className="space-y-1 text-xs text-slate-500">
            <li>• Fill in the recipient&apos;s name for a more personalized email</li>
            <li>• Include specific context for more relevant responses</li>
            <li>• Add key points — one per line — to structure your message</li>
            <li>• Try different tones to match your audience and situation</li>
            <li>• All processing happens locally — your data never leaves the browser</li>
          </ul>
        </div>
      </div>
    </div>
  );
}