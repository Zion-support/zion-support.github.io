
;
<<<<<<< HEAD

=======
import { useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { useRouter } from 'next/router';
import type { GrantCategory } from '../../types/grants';
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],
export default function ApplyGrantPage() {;}
}
import { useState  } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { useRouter  } from 'next/router';
import type { GrantCategory } from '../../types/grants';
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];
export default function ApplyGrantPage() {
  const router = null;
import { useState } from 'react';
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {useState} from 'react';

import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { useRouter   } from 'next/router';
import type { GrantCategory } from '../../types/grants';

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
const categories: GrantCategory[] = [;
  'Ecosystem Tools','Talent Development','Regional Expansion','Research Grants'
];


const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],export default function ApplyGrantPage() {import { useState   } from 'react';
  'Research Grants'
];


const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],export default function ApplyGrantPage() {'Research Grants'
];


const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],export default function ApplyGrantPage() {ursor/fix-website-loading-errors-and-merge-6662;

const categories: GrantCategory[] = [;
  'Ecosystem Tools';
  'Talent Development';
  'Regional Expansion';
  'Research Grants'
];


const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];

export default function ApplyGrantPage() {const router  = null;

export default function ApplyGrantPage() {const categories: GrantCategory[] = [;
  'Ecosystem Tools','Talent Development','Regional Expansion','Research Grants'];

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],export default function ApplyGrantPage() {const router = useRouter()const [program, setProgram] = useState<'grant' | 'incubator'>('grant')const [projectName, setProjectName] =;
  useState('');
  const [teamInfo, setTeamInfo] = useState('');
  const [proposalSummary, setProposalSummary] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budgetAmount, setBudgetAmount]  = useState<number    />(0;
  const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC';
  )const [supportingLinks, setSupportingLinks] = useState<string    />('')const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC')const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC';
  )const [supportingLinks, setSupportingLinks] = useState<string    />('')const [pitchDeckUrl, setPitchDeckUrl] = useState('');
  const [region, setRegion] = useState('');
  const [sector, setSector] = useState<string    />('')const [loading, setLoading] = useState(false);}
  const [error, setError]  = useState<string | null>(null)import EnhancedLayout from '../../components / layout / EnhancedLayout';}
import { use_router } from 'next / router';
import type { GrantCategory } from '../../types / grants';

const categories: GrantCategory[] = [;
  'Ecosystem Tools','Talent Development','Regional Expansion','Research Grants'
];


const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],export default /**;
 * ApplyGrantPage - Function description;
 */;
function ApplyGrantPage() {const router = use_router ()const [program, set_program] = useState<'grant' | 'incubator'>('grant')const [project_name, setProjectName] = useState ('')const [team_info, setTeamInfo] = useState ('')const [proposal_summary, setProposalSummary] = useState ('')const [timeline, set_timeline] = useState ('')const [budget_amount, setBudgetAmount] = useState < number>(0)const [budget_currency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC')const [supporting_links, setSupportingLinks] = useState < string>('')const [budget_currency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC')const [supporting_links, setSupportingLinks] = useState < string>('')const [pitchDeckUrl, setPitchDeckUrl] = useState ('')const [region, set_region] = useState ('')const [sector, set_sector] = useState < string>('')const [loading, set_loading] = useState (false)const [error, set_error]  =;
  useState < string | null>(null)const save = async (submit: boolean) => {try {set_loading (true)set_error (null);
  const resp = await fetch ('/api / grants', {method: 'POST'}
  headers: { 'Content - Type': 'application / json'}
},body: JSON.stringify ({program,project_name,team_info,proposal_summary,timeline,budget_amount: Number (budget_amount || 0),budget_currency,supporting_links: supporting_links;}
            .split ('\n').map (string => s.trim ()).filter (Boolean),pitchDeckUrl,region,sector: (sector as any) || undefined,submit;}
        })})const data = await resp.json ()if (throw new Error (data?.error || 'Failed')) {$2;}
}
<<<<<<< HEAD

      router.push (`/grants/${data.id}`)} catch (e: any) {set_error (e.message)} finally {} catch (e: any) {set_error (e.message}

=======
      router.push (`/grants/${data.id}`)} catch (e: any) {set_error (e.message);} finally {} catch (e: any) {set_error (e.message;}
>>>>>>> origin/cursor/delete-old-data-records-6bba
} finally {const save = async (submit: boolean) => {try {setLoading(true)setError(null);
  const resp = await fetch('/api/grants', {method: 'POST'}
  headers: { 'Content-Type': 'application/json'}
},body: JSON && JSON.stringify({program,projectName,teamInfo,proposalSummary,timeline,budgetAmount: Number(budgetAmount || 0),budgetCurrency,supportingLinks: supportingLinks;}
            .split('\n').map(s = > s && s.trim()).filter(Boolean),pitchDeckUrl,region,sector: (sector as any) || undefined,submit})};
  const data = await resp && resp.json()if (!resp && resp.ok) throw new Error(data?.error || 'Failed')router && router.push(`/grants/${data && data.id}`)} catch (e: any) {setError(e && e.message)} finally {setLoading(false}
}          budgetAmount: Number(budgetAmount || 0),program;
<<<<<<< HEAD

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







=======
  const resp = await fetch('/api/grants', {method: 'POST';}
  headers: { 'Content-Type': 'application/json';}
},body: JSON && JSON.stringify({program;,projectName,teamInfo,proposalSummary,timeline,budgetAmount: Number(budgetAmount || 0);,budgetCurrency,supportingLinks: supportingLinks;}
            .split('\n').map(s = > s && s.trim()).filter(Boolean),pitchDeckUrl,region,sector: (sector as any) || undefined;,submit})};
  const data = await resp && resp.json()if (!resp && resp.ok) throw new Error(data?.error || 'Failed')router && router.push(`/grants/${data && data.id}`)} catch (e: any) {setError(e && e.message);} finally {setLoading(false}
}          budgetAmount: Number(budgetAmount || 0);,program;

export default function ApplyGrantPage() {



import { useState  } from 'react';
import {useState} from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { useRouter  } from 'next/router';
import type { GrantCategory } from '../../types/grants';
ursor/fix-website-loading-errors-and-merge-6662
pr-12243
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];,
export default function ApplyGrantPage() {;}
}
import { useState  } from 'react';
import { useRouter  } from 'next/router';

const categories: GrantCategory[] = [
  'Ecosystem Tools'
  'Talent Development'
  'Regional Expansion'
  'Research Grants'
];const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants']


const categories: GrantCategory[] = [
  'Ecosystem Tools',
  'Talent Development',
  'Regional Expansion',
  'Research Grants'
];

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],
export default function ApplyGrantPage() {;}
}
import { useState  } from 'react';
import { useRouter  } from 'next/router';

const categories: GrantCategory[] = [
  'Ecosystem Tools'
  'Talent Development'
  'Regional Expansion'
  'Research Grants'
];

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants']
export default function ApplyGrantPage() {
const categories: GrantCategory[] = [;
  'Ecosystem Tools',;
  'Talent Development',;
  'Regional Expansion',;
  'Research Grants'
];


const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],;

export default function ApplyGrantPage() {;

const router = useRouter();

const [program, setProgram] = useState<'grant' | 'incubator'>('grant');

const [projectName, setProjectName] = useState('');

const [teamInfo, setTeamInfo] = useState('');

const [proposalSummary, setProposalSummary] = useState('');

const [timeline, setTimeline] = useState('');

const [budgetAmount, setBudgetAmount] = useState<number    />(0);

const [supportingLinks, setSupportingLinks] = useState<string    />('');

const [pitchDeckUrl, setPitchDeckUrl] = useState('');

const [region, setRegion] = useState('');

const [sector, setSector] = useState<string    />('');

const [loading, setLoading] = useState(false);

const [error, setError] = useState<string | null>(null);
}
import EnhancedLayout from '../../components / layout / EnhancedLayout';}
import {use_router} from 'next / router';
;

const categories: GrantCategory[] = [;
  'Ecosystem Tools',
  'Talent Development',
  'Regional Expansion',
  'Research Grants'
];

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],
export default /**
 * ApplyGrantPage - Function description;
 */
function ApplyGrantPage() {
  const router = use_router ();

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
          submit
        })
      });

const data = await resp.json ();
      if (throw new Error (data?.error || 'Failed')) {}
  $2}
}
      router.push (`/grants/${data.id}`);

    } catch (e: any) {
      set_error (e.message);
    } finally {


>>>>>>> origin/cursor/delete-old-data-records-6bba
  const save = async (submit: boolean) => {;
    try {;
      setLoading(true);
      setError(null),;
<<<<<<< HEAD


=======
      const resp = await fetch('/api/grants', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
      const resp = await fetch('/api/grants', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
>>>>>>> origin/cursor/delete-old-data-records-6bba

const resp = await fetch('/api/grants', {;
        method: 'POST',;}
        headers: { 'Content-Type': 'application/json'}
},;
        body: JSON && JSON.stringify({;
          program,;
          projectName,;
          teamInfo,;
          proposalSummary,;
          timeline,;
          budgetAmount: Number(budgetAmount || 0),;
          budgetCurrency,;
          supportingLinks: supportingLinks;
            .split('\n');
            .map(s => s && s.trim());
            .filter(Boolean),;
          pitchDeckUrl,;
          region,;
<<<<<<< HEAD


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

=======
          sector: (sector as any) || undefined,;
          submit,;
        }),;
      });
      const data = await resp && resp.json();

          sector: (sector as any) || undefined,;}
          sector: (sector as any) || undefined;,;}
          submit,;}
        }),;
      });

const data = await resp && resp.json();
      if (!resp && resp.ok) throw new Error(data?.error || 'Failed');
      router && router.push(`/grants/${data && data.id}`);
    } catch (e: any) {;}
      setError(e && e.message);}
    } finally {;}
      setLoading(false);    }          budgetAmount: Number(budgetAmount || 0),;
>>>>>>> origin/cursor/delete-old-data-records-6bba

          program;
          projectName;
          teamInfo;
          proposalSummary;
          timeline;
<<<<<<< HEAD

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


=======
          budgetAmount: Number(budgetAmount || 0),
          budgetCurrency;
          supportingLinks: supportingLinks
          budgetAmount: Number(budgetAmount || 0),
pr-12243



          budgetCurrency;
          supportingLinks: supportingLinks;'
            .split('\n');
            .map((s) => s && s.trim());
            .filter(Boolean);
      set_loading (false);    }          budget_amount: Number (budget_amount || 0),
          budget_currency;
          supporting_links: supporting_links;'
          budgetAmount: Number(budgetAmount || 0);,budgetCurrency;
          budgetAmount: Number(budgetAmount || 0);,
pr-12243
          budgetCurrency;
          supportingLinks: supportingLinks;
            .split('\n').map((s) => s && s.trim()).filter(Boolean)set_loading (false)}          budget_amount: Number (budget_amount || 0);,budget_currency;
          supporting_links: supporting_links;
            .split ('\n').map ((s) => s.trim ()).filter (Boolean)pitchDeckUrl;
          region;sector: (sector as any) || undefined;,submit})})const data = await resp && resp.json()if (!resp && resp.ok) throw new Error(data?.error || 'Failed')router && router.push(`/grants/${data && data.id}`)} catch (e: any) {setError(e && e.message);} finally {setLoading(false)}}
    }

}<textarea;
            className='mt-1 w-full border rounded p-2';
            .split ('\n');
            .map ((s) = /> s.trim ());
            .split ('\n');
            .map ((s) = /> s.trim ());
            .filter (Boolean);
          pitchDeckUrl;
          region;
          "sector": (sector as any) || undefined,;

>>>>>>> origin/cursor/delete-old-data-records-6bba
      setLoading(false);}
}
    }
    }
  }

          <textarea;
className='mt-1 w-full border rounded p-2'
            rows={3}
            value={teamInfo}
          <textarea;
            className='mt-1 w-full border rounded p-2';
            rows={6}
            value={proposalSummary}
            <input;
              type='number';
              className='mt-1 w-full border rounded p-2';
              value={budgetAmount}
          <textarea;
            className='mt-1 w-full border rounded p-2';
            rows={3}
<<<<<<< HEAD


=======
            value={supportingLinks}

        {error && <div className='text-sm text-red-600'>{error}</div>}
        <div className='flex gap-3'>
            value={supportingLinks}{error && <div className='text-sm text-red-600' />{error}</div>}
        <div className='flex gap-3' />;
            onChange={e => setSupportingLinks(e && e.target.value)}
          />;
        </label>;'
        <label className='text-sm'>;

    }
  }
  return (
            onChange={e => setPitchDeckUrl(e && e.target.value)}
          />;
        </label>;
        {error && <div className='text-sm text-red-600'>{error}</div>}
        <div className='flex gap-3'>;
          <button

            value={supportingLinks}{error && <div className='text-sm text-red-600'    />{error}</div>}
        <div className='flex gap-3'    />;
            onChange={e => setSupportingLinks(e && e.target.value)}
          />;
        </label>;
        <label className='text-sm'    />;
          Pitch Deck URL;
          <input;
            className='mt-1 w-full border rounded p-2';
            value={pitchDeckUrl}
          <button;
            disabled={loading}
            onClick={() =    /> save(false)}
            className='px-4 py-2 border rounded disabled:opacity-50'>
>>>>>>> origin/cursor/delete-old-data-records-6bba

            Save Draft;
          </button>;
          <button;
            disabled={loading}
<<<<<<< HEAD

          program
          projectName
          teamInfo
          proposalSummary
          timeline
          budgetAmount: Number(budgetAmount |0)
          budgetCurrency

=======
            onClick={() => save(true)}


            Submit for Review;
          </button>        </div>;
      </div>;
    </EnhancedLayout>;
  )<EnhancedLayout />;
      <h1 className=\"text-2xl font-semibold mb-4\" />Apply for Zion {program === 'incubator' ? 'Incubator' : 'Grant'}</h1>;"
      <div className=\"grid gap-4 max-w-3xl\" />;"
        <div className=\"grid md:grid-cols-2 gap-3\" />;"
          <label className=\"text-sm\" />Program;"
            <select className=\"mt-1 w-full border rounded p-2\" value={program} onChange={(e) = /> setProgram(e.target.value as any)}>;

const _save = async (_submit: boolean) => {try {setLoading(true);,setError(null);
  const resp = await fetch('/api/grants', {method: 'POST';}
  headers: { 'Content-Type': 'application/json';}
},body: JSON.stringify({program;,projectName,teamInfo,proposalSummary,timeline,budgetAmount: Number(budgetAmount || 0);,budgetCurrency,supportingLinks: supportingLinks;}
            .split('\n').map((s) => s.trim()).filter(Boolean),pitchDeckUrl,region,sector: (sector as any) || undefined;,submit})}),const data = await resp.json()if (!resp.ok) throw new Error(data?.error || 'Failed'),const save = async (submit: boolean) => {try {setLoading(true)setError(null;
  const resp = await fetch('/api/grants', {method: 'POST';}
        headers: { 'Content-Type': 'application/json';}
}
        body: JSON.stringify({program;,projectName,teamInfo,proposalSummary,timeline,budgetAmount: Number(budgetAmount || 0);,budgetCurrency,supportingLinks: supportingLinks;
            .split('\n').map(s => s.trim()).filter(Boolean)pitchDeckUrl;
          region;
          sector: (sector as any) |undefined;}
          submit;}
        })})const data = await resp.json()if (!resp.ok) throw new Error(data?.error |'Failed')router.push(`/grants/${data.id}`)} catch (e: any) {setError(e.message)} finally {setLoading(false)}

};
  return (<EnhancedLayout />;
<h1 className='text-2xl font-semibold mb-4' />;
        body: JSON.stringify({
          program;
projectName,
teamInfo;
proposalSummary,
timeline;
budgetAmount: Number(budgetAmount |0)
          budgetCurrency;
supportingLinks: supportingLinks;
            .split('\n')
            .map(s => s.trim())
            .filter(Boolean)
          pitchDeckUrl;
region,
sector: (sector as any) |undefined;}
submit}
        })

});

const data = await resp.json();
      if (!resp.ok) throw new Error(data?.error |'Failed');
      router.push(`/grants/${data.id}`);
    } catch (e: any) {;}
      setError(e.message);}
    } finally {}
      setLoading(false);    }          budgetAmount: Number(budgetAmount |0)
          budgetCurrency;
          supportingLinks: supportingLinks;
            .split('\n')
            .map((s) => s.trim())
            .filter(Boolean);
          pitchDeckUrl;
          region;
          sector: (sector as any) || undefined,
          submit})});
      const data = await resp.json();
      if (!resp.ok) throw new Error(data?.error || 'Failed');
      router.push(`/grants/${data.id}`)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }

};

        {error && <div className='text-sm text-red-600'>{error}</div>}
        <div className='flex gap-3'>
            onChange={e => setSupportingLinks(e && e.target.value)}
          />;
        </label>;
        <label className='text-sm'>;
          Pitch Deck URL;

            className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50';
          >;
            Submit for Review;
          </button>        </div>;
      </div>;
    </EnhancedLayout>;
  );
    <EnhancedLayout>
      <h1 className="text-2xl font-semibold mb-4">Apply for Zion {program === 'incubator' ? 'Incubator' : 'Grant'}</h1>
      <div className="grid gap-4 max-w-3xl">
        <div className="grid md:grid-cols-2 gap-3">
          <label className="text-sm">Program
            <select className="mt-1 w-full border rounded p-2" value={program} onChange={(e) => setProgram(e.target.value as any)}>

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
program,
          projectName,
          teamInfo,
          proposalSummary,
          timeline,
          budgetAmount: Number(budgetAmount || 0),
          budgetCurrency,
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

            onClick={() =    /> save(true)}

=======
      setLoading(false);
    }
  }

  };

origin/cursor/automate-test-improve-and-merge-code-2533
            className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50';
          >;
            onClick={() = /> save(true)}
>>>>>>> origin/cursor/delete-old-data-records-6bba
            className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'>

            Submit for Review;
          </button>        </div>;
      </div>;
    </EnhancedLayout>;
<<<<<<< HEAD

=======
  )<EnhancedLayout />;
      <h1 className=\"text-2xl font-semibold mb-4\ />Apply for Zion {program === incubator' ? 'Incubator : Grant'}</h1>;
      <div className=\"grid gap-4 max-w-3xl\" />;
        <div className=\grid md:grid-cols-2 gap-3\" />;"
          <label className=\text-sm\ />Program;"
            <select className=\"mt-1 w-full border rounded p-2\ value={program} onChange={(e) = /> setProgram(e.target.value as any)}>;

const _save = async (_submit: boolean) => {try {setLoading(true);,setError(null);
  headers: { 'Content-Type: application/json';}
},body: JSON.stringify({program;,projectName,teamInfo,proposalSummary,timeline,budgetAmount: Number(budgetAmount || 0);,budgetCurrency,supportingLinks: supportingLinks;}
            .split('\n).map((s) => s.trim()).filter(Boolean),pitchDeckUrl,region,sector: (sector as any) || undefined;,submit})}),const data = await resp.json()if (!resp.ok) throw new Error(data?.error || Failed'),const save = async (submit: boolean) => {try {setLoading(true)setError(null;
        headers: { 'Content-Type: application/json';}
}
        body: JSON.stringify({program;,projectName,teamInfo,proposalSummary,timeline,budgetAmount: Number(budgetAmount || 0);,budgetCurrency,supportingLinks: supportingLinks;
            .split('\n).map(s => s.trim()).filter(Boolean)pitchDeckUrl;
          region;
          sector: (sector as any) |undefined;}
          submit;}
        })})const data = await resp.json()if (!resp.ok) throw new Error(data?.error |Failed')router.push(`/grants/${data.id}`)} catch (e: any) {setError(e.message)} finally {setLoading(false)}

}
  return (<EnhancedLayout />;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  )<EnhancedLayout    />;
      <h1 className=\"text-2xl font-semibold mb-4\"    />Apply for Zion {program === 'incubator' ? 'Incubator' : 'Grant'}</h1>;"
      <div className=\"grid gap-4 max-w-3xl\"    />;"
        <div className=\"grid md:grid-cols-2 gap-3\"    />;"
          <label className=\"text-sm\"    />Program;"
            <select className=\"mt-1 w-full border rounded p-2\" value={program} onChange={(e) =    /> setProgram(e.target.value as any)}>;

const _save = async (_submit: boolean) => {try {setLoading(true),setError(null);
  const resp = await fetch('/api/grants', {method: 'POST'}
  headers: { 'Content-Type': 'application/json'}
},body: JSON.stringify({program,projectName,teamInfo,proposalSummary,timeline,budgetAmount: Number(budgetAmount || 0),budgetCurrency,supportingLinks: supportingLinks;}
            .split('\n').map((s) => s.trim()).filter(Boolean),pitchDeckUrl,region,sector: (sector as any) || undefined,submit})}),const data = await resp.json()if (!resp.ok) throw new Error(data?.error || 'Failed'),const save = async (submit: boolean) => {try {setLoading(true)setError(null;
  const resp = await fetch('/api/grants', {method: 'POST';}
        headers: { 'Content-Type': 'application/json'}
}
        body: JSON.stringify({program,projectName,teamInfo,proposalSummary,timeline,budgetAmount: Number(budgetAmount || 0),budgetCurrency,supportingLinks: supportingLinks;
            .split('\n').map(s => s.trim()).filter(Boolean)pitchDeckUrl;
          region;
          sector: (sector as any) |undefined;}
          submit;}
        })})const data = await resp.json()if (!resp.ok) throw new Error(data?.error |'Failed')router.push(`/grants/${data.id}`)} catch (e: any) {setError(e.message)} finally {setLoading(false)}
 
};
  return (<EnhancedLayout    />;
<h1 className='text-2xl font-semibold mb-4'    />;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        body: JSON.stringify({
          program;
projectName,
teamInfo;
proposalSummary,
timeline;
budgetAmount: Number(budgetAmount |0)
          budgetCurrency;
supportingLinks: supportingLinks;
            .split(\n')
            .map(s => s.trim())
            .filter(Boolean)
          pitchDeckUrl;
region,
sector: (sector as any) |undefined;}
submit}
        })
     
});

const data = await resp.json();
      if (!resp.ok) throw new Error(data?.error |'Failed);
      router.push(`/grants/${data.id}`);
<<<<<<< HEAD

    } catch (e) {

=======
    } catch (e: any) {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setError(e.message);}
    } finally {}
      setLoading(false);    }          budgetAmount: Number(budgetAmount |0)
          budgetCurrency;
          supportingLinks: supportingLinks;
<<<<<<< HEAD

            .split('\n')
            .split(\n')

=======
            .split('\n')
            .split(\n')
      setLoading(false);    }          budgetAmount: Number(budgetAmount |0)
          budgetCurrency;
          supportingLinks: supportingLinks
            .split('\n')
>>>>>>> origin/cursor/delete-old-data-records-6bba
            .map((s) => s.trim())
            .filter(Boolean);
          pitchDeckUrl;
          region;

          sector: (sector as any) |undefined
          submit})});
      const data = await resp.json();
      if (!resp.ok) throw new Error(data?.error |'Failed');
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      router.push(`/grants/${data.id}`)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
<<<<<<< HEAD
=======
    }
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
        {error && <div className='text-sm text-red-600'>{error}</div>}
        <div className='flex gap-3'>
            onChange={e => setSupportingLinks(e && e.target.value)}
          />;
        </label>;
        <label className='text-sm'>;
          Pitch Deck URL;

            className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50';
          >;
            Submit for Review;
          </button>        </div>;
      </div>;
    </EnhancedLayout>;
  )<EnhancedLayout>;
      <h1 className='text-2xl font-semibold mb-4'>Apply for Zion {program === 'incubator' ? 'Incubator' : 'Grant'}</h1>;'
      <div className='grid gap-4 max-w-3xl'>;'
        <div className='grid 'md':grid-cols-2 gap-3'>;'
          <label className='text-sm'>Program;'
            <select className='mt-1 w-full border rounded p-2' value={program} onChange={(e) => setProgram(e.target.value as any)}>;'

const _save = async ('_submit': boolean) => {try {setLoading(true),setError(null);
}
const resp = await fetch('/api/grants', {'method': 'POST','headers': { 'Content-Type': 'application/json',;'
},'body': JSON.stringify({program,projectName,teamInfo,proposalSummary,timeline,'budgetAmount': Number(budgetAmount || 0),budgetCurrency,'supportingLinks': supportingLinks;
            .split('\n').map((s) => s.trim()).filter(Boolean),pitchDeckUrl,region,'sector': (sector as any) || undefined,submit})}),const data = await resp.json()if (!resp.ok) throw new Error(data?.error || 'Failed'),const save = async ('submit': boolean) => {try {setLoading(true)setError(null;'
  }
  const resp = await fetch('/api/grants', {'method': 'POST';'
        }
        'headers': { 'Content-Type': 'application/json','
}
        'body': JSON.stringify({program,projectName,teamInfo,proposalSummary,timeline,'budgetAmount': Number(budgetAmount || 0),budgetCurrency,'supportingLinks': supportingLinks;
            .split('\n').map(s => { return s.trim()).filter(Boolean)pitchDeckUrl; }'
          }
          region;
          'sector': (sector as any) |undefined;
          submit;
        })})const data = await resp.json()if (!resp.ok) throw new Error(data?.error |'Failed')router.push(`/grants/${data.id}`)} catch ('e': any) {setError(e.message)} finally {setLoading(false)}` 
};
  return (<EnhancedLayout>;
<h1 className='text-2xl font-semibold mb-4'>;'
        'body': JSON.stringify({
          }
          program,
projectName
          teamInfo,
proposalSummary
          timeline,
'budgetAmount': Number(budgetAmount |0)
          budgetCurrency,
'supportingLinks': supportingLinks
            .split('\n')'
            .map(s => { return s.trim())
            .filter(Boolean)
          pitchDeckUrl
          region
          sector: (sector as any) |undefined
          submit
        })
     
}); }

const data = await resp.json();
      if (!resp.ok) throw new Error(data?.error |'Failed');'
      router.push(`/grants/${data.id}`);`    } catch ('e': any) {
      }
      setError(e.message);
    } finally {
      setLoading(false);    }          budgetAmount: Number(budgetAmount |0)
          budgetCurrency;
          'supportingLinks': supportingLinks
            .split('\n')'
            .map((s) => s.trim())
            .filter(Boolean);
          pitchDeckUrl;
          region;

      setError(e.message)
    } finally {
      }
      setLoading(false)
          sector: (sector as any) |undefined;
submit}
});

const data = await resp.json();
      if (!resp.ok) throw new Error(data?.error |'Failed');
      router.push(`/grants/${data.id}`)
    } catch (e) {
      setError(e.message)}
    } finally {}
      setLoading(false)}
    }
  }
  }

>>>>>>> origin/cursor/delete-old-data-records-6bba
  };

  return (
    <EnhancedLayout>
<<<<<<< HEAD

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
              onChange={e => setProgram(e.target.value as any)}><option value='grant'>Grant</option>
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

=======
      <h1 className="text-2xl font-semibold mb-4">Apply for Zion {program === 'incubator' ? 'Incubator' : 'Grant'}</h1>
      <div className="grid gap-4 max-w-3xl">
        <div className="grid md:grid-cols-2 gap-3">
          <label className="text-sm">Program
            <select className="mt-1 w-full border rounded p-2" value={program} onChange={(e) => setProgram(e.target.value as any)}>
              <option value="grant">Grant</option>
              <option value="incubator">Incubator</option>
            </select>
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
    }


  };


  return (




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
<<<<<<< HEAD

}

=======
  );
}            </select>
          </label>
          <label className='text-sm'>Sector
            <select className='mt-1 w-full border rounded p-2' value={sector} onChange={(e) => setSector(e.target.value)}>
              <option value=''>Select sector</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>
        </div>
        <label className='text-sm'>Project Name
          <input className='mt-1 w-full border rounded p-2' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        </label>
        <label className='text-sm'>Team Info
          <textarea className='mt-1 w-full border rounded p-2' rows={3} value={teamInfo} onChange={(e) => setTeamInfo(e.target.value)} />
        </label>
        <label className='text-sm'>Proposal Summary
          <textarea className='mt-1 w-full border rounded p-2' rows={6} value={proposalSummary} onChange={(e) => setProposalSummary(e.target.value)} />
        </label>
        <label className='text-sm'>Timeline
          <input className='mt-1 w-full border rounded p-2' value={timeline} onChange={(e) => setTimeline(e.target.value)} />
        </label>
        <div className='grid md:grid-cols-3 gap-3'>
          <label className='text-sm'>Budget Amount
            <input type='number' className='mt-1 w-full border rounded p-2' value={budgetAmount} onChange={(e) => setBudgetAmount(Number(e.target.value))} />
          </label>
          <label className='text-sm'>Currency
            <select className='mt-1 w-full border rounded p-2' value={budgetCurrency} onChange={(e) => setBudgetCurrency(e.target.value as any)}>
              <option value='USDC'>USDC</option>
              <option value='ZION$'>ZION$</option>
            </select>
          </label>
          <label className='text-sm'>Region
            <input className='mt-1 w-full border rounded p-2' value={region} onChange={(e) => setRegion(e.target.value)} placeholder='e.g., LATAM, EU, Global' />
          </label>
        </div>
        <label className='text-sm'>Supporting Links (one per line)
          <textarea className='mt-1 w-full border rounded p-2' rows={3} value={supportingLinks} onChange={(e) => setSupportingLinks(e.target.value)} />
        </label>
        <label className='text-sm'>Pitch Deck URL
          <input className='mt-1 w-full border rounded p-2' value={pitchDeckUrl} onChange={(e) => setPitchDeckUrl(e.target.value)} />
        </label>

        {error && <div className="text-sm text-red-600">{error}</div>}

        <div className="flex gap-3">
          <button disabled={loading} onClick={() => save(false)} className="px-4 py-2 border rounded disabled:opacity-50">Save Draft</button>
          <button disabled={loading} onClick={() => save(true)} className="px-4 py-2 bg-blue-600 text-white rounded disabled: opacity-50">Submit for Review</button>
        </div>
      </div>
    </EnhancedLayout>

  return (
    <EnhancedLayout    />
      <h1 className='text-2xl font-semibold mb-4'    />
        Apply for Zion {program === 'incubator' ? 'Incubator' : 'Grant'}
      </h1>;
      <div className='grid gap-4 max-w-3xl'    />;
        <div className='grid md:grid-cols-2 gap-3'    />;
          <label className='text-sm'    />;
            Program;
            <select;
              className='mt-1 w-full border rounded p-2';
              value={program}
              onChange={e =    /> setProgram(e.target.value as any)}
            >;
              <option value='grant'    />Grant</option>;
              <option value='incubator'    />Incubator</option>;
            </select>;
          </label>;
          <label className='text-sm'    />;
            Sector;
            <select;
              className='mt-1 w-full border rounded p-2';
              value={sector}
              onChange={e =    /> setSector(e.target.value)}
            >;
              <option value=''    />Select sector</option>;
              {categories.map(c => (<option key={c} value={c}    />;
                  {c}
                </option>;
              ))}
            </select>;
          </label>;
        </div>;
        <label className='text-sm'    />;
          Project Name;
          <input;
            className='mt-1 w-full border rounded p-2';
            value={projectName}
            onChange={e =    /> setProjectName(e.target.value)}
          />;
        </label>;
        <label className='text-sm'    />;
          Team Info;
          <textarea;
            className='mt-1 w-full border rounded p-2';
            rows={3}
            value={teamInfo}
            onChange={e =    /> setTeamInfo(e.target.value)}
          />;
        </label>;
        <label className='text-sm'    />;
          Proposal Summary;
          <textarea;
            className='mt-1 w-full border rounded p-2';
            rows={6}
            value={proposalSummary}
            onChange={e =    /> setProposalSummary(e.target.value)}
          />;
        </label>;

            value={timeline}
            onChange={e =    /> setTimeline(e.target.value)}
          />;
        </label>;

              value={budgetAmount}
              onChange={e =    /> setBudgetAmount(Number(e.target.value))}
            />;
          </label>;

            rows={3}
            value={supportingLinks}
            onChange={e =    /> setSupportingLinks(e.target.value)}
          />;
        </label>;

            value={pitchDeckUrl}
            onChange={e =    /> setPitchDeckUrl(e.target.value)}
          />;
        </label>;
  }

        </label>



);

  );


    }}return ({error && <div className='text-sm text-red-600'    />{error}</div>}
        <div className='flex gap-3'    />;
          <button;
             />
        </label>
  }
    }


  };


  return (


        {error && <div className='text-sm text-red-600'    />{error}</div>}
        <div className='flex gap-3'    />
          <button;
disabled={loading}
            onClick={() =    /> save(false)}
            className='px-4 py-2 border rounded disabled:opacity-50'>

            Save Draft;
          </button>;
          <button;
            disabled={loading}
            onClick={() => save(true)}
            className='px-4 py-2 bg-blue-600 text-white rounded 'disabled':opacity-50'>'


            onClick={() =    /> save(true)}
            className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'>

            Submit for Review;
          </button>        </div>;
      </div>;
    </EnhancedLayout>;
  )</button>;
        </div>;
      </div>;
    </EnhancedLayout>;"
  )<option value=\"USDC\"    />USDC</option>;
            className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'
          >
            Submit for Review;
          </button>        </div>
      </div>
    </EnhancedLayout>
  );

"
              <option value=\"USDC\"    />USDC</option>;"
              <option value=\"ZION$\"    />ZION$</option>;
            </select>;
          </label>;"
          <label className=\"text-sm\"    />Region;"
            <input className=\"mt-1 w-full border rounded p-2\" value={region} onChange={(e) =    /> setRegion(e && e.target.value)} placeholder=\"e && e.g., LATAM, EU, Global\" />;
          </label>;

        </div>;"
        <label className=\"text-sm\"    />Supporting Links (one per line)<textarea className=\"mt-1 w-full border rounded p-2\" rows={3} value={supportingLinks} onChange={(e) =    /> setSupportingLinks(e && e.target.value)} />;
        </label>;"
        <label className=\"text-sm\"    />Pitch Deck URL;"
          <input className=\"mt-1 w-full border rounded p-2\" value={pitchDeckUrl} onChange={(e) =    /> setPitchDeckUrl(e && e.target.value)} />;
        </label>;))ursor/fix-website-loading-errors-and-merge-6662;
  )}            </select>;
          </label>;"
          <label className=\"text-sm\"    />Sector;"
            <select className=\"mt-1 w-full border rounded p-2\" value={sector} onChange={(e) =    /> setSector(e.target.value)}>;"
              <option value=\"\"    />Select sector</option>;
        </label>;


  );

  );
}            </select>
          </label>"
          <label className=\"text-sm\"    />Sector;"
            <select className=\"mt-1 w-full border rounded p-2\" value={sector} onChange={(e) =    /> setSector(e.target.value)}>"
              <option value=\"\"    />Select sector</option>
              {categories.map((c) => <option key={c} value={c}    />{c}</option>)}
            </select>;
          </label>;
        </div>;"
        <label className=\"text-sm\"    />Project Name;"
          <input className=\"mt-1 w-full border rounded p-2\" value={projectName} onChange={(e) =    /> setProjectName(e.target.value)} />;
        </label>;"
        <label className=\"text-sm\"    />Team Info;"
          <textarea className=\"mt-1 w-full border rounded p-2\" rows={3} value={teamInfo} onChange={(e) =    /> setTeamInfo(e.target.value)} />;
        </label>;"
        <label className=\"text-sm\"    />Proposal Summary;"
          <textarea className=\"mt-1 w-full border rounded p-2\" rows={6} value={proposalSummary} onChange={(e) =    /> setProposalSummary(e.target.value)} />;
        </label>;"
        <label className=\"text-sm\"    />Timeline;"
          <input className=\"mt-1 w-full border rounded p-2\" value={timeline} onChange={(e) =    /> setTimeline(e.target.value)} />;
        </label>;"
        <div className=\"grid md:grid-cols-3 gap-3\"    />;"
          <label className=\"text-sm\"    />Budget Amount;"
            <input type=\"number\" className=\"mt-1 w-full border rounded p-2\" value={budgetAmount} onChange={(e) =    /> setBudgetAmount(Number(e.target.value))} />;
          </label>;"
          <label className=\"text-sm\"    />Currency;"
            <select className=\"mt-1 w-full border rounded p-2\" value={budgetCurrency} onChange={(e) =    /> setBudgetCurrency(e.target.value as any)}>;"
              <option value=\"USDC\"    />USDC</option>;"
              <option value=\"ZION$\"    />ZION$</option>;
            </select>;
          </label>;"
          <label className=\"text-sm\"    />Region;"
            <input className=\"mt-1 w-full border rounded p-2\" value={region} onChange={(e) =    /> setRegion(e.target.value)} placeholder=\"e.g., LATAM, EU, Global\" />;
          </label>;
        </div>;"
        <label className=\"text-sm\"    />Supporting Links (one per line)<textarea className=\"mt-1 w-full border rounded p-2\" rows={3} value={supportingLinks} onChange={(e) =    /> setSupportingLinks(e.target.value)} />;
        </label>;"
        <label className=\"text-sm\"    />Pitch Deck URL;"
          <input className=\"mt-1 w-full border rounded p-2\" value={pitchDeckUrl} onChange={(e) =    /> setPitchDeckUrl(e.target.value)} />;
        </label>;"
        {error && <div className=\"text-sm text-red-600\"    />{error}</div>}"
        <div className=\"flex gap-3\"    />;"
          <button disabled={loading} onClick={() =    /> save(false)} className=\"px-4 py-2 border rounded disabled:opacity-50\">Save Draft</button>;"
          <button disabled={loading} onClick={() =    /> save(true)} className=\"px-4 py-2 bg-blue-600 text-white rounded disabled: opacity-50\">Submit for Review</button>;
        </div>;
      </div>;
    </EnhancedLayout>;
}))}
  )}
  )}
}
  )}
}



  }


>>>>>>> origin/cursor/delete-old-data-records-6bba
  );

);
}
  );

<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
