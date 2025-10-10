'use client';
import React from 'react';
import { Users, Search, FileText, Clock, CheckCircle, Star, ArrowRight, Brain, Target, BarChart, Zap, Shield, Globe, Phone, Mail } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AIRecruitmentAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Candidate Screening',
      description: 'Automatically screen and rank candidates with 90% accuracy using advanced AI algorithms'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Intelligent Job Matching',
      description: 'Match candidates to job requirements using semantic analysis and skill assessment'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Resume Analysis',
      description: 'Extract key information from resumes and identify top talent automatically'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Sourcing Automation',
      description: 'Automatically source candidates from multiple platforms and databases'
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into recruitment metrics and hiring performance'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Interview Scheduling',
      description: 'Automated interview scheduling with calendar integration and reminders'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50 job postings/month',
        'Basic AI screening',
        'Resume parsing',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 200 job postings/month',
        'Advanced AI matching',
        'Multi-platform sourcing',
        'Priority support',
        'Advanced analytics',
        'Interview scheduling',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited job postings',
        'Custom AI models',
        'White-label solution',
        '24/7 dedicated support',
        'Custom integrations',
        'SLA guarantee',
        'On-site training'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Reduce Time-to-Hire',
      description: 'Cut hiring time by up to 60% with automated screening and matching',
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      stats: '60% faster hiring process'
    },
    {
      title: 'Improve Quality',
      description: 'Find better candidates with AI-powered matching and assessment',
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      stats: '40% better candidate quality'
    },
    {
      title: 'Lower Costs',
      description: 'Reduce recruitment costs through automation and efficiency',
      icon: <BarChart className="w-8 h-8 text-green-400" />,
      stats: '50% cost reduction'
    },
    {
      title: 'Bias Reduction',
      description: 'Eliminate unconscious bias with objective AI screening',
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      stats: '85% bias reduction'
    }
  ];

  const useCases = [
    {
      title: 'High-Volume Hiring',
      description: 'Handle mass recruitment for retail, hospitality, and customer service roles',
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      benefits: ['Process 1000+ applications', 'Automated screening', 'Bulk communication', 'Fast decision making']
    },
    {
      title: 'Technical Recruitment',
      description: 'Find and assess technical talent with skill-based matching',
      icon: <FileText className="w-8 h-8 text-green-400" />,
      benefits: ['Code assessment', 'Technical screening', 'Portfolio analysis', 'Skill verification']
    },
    {
      title: 'Executive Search',
      description: 'Identify and evaluate senior leadership candidates',
      icon: <Target className="w-8 h-8 text-purple-400" />,
      benefits: ['Leadership assessment', 'Cultural fit analysis', 'Reference checking', 'Background verification']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Recruitment Assistant - Zion Tech Group"
        description="Revolutionary AI-powered recruitment platform. Reduce time-to-hire by 60%, improve candidate quality by 40%, and eliminate bias with intelligent screening and matching."
        keywords={['AI recruitment', 'recruitment automation', 'candidate screening', 'hiring AI', 'talent acquisition', 'HR technology']}
        canonicalUrl="https://ziontechgroup.com/ai-recruitment-assistant"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                <span>AI Recruitment Assistant</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Recruitment Assistant
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your hiring process with AI-powered recruitment automation. 
                Find the best candidates faster, reduce bias, and improve hiring quality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
                >
                  Get Free Trial
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
                <div className="text-gray-300">Faster Hiring</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-gray-300">Better Quality</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">85%</div>
                <div className="text-gray-300">Bias Reduction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powered by cutting-edge artificial intelligence and machine learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Proven Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your recruitment process with measurable results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4">{benefit.description}</p>
                  <div className="text-lg font-bold text-blue-400">{benefit.stats}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for all types of recruitment needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card hologram-card p-8">
                  <div className="mb-6">
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your recruitment needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card hologram-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="tel:+13024640950"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-blue-400 text-slate-900 hover:bg-blue-300'
                        : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 300+ companies already using our AI recruitment assistant to find better talent faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIRecruitmentAssistantPage;