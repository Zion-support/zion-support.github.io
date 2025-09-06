export default function ServiceDescriptionGeneratorPage() {
export default function ServiceDescriptionGeneratorPage(req, res) {
  try {
export default function ServiceDescriptionGeneratorPage() {;
export default function ServiceDescriptionGeneratorPage(req, res) {
  try {



export default function ServiceDescriptionGeneratorPage(req, res) {
  try {


export default function ServiceDescriptionGeneratorPage() {;
  const [title, setTitle] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [featuresInput, setFeaturesInput] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
<<<<<<< HEAD


  const [tone, setTone] = useState<
    'professional' | 'friendly' | 'persuasive' | 'technical'

  >('professional');


=======
const [tone, setTone] = useState<
    'professional' | 'friendly' | 'persuasive' | 'technical'
  >('professional');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null),
  const [generated, setGenerated] = useState('');
  const [accepted, setAccepted] = useState(false);
<<<<<<< HEAD

  const keyFeatures = useMemo(() => {
    return featuresInput
      .split('\n')
      .map(f => f.trim())
      .filter(Boolean);  }, [featuresInput]);
=======
.map(f => f.trim())
      .filter(Boolean);
  }, [featuresInput]);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
  const [error, setError] = useState<string | null>(null);
  const [generated, setGenerated] = useState('');
  const [accepted, setAccepted] = useState(false);
  const keyFeatures = useMemo(() => {;
    return featuresInput;
      .split('\n');
      .map((f) => f.trim());
      .filter(Boolean);
  }, [featuresInput]),;
  async function handleSubmit(e: React.FormEvent) {;
    e.preventDefault(),;
    setLoading(true);
    setError(null);
    setAccepted(false);
    try {
      const response = await fetch('/api/generate-service-description', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({;
          title,;
          keyFeatures,;
          targetAudience,;
          additionalNotes: additionalNotes || undefined,;
    } finally {;
      setLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
    if (!generated) return;
    navigator.clipboard.writeText(generated).catch(() => {});
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}




=======
navigator.clipboard.writeText(generated).catch(() => {});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  }
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Service Description Generator</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Enter your service details. We will generate a polished description using GPT-4. You can edit it on the page and accept when ready.
      </p>
      <form
        onSubmit={handleSubmit}
        className='space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4'>;
        <div>;
          <label className='block text-sm font-medium mb-1'>;
            Service Title;
          </label>;
          <input
            type='text'
            className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='e && e.g., On-Demand Web Performance Audit'
            value={title}
<<<<<<< HEAD

    setAccepted(true)
  }


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
        <div>;
          <label className='block text-sm font-medium mb-1'>;
            Target Audience;
          </label>;
=======
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
<label className='block text-sm font-medium mb-1'>
            Target Audience
          </label>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          <input
            type='text'
            className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='e && e.g., CTOs and product teams at growth-stage SaaS'
            value={targetAudience}
<<<<<<< HEAD
=======
            onChange={e => setTargetAudience(e.target.value)}
            required
          />
        </div>
        <div>
<label className='block text-sm font-medium mb-1'>
            Key Features (one per line)
          </label>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          <textarea
            className='w-full min-h-[120px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder={
              'e && e.g.\nCore Web Vitals deep-dive\nActionable prioritised recommendations\nHands-on fixes or step-by-step guidance'
            }
            value={featuresInput}
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            className='w-full min-h-[80px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Constraints, deliverables, timeline, pricing preferences, compliance, etc.'
            value={additionalNotes}


          <button
            type='submit'
            disabled={loading}
            className='inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 disabled:opacity-60'>;
              <button
                onClick={handleCopy}
                className='rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800'>;
                Copy;
              </button>;
              <button
                onClick={handleAccept}
          <button
            type="submit"
            disabled={loading}
          <button
            type="submit"
            disabled={loading  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 disabled:opacity-60"
          >
            {loading ? 'Generating…' : 'Generate Description'}
          </button>
<<<<<<< HEAD
          {error && <span className="text-red-600 text-sm">{error}</span>}
=======
          {error && <span className='text-red-600 text-sm'>{error}</span>}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
        </div>
      </form>

      {generated && (
<<<<<<< HEAD
        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Generated Description</h2>
            <div className="flex items-center gap-2">
              <button
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
=======
<div className='mt-8 space-y-3'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold'>Generated Description</h2>
            <div className='flex items-center gap-2'>
              <button
                onClick={handleCopy}
                className='rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              >
                Copy
              </button>
              <button
<<<<<<< HEAD
=======
                onClick={handleAccept}
className='rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm'
              >
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                Accept
              </button>
            </div>
          </div>
<<<<<<< HEAD
            className="w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
=======
          <textarea
className='w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            value={generated}
            onChange={(e) => setGenerated(e.target.value)}
          />

          {accepted && (
<<<<<<< HEAD
            <div className="text-emerald-700 dark:text-emerald-400 text-sm">Accepted. You can copy and paste this into your CMS.</div>
=======
            <div className='text-emerald-700 dark:text-emerald-400 text-sm'>
              Accepted. You can copy and paste this into your CMS.
            </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          )}
        </div>
      )}
    </div>
<<<<<<< HEAD
            <div className="text-emerald-700 dark:text-emerald-400 text-sm">Accepted. You can copy and paste this into your CMS.</div>
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  )
}


}

        <div>;
          <label className='block text - sm font - medium mb - 1'>;
            Additional Notes (optional);
          </label>;
          <textarea;
            className='w - full min - h-[80px] rounded - md border border - gray - 300 dark:border - gray - 700 bg - transparent px - 3 py - 2 focus:outline - none focus:ring - 2 focus:ring - blue - 500';
            placeholder='Constraints, deliverables, timeline, pricing preferences, compliance, etc.';
            value={additional_notes}
            on_change={e => setAdditionalNotes (e.target.value)}
          />;
        </div>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
