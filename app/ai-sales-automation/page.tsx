'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Target, Users, BarChart, Zap, Phone, Mail, CheckCircle } from 'lucide-react';
const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Lead Scoring & Qualification',
      description: 'AI automatically scores and qualifies leads based on behavior, demographics, and engagement patterns.',
      benefits: ['Behavioral Analysis', 'Predictive Scoring', 'Auto-qualification', 'Priority Ranking']
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Intelligent customer segmentation helps you target the right audience with personalized messaging.',
      benefits: ['Dynamic Segmentation', 'Behavioral Clustering', 'Personalization', 'Campaign Optimization']
    },
    {
      icon: BarChart,
      title: 'Sales Forecasting',
      description: 'Predict future sales performance with AI-powered forecasting models and trend analysis.',
      benefits: ['Predictive Models', 'Trend Analysis', 'Revenue Projections', 'Risk Assessment']
    },
    {
      icon: Zap,
      title: 'Automated Follow-ups',
      description: 'Never miss an opportunity with intelligent follow-up sequences that adapt to customer behavior.',
      benefits: ['Smart Sequences', 'Behavioral Triggers', 'Multi-channel', 'Timing Optimization']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$249/month',
      description: 'Perfect for small sales teams',
      features: ['Up to 1,000 contacts', 'Basic automation', 'Email campaigns', 'Lead scoring']
    },
    {
      name: 'Professional',
      price: '$499/month',
      description: 'Ideal for growing businesses',
      features: ['Up to 10,000 contacts', 'Advanced AI features', 'Multi-channel campaigns', 'Sales forecasting', 'CRM integration']
    },
    {
      name: 'Enterprise',
      price: '$999/month',
      description: 'For large sales organizations',
      features: ['Unlimited contacts', 'Custom AI models', 'Advanced analytics', 'Dedicated support', 'Custom integrations']
    }
  ];

  const stats = [
    { number: '40%', label: 'Increase in Sales' },
    { number: '60%', label: 'Time Saved' },
    { number: '85%', label: 'Lead Accuracy' },
    { number: '200%', label: 'ROI Improvement' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Sales Automation Solutions - Zion Tech Group"
        description="Revolutionize your sales process with AI-powered automation. Increase sales by 40%, save 60% time, and improve lead accuracy by 85%."
        keywords={['AI sales automation', 'lead scoring', 'sales forecasting', 'customer segmentation', 'sales optimization']}
        canonicalUrl="https://ziontechgroup.com/ai-sales-automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Sales Automation Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Automate your sales process and boost revenue with intelligent AI
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered sales automation platform helps you identify high-value leads, 
                optimize your sales process, and close more deals with less effort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    index === 1 ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                    className="cyber-button w-full text-center block"
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
                Ready to Automate Your Sales?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 400+ companies already using our AI sales automation solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
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

export default AISalesAutomationPage;