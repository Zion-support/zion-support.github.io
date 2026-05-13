'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

interface BrandProfile {
  name: string;
  tone: string;
  industry: string;
  audience: string;
}

interface VoiceAnalysis {
  consistency: number;
  personality: string;
  recommendations: string[];
}

const BRAND_EXAMPLES = [
  { brand: 'Apple', tone: 'Minimalist and premium', industry: 'Technology', keywords: ['innovative', 'simple', 'design-first'] },
  { brand: 'Nike', tone: 'Empowering and bold', industry: 'Athletics', keywords: ['achievement', 'strength', 'inspiration'] },
  { brand: 'Patagonia', tone: 'Authentic and adventurous', industry: 'Outdoor', keywords: ['sustainability', 'exploration', 'ethics'] },
  { brand: 'Tesla', tone: 'Visionary and disruptive', industry: 'Automotive', keywords: ['future', 'innovation', 'sustainable'] },
];

export default function AutonomousBrandVoiceAnalyzer() {
  const [profile, setProfile] = useState<BrandProfile>({ name: '', tone: 'Professional', industry: 'Technology', audience: 'B2B' });
  const [analyzed, setAnalyzed] = useState(false);

  const analysis = useMemo<VoiceAnalysis | null>(() => {
    if (!analyzed) return null;
    const toneMap: Record<string, number> = { Professional: 85, Casual: 70, Bold: 90, Minimalist: 80, Playful: 75 };
    const consistency = toneMap[profile.tone] ?? 80;
    const personalityMap: Record<string, string> = {
      Professional: 'Authoritative and trustworthy',
      Casual: 'Approachable and relatable',
      Bold: 'Confident and attention-grabbing',
      Minimalist: 'Clean and understated',
      Playful: 'Energetic and fun',
    };
    const recs = [
      'Establish a brand voice guide document with clear dos and don\'ts',
      `Use ${profile.tone.toLowerCase()} language consistently across all channels`,
      'Audit existing content against the brand voice profile',
      'Train team members with example-based guidelines',
      'Set up automated content review with brand voice scoring',
    ];
    return { consistency, personality: personalityMap[profile.tone] ?? 'Balanced', recommendations: recs };
  }, [analyzed, profile.tone]);

  return (
    <AILabToolLayout title="Autonomous Brand Voice Analyzer">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-white">Brand Voice Analysis</h2>
        <p className="text-slate-400">Analyze and refine your brand voice for consistency across all communication channels.</p>

        <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-6 space-y-4">
          <h3 className="text-lg font-semibold text-white">Brand Profile</h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Brand Name</label>
              <input type="text" value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})} className="w-full rounded-lg bg-slate-800 border border-slate-700 text-sm text-white px-3 py-2" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Tone</label>
              <select value={profile.tone} onChange={(e) => setProfile({...profile, tone: e.target.value})} className="w-full rounded-lg bg-slate-800 border border-slate-700 text-sm text-white px-3 py-2">
                {['Professional', 'Casual', 'Bold', 'Minimalist', 'Playful'].map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Industry</label>
              <input type="text" value={profile.industry} onChange={(e) => setProfile({...profile, industry: e.target.value})} className="w-full rounded-lg bg-slate-800 border border-slate-700 text-sm text-white px-3 py-2" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Target Audience</label>
              <input type="text" value={profile.audience} onChange={(e) => setProfile({...profile, audience: e.target.value})} className="w-full rounded-lg bg-slate-800 border border-slate-700 text-sm text-white px-3 py-2" />
            </div>
          </div>

          <button onClick={() => setAnalyzed(true)} className="rounded-full bg-cyan-500/20 border border-cyan-400/60 px-5 py-2 text-sm text-cyan-300 hover:bg-cyan-500/30">
            Analyze Brand Voice
          </button>
        </div>

        {analysis && (
          <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-6 space-y-4">
            <h3 className="text-lg font-semibold text-white">Analysis Results for {profile.name || 'Your Brand'}</h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <div className="text-xs text-slate-500">Voice Consistency</div>
                <div className="text-2xl font-black text-cyan-300">{analysis.consistency}%</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <div className="text-xs text-slate-500">Personality</div>
                <div className="text-lg font-semibold text-violet-300">{analysis.personality}</div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Recommendations</h4>
              <ol className="space-y-2">
                {analysis.recommendations.map((r, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-cyan-400">{i + 1}.</span> {r}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase mb-3">Reference: Consistent Brand Voices</h4>
          <div className="grid gap-2 sm:grid-cols-2">
            {BRAND_EXAMPLES.map((b) => (
              <div key={b.brand} className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <div className="text-sm font-medium text-white">{b.brand}</div>
                <div className="text-xs text-slate-400">{b.tone}</div>
              </div>
            ))}
          </div>
        </div>

        <Link href="/ai-lab" className="rounded-full bg-slate-700/60 border border-slate-600 px-4 py-2 text-sm text-slate-300 hover:bg-slate-600/60">
          Back to AI Lab
        </Link>

        <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-6 text-center">
          <p className="text-sm text-slate-400 mb-3">Need brand voice development? Contact: +1 302 464 0950 | kleber@ziontechgroup.com</p>
        </div>
      </div>
    </AILabToolLayout>
  );
}
export const TOOL_META = { id: 'autonomous-brand-voice-analyzer', slug: 'autonomous-brand-voice-analyzer', title: 'Autonomous Brand Voice Analyzer', shortDescription: 'Analyze brand voice consistency and generate refinement recommendations.', category: 'Brand Intelligence', status: 'experimental', href: '/ai-lab/autonomous-brand-voice-analyzer' };
