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
  return { props: { generatedAt, summaries }

export default function TalentUpdatesPage({ generatedAt, summaries }: { generatedAt: string, summaries: TalentSummary[] }) {
  const map = new Map(summaries.map(s => [s.slug, s.summary]),
  return (
    <div className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>AI Automation: Talent Summaries</h1>
      <p className=&quot;text-gray-600&quot;>Profiles are periodically enriched with AI-generated summaries.</p>
      <div className=&quot;text-xs text-gray-500&quot;>Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : ''}</div>
      <div className=&quot;grid grid-cols-1 gap-4&quot;>
        {TALENT_PROFILES.map(t => (
          <div key={t.slug} className=&quot;border rounded p-4 space-y-1&quot;>
            <div className=&quot;font-medium&quot;>{t.name}  {t.title}</div>
            <div className=&quot;text-sm text-gray-700&quot;>{map.get(t.slug) || 'No AI summary yet.'}</div>          </div>
        )}
      </div>
    </div>
  )}