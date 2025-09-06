import React, { useMemo, useState } from 'react';

export default function ServiceDescriptionGeneratorPage() {
  const [title, setTitle] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [featuresInput, setFeaturesInput] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [tone, setTone] = useState<
    'professional' | 'friendly' | 'persuasive' | 'technical'
  >('professional');
<<<<<<< HEAD
=======
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional');
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional');
ursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generated, setGenerated] = useState('');
  const [accepted, setAccepted] = useState(false);

  const keyFeatures = useMemo(() => {
    return featuresInput
      .split('\n')
      .map(f => f.trim())
<<<<<<< HEAD
      .filter(Boolean);  }, [featuresInput]);
=======
      .filter(Boolean);
      .map((f) => f.trim())
      .filter(Boolean)
      .map((f) => f.trim())
      .filter(Boolean)
ursor/integrate-build-improve-and-re-verify-b76c
  }, [featuresInput]);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
          title,
          keyFeatures,
          targetAudience,
<<<<<<< HEAD
=======
          title;
          keyFeatures;
          targetAudience;
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          additionalNotes: additionalNotes || undefined,
          tone,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to generate');
      }

      const data = (await response.json()) as { description: string };
      setGenerated(data.description || '');
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
<<<<<<< HEAD
      setLoading(false);    }
  }

  function handleAccept() {
    setAccepted(true);  }
=======
      setLoading(false);
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
      setLoading(false)
ursor/integrate-build-improve-and-re-verify-b76c
    }
  }

  function handleAccept() {
    setAccepted(true);
    setAccepted(true)
    setAccepted(true)
ursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  function handleCopy() {
    if (!generated) return;
    navigator.clipboard.writeText(generated).catch(() => {});
<<<<<<< HEAD
=======
    navigator.clipboard.writeText(generated).catch(() => {})
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

  return (
    <div className='max-w-3xl mx-auto'>
      <h1 className='text-2xl font-semibold mb-4'>
        Service Description Generator
      </h1>
      <p className='text-sm text-gray-600 dark:text-gray-300 mb-6'>
        Enter your service details. We will generate a polished description
        using GPT-4. You can edit it on the page and accept when ready.
      </p>

      <form
        onSubmit={handleSubmit}
        className='space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4'
      >
        <div>
          <label className='block text-sm font-medium mb-1'>
            Service Title
          </label>
          <input
            type='text'
            className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='e.g., On-Demand Web Performance Audit'
            value={title}
<<<<<<< HEAD
            onChange={e => setTitle(e.target.value)}            required
=======
            onChange={e => setTitle(e.target.value)}
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
            onChange={(e) => setTitle(e.target.value)}
ursor/integrate-build-improve-and-re-verify-b76c
            required
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>
            Target Audience
          </label>
<<<<<<< HEAD
=======
          <label className="block text-sm font-medium mb-1">Target Audience</label>
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <input
            type='text'
            className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='e.g., CTOs and product teams at growth-stage SaaS'
            value={targetAudience}
<<<<<<< HEAD
            onChange={e => setTargetAudience(e.target.value)}            required
=======
            onChange={e => setTargetAudience(e.target.value)}
          <label className="block text-sm font-medium mb-1">Target Audience</label>
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., CTOs and product teams at growth-stage SaaS"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            onChange={(e) => setTargetAudience(e.target.value)}
ursor/integrate-build-improve-and-re-verify-b76c
            required
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>
            Key Features (one per line)
          </label>
<<<<<<< HEAD
=======
          <label className="block text-sm font-medium mb-1">Key Features (one per line)</label>
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <textarea
            className='w-full min-h-[120px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder={
              'e.g.\nCore Web Vitals deep-dive\nActionable prioritised recommendations\nHands-on fixes or step-by-step guidance'
            }
            value={featuresInput}
<<<<<<< HEAD
            onChange={e => setFeaturesInput(e.target.value)}            required
=======
            onChange={e => setFeaturesInput(e.target.value)}
          <label className="block text-sm font-medium mb-1">Key Features (one per line)</label>
          <textarea
            className="w-full min-h-[120px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={"e.g.\nCore Web Vitals deep-dive\nActionable prioritised recommendations\nHands-on fixes or step-by-step guidance"}
            value={featuresInput}
            onChange={(e) => setFeaturesInput(e.target.value)}
            onChange={(e) => setFeaturesInput(e.target.value)}
ursor/integrate-build-improve-and-re-verify-b76c
            required
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>Tone</label>
<<<<<<< HEAD
=======
          <label className="block text-sm font-medium mb-1">Tone</label>
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <select
            className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={tone}
            onChange={e => setTone(e.target.value as any)}
          >
            <option value='professional'>Professional</option>
            <option value='friendly'>Friendly</option>
            <option value='persuasive'>Persuasive</option>
<<<<<<< HEAD
            <option value='technical'>Technical</option>          </select>
=======
            <option value='technical'>Technical</option>
          <label className="block text-sm font-medium mb-1">Tone</label>
          <select
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={tone}
            onChange={(e) => setTone(e.target.value as any)}
          >
ursor/integrate-build-improve-and-re-verify-b76c
            <option value="professional">Professional</option>
            <option value="friendly">Friendly</option>
            <option value="persuasive">Persuasive</option>
            <option value="technical">Technical</option>
ursor/integrate-build-improve-and-re-verify-b76c
          </select>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </div>

        <div>
          <label className='block text-sm font-medium mb-1'>
            Additional Notes (optional)
          </label>
<<<<<<< HEAD
=======
          <label className="block text-sm font-medium mb-1">Additional Notes (optional)</label>
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <textarea
            className='w-full min-h-[80px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Constraints, deliverables, timeline, pricing preferences, compliance, etc.'
            value={additionalNotes}
            onChange={e => setAdditionalNotes(e.target.value)}
          />
        </div>

        <div className='flex items-center gap-3'>
          <button
            type='submit'
            disabled={loading}
            className='inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 disabled:opacity-60'
          >
            {loading ? 'Generating…' : 'Generate Description'}
          </button>
<<<<<<< HEAD
          {error && <span className='text-red-600 text-sm'>{error}</span>}        </div>
=======
          {error && <span className='text-red-600 text-sm'>{error}</span>}
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
          {error && <span className="text-red-600 text-sm">{error}</span>}
ursor/integrate-build-improve-and-re-verify-b76c
        </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      </form>

      {generated && (
        <div className='mt-8 space-y-3'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold'>Generated Description</h2>
            <div className='flex items-center gap-2'>
              <button
                onClick={handleCopy}
<<<<<<< HEAD
                className='rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800'              >
=======
                className='rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800'
        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Generated Description</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Generated Description</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
ursor/integrate-build-improve-and-re-verify-b76c
              >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                Copy
              </button>
              <button
                onClick={handleAccept}
<<<<<<< HEAD
                className='rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm'              >
=======
                className='rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm'
                className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm"
                className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm"
ursor/integrate-build-improve-and-re-verify-b76c
              >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                Accept
              </button>
            </div>
          </div>

          <textarea
            className='w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
<<<<<<< HEAD
=======
            className="w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            value={generated}
            onChange={e => setGenerated(e.target.value)}
          />

          {accepted && (
            <div className='text-emerald-700 dark:text-emerald-400 text-sm'>
              Accepted. You can copy and paste this into your CMS.
<<<<<<< HEAD
            </div>          )}
        </div>
      )}
    </div>
  );
=======
            </div>
            className="w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={generated}
            onChange={(e) => setGenerated(e.target.value)}
          />

          {accepted && (
            <div className="text-emerald-700 dark:text-emerald-400 text-sm">Accepted. You can copy and paste this into your CMS.</div>
            <div className="text-emerald-700 dark:text-emerald-400 text-sm">Accepted. You can copy and paste this into your CMS.</div>
ursor/integrate-build-improve-and-re-verify-b76c
          )}
        </div>
      )}
    </div>
  );
  )
}
  )
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
