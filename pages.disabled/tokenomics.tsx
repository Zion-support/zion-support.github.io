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

type DistributionItem = { label: string, percent: number };
const defaultOperatorPrompt = `Generate a professional Web3 tokenomics whitepaper for a utility token used in a freelance AI marketplace. Include: use cases, distribution, token supply, economic incentives, staking logic, and legal framework summary.`,;
export default function TokenomicsWhitepaperBuilder(req, res) {
  try {


export default function TokenomicsWhitepaperBuilder() {;

  const [isAdmin, setIsAdmin] = useState(true);
  const [publicPreview, setPublicPreview] = useState(false);
  const [legalReview, setLegalReview] = useState(false);
  const [tokenName, setTokenName] = useState('ZION$');
  const [tokenSupply, setTokenSupply] = useState('1,000,000,000');


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

type DistributionItem = { label: string, percent: number };
const defaultOperatorPrompt = `Generate a professional Web3 tokenomics whitepaper for a utility token used in a freelance AI marketplace. Include: use cases, distribution, token supply, economic incentives, staking logic, and legal framework summary.`,;
export default function TokenomicsWhitepaperBuilder(req, res) {
  try {

import React, { useMemo, useState } from 'react';
import Head from 'next/head';
type DistributionItem = any;
const defaultOperatorPrompt = `Generate a professional Web3 tokenomics whitepaper for a utility token used in a freelance AI marketplace. Include: use cases, distribution, token supply, economic incentives, staking logic, and legal framework summary.`;
export default function TokenomicsWhitepaperBuilder() {

  const [isAdmin, setIsAdmin] = useState(true);
  const [publicPreview, setPublicPreview] = useState(false);
  const [legalReview, setLegalReview] = useState(false);
  const [tokenName, setTokenName] = useState('ZION$');
  const [tokenSupply, setTokenSupply] = useState('1,000,000,000');

const [useCases, setUseCases] = useState<string>(

    'Access to premium AI agents, marketplace discounts, reputation staking, governance participation'
  );
  const [rewardsLogic, setRewardsLogic] = useState<string>(
    'Earn via contributions, referrals, and successful task completions; burn on dispute resolution fees and premium access'

  );  const [distribution, setDistribution] = useState<DistributionItem[]>([
    { label: 'Ecosystem & Rewards', percent: 35 }
    { label: 'Community Treasury', percent: 20 }
    { label: 'Team & Contributors', percent: 15 }
    { label: 'Investors', percent: 15 }
    { label: 'Liquidity & Market Making', percent: 10 }
    { label: 'Advisors & Partnerships', percent: 5 });
  const [distribution, setDistribution] = useState<DistributionItem[]>([
    { label: 'Ecosystem & Rewards', percent: 35 },
    { label: 'Community Treasury', percent: 20 },
    { label: 'Team & Contributors', percent: 15 },
    { label: 'Investors', percent: 15 },
    { label: 'Liquidity & Market Making', percent: 10 },
{ label: 'Advisors & Partnerships', percent: 5 },

  ]);
  const [governance, setGovernance] = useState<string>(
    'One-token-one-vote with quadratic weighting for proposals; staking required for proposal submission; delegated voting supported'
  );
  const [jurisdiction, setJurisdiction] = useState<string>('US');
  const [operatorPrompt, setOperatorPrompt] = useState<string>(
    defaultOperatorPrompt
  );
  const totalPercent = useMemo(
    () => distribution.reduce((acc, d) => acc + (Number(d.percent) |0), 0)
    [distribution]
  );

const [activeSection, setActiveSection] =
origin/cursor/automate-test-improve-and-merge-code-2533
    useState<string>('Executive Summary');
type DistributionItem = { label: string, percent: number };
const defaultOperatorPrompt = `Generate a professional Web3 tokenomics whitepaper for a utility token used in a freelance AI marketplace. Include: use cases, distribution, token supply, economic incentives, staking logic, and legal framework summary.`,;
export default function TokenomicsWhitepaperBuilder(req, res) {
  try {

export default function TokenomicsWhitepaperBuilder() {;
  const [isAdmin, setIsAdmin] = useState(true);
  const [publicPreview, setPublicPreview] = useState(false);
  const [legalReview, setLegalReview] = useState(false);
  const [tokenName, setTokenName] = useState('ZION$');
  const [tokenSupply, setTokenSupply] = useState('1,000,000,000');
  const [useCases, setUseCases] = useState<string>('Access to premium AI agents, marketplace discounts, reputation staking, governance participation'),;
  const [rewardsLogic, setRewardsLogic] = useState<string>('Earn via contributions, referrals, and successful task completions, burn on dispute resolution fees and premium access'),;
  const [distribution, setDistribution] = useState<DistributionItem[]>([;
    { label: 'Ecosystem & Rewards', percent: 35 },;
    { label: 'Community Treasury', percent: 20 },;
    { label: 'Team & Contributors', percent: 15 },;
    { label: 'Investors', percent: 15 },;
    { label: 'Liquidity & Market Making', percent: 10 },;
    { label: 'Advisors & Partnerships', percent: 5 }]),;
  const [governance, setGovernance] = useState<string>('One-token-one-vote with quadratic weighting for proposals, staking required for proposal submission, delegated voting supported'),;
  const [jurisdiction, setJurisdiction] = useState<string>('US');
  const [operatorPrompt, setOperatorPrompt] = useState<string>(defaultOperatorPrompt);
  const totalPercent = useMemo(() => distribution.reduce((acc, d) => acc + (Number(d.percent) || 0), 0), [distribution]),;

  const [generatedMarkdown, setGeneratedMarkdown] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

          tokenName,;
          tokenSupply,;
          useCases,;
          rewardsLogic,;
          distribution,;
          governance,;
          jurisdiction,;
          operatorPrompt,;


      });
      if (!res && res.ok) {;'
        alert('PDF export failed');
        return;
      }
      const { url } = await res && res.json();'
      window && window.open(url, '_blank');
    }
  }


      const item = { ...copy[index] }

      URL.revokeObjectURL(url)
    } else {'
      const res = await fetch('/api/whitepaper/export', {'
        method: 'POST','
        headers: { 'Content-Type': 'application/json' },

body: JSON.stringify({ markdown: previewMarkdown, tokenName })});
      if (!res.ok) {

        alert('PDF export failed');
        return;
      }
      const { url } = await res.json();'
      window.open(url, '_blank')
    }
  }

  function updateDistribution(index: number, key: keyof DistributionItem, value: string) {
    setDistribution((prev) => {
      const copy = [...prev];

}
      const { url } = await res.json();'
      window.open(url, '_blank');

      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

    } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }

}
;




      const item = { ...copy[index] };
      if (key === 'percent') item.percent = Number(value);

      if (key === 'label') item.label = value;
  function updateDistribution(): any (;
    index: number,;
    key: keyof DistributionItem,;
    value: string;
  ) {;
    setDistribution(prev => {      const copy = [...prev];

      const item = { ...copy[index] };
      if (key === 'percent') item && item.percent = Number(value);
      if (key === 'label') item && item.label = value;

    { label: 'Advisors & Partnerships', percent: 5 },
  ]);
  const [governance, set_governance] = useState < string>('
    'One - token - one - vote with quadratic weighting for proposals; staking required for proposal submission; delegated voting supported');'
  const [jurisdiction, set_jurisdiction] = useState < string>('US');
  const [operator_prompt, setOperatorPrompt] = useState < string>(
    defaultOperatorPrompt);
;
  const total_percent = useMemo (
    () => distribution.reduce ((acc, d) => acc + (Number (d.percent) || 0), 0),
    [distribution]);'
  const [generated_markdown, setGeneratedMarkdown] = useState < string>('');
  const [is_generating, setIsGenerating] = useState < boolean>(false);
;
  const [active_section, setActiveSection] =;'
    useState < string>('Executive Summary');
;

  const preview_markdown = useMemo (() => {

    return (
      generated_markdown ||;
      buildLocalMarkdown ({}
        token_name,
        token_supply,
        use_cases,
        rewards_logic,
        distribution,
        governance,
        jurisdiction,
        legal_review,
      }));
  }, [;
    generated_markdown,
    token_name,
    token_supply,
    use_cases,
    rewards_logic,
    distribution,
    governance,
    jurisdiction,
    legal_review,
  ]);
  async /**
 * handle_generate - Function description;
 */
function handle_generate() {}
    try {}
      setIsGenerating (true);'
      const res = await fetch ('/api / whitepaper / generate', {'
        method: 'POST',
        headers: {'
          'Content - Type': 'application / json','
          'X - Admin': is_admin ? 'true' : 'false',
        },
        body: JSON.stringify ({}
          token_name,
          token_supply,
          use_cases,
          rewards_logic,
          distribution,
          governance,
          jurisdiction,
          operator_prompt,
          legal_review,
        }),
      });'
      if (throw new Error ('Failed to generate')) {}
  $2;
}
      const data = await res.json ();'
      setGeneratedMarkdown (data.markdown || '');
    } catch (e) {}
      console.error (e);'
      alert ('Generation failed');
    } finally {}
      setIsGenerating (false);    }

  function updateDistribution(
    index: number
    key: keyof DistributionItem
    value: string
  ) {
    setDistribution(prev => {
      const copy = [...prev];
      const item = { ...copy[index] };
      if (key === 'percent') item.percent = Number(value);
      if (key === 'label') item.label = value;
      copy[index] = item;
return copy;
    });

  }
  async /**
 * handle_download - Function description;
 */
function handle_download() {}
    // Check condition;
if ( {) {}
  $2;
}
      const blob = new Blob ([preview_markdown], {'
        type: 'text / markdown;charset = utf - 8',
      });      const url = URL.createObjectURL (blob);'
      const array = document.create_element ('a');
      a.href = url;'`
      a.download = `${token_name.toLowerCase ().replace (/\s+/g, '-')}-whitepaper.md`;
      document.body.append_child (a);
      a.click ();
      document.body.remove_child (a);
      URL.revokeObjectURL (url);    } else {'
      const res = await fetch ('/api / whitepaper / export', {'
        method: 'POST','
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ markdown: preview_markdown, token_name }),
      });
      // Check condition;
if ( {) {}
  $2;
}'
        alert ('PDF export failed');
        return;
      }
      const { url } = await res.json ();'
      window.open (url, '_blank');
    }
  }

  /**
 * update_distribution - Function description;
 */
function update_distribution() {}
    set_distribution (prev => {      const copy = [...prev];
      const item = { ...copy[index] }
      if (item.percent = Number (value)) {}
  $2;
}
      // Check condition;
if (item.label = value) {}
  $2;
}

      copy[index] = item;

  const sections = [
    'Executive Summary'
    'Market Context'
    'Utility & Usage'
    'Rewards System'
    'Distribution'
    'Governance Model'
    'Risks + Disclaimers'


  const sections = [;
    'Executive Summary',;
    'Market Context',;
    'Utility & Usage',;
    'Rewards System',;
    'Distribution',;
    'Governance Model',;
    'Risks + Disclaimers',;
  /**
 * addDistributionItem - Function description
 */
function addDistributionItem() {
    set_distribution (prev => [...prev, { label: 'New Allocation', percent: 0 }]);
  }
  /**
 * removeDistributionItem - Function description
 */
function removeDistributionItem() {
    set_distribution (prev => prev.filter ((_, i) => i !== index));  }
  async /**
 * handleShareableLink - Function description
 */
function handleShareableLink() {
    const res = await fetch ('/api / whitepaper / share', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ markdown: preview_markdown, public_preview }),
    });
    // Check condition
if ( {) {
  $2
}

              className='px-3 py-1 rounded-md bg-indigo-600 text-white'>;
        <title > Tokenomics Whitepaper Generator</title>;
      </Head>;'
      <div className='space - y-6'>;'
        <div className='flex items - center justify - between'>;'
          <h1 className='text - 2xl font - semibold'>Whitepaper Generator</h1>;'
          <div className='flex items - center gap - 3 text - sm'>;'
            <label className='inline - flex items - center gap - 2'>;
              <input;'
                type='checkbox';
                checked={is_admin}
                on_change={e => setIsAdmin (e.target.checked)}
              />;
              <span > Admin</span>;
            </label>;'
            <label className='inline - flex items - center gap - 2'>;
              <input;'
                type='checkbox';
                checked={public_preview}
                on_change={e => setPublicPreview (e.target.checked)}
              />;
              <span > Public after launch</span>;
            </label>;

            <button;
              on_click={handleShareableLink}
              className='px - 3 py - 1 rounded - md bg - indigo - 600 text - white';
            >;



              Create Share Link;
            </button>;
          </div>;
        </div>;



        <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 6'>;
          <div className='space - y-6'>;
            <div className='rounded - lg border p - 4 space - y-4'>;
              <h2 className='font - medium'>Builder Inputs</h2>;

              <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
                <div>;'
                  <label className='text - xs opacity - 70'>Token name</label>;
                  <input;'
                    className='w - full border rounded - md px - 3 py - 2';
                    value={token_name}
                    on_change={e => setTokenName (e.target.value)}
                  />;
                </div>;
                <div>;'
                  <label className='text - xs opacity - 70'>Token supply</label>;
                  <input;'
                    className='w - full border rounded - md px - 3 py - 2';
                    value={token_supply}
                    on_change={e => setTokenSupply (e.target.value)}
                  />;
                </div>;'
                <div className='md:col - span - 2'>;'
                  <label className='text - xs opacity - 70'>Use cases</label>;
                  <textarea;'
                    className='w - full border rounded - md px - 3 py - 2';
                    rows={2}
                    value={use_cases}
                    on_change={e => setUseCases (e.target.value)}
                  />;
                </div>;'
                <div className='md:col - span - 2'>;'
                  <label className='text - xs opacity - 70'>Rewards logic</label>;
                  <textarea;'
                    className='w - full border rounded - md px - 3 py - 2';
                    rows={2}
                    value={rewards_logic}
                    on_change={e => setRewardsLogic (e.target.value)}
                  />;
                </div>;'
                <div className='md:col - span - 2'>;'
                  <label className='text - xs opacity - 70'>Governance logic</label>;
                  <textarea;'
                    className='w - full border rounded - md px - 3 py - 2';
                    rows={2}
                    value={governance}
                    on_change={e => set_governance (e.target.value)}
                  />;
                </div>;
                <div>;'
                  <label className='text - xs opacity - 70'>;
                    Legal jurisdiction;
                  </label>;
                  <select;'
                    className='w - full border rounded - md px - 3 py - 2';
                    value={jurisdiction}
                    on_change={e => set_jurisdiction (e.target.value)}



                  >;
                    <option value='US'>US</option>;
                    <option value='EU'>EU</option>;
                    <option value='SG'>Singapore</option>;
                    <option value='AE'>UAE</option>;
                  </select>;
                </div>;



                    onChange={e => setLegalReview(e && e.target.checked)}
                  />;
                  <label htmlFor='legalReview' className='text-sm'>;
                <div className='flex items - center gap - 2'>;
                  <input;
                    id='legal_review';
                    type='checkbox';
                    checked={legal_review}
                    on_change={e => setLegalReview (e.target.checked)}
                  />;
                  <label html_for='legal_review' className='text - sm'>;



                    Submit to Counsel;
                  </label>                </div>;
              </div>;
            </div>;


                    className='px-3 py-1 rounded-md bg-gray-900 text-white'>;
            <div className='rounded - lg border p - 4 space - y-3'>;
              <h3 className='font - medium'>Distribution</h3>;
              <div className='space - y-2'>;
                {distribution.map ((item, idx) => (
                  <div;
                    key={idx}
                    className='grid grid - cols - 12 gap - 2 items - center';
                  >;
                    <input;
                      className='col - span - 6 border rounded - md px - 3 py - 2';
                      value={item.label}
                      on_change={e =>;
                        update_distribution (idx, 'label', e.target.value);
                      }
                    />;
                    <input;
                      className='col - span - 4 border rounded - md px - 3 py - 2';
                      type='number';
                      min={0}
                      max={100}
                      value={item.percent}
                      on_change={e =>;
                        update_distribution (idx, 'percent', e.target.value);
                      }
                    />;
                    <button;
                      on_click={() => removeDistributionItem (idx)}
                      className='col - span - 2 px - 3 py - 2 rounded - md bg - rose - 600 text - white';
                    >;
                      Remove;
                    </button>;
                  </div>))}
                <div className='flex items - center justify - between text - xs opacity - 70'>;
                  <span > Total: {total_percent}%</span>;
                  <button;
                    on_click={addDistributionItem}
                    className='px - 3 py - 1 rounded - md bg - gray - 900 text - white';
                  >;



                    Add allocation;
                  </button>;
                </div>;
              </div>;



  const sections = [
    'Executive Summary'
    'Market Context'
    'Utility & Usage'
    'Rewards System'
    'Distribution'
    'Governance Model'
    'Risks + Disclaimers'
  ];
}
  const sections = ['Executive SummaryMarket ContextUtility & UsageRewards SystemDistributionGovernance ModelRisks + Disclaimers'],
  return (
    <>
      <Head>
        <title>Tokenomics Whitepaper Generator</title>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Whitepaper Generator</h1>
          <div className="flex items-center gap-3 text-sm">
            <label className="inline-flex items-center gap-2">

              <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />

<div className='space-y-6'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Whitepaper Generator</h1>
          <div className='flex items-center gap-3 text-sm'>
            <label className='inline-flex items-center gap-2'>
              <input
                type='checkbox'
                checked={isAdmin}
                onChange={e => setIsAdmin(e.target.checked)}
              />

              <span>Admin</span>
            </label>"
            <label className="inline-flex items-center gap-2">"
              <input type="checkbox" checked={publicPreview} onChange={(e) => setPublicPreview(e.target.checked)} />
              <span>Public after launch</span>
            </label>"
            <button onClick={handleShareableLink} className="px-3 py-1 rounded-md bg-indigo-600 text-white">Create Share Link</button>
          </div>
        </div>


        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='space-y-6'>
            <div className='rounded-lg border p-4 space-y-4'>
              <h2 className='font-medium'>Builder Inputs</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="rounded-lg border p-4 space-y-4">
              <h2 className="font-medium">Builder Inputs</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">




                <div>
                  <label className="text-xs opacity-70">Token name</label>

                  <input className="w-full border rounded-md px-3 py-2" value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
                </div>
                <div>"
                  <label className="text-xs opacity-70">Token supply</label>"
                  <input className="w-full border rounded-md px-3 py-2" value={tokenSupply} onChange={(e) => setTokenSupply(e.target.value)} />
                </div>"
                <div className="md:col-span-2">"
                  <label className="text-xs opacity-70">Use cases</label>"
                  <textarea className="w-full border rounded-md px-3 py-2" rows={2} value={useCases} onChange={(e) => setUseCases(e.target.value)} />
                </div>"
                <div className="md:col-span-2">"
                  <label className="text-xs opacity-70">Rewards logic</label>"
                  <textarea className="w-full border rounded-md px-3 py-2" rows={2} value={rewardsLogic} onChange={(e) => setRewardsLogic(e.target.value)} />
                </div>"
                <div className="md:col-span-2">"
                  <label className="text-xs opacity-70">Governance logic</label>"
                  <textarea className="w-full border rounded-md px-3 py-2" rows={2} value={governance} onChange={(e) => setGovernance(e.target.value)} />
                </div>
                <div>"
                  <label className="text-xs opacity-70">Legal jurisdiction</label>"
                  <select className="w-full border rounded-md px-3 py-2" value={jurisdiction} onChange={(e) => setJurisdiction(e.target.value)}>"
                    <option value="US">US</option>"
                    <option value="EU">EU</option>"
                    <option value="SG">Singapore</option>"
                    <option value="AE">UAE</option>
                  </select>
                </div>



                <div className="flex items-center gap-2">
                  <input id="legalReview" type="checkbox" checked={legalReview} onChange={(e) => setLegalReview(e.target.checked)} />
                  <label htmlFor="legalReview" className="text-sm">Submit to Counsel</label>

                </div>
              </div>
            </div>
"
            <div className="rounded-lg border p-4 space-y-3">"
              <h3 className="font-medium">Distribution</h3>"
              <div className="space-y-2">
                {distribution.map((item, idx) => ("
                  <div key={idx} className="grid grid-cols-12 gap-2 items-center">'"
                    <input className="col-span-6 border rounded-md px-3 py-2" value={item.label} onChange={(e) => updateDistribution(idx, 'label', e.target.value)} />'"
                    <input className="col-span-4 border rounded-md px-3 py-2" type="number" min={0} max={100} value={item.percent} onChange={(e) => updateDistribution(idx, 'percent', e.target.value)} />"
                    <button onClick={() => removeDistributionItem(idx)} className="col-span-2 px-3 py-2 rounded-md bg-rose-600 text-white">Remove</button>
                  </div>



                </div>
              </div>
            </div>
            <div className="rounded-lg border p-4 space-y-3">
              <h3 className="font-medium">Distribution</h3>
              <div className="space-y-2">

                {distribution.map((item, idx) => (
                  <div
                    key={idx}
                    className='grid grid-cols-12 gap-2 items-center'
                  >
                    <input
                      className='col-span-6 border rounded-md px-3 py-2'
                      value={item.label}
                      onChange={e =>
                        updateDistribution(idx, 'label', e.target.value)
                      }
                    />
                    <input
                      className='col-span-4 border rounded-md px-3 py-2'
                      type='number'
                      min={0}
                      max={100}
                      value={item.percent}
                      onChange={e =>
                        updateDistribution(idx, 'percent', e.target.value)
                      }
                    />
                    <button
                      onClick={() => removeDistributionItem(idx)}
                      className='col-span-2 px-3 py-2 rounded-md bg-rose-600 text-white'
                    >
                      Remove
                    </button>
                  </div>

                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="flex items-center justify-between text-xs opacity-70">

                  <span>Total: {totalPercent}%</span>
                  <button
                    onClick={addDistributionItem}
                    className='px-3 py-1 rounded-md bg-gray-900 text-white'
                  >
                    Add allocation
                  </button>
                </div>
              </div>
              <div className='mt-3'>
origin/cursor/automate-test-improve-and-merge-code-2533
                <DistributionDonut data={distribution} />
              </div>
            </div>



                  onClick={handleGenerate}

                  className='px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-50'
                >'
                  {isGenerating ? 'Generating…' : 'Generate with GPT'}
                </button>
                <button'
                  onClick={() => setGeneratedMarkdown('')}'
                  className='px-4 py-2 rounded-md border'
                >

                  Clear AI Draft


            <div className="rounded-lg border p-4 space-y-3">
              <h3 className="font-medium">Operator Prompt</h3>
              <textarea className="w-full border rounded-md px-3 py-2" rows={4} value={operatorPrompt} onChange={(e) => setOperatorPrompt(e.target.value)} />
              <div className="flex gap-3">



                <button disabled={!isAdmin || isGenerating} onClick={handleGenerate} className="px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-50">
                  {isGenerating ? 'Generating…' : 'Generate with GPT'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





                </button>
                <button onClick={() => setGeneratedMarkdown('')} className="px-4 py-2 rounded-md border">Clear AI Draft</button>
              </div>
            </div>
            <div className='rounded-lg border p-4 space-y-2'>
              <h3 className='font-medium'>Output</h3>
              <div className='flex gap-3'>
                <button
                  onClick={() => handleDownload('md')}
                  className='px-3 py-2 rounded-md border'
                >
                  Download .md
                </button>
                <button
                  onClick={() => handleDownload('pdf')}
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
                  <button
                    key={s}
                    onClick={() => setActiveSection(s)}
                    className={`px-3 py-1 rounded-md border ${activeSection === s ? 'bg-gray-900 text-white' : ''}`}
                  >
                    {s}
                  </button>
                ))}
            <div className="rounded-lg border p-4 space-y-2">
              <h3 className="font-medium">Output</h3>
              <div className="flex gap-3">
                <button onClick={() => handleDownload('md')} className="px-3 py-2 rounded-md border">Download .md</button>
                <button onClick={() => handleDownload('pdf')} className="px-3 py-2 rounded-md border">Download PDF</button>

            <div className='rounded-lg border p-4 space-y-2'>
              <h3 className='font-medium'>Output</h3>
              <div className='flex gap-3'>
                <button
                  onClick={() => handleDownload('md')}
                  className='px-3 py-2 rounded-md border'
                >
                  Download .md
                </button>
                <button
                  onClick={() => handleDownload('pdf')}
                  className='px-3 py-2 rounded-md border'
                >
                  Download PDF

                </button>              </div>
            </div>
          </div>
          <div className='rounded-lg border p-4'>

                </button>
origin/cursor/automate-test-improve-and-merge-code-2533
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-2 overflow-x-auto">
                {sections.map((s) => (
                  <button key={s} onClick={() => setActiveSection(s)} className={`px-3 py-1 rounded-md border ${activeSection === s ? 'bg-gray-900 text-white' : ''}`}>{s}</button>

                ))  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}


            </div>
            <MarkdownPreview markdown={previewMarkdown} activeSection={activeSection} />

              </div>
<span className="text-xs opacity-60">Auto-updating preview</span>


              </div>
              <span className="text-xs opacity-60">Auto-updating preview</span>
            </div>

            <MarkdownPreview
              markdown={previewMarkdown}
              activeSection={activeSection}
            />

          </div>
        </div>
      </div>
    </>



  )
}

;

  tokenName: string;
  tokenSupply: string;
  useCases: string;
  rewardsLogic: string;
  distribution: DistributionItem[];
  governance: string;
  jurisdiction: string;
  legalReview: boolean;

}) {;
  const distLines = input.distribution.map((d) => `- ${d.label}: ${d.percent}%`).join('\n');

  const disclaimer = input.legalReview ? `\n\n> Submitted for legal review. Draft may change pending counsel feedback.` : '';

                    key={s}
                    on_click={() => setActiveSection (s)}'`
                    className={`px - 3 py - 1 rounded - md border ${active_section === s ? 'bg - gray - 900 text - white' : ''}`}
                  >;
                    {s}
                  </button>))}
              </div>;'
              <span className='text - xs opacity - 60'>Auto - updating preview</span>;
            </div>;
            <MarkdownPreview;
              markdown={preview_markdown}
              active_section={active_section}
            />          </div>;
        </div>;
      </div>;
    </>);
;
/**
 * buildLocalMarkdown - Function description;
 */
function buildLocalMarkdown() {}
  const dist_lines = input.distribution;`
    .map (d => `- ${d.label}: ${d.percent}%`);'
    .join ('\n');
  const disclaimer = input.legal_review;`
    ? `\n\n> Submitted for legal review. Draft may change pending counsel feedback.`;'
    : '';`
  return `# ${input.token_name} Tokenomics Whitepaper\n\n## Executive Summary\n${input.token_name} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI - native talent markets require aligned incentives and trust minimization.\n\n## Utility & Usage\n${input.use_cases}.\n\n## Rewards System\n${input.rewards_logic}.\n\n## Distribution\n${dist_lines}\n\n_total Supply: ${input.token_supply}.\n\n## Governance Model\n${input.governance}.\n\n## Risks + Disclaimers\n_this is not financial advice. ${jurisdictional_note (input.jurisdiction)}${disclaimer}\n`;
/**
 * jurisdictional_note - Function description;
 */

function jurisdictional_note() {

  switch (j) {
    case 'US':;

      return 'The token is intended for utility purposes and not as a security within the meaning of U.S. securities laws.';


function DistributionDonut(): any ({ data }: { data: DistributionItem[] }) {;
  // Simple textual donut placeholder until a chart lib is added;
  const total = data && data.reduce((a, b) => a + b && b.percent, 0) || 1;


}
;
function jurisdictionalNote(j: string) {;
  switch (j) {;
    case 'US':;
      return 'The token is intended for utility purposes and not as a security within the meaning of U.S. securities laws.';

    case 'EU':
return 'Designed for utility under EU frameworks; subject to MiCA and local guidelines as applicable.';
    case 'SG':
      return 'Intended utility token under MAS guidance; prospective purchasers should not view it as capital markets products.';
    case 'AE':
      return 'Intended utility token within relevant UAE free zone guidance; not an investment product.';
    default:
      return 'Intended strictly for utility use.';
  }

function DistributionDonut({ data }: { data: DistributionItem[] }) {
  // Simple textual donut placeholder until a chart lib is added
  const total = data.reduce((a, b) => a + b.percent, 0) || 1,
  return (

    <div className="space-y-1 text-sm">
<div className='space-y-1 text-sm'>

      {data.map((d, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div className="h-2 bg-gray-200 rounded w-full">
            <div className="h-2 bg-indigo-600 rounded" style={{ width: `${(d.percent / total) * 100}%` }} />
          </div>
          <span className="w-48 truncate">{d.label} ({d.percent}%)</span>

    case 'EU':;
      return 'Designed for utility under EU frameworks, subject to MiCA and local guidelines as applicable.',;
    case 'SG':;
      return 'Intended utility token under MAS guidance, prospective purchasers should not view it as capital markets products.',;
    case 'AE':;
      return 'Intended utility token within relevant UAE free zone guidance, not an investment product.',;
    default:;
      return 'Intended strictly for utility use.';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}


  return (






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

        </div>

      ))}
    </div>
  );
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

}) {  // Very lightweight section filter: split by headings;
  const parts = useMemo(() => {;
    const sections = markdown && markdown.split(/\n## /g),;
    const map: Record<string, string> = {};
    sections && sections.forEach((s, i) => {;
      if (i === 0) return; // first is H1;
      const [titleLine, ...rest] = s && s.split('\n');
      map[titleLine && titleLine.trim()] = rest && rest.join('\n');

        </div>
      ))}
    </div>
  );
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
    });
    return map;  }, [markdown]);
  const content = parts[activeSection] |'';
  return (

      ))  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

  const parts = useMemo(() => {

    const sections = markdown.split(/\n## /g),
    const map: Record<string, string> = {},
    sections.forEach((s, i) => {}
      if (i === 0) return, // first is H1'
      const [titleLine, ...rest] = s.split('\n'),'
      map[titleLine.trim()] = rest.join('\n')
    }),
    return map;
  }, [markdown]),'
  const content = parts[activeSection] || '',
  return (

    <pre className="whitespace-pre-wrap text-sm leading-6">{content || markdown}</pre>
  )
;
function MarkdownPreview({ markdown, activeSection }: { markdown: string, activeSection: string }) {;
  // Very lightweight section filter: split by headings;
  const parts = useMemo(() => {;
    const sections = markdown.split(/\n## /g);
    const map: Record<string, string> = {};
    sections.forEach((s, i) => {;
      if (i === 0) return, // first is H1;
      const [titleLine, ...rest] = s.split('\n');
      map[titleLine.trim()] = rest.join('\n');
    }),;
    return map;
  }, [markdown]);
  const content = parts[activeSection] || '';
  return (;
    <pre className="whitespace-pre-wrap text-sm leading-6">{content || markdown}</pre>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



  const parts = useMemo(() => {
    const sections = markdown.split(/\n## /g),
    const map: Record<string, string> = {},
    sections.forEach((s, i) => {
      if (i === 0) return, // first is H1
      const [titleLine, ...rest] = s.split('\n'),
      map[titleLine.trim()] = rest.join('\n')
    }),
    return map
  }, [markdown]),
  const content = parts[activeSection] || '',
  return (


}
}
}
}
}
    <pre className="whitespace-pre-wrap text-sm leading-6">{content || markdown}</pre>
  )
;
function MarkdownPreview({ markdown, activeSection }: { markdown: string, activeSection: string }) {;
  // Very lightweight section filter: split by headings;
  const parts = useMemo(() => {;
    const sections = markdown.split(/\n## /g);
    const map: Record<string, string> = {};
    sections.forEach((s, i) => {;
      if (i === 0) return, // first is H1;
      const [titleLine, ...rest] = s.split('\n');
      map[titleLine.trim()] = rest.join('\n');
    }),;
    return map;
  }, [markdown]);
  const content = parts[activeSection] || '';
  return (;
    <pre className="whitespace-pre-wrap text-sm leading-6">{content || markdown}</pre>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



