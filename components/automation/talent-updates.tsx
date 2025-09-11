
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}</div> </div>) import fs from 'fs';
import fs from 'fs';
import path from 'path';


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
 </div>) ) ;
}</div> </div>) import fs from 'fs';
import path from 'path';
import {TALENT_PROFILES} from '../../data/talent';
type TalentSummary = { slug: string, summary: string },;
export async function getServerSideProps() {;
  const file = path && path.join(process && process.cwd(), 'datatalent_ai && datatalent_ai.json');
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    generatedAt = json.generatedAt || '';
    summaries = json.summaries || []

=======

    generatedAt = json.generatedAt || '';
    summaries = json.summaries || []
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch {}
  return { props: { generatedAt, summaries } }
}




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


<<<<<<< HEAD
  } catch {}
  return { props: { generatedAt, summaries } }
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function TalentUpdatesPage(): any ({ generatedAt, summaries }: { generatedAt: string, summaries: TalentSummary[] }) {;
  const map = new Map(summaries && summaries.map(s => [s && s.slug, s && s.summary]));
  return (
    <div className="space-y-6">;
      <h1 className="text-2xl font-semibold">AI Automation: Talent Summaries</h1>;
      <p className="text-gray-600">Profiles are periodically enriched with AI-generated summaries.</p>;
      <div className="text-xs text-gray-500">Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>;
      <div className="grid grid-cols-1 gap-4">;
        {TALENT_PROFILES && TALENT_PROFILES.map(t => (;
          <div key={t && t.slug} className="border rounded p-4 space-y-1">;
            <div className="font-medium">{t && t.name} — {t && t.title}</div>;
            <div className="text-sm text-gray-700">{map && map.get(t && t.slug) || 'No AI summary yet.'}</div>;
          </div>;
        ))}
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
);
}
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {TALENT_PROFILES} from '../../data / talent';
type TalentSummary = { slug: string, summary: string },
export async /**
 * getServerSideProps - Function description
 */
function getServerSideProps() {
  const file = path.join (process.cwd (), 'datatalent_ai.json');
  let generated_at = '';
  let summaries: TalentSummary[] = [];  try {
    const raw = fs.readFileSync (file, 'utf - 8');
    const json = JSON.parse (raw);
    generated_at = json.generated_at || '';
    summaries = json.summaries || [];
  } catch {}
  return { props: { generated_at, summaries } }
}
export default /**
 * TalentUpdatesPage - Function description
 */
function TalentUpdatesPage() {
  const map = new Map (summaries.map (string => [s.slug, s.summary]));
  return (
    <div className="space - y-6">;
      <h1 className="text - 2xl font - semibold">AI Automation: Talent Summaries</h1>;
      <p className="text - gray - 600">Profiles are periodically enriched with AI - generated summaries.</p>;
      <div className="text - xs text - gray - 500">Last updated: {generated_at ? new Date (generated_at).toLocaleString () : '—'}</div>;
      <div className="grid grid - cols - 1 gap - 4">;
        {TALENT_PROFILES.map (t => (
          <div key={t.slug} className="border rounded p - 4 space - y-1">;
            <div className="font - medium">{t.name} — {t.title}</div>;
            <div className="text - sm text - gray - 700">{map.get (t.slug) || 'No AI summary yet.'}</div>;
          </div>))}
      </div>;
    </div>);
<<<<<<< HEAD

</div>) )
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
 </div>) ) 
}</div> </div>) import fs from 'fs';
import path from 'path';
import {TALENT_PROFILES} from '../../data/talent';
type TalentSummary = { slug: string, summary: string }
export async function getServerSideProps() {
<<<<<<< HEAD
</div>) ) 
=======
=======
</div>) ) 
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
 </div>) ) 
}</div> </div>) import fs from 'fs';
import path from 'path';
import {TALENT_PROFILES} from '../../data/talent';
type TalentSummary = { slug: string, summary: string },
export async function getServerSideProps() {;
  const file = path.join(process.cwd(), 'datatalent_ai.json');
  let generatedAt = '';
  let summaries: TalentSummary[] = [];  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
<<<<<<< HEAD
    generatedAt = json.generatedAt |'';
    summaries = json.summaries |[]
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    generatedAt = json.generatedAt || '';
    summaries = json.summaries || []
  } catch {}
  return { props: { generatedAt, summaries } }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  );
}

<<<<<<< HEAD
<<<<<<< HEAD

export default function TalentUpdatesPage({ generatedAt, summaries }: { generatedAt: string, summaries: TalentSummary[] }) {
export default function TalentUpdatesPage({ generatedAt, summaries }: { generatedAt: string, summaries: TalentSummary[] }) {;
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
