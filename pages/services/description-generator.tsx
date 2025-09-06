import React, { useMemo, useState } from 'react';

export default function ServiceDescriptionGeneratorPage() {
  const [title, setTitle] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [featuresInput, setFeaturesInput] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
<<<<<<< HEAD
<<<<<<< HEAD
  const [tone, setTone] = useState<
    'professional' | 'friendly' | 'persuasive' | 'technical'
  >('professional');
=======
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generated, setGenerated] = useState('');
  const [accepted, setAccepted] = useState(false);

  const keyFeatures = useMemo(() => {
    return featuresInput
      .split('\n')
<<<<<<< HEAD
<<<<<<< HEAD
      .map(f => f.trim())
      .filter(Boolean);
=======
      .map((f) => f.trim())
      .filter(Boolean)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      .map((f) => f.trim())
      .filter(Boolean)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [featuresInput]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAccepted(false);

    try {
      const response = await fetch('/api/generate-service-description', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
<<<<<<< HEAD
<<<<<<< HEAD
          title,
          keyFeatures,
          targetAudience,
=======
          title;
          keyFeatures;
          targetAudience;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          additionalNotes: additionalNotes || undefined,
          tone})});

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to generate')
      }

      const data = (await response.json()) as { description: string },
      setGenerated(data.description || '')
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
<<<<<<< HEAD
      setLoading(false);
=======
          title;
          keyFeatures;
          targetAudience;
          additionalNotes: additionalNotes || undefined,
          tone})});

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to generate')
      }

      const data = (await response.json()) as { description: string },
      setGenerated(data.description || '')
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setLoading(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }

  function handleAccept() {
<<<<<<< HEAD
<<<<<<< HEAD
    setAccepted(true);
=======
    setAccepted(true)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    setAccepted(true)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  function handleCopy() {
    if (!generated) return;
<<<<<<< HEAD
<<<<<<< HEAD
    navigator.clipboard.writeText(generated).catch(() => {});
=======
    navigator.clipboard.writeText(generated).catch(() => {})
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
            onChange={e => setTitle(e.target.value)}
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            onChange={(e) => setTitle(e.target.value)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            required
          />
        </div>

        <div>
<<<<<<< HEAD
<<<<<<< HEAD
          <label className='block text-sm font-medium mb-1'>
            Target Audience
          </label>
=======
          <label className="block text-sm font-medium mb-1">Target Audience</label>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., CTOs and product teams at growth-stage SaaS"
            value={targetAudience}
<<<<<<< HEAD
            onChange={e => setTargetAudience(e.target.value)}
=======
          <label className="block text-sm font-medium mb-1">Target Audience</label>
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., CTOs and product teams at growth-stage SaaS"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            onChange={(e) => setTargetAudience(e.target.value)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            required
          />
        </div>

        <div>
<<<<<<< HEAD
<<<<<<< HEAD
          <label className='block text-sm font-medium mb-1'>
            Key Features (one per line)
          </label>
=======
          <label className="block text-sm font-medium mb-1">Key Features (one per line)</label>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <textarea
            className="w-full min-h-[120px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={"e.g.\nCore Web Vitals deep-dive\nActionable prioritised recommendations\nHands-on fixes or step-by-step guidance"}
            value={featuresInput}
<<<<<<< HEAD
            onChange={e => setFeaturesInput(e.target.value)}
=======
          <label className="block text-sm font-medium mb-1">Key Features (one per line)</label>
          <textarea
            className="w-full min-h-[120px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={"e.g.\nCore Web Vitals deep-dive\nActionable prioritised recommendations\nHands-on fixes or step-by-step guidance"}
            value={featuresInput}
            onChange={(e) => setFeaturesInput(e.target.value)}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            onChange={(e) => setFeaturesInput(e.target.value)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            required
          />
        </div>

        <div>
<<<<<<< HEAD
<<<<<<< HEAD
          <label className='block text-sm font-medium mb-1'>Tone</label>
=======
          <label className="block text-sm font-medium mb-1">Tone</label>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <select
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={tone}
            onChange={(e) => setTone(e.target.value as any)}
          >
<<<<<<< HEAD
            <option value='professional'>Professional</option>
            <option value='friendly'>Friendly</option>
            <option value='persuasive'>Persuasive</option>
            <option value='technical'>Technical</option>
=======
          <label className="block text-sm font-medium mb-1">Tone</label>
          <select
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={tone}
            onChange={(e) => setTone(e.target.value as any)}
          >
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <option value="professional">Professional</option>
            <option value="friendly">Friendly</option>
            <option value="persuasive">Persuasive</option>
            <option value="technical">Technical</option>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </select>
        </div>

        <div>
<<<<<<< HEAD
<<<<<<< HEAD
          <label className='block text-sm font-medium mb-1'>
            Additional Notes (optional)
          </label>
=======
          <label className="block text-sm font-medium mb-1">Additional Notes (optional)</label>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
          {error && <span className='text-red-600 text-sm'>{error}</span>}
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          {error && <span className="text-red-600 text-sm">{error}</span>}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </div>
      </form>

      {generated && (
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='mt-8 space-y-3'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold'>Generated Description</h2>
            <div className='flex items-center gap-2'>
              <button
                onClick={handleCopy}
                className='rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800'
=======
        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Generated Description</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Generated Description</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
                Copy
              </button>
              <button
                onClick={handleAccept}
<<<<<<< HEAD
<<<<<<< HEAD
                className='rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm'
=======
                className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
                Accept
              </button>
            </div>
          </div>

          <textarea
<<<<<<< HEAD
<<<<<<< HEAD
            className='w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
=======
            className="w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            value={generated}
            onChange={(e) => setGenerated(e.target.value)}
          />

          {accepted && (
<<<<<<< HEAD
            <div className='text-emerald-700 dark:text-emerald-400 text-sm'>
              Accepted. You can copy and paste this into your CMS.
            </div>
=======
            className="w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={generated}
            onChange={(e) => setGenerated(e.target.value)}
          />

          {accepted && (
            <div className="text-emerald-700 dark:text-emerald-400 text-sm">Accepted. You can copy and paste this into your CMS.</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="text-emerald-700 dark:text-emerald-400 text-sm">Accepted. You can copy and paste this into your CMS.</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          )}
        </div>
      )}
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
