import React from 'react';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'Property Management AI | Zion Tech Group',
  description: 'AI-powered property management solutions',
  keywords: 'property management, AI, real estate, automation, smart buildings',
  openGraph: {
    title: 'Property Management AI | Zion Tech Group',
    description: 'AI-powered property management solutions',
    type: 'website',
  },
};
import React from 'react'

import { Brain, BarChart, Target, TrendingUp } from 'lucide-react'

import Navigation from '../components/Navigation'

import { CheckCircle, ArrowRight } from 'lucide-react'

const PropertyManagementAiPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Rent Optimization",
      description: "AI-powered rent pricing to maximize revenue and occupancy.",
      benefits: ["Market analysis", "Dynamic pricing", "Revenue optimization"]
    },
    {
      icon: BarChart,
      title: "Tenant Analytics",
      description: "Comprehensive analytics to understand tenant behavior and preferences.",
      benefits: ["Tenant insights", "Behavior analysis", "Satisfaction tracking"]
    },
    {
      icon: Target,
      title: "Maintenance Prediction",
      description: "Predictive maintenance to prevent costly repairs and downtime.",
      benefits: ["Predictive analytics", "Cost reduction", "Proactive maintenance"]
    },
    {
      icon: TrendingUp,
      title: "Property Valuation",
      description: "Accurate property valuation using AI and market data.",
      benefits: ["Market analysis", "Value prediction", "Investment insights"]
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
              Property Management AI
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              AI-powered property management solutions for modern real estate
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
