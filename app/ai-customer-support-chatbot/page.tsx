import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, MessageCircle, Zap, Brain, ArrowRight, Users, Shield, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICustomerSupportChatbotPage: React.FC = () => {
  const features = [
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities that understand customer intent and provide accurate responses.',
      icon: Brain,
      benefits: [
        'Intent recognition',
        'Context understanding',
        'Multi-language support',
        'Sentiment analysis'
      ]
    },
    {
      title: '24/7 Availability',
      description: 'Round-the-clock customer support with instant responses and immediate assistance.',
      icon: MessageCircle,
      benefits: [
        'Always available',
        'Instant responses',
        'No waiting time',
        'Consistent service'
      ]
    },
    {
      title: 'Intelligent Escalation',
      description: 'Smart escalation to human agents when complex issues require personal attention.',
      icon: Users,
      benefits: [
        'Smart routing',
        'Context preservation',
        'Seamless handoff',
        'Agent efficiency'
      ]
    },
    {
      title: 'Learning & Improvement',
      description: 'Continuous learning from interactions to improve responses and accuracy over time.',
      icon: Zap,
      benefits: [
        'Machine learning',
        'Response optimization',
        'Pattern recognition',
        'Continuous improvement'
      ]
    }
  ];

  const benefits = [
    'Reduce support costs by 60%',
    'Increase customer satisfaction by 85%',
    'Handle 80% of inquiries automatically',
    'Provide 24/7 support availability',
    'Improve response time by 90%',
    'Scale support operations',
    'Enhance customer experience'
  ];

  const useCases = [
    {
      title: 'E-commerce Support',
      description: 'Handle product inquiries, order tracking, and returns for online stores.',
      icon: MessageCircle
    },
    {
      title: 'SaaS Support',
      description: 'Provide technical support and onboarding assistance for software users.',
      icon: Brain
    },
    {
      title: 'General Support',
      description: 'Answer common questions and provide information about products and services.',
      icon: Users
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Transform your customer support with our AI Customer Support Chatbot. 24/7 availability, natural language processing, and intelligent escalation for better customer experience." />
        <meta name="keywords" content="AI chatbot, customer support chatbot, virtual assistant, customer service automation, AI support bot" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Customer Support
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Chatbot
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your customer support with our AI-powered chatbot. 24/7 availability, 
              natural language processing, and intelligent escalation for better customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Chatbot Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered chatbot provides comprehensive customer support capabilities.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
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
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Chatbot Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for businesses that need to provide excellent customer support at scale.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 mx-auto">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Chatbot?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered customer support that transforms your operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses who trust our AI Customer Support Chatbot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Building
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AICustomerSupportChatbotPage;