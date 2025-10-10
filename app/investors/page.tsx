'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  TrendingUp,
  DollarSign,
  BarChart,
  Users,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Target,
  Building2,
  PieChart,
  Activity
} from 'lucide-react';

const InvestorsPage: React.FC = () => {
  const metrics = [
    {
      icon: DollarSign,
      value: '$50M+',
      label: 'Total Funding Raised',
      description: 'Series A and B rounds completed'
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Revenue Growth',
      description: 'Year-over-year growth rate'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Enterprise Clients',
      description: 'Fortune 500 companies served'
    },
    {
      icon: Globe,
      value: '25+',
      label: 'Countries',
      description: 'Global market presence'
    }
  ];

  const investors = [
    {
      name: 'Sequoia Capital',
      logo: '🌲',
      type: 'Lead Investor',
      description: 'Series A lead investor with deep AI expertise'
    },
    {
      name: 'Andreessen Horowitz',
      logo: '🚀',
      type: 'Series B',
      description: 'Strategic partner for enterprise growth'
    },
    {
      name: 'Accel Partners',
      logo: '⚡',
      type: 'Growth Capital',
      description: 'Supporting international expansion'
    },
    {
      name: 'GV (Google Ventures)',
      logo: '🔍',
      type: 'Strategic',
      description: 'Technology and market access partnership'
    }
  ];

  const highlights = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Named "AI Company of the Year" by TechCrunch'
    },
    {
      icon: Shield,
      title: 'Financial Stability',
      description: 'Strong balance sheet with 24+ months runway'
    },
    {
      icon: Zap,
      title: 'Rapid Growth',
      description: 'Consistent 300%+ revenue growth year-over-year'
    },
    {
      icon: Target,
      title: 'Market Leadership',
      description: 'Leading position in enterprise AI solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Investors
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Building the future of AI with world-class investors and strategic partners
          </p>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Company Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strong financial performance and market position
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{metric.label}</div>
                <div className="text-gray-300 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Investors
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Backed by leading venture capital firms and strategic investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investors.map((investor, index) => (
              <div
                key={index}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="text-6xl mb-4">{investor.logo}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{investor.name}</h3>
                <div className="text-cyan-400 font-semibold mb-3">{investor.type}</div>
                <p className="text-gray-300">{investor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Investment Highlights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key factors that make Zion Tech Group an attractive investment opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Investment Opportunities
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Interested in investing in the future of AI? Contact our investor relations team
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Contact Investor Relations
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Download Pitch Deck
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorsPage;