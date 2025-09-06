import { useState } from 'react',
import EnhancedLayout from '../../components/layout/EnhancedLayout',
import { useRouter } from 'next/router',
import type { GrantCategory } from '../../types/grants',
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],

export default function ApplyGrantPage() {
  const router = useRouter(),
  const [program, setProgram] = useState<'grant' | 'incubator'>('grant'),
  const [projectName, setProjectName] = useState(''),
  const [teamInfo, setTeamInfo] = useState(''),
  const [proposalSummary, setProposalSummary] = useState(''),
  const [timeline, setTimeline] = useState(''),
  const [budgetAmount, setBudgetAmount] = useState<number>(0),
  const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC'),
  const [supportingLinks, setSupportingLinks] = useState<string>(''),
  const [pitchDeckUrl, setPitchDeckUrl] = useState(''),
  const [region, setRegion] = useState(''),
  const [sector, setSector] = useState<string>(''),
  const [loading, setLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const save = async (submit: boolean) => {
    try {
      setLoading(true),
      setError(null),
      const resp = await fetch('/api/grants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          program,
          projectName,
          teamInfo,
          proposalSummary,
          timeline,
          budgetAmount: Number(budgetAmount || 0),
          budgetCurrency,
          supportingLinks: supportingLinks
            .split('\n')
            .map((s) => s.trim())
            .filter(Boolean),
          pitchDeckUrl,
          region,
          sector: (sector as any) || undefined,
          submit})}),
      const data = await resp.json(),
      if (!resp.ok) throw new Error(data?.error || 'Failed'),
      router.push(`/grants/${data.id}`)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  },

  return (
    <EnhancedLayout>
      <h1 className=&quot;text-2xl font-semibold mb-4&quot;>Apply for Zion {program === 'incubator' ? 'Incubator' : 'Grant'}</h1>
      <div className=&quot;grid gap-4 max-w-3xl&quot;>
        <div className=&quot;grid md:grid-cols-2 gap-3&quot;>
          <label className=&quot;text-sm&quot;>Program
            <select className=&quot;mt-1 w-full border rounded p-2&quot; value={program} onChange={(e) => setProgram(e.target.value as any)}>
              <option value=&quot;grant&quot;>Grant</option>
              <option value=&quot;incubator&quot;>Incubator</option>
            </select>
          </label>
          <label className=&quot;text-sm&quot;>Sector
            <select className=&quot;mt-1 w-full border rounded p-2&quot; value={sector} onChange={(e) => setSector(e.target.value)}>              <option value="">Select sector</option>
              {categories.map(_(c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>
        </div>
        <label className="text-sm">Project Name
          <input className="mt-1 w-full border rounded p-2" value={projectName} onChange={_(e) => setProjectName(e.target.value)} />
        </label>
        <label className="text-sm">Team Info
          <textarea className="mt-1 w-full border rounded p-2" rows={3} value={teamInfo} onChange={_(e) => setTeamInfo(e.target.value)} />
        </label>
        <label className="text-sm">Proposal Summary
          <textarea className="mt-1 w-full border rounded p-2" rows={6} value={proposalSummary} onChange={_(e) => setProposalSummary(e.target.value)} />
        </label>
        <label className="text-sm">Timeline
          <input className="mt-1 w-full border rounded p-2" value={timeline} onChange={_(e) => setTimeline(e.target.value)} />
        </label>
        <div className="grid md:grid-cols-3 gap-3">
          <label className="text-sm&quot;>Budget Amount
            <input type=&quot;number" className="mt-1 w-full border rounded p-2" value={budgetAmount} onChange={(e) => setBudgetAmount(Number(e.target.value))} />
          </label>
          <label className="text-sm">Currency
            <select className="mt-1 w-full border rounded p-2&quot; value={budgetCurrency} onChange={(e) => setBudgetCurrency(e.target.value as any)}>
              <option value=&quot;USDC&quot;>USDC</option>
              <option value=&quot;ZION$">ZION$</option>
            </select>
          </label>
          <label className="text-sm">Region
            <input className="mt-1 w-full border rounded p-2&quot; value={region} onChange={(e) => setRegion(e.target.value)} placeholder=&quot;e.g., LATAM, EU, Global" />          </label>
        </div>
        <label className="text-sm">Supporting Links (one per line)
          <textarea className="mt-1 w-full border rounded p-2" rows={3} value={supportingLinks} onChange={_(e) => setSupportingLinks(e.target.value)} />
        </label>
        <label className="text-sm">Pitch Deck window.URL
          <input className="mt-1 w-full border rounded p-2" value={pitchDeckUrl} onChange={_(e) => setPitchDeckUrl(e.target.value)} />
        </label>

        {error && <div className="text-sm text-red-600">{error}</div>}

        <div className="flex gap-3">
          <button disabled={loading} onClick={() => save(false)} className="px-4 py-2 border rounded disabled:opacity-50">Save Draft</button>
          <button disabled={loading} onClick={() => save(true)} className="px-4 py-2 bg-blue-600 text-white rounded disabled: opacity-50">Submit for Review</button>        </div>
      </div>
    </EnhancedLayout>
  )}