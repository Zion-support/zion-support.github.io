'use client';
import React from 'react';
import { Brain, BarChart, Target, Zap, TrendingUp, Users, Award, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIMLPage: React.FC = () => {
  const features = [
    {
      title: 'Predictive Analytics',
      description: 'Build models that predict future outcomes with high accuracy',
      icon: Target,
      benefits: ['High accuracy', 'Real-time predictions', 'Custom algorithms']
    },
    {
      title: 'Custom Model Development',
      description: 'Develop tailored ML models for your specific business needs',
      icon: Brain,
      benefits: ['Custom solutions', 'Domain expertise', 'Scalable models']
    },
    {
      title: 'Data Pipeline Setup',
      description: 'Automated data processing and model training pipelines',
      icon: Database,
      benefits: ['Automated processing', 'Real-time updates', 'Error handling']
    },
    {
      title: 'Model Monitoring',
      description: 'Continuous monitoring and optimization of ML models',
      icon: BarChart,
      benefits: ['Performance tracking', 'Drift detection', 'Auto-retraining']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Machine Learning Solutions - Zion Tech Group"
        description="Custom machine learning solutions for predictive analytics, model development, and data insights. Transform your data into actionable intelligence."
        keywords={['machine learning', 'ML solutions', 'predictive analytics', 'custom models', 'data science', 'AI models']}
        canonicalUrl="https://ziontechgroup.com/ai-ml"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Machine Learning Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with custom machine learning solutions. 
              From predictive analytics to automated decision-making, we build ML models that drive results.
            </p>
            <div className="text-2xl font-bold text-cyan-400 mb-4">$1,500/month</div>
            <p className="text-gray-300">Custom ML development and deployment</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">ML Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-purple-400 rounded-full mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Harness the Power of Machine Learning?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our ML solutions have helped businesses achieve 40% accuracy improvements and 60% cost reductions. 
                Let's build the perfect ML solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your ML Journey
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
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

export default AIMLPage;