<<<<<<< HEAD
import React, { useMemo, useState } from 'react',

export default function ServiceDescriptionGeneratorPage() {
  const [title, setTitle] = useState(''),
  const [targetAudience, setTargetAudience] = useState(''),
  const [featuresInput, setFeaturesInput] = useState(''),
  const [additionalNotes, setAdditionalNotes] = useState(''),
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional'),

  const [loading, setLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const [generated, setGenerated] = useState(''),
  const [accepted, setAccepted] = useState(false),
=======
import React, {_useMemo, _useState} from 'react';

export default function ServiceDescriptionGeneratorPage() {_const [title, _setTitle] = useState('');
  const [targetAudience, _setTargetAudience] = useState('');
  const [featuresInput, _setFeaturesInput] = useState('');
  const [additionalNotes, _setAdditionalNotes] = useState('');
  const [tone, _setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional');

  const [loading, _setLoading] = useState(false);
  const [error, _setError] = useState<string | null>(null);
  const [generated, _setGenerated] = useState('');
  const [accepted, _setAccepted] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _keyFeatures = useMemo__(() => {
    return featuresInput
      .split('\n')
<<<<<<< HEAD
      .map((f) => f.trim())
      .filter(Boolean)
  }, [featuresInput]),

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(),
    setLoading(true),
    setError(null),
    setAccepted(false),

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
        const data = await response.json().catch(() => ({})),
        throw new Error(data.error || 'Failed to generate')
      }

      const data = (await response.json()) as { description: string },
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
    <div className=&quot;max-w-3xl mx-auto&quot;>
      <h1 className=&quot;text-2xl font-semibold mb-4&quot;>Service Description Generator</h1>
      <p className=&quot;text-sm text-gray-600 dark:text-gray-300 mb-6&quot;>
        Enter your service details. We will generate a polished description using GPT-4. You can edit it on the page and accept when ready.
      </p>

      <form onSubmit={handleSubmit} className=&quot;space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4&quot;>
=======
      .map(_(f) => f.trim())
      .filter(Boolean);}, [featuresInput]);

  async function handleSubmit(_e: React.FormEvent) {_e.preventDefault();
    setLoading(true);
    setError(null);
    setAccepted(false);

    try {
      const _response = await fetch('/api/generate-service-description', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_title, _keyFeatures, _targetAudience, _additionalNotes: additionalNotes || undefined, _tone})});

      if (!response.ok) {_const _data = await response.json().catch__(() => ({}));
        throw new Error(data.error || 'Failed to generate');
      }

      const _data = (await response.json()) as {_description: string};
      setGenerated(data.description || '');
    } catch (err: unknown) {_setError(err.message || 'Something went wrong');} finally {_setLoading(false);}
  }

  function handleAccept() {_setAccepted(true);}

  function handleCopy() {_if (!generated) return;
    navigator.clipboard.writeText(generated).catch__(() => {});
  }

  return (_<div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Service Description Generator</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Enter your service details. We will generate a polished description using GPT-4. You can edit it on the page and accept when ready.
      </p>

      <form onSubmit={_handleSubmit} className="space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Service Title</label>
          <input
<<<<<<< HEAD
            type=&quot;text&quot;
            className=&quot;w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
            placeholder=&quot;e.g., On-Demand Web Performance Audit&quot;
            value={title}
            onChange={(e) => setTitle(e.target.value)}
=======
            type="text"
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., _On-Demand Web Performance Audit"
            value={_title}
            onChange={_(e) => setTitle(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            required
          />
        </div>

        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Target Audience</label>
          <input
<<<<<<< HEAD
            type=&quot;text&quot;
            className=&quot;w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
            placeholder=&quot;e.g., CTOs and product teams at growth-stage SaaS&quot;
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
=======
            type="text"
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., CTOs and product teams at growth-stage SaaS"
            value={_targetAudience}
            onChange={_(_e) => setTargetAudience(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            required
          />
        </div>

        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Key Features (one per line)</label>
          <textarea
<<<<<<< HEAD
            className=&quot;w-full min-h-[120px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
            placeholder={&quot;e.g.\nCore Web Vitals deep-dive\nActionable prioritised recommendations\nHands-on fixes or step-by-step guidance&quot;}
            value={featuresInput}
            onChange={(e) => setFeaturesInput(e.target.value)}
=======
            className="w-full min-h-[120px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={_"e.g.\nCore Web Vitals deep-dive\nActionable prioritised recommendations\nHands-on fixes or step-by-step guidance"}
            value={_featuresInput}
            onChange={_(_e) => setFeaturesInput(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            required
          />
        </div>

        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Tone</label>
          <select
<<<<<<< HEAD
            className=&quot;w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
            value={tone}
            onChange={(e) => setTone(e.target.value as any)}
=======
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={_tone}
            onChange={_(_e) => setTone(e.target.value as any)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <option value=&quot;professional&quot;>Professional</option>
            <option value=&quot;friendly&quot;>Friendly</option>
            <option value=&quot;persuasive&quot;>Persuasive</option>
            <option value=&quot;technical&quot;>Technical</option>
          </select>
        </div>

        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Additional Notes (optional)</label>
          <textarea
<<<<<<< HEAD
            className=&quot;w-full min-h-[80px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
            placeholder=&quot;Constraints, deliverables, timeline, pricing preferences, compliance, etc.&quot;
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
=======
            className="w-full min-h-[80px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Constraints, deliverables, timeline, pricing preferences, compliance, etc."
            value={_additionalNotes}
            onChange={_(_e) => setAdditionalNotes(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        </div>

        <div className=&quot;flex items-center gap-3&quot;>
          <button
<<<<<<< HEAD
            type=&quot;submit&quot;
            disabled={loading}
            className=&quot;inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 disabled:opacity-60&quot;
=======
            type="submit"
            disabled={_loading}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 disabled:opacity-60"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_loading ? 'Generating…' : 'Generate Description'}
          </button>
<<<<<<< HEAD
          {error && <span className=&quot;text-red-600 text-sm&quot;>{error}</span>}
        </div>
      </form>

      {generated && (
        <div className=&quot;mt-8 space-y-3&quot;>
          <div className=&quot;flex items-center justify-between&quot;>
            <h2 className=&quot;text-xl font-semibold&quot;>Generated Description</h2>
            <div className=&quot;flex items-center gap-2&quot;>
=======
          {_error && <span className="text-red-600 text-sm">{error}</span>}
        </div>
      </form>

      {_generated && (_<div className="mt-8 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Generated Description</h2>
            <div className="flex items-center gap-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <button
                onClick={handleCopy}
                className=&quot;rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800&quot;
              >
                Copy
              </button>
              <button
<<<<<<< HEAD
                onClick={handleAccept}
                className=&quot;rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm&quot;
=======
                onClick={_handleAccept}
                className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Accept
              </button>
            </div>
          </div>

          <textarea
<<<<<<< HEAD
            className=&quot;w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
            value={generated}
            onChange={(e) => setGenerated(e.target.value)}
          />

          {accepted && (
            <div className=&quot;text-emerald-700 dark:text-emerald-400 text-sm&quot;>Accepted. You can copy and paste this into your CMS.</div>
=======
            className="w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={_generated}
            onChange={_(e) => setGenerated(e.target.value)}
          />

          {_accepted && (
            <div className="text-emerald-700 dark:text-emerald-400 text-sm">Accepted. You can copy and paste this into your CMS.</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          )}
        </div>
      )}
    </div>
  )
}