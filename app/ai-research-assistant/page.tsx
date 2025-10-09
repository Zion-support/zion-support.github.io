'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Search, Brain, BookOpen, Zap, Shield, Users, CheckCircle, Star, ArrowRight, Phone, Mail, FileText, Lightbulb, Target } from 'lucide-react';

const AIResearchAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Intelligent Search',
      description: 'Find relevant information across multiple sources with AI-powered search capabilities.',
      benefits: ['Multi-source Search', 'Semantic Understanding', 'Relevance Ranking', 'Context Awareness']
    },
    {
      icon: Brain,
      title: 'Knowledge Synthesis',
      description: 'Combine information from multiple sources to create comprehensive insights.',
      benefits: ['Information Integration', 'Pattern Recognition', 'Insight Generation', 'Knowledge Mapping']
    },
    {
      icon: BookOpen,
      title: 'Document Analysis',
      description: 'Analyze and extract key information from research papers, reports, and documents.',
      benefits: ['Text Extraction', 'Key Point Identification', 'Summary Generation', 'Citation Analysis']
    },
    {
      icon: Lightbulb,
      title: 'Hypothesis Generation',
      description: 'Generate research hypotheses and suggest new areas of investigation.',
      benefits: ['Idea Generation', 'Research Gaps', 'Methodology Suggestions', 'Trend Analysis']
    }
  ];

  const useCases = [
    {
      title: 'Academic Research',
      description: 'Accelerate academic research with AI-powered literature review and analysis',
      icon: BookOpen,
      results: ['70% faster literature review', '90% more comprehensive coverage', 'Better research quality', 'Time savings']
    },
    {
      title: 'Market Research',
      description: 'Conduct thorough market research and competitive analysis',
      icon: Target,
      results: ['Comprehensive market insights', 'Competitor analysis', 'Trend identification', 'Strategic recommendations']
    },
    {
      title: 'Legal Research',
      description: 'Find relevant case law, statutes, and legal precedents quickly',
      icon: FileText,
      results: ['Faster case research', 'Comprehensive legal coverage', 'Precedent identification', 'Improved accuracy']
    },
    {
      title: 'Scientific Discovery',
      description: 'Accelerate scientific discovery through AI-powered research assistance',
      icon: Lightbulb,
      results: ['Faster hypothesis generation', 'Cross-disciplinary insights', 'Pattern recognition', 'Innovation acceleration']
    }
  ];

  const industries = [
    {
      name: 'Academia',
      description: 'Research papers, literature reviews, and academic analysis',
      icon: '🎓'
    },
    {
      name: 'Healthcare',
      description: 'Medical research, drug discovery, and clinical studies',
      icon: '🏥'
    },
    {
      name: 'Legal',
      description: 'Case law research, legal precedents, and compliance analysis',
      icon: '⚖️'
    },
    {
      name: 'Finance',
      description: 'Market research, investment analysis, and risk assessment',
      icon: '💰'
    },
    {
      name: 'Technology',
      description: 'Patent research, technical analysis, and innovation tracking',
      icon: '💻'
    },
    {
      name: 'Government',
      description: 'Policy research, regulatory analysis, and public sector insights',
      icon: '🏛️'
    }
  ];

  const pricingPlans = [
    {
      name: 'Researcher',
      price: '$299',
      period: '/month',
      description: 'Perfect for individual researchers',
      features: [
        'Up to 1,000 queries/month',
        'Basic research tools',
        'Email support',
        'Standard data sources',
        'Basic analytics'
      ]
    },
    {
      name: 'Team',
      price: '$799',
      period: '/month',
      description: 'Ideal for research teams',
      features: [
        'Up to 10,000 queries/month',
        'Advanced AI models',
        'Priority support',
        'Custom data sources',
        'Collaboration tools',
        'Advanced analytics',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited queries',
        'Custom AI development',
        '24/7 dedicated support',
        'On-premise deployment',
        'SLA guarantees',
        'Custom training programs',
        'Dedicated account manager'
      ]
    }
  ];

  const stats = [
    { number: '70%', label: 'Faster Research' },
    { number: '90%', label: 'More Comprehensive' },
    { number: '1000+', label: 'Data Sources' },
    { number: '24/7', label: 'AI Assistant' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Research Assistant - Zion Tech Group"
        description="Accelerate research by 70% with AI-powered research assistant. Intelligent search, knowledge synthesis, and document analysis for researchers and organizations."
        keywords={['AI research assistant', 'research automation', 'knowledge synthesis', 'document analysis', 'intelligent search', 'research AI']}
        canonicalUrl="https://ziontechgroup.com/ai-research-assistant"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Research Assistant
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Accelerate research by 70% with intelligent AI-powered research assistance
              </p>
              <div className="flex items-center justify-center space-x-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Search className="w-5 h-5 text-cyan-400" />
                  <span>70% Faster</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-cyan-400" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>1000+ Sources</span>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Research Capabilities
              </h2>
              <p className="text-xl text-gray-400">
                Powerful AI tools for every research need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-sm text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-400">
                See how AI research assistant transforms different fields
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-400">
                Research assistant solutions for every industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400">{industry.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-400">
                Flexible pricing for researchers and organizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                    plan.name === 'Team'
                      ? 'border-cyan-500 shadow-2xl shadow-cyan-500/25'
                      : 'border-gray-700 hover:border-cyan-400'
                  }`}
                >
                  {plan.name === 'Team' && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.name === 'Team'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Accelerate Your Research?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start using AI to make your research faster, more comprehensive, and more effective
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIResearchAssistantPage;