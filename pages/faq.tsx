import React, { useState } from 'react';
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
import Layout from '../components/Layout';

const faqCategories = [
  {
    name: "General",
    icon: HelpCircle,
    questions: [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "We offer comprehensive AI solutions, IT services, and micro SaaS platforms. Our services include AI development, cloud migration, cybersecurity, mobile app development, and custom software solutions."
      },
      {
        question: "How long does a typical project take?",
        answer: "Project timelines vary depending on complexity and scope. Simple websites take 2-4 weeks, while complex AI solutions can take 3-6 months. We provide detailed timelines during the consultation phase."
      },
      {
        question: "Do you work with startups or only large enterprises?",
        answer: "We work with businesses of all sizes, from startups to Fortune 500 companies. Our flexible approach allows us to scale our services to meet your specific needs and budget."
      },
      {
        question: "What technologies do you specialize in?",
        answer: "We specialize in AI/ML, cloud computing (AWS, Azure, GCP), mobile development (React Native, Flutter), web development (React, Next.js, Node.js), and emerging technologies like blockchain and IoT."
      }
    ]
  },
  {
    name: "AI Services",
    icon: HelpCircle,
    questions: [
      {
        question: "What AI services do you provide?",
        answer: "Our AI services include machine learning model development, natural language processing, computer vision, predictive analytics, chatbots, and AI-powered automation solutions."
      },
      {
        question: "How do you ensure AI model accuracy?",
        answer: "We use rigorous testing methodologies, cross-validation techniques, and continuous monitoring to ensure high accuracy. Our models typically achieve 90%+ accuracy rates depending on the use case."
      },
      {
        question: "Can you integrate AI into existing systems?",
        answer: "Yes, we specialize in integrating AI capabilities into existing systems with minimal disruption. We ensure seamless integration while maintaining system performance and security."
      }
    ]
  },
  {
    name: "Pricing",
    icon: HelpCircle,
    questions: [
      {
        question: "How do you structure your pricing?",
        answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project complexity, timeline, and specific requirements."
      },
      {
        question: "Do you offer maintenance and support?",
        answer: "Yes, we provide ongoing maintenance and support services. Our support packages include bug fixes, updates, performance monitoring, and 24/7 technical support."
      },
      {
        question: "Are there any hidden costs?",
        answer: "No, we believe in transparent pricing. All costs are discussed and agreed upon before project commencement. We provide detailed quotes with no hidden fees."
      }
    ]
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('General');
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleQuestion = (questionIndex: number) => {
    setOpenQuestions(prev => 
      prev.includes(questionIndex) 
        ? prev.filter(index => index !== questionIndex)
        : [...prev, questionIndex]
    );
  };

  const filteredQuestions = faqCategories
    .find(category => category.name === activeCategory)
    ?.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <Layout 
      title="FAQ - Zion Tech Group"
      description="Find answers to frequently asked questions about our AI services, IT solutions, and technology consulting. Get the information you need to make informed decisions."
      keywords="FAQ, frequently asked questions, AI services, IT consulting, technology solutions, support"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
                Find answers to common questions about our services, pricing, and processes. 
                Can't find what you're looking for? Contact us directly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {faqCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      activeCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {filteredQuestions.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {openQuestions.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openQuestions.includes(index) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-600">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {filteredQuestions.length === 0 && (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600">Try searching with different keywords or browse our categories.</p>
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
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our team is here to help. Contact us for personalized assistance with your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us
                </a>
                <a
                  href="mailto:info@ziontechgroup.com"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}