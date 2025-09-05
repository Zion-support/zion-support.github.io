import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqData = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is Zion Tech Group?',
        answer: 'Zion Tech Group is a leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services. We help businesses leverage cutting-edge technology to achieve their goals.'
      },
      {
        question: 'How can I contact Zion Tech Group?',
        answer: 'You can contact us through our contact page, email us at kleber@ziontechgroup.com, or call us at +1 302 464 0950. We also offer live chat support on our website.'
      },
      {
        question: 'What industries do you serve?',
        answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and government sectors. Our solutions are tailored to meet the specific needs of each industry.'
      }
    ]
  },
  {
    category: 'AI Services',
    questions: [
      {
        question: 'What AI services do you offer?',
        answer: 'We offer comprehensive AI services including machine learning, natural language processing, computer vision, AI automation, predictive analytics, and custom AI solution development.'
      },
      {
        question: 'How long does it take to implement an AI solution?',
        answer: 'Implementation time varies depending on the complexity of the project. Simple AI solutions can take 2-4 weeks, while complex enterprise AI systems may take 3-6 months. We provide detailed timelines during the consultation phase.'
      },
      {
        question: 'Do you provide AI training for our team?',
        answer: 'Yes, we offer comprehensive AI training programs for your team, including hands-on workshops, certification courses, and ongoing support to ensure your team can effectively use and maintain AI solutions.'
      }
    ]
  },
  {
    category: 'IT Services',
    questions: [
      {
        question: 'What IT services do you provide?',
        answer: 'Our IT services include cloud migration, infrastructure management, cybersecurity, network design, system integration, IT consulting, and 24/7 technical support.'
      },
      {
        question: 'Do you offer 24/7 support?',
        answer: 'Yes, we provide 24/7 technical support for all our clients. Our support team is available around the clock to address any technical issues and ensure minimal downtime.'
      },
      {
        question: 'Can you help with cloud migration?',
        answer: 'Absolutely! We specialize in cloud migration services, helping businesses move their infrastructure, applications, and data to the cloud securely and efficiently.'
      }
    ]
  },
  {
    category: 'Micro SaaS',
    questions: [
      {
        question: 'What is Micro SaaS?',
        answer: 'Micro SaaS refers to small, focused software-as-a-service applications that solve specific business problems. These are typically lightweight, cost-effective solutions that can be quickly deployed and scaled.'
      },
      {
        question: 'How do you develop Micro SaaS solutions?',
        answer: 'We follow an agile development process, starting with requirements analysis, rapid prototyping, iterative development, and continuous deployment. Our solutions are built using modern technologies and best practices.'
      },
      {
        question: 'Can Micro SaaS solutions integrate with existing systems?',
        answer: 'Yes, our Micro SaaS solutions are designed with integration in mind. We provide APIs, webhooks, and other integration methods to ensure seamless connectivity with your existing systems.'
      }
    ]
  },
  {
    category: 'Pricing & Billing',
    questions: [
      {
        question: 'How do you price your services?',
        answer: 'Our pricing is based on project scope, complexity, and duration. We offer flexible pricing models including fixed-price projects, hourly rates, and subscription-based services. Contact us for a customized quote.'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment plans for larger projects. We can structure payments based on project milestones or provide monthly payment options to fit your budget.'
      },
      {
        question: 'Is there a free consultation?',
        answer: 'Yes, we offer free initial consultations to understand your needs and provide recommendations. This helps us create a tailored solution that meets your specific requirements and budget.'
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <HelpCircle className="h-16 w-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Frequently Asked{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Questions
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to common questions about our services, processes, and how we can help your business succeed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const itemId = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openItems.has(itemId);
                    
                    return (
                      <motion.div
                        key={faqIndex}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: faqIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-4"
                          >
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Our team is here to help. Contact us for personalized assistance and detailed answers to your specific questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Contact Us
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
                >
                  Send Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}