import React, { useMemo, useState } from 'react';

export default function ServiceDescriptionGeneratorPage() {
  const [title, setTitle] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [featuresInput, setFeaturesInput] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generated, setGenerated] = useState('');
  const [accepted, setAccepted] = useState(false);

  const keyFeatures = useMemo(() => {
    return featuresInput
      .split('\n')
      .map((f) => f.trim())
      .filter(Boolean);
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
          title,
          keyFeatures,
          targetAudience,
          additionalNotes: additionalNotes || undefined,
          tone})});

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to generate');
      }

      const data = (await response.json()) as { description: string };
      setGenerated(data.description || '');
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  function handleAccept() {
    setAccepted(true);
  }

  function handleCopy() {
    if (!generated) return;
    navigator.clipboard.writeText(generated).catch(() => {});
  }

  return (
    <div className=&quot;max-w-3xl mx-auto&quot;>
      <h1 className=&quot;text-2xl font-semibold mb-4&quot;>Service Description Generator</h1>
      <p className=&quot;text-sm text-gray-600 dark:text-gray-300 mb-6&quot;>
        Enter your service details. We will generate a polished description using GPT-4. You can edit it on the page and accept when ready.
      </p>

      <form onSubmit={handleSubmit} className=&quot;space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4&quot;>
        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Service Title</label>
          <input
            type=&quot;text&quot;
            className=&quot;w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
            placeholder=&quot;e.g., On-Demand Web Performance Audit&quot;
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Target Audience</label>
          <input
            type=&quot;text&quot;
            className=&quot;w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
            placeholder=&quot;e.g., CTOs and product teams at growth-stage SaaS&quot;
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            required
          />
        </div>

        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Key Features (one per line)</label>
          <textarea
            className=&quot;w-full min-h-[120px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
            placeholder={&quot;e.g.\nCore Web Vitals deep-dive\nActionable prioritised recommendations\nHands-on fixes or step-by-step guidance&quot;}
            value={featuresInput}
            onChange={(e) => setFeaturesInput(e.target.value)}
            required
          />
        </div>

        <div>
          <label className=&quot;block text-sm font-medium mb-1&quot;>Tone</label>
          <select
            className=&quot;w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
            value={tone}
            onChange={(e) => setTone(e.target.value as any)}
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
            className=&quot;w-full min-h-[80px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
            placeholder=&quot;Constraints, deliverables, timeline, pricing preferences, compliance, etc.&quot;
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
          />
        </div>

        <div className=&quot;flex items-center gap-3&quot;>
          <button
            type=&quot;submit&quot;
            disabled={loading}
            className=&quot;inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 disabled:opacity-60&quot;
          >
            {loading ? 'Generating…' : 'Generate Description'}
          </button>
          {error && <span className=&quot;text-red-600 text-sm&quot;>{error}</span>}
        </div>
      </form>

      {generated && (
        <div className=&quot;mt-8 space-y-3&quot;>
          <div className=&quot;flex items-center justify-between&quot;>
            <h2 className=&quot;text-xl font-semibold&quot;>Generated Description</h2>
            <div className=&quot;flex items-center gap-2&quot;>
              <button
                onClick={handleCopy}
                className=&quot;rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800&quot;
              >
                Copy
              </button>
              <button
                onClick={handleAccept}
                className=&quot;rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm&quot;
              >
                Accept
              </button>
            </div>
          </div>

          <textarea
            className=&quot;w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
            value={generated}
            onChange={(e) => setGenerated(e.target.value)}
          />

          {accepted && (
            <div className=&quot;text-emerald-700 dark:text-emerald-400 text-sm&quot;>Accepted. You can copy and paste this into your CMS.</div>
          )}
        </div>
      )}
    </div>
  );
}