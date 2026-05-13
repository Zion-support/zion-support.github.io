import type { Metadata } from 'next';
import AIReadinessQuiz from '../components/AIReadinessQuiz';

export const metadata: Metadata = {
  title: 'AI Readiness Assessment',
  description: 'Free 7-question AI maturity assessment. Get your personalized score, recommendations, and implementation roadmap.',
  alternates: { canonical: '/ai-readiness-quiz' },
};

export default function AIReadinessQuizPage() {
  return <AIReadinessQuiz />;
}
