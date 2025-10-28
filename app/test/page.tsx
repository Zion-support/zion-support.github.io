import React from 'react';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'Test Page | Zion Tech Group',
  description: 'Test page for development and testing purposes',
  keywords: 'test, development, testing, page',
  openGraph: {
    title: 'Test Page | Zion Tech Group',
    description: 'Test page for development and testing purposes',
    type: 'website',
  },
};
import React from 'react'

import { Brain, BarChart, Target, TrendingUp } from 'lucide-react'

import Navigation from '../components/Navigation'

import { CheckCircle, ArrowRight } from 'lucide-react'

const TestPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Testing Solutions",
      description: "Advanced testing and quality assurance solutions.",
      benefits: ["Quality", "Testing", "Assurance"]
    },
    {
      icon: BarChart,
      title: "Analytics",
      description: "Comprehensive testing analytics and reporting.",
      benefits: ["Monitoring", "Analysis", "Insights"]
    },
    {
      icon: Target,
      title: "Precision",
      description: "Precise testing and quality targeting.",
      benefits: ["Accuracy", "Precision", "Targeting"]
    },
    {
      icon: TrendingUp,
      title: "Performance",
      description: "Optimize testing performance and quality.",
      benefits: ["Optimization", "Performance", "Efficiency"]
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Test Page
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Test page for development and testing purposes
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
