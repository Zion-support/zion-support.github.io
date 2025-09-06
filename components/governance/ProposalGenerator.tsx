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
import React, { useState } from 'react';

  targetInstitution: string;
  type: ProposalType;
  regionalScope: string;
  budgetOrGoals: string;
  supportingMultiverses: string;
  language?: string;
  customPrompt?: string;};export type ProposalForm = {

  language?: string;
  customPrompt?: string
}
export default function ProposalGenerator() {
  const [form, setForm] = useState<ProposalForm>({
    targetInstitution: 'UNDP'
    type: 'Workforce Dev'
    regionalScope: 'Global'
    budgetOrGoals: ''
    supportingMultiverses: ''
    language: 'English'
    customPrompt:



export type ProposalForm = {;

=======
export type ProposalForm = {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  targetInstitution: string;
;
export type ProposalForm = {
  target_institution: string;
  type: ProposalType;
  regionalScope: string;
  budgetOrGoals: string;
  supportingMultiverses: string;
  language?: string;
  customPrompt?: string;};export type ProposalForm = {
  targetInstitution: string
  type: ProposalType
  regionalScope: string
  budgetOrGoals: string
  supportingMultiverses: string
  targetInstitution: string,
  type: ProposalType,
  regionalScope: string,
  budgetOrGoals: string,
  supportingMultiverses: string,;
  language?: string;
  customPrompt?: string
}
=======


  language?: string;
  customPrompt?: string
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export type ProposalType = 'Workforce Dev' | 'AI Ethics' | 'Digital ID' | 'Education';
export type ProposalForm = {
  targetInstitution: string,
  custom_prompt?: string;}export type ProposalForm = {
  target_institution: string,
  type: ProposalType,
  regional_scope: string,
  budgetOrGoals: string,
  supporting_multiverses: string,
  language?: string;

  customPrompt?: string;};export type ProposalForm = {;
  targetInstitution: string,;
  type: ProposalType,;
  regionalScope: string,;
  budgetOrGoals: string,;
  supportingMultiverses: string,;
  language?: string;
  customPrompt?: string;
};
export default function ProposalGenerator() {;
  const [form, setForm] = useState<ProposalForm>({;
    targetInstitution: 'UNDP',;
    type: 'Workforce Dev',;
    regionalScope: 'Global',;
    budgetOrGoals: '',;
    supportingMultiverses: '',;
    language: 'English',;
    customPrompt:;
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.',;
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [draftMarkdown, setDraftMarkdown] = useState('');
  const [draftJson, setDraftJson] = useState<any>(null);

    pdfUrl?: string;
    jsonUrl?: string;
    mdUrl?: string;
  } | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

=======

  function handleChange<K extends keyof ProposalForm>(;
    key: K,;
    value: ProposalForm[K];
  ) {;

    setForm(prev => ({ ...prev, [key]: value }));  }  const [isGenerating, setIsGenerating] = useState(false);

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const [draftMarkdown, setDraftMarkdown] = useState('');
  const [draftJson, setDraftJson] = useState<any>(null);
  const [exportLinks, setExportLinks] = useState<{ pdfUrl?: string, jsonUrl?: string, mdUrl?: string } | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

=======

      setStatusMessage('Draft ready. You can edit and export.');
    } catch (e: any) {;
      console && console.error(e);
      setStatusMessage('Failed to generate. You can edit manually and export.');

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)}),
      const data = await res.json();
      setDraftMarkdown(data.markdown || '');
      setDraftJson(data.json || null);

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      setStatusMessage('Draft ready. You can edit and export.')
    } catch (e: any) {
      console.error(e);
      setStatusMessage('Failed to generate. You can edit manually and export.')
    } finally {
      setIsGenerating(false)

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    }
  }

  async function handleExport() {

    }
  }

  async function handleExport() {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    setStatusMessage('Exporting to PDF/Markdown/JSON...');
    try {
      const res = await fetch('/api/proposals/export', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({

=======
          markdown: draftMarkdown,
          json: draftJson,
          meta: form})}),
      const data = await res.json();
      setExportLinks({
        pdfUrl: data.pdfUrl
        jsonUrl: data.jsonUrl
        mdUrl: data.mdUrl
      });
      setStatusMessage('Exported. Files saved.');
    } catch (e) {
      console.error(e);
      setStatusMessage('Export failed');    }      const data = await res.json();
      setExportLinks({ pdfUrl: data.pdfUrl, jsonUrl: data.jsonUrl, mdUrl: data.mdUrl })
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      setStatusMessage('Exported. Files saved.')
    } catch (e) {
      console.error(e);
      setStatusMessage('Export failed')
    }

  }

  }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      setStatusMessage('Export failed');    }

    }

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  async function handleSubmitBridge() {
    setStatusMessage('Submitting via bridge (email/IPFS/signature)...');
    try {
      const res = await fetch('/api/proposals/submit', {

        <div className='space-y-4'>      const data = await res.json();
      setStatusMessage(`Submitted. Status: ${data.status |'queued'}. IPFS: ${data.ipfsCid |'N/A'}`)
    } catch (e) {
      console.error(e);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

    <div className='space-y-6'>;
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
        <div className='space-y-4'>      const data = await res && res.json();
      setStatusMessage(`Submitted. Status: ${data && data.status || 'queued'}. IPFS: ${data && data.ipfsCid || 'N/A'}`);
    } catch (e) {;
      console && console.error(e);
      setStatusMessage('Submission failed');

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }
  }
  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium'>
              Target institution
            </label>
            <input
              className='w-full border rounded px-3 py-2'
              value={form && form.targetInstitution}
              onChange={e => handleChange('targetInstitution', e && e.target.value)}
              placeholder='UNDP / World Bank / ILO';
            />;
          </div>;
          <div>;
            <label className='block text-sm font-medium'>Type</label>;
            <select
              className='w-full border rounded px-3 py-2'
              value={form && form.type}
              onChange={e =>;
                handleChange('type', e && e.target.value as ProposalType);
              }            >          <div>;
            <label className="block text-sm font-medium" htmlFor="input-Target institution">Target institution</label>;
            <input
              className="w-full border rounded px-3 py-2"
              value={form && form.targetInstitution}
              onChange={(e) => handleChange('targetInstitution', e && e.target.value)}
              placeholder="UNDP / World Bank / ILO";
            />;
          </div>;
          <div>;
            <label className="block text-sm font-medium" htmlFor="input-Type">Type</label>;
            <select
              className="w-full border rounded px-3 py-2"
              value={form && form.type}
              onChange={(e) => handleChange('type', e && e.target.value as ProposalType)}
            >;
              <option>Workforce Dev</option>;
              <option>AI Ethics</option>;
              <option>Digital ID</option>;
              <option>Education</option>;
            </select>;
          </div>;
          <div>;
            <label className='block text-sm font-medium'>Regional scope</label>;
            <input
              className='w-full border rounded px-3 py-2'
              value={form && form.regionalScope}
              onChange={e => handleChange('regionalScope', e && e.target.value)}
              placeholder='Global / Africa / LATAM / APAC / EU / ...';
            />;
          </div>;
          <div>;
            <label className='block text-sm font-medium'>;
              Budget / Resolution goals;
            </label>;
            <textarea
              className='w-full border rounded px-3 py-2 min-h-[80px]'
              value={form && form.budgetOrGoals}
              onChange={e => handleChange('budgetOrGoals', e && e.target.value)}
              placeholder='$5M for pilot; goals: 10k workers onboarded, 70% female youth, etc.';
            />;
          </div>;
          <div>;
            <label className='block text-sm font-medium'>;
              Supporting multiverse(s);
            </label>;
            <input
              className='w-full border rounded px-3 py-2'
              value={form && form.supportingMultiverses}
              onChange={e =>;
                handleChange('supportingMultiverses', e && e.target.value);
              }
              placeholder='Eg. Zion && Zion.ai, Zion && Zion.ID, Zion && Zion.Work';
            />;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
            <div>;
              <label className='block text-sm font-medium'>Language</label>;
              <input
                className='w-full border rounded px-3 py-2'
                value={form && form.language}
                onChange={e => handleChange('language', e && e.target.value)}
                placeholder='English / French / Spanish / Arabic / ...';
              />;
            </div>;
            <div>;
              <label className='block text-sm font-medium'>;
                GPT Prompt Assist;
              </label>;
              <textarea
                className='w-full border rounded px-3 py-2 min-h-[80px]'
                value={form && form.customPrompt}
                onChange={e => handleChange('customPrompt', e && e.target.value)}
              />;
            </div>;
          </div>;
          <div className='flex gap-2'>;
            <button
              className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'              onClick={handleGenerate}            <input

=======
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium" htmlFor="input-Target institution">Target institution</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={form.targetInstitution}
              onChange={(e) => handleChange('targetInstitution', e.target.value)}
              placeholder="UNDP / World Bank / ILO"
            />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="input-Type">Type</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={form.type}
              onChange={(e) => handleChange('type', e.target.value as ProposalType)}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

    }
  }
  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='space-y-4'>

=======

    }
  }

  return (

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            >
              <option>Workforce Dev</option>
              <option>AI Ethics</option>
              <option>Digital ID</option>
              <option>Education</option>
            </select>
          </div>
          <div>

                value={form.customPrompt}
                onChange={(e) => handleChange('customPrompt', e.target.value)}
              />
            </div>
          </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? 'Generating...' : 'Generate Draft'}
            </button>
            <button
              className='px-4 py-2 bg-emerald-600 text-white rounded'              onClick={handleExport}              className="px-4 py-2 bg-emerald-600 text-white rounded"

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              )}
            </div>;
          )}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159


            onChange={(e) => setDraftMarkdown(e && e.target.value)}
          />;
        </div>;
      </div>;
    </div>;
=======
            onChange={(e) => setDraftMarkdown(e.target.value)}
          />
        </div>
      </div>
    </div>
);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
  );
}
  custom_prompt?: string;
}
  );
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
