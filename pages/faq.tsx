import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail,
  Zap,
  Brain,
  Shield,
  Cloud,
  BarChart3,
  Rocket
} from 'lucide-react';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const categories = [
    { id: 'general', name: 'General', icon: HelpCircle },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'data', name: 'Data & Analytics', icon: BarChart3 },
    { id: 'emerging', name: 'Emerging Technologies', icon: Rocket }
  ];

  const faqData = {
    general: [
      {
        id: 'gen-1',
        question: 'What is Zion Tech Group?',
        answer: 'Zion Tech Group is a leading technology solutions provider that specializes in AI, cloud architecture, cybersecurity, and emerging technologies. We help businesses transform their digital presence and achieve competitive advantages through cutting-edge technology solutions.'
      },
      {
        id: 'gen-2',
        question: 'Where is Zion Tech Group located?',
        answer: 'Our headquarters is located at 364 E Main St STE 1008, Middletown, DE 19709. We serve clients globally and have a distributed team of technology experts.'
      },
      {
        id: 'gen-3',
        question: 'How can I contact Zion Tech Group?',
        answer: 'You can reach us through multiple channels: Phone: +1 302 464 0950, Email: kleber@ziontechgroup.com, or through our contact form on the website. We typically respond within 24 hours.'
      },
      {
        id: 'gen-4',
        question: 'What industries do you serve?',
        answer: 'We serve a wide range of industries including technology, healthcare, finance, manufacturing, retail, education, and professional services. Our solutions are adaptable to any industry that can benefit from digital transformation.'
      }
    ],
    ai: [
      {
        id: 'ai-1',
        question: 'What AI services do you offer?',
        answer: 'We offer comprehensive AI services including machine learning model development, natural language processing, computer vision, predictive analytics, AI automation platforms, and custom AI solutions tailored to your business needs.'
      },
      {
        id: 'ai-2',
        question: 'How do you ensure AI model accuracy?',
        answer: 'We use industry best practices including robust data validation, model testing, continuous monitoring, and regular retraining. Our AI models typically achieve 85-95% accuracy depending on the use case.'
      },
      {
        id: 'ai-3',
        question: 'Can you integrate AI with existing systems?',
        answer: 'Yes, we specialize in integrating AI solutions with existing enterprise systems. We use APIs, microservices, and modern integration patterns to ensure seamless connectivity without disrupting your current operations.'
      }
    ],
    cybersecurity: [
      {
        id: 'sec-1',
        question: 'What cybersecurity services do you provide?',
        answer: 'Our cybersecurity services include zero-trust architecture implementation, SOC 2 compliance, threat detection and response, security assessments, penetration testing, and quantum-resistant encryption solutions.'
      },
      {
        id: 'sec-2',
        question: 'How do you stay ahead of emerging threats?',
        answer: 'We maintain a dedicated threat intelligence team, participate in security research communities, and continuously monitor emerging threats. Our AI-powered systems can detect and respond to zero-day vulnerabilities.'
      },
      {
        id: 'sec-3',
        question: 'Do you provide 24/7 security monitoring?',
        answer: 'Yes, we offer 24/7 security monitoring and incident response services. Our security operations center (SOC) provides round-the-clock protection and immediate response to security incidents.'
      }
    ],
    cloud: [
      {
        id: 'cloud-1',
        question: 'What cloud platforms do you work with?',
        answer: 'We work with all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud environments. We also specialize in multi-cloud strategies and cloud migration services.'
      },
      {
        id: 'cloud-2',
        question: 'How do you ensure cloud security?',
        answer: 'We implement comprehensive cloud security measures including identity and access management, data encryption, network security, compliance monitoring, and regular security audits.'
      },
      {
        id: 'cloud-3',
        question: 'Can you help with cloud cost optimization?',
        answer: 'Absolutely! We provide cloud cost optimization services including resource right-sizing, reserved instance planning, cost monitoring, and automated scaling to help you minimize cloud expenses.'
      }
    ],
    data: [
      {
        id: 'data-1',
        question: 'What data analytics services do you offer?',
        answer: 'We offer data warehousing, business intelligence, real-time analytics, data quality management, predictive analytics, and custom dashboard development to help you make data-driven decisions.'
      },
      {
        id: 'data-2',
        question: 'How do you handle data privacy and compliance?',
        answer: 'We implement strict data privacy measures and ensure compliance with GDPR, HIPAA, SOC 2, and other relevant regulations. All data processing follows industry best practices for security and privacy.'
      },
      {
        id: 'data-3',
        question: 'Can you help with data migration?',
        answer: 'Yes, we specialize in data migration services including data assessment, mapping, transformation, validation, and testing to ensure smooth transitions with minimal downtime.'
      }
    ],
    emerging: [
      {
        id: 'emerging-1',
        question: 'What emerging technologies do you work with?',
        answer: 'We work with quantum computing, blockchain, IoT platforms, edge computing, augmented reality, and other cutting-edge technologies to provide future-ready solutions for our clients.'
      },
      {
        id: 'emerging-2',
        question: 'How do you evaluate new technologies?',
        answer: 'We maintain a dedicated research team that evaluates emerging technologies, conducts proof-of-concept projects, and assesses their business value before recommending them to clients.'
      },
      {
        id: 'emerging-3',
        question: 'Can you help implement emerging technologies?',
        answer: 'Yes, we provide full implementation services for emerging technologies including strategy development, pilot programs, full-scale deployment, and ongoing support and optimization.'
      }
    ]
  };

  const filteredFAQs = Object.entries(faqData).reduce((acc, [category, faqs]) => {
    if (activeCategory === 'all' || category === activeCategory) {
      const filtered = faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filtered.length > 0) {
        acc[category] = filtered;
      }
    }
    return acc;
  }, {} as Record<string, typeof faqData[keyof typeof faqData]>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 lg:text-xl">
              Find answers to common questions about our services, technology solutions, and how we can help your business.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {Object.entries(filteredFAQs).map(([category, faqs]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {categories.find(c => c.id === category)?.name || category}
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        {expandedItems.has(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      <AnimatePresence>
                        {expandedItems.has(faq.id) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-4"
                          >
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {Object.keys(filteredFAQs).length === 0 && (
            <div className="text-center py-16">
              <HelpCircle className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">Try adjusting your search terms or browse all categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Still have questions?
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}