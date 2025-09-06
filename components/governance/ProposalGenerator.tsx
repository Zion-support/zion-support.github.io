
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
<<<<<<< HEAD


export type ProposalType =;
  | 'Workforce Dev';
  | 'AI Ethics';
  | 'Digital ID';
  | 'Education';
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


export type ProposalForm = {;



export type ProposalForm = {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export type ProposalForm = {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  targetInstitution: string;
=======
;
export type ProposalForm = {
  target_institution: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  type: ProposalType;
  regional_scope: string;
  budgetOrGoals: string;
  supporting_multiverses: string;
  language?: string;
<<<<<<< HEAD

  customPrompt?: string;};export type ProposalForm = {

  targetInstitution: string,
  type: ProposalType,
  regionalScope: string,
  budgetOrGoals: string,
  supportingMultiverses: string,;


  language?: string;
  customPrompt?: string
}
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type ProposalType = 'Workforce Dev' | 'AI Ethics' | 'Digital ID' | 'Education';
export type ProposalForm = {
  targetInstitution: string,
=======
  custom_prompt?: string;}export type ProposalForm = {
  target_institution: string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  type: ProposalType,
  regional_scope: string,
  budgetOrGoals: string,
  supporting_multiverses: string,
  language?: string;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
=======

      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.',;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.',;

import EnhancedLayout from '../layout/EnhancedLayout';

export type ProposalType =
  | 'Workforce Dev'
  | 'AI Ethics'
  | 'Digital ID';
  | 'Education';
export type ProposalForm = {

export type ProposalForm = {;
  targetInstitution: string;
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
export default function ProposalGenerator() {
  const [form, setForm] = useState<ProposalForm>({
    targetInstitution: 'UNDP'
    type: 'Workforce Dev'
    regionalScope: 'Global'
    budgetOrGoals: ''
    supportingMultiverses: ''
    language: 'English'
    customPrompt:
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.'
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [draftMarkdown, setDraftMarkdown] = useState('');
  const [draftJson, setDraftJson] = useState<any>(null);
<<<<<<< HEAD
  const [exportLinks, setExportLinks] = useState<{;
=======
  const [exportLinks, setExportLinks] = useState<{
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    pdfUrl?: string;
    jsonUrl?: string;
    mdUrl?: string;
  } | null>(null);
  const [statusMessage, setStatusMessage] = useState('');
<<<<<<< HEAD


  function handleChange<K extends keyof ProposalForm>(;
    key: K,;
    value: ProposalForm[K];
  ) {;

    setForm(prev => ({ ...prev, [key]: value }));  }  const [isGenerating, setIsGenerating] = useState(false);

=======
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.'});
  const [isGenerating, setIsGenerating] = useState(false);

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.'});
  const [isGenerating, setIsGenerating] = useState(false);

    setForm(prev => ({ ...prev, [key]: value }));  }  const [isGenerating, setIsGenerating] = useState(false);
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.'});
  const [isGenerating, setIsGenerating] = useState(false);
  function handleChange<K extends keyof ProposalForm>(
    key: K
    value: ProposalForm[K]
  ) {
    setForm(prev => ({ ...prev, [key]: value }));  }  const [isGenerating, setIsGenerating] = useState(false);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const [draftMarkdown, setDraftMarkdown] = useState('');
  const [draftJson, setDraftJson] = useState<any>(null);
  const [exportLinks, setExportLinks] = useState<{ pdfUrl?: string, jsonUrl?: string, mdUrl?: string } | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

<<<<<<< HEAD

      setStatusMessage('Draft ready. You can edit and export.');
    } catch (e: any) {;
      console && console.error(e);
      setStatusMessage('Failed to generate. You can edit manually and export.');

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)}),
      const data = await res.json();
      setDraftMarkdown(data.markdown || '');
      setDraftJson(data.json || null);
<<<<<<< HEAD

=======
  function handleChange<K extends keyof ProposalForm>(key: K, value: ProposalForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }
  async function handleGenerate() {
    setIsGenerating(true);
    setStatusMessage('Generating draft...');
    try {
      const res = await fetch('/api/proposals/generate', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify(form)
      });
      const data = await res.json();
      setDraftMarkdown(data.markdown |'');
      setDraftJson(data.json |null);
      setStatusMessage('Draft ready. You can edit and export.');
    } catch (e: any) {
      console.error(e);
      setStatusMessage('Failed to generate. You can edit manually and export.');
    } finally {
      setIsGenerating(false);    }      const data = await res.json();
      setDraftMarkdown(data.markdown |'');
      setDraftJson(data.json |null);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      setStatusMessage('Draft ready. You can edit and export.')
    } catch (e: any) {
      console.error(e);
      setStatusMessage('Failed to generate. You can edit manually and export.')
    } finally {
      setIsGenerating(false)
<<<<<<< HEAD
    }
  }
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    } finally {

      setIsGenerating(false);    }


    }
  }



  async function handleExport() {
<<<<<<< HEAD
=======
async function handleExport() {
      setIsGenerating(false);    }

    }
  }

  async function handleExport() {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    setStatusMessage('Exporting to PDF/Markdown/JSON...');
    try {
      const res = await fetch('/api/proposals/export', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
<<<<<<< HEAD

          markdown: draftMarkdown,
          json: draftJson,
          meta: form})}),
      const data = await res.json();
      setExportLinks({ pdfUrl: data.pdfUrl, jsonUrl: data.jsonUrl, mdUrl: data.mdUrl }),

=======
          markdown: draftMarkdown
          json: draftJson
          meta: form
        })
      });
      const data = await res.json();
      setExportLinks({ pdfUrl: data.pdfUrl, jsonUrl: data.jsonUrl, mdUrl: data.mdUrl }),

      setStatusMessage('Export failed');    }      const data = await res.json();
      setExportLinks({ pdfUrl: data.pdfUrl, jsonUrl: data.jsonUrl, mdUrl: data.mdUrl })
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      setStatusMessage('Exported. Files saved.')
    } catch (e) {
      console.error(e);
      setStatusMessage('Export failed')
    }
  }
<<<<<<< HEAD
=======


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      setStatusMessage('Export failed');    }

    }



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  }

  }

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  async function handleSubmitBridge() {
    setStatusMessage('Submitting via bridge (email/IPFS/signature)...');
    try {
      const res = await fetch('/api/proposals/submit', {
<<<<<<< HEAD

    } finally {;
      setIsGenerating(false);    }      const data = await res && res.json();
      setDraftMarkdown(data && data.markdown || '');
      setDraftJson(data && data.json || null);
      setStatusMessage('Draft ready. You can edit and export.');
    } catch (e: any) {;
      console && console.error(e);
      setStatusMessage('Failed to generate. You can edit manually and export.');
    } finally {;
      setIsGenerating(false);

=======
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown: draftMarkdown, json: draftJson, meta: form })}),
      const data = await res.json();
      setStatusMessage(`Submitted. Status: ${data.status || 'queued'}. IPFS: ${data.ipfsCid || 'N/A'}`)
    } catch (e) {
      console.error(e);
      setStatusMessage('Submission failed')
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }
  }

  async function handleExport() {;
    setStatusMessage('Exporting to PDF/Markdown/JSON...');
    try {;
      const res = await fetch('/api/proposals/export', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          markdown: draftMarkdown,;
          json: draftJson,;
          meta: form,;
        }),;
      });
      const data = await res && res.json();
      setExportLinks({;
        pdfUrl: data && data.pdfUrl,;
        jsonUrl: data && data.jsonUrl,;
        mdUrl: data && data.mdUrl,;
      });
      setStatusMessage('Exported. Files saved.');
    } catch (e) {;
      console && console.error(e);
      setStatusMessage('Export failed');    }      const data = await res && res.json();
      setExportLinks({ pdfUrl: data && data.pdfUrl, jsonUrl: data && data.jsonUrl, mdUrl: data && data.mdUrl }),;
      setStatusMessage('Exported. Files saved.');
    } catch (e) {;
      console && console.error(e);
      setStatusMessage('Export failed');
    }
  }

  async function handleSubmitBridge() {;
    setStatusMessage('Submitting via bridge (email/IPFS/signature)...');
    try {;
      const res = await fetch('/api/proposals/submit', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          markdown: draftMarkdown,;
          json: draftJson,;
          meta: form,;
        }),;
      });
      const data = await res && res.json();
      setStatusMessage(;
        `Submitted. Status: ${data && data.status || 'queued'}. IPFS: ${data && data.ipfsCid || 'N/A'}`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      );
    } catch (e) {;
      console && console.error(e);
      setStatusMessage('Submission failed');    }
  }
  return (

    <div className='space-y-6'>;
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
        <div className='space-y-4'>      const data = await res && res.json();
      setStatusMessage(`Submitted. Status: ${data && data.status || 'queued'}. IPFS: ${data && data.ipfsCid || 'N/A'}`);
    } catch (e) {;
      console && console.error(e);
      setStatusMessage('Submission failed');
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }
  }
  return (
    <div className='space-y-6'>;
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
        <div className='space-y-4'>;
          <div>;
            <label className='block text-sm font-medium'>;
              Target institution;
            </label>;
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
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Target institution</label>
            <input
              className=&quot;w-full border rounded px-3 py-2&quot;
              value={form.targetInstitution}
              onChange={(e) => handleChange('targetInstitution', e.target.value)}
              placeholder=&quot;UNDP / World Bank / ILO&quot;
            />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Type</label>
            <select
              className=&quot;w-full border rounded px-3 py-2&quot;

        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          markdown: draftMarkdown
          json: draftJson
          meta: form
        })
      });
      const data = await res.json();
      setStatusMessage(
        `Submitted. Status: ${data.status |'queued'}. IPFS: ${data.ipfsCid |'N/A'}`
      );
    } catch (e) {
      console.error(e);
      setStatusMessage('Submission failed');    }
  }
  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='space-y-4'>      const data = await res.json();
      setStatusMessage(`Submitted. Status: ${data.status |'queued'}. IPFS: ${data.ipfsCid |'N/A'}`)
    } catch (e) {
      console.error(e);

      setStatusMessage('Submission failed')
      setStatusMessage('Submission failed')
        <div className='space-y-4'>

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
              value={form.targetInstitution}
              onChange={e => handleChange('targetInstitution', e.target.value)}
              placeholder='UNDP / World Bank / ILO'
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>Type</label>
            <select
              className='w-full border rounded px-3 py-2'
              value={form.type}
              onChange={e =>
                handleChange('type', e.target.value as ProposalType)
              }            >          <div>
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              value={form.type}
              onChange={(e) => handleChange('type', e.target.value as ProposalType)}

<<<<<<< HEAD

    }
  }
  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='space-y-4'>


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }
  }

  return (

<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            >
              <option>Workforce Dev</option>
              <option>AI Ethics</option>
              <option>Digital ID</option>
              <option>Education</option>
            </select>
          </div>
          <div>
<<<<<<< HEAD
            <label className="block text-sm font-medium" htmlFor="input-Regional scope">Regional scope</label>
            <input

=======
                className="w-full border rounded px-3 py-2 min-h-[80px]"
                value={form && form.customPrompt}
                onChange={(e) => handleChange('customPrompt', e && e.target.value)}
              />;
            </div>;
          </div>;
          <div className="flex gap-2">;
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              onClick={handleGenerate}
              disabled={isGenerating}>;
              {isGenerating ? 'Generating...' : 'Generate Draft'}
            </button>;
            <button
              className="px-4 py-2 bg-emerald-600 text-white rounded"
              onClick={handleExport}
              disabled={!draftMarkdown}>;
              Export (PDF/JSON/MD);
            </button>;
            <button
              className="px-4 py-2 bg-purple-600 text-white rounded"
            />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Supporting multiverse(s)</label>
            <input
              className=&quot;w-full border rounded px-3 py-2&quot;
              value={form.supportingMultiverses}
              onChange={(e) => handleChange('supportingMultiverses', e.target.value)}
              placeholder=&quot;Eg. Zion.ai, Zion.ID, Zion.Work&quot;
            />
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            <div>
              <label className=&quot;block text-sm font-medium&quot;>Language</label>
              <input
                className=&quot;w-full border rounded px-3 py-2&quot;
                value={form.language}
                onChange={(e) => handleChange('language', e.target.value)}
                placeholder=&quot;English / French / Spanish / Arabic / ...&quot;
              />
            </div>
            <div>
              <label className=&quot;block text-sm font-medium&quot;>GPT Prompt Assist</label>
              <textarea
                className=&quot;w-full border rounded px-3 py-2 min-h-[80px]&quot;
            <label className='block text-sm font-medium'>Regional scope</label>
            <input
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              className='w-full border rounded px-3 py-2'
              value={form.regionalScope}
              onChange={e => handleChange('regionalScope', e.target.value)}
              placeholder='Global / Africa / LATAM / APAC / EU / ...'
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>
              Budget / Resolution goals
            </label>
            <textarea
              className='w-full border rounded px-3 py-2 min-h-[80px]'
              value={form.budgetOrGoals}
              onChange={e => handleChange('budgetOrGoals', e.target.value)}
              placeholder='$5M for pilot; goals: 10k workers onboarded, 70% female youth, etc.'
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>
              Supporting multiverse(s)
            </label>
            <input
              className='w-full border rounded px-3 py-2'
              value={form.supportingMultiverses}
              onChange={e =>
                handleChange('supportingMultiverses', e.target.value)
              }
              placeholder='Eg. Zion.ai, Zion.ID, Zion.Work'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium'>Language</label>
              <input
                className='w-full border rounded px-3 py-2'
                value={form.language}
                onChange={e => handleChange('language', e.target.value)}
                placeholder='English / French / Spanish / Arabic / ...'
              />
            </div>
            <div>
              <label className='block text-sm font-medium'>
                GPT Prompt Assist
              </label>
              <textarea
                className='w-full border rounded px-3 py-2 min-h-[80px]'
                value={form.customPrompt}
                onChange={e => handleChange('customPrompt', e.target.value)}
              />
            </div>
          </div>
          <div className='flex gap-2'>
            <button
<<<<<<< HEAD

              className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'              onClick={handleGenerate}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
              className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'              onClick={handleGenerate}            <input
              className="w-full border rounded px-3 py-2"
              value={form.regionalScope}
              onChange={(e) => handleChange('regionalScope', e.target.value)}
              placeholder="Global / Africa / LATAM / APAC / EU / ..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="input-Budget / Resolution goals">Budget / Resolution goals</label>
            <textarea
              className="w-full border rounded px-3 py-2 min-h-[80px]"
              value={form.budgetOrGoals}
              onChange={(e) => handleChange('budgetOrGoals', e.target.value)}
              placeholder="$5M for pilot, goals: 10k workers onboarded, 70% female youth, etc."
            />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="input-Supporting multiverse(s)">Supporting multiverse(s)</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={form.supportingMultiverses}
              onChange={(e) => handleChange('supportingMultiverses', e.target.value)}
              placeholder="Eg. Zion.ai, Zion.ID, Zion.Work"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium" htmlFor="input-Language">Language</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={form.language}
                onChange={(e) => handleChange('language', e.target.value)}
                placeholder="English / French / Spanish / Arabic / ..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="input-GPT Prompt Assist">GPT Prompt Assist</label>
              <textarea
                className="w-full border rounded px-3 py-2 min-h-[80px]"
                value={form.customPrompt}
                onChange={e => handleChange('customPrompt', e.target.value)}
              />
            </div>
          </div>
              className=&quot;px-4 py-2 bg-emerald-600 text-white rounded&quot;
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'              onClick={handleGenerate}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? 'Generating...' : 'Generate Draft'}
            </button>
            <button
<<<<<<< HEAD


=======
              className='px-4 py-2 bg-emerald-600 text-white rounded'              onClick={handleExport}              className="px-4 py-2 bg-emerald-600 text-white rounded"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              onClick={handleExport}
              disabled={!draftMarkdown}
            >
              Export (PDF/JSON/MD)
            </button>
            <button
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
              className='px-4 py-2 bg-purple-600 text-white rounded'              onClick={handleSubmitBridge}              className="px-4 py-2 bg-purple-600 text-white rounded"
              onClick={handleSubmitBridge}
              disabled={!draftMarkdown}
            >
              Submit Bridge
            </button>
          </div>
          {statusMessage && (
            <p className='text-sm text-gray-600'>{statusMessage}</p>
          )}
          {exportLinks && (
            <div className='text-sm space-y-1'>
              {exportLinks.pdfUrl && (
                <div>
                  <a
                    className='text-blue-600 underline'
                    href={exportLinks.pdfUrl}
                    target='_blank'
                    rel='noreferrer'
                  >
                    PDF
                  </a>                </div>
              )}
              {exportLinks.mdUrl && (
                <div>          {exportLinks && (
            <div className="text-sm space-y-1">
              {exportLinks.pdfUrl && (
                <div>
                  <a className="text-blue-600 underline" href={exportLinks.pdfUrl} target="_blank" rel="noreferrer">PDF</a>
                </div>
              )}
              {exportLinks.mdUrl && (
                <div>
                  <a
                    className='text-blue-600 underline'
                    href={exportLinks.mdUrl}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Markdown
                  </a>                </div>
              )}
              {exportLinks.jsonUrl && (
                <div>                  <a className="text-blue-600 underline" href={exportLinks.mdUrl} target="_blank" rel="noreferrer">Markdown</a>
                </div>
              )}
              {exportLinks.jsonUrl && (
                <div>
                  <a
                    className='text-blue-600 underline'
                    href={exportLinks.jsonUrl}
                    target='_blank'
                    rel='noreferrer'
                  >
                    JSON
                  </a>                </div>                  <a className="text-blue-600 underline" href={exportLinks.jsonUrl} target="_blank" rel="noreferrer">JSON</a>

              className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'              onClick={handleGenerate}



              onClick={handleGenerate}
              disabled={isGenerating}>;
              {isGenerating ? 'Generating...' : 'Generate Draft'}
            </button>;
            <button


              onClick={handleExport}
              disabled={!draftMarkdown}>;
              Export (PDF/JSON/MD);
            </button>;
            <button


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              )}
            </div>;
          )}

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium" htmlFor="input-Draft (Markdown)">Draft (Markdown)</label>
          <textarea

            className="w-full border rounded px-3 py-2 min-h-[520px] font-mono"
            value={draftMarkdown}


<<<<<<< HEAD
            onChange={(e) => setDraftMarkdown(e && e.target.value)}
          />;
        </div>;
      </div>;
    </div>;
  );
=======
=======
                </div>

              )}
            </div>;
          )}
        </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  );

}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  custom_prompt?: string;
}
;
export default /**
 * ProposalGenerator - Function description
 */
function ProposalGenerator() {
  const [form, set_form] = useState < ProposalForm>({
    target_institution: 'UNDP',
    type: 'Workforce Dev',
    regional_scope: 'Global',
    budgetOrGoals: '',
    supporting_multiverses: '',
    language: 'English',
    custom_prompt:;
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO - based governance logic.',
  });
  const [is_generating, setIsGenerating] = useState (false);
  const [draft_markdown, setDraftMarkdown] = useState ('');
  const [draft_json, setDraftJson] = useState < any>(null);
  const [export_links, setExportLinks] = useState<{
    pdf_url?: string;
    json_url?: string;
    md_url?: string;
  } | null>(null);
  const [status_message, setStatusMessage] = useState ('');
;
  function handle_change < K extends keyof ProposalForm>(
    key: K,
    value: ProposalForm[K]) {
    set_form (prev => ({ ...prev, [key]: value }));  }  const [is_generating, setIsGenerating] = useState (false);
  const [draft_markdown, setDraftMarkdown] = useState ('');
  const [draft_json, setDraftJson] = useState < any>(null);
  const [export_links, setExportLinks] = useState<{ pdf_url?: string, json_url?: string, md_url?: string } | null>(null);
  const [status_message, setStatusMessage] = useState ('');
;
  function handle_change < K extends keyof ProposalForm>(key: K, value: ProposalForm[K]) {
    set_form ((prev) => ({ ...prev, [key]: value }));
  }
  async /**
 * handle_generate - Function description
 */
function handle_generate() {
    setIsGenerating (true);
    setStatusMessage ('Generating draft...');
    try {
      const res = await fetch ('/api / proposals / generate', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify (form),
      });
      const data = await res.json ();
      setDraftMarkdown (data.markdown || '');
      setDraftJson (data.json || null);
      setStatusMessage ('Draft ready. You can edit and export.');
    } catch (e: any) {
      console.error (e);
      setStatusMessage ('Failed to generate. You can edit manually and export.');
    } finally {
      setIsGenerating (false);    }      const data = await res.json ();
      setDraftMarkdown (data.markdown || '');
      setDraftJson (data.json || null);
      setStatusMessage ('Draft ready. You can edit and export.');
    } catch (e: any) {
      console.error (e);
      setStatusMessage ('Failed to generate. You can edit manually and export.');
    } finally {
      setIsGenerating (false);
    }
  }
  async /**
 * handle_export - Function description
 */
function handle_export() {
    setStatusMessage ('Exporting to PDF / Markdown / JSON...');
    try {
      const res = await fetch ('/api / proposals / export', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          markdown: draft_markdown,
          json: draft_json,
          meta: form,
        }),
      });
      const data = await res.json ();
      setExportLinks ({
        pdf_url: data.pdf_url,
        json_url: data.json_url,
        md_url: data.md_url,
      });
      setStatusMessage ('Exported. Files saved.');
    } catch (e) {
      console.error (e);
      setStatusMessage ('Export failed');    }      const data = await res.json ();
      setExportLinks ({ pdf_url: data.pdf_url, json_url: data.json_url, md_url: data.md_url }),
      setStatusMessage ('Exported. Files saved.');
    } catch (e) {
      console.error (e);
      setStatusMessage ('Export failed');
    }
  }
  async /**
 * handleSubmitBridge - Function description
 */
function handleSubmitBridge() {
    setStatusMessage ('Submitting via bridge (email / IPFS / signature)...');
    try {
      const res = await fetch ('/api / proposals / submit', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          markdown: draft_markdown,
          json: draft_json,
          meta: form,
        }),
      });
      const data = await res.json ();
      setStatusMessage (
        `Submitted. Status: ${data.status || 'queued'}. IPFS: ${data.ipfs_cid || 'N / A'}`);
    } catch (e) {
      console.error (e);
      setStatusMessage ('Submission failed');    }
  }
  return (
    <div className='space - y-6'>;
      <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
        <div className='space - y-4'>      const data = await res.json ();
      setStatusMessage (`Submitted. Status: ${data.status || 'queued'}. IPFS: ${data.ipfs_cid || 'N / A'}`);
    } catch (e) {
      console.error (e);
      setStatusMessage ('Submission failed');
    }
  }
  return (
    <div className='space - y-6'>;
      <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
        <div className='space - y-4'>;
          <div>;
            <label className='block text - sm font - medium'>;
              Target institution;
            </label>;
            <input;
              className='w - full border rounded px - 3 py - 2';
              value={form.target_institution}
              on_change={e => handle_change ('target_institution', e.target.value)}
              placeholder='UNDP / World Bank / ILO';
            />;
          </div>;
          <div>;
            <label className='block text - sm font - medium'>Type</label>;
            <select;
              className='w - full border rounded px - 3 py - 2';
              value={form.type}
              on_change={e =>;
                handle_change ('type', e.target.value as ProposalType);
              }            >          <div>;
            <label className="block text - sm font - medium" html_for="input - Target institution">Target institution</label>;
            <input;
              className="w - full border rounded px - 3 py - 2";
              value={form.target_institution}
              on_change={(e) => handle_change ('target_institution', e.target.value)}
              placeholder="UNDP / World Bank / ILO";
            />;
          </div>;
          <div>;
            <label className="block text - sm font - medium" html_for="input - Type">Type</label>;
            <select;
              className="w - full border rounded px - 3 py - 2";
              value={form.type}
              on_change={(e) => handle_change ('type', e.target.value as ProposalType)}
            >;
              <option > Workforce Dev</option>;
              <option > AI Ethics</option>;
              <option > Digital ID</option>;
              <option > Education</option>;
            </select>;
          </div>;
          <div>;
            <label className='block text - sm font - medium'>Regional scope</label>;
            <input;
              className='w - full border rounded px - 3 py - 2';
              value={form.regional_scope}
              on_change={e => handle_change ('regional_scope', e.target.value)}
              placeholder='Global / Africa / LATAM / APAC / EU / ...';
            />;
          </div>;
          <div>;
            <label className='block text - sm font - medium'>;
              Budget / Resolution goals;
            </label>;
            <textarea;
              className='w - full border rounded px - 3 py - 2 min - h-[80px]';
              value={form.budgetOrGoals}
              on_change={e => handle_change ('budgetOrGoals', e.target.value)}
              placeholder='$5M for pilot; goals: 10k workers onboarded, 70% female youth, etc.';
            />;
          </div>;
          <div>;
            <label className='block text - sm font - medium'>;
              Supporting multiverse (s);
            </label>;
            <input;
              className='w - full border rounded px - 3 py - 2';
              value={form.supporting_multiverses}
              on_change={e =>;
                handle_change ('supporting_multiverses', e.target.value);
              }
              placeholder='Eg. Zion.ai, Zion.ID, Zion.Work';
            />;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
            <div>;
              <label className='block text - sm font - medium'>Language</label>;
              <input;
                className='w - full border rounded px - 3 py - 2';
                value={form.language}
                on_change={e => handle_change ('language', e.target.value)}
                placeholder='English / French / Spanish / Arabic / ...';
              />;
            </div>;
            <div>;
              <label className='block text - sm font - medium'>;
                GPT Prompt Assist;
              </label>;
              <textarea;
                className='w - full border rounded px - 3 py - 2 min - h-[80px]';
                value={form.custom_prompt}
                on_change={e => handle_change ('custom_prompt', e.target.value)}
              />;
            </div>;
          </div>;
          <div className='flex gap - 2'>;
            <button;
              className='px - 4 py - 2 bg - blue - 600 text - white rounded disabled:opacity - 50'              on_click={handle_generate}            <input;
              className="w - full border rounded px - 3 py - 2";
              value={form.regional_scope}
              on_change={(e) => handle_change ('regional_scope', e.target.value)}
              placeholder="Global / Africa / LATAM / APAC / EU / ...";
            />;
          </div>;
          <div>;
            <label className="block text - sm font - medium" html_for="input - Budget / Resolution goals">Budget / Resolution goals</label>;
            <textarea;
              className="w - full border rounded px - 3 py - 2 min - h-[80px]";
              value={form.budgetOrGoals}
              on_change={(e) => handle_change ('budgetOrGoals', e.target.value)}
              placeholder="$5M for pilot, goals: 10k workers onboarded, 70% female youth, etc.";
            />;
          </div>;
          <div>;
            <label className="block text - sm font - medium" html_for="input - Supporting multiverse (s)">Supporting multiverse (s)</label>;
            <input;
              className="w - full border rounded px - 3 py - 2";
              value={form.supporting_multiverses}
              on_change={(e) => handle_change ('supporting_multiverses', e.target.value)}
              placeholder="Eg. Zion.ai, Zion.ID, Zion.Work";
            />;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <div>;
              <label className="block text - sm font - medium" html_for="input - Language">Language</label>;
              <input;
                className="w - full border rounded px - 3 py - 2";
                value={form.language}
                on_change={(e) => handle_change ('language', e.target.value)}
                placeholder="English / French / Spanish / Arabic / ...";
              />;
            </div>;
            <div>;
              <label className="block text - sm font - medium" html_for="input - GPT Prompt Assist">GPT Prompt Assist</label>;
              <textarea;
                className="w - full border rounded px - 3 py - 2 min - h-[80px]";
                value={form.custom_prompt}
                on_change={(e) => handle_change ('custom_prompt', e.target.value)}
              />;
            </div>;
          </div>;
          <div className="flex gap - 2">;
            <button;
              className="px - 4 py - 2 bg - blue - 600 text - white rounded disabled:opacity - 50";
              on_click={handle_generate}
              disabled={is_generating}
            >;
              {is_generating ? 'Generating...' : 'Generate Draft'}
            </button>;
            <button;
              className='px - 4 py - 2 bg - emerald - 600 text - white rounded'              on_click={handle_export}              className="px - 4 py - 2 bg - emerald - 600 text - white rounded";
              on_click={handle_export}
              disabled={!draft_markdown}
            >;
              Export (PDF / JSON / MD);
            </button>;
            <button;
              className='px - 4 py - 2 bg - purple - 600 text - white rounded'              on_click={handleSubmitBridge}              className="px - 4 py - 2 bg - purple - 600 text - white rounded";
              on_click={handleSubmitBridge}
              disabled={!draft_markdown}
            >;
              Submit Bridge;
            </button>;
          </div>;
          {status_message && (
            <p className='text - sm text - gray - 600'>{status_message}</p>)}
          {export_links && (
            <div className='text - sm space - y-1'>;
              {export_links.pdf_url && (
                <div>;
                  <a;
                    className='text - blue - 600 underline';
                    href={export_links.pdf_url}
                    target='_blank';
                    rel='noreferrer';
                  >;
                    PDF;
                  </a>                </div>)}
              {export_links.md_url && (
                <div>          {export_links && (
            <div className="text - sm space - y-1">;
              {export_links.pdf_url && (
                <div>;
                  <a className="text - blue - 600 underline" href={export_links.pdf_url} target="_blank" rel="noreferrer">PDF</a>;
                </div>)}
              {export_links.md_url && (
                <div>;
                  <a;
                    className='text - blue - 600 underline';
                    href={export_links.md_url}
                    target='_blank';
                    rel='noreferrer';
                  >;
                    Markdown;
                  </a>                </div>)}
              {export_links.json_url && (
                <div>                  <a className="text - blue - 600 underline" href={export_links.md_url} target="_blank" rel="noreferrer">Markdown</a>;
                </div>)}
              {export_links.json_url && (
                <div>;
                  <a;
                    className='text - blue - 600 underline';
                    href={export_links.json_url}
                    target='_blank';
                    rel='noreferrer';
                  >;
                    JSON;
                  </a>                </div>                  <a className="text - blue - 600 underline" href={export_links.json_url} target="_blank" rel="noreferrer">JSON</a>;
                </div>)}
            </div>)}
        </div>;
        <div className='space - y-2'>;
          <label className='block text - sm font - medium'>Draft (Markdown)</label>;
          <textarea;
            className='w - full border rounded px - 3 py - 2 min - h-[520px] font - mono';
            value={draft_markdown}
            on_change={e => setDraftMarkdown (e.target.value)}          />          <textarea;
            className="w - full border rounded px - 3 py - 2 min - h-[520px] font - mono";
            value={draft_markdown}
            on_change={(e) => setDraftMarkdown (e.target.value)}
          />;
        </div>;
      </div>;
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
        <div className='space-y-2'>
          <label className='block text-sm font-medium'>Draft (Markdown)</label>
          <textarea
            className='w-full border rounded px-3 py-2 min-h-[520px] font-mono'
            value={draftMarkdown}
            onChange={e => setDraftMarkdown(e.target.value)}          />          <textarea
            className="w-full border rounded px-3 py-2 min-h-[520px] font-mono"
            value={draftMarkdown}
            onChange={(e) => setDraftMarkdown(e.target.value)}
          />
        </div>
      </div>
    </div>
);
  );
}
}
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
