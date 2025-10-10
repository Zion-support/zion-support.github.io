'use client';
import React, { useState } from 'react';
import { ChevronDown, Search, CheckCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      name: 'General',
      icon: 'ℹ️'
    },
    {
      name: 'AI Services',
      icon: '🤖'
    },
    {
      name: 'IT Services',
      icon: '💻'
    },
    {
      name: 'Pricing',
      icon: '💰'
    },
    {
      name: 'Support',
      icon: '🛠️'
    },
    {
      name: 'Security',
      icon: '🔒'
    }
  ];

  const faqs = [
    {
      category: 'General',
      question: 'What is Zion Tech Group?',
      answer: 'Zion Tech Group is a leading technology company specializing in AI solutions, cloud infrastructure, and digital transformation services. We help businesses leverage cutting-edge technology to drive growth and efficiency.'
    },
    {
      category: 'General',
      question: 'How long has Zion Tech Group been in business?',
      answer: 'We have been serving clients for over 5 years, with a proven track record of delivering successful AI and IT solutions across various industries.'
    },
    {
      category: 'General',
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, retail, manufacturing, logistics, real estate, and more. Our solutions are adaptable to various business needs.'
    },
    {
      category: 'AI Services',
      question: 'What AI services do you offer?',
      answer: 'We offer comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, AI automation, chatbots, and custom AI development.'
    },
    {
      category: 'AI Services',
      question: 'How long does it take to implement AI solutions?',
      answer: 'Implementation time varies based on complexity. Simple AI solutions can be deployed in 2-4 weeks, while complex enterprise AI systems may take 3-6 months. We provide detailed timelines during consultation.'
    },
    {
      category: 'AI Services',
      question: 'Do I need technical expertise to use your AI solutions?',
      answer: 'No technical expertise is required. We provide user-friendly interfaces, comprehensive training, and ongoing support to ensure your team can effectively use our AI solutions.'
    },
    {
      category: 'IT Services',
      question: 'What cloud platforms do you support?',
      answer: 'We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud solutions. We help you choose the best platform for your needs.'
    },
    {
      category: 'IT Services',
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, we offer 24/7 support for critical issues and emergency situations. Our support team is always available to help ensure your systems run smoothly.'
    },
    {
      category: 'IT Services',
      question: 'Can you help with cloud migration?',
      answer: 'Absolutely! We specialize in cloud migration services, helping businesses seamlessly transition from on-premise systems to cloud infrastructure with minimal downtime.'
    },
    {
      category: 'Pricing',
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models including monthly subscriptions, project-based pricing, and custom enterprise solutions. Contact us for a detailed quote based on your specific needs.'
    },
    {
      category: 'Pricing',
      question: 'Do you offer free consultations?',
      answer: 'Yes, we provide free initial consultations to assess your needs and recommend the best solutions. This helps ensure you get the most value from our services.'
    },
    {
      category: 'Pricing',
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees. We provide transparent pricing with detailed breakdowns of all costs. Any additional services will be discussed and approved before implementation.'
    },
    {
      category: 'Support',
      question: 'What support channels do you offer?',
      answer: 'We offer multiple support channels including phone support, email support, live chat, and a comprehensive knowledge base. Premium customers also get dedicated account managers.'
    },
    {
      category: 'Support',
      question: 'How quickly do you respond to support requests?',
      answer: 'Response times vary by priority: Critical issues (1 hour), High priority (4 hours), Medium priority (24 hours), and Low priority (48 hours). Premium support customers get faster response times.'
    },
    {
      category: 'Support',
      question: 'Do you provide training for your solutions?',
      answer: 'Yes, we provide comprehensive training including online tutorials, documentation, live training sessions, and ongoing support to ensure your team can effectively use our solutions.'
    },
    {
      category: 'Security',
      question: 'How do you ensure data security?',
      answer: 'We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.'
    },
    {
      category: 'Security',
      question: 'Do you sign NDAs and security agreements?',
      answer: 'Yes, we are happy to sign NDAs and security agreements to protect your sensitive information. We take data privacy and security very seriously.'
    },
    {
      category: 'Security',
      question: 'Where is my data stored?',
      answer: 'Data storage location depends on your preferences and compliance requirements. We can store data in your preferred region and ensure compliance with local data protection laws.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedFaqs = filteredFaqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, typeof faqs>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Find answers to common questions about our AI and IT services. 
              Can't find what you're looking for? Contact our support team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {faqCategories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                        !searchQuery || searchQuery.toLowerCase().includes(category.name.toLowerCase())
                          ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                          : 'text-gray-500'
                      }`}
                      onClick={() => setSearchQuery(category.name)}
                    >
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {Object.keys(groupedFaqs).length === 0 ? (
              <div className="cyber-card p-8 text-center">
                <p className="text-gray-300 text-lg">No FAQs found for "{searchQuery}"</p>
                <p className="text-gray-400 mt-2">Try different keywords or browse by category</p>
              </div>
            ) : (
              <div className="space-y-8">
                {Object.entries(groupedFaqs).map(([category, categoryFaqs]) => (
                  <div key={category}>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                      <span>{faqCategories.find(cat => cat.name === category)?.icon}</span>
                      <span>{category}</span>
                    </h2>
                    <div className="space-y-4">
                      {categoryFaqs.map((faq, index) => {
                        const globalIndex = faqs.indexOf(faq);
                        const isOpen = openItems.includes(globalIndex);
                        
                        return (
                          <div key={index} className="cyber-card">
                            <button
                              onClick={() => toggleItem(globalIndex)}
                              className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                            >
                              <h3 className="text-lg font-semibold text-white pr-4">
                                {faq.question}
                              </h3>
                              <ChevronDown 
                                className={`w-5 h-5 text-gray-400 transition-transform ${
                                  isOpen ? 'rotate-180' : ''
                                }`} 
                              />
                            </button>
                            {isOpen && (
                              <div className="px-6 pb-6">
                                <div className="border-t border-gray-700 pt-4">
                                  <p className="text-gray-300 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Our support team is here to help. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Contact Support</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;