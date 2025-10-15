import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Mic, 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  Clock, 
  DollarSign, 
  Globe, 
  Smartphone, 
  Headphones,
  Settings,
  BarChart3
} from 'lucide-react';

const ZionAIVoiceAssistantProPage: React.FC = () => {
  const features = [
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for understanding complex voice commands.',
      icon: Brain,
    },
    {
      title: 'Multi-language Support',
      description: 'Support for multiple languages and accents.',
      icon: Globe,
    },
    {
      title: 'Custom Voice Training',
      description: 'Train the assistant to recognize your specific voice patterns.',
      icon: Mic,
    },
    {
      title: 'Integration APIs',
      description: 'Easy integration with your existing systems and applications.',
      icon: Settings,
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      features: [
        'Up to 1,000 interactions',
        'Basic voice recognition',
        'Email support',
        'Standard integrations',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      features: [
        'Up to 10,000 interactions',
        'Advanced voice recognition',
        'Priority support',
        'Custom integrations',
        'Analytics dashboard',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$249',
      period: '/month',
      features: [
        'Unlimited interactions',
        'Premium voice recognition',
        '24/7 support',
        'White-label solution',
        'Custom voice training',
        'Dedicated account manager',
      ],
      popular: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Voice Assistant Pro - Advanced Voice AI Solution</title>
        <meta name="description" content="Transform your business with our advanced AI voice assistant. Natural language processing, multi-language support, and seamless integrations." />
        <meta name="keywords" content="AI voice assistant, voice AI, natural language processing, voice recognition, virtual assistant" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-voice-assistant-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI <span className="text-cyan-400">Voice Assistant Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced AI voice assistant. Natural language processing, multi-language support, and seamless integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Advanced Voice AI Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-cyan-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                        : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business with Voice AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of AI voice assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIVoiceAssistantProPage;
