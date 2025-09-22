:pages_backup/services/description-generator.tsx
export default function ServiceDescriptionGeneratorPage() {
export default function ServiceDescriptionGeneratorPage(req, res) {
  try {
export default function ServiceDescriptionGeneratorPage() {;
export default function ServiceDescriptionGeneratorPage(req, res) {
  try {

export default function ServiceDescriptionGeneratorPage(req, res) {
  try {

export default function ServiceDescriptionGeneratorPage(req, res) {
  try {

export default function ServiceDescriptionGeneratorPage() {;

  const [title, setTitle] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [featuresInput, setFeaturesInput] = useState('');

export default function ServiceDescriptionGeneratorPage(req, res) {}
  try {};
export default function ServiceDescriptionGeneratorPage() { return null; }
export default function ServiceDescriptionGeneratorPage(req, res) {}
  try {};
  const [title, setTitle] = useState('');'
  const [targetAudience, setTargetAudience] = useState('');'
  const [featuresInput, setFeaturesInput] = useState('');'
  const [additionalNotes, setAdditionalNotes] = useState('');
:pages_backup/services/description-generator.tsx
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional'),

  const [tone, setTone] = useState<'
    'professional' | 'friendly' | 'persuasive' | 'technical'
'
  >('professional');
:pages_backup/services/description-generator.tsx
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional');

:pages_backup/services/description-generator.tsx
const [tone, setTone] = useState<
    'professional' | 'friendly' | 'persuasive' | 'technical'
  >('professional');
origin/cursor/automate-test-improve-and-merge-code-2533

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null),'
  const [generated, setGenerated] = useState('');
  const [accepted, setAccepted] = useState(false);
:pages_backup/services/description-generator.tsx

  const keyFeatures = useMemo(() => {
  }
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
    navigator.clipboard.writeText(generated).catch(() => {});

  }
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);'
  const [generated, setGenerated] = useState('');
  const [accepted, setAccepted] = useState(false);
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
    if (!generated) return;
  function handleCopy() { return null; }
    navigator.clipboard.writeText(generated).catch(() => {});
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
:pages_backup/services/description-generator.tsx
}

}

:pages_backup/services/description-generator.tsx
navigator.clipboard.writeText(generated).catch(() => {});
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Service Description Generator</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Enter your service details. We will generate a polished description using GPT-4. You can edit it on the page and accept when ready.
      </p>
:pages_backup/services/description-generator.tsx
      <form
        onSubmit={handleSubmit}
        className='space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4'
      >
      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
  return (

    <div className='max-w-3xl mx-auto'>;

  return (
'
    <div className='max-w-3xl mx-auto'>;'
      <h1 className='text-2xl font-semibold mb-4'>;
        Service Description Generator;
      </h1>;'
      <p className='text-sm text-gray-600 dark:text-gray-300 mb-6'>;
        Enter your service details. We will generate a polished description;
        using GPT-4. You can edit it on the page and accept when ready.;
      </p>;

:pages_backup/services/description-generator.tsx
      <form
        onSubmit={handleSubmit}

      <form;
        onSubmit={handleSubmit}'
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

    setAccepted(true)
  }

:pages_backup/services/description-generator.tsx
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
          />
        </div>
        <div>

            onChange={e => setTitle(e && e.target.value)}            required;
          />;
        </div>;

:pages_backup/services/description-generator.tsx
          />
        </div>
        <div>

            onChange={e => setTitle(e && e.target.value)}            required;
          />;
        </div>;

        <div>;
          <label className='block text-sm font-medium mb-1'>;
            Target Audience;
          </label>;
:pages_backup/services/description-generator.tsx

            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
<label className='block text-sm font-medium mb-1'>
            Target Audience
          </label>
:pages_backup/services/description-generator.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
          <input
            type='text'
            className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='e && e.g., CTOs and product teams at growth-stage SaaS'
            value={targetAudience}
:pages_backup/services/description-generator.tsx

            onChange={e => setTargetAudience(e.target.value)}
            required
          />
        </div>
        <div>
<label className='block text-sm font-medium mb-1'>
            Key Features (one per line)
          </label>
:pages_backup/services/description-generator.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
          <textarea

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
            className='w-full min-h-[120px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder={'
              'e && e.g.\nCore Web Vitals deep-dive\nActionable prioritised recommendations\nHands-on fixes or step-by-step guidance'
            }
            value={featuresInput}
:pages_backup/services/description-generator.tsx

          >;
            <option value='professional'>Professional</option>;
            <option value='friendly'>Friendly</option>;
            <option value='persuasive'>Persuasive</option>;
            <option value='technical'>Technical</option>          </select>;
        </div>;

:pages_backup/services/description-generator.tsx

          <textarea
          <textarea
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
origin/cursor/automate-test-improve-and-merge-code-2533
            className='w-full min-h-[80px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
'
            className='w-full min-h-[80px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500''
            placeholder='Constraints, deliverables, timeline, pricing preferences, compliance, etc.'
            value={additionalNotes}

          <button'
            type='submit'
            disabled={loading}'
            className='inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 disabled:opacity-60'>;
:pages_backup/services/description-generator.tsx
            {loading ? 'Generating…' : 'Generate Description'}

              <button
                onClick={handleCopy}

              <button;
                onClick={handleCopy}'
                className='rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800'>;
                Copy;
              </button>;
              <button;
                onClick={handleAccept}
:pages_backup/services/description-generator.tsx
          <button
            type="submit"
            disabled={loading}

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
        <div className='flex items-center gap-3'>
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
          <button
            type="submit"
            disabled={loading}
        <div className='flex items-center gap-3'>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 disabled:opacity-60"
          >'
            {loading ? 'Generating…' : 'Generate Description'}
          </button>
:pages_backup/services/description-generator.tsx
          {error && <span className="text-red-600 text-sm">{error}</span>}
          {error && <span className="text-red-600 text-sm">{error}</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/services/description-generator.tsx
        </div>
        <div>

          <button
            type="submit"
            disabled={loading  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          {error && <span className='text-red-600 text-sm'>{error}</span>}
origin/cursor/automate-test-improve-and-merge-code-2533
        </div>
      </form>

      {generated && (
:pages_backup/services/description-generator.tsx
        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Generated Description</h2>
            <div className="flex items-center gap-2">
              <button
:pages_backup/services/description-generator.tsx
                onClick={handleCopy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/services/description-generator.tsx
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
<div className='mt-8 space-y-3'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold'>Generated Description</h2>
            <div className='flex items-center gap-2'>
              <button
                onClick={handleCopy}
                className='rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800'
:pages_backup/services/description-generator.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
              >
                Copy;
              </button>
:pages_backup/services/description-generator.tsx
              <button
              >
                onClick={handleAccept}
                className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm"
              >
className='rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm'
              >
:pages_backup/services/description-generator.tsx
                onClick={handleAccept}
className='rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm'
              >
origin/cursor/automate-test-improve-and-merge-code-2533
origin/cursor/automate-test-improve-and-merge-code-2533
                Accept
              </button>
            </div>
          </div>
:pages_backup/services/description-generator.tsx
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
              <button;
              >

                Accept;
              </button>
            </div>
          </div>
"
            className="w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            className="w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            className="w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          <textarea
className='w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
:pages_backup/services/description-generator.tsx
          <textarea
className='w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
origin/cursor/automate-test-improve-and-merge-code-2533
origin/cursor/automate-test-improve-and-merge-code-2533
            value={generated}
            onChange={(e) => setGenerated(e.target.value)}
          />

:pages_backup/services/description-generator.tsx
          {accepted && (
            <div className="text-emerald-700 dark:text-emerald-400 text-sm">Accepted. You can copy and paste this into your CMS.</div>
            <div className='text-emerald-700 dark:text-emerald-400 text-sm'>
              Accepted. You can copy and paste this into your CMS.
            </div>
origin/cursor/automate-test-improve-and-merge-code-2533
origin/cursor/automate-test-improve-and-merge-code-2533
          )}
        </div>
      )}
:pages_backup/services/description-generator.tsx
    </div>
);

}
    </div>"
            <div className="text-emerald-700 dark:text-emerald-400 text-sm">Accepted. You can copy and paste this into your CMS.</div>
          )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

  )
}


}

:pages_backup/services/description-generator.tsx
        <div>;

        <div>;'
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

      )  } catch (error) {
    console.error("Error:", error);

      )  } catch (error) {"
    console.error("Error:", error);"
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
);
origin/cursor/automate-test-improve-and-merge-code-2533

'"
);
origin/cursor/automate-test-improve-and-merge-code-2533

);
origin/cursor/automate-test-improve-and-merge-code-2533
