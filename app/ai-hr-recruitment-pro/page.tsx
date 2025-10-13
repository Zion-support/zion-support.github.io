import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, Brain, Zap, Target, BarChart, TrendingUp, Clock, Star, Mic, Smartphone, Globe } from 'lucide-react';

const AiHrRecruitmentProPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Smart Candidate Screening',
      description: 'AI-powered candidate screening that identifies the best matches for your roles.',
      benefits: ['Resume analysis', 'Skill matching', 'Cultural fit assessment', 'Automated ranking']
    },
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Predict candidate success and retention using advanced ML models.',
      benefits: ['Success prediction', 'Retention analysis', 'Performance forecasting', 'Risk assessment']
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Streamline your recruitment process with intelligent automation.',
      benefits: ['Auto-scheduling', 'Email automation', 'Status updates', 'Pipeline management']
    },
    {
      icon: Target,
      title: 'Precision Matching',
      description: 'Match candidates to roles with high accuracy using AI algorithms.',
      benefits: ['Role matching', 'Skill alignment', 'Experience correlation', 'Cultural compatibility']
    },
    {
      icon: BarChart,
      title: 'Recruitment Analytics',
      description: 'Get insights into your recruitment process and candidate pipeline.',
      benefits: ['Pipeline analytics', 'Time-to-hire metrics', 'Source effectiveness', 'Conversion rates']
    },
    {
      icon: TrendingUp,
      title: 'Continuous Optimization',
      description: 'Continuously improve your recruitment process with AI insights.',
      benefits: ['Process optimization', 'Bias reduction', 'Quality improvement', 'Efficiency gains']
    }
  ];

  const benefits = [
    '60% faster candidate screening',
    '40% better candidate matches',
    '50% reduction in time-to-hire',
    'Automated interview scheduling',
    'Bias-free candidate evaluation',
    'Advanced recruitment analytics'
  ];

  return (
    <>
      <Helmet>
        <title>AI HR Recruitment Pro - Advanced Talent Acquisition | Zion Tech Group</title>
        <meta name="description" content="Transform your recruitment process with AI-powered talent acquisition. Smart screening, predictive analytics, and automated workflows for better hiring." />
        <meta name="keywords" content="AI recruitment, talent acquisition, candidate screening, HR automation, recruitment analytics, hiring optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI HR Recruitment
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your recruitment process with AI-powered talent acquisition. 
              Smart screening, predictive analytics, and automated workflows for better hiring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Advanced Recruitment Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Why Choose AI HR Recruitment Pro?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Recruitment?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of HR professionals already using AI-powered recruitment 
              to find and hire the best talent faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiHrRecruitmentProPage;