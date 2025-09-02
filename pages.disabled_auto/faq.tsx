import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';

const FAQ: NextPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'General Questions',
      icon: 'ℹ️',
      questions: [
        {
          question: 'What is Zion Tech Group?',
          answer: 'Zion Tech Group is a leading technology solutions provider specializing in AI development, cloud architecture, micro SaaS solutions, and comprehensive IT services. We help businesses transform their digital presence with cutting-edge technology solutions.'
        },
        {
          question: 'Where is Zion Tech Group located?',
          answer: 'Our headquarters is located at 364 E Main St STE 1008, Middletown DE 19709, United States. We serve clients globally with remote and on-site support capabilities.'
        },
        {
          question: 'How long has Zion Tech Group been in business?',
          answer: 'Zion Tech Group has been providing technology solutions for several years, helping businesses across various industries achieve their digital transformation goals.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, retail, manufacturing, government, and startups. Our solutions are designed to be adaptable across different sectors.'
        }
      ]
    },
    {
      title: 'Services & Solutions',
      icon: '🔧',
      questions: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer comprehensive technology services including AI development, cloud migration, micro SaaS solutions, IT services, mobile app development, cybersecurity, and digital transformation consulting.'
        },
        {
          question: 'Do you provide custom software development?',
          answer: 'Yes, we specialize in custom software development tailored to your specific business needs. Our team uses modern technologies and best practices to deliver scalable and maintainable solutions.'
        },
        {
          question: 'What is micro SaaS?',
          answer: 'Micro SaaS refers to small, focused software-as-a-service applications that solve specific business problems. These solutions are typically lightweight, cost-effective, and designed for niche markets or specific use cases.'
        },
        {
          question: 'Do you offer cloud migration services?',
          answer: 'Yes, we provide comprehensive cloud migration services including assessment, planning, execution, and ongoing management. We work with all major cloud providers including AWS, Azure, and Google Cloud.'
        }
      ]
    },
    {
      title: 'Pricing & Billing',
      icon: '💰',
      questions: [
        {
          question: 'How do you price your services?',
          answer: 'Our pricing varies based on the scope and complexity of the project. We offer flexible pricing models including fixed-price projects, hourly rates, and subscription-based services. Contact us for a customized quote.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes, we offer free initial consultations to understand your needs and provide recommendations. This helps us create a tailored proposal that fits your budget and requirements.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept various payment methods including credit cards, bank transfers, and digital payment platforms. Payment terms are typically discussed during the project planning phase.'
        },
        {
          question: 'Do you offer maintenance and support packages?',
          answer: 'Yes, we provide ongoing maintenance and support packages to ensure your solutions continue to perform optimally. These packages include updates, security patches, and technical support.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: '🛠️',
      questions: [
        {
          question: 'What kind of technical support do you provide?',
          answer: 'We provide comprehensive technical support including 24/7 monitoring, troubleshooting, performance optimization, security updates, and user training. Our support team is available through multiple channels.'
        },
        {
          question: 'Do you provide training for your solutions?',
          answer: 'Yes, we provide comprehensive training programs for your team to ensure they can effectively use and maintain the solutions we deliver. Training can be conducted on-site or remotely.'
        },
        {
          question: 'What technologies do you work with?',
          answer: 'We work with a wide range of modern technologies including React, Node.js, Python, AI/ML frameworks, cloud platforms, databases, and mobile development frameworks.'
        },
        {
          question: 'Do you follow security best practices?',
          answer: 'Absolutely. Security is a top priority in all our solutions. We follow industry best practices, conduct regular security audits, and implement robust security measures to protect your data and systems.'
        }
      ]
    },
    {
      title: 'Getting Started',
      icon: '🚀',
      questions: [
        {
          question: 'How do I get started with Zion Tech Group?',
          answer: 'Getting started is easy! Contact us through our website, email, or phone to schedule a free consultation. We\'ll discuss your needs and create a customized plan for your project.'
        },
        {
          question: 'What information do you need to provide a quote?',
          answer: 'To provide an accurate quote, we typically need information about your project requirements, timeline, budget, existing systems, and specific goals. The more details you can provide, the more accurate our quote will be.'
        },
        {
          question: 'How long does a typical project take?',
          answer: 'Project timelines vary depending on complexity and scope. Simple projects may take a few weeks, while complex enterprise solutions can take several months. We provide detailed timelines during the planning phase.'
        },
        {
          question: 'Do you work with international clients?',
          answer: 'Yes, we work with clients worldwide. We have experience with different time zones, currencies, and regulatory requirements. Remote collaboration is one of our strengths.'
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((category, categoryIndex) => 
    category.questions.map((q, questionIndex) => ({
      ...q,
      category: category.title,
      globalIndex: categoryIndex * 100 + questionIndex
    }))
  );

  const filteredQuestions = allQuestions.filter(q => 
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout
      title="Frequently Asked Questions - Zion Tech Group"
      description="Find answers to common questions about Zion Tech Group's services, pricing, and solutions. Get the information you need to make informed decisions."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <HelpCircle className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Find answers to common questions about our services, solutions, and how we can help your business.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {searchTerm ? (
              // Search Results
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Search Results ({filteredQuestions.length} found)
                </h2>
                <div className="space-y-4">
                  {filteredQuestions.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                      <button
                        onClick={() => toggleItem(item.globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <div>
                          <div className="text-sm text-blue-600 font-medium mb-1">{item.category}</div>
                          <div className="text-lg font-semibold text-gray-900">{item.question}</div>
                        </div>
                        {openItems.includes(item.globalIndex) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      {openItems.includes(item.globalIndex) && (
                        <div className="px-6 pb-4">
                          <div className="text-gray-600 leading-relaxed">{item.answer}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Category-based FAQ
              <div className="space-y-12">
                {faqCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <div className="flex items-center mb-6">
                      <span className="text-2xl mr-3">{category.icon}</span>
                      <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                    </div>
                    
                    <div className="space-y-4">
                      {category.questions.map((item, questionIndex) => {
                        const globalIndex = categoryIndex * 100 + questionIndex;
                        return (
                          <div key={questionIndex} className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <button
                              onClick={() => toggleItem(globalIndex)}
                              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                            >
                              <div className="text-lg font-semibold text-gray-900">{item.question}</div>
                              {openItems.includes(globalIndex) ? (
                                <ChevronUp className="w-5 h-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                              )}
                            </button>
                            {openItems.includes(globalIndex) && (
                              <div className="px-6 pb-4">
                                <div className="text-gray-600 leading-relaxed">{item.answer}</div>
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
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              Contact Us
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              Call Us: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FAQ;