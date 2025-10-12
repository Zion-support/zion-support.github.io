import React from 'react';
import { CheckCircle, ArrowRight, Mic, Zap, Shield, Globe, DollarSign, Star, Users, Clock, Brain, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIVoiceAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Natural Voice Recognition',
      description: 'Advanced speech recognition with 99% accuracy in multiple languages and accents.',
      benefits: ['Multi-language support', 'Accent adaptation', 'Noise cancellation', 'Real-time processing']
    },
    {
      icon: <Mic className="w-8 h-8 text-green-500" />,
      title: 'Conversational AI',
      description: 'Human-like conversations with context awareness and emotional intelligence.',
      benefits: ['Context awareness', 'Emotional intelligence', 'Multi-turn conversations', 'Personality customization']
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Voice Commands',
      description: 'Control your business applications and workflows with simple voice commands.',
      benefits: ['App control', 'Workflow automation', 'Custom commands', 'Integration APIs']
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security with local processing and encrypted voice data.',
      benefits: ['Local processing', 'Data encryption', 'Privacy protection', 'Compliance ready']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$59',
      period: '/month',
      features: [
        '1 voice assistant',
        'Basic commands',
        'Email support',
        'Mobile app',
        '1 language'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      features: [
        '5 voice assistants',
        'Advanced commands',
        'Priority support',
        'API access',
        '5 languages',
        'Custom integrations',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      features: [
        'Unlimited assistants',
        'Full command suite',
        'Dedicated support',
        'White-label options',
        'All languages',
        'Custom development',
        'Advanced analytics'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Provide 24/7 voice-based customer support with intelligent responses.',
      examples: ['Call routing', 'FAQ responses', 'Order tracking', 'Complaint handling']
    },
    {
      title: 'Office Automation',
      description: 'Control office systems and automate daily tasks with voice commands.',
      examples: ['Meeting scheduling', 'Email management', 'Calendar updates', 'Task creation']
    },
    {
      title: 'Healthcare',
      description: 'Assist healthcare professionals with patient information and documentation.',
      examples: ['Patient records', 'Appointment scheduling', 'Medication reminders', 'Voice notes']
    },
    {
      title: 'Smart Home',
      description: 'Control smart home devices and create automated voice-activated routines.',
      examples: ['Light control', 'Temperature adjustment', 'Security systems', 'Entertainment']
    }
  ];

  const integrations = [
    { name: 'Amazon Alexa', icon: '🔊', description: 'Alexa skill integration' },
    { name: 'Google Assistant', icon: '🎤', description: 'Google Actions support' },
    { name: 'Microsoft Cortana', icon: '💬', description: 'Cortana integration' },
    { name: 'Slack', icon: '💼', description: 'Slack voice commands' },
    { name: 'Salesforce', icon: '☁️', description: 'CRM voice control' },
    { name: 'Zendesk', icon: '🎫', description: 'Support ticket voice access' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Voice Assistant - Zion Tech Group</title>
        <meta name="description" content="Build intelligent voice assistants with our AI platform. Natural voice recognition, conversational AI, and voice commands for businesses." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Voice <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Assistant</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Create intelligent voice assistants with natural speech recognition and conversational AI. 
              Control your business with voice commands and provide hands-free experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Building
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advanced Voice AI Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build sophisticated voice assistants with cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect for Every Industry</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From customer service to smart homes, our voice AI adapts to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <span key={exampleIndex} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Seamless Platform Integration</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deploy on popular voice platforms and business tools
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{integration.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your voice AI needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                plan.popular ? 'border-2 border-purple-500' : 'border border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Build Your Voice Assistant?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Join the voice AI revolution and create hands-free experiences for your customers and team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Start Building Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/ai-services"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View All AI Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVoiceAssistantPage;