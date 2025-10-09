'use client';
import React from 'react';
import Link from 'next/link';
import { Target, Brain, Users, ArrowRight, CheckCircle, Star, Shield, Clock, Zap, TrendingUp } from 'lucide-react';

const AILeadGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Lead Scoring',
      description: 'Intelligent lead scoring that identifies high-value prospects automatically',
      benefits: ['Behavioral analysis', 'Predictive scoring', 'Priority ranking']
    },
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'AI-powered audience targeting and segmentation for maximum conversion',
      benefits: ['Demographic analysis', 'Interest mapping', 'Behavioral targeting']
    },
    {
      icon: Users,
      title: 'Lead Nurturing',
      description: 'Automated lead nurturing campaigns that convert prospects into customers',
      benefits: ['Email sequences', 'Content personalization', 'Follow-up automation']
    }
  ];

  const leadSources = [
    {
      title: 'Website Visitors',
      description: 'Convert website visitors into qualified leads with smart forms and tracking',
      icon: Target,
      features: ['Visitor tracking', 'Smart forms', 'Behavioral triggers']
    },
    {
      title: 'Social Media',
      description: 'Generate leads from social media platforms with targeted campaigns',
      icon: Users,
      features: ['Social listening', 'Engagement tracking', 'Lead capture']
    },
    {
      title: 'Content Marketing',
      description: 'Attract and convert leads through valuable content and gated resources',
      icon: TrendingUp,
      features: ['Content offers', 'Lead magnets', 'Nurture sequences']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                AI Lead Generation
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Generate high-quality leads at scale with our AI-powered lead generation platform. 
              Increase your lead volume by 300% while improving quality and conversion rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Generate More Leads
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                See It In Action
              </Link>
            </div>
          </section>
          {/* Use Cases Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Perfect for Every Industry
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to 3x Your Lead Generation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 2,500+ companies already using our AI lead generation platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <MailIcon className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        </div>
    </>
  );
};

export default AILeadGenerationPage;