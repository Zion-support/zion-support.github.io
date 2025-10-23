'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our sales team to schedule a consultation where we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'Getting Started'
    },
    {
      question: 'What support options are available?',
      answer: 'We offer multiple support channels including email, phone, live chat, and a comprehensive knowledge base. Enterprise customers also get dedicated account managers.',
      category: 'Support'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on complexity. Simple integrations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months.',
      category: 'Implementation'
    },
    {
      question: 'Do you provide training for our team?',
      answer: 'Yes! We offer comprehensive training programs including online courses, documentation, and hands-on workshops for your team.',
      category: 'Training'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, access controls, regular audits, and compliance with industry standards like SOC 2 and ISO 27001.',
      category: 'Security'
    },
    {
      question: 'Can I integrate with my existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with popular business systems through APIs, webhooks, and pre-built connectors.',
      category: 'Integration'
    }
  ];

  const supportChannels = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      hours: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontech.com',
      hours: '24/7 response within 24 hours'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      hours: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Knowledge Base',
      description: 'Self-service documentation',
      contact: 'Browse articles',
      hours: 'Available 24/7'
    }
  ];

  const categories = ['all', 'Getting Started', 'Support', 'Implementation', 'Training', 'Security', 'Integration'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50"></div><>
<//div>
<Helmet><>
</Helmet>
<title>Support - Zion Tech Group | Help & Support Center</title><>
<//title>
<meta name="description" content="Get help and support for Zion Tech Group solutions. Find answers, contact support, and access our knowledge base." /><>
</meta name="description" content="Get help and support for Zion Tech Group solutions. Find answers, contact support, and access our knowledge base." />
<meta name="keywords" content="support, help, FAQ, contact support, technical support, customer service" /><>
</meta name="keywords" content="support, help, FAQ, contact support, technical support, customer service" />
</Helmet><//Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20"><>
</section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
<div className="container mx-auto px-4"></div><>
<//div>
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<h1 className="text-4xl md:text-6xl font-bold mb-6"></h1><//h1>
              How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Help?</span><>
<//span>
</h1><>
<//h1>
<p className="text-xl md:text-2xl mb-8 text-blue-100"></p><//p>
              Find answers, get support, and access resources to make the most of our solutions</p><>
<//p>
</p><//p>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto"></div><>
<//div>
<div className="relative"></div><>
<//div>
<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /><>
</Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
<input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Support Channels */}
      <section className="py-16 bg-white"><>
</section className="py-16 bg-white">
<div className="container mx-auto px-4"></div><>
<//div>
<div className="max-w-6xl mx-auto"></div><>
<//div>
<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get Support</h2><>
<//h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"></div><//div>
              {supportChannels.map((channel, index) => (</div><>
<//div>
<div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow"></div><>
<//div>
<div className="flex justify-center mb-4 text-blue-600"></div><//div>
                    {channel.icon}</div><>
<//div>
</div><>
<//div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">{channel.title}</h3><>
<//h3>
<p className="text-gray-600 mb-3">{channel.description}</p><>
<//p>
<p className="text-sm font-medium text-blue-600 mb-1">{channel.contact}</p><>
<//p>
<p className="text-xs text-gray-500">{channel.hours}</p><>
<//p>
</div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50"><>
</section className="py-16 bg-gray-50">
<div className="container mx-auto px-4"></div><>
<//div>
<div className="max-w-6xl mx-auto"></div><>
<//div>
<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2><//h2>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8"></div><//div>
              {categories.map((category) => (</div><>
<//div>
<button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                ></button><//button>
                  {category === 'all' ? 'All Questions' : category}</button><>
<//button>
</button><//button>
              ))}
            </div><//div>
            {/* FAQ List */}
            <div className="space-y-4"></div><//div>
              {filteredFAQs.map((faq, index) => (</div><>
<//div>
<div key={index} className="bg-white rounded-lg shadow-sm"></div><>
<//div>
<button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"</button><//button>
                  ></button><>
<//button>
<div className="flex items-center"></div><>
<//div>
<HelpCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" /><>
</HelpCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
<span className="font-medium text-gray-900">{faq.question}</span><>
<//span>
</div><>
<//div>
<div className="flex items-center"></div><>
<//div>
<span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-3"></span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-3">
                        {faq.category}
                      </span><>
<//span>
<CheckCircle className={`w-5 h-5 text-gray-400 transition-transform ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`} /><>
</CheckCircle className={`w-5 h-5 text-gray-400 transition-transform ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`} />
</div><>
<//div>
</button><//button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4"></div><>
<//div>
<p className="text-gray-600">{faq.answer}</p><>
<//p>
</div><//div>
                  )}
                </div><//div>
              ))}
            </div><//div>
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12"></div><>
<//div>
<Search className="w-12 h-12 text-gray-400 mx-auto mb-4" /><>
</Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
<h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3><>
<//h3>
<p className="text-gray-600">Try adjusting your search terms or category filter.</p><>
<//p>
</div><//div>
            )}
          </div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white"><>
</section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
<div className="container mx-auto px-4"></div><>
<//div>
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<h2 className="text-3xl font-bold mb-6">Still Need Help?</h2><>
<//h2>
<p className="text-xl mb-8 text-blue-100"></p><//p>
              Can't find what you're looking for? Our support team is here to help.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"></button><>
<//button>
<MessageCircle className="mr-2 w-5 h-5" /></MessageCircle className="mr-2 w-5 h-5" />
                Contact Support
              </button><>
<//button>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"></button><//button>
                Schedule a Call</button><>
<//button>
</button><>
<//button>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
</div><//div>
  );
};

export default SupportPage;
