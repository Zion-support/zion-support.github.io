'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Phone, Mail, MessageSquare, FileText, Search, Clock, CheckCircle, ArrowRight, HelpCircle, BookOpen, Video, Users, Zap } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    {
      id: 'general',
      name: 'General',
      icon: HelpCircle,
      questions: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer comprehensive AI solutions, IT services, cloud migration, cybersecurity, and digital transformation services for businesses of all sizes.'
        },
        {
          question: 'How do I get started with your services?',
          answer: 'Contact us through our contact form or call +1 302 464 0950. We\'ll schedule a consultation to discuss your needs and recommend the best solutions.'
        },
        {
          question: 'Do you offer 24/7 support?',
          answer: 'Yes, we provide 24/7 support for all our enterprise clients. Our support team is available around the clock to assist with any issues.'
        }
      ]
    },
    {
      id: 'technical',
      name: 'Technical',
      icon: Zap,
      questions: [
        {
          question: 'What technologies do you use?',
          answer: 'We use cutting-edge technologies including React, Node.js, Python, TensorFlow, AWS, Azure, Docker, Kubernetes, and many more modern frameworks and tools.'
        },
        {
          question: 'Do you provide API documentation?',
          answer: 'Yes, we provide comprehensive API documentation for all our services. You can access it through our developer portal or contact us for specific documentation.'
        },
        {
          question: 'How do you ensure data security?',
          answer: 'We implement enterprise-grade security measures including encryption, access controls, regular audits, and compliance with industry standards like SOC 2 and GDPR.'
        }
      ]
    },
    {
      id: 'billing',
      name: 'Billing',
      icon: FileText,
      questions: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including monthly subscriptions, project-based pricing, and custom enterprise solutions. Contact us for detailed pricing information.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer refunds within 30 days of purchase for subscription services, subject to our refund policy. Project-based work is handled on a case-by-case basis.'
        },
        {
          question: 'How can I update my payment information?',
          answer: 'You can update your payment information through your account dashboard or contact our billing team at billing@ziontechgroup.com.'
        }
      ]
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 302 464 0950',
      availability: '24/7 for Enterprise clients',
      color: 'text-green-400'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond quickly',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours',
      color: 'text-blue-400'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'text-purple-400'
    },
    {
      icon: FileText,
      title: 'Ticket System',
      description: 'Submit a support ticket for detailed issues',
      contact: 'support.ziontechgroup.com',
      availability: '24/7 ticket submission',
      color: 'text-orange-400'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/docs'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '/tutorials'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      link: '/forum'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable database of articles',
      link: '/knowledge-base'
    }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqCategories.flatMap(cat => cat.questions)
    : faqCategories.find(cat => cat.id === selectedCategory)?.questions || [];

  const searchFilteredFAQs = searchQuery 
    ? filteredFAQs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFAQs;

  return (
    <>
      <SEOOptimizer
        title="Support Center - Zion Tech Group"
        description="Get help and support for Zion Tech Group services. Find answers, contact support, and access resources."
        keywords={['support', 'help', 'customer service', 'technical support', 'Zion Tech Group']}
        canonicalUrl="https://ziontechgroup.com/support"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support resources and expert assistance.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
          </div>

          {/* Support Channels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportChannels.map((channel, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <channel.icon className={`w-12 h-12 mx-auto mb-4 ${channel.color}`} />
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <p className="text-cyan-400 font-semibold mb-2">{channel.contact}</p>
                <p className="text-sm text-gray-400">{channel.availability}</p>
              </div>
            ))}
          </div>

          {/* FAQ Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-cyan-400 text-slate-900'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                All Categories
              </button>
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-400 text-slate-900'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {searchFilteredFAQs.map((faq, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                >
                  <resource.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400 group-hover:text-white transition-colors" />
                  <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Our expert support team is ready to assist you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Support
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary px-8 py-4 text-lg font-semibold inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SupportPage;