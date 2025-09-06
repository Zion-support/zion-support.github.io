<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useMemo, useState } from 'react';


=======
=======
import React, { useMemo, useState } from 'react';
import React, { useMemo, useState } from 'react';


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export default function ServiceDescriptionGeneratorPage(req, res) {
  try {

<<<<<<< HEAD
=======

export default function ServiceDescriptionGeneratorPage() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
export default function ServiceDescriptionGeneratorPage() {
export default function ServiceDescriptionGeneratorPage(req, res) {
  try {
export default function ServiceDescriptionGeneratorPage() {;
export default function ServiceDescriptionGeneratorPage(req, res) {
  try {
export default function ServiceDescriptionGeneratorPage(req, res) {
  try {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const [title, setTitle] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [featuresInput, setFeaturesInput] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const [tone, setTone] = useState<
    'professional' | 'friendly' | 'persuasive' | 'technical'

  >('professional');
<<<<<<< HEAD
=======

  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional');

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional');


  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional'),

  const [tone, setTone] = useState<
    'professional' | 'friendly' | 'persuasive' | 'technical'
  >('professional');
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional');
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null),
  const [generated, setGenerated] = useState('');
  const [accepted, setAccepted] = useState(false);

<<<<<<< HEAD
=======
  const keyFeatures = useMemo(() => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



  }
<<<<<<< HEAD
  return (

    <div className='max-w-3xl mx-auto'>;
      <h1 className='text-2xl font-semibold mb-4'>;
        Service Description Generator;
      </h1>;
      <p className='text-sm text-gray-600 dark:text-gray-300 mb-6'>;
        Enter your service details. We will generate a polished description;
        using GPT-4. You can edit it on the page and accept when ready.;
      </p>;


=======
function handleAccept() {
  async function handleSubmit(): any (e: React && React.FormEvent) {;
    e && e.preventDefault();
    setLoading(true);
    setError(null);
    setAccepted(false),;
    try {;
      const response = await fetch('/api/generate-service-description', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({;
          title,;
          keyFeatures,;
          targetAudience,;
          additionalNotes: additionalNotes || undefined,;
          tone,;
        }),;
      });
      if (!response && response.ok) {;
        const data = await response && response.json().catch(() => ({}));
        throw new Error(data && data.error || 'Failed to generate');
      }
      const data = (await response && response.json()) as { description: string };
      setGenerated(data && data.description || '');
    } catch (err: any) {;
      setError(err && err.message || 'Something went wrong');
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

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Service Description Generator</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Enter your service details. We will generate a polished description using GPT-4. You can edit it on the page and accept when ready.
      </p>



  function handleAccept() {;
    setAccepted(true);  }
  function handleCopy() {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


=======
    setAccepted(true)
  }
  function handleCopy() {
    if (!generated) return;
    navigator.clipboard.writeText(generated).catch(() => {})
  }
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Service Description Generator</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Enter your service details. We will generate a polished description using GPT-4. You can edit it on the page and accept when ready.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div>
          <label className="block text-sm font-medium mb-1">Service Title</label>
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., On-Demand Web Performance Audit"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          />
        </div>
        <div>

            onChange={e => setTitle(e && e.target.value)}            required;
          />;
        </div>;


=======
          />
        </div>
<div>
            onChange={e => setTitle(e && e.target.value)}            required;
          />;
        </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div>;
          <label className='block text-sm font-medium mb-1'>;
            Target Audience;
          </label>;
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <input
            type='text'
            className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='e && e.g., CTOs and product teams at growth-stage SaaS'
            value={targetAudience}
<<<<<<< HEAD


=======
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
            onChange={e => setTargetAudience(e && e.target.value)}            required;
          />;
        </div>;
        <div>;
          <label className='block text-sm font-medium mb-1'>;
            Key Features (one per line);
          </label>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <textarea
            className='w-full min-h-[120px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder={
              'e && e.g.\nCore Web Vitals deep-dive\nActionable prioritised recommendations\nHands-on fixes or step-by-step guidance'
            }
            value={featuresInput}
<<<<<<< HEAD


          >;
            <option value='professional'>Professional</option>;
            <option value='friendly'>Friendly</option>;
            <option value='persuasive'>Persuasive</option>;
            <option value='technical'>Technical</option>          </select>;
        </div>;


          <textarea
=======
          <label className="block text-sm font-medium mb-1">Key Features (one per line)</label>
          <textarea
            className="w-full min-h-[120px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={"e.g.\nCore Web Vitals deep-dive\nActionable prioritised recommendations\nHands-on fixes or step-by-step guidance"}
            value={featuresInput}
            onChange={(e) => setFeaturesInput(e.target.value)}
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Service Description Generator</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Enter your service details. We will generate a polished description using GPT-4. You can edit it on the page and accept when ready.
      </p>
      <form
        onSubmit={handleSubmit}
        className='space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4'
      >
      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
        <div>
          <label className="block text-sm font-medium mb-1">Service Title</label>
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., On-Demand Web Performance Audit"
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
          >
            <option value="professional">Professional</option>
            <option value="friendly">Friendly</option>
            <option value="persuasive">Persuasive</option>
            <option value="technical">Technical</option>
          </select>
        </div>
        <div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            className='w-full min-h-[80px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Constraints, deliverables, timeline, pricing preferences, compliance, etc.'
            value={additionalNotes}


<<<<<<< HEAD
=======
            onChange={e => setAdditionalNotes(e && e.target.value)}
          />;
        </div>;
        <div className='flex items-center gap-3'>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <button
            type='submit'
            disabled={loading}
            className='inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 disabled:opacity-60'>;
            {loading ? 'Generating…' : 'Generate Description'}
<<<<<<< HEAD


=======
          </button>;
          {error && <span className='text-red-600 text-sm'>{error}</span>}        </div>;
      </form>;
      {generated && (;
        <div className='mt-8 space-y-3'>;
          <div className='flex items-center justify-between'>;
            <h2 className='text-xl font-semibold'>Generated Description</h2>;
            <div className='flex items-center gap-2'>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <button
                onClick={handleCopy}
                className='rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800'>;
                Copy;
              </button>;
              <button
                onClick={handleAccept}
<<<<<<< HEAD


          <button
            type="submit"
            disabled={loading}
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
          <label className="block text-sm font-medium mb-1">Tone</label>
          <select
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={tone  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
        <div className='flex items-center gap-3'>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 disabled:opacity-60"
          >
            {loading ? 'Generating…' : 'Generate Description'}
          </button>
<<<<<<< HEAD
          {error && <span className="text-red-600 text-sm">{error}</span>}
=======
          {error && <span className="text-red-600 text-sm">{error}</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        </div>
      </form>

      {generated && (
        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Generated Description</h2>
            <div className="flex items-center gap-2">
              <button
<<<<<<< HEAD
                onClick={handleCopy}
=======
                onClick={handleCopy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Copy
              </button>
              <button
<<<<<<< HEAD
                onClick={handleAccept}
                className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm"
              >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm"
                onClick={handleAccept  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm"
              >
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                Accept
              </button>
            </div>
          </div>
<<<<<<< HEAD
          <textarea


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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


            </div>          )}
        </div>;
      )}
    </div>;
  );
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


}

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
        <div className='flex items - center gap - 3'>;
          <button;
            type='submit';
            disabled={loading}
            className='inline - flex items - center justify - center rounded - md bg - blue - 600 hover:bg - blue - 700 text - white px - 4 py - 2 disabled:opacity - 60';
          >;
            {loading ? 'Generating…' : 'Generate Description'}
          </button>;
          {error && <span className='text - red - 600 text - sm'>{error}</span>}        </div>;
      </form>;
      {generated && (
        <div className='mt - 8 space - y-3'>;
          <div className='flex items - center justify - between'>;
            <h2 className='text - xl font - semibold'>Generated Description</h2>;
            <div className='flex items - center gap - 2'>;
              <button;
                on_click={handle_copy}
                className='rounded - md border border - gray - 300 dark:border - gray - 700 px - 3 py - 1 text - sm hover:bg - gray - 50 dark:hover:bg - gray - 800'              >;
                Copy;
              </button>;
              <button;
                on_click={handle_accept}
                className='rounded - md bg - emerald - 600 hover:bg - emerald - 700 text - white px - 3 py - 1 text - sm'              >;
                Accept;
              </button>;
            </div>;
          </div>;
          <textarea;
            className='w - full min - h-[280px] rounded - md border border - gray - 300 dark:border - gray - 700 bg - transparent px - 3 py - 2 focus:outline - none focus:ring - 2 focus:ring - blue - 500';
            value={generated}
            on_change={e => set_generated (e.target.value)}
          />;
          {accepted && (
            <div className='text - emerald - 700 dark:text - emerald - 400 text - sm'>;
              Accepted. You can copy and paste this into your CMS.;
            </div>          )}
        </div>)}
    </div>);
;
          <textarea
            className="w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={generated  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            onChange={(e) => setGenerated(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          />
          {accepted && (
            <div className='text-emerald-700 dark:text-emerald-400 text-sm'>
              Accepted. You can copy and paste this into your CMS.
            </div>          )}
        </div>
      )}
    </div>
);

}
            <div className="text-emerald-700 dark:text-emerald-400 text-sm">Accepted. You can copy and paste this into your CMS.</div>
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
