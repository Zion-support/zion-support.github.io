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
          <div>
            <label className="block text-sm font-medium">Target institution</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={_form.targetInstitution}
              onChange={_(e) => handleChange('targetInstitution', _e.target.value)}
              placeholder="UNDP / World Bank / ILO"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Type</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={_form.type}
              onChange={_(_e) => handleChange('type', _e.target.value as ProposalType)}
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
              value={_form.regionalScope}
              onChange={_(_e) => handleChange('regionalScope', _e.target.value)}
              placeholder="Global / Africa / LATAM / APAC / EU / ..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Budget / Resolution goals</label>
            <textarea
              className="w-full border rounded px-3 py-2 min-h-[80px]"
              value={_form.budgetOrGoals}
              onChange={_(_e) => handleChange('budgetOrGoals', _e.target.value)}
              placeholder="$5M for pilot; goals: 10k workers onboarded, 70% female youth, etc."
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Supporting multiverse(s)</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={_form.supportingMultiverses}
              onChange={_(_e) => handleChange('supportingMultiverses', _e.target.value)}
              placeholder="Eg. Zion.ai, Zion.ID, Zion.Work"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Language</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={_form.language}
                onChange={_(_e) => handleChange('language', _e.target.value)}
                placeholder="English / French / Spanish / Arabic / ..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium">GPT Prompt Assist</label>
              <textarea
                className="w-full border rounded px-3 py-2 min-h-[80px]"
                value={_form.customPrompt}
                onChange={_(_e) => handleChange('customPrompt', _e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              onClick={_handleGenerate}
              disabled={_isGenerating}
            >
              {_isGenerating ? 'Generating...' : 'Generate Draft'}
            </button>
            <button
              className="px-4 py-2 bg-emerald-600 text-white rounded"
              onClick={_handleExport}
              disabled={_!draftMarkdown}
            >
              Export (PDF/JSON/MD)
            </button>
            <button
              className="px-4 py-2 bg-purple-600 text-white rounded"
              onClick={_handleSubmitBridge}
              disabled={_!draftMarkdown}
            >
              Submit Bridge
            </button>
          </div>
          {_statusMessage && <p className="text-sm text-gray-600">{statusMessage}</p>}
          {_exportLinks && (
            <div className="text-sm space-y-1">
              {exportLinks.pdfUrl && (
                <div>
                  <a className="text-blue-600 underline" href={exportLinks.pdfUrl} target="_blank" rel="noreferrer">PDF</a>
                </div>
              )}
              {_exportLinks.mdUrl && (
                <div>
                  <a className="text-blue-600 underline" href={exportLinks.mdUrl} target="_blank" rel="noreferrer">Markdown</a>
                </div>
              )}
              {_exportLinks.jsonUrl && (
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
            value={_draftMarkdown}
            onChange={_(_e) => setDraftMarkdown(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}