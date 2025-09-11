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


    title: 'Zion DAO x Digital Labor Initiative'
    targetInstitution: 'UN Development Programme'
    type: 'Workforce Dev'
    regionalScope: 'Global South'
    budgetOrResolution: 'USD 3M over 24 months'
    supportingMultiverses: 'Digital Labor, AI Ethics'
    promptAssist:
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.'
    language: 'en'
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.',
    language: 'en',;
==============  });  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [translated, setTranslated] = useState<string>('');
  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }))
  };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  async function generate() {
    setLoading(true);
    try {
      const res = await fetch('/api/proposals/generate', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          ...form;
          supportingMultiverses: form.supportingMultiverses.split().map((s) => s.trim()).filter(Boolean)})}),
      const data = await res.json();

  }
export default function UNBridge(req, res) {
  try {
  const [form, setForm] = useState({;
    title: 'Zion DAO x Digital Labor Initiative';
=======
  const [form, setForm] = useState({;
    title: 'Zion DAO x Digital Labor Initiative',;    targetInstitution: 'UN Development Programme',;
    type: 'Workforce Dev',;
    regionalScope: 'Global South',;
    budgetOrResolution: 'USD 3M over 24 months',;
    supportingMultiverses: 'Digital Labor, AI Ethics',;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const onChange = (;
    e: React && React.ChangeEvent<;
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    >;
  ) => {;
    const { name, value } = e && e.target;
    setForm(f => ({ ...f, [name]: value }));  };
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            <div className='border rounded p-3 h-60 overflow-auto whitespace-pre-wrap bg-gray-50'>;=======
              {translated}
            </div>;
          )}
          <div className='flex items-center gap-2'>;
            <button
              onClick={exportArtifacts}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        </div>;
      </div>;
    </div>;
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
        <div className="space-y-3">
          <div className="text-sm opacity-70">Output</div>
          <div className="border rounded p-3 h-96 overflow-auto whitespace-pre-wrap bg-gray-50">
            {result?.markdown || 'No draft yet'}
=======
          </div>
          {result?.meta && (
            <div className="text-sm space-y-1">
              <div><span className="font-medium">Status:</span> {result.meta.status}</div>
              {result.meta.artifacts?.markdownPath && (

}

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
