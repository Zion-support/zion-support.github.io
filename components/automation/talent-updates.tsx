<<<<<<< HEAD
import fs from 'fs',;
import path from 'path',;
import { TALENT_PROFILES } from '../../data/talent',;
;
type TalentSummary = { slug:string, summary:string },;
;
export async function getServerSideProps() {;
  const file = path.join(process.cwd(), 'datatalent_ai.json'),;
  let generatedAt = '',;
  let summaries:TalentSummary[] = [],;
  try {;
    const raw = fs.readFileSync(file, 'utf-8'),;
    const json = JSON.parse(raw),;
    generatedAt = json.generatedAt || '',;
    summaries = json.summaries || [],;
  } catch {}
  return { props:{ generatedAt, summaries } },;
}
;
export default function TalentUpdatesPage({ generatedAt, summaries } { generatedAt:string, summaries:TalentSummary[] }) {;
  const map = new Map(summaries.map(s => [s.slug, s.summary])),;
  return (;
    <div className="space-y-6">;
      <h1 className="text-2xl font-semibold">AI Automation:Talent Summaries</h1>;
      <p className="text-gray-600">Profiles are periodically enriched with AI-generated summaries.</p>;
      <div className="text-xs text-gray-500">Last updated:{generatedAt ? new Date(generatedAt).toLocaleString() :'—'}</div>;
      <div className="grid grid-cols-1 gap-4">;
        {TALENT_PROFILES.map(t => (;
          <div key={t.slug} className="border rounded p-4 space-y-1">;
            <div className="font-medium">{t.name} — {t.title}</div>;
            <div className="text-sm text-gray-700">{map.get(t.slug) || 'No AI summary yet.'}</div>;
          </div>;
        ))}
      </div>;
    </div>;
  ),;
=======
import fs from 'fs',
import path from 'path',
import { TALENT_PROFILES } from '../../data/talent',
type TalentSummary = { slug: string, summary: string },

export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'datatalent_ai.json'),
  let generatedAt = '',
  let summaries: TalentSummary[] = [],
  try {
    const raw = fs.readFileSync(file, 'utf-8'),
    const json = JSON.parse(raw),
    generatedAt = json.generatedAt || '',
    summaries = json.summaries || []
  } catch {}
  return { props: { generatedAt, summaries } }
}

export default function TalentUpdatesPage({ generatedAt, summaries }: { generatedAt: string, summaries: TalentSummary[] }) {
  const map = new Map(summaries.map(s => [s.slug, s.summary])),
  return (
    <div className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>AI Automation: Talent Summaries</h1>
      <p className=&quot;text-gray-600&quot;>Profiles are periodically enriched with AI-generated summaries.</p>
      <div className=&quot;text-xs text-gray-500&quot;>Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      <div className=&quot;grid grid-cols-1 gap-4&quot;>
        {TALENT_PROFILES.map(t => (
          <div key={t.slug} className=&quot;border rounded p-4 space-y-1&quot;>
            <div className=&quot;font-medium&quot;>{t.name} — {t.title}</div>
            <div className=&quot;text-sm text-gray-700&quot;>{map.get(t.slug) || 'No AI summary yet.'}</div>          </div>
        ))}
      </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}