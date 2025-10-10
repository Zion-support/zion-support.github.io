'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, Search, HelpCircle, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqCategories = [
    {
      title: 'General Questions',
      questions: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer comprehensive AI and IT solutions including AI-powered business intelligence, cloud services, cybersecurity, custom development, data analytics, and micro SaaS tools.'
        },
        {
          question: 'How long has Zion Tech Group been in business?',
          answer: 'We have been providing AI and IT solutions for over 15 years, helping businesses transform their operations with cutting-edge technology.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes, we offer free initial consultations to assess your needs and recommend the best solutions for your business.'
        }
      ]
    },
    {
      title: 'AI Services',
      questions: [
        {
          question: 'What AI technologies do you specialize in?',
          answer: 'We specialize in machine learning, natural language processing, computer vision, predictive analytics, and custom AI model development.'
        },
        {
          question: 'How long does it take to implement AI solutions?',
          answer: 'Implementation time varies based on complexity, but typically ranges from 2-8 weeks for most AI solutions.'
        },
        {
          question: 'Do you provide training for AI tools?',
          answer: 'Yes, we provide comprehensive training for all AI tools and solutions we implement, including ongoing support.'
        }
      ]
    },
    {
      title: 'IT Services',
      questions: [
        {
          question: 'What cloud platforms do you support?',
          answer: 'We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud solutions.'
        },
        {
          question: 'Do you provide 24/7 support?',
          answer: 'Yes, we offer 24/7 technical support for all our IT services and solutions.'
        },
        {
          question: 'What is your uptime guarantee?',
          answer: 'We guarantee 99.9% uptime for all our managed services and cloud solutions.'
        }
      ]
    },
    {
      title: 'Pricing & Billing',
      questions: [
        {
          question: 'How is pricing structured?',
          answer: 'Our pricing is flexible and based on your specific needs. We offer monthly subscriptions, project-based pricing, and custom enterprise solutions.'
        },
        {
          question: 'Are there any setup fees?',
          answer: 'No, we don\'t charge setup fees for most of our services. We believe in transparent pricing with no hidden costs.'
        },
        {
          question: 'Do you offer discounts for long-term contracts?',
          answer: 'Yes, we offer attractive discounts for annual contracts and long-term partnerships.'
        }
      ]
    },
    {
      title: 'Security & Compliance',
      questions: [
        {
          question: 'How do you ensure data security?',
          answer: 'We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance with industry standards.'
        },
        {
          question: 'Are you compliant with industry regulations?',
          answer: 'Yes, we are compliant with GDPR, HIPAA, SOC 2, and other relevant industry regulations.'
        },
        {
          question: 'Do you sign NDAs?',
          answer: 'Yes, we are happy to sign non-disclosure agreements to protect your confidential information.'
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about our AI and IT services, pricing, and support." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI services, IT support, pricing, security" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our AI and IT services, pricing, and support.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8">{category.title}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div key={faqIndex} className="glass-card quantum-field">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                          <ChevronDown 
                            className={`w-5 h-5 text-cyan-400 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            
            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No questions found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="holographic-card p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Contact our support team for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Contact Support
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;