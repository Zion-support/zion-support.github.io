'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Search, FileText, Clock, CheckCircle, ArrowRight, Zap, Shield, Globe, Brain, Target, BarChart } from 'lucide-react';

const AIRecruitmentAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Smart Candidate Matching',
      description: 'AI-powered matching algorithm that finds the best candidates for your roles'
    },
    {
      icon: FileText,
      title: 'Resume Analysis',
      description: 'Automated resume parsing and analysis with skill extraction and scoring'
    },
    {
      icon: Users,
      title: 'Candidate Screening',
      description: 'Automated initial screening with AI-powered interview questions'
    },
    {
      icon: Clock,
      title: 'Time-saving Automation',
      description: 'Reduce recruitment time by up to 70% with automated processes'
    },
    {
      icon: Target,
      title: 'Bias-free Hiring',
      description: 'Eliminate unconscious bias with AI-powered objective assessment'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Track recruitment metrics and optimize your hiring process'
    }
  ];

  const benefits = [
    'Reduce time-to-hire by 60%',
    'Improve candidate quality by 45%',
    'Eliminate unconscious bias in hiring',
    'Automated candidate communication',
    'Advanced skill assessment tools',
    'Integration with major job boards',
    'Customizable screening criteria',
    'Real-time recruitment analytics'
  ];

  const useCases = [
    {
      title: 'High-Volume Hiring',
      description: 'Perfect for companies hiring 50+ employees per month',
      icon: Users
    },
    {
      title: 'Technical Recruitment',
      description: 'Specialized tools for IT and engineering roles',
      icon: Brain
    },
    {
      title: 'Executive Search',
      description: 'Advanced matching for senior and C-level positions',
      icon: Target
    },
    {
      title: 'Diversity Hiring',
      description: 'Ensure diverse and inclusive hiring practices',
      icon: Globe
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'For small teams',
      features: [
        'Up to 50 job postings/month',
        'Basic AI matching',
        'Email support',
        'Standard integrations'
      ]
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'For growing companies',
      features: [
        'Up to 200 job postings/month',
        'Advanced AI features',
        'Priority support',
        'Custom workflows',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited job postings',
        'Full AI suite',
        '24/7 dedicated support',
        'Custom integrations',
        'White-label solution',
        'Advanced security'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Recruitment Assistant | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your hiring process with AI-powered recruitment tools. Automated candidate matching, resume analysis, and bias-free screening." />
        <meta name="keywords" content="AI recruitment, automated hiring, candidate matching, resume analysis, HR technology" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Recruitment Assistant</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your hiring process with AI-powered recruitment tools. Find the best candidates faster, reduce bias, and improve your hiring success rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Powerful Recruitment Features</h2>
              <p className="text-gray-300">Everything you need to streamline your hiring process</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Perfect For</h2>
              <p className="text-gray-300">Ideal for various recruitment scenarios and company sizes</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Proven Results</h2>
                <p className="text-gray-300">See how our clients have transformed their recruitment process</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
              <p className="text-gray-300">Flexible pricing options for teams of all sizes</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 ${
                  plan.popular ? 'border-2 border-cyan-500' : 'border border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Revolutionize Your Hiring?
              </h2>
              <p className="text-gray-300 mb-6">
                Join hundreds of companies using AI to find and hire the best talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIRecruitmentAssistantPage;