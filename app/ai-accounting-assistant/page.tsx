'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calculator, BarChart, FileText, Shield, Zap, CheckCircle } from 'lucide-react';

const AIAccountingAssistantPage: React.FC = () => {
  const features = [
    { icon: Calculator, title: 'Automated Bookkeeping', description: 'AI-powered automated bookkeeping and transaction categorization.' },
    { icon: BarChart, title: 'Financial Analytics', description: 'Advanced financial reporting and analytics with AI insights.' },
    { icon: FileText, title: 'Tax Preparation', description: 'Automated tax preparation and compliance management.' },
    { icon: Shield, title: 'Audit Trail', description: 'Complete audit trail and compliance tracking for financial records.' },
    { icon: Zap, title: 'Invoice Processing', description: 'Automated invoice processing and payment tracking.' },
    { icon: CheckCircle, title: 'Compliance', description: 'Ensure compliance with accounting standards and regulations.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Accounting
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Assistant
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Streamline your accounting processes with our AI-powered accounting assistant. Automate bookkeeping, financial reporting, and tax preparation.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAccountingAssistantPage;