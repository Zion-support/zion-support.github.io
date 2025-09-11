import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { useRouter  } from 'next/router';
import type { GrantCategory } from '../../types/grants';

const categories: GrantCategory[] = [

  'Ecosystem Tools',
  'Talent Development',
  'Regional Expansion',
  'Research Grants',
];const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],
export default function ApplyGrantPage() {;

const categories: GrantCategory[] = [
  const [supportingLinks, setSupportingLinks] = useState<string>('');
  const [pitchDeckUrl, setPitchDeckUrl] = useState('');
  const [region, setRegion] = useState('');
  const [sector, setSector] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
import {useState} from 'react';
import EnhancedLayout from '../../components / layout / EnhancedLayout';
import {use_router} from 'next / router';
import type { GrantCategory } from '../../types / grants';
;
const categories: GrantCategory[] = [;
  'Ecosystem Tools',
  'Talent Development',
  'Regional Expansion',
  'Research Grants',
];const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],
export default /**
 * ApplyGrantPage - Function description
 */
function ApplyGrantPage() {
  const router = use_router ();
  const [program, set_program] = useState<'grant' | 'incubator'>('grant');
  const [project_name, setProjectName] = useState ('');
  const [team_info, setTeamInfo] = useState ('');
  const [proposal_summary, setProposalSummary] = useState ('');
  const [timeline, set_timeline] = useState ('');
  const [budget_amount, setBudgetAmount] = useState < number>(0);
  const [budget_currency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>(
    'USDC');  const [supporting_links, setSupportingLinks] = useState < string>('');  const [budget_currency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC');
  const [supporting_links, setSupportingLinks] = useState < string>('');
  const [pitchDeckUrl, setPitchDeckUrl] = useState ('');
  const [region, set_region] = useState ('');
  const [sector, set_sector] = useState < string>('');
  const [loading, set_loading] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  const save = async (submit: boolean) => {
    try {
      set_loading (true);
      set_error (null),
      const resp = await fetch ('/api / grants', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          program,
          project_name,
          team_info,
          proposal_summary,
          timeline,
          budget_amount: Number (budget_amount || 0),
          budget_currency,
          supporting_links: supporting_links;
            .split ('\n');
            .map (string => s.trim ());
            .filter (Boolean),
          pitchDeckUrl,
          region,
          sector: (sector as any) || undefined,
          submit,
        }),
      });
      const data = await resp.json ();
      if (throw new Error (data?.error || 'Failed')) {
  $2
}
      router.push (`/grants/${data.id}`);

    } catch (e: any) {
      set_error (e.message);
    } finally {


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          budgetCurrency;
          supportingLinks: supportingLinks;
            .split('\n');
            .map((s) => s && s.trim());
            .filter(Boolean);
      set_loading (false);    }          budget_amount: Number (budget_amount || 0),
          budget_currency;
          supporting_links: supporting_links;
            .split ('\n');
            .map ((s) => s.trim ());
            .filter (Boolean);
          pitchDeckUrl;
          region;=======
          sector: (sector as any) || undefined,;
          submit})});
      const data = await resp && resp.json();
      if (!resp && resp.ok) throw new Error(data?.error || 'Failed');
      router && router.push(`/grants/${data && data.id}`);
    } catch (e: any) {;
      setError(e && e.message);
    } finally {;
      setLoading(false);
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
  const save = async (submit: boolean) => {
    try {
      setLoading(true);
      setError(null)
      const resp = await fetch('/api/grants', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          program
          projectName
          teamInfo
          proposalSummary
          timeline
          budgetAmount: Number(budgetAmount |0)
          budgetCurrency
          supportingLinks: supportingLinks
            .split('\n')
            .map(s => s.trim())
            .filter(Boolean)
          pitchDeckUrl
          region
          sector: (sector as any) |undefined
          submit
        })
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data?.error |'Failed');
      router.push(`/grants/${data.id}`);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);    }          budgetAmount: Number(budgetAmount |0)
          budgetCurrency;
          supportingLinks: supportingLinks
            .split('\n')
            .map((s) => s.trim())
            .filter(Boolean);
          pitchDeckUrl;
          region;
          sector: (sector as any) |undefined
          submit})});
      const data = await resp.json();
      if (!resp.ok) throw new Error(data?.error |'Failed');
      router.push(`/grants/${data.id}`)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
=======
    }
  }

  };

  return (
    <EnhancedLayout>
      <h1 className='text-2xl font-semibold mb-4'>
        Apply for Zion {program === 'incubator' ? 'Incubator' : 'Grant'}
      </h1>
      <div className='grid gap-4 max-w-3xl'>
        <div className='grid md:grid-cols-2 gap-3'>
          <label className='text-sm'>
            Program
            <select
              className='mt-1 w-full border rounded p-2'
              value={program}
              onChange={e => setProgram(e.target.value as any)}
            >
              <option value='grant'>Grant</option>
              <option value='incubator'>Incubator</option>
            </select>
          </label>
          <label className='text-sm'>
            Sector
            <select
              className='mt-1 w-full border rounded p-2'
              value={sector}
              onChange={e => setSector(e.target.value)}
            >
              <option value=''>Select sector</option>
              {categories.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className='text-sm'>
          Project Name
          <input
            className='mt-1 w-full border rounded p-2'
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
          />
        </label>
        <label className='text-sm'>
          Team Info
          <textarea
            className='mt-1 w-full border rounded p-2'
            rows={3}
            value={teamInfo}
            onChange={e => setTeamInfo(e.target.value)}
          />
        </label>
        <label className='text-sm'>
          Proposal Summary
          <textarea
            className='mt-1 w-full border rounded p-2'
            rows={6}
            value={proposalSummary}
            onChange={e => setProposalSummary(e.target.value)}
          />
        </label>
        <label className='text-sm'>
          Timeline
          <input
            className='mt-1 w-full border rounded p-2'
            value={timeline}
            onChange={e => setTimeline(e.target.value)}
          />
        </label>
        <div className='grid md:grid-cols-3 gap-3'>
          <label className='text-sm'>
            Budget Amount
            <input
              type='number'
              className='mt-1 w-full border rounded p-2'
              value={budgetAmount}
              onChange={e => setBudgetAmount(Number(e.target.value))}
            />
          </label>
          <label className='text-sm'>
            Currency
            <select
              className='mt-1 w-full border rounded p-2'
              value={budgetCurrency}
              onChange={e => setBudgetCurrency(e.target.value as any)}
            >
              <option value='USDC'>USDC</option>
              <option value='ZION$'>ZION$</option>
            </select>
          </label>
          <label className='text-sm'>
            Region
            <input
              className='mt-1 w-full border rounded p-2'
              value={region}
              onChange={e => setRegion(e.target.value)}
              placeholder='e.g., LATAM, EU, Global'
            />
          </label>
        </div>
        <label className='text-sm'>
          Supporting Links (one per line)
          <textarea
            className='mt-1 w-full border rounded p-2'
            rows={3}
            value={supportingLinks}
            onChange={e => setSupportingLinks(e.target.value)}
          />
        </label>
        <label className='text-sm'>
          Pitch Deck URL
          <input
            className='mt-1 w-full border rounded p-2'
            value={pitchDeckUrl}
            onChange={e => setPitchDeckUrl(e.target.value)}
          />
        </label>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }  }
    }


  };


  return (


==============

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {error && <div className='text-sm text-red-600'>{error}</div>}
        <div className='flex gap-3'>
          <button
            disabled={loading}
            onClick={() => save(false)}
            className='px-4 py-2 border rounded disabled:opacity-50'
          >
            Save Draft
          </button>
          <button
            disabled={loading}
            onClick={() => save(true)}
            className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'
          >
            Submit for Review
          </button>        </div>
      </div>
    </EnhancedLayout>
  );
  );

);
}
  );
=======
=======

              <option value="USDC">USDC</option>;
              <option value="ZION$">ZION$</option>;
            </select>;
          </label>;


=======
  );
}
  );
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
