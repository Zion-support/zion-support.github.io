import React, { useMemo, useState } from 'react',
import Head from 'next/head',
type DistributionItem = { label: string, percent: number },

const defaultOperatorPrompt = `Generate a professional Web3 tokenomics whitepaper for a utility token used in a freelance AI marketplace. Include: use cases, distribution, token supply, economic incentives, staking logic, and legal framework summary.`,

export default function TokenomicsWhitepaperBuilder() {
  const [isAdmin, setIsAdmin] = useState(true),
  const [publicPreview, setPublicPreview] = useState(false),
  const [legalReview, setLegalReview] = useState(false),

  const [tokenName, setTokenName] = useState('ZION$'),
  const [tokenSupply, setTokenSupply] = useState('1,000,000,000'),
  const [useCases, setUseCases] = useState<string>('Access to premium AI agents, marketplace discounts, reputation staking, governance participation'),
  const [rewardsLogic, setRewardsLogic] = useState<string>('Earn via contributions, referrals, and successful task completions, burn on dispute resolution fees and premium access'),
  const [distribution, setDistribution] = useState<DistributionItem[]>([
    { label: 'Ecosystem & Rewards', percent: 35 },
    { label: 'Community Treasury', percent: 20 },
    { label: 'Team & Contributors', percent: 15 },
    { label: 'Investors', percent: 15 },
    { label: 'Liquidity & Market Making', percent: 10 },
    { label: 'Advisors & Partnerships', percent: 5 }]),
  const [governance, setGovernance] = useState<string>('One-token-one-vote with quadratic weighting for proposals, staking required for proposal submission, delegated voting supported'),
  const [jurisdiction, setJurisdiction] = useState<string>('US'),
  const [operatorPrompt, setOperatorPrompt] = useState<string>(defaultOperatorPrompt),

  const totalPercent = useMemo(() => distribution.reduce((acc, d) => acc + (Number(d.percent) || 0), 0), [distribution]),

  const [generatedMarkdown, setGeneratedMarkdown] = useState<string>(''),
  const [isGenerating, setIsGenerating] = useState<boolean>(false),

  const [activeSection, setActiveSection] = useState<string>('Executive Summary'),

  const previewMarkdown = useMemo(() => {
    return generatedMarkdown || buildLocalMarkdown({
      tokenName,
      tokenSupply,
      useCases,
      rewardsLogic,
      distribution,
      governance,
      jurisdiction,
      legalReview})
  }, [generatedMarkdown, tokenName, tokenSupply, useCases, rewardsLogic, distribution, governance, jurisdiction, legalReview]),

  async function handleGenerate() {
    try {
      setIsGenerating(true),
      const res = await fetch('/api/whitepaper/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/jsonX-Admin': isAdmin ? 'true' : 'false' },
        body: JSON.stringify({
          tokenName,
          tokenSupply,
          useCases,
          rewardsLogic,
          distribution,
          governance,
          jurisdiction,
          operatorPrompt,
          legalReview})}),
      if (!res.ok) throw new Error('Failed to generate'),
      const data = await res.json(),
      setGeneratedMarkdown(data.markdown || '')
    } catch (e) {
      console.error(e),
      alert('Generation failed')
    } finally {
      setIsGenerating(false)
    }
  }

  async function handleDownload(ext: 'md' | 'pdf') {
    if (ext === 'md') {
      const blob = new Blob([previewMarkdown], { type: 'text/markdown,charset=utf-8' }),
      const url = URL.createObjectURL(blob),
      const a = document.createElement('a'),
      a.href = url,
      a.download = `${tokenName.toLowerCase().replace(/\s+/g, '-')}-whitepaper.md`,
      document.body.appendChild(a),
      a.click(),
      document.body.removeChild(a),
      URL.revokeObjectURL(url)
    } else {
      const res = await fetch('/api/whitepaper/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown: previewMarkdown, tokenName })}),
      if (!res.ok) {
        alert('PDF export failed'),
        return
      }
      const { url } = await res.json(),
      window.open(url, '_blank')
    }
  }

  function updateDistribution(index: number, key: keyof DistributionItem, value: string) {
    setDistribution((prev) => {
      const copy = [...prev],
      const item = { ...copy[index] },
      if (key === 'percent') item.percent = Number(value),
      if (key === 'label') item.label = value,
      copy[index] = item,
      return copy
    })
  }

  function addDistributionItem() {
    setDistribution((prev) => [...prev, { label: 'New Allocation', percent: 0 }])
  }

  function removeDistributionItem(index: number) {
    setDistribution((prev) => prev.filter((_, i) => i !== index))
  }

  async function handleShareableLink() {
    const res = await fetch('/api/whitepaper/share', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ markdown: previewMarkdown, publicPreview })}),
    if (!res.ok) {
      alert('Failed to create share link'),
      return
    }
    const { url } = await res.json(),
    await navigator.clipboard.writeText(url),
    alert('Shareable link copied to clipboard')
  }

  const sections = ['Executive SummaryMarket ContextUtility & UsageRewards SystemDistributionGovernance ModelRisks + Disclaimers'],

  return (
    <>
      <Head>
        <title>Tokenomics Whitepaper Generator</title>
      </Head>
      <div className=&quot;space-y-6&quot;>
        <div className=&quot;flex items-center justify-between&quot;>
          <h1 className=&quot;text-2xl font-semibold&quot;>Whitepaper Generator</h1>
          <div className=&quot;flex items-center gap-3 text-sm&quot;>
            <label className=&quot;inline-flex items-center gap-2&quot;>
              <input type=&quot;checkbox&quot; checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
              <span>Admin</span>
            </label>
            <label className=&quot;inline-flex items-center gap-2&quot;>
              <input type=&quot;checkbox&quot; checked={publicPreview} onChange={(e) => setPublicPreview(e.target.checked)} />
              <span>Public after launch</span>
            </label>
            <button onClick={handleShareableLink} className=&quot;px-3 py-1 rounded-md bg-indigo-600 text-white&quot;>Create Share Link</button>
          </div>
        </div>

        <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-6&quot;>
          <div className=&quot;space-y-6&quot;>
            <div className=&quot;rounded-lg border p-4 space-y-4&quot;>
              <h2 className=&quot;font-medium&quot;>Builder Inputs</h2>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                <div>
                  <label className=&quot;text-xs opacity-70&quot;>Token name</label>
                  <input className=&quot;w-full border rounded-md px-3 py-2&quot; value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
                </div>
                <div>
                  <label className=&quot;text-xs opacity-70&quot;>Token supply</label>
                  <input className=&quot;w-full border rounded-md px-3 py-2&quot; value={tokenSupply} onChange={(e) => setTokenSupply(e.target.value)} />
                </div>
                <div className=&quot;md:col-span-2&quot;>
                  <label className=&quot;text-xs opacity-70&quot;>Use cases</label>
                  <textarea className=&quot;w-full border rounded-md px-3 py-2&quot; rows={2} value={useCases} onChange={(e) => setUseCases(e.target.value)} />
                </div>
                <div className=&quot;md:col-span-2&quot;>
                  <label className=&quot;text-xs opacity-70&quot;>Rewards logic</label>
                  <textarea className=&quot;w-full border rounded-md px-3 py-2&quot; rows={2} value={rewardsLogic} onChange={(e) => setRewardsLogic(e.target.value)} />
                </div>
                <div className=&quot;md:col-span-2&quot;>
                  <label className=&quot;text-xs opacity-70&quot;>Governance logic</label>
                  <textarea className=&quot;w-full border rounded-md px-3 py-2&quot; rows={2} value={governance} onChange={(e) => setGovernance(e.target.value)} />
                </div>
                <div>
                  <label className=&quot;text-xs opacity-70&quot;>Legal jurisdiction</label>
                  <select className=&quot;w-full border rounded-md px-3 py-2&quot; value={jurisdiction} onChange={(e) => setJurisdiction(e.target.value)}>
                    <option value=&quot;US&quot;>US</option>
                    <option value=&quot;EU&quot;>EU</option>
                    <option value=&quot;SG&quot;>Singapore</option>
                    <option value=&quot;AE&quot;>UAE</option>
                  </select>
                </div>
                <div className=&quot;flex items-center gap-2&quot;>
                  <input id=&quot;legalReview&quot; type=&quot;checkbox&quot; checked={legalReview} onChange={(e) => setLegalReview(e.target.checked)} />
                  <label htmlFor=&quot;legalReview&quot; className=&quot;text-sm&quot;>Submit to Counsel</label>
                </div>
              </div>
            </div>

            <div className=&quot;rounded-lg border p-4 space-y-3&quot;>
              <h3 className=&quot;font-medium&quot;>Distribution</h3>
              <div className=&quot;space-y-2&quot;>
                {distribution.map((item, idx) => (
                  <div key={idx} className=&quot;grid grid-cols-12 gap-2 items-center&quot;>
                    <input className=&quot;col-span-6 border rounded-md px-3 py-2&quot; value={item.label} onChange={(e) => updateDistribution(idx, 'label', e.target.value)} />
                    <input className=&quot;col-span-4 border rounded-md px-3 py-2&quot; type=&quot;number&quot; min={0} max={100} value={item.percent} onChange={(e) => updateDistribution(idx, 'percent', e.target.value)} />
                    <button onClick={() => removeDistributionItem(idx)} className=&quot;col-span-2 px-3 py-2 rounded-md bg-rose-600 text-white&quot;>Remove</button>
                  </div>
                ))}
                <div className=&quot;flex items-center justify-between text-xs opacity-70&quot;>
                  <span>Total: {totalPercent}%</span>
                  <button onClick={addDistributionItem} className=&quot;px-3 py-1 rounded-md bg-gray-900 text-white&quot;>Add allocation</button>
                </div>
              </div>
              <div className=&quot;mt-3&quot;>
                <DistributionDonut data={distribution} />
              </div>
            </div>

            <div className=&quot;rounded-lg border p-4 space-y-3&quot;>
              <h3 className=&quot;font-medium&quot;>Operator Prompt</h3>
              <textarea className=&quot;w-full border rounded-md px-3 py-2&quot; rows={4} value={operatorPrompt} onChange={(e) => setOperatorPrompt(e.target.value)} />
              <div className=&quot;flex gap-3&quot;>
                <button disabled={!isAdmin || isGenerating} onClick={handleGenerate} className=&quot;px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-50&quot;>
                  {isGenerating ? 'Generating…' : 'Generate with GPT'}
                </button>
                <button onClick={() => setGeneratedMarkdown('')} className=&quot;px-4 py-2 rounded-md border&quot;>Clear AI Draft</button>
              </div>
            </div>

            <div className=&quot;rounded-lg border p-4 space-y-2&quot;>
              <h3 className=&quot;font-medium&quot;>Output</h3>
              <div className=&quot;flex gap-3&quot;>
                <button onClick={() => handleDownload('md')} className=&quot;px-3 py-2 rounded-md border&quot;>Download .md</button>
                <button onClick={() => handleDownload('pdf')} className=&quot;px-3 py-2 rounded-md border&quot;>Download PDF</button>
              </div>
            </div>
          </div>

          <div className=&quot;rounded-lg border p-4&quot;>
            <div className=&quot;flex items-center justify-between mb-3&quot;>
              <div className=&quot;flex gap-2 overflow-x-auto&quot;>
                {sections.map((s) => (
                  <button key={s} onClick={() => setActiveSection(s)} className={`px-3 py-1 rounded-md border ${activeSection === s ? 'bg-gray-900 text-white' : ''}`}>{s}</button>
                ))}
              </div>
              <span className=&quot;text-xs opacity-60&quot;>Auto-updating preview</span>
            </div>
            <MarkdownPreview markdown={previewMarkdown} activeSection={activeSection} />
          </div>
        </div>
      </div>
    </>
  )
}

function buildLocalMarkdown(input: {
  tokenName: string,
  tokenSupply: string,
  useCases: string,
  rewardsLogic: string,
  distribution: DistributionItem[],
  governance: string,
  jurisdiction: string,
  legalReview: boolean
}) {
  const distLines = input.distribution.map((d) => `- ${d.label}: ${d.percent}%`).join('\n'),
  const disclaimer = input.legalReview ? `\n\n> Submitted for legal review. Draft may change pending counsel feedback.` : '',
  return `# ${input.tokenName} Tokenomics Whitepaper\n\n## Executive Summary\n${input.tokenName} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives and trust minimization.\n\n## Utility & Usage\n${input.useCases}.\n\n## Rewards System\n${input.rewardsLogic}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input.tokenSupply}.\n\n## Governance Model\n${input.governance}.\n\n## Risks + Disclaimers\nThis is not financial advice. ${jurisdictionalNote(input.jurisdiction)}${disclaimer}\n`
}

function jurisdictionalNote(j: string) {
  switch (j) {
    case 'US':
      return 'The token is intended for utility purposes and not as a security within the meaning of U.S. securities laws.',
    case 'EU':
      return 'Designed for utility under EU frameworks, subject to MiCA and local guidelines as applicable.',
    case 'SG':
      return 'Intended utility token under MAS guidance, prospective purchasers should not view it as capital markets products.',
    case 'AE':
      return 'Intended utility token within relevant UAE free zone guidance, not an investment product.',
    default:
      return 'Intended strictly for utility use.'
  }
}

function DistributionDonut({ data }: { data: DistributionItem[] }) {
  // Simple textual donut placeholder until a chart lib is added
  const total = data.reduce((a, b) => a + b.percent, 0) || 1,
  return (
    <div className=&quot;space-y-1 text-sm&quot;>
      {data.map((d, idx) => (
        <div key={idx} className=&quot;flex items-center gap-2&quot;>
          <div className=&quot;h-2 bg-gray-200 rounded w-full&quot;>
            <div className=&quot;h-2 bg-indigo-600 rounded&quot; style={{ width: `${(d.percent / total) * 100}%` }} />
          </div>
          <span className=&quot;w-48 truncate&quot;>{d.label} ({d.percent}%)</span>
        </div>
      ))}
    </div>
  )
}

function MarkdownPreview({ markdown, activeSection }: { markdown: string, activeSection: string }) {
  // Very lightweight section filter: split by headings
  const parts = useMemo(() => {
    const sections = markdown.split(/\n## /g),
    const map: Record<string string> = {},
    sections.forEach((s, i) => {
      if (i === 0) return, // first is H1
      const [titleLine, ...rest] = s.split('\n'),
      map[titleLine.trim()] = rest.join('\n')
    }),
    return map
  }, [markdown]),

  const content = parts[activeSection] || '',

  return (
<<<<<<< HEAD
    <pre className="whitespace-pre-wrap text-sm leading-6">{content || markdown}</pre>
  )
=======
    <pre className=&quot;whitespace-pre-wrap text-sm leading-6&quot;>{content || markdown}</pre>
  );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}