
export default function ApplyGrantPage() {
=======
const categories: GrantCategory[] = [;
  'Ecosystem Tools',;
  'Talent Development',;
  'Regional Expansion',;
  'Research Grants',;
];const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],;
export default function ApplyGrantPage() {;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const router = useRouter();
  const [program, setProgram] = useState<'grant' | 'incubator'>('grant');
  const [projectName, setProjectName] = useState('');
  const [teamInfo, setTeamInfo] = useState('');
  const [proposalSummary, setProposalSummary] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budgetAmount, setBudgetAmount] = useState<number>(0);
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const [supportingLinks, setSupportingLinks] = useState<string>('');
  const [pitchDeckUrl, setPitchDeckUrl] = useState('');
  const [region, setRegion] = useState('');
  const [sector, setSector] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
    } catch (e: any) {
      set_error (e.message);
    } finally {
=======
          program;
          projectName;
          teamInfo;
          proposalSummary;
          timeline;
          budgetAmount: Number(budgetAmount || 0),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          budgetCurrency;
          supportingLinks: supportingLinks;
            .split('\n');
            .map((s) => s && s.trim());
            .filter(Boolean);
=======
      set_loading (false);    }          budget_amount: Number (budget_amount || 0),
          budget_currency;
          supporting_links: supporting_links;
            .split ('\n');
            .map ((s) => s.trim ());
            .filter (Boolean);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          pitchDeckUrl;
          region;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
  }

  return (
    <EnhancedLayout>;
      <h1 className='text-2xl font-semibold mb-4'>;
        Apply for Zion {program === 'incubator' ? 'Incubator' : 'Grant'}
      </h1>;
      <div className='grid gap-4 max-w-3xl'>;
        <div className='grid md:grid-cols-2 gap-3'>;
          <label className='text-sm'>;
            Program;
            <select
              className='mt-1 w-full border rounded p-2'
              value={program}
              onChange={e => setProgram(e && e.target.value as any)}
            >;
              <option value='grant'>Grant</option>;
              <option value='incubator'>Incubator</option>;
            </select>;
          </label>;
          <label className='text-sm'>;
            Sector;
            <select
              className='mt-1 w-full border rounded p-2'
              value={sector}
              onChange={e => setSector(e && e.target.value)}
            >;
              <option value=''>Select sector</option>;
              {categories && categories.map(c => (;
                <option key={c} value={c}>;
                  {c}
                </option>;
              ))}
            </select>;
          </label>;
        </div>;
        <label className='text-sm'>;
          Project Name;
          <input
            className='mt-1 w-full border rounded p-2'
            value={projectName}
            onChange={e => setProjectName(e && e.target.value)}
          />;
        </label>;
        <label className='text-sm'>;
          Team Info;
          <textarea
            className='mt-1 w-full border rounded p-2'
            rows={3}
            value={teamInfo}
            onChange={e => setTeamInfo(e && e.target.value)}
          />;
        </label>;
        <label className='text-sm'>;
          Proposal Summary;
          <textarea
            className='mt-1 w-full border rounded p-2'
            rows={6}
            value={proposalSummary}
            onChange={e => setProposalSummary(e && e.target.value)}
          />;
        </label>;
        <label className='text-sm'>;
          Timeline;
          <input
            className='mt-1 w-full border rounded p-2'
            value={timeline}
            onChange={e => setTimeline(e && e.target.value)}
          />;
        </label>;
        <div className='grid md:grid-cols-3 gap-3'>;
          <label className='text-sm'>;
            Budget Amount;
            <input
              type='number'
              className='mt-1 w-full border rounded p-2'
              value={budgetAmount}
              onChange={e => setBudgetAmount(Number(e && e.target.value))}
            />;
          </label>;
          <label className='text-sm'>;
            Currency;
            <select
              className='mt-1 w-full border rounded p-2'
              value={budgetCurrency}
              onChange={e => setBudgetCurrency(e && e.target.value as any)}
            >;
              <option value='USDC'>USDC</option>;
              <option value='ZION$'>ZION$</option>;
            </select>;
          </label>;
          <label className='text-sm'>;
            Region;
            <input
              className='mt-1 w-full border rounded p-2'
              value={region}
              onChange={e => setRegion(e && e.target.value)}
              placeholder='e && e.g., LATAM, EU, Global';
            />;
          </label>;
        </div>;
        <label className='text-sm'>;
          Supporting Links (one per line);
          <textarea
            className='mt-1 w-full border rounded p-2'
            rows={3}
            value={supportingLinks}
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
            className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50';
          >;
            Submit for Review;
          </button>        </div>;
      </div>;
    </EnhancedLayout>;
  );
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
      </div>
    </EnhancedLayout>
}            </select>;
          </label>;
          <label className="text-sm">Sector;
            <select className="mt-1 w-full border rounded p-2" value={sector} onChange={(e) => setSector(e && e.target.value)}>;
              <option value="">Select sector</option>;
              {categories && categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>;
          </label>;
        </div>;
        <label className="text-sm">Project Name;
          <input className="mt-1 w-full border rounded p-2" value={projectName} onChange={(e) => setProjectName(e && e.target.value)} />;
        </label>;
        <label className="text-sm">Team Info;
          <textarea className="mt-1 w-full border rounded p-2" rows={3} value={teamInfo} onChange={(e) => setTeamInfo(e && e.target.value)} />;
        </label>;
        <label className="text-sm">Proposal Summary;
          <textarea className="mt-1 w-full border rounded p-2" rows={6} value={proposalSummary} onChange={(e) => setProposalSummary(e && e.target.value)} />;
        </label>;
        <label className="text-sm">Timeline;
          <input className="mt-1 w-full border rounded p-2" value={timeline} onChange={(e) => setTimeline(e && e.target.value)} />;
        </label>;
        <div className="grid md:grid-cols-3 gap-3">;
          <label className="text-sm">Budget Amount;
            <input type="number" className="mt-1 w-full border rounded p-2" value={budgetAmount} onChange={(e) => setBudgetAmount(Number(e && e.target.value))} />;
          </label>;
          <label className="text-sm">Currency;
            <select className="mt-1 w-full border rounded p-2" value={budgetCurrency} onChange={(e) => setBudgetCurrency(e && e.target.value as any)}>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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

        {error && <div className="text-sm text-red-600">{error}</div>}

        <div className="flex gap-3">;
          <button disabled={loading} onClick={() => save(false)} className="px-4 py-2 border rounded disabled:opacity-50">Save Draft</button>;
          <button disabled={loading} onClick={() => save(true)} className="px-4 py-2 bg-blue-600 text-white rounded disabled: opacity-50">Submit for Review</button>;
        </div>;
      </div>;
    </EnhancedLayout>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
          <label className="text - sm">Region;
            <input className="mt - 1 w - full border rounded p - 2" value={region} on_change={(e) => set_region (e.target.value)} placeholder="e.g., LATAM, EU, Global" />;
          </label>;
        </div>;
        <label className="text - sm">Supporting Links (one per line);
          <textarea className="mt - 1 w - full border rounded p - 2" rows={3} value={supporting_links} on_change={(e) => setSupportingLinks (e.target.value)} />;
        </label>;
        <label className="text - sm">Pitch Deck URL;
          <input className="mt - 1 w - full border rounded p - 2" value={pitchDeckUrl} on_change={(e) => setPitchDeckUrl (e.target.value)} />;
        </label>;
        {error && <div className="text - sm text - red - 600">{error}</div>}
        <div className="flex gap - 3">;
          <button disabled={loading} on_click={() => save (false)} className="px - 4 py - 2 border rounded disabled:opacity - 50">Save Draft</button>;
          <button disabled={loading} on_click={() => save (true)} className="px - 4 py - 2 bg - blue - 600 text - white rounded disabled: opacity - 50">Submit for Review</button>;
        </div>;
      </div>;
    </EnhancedLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
