'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

type MediaMode = 'image' | 'video';
type PromptStyle = 'photoreal' | 'cinematic' | '3d' | 'minimal';

const STYLE_BASELINES: Record<PromptStyle, { coherence: number; novelty: number; safety: number }> = {
  photoreal: { coherence: 84, novelty: 68, safety: 78 },
  cinematic: { coherence: 80, novelty: 76, safety: 72 },
  '3d': { coherence: 74, novelty: 82, safety: 70 },
  minimal: { coherence: 86, novelty: 62, safety: 88 },
};

function clamp(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

export const metadata = {
  title: 'Page | Zion Tech Group',
  description: 'Page services and solutions from Zion Tech Group.',
  canonical: 'https://ziontechgroup.com/page',
};

export default function AutonomousMediaPromptStudioPage() {
  const [mode, setMode] = useState<MediaMode>('image');
  const [style, setStyle] = useState<PromptStyle>('cinematic');
  const [promptSpecificity, setPromptSpecificity] = useState(71);
  const [brandAlignment, setBrandAlignment] = useState(69);
  const [guardrailStrength, setGuardrailStrength] = useState(74);
  const [variationDepth, setVariationDepth] = useState(64);

  const metrics = useMemo(() => {
    const baseline = STYLE_BASELINES[style];
    const coherenceScore = clamp(
      baseline.coherence * 0.4 + promptSpecificity * 0.3 + brandAlignment * 0.3 - variationDepth * 0.08,
    );
    const noveltyScore = clamp(baseline.novelty * 0.4 + variationDepth * 0.4 + promptSpecificity * 0.2);
    const safetyScore = clamp(
      baseline.safety * 0.35 + guardrailStrength * 0.45 + (100 - variationDepth) * 0.2,
    );
    const launchScore = clamp(coherenceScore * 0.4 + noveltyScore * 0.25 + safetyScore * 0.35);

    const recommendation =
      launchScore >= 80
        ? 'Production-ready media prompt stack with strong brand and safety alignment.'
        : launchScore >= 66
          ? 'Pilot-ready: tune prompt constraints and strengthen moderation policies.'
          : 'Not launch-ready: raise prompt specificity and safety thresholds before release.';

    const promptBlueprint = [
      `${mode === 'image' ? 'Image' : 'Video'} generation objective with ${style} style constraints`,
      `Brand guidance level ${brandAlignment}/100 with deterministic tone + palette hints`,
      `Variation depth ${variationDepth}/100 for controlled exploration and A/B batches`,
      `Safety guardrails ${guardrailStrength}/100 with policy tags and refusal handling`,
    ];

    return { coherenceScore, noveltyScore, safetyScore, launchScore, recommendation, promptBlueprint };
  }, [brandAlignment, guardrailStrength, mode, promptSpecificity, style, variationDepth]);

  return (
    <div className="bg-slate-950/95">
      <AILabToolLayout
        title="Autonomous Media Prompt Studio"
        subtitle="Prototype image and video prompt systems with deterministic scoring for coherence, novelty, and safety."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-sm font-semibold text-slate-100">Prompt controls</h2>
            <div className="mt-4 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-2">
                {(['image', 'video'] as MediaMode[]).map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setMode(value)}
                    className={`rounded-lg border px-2 py-1.5 ${
                      mode === value
                        ? 'border-cyan-400/70 bg-cyan-500/20 text-cyan-50'
                        : 'border-slate-700 bg-slate-950/60 text-slate-300 hover:border-cyan-500/40'
                    }`}
                  >
                    {value === 'image' ? 'Image pipeline' : 'Video pipeline'}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(STYLE_BASELINES) as PromptStyle[]).map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setStyle(value)}
                    className={`rounded-lg border px-2 py-1.5 ${
                      style === value
                        ? 'border-violet-400/70 bg-violet-500/20 text-violet-50'
                        : 'border-slate-700 bg-slate-950/60 text-slate-300 hover:border-violet-500/40'
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>

              <label className="block">
                <span className="mb-1 block text-slate-300">Prompt specificity: {promptSpecificity}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={promptSpecificity}
                  onChange={(event) => setPromptSpecificity(Number(event.target.value))}
                  className="w-full accent-cyan-400"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-slate-300">Brand alignment: {brandAlignment}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={brandAlignment}
                  onChange={(event) => setBrandAlignment(Number(event.target.value))}
                  className="w-full accent-emerald-400"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-slate-300">Variation depth: {variationDepth}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={variationDepth}
                  onChange={(event) => setVariationDepth(Number(event.target.value))}
                  className="w-full accent-indigo-400"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-slate-300">Guardrail strength: {guardrailStrength}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={guardrailStrength}
                  onChange={(event) => setGuardrailStrength(Number(event.target.value))}
                  className="w-full accent-amber-400"
                />
              </label>
            </div>
          </section>

          <section className="rounded-2xl border border-violet-500/40 bg-violet-500/10 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-violet-200">Multimodal readiness</p>
            <h2 className="mt-1 text-xl font-bold text-violet-50">Media launch scorecard</h2>
            <p className="mt-3 text-sm text-violet-100">{metrics.recommendation}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">Coherence</p>
                <p className="mt-1 text-2xl font-bold text-cyan-300">{metrics.coherenceScore}</p>
              </div>
              <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">Novelty</p>
                <p className="mt-1 text-2xl font-bold text-emerald-300">{metrics.noveltyScore}</p>
              </div>
              <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">Safety</p>
                <p className="mt-1 text-2xl font-bold text-amber-300">{metrics.safetyScore}</p>
              </div>
              <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">Launch score</p>
                <p className="mt-1 text-2xl font-bold text-violet-300">{metrics.launchScore}</p>
              </div>
            </div>

            <div className="mt-5 rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
              <p className="text-[11px] uppercase tracking-wide text-slate-400">Prompt blueprint</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-200">
                {metrics.promptBlueprint.map((line) => (
                  <li key={line}>- {line}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/zion-ai-image-generator"
                className="rounded-full border border-cyan-300/70 bg-cyan-400/20 px-4 py-2 text-xs font-semibold text-cyan-50 hover:bg-cyan-400/30"
              >
                Open image generator
              </a>
              <a
                href="/zion-ai-video-generator"
                className="rounded-full border border-emerald-300/70 bg-emerald-400/20 px-4 py-2 text-xs font-semibold text-emerald-50 hover:bg-emerald-400/30"
              >
                Open video generator
              </a>
            </div>
          </section>
        </div>
      </AILabToolLayout>
    </div>
  );
}
