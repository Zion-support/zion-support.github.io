<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIAssistant: React.FC = () => {
  return (
    <Layout>
      <Head>

=======
import React from 'react',
import Head from 'next/head',
import Button from '../components/ui/Button',
export default function AIAssistantPage() {
  return (
    <>
      <Head>
        <title>AI Assistant | Zion Tech Group</title>
        <meta name="description" content="AI Assistant that automates research, drafting, scheduling, and customer responses." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-assistant" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">AI Assistant</h1>
            <p className="text-gray-300 text-lg">Automate research, summarization, drafting, scheduling, and inbox triage.</p>
          </header>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Research and summarize documents and web sourcesDraft emails, posts, briefs, and reportsAuto-schedule meetings and follow-upsIntegrations: Gmail, Google Drive, Slack, CalendarTeam approvals and audit trailStarting at $99/mo'
            ].map((f) => (
              <div key={f} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 text-gray-200">{f}</div>
            ))}
          </section>
          <div className="text-center">
            <Button href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">Request a Demo</Button>
          </div>
        </div>
      </div>
    </>
  )
}
        <title>AI Assistant | Zion Tech Group</title>
        <meta
          name='description'
          content='AI Assistant that automates research, drafting, scheduling, and customer responses.'
        />
        <link rel='canonical' href='https://ziontechgroup.com/ai-assistant' />
      </Head>
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white'>
        <div className='max-w-6xl mx-auto space-y-10'>
          <header className='text-center'>
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4'>
              AI Assistant
            </h1>
            <p className='text-gray-300 text-lg'>
              Automate research, summarization, drafting, scheduling, and inbox
              triage.
            </p>
          </header>
          <section className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              'Research and summarize documents and web sources',
              'Draft emails, posts, briefs, and reports',
              'Auto-schedule meetings and follow-ups',
              'Integrations: Gmail, Google Drive, Slack, Calendar',
              'Team approvals and audit trail',
              'Starting at $99/mo',
            ].map(f => (
              <div
                key={f}
                className='p-6 rounded-2xl bg-black/40 border border-gray-700/60 text-gray-200'
              >
                {f}
              </div>
            ))}
          </section>
          <div className='text-center'>
            <Button
              href='/contact'
              className='px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white'
            >
              Request a Demo
            </Button>
        <title>AI Assistant - Zion Tech Group</title>
        <meta name="description" content="Intelligent AI assistant for your business needs" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Assistant</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your intelligent AI assistant powered by advanced machine learning and natural language processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Natural Language Processing</h3>
            <p className="text-gray-600 mb-4">
              Understand and respond to natural language queries with high accuracy and context awareness.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Context-aware responses</li>
              <li>• Multi-language support</li>
              <li>• Sentiment analysis</li>
              <li>• Intent recognition</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Task Automation</h3>
            <p className="text-gray-600 mb-4">
              Automate repetitive tasks and streamline workflows with intelligent task management.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Workflow automation</li>
              <li>• Task scheduling</li>
              <li>• Process optimization</li>
              <li>• Error handling</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Data Analysis</h3>
            <p className="text-gray-600 mb-4">
              Analyze data and provide insights to help make informed business decisions.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Pattern recognition</li>
              <li>• Predictive analytics</li>
              <li>• Data visualization</li>
              <li>• Trend analysis</li>
            </ul>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Experience the power of AI assistance for your business operations.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-blue-600 text-white px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg hover:bg-blue-700">
              Request a Demo
            </a>
            <a href="/about" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
<<<<<<< HEAD

=======
}
};

export default AIAssistant;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
