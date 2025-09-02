import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';

const FAQ: NextPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'Zion Tech Group provides comprehensive technology solutions including AI development, cloud architecture, micro SaaS development, IT consulting, custom software development, and digital transformation services. We help businesses modernize their technology infrastructure and implement cutting-edge solutions.'
        },
        {
          question: 'How long has Zion Tech Group been in business?',
          answer: 'Zion Tech Group has been providing technology solutions to businesses for several years, helping companies across various industries transform their digital presence and implement innovative technology solutions.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including healthcare, finance, retail, manufacturing, government, and more. Our solutions are tailored to meet the specific needs and compliance requirements of each industry.'
        }
      ]
    },
    {
      category: 'Services',
      questions: [
        {
          question: 'What is micro SaaS development?',
          answer: 'Micro SaaS development involves creating small, focused software-as-a-service applications that solve specific business problems. These applications are typically lightweight, cost-effective, and can be quickly deployed to address particular needs without the complexity of large enterprise systems.'
        },
        {
          question: 'Do you provide AI consulting services?',
          answer: 'Yes, we offer comprehensive AI consulting services including custom AI model development, machine learning implementation, natural language processing, computer vision solutions, and AI strategy consulting to help businesses leverage artificial intelligence effectively.'
        },
        {
          question: 'What cloud platforms do you work with?',
          answer: 'We work with all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and others. Our team has extensive experience in cloud migration, architecture design, and optimization across these platforms.'
        },
        {
          question: 'Do you offer ongoing support and maintenance?',
          answer: 'Yes, we provide comprehensive ongoing support and maintenance services for all our solutions. This includes 24/7 monitoring, regular updates, security patches, performance optimization, and technical support.'
        }
      ]
    },
    {
      category: 'Pricing & Billing',
      questions: [
        {
          question: 'How do you price your services?',
          answer: 'Our pricing is based on the scope and complexity of each project. We offer flexible pricing models including fixed-price projects, time and materials, and retainer-based arrangements. Contact us for a customized quote based on your specific needs.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment options including milestone-based payments, monthly retainers, and custom payment plans to accommodate different budget requirements and project timelines.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept various payment methods including credit cards, bank transfers, ACH payments, and other approved payment methods. All payments are processed securely through our payment partners.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What technologies do you use?',
          answer: 'We use a wide range of modern technologies including React, Node.js, Python, Java, .NET, cloud platforms (AWS, Azure, GCP), databases (PostgreSQL, MongoDB, Redis), AI/ML frameworks (TensorFlow, PyTorch), and many others depending on project requirements.'
        },
        {
          question: 'How do you ensure data security?',
          answer: 'We implement comprehensive security measures including encryption, secure coding practices, regular security audits, compliance with industry standards (SOC 2, GDPR, HIPAA), and ongoing security monitoring to protect your data and systems.'
        },
        {
          question: 'Do you provide API documentation?',
          answer: 'Yes, we provide comprehensive API documentation for all our services including detailed endpoints, authentication methods, request/response examples, and integration guides to help developers implement our solutions effectively.'
        },
        {
          question: 'What is your development process?',
          answer: 'We follow agile development methodologies with regular sprints, continuous integration/deployment, code reviews, testing, and client feedback loops. Our process ensures transparency, quality, and timely delivery of solutions.'
        }
      ]
    },
    {
      category: 'Support',
      questions: [
        {
          question: 'How can I contact support?',
          answer: 'You can contact our support team through multiple channels including email (support@ziontechgroup.com), phone (+1 302 464 0950), our contact form, or through your dedicated project manager. We also provide 24/7 emergency support for critical issues.'
        },
        {
          question: 'What are your support hours?',
          answer: 'Our standard support hours are Monday through Friday, 9 AM to 6 PM EST. However, we provide 24/7 emergency support for critical production issues and have dedicated support teams for enterprise clients.'
        },
        {
          question: 'Do you provide training for your solutions?',
          answer: 'Yes, we provide comprehensive training programs including user training, administrator training, and technical training for your development team. Training can be delivered on-site, remotely, or through our online learning platform.'
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

  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <MainLayout
      title="Frequently Asked Questions - Zion Tech Group"
      description="Find answers to common questions about Zion Tech Group's services, pricing, and support. Get the information you need quickly and easily."
      keywords="FAQ, frequently asked questions, support, help, Zion Tech Group, services"
    >
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <HelpCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, pricing, and support. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* FAQ Content */}
          <div className="max-w-4xl mx-auto">
            {filteredData.map((category, categoryIndex) => (
              <div key={category.category} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div key={itemIndex} className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 pr-4">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="border-t border-gray-100 pt-4">
                              <p className="text-gray-700 leading-relaxed">
                                {item.answer}
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

          {/* Contact CTA */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help. 
                Contact us directly and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQ;