<<<<<<< HEAD
export default function RequestQuote() {
  return (
    <main style={{ padding: '3rem', maxWidth: 800, margin: '0 auto' }}>
      <h1>Request a Quote</h1>
      <p>Tell us about your team size, hiring needs, and timelines. Our team will reach out within 1 business day.</p>
      <form action="mailto:sales@zion.ai" method="post" encType="text/plain" style={{ display: 'grid', gap: 12, marginTop: 12}}>
        <input name="company" placeholder="Company name" required />
        <input name="email" placeholder="Work email" type="email" required />
        <input name="team_size" placeholder="Team size (seats)" />
        <textarea name="notes" placeholder="Notes" rows={5} />
        <button type="submit" style={{ padding: '0.5rem 0.75rem' }}>Send</button>
      </form>
    </main>
  )
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function requestquote() {
  return (
    <Layout>
      <Head>
        <title>Request Quote - Zion Tech Group</title>
        <meta name="description" content="Request Quote solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Request Quote</h1>
          <p className="text-lg text-gray-600">
            Professional request quote solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}