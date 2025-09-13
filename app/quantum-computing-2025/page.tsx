import React from 'react';
import { Metadata } from 'next';
import QuantumComputingBreakthroughShowcase2025 from '../../components/QuantumComputingBreakthroughShowcase2025';
import QuantumComputingBreakthroughPromotionBanner2025 from '../../components/QuantumComputingBreakthroughPromotionBanner2025';

export const metadata: Metadata = {
  title: 'Quantum Computing Breakthroughs 2025 | Zion Tech Group',
  description: 'Revolutionary quantum computing technologies that will transform computing. Discover quantum supremacy, quantum-neural fusion, and unbreakable security systems.',
  keywords: [
    'quantum computing 2025',
    'quantum supremacy',
    'quantum neural fusion',
    'quantum cryptography',
    'quantum internet',
    'quantum processors',
    'quantum algorithms',
    'quantum security'
  ],
  openGraph: {
    title: 'Quantum Computing Breakthroughs 2025 | Zion Tech Group',
    description: 'Revolutionary quantum computing technologies that will transform every aspect of computing and human civilization.',
    type: 'website',
  },
};

export default function QuantumComputing2025Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <QuantumComputingBreakthroughPromotionBanner2025 />
      <QuantumComputingBreakthroughShowcase2025 />
    </div>
  );
}