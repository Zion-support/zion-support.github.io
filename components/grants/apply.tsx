<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react';
=======
<<<<<<< HEAD





import {useState} from 'react';



=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
pr-12243

import {useState} from 'react';

pr-12243
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { useRouter  } from 'next/router';
=======
=======

pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

import {useState} from 'react';

<<<<<<< HEAD

'
import EnhancedLayout from '../../components/layout/EnhancedLayout';'
import { useRouter  } from 'next/router';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import type { GrantCategory } from '../../types/grants';
<<<<<<< HEAD

const categories: GrantCategory[] = ['
  'Ecosystem Tools','
  'Talent Development','
  'Regional Expansion','
  'Research Grants','
];const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],
<<<<<<< HEAD
export default function ApplyGrantPage() {;

ursor/fix-website-loading-errors-and-merge-6662
pr-12243
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

;
import { useState } from 'react';


<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { useRouter   } from 'next/router';
import type { GrantCategory } from '../../types/grants';
import {useState} from 'react';

<<<<<<< HEAD
>>>>>>> origin/main
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { useRouter } from 'next/router';
import type { GrantCategory } from '../../types/grants';
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],
=======
const categories: GrantCategory[] = [;
  'Ecosystem Tools','Talent Development','Regional Expansion','Research Grants'
];

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];,export default function ApplyGrantPage() {import { useState   } from 'react';
  'Research Grants'
];

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];,export default function ApplyGrantPage() {'Research Grants'
];

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];,export default function ApplyGrantPage() {ursor/fix-website-loading-errors-and-merge-6662;

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

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];,export default function ApplyGrantPage() {const router = useRouter()const [program, setProgram] = useState<'grant' | 'incubator'>('grant')const [projectName, setProjectName] =;
  useState('');
  const [teamInfo, setTeamInfo] = useState('');
  const [proposalSummary, setProposalSummary] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budgetAmount, setBudgetAmount]  = useState<number />(0;
  const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC';
  )const [supportingLinks, setSupportingLinks] = useState<string />('')const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC')const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC';
  )const [supportingLinks, setSupportingLinks] = useState<string />('')const [pitchDeckUrl, setPitchDeckUrl] = useState('');
  const [region, setRegion] = useState('');
  const [sector, setSector] = useState<string />('')const [loading, setLoading] = useState(false);}
  const [error, setError]  = useState<string | null />(null)import EnhancedLayout from '../../components / layout / EnhancedLayout';}
import { use_router } from 'next / router';
import type { GrantCategory } from '../../types / grants';

const categories: GrantCategory[] = [;
  'Ecosystem Tools','Talent Development','Regional Expansion','Research Grants'
];

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];,export default /**;
 * ApplyGrantPage - Function description;
 */;
function ApplyGrantPage() {const router = use_router ()const [program, set_program] = useState<'grant' | 'incubator'>('grant')const [project_name, setProjectName] = useState ('')const [team_info, setTeamInfo] = useState ('')const [proposal_summary, setProposalSummary] = useState ('')const [timeline, set_timeline] = useState ('')const [budget_amount, setBudgetAmount] = useState < number>(0)const [budget_currency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC')const [supporting_links, setSupportingLinks] = useState < string>('')const [budget_currency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC')const [supporting_links, setSupportingLinks] = useState < string>('')const [pitchDeckUrl, setPitchDeckUrl] = useState ('')const [region, set_region] = useState ('')const [sector, set_sector] = useState < string>('')const [loading, set_loading] = useState (false)const [error, set_error]  =;
  useState < string | null>(null)const save = async (submit: boolean) => {try {set_loading (true)set_error (null);
  const resp = await fetch ('/api / grants', {method: 'POST';}
  headers: { 'Content - Type': 'application / json';}
},body: JSON.stringify ({program;,project_name,team_info,proposal_summary,timeline,budget_amount: Number (budget_amount || 0);,budget_currency,supporting_links: supporting_links;}
            .split ('\n').map (string => s.trim ()).filter (Boolean),pitchDeckUrl,region,sector: (sector as any) || undefined;,submit;}
        })})const data = await resp.json ()if (throw new Error (data?.error || 'Failed')) {$2;}
}
      router.push (`/grants/${data.id}`)} catch (e: any) {set_error (e.message);} finally {} catch (e: any) {set_error (e.message;}
} finally {const save = async (submit: boolean) => {try {setLoading(true)setError(null);
<<<<<<< HEAD
  const resp = await fetch('/api/grants', {method: 'POST'}
  headers: { 'Content-Type': 'application/json'}
},body: JSON && JSON.stringify({program,projectName,teamInfo,proposalSummary,timeline,budgetAmount: Number(budgetAmount || 0),budgetCurrency,supportingLinks: supportingLinks;}
            .split('\n').map(s = > s && s.trim()).filter(Boolean),pitchDeckUrl,region,sector: (sector as any) || undefined,submit})};
  const data = await resp && resp.json()if (!resp && resp.ok) throw new Error(data?.error || 'Failed')router && router.push(`/grants/${data && data.id}`)} catch (e: any) {setError(e && e.message)} finally {setLoading(false}
}          budgetAmount: Number(budgetAmount || 0),program;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
  const resp = await fetch('/api/grants', {method: 'POST';}
  headers: { 'Content-Type': 'application/json';}
},body: JSON && JSON.stringify({program;,projectName,teamInfo,proposalSummary,timeline,budgetAmount: Number(budgetAmount || 0);,budgetCurrency,supportingLinks: supportingLinks;}
            .split('\n').map(s = > s && s.trim()).filter(Boolean),pitchDeckUrl,region,sector: (sector as any) || undefined;,submit})};
  const data = await resp && resp.json()if (!resp && resp.ok) throw new Error(data?.error || 'Failed')router && router.push(`/grants/${data && data.id}`)} catch (e: any) {setError(e && e.message);} finally {setLoading(false}
}          budgetAmount: Number(budgetAmount || 0);,program;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

<<<<<<< HEAD
export default function ApplyGrantPage() {
=======
const categories: GrantCategory[] = [
  'Ecosystem Tools',
  'Talent Development',
  'Regional Expansion',
  'Research Grants',
];const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],
export default function ApplyGrantPage() {;

<<<<<<< HEAD



<<<<<<< HEAD
=======
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],
export default function ApplyGrantPage() {;}
}
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import { useState  } from 'react';
import {useState} from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { useRouter  } from 'next/router';
import type { GrantCategory } from '../../types/grants';
=======
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
ursor/fix-website-loading-errors-and-merge-6662
pr-12243
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];,
export default function ApplyGrantPage() {;}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import { useState  } from 'react';
import { useRouter  } from 'next/router';

const categories: GrantCategory[] = [
  'Ecosystem Tools'
  'Talent Development'
  'Regional Expansion'
  'Research Grants'
];const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants']
<<<<<<< HEAD
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];
export default function ApplyGrantPage() {
  const router = null;


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];
export default function ApplyGrantPage() {
  const router = null;
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD



const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];
export default function ApplyGrantPage() {
  const router = null;

=======
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
];

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants']
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export default function ApplyGrantPage() {
const categories: GrantCategory[] = [;
  'Ecosystem Tools',;
  'Talent Development',;
  'Regional Expansion',;
<<<<<<< HEAD
  'Research Grants',;
];const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],;
=======
  'Research Grants'
];

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];,;

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export default function ApplyGrantPage() {;
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======
<<<<<<< HEAD


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const router = useRouter();
  const [program, setProgram] = useState<'grant' | 'incubator'>('grant');
  const [projectName, setProjectName] = useState('');
  const [teamInfo, setTeamInfo] = useState('');
  const [proposalSummary, setProposalSummary] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budgetAmount, setBudgetAmount] = useState<number>(0);
<<<<<<< HEAD
<<<<<<< HEAD
=======

const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>(
    'USDC'
  );  const [supportingLinks, setSupportingLinks] = useState<string>('');  const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC');
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>(
    'USDC'
  );  const [supportingLinks, setSupportingLinks] = useState<string>('');  const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC');


  const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>(
    'USDC'
  );  const [supportingLinks, setSupportingLinks] = useState<string>('');  const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC');
const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>(
    'USDC'
  );
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======
=======


>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const [supportingLinks, setSupportingLinks] = useState<string>('');
  const [pitchDeckUrl, setPitchDeckUrl] = useState('');
  const [region, setRegion] = useState('');
  const [sector, setSector] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

<<<<<<< HEAD
=======
const router = useRouter();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4




>>>>>>> origin/main
  const router = useRouter();
  const [program, setProgram] = useState<'grant' | 'incubator'>('grant');
  const [projectName, setProjectName] = useState('');
  const [teamInfo, setTeamInfo] = useState('');
  const [proposalSummary, setProposalSummary] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budgetAmount, setBudgetAmount] = useState<number>(0);
<<<<<<< HEAD
  const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC');
=======


  const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>(
    'USDC'
  );  const [supportingLinks, setSupportingLinks] = useState<string>('');  const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>('USDC');





const [budgetCurrency, setBudgetCurrency] = useState<'ZION$' | 'USDC'>(
    'USDC'
  );


origin/cursor/automate-test-improve-and-merge-code-2533




>>>>>>> origin/main
  const [supportingLinks, setSupportingLinks] = useState<string>('');
  const [pitchDeckUrl, setPitchDeckUrl] = useState('');
  const [region, setRegion] = useState('');
  const [sector, setSector] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

<<<<<<< HEAD
  const save = async (submit: boolean) => {
    try {
      setLoading(true);
      setError(null);
      const resp = await fetch('/api/grants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
=======


import EnhancedLayout from '../../components / layout / EnhancedLayout';
import {use_router} from 'next / router';
;
const categories: GrantCategory[] = [;
  'Ecosystem Tools',
  'Talent Development',
  'Regional Expansion',
  'Research Grants'
<<<<<<< HEAD
];const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],
=======
];

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];,
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
<<<<<<< HEAD
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
=======
        method: 'POST';}
  headers: { 'Content - Type': 'application / json';}
},
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        body: JSON.stringify ({
          program,
          project_name,
          team_info,
          proposal_summary,
          timeline,
          budget_amount: Number (budget_amount || 0);,
          budget_currency,
          supporting_links: supporting_links;
            .split ('\n');
            .map (string => s.trim ());
            .filter (Boolean),
          pitchDeckUrl,
          region,
<<<<<<< HEAD
          sector: (sector as any) || undefined,
          submit
=======
          sector: (sector as any) || undefined;}
          submit}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        })
      });
      const data = await resp.json ();
      if (throw new Error (data?.error || 'Failed')) {
  $2
}
      router.push (`/grants/${data.id}`);

<<<<<<< HEAD
    } catch (e: any) {
      set_error (e.message);
    } finally {


=======
<<<<<<< HEAD
pr-12243
    } catch (e: any) {
      set_error (e.message);
    } finally {
<<<<<<< HEAD
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    } catch (e: any) {
      set_error (e.message);
    } finally {

<<<<<<< HEAD
=======

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

} catch (e: any) {
      set_error (e.message);
    } finally {
    } catch (e: any) {;}
      set_error (e.message);}
    } finally {

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  const save = async (submit: boolean) => {;
    try {;
      setLoading(true);
      setError(null),;
<<<<<<< HEAD
      const resp = await fetch('/api/grants', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
=======
<<<<<<< HEAD
      const resp = await fetch('/api/grants', {;
        method: 'POST',;
=======
export default function ApplyGrantPage() { return null; }
export default function ApplyGrantPage() {};
const categories: GrantCategory[] = [;'
  'Ecosystem Tools',;'
  'Talent Development',;'
  'Regional Expansion',;'
  'Research Grants',;'
];const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],;
export default function ApplyGrantPage() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        headers: { 'Content-Type': 'application/json' },;
=======

const resp = await fetch('/api/grants', {;
        method: 'POST';,;}
        headers: { 'Content-Type': 'application/json';}
},;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        body: JSON && JSON.stringify({;
          program,;
          projectName,;
          teamInfo,;
          proposalSummary,;
          timeline,;
          budgetAmount: Number(budgetAmount || 0);,;
          budgetCurrency,;
          supportingLinks: supportingLinks;'
            .split('\n');
            .map(s => s && s.trim());
            .filter(Boolean),;
          pitchDeckUrl,;
          region,;
<<<<<<< HEAD
          sector: (sector as any) || undefined,;
          submit,;
        }),;
      });
      const data = await resp && resp.json();
=======
          sector: (sector as any) || undefined;,;}
          submit,;}
        }),;
      });
<<<<<<< HEAD
      const data = await resp && resp.json();'
=======

const data = await resp && resp.json();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      if (!resp && resp.ok) throw new Error(data?.error || 'Failed');
      router && router.push(`/grants/${data && data.id}`);
    } catch (e: any) {;
      setError(e && e.message);
    } finally {;
      setLoading(false);    }          budgetAmount: Number(budgetAmount || 0),;
<<<<<<< HEAD

>>>>>>> origin/main
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

program;
    } catch (e: any) {;}
      setError(e && e.message);}
    } finally {;}
      setLoading(false);    }          budgetAmount: Number(budgetAmount || 0);,;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          program;
          projectName;
          teamInfo;
          proposalSummary;
          timeline;
<<<<<<< HEAD
<<<<<<< HEAD
          budgetAmount: Number(budgetAmount || 0),
=======
          budgetAmount: Number(budgetAmount || 0),budgetCurrency;
          budgetAmount: Number(budgetAmount || 0),






>>>>>>> origin/main
          budgetCurrency;
          supportingLinks: supportingLinks
=======
          budgetAmount: Number(budgetAmount || 0),
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
<<<<<<< HEAD



=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          budgetCurrency;
          supportingLinks: supportingLinks;'
            .split('\n');
            .map((s) => s && s.trim());
            .filter(Boolean);
      set_loading (false);    }          budget_amount: Number (budget_amount || 0),
          budget_currency;
          supporting_links: supporting_links;'
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            .split ('\n');
            .map ((s) = /> s.trim ());
            .filter (Boolean);
          pitchDeckUrl;
          region;

<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          sector: (sector as any) || undefined,;
pr-12243
          sector: (sector as any) || undefined;,;
          submit})});
<<<<<<< HEAD
      const data = await resp && resp.json();'
      if (!resp && resp.ok) throw new Error(data?.error || 'Failed');`
=======

const data = await resp && resp.json();
      if (!resp && resp.ok) throw new Error(data?.error || 'Failed');
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      router && router.push(`/grants/${data && data.id}`);
    } catch (e: any) {;}
      setError(e && e.message);}
    } finally {;
      setLoading(false);
<<<<<<< HEAD
<<<<<<< HEAD
    }
pr-12243
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
<<<<<<< HEAD

=======
    }
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
  }

          <textarea'
            className='mt-1 w-full border rounded p-2'
            rows={3}
            value={teamInfo}
          <textarea'
            className='mt-1 w-full border rounded p-2'
            rows={6}
            value={proposalSummary}
            <input'
              type='number''
              className='mt-1 w-full border rounded p-2'
              value={budgetAmount}
          <textarea'
            className='mt-1 w-full border rounded p-2'
            rows={3}
            value={supportingLinks}

'
        {error && <div className='text-sm text-red-600'>{error}</div>}'
=======

    }
    }
pr-12243
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
            value={supportingLinks}

        {error && <div className='text-sm text-red-600'>{error}</div>}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <div className='flex gap-3'>
            value={supportingLinks}{error && <div className='text-sm text-red-600' />{error}</div>}
        <div className='flex gap-3' />;
            onChange={e => setSupportingLinks(e && e.target.value)}
          />;
<<<<<<< HEAD
        </label>;'
        <label className='text-sm'>;
          Pitch Deck URL;
          <input'
            className='mt-1 w-full border rounded p-2'
            value={pitchDeckUrl}
          <button;
            disabled={loading}
            onClick={() => save(false)}'
            className='px-4 py-2 border rounded disabled:opacity-50';
          >;
=======
        </label>;
        <label className='text-sm' />;
          Pitch Deck URL;
          <input;
            className='mt-1 w-full border rounded p-2';
            value={pitchDeckUrl}
          <button;
            disabled={loading}
            onClick={() = /> save(false)}
            className='px-4 py-2 border rounded disabled:opacity-50'>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            Save Draft;
          </button>;
          <button;
            disabled={loading}
            onClick={() => save(true)}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
      setLoading(false);
    }
  }

  };

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
origin/cursor/automate-test-improve-and-merge-code-2533
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50';
          >;
            onClick={() = /> save(true)}
            className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'>

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
        })})const data = await resp.json()if (!resp.ok) throw new Error(data?.error |'Failed')router.push(`/grants/${data.id}`)} catch (e: any) {setError(e.message);} finally {setLoading(false)}
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
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            .split('\n')
            .map((s) => s.trim())
            .filter(Boolean);
          pitchDeckUrl;
          region;
          sector: (sector as any) || undefined,
          submit})});
<<<<<<< HEAD
      const data = await resp.json();
      if (!resp.ok) throw new Error(data?.error || 'Failed');
      router.push(`/grants/${data.id}`)
<<<<<<< HEAD
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
=======
      const data = await resp && resp.json();
      if (!resp && resp.ok) throw new Error(data?.error || 'Failed');
      router && router.push(`/grants/${data && data.id}`);
    } catch (e: any) {;
      setError(e && e.message);
    } finally {;
      setLoading(false);





    }



=======
    } catch (e: any) {;}
      setError(e.message)}
    } finally {}
      setLoading(false)}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    }
  }

          <textarea
            className='mt-1 w-full border rounded p-2'
            rows={3}
            value={teamInfo}
          <textarea
            className='mt-1 w-full border rounded p-2'
            rows={6}
            value={proposalSummary}
            <input
              type='number'
              className='mt-1 w-full border rounded p-2'
              value={budgetAmount}
          <textarea
            className='mt-1 w-full border rounded p-2'
            rows={3}
            value={supportingLinks}

<<<<<<< HEAD
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
      <h1 className="text-2xl font-semibold mb-4">Apply for Zion {program === 'incubator' ? 'Incubator' : 'Grant'}</h1>;
      <div className="grid gap-4 max-w-3xl">;
        <div className="grid md:grid-cols-2 gap-3">;
          <label className="text-sm">Program;
            <select className="mt-1 w-full border rounded p-2" value={program} onChange={(e) => setProgram(e.target.value as any)}>;
  const _save = async (_submit: boolean) => {try {setLoading(true),setError(null),const resp = await fetch('/api/grants', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({program,projectName,teamInfo,proposalSummary,timeline,budgetAmount: Number(budgetAmount || 0),budgetCurrency,supportingLinks: supportingLinks;
            .split('\n').map((s) => s.trim()).filter(Boolean),pitchDeckUrl,region,sector: (sector as any) || undefined,submit})}),const data = await resp.json()if (!resp.ok) throw new Error(data?.error || 'Failed'),const save = async (submit: boolean) => {try {setLoading(true)setError(null)const resp = await fetch('/api/grants', {method: 'POST';
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({program,projectName,teamInfo,proposalSummary,timeline,budgetAmount: Number(budgetAmount || 0),budgetCurrency,supportingLinks: supportingLinks;
            .split('\n').map(s => s.trim()).filter(Boolean)pitchDeckUrl;
          region;
          sector: (sector as any) |undefined;
          submit;
        })})const data = await resp.json()if (!resp.ok) throw new Error(data?.error |'Failed')router.push(`/grants/${data.id}`)} catch (e: any) {setError(e.message)} finally {setLoading(false)}
  }}return (<EnhancedLayout>;
<h1 className='text-2xl font-semibold mb-4'>;
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
<<<<<<< HEAD
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
=======
region,
sector: (sector as any) |undefined;}
submit}
        })

})
const data = await resp.json()
      if (!resp.ok) throw new Error(data?.error |'Failed')
      router.push(`/grants/${data.id}`)
    } catch (e) {
      setError(e.message);}
    } finally {}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
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
    }
  }

  };

origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  return (
    <EnhancedLayout>
      <h1 className='text-2xl font-semibold mb-4'>
        Apply for Zion {program === 'incubator' ? 'Incubator' : 'Grant'}
      </h1>;
      <div className='grid gap-4 max-w-3xl'>;
        <div className='grid md:grid-cols-2 gap-3'>;
          <label className='text-sm'>;
            Program;
            <select;
              className='mt-1 w-full border rounded p-2';
              value={program}
              onChange={e => setProgram(e.target.value as any)}
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======
<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
    }

  };

  return (


<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        {error && <div className='text-sm text-red-600'>{error}</div>}
=======
'
        {error && <div className='text-sm text-red-600'>{error}</div>}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className='flex gap-3'>
          <button;
            disabled={loading}
            onClick={() => save(false)}'
            className='px-4 py-2 border rounded disabled:opacity-50'
          >
            Save Draft;
          </button>
          <button;
            disabled={loading}
            onClick={() => save(true)}'
            className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'
          >
<<<<<<< HEAD
            Submit for Review
<<<<<<< HEAD
<<<<<<< HEAD
          </button>
        </div>
=======
            Submit for Review;
          </button>        </div>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          </button>        </div>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          </button>
        </div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </div>
    </EnhancedLayout>
  );

<<<<<<< HEAD

pr-12243
              <option value="USDC">USDC</option>;
=======
              <option value="USDC">USDC</option>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <option value="ZION$">ZION$</option>;
              onChange={e = /> setProgram(e.target.value as any)}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            >;
              <option value='grant'>Grant</option>;
              <option value='incubator'>Incubator</option>;
            </select>;
<<<<<<< HEAD
          </label>;"
          <label className="text-sm">Region;"
            <input className="mt-1 w-full border rounded p-2" value={region} onChange={(e) => setRegion(e && e.target.value)} placeholder="e && e.g., LATAM, EU, Global" />;
          </label>;
        </div>;"
        <label className="text-sm">Supporting Links (one per line);"
          <textarea className="mt-1 w-full border rounded p-2" rows={3} value={supportingLinks} onChange={(e) => setSupportingLinks(e && e.target.value)} />;
        </label>;"
        <label className="text-sm">Pitch Deck URL;"
          <input className="mt-1 w-full border rounded p-2" value={pitchDeckUrl} onChange={(e) => setPitchDeckUrl(e && e.target.value)} />;
=======
          </label>;
          <label className='text-sm'>;
            Sector;
            <select;
              className='mt-1 w-full border rounded p-2';
              value={sector}
              onChange={e => setSector(e.target.value)}
            >;
              <option value=''>Select sector</option>;
              {categories.map(c => (<option key={c} value={c}>;
                  {c}
                </option>;
              ))}
            </select>;
          </label>;
        </div>;
        <label className='text-sm'>;
          Project Name;
          <input;
            className='mt-1 w-full border rounded p-2';
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
          />;
        </label>;
        <label className='text-sm'>;
          Team Info;
          <textarea;
            className='mt-1 w-full border rounded p-2';
            rows={3}
            value={teamInfo}
            onChange={e => setTeamInfo(e.target.value)}
          />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        </label>;
        <label className='text-sm'>;
          Proposal Summary;
          <textarea;
            className='mt-1 w-full border rounded p-2';
            rows={6}
            value={proposalSummary}
            onChange={e => setProposalSummary(e.target.value)}
          />;
        </label>;
        <label className='text-sm'>;
          Timeline;
          <input;
            className='mt-1 w-full border rounded p-2';
            value={timeline}
            onChange={e => setTimeline(e.target.value)}
          />;
        </label>;
        <div className='grid md:grid-cols-3 gap-3'>;
          <label className='text-sm'>;
            Budget Amount;
            <input;
              type='number';
              className='mt-1 w-full border rounded p-2';
              value={budgetAmount}
              onChange={e => setBudgetAmount(Number(e.target.value))}
            />;
          </label>;
          <label className='text-sm'>;
            Currency;
            <select;
              className='mt-1 w-full border rounded p-2';
              value={budgetCurrency}
              onChange={e => setBudgetCurrency(e.target.value as any)}
            >;
              <option value='USDC'>USDC</option>;
              <option value='ZION$'>ZION$</option>;
            </select>;
          </label>;
          <label className='text-sm'>;
            Region;
            <input;
              className='mt-1 w-full border rounded p-2';
              value={region}
              onChange={e => setRegion(e.target.value)}
              placeholder='e.g., LATAM, EU, Global';
            />;
          </label>;
        </div>;
        <label className='text-sm'>;
          Supporting Links (one per line)<textarea;
            className='mt-1 w-full border rounded p-2';
            rows={3}
            value={supportingLinks}
            onChange={e => setSupportingLinks(e.target.value)}
          />;
        </label>;
        <label className='text-sm'>;
          Pitch Deck URL;
          <input;
            className='mt-1 w-full border rounded p-2';
            value={pitchDeckUrl}
            onChange={e => setPitchDeckUrl(e.target.value)}
          />;
        </label>;
  }
    }}return ({error && <div className='text-sm text-red-600'>{error}</div>}
        <div className='flex gap-3'>;
          <button;
          />
        </label>



);

  );
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  );
}
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
  );
}            </select>
          </label>
          <label className="text-sm">Sector
            <select className="mt-1 w-full border rounded p-2" value={sector} onChange={(e) => setSector(e.target.value)}>
              <option value="">Select sector</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>
        </div>
        <label className="text-sm">Project Name
          <input className="mt-1 w-full border rounded p-2" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        </label>
        <label className="text-sm">Team Info
          <textarea className="mt-1 w-full border rounded p-2" rows={3} value={teamInfo} onChange={(e) => setTeamInfo(e.target.value)} />
        </label>
        <label className="text-sm">Proposal Summary
          <textarea className="mt-1 w-full border rounded p-2" rows={6} value={proposalSummary} onChange={(e) => setProposalSummary(e.target.value)} />
        </label>
        <label className="text-sm">Timeline
          <input className="mt-1 w-full border rounded p-2" value={timeline} onChange={(e) => setTimeline(e.target.value)} />
        </label>
        <div className="grid md:grid-cols-3 gap-3">
          <label className="text-sm">Budget Amount
            <input type="number" className="mt-1 w-full border rounded p-2" value={budgetAmount} onChange={(e) => setBudgetAmount(Number(e.target.value))} />
          </label>
          <label className="text-sm">Currency
            <select className="mt-1 w-full border rounded p-2" value={budgetCurrency} onChange={(e) => setBudgetCurrency(e.target.value as any)}>
              <option value="USDC">USDC</option>
              <option value="ZION$">ZION$</option>
            </select>
          </label>
          <label className="text-sm">Region
            <input className="mt-1 w-full border rounded p-2" value={region} onChange={(e) => setRegion(e.target.value)} placeholder="e.g., LATAM, EU, Global" />
          </label>
        </div>
        <label className="text-sm">Supporting Links (one per line)
          <textarea className="mt-1 w-full border rounded p-2" rows={3} value={supportingLinks} onChange={(e) => setSupportingLinks(e.target.value)} />
        </label>
        <label className="text-sm">Pitch Deck URL
          <input className="mt-1 w-full border rounded p-2" value={pitchDeckUrl} onChange={(e) => setPitchDeckUrl(e.target.value)} />
        </label>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <div className="flex gap-3">
          <button disabled={loading} onClick={() => save(false)} className="px-4 py-2 border rounded disabled:opacity-50">Save Draft</button>
          <button disabled={loading} onClick={() => save(true)} className="px-4 py-2 bg-blue-600 text-white rounded disabled: opacity-50">Submit for Review</button>
        </div>
  };

  }
    }


  };


  return (


        {error && <div className='text-sm text-red-600'>{error}</div>}
        <div className='flex gap-3'>
          <input
            className='mt-1 w-full border rounded p-2'
            value={pitchDeckUrl}
          <button
            disabled={loading}
            onClick={() => save(false)}
            className='px-4 py-2 border rounded disabled:opacity-50';
          >;
            Save Draft;
          </button>;
          <button
            disabled={loading}
            onClick={() => save(true)}

  }
    }

>>>>>>> origin/main
  };

  return (
    <EnhancedLayout>
      <h1 className="text-2xl font-semibold mb-4">Apply for Zion {program === 'incubator' ? 'Incubator' : 'Grant'}</h1>
      <div className="grid gap-4 max-w-3xl">
        <div className="grid md:grid-cols-2 gap-3">
          <label className="text-sm">Program
            <select className="mt-1 w-full border rounded p-2" value={program} onChange={(e) => setProgram(e.target.value as any)}>
              <option value="grant">Grant</option>
              <option value="incubator">Incubator</option>
            </select>
          </label>
          <label className="text-sm">Sector
            <select className="mt-1 w-full border rounded p-2" value={sector} onChange={(e) => setSector(e.target.value)}>
              <option value="">Select sector</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>
        </div>
        <label className="text-sm">Project Name
          <input className="mt-1 w-full border rounded p-2" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        </label>
        <label className="text-sm">Team Info
          <textarea className="mt-1 w-full border rounded p-2" rows={3} value={teamInfo} onChange={(e) => setTeamInfo(e.target.value)} />
        </label>
        <label className="text-sm">Proposal Summary
          <textarea className="mt-1 w-full border rounded p-2" rows={6} value={proposalSummary} onChange={(e) => setProposalSummary(e.target.value)} />
        </label>
        <label className="text-sm">Timeline
          <input className="mt-1 w-full border rounded p-2" value={timeline} onChange={(e) => setTimeline(e.target.value)} />
        </label>
        <div className="grid md:grid-cols-3 gap-3">
          <label className="text-sm">Budget Amount
            <input type="number" className="mt-1 w-full border rounded p-2" value={budgetAmount} onChange={(e) => setBudgetAmount(Number(e.target.value))} />
          </label>
          <label className="text-sm">Currency
            <select className="mt-1 w-full border rounded p-2" value={budgetCurrency} onChange={(e) => setBudgetCurrency(e.target.value as any)}>
              <option value="USDC">USDC</option>
              <option value="ZION$">ZION$</option>
            </select>
          </label>
          <label className="text-sm">Region
            <input className="mt-1 w-full border rounded p-2" value={region} onChange={(e) => setRegion(e.target.value)} placeholder="e.g., LATAM, EU, Global" />
          </label>
        </div>
        <label className="text-sm">Supporting Links (one per line)
          <textarea className="mt-1 w-full border rounded p-2" rows={3} value={supportingLinks} onChange={(e) => setSupportingLinks(e.target.value)} />
        </label>
        <label className="text-sm">Pitch Deck URL
          <input className="mt-1 w-full border rounded p-2" value={pitchDeckUrl} onChange={(e) => setPitchDeckUrl(e.target.value)} />
        </label>

<<<<<<< HEAD
        {error && <div className="text-sm text-red-600">{error}</div>}

        <div className="flex gap-3">
          <button disabled={loading} onClick={() => save(false)} className="px-4 py-2 border rounded disabled:opacity-50">Save Draft</button>
          <button disabled={loading} onClick={() => save(true)} className="px-4 py-2 bg-blue-600 text-white rounded disabled: opacity-50">Submit for Review</button>
        </div>
      </div>
    </EnhancedLayout>
  )
}
=======
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
<<<<<<< HEAD
            Submit for Review
          </button>        </div>
      </div>
    </EnhancedLayout>
  );









              <option value="USDC">USDC</option>;
              <option value="ZION$">ZION$</option>;
            </select>;
          </label>;
          <label className="text-sm">Region;
            <input className="mt-1 w-full border rounded p-2" value={region} onChange={(e) => setRegion(e && e.target.value)} placeholder="e && e.g., LATAM, EU, Global" />;
          </label>;
        </div>;
        <label className="text-sm">Supporting Links (one per line);
          <textarea className="mt-1 w-full border rounded p-2" rows={3} value={supportingLinks} onChange={(e) => setSupportingLinks(e && e.target.value)} />;
        </label>;
<<<<<<< HEAD
        <label className="text-sm">Pitch Deck URL;
          <input className="mt-1 w-full border rounded p-2" value={pitchDeckUrl} onChange={(e) => setPitchDeckUrl(e && e.target.value)} />;
        </label>;



  );

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  );

  );
}            </select>
          </label>
          <label className="text-sm">Sector
            <select className="mt-1 w-full border rounded p-2" value={sector} onChange={(e) => setSector(e.target.value)}>
              <option value="">Select sector</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>;
          </label>;
        </div>;
        <label className="text-sm">Project Name;
          <input className="mt-1 w-full border rounded p-2" value={projectName} onChange={(e) => setProjectName(e.target.value)} />;
        </label>;
        <label className="text-sm">Team Info;
          <textarea className="mt-1 w-full border rounded p-2" rows={3} value={teamInfo} onChange={(e) => setTeamInfo(e.target.value)} />;
        </label>;
        <label className="text-sm">Proposal Summary;
          <textarea className="mt-1 w-full border rounded p-2" rows={6} value={proposalSummary} onChange={(e) => setProposalSummary(e.target.value)} />;
        </label>;
        <label className="text-sm">Timeline;
          <input className="mt-1 w-full border rounded p-2" value={timeline} onChange={(e) => setTimeline(e.target.value)} />;
        </label>;
        <div className="grid md:grid-cols-3 gap-3">;
          <label className="text-sm">Budget Amount;
            <input type="number" className="mt-1 w-full border rounded p-2" value={budgetAmount} onChange={(e) => setBudgetAmount(Number(e.target.value))} />;
          </label>;
          <label className="text-sm">Currency;
            <select className="mt-1 w-full border rounded p-2" value={budgetCurrency} onChange={(e) => setBudgetCurrency(e.target.value as any)}>;
              <option value="USDC">USDC</option>;
              <option value="ZION$">ZION$</option>;
            </select>;
          </label>;
          <label className="text-sm">Region;
            <input className="mt-1 w-full border rounded p-2" value={region} onChange={(e) => setRegion(e.target.value)} placeholder="e.g., LATAM, EU, Global" />;
          </label>;
        </div>;
        <label className="text-sm">Supporting Links (one per line)<textarea className="mt-1 w-full border rounded p-2" rows={3} value={supportingLinks} onChange={(e) => setSupportingLinks(e.target.value)} />;
        </label>;
        <label className="text-sm">Pitch Deck URL;
          <input className="mt-1 w-full border rounded p-2" value={pitchDeckUrl} onChange={(e) => setPitchDeckUrl(e.target.value)} />;
        </label>;
        {error && <div className="text-sm text-red-600">{error}</div>}
        <div className="flex gap-3">;
          <button disabled={loading} onClick={() => save(false)} className="px-4 py-2 border rounded disabled:opacity-50">Save Draft</button>;
          <button disabled={loading} onClick={() => save(true)} className="px-4 py-2 bg-blue-600 text-white rounded disabled: opacity-50">Submit for Review</button>;
        </div>;
      </div>;
    </EnhancedLayout>;
}))}
  )}
  )}
}
  )}
}
<<<<<<< HEAD



=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  );

}
  );
}
  );
}
);
}
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

}
  );
}
<<<<<<< HEAD


}
origin/cursor/automate-test-improve-and-merge-code-2533


}
  );
}



}
  );
}

=======

      </div>
    </EnhancedLayout>
  )
              <option value="ZION$">ZION$</option>
              onChange={e = /> setProgram(e.target.value as any)}
            >
              <option value='grant'    />Grant</option>
              <option value='incubator'    />Incubator</option>
            </select>
        </label>
        <label className='text-sm'    />
          Proposal Summary
          <textarea
            className='mt-1 w-full border rounded p-2'
            rows={6}
            value={proposalSummary}
            onChange={e =    /> setProposalSummary(e.target.value)}
          />
        </label>
        <label className='text-sm'    />
          Timeline
          <input
            className='mt-1 w-full border rounded p-2'
            value={timeline}
            onChange={e =    /> setTimeline(e.target.value)}
          />
        </label>
        <div className='grid md:grid-cols-3 gap-3'    />
          <label className='text-sm'    />
            Budget Amount
            <input
              type='number'
              className='mt-1 w-full border rounded p-2'
              value={budgetAmount}
              onChange={e =    /> setBudgetAmount(Number(e.target.value))}
            />
          </label>
          <label className='text-sm'    />
            Currency
            <select
              className='mt-1 w-full border rounded p-2'
              value={budgetCurrency}
              onChange={e =    /> setBudgetCurrency(e.target.value as any)}
            >
              <option value='USDC'    />USDC</option>
              <option value='ZION$'    />ZION$</option>
            </select>
          </label>
          <label className='text-sm'    />
            Region
            <input
              className='mt-1 w-full border rounded p-2'
              value={region}
              onChange={e =    /> setRegion(e.target.value)}
              placeholder='e.g., LATAM, EU, Global'
            />
          </label>
        </div>
        <label className='text-sm'    />
          Supporting Links (one per line)<textarea
            className='mt-1 w-full border rounded p-2'
            rows={3}
            value={supportingLinks}
            onChange={e =    /> setSupportingLinks(e.target.value)}
          />
        </label>
        <label className='text-sm'    />
          Pitch Deck URL
          <input
            className='mt-1 w-full border rounded p-2'
            value={pitchDeckUrl}
            onChange={e =    /> setPitchDeckUrl(e.target.value)}
          />
        </label>
    }}return ({error && <div className='text-sm text-red-600'    />{error}</div>}
        <div className='flex gap-3'    />
          <button
             />
        </label>

  )
  )
  )
  )
}            </select>
          </label>"
          <label className=\"text-sm\"    />Sector;"
            <select className=\"mt-1 w-full border rounded p-2\" value={sector} onChange={(e) =    /> setSector(e.target.value)}>"
              <option value=\"\"    />Select sector</option>
              {categories.map((c) => <option key={c} value={c}    />{c}</option>)}
            </select>
          </label>
        </div>;"
        <label className=\"text-sm\"    />Project Name;"
          <input className=\"mt-1 w-full border rounded p-2\" value={projectName} onChange={(e) =    /> setProjectName(e.target.value)} />
        </label>;"
        <label className=\"text-sm\"    />Team Info;"
          <textarea className=\"mt-1 w-full border rounded p-2\" rows={3} value={teamInfo} onChange={(e) =    /> setTeamInfo(e.target.value)} />
        </label>;"
        <label className=\"text-sm\"    />Proposal Summary;"
          <textarea className=\"mt-1 w-full border rounded p-2\" rows={6} value={proposalSummary} onChange={(e) =    /> setProposalSummary(e.target.value)} />
        </label>;"
        <label className=\"text-sm\"    />Timeline;"
          <input className=\"mt-1 w-full border rounded p-2\" value={timeline} onChange={(e) =    /> setTimeline(e.target.value)} />
        </label>;"
        <div className=\"grid md:grid-cols-3 gap-3\"    />;"
          <label className=\"text-sm\"    />Budget Amount;"
            <input type=\"number\" className=\"mt-1 w-full border rounded p-2\" value={budgetAmount} onChange={(e) =    /> setBudgetAmount(Number(e.target.value))} />
          </label>;"
          <label className=\"text-sm\"    />Currency;"
            <select className=\"mt-1 w-full border rounded p-2\" value={budgetCurrency} onChange={(e) =    /> setBudgetCurrency(e.target.value as any)}>;"
              <option value=\"USDC\"    />USDC</option>;"
              <option value=\"ZION$\"    />ZION$</option>
            </select>
          </label>;"
          <label className=\"text-sm\"    />Region;"
            <input className=\"mt-1 w-full border rounded p-2\" value={region} onChange={(e) =    /> setRegion(e.target.value)} placeholder=\"e.g., LATAM, EU, Global\" />
          </label>
        </div>;"
        <label className=\"text-sm\"    />Supporting Links (one per line)<textarea className=\"mt-1 w-full border rounded p-2\" rows={3} value={supportingLinks} onChange={(e) =    /> setSupportingLinks(e.target.value)} />
        </label>;"
        <label className=\"text-sm\"    />Pitch Deck URL;"
          <input className=\"mt-1 w-full border rounded p-2\" value={pitchDeckUrl} onChange={(e) =    /> setPitchDeckUrl(e.target.value)} />
        </label>;"
        {error && <div className=\"text-sm text-red-600\"    />{error}</div>}"
        <div className=\"flex gap-3\"    />;"
          <button disabled={loading} onClick={() =    /> save(false)} className=\"px-4 py-2 border rounded disabled:opacity-50\">Save Draft</button>;"
          <button disabled={loading} onClick={() =    /> save(true)} className=\"px-4 py-2 bg-blue-600 text-white rounded disabled: opacity-50\">Submit for Review</button>
        </div>
      </div>
    </EnhancedLayout>
);
}
<<<<<<< HEAD
  );
}
  );
}
"
=======
const save = async (submit: boolean) => {
  try {
  <option value="">Select sector</option> {
  categories.map ( (c) => <option key= {
  c 
}value= {
  c 
}> {
  c 
}</option>) 
}</select> </label> </div> <label className="text-sm">Project Name <input className="mt-1 w-full border rounded p-2" value= {
  projectName 
}onChange= {
  (e) => setProjectName (e.target.value) 
}/> </label> <label className="text-sm">Team Info <textarea className="mt-1 w-full border rounded p-2" rows= {
  3 
}value= {
  teamInfo 
}onChange= {
  (e) => setTeamInfo (e.target.value) 
}/> </label> <label className="text-sm">Proposal Summary <textarea className="mt-1 w-full border rounded p-2" rows= {
  6 
}value= {
  proposalSummary 
}onChange= {
  (e) => setProposalSummary (e.target.value) 
}/> </label> <label className="text-sm">Timeline <input className="mt-1 w-full border rounded p-2" value= {
  timeline 
}onChange= {
  (e) => setTimeline (e.target.value) 
}/> </label> <div className="grid md:grid-cols-3 gap-3"> </label> </div> <label className="text-sm">Supporting Links (one per line) <textarea className="mt-1 w-full border rounded p-2" rows= {
  3 
}value= {
  supportingLinks 
}onChange= {
  (e) => setSupportingLinks (e.target.value) 
}/> </label> <label className="text-sm">Pitch Deck window.URL <input className="mt-1 w-full border rounded p-2" value= {
  pitchDeckUrl 
}onChange= {
  (e) => setPitchDeckUrl (e.target.value) 
}/> </label> {
  error && <div className="text-sm text-red-600"> {
  error 
}</div> 
}<div className="flex gap-3"> </div> </div> </EnhancedLayout>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
pr-12243
<<<<<<< HEAD
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
}
  );
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
