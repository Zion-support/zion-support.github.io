import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import MainLayout from '../components/Layout';

const faqCategories = {
  general: [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive technology solutions including web development, mobile app development, AI and machine learning services, cloud solutions, API development, and digital transformation consulting."
    },
    {
      question: "Do you work with clients globally?",
      answer: "Yes, we work with clients globally and offer remote services. Our team is distributed and we have experience working with clients across different time zones and locations."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on complexity and scope. Simple projects can be completed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the planning phase."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support packages including maintenance, updates, monitoring, and 24/7 technical support for enterprise clients. Support terms are included in all our service agreements."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement enterprise-grade security measures including encryption, secure data centers, regular security audits, and compliance with industry standards like SOC 2 Type II and ISO 27001."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely! We specialize in integrating with existing systems and third-party applications. Our team has experience with a wide range of technologies and can work with your current infrastructure."
    },
    {
      question: "What makes Zion Tech Group different?",
      answer: "We combine deep technical expertise with business acumen, offer flexible engagement models, provide comprehensive support, and focus on delivering real business value. Our team is committed to your success."
    }
  ],
  technical: [
    {
      question: "What technologies do you use?",
      answer: "We use modern, proven technologies including React, Node.js, Python, AWS, Azure, Docker, Kubernetes, PostgreSQL, MongoDB, and more. We choose the best technology stack for each project's specific requirements."
    },
    {
      question: "Do you provide source code?",
      answer: "Yes, clients receive full ownership of source code and intellectual property for custom development projects. We also provide comprehensive documentation and knowledge transfer."
    },
    {
      question: "How do you handle scalability?",
      answer: "We design solutions with scalability in mind from the start, using cloud-native architectures, microservices, load balancing, and auto-scaling capabilities to handle growth."
    },
    {
      question: "What about mobile app development?",
      answer: "We develop both native iOS/Android apps and cross-platform solutions using React Native and Flutter. We can also create progressive web apps (PWAs) for broader compatibility."
    },
    {
      question: "Do you offer AI and machine learning services?",
      answer: "Yes, we have a dedicated AI team that provides machine learning model development, natural language processing, computer vision, predictive analytics, and AI integration services."
    },
    {
      question: "How do you ensure code quality?",
      answer: "We follow industry best practices including code reviews, automated testing, continuous integration, and maintain high code quality standards throughout the development process."
    },
    {
      question: "Can you help with cloud migration?",
      answer: "Absolutely! We specialize in cloud migration services, helping businesses move to AWS, Azure, or Google Cloud with minimal downtime and maximum efficiency."
    },
    {
      question: "Do you provide API development?",
      answer: "Yes, we develop RESTful APIs, GraphQL APIs, and microservices. We also provide comprehensive API documentation and integration support."
    },
    {
      question: "What about database design and optimization?",
      answer: "We provide database design, optimization, migration, and management services. Our team has expertise with both SQL and NoSQL databases."
    },
    {
      question: "How do you handle testing and quality assurance?",
      answer: "We implement comprehensive testing strategies including unit testing, integration testing, performance testing, and user acceptance testing to ensure high-quality deliverables."
    }
  ],
  billing: [
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including fixed-price projects, time and materials, retainer agreements, and subscription-based services. We work with you to find the best pricing structure for your needs."
    },
    {
      question: "Do you require upfront payment?",
      answer: "Payment terms vary by project size and type. For smaller projects, we may require partial upfront payment. For larger projects, we typically use milestone-based payments."
    },
    {
      question: "Are there any hidden costs?",
      answer: "No, we believe in transparent pricing. All costs are clearly outlined in our proposals, and we communicate any changes or additional costs before they're incurred."
    },
    {
      question: "Do you offer discounts for long-term projects?",
      answer: "Yes, we offer volume discounts for long-term engagements and retainer agreements. We also provide special pricing for startups and non-profit organizations."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, credit cards, and digital payment platforms. We can also work with your preferred payment terms."
    },
    {
      question: "Can I get a free consultation?",
      answer: "Yes, we offer free initial consultations to discuss your project requirements and provide preliminary estimates. This helps both parties understand the scope and expectations."
    },
    {
      question: "Do you provide detailed invoices?",
      answer: "Yes, we provide detailed invoices with itemized costs, time tracking, and project progress. Our billing is transparent and easy to understand."
    },
    {
      question: "What happens if the project goes over budget?",
      answer: "We work hard to stay within budget and communicate any potential overruns early. Any additional costs must be approved by the client before work continues."
    },
    {
      question: "Do you offer maintenance contracts?",
      answer: "Yes, we offer various maintenance and support contracts ranging from basic support to comprehensive managed services with 24/7 monitoring."
    },
    {
      question: "Can I change the scope of work?",
      answer: "Yes, scope changes are common in software projects. We handle change requests through a formal process and provide updated timelines and costs before proceeding."
    }
  ],
  api: [
    {
      question: "What APIs do you provide?",
      answer: "We provide various APIs including AI services APIs, data processing APIs, integration APIs, and custom APIs for specific business needs. All APIs are RESTful and well-documented."
    },
    {
      question: "How do I get API access?",
      answer: "API access is provided through our developer portal where you can register, get API keys, and access comprehensive documentation and testing tools."
    },
    {
      question: "What authentication methods do you support?",
      answer: "We support multiple authentication methods including API keys, OAuth 2.0, JWT tokens, and custom authentication schemes depending on your security requirements."
    },
    {
      question: "Do you provide SDKs and libraries?",
      answer: "Yes, we provide SDKs for popular programming languages including Python, JavaScript, Java, C#, and PHP. We also offer code examples and integration guides."
    },
    {
      question: "What are your API rate limits?",
      answer: "Rate limits vary by API and subscription tier. We offer different tiers from free developer accounts to enterprise-level unlimited access. Specific limits are detailed in our API documentation."
    },
    {
      question: "How do you handle API versioning?",
      answer: "We use semantic versioning and maintain backward compatibility for at least 12 months. We provide migration guides and deprecation notices well in advance of any breaking changes."
    },
    {
      question: "Do you provide webhooks?",
      answer: "Yes, we support webhooks for real-time notifications and event-driven integrations. You can configure webhooks for various events and receive instant notifications."
    },
    {
      question: "What about API monitoring and analytics?",
      answer: "We provide comprehensive API monitoring, analytics dashboards, and usage reports. You can track API performance, usage patterns, and error rates in real-time."
    },
    {
      question: "Can I test APIs before integration?",
      answer: "Yes, we provide sandbox environments and testing tools where you can test APIs with sample data before integrating them into your production systems."
    },
    {
      question: "Do you offer API support?",
      answer: "Yes, we provide comprehensive API support including documentation, code examples, integration assistance, and technical support for API-related issues."
    }
  ]
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const categories = [
    { key: 'general', label: 'General', count: faqCategories.general.length },
    { key: 'technical', label: 'Technical', count: faqCategories.technical.length },
    { key: 'billing', label: 'Billing', count: faqCategories.billing.length },
    { key: 'api', label: 'API', count: faqCategories.api.length }
  ];

  const currentFAQs = faqCategories[activeCategory as keyof typeof faqCategories];

  return (
    <MainLayout
      title="FAQ - Zion Tech Group"
      description="Find answers to frequently asked questions about our services, pricing, technical support, and more."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <HelpCircle className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-blue-100 mb-8">
                Find answers to common questions about our services, pricing, and support
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setActiveCategory(category.key)}
                    className={`px-6 py-3 rounded-full font-medium transition-all ${
                      activeCategory === category.key
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {currentFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openItems.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Still have questions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Can't find what you're looking for? Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/help"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium border border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Help Center
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}