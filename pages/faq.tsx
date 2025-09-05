import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Search,
  Filter,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';

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
      answer: "We serve a wide range of industries including healthcare, financial services, e-commerce, manufacturing, education, and real estate. Our team has deep domain expertise across multiple sectors."
    },
    {
      question: "Do you offer remote services?",
      answer: "Yes, we work with clients globally and offer remote services. Our team is distributed and we have experience working with clients across different time zones and locations."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on complexity and scope. Simple projects can be completed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the planning phase."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive ongoing support and maintenance services. This includes 24/7 monitoring, regular updates, security patches, and technical support to ensure your systems run smoothly."
    },
    {
      question: "What makes Zion Tech Group different?",
      answer: "We combine cutting-edge technology with deep industry expertise. Our team stays ahead of the latest trends and technologies, ensuring our clients get innovative solutions that provide real business value."
    },
    {
      question: "Do you have case studies or references?",
      answer: "Yes, we have numerous case studies and client references available. We can provide specific examples relevant to your industry and project requirements during our consultation process."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply contact us through our website, call us at +1 302 464 0950, or email kleber@ziontechgroup.com. We'll schedule a free consultation to discuss your needs and provide a customized solution."
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile development methodology with regular check-ins and iterative improvements. Our process includes discovery, planning, development, testing, deployment, and ongoing support phases."
    },
    {
      question: "Do you work with existing systems?",
      answer: "Yes, we specialize in integrating with existing systems and can work with your current technology stack. We ensure seamless integration and minimal disruption to your operations."
    },
    {
      question: "What technologies do you use?",
      answer: "We use a wide range of modern technologies including React, Node.js, Python, AI/ML frameworks, cloud platforms (AWS, Azure, GCP), and various databases. We choose the best technology for each specific project."
    },
    {
      question: "Do you offer training?",
      answer: "Yes, we provide comprehensive training for your team on any systems we develop or implement. This ensures your team can effectively use and maintain the solutions we provide."
    },
    {
      question: "What is your quality assurance process?",
      answer: "We have a rigorous QA process that includes code reviews, automated testing, manual testing, security audits, and performance testing to ensure the highest quality deliverables."
    }
  ],
  technical: [
    {
      question: "What programming languages do you support?",
      answer: "We support a wide range of programming languages including JavaScript, TypeScript, Python, Java, C#, PHP, Go, Rust, and more. We choose the most appropriate language for each project's requirements."
    },
    {
      question: "Do you provide API development?",
      answer: "Yes, we specialize in RESTful API development, GraphQL APIs, and microservices architecture. We ensure APIs are well-documented, secure, and scalable."
    },
    {
      question: "What cloud platforms do you work with?",
      answer: "We work with all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and others. We help you choose the best platform for your specific needs."
    },
    {
      question: "Do you provide database design and optimization?",
      answer: "Yes, we offer comprehensive database services including design, optimization, migration, and performance tuning for both SQL and NoSQL databases."
    },
    {
      question: "What about security and compliance?",
      answer: "Security is our top priority. We follow industry best practices, implement proper authentication and authorization, and ensure compliance with relevant regulations like GDPR, HIPAA, and SOC 2."
    },
    {
      question: "Do you offer mobile app development?",
      answer: "Yes, we develop both native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and native technologies."
    },
    {
      question: "What is your approach to testing?",
      answer: "We implement comprehensive testing strategies including unit tests, integration tests, end-to-end tests, and performance tests. We use automated testing tools and manual testing processes."
    },
    {
      question: "Do you provide DevOps services?",
      answer: "Yes, we offer complete DevOps solutions including CI/CD pipeline setup, infrastructure as code, monitoring, logging, and deployment automation."
    },
    {
      question: "What about scalability and performance?",
      answer: "We design all solutions with scalability in mind, implementing proper caching, load balancing, and performance optimization techniques to handle growth."
    },
    {
      question: "Do you work with legacy systems?",
      answer: "Yes, we have extensive experience modernizing legacy systems, migrating to new platforms, and ensuring smooth transitions without disrupting business operations."
    },
    {
      question: "What is your data backup and recovery strategy?",
      answer: "We implement comprehensive backup and disaster recovery solutions including automated backups, off-site storage, and tested recovery procedures to protect your data."
    },
    {
      question: "Do you provide monitoring and analytics?",
      answer: "Yes, we set up comprehensive monitoring, logging, and analytics solutions to track system performance, user behavior, and business metrics."
    },
    {
      question: "What about third-party integrations?",
      answer: "We have experience integrating with hundreds of third-party services including payment processors, CRM systems, marketing tools, and other business applications."
    },
    {
      question: "Do you offer code reviews and audits?",
      answer: "Yes, we provide code review services and security audits to ensure code quality, identify potential issues, and maintain best practices."
    },
    {
      question: "What is your documentation process?",
      answer: "We provide comprehensive technical documentation including API documentation, user guides, deployment guides, and maintenance procedures."
    },
    {
      question: "Do you support multiple environments?",
      answer: "Yes, we set up and manage multiple environments including development, staging, and production with proper configuration management and deployment processes."
    },
    {
      question: "What about version control and collaboration?",
      answer: "We use Git for version control and implement proper branching strategies, code review processes, and collaboration tools for effective team development."
    },
    {
      question: "Do you provide technical consulting?",
      answer: "Yes, we offer technical consulting services to help you make informed decisions about technology choices, architecture, and implementation strategies."
    },
    {
      question: "What is your approach to maintenance?",
      answer: "We provide proactive maintenance including regular updates, security patches, performance monitoring, and preventive measures to ensure system reliability."
    },
    {
      question: "Do you offer 24/7 technical support?",
      answer: "Yes, we offer 24/7 technical support for critical systems with dedicated support teams and escalation procedures for urgent issues."
    }
  ],
  billing: [
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including fixed-price projects, time and materials, retainer agreements, and subscription-based services. We work with you to find the best pricing structure for your needs."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans for larger projects, including milestone-based payments and monthly installments to help manage cash flow."
    },
    {
      question: "What is included in your pricing?",
      answer: "Our pricing typically includes development, testing, deployment, documentation, and initial support. We provide detailed breakdowns of what's included in each project."
    },
    {
      question: "Do you charge for consultations?",
      answer: "Initial consultations are free. We only charge for detailed technical analysis, custom proposals, or extensive planning work that goes beyond the initial consultation."
    },
    {
      question: "What about change requests?",
      answer: "We understand that requirements can change during development. We have a clear change request process with transparent pricing for any modifications to the original scope."
    },
    {
      question: "Do you offer discounts for long-term projects?",
      answer: "Yes, we offer discounts for long-term projects and retainer agreements. The longer the engagement, the better the pricing we can offer."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer satisfaction guarantees and will work with you to resolve any issues. Our goal is to ensure you're completely satisfied with our work."
    },
    {
      question: "Do you provide detailed invoices?",
      answer: "Yes, we provide detailed invoices with clear breakdowns of work performed, time spent, and any additional costs or expenses."
    },
    {
      question: "What about ongoing maintenance costs?",
      answer: "We offer competitive maintenance packages with transparent pricing. Costs depend on the complexity and requirements of your systems."
    },
    {
      question: "Do you work with budgets?",
      answer: "Yes, we work within your budget constraints and can adjust project scope or timeline to meet your financial requirements while delivering maximum value."
    }
  ],
  api: [
    {
      question: "What types of APIs do you develop?",
      answer: "We develop RESTful APIs, GraphQL APIs, WebSocket APIs, and microservices APIs. We choose the best approach based on your specific requirements and use cases."
    },
    {
      question: "Do you provide API documentation?",
      answer: "Yes, we provide comprehensive API documentation including interactive documentation, code examples, and integration guides for easy implementation."
    },
    {
      question: "What about API security?",
      answer: "We implement robust API security including authentication, authorization, rate limiting, input validation, and encryption to protect your APIs and data."
    },
    {
      question: "Do you offer API testing?",
      answer: "Yes, we provide comprehensive API testing including unit tests, integration tests, load testing, and security testing to ensure reliability and performance."
    },
    {
      question: "What is your API versioning strategy?",
      answer: "We implement proper API versioning strategies to ensure backward compatibility and smooth transitions when updating APIs."
    },
    {
      question: "Do you provide SDKs and client libraries?",
      answer: "Yes, we develop SDKs and client libraries for popular programming languages to make API integration easier for your development teams."
    },
    {
      question: "What about API monitoring and analytics?",
      answer: "We set up comprehensive API monitoring, logging, and analytics to track usage, performance, errors, and business metrics."
    },
    {
      question: "Do you offer API migration services?",
      answer: "Yes, we help migrate from legacy APIs to modern RESTful or GraphQL APIs with minimal disruption to existing integrations."
    },
    {
      question: "What is your approach to API design?",
      answer: "We follow RESTful design principles and best practices, ensuring APIs are intuitive, consistent, and easy to use for developers."
    },
    {
      question: "Do you provide API integration support?",
      answer: "Yes, we provide ongoing support for API integrations, including troubleshooting, optimization, and assistance with implementation."
    },
    {
      question: "What about API rate limiting and throttling?",
      answer: "We implement appropriate rate limiting and throttling strategies to protect your APIs from abuse while ensuring legitimate users have access."
    },
    {
      question: "Do you offer API caching strategies?",
      answer: "Yes, we implement intelligent caching strategies to improve API performance and reduce server load while maintaining data consistency."
    },
    {
      question: "What is your API error handling approach?",
      answer: "We implement comprehensive error handling with meaningful error messages, proper HTTP status codes, and detailed error documentation."
    },
    {
      question: "Do you provide API load balancing?",
      answer: "Yes, we set up load balancing and scaling solutions to ensure your APIs can handle high traffic and maintain performance."
    },
    {
      question: "What about API data validation?",
      answer: "We implement robust input validation and data sanitization to ensure data integrity and prevent security vulnerabilities."
    },
    {
      question: "Do you offer API performance optimization?",
      answer: "Yes, we optimize API performance through database query optimization, caching, compression, and other performance enhancement techniques."
    },
    {
      question: "What is your API testing strategy?",
      answer: "We use automated testing tools and manual testing processes to ensure API reliability, performance, and security across all scenarios."
    },
    {
      question: "Do you provide API deployment automation?",
      answer: "Yes, we set up automated deployment pipelines for APIs including testing, staging, and production deployments with rollback capabilities."
    },
    {
      question: "What about API compliance and standards?",
      answer: "We ensure APIs comply with industry standards and regulations, including proper data handling, security, and privacy requirements."
    },
    {
      question: "Do you offer API consulting?",
      answer: "Yes, we provide API consulting services to help you design, plan, and implement the best API strategy for your business needs."
    },
    {
      question: "What is your API maintenance approach?",
      answer: "We provide proactive API maintenance including monitoring, updates, security patches, and performance optimization to ensure reliability."
    },
    {
      question: "Do you support multiple API formats?",
      answer: "Yes, we support various API formats including JSON, XML, and other data formats based on your specific requirements and integration needs."
    },
    {
      question: "What about API authentication methods?",
      answer: "We support multiple authentication methods including API keys, OAuth, JWT tokens, and other secure authentication mechanisms."
    },
    {
      question: "Do you provide API usage analytics?",
      answer: "Yes, we implement comprehensive analytics to track API usage, performance metrics, user behavior, and business insights."
    },
    {
      question: "What is your API scalability strategy?",
      answer: "We design APIs with scalability in mind, implementing proper architecture, caching, and scaling strategies to handle growth."
    }
  ]
};

const FAQPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const filteredFAQs = faqs[selectedCategory as keyof typeof faqs].filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header Section */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Find answers to common questions about our services, pricing, and processes. 
                  Can't find what you're looking for? Contact us directly.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Contact Support</h4>
                  <div className="space-y-3">
                    <a
                      href="tel:+13024640950"
                      className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      +1 302 464 0950
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search Bar */}
              <div className="mb-8">
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

              {/* FAQ Items */}
              <div className="space-y-4">
                <AnimatePresence>
                  {filteredFAQs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          {expandedItems.has(index) ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {expandedItems.has(index) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* No Results */}
              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search terms or browse different categories.
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our team is here to help. Contact us for personalized assistance with your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQPage;