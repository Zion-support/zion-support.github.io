import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const faqCategories = [
  {
    id: 'general',
    title: 'General Questions',
    icon: HelpCircle,
    color: 'blue'
  },
  {
    id: 'services',
    title: 'Services & Solutions',
    icon: HelpCircle,
    color: 'green'
  },
  {
    id: 'technical',
    title: 'Technical Support',
    icon: HelpCircle,
    color: 'purple'
  },
  {
    id: 'billing',
    title: 'Billing & Pricing',
    icon: HelpCircle,
    color: 'orange'
  }
];

const faqData = {
  general: [
    {
      question: "What is Zion Tech Group?",
      answer: "Zion Tech Group is a leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services. We help businesses of all sizes leverage cutting-edge technology to achieve their goals."
    },
    {
      question: "How long has Zion Tech Group been in business?",
      answer: "Zion Tech Group has been providing technology solutions for over 18 years, with a proven track record of delivering innovative solutions to clients across various industries."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, government, energy, and transportation. Our solutions are tailored to meet the specific needs of each industry."
    },
    {
      question: "Where is Zion Tech Group located?",
      answer: "Our headquarters is located at 364 E Main St STE 1008, Middletown, DE 19709. We also have remote teams and partners worldwide to serve our global client base."
    }
  ],
  services: [
    {
      question: "What AI services do you offer?",
      answer: "We offer comprehensive AI services including machine learning models, computer vision solutions, natural language processing, predictive analytics, intelligent chatbots, voice AI assistants, and custom AI development for specific business needs."
    },
    {
      question: "Do you provide cloud migration services?",
      answer: "Yes, we offer complete cloud migration services including assessment, planning, execution, and ongoing management. We work with all major cloud providers including AWS, Azure, and Google Cloud."
    },
    {
      question: "What cybersecurity services are available?",
      answer: "Our cybersecurity services include security assessments, penetration testing, zero-trust architecture implementation, threat detection and response, compliance consulting, and ongoing security monitoring and management."
    },
    {
      question: "Do you offer custom software development?",
      answer: "Absolutely! We provide custom software development services including web applications, mobile apps, enterprise software, API development, and system integration solutions tailored to your specific requirements."
    }
  ],
  technical: [
    {
      question: "What is your response time for technical support?",
      answer: "We provide 24/7 technical support with different response times based on severity: Critical issues (1 hour), High priority (4 hours), Medium priority (24 hours), and Low priority (72 hours)."
    },
    {
      question: "Do you provide training for your solutions?",
      answer: "Yes, we offer comprehensive training programs including user training, administrator training, and ongoing support. We also provide documentation, video tutorials, and hands-on workshops."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with a wide range of technologies including Python, JavaScript, React, Node.js, AWS, Azure, Google Cloud, Docker, Kubernetes, TensorFlow, PyTorch, and many more modern technologies."
    },
    {
      question: "Do you offer maintenance and updates?",
      answer: "Yes, we provide ongoing maintenance, updates, and support for all our solutions. This includes security patches, feature updates, performance optimizations, and technical support."
    }
  ],
  billing: [
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including project-based pricing, hourly rates, monthly retainers, and subscription-based services. Pricing depends on the scope and complexity of your project."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we provide free initial consultations to understand your needs and provide recommendations. This includes a detailed assessment and proposal at no cost to you."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards, bank transfers, checks, and corporate purchase orders. We also offer flexible payment terms for larger projects."
    },
    {
      question: "Do you offer discounts for long-term contracts?",
      answer: "Yes, we offer competitive discounts for annual contracts and long-term partnerships. Contact us to discuss the best pricing options for your specific needs."
    }
  ]
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFAQs = faqData[activeCategory as keyof typeof faqData].filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Head>
        <title>Frequently Asked Questions - Zion Tech Group</title>
        <meta name="description" content="Find answers to common questions about Zion Tech Group's services, solutions, and support. Get help with AI services, cloud solutions, and more." />
        <meta name="keywords" content="FAQ, frequently asked questions, help, support, Zion Tech Group, AI services, cloud solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/faq" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-blue-100 mb-8">
                Find answers to common questions about our services, solutions, and support.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeCategory === category.id
                      ? `bg-${category.color}-600 text-white`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
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
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs found</h3>
                    <p className="text-gray-600">Try adjusting your search terms or browse different categories.</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
              <p className="text-xl text-gray-600 mb-12">
                Can't find what you're looking for? Our team is here to help you get the answers you need.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">Get detailed answers via email</p>
                  <a 
                    href="mailto:support@ziontechgroup.com"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    support@ziontechgroup.com
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-4">Speak directly with our experts</p>
                  <a 
                    href="tel:+13024640950"
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    +1 302 464 0950
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Get instant help online</p>
                  <a 
                    href="/contact"
                    className="text-purple-600 hover:text-purple-800 font-medium"
                  >
                    Start Chat
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}