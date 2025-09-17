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
    targetInstitution: 'UNDP',
    type: 'Workforce Dev',
    regionalScope: 'Global',
    budgetOrGoals: '',
    supportingMultiverses: '',
    language: 'English',
    customPrompt:
  }

  async function handleGenerate() {
    setIsGenerating(true);
    setStatusMessage('Generating draft...');
    try {
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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          markdown: draftMarkdown,
          json: draftJson,
      setStatusMessage('Exported. Files saved.');
    } catch (e) {
      console.error(e);
      setStatusMessage('Export failed');
    }
  }

  async function handleSubmitBridge() {
    setStatusMessage('Submitting via bridge (email/IPFS/signature)...');
    try {
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
              placeholder="UNDP / World Bank / ILO"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Type</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={form.type}
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
              placeholder="Global / Africa / LATAM / APAC / EU / ..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Budget / Resolution goals</label>
            <textarea
              className="w-full border rounded px-3 py-2 min-h-[80px]"
              value={form.budgetOrGoals}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Supporting multiverse(s)</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={form.supportingMultiverses}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Language</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={form.language}
                placeholder="English / French / Spanish / Arabic / ..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium">GPT Prompt Assist</label>
              <textarea
                className="w-full border rounded px-3 py-2 min-h-[80px]"
                value={form.customPrompt}
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