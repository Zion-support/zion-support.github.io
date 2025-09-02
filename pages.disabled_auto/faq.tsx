import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Phone, Mail } from 'lucide-react';

const FAQ: NextPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What services does Zion Tech Group offer?",
          answer: "Zion Tech Group provides comprehensive technology solutions including AI development, cloud architecture, micro SaaS development, IT consulting, software development, and digital transformation services. We help businesses modernize their technology infrastructure and implement cutting-edge solutions."
        },
        {
          question: "How long has Zion Tech Group been in business?",
          answer: "Zion Tech Group has been providing technology solutions and services to businesses worldwide. We have extensive experience in helping companies transform their digital presence and implement innovative technology solutions."
        },
        {
          question: "What industries do you serve?",
          answer: "We serve a wide range of industries including healthcare, finance, retail, manufacturing, government, and startups. Our solutions are tailored to meet the specific needs and compliance requirements of each industry."
        }
      ]
    },
    {
      category: "Services",
      questions: [
        {
          question: "What is micro SaaS development?",
          answer: "Micro SaaS development involves creating small, focused software-as-a-service applications that solve specific business problems. These applications are typically lightweight, cost-effective, and can be quickly deployed to address particular needs without the complexity of large enterprise systems."
        },
        {
          question: "Do you provide AI consulting services?",
          answer: "Yes, we offer comprehensive AI consulting services including custom AI model development, machine learning implementation, natural language processing, computer vision solutions, and AI strategy consulting. We help businesses identify opportunities for AI integration and develop custom solutions."
        },
        {
          question: "What cloud services do you offer?",
          answer: "We provide cloud migration services, cloud architecture design, Kubernetes orchestration, API gateway setup, database optimization, and cloud security solutions. We work with major cloud providers including AWS, Azure, and Google Cloud Platform."
        }
      ]
    },
    {
      category: "Pricing & Billing",
      questions: [
        {
          question: "How do you price your services?",
          answer: "Our pricing varies based on the scope and complexity of the project. We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Contact us for a customized quote based on your specific requirements."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment options including milestone-based payments, monthly retainers, and custom payment plans to accommodate different business needs and budgets."
        },
        {
          question: "What is included in your support services?",
          answer: "Our support services include 24/7 technical support, regular maintenance, security updates, performance monitoring, and ongoing consultation. Support terms are customized based on your specific needs and service level requirements."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          question: "What technologies do you work with?",
          answer: "We work with a wide range of modern technologies including React, Node.js, Python, AI/ML frameworks, cloud platforms (AWS, Azure, GCP), databases, microservices architecture, and DevOps tools. We stay current with the latest technology trends and best practices."
        },
        {
          question: "Do you provide ongoing maintenance and support?",
          answer: "Yes, we provide comprehensive ongoing maintenance and support services including bug fixes, security updates, performance optimization, feature enhancements, and 24/7 monitoring. Our support packages are tailored to your specific needs."
        },
        {
          question: "How do you ensure data security?",
          answer: "We implement industry-standard security measures including encryption, secure coding practices, regular security audits, compliance with data protection regulations, and comprehensive backup and disaster recovery procedures."
        }
      ]
    },
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I get started with Zion Tech Group?",
          answer: "Getting started is easy! Contact us through our website, email, or phone to schedule a consultation. We'll discuss your needs, provide recommendations, and create a customized proposal for your project."
        },
        {
          question: "What information do you need to provide a quote?",
          answer: "To provide an accurate quote, we need information about your project requirements, timeline, budget, existing systems, and specific goals. We'll guide you through the process and may request additional details during our consultation."
        },
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on complexity and scope. Simple projects may take a few weeks, while complex enterprise solutions can take several months. We provide detailed timelines during the planning phase and keep you updated throughout the project."
        }
      ]
    }
  ];

  return (
    <MainLayout
      title="Frequently Asked Questions - Zion Tech Group"
      description="Find answers to common questions about Zion Tech Group's services, pricing, and processes. Get the information you need to make informed decisions."
      keywords="FAQ, frequently asked questions, Zion Tech Group, services, pricing, support, technology solutions"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <HelpCircle className="w-16 h-16 mx-auto text-blue-400 mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Find answers to common questions about our services and processes.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                    <h2 className="text-2xl font-bold">{category.category}</h2>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {category.questions.map((item, itemIndex) => {
                      const globalIndex = categoryIndex * 100 + itemIndex;
                      const isOpen = openItems.includes(globalIndex);
                      
                      return (
                        <div key={itemIndex} className="p-6">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg p-2 -m-2"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">
                              {item.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            )}
                          </button>
                          {isOpen && (
                            <div className="mt-4 text-gray-700 leading-relaxed">
                              {item.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Can't find the answer you're looking for? Our team is here to help.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                  <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 text-center mb-4">
                    Chat with our support team in real-time
                  </p>
                  <a 
                    href="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Start Chat
                  </a>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                  <Phone className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 text-center mb-4">
                    Speak directly with our experts
                  </p>
                  <a 
                    href="tel:+13024640950" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    +1 302 464 0950
                  </a>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                  <Mail className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 text-center mb-4">
                    Send us your questions via email
                  </p>
                  <a 
                    href="mailto:info@ziontechgroup.com" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default FAQ;