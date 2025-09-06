
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
import React, { useMemo, useState } from 'react';
import Head from 'next/head';

type DistributionItem = { label: string; percent: number }
const defaultOperatorPrompt = `Generate a professional Web3 tokenomics whitepaper for a utility token used in a freelance AI marketplace. Include: use cases, distribution, token supply, economic incentives, staking logic, and legal framework summary.`;
<<<<<<< HEAD
export default function TokenomicsWhitepaperBuilder() {
=======

export default function TokenomicsWhitepaperBuilder() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [isAdmin, setIsAdmin] = useState(true);
  const [publicPreview, setPublicPreview] = useState(false);
  const [legalReview, setLegalReview] = useState(false);
  const [tokenName, setTokenName] = useState('ZION$');
  const [tokenSupply, setTokenSupply] = useState('1,000,000,000');
  const [useCases, setUseCases] = useState<string>(;
    'Access to premium AI agents, marketplace discounts, reputation staking, governance participation';
  );
<<<<<<< HEAD
  const [rewardsLogic, setRewardsLogic] = useState<string>(
    'Earn via contributions, referrals, and successful task completions; burn on dispute resolution fees and premium access'
  );  const [distribution, setDistribution] = useState<DistributionItem[]>([
    { label: 'Ecosystem & Rewards', percent: 35 }
    { label: 'Community Treasury', percent: 20 }
    { label: 'Team & Contributors', percent: 15 }
    { label: 'Investors', percent: 15 }
    { label: 'Liquidity & Market Making', percent: 10 }
    { label: 'Advisors & Partnerships', percent: 5 }
=======
  const [rewardsLogic, setRewardsLogic] = useState<string>(;
    'Earn via contributions, referrals, and successful task completions; burn on dispute resolution fees and premium access';
  );  const [distribution, setDistribution] = useState<DistributionItem[]>([;
    { label: 'Ecosystem & Rewards', percent: 35 },;
    { label: 'Community Treasury', percent: 20 },;
    { label: 'Team & Contributors', percent: 15 },;
    { label: 'Investors', percent: 15 },;
    { label: 'Liquidity & Market Making', percent: 10 },;
    { label: 'Advisors & Partnerships', percent: 5 },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  ]);
  const [governance, setGovernance] = useState<string>(;
    'One-token-one-vote with quadratic weighting for proposals; staking required for proposal submission; delegated voting supported';
  );
  const [jurisdiction, setJurisdiction] = useState<string>('US');
  const [operatorPrompt, setOperatorPrompt] = useState<string>(;
    defaultOperatorPrompt;
  );
<<<<<<< HEAD
  const totalPercent = useMemo(
    () => distribution.reduce((acc, d) => acc + (Number(d.percent) |0), 0)
    [distribution]
  );
  const [generatedMarkdown, setGeneratedMarkdown] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [activeSection, setActiveSection] =
    useState<string>('Executive Summary');
  const previewMarkdown = useMemo(() => {
    return (
      generatedMarkdown |
      buildLocalMarkdown({
        tokenName
        tokenSupply
        useCases
        rewardsLogic
        distribution
        governance
        jurisdiction
        legalReview
      })
    );
  }, [
    generatedMarkdown
    tokenName
    tokenSupply
    useCases
    rewardsLogic
    distribution
    governance
    jurisdiction
    legalReview
  ]);
  async function handleGenerate() {
    try {
      setIsGenerating(true);
      const res = await fetch('/api/whitepaper/generate', {
        method: 'POST'
        headers: {
          'Content-Type': 'application/json'
          'X-Admin': isAdmin ? 'true' : 'false'
        }
        body: JSON.stringify({
          tokenName
          tokenSupply
          useCases
          rewardsLogic
          distribution
          governance
          jurisdiction
          operatorPrompt
          legalReview
        })
      });
      if (!res.ok) throw new Error('Failed to generate');
      const data = await res.json();
      setGeneratedMarkdown(data.markdown |'');
    } catch (e) {
      console.error(e);
=======

  const totalPercent = useMemo(;
    () => distribution && distribution.reduce((acc, d) => acc + (Number(d && d.percent) || 0), 0),;
    [distribution];
  );
  const [generatedMarkdown, setGeneratedMarkdown] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const [activeSection, setActiveSection] =;
    useState<string>('Executive Summary');

  const previewMarkdown = useMemo(() => {;
    return (
      generatedMarkdown ||;
      buildLocalMarkdown({;
        tokenName,;
        tokenSupply,;
        useCases,;
        rewardsLogic,;
        distribution,;
        governance,;
        jurisdiction,;
        legalReview,;
      });
    );
  }, [;
    generatedMarkdown,;
    tokenName,;
    tokenSupply,;
    useCases,;
    rewardsLogic,;
    distribution,;
    governance,;
    jurisdiction,;
    legalReview,;
  ]);
  async function handleGenerate() {;
    try {;
      setIsGenerating(true);
      const res = await fetch('/api/whitepaper/generate', {;
        method: 'POST',;
        headers: {;
          'Content-Type': 'application/json',;
          'X-Admin': isAdmin ? 'true' : 'false',;
        },;
        body: JSON && JSON.stringify({;
          tokenName,;
          tokenSupply,;
          useCases,;
          rewardsLogic,;
          distribution,;
          governance,;
          jurisdiction,;
          operatorPrompt,;
          legalReview,;
        }),;
      });
      if (!res && res.ok) throw new Error('Failed to generate');
      const data = await res && res.json();
      setGeneratedMarkdown(data && data.markdown || '');
    } catch (e) {;
      console && console.error(e);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      alert('Generation failed');
    } finally {;
      setIsGenerating(false);    }
  }
<<<<<<< HEAD
  async function handleDownload(ext: 'md' | 'pdf') {
    if (ext === 'md') {
      const blob = new Blob([previewMarkdown], {
        type: 'text/markdown;charset=utf-8'
      });      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${tokenName.toLowerCase().replace(/\s+/g, '-')}-whitepaper.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);    } else {
      const res = await fetch('/api/whitepaper/export', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ markdown: previewMarkdown, tokenName })
=======

  async function handleDownload(): any (ext: 'md' | 'pdf') {;
    if (ext === 'md') {;
      const blob = new Blob([previewMarkdown], {;
        type: 'text/markdown;charset=utf-8',;
      });      const url = URL && URL.createObjectURL(blob);
      const a = document && document.createElement('a');
      a && a.href = url;
      a && a.download = `${tokenName && tokenName.toLowerCase().replace(/\s+/g, '-')}-whitepaper && whitepaper.md`;
      document && document.body.appendChild(a);
      a && a.click();
      document && document.body.removeChild(a);
      URL && URL.revokeObjectURL(url);    } else {;
      const res = await fetch('/api/whitepaper/export', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ markdown: previewMarkdown, tokenName }),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      if (!res && res.ok) {;
        alert('PDF export failed');
        return;
      }
      const { url } = await res && res.json();
      window && window.open(url, '_blank');
    }
  }
<<<<<<< HEAD
  function updateDistribution(
    index: number
    key: keyof DistributionItem
    value: string
  ) {
    setDistribution(prev => {      const copy = [...prev];
      const item = { ...copy[index] }
      if (key === 'percent') item.percent = Number(value);
      if (key === 'label') item.label = value;
=======

  function updateDistribution(): any (;
    index: number,;
    key: keyof DistributionItem,;
    value: string;
  ) {;
    setDistribution(prev => {      const copy = [...prev];
      const item = { ...copy[index] };
      if (key === 'percent') item && item.percent = Number(value);
      if (key === 'label') item && item.label = value;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      copy[index] = item;
      return copy;
    });
  }
<<<<<<< HEAD
  function addDistributionItem() {
    setDistribution(prev => [...prev, { label: 'New Allocation', percent: 0 }]);
  }
  function removeDistributionItem(index: number) {
    setDistribution(prev => prev.filter((_, i) => i !== index));  }
  async function handleShareableLink() {
    const res = await fetch('/api/whitepaper/share', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ markdown: previewMarkdown, publicPreview })
=======

  function addDistributionItem() {;
    setDistribution(prev => [...prev, { label: 'New Allocation', percent: 0 }]);
  }

  function removeDistributionItem(): any (index: number) {;
    setDistribution(prev => prev && prev.filter((_, i) => i !== index));  }

  async function handleShareableLink() {;
    const res = await fetch('/api/whitepaper/share', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ markdown: previewMarkdown, publicPreview }),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    if (!res && res.ok) {;
      alert('Failed to create share link');
      return;
    }
    const { url } = await res && res.json();
    await navigator && navigator.clipboard.writeText(url);
    alert('Shareable link copied to clipboard');
  }
<<<<<<< HEAD
  const sections = [
    'Executive Summary'
    'Market Context'
    'Utility & Usage'
    'Rewards System'
    'Distribution'
    'Governance Model'
    'Risks + Disclaimers'
=======

  const sections = [;
    'Executive Summary',;
    'Market Context',;
    'Utility & Usage',;
    'Rewards System',;
    'Distribution',;
    'Governance Model',;
    'Risks + Disclaimers',;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  ];
  return (
    <>;
      <Head>;
        <title>Tokenomics Whitepaper Generator</title>;
      </Head>;
      <div className='space-y-6'>;
        <div className='flex items-center justify-between'>;
          <h1 className='text-2xl font-semibold'>Whitepaper Generator</h1>;
          <div className='flex items-center gap-3 text-sm'>;
            <label className='inline-flex items-center gap-2'>;
              <input
                type='checkbox'
                checked={isAdmin}
                onChange={e => setIsAdmin(e && e.target.checked)}
              />;
              <span>Admin</span>;
            </label>;
            <label className='inline-flex items-center gap-2'>;
              <input
                type='checkbox'
                checked={publicPreview}
                onChange={e => setPublicPreview(e && e.target.checked)}
              />;
              <span>Public after launch</span>;
            </label>;
            <button
              onClick={handleShareableLink}
<<<<<<< HEAD
              className='px-3 py-1 rounded-md bg-indigo-600 text-white'
            >
              Create Share Link
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='space-y-6'>
            <div className='rounded-lg border p-4 space-y-4'>
              <h2 className='font-medium'>Builder Inputs</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='text-xs opacity-70'>Token name</label>
=======
              className='px-3 py-1 rounded-md bg-indigo-600 text-white'>;
              Create Share Link;
            </button>;
          </div>;
        </div>;

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>;
          <div className='space-y-6'>;
            <div className='rounded-lg border p-4 space-y-4'>;
              <h2 className='font-medium'>Builder Inputs</h2>;
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
                <div>;
                  <label className='text-xs opacity-70'>Token name</label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  <input
                    className='w-full border rounded-md px-3 py-2'
                    value={tokenName}
                    onChange={e => setTokenName(e && e.target.value)}
                  />;
                </div>;
                <div>;
                  <label className='text-xs opacity-70'>Token supply</label>;
                  <input
                    className='w-full border rounded-md px-3 py-2'
                    value={tokenSupply}
                    onChange={e => setTokenSupply(e && e.target.value)}
                  />;
                </div>;
                <div className='md:col-span-2'>;
                  <label className='text-xs opacity-70'>Use cases</label>;
                  <textarea
                    className='w-full border rounded-md px-3 py-2'
                    rows={2}
                    value={useCases}
                    onChange={e => setUseCases(e && e.target.value)}
                  />;
                </div>;
                <div className='md:col-span-2'>;
                  <label className='text-xs opacity-70'>Rewards logic</label>;
                  <textarea
                    className='w-full border rounded-md px-3 py-2'
                    rows={2}
                    value={rewardsLogic}
                    onChange={e => setRewardsLogic(e && e.target.value)}
                  />;
                </div>;
                <div className='md:col-span-2'>;
                  <label className='text-xs opacity-70'>Governance logic</label>;
                  <textarea
                    className='w-full border rounded-md px-3 py-2'
                    rows={2}
                    value={governance}
                    onChange={e => setGovernance(e && e.target.value)}
                  />;
                </div>;
                <div>;
                  <label className='text-xs opacity-70'>;
                    Legal jurisdiction;
                  </label>;
                  <select
                    className='w-full border rounded-md px-3 py-2'
                    value={jurisdiction}
                    onChange={e => setJurisdiction(e && e.target.value)}
                  >;
                    <option value='US'>US</option>;
                    <option value='EU'>EU</option>;
                    <option value='SG'>Singapore</option>;
                    <option value='AE'>UAE</option>;
                  </select>;
                </div>;
                <div className='flex items-center gap-2'>;
                  <input
                    id='legalReview'
                    type='checkbox'
                    checked={legalReview}
<<<<<<< HEAD
                    onChange={e => setLegalReview(e.target.checked)}
                  />
                  <label htmlFor='legalReview' className='text-sm'>
                    Submit to Counsel
                  </label>                </div>
              </div>
            </div>
            <div className='rounded-lg border p-4 space-y-3'>
              <h3 className='font-medium'>Distribution</h3>
              <div className='space-y-2'>
                {distribution.map((item, idx) => (
=======
                    onChange={e => setLegalReview(e && e.target.checked)}
                  />;
                  <label htmlFor='legalReview' className='text-sm'>;
                    Submit to Counsel;
                  </label>                </div>;
              </div>;
            </div>;

            <div className='rounded-lg border p-4 space-y-3'>;
              <h3 className='font-medium'>Distribution</h3>;
              <div className='space-y-2'>;
                {distribution && distribution.map((item, idx) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  <div
                    key={idx}
                    className='grid grid-cols-12 gap-2 items-center'>;
                    <input
                      className='col-span-6 border rounded-md px-3 py-2'
                      value={item && item.label}
                      onChange={e =>;
                        updateDistribution(idx, 'label', e && e.target.value);
                      }
                    />;
                    <input
                      className='col-span-4 border rounded-md px-3 py-2'
                      type='number'
                      min={0}
                      max={100}
                      value={item && item.percent}
                      onChange={e =>;
                        updateDistribution(idx, 'percent', e && e.target.value);
                      }
                    />;
                    <button
                      onClick={() => removeDistributionItem(idx)}
                      className='col-span-2 px-3 py-2 rounded-md bg-rose-600 text-white';
                    >;
                      Remove;
                    </button>;
                  </div>;
                ))}
                <div className='flex items-center justify-between text-xs opacity-70'>;
                  <span>Total: {totalPercent}%</span>;
                  <button
                    onClick={addDistributionItem}
<<<<<<< HEAD
                    className='px-3 py-1 rounded-md bg-gray-900 text-white'
                  >
                    Add allocation
                  </button>
                </div>
              </div>
              <div className='mt-3'>                <DistributionDonut data={distribution} />
              </div>
            </div>
            <div className='rounded-lg border p-4 space-y-3'>
              <h3 className='font-medium'>Operator Prompt</h3>
=======
                    className='px-3 py-1 rounded-md bg-gray-900 text-white'>;
                    Add allocation;
                  </button>;
                </div>;
              </div>;
              <div className='mt-3'>                <DistributionDonut data={distribution} />;
              </div>;
            </div>;

            <div className='rounded-lg border p-4 space-y-3'>;
              <h3 className='font-medium'>Operator Prompt</h3>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <textarea
                className='w-full border rounded-md px-3 py-2'
                rows={4}
                value={operatorPrompt}
                onChange={e => setOperatorPrompt(e && e.target.value)}
              />;
              <div className='flex gap-3'>;
                <button
                  disabled={!isAdmin |isGenerating}
                  onClick={handleGenerate}
                  className='px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-50'>;
                  {isGenerating ? 'Generating…' : 'Generate with GPT'}
                </button>;
                <button
                  onClick={() => setGeneratedMarkdown('')}
<<<<<<< HEAD
                  className='px-4 py-2 rounded-md border'
                >
                  Clear AI Draft
                </button>
              </div>
            </div>
            <div className='rounded-lg border p-4 space-y-2'>
              <h3 className='font-medium'>Output</h3>
              <div className='flex gap-3'>
=======
                  className='px-4 py-2 rounded-md border';
                >;
                  Clear AI Draft;
                </button>;
              </div>;
            </div>;

            <div className='rounded-lg border p-4 space-y-2'>;
              <h3 className='font-medium'>Output</h3>;
              <div className='flex gap-3'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <button
                  onClick={() => handleDownload('md')}
                  className='px-3 py-2 rounded-md border';
                >;
                  Download .md;
                </button>;
                <button
                  onClick={() => handleDownload('pdf')}
<<<<<<< HEAD
                  className='px-3 py-2 rounded-md border'
                >
                  Download PDF
                </button>              </div>
            </div>
          </div>
          <div className='rounded-lg border p-4'>
            <div className='flex items-center justify-between mb-3'>
              <div className='flex gap-2 overflow-x-auto'>
                {sections.map(s => (
=======
                  className='px-3 py-2 rounded-md border';
                >;
                  Download PDF;
                </button>              </div>;
            </div>;
          </div>;

          <div className='rounded-lg border p-4'>;
            <div className='flex items-center justify-between mb-3'>;
              <div className='flex gap-2 overflow-x-auto'>;
                {sections && sections.map(s => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  <button
                    key={s}
                    onClick={() => setActiveSection(s)}
                    className={`px-3 py-1 rounded-md border ${activeSection === s ? 'bg-gray-900 text-white' : ''}`}
                  >;
                    {s}
                  </button>;
                ))}
              </div>;
              <span className='text-xs opacity-60'>Auto-updating preview</span>;
            </div>;
            <MarkdownPreview
              markdown={previewMarkdown}
              activeSection={activeSection}
            />          </div>;
        </div>;
      </div>;
    </>;
  );
<<<<<<< HEAD
function buildLocalMarkdown(input: {
=======

function buildLocalMarkdown(): any (input: {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  tokenName: string;
  tokenSupply: string;
  useCases: string;
  rewardsLogic: string;
  distribution: DistributionItem[];
  governance: string;
  jurisdiction: string;
  legalReview: boolean;
}) {;
  const distLines = input && input.distribution;
    .map(d => `- ${d && d.label}: ${d && d.percent}%`);
    .join('\n');
  const disclaimer = input && input.legalReview;
    ? `\n\n> Submitted for legal review. Draft may change pending counsel feedback.`;
    : '';
  return `# ${input && input.tokenName} Tokenomics Whitepaper\n\n## Executive Summary\n${input && input.tokenName} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives and trust minimization.\n\n## Utility & Usage\n${input && input.useCases}.\n\n## Rewards System\n${input && input.rewardsLogic}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input && input.tokenSupply}.\n\n## Governance Model\n${input && input.governance}.\n\n## Risks + Disclaimers\nThis is not financial advice. ${jurisdictionalNote(input && input.jurisdiction)}${disclaimer}\n`;
function jurisdictionalNote(): any (j: string) {;
  switch (j) {;
    case 'US':;
      return 'The token is intended for utility purposes and not as a security within the meaning of U && U.S. securities laws.';
    case 'EU':;
      return 'Designed for utility under EU frameworks; subject to MiCA and local guidelines as applicable.';
    case 'SG':;
      return 'Intended utility token under MAS guidance; prospective purchasers should not view it as capital markets products.';
    case 'AE':;
      return 'Intended utility token within relevant UAE free zone guidance; not an investment product.';
    default:;
      return 'Intended strictly for utility use.';
  }
<<<<<<< HEAD
function DistributionDonut({ data }: { data: DistributionItem[] }) {
  // Simple textual donut placeholder until a chart lib is added
  const total = data.reduce((a, b) => a + b.percent, 0) |1;
=======
function DistributionDonut(): any ({ data }: { data: DistributionItem[] }) {;
  // Simple textual donut placeholder until a chart lib is added;
  const total = data && data.reduce((a, b) => a + b && b.percent, 0) || 1;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className='space-y-1 text-sm'>;
      {data && data.map((d, idx) => (;
        <div key={idx} className='flex items-center gap-2'>;
          <div className='h-2 bg-gray-200 rounded w-full'>;
            <div
              className='h-2 bg-indigo-600 rounded'
              style={{ width: `${(d && d.percent / total) * 100}%` }}
            />;
          </div>;
          <span className='w-48 truncate'>;
            {d && d.label} ({d && d.percent}%);
          </span>;
        </div>;
      ))}
    </div>;
  );
<<<<<<< HEAD
function MarkdownPreview({
  markdown
  activeSection
}: {
  markdown: string;
  activeSection: string;
}) {  // Very lightweight section filter: split by headings
  const parts = useMemo(() => {
    const sections = markdown.split(/\n## /g)
    const map: Record<string, string> = {}
    sections.forEach((s, i) => {
      if (i === 0) return; // first is H1
      const [titleLine, ...rest] = s.split('\n');
      map[titleLine.trim()] = rest.join('\n');
=======

function MarkdownPreview(): any ({;
  markdown,;
  activeSection,;
}: {;
  markdown: string;
  activeSection: string;
}) {  // Very lightweight section filter: split by headings;
  const parts = useMemo(() => {;
    const sections = markdown && markdown.split(/\n## /g),;
    const map: Record<string, string> = {};
    sections && sections.forEach((s, i) => {;
      if (i === 0) return; // first is H1;
      const [titleLine, ...rest] = s && s.split('\n');
      map[titleLine && titleLine.trim()] = rest && rest.join('\n');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    return map;  }, [markdown]);
  const content = parts[activeSection] |'';

  return (
<<<<<<< HEAD
<pre className='whitespace-pre-wrap text-sm leading-6'>
      {content |markdown}
    </pre>
  );
=======
    <pre className='whitespace-pre-wrap text-sm leading-6'>;
      {content || markdown}
    </pre>;
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
