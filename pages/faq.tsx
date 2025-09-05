import React, { useState } from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Search,
  MessageCircle,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
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
      title: 'General Questions',
      icon: '❓',
      questions: [
        {
          question: 'What is Zion Tech Group?',
          answer: 'Zion Tech Group is a leading technology company specializing in AI solutions, cloud services, and digital transformation. We help businesses leverage cutting-edge technology to achieve their goals and stay competitive in the digital age.'
        },
        {
          question: 'How long has Zion Tech Group been in business?',
          answer: 'Zion Tech Group has been serving clients for over 10 years, with a proven track record of delivering innovative technology solutions and exceptional customer service.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, and government. Our solutions are tailored to meet the specific needs of each industry.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes, we offer free initial consultations to understand your business needs and provide recommendations for the best technology solutions. Contact us to schedule your consultation.'
        }
      ]
    },
    {
      title: 'AI Services',
      icon: '🤖',
      questions: [
        {
          question: 'What AI services do you offer?',
          answer: 'We offer comprehensive AI services including machine learning model development, natural language processing, computer vision, predictive analytics, AI strategy consulting, and custom AI solution development.'
        },
        {
          question: 'How do you ensure AI model accuracy?',
          answer: 'We use rigorous testing methodologies, cross-validation techniques, and continuous monitoring to ensure our AI models maintain high accuracy. We also provide regular model updates and performance optimization.'
        },
        {
          question: 'Can you integrate AI with existing systems?',
          answer: 'Absolutely! We specialize in integrating AI solutions with existing business systems, ensuring seamless operation and minimal disruption to your current workflows.'
        },
        {
          question: 'What data do you need for AI projects?',
          answer: 'The data requirements depend on your specific project. We work with various data types including structured data, text, images, and time-series data. We can also help you identify and collect the right data for your AI initiatives.'
        }
      ]
    },
    {
      title: 'Cloud Services',
      icon: '☁️',
      questions: [
        {
          question: 'What cloud platforms do you support?',
          answer: 'We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud solutions. We help you choose the best platform for your specific needs.'
        },
        {
          question: 'How do you ensure cloud security?',
          answer: 'We implement comprehensive security measures including encryption, access controls, monitoring, compliance frameworks, and regular security audits to protect your data and applications.'
        },
        {
          question: 'Can you help with cloud migration?',
          answer: 'Yes, we provide end-to-end cloud migration services including assessment, planning, migration execution, and post-migration support to ensure a smooth transition to the cloud.'
        },
        {
          question: 'Do you offer 24/7 cloud monitoring?',
          answer: 'Yes, we provide 24/7 monitoring and support for your cloud infrastructure, ensuring optimal performance and quick response to any issues.'
        }
      ]
    },
    {
      title: 'Pricing & Billing',
      icon: '💰',
      questions: [
        {
          question: 'How do you price your services?',
          answer: 'Our pricing is based on project scope, complexity, and duration. We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Contact us for a detailed quote.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for larger projects, including milestone-based payments and monthly installments to help manage your budget.'
        },
        {
          question: 'Are there any hidden costs?',
          answer: 'No, we believe in transparent pricing. All costs are clearly outlined in our proposals, and we communicate any changes or additional costs before proceeding.'
        },
        {
          question: 'Do you offer discounts for long-term contracts?',
          answer: 'Yes, we offer competitive discounts for long-term contracts and ongoing partnerships. Contact us to discuss the best pricing options for your needs.'
        }
      ]
    },
    {
      title: 'Support & Maintenance',
      icon: '🛠️',
      questions: [
        {
          question: 'What support do you provide after project completion?',
          answer: 'We provide comprehensive post-project support including maintenance, updates, troubleshooting, and ongoing optimization. Support levels can be customized based on your needs.'
        },
        {
          question: 'How quickly do you respond to support requests?',
          answer: 'We have different response time SLAs based on the severity of the issue. Critical issues are addressed within 1 hour, while general support requests are handled within 24 hours.'
        },
        {
          question: 'Do you provide training for your solutions?',
          answer: 'Yes, we provide comprehensive training for your team on all solutions we deliver, including documentation, video tutorials, and hands-on training sessions.'
        },
        {
          question: 'Can you scale solutions as my business grows?',
          answer: 'Absolutely! We design scalable solutions that can grow with your business. We also provide ongoing consultation to help you plan for future growth and technology needs.'
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((category, categoryIndex) => 
    category.questions.map((q, questionIndex) => ({
      ...q,
      category: category.title,
      categoryIcon: category.icon,
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
      description="Find answers to common questions about Zion Tech Group's AI services, cloud solutions, and technology consulting. Get the information you need to make informed decisions."
      keywords="FAQ, frequently asked questions, AI services, cloud solutions, technology consulting, support"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to common questions about our services, pricing, and support. 
                Can't find what you're looking for? Contact us directly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            {searchTerm ? (
              <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Search Results ({filteredQuestions.length})
                </h2>
                <div className="space-y-4">
                  {filteredQuestions.map((item, index) => (
                    <motion.div
                      key={item.globalIndex}
                      className="bg-white rounded-lg shadow-lg overflow-hidden"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => toggleItem(item.globalIndex)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center">
                          <span className="text-2xl mr-4">{item.categoryIcon}</span>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {item.question}
                            </h3>
                            <p className="text-sm text-gray-500">{item.category}</p>
                          </div>
                        </div>
                        {openItems.includes(item.globalIndex) ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                      {openItems.includes(item.globalIndex) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="max-w-6xl mx-auto">
                {faqCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.title}
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center mb-12">
                      <div className="text-6xl mb-4">{category.icon}</div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {category.title}
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {category.questions.map((item, questionIndex) => {
                        const globalIndex = categoryIndex * 100 + questionIndex;
                        return (
                          <motion.div
                            key={questionIndex}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: questionIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <button
                              onClick={() => toggleItem(globalIndex)}
                              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                {item.question}
                              </h3>
                              {openItems.includes(globalIndex) ? (
                                <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                              )}
                            </button>
                            {openItems.includes(globalIndex) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="px-6 pb-6"
                              >
                                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                              </motion.div>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help. 
                Contact us and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Get instant answers from our support team</p>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold"
                  >
                    Start Chat
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-4">Speak directly with our experts</p>
                  <a
                    href="tel:+13024640950"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    +1 302 464 0950
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">Send us your detailed questions</p>
                  <a
                    href="mailto:support@ziontechgroup.com"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                  >
                    support@ziontechgroup.com
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}