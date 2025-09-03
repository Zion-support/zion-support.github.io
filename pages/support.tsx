import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../src/components/seo/SEOHead';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, HelpCircle, Book, Video, Download } from 'lucide-react';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    { id: 'all', name: 'All Topics', count: 0 },
    { id: 'getting-started', name: 'Getting Started', count: 12 },
    { id: 'billing', name: 'Billing & Plans', count: 8 },
    { id: 'technical', name: 'Technical Issues', count: 15 },
    { id: 'api', name: 'API Support', count: 10 },
    { id: 'security', name: 'Security', count: 6 }
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply create an account, choose your plan, and follow our quick start guide. You can begin with our free trial to explore our services.',
      helpful: 95
    },
    {
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Enterprise customers can also arrange custom billing terms.',
      helpful: 87
    },
    {
      category: 'technical',
      question: 'How do I migrate my existing applications to your cloud?',
      answer: 'We provide comprehensive migration services including assessment, planning, and execution. Our team will work with you to ensure zero-downtime migration.',
      helpful: 92
    },
    {
      category: 'api',
      question: 'What are your API rate limits?',
      answer: 'Rate limits vary by plan: Starter (1,000 requests/hour), Professional (10,000 requests/hour), Enterprise (unlimited). Contact us for custom limits.',
      helpful: 89
    },
    {
      category: 'security',
      question: 'How do you protect my data?',
      answer: 'We use enterprise-grade security including encryption at rest and in transit, SOC 2 compliance, regular security audits, and 24/7 monitoring.',
      helpful: 94
    },
    {
      category: 'billing',
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.',
      helpful: 91
    },
    {
      category: 'technical',
      question: 'Do you offer 24/7 support?',
      answer: 'Yes, our Enterprise customers receive 24/7 priority support. Professional plan customers get business hours support with emergency escalation.',
      helpful: 88
    },
    {
      category: 'getting-started',
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for our Professional plan. No credit card required to start, and you can cancel anytime.',
      helpful: 96
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7 for Enterprise, Business hours for others',
      responseTime: 'Under 5 minutes',
      href: '/contact?type=chat'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Business hours (9 AM - 6 PM EST)',
      responseTime: 'Immediate',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed support via email',
      availability: '24/7',
      responseTime: 'Under 4 hours',
      href: 'mailto:support@ziontechgroup.com'
    }
  ];

  const resources = [
    {
      icon: Book,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      href: '/docs'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      href: '/docs/video-tutorials'
    },
    {
      icon: Download,
      title: 'SDKs & Libraries',
      description: 'Download our development tools',
      href: '/docs/downloads'
    },
    {
      icon: HelpCircle,
      title: 'Community Forum',
      description: 'Connect with other developers',
      href: '/community'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    selectedCategory === 'all' || faq.category === selectedCategory
  ).filter(faq =>
    searchQuery === '' || 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEOHead
        title="Support - Zion Tech Group | Get Help & Technical Support"
        description="Get help with Zion Tech Group services. Find answers in our FAQ, contact our support team, or access documentation and resources."
        keywords="support, help, FAQ, technical support, customer service, Zion Tech Group support"
        canonical="https://ziontechgroup.com/support"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Help?</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Get the support you need to succeed with Zion Tech Group services. Find answers, connect with our team, and access helpful resources.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Get Support</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {supportChannels.map((channel, index) => {
                const IconComponent = channel.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{channel.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{channel.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{channel.availability}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>Response: {channel.responseTime}</span>
                      </div>
                    </div>
                    
                    <Link
                      href={channel.href}
                      className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      {channel.title === 'Phone Support' ? 'Call Now' : 'Get Support'}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  {category.name}
                  {category.count > 0 && (
                    <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                      {category.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
            
            {/* FAQ List */}
            <div className="max-w-4xl mx-auto space-y-6">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{faq.answer}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>{faq.helpful}% found this helpful</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Helpful Resources</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <Link
                    key={index}
                    href={resource.href}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{resource.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our support team is here to help you succeed. Get in touch and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact?type=consultation"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Support;