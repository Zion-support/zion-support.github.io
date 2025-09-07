<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
export default function ServiceDescriptionGeneratorPage() {
=======

<<<<<<< HEAD

export default function ServiceDescriptionGeneratorPage() {;
export default function ServiceDescriptionGeneratorPage(req, res) {
  try {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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

export default function ServiceDescriptionGeneratorPage(req, res) {
  try {

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function ServiceDescriptionGeneratorPage(req, res) {
  try {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
export default function ServiceDescriptionGeneratorPage() {;
=======
export default function ServiceDescriptionGeneratorPage(req, res) {
  try {
<<<<<<< HEAD
=======
export default function ServiceDescriptionGeneratorPage() {

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

export default function ServiceDescriptionGeneratorPage(req, res) {
  try {

export default function ServiceDescriptionGeneratorPage(req, res) {
  try {
export default function ServiceDescriptionGeneratorPage() {;
export default function ServiceDescriptionGeneratorPage(req, res) {
  try {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export default function ServiceDescriptionGeneratorPage(req, res) {
  try {



export default function ServiceDescriptionGeneratorPage(req, res) {
  try {


export default function ServiceDescriptionGeneratorPage() {;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional'),
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx

=======

<<<<<<< HEAD:pages_backup/services/description-generator.tsx
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  const [tone, setTone] = useState<'
    'professional' | 'friendly' | 'persuasive' | 'technical'
'
  >('professional');
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  const [tone, setTone] = useState<'professional' | 'friendly' | 'persuasive' | 'technical'>('professional');
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx






<<<<<<< HEAD:pages_backup/services/description-generator.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services/description-generator.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD

<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
  const keyFeatures = useMemo(() => {
  }
<<<<<<< HEAD
=======
  function handleAccept() {
    setAccepted(true);  }
  function handleCopy() {
    if (!generated) return;
    navigator.clipboard.writeText(generated).catch(() => {});
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
<<<<<<< HEAD

  const keyFeatures = useMemo(() => {
    return featuresInput
      .split('\n')
      .map(f => f.trim())
      .filter(Boolean);  }, [featuresInput]);
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services/description-generator.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
    navigator.clipboard.writeText(generated).catch(() => {});

  }
=======


  }'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
          tone})}),;
      if (!response.ok) {;
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to generate');
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      const data = (await response.json()) as { description: string };
      setGenerated(data.description || '');
    } catch (error) {
      setError(err.message || 'Something went wrong');
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
    } finally {;
      setLoading(false);
      } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
  function handleCopy() {;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    if (!generated) return;
=======
  function handleCopy() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
    navigator.clipboard.writeText(generated).catch(() => {});
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

<<<<<<< HEAD
}




  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

  }
}

}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx

}




<<<<<<< HEAD:pages_backup/services/description-generator.tsx
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services/description-generator.tsx
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}
  return (

    <div className='max-w-3xl mx-auto'>;
      <h1 className='text-2xl font-semibold mb-4'>;
        Service Description Generator;
      </h1>;
      <p className='text-sm text-gray-600 dark:text-gray-300 mb-6'>;
        Enter your service details. We will generate a polished description;
        using GPT-4. You can edit it on the page and accept when ready.;
      </p>;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
      <form
        onSubmit={handleSubmit}
        className='space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4'
      >
      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
=======
=======
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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


<<<<<<< HEAD:pages_backup/services/description-generator.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx

    setAccepted(true)
  }


<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div>
=======
        <div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
          <label className="block text-sm font-medium mb-1">Service Title</label>
          <input"
            type="text""
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500""
            placeholder="e.g., On-Demand Web Performance Audit"
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
          />
        </div>
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
          />
        </div>
        <div>

            onChange={e => setTitle(e && e.target.value)}            required;
          />;
        </div>;


<<<<<<< HEAD:pages_backup/services/description-generator.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services/description-generator.tsx
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/services/description-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services/description-generator.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
          <input
            type='text'
            className='w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='e && e.g., CTOs and product teams at growth-stage SaaS'
            value={targetAudience}
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services/description-generator.tsx
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/services/description-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services/description-generator.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx

          >;
            <option value='professional'>Professional</option>;
            <option value='friendly'>Friendly</option>;
            <option value='persuasive'>Persuasive</option>;
            <option value='technical'>Technical</option>          </select>;
        </div>;

<<<<<<< HEAD:pages_backup/services/description-generator.tsx

          <textarea
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services/description-generator.tsx
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/services/description-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services/description-generator.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
            {loading ? 'Generating…' : 'Generate Description'}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
          <button
            type="submit"
            disabled={loading}
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx





          <button"
            type="submit"
            disabled={loading  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
=======

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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
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
=======
=======
        <div className="flex items-center gap-3">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
            className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 disabled:opacity-60"
          >'
            {loading ? 'Generating…' : 'Generate Description'}
          </button>
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
          {error && <span className="text-red-600 text-sm">{error}</span>}
=======
<<<<<<< HEAD
<<<<<<< HEAD
          {error && <span className="text-red-600 text-sm">{error}</span>}
=======
=======
          {error && <span className="text-red-600 text-sm">{error}</span>}
          {error && <span className="text-red-600 text-sm">{error}</span>}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
          {error && <span className="text-red-600 text-sm">{error}</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
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
      {generated && (
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services/description-generator.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
          {error && <span className='text-red-600 text-sm'>{error}</span>}
origin/cursor/automate-test-improve-and-merge-code-2533
        </div>
      </form>

      {generated && (
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Generated Description</h2>
            <div className="flex items-center gap-2">
              <button
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                onClick={handleCopy}
=======
=======
                onClick={handleCopy}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
                onClick={handleCopy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======


        </div>
      </form>

      {generated && ("
        <div className="mt-8 space-y-3">"
          <div className="flex items-center justify-between">"
            <h2 className="text-xl font-semibold">Generated Description</h2>"
            <div className="flex items-center gap-2">
              <button;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
=======
                className="rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services/description-generator.tsx
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/services/description-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services/description-generator.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
              >
                Copy;
              </button>
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
              <button
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
                onClick={handleAccept}
                className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
                onClick={handleAccept}
                className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm"
              >
className='rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm'
              >
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                onClick={handleAccept}
className='rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 text-sm'
              >
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services/description-generator.tsx
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          <textarea


=======
          <textarea

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
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

<<<<<<< HEAD:pages_backup/services/description-generator.tsx

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
            </div>          )}
        </div>;
      )}

    </div>;
  );

<<<<<<< HEAD:pages_backup/services/description-generator.tsx
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <textarea
className='w-full min-h-[280px] rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services/description-generator.tsx
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

<<<<<<< HEAD:pages_backup/services/description-generator.tsx
          {accepted && (
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
=======
          {accepted && ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx
            <div className="text-emerald-700 dark:text-emerald-400 text-sm">Accepted. You can copy and paste this into your CMS.</div>
=======
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/services/description-generator.tsx
            <div className="text-emerald-700 dark:text-emerald-400 text-sm">Accepted. You can copy and paste this into your CMS.</div>
            <div className='text-emerald-700 dark:text-emerald-400 text-sm'>
              Accepted. You can copy and paste this into your CMS.
            </div>
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            <div className='text-emerald-700 dark:text-emerald-400 text-sm'>
              Accepted. You can copy and paste this into your CMS.
            </div>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services/description-generator.tsx
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
    </div>
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
);


}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  )
}
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  )
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/services/description-generator.tsx


}

<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
<<<<<<< HEAD:pages_backup/services/description-generator.tsx
=======
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
