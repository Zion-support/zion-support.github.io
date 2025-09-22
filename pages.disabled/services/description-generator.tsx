:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
export default function ServiceDescriptionGeneratorPage() {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export default function ServiceDescriptionGeneratorPage(req, res) {
  try {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
export default function ServiceDescriptionGeneratorPage() {;
=======
export default function ServiceDescriptionGeneratorPage(req, res) {
  try {

export default function ServiceDescriptionGeneratorPage(req, res) {
  try {

export default function ServiceDescriptionGeneratorPage(req, res) {
  try {

export default function ServiceDescriptionGeneratorPage() {;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [title, setTitle] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [featuresInput, setFeaturesInput] = useState('');
=======

export default function ServiceDescriptionGeneratorPage(req, res) {}
  try {};
export default function ServiceDescriptionGeneratorPage() { return null; }
export default function ServiceDescriptionGeneratorPage(req, res) {}
  try {};
  const [title, setTitle] = useState('');'
  const [targetAudience, setTargetAudience] = useState('');'
  const [featuresInput, setFeaturesInput] = useState('');'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
  const [additionalNotes, setAdditionalNotes] = useState('');
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional'),

  const [tone, setTone] = useState<'
    'professional' | 'friendly' | 'persuasive' | 'technical'
'
  >('professional');
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional');
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

:pages_backup/services/description-generator.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const [tone, setTone] = useState<
    'professional' | 'friendly' | 'persuasive' | 'technical'
  >('professional');
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null),'
  const [generated, setGenerated] = useState('');
  const [accepted, setAccepted] = useState(false);
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD

<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
  const keyFeatures = useMemo(() => {
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
.map(f => f.trim())
      .filter(Boolean);
  }, [featuresInput]);

origin/cursor/automate-test-improve-and-merge-code-2533
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
title,
          keyFeatures,
          targetAudience,
          additionalNotes: additionalNotes || undefined,
          tone,
        }),
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
      setLoading(false);
    }
  }
  function handleAccept() {
setAccepted(true);
  }

  function handleCopy() {
    if (!generated) return;
<<<<<<< HEAD
    navigator.clipboard.writeText(generated).catch(() => {});

  }
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);'
  const [generated, setGenerated] = useState('');
  const [accepted, setAccepted] = useState(false);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const keyFeatures = useMemo(() => {;
    return featuresInput;'
      .split('\n');
      .map((f) => f.trim());
      .filter(Boolean);
  }, [featuresInput]),;
  async function handleSubmit() { return null; }
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({;
          title,;
          keyFeatures,;
          targetAudience,;
          additionalNotes: additionalNotes || undefined,;
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
    } finally {;
      setLoading(false);
      } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  function handleAccept() { return null; }
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function handleCopy() {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    if (!generated) return;
=======
  function handleCopy() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
    navigator.clipboard.writeText(generated).catch(() => {});
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

}

:pages_backup/services/description-generator.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
navigator.clipboard.writeText(generated).catch(() => {});
origin/cursor/automate-test-improve-and-merge-code-2533
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Service Description Generator</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Enter your service details. We will generate a polished description using GPT-4. You can edit it on the page and accept when ready.
      </p>
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      <form
        onSubmit={handleSubmit}
        className='space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4'
      >
      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (

    <div className='max-w-3xl mx-auto'>;
=======

  return (
'
    <div className='max-w-3xl mx-auto'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
      <h1 className='text-2xl font-semibold mb-4'>;
        Service Description Generator;
      </h1>;'
      <p className='text-sm text-gray-600 dark:text-gray-300 mb-6'>;
        Enter your service details. We will generate a polished description;
        using GPT-4. You can edit it on the page and accept when ready.;
      </p>;

:pages_backup/services/description-generator.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      <form
        onSubmit={handleSubmit}
=======

      <form;
        onSubmit={handleSubmit}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
        className='space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4'>;
        <div>;'
          <label className='block text-sm font-medium mb-1'>;
            Service Title;
          </label>;
          <input'
            type='text''
            className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500''
            placeholder='e && e.g., On-Demand Web Performance Audit'
            value={title}
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD

    setAccepted(true)
  }

:pages_backup/services/description-generator.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div>
          <label className="block text-sm font-medium mb-1">Service Title</label>
          <input"
            type="text""
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500""
            placeholder="e.g., On-Demand Web Performance Audit"
:pages_backup/services/description-generator.tsx
value={title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            onChange={(e) => setTitle(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            required
<<<<<<< HEAD
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Target Audience</label>
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., CTOs and product teams at growth-stage SaaS"
            value={targetAudience  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            onChange={(e) => setTargetAudience(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Key Features (one per line)</label>
          <textarea
            className="w-full min-h-[120px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={"e.g.\nCore Web Vitals deep-dive\nActionable prioritised recommendations\nHands-on fixes or step-by-step guidance"  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            value={featuresInput  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            onChange={(e) => setFeaturesInput(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            required
          />
        </div>
<div>
          <label className="block text-sm font-medium mb-1">Tone</label>
          <select
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={tone}
            onChange={(e) => setTone(e.target.value as any)}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          />
        </div>
        <div>

            onChange={e => setTitle(e && e.target.value)}            required;
          />;
        </div>;

:pages_backup/services/description-generator.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
          />
        </div>
        <div>

            onChange={e => setTitle(e && e.target.value)}            required;
          />;
        </div>;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
        <div>;
          <label className='block text-sm font-medium mb-1'>;
            Target Audience;
          </label>;
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
<label className='block text-sm font-medium mb-1'>
            Target Audience
          </label>
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages/services/description-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
          <input
            type='text'
            className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='e && e.g., CTOs and product teams at growth-stage SaaS'
            value={targetAudience}
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
            onChange={e => setTargetAudience(e.target.value)}
            required
          />
        </div>
        <div>
<label className='block text-sm font-medium mb-1'>
            Key Features (one per line)
          </label>
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages/services/description-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
          <textarea
=======

        <div>;'
          <label className='block text-sm font-medium mb-1'>;
            Target Audience;
          </label>;

          <input'
            type='text''
            className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500''
            placeholder='e && e.g., CTOs and product teams at growth-stage SaaS'
            value={targetAudience}

          <textarea'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
            className='w-full min-h-[120px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder={'
              'e && e.g.\nCore Web Vitals deep-dive\nActionable prioritised recommendations\nHands-on fixes or step-by-step guidance'
            }
            value={featuresInput}
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD

          >;
            <option value='professional'>Professional</option>;
            <option value='friendly'>Friendly</option>;
            <option value='persuasive'>Persuasive</option>;
            <option value='technical'>Technical</option>          </select>;
        </div>;

:pages_backup/services/description-generator.tsx

          <textarea
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          <textarea
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
            onChange={e => setFeaturesInput(e.target.value)}
            required
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
            <option value='technical'>Technical</option>
          </select>
        </div>
        <div>
<label className='block text-sm font-medium mb-1'>
            Additional Notes (optional)
          </label>
          <textarea
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages/services/description-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
            className='w-full min-h-[80px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
=======
'
            className='w-full min-h-[80px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
            placeholder='Constraints, deliverables, timeline, pricing preferences, compliance, etc.'
            value={additionalNotes}

          <button'
            type='submit'
            disabled={loading}'
            className='inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 disabled:opacity-60'>;
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
            {loading ? 'Generating…' : 'Generate Description'}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
              <button
                onClick={handleCopy}
=======

              <button;
                onClick={handleCopy}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
                className='rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800'>;
                Copy;
              </button>;
              <button;
                onClick={handleAccept}
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
          <button
            type="submit"
            disabled={loading}
<<<<<<< HEAD:pages_backup/services/description-generator.tsx

          <button"
            type="submit"
            disabled={loading  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/services/description-generator.tsx
            onChange={(e) => setTone(e.target.value as any)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
:pages_backup/services/description-generator.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            className="w-full min-h-[80px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Constraints, deliverables, timeline, pricing preferences, compliance, etc."
            value={additionalNotes  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            onChange={(e) => setAdditionalNotes(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          />
        </div>
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
        <div className='flex items-center gap-3'>
<<<<<<< HEAD
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
          >
            <option value="professional">Professional</option>
            <option value="friendly">Friendly</option>
            <option value="persuasive">Persuasive</option>
            <option value="technical">Technical</option>
          </select>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
          <button
            type="submit"
            disabled={loading}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        <div className='flex items-center gap-3'>
        <div className="flex items-center gap-3">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
          <button
            type="submit"
            disabled={loading  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
            className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 disabled:opacity-60"
          >'
            {loading ? 'Generating…' : 'Generate Description'}
          </button>
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
          {error && <span className="text-red-600 text-sm">{error}</span>}
          {error && <span className="text-red-600 text-sm">{error}</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/services/description-generator.tsx
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </div>
        <div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          <button
            type="submit"
            disabled={loading  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
          {error && <span className='text-red-600 text-sm'>{error}</span>}
origin/cursor/automate-test-improve-and-merge-code-2533
        </div>
      </form>

      {generated && (
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Generated Description</h2>
            <div className="flex items-center gap-2">
              <button
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                onClick={handleCopy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/services/description-generator.tsx
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
<div className='mt-8 space-y-3'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold'>Generated Description</h2>
            <div className='flex items-center gap-2'>
              <button
                onClick={handleCopy}
                className='rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800'
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages/services/description-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
              >
                Copy;
              </button>
:pages_backup/services/description-generator.tsx
              <button
<<<<<<< HEAD
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                onClick={handleAccept}
                className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm"
              >
className='rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm'
              >
:pages_backup/services/description-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                onClick={handleAccept}
className='rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm'
              >
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
                Accept
              </button>
            </div>
          </div>
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                className='rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm'>;
                Accept;
              </button>;
            </div>;
          </div>;
          <textarea
            className='w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={generated}
            onChange={e => setGenerated(e && e.target.value)}
          />;
          {accepted && (;
            <div className='text-emerald-700 dark:text-emerald-400 text-sm'>;
              Accepted. You can copy and paste this into your CMS.;

:pages_backup/services/description-generator.tsx
            </div>          )}
        </div>;
      )}

    </div>;
  );

:pages_backup/services/description-generator.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              <button;
              >

                Accept;
              </button>
            </div>
          </div>
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
            className="w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
=======
=======
            className="w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
            className="w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          <textarea
className='w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
:pages_backup/services/description-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <textarea
className='w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
            value={generated}
            onChange={(e) => setGenerated(e.target.value)}
          />

:pages_backup/services/description-generator.tsx
          {accepted && (
<<<<<<< HEAD
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
            <div className="text-emerald-700 dark:text-emerald-400 text-sm">Accepted. You can copy and paste this into your CMS.</div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            <div className='text-emerald-700 dark:text-emerald-400 text-sm'>
              Accepted. You can copy and paste this into your CMS.
            </div>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
          )}
        </div>
      )}
:pages_backup/services/description-generator.tsx
    </div>
<<<<<<< HEAD
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
);

}
=======
    </div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
            <div className="text-emerald-700 dark:text-emerald-400 text-sm">Accepted. You can copy and paste this into your CMS.</div>
          )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
  )
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx

}

:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div>;
=======

        <div>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
          <label className='block text - sm font - medium mb - 1'>;
            Additional Notes (optional);
          </label>;
          <textarea;'
            className='w - full min - h-[80px] rounded - md border border - gray - 300 dark:border - gray - 700 bg - transparent px - 3 py - 2 focus:outline - none focus:ring - 2 focus:ring - blue - 500';'
            placeholder='Constraints, deliverables, timeline, pricing preferences, compliance, etc.';
            value={additional_notes}
            on_change={e => setAdditionalNotes (e.target.value)}
          />;
        </div>;
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
      )  } catch (error) {
    console.error("Error:", error);
=======

      )  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services/description-generator.tsx
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
=======
);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
