


      router.push (`/grants/${data.id}`)} catch (e: any) {set_error (e.message)} finally {} catch (e: any) {set_error (e.message}


const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];
export default function ApplyGrantPage() {
  const router = null;




  const router = useRouter();
  const [program, setProgram] = useState<'grant' | 'incubator'>('grant');
  const [projectName, setProjectName] = useState('');
  const [teamInfo, setTeamInfo] = useState('');
  const [proposalSummary, setProposalSummary] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budgetAmount, setBudgetAmount] = useState<number>(0);


  const [supportingLinks, setSupportingLinks] = useState<string>('');
  const [pitchDeckUrl, setPitchDeckUrl] = useState('');
  const [region, setRegion] = useState('');
  const [sector, setSector] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


const [program, setProgram] = useState<'grant' | 'incubator'>('grant');'

const [projectName, setProjectName] = useState('');'

const [teamInfo, setTeamInfo] = useState('');'



  const router = useRouter();
  const [program, setProgram] = useState<'grant' | 'incubator'>('grant');
  const [projectName, setProjectName] = useState('');
  const [teamInfo, setTeamInfo] = useState('');
  const [proposalSummary, setProposalSummary] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budgetAmount, setBudgetAmount] = useState<number>(0);
  const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC');
  const [supportingLinks, setSupportingLinks] = useState<string>('');
  const [pitchDeckUrl, setPitchDeckUrl] = useState('');
  const [region, setRegion] = useState('');
  const [sector, setSector] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const save = async (submit: boolean) => {
    try {
      setLoading(true);
      setError(null);
      const resp = await fetch('/api/grants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

];const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],


import { useState  } from 'react;
import { useRouter  } from next/router';

import { useState  } from react';
import { useRouter  } from 'next/router;

const categories: GrantCategory[] = [
  Ecosystem Tools'
  'Talent Development
  Regional Expansion'
  'Research Grants
];const categories: GrantCategory[] = [Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants']

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants];
export default function ApplyGrantPage() {
  const router = null;
origin/cursor/automate-test-improve-and-merge-code-2533

pr-12243
];

const categories: GrantCategory[] = [Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants']
export default function ApplyGrantPage() {
const categories: GrantCategory[] = [;
  'Ecosystem Tools,
  Talent Development',
  'Regional Expansion,

pr-12243
  const router = useRouter();
  const [program, setProgram] = useState<grant' | 'incubator>(grant');
  const [projectName, setProjectName] = useState(');
  const [teamInfo, setTeamInfo] = useState(');
  const [proposalSummary, setProposalSummary] = useState(');
  const [timeline, setTimeline] = useState(');
  const [budgetAmount, setBudgetAmount] = useState<number>(0);

  const [budgetCurrency, setBudgetCurrency] = useState<'ZION$ | USDC'>(
    'USDC
  );  const [supportingLinks, setSupportingLinks] = useState<string>(');  const [budgetCurrency, setBudgetCurrency] = useState<'ZION$ | USDC'>('USDC);


  const [budgetCurrency, setBudgetCurrency] = useState<ZION$' | 'USDC>(
    USDC'
  );  const [supportingLinks, setSupportingLinks] = useState<string>(');  const [budgetCurrency, setBudgetCurrency] = useState<ZION$' | 'USDC>(USDC');
    'USDC
  );
origin/cursor/automate-test-improve-and-merge-code-2533

pr-12243
  const [supportingLinks, setSupportingLinks] = useState<string>(');
  const [pitchDeckUrl, setPitchDeckUrl] = useState(');
  const [region, setRegion] = useState(');
  const [sector, setSector] = useState<string>(');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);




const [program, setProgram] = useState<'grant' | 'incubator'>('grant');'

const [projectName, setProjectName] = useState('');'

const [teamInfo, setTeamInfo] = useState('');'











          supportingLinks: supportingLinks;
            .split('\n');
            .map(s => s && s.trim());
            .filter(Boolean),
          pitchDeckUrl,
          region,

      if (!resp && resp.ok) throw new Error(data?.error || Failed);
      router && router.push(`/grants/${data && data.id}`);
    } catch (e: any) {
      setError(e && e.message);
    } finally {
      setLoading(false);    }          budgetAmount: Number(budgetAmount || 0),


program;
    } catch (e: any) {}
      setError(e && e.message);}
    } finally {}
      setLoading(false);    }          budgetAmount: Number(budgetAmount || 0);,


          budgetAmount: Number(budgetAmount || 0),budgetCurrency;
          budgetAmount: Number(budgetAmount || 0),
          budgetCurrency;
          supportingLinks: supportingLinks;
            .split('\n').map((s) => s && s.trim()).filter(Boolean)set_loading (false)}          budget_amount: Number (budget_amount || 0),budget_currency;
          supporting_links: supporting_links;
            .split ('\n').map ((s) => s.trim ()).filter (Boolean)pitchDeckUrl;
          region;sector: (sector as any) || undefined,submit})})const data = await resp && resp.json()if (!resp && resp.ok) throw new Error(data?.error || 'Failed')router && router.push(`/grants/${data && data.id}`)} catch (e: any) {setError(e && e.message)} finally {setLoading(false)}}
    }
 
}<textarea;
            className='mt-1 w-full border rounded p-2';
            .split ('\n');
            .map ((s) =    /> s.trim ());

            .filter (Boolean);
          pitchDeckUrl;
          region;



          sector: (sector as any) || undefined,;
          submit})});

const data = await resp && resp.json();
      if (!resp && resp.ok) throw new Error(data?.error || 'Failed');

      router && router.push(`/grants/${data && data.id}`);
    } catch (e: any) {;}
      setError(e && e.message);}
    } finally {;





          program
          projectName
          teamInfo
          proposalSummary
          timeline
          budgetAmount: Number(budgetAmount |0)
          budgetCurrency


            onClick={() =    /> save(true)}




    } catch (e) {


            .split('\n')
            .split(\n')



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


}





