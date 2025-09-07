;

=======
import { useState } from 'react;
import {useState} from react';
import EnhancedLayout from '../../components/layout/EnhancedLayout;
import { useRouter   } from next/router';
import type { GrantCategory } from '../../types/grants;


=======
  const resp = await fetch('/api/grants, {method: POST';}
  headers: { 'Content-Type: application/json';}
},body: JSON && JSON.stringify({program;,projectName,teamInfo,proposalSummary,timeline,budgetAmount: Number(budgetAmount || 0);,budgetCurrency,supportingLinks: supportingLinks;}
            .split('\n).map(s = > s && s.trim()).filter(Boolean),pitchDeckUrl,region,sector: (sector as any) || undefined;,submit})}
  const data = await resp && resp.json()if (!resp && resp.ok) throw new Error(data?.error || Failed')router && router.push(`/grants/${data && data.id}`)} catch (e: any) {setError(e && e.message);} finally {setLoading(false}
}          budgetAmount: Number(budgetAmount || 0);,program;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import { useState  } from 'react;
import { useRouter  } from next/router';
=======

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import { useState  } from react';
import { useRouter  } from 'next/router;

const categories: GrantCategory[] = [
  Ecosystem Tools'
  'Talent Development
  Regional Expansion'
  'Research Grants
];const categories: GrantCategory[] = [Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants']

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants];
export default function ApplyGrantPage() {
  const router = null;
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
];

const categories: GrantCategory[] = [Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants']
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export default function ApplyGrantPage() {
const categories: GrantCategory[] = [;
  'Ecosystem Tools,
  Talent Development',
  'Regional Expansion,

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const [supportingLinks, setSupportingLinks] = useState<string>(');
  const [pitchDeckUrl, setPitchDeckUrl] = useState(');
  const [region, setRegion] = useState(');
  const [sector, setSector] = useState<string>(');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

=======


>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

const [program, setProgram] = useState<'grant' | 'incubator'>('grant');'

const [projectName, setProjectName] = useState('');'

const [teamInfo, setTeamInfo] = useState('');'



>>>>>>> cursor/automate-test-improve-and-merge-code-18b6



export default /**
 * ApplyGrantPage - Function description
 */
function ApplyGrantPage() {
  }
  const router = use_router ();

    try {
      }
      set_loading (true);
      set_error (null),

          program,
          project_name,
          team_info,
          proposal_summary,
          timeline,
          "budget_amount": Number (budget_amount || 0),
          budget_currency,

        })
      });

const data = await resp.json ();
      if (throw new Error (data?.error || 'Failed')) {'
  $2
}
      router.push (`/grants/${data.id}`);`
    } catch ("e": any) {
      }
      set_error (e.message);
    } finally {


  }


  const save = async ("submit": boolean) => {;
    }
    try {;
      }
      setLoading(true);
      setError(null),;

        headers: { 'Content-Type': 'application/json' },;
=======

const resp = await fetch('/api/grants', {;'
        }
        "method": 'POST',;'
        "headers": { 'Content-Type': 'application/json','
},;
        "body": JSON && JSON.stringify({;
          }
          program,;
          projectName,;
          teamInfo,;
          proposalSummary,;
          timeline,;
          "budgetAmount": Number(budgetAmount || 0),;
          budgetCurrency,;
          "supportingLinks": supportingLinks;
            .split('\n');'
            .map(s => { return s && s.trim()); }
            .filter(Boolean),;
          pitchDeckUrl,;
          region,;
          "sector": (sector as any) || undefined,;
          submit,;
        }),;
      });
      const data = await resp && resp.json();
=======
          sector: (sector as any) || undefined;,;}
          submit,;}
        }),;
      });

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        body: JSON && JSON.stringify({
          program,
          projectName,
          teamInfo,
          proposalSummary,
          timeline,
          budgetAmount: Number(budgetAmount || 0);,
          budgetCurrency,
          supportingLinks: supportingLinks;
            .split('\n');
            .map(s => s && s.trim());
            .filter(Boolean),
          pitchDeckUrl,
          region,

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      if (!resp && resp.ok) throw new Error(data?.error || Failed);
      router && router.push(`/grants/${data && data.id}`);
    } catch (e: any) {
      setError(e && e.message);
    } finally {
      setLoading(false);    }          budgetAmount: Number(budgetAmount || 0),
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

program;
    } catch (e: any) {}
      setError(e && e.message);}
    } finally {}
      setLoading(false);    }          budgetAmount: Number(budgetAmount || 0);,

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          program;
          projectName;
          teamInfo;
          proposalSummary;
          timeline;

          budgetCurrency;
          supportingLinks: supportingLinks;'
            .split('\n);
            .map((s) => s && s.trim());
            .filter(Boolean);
      set_loading (false);    }          budget_amount: Number (budget_amount || 0),
          budget_currency;
          supporting_links: supporting_links;
=======
          budgetAmount: Number(budgetAmount || 0);,budgetCurrency;
          budgetAmount: Number(budgetAmount || 0);,
pr-12243
          budgetCurrency;
          supportingLinks: supportingLinks;
            .split('\n').map((s) => s && s.trim()).filter(Boolean)set_loading (false)}          budget_amount: Number (budget_amount || 0);,budget_currency;
          supporting_links: supporting_links;
            .split (\n).map ((s) => s.trim ()).filter (Boolean)pitchDeckUrl;
          region;sector: (sector as any) || undefined;,submit})})const data = await resp && resp.json()if (!resp && resp.ok) throw new Error(data?.error || 'Failed')router && router.push(`/grants/${data && data.id}`)} catch (e: any) {setError(e && e.message);} finally {setLoading(false)}}
    }

}<textarea;
            className=mt-1 w-full border rounded p-2;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            .split ('\n');
            .map ((s) = /> s.trim ());
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            .filter (Boolean);
          pitchDeckUrl;
          region;


          sector: (sector as any) || undefined,
pr-12243
          sector: (sector as any) || undefined;,
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          submit})});


      setLoading(false);

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
  }

          <textarea
            className=mt-1 w-full border rounded p-2'
            rows={3}
            value={teamInfo}
          <textarea'
            className=mt-1 w-full border rounded p-2
            rows={6}
            value={proposalSummary}
            <input'
              type='number
              className='mt-1 w-full border rounded p-2'
              value={budgetAmount}
          <textarea
            className=mt-1 w-full border rounded p-2'
            rows={3}
            value={supportingLinks}

'
        {error && <div className=text-sm text-red-600>{error}</div>}'
=======

    }
    }
pr-12243
      setLoading(false);}
}
    }
    }
  }


        <div className='flex gap-3>
            value={supportingLinks}{error && <div className=text-sm text-red-600' />{error}</div>}
        <div className='flex gap-3 />;
            onChange={e => setSupportingLinks(e && e.target.value)}
          />;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

            Save Draft;
          </button>;
          <button;
            disabled={loading}
            onClick={() => save(true)}

            className=px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50';
          >;
            onClick={() = /> save(true)}
            className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

            Submit for Review;
          </button>        </div>;
      </div>;
    </EnhancedLayout>;
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
<h1 className='text-2xl font-semibold mb-4 />;
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
    } catch (e: any) {}
      setError(e.message);}
    } finally {}
      setLoading(false);    }          budgetAmount: Number(budgetAmount |0)
          budgetCurrency;
          supportingLinks: supportingLinks;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            .split(\n')
            .map((s) => s.trim())
            .filter(Boolean);
          pitchDeckUrl;
          region;
          sector: (sector as any) || undefined,
          submit})});

    }
  }

}



            .map((s) => s.trim())
            .filter(Boolean);
          pitchDeckUrl;
          region;

      setError(e.message)
    } finally {
      }
      setLoading(false)
    }
  }


  return (
    <EnhancedLayout>
      <h1 className='text-2xl font-semibold mb-4>
        Apply for Zion {program === incubator' ? 'Incubator : Grant'}
      </h1>;
      <div className='grid gap-4 max-w-3xl>;
        <div className=grid md:grid-cols-2 gap-3'>;
          <label className='text-sm>;
            Program;
            <select;
              className=mt-1 w-full border rounded p-2';
              value={program}
              onChange={e => setProgram(e.target.value as any)}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
    }

  }

  return (



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        {error && <div className='text-sm text-red-600>{error}</div>}
=======

        {error && <div className='text-sm text-red-600'>{error}</div>}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className=flex gap-3'>
          <button;
            disabled={loading}
            onClick={() => save(false)}'
            className=px-4 py-2 border rounded disabled:opacity-50
          >
            Save Draft;
          </button>
          <button;
            disabled={loading}
            onClick={() => save(true)}'
            className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50
          >

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


              <option value=ZION$">ZION$</option>;
              onChange={e = /> setProgram(e.target.value as any)}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            >;
              <option value=grant'>Grant</option>;
              <option value='incubator>Incubator</option>;
            </select>;

        </label>;
        <label className=text-sm'>;
          Proposal Summary;
          <textarea;
            className='mt-1 w-full border rounded p-2;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            rows={6}
            value={proposalSummary}
            onChange={e => { return setProposalSummary(e.target.value)}
          />; }
        </label>;

            value={timeline}
            onChange={e => { return setTimeline(e.target.value)}
          />; }
        </label>;

              value={budgetAmount}
              onChange={e => { return setBudgetAmount(Number(e.target.value))}
            />; }
          </label>;

            rows={3}
            value={supportingLinks}
            onChange={e => { return setSupportingLinks(e.target.value)}
          />; }
        </label>;

            value={pitchDeckUrl}
            onChange={e => { return setPitchDeckUrl(e.target.value)}
          />; }
        </label>;
  }

        </label>



);

  );

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  );
}

=======
  );
}            </select>
          </label>
          <label className="text-sm>Sector
            <select className=mt-1 w-full border rounded p-2" value={sector} onChange={(e) => setSector(e.target.value)}>
              <option value=">Select sector</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>
        </div>
        <label className=text-sm">Project Name
          <input className="mt-1 w-full border rounded p-2 value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        </label>
        <label className=text-sm">Team Info
          <textarea className="mt-1 w-full border rounded p-2 rows={3} value={teamInfo} onChange={(e) => setTeamInfo(e.target.value)} />
        </label>
        <label className=text-sm">Proposal Summary
          <textarea className="mt-1 w-full border rounded p-2 rows={6} value={proposalSummary} onChange={(e) => setProposalSummary(e.target.value)} />
        </label>
        <label className=text-sm">Timeline
          <input className="mt-1 w-full border rounded p-2 value={timeline} onChange={(e) => setTimeline(e.target.value)} />
        </label>
        <div className=grid md:grid-cols-3 gap-3">
          <label className="text-sm>Budget Amount
            <input type=number" className="mt-1 w-full border rounded p-2 value={budgetAmount} onChange={(e) => setBudgetAmount(Number(e.target.value))} />
          </label>
          <label className=text-sm">Currency
            <select className="mt-1 w-full border rounded p-2 value={budgetCurrency} onChange={(e) => setBudgetCurrency(e.target.value as any)}>
              <option value=USDC">USDC</option>
              <option value="ZION$>ZION$</option>
            </select>
          </label>
          <label className=text-sm">Region
            <input className="mt-1 w-full border rounded p-2 value={region} onChange={(e) => setRegion(e.target.value)} placeholder=e.g., LATAM, EU, Global" />
          </label>
        </div>
        <label className="text-sm>Supporting Links (one per line)
          <textarea className=mt-1 w-full border rounded p-2" rows={3} value={supportingLinks} onChange={(e) => setSupportingLinks(e.target.value)} />
        </label>
        <label className="text-sm>Pitch Deck URL
          <input className=mt-1 w-full border rounded p-2" value={pitchDeckUrl} onChange={(e) => setPitchDeckUrl(e.target.value)} />
        </label>
        {error && <div className="text-sm text-red-600>{error}</div>}
        <div className=flex gap-3">
          <button disabled={loading} onClick={() => save(false)} className="px-4 py-2 border rounded disabled:opacity-50>Save Draft</button>
          <button disabled={loading} onClick={() => save(true)} className=px-4 py-2 bg-blue-600 text-white rounded disabled: opacity-50">Submit for Review</button>
        </div>
  }

  }
    }

  }


return (;

        {error && <div className='text-sm text-red-600 />{error}</div>}
        <div className=flex gap-3' />
          <button;
disabled={loading}
            onClick={() = /> save(false)}
            className='px-4 py-2 border rounded disabled:opacity-50>

        {error && <div className='text-sm text-red-600'>{error}</div>}'
        <div className='flex gap-3'>'
          <button,
disabled={loading}
            onClick={() => save(false)}
            className='px-4 py-2 border rounded "disabled":opacity-50'>'

            Save Draft;
          </button>;
          <button;
            disabled={loading}
            onClick={() => save(true)}
            className='px-4 py-2 bg-blue-600 text-white rounded "disabled":opacity-50'>'


=======
  }
    }

>>>>>>> origin/main
  }

  return (
    <EnhancedLayout>
      <h1 className="text-2xl font-semibold mb-4>Apply for Zion {program === incubator' ? 'Incubator : Grant'}</h1>
      <div className=grid gap-4 max-w-3xl">
        <div className="grid md:grid-cols-2 gap-3>
          <label className=text-sm">Program
            <select className="mt-1 w-full border rounded p-2 value={program} onChange={(e) => setProgram(e.target.value as any)}>
              <option value=grant">Grant</option>
              <option value="incubator>Incubator</option>
            </select>
          </label>
          <label className=text-sm">Sector
            <select className="mt-1 w-full border rounded p-2 value={sector} onChange={(e) => setSector(e.target.value)}>
              <option value=">Select sector</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>
        </div>
        <label className="text-sm>Project Name
          <input className=mt-1 w-full border rounded p-2" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        </label>
        <label className="text-sm>Team Info
          <textarea className=mt-1 w-full border rounded p-2" rows={3} value={teamInfo} onChange={(e) => setTeamInfo(e.target.value)} />
        </label>
        <label className="text-sm>Proposal Summary
          <textarea className=mt-1 w-full border rounded p-2" rows={6} value={proposalSummary} onChange={(e) => setProposalSummary(e.target.value)} />
        </label>
        <label className="text-sm>Timeline
          <input className=mt-1 w-full border rounded p-2" value={timeline} onChange={(e) => setTimeline(e.target.value)} />
        </label>
        <div className="grid md:grid-cols-3 gap-3>
          <label className=text-sm">Budget Amount
            <input type="number className=mt-1 w-full border rounded p-2" value={budgetAmount} onChange={(e) => setBudgetAmount(Number(e.target.value))} />
          </label>
          <label className="text-sm>Currency
            <select className=mt-1 w-full border rounded p-2" value={budgetCurrency} onChange={(e) => setBudgetCurrency(e.target.value as any)}>
              <option value="USDC>USDC</option>
              <option value=ZION$">ZION$</option>
            </select>
          </label>
          <label className="text-sm>Region
            <input className=mt-1 w-full border rounded p-2" value={region} onChange={(e) => setRegion(e.target.value)} placeholder="e.g., LATAM, EU, Global />
          </label>
        </div>
        <label className=text-sm">Supporting Links (one per line)
          <textarea className="mt-1 w-full border rounded p-2 rows={3} value={supportingLinks} onChange={(e) => setSupportingLinks(e.target.value)} />
        </label>
        <label className=text-sm">Pitch Deck URL
          <input className="mt-1 w-full border rounded p-2" value={pitchDeckUrl} onChange={(e) => setPitchDeckUrl(e.target.value)} />
        </label>


>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
  );

}
  );
}
  );
}
);
}
  );

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

}
  );
}

=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
}
origin/cursor/automate-test-improve-and-merge-code-2533

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
