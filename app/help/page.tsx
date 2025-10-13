import React, { useState } from 'react';
import { Search, HelpCircle, MessageCircle, Mail, Phone, ChevronRight, CheckCircle, AlertCircle, Info, Download } from 'lucide-react';

const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    {
      id: 'all',
      title: 'All Questions',
      count: 45
    },
    {
      id: 'getting-started',
      title: 'Getting Started',
      count: 12
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      count: 15
    },
    {
      id: 'it-services',
      title: 'IT Services',
      count: 10
    },
    {
      id: 'billing',
      title: 'Billing & Pricing',
      count: 8
    }
  ];

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through the contact form or call us at +1 302 464 0950. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.',
      helpful: 23
    },
    {
      id: 2,
      category: 'ai-services',
      question: 'What AI services do you offer?',
      answer: 'We offer comprehensive AI services including AI analytics, content generation, customer support automation, marketing automation, cybersecurity AI, and business intelligence. Each service is tailored to meet specific business needs.',
      helpful: 18
    },
    {
      id: 3,
      category: 'it-services',
      question: 'Do you provide cloud infrastructure services?',
      answer: 'Yes! We provide full cloud infrastructure services including setup, migration, management, and optimization. We work with major cloud providers like AWS, Azure, and Google Cloud to deliver scalable and secure solutions.',
      helpful: 21
    },
    {
      id: 4,
      category: 'billing',
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models including project-based, retainer, and subscription options. Pricing depends on the scope and complexity of your requirements. Contact us for a personalized quote.',
      helpful: 15
    },
    {
      id: 5,
      category: 'ai-services',
      question: 'How secure are your AI solutions?',
      answer: 'Security is our top priority. All our AI solutions include enterprise-grade security features, data encryption, compliance with industry standards (GDPR, SOC2), and regular security audits.',
      helpful: 19
    },
    {
      id: 6,
      category: 'it-services',
      question: 'Do you offer 24/7 support?',
      answer: 'Yes! We provide 24/7 support for all our services. Our support team is available around the clock to help with any issues or questions you may have.',
      helpful: 27
    }
  ];

  const contactMethods = [
    {
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      icon: <Mail className="w-6 h-6" />,
      contact: 'kleber@ziontechgroup.com',
      responseTime: 'Within 24 hours'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      icon: <Phone className="w-6 h-6" />,
      contact: '+1 302 464 0950',
      responseTime: 'Immediate'
    },
    {
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      icon: <MessageCircle className="w-6 h-6" />,
      contact: 'Start Chat',
      responseTime: 'Immediate'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Find answers to common questions, get support, and learn how to make the most of our services.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 text-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <div className="space-y-2">
                  <p className="text-cyan-400 font-medium">{method.contact}</p>
                  <p className="text-sm text-gray-400">{method.responseTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.title} ({category.count})
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                  <div className="flex items-center ml-4 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
                    <span>{faq.helpful} found helpful</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-gray-300">Try adjusting your search terms or browse different categories.</p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="/docs"
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <Info className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Documentation</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Comprehensive guides and API references
              </p>
              <div className="flex items-center text-cyan-400 text-sm group-hover:text-cyan-300">
                <span>View Docs</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </a>

            <a
              href="/tutorials"
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <HelpCircle className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Tutorials</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Step-by-step tutorials and guides
              </p>
              <div className="flex items-center text-purple-400 text-sm group-hover:text-purple-300">
                <span>Browse Tutorials</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </a>

            <a
              href="/demo"
              className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Live Demo</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                See our solutions in action
              </p>
              <div className="flex items-center text-green-400 text-sm group-hover:text-green-300">
                <span>Start Demo</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </a>

            <a
              href="/contact"
              className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-orange-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Contact Us</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Get personalized assistance
              </p>
              <div className="flex items-center text-orange-400 text-sm group-hover:text-orange-300">
                <span>Get Support</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </a>
          </div>
        </div>

        {/* Status Information */}
        <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-xl p-8 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">System Status</h3>
              <p className="text-gray-300">All systems operational</p>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;