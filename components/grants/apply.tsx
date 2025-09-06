
import {useState} from 'react';

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
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5

export default function ApplyGrantPage() {
const categories: GrantCategory[] = [;
  'Ecosystem Tools',;
  'Talent Development',;
  'Regional Expansion',;
  'Research Grants',;
];const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],;
export default function ApplyGrantPage() {;

  const router = useRouter();
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const [program, setProgram] = useState<'grant' | 'incubator'>('grant');
  const [projectName, setProjectName] = useState('');
  const [teamInfo, setTeamInfo] = useState('');
  const [proposalSummary, setProposalSummary] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budgetAmount, setBudgetAmount] = useState<number>(0);

  const [supportingLinks, setSupportingLinks] = useState<string>('');
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const [pitchDeckUrl, setPitchDeckUrl] = useState('');
  const [region, setRegion] = useState('');
  const [sector, setSector] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const save = async (submit: boolean) => {;
    try {;
      setLoading(true);
      setError(null),;
      const resp = await fetch('/api/grants', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
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
          sector: (sector as any) || undefined,;
          submit,;
        }),;
      });
      const data = await resp && resp.json();
      if (!resp && resp.ok) throw new Error(data?.error || 'Failed');
      router && router.push(`/grants/${data && data.id}`);
    } catch (e: any) {;
      setError(e && e.message);
    } finally {;
      setLoading(false);    }          budgetAmount: Number(budgetAmount || 0),;

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
          region;

          sector: (sector as any) || undefined,;
          submit})});
      const data = await resp && resp.json();
      if (!resp && resp.ok) throw new Error(data?.error || 'Failed');
      router && router.push(`/grants/${data && data.id}`);
    } catch (e: any) {;
      setError(e && e.message);
    } finally {;
      setLoading(false);

    }
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

        {error && <div className='text-sm text-red-600'>{error}</div>}
        <div className='flex gap-3'>
            onChange={e => setSupportingLinks(e && e.target.value)}
          />;
        </label>;
        <label className='text-sm'>;
          Pitch Deck URL;
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
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    }

  };

  return (

        {error && <div className='text-sm text-red-600'>{error}</div>}
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
        <label className="text-sm">Pitch Deck URL;
          <input className="mt-1 w-full border rounded p-2" value={pitchDeckUrl} onChange={(e) => setPitchDeckUrl(e && e.target.value)} />;
        </label>;

  );

);
}
  );

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
