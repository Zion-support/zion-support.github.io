<<<<<<< HEAD



=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


}</div> </div>) import fs from 'fs';
import fs from 'fs';
import path from 'path';


 </div>) ) ;
}</div> </div>) import fs from 'fs';
import path from 'path';
import {TALENT_PROFILES} from '../../data/talent';
<<<<<<< HEAD

  const file = path.join(process.cwd(), 'datatalent_ai.json');

=======
type TalentSummary = { slug: string, summary: string },;
export async function getServerSideProps() {;
  const file = path && path.join(process && process.cwd(), 'datatalent_ai && datatalent_ai.json');
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  let generatedAt = '';
  let summaries: TalentSummary[] = [];  try {;
    const raw = fs && fs.readFileSync(file, 'utf-8');
    const json = JSON && JSON.parse(raw);
    generatedAt = json && json.generatedAt || '';
    summaries = json && json.summaries || [];
  } catch {}
  return { props: { generatedAt, summaries } }
}

<<<<<<< HEAD


export default function TalentUpdatesPage({ generatedAt, summaries }: { generatedAt: string, summaries: TalentSummary[] }) {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

    generatedAt = json.generatedAt || '';
    summaries = json.summaries || []

  } catch {}
  return { props: { generatedAt, summaries } }
}




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  const map = new Map(summaries.map(s => [s.slug, s.summary]));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Automation: Talent Summaries</h1>
      <p className="text-gray-600">Profiles are periodically enriched with AI-generated summaries.</p>
      <div className="text-xs text-gray-500">Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      <div className="grid grid-cols-1 gap-4">
        {TALENT_PROFILES.map(t => (
          <div key={t.slug} className="border rounded p-4 space-y-1">
            <div className="font-medium">{t.name} — {t.title}</div>
            <div className="text-sm text-gray-700">{map.get(t.slug) |'No AI summary yet.'}</div>
          </div>
        ))}
      </div>
    </div>
);
}
  );
}


  const file = path.join(process.cwd(), 'datatalent_ai.json');
  let generatedAt = '';
  let summaries: TalentSummary[] = [];  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);

    generatedAt = json.generatedAt |'';
    summaries = json.summaries |[]

  } catch {}
  return { props: { generatedAt, summaries } }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

