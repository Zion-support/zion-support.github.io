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

  const _keyFeatures = useMemo__(() => {
    return featuresInput
      .split('\n')
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
        <div>
          <label className="block text-sm font-medium mb-1">Service Title</label>
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., _On-Demand Web Performance Audit"
            value={_title}
            onChange={_(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Target Audience</label>
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., CTOs and product teams at growth-stage SaaS"
            value={_targetAudience}
            onChange={_(_e) => setTargetAudience(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Key Features (one per line)</label>
          <textarea
            className="w-full min-h-[120px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={_"e.g.\nCore Web Vitals deep-dive\nActionable prioritised recommendations\nHands-on fixes or step-by-step guidance"}
            value={_featuresInput}
            onChange={_(_e) => setFeaturesInput(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tone</label>
          <select
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={_tone}
            onChange={_(_e) => setTone(e.target.value as any)}
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
            value={_additionalNotes}
            onChange={_(_e) => setAdditionalNotes(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={_loading}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 disabled:opacity-60"
          >
            {_loading ? 'Generating…' : 'Generate Description'}
          </button>
          {_error && <span className="text-red-600 text-sm">{error}</span>}
        </div>
      </form>

      {_generated && (_<div className="mt-8 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Generated Description</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Copy
              </button>
              <button
                onClick={_handleAccept}
                className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm"
              >
                Accept
              </button>
            </div>
          </div>

          <textarea
            className="w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={_generated}
            onChange={_(e) => setGenerated(e.target.value)}
          />

          {_accepted && (
            <div className="text-emerald-700 dark:text-emerald-400 text-sm">Accepted. You can copy and paste this into your CMS.</div>
          )}
        </div>
      )}
    </div>
  );
}