import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

const SupportPage: React.FC = () => {
  const supportChannels = [
    {
      title: '24/7 Phone Support',
      description: 'Get immediate assistance from our technical experts via phone.',
      icon: PhoneIcon,
      availability: '24/7',
      responseTime: 'Immediate',
      contact: '+1-302-464-0950'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed queries and receive comprehensive responses.',
      icon: EnvelopeIcon,
      availability: '24/7',
      responseTime: 'Within 2 hours',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team in real-time for quick assistance.',
      icon: ChatBubbleLeftRightIcon,
      availability: 'Business Hours',
      responseTime: 'Within 5 minutes',
      contact: 'Start Chat'
    }
  ];

  const supportTiers = [
    {
      name: 'Basic Support',
      price: 'Included',
      description: 'Standard support for all our services',
      features: [
        'Email support',
        'Business hours response',
        'Knowledge base access',
        'Basic troubleshooting'
      ],
      popular: false
    },
    {
      name: 'Priority Support',
      price: '$299/month',
      description: 'Enhanced support with faster response times',
      features: [
        'Priority email support',
        'Phone support',
        'Faster response times',
        'Dedicated support agent',
        'Advanced troubleshooting'
      ],
      popular: true
    },
    {
      name: 'Premium Support',
      price: '$599/month',
      description: 'Comprehensive support with dedicated resources',
      features: [
        '24/7 phone support',
        'Dedicated support team',
        'Proactive monitoring',
        'Custom solutions',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Contact our sales team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions.'
    },
    {
      question: 'What is your typical response time for support requests?',
      answer: 'For basic support, we respond within 24 hours. Priority support customers get responses within 2 hours, and premium support customers get immediate assistance.'
    },
    {
      question: 'Do you offer training for your solutions?',
      answer: 'Yes, we provide comprehensive training programs for all our solutions, including documentation, video tutorials, and live training sessions.'
    },
    {
      question: 'Can I upgrade or downgrade my support plan?',
      answer: 'Absolutely! You can change your support plan at any time. Contact our support team to discuss your needs and we\'ll help you find the right plan.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get comprehensive support for all your AI and IT solutions. 24/7 phone support, email support, and live chat assistance." />
        <meta name="keywords" content="support, help, customer service, technical support, 24/7 support, troubleshooting" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support services. 
              We're here to ensure your success with our AI and IT solutions.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Support
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Support</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to get the help you need, when you need it
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                    {channel.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {channel.description}
                  </p>
                  <div className="space-y-2 mb-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <span>Available: {channel.availability}</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 mr-2" />
                      <span>Response: {channel.responseTime}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-purple-400 font-semibold">{channel.contact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Support <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support level that best fits your needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {supportTiers.map((tier, index) => (
                <div key={index} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift hover-glow glass-dark relative ${
                  tier.popular ? 'border-purple-500 ring-2 ring-purple-500/20 scale-105' : 'border-slate-600 hover:border-purple-500'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700' 
                        : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our services and support
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                Contact Support
                <QuestionMarkCircleIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/tutorials" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                View Tutorials
                <AcademicCapIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;