import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageSquare, Mail, Phone } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const faqCategories = [
  {
    title: "General Questions",
    icon: HelpCircle,
    questions: [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "We offer comprehensive technology solutions including AI services, IT services, micro SaaS applications, custom development, and enterprise solutions. Our services cover everything from AI-powered applications to cloud infrastructure and cybersecurity."
      },
      {
        question: "How long has Zion Tech Group been in business?",
        answer: "Zion Tech Group has been providing technology solutions for over 5 years. We have successfully completed 500+ projects and serve clients across various industries worldwide."
      },
      {
        question: "Do you work with startups or only enterprise clients?",
        answer: "We work with businesses of all sizes, from startups to large enterprises. We have specialized packages for startups that include rapid deployment and cost-effective solutions, as well as enterprise-grade solutions for large organizations."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including healthcare, financial services, manufacturing, retail & e-commerce, education, transportation & logistics, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards."
      }
    ]
  },
  {
    title: "Technical Questions",
    icon: MessageSquare,
    questions: [
      {
        question: "What technologies do you use?",
        answer: "We use modern, cutting-edge technologies including React, Node.js, Python, AWS, Azure, Docker, Kubernetes, and various AI/ML frameworks. Our tech stack is constantly updated to include the latest and most efficient tools available."
      },
      {
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we provide comprehensive ongoing support and maintenance services. This includes 24/7 technical support, regular updates, security patches, performance monitoring, and feature enhancements as needed."
      },
      {
        question: "How do you ensure data security and compliance?",
        answer: "We implement enterprise-grade security measures including encryption, secure authentication, regular security audits, and compliance with industry standards like SOC 2, ISO 27001, GDPR, and HIPAA. We also provide detailed security documentation and compliance reports."
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Absolutely. We specialize in integrating with existing systems and can work with virtually any technology stack. We provide API development, data migration services, and ensure seamless integration with your current infrastructure."
      }
    ]
  },
  {
    title: "Pricing & Billing",
    icon: Mail,
    questions: [
      {
        question: "How do you price your services?",
        answer: "Our pricing is based on project scope, complexity, and requirements. We offer flexible pricing models including fixed-price projects, time and materials, and ongoing support contracts. We provide detailed quotes after understanding your specific needs."
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes, we offer free initial consultations to discuss your project requirements, provide recommendations, and answer any questions you may have. This helps us understand your needs and provide accurate project estimates."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods including bank transfers, credit cards, and digital payment platforms. Payment terms are typically net 30 days, and we can discuss custom payment schedules for larger projects."
      },
      {
        question: "Do you offer discounts for long-term projects?",
        answer: "Yes, we offer competitive pricing for long-term projects and ongoing partnerships. We also provide volume discounts for multiple projects and can create custom pricing packages for enterprise clients."
      }
    ]
  },
  {
    title: "Project Management",
    icon: Phone,
    questions: [
      {
        question: "What is your typical project timeline?",
        answer: "Project timelines vary based on complexity and scope. Simple projects can be completed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed project timelines during the planning phase and keep you updated throughout the development process."
      },
      {
        question: "How do you handle project communication?",
        answer: "We maintain regular communication through scheduled meetings, progress reports, and project management tools. You'll have a dedicated project manager and direct access to the development team. We also provide real-time project tracking and status updates."
      },
      {
        question: "Can I make changes during development?",
        answer: "Yes, we understand that requirements may evolve during development. We use agile methodologies that allow for changes and iterations. However, significant changes may affect timeline and cost, which we'll discuss with you beforehand."
      },
      {
        question: "What happens after project completion?",
        answer: "After project completion, we provide comprehensive documentation, training sessions, and ongoing support. We also offer maintenance contracts and can help with future enhancements or additional features as your business grows."
      }
    ]
  }
];

const contactMethods = [
  {
    title: "Email Support",
    description: "Get help via email within 24 hours",
    contact: "kleber@ziontechgroup.com",
    icon: Mail
  },
  {
    title: "Phone Support",
    description: "Speak directly with our support team",
    contact: "+1 302 464 0950",
    icon: Phone
  },
  {
    title: "Live Chat",
    description: "Chat with us in real-time",
    contact: "Available on our website",
    icon: MessageSquare
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <MainLayout
      title="FAQ - Zion Tech Group"
      description="Frequently asked questions about our services, pricing, and processes. Find answers to common questions or contact us for more information."
      keywords="FAQ, frequently asked questions, support, help, services, pricing, technical questions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to common questions about our services, pricing, and processes. 
                Can't find what you're looking for? Contact us directly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={categoryIndex}
                    className="mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                    </div>

                    <div className="space-y-4">
                      {category.questions.map((item, questionIndex) => {
                        const key = `${categoryIndex}-${questionIndex}`;
                        const isOpen = openItems[key];
                        
                        return (
                          <div
                            key={questionIndex}
                            className="bg-gray-50 rounded-lg overflow-hidden hover:bg-gray-100 transition-colors"
                          >
                            <button
                              onClick={() => toggleItem(categoryIndex, questionIndex)}
                              className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <span className="font-semibold text-gray-900 pr-4">
                                {item.question}
                              </span>
                              {isOpen ? (
                                <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                              ) : (
                                <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                              )}
                            </button>
                            
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                                    {item.answer}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Can't find the answer you're looking for? Contact us directly and we'll be happy to help.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {method.description}
                    </p>
                    
                    <div className="text-blue-600 font-semibold">
                      {method.contact}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Have more questions or ready to start your project? Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Contact Us
                </a>
                <a
                  href="/solutions"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Explore Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}