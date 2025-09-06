
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


export type ProposalType =;
  | 'Workforce Dev';
  | 'AI Ethics';
  | 'Digital ID';
  | 'Education';
<<<<<<< HEAD
export type ProposalForm = {
=======


export type ProposalForm = {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  targetInstitution: string;
  type: ProposalType;
  regionalScope: string;
  budgetOrGoals: string;
  supportingMultiverses: string;
  language?: string;
  customPrompt?: string;};export type ProposalForm = {
<<<<<<< HEAD
  targetInstitution: string
  type: ProposalType
  regionalScope: string
  budgetOrGoals: string
  supportingMultiverses: string
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

  customPrompt?: string;};export type ProposalForm = {

  targetInstitution: string,
  type: ProposalType,
  regionalScope: string,
  budgetOrGoals: string,
  supportingMultiverses: string,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.'
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [draftMarkdown, setDraftMarkdown] = useState('');
  const [draftJson, setDraftJson] = useState<any>(null);
  const [exportLinks, setExportLinks] = useState<{;
    pdfUrl?: string;
    jsonUrl?: string;
    mdUrl?: string;
  } | null>(null);
  const [statusMessage, setStatusMessage] = useState('');


  function handleChange<K extends keyof ProposalForm>(;
    key: K,;
    value: ProposalForm[K];
  ) {;

    setForm(prev => ({ ...prev, [key]: value }));  }  const [isGenerating, setIsGenerating] = useState(false);

=======
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.'});
  const [isGenerating, setIsGenerating] = useState(false);

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const [draftMarkdown, setDraftMarkdown] = useState('');
  const [draftJson, setDraftJson] = useState<any>(null);
  const [exportLinks, setExportLinks] = useState<{ pdfUrl?: string, jsonUrl?: string, mdUrl?: string } | null>(null);
  const [statusMessage, setStatusMessage] = useState('');


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

      setStatusMessage('Draft ready. You can edit and export.')
    } catch (e: any) {
      console.error(e);
      setStatusMessage('Failed to generate. You can edit manually and export.')
    } finally {
      setIsGenerating(false)
=======
      setIsGenerating(false);    }

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }
=======
    } finally {

      setIsGenerating(false);    }


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  async function handleExport() {
    setStatusMessage('Exporting to PDF/Markdown/JSON...');
    try {
      const res = await fetch('/api/proposals/export', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({

          markdown: draftMarkdown,
          json: draftJson,
          meta: form})}),
      const data = await res.json();
      setExportLinks({ pdfUrl: data.pdfUrl, jsonUrl: data.jsonUrl, mdUrl: data.mdUrl }),

      setStatusMessage('Exported. Files saved.')
    } catch (e) {
      console.error(e);
      setStatusMessage('Export failed')
    }
<<<<<<< HEAD
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      setStatusMessage('Export failed');    }

    }

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  async function handleSubmitBridge() {
    setStatusMessage('Submitting via bridge (email/IPFS/signature)...');
    try {
      const res = await fetch('/api/proposals/submit', {

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
    <div className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className='space-y-4'>      const data = await res.json();
      setStatusMessage(`Submitted. Status: ${data.status |'queued'}. IPFS: ${data.ipfsCid |'N/A'}`)
    } catch (e) {
      console.error(e);
<<<<<<< HEAD

      setStatusMessage('Submission failed')
=======
      setStatusMessage('Submission failed')
=======
        <div className='space-y-4'>

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======


    }
  }
  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='space-y-4'>


    }
  }

  return (



            >
              <option>Workforce Dev</option>
              <option>AI Ethics</option>
              <option>Digital ID</option>
              <option>Education</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="input-Regional scope">Regional scope</label>
            <input

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

              className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'              onClick={handleGenerate}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? 'Generating...' : 'Generate Draft'}
            </button>
            <button
              className='px-4 py-2 bg-emerald-600 text-white rounded'              onClick={handleExport}              className="px-4 py-2 bg-emerald-600 text-white rounded"
              onClick={handleExport}
              disabled={!draftMarkdown}
            >
              Export (PDF/JSON/MD)
            </button>
            <button
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
                </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              )}
            </div>;
          )}

=======
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium" htmlFor="input-Draft (Markdown)">Draft (Markdown)</label>
          <textarea

            className="w-full border rounded px-3 py-2 min-h-[520px] font-mono"
            value={draftMarkdown}
            onChange={(e) => setDraftMarkdown(e.target.value)}
          />
        </div>
      </div>
    </div>
<<<<<<< HEAD
);
<<<<<<< HEAD
=======
  );
=======

  );

}
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
