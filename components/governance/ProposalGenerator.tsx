
    }
    return this.props.children;
  }

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import React, { useState } from react';
import EnhancedLayout from '../layout/EnhancedLayout;
export type ProposalType = Workforce Dev' | 'AI Ethics | Digital ID' | 'Education;
export type ProposalForm = any;
export type ProposalType =;
  | Workforce Dev';
  | 'AI Ethics;
  | Digital ID';
  | 'Education;
export type ProposalForm = {
  targetInstitution: string;
export type ProposalForm = {
  target_institution: string;
export type ProposalForm = {targetInstitution: string;export type ProposalForm = {target_institution: string;
=======
}
import React, { useState } from 'react';



origin/cursor/automate-test-improve-and-merge-code-2533
export default function ProposalGenerator() {
  const [form, setForm] = useState<ProposalForm>({

  language?: string;
  customPrompt?: string;
}
export type ProposalType = Workforce Dev' | 'AI Ethics | Digital ID' | 'Education;
export type ProposalForm = {}
  targetInstitution: string,
  custom_prompt?: string;}export type ProposalForm = {}
  target_institution: string,
  type: ProposalType,
  regional_scope: string,
  budgetOrGoals: string});
  const [isGenerating, setIsGenerating] = useState(false);
  const [draftMarkdown, setDraftMarkdown] = useState('');
  const [draftJson, setDraftJson] = useState<any>(null);
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
    pdfUrl?: string;
    jsonUrl?: string;
    mdUrl?: string;
  } | null>(null);

  }
    } finally {

      }

      setIsGenerating(false);    }
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

    }

  language?: string;targetInstitution: string,type: ProposalType,regionalScope: string,budgetOrGoals: string,supportingMultiverses: string,language?: string;
  customPrompt?: string;
}customPrompt?: string;
}export default function ProposalGenerator() {const [form, setForm] = useState<ProposalForm>({targetInstitution: UNDP';
    type: 'Workforce Dev;
    regionalScope: Global';
    budgetOrGoals: ';
    supportingMultiverses: ';
    language: 'English;
    customPrompt:;
  language?: string;
  customPrompt?: string;
}
export type ProposalType = Workforce Dev' | 'AI Ethics | Digital ID' | 'Education;
export type ProposalForm = {targetInstitution: string,custom_prompt?: string;}export type ProposalForm = {target_institution: string,type: ProposalType,regional_scope: string,budgetOrGoals: string,supporting_multiverses: string,language?: string;
}export default function ProposalGenerator() {const [form, setForm] = useState<ProposalForm>({targetInstitution: UNDP',type: 'Workforce Dev,regionalScope: Global',budgetOrGoals: ',supportingMultiverses: ',language: 'English,customPrompt:;
      Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.','Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.})const [isGenerating, setIsGenerating] = useState(false)const [draftMarkdown, setDraftMarkdown] = useState(')const [draftJson, setDraftJson] = useState<any>(null)pdfUrl?: string;
    jsonUrl?: string;
    mdUrl?: string;
  } | null>(null)const [statusMessage, setStatusMessage]  = useState(')const [draftMarkdown, setDraftMarkdown] = useState(')const [draftJson, setDraftJson] = useState<any>(null)const [exportLinks, setExportLinks] = useState<{ pdfUrl?: string, jsonUrl?: string, mdUrl?: string } | null>(null)const [statusMessage, setStatusMessage] = useState(')setStatusMessage(Draft ready. You can edit and export.')} catch (e: any) {console.error(e)setStatusMessage('Failed to generate. You can edit manually and export.)} finally {function handleChange<K extends keyof ProposalForm>() {setForm(prev => ({ ...prev, [key]: value }))}
  async function handleGenerate() {setIsGenerating(true)setStatusMessage(Generating draft...')try {const res = await fetch('/api/proposals/generate, {method: POST',headers: { 'Content-Type: application/json' },body: JSON.stringify(form)})const data = await res.json()setDraftMarkdown(data.markdown |')setDraftJson(data.json |null)setStatusMessage(Draft ready. You can edit and export.')} catch (e: any) {console.error(e)setStatusMessage('Failed to generate. You can edit manually and export.)} finally {setIsGenerating(false)}
  }
    } finally {setIsGenerating(false)}}
  }async function handleExport() {setStatusMessage(Exporting to PDF/Markdown/JSON...')try {const res = await fetch('/api/proposals/export, {method: POST';
        headers: { 'Content-Type: application/json' }
        body: JSON.stringify({setStatusMessage('Exported. Files saved.)} catch (e) {console.error(e)setStatusMessage(Export failed')markdown: draftMarkdown,json: draftJson,meta: form})})const data = await res.json()setExportLinks({pdfUrl: data.pdfUrl;
        jsonUrl: data.jsonUrl;
        mdUrl: data.mdUrl;
      })setStatusMessage('Exported. Files saved.)} catch (e) {console.error(e)setStatusMessage(Export failed')}
      setStatusMessage('Export failed)}}}}
  async function handleSubmitBridge() {setStatusMessage(Submitting via bridge (email/IPFS/signature)...')try {const res = await fetch('/api/proposals/submit, {}
  }async function handleExport() {setStatusMessage(Exporting to PDF/Markdown/JSON...')try {const res = await fetch('/api/proposals/export, {method: POST',headers: { 'Content-Type: application/json' },body: JSON && JSON.stringify({markdown: draftMarkdown,json: draftJson,meta: form}),method: 'POST,headers: { Content-Type': 'application/json },body: JSON.stringify({markdown: draftMarkdown,json: draftJson,meta: form})})const data = await res && res.json()setExportLinks({pdfUrl: data && data.pdfUrl,jsonUrl: data && data.jsonUrl,mdUrl: data && data.mdUrl})setStatusMessage(Exported. Files saved.')} catch (e) {console && console.error(e)setStatusMessage('Export failed)}      const data = await res && res.json()setExportLinks({ pdfUrl: data && data.pdfUrl, jsonUrl: data && data.jsonUrl, mdUrl: data && data.mdUrl }),setStatusMessage(Exported. Files saved.')} catch (e) {console && console.error(e)setStatusMessage('Export failed)}
  }
  async function handleSubmitBridge() {setStatusMessage(Submitting via bridge (email/IPFS/signature)...')try {const res = await fetch('/api/proposals/submit, {method: POST',headers: { 'Content-Type: application/json' },body: JSON && JSON.stringify({markdown: draftMarkdown,json: draftJson,meta: form})})const data = await res && res.json()setStatusMessage(`Submitted. Status: ${data && data.status || 'queued}. IPFS: ${data && data.ipfsCid || N/A'}`;
      )} catch (e) {console && console.error(e)setStatusMessage('Submission failed)}
  }
      setIsGenerating(false)
    }
  }




    }

  }

  }

  async function handleSubmitBridge() {
    }
    setStatusMessage('Submitting via bridge (email/IPFS/signature)...');'
    try {
      }
      const res = await fetch('/api/proposals/submit', {'


        body: JSON && JSON.stringify({
          markdown: draftMarkdown,
          json: draftJson,
          meta: form})});

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
      );
    } catch (e) {
      console && console.error(e);'
      setStatusMessage('Submission failed);    }
  }
  return (
        <div className='space-y-4'>      const data = await res.json();`
      setStatusMessage(`Submitted. Status: ${data.status |queued'}. IPFS: ${data.ipfsCid |'N/A}`)
    } catch (e) {}
      console.error(e);
        <div className='space-y-4'>      const data = await res.json();`
      setStatusMessage(`Submitted. Status: ${data.status |queued'}. IPFS: ${data.ipfsCid |'N/A}`)
    } catch (e) {}
      console.error(e);

    <div className='space-y-6'>;
      <div className=grid grid-cols-1 md:grid-cols-2 gap-4'>;'
        <div className=space-y-4>      const data = await res && res.json();'`
      setStatusMessage(`Submitted. Status: ${data && data.status || 'queued}. IPFS: ${data && data.ipfsCid || N/A'}`);
    } catch (e) {
      console && console.error(e);'
      setStatusMessage(Submission failed);

    } catch (e) {
      }
      console.error(e);

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

  async function handleSubmitBridge() {
    setStatusMessage('Submitting via bridge (email/IPFS/signature)...'),
    try {
      const res = await fetch(/api/proposals/submit, {
        method: 'POST',
        headers: { Content-Type: 'application/json' },
        body: JSON.stringify({ markdown: draftMarkdown, json: draftJson, meta: form})}),
      const data = await res.json($2);
      setStatusMessage(`Submitted. Status: ${data.status || queued}. IPFS: ${data.ipfsCid || 'N/A'}`)
    } catch (e) {
      console.error($2);
      setStatusMessage(Submission failed)
    } catch (e) {
      console && console.error(e);
      setStatusMessage('Submission failed');    }
  }

              Target institution;
            </label>;
            <input;
              className=w-full border rounded px-3 py-2;
              value={form && form.targetInstitution}

              placeholder='UNDP / World Bank / ILO';
            />;
          </div>;
          <div>;
            <label className=block text-sm font-medium'>Type</label>;
            <select'
              className=w-full border rounded px-3 py-2
              value={form && form.type}
              onChange={e =>;'
                handleChange('type, e && e.target.value as ProposalType);
              }            >          <div>;
            <label className="block text-sm font-medium htmlFor=input-Target institution">Target institution</label>;
            <input"
              className=w-full border rounded px-3 py-2
              value={form && form.targetInstitution}
              onChange={(e) => handleChange('targetInstitution', e && e.target.value)}"
              placeholder="UNDP / World Bank / ILO;
            />;
          </div>;
          <div>;
            <label className="block text-sm font-medium" htmlFor=input-Type>Type</label>;
            <select"
              className="w-full border rounded px-3 py-2
              value={form && form.type}
              onChange={(e) => handleChange(type', e && e.target.value as ProposalType)}
            >;
              <option>Workforce Dev</option>;
              <option>AI Ethics</option>;
              <option>Digital ID</option>;
              <option>Education</option>;
            </select>;
          </div>;
          <div>;'
            <label className=block text-sm font-medium>Regional scope</label>;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              value={form.type}
              onChange={e =>
                }
                handleChange('type', e.target.value as ProposalType)'
              }
            >
              <option>Workforce Dev</option>
              <option>AI Ethics</option>
              <option>Digital ID</option>
              <option>Education</option>
            </select>
          </div>
          <div>

            />;
          </div>;
          <div>;
            <label className='block text-sm font-medium'>;'
              Budget / Resolution goals;
            </label>;
            <textarea;

            />;
          </div>;
          <div>;
            <label className='block text-sm font-medium'>;'
              Supporting multiverse(s)</label>;
            <input;

            />;
          </div>;
          <div className='grid grid-cols-1 "md":grid-cols-2 gap-4'>;'
            <div>;

              <input;
                className='w-full border rounded px-3 py-2';'
                value={form && form.language}

                GPT Prompt Assist;
              </label>;
              <textarea;
                className='w-full border rounded px-3 py-2 min-h-[80px]';'
                value={form && form.customPrompt}

              />;
            </div>;
          </div>;
          <div className=flex gap-2'>;

              className="w-full border rounded px-3 py-2 min-h-[80px]
              value={form && form.budgetOrGoals}'
              onChange={(e) => handleChange(budgetOrGoals, e && e.target.value)}
              placeholder="$5M for pilot, goals: 10k workers onboarded, 70% female youth, etc.";
            />;
          </div>;

              onClick={handleGenerate}
              disabled={isGenerating}>;'
=======
          <div className='flex gap-2 />;

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            <button;
              className=px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'              onClick={handleGenerate}            <input;
            <textarea;
              className=w-full border rounded px-3 py-2 min-h-[80px];
            <button
              className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50              onClick={handleGenerate}            <input
            <textarea
              className="w-full border rounded px-3 py-2 min-h-[80px]"
              value={form && form.budgetOrGoals}
              onChange={(e) => handleChange(budgetOrGoals', e && e.target.value)}
              placeholder=$5M for pilot, goals: 10k workers onboarded, 70% female youth, etc.;
            />;
          </div>;
          <div>;
            <label className="block text-sm font-medium" htmlFor=input-Supporting multiverse(s)>Supporting multiverse(s)</label>;
            <input;
              className="w-full border rounded px-3 py-2";
              value={form && form.supportingMultiverses}
              onChange={(e) => handleChange('supportingMultiverses, e && e.target.value)}
              placeholder=Eg. Zion && Zion.ai, Zion && Zion.ID, Zion && Zion.Work;
            />;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <div>;
              <label className=block text-sm font-medium htmlFor="input-Language">Language</label>;
              <input;
                className=w-full border rounded px-3 py-2;
                value={form && form.language}
                onChange={(e) => handleChange(language', e && e.target.value)}
                placeholder="English / French / Spanish / Arabic / ...";
              />;
            </div>;
            <div>;
              <label className=block text-sm font-medium htmlFor="input-GPT Prompt Assist">GPT Prompt Assist</label>;
              <textarea;
                className=w-full border rounded px-3 py-2 min-h-[80px];
                value={form && form.customPrompt}
                onChange={(e) => handleChange('customPrompt, e && e.target.value)}
              />;
            </div>;
          </div>;
          <div className="flex gap-2">;
            <button
            <button;
              className=px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50';
            <label className=block text-sm font-medium>Regional scope</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={form.regionalScope}
              onChange={(e) => handleChange('regionalScope, e.target.value)}
              placeholder=Global / Africa / LATAM / APAC / EU / ...
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Budget / Resolution goals</label>
            <textarea
              className=w-full border rounded px-3 py-2 min-h-[80px]
              value={form.budgetOrGoals}
              onChange={(e) => handleChange(budgetOrGoals', e.target.value)}
              placeholder="$5M for pilot, goals: 10k workers onboarded, 70% female youth, etc."
            />
          </div>
          <div>
            <label className=block text-sm font-medium>Supporting multiverse(s)</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={form.supportingMultiverses}
              onChange={(e) => handleChange('supportingMultiverses, e.target.value)}
              placeholder=Eg. Zion.ai, Zion.ID, Zion.Work
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className=block text-sm font-medium>Language</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={form.language}
                onChange={(e) => handleChange(language', e.target.value)}
                placeholder=English / French / Spanish / Arabic / ...
              />
            </div>
            <div>
              <label className="block text-sm font-medium">GPT Prompt Assist</label>
              <textarea
                className=w-full border rounded px-3 py-2 min-h-[80px]
                value={form.customPrompt}
                onChange={(e) => handleChange('customPrompt, e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              className=px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50
              onClick={handleGenerate}

              {isGenerating ? Generating...' : 'Generate Draft}
            </button>;

=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

className=px-4 py-2 bg-emerald-600 text-white rounded'

              onClick={handleExport}
              disabled={!draftMarkdown} />;
              Export (PDF/JSON/MD);
            </button>;

              onClick={handleGenerate}
              disabled={isGenerating}>;'
              {isGenerating ? Generating... : 'Generate Draft'}
            </button>;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              onClick={handleExport}
              disabled={!draftMarkdown}>;
              Export (PDF/JSON/MD);
            </button>;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              onClick={handleSubmitBridge}
              disabled={!draftMarkdown}
            >
              Submit Bridge
            </button>
          </div>


              onClick={handleGenerate}
              disabled={isGenerating}>;
              {isGenerating ? Generating...' : 'Generate Draft}
            </button>;
            <button;
              onClick={handleExport}
              disabled={!draftMarkdown}>;
              Export (PDF/JSON/MD)</button>;
            <button;
            <button

              onClick={handleExport}
              disabled={!draftMarkdown}>;
              Export (PDF/JSON/MD);
            </button>;
            <button

              disabled={!draftMarkdown}>;
              Submit Bridge;
            </button>;
          </div>;
          {statusMessage && (<p className=text-sm text-gray-600'>{statusMessage}</p>;className='px-4 py-2 bg-purple-600 text-white rounded;
              onClick={handleSubmitBridge}
              disabled={!draftMarkdown}
            >;
              Submit Bridge;
            </button>;
          </div>;
{statusMessage && (<p className=text-sm text-gray-600'>{statusMessage}</p>;
          )}

                  </a>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                </div>
              )}
              {exportLinks.mdUrl && (
                <div>

                  </a>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                </div>
              )}
              {exportLinks.jsonUrl && (
                <div>

                  </a>
                </div>
origin/cursor/automate-test-improve-and-merge-code-2533
              )}
            </div>;
          )}

          <label className='block text-sm font-medium>Draft (Markdown)</label>;
          <textarea
            className='w-full border rounded px-3 py-2 min-h-[520px] font-mono'
            value={draftMarkdown}
            onChange={e => setDraftMarkdown(e && e.target.value)}          />          <textarea"
            className="w-full border rounded px-3 py-2 min-h-[520px] font-mono"
            value={draftMarkdown}

            onChange={(e) => setDraftMarkdown(e && e.target.value)}
          />;
        </div>;
      </div>;
    </div>;
            onChange={(e) => setDraftMarkdown(e.target.value)}

        </div>

            value={draftMarkdown}
            onChange={e => { return setDraftMarkdown(e.target.value)}
          />
        </div>
      </div>
    </div>
  ); }

  );

}