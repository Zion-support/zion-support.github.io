import React from 'react';
import { Metadata } from 'next';
import AI2025_2030ComprehensivePredictionsShowcase from '../../components/AI2025_2030ComprehensivePredictionsShowcase';
import AI2025_2030ComprehensivePredictionsPromotionBanner from '../../components/AI2025_2030ComprehensivePredictionsPromotionBanner';

export const metadata: Metadata = {
  title: 'AI 2025-2030 Comprehensive Predictions | Zion Tech Group',
  description: 'Complete roadmap of AI breakthroughs from 2025-2030. Discover revolutionary technologies including autonomous operations, quantum-neural fusion, and omniversal consciousness.',
  keywords: [
    'AI predictions 2025-2030',
    'artificial intelligence roadmap',
    'quantum neural fusion',
    'autonomous operations',
    'omniversal consciousness',
    'AI breakthrough timeline',
    'revolutionary AI technologies',
    'future AI predictions'
  ],
  openGraph: {
    title: 'AI 2025-2030 Comprehensive Predictions | Zion Tech Group',
    description: 'Complete roadmap of AI breakthroughs from 2025-2030. Discover revolutionary technologies that will transform civilization.',
    type: 'website',
  },
};

export default function AIPredictions2025_2030Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AI2025_2030ComprehensivePredictionsPromotionBanner />
      <AI2025_2030ComprehensivePredictionsShowcase />
    </div>
  );
}