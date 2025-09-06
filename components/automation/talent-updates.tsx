<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs',
import path from 'path';
import { TALENT_PROFILES } from '../../data/talent';
type TalentSummary = any;
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
</div>) )
=======
 </div>) ) 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}</div> </div>) import fs from 'fs';
import path from 'path';
import {TALENT_PROFILES} from '../../data/talent';
type TalentSummary = { slug: string, summary: string }
export async function getServerSideProps() {
=======
</div>) ) 
=======
 </div>) ) 
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}</div> </div>) import fs from 'fs';
import path from 'path';
import {TALENT_PROFILES} from '../../data/talent';
type TalentSummary = { slug: string, summary: string },
export async function getServerSideProps() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const file = path.join(process.cwd(), 'datatalent_ai.json');
  let generatedAt = '';
  let summaries: TalentSummary[] = [];  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
<<<<<<< HEAD
    generatedAt = json.generatedAt |'';
    summaries = json.summaries |[]
=======
    generatedAt = json.generatedAt || '';
    summaries = json.summaries || []
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  } catch {}
  return { props: { generatedAt, summaries } }
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function TalentUpdatesPage({ generatedAt, summaries }: { generatedAt: string, summaries: TalentSummary[] }) {
=======
export default function TalentUpdatesPage({ generatedAt, summaries }: { generatedAt: string, summaries: TalentSummary[] }) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
);
}
=======
<<<<<<< HEAD
 </div>) )
}</div> </div>)
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  );
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
