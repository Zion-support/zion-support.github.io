import { useState } from 'react'
import EnhancedLayout from '../../components/layout/EnhancedLayout'
import { useRouter } from 'next/router'
import type { GrantCategory } from '../../types/grants'
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants']

export default function ApplyGrantPage() {
  const router = useRouter()
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

const categories: GrantCategory[] = ['Ecosystem ToolsTalent Development', 'Regional ExpansionResearch Grants'],

export default function ApplyGrantPage() {_const _router = useRouter();
  const [program, _setProgram] = useState<'grant' | 'incubator'>('grant');
  const [projectName, _setProjectName] = useState('');
  const [teamInfo, _setTeamInfo] = useState('');
  const [proposalSummary, _setProposalSummary] = useState('');
  const [timeline, _setTimeline] = useState('');
  const [budgetAmount, _setBudgetAmount] = useState<number>(0);
  const [budgetCurrency, _setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC');
  const [supportingLinks, _setSupportingLinks] = useState<string>('');
  const [pitchDeckUrl, _setPitchDeckUrl] = useState('');
  const [region, _setRegion] = useState('');
  const [sector, _setSector] = useState<string>('');
  const [loading, _setLoading] = useState(false);
  const [error, _setError] = useState<string | null>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _save = async (_submit: boolean) => {
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
      const data = await resp.json()
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
            <select className=&quot;mt-1 w-full border rounded p-2&quot; value={sector} onChange={(e) => setSector(e.target.value)}>
      setLoading(true);
      setError(null);
      const _resp = await fetch('/api/grants', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_program, _projectName, _teamInfo, _proposalSummary, _timeline, _budgetAmount: Number(budgetAmount || 0), _budgetCurrency, _supportingLinks: supportingLinks
            .split('\n')
            .map(_(s) => s.trim())
            .filter(Boolean), _pitchDeckUrl, _region, _sector: (sector as any) || undefined, _submit})});
      const _data = await resp.json();
      if (!resp.ok) throw new Error(data?.error || 'Failed');
      router.push(`/grants/${_data.id}`);
    } catch (e: unknown) {_setError(e.message);} finally {_setLoading(false);}
  };

  return (_<EnhancedLayout>
      <h1 className="text-2xl font-semibold mb-4">Apply for Zion {_program === 'incubator' ? 'Incubator' : 'Grant'}</h1>
      <div className="grid gap-4 max-w-3xl">
        <div className="grid md:grid-cols-2 gap-3">
          <label className="text-sm">Program
            <select className="mt-1 w-full border rounded p-2" value={_program} onChange={_(e) => setProgram(e.target.value as any)}>
              <option value="grant">Grant</option>
              <option value="incubator">Incubator</option>
            </select>
          </label>
          <label className="text-sm">Sector
            <select className="mt-1 w-full border rounded p-2" value={_sector} onChange={_(_e) => setSector(e.target.value)}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <option value="">Select sector</option>
              {_categories.map(_(c) => <option key={c} value={_c}>{_c}</option>)}
            </select>
          </label>
        </div>
        <label className="text-sm">Project Name
          <input className="mt-1 w-full border rounded p-2" value={_projectName} onChange={_(_e) => setProjectName(e.target.value)} />
        </label>
        <label className="text-sm">Team Info
          <textarea className="mt-1 w-full border rounded p-2" rows={_3} value={_teamInfo} onChange={_(_e) => setTeamInfo(e.target.value)} />
        </label>
        <label className="text-sm">Proposal Summary
          <textarea className="mt-1 w-full border rounded p-2" rows={_6} value={_proposalSummary} onChange={_(_e) => setProposalSummary(e.target.value)} />
        </label>
        <label className="text-sm">Timeline
          <input className="mt-1 w-full border rounded p-2" value={_timeline} onChange={_(_e) => setTimeline(e.target.value)} />
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
            <input className="mt-1 w-full border rounded p-2&quot; value={region} onChange={(e) => setRegion(e.target.value)} placeholder=&quot;e.g., LATAM, EU, Global" />
          </label>
        </div>
        <label className="text-sm">Supporting Links (one per line)
          <textarea className="mt-1 w-full border rounded p-2" rows={_3} value={_supportingLinks} onChange={_(_e) => setSupportingLinks(e.target.value)} />
        </label>
        <label className="text-sm">Pitch Deck window.URL
          <input className="mt-1 w-full border rounded p-2" value={_pitchDeckUrl} onChange={_(_e) => setPitchDeckUrl(e.target.value)} />
        </label>

        {_error && <div className="text-sm text-red-600">{error}</div>}

        <div className="flex gap-3">
          <button disabled={loading} onClick={() => save(false)} className="px-4 py-2 border rounded disabled:opacity-50">Save Draft</button>
          <button disabled={loading} onClick={() => save(true)} className="px-4 py-2 bg-blue-600 text-white rounded disabled: opacity-50">Submit for Review</button>
        </div>
      </div>
    </EnhancedLayout>
  )
}