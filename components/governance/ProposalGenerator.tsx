<<<<<<< HEAD
import React, { useState } from 'react',
import EnhancedLayout from '../layout/EnhancedLayout',
export type ProposalType = 'Workforce Dev' | 'AI Ethics' | 'Digital ID' | 'Education',

export type ProposalForm = {
  targetInstitution: string,
  type: ProposalType,
  regionalScope: string,
  budgetOrGoals: string,
  supportingMultiverses: string,
  language?: string,
  customPrompt?: string
},

export default function ProposalGenerator() {
  const [form, setForm] = useState<ProposalForm>({
    targetInstitution: 'UNDP',
    type: 'Workforce Dev',
    regionalScope: 'Global',
    budgetOrGoals: '',
    supportingMultiverses: '',
    language: 'English',
    customPrompt:
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.'}),
  const [isGenerating, setIsGenerating] = useState(false),
  const [draftMarkdown, setDraftMarkdown] = useState(''),
  const [draftJson, setDraftJson] = useState<any>(null),
  const [exportLinks, setExportLinks] = useState<{ pdfUrl?: string, jsonUrl?: string, mdUrl?: string } | null>(null),
  const [statusMessage, setStatusMessage] = useState(''),

  function handleChange<K extends keyof ProposalForm>(key: K, value: ProposalForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function handleGenerate() {
    setIsGenerating(true),
    setStatusMessage('Generating draft...'),
    try {
      const res = await fetch('/api/proposals/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)}),
      const data = await res.json(),
      setDraftMarkdown(data.markdown || ''),
      setDraftJson(data.json || null),
      setStatusMessage('Draft ready. You can edit and export.')
    } catch (e: any) {
      console.error(e),
      setStatusMessage('Failed to generate. You can edit manually and export.')
    } finally {
      setIsGenerating(false)
    }
  }

  async function handleExport() {
    setStatusMessage('Exporting to PDF/Markdown/JSON...'),
    try {
      const res = await fetch('/api/proposals/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          markdown: draftMarkdown,
          json: draftJson,
          meta: form})}),
      const data = await res.json(),
      setExportLinks({ pdfUrl: data.pdfUrl, jsonUrl: data.jsonUrl, mdUrl: data.mdUrl }),
      setStatusMessage('Exported. Files saved.')
    } catch (e) {
      console.error(e),
      setStatusMessage('Export failed')
    }
  }

  async function handleSubmitBridge() {
    setStatusMessage('Submitting via bridge (email/IPFS/signature)...'),
    try {
      const res = await fetch('/api/proposals/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown: draftMarkdown, json: draftJson, meta: form })}),
      const data = await res.json(),
      setStatusMessage(`Submitted. Status: ${data.status || 'queued'}. IPFS: ${data.ipfsCid || 'N/A'}`)
    } catch (e) {
      console.error(e),
      setStatusMessage('Submission failed')
    }
  }

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
        <div className=&quot;space-y-4&quot;>
=======
import React, {_useState} from 'react';
import EnhancedLayout from '../layout/EnhancedLayout';

export type ProposalType = 'Workforce Dev' | 'AI Ethics' | 'Digital ID' | 'Education';

export type ProposalForm = {_targetInstitution: string;
  type: ProposalType;
  regionalScope: string;
  budgetOrGoals: string;
  supportingMultiverses: string;
  language?: string;
  customPrompt?: string;};

export default function ProposalGenerator() {_const [form, _setForm] = useState<ProposalForm>({
    targetInstitution: 'UNDP', _type: 'Workforce Dev', _regionalScope: 'Global', _budgetOrGoals: '', _supportingMultiverses: '', _language: 'English', _customPrompt:
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, _social outcomes, _and DAO-based governance logic.'});
  const [isGenerating, setIsGenerating] = useState(false);
  const [draftMarkdown, setDraftMarkdown] = useState('');
  const [draftJson, setDraftJson] = useState<any>(null);
  const [exportLinks, setExportLinks] = useState<{_pdfUrl?: string; jsonUrl?: string; mdUrl?: string} | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

  function handleChange<K extends keyof ProposalForm>(_key: K, _value: ProposalForm[K]) {_setForm(_(prev) => ({ ...prev, _[key]: value}));
  }

  async function handleGenerate() {_setIsGenerating(true);
    setStatusMessage('Generating draft...');
    try {
      const _res = await fetch('/api/proposals/generate', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(form)});
      const _data = await res.json();
      setDraftMarkdown(data.markdown || '');
      setDraftJson(data.json || null);
      setStatusMessage('Draft ready. You can edit and export.');
    } catch (e: unknown) {_setStatusMessage('Failed to generate. You can edit manually and export.');} finally {_setIsGenerating(false);}
  }

  async function handleExport() {_setStatusMessage('Exporting to PDF/Markdown/JSON...');
    try {
      const _res = await fetch('/api/proposals/export', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_markdown: draftMarkdown, _json: draftJson, _meta: form})});
      const _data = await res.json();
      setExportLinks({_pdfUrl: data.pdfUrl, _jsonUrl: data.jsonUrl, _mdUrl: data.mdUrl});
      setStatusMessage('Exported. Files saved.');
    } catch (e) {_setStatusMessage('Export failed');}
  }

  async function handleSubmitBridge() {_setStatusMessage('Submitting via bridge (email/IPFS/signature)...');
    try {
      const _res = await fetch('/api/proposals/submit', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_markdown: draftMarkdown, _json: draftJson, _meta: form})});
      const _data = await res.json();
      setStatusMessage(`Submitted. Status: ${_data.status || 'queued'}. IPFS: ${_data.ipfsCid || 'N/A'}`);
    } catch (e) {_setStatusMessage('Submission failed');}
  }

  return (_<div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Target institution</label>
            <input
<<<<<<< HEAD
              className=&quot;w-full border rounded px-3 py-2&quot;
              value={form.targetInstitution}
              onChange={(e) => handleChange('targetInstitution', e.target.value)}
              placeholder=&quot;UNDP / World Bank / ILO&quot;
=======
              className="w-full border rounded px-3 py-2"
              value={_form.targetInstitution}
              onChange={_(e) => handleChange('targetInstitution', _e.target.value)}
              placeholder="UNDP / World Bank / ILO"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Type</label>
            <select
<<<<<<< HEAD
              className=&quot;w-full border rounded px-3 py-2&quot;
              value={form.type}
              onChange={(e) => handleChange('type', e.target.value as ProposalType)}
=======
              className="w-full border rounded px-3 py-2"
              value={_form.type}
              onChange={_(_e) => handleChange('type', _e.target.value as ProposalType)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <option>Workforce Dev</option>
              <option>AI Ethics</option>
              <option>Digital ID</option>
              <option>Education</option>
            </select>
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Regional scope</label>
            <input
<<<<<<< HEAD
              className=&quot;w-full border rounded px-3 py-2&quot;
              value={form.regionalScope}
              onChange={(e) => handleChange('regionalScope', e.target.value)}
              placeholder=&quot;Global / Africa / LATAM / APAC / EU / ...&quot;
=======
              className="w-full border rounded px-3 py-2"
              value={_form.regionalScope}
              onChange={_(_e) => handleChange('regionalScope', _e.target.value)}
              placeholder="Global / Africa / LATAM / APAC / EU / ..."
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Budget / Resolution goals</label>
            <textarea
<<<<<<< HEAD
              className=&quot;w-full border rounded px-3 py-2 min-h-[80px]&quot;
              value={form.budgetOrGoals}
              onChange={(e) => handleChange('budgetOrGoals', e.target.value)}
<<<<<<< HEAD
              placeholder="$5M for pilot, goals: 10k workers onboarded, 70% female youth, etc."
=======
              placeholder=&quot;$5M for pilot; goals: 10k workers onboarded, 70% female youth, etc.&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
              className="w-full border rounded px-3 py-2 min-h-[80px]"
              value={_form.budgetOrGoals}
              onChange={_(_e) => handleChange('budgetOrGoals', _e.target.value)}
              placeholder="$5M for pilot; goals: 10k workers onboarded, 70% female youth, etc."
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Supporting multiverse(s)</label>
            <input
<<<<<<< HEAD
              className=&quot;w-full border rounded px-3 py-2&quot;
              value={form.supportingMultiverses}
              onChange={(e) => handleChange('supportingMultiverses', e.target.value)}
              placeholder=&quot;Eg. Zion.ai, Zion.ID, Zion.Work&quot;
=======
              className="w-full border rounded px-3 py-2"
              value={_form.supportingMultiverses}
              onChange={_(_e) => handleChange('supportingMultiverses', _e.target.value)}
              placeholder="Eg. Zion.ai, Zion.ID, Zion.Work"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            <div>
              <label className=&quot;block text-sm font-medium&quot;>Language</label>
              <input
<<<<<<< HEAD
                className=&quot;w-full border rounded px-3 py-2&quot;
                value={form.language}
                onChange={(e) => handleChange('language', e.target.value)}
                placeholder=&quot;English / French / Spanish / Arabic / ...&quot;
=======
                className="w-full border rounded px-3 py-2"
                value={_form.language}
                onChange={_(_e) => handleChange('language', _e.target.value)}
                placeholder="English / French / Spanish / Arabic / ..."
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            </div>
            <div>
              <label className=&quot;block text-sm font-medium&quot;>GPT Prompt Assist</label>
              <textarea
<<<<<<< HEAD
                className=&quot;w-full border rounded px-3 py-2 min-h-[80px]&quot;
                value={form.customPrompt}
                onChange={(e) => handleChange('customPrompt', e.target.value)}
=======
                className="w-full border rounded px-3 py-2 min-h-[80px]"
                value={_form.customPrompt}
                onChange={_(_e) => handleChange('customPrompt', _e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            </div>
          </div>
          <div className=&quot;flex gap-2&quot;>
            <button
<<<<<<< HEAD
              className=&quot;px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50&quot;
              onClick={handleGenerate}
              disabled={isGenerating}
=======
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              onClick={_handleGenerate}
              disabled={_isGenerating}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_isGenerating ? 'Generating...' : 'Generate Draft'}
            </button>
            <button
<<<<<<< HEAD
              className=&quot;px-4 py-2 bg-emerald-600 text-white rounded&quot;
              onClick={handleExport}
              disabled={!draftMarkdown}
=======
              className="px-4 py-2 bg-emerald-600 text-white rounded"
              onClick={_handleExport}
              disabled={_!draftMarkdown}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              Export (PDF/JSON/MD)
            </button>
            <button
<<<<<<< HEAD
              className=&quot;px-4 py-2 bg-purple-600 text-white rounded&quot;
              onClick={handleSubmitBridge}
              disabled={!draftMarkdown}
=======
              className="px-4 py-2 bg-purple-600 text-white rounded"
              onClick={_handleSubmitBridge}
              disabled={_!draftMarkdown}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              Submit Bridge
            </button>
          </div>
<<<<<<< HEAD
          {statusMessage && <p className=&quot;text-sm text-gray-600&quot;>{statusMessage}</p>}
          {exportLinks && (
            <div className=&quot;text-sm space-y-1&quot;>
=======
          {_statusMessage && <p className="text-sm text-gray-600">{statusMessage}</p>}
          {_exportLinks && (
            <div className="text-sm space-y-1">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              {exportLinks.pdfUrl && (
                <div>
                  <a className=&quot;text-blue-600 underline&quot; href={exportLinks.pdfUrl} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>PDF</a>
                </div>
              )}
              {_exportLinks.mdUrl && (
                <div>
                  <a className=&quot;text-blue-600 underline&quot; href={exportLinks.mdUrl} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>Markdown</a>
                </div>
              )}
              {_exportLinks.jsonUrl && (
                <div>
                  <a className=&quot;text-blue-600 underline&quot; href={exportLinks.jsonUrl} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>JSON</a>
                </div>
              )}
            </div>
          )}
        </div>
        <div className=&quot;space-y-2&quot;>
          <label className=&quot;block text-sm font-medium&quot;>Draft (Markdown)</label>
          <textarea
<<<<<<< HEAD
            className=&quot;w-full border rounded px-3 py-2 min-h-[520px] font-mono&quot;
            value={draftMarkdown}
            onChange={(e) => setDraftMarkdown(e.target.value)}
=======
            className="w-full border rounded px-3 py-2 min-h-[520px] font-mono"
            value={_draftMarkdown}
            onChange={_(_e) => setDraftMarkdown(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        </div>
      </div>
    </div>
  )
}