import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CheckIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const SupportPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const supportCategories = [
    { id: 'all', label: 'All Topics', icon: QuestionMarkCircleIcon },
    { id: 'getting-started', label: 'Getting Started', icon: ArrowRightIcon },
    { id: 'ai-services', label: 'AI Services', icon: ChatBubbleLeftRightIcon },
    { id: 'cloud', label: 'Cloud & Infrastructure', icon: CheckIcon },
    { id: 'billing', label: 'Billing & Plans', icon: CheckIcon },
    { id: 'technical', label: 'Technical Support', icon: CheckIcon }
  ];

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through the contact form or schedule a consultation. We\'ll assess your needs and recommend the best solutions for your business.'
    },
    {
      id: 2,
      category: 'ai-services',
      question: 'What AI services do you offer?',
      answer: 'We offer comprehensive AI services including machine learning models, computer vision, natural language processing, predictive analytics, and AI automation solutions tailored to your business needs.'
    },
    {
      id: 3,
      category: 'cloud',
      question: 'Do you provide cloud migration services?',
      answer: 'Yes, we offer complete cloud migration services including assessment, planning, execution, and ongoing management to ensure a smooth transition to the cloud.'
    },
    {
      id: 4,
      category: 'billing',
      question: 'What are your pricing options?',
      answer: 'We offer flexible pricing plans starting from $999/month for small businesses to custom enterprise solutions. Contact us for a detailed quote based on your specific requirements.'
    },
    {
      id: 5,
      category: 'technical',
      question: 'What kind of support do you provide?',
      answer: 'We provide 24/7 technical support including email support, phone support, and dedicated account managers for enterprise clients. Our team is always ready to help with any technical issues.'
    }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs.filter(faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()))
    : faqs.filter(faq => faq.category === selectedCategory && faq.question.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to common questions, contact our support team, and access resources." />
        <meta name="keywords" content="support, help, FAQ, contact support, technical support, customer service" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We're Here to Help
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Find answers to common questions, get technical support, and access resources 
              to help you make the most of our services.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How can we help you?
            </h2>
            <div className="relative max-w-2xl mx-auto">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {supportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-6">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our support team is ready to assist you with any questions or issues
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <EnvelopeIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Email Support</h3>
              <p className="text-gray-300 mb-4">Get help via email within 24 hours</p>
              <a href="mailto:support@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">
                support@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <PhoneIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Phone Support</h3>
              <p className="text-gray-300 mb-4">Call us for immediate assistance</p>
              <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <ChatBubbleLeftRightIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
              <p className="text-gray-300 mb-4">Chat with our support team in real-time</p>
              <Link to="/contact" className="text-purple-400 hover:text-purple-300">
                Start Chat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team today to discuss your project requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const page = React.lazy(() => import('./page'));
export default page;