import React from 'react';
import Navigation from '../../components/Navigation';

export const metadata = {
  title: 'Medical Records Manager | Zion Tech Group',
  description: 'AI-powered medical records management solutions',
  keywords: 'medical records, AI, healthcare, document management',
  openGraph: {
    title: 'Medical Records Manager | Zion Tech Group',
    description: 'AI-powered medical records management solutions',
    type: 'website',
  },
};
import React from 'react'

import { Brain, BarChart, Target, TrendingUp } from 'lucide-react'

import Navigation from '../components/Navigation'

import { CheckCircle, ArrowRight } from 'lucide-react'

const MedicalRecordsManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Records",
      description: "Intelligent medical records management powered by artificial intelligence.",
      benefits: ["Automated categorization", "Smart search", "Data extraction"]
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics for medical records and patient data.",
      benefits: ["Patient insights", "Trend analysis", "Performance metrics"]
    },
    {
      icon: Target,
      title: "Compliance Management",
      description: "Ensure compliance with healthcare regulations and standards.",
      benefits: ["HIPAA compliance", "Audit trails", "Security monitoring"]
    },
    {
      icon: TrendingUp,
      title: "Data Integration",
      description: "Seamlessly integrate with existing healthcare systems and databases.",
      benefits: ["System integration", "Data synchronization", "API connectivity"]
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
              Medical Records Manager
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              AI-powered medical records management solutions for healthcare providers
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
