import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MessageCircle, Phone, Mail, Clock, HelpCircle, FileText, Video, BookOpen, ArrowRight } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqItems = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and create a customized implementation plan. We offer comprehensive onboarding and training to ensure your success.',
      category: 'Getting Started'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity and scope. Simple AI implementations can take 2-4 weeks, while comprehensive enterprise solutions may take 3-6 months. We provide detailed timelines during the planning phase.',
      category: 'Project Management'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes! We provide 24/7 support for all our enterprise clients. Our support team is available around the clock to address any issues or questions you may have.',
      category: 'Support'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We maintain the highest security standards including SOC 2 compliance, ISO 27001 certification, end-to-end encryption, and regular security audits. Your data security is our top priority.',
      category: 'Security'
    },
    {
      question: 'Can I integrate your solutions with existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with your existing infrastructure. We support most major platforms and can create custom integrations as needed.',
      category: 'Integration'
    },
    {
      question: 'What happens if I need to scale my solution?',
      answer: 'Our solutions are built to scale with your business. We offer flexible scaling options and can adjust your plan as your needs grow. There are no hidden fees for scaling up.',
      category: 'Scaling'
    }
  ];

  const supportCategories = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: BookOpen,
      link: '/docs',
      color: 'text-blue-400'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      link: '/tutorials',
      color: 'text-purple-400'
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation',
      icon: FileText,
      link: '/api-docs',
      color: 'text-green-400'
    },
    {
      title: 'Status Page',
      description: 'Real-time system status',
      icon: HelpCircle,
      link: '/status',
      color: 'text-orange-400'
    }
  ];

  const contactMethods = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      icon: Phone,
      contact: '+1 (302) 464-0950',
      availability: '24/7 Available',
      color: 'text-green-400'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours',
      color: 'text-blue-400'
    },
    {
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      icon: MessageCircle,
      contact: 'Start Chat',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get help when you need it. Our comprehensive support resources and expert team are here to assist you.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Quick Contact Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Get Help Now
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="cyber-card p-8 text-center">
                <method.icon className={`w-12 h-12 ${method.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <div className="text-cyan-400 font-semibold mb-2">{method.contact}</div>
                <div className="text-gray-400 text-sm">{method.availability}</div>
                <Link
                  to="/contact"
                  className="cyber-button inline-flex items-center mt-4"
                >
                  {method.title === 'Live Chat' ? 'Start Chat' : 'Contact Us'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Support Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Support Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="cyber-card p-6 text-center hover:scale-105 transition-transform duration-200"
              >
                <category.icon className={`w-12 h-12 ${category.color} mx-auto mb-4`} />
                <h3 className="text-lg font-bold text-white mb-3">{category.title}</h3>
                <p className="text-gray-300 text-sm">{category.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full whitespace-nowrap">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Support Hours */}
        <section className="cyber-card p-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-cyan-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Support Hours</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-gray-300">24/7 Available</p>
              <p className="text-cyan-400 font-semibold">+1 (302) 464-0950</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
              <p className="text-gray-300">Response within 2 hours</p>
              <p className="text-cyan-400 font-semibold">support@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-gray-300">Mon-Fri 9AM-6PM EST</p>
              <p className="text-cyan-400 font-semibold">Available on website</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SupportPage;