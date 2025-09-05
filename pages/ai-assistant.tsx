<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Button from '../components/ui/Button',
export default function AIAssistantPage() {
  return (
    <>
      <Head>
        <title>AI Assistant | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;AI Assistant that automates research, drafting, scheduling, and customer responses.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ai-assistant&quot; />
      </Head>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white&quot;>
        <div className=&quot;max-w-6xl mx-auto space-y-10&quot;>
          <header className=&quot;text-center&quot;>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4&quot;>AI Assistant</h1>
            <p className=&quot;text-gray-300 text-lg&quot;>Automate research, summarization, drafting, scheduling, and inbox triage.</p>
=======
import React from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';

export default function AIAssistantPage() {_return (_<>
      <Head>
        <title>AI Assistant | Zion Tech Group</title>
        <meta name="description" content="AI Assistant that automates research, _drafting, _scheduling, _and customer responses." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-assistant" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">AI Assistant</h1>
            <p className="text-gray-300 text-lg">Automate research, _summarization, _drafting, _scheduling, _and inbox triage.</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </header>
          <section className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
            {[
<<<<<<< HEAD
              'Research and summarize documents and web sourcesDraft emails, posts, briefs, and reportsAuto-schedule meetings and follow-upsIntegrations: Gmail, Google Drive, Slack, CalendarTeam approvals and audit trailStarting at $99/mo'
            ].map((f) => (
              <div key={f} className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60 text-gray-200&quot;>{f}</div>
=======
              'Research and summarize documents and web sources', _'Draft emails, _posts, _briefs, _and reports', _'Auto-schedule meetings and follow-ups', _'Integrations: Gmail, _Google Drive, _Slack, _Calendar', _'Team approvals and audit trail', _'Starting at $99/mo'
            ].map((f) => (
              <div key={f} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 text-gray-200">{_f}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            ))}
          </section>
          <div className=&quot;text-center&quot;>
            <Button href=&quot;/contact&quot; className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white&quot;>Request a Demo</Button>
          </div>
        </div>
      </div>
    </>
  )
}