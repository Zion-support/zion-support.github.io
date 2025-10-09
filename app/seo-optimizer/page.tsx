'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, ArrowRight, CheckCircle, TrendingUp, Target, BarChart, Zap } from 'lucide-react';

const SEOOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'AI Keyword Research',
      description: 'Discover high-value keywords with AI-powered research and competitor analysis.',
      benefits: ['Long-tail keywords', 'Competitor analysis', 'Search volume data']
    },
    {
      icon: Target,
      title: 'Content Optimization',
      description: 'Optimize your content for search engines with AI-driven recommendations.',
      benefits: ['Readability analysis', 'Keyword density', 'Meta tag optimization']
    },
    {
      icon: BarChart,
      title: 'Performance Tracking',
      description: 'Monitor your SEO performance with detailed analytics and reporting.',
      benefits: ['Rank tracking', 'Traffic analysis', 'Conversion metrics']
    },
    {
      icon: Zap,
      title: 'Technical SEO',
      description: 'Fix technical issues that impact your search engine rankings.',
      benefits: ['Site speed optimization', 'Mobile optimization', 'Schema markup']
    }
  ];

  const benefits = [
    { icon: TrendingUp, text: '300% increase in organic traffic' },
    { icon: Target, text: '95% keyword ranking improvement' },
    { icon: BarChart, text: 'Real-time analytics' },
    { icon: Zap, text: 'Automated optimization' }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        <section className="relative pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-orange-500/20 rounded-full px-4 py-2 mb-8">
                <Search className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300 text-sm font-medium">SEO Optimizer</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                AI SEO
                <span className="block bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  Optimizer
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Boost your search engine rankings with AI-powered SEO optimization. 
                Get more organic traffic and higher conversions with our intelligent tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="cyber-button-enhanced px-8 py-4 text-lg">
                  Start Optimizing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="cyber-button-outline px-8 py-4 text-lg">
                  Free SEO Audit
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <benefit.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">{benefit.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">SEO Optimization Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive SEO tools powered by AI to improve your search engine visibility and rankings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8 hover:cyber-glow-effect transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SEOOptimizerPage;
