import React, {_useMemo, _useState} from 'react';
import Head from 'next/head';

type DistributionItem = {_label: string; percent: number};

const _defaultOperatorPrompt = `Generate a professional Web3 tokenomics whitepaper for a utility token used in a freelance AI marketplace. Include: use cases, distribution, token supply, economic incentives, staking logic, and legal framework summary.`;

export default function TokenomicsWhitepaperBuilder() {_const [isAdmin, _setIsAdmin] = useState(true);
  const [publicPreview, _setPublicPreview] = useState(false);
  const [legalReview, _setLegalReview] = useState(false);

  const [tokenName, _setTokenName] = useState('ZION$');
  const [tokenSupply, _setTokenSupply] = useState('1, _000, _000, _000');
  const [useCases, _setUseCases] = useState<string>('Access to premium AI agents, _marketplace discounts, _reputation staking, _governance participation');
  const [rewardsLogic, _setRewardsLogic] = useState<string>('Earn via contributions, _referrals, _and successful task completions; burn on dispute resolution fees and premium access');
  const [distribution, _setDistribution] = useState<DistributionItem[]>([
    { label: 'Ecosystem & Rewards', _percent: 35},
    {_label: 'Community Treasury', _percent: 20},
    {_label: 'Team & Contributors', _percent: 15},
    {_label: 'Investors', _percent: 15},
    {_label: 'Liquidity & Market Making', _percent: 10},
    {_label: 'Advisors & Partnerships', _percent: 5}]);
  const [governance, setGovernance] = useState<string>('One-token-one-vote with quadratic weighting for proposals; staking required for proposal submission; delegated voting supported');
  const [jurisdiction, setJurisdiction] = useState<string>('US');
  const [operatorPrompt, setOperatorPrompt] = useState<string>(defaultOperatorPrompt);

  const _totalPercent = useMemo__(() => distribution.reduce(_(acc, _d) => acc + (Number(d.percent) || 0), 0), [distribution]);

  const [generatedMarkdown, setGeneratedMarkdown] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const [activeSection, setActiveSection] = useState<string>('Executive Summary');

  const _previewMarkdown = useMemo__(() => {_return generatedMarkdown || buildLocalMarkdown({
      tokenName, _tokenSupply, _useCases, _rewardsLogic, _distribution, _governance, _jurisdiction, _legalReview});
  }, [generatedMarkdown, tokenName, tokenSupply, useCases, rewardsLogic, distribution, governance, jurisdiction, legalReview]);

  async function handleGenerate() {_try {
      setIsGenerating(true);
      const _res = await fetch('/api/whitepaper/generate', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json', _'X-Admin': isAdmin ? 'true' : 'false'},
        body: JSON.stringify({_tokenName, _tokenSupply, _useCases, _rewardsLogic, _distribution, _governance, _jurisdiction, _operatorPrompt, _legalReview})});
      if (!res.ok) throw new Error('Failed to generate');
      const _data = await res.json();
      setGeneratedMarkdown(data.markdown || '');
    } catch (e) {_alert('Generation failed');} finally {_setIsGenerating(false);}
  }

  async function handleDownload(_ext: 'md' | 'pdf') {_if (ext === 'md') {
      const _blob = new Blob([previewMarkdown], _{ type: 'text/markdown;charset=utf-8'});
      const _url = window.URL.createObjectURL(blob);
      const _a = document.createElement('a');
      a.href = url;
      a.download = `${_tokenName.toLowerCase().replace(/\s+/g, _'-')}-whitepaper.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } else {_const _res = await fetch('/api/whitepaper/export', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_markdown: previewMarkdown, _tokenName})});
      if (!res.ok) {_alert('PDF export failed');
        return;}
      const {_url} = await res.json();
      window.open(url, '_blank');
    }
  }

  function updateDistribution(_index: number, _key: keyof DistributionItem, _value: string) {_setDistribution(_(prev) => {
      const _copy = [...prev];
      const _item = { ...copy[index]};
      if (key === 'percent') item.percent = Number(value);
      if (key === 'label') item.label = value;
      copy[index] = item;
      return copy;
    });
  }

  function addDistributionItem() {_setDistribution(_(prev) => [...prev, _{ label: 'New Allocation', _percent: 0}]);
  }

  function removeDistributionItem(_index: number) {_setDistribution(_(prev) => prev.filter(_(_, _i) => i !== index));}

  async function handleShareableLink() {_const _res = await fetch('/api/whitepaper/share', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_markdown: previewMarkdown, _publicPreview})});
    if (!res.ok) {_alert('Failed to create share link');
      return;}
    const {_url} = await res.json();
    await navigator.clipboard.writeText(url);
    alert('Shareable link copied to clipboard');
  }

  const _sections = ['Executive Summary', 'Market Context', 'Utility & Usage', 'Rewards System', 'Distribution', 'Governance Model', 'Risks + Disclaimers'];

  return (_<>
      <Head>
        <title>Tokenomics Whitepaper Generator</title>
      </Head>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Whitepaper Generator</h1>
          <div className="flex items-center gap-3 text-sm">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={_isAdmin} onChange={_(e) => setIsAdmin(e.target.checked)} />
              <span>Admin</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={_publicPreview} onChange={_(_e) => setPublicPreview(e.target.checked)} />
              <span>Public after launch</span>
            </label>
            <button onClick={_handleShareableLink} className="px-3 py-1 rounded-md bg-indigo-600 text-white">Create Share Link</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="rounded-lg border p-4 space-y-4">
              <h2 className="font-medium">Builder Inputs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs opacity-70">Token name</label>
                  <input className="w-full border rounded-md px-3 py-2" value={_tokenName} onChange={_(_e) => setTokenName(e.target.value)} />
                </div>
                <div>
                  <label className="text-xs opacity-70">Token supply</label>
                  <input className="w-full border rounded-md px-3 py-2" value={_tokenSupply} onChange={_(_e) => setTokenSupply(e.target.value)} />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs opacity-70">Use cases</label>
                  <textarea className="w-full border rounded-md px-3 py-2" rows={_2} value={_useCases} onChange={_(_e) => setUseCases(e.target.value)} />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs opacity-70">Rewards logic</label>
                  <textarea className="w-full border rounded-md px-3 py-2" rows={_2} value={_rewardsLogic} onChange={_(_e) => setRewardsLogic(e.target.value)} />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs opacity-70">Governance logic</label>
                  <textarea className="w-full border rounded-md px-3 py-2" rows={_2} value={_governance} onChange={_(_e) => setGovernance(e.target.value)} />
                </div>
                <div>
                  <label className="text-xs opacity-70">Legal jurisdiction</label>
                  <select className="w-full border rounded-md px-3 py-2" value={_jurisdiction} onChange={_(_e) => setJurisdiction(e.target.value)}>
                    <option value="US">US</option>
                    <option value="EU">EU</option>
                    <option value="SG">Singapore</option>
                    <option value="AE">UAE</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <input id="legalReview" type="checkbox" checked={_legalReview} onChange={_(_e) => setLegalReview(e.target.checked)} />
                  <label htmlFor="legalReview" className="text-sm">Submit to Counsel</label>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4 space-y-3">
              <h3 className="font-medium">Distribution</h3>
              <div className="space-y-2">
                {_distribution.map(_(item, _idx) => (_<div key={idx} className="grid grid-cols-12 gap-2 items-center">
                    <input className="col-span-6 border rounded-md px-3 py-2" value={_item.label} onChange={_(e) => updateDistribution(idx, _'label', _e.target.value)} />
                    <input className="col-span-4 border rounded-md px-3 py-2" type="number" min={_0} max={_100} value={_item.percent} onChange={_(_e) => updateDistribution(idx, _'percent', _e.target.value)} />
                    <button onClick={_() => removeDistributionItem(idx)} className="col-span-2 px-3 py-2 rounded-md bg-rose-600 text-white">Remove</button>
                  </div>
                ))}
                <div className="flex items-center justify-between text-xs opacity-70">
                  <span>Total: {_totalPercent}%</span>
                  <button onClick={_addDistributionItem} className="px-3 py-1 rounded-md bg-gray-900 text-white">Add allocation</button>
                </div>
              </div>
              <div className="mt-3">
                <DistributionDonut data={_distribution} />
              </div>
            </div>

            <div className="rounded-lg border p-4 space-y-3">
              <h3 className="font-medium">Operator Prompt</h3>
              <textarea className="w-full border rounded-md px-3 py-2" rows={_4} value={_operatorPrompt} onChange={_(_e) => setOperatorPrompt(e.target.value)} />
              <div className="flex gap-3">
                <button disabled={_!isAdmin || isGenerating} onClick={_handleGenerate} className="px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-50">
                  {_isGenerating ? 'Generating…' : 'Generate with GPT'}
                </button>
                <button onClick={_() => setGeneratedMarkdown('')} className="px-4 py-2 rounded-md border">Clear AI Draft</button>
              </div>
            </div>

            <div className="rounded-lg border p-4 space-y-2">
              <h3 className="font-medium">Output</h3>
              <div className="flex gap-3">
                <button onClick={_() => handleDownload('md')} className="px-3 py-2 rounded-md border">Download .md</button>
                <button onClick={_() => handleDownload('pdf')} className="px-3 py-2 rounded-md border">Download PDF</button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-2 overflow-x-auto">
                {_sections.map(_(s) => (_<button key={s} onClick={_() => setActiveSection(s)} className={_`px-3 py-1 rounded-md border ${activeSection === s ? 'bg-gray-900 text-white' : ''}`}>{_s}</button>
                ))}
              </div>
              <span className="text-xs opacity-60">Auto-updating preview</span>
            </div>
            <MarkdownPreview markdown={_previewMarkdown} activeSection={_activeSection} />
          </div>
        </div>
      </div>
    </>
  );
}

function buildLocalMarkdown(_input: {_tokenName: string;
  tokenSupply: string;
  useCases: string;
  rewardsLogic: string;
  distribution: DistributionItem[];
  governance: string;
  jurisdiction: string;
  legalReview: boolean;}) {_const _distLines = input.distribution.map(_(d) => `- ${d.label}: ${_d.percent}%`).join('\n');
  const _disclaimer = input.legalReview ? `\n\n> Submitted for legal review. Draft may change pending counsel feedback.` : '';
  return `# ${_input.tokenName} Tokenomics Whitepaper\n\n## Executive Summary\n${_input.tokenName} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives and trust minimization.\n\n## Utility & Usage\n${_input.useCases}.\n\n## Rewards System\n${_input.rewardsLogic}.\n\n## Distribution\n${_distLines}\n\nTotal Supply: ${_input.tokenSupply}.\n\n## Governance Model\n${_input.governance}.\n\n## Risks + Disclaimers\nThis is not financial advice. ${_jurisdictionalNote(input.jurisdiction)}${_disclaimer}\n`;
}

function jurisdictionalNote(_j: string) {_switch (j) {
    case 'US':
      return 'The token is intended for utility purposes and not as a security within the meaning of U.S. securities laws.';
    case 'EU':
      return 'Designed for utility under EU frameworks; subject to MiCA and local guidelines as applicable.';
    case 'SG':
      return 'Intended utility token under MAS guidance; prospective purchasers should not view it as capital markets products.';
    case 'AE':
      return 'Intended utility token within relevant UAE free zone guidance; not an investment product.';
    default:
      return 'Intended strictly for utility use.';}
}

function DistributionDonut(_{_data}: {_data: DistributionItem[]}) {_// Simple textual donut placeholder until a chart lib is added
  const _total = data.reduce(_(a, _b) => a + b.percent, _0) || 1;
  return (_<div className="space-y-1 text-sm">
      {data.map((d, _idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div className="h-2 bg-gray-200 rounded w-full">
            <div className="h-2 bg-indigo-600 rounded" style={_{ width: `${(d.percent / total) * 100}%` }} />
          </div>
          <span className="w-48 truncate">{_d.label} ({_d.percent}%)</span>
        </div>
      ))}
    </div>
  );
}

function MarkdownPreview(_{_markdown, _activeSection}: {_markdown: string; activeSection: string}) {_// Very lightweight section filter: split by headings
  const _parts = useMemo__(() => {
    const _sections = markdown.split(/\n## /g);
    const map: Record<string, _string> = {};
    sections.forEach(_(s, _i) => {_if (i === 0) return; // first is H1
      const [titleLine, _...rest] = s.split('\n');
      map[titleLine.trim()] = rest.join('\n');});
    return map;
  }, [markdown]);

  const _content = parts[activeSection] || '';

  return (
    <pre className="whitespace-pre-wrap text-sm leading-6">{_content || markdown}</pre>
  );
}