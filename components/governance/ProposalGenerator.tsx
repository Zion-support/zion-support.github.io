<<<<<<< HEAD
"use client";
import React{ useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
import EnhancedLayout from '../layout/EnhancedLayout';

export type ProposalType = 'Workforce Dev' | 'AI Ethics' | 'Digital ID' | 'Education';

export type ProposalForm = {
  targetInstitution: string;
  type: ProposalType;
  regionalScope: string;
  budgetOrGoals: string;
  supportingMultiverses: string;
  language?: string;
  customPrompt?: string;
};

export default function ProposalGenerator() {
<<<<<<< HEAD
  const [formsetForm] = useState<ProposalForm>({
=======
  const [form, setForm] = useState<ProposalForm>({
>>>>>>> origin/auto/autonomy-17186719616
    targetInstitution: 'UNDP',
    type: 'Workforce Dev',
    regionalScope: 'Global',
    budgetOrGoals: '',
    supportingMultiverses: '',
    language: 'English',
    customPrompt:
<<<<<<< HEAD
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metricsocial outcomesand DAO-based governance logic.'});
  const [isGeneratingsetIsGenerating] = useState(false);
  const [draftMarkdownsetDraftMarkdown] = useState('');
  const [draftJsonsetDraftJson] = useState<any>(null);
  const [exportLinksetExportLinks] = useState<{ pdfUrl?: string; jsonUrl?: string; mdUrl?: string } | null>(null);
  const [statusMessagesetStatusMessage] = useState('');

  function handleChange<K extends keyof ProposalForm>(key: Kvalue: ProposalForm[K]) {
    setForm((prev) => ({ ...prev[key]: value }));
=======
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.',
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [draftMarkdown, setDraftMarkdown] = useState('');
  const [draftJson, setDraftJson] = useState<any>(null);
  const [exportLinks, setExportLinks] = useState<{ pdfUrl?: string; jsonUrl?: string; mdUrl?: string } | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

  function handleChange<K extends keyof ProposalForm>(key: K, value: ProposalForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
>>>>>>> origin/auto/autonomy-17186719616
  }

  async function handleGenerate() {
    setIsGenerating(true);
    setStatusMessage('Generating draft...');
    try {
<<<<<<< HEAD
      const res = await fetch('/api/proposals/generate'{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)});
      const data = await res.json();
      setDraftMarkdown(data.markdown || ', ');
=======
      const res = await fetch('/api/proposals/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setDraftMarkdown(data.markdown || '');
>>>>>>> origin/auto/autonomy-17186719616
      setDraftJson(data.json || null);
      setStatusMessage('Draft ready. You can edit and export.');
    } catch (e: any) {
      console.error(e);
      setStatusMessage('Failed to generate. You can edit manually and export.');
    } finally {
      setIsGenerating(false);
    }
  }

  async function handleExport() {
    setStatusMessage('Exporting to PDF/Markdown/JSON...');
    try {
<<<<<<< HEAD
      const res = await fetch('/api/proposals/export'{
=======
      const res = await fetch('/api/proposals/export', {
>>>>>>> origin/auto/autonomy-17186719616
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          markdown: draftMarkdown,
          json: draftJson,
<<<<<<< HEAD
          meta: form})});
      const data = await res.json();
      setExportLinks({ pdfUrl: data.pdfUrljsonUrl: data.jsonUrlmdUrl: data.mdUrl });
=======
          meta: form,
        }),
      });
      const data = await res.json();
      setExportLinks({ pdfUrl: data.pdfUrl, jsonUrl: data.jsonUrl, mdUrl: data.mdUrl });
>>>>>>> origin/auto/autonomy-17186719616
      setStatusMessage('Exported. Files saved.');
    } catch (e) {
      console.error(e);
      setStatusMessage('Export failed');
    }
  }

  async function handleSubmitBridge() {
    setStatusMessage('Submitting via bridge (email/IPFS/signature)...');
    try {
<<<<<<< HEAD
      const res = await fetch('/api/proposals/submit'{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown: draftMarkdownjson: draftJsonmeta: form })});
=======
      const res = await fetch('/api/proposals/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown: draftMarkdown, json: draftJson, meta: form }),
      });
>>>>>>> origin/auto/autonomy-17186719616
      const data = await res.json();
      setStatusMessage(`Submitted. Status: ${data.status || 'queued'}. IPFS: ${data.ipfsCid || 'N/A'}`);
    } catch (e) {
      console.error(e);
      setStatusMessage('Submission failed');
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Target institution</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={form.targetInstitution}
<<<<<<< HEAD
              onChange={(e) => handleChange(', 'targetInstitution', 'e.target.value)}
=======
              onChange={(e) => handleChange('targetInstitution', e.target.value)}
>>>>>>> origin/auto/autonomy-17186719616
              placeholder="UNDP / World Bank / ILO"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Type</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={form.type}
<<<<<<< HEAD
              onChange={(e) => handleChange(', 'type', 'e.target.value as ProposalType)}
=======
              onChange={(e) => handleChange('type', e.target.value as ProposalType)}
>>>>>>> origin/auto/autonomy-17186719616
            >
              <option>Workforce Dev</option>
              <option>AI Ethics</option>
              <option>Digital ID</option>
              <option>Education</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Regional scope</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={form.regionalScope}
<<<<<<< HEAD
              onChange={(e) => handleChange(', 'regionalScope', 'e.target.value)}
=======
              onChange={(e) => handleChange('regionalScope', e.target.value)}
>>>>>>> origin/auto/autonomy-17186719616
              placeholder="Global / Africa / LATAM / APAC / EU / ..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Budget / Resolution goals</label>
            <textarea
              className="w-full border rounded px-3 py-2 min-h-[80px]"
              value={form.budgetOrGoals}
<<<<<<< HEAD
              onChange={(e) => handleChange(', 'budgetOrGoals', 'e.target.value)}
              placeholder="$5M for pilot; goals: 10k workers onboarded70% female youthetc."
=======
              onChange={(e) => handleChange('budgetOrGoals', e.target.value)}
              placeholder="$5M for pilot; goals: 10k workers onboarded, 70% female youth, etc."
>>>>>>> origin/auto/autonomy-17186719616
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Supporting multiverse(s)</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={form.supportingMultiverses}
<<<<<<< HEAD
              onChange={(e) => handleChange(', 'supportingMultiverses', 'e.target.value)}
              placeholder="Eg. Zion.aiZion.IDZion.Work"
=======
              onChange={(e) => handleChange('supportingMultiverses', e.target.value)}
              placeholder="Eg. Zion.ai, Zion.ID, Zion.Work"
>>>>>>> origin/auto/autonomy-17186719616
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Language</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={form.language}
<<<<<<< HEAD
                onChange={(e) => handleChange(', 'language', 'e.target.value)}
=======
                onChange={(e) => handleChange('language', e.target.value)}
>>>>>>> origin/auto/autonomy-17186719616
                placeholder="English / French / Spanish / Arabic / ..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium">GPT Prompt Assist</label>
              <textarea
                className="w-full border rounded px-3 py-2 min-h-[80px]"
                value={form.customPrompt}
<<<<<<< HEAD
                onChange={(e) => handleChange(', 'customPrompt', 'e.target.value)}
=======
                onChange={(e) => handleChange('customPrompt', e.target.value)}
>>>>>>> origin/auto/autonomy-17186719616
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? 'Generating...' : 'Generate Draft'}
            </button>
            <button
              className="px-4 py-2 bg-emerald-600 text-white rounded"
              onClick={handleExport}
              disabled={!draftMarkdown}
            >
              Export (PDF/JSON/MD)
            </button>
            <button
              className="px-4 py-2 bg-purple-600 text-white rounded"
              onClick={handleSubmitBridge}
              disabled={!draftMarkdown}
            >
              Submit Bridge
            </button>
          </div>
          {statusMessage && <p className="text-sm text-gray-600">{statusMessage}</p>}
          {exportLinks && (
            <div className="text-sm space-y-1">
              {exportLinks.pdfUrl && (
                <div>
                  <a className="text-blue-600 underline" href={exportLinks.pdfUrl} target="_blank" rel="noreferrer">PDF</a>
                </div>
              )}
              {exportLinks.mdUrl && (
                <div>
                  <a className="text-blue-600 underline" href={exportLinks.mdUrl} target="_blank" rel="noreferrer">Markdown</a>
                </div>
              )}
              {exportLinks.jsonUrl && (
                <div>
                  <a className="text-blue-600 underline" href={exportLinks.jsonUrl} target="_blank" rel="noreferrer">JSON</a>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Draft (Markdown)</label>
          <textarea
            className="w-full border rounded px-3 py-2 min-h-[520px] font-mono"
            value={draftMarkdown}
            onChange={(e) => setDraftMarkdown(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}