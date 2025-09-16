import fs from 'fs';
import path from 'path';
import { TALENT_PROFILES } from '../../data/talent';

type TalentSummary = { slug: string; summary: string };

export async function getServerSideProps() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Automation: Talent Summaries</h1>
      <p className="text-gray-600">Profiles are periodically enriched with AI-generated summaries.</p>
      <div className="text-xs text-gray-500">Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      <div className="grid grid-cols-1 gap-4">
        {TALENT_PROFILES.map(t => (
          <div key={t.slug} className="border rounded p-4 space-y-1">
            <div className="font-medium">{t.name} — {t.title}</div>
            <div className="text-sm text-gray-700">{map.get(t.slug) || 'No AI summary yet.'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}