<<<<<<< HEAD
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

const faqData = {
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
  const [searchTerm, setSearchTerm] = useState('');

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
=======
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  ArrowRight,
  Search,
  Plus,
  Minus,
  CheckCircle,
  Users,
  Settings,
  DollarSign,
  Shield,
  Globe,
  Zap
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const faqCategories = [
  {
    title: "General Questions",
    icon: HelpCircle,
    color: "blue",
    questions: [
      {
        question: "What is Zion Tech Group?",
        answer: "Zion Tech Group is a leading technology solutions provider specializing in AI services, cloud solutions, and digital transformation. We help businesses leverage cutting-edge technology to achieve their goals."
      },
      {
        question: "How long has Zion Tech Group been in business?",
        answer: "We've been providing technology solutions for over 5 years, serving clients across various industries with innovative and reliable services."
      },
      {
        question: "Where is Zion Tech Group located?",
        answer: "Our headquarters is located at 364 E Main St STE 1008, Middletown, DE 19709. We also have remote teams and serve clients globally."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and government sectors."
      }
    ]
  },
  {
    title: "Services & Solutions",
    icon: Settings,
    color: "green",
    questions: [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "We offer AI services, IT services, micro SaaS solutions, custom development, digital transformation, cloud migration, and talent acquisition services."
      },
      {
        question: "Do you provide custom development?",
        answer: "Yes, we specialize in custom software development tailored to your specific business requirements and industry needs."
      },
      {
        question: "What AI services do you offer?",
        answer: "Our AI services include machine learning solutions, natural language processing, computer vision, predictive analytics, and AI-powered automation."
      },
      {
        question: "Do you offer cloud migration services?",
        answer: "Yes, we provide comprehensive cloud migration services including strategy planning, implementation, and ongoing support for AWS, Azure, and Google Cloud."
      }
    ]
  },
  {
    title: "Pricing & Billing",
    icon: DollarSign,
    color: "purple",
    questions: [
      {
        question: "How do you price your services?",
        answer: "Our pricing varies based on project scope, complexity, and requirements. We offer project-based, retainer, and subscription pricing models to fit different needs."
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes, we provide free initial consultations to understand your needs and provide recommendations for the best solutions."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods including credit cards, bank transfers, and corporate purchase orders. Payment terms can be discussed during project planning."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans for larger projects to help manage cash flow and budget requirements."
      }
    ]
  },
  {
    title: "Technical Support",
    icon: Shield,
    color: "orange",
    questions: [
      {
        question: "What kind of support do you provide?",
        answer: "We provide 24/7 technical support through multiple channels including live chat, email, phone, and video calls. Our support team includes certified experts in various technologies."
      },
      {
        question: "How quickly do you respond to support requests?",
        answer: "We guarantee response times of less than 2 minutes for critical issues, and within 4 hours for non-critical requests."
      },
      {
        question: "Do you provide training for your solutions?",
        answer: "Yes, we provide comprehensive training including documentation, video tutorials, hands-on sessions, and ongoing support to ensure your team can effectively use our solutions."
      },
      {
        question: "What if I need help with integration?",
        answer: "Our team specializes in seamless integration with existing systems. We provide full support throughout the integration process and beyond."
      }
    ]
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    color: "red",
    questions: [
      {
        question: "What security measures do you have in place?",
        answer: "We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2 Type II and ISO 27001."
      },
      {
        question: "Do you sign NDAs and confidentiality agreements?",
        answer: "Yes, we understand the importance of confidentiality and are happy to sign NDAs and other confidentiality agreements to protect your sensitive information."
      },
      {
        question: "How do you handle data privacy?",
        answer: "We follow strict data privacy protocols and comply with GDPR, CCPA, and other relevant data protection regulations. Your data is always encrypted and securely stored."
      },
      {
        question: "Are you certified for specific compliance standards?",
        answer: "Yes, we maintain various certifications including SOC 2 Type II, ISO 27001, and other industry-specific compliance standards."
      }
    ]
  },
  {
    title: "Getting Started",
    icon: Zap,
    color: "indigo",
    questions: [
      {
        question: "How do I get started with Zion Tech Group?",
        answer: "Getting started is easy! Contact us through our website, call us directly, or schedule a free consultation. We'll assess your needs and provide a customized solution."
      },
      {
        question: "What information do I need to provide?",
        answer: "We'll need information about your current technology stack, specific requirements, timeline, budget, and any existing systems you want to integrate with."
      },
      {
        question: "How long does the onboarding process take?",
        answer: "The onboarding process typically takes 1-2 weeks, depending on project complexity. We'll provide a detailed timeline during our initial consultation."
      },
      {
        question: "Do you work with startups?",
        answer: "Yes, we work with businesses of all sizes including startups. We offer special packages and flexible solutions designed for growing companies."
      }
    ]
  }
];

const popularQuestions = [
  {
    question: "What is the typical project timeline?",
    answer: "Project timelines vary based on complexity, but most projects range from 2-6 months. We provide detailed timelines during the planning phase.",
    category: "General"
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes, we offer comprehensive maintenance and support packages to ensure your solutions continue to perform optimally.",
    category: "Support"
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely! We work collaboratively with your internal teams and can provide training and knowledge transfer.",
    category: "Services"
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern technologies including React, Node.js, Python, AI/ML, cloud platforms, and various databases.",
    category: "Technical"
  }
];

export default function FAQPage() {
  return (
    <MainLayout 
      title="Frequently Asked Questions - Zion Tech Group"
      description="Find answers to common questions about Zion Tech Group services, pricing, support, and more. Get the information you need quickly."
      keywords="FAQ, frequently asked questions, help, support, services, pricing, technical questions"
    >
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
              initial={{ opacity: 0, y: 20 }}
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Find answers to common questions about our services, pricing, and support.
=======
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Find answers to the most common questions about our services, pricing, support, and more. 
                Can't find what you're looking for? Contact us directly.
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQ..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#faq-categories"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Browse FAQ
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        activeCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqData[activeCategory]?.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openItems.includes(index) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
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
=======

        {/* Popular Questions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Popular Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The most frequently asked questions from our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularQuestions.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm font-medium">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section id="faq-categories" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers organized by topic for easier navigation.
              </p>
            </motion.div>

            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className={`w-6 h-6 text-${category.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg">
                        <button className="w-full text-left p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </h4>
                            <Plus className="w-5 h-5 text-gray-400" />
                          </div>
                        </button>
                        <div className="px-4 pb-4">
                          <p className="text-gray-600">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Can't find the answer you're looking for? Our support team is here to help you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Contact Support
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/support"
                  className="px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Visit Support Center
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Now that you have the answers you need, let's discuss how we can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}