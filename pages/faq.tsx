import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Search, 
  ArrowRight,
  Phone,
  Mail,
  MessageSquare
} from 'lucide-react';

const faqCategories = [
  {
    name: "General",
    icon: HelpCircle,
    questions: [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "We offer comprehensive technology solutions including AI services, IT services, and Micro SaaS products. Our AI services include machine learning, natural language processing, computer vision, and predictive analytics. Our IT services cover cloud infrastructure, cybersecurity, network management, and custom development. Our Micro SaaS products range from business automation tools to specialized industry solutions."
      },
      {
        question: "How can I get started with your services?",
        answer: "Getting started is easy! You can contact us through our website, call us at +1 302 464 0950, or email us at kleber@ziontechgroup.com. We offer free consultations to understand your needs and provide customized solutions. Our team will work with you to develop a project plan that fits your budget and timeline."
      },
      {
        question: "Do you offer 24/7 support?",
        answer: "Yes, we provide 24/7 technical support for all our services. Our support team is available around the clock to help with any issues or questions you may have. We also offer different support tiers depending on your needs, including dedicated support for enterprise clients."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, technology, education, and government. Our solutions are tailored to meet the specific needs and compliance requirements of each industry we work with."
      }
    ]
  },
  {
    name: "AI Services",
    icon: HelpCircle,
    questions: [
      {
        question: "What AI technologies do you specialize in?",
        answer: "We specialize in machine learning, deep learning, natural language processing, computer vision, predictive analytics, and AI automation. Our team has expertise in various AI frameworks including TensorFlow, PyTorch, and cloud AI services from AWS, Azure, and Google Cloud."
      },
      {
        question: "How long does it take to implement an AI solution?",
        answer: "Implementation time varies depending on the complexity of the project. Simple AI solutions can be implemented in 2-4 weeks, while complex enterprise AI systems may take 3-6 months. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process."
      },
      {
        question: "Do you provide AI training and consulting?",
        answer: "Yes, we offer comprehensive AI training and consulting services. Our team can help your organization understand AI capabilities, develop AI strategies, and train your staff on AI tools and technologies. We also provide ongoing support to ensure successful AI adoption."
      },
      {
        question: "What data do you need for AI projects?",
        answer: "The data requirements depend on the specific AI project. We typically need relevant historical data, current data sources, and clear objectives for the AI system. We can help you identify and prepare the right data for your AI project, including data cleaning, preprocessing, and validation."
      }
    ]
  },
  {
    name: "IT Services",
    icon: HelpCircle,
    questions: [
      {
        question: "What IT infrastructure services do you provide?",
        answer: "We provide comprehensive IT infrastructure services including cloud migration, network design and implementation, cybersecurity solutions, server management, database administration, and disaster recovery planning. Our services cover both on-premise and cloud-based infrastructure."
      },
      {
        question: "Do you offer cloud migration services?",
        answer: "Yes, we specialize in cloud migration services for AWS, Azure, and Google Cloud platforms. Our migration process includes assessment, planning, execution, and optimization to ensure a smooth transition with minimal downtime and maximum performance."
      },
      {
        question: "What cybersecurity measures do you implement?",
        answer: "We implement comprehensive cybersecurity measures including firewalls, intrusion detection systems, encryption, access controls, security monitoring, and compliance management. We also provide security audits, penetration testing, and ongoing security monitoring services."
      },
      {
        question: "Do you provide ongoing IT support?",
        answer: "Yes, we offer various levels of ongoing IT support including basic support, managed services, and dedicated IT teams. Our support services cover monitoring, maintenance, updates, troubleshooting, and proactive problem prevention."
      }
    ]
  },
  {
    name: "Micro SaaS",
    icon: HelpCircle,
    questions: [
      {
        question: "What is Micro SaaS and how is it different from traditional SaaS?",
        answer: "Micro SaaS refers to small, focused software-as-a-service applications that solve specific business problems. Unlike traditional SaaS platforms that try to do everything, Micro SaaS products are specialized, lightweight, and often more affordable. They're perfect for small to medium businesses that need specific functionality without the complexity of large enterprise systems."
      },
      {
        question: "Can I customize Micro SaaS products for my business?",
        answer: "Yes, our Micro SaaS products are designed to be customizable and configurable. We can modify features, integrate with your existing systems, and adapt the user interface to match your brand and workflow requirements. Customization options vary by product and complexity."
      },
      {
        question: "What kind of support do you provide for Micro SaaS products?",
        answer: "We provide comprehensive support for all our Micro SaaS products including setup assistance, user training, technical support, regular updates, and feature enhancements. Support is available through multiple channels including email, phone, and online documentation."
      },
      {
        question: "How do I choose the right Micro SaaS product for my business?",
        answer: "Our team will work with you to understand your specific needs and recommend the most suitable Micro SaaS products. We offer free consultations to assess your requirements and provide product demonstrations. We can also create custom solutions if existing products don't meet your needs."
      }
    ]
  },
  {
    name: "Pricing & Billing",
    icon: HelpCircle,
    questions: [
      {
        question: "What are your pricing models?",
        answer: "We offer flexible pricing models including project-based pricing, hourly rates, monthly subscriptions, and custom enterprise agreements. Pricing depends on the scope of work, complexity, timeline, and specific requirements. We provide detailed quotes after understanding your needs during our free consultation."
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes, we offer free initial consultations to understand your needs and provide recommendations. During the consultation, we'll discuss your requirements, assess your current systems, and provide a detailed proposal with pricing and timeline information."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods including credit cards, bank transfers, checks, and corporate purchase orders. For enterprise clients, we can arrange custom payment terms and billing cycles to fit your accounting requirements."
      },
      {
        question: "Do you offer discounts for long-term contracts?",
        answer: "Yes, we offer discounts for long-term contracts and annual commitments. Discounts vary depending on the contract length, service level, and total value. Contact us to discuss the best pricing options for your needs."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredQuestions = faqCategories
    .filter(category => selectedCategory === 'All' || category.name === selectedCategory)
    .flatMap(category => 
      category.questions
        .filter(q => 
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((q, index) => ({
          ...q,
          category: category.name,
          id: `${category.name}-${index}`
        }))
    );

  const toggleQuestion = (questionId: string) => {
    const questionIndex = filteredQuestions.findIndex(q => q.id === questionId);
    setOpenQuestion(openQuestion === questionIndex ? null : questionIndex);
  };

  return (
    <MainLayout
      title="FAQ - Zion Tech Group"
      description="Find answers to frequently asked questions about Zion Tech Group's AI services, IT solutions, and Micro SaaS products. Get help with pricing, implementation, and support."
      keywords="FAQ, frequently asked questions, help, support, AI services, IT services, Micro SaaS, pricing, implementation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <HelpCircle className="w-16 h-16 text-purple-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Frequently Asked Questions
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to common questions about our services, pricing, 
                and implementation process.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search questions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="All">All Categories</option>
                  {faqCategories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                <AnimatePresence>
                  {filteredQuestions.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white border border-gray-200 rounded-lg shadow-sm"
                    >
                      <button
                        onClick={() => toggleQuestion(faq.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold mr-3">
                              {faq.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {faq.question}
                          </h3>
                        </div>
                        {openQuestion === index ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      <AnimatePresence>
                        {openQuestion === index && (
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
                </AnimatePresence>
              </div>

              {filteredQuestions.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No questions found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search terms or browse all categories.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help. 
                Contact us and we'll get back to you as soon as possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-4">+1 302 464 0950</p>
                  <p className="text-sm text-gray-500">24/7 Support Available</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">kleber@ziontechgroup.com</p>
                  <p className="text-sm text-gray-500">Quick Response Guaranteed</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <MessageSquare className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Available on Website</p>
                  <p className="text-sm text-gray-500">Instant Support</p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold inline-flex items-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}