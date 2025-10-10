'use client';
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Search,
  FileText,
  BookOpen,
  Video,
  Download,
  ArrowRight,
  HelpCircle,
  Settings,
  Users,
  Globe
} from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      details: '+1 302 464 0950',
      availability: '24/7 Emergency Support',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      details: 'kleber@ziontechgroup.com',
      availability: 'Mon-Fri: 9AM-6PM EST',
      responseTime: 'Within 4 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help with our live chat support',
      details: 'Available on our website',
      availability: 'Mon-Fri: 9AM-6PM EST',
      responseTime: 'Immediate'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles', count: 45 },
    { id: 'getting-started', name: 'Getting Started', count: 12 },
    { id: 'ai-services', name: 'AI Services', count: 8 },
    { id: 'it-services', name: 'IT Services', count: 10 },
    { id: 'billing', name: 'Billing & Account', count: 6 },
    { id: 'troubleshooting', name: 'Troubleshooting', count: 9 }
  ];

  const faqItems = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Simply contact us through our contact form or call us at (302) 464-0950. We\'ll schedule a free consultation to understand your needs and recommend the best AI solutions for your business.',
      category: 'getting-started'
    },
    {
      question: 'What is included in your IT support services?',
      answer: 'Our IT support includes 24/7 monitoring, proactive maintenance, security updates, backup management, and immediate response to any technical issues. We also provide strategic IT consulting and technology planning.',
      category: 'it-services'
    },
    {
      question: 'How do you ensure data security and privacy?',
      answer: 'We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance with industry standards. All data is stored securely and we never share your information with third parties.',
      category: 'ai-services'
    },
    {
      question: 'What are your pricing options?',
      answer: 'We offer flexible pricing plans starting from $49/month for micro SaaS solutions to enterprise packages. Contact us for a custom quote based on your specific needs and requirements.',
      category: 'billing'
    },
    {
      question: 'Do you provide training for your solutions?',
      answer: 'Yes! We provide comprehensive training for all our solutions, including user training, administrator training, and ongoing support. We also offer documentation and video tutorials.',
      category: 'getting-started'
    },
    {
      question: 'How quickly can you implement a solution?',
      answer: 'Implementation time varies based on the complexity of the solution. Simple micro SaaS solutions can be deployed within 1-2 weeks, while complex enterprise solutions may take 2-3 months. We provide detailed timelines during consultation.',
      category: 'it-services'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs',
      type: 'Guide'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      link: '/tutorials',
      type: 'Video'
    },
    {
      icon: Download,
      title: 'Download Center',
      description: 'Software downloads, templates, and resources',
      link: '/downloads',
      type: 'Download'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      link: '/knowledge-base',
      type: 'Article'
    }
  ];

  const filteredFaq = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Support</span> Center
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We're here to help! Get the support you need with our comprehensive help center, 
            documentation, and expert technical assistance.
          </p>
        </div>
      </section>

      {/* Support Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportMethods.map((method, index) => (
              <div
                key={method.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <div className="text-cyan-400 font-semibold mb-2">{method.details}</div>
                <div className="text-sm text-gray-400 mb-2">{method.availability}</div>
                <div className="text-sm text-gray-500">Response: {method.responseTime}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search support articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our services and solutions
            </p>
          </div>
          
          <div className="space-y-6">
            {filteredFaq.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{item.question}</h3>
                <p className="text-gray-300 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Resources & Documentation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our comprehensive library of guides, tutorials, and documentation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div
                key={resource.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <div className="text-cyan-400 text-sm font-semibold mb-4">{resource.type}</div>
                <a
                  href={resource.link}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  <span>Access Resource</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Support</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;