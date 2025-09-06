import React, { useState } from 'react';
import EnhancedLayout from '../layout/EnhancedLayout';

export type ProposalType =
  | 'Workforce Dev'
  | 'AI Ethics'
  | 'Digital ID'
  | 'Education';

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export type ProposalForm = {
  targetInstitution: string;
  type: ProposalType;
  regionalScope: string;
  budgetOrGoals: string;
  supportingMultiverses: string;
  language?: string;
  customPrompt?: string;};
=======
  customPrompt?: string
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function ProposalGenerator() {
  const [form, setForm] = useState<ProposalForm>({
    targetInstitution: 'UNDP',
    type: 'Workforce Dev',
    regionalScope: 'Global',
    budgetOrGoals: '',
    supportingMultiverses: '',
    language: 'English',
    customPrompt:
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.',
  });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [isGenerating, setIsGenerating] = useState(false);
  const [draftMarkdown, setDraftMarkdown] = useState('');
  const [draftJson, setDraftJson] = useState<any>(null);
  const [exportLinks, setExportLinks] = useState<{
    pdfUrl?: string;
    jsonUrl?: string;
    mdUrl?: string;
  } | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

  function handleChange<K extends keyof ProposalForm>(
    key: K,
    value: ProposalForm[K]
  ) {
    setForm(prev => ({ ...prev, [key]: value }));  }
=======
  function handleChange<K extends keyof ProposalForm>(key: K, value: ProposalForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  async function handleGenerate() {
    setIsGenerating(true);
    setStatusMessage('Generating draft...');
    try {
      const res = await fetch('/api/proposals/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      const data = await res.json();
      setDraftMarkdown(data.markdown || '');
      setDraftJson(data.json || null);
      setStatusMessage('Draft ready. You can edit and export.');
    } catch (e: any) {
      console.error(e);
      setStatusMessage('Failed to generate. You can edit manually and export.');
    } finally {
      setIsGenerating(false);    }
=======
      setIsGenerating(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

  async function handleExport() {
    setStatusMessage('Exporting to PDF/Markdown/JSON...');
    try {
      const res = await fetch('/api/proposals/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          markdown: draftMarkdown,
          json: draftJson,
          meta: form,
        }),
      });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      const data = await res.json();
      setExportLinks({
        pdfUrl: data.pdfUrl,
        jsonUrl: data.jsonUrl,
        mdUrl: data.mdUrl,
      });
      setStatusMessage('Exported. Files saved.');
    } catch (e) {
      console.error(e);
      setStatusMessage('Export failed');    }
=======
      setStatusMessage('Export failed')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

  async function handleSubmitBridge() {
    setStatusMessage('Submitting via bridge (email/IPFS/signature)...');
    try {
      const res = await fetch('/api/proposals/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          markdown: draftMarkdown,
          json: draftJson,
          meta: form,
        }),
      });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      const data = await res.json();
      setStatusMessage(
        `Submitted. Status: ${data.status || 'queued'}. IPFS: ${data.ipfsCid || 'N/A'}`
      );
    } catch (e) {
      console.error(e);
      setStatusMessage('Submission failed');    }
  }

  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='space-y-4'>
=======
      setStatusMessage('Submission failed')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }

  return (
<<<<<<< HEAD
    <div className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='space-y-4'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
              }            >
=======
              onChange={(e) => handleChange('type', e.target.value as ProposalType)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <option>Workforce Dev</option>
              <option>AI Ethics</option>
              <option>Digital ID</option>
              <option>Education</option>
            </select>
          </div>
          <div>
            <label className='block text-sm font-medium'>Regional scope</label>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
=======
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              onClick={handleGenerate}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              disabled={isGenerating}
            >
              {isGenerating ? 'Generating...' : 'Generate Draft'}
            </button>
            <button
              className='px-4 py-2 bg-emerald-600 text-white rounded'              onClick={handleExport}
=======
              className="px-4 py-2 bg-emerald-600 text-white rounded"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              onClick={handleExport}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              disabled={!draftMarkdown}
            >
              Export (PDF/JSON/MD)
            </button>
            <button
              className='px-4 py-2 bg-purple-600 text-white rounded'              onClick={handleSubmitBridge}
=======
              className="px-4 py-2 bg-purple-600 text-white rounded"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              onClick={handleSubmitBridge}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              disabled={!draftMarkdown}
            >
              Submit Bridge
            </button>
          </div>
          {statusMessage && (
            <p className='text-sm text-gray-600'>{statusMessage}</p>
          )}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                <div>
=======
                  <a className="text-blue-600 underline" href={exportLinks.pdfUrl} target="_blank" rel="noreferrer">PDF</a>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
              )}
              {exportLinks.mdUrl && (
                <div>
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <a
                    className='text-blue-600 underline'
                    href={exportLinks.mdUrl}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Markdown
<<<<<<< HEAD
                  </a>                </div>
              )}
              {exportLinks.jsonUrl && (
                <div>
=======
                  <a className="text-blue-600 underline" href={exportLinks.mdUrl} target="_blank" rel="noreferrer">Markdown</a>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
              )}
              {exportLinks.jsonUrl && (
                <div>
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <a
                    className='text-blue-600 underline'
                    href={exportLinks.jsonUrl}
                    target='_blank'
                    rel='noreferrer'
                  >
                    JSON
<<<<<<< HEAD
                  </a>                </div>
=======
                  <a className="text-blue-600 underline" href={exportLinks.jsonUrl} target="_blank" rel="noreferrer">JSON</a>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              )}
            </div>
          )}
        </div>
        <div className='space-y-2'>
          <label className='block text-sm font-medium'>Draft (Markdown)</label>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <textarea
            className='w-full border rounded px-3 py-2 min-h-[520px] font-mono'
            value={draftMarkdown}
            onChange={e => setDraftMarkdown(e.target.value)}          />
=======
            onChange={(e) => setDraftMarkdown(e.target.value)}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </div>
      </div>
    </div>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
