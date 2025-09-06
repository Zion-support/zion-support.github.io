import React, { useState } from 'react';
import EnhancedLayout from '../layout / EnhancedLayout';
;
export type ProposalType =;
  | 'Workforce Dev';
  | 'AI Ethics';
  | 'Digital ID';
  | 'Education';
;
export type ProposalForm = {
  target_institution: string;
  type: ProposalType;
  regional_scope: string;
  budgetOrGoals: string;
  supporting_multiverses: string;
  language?: string;
  custom_prompt?: string;}export type ProposalForm = {
  target_institution: string,
  type: ProposalType,
  regional_scope: string,
  budgetOrGoals: string,
  supporting_multiverses: string,
  language?: string;
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