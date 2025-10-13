import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Heart, Star, TrendingUp, Shield } from 'lucide-react';

const AiCustomerExperiencePage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Intelligent customer segmentation based on behavior, preferences, and demographics.',
      benefits: ['Behavioral analysis', 'Demographic insights', 'Preference tracking', 'Personalized targeting']
    },
    {
      icon: MessageCircle,
      title: 'Conversational AI',
      description: 'Advanced chatbots and virtual assistants for seamless customer interactions.',
      benefits: ['24/7 support', 'Natural language processing', 'Multi-language support', 'Context awareness']
    },
    {
      icon: Heart,
      title: 'Sentiment Analysis',
      description: 'Real-time analysis of customer emotions and satisfaction levels.',
      benefits: ['Emotion detection', 'Satisfaction scoring', 'Trend analysis', 'Alert systems']
    },
    {
      icon: Star,
      title: 'Personalization Engine',
      description: 'AI-powered personalization for tailored customer experiences.',
      benefits: ['Dynamic content', 'Product recommendations', 'Custom offers', 'Behavioral targeting']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Predict customer needs and behaviors to proactively improve experiences.',
      benefits: ['Churn prediction', 'Upsell opportunities', 'Lifetime value', 'Risk assessment']
    },
    {
      icon: Shield,
      title: 'Customer Data Protection',
      description: 'Secure handling and protection of customer data and privacy.',
      benefits: ['Data encryption', 'Privacy compliance', 'Secure storage', 'Access controls']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Experience - Enhanced Customer Engagement | Zion Tech Group</title>
        <meta name="description" content="Transform customer experience with AI-powered solutions. Personalization, chatbots, sentiment analysis, and predictive insights." />
        <meta name="keywords" content="AI customer experience, customer engagement, personalization, chatbots, sentiment analysis, customer analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Customer
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform customer experience with AI-powered solutions. 
              Personalization, chatbots, sentiment analysis, and predictive insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              AI Customer Experience Features
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
                          <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
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

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI customer experience solutions and create memorable interactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Your AI Journey
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

export default AiCustomerExperiencePage;