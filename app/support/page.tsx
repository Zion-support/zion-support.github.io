import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, MessageCircle, Phone, Mail, Clock, Search, HelpCircle, BookOpen, FileText, Users } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqItems = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team at kleber@ziontechgroup.com or call (302) 464-0950 for a free consultation. We\'ll assess your needs and create a custom implementation plan.',
      category: 'Getting Started'
    },
    {
      question: 'What AI models do you use?',
      answer: 'We use a combination of state-of-the-art models including GPT-4, Claude, custom fine-tuned models, and proprietary algorithms optimized for enterprise use cases.',
      category: 'Technical'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes! We provide 24/7 support for all our enterprise clients. Our support team is available around the clock to ensure your systems run smoothly.',
      category: 'Support'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing varies based on your specific needs and usage. We offer flexible plans starting from $199/month for basic services to custom enterprise solutions. Contact us for a personalized quote.',
      category: 'Pricing'
    },
    {
      question: 'How secure is my data?',
      answer: 'Security is our top priority. We use bank-level encryption, comply with GDPR and SOC 2 standards, and implement strict access controls to protect your data.',
      category: 'Security'
    },
    {
      question: 'Can I integrate with my existing systems?',
      answer: 'Absolutely! We provide comprehensive APIs and integration support for most popular platforms including Salesforce, HubSpot, Microsoft, and custom systems.',
      category: 'Integration'
    }
  ];

  const supportChannels = [
    {
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      icon: <Mail className="w-6 h-6" />,
      contact: 'kleber@ziontechgroup.com',
      responseTime: 'Within 2 hours',
      available: '24/7'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      icon: <Phone className="w-6 h-6" />,
      contact: '(302) 464-0950',
      responseTime: 'Immediate',
      available: '24/7'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help through our chat system',
      icon: <MessageCircle className="w-6 h-6" />,
      contact: 'Available on website',
      responseTime: 'Immediate',
      available: 'Business hours'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: <BookOpen className="w-6 h-6" />,
      contact: 'Self-service',
      responseTime: 'Immediate',
      available: '24/7'
    }
  ];

  const resources = [
    {
      title: 'API Documentation',
      description: 'Complete API reference and integration guides',
      icon: <FileText className="w-6 h-6" />,
      link: '/api-docs'
    },
    {
      title: 'User Guides',
      description: 'Step-by-step guides for all our services',
      icon: <BookOpen className="w-6 h-6" />,
      link: '/docs'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and get peer support',
      icon: <Users className="w-6 h-6" />,
      link: '/community'
    },
    {
      title: 'Status Page',
      description: 'Check system status and uptime information',
      icon: <CheckCircle className="w-6 h-6" />,
      link: '/status'
    }
  ];

  const filteredFAQs = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
              Support Center
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              We're here to help you succeed
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support resources, 
              expert team, and 24/7 assistance. Your success is our priority.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center justify-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center justify-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📧 Email Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {supportChannels.map((channel, index) => (
              <div key={index} className="cyber-card hologram-card text-center">
                <div className="text-cyan-400 flex justify-center mb-4">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="text-cyan-400 font-semibold">{channel.contact}</div>
                  <div className="text-gray-400">Response: {channel.responseTime}</div>
                  <div className="text-gray-400">Available: {channel.available}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((item, index) => (
              <div key={index} className="cyber-card mb-6">
                <div className="flex items-start space-x-4">
                  <div className="text-cyan-400 flex-shrink-0 mt-1">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                      <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive documentation and resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {resources.map((resource, index) => (
              <Link
                key={index}
                to={resource.link}
                className="cyber-card hologram-card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-cyan-400 flex justify-center mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <div className="flex items-center justify-center text-cyan-400">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our expert support team is ready to help you with any questions or issues. 
            Contact us today and we'll get back to you within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              📧 Email Us
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 24/7 Support • ✓ Expert Team • ✓ Quick Response</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;