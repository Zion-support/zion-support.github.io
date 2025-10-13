import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Bot, Zap, Target, BarChart, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const AiEmailAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Mail,
      title: 'Smart Email Management',
      description: 'Automatically organize, prioritize, and respond to emails with AI-powered intelligence.',
      benefits: ['Smart categorization', 'Priority detection', 'Auto-responses', 'Email scheduling']
    },
    {
      icon: Bot,
      title: 'AI-Powered Responses',
      description: 'Generate contextual and professional email responses using advanced AI.',
      benefits: ['Context-aware replies', 'Tone matching', 'Grammar correction', 'Multi-language support']
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Set up intelligent email workflows that work 24/7 to improve productivity.',
      benefits: ['Auto-forwarding', 'Smart filtering', 'Template suggestions', 'Follow-up reminders']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Get detailed insights into your email performance and communication patterns.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ];

  const benefits = [
    'Save 10+ hours per week on email management',
    'Improve response time by 80%',
    'Increase email open rates by 45%',
    'Reduce email-related stress by 60%',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Transform your email management with our AI-powered email assistant. Automate responses, organize emails, and boost productivity." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Email
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Assistant
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your email management with our AI-powered assistant. Automate responses, 
              organize emails, and boost productivity with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to revolutionize your email management and communication workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Email Assistant?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of email management with our cutting-edge AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30">
                <CheckCircle className="w-8 h-8 text-cyan-400 mr-4 flex-shrink-0" />
                <span className="text-lg text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Email Management?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have already revolutionized their email workflow 
            with our AI-powered assistant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiEmailAssistantPage;
