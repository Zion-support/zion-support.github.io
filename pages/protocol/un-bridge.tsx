import React, { useState } from 'react';
export default function UNBridge() {
  const [form, setForm] = useState({

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


      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.',
    language: 'en',;


  });  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [translated, setTranslated] = useState<string>('');
  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));  }
=======
    title: 'Zion DAO x Digital Labor Initiative',
    targetInstitution: 'UN Development Programme',
    type: 'Workforce Dev',
    regionalScope: 'Global South',
    budgetOrResolution: 'USD 3M over 24 months',
    supportingMultiverses: 'Digital Labor, AI Ethics',
    promptAssist: 'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.',
    language: 'en'}),
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [translated, setTranslated] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }))
  };

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  async function generate() {
    setLoading(true);
    try {
      const res = await fetch('/api/proposals/generate', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({

=======
          ...form;
          supportingMultiverses: form.supportingMultiverses.split().map((s) => s.trim()).filter(Boolean)})}),
      const data = await res.json();

  const [form, setForm] = useState({;
    title: 'Zion DAO x Digital Labor Initiative',;
    targetInstitution: 'UN Development Programme',;
    type: 'Workforce Dev',;
    regionalScope: 'Global South',;
    budgetOrResolution: 'USD 3M over 24 months',;
    supportingMultiverses: 'Digital Labor, AI Ethics',;
    promptAssist:;
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.',;
    language: 'en',;
  });  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [translated, setTranslated] = useState<string>('');

  const onChange = (;
    e: React && React.ChangeEvent<;
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    >;
  ) => {;
    const { name, value } = e && e.target;
    setForm(f => ({ ...f, [name]: value }));  };

  async function generate() {;
    setLoading(true);
    try {;
      const res = await fetch('/api/proposals/generate', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          ...form,;
          supportingMultiverses: form && form.supportingMultiverses;
            .split(',');
            .map(s => s && s.trim());
            .filter(Boolean),;
        }),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      const data = await res && res.json();
      setResult(data);
    } finally {;
      setLoading(false);
    }  }


    try {;
      const res = await fetch('/api/proposals/translate', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ markdown: result && result.markdown, targetLanguage }),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      const data = await res && res.json();
      setTranslated(data && data.translated);
    } finally {;
      setLoading(false);
    }  }


      });
      // Refresh meta;
      const list = await fetch('/api/proposals/list');

      const { proposals } = await list && list.json();
      const updated = proposals && proposals.find((p: any) => p && p.id === result && result.meta.id),;

      setResult((r: any) => ({ ...r, meta: updated }));
    } finally {;
      setLoading(false);
    }  }



  async function submit(): any (channels: string[]) {;
    if (!result?.meta?.id) return;
    setLoading(true),;
    try {;
      const res = await fetch('/api/proposals/submit', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ id: result && result.meta.id, channels }),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      const data = await res && res.json();
      setResult((r: any) => ({ ...r, meta: data && data.meta }));
    } finally {;
      setLoading(false);
    }

  }
  return (
    <div className='space-y-6'>;
      <h1 className='text-2xl font-semibold'>Global Outreach: UN Bridge</h1>;
      <div className='grid md:grid-cols-2 gap-6'>;
        <div className='space-y-3'>;
          <label className='block'>;
            <span className='text-sm'>Title</span>;
            <input
              name='title'
              value={form && form.title}
              onChange={onChange}
              className='w-full border rounded p-2'
            />;
          </label>;
          <label className='block'>;
            <span className='text-sm'>Target institution</span>;
            <input
              name='targetInstitution'
              value={form && form.targetInstitution}
              onChange={onChange}
              className='w-full border rounded p-2'
            />;
          </label>;
          <label className='block'>;
            <span className='text-sm'>Type</span>;
            <select
              name='type'
              value={form && form.type}
              onChange={onChange}
              className='w-full border rounded p-2'>              <option>Workforce Dev</option>;
              <option>AI Ethics</option>;
              <option>Digital ID</option>;
              <option>Education</option>;
            </select>;
          </label>;
          <label className='block'>;
            <span className='text-sm'>Regional scope</span>;
            <input
              name='regionalScope'
              value={form && form.regionalScope}
              onChange={onChange}
              className='w-full border rounded p-2'
            />;
          </label>;
          <label className='block'>;
            <span className='text-sm'>Budget / Resolution goals</span>;
            <input
              name='budgetOrResolution'
              value={form && form.budgetOrResolution}
              onChange={onChange}
              className='w-full border rounded p-2'
            />;
          </label>;
          <label className='block'>;
            <span className='text-sm'>;
              Supporting multiverse(s) (comma separated);
            </span>;
            <input
              name='supportingMultiverses'
              value={form && form.supportingMultiverses}
              onChange={onChange}
              className='w-full border rounded p-2'
            />;
          </label>;
          <label className='block'>;
            <span className='text-sm'>GPT Prompt Assist</span>;
            <textarea
              name='promptAssist'
              rows={5}
              value={form && form.promptAssist}
              onChange={onChange}
              className='w-full border rounded p-2'
            />;
          </label>;
          <div className='flex gap-3'>;
            <button
              onClick={generate}
              disabled={loading}
              className='px-4 py-2 bg-black text-white rounded'>;
              {loading ? 'Working…' : 'Generate Proposal'}

            </button>;
          </div>;
        </div>;
        <div className='space-y-3'>;
          <div className='text-sm opacity-70'>Output</div>;
          <div className='border rounded p-3 h-96 overflow-auto whitespace-pre-wrap bg-gray-50'>;
            {result?.markdown || 'No draft yet'}
          </div>;
          <div className='flex items-center gap-2'>;
            <button
              onClick={() => translate('fr')}
              disabled={loading || !result}
              className='px-3 py-2 border rounded';
            >;
              Translate FR;
            </button>;
            <button
              onClick={() => translate('es')}
              disabled={loading || !result}
              className='px-3 py-2 border rounded';
            >;
              Translate ES;
            </button>;
            <button
              onClick={() => translate('ar')}
              disabled={loading || !result}
              className='px-3 py-2 border rounded';
            >;
              Translate AR;
            </button>;
          </div>;
          {translated && (;
            <div className='border rounded p-3 h-60 overflow-auto whitespace-pre-wrap bg-gray-50'>;

              {translated}
            </div>;
          )}
          <div className='flex items-center gap-2'>;
            <button
              onClick={exportArtifacts}

              disabled={loading || !result}
              className='px-3 py-2 border rounded'>;
              Export PDF + Sign + IPFS;
            </button>;
            <button
              onClick={() => submit(['email'])}
              disabled={loading || !result}
              className='px-3 py-2 border rounded';
            >;
              Submit (Email);
            </button>;
          </div>;
          {result?.meta && (;
            <div className='text-sm space-y-1'>;
              <div>;

                <span className='font-medium'>Status:</span>{' '}
                {result && result.meta.status}
              </div>;
              {result && result.meta.artifacts?.markdownPath && (;
                <div>;
                  <a
                    className='text-blue-600 underline'
                    href={result && result.meta.artifacts && artifacts.markdownPath}
                    target='_blank'
                    rel='noreferrer'>;
                    Markdown;
                  </a>;
                </div>;
              )}
              {result && result.meta.artifacts?.pdfPath && (;
                <div>;
                  <a
                    className='text-blue-600 underline'
                    href={result && result.meta.artifacts && artifacts.pdfPath}
                    target='_blank'
                    rel='noreferrer'>;
                    PDF;
                  </a>;
                </div>              )}
              {result && result.meta.artifacts?.ipfsCid && (;
                <div>IPFS CID: {result && result.meta.artifacts && artifacts.ipfsCid}</div>;
              )}
              {result && result.meta.artifacts?.signature && (;
                <div>;
                  Signature: {result && result.meta.artifacts && artifacts.signature.slice(0, 30)}…;
                </div>              )}
            </div>;
          )}

        </div>;
      </div>;
    </div>;
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Global Outreach: UN Bridge</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block">
            <span className="text-sm">Title</span>
            <input name="title" value={form.title} onChange={onChange} className="w-full border rounded p-2" />
          </label>
          <label className="block">
            <span className="text-sm">Target institution</span>
            <input name="targetInstitution" value={form.targetInstitution} onChange={onChange} className="w-full border rounded p-2" />
          </label>
          <label className="block">
            <span className="text-sm">Type</span>
            <select name="type" value={form.type} onChange={onChange} className="w-full border rounded p-2">
              <option>Workforce Dev</option>
              <option>AI Ethics</option>
              <option>Digital ID</option>
              <option>Education</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm">Regional scope</span>
            <input name="regionalScope" value={form.regionalScope} onChange={onChange} className="w-full border rounded p-2" />
          </label>
          <label className="block">
            <span className="text-sm">Budget / Resolution goals</span>
            <input name="budgetOrResolution" value={form.budgetOrResolution} onChange={onChange} className="w-full border rounded p-2" />
          </label>
          <label className="block">
            <span className="text-sm">Supporting multiverse(s) (comma separated)</span>
            <input name="supportingMultiverses" value={form.supportingMultiverses} onChange={onChange} className="w-full border rounded p-2" />
          </label>
          <label className="block">
            <span className="text-sm">GPT Prompt Assist</span>
            <textarea name="promptAssist" rows={5} value={form.promptAssist} onChange={onChange} className="w-full border rounded p-2" />
          </label>
          <div className="flex gap-3">
            <button onClick={generate} disabled={loading} className="px-4 py-2 bg-black text-white rounded">{loading ? 'Working…' : 'Generate Proposal'}</button>
          </div>
        </div>
        <div className='space-y-3'>
          <div className='text-sm opacity-70'>Output</div>
          <div className='border rounded p-3 h-96 overflow-auto whitespace-pre-wrap bg-gray-50'>
            {result?.markdown |'No draft yet'}
          </div>
          <div className='flex items-center gap-2'>
            <button
              onClick={() => translate('fr')}
              disabled={loading |!result}
              className='px-3 py-2 border rounded'
            >
              Translate FR
            </button>
            <button
              onClick={() => translate('es')}
              disabled={loading |!result}
              className='px-3 py-2 border rounded'
            >
              Translate ES
            </button>
            <button
              onClick={() => translate('ar')}
              disabled={loading |!result}
              className='px-3 py-2 border rounded'
            >
              Translate AR
            </button>
          </div>
          {translated && (
            <div className='border rounded p-3 h-60 overflow-auto whitespace-pre-wrap bg-gray-50'>
              {translated}
            </div>
          )}
          <div className='flex items-center gap-2'>
            <button
              onClick={exportArtifacts}
              disabled={loading |!result}
              className='px-3 py-2 border rounded'
            >
              Export PDF + Sign + IPFS
            </button>
            <button
              onClick={() => submit(['email'])}
              disabled={loading |!result}
              className='px-3 py-2 border rounded'
            >
              Submit (Email)
            </button>
        <div className="space-y-3">
          <div className="text-sm opacity-70">Output</div>
          <div className="border rounded p-3 h-96 overflow-auto whitespace-pre-wrap bg-gray-50">
            {result?.markdown || 'No draft yet'}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => translate('fr')} disabled={loading || !result} className="px-3 py-2 border rounded">Translate FR</button>
            <button onClick={() => translate('es')} disabled={loading || !result} className="px-3 py-2 border rounded">Translate ES</button>
            <button onClick={() => translate('ar')} disabled={loading || !result} className="px-3 py-2 border rounded">Translate AR</button>
          </div>
          {translated && (



          </div>
          {result?.meta && (
            <div className="text-sm space-y-1">
              <div><span className="font-medium">Status:</span> {result.meta.status}</div>
              {result.meta.artifacts?.markdownPath && (
                <div><a className="text-blue-600 underline" href={result.meta.artifacts.markdownPath} target="_blank" rel="noreferrer">Markdown</Link></div>
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              {result.meta.artifacts?.pdfPath && (
                <div>
                  <a
                    className='text-blue-600 underline'
                    href={result.meta.artifacts.pdfPath}
                    target='_blank'
                    rel='noreferrer'
                  >
                    PDF
                  </a>
                </div>              )}
              {result.meta.artifacts?.ipfsCid && (
                <div>IPFS CID: {result.meta.artifacts.ipfsCid}</div>
              )}
              {result.meta.artifacts?.pdfPath && (

export default /**
 * UNBridge - Function description
 */
function UNBridge() {
  const [form, set_form] = useState ({
    title: 'Zion DAO x Digital Labor Initiative',
    target_institution: 'UN Development Programme',
    type: 'Workforce Dev',
    regional_scope: 'Global South',
    budgetOrResolution: 'USD 3M over 24 months',
    supporting_multiverses: 'Digital Labor, AI Ethics',
    prompt_assist:;
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO - based governance logic.',
    language: 'en',
  });  const [loading, set_loading] = useState (false);
  const [result, set_result] = useState < any>(null);
  const [translated, set_translated] = useState < string>('');
;
  const on_change = (
    e: React.ChangeEvent<;
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    >) =>: any {
    const { name, value } = e.target;
    set_form (function => ({ ...f, [name]: value }));  }
;
  async /**
 * generate - Function description
 */
function generate() {
    set_loading (true);
    try {
      const res = await fetch ('/api / proposals / generate', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          ...form,
          supporting_multiverses: form.supporting_multiverses;
            .split (', ');
            .map (string => s.trim ());
            .filter (Boolean),
        }),
      });
      const data = await res.json ();
      set_result (data);
    } finally {
      set_loading (false);
    }  }
  async /**
 * translate - Function description
 */
function translate() {
    // Check condition
if (return) {
  $2
}
    set_loading (true),
    try {
      const res = await fetch ('/api / proposals / translate', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ markdown: result.markdown, target_language }),
      });
      const data = await res.json ();
      set_translated (data.translated);
    } finally {
      set_loading (false);
    }  }
  async /**
 * export_artifacts - Function description
 */
function export_artifacts() {
    // Check condition
if (return) {
  $2
}
    set_loading (true);
    try {
      await fetch ('/api / proposals / export', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ id: result.meta.id }),
      });
      // Refresh meta;
      const list = await fetch ('/api / proposals / list');
      const { proposals } = await list.json ();
      const updated = proposals.find ((p: any) => p.id === result.meta.id),
      set_result ((r: any) => ({ ...r, meta: updated }));
    } finally {
      set_loading (false);
    }  }
  async /**
 * submit - Function description
 */
function submit() {
    // Check condition
if (return) {
  $2
}
    set_loading (true),
    try {
      const res = await fetch ('/api / proposals / submit', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ id: result.meta.id, channels }),
      });
      const data = await res.json ();
      set_result ((r: any) => ({ ...r, meta: data.meta }));
    } finally {
      set_loading (false);
    }
=======


}

=======
                <div><a className="text-blue-600 underline" href={result.meta.artifacts.pdfPath} target="_blank" rel="noreferrer">PDF</Link></div>
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
  return (
    <div className='space - y-6'>;
      <h1 className='text - 2xl font - semibold'>Global Outreach: UN Bridge</h1>;
      <div className='grid md:grid - cols - 2 gap - 6'>;
        <div className='space - y-3'>;
          <label className='block'>;
            <span className='text - sm'>Title</span>;
            <input;
              name='title';
              value={form.title}
              on_change={on_change}
              className='w - full border rounded p - 2';
            />;
          </label>;
          <label className='block'>;
            <span className='text - sm'>Target institution</span>;
            <input;
              name='target_institution';
              value={form.target_institution}
              on_change={on_change}
              className='w - full border rounded p - 2';
            />;
          </label>;
          <label className='block'>;
            <span className='text - sm'>Type</span>;
            <select;
              name='type';
              value={form.type}
              on_change={on_change}
              className='w - full border rounded p - 2';
            >              <option > Workforce Dev</option>;
              <option > AI Ethics</option>;
              <option > Digital ID</option>;
              <option > Education</option>;
            </select>;
          </label>;
          <label className='block'>;
            <span className='text - sm'>Regional scope</span>;
            <input;
              name='regional_scope';
              value={form.regional_scope}
              on_change={on_change}
              className='w - full border rounded p - 2';
            />;
          </label>;
          <label className='block'>;
            <span className='text - sm'>Budget / Resolution goals</span>;
            <input;
              name='budgetOrResolution';
              value={form.budgetOrResolution}
              on_change={on_change}
              className='w - full border rounded p - 2';
            />;
          </label>;
          <label className='block'>;
            <span className='text - sm'>;
              Supporting multiverse (s) (comma separated);
            </span>;
            <input;
              name='supporting_multiverses';
              value={form.supporting_multiverses}
              on_change={on_change}
              className='w - full border rounded p - 2';
            />;
          </label>;
          <label className='block'>;
            <span className='text - sm'>GPT Prompt Assist</span>;
            <textarea;
              name='prompt_assist';
              rows={5}
              value={form.prompt_assist}
              on_change={on_change}
              className='w - full border rounded p - 2';
            />;
          </label>;
          <div className='flex gap - 3'>;
            <button;
              on_click={generate}
              disabled={loading}
              className='px - 4 py - 2 bg - black text - white rounded';
            >;
              {loading ? 'Working…' : 'Generate Proposal'}
            </button>;
          </div>;
        </div>;
        <div className='space - y-3'>;
          <div className='text - sm opacity - 70'>Output</div>;
          <div className='border rounded p - 3 h - 96 overflow - auto whitespace - pre - wrap bg - gray - 50'>;
            {result?.markdown || 'No draft yet'}
          </div>;
          <div className='flex items - center gap - 2'>;
            <button;
              on_click={() => translate ('fr')}
              disabled={loading || !result}
              className='px - 3 py - 2 border rounded';
            >;
              Translate FR;
            </button>;
            <button;
              on_click={() => translate ('es')}
              disabled={loading || !result}
              className='px - 3 py - 2 border rounded';
            >;
              Translate ES;
            </button>;
            <button;
              on_click={() => translate ('ar')}
              disabled={loading || !result}
              className='px - 3 py - 2 border rounded';
            >;
              Translate AR;
            </button>;
          </div>;
          {translated && (
            <div className='border rounded p - 3 h - 60 overflow - auto whitespace - pre - wrap bg - gray - 50'>;
              {translated}
            </div>)}
          <div className='flex items - center gap - 2'>;
            <button;
              on_click={export_artifacts}
              disabled={loading || !result}
              className='px - 3 py - 2 border rounded';
            >;
              Export PDF + Sign + IPFS;
            </button>;
            <button;
              on_click={() => submit (['email'])}
              disabled={loading || !result}
              className='px - 3 py - 2 border rounded';
            >;
              Submit (Email);
            </button>;
          </div>;
          {result?.meta && (
            <div className='text - sm space - y-1'>;
              <div>;
                <span className='font - medium'>Status:</span>{' '}
                {result.meta.status}
              </div>;
              {result.meta.artifacts?.markdown_path && (
                <div>;
                  <a;
                    className='text - blue - 600 underline';
                    href={result.meta.artifacts.markdown_path}
                    target='_blank';
                    rel='noreferrer';
                  >;
                    Markdown;
                  </a>;
                </div>)}
              {result.meta.artifacts?.pdf_path && (
                <div>;
                  <a;
                    className='text - blue - 600 underline';
                    href={result.meta.artifacts.pdf_path}
                    target='_blank';
                    rel='noreferrer';
                  >;
                    PDF;
                  </a>;
                </div>              )}
              {result.meta.artifacts?.ipfs_cid && (
                <div > IPFS CID: {result.meta.artifacts.ipfs_cid}</div>)}
              {result.meta.artifacts?.signature && (
                <div>;
                  Signature: {result.meta.artifacts.signature.slice (0, 30)}…;
                </div>              )}
            </div>)}
        </div>;
      </div>;

    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
