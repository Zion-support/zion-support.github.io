import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, Search, HelpCircle, FileText, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      availability: 'Mon-Fri: 9AM-6PM EST',
      contact: '+1 (302) 464-0950',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: '24/7',
      contact: 'support@ziontechgroup.com',
      responseTime: 'Within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      availability: 'Mon-Fri: 9AM-6PM EST',
      contact: 'Start Chat',
      responseTime: 'Immediate'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Simply contact us through our consultation page, and we\'ll schedule a free assessment to understand your needs and recommend the best AI solutions for your business.',
      category: 'getting-started'
    },
    {
      id: 2,
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on complexity. Simple AI implementations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the planning phase.',
      category: 'project-management'
    },
    {
      id: 3,
      question: 'Do you provide training for your solutions?',
      answer: 'Yes! We provide comprehensive training for all our solutions, including user guides, video tutorials, and hands-on training sessions to ensure your team can effectively use the tools.',
      category: 'training'
    },
    {
      id: 4,
      question: 'What kind of support do you offer after implementation?',
      answer: 'We offer ongoing support including 24/7 technical support, regular maintenance, updates, and optimization services. Our support packages are tailored to your specific needs.',
      category: 'support'
    },
    {
      id: 5,
      question: 'Can I integrate your solutions with my existing systems?',
      answer: 'Absolutely! Our solutions are designed with integration in mind. We support most popular business systems and can create custom integrations as needed.',
      category: 'integration'
    },
    {
      id: 6,
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including data encryption, secure authentication, regular security audits, and compliance with industry standards like SOC2 and ISO27001.',
      category: 'security'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'project-management', name: 'Project Management' },
    { id: 'training', name: 'Training' },
    { id: 'support', name: 'Support' },
    { id: 'integration', name: 'Integration' },
    { id: 'security', name: 'Security' }
  ];

  const filteredFaqs = faqs.filter(faq => 
    (selectedCategory === 'all' || faq.category === selectedCategory) &&
    (searchQuery === '' || faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group | Get Help & Support</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Find answers to FAQs, contact support, and access resources." />
        <meta name="keywords" content="support, help, FAQ, contact support, technical support, customer service" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Can We <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Help?</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help you succeed. Find answers to common questions, get technical support, 
              or contact our team directly.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{channel.title}</h3>
                <p className="text-gray-300 mb-6">{channel.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-gray-300">{channel.availability}</span>
                  </div>
                  <div className="text-cyan-400 font-semibold">{channel.contact}</div>
                  <div className="text-gray-400 text-sm">Response: {channel.responseTime}</div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  {channel.title === 'Live Chat' ? 'Start Chat' : 'Contact Us'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services and solutions.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-6">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
              <p className="text-gray-300 mb-6">Comprehensive guides and API documentation for all our solutions.</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium">View Docs →</button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Community</h3>
              <p className="text-gray-300 mb-6">Join our community forum to connect with other users and experts.</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium">Join Community →</button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <HelpCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Knowledge Base</h3>
              <p className="text-gray-300 mb-6">Search our extensive knowledge base for detailed how-to guides.</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium">Browse Articles →</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportPage;