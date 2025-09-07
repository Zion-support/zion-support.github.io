<<<<<<< HEAD
import React, { useMemo, useState } from 'react';
export default function ServiceDescriptionGeneratorPage() {
  const [title, setTitle] = useState($2);
  const [targetAudience, setTargetAudience] = useState($2);
  const [featuresInput, setFeaturesInput] = useState($2);
  const [additionalNotes, setAdditionalNotes] = useState($2);
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional'),

  const [loading, setLoading] = useState($2);
  const [error, setError] = useState<string | null>(null),
  const [generated, setGenerated] = useState($2);
  const [accepted, setAccepted] = useState($2);
  const keyFeatures = useMemo(() => {
    return featuresInput
      .split('\n')
      .map((f) => f.trim())
      .filter(Boolean)
  }, [featuresInput]),

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault($2);
    setLoading($2);
    setError($2);
    setAccepted($2);
    try {
      const response = await fetch('/api/generate-service-description', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          keyFeatures,
          targetAudience,
          additionalNotes: additionalNotes || undefined,
          tone})}),

      if (!response.ok) {
        const data = $2;
        throw new Error(data.error || 'Failed to generate')
      }

      const data = $2;
      setGenerated(data.description || '')
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  function handleAccept() {
    setAccepted(true)
  }

  function handleCopy() {
    if (!generated) return,
    navigator.clipboard.writeText(generated).catch(() => {})
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Service Description Generator</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Enter your service details. We will generate a polished description using GPT-4. You can edit it on the page and accept when ready.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
        <div>
          <label className="block text-sm font-medium mb-1">Service Title</label>
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., On-Demand Web Performance Audit"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Target Audience</label>
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., CTOs and product teams at growth-stage SaaS"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Key Features (one per line)</label>
          <textarea
            className="w-full min-h-[120px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={"e.g.\nCore Web Vitals deep-dive\nActionable prioritised recommendations\nHands-on fixes or step-by-step guidance"}
            value={featuresInput}
            onChange={(e) => setFeaturesInput(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tone</label>
          <select
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={tone}
            onChange={(e) => setTone(e.target.value as any)}
          >
            <option value="professional">Professional</option>
            <option value="friendly">Friendly</option>
            <option value="persuasive">Persuasive</option>
            <option value="technical">Technical</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Additional Notes (optional)</label>
          <textarea
            className="w-full min-h-[80px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Constraints, deliverables, timeline, pricing preferences, compliance, etc."
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 disabled:opacity-60"
          >
            {loading ? 'Generating…' : 'Generate Description'}
          </button>
          {error && <span className="text-red-600 text-sm">{error}</span>}
        </div>
      </form>

      {generated && (
        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Generated Description</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark: hover: bg-gray-800"
              >
                Copy
              </button>
              <button
                onClick={handleAccept}
                className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm"
              >
                Accept
              </button>
            </div>
          </div>

          <textarea
            className="w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={generated}
            onChange={(e) => setGenerated(e.target.value)}
          />

          {accepted && (
            <div className="text-emerald-700 dark:text-emerald-400 text-sm">Accepted. You can copy and paste this into your CMS.</div>
          )}
        </div>
      )}
    </div>
  )
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function descriptiongenerator() {
  return (
    <Layout>
      <Head>
        <title>Description Generator - Zion Tech Group</title>
        <meta name="description" content="Description Generator solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Description Generator</h1>
          <p className="text-lg text-gray-600">
            Professional description generator solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}