import React, { useMemo, useState } from 'react';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function ServiceDescriptionGeneratorPage() {
  const [title, setTitle] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [featuresInput, setFeaturesInput] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
<<<<<<< HEAD
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional'),
=======
  const [tone, setTone] = useState<
    'professional' | 'friendly' | 'persuasive' | 'technical'
  >('professional');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null),
  const [generated, setGenerated] = useState('');
  const [accepted, setAccepted] = useState(false);
<<<<<<< HEAD
  const keyFeatures = null;
    navigator.clipboard.writeText(generated).catch(() => {})
=======
  const keyFeatures = useMemo(() => {
    return featuresInput
      .split('\n')
      .map(f => f.trim())
<<<<<<< HEAD
      .filter(Boolean);  }, [featuresInput]);
=======
      .filter(Boolean);
  }, [featuresInput]);

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAccepted(false)
    try {
      const response = await fetch('/api/generate-service-description', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
<<<<<<< HEAD
          title
          keyFeatures
          targetAudience
          additionalNotes: additionalNotes |undefined
          tone
        })
=======
          title,
          keyFeatures,
          targetAudience,
          additionalNotes: additionalNotes || undefined,
          tone,
        }),
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error |'Failed to generate');
      }
      const data = (await response.json()) as { description: string }
      setGenerated(data.description |'');
    } catch (err: any) {
      setError(err.message |'Something went wrong');
    } finally {
<<<<<<< HEAD
      setLoading(false);    }
=======
      setLoading(false);
    }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }
  function handleAccept() {
<<<<<<< HEAD
    setAccepted(true);  }
=======
    setAccepted(true);
  }

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  function handleCopy() {
    if (!generated) return;
    navigator.clipboard.writeText(generated).catch(() => {});
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
            required
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>
            Target Audience
          </label>
          <input
            type='text'
            className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='e.g., CTOs and product teams at growth-stage SaaS'
            value={targetAudience}
<<<<<<< HEAD
            onChange={e => setTargetAudience(e.target.value)}            required
=======
            onChange={e => setTargetAudience(e.target.value)}
            required
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>
            Key Features (one per line)
          </label>
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
            required
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>Tone</label>
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
          </select>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>
            Additional Notes (optional)
          </label>
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
        </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
              >
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                Copy
              </button>
              <button
                onClick={handleAccept}
<<<<<<< HEAD
                className='rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm'              >
=======
                className='rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm'
              >
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                Accept
              </button>
            </div>
          </div>
          <textarea
            className='w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
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
          )}
        </div>
      )}
    </div>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
