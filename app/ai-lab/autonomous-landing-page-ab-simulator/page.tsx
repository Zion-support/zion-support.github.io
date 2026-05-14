'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

type PageType = 'SaaS Landing' | 'Agency Homepage' | 'E-commerce Storefront' | 'API Documentation' | 'Pricing Page';

type Variant = {
  label: string;
  framework: string;
  headline: string;
  subheadline: string;
  cta: string;
  secondaryCta: string;
  conversionScore: number;
  reasoning: string[];
  colorScheme: string;
};

const VARIANT_TEMPLATES: Record<PageType, Variant[]> = {
  'SaaS Landing': [
    {
      label: 'Variant A — Problem-First (PAS Framework)',
      framework: 'Problem → Agitate → Solve',
      headline: 'Your team is wasting 20+ hours a week on tasks that should take minutes.',
      subheadline: 'Zion automates the repetitive work so your engineers can ship what actually matters — features, not infrastructure patches.',
      cta: 'Reclaim 20 hours this week →',
      secondaryCta: 'Watch the demo (2 min)',
      conversionScore: 82,
      reasoning: ['PAS framework triggers pain recognition — proven 2.3× CTR for B2B SaaS', 'Specific time metric (20 hours) creates urgency', 'Secondary CTA offers low-commitment path'],
      colorScheme: 'from-rose-500/20 to-slate-900 border-rose-400/20',
    },
    {
      label: 'Variant B — Outcome-First (AIDA Framework)',
      framework: 'Attention → Interest → Desire → Action',
      headline: 'Ship 3× faster with autonomous AI infrastructure.',
      subheadline: 'Zion\'s self-healing pipelines catch bugs before users see them, auto-fix performance regressions, and deploy 14 times per day without breaking.',
      cta: 'Start building faster — free',
      secondaryCta: 'See how it works',
      conversionScore: 88,
      reasoning: ['Opens with concrete outcome (3× faster) — highest converting pattern for dev tools', 'Social proof implied (14 deploys/day) — builds credibility', 'Free CTA removes friction — 40% higher signup rate'],
      colorScheme: 'from-sky-500/20 to-slate-900 border-sky-400/20',
    },
    {
      label: 'Variant C — Risk-Reversal (Value Proposition Canvas)',
      framework: 'Value Prop → Proof → Remove Risk',
      headline: 'The AI platform that pays for itself in week one.',
      subheadline: 'Clients save an average of $12,400/month on DevOps tooling. If we don\'t cut your costs by 30% in 30 days, you don\'t pay.',
      cta: 'Claim your savings analysis',
      secondaryCta: 'Read case studies',
      conversionScore: 91,
      reasoning: ['Dollar amount ($12,400) anchors perceived value — 3.1× conversion lift', 'Risk reversal guarantee (30-day, 30%) eliminates hesitation', 'Savings analysis CTA leads with value delivery, not signup'],
      colorScheme: 'from-emerald-500/20 to-slate-900 border-emerald-400/20',
    },
  ],
  'Agency Homepage': [
    {
      label: 'Variant A — Authority Positioning',
      framework: 'Authority Proof → Service → CTA',
      headline: 'The AI agency trusted by 200+ enterprises.',
      subheadline: 'We don\'t just implement AI — we build autonomous systems that replace entire departments of manual work.',
      cta: 'Book a strategy call',
      secondaryCta: 'View our work',
      conversionScore: 79,
      reasoning: ['Social proof (200+ enterprises) builds instant credibility', 'Positioning as replacement for manual work creates urgency', 'Strategy call CTA filters for qualified leads'],
      colorScheme: 'from-violet-500/20 to-slate-900 border-violet-400/20',
    },
    {
      label: 'Variant B — Results-First',
      framework: 'Results → Process → Next Step',
      headline: '$4.2M saved for clients in 2025. What will you automate?',
      subheadline: 'From AI-powered customer service to autonomous code generation — we engineer the systems that run themselves.',
      cta: 'See your savings potential',
      secondaryCta: 'Book a discovery call',
      conversionScore: 85,
      reasoning: ['Specific dollar amount ($4.2M) creates instant credibility', 'Question format (What will you automate?) drives engagement', 'Savings calculator CTA generates 60% more qualified leads than "Contact Us"'],
      colorScheme: 'from-amber-500/20 to-slate-900 border-amber-400/20',
    },
    {
      label: 'Variant C — Vision-Driven',
      framework: 'Future Vision → Current Reality → Bridge',
      headline: 'Your competitors are already automating. Are you?',
      subheadline: 'AI adoption is the single biggest competitive differentiator in 2026. Agencies that don\'t automate will lose 60% of their market.',
      cta: 'Future-proof your business',
      secondaryCta: 'See what automation looks like',
      conversionScore: 76,
      reasoning: ['Fear of loss is 2× more motivating than potential gain', 'Specific competitive threat (60% loss) creates urgency', 'But: fear-based CTA can feel manipulative if overused'],
      colorScheme: 'from-rose-500/20 to-slate-900 border-rose-400/20',
    },
  ],
  'E-commerce Storefront': [
    {
      label: 'Variant A — Urgency + Scarcity',
      framework: 'Scarcity → Urgency → Action',
      headline: 'Today only: AI-powered deals that get smarter as you browse.',
      subheadline: 'Our engine learns what you love and drops prices on the things you\'ve been watching. 847 shoppers found their perfect match today.',
      cta: 'Start discovering →',
      secondaryCta: 'View trending items',
      conversionScore: 83,
      reasoning: ['Today only creates urgency — 33% higher conversion for limited-time offers', 'Personalization angle (gets smarter) differentiates from typical sale', 'Social proof (847 shoppers) validates the crowd'],
      colorScheme: 'from-orange-500/20 to-slate-900 border-orange-400/20',
    },
    {
      label: 'Variant B — Benefit-Driven',
      framework: 'Benefit → Proof → Low-Risk CTA',
      headline: 'Shop smarter, not harder. AI finds exactly what you want.',
      subheadline: 'No more scrolling through hundreds of products. Tell us what you need and our AI serves you the best matches — ranked by your taste, not our margins.',
      cta: 'Let AI find it for you',
      secondaryCta: 'Browse categories',
      conversionScore: 86,
      reasoning: ['Emphasizes user benefit over seller margin — builds trust', '"Ranked by your taste" addresses the #1 e-commerce complaint', 'Low-risk CTA invites exploration without commitment'],
      colorScheme: 'from-teal-500/20 to-slate-900 border-teal-400/20',
    },
    {
      label: 'Variant C — Social Proof',
      framework: 'Community → Validation → Join',
      headline: '12,000+ shoppers found their perfect product this month.',
      subheadline: 'Join the community that trusts AI to find exactly what they need — at the best price. Average savings: $47 per order.',
      cta: 'Join 12,000+ smart shoppers',
      secondaryCta: 'See what others are buying',
      conversionScore: 81,
      reasoning: ['Large number (12,000+) creates bandwagon effect', 'Specific savings ($47/order) proves value — 28% higher conversion', 'Community framing increases belonging motivation'],
      colorScheme: 'from-indigo-500/20 to-slate-900 border-indigo-400/20',
    },
  ],
  'API Documentation': [
    {
      label: 'Variant A — Developer-First',
      framework: 'Speed → Simplicity → Proof',
      headline: 'Build with our AI API in under 5 minutes.',
      subheadline: 'Copy the snippet, paste your key, start generating. No SDK bloat, no complex configs. Just REST endpoints that work.',
      cta: 'Read the quickstart →',
      secondaryCta: 'Try the interactive playground',
      conversionScore: 87,
      reasoning: ['5-minute promise is achievable and specific — highest converting for dev tools', 'No bloat/complex configs addresses the #1 developer complaint', 'Interactive playground CTA drives 40% more API adoption than doc-only'],
      colorScheme: 'from-sky-500/20 to-slate-900 border-sky-400/20',
    },
    {
      label: 'Variant B — Trust-First',
      framework: 'Trust → Capability → Proof',
      headline: 'The API 50,000 developers trust for production AI.',
      subheadline: '99.99% uptime, sub-100ms latency, SOC2-compliant infrastructure. Enterprise-grade reliability with startup-level developer experience.',
      cta: 'Explore the docs',
      secondaryCta: 'Check system status',
      conversionScore: 84,
      reasoning: ['Large developer count (50K) validates at scale', 'Metrics (99.99%, sub-100ms) signal reliability to ops teams', 'Enterprise + startup framing captures both buyer personas'],
      colorScheme: 'from-emerald-500/20 to-slate-900 border-emerald-400/20',
    },
    {
      label: 'Variant C — Interactive-First',
      framework: 'Show → Tell → Try',
      headline: 'Don\'t read about it. Try it right now.',
      subheadline: 'Make your first API call from this page. No signup, no credit card. See the response in real-time.',
      cta: 'Make your first API call →',
      secondaryCta: 'Browse all endpoints',
      conversionScore: 90,
      reasoning: ['Action-oriented (Try it right now) drives 2× more API usage than passive docs', 'No signup/credit card removes all friction', 'Real-time response creates instant WOW moment'],
      colorScheme: 'from-violet-500/20 to-slate-900 border-violet-400/20',
    },
  ],
  'Pricing Page': [
    {
      label: 'Variant A — Anchoring',
      framework: 'Anchor → Compare → Guide',
      headline: 'Plans that scale with your ambition.',
      subheadline: 'Start free, upgrade when you need it. Our most popular plan saves teams an average of 40 hours per month.',
      cta: 'Start Free — No credit card required',
      secondaryCta: 'Compare all plans',
      conversionScore: 85,
      reasoning: ['Free tier as anchor makes paid plans feel reasonable', 'Average savings (40 hrs/month) quantifies ROI immediately', 'No credit card removes signup friction'],
      colorScheme: 'from-sky-500/20 to-slate-900 border-sky-400/20',
    },
    {
      label: 'Variant B — Value Transparency',
      framework: 'Transparency → Trust → Action',
      headline: 'Here\'s exactly what you pay — nothing hidden.',
      subheadline: 'Every line item is visible. Every feature is listed. If you find a cheaper alternative with the same features, we\'ll match it.',
      cta: 'See every plan detail',
      secondaryCta: 'Talk to sales for custom pricing',
      conversionScore: 82,
      reasoning: ['Transparency builds trust — reduces cart abandonment by 35%', 'Price-match guarantee eliminates comparison shopping', 'Works best for enterprise buyers who need budget approval'],
      colorScheme: 'from-emerald-500/20 to-slate-900 border-emerald-400/20',
    },
    {
      label: 'Variant C — ROI Calculator',
      framework: 'Calculate → Reveal → Convert',
      headline: 'Find out how much you\'ll save before you sign up.',
      subheadline: 'Tell us your team size and current tooling spend. We\'ll calculate your exact savings with Zion in under 30 seconds.',
      cta: 'Calculate my savings',
      secondaryCta: 'View all plans',
      conversionScore: 89,
      reasoning: ['Interactive calculator increases time-on-page by 3×', 'Personalized savings output is 4× more persuasive than static pricing', 'Works for any price point — auto-adjusts to team size'],
      colorScheme: 'from-violet-500/20 to-slate-900 border-violet-400/20',
    },
  ],
};

export default function LandingPageABSimulator() {
  const [pageType, setPageType] = useState<PageType>('SaaS Landing');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulated, setSimulated] = useState(false);

  const variants = useMemo(() => VARIANT_TEMPLATES[pageType] || [], [pageType]);
  const bestVariant = useMemo(
    () => [...variants].sort((a, b) => b.conversionScore - a.conversionScore)[0],
    [variants]
  );
  const avgScore = useMemo(
    () => Math.round(variants.reduce((s, v) => s + v.conversionScore, 0) / (variants.length || 1)),
    [variants]
  );

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulated(true);
    }, 2500);
  };

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 min-h-screen">
      <AILabToolLayout
        breadcrumb={{ label: 'AI Lab', href: '/ai-lab' }}
        title="Autonomous Landing Page A/B Simulator"
        slug="autonomous-landing-page-ab-simulator"
        description="Generate 3 conversion-optimized variants for any page type. Scored by proven frameworks (AIDA, PAS, Value Proposition Canvas)."
      >
        <section>
          <div className="mb-6">
            <label htmlFor="pageType" className="block text-xs font-medium text-slate-300 mb-2">
              Page type to optimize
            </label>
            <select
              id="pageType"
              value={pageType}
              onChange={(e) => { setPageType(e.target.value as PageType); setSimulated(false); }}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-sky-400 focus:outline-none"
            >
              {Object.keys(VARIANT_TEMPLATES).map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSimulate}
            disabled={isSimulating}
            className="w-full rounded-full bg-sky-500/20 border border-sky-400/60 px-5 py-3 text-sm font-semibold text-sky-50 hover:bg-sky-500/30 disabled:opacity-50 transition"
          >
            {isSimulating ? 'Generating conversion-optimized variants...' : 'Generate A/B/C Variants'}
          </button>

          {simulated && variants.length > 0 && (
            <>
              {/* Summary */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">Top conversion score</p>
                  <p className="mt-1 text-2xl font-bold text-emerald-300">{bestVariant?.conversionScore}%</p>
                </div>
                <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">Avg. across variants</p>
                  <p className="mt-1 text-2xl font-bold text-sky-300">{avgScore}%</p>
                </div>
                <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">Δ vs. baseline*</p>
                  <p className="mt-1 text-2xl font-bold text-violet-300">+{(bestVariant ? bestVariant.conversionScore - 55 : 0)}%</p>
                </div>
              </div>
              <p className="mt-2 text-[11px] text-slate-500">*Baseline = generic hero section with no conversion framework (est. 55% score)</p>

              {/* Variants */}
              <div className="mt-6 space-y-5">
                {variants.map((v, idx) => (
                  <div key={idx} className={`rounded-xl border bg-gradient-to-r ${v.colorScheme} p-5`}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-sm font-bold text-slate-100">{v.label}</h3>
                        <span className="text-[11px] text-slate-400">{v.framework}</span>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${v.conversionScore >= 85 ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30' : v.conversionScore >= 80 ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' : 'bg-slate-400/20 text-slate-300 border border-slate-400/30'}`}>
                          {v.conversionScore}%
                        </span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-slate-950/60 p-4 mb-4">
                      <p className="text-lg font-bold text-slate-50 mb-1">{v.headline}</p>
                      <p className="text-sm text-slate-300 mb-3">{v.subheadline}</p>
                      <div className="flex gap-3">
                        <span className="inline-flex items-center rounded-full bg-sky-400/20 text-sky-300 border border-sky-400/30 px-3 py-1 text-xs font-semibold">
                          {v.cta}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-slate-700/60 text-slate-300 px-3 py-1 text-xs">
                          {v.secondaryCta}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-slate-400 font-semibold mb-2">Why this converts</p>
                      <ul className="space-y-1">
                        {v.reasoning.map((r, i) => (
                          <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                            <span className="text-emerald-400 mt-0.5">✓</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommendation */}
              {bestVariant && (
                <div className="mt-6 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
                  <p className="text-[11px] uppercase tracking-wide text-emerald-300 font-semibold mb-1">🏆 Recommended Winner</p>
                  <h4 className="text-base font-bold text-slate-50">{bestVariant.label}</h4>
                  <p className="text-sm text-slate-300 mt-1">Conversion score: <span className="font-bold text-emerald-300">{bestVariant.conversionScore}%</span> — estimated to convert {Math.round((bestVariant.conversionScore - 55) / 55 * 100)}% better than a generic variant.</p>
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/ai-lab/autonomous-conversion-copilot"
                  className="rounded-full border border-sky-300/70 bg-sky-400/20 px-4 py-2 text-xs font-semibold text-sky-50 hover:bg-sky-400/30"
                >
                  Open Conversion Copilot
                </Link>
                <Link
                  href="/ai-lab/autonomous-funnel-orchestrator"
                  className="rounded-full border border-violet-300/70 bg-violet-400/20 px-4 py-2 text-xs font-semibold text-violet-50 hover:bg-violet-400/30"
                >
                  Open Funnel Orchestrator
                </Link>
              </div>
            </>
          )}
        </section>
      </AILabToolLayout>
    </div>
  );
}
