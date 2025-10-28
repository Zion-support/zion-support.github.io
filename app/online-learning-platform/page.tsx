import React from 'react';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'Online Learning Platform | Zion Tech Group',
  description: 'Advanced online learning solutions powered by AI',
  keywords: 'online learning, education, AI, e-learning, platform',
  openGraph: {
    title: 'Online Learning Platform | Zion Tech Group',
    description: 'Advanced online learning solutions powered by AI',
    type: 'website',
  },
};
import React from 'react'

import { Brain, BarChart, Target, TrendingUp } from 'lucide-react'

import Navigation from '../components/Navigation'

import { CheckCircle, ArrowRight } from 'lucide-react'

const OnlineLearningPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized learning experiences powered by artificial intelligence.",
      benefits: ["Adaptive content", "Smart recommendations", "Progress tracking"]
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics to track learning progress and performance.",
      benefits: ["Real-time insights", "Performance metrics", "Learning analytics"]
    },
    {
      icon: Target,
      title: "Skill Assessment",
      description: "Advanced assessment tools to evaluate and validate skills.",
      benefits: ["Automated testing", "Skill validation", "Certification"]
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Track learning progress and identify areas for improvement.",
      benefits: ["Progress monitoring", "Goal setting", "Achievement tracking"]
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
              Online Learning Platform
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Advanced online learning solutions powered by AI for better education
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
