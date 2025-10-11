import React from 'react';
import { CheckCircle, Phone, Mail, MessageSquare, Clock, Users, Headphones, Shield, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your technical questions',
      availability: '24/7',
      responseTime: 'Within 2 hours'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Real-time assistance through our chat platform',
      availability: 'Business Hours',
      responseTime: 'Within 5 minutes'
    }
  ];

  const supportTiers = [
    {
      name: 'Basic Support',
      price: 'Included',
      features: [
        'Email support',
        'Knowledge base access',
        'Community forum',
        'Standard response times'
      ]
    },
    {
      name: 'Priority Support',
      price: '$99/month',
      features: [
        'Phone and email support',
        'Priority ticket handling',
        'Faster response times',
        'Dedicated support agent'
      ],
      popular: true
    },
    {
      name: 'Premium Support',
      price: '$299/month',
      features: [
        '24/7 phone support',
        'Dedicated account manager',
        'Custom SLA agreements',
        'On-site support available'
      ]
    }
  ];

  const faqItems = [
    {
      question: 'How do I contact support?',
      answer: 'You can reach us through phone, email, or live chat. All contact information is available on this page.'
    },
    {
      question: 'What are your support hours?',
      answer: 'We provide 24/7 support for critical issues. Standard support is available during business hours.'
    },
    {
      question: 'How quickly will I get a response?',
      answer: 'Response times vary by support tier. Priority support gets faster responses, typically within 2 hours.'
    },
    {
      question: 'Do you offer training?',
      answer: 'Yes, we provide comprehensive training sessions for all our products and services.'
    }
  ];

  const features = [
    {
      icon: Headphones,
      title: 'Expert Support Team',
      description: 'Our certified professionals are ready to help with any technical issues'
    },
    {
      icon: Shield,
      title: 'Secure Communication',
      description: 'All support communications are encrypted and secure'
    },
    {
      icon: Zap,
      title: 'Fast Resolution',
      description: 'We prioritize quick resolution of your technical problems'
    },
    {
      icon: Users,
      title: 'Dedicated Account Managers',
      description: 'Premium customers get dedicated account managers for personalized support'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get expert support for all your AI and IT solutions. 24/7 assistance from our certified professionals." />
        <meta name="keywords" content="support, technical support, customer service, help desk, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Support</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get the help you need when you need it. Our certified professionals are here to support you 
              with all your AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Support
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Documentation
              </button>
            </div>
          </div>

          {/* Support Channels */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <channel.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-white">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-white">{channel.responseTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Support Tiers */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Support Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {supportTiers.map((tier, index) => (
                <div 
                  key={index} 
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    tier.popular ? 'border-purple-400 ring-2 ring-purple-400/50' : 'border-white/20'
                  }`}
                >
                  {tier.popular && (
                    <div className="bg-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-white mb-6">{tier.price}</div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-8 py-3 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}>
                    {tier.price === 'Included' ? 'Already Included' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to get help? Contact our support team through any of these channels.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">support@ziontech.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MessageSquare className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300">Available 24/7</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Support Ticket
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Knowledge Base
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;