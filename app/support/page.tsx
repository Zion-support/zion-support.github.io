'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Video, 
  BookOpen, 
  FileText, 
  ArrowRight, 
  ChevronRight, 
  Star, 
  Users, 
  Shield, 
  Zap 
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'all', label: 'All Topics', count: 25 },
    { name: 'getting-started', label: 'Getting Started', count: 8 },
    { name: 'billing', label: 'Billing & Plans', count: 5 },
    { name: 'technical', label: 'Technical Issues', count: 7 },
    { name: 'api', label: 'API & Integration', count: 5 }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our quick start guide. Our team will help you set up your first AI project within 24 hours.',
      category: 'getting-started',
      helpful: 95
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Enterprise clients can also set up invoicing and payment terms.',
      category: 'billing',
      helpful: 88
    },
    {
      id: 3,
      question: 'How do I integrate your API into my application?',
      answer: 'Our API is RESTful and well-documented. You can find comprehensive documentation, code examples, and SDKs for popular programming languages in our developer portal.',
      category: 'api',
      helpful: 92
    },
    {
      id: 4,
      question: 'What is your uptime guarantee?',
      answer: 'We guarantee 99.9% uptime for all our services. If we fall below this threshold, you may be eligible for service credits as outlined in our SLA.',
      category: 'technical',
      helpful: 90
    },
    {
      id: 5,
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no cancellation fees, and you\'ll continue to have access to your services until the end of your current billing period.',
      category: 'billing',
      helpful: 87
    },
    {
      id: 6,
      question: 'Do you offer custom AI model development?',
      answer: 'Yes! Our AI research team can develop custom models tailored to your specific needs. We work with you to understand your requirements and deliver solutions that fit your business perfectly.',
      category: 'technical',
      helpful: 93
    },
    {
      id: 7,
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including end-to-end encryption, SOC 2 compliance, regular security audits, and strict access controls to protect your data.',
      category: 'technical',
      helpful: 89
    },
    {
      id: 8,
      question: 'How can I contact your support team?',
      answer: 'You can reach our support team through live chat, email, or phone. We also offer video calls for complex issues. All contact methods are available 24/7.',
      category: 'getting-started',
      helpful: 85
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed responses to complex issues',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Screen sharing and live demonstrations',
      availability: 'Business Hours',
      responseTime: 'Scheduled',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/docs',
      type: 'Guide'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '/tutorials',
      type: 'Video'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable articles and FAQs',
      link: '/knowledge-base',
      type: 'Article'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      link: '/community',
      type: 'Community'
    }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const searchedFaqs = searchQuery 
    ? filteredFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFaqs;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                How can we <span className="text-yellow-400">help</span> you?
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Find answers, get support, and connect with our team
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
                    className="w-full pl-12 pr-4 py-4 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Support Channels */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Get Support
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {supportChannels.map((channel, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className={`w-12 h-12 ${channel.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <channel.icon className={`w-6 h-6 ${channel.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{channel.title}</h3>
                    <p className="text-gray-600 mb-4">{channel.description}</p>
                    <div className="text-sm text-gray-500">
                      <div>Availability: {channel.availability}</div>
                      <div>Response: {channel.responseTime}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
                  Frequently Asked Questions
                </h2>
                
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category.name
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {category.label} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                {searchedFaqs.length === 0 ? (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                  </div>
                ) : (
                  searchedFaqs.map(faq => (
                    <div key={faq.id} className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600 mb-4">{faq.answer}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="w-4 h-4 mr-1 text-yellow-400" />
                          <span>{faq.helpful}% found this helpful</span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Was this helpful?
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>

            {/* Resources Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Helpful Resources
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.link}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      <resource.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
              <p className="text-xl mb-8 opacity-90">
                Our support team is here to help you succeed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Support
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SupportPage;