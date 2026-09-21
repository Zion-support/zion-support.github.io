import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Shield, Zap, BarChart3 } from 'lucide-react';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Free AI Readiness Assessment | Zion Tech Group',
  description:
    'Get a free AI readiness assessment from Zion Tech Group. Discover quick wins for automation, security, cloud, and AI delivery in 5 minutes.',

};

const questions = [
  {
    id: 'automation',
    question: 'How much of your operations are currently automated?',
    options: [
      { label: 'Mostly manual', value: 'manual', score: 1 },
      { label: 'Some automation', value: 'some', score: 2 },
      { label: 'Moderate automation', value: 'moderate', score: 4 },
      { label: 'Highly automated', value: 'high', score: 5 },
    ],
  },
  {
    id: 'security',
    question: 'How mature is your security/access posture?',
    options: [
      { label: 'Basic passwords', value: 'basic', score: 1 },
      { label: 'MFA enabled', value: 'mfa', score: 3 },
      { label: 'SSO only', value: 'sso', score: 4 },
      { label: 'Zero Trust', value: 'zero_trust', score: 5 },
    ],
  },
  {
    id: 'cloud',
    question: 'What is your cloud deployment model?',
    options: [
      { label: 'On-prem only', value: 'on_prem', score: 1 },
      { label: 'Single cloud', value: 'single', score: 3 },
      { label: 'Multi-cloud', value: 'multi', score: 4 },
      { label: 'Hybrid + optimization', value: 'hybrid', score: 5 },
    ],
  },
  {
    id: 'ai',
    question: 'How is AI used in your business today?',
    options: [
      { label: 'Not using AI', value: 'none', score: 1 },
      { label: 'Experimental only', value: 'pilot', score: 2 },
      { label: '1-3 AI use cases in production', value: 'production', score: 4 },
      { label: 'Scaled across 4+ use cases', value: 'scaled', score: 5 },
    ],
  },
];

const advice: Record<number, string[]> = {
  4: [
    'Add an AI chatbot or email triage assistant to reduce delays immediately.',
    'Introduce workflow automation for repetitive approvals and handoffs.',
    'Use a lightweight protection stack: EDR + MFA + backup verification.',
  ],
  8: [
    'Expand AI automation with document processing and knowledge-base search.',
    'Add observability and cost controls so cloud spend stays predictable.',
    'Run quarterly AI-focused reviews on use-case impact and latency.',
  ],
  12: [
    'Advance toward governance, responsible AI, and incident-response readiness.',
    'Integrate AI orchestration across tools with secure data pipelines.',
    'Schedule a strategy review to align AI investments with business outcomes.',
  ],
  17: [
    'You have strong foundations—optimize for speed, resilience, and AI scale.',
    'A short conversation can help prioritize MLOps, security ops, and growth levers.',
  ],
};

function getAdvice(score: number) {
  if (score >= 17) return advice[17];
  if (score >= 12) return advice[12];
  if (score >= 8) return advice[8];
  return advice[4];
}

export default function AIReadinessAssessmentPage() {
  return (
    <PageShell
      title="AI Readiness Assessment"
      description="Answer 4 quick questions to see where you stand in automation, security, cloud, and AI—and get clear next steps from Zion Tech Group."
      eyebrow="Free Assessment"
      align="center"
      canonical="https://ziontechgroup.com/ai/ai-readiness-assessment/"
      actions={
        <>
          <Link href="/contact/" className="btn-primary">
            Contact us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/ai/" className="btn-secondary">Back to AI Lab</Link>
        </>
      }
    >
      <section className="mb-12">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Automation baseline',
              text: 'Find repetitive processes worth automating first.',
              icon: Zap,
            },
            {
              title: 'Security posture',
              text: 'Identify protection gaps you can close quickly.',
              icon: Shield,
            },
            {
              title: 'Cloud/Data readiness',
              text: 'See whether your platform supports modern AI workloads.',
              icon: BarChart3,
            },
            {
              title: 'AI maturity',
              text: 'Find high-value, low-risk AI pilots to start now.',
              icon: CheckCircle2,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15">
                <item.icon className="h-6 w-6 text-purple-400" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-2 flex-1 text-sm text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

    </PageShell>
  );
}
