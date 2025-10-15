import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  GlobeAltIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      title: 'Technical Support',
      description: 'Get help with technical issues and integration problems',
      icon: CpuChipIcon,
      responseTime: '2-4 hours',
      availability: '24/7',
      color: 'text-cyan-400'
    },
    {
      title: 'Account Support',
      description: 'Assistance with billing, account management, and subscriptions',
      icon: CurrencyDollarIcon,
      responseTime: '1-2 hours',
      availability: 'Business Hours',
      color: 'text-green-400'
    },
    {
      title: 'Product Support',
      description: 'Help with our AI and IT solutions, features, and best practices',
      icon: GlobeAltIcon,
      responseTime: '4-8 hours',
      availability: 'Business Hours',
      color: 'text-purple-400'
    },
    {
      title: 'Emergency Support',
      description: 'Critical issues requiring immediate attention',
      icon: ShieldCheckIcon,
      responseTime: '30 minutes',
      availability: '24/7',
      color: 'text-red-400'
    }
  ];

  const faqItems = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Simply contact our team for a free consultation, and we\'ll help you choose the right AI solutions for your business needs.'
    },
    {
      question: 'What is your typical response time for support?',
      answer: 'Our response times vary by support type: Technical Support (2-4 hours), Account Support (1-2 hours), Product Support (4-8 hours), and Emergency Support (30 minutes).'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes! We provide 24/7 support for Technical Support and Emergency Support. Account and Product Support are available during business hours.'
    },
    {
      question: 'How can I contact support?',
      answer: 'You can reach us via phone (+1 302 464 0950), email (kleber@ziontechgroup.com), or through our online chat system. We also have a comprehensive knowledge base and documentation.'
    },
    {
      question: 'What if I need custom development?',
      answer: 'We offer custom AI and IT development services. Contact our team to discuss your specific requirements and we\'ll provide a tailored solution.'
    },
    {
      question: 'Do you provide training for your solutions?',
      answer: 'Yes! We offer comprehensive training programs, documentation, and ongoing support to ensure you get the most out of our solutions.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Support Center - Zion Tech Group"
        description="Get help and support for all our AI and IT solutions. 24/7 customer support available with expert assistance."
        keywords="support, help, customer service, technical support, contact support, AI support, IT support"
        canonicalUrl="https://ziontechgroup.com/support"
      />
      
      <div className="min-h-screen bg-slate-900 text-white futuristic-bg">
        {/* Animated Background */}
        <div className="futuristic-bg"></div>
        
        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(25)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold holographic mb-6 neon-text">
              Support Center
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We're here to help you succeed with our AI and IT solutions. Get the support you need, when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button neon-border-animated">
                Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="btn-futuristic neon-glow">
                Email Support
              </a>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
                Support Options
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support option that best fits your needs. We're committed to providing exceptional service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} 
                  className="group holographic-card glass-card p-6 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow`}>
                      <option.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-cyan-400 font-medium px-2 py-1 bg-cyan-400/10 rounded-full">
                      {option.availability}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors neon-text">
                    {option.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {option.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-300 mb-4">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span>Response time: {option.responseTime}</span>
                  </div>
                  
                  <button className="w-full cyber-button neon-border-animated text-center py-2 font-semibold transition-all duration-300 hover:scale-105">
                    Get Support
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
                Frequently Asked Questions
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our services and support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqItems.map((item, index) => (
                <div key={index} 
                  className="group holographic-card glass-card p-6 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors neon-text">
                    {item.question}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
                Contact Information
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Reach out to us through any of these channels for immediate assistance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group holographic-card glass-card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform neon-glow">
                  <PhoneIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors neon-text">
                  Phone Support
                </h3>
                <p className="text-gray-400 mb-4">
                  Call us directly for immediate assistance
                </p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="group holographic-card glass-card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform neon-glow">
                  <EnvelopeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors neon-text">
                  Email Support
                </h3>
                <p className="text-gray-400 mb-4">
                  Send us an email and we'll respond quickly
                </p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="group holographic-card glass-card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform neon-glow">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors neon-text">
                  Live Chat
                </h3>
                <p className="text-gray-400 mb-4">
                  Chat with our support team in real-time
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 holographic neon-text">
              Need Immediate Help?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Our support team is standing by to help you with any questions or issues. 
              Contact us now for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button neon-border-animated">
                Call Now: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="btn-futuristic neon-glow">
                Email Support
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;