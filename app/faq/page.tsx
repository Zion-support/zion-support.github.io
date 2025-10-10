'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail } from 'lucide-react';

const FAQPage: React.FC = () => {
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
      faqs: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer comprehensive AI and IT solutions including artificial intelligence services, cloud infrastructure, cybersecurity, custom software development, data analytics, and IT consulting. Our services are designed to help businesses transform digitally and achieve their goals.'
        },
        {
          question: 'How long has Zion Tech Group been in business?',
          answer: 'Zion Tech Group was founded in 2020 and has been providing cutting-edge AI and IT solutions to businesses worldwide. We have grown from a small startup to a trusted partner for Fortune 500 companies and startups alike.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve a wide range of industries including technology, healthcare, finance, retail, manufacturing, education, and government. Our solutions are adaptable to meet the unique needs of any industry or business size.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes, we offer free initial consultations to discuss your business needs and how our solutions can help you achieve your goals. Contact us to schedule a consultation with one of our experts.'
        }
      ]
    },
    {
      title: 'AI Services',
      faqs: [
        {
          question: 'What AI technologies do you work with?',
          answer: 'We work with a wide range of AI technologies including machine learning, natural language processing, computer vision, predictive analytics, chatbots, and automation. We stay current with the latest AI advancements to provide cutting-edge solutions.'
        },
        {
          question: 'How do you ensure AI solutions are ethical and unbiased?',
          answer: 'We follow strict ethical guidelines and best practices in AI development. Our team is trained in responsible AI development, and we implement bias detection and mitigation strategies to ensure fair and ethical AI solutions.'
        },
        {
          question: 'Can you integrate AI with our existing systems?',
          answer: 'Yes, we specialize in integrating AI solutions with existing systems and workflows. Our team has extensive experience in system integration and can ensure seamless AI implementation without disrupting your current operations.'
        },
        {
          question: 'What is the typical timeline for AI project delivery?',
          answer: 'AI project timelines vary depending on complexity and requirements. Simple AI integrations can take 2-4 weeks, while complex AI systems may take 3-6 months. We provide detailed project timelines during the consultation phase.'
        }
      ]
    },
    {
      title: 'IT Services',
      faqs: [
        {
          question: 'Do you provide 24/7 technical support?',
          answer: 'Yes, we offer 24/7 technical support for all our clients. Our support team is available around the clock to help with any technical issues or questions you may have.'
        },
        {
          question: 'What cloud platforms do you work with?',
          answer: 'We work with all major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and hybrid cloud solutions. We help you choose the best platform for your specific needs.'
        },
        {
          question: 'How do you ensure data security?',
          answer: 'We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance with industry standards. We also provide security training and best practices to your team.'
        },
        {
          question: 'Can you help with legacy system modernization?',
          answer: 'Yes, we specialize in modernizing legacy systems and migrating them to modern cloud-based solutions. We ensure minimal disruption to your business operations during the transition.'
        }
      ]
    },
    {
      title: 'Pricing & Billing',
      faqs: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including project-based pricing, retainer agreements, and subscription-based services. Our pricing is transparent and tailored to your specific needs and budget.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for larger projects. We can work with you to create a payment schedule that fits your budget and cash flow requirements.'
        },
        {
          question: 'Are there any hidden costs?',
          answer: 'No, we believe in transparent pricing. All costs are clearly outlined in our proposals, and we will notify you of any additional costs before they are incurred.'
        },
        {
          question: 'Do you offer discounts for long-term contracts?',
          answer: 'Yes, we offer discounts for long-term contracts and partnerships. Contact us to discuss the best pricing options for your specific needs.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about Zion Tech Group's AI and IT services, pricing, support, and more." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI services, IT support, pricing, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our AI and IT services, pricing, and support.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={faqIndex} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                      >
                        <span className="text-lg font-semibold text-white pr-4">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Contact Us</span>
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;