import React, { useState } from 'react'
import MainLayout from '../components/layout/MainLayout'
import {
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Search,
  Filter,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react'

const faqCategories = [
  { id: 'general', name: 'General Questions', count: 15 },
  { id: 'technical', name: 'Technical Support', count: 20 },
  { id: 'billing', name: 'Billing & Pricing', count: 10 },
  { id: 'api', name: 'API & Integration', count: 25 }
];

const faqs = {
  general: [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive technology solutions including AI services, IT services, micro SaaS solutions, custom development, and consulting. Our services cover everything from artificial intelligence and machine learning to cloud infrastructure and cybersecurity."
    },
    {
      question: "How long has Zion Tech Group been in business?",
      answer: "Zion Tech Group has been providing technology solutions for over 5 years. We've grown from a small startup to a trusted partner for businesses of all sizes, from startups to Fortune 500 companies."
    },
    {
      question: "Do you work with startups?",
      answer: "Yes! We have special packages and pricing designed specifically for startups. We understand the unique challenges startups face and offer flexible solutions that can grow with your business."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, real estate, education, and more. Our solutions are tailored to meet the specific needs and compliance requirements of each industry."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we provide comprehensive ongoing support including maintenance, updates, monitoring, and technical assistance. We offer various support packages to meet your specific needs."
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
      answer: "Yes, we provide complete source code for all custom development projects. You own the intellectual property and have full access to the codebase."
    },
    {
      question: "How do you ensure code quality?",
      answer: "We follow industry best practices including code reviews, automated testing, continuous integration, and comprehensive documentation. Our code is clean, maintainable, and follows established coding standards."
    },
    {
      question: "Do you offer cloud services?",
      answer: "Yes, we provide cloud infrastructure services including setup, migration, optimization, and management. We work with all major cloud providers including AWS, Azure, and Google Cloud."
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
      question: "Do you offer free consultations?",
      answer: "Yes, we offer free initial consultations to discuss your project requirements and provide recommendations. This helps us understand your needs and provide accurate estimates."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, credit cards, and digital payment platforms. We can also work with your preferred payment terms."
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
      question: "How do I get started with your APIs?",
      answer: "Getting started is easy! Sign up for an account, get your API key, and check out our comprehensive documentation with code examples and tutorials."
    },
    {
      question: "Do you provide SDKs?",
      answer: "Yes, we provide SDKs for popular programming languages including Python, JavaScript, Java, and C#. We also provide code examples and integration guides."
    },
    {
      question: "What about API rate limits?",
      answer: "We have reasonable rate limits based on your subscription plan. Higher-tier plans have higher limits, and we can work with you to customize limits for enterprise needs."
    },
    {
      question: "Do you offer API testing environments?",
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
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = faqs[activeCategory as keyof typeof faqs].filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainLayout
      title="FAQ - Zion Tech Group"
      description="Find answers to frequently asked questions about our services, pricing, technical support, and more."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Find answers to common questions about our services and solutions
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search FAQs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                        activeCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </motion.div>

              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openItems.includes(index) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {filteredFaqs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No FAQs found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search terms or browse different categories
                  </p>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Still have questions?
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Can't find what you're looking for? Our team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact Us
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us
                  </a>
                  <a
                    href="mailto:support@ziontechgroup.com"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}