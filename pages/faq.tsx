<<<<<<< HEAD
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion, AnimatePresence } from 'framer-motion';
=======
import React from 'react';
import { motion } from 'framer-motion';
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
<<<<<<< HEAD
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
=======
  Search,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';
import Layout from '../components/Layout';

const faqCategories = [
  {
    name: 'General',
    icon: HelpCircle,
    questions: [
      {
        question: 'What is Zion Tech Group?',
        answer: 'Zion Tech Group is a leading technology solutions provider specializing in AI, cloud services, cybersecurity, and digital transformation. We help businesses leverage cutting-edge technology to achieve their goals and drive growth.'
      },
      {
        question: 'What services do you offer?',
        answer: 'We offer a comprehensive range of services including AI solutions, IT services, micro SaaS development, cloud migration, cybersecurity, data analytics, and digital transformation consulting. Our team provides end-to-end technology solutions tailored to your business needs.'
      },
      {
        question: 'Do you work with small businesses?',
        answer: 'Yes, we work with businesses of all sizes, from startups to large enterprises. We offer scalable solutions that can grow with your business and provide flexible engagement models to fit different budgets and requirements.'
      },
      {
        question: 'How do I get started?',
        answer: 'Getting started is easy! Simply contact us through our website, schedule a free consultation, or call us directly. We\'ll discuss your needs, provide recommendations, and create a customized plan for your project.'
      }
    ]
  },
  {
    name: 'AI Services',
    icon: HelpCircle,
    questions: [
      {
        question: 'What AI services do you provide?',
        answer: 'We offer comprehensive AI services including machine learning model development, natural language processing, computer vision, predictive analytics, AI-powered chatbots, and custom AI solution development. Our team specializes in implementing AI that delivers real business value.'
      },
      {
        question: 'How long does AI implementation take?',
        answer: 'AI implementation timelines vary depending on the complexity of the project. Simple AI solutions can be implemented in 2-4 weeks, while complex enterprise AI systems may take 3-6 months. We provide detailed timelines during the planning phase.'
      },
      {
        question: 'Do I need technical expertise to use your AI solutions?',
        answer: 'No technical expertise required! We design user-friendly AI solutions with intuitive interfaces. We also provide comprehensive training and ongoing support to ensure your team can effectively use and maintain the AI systems.'
      },
      {
        question: 'Can you integrate AI with our existing systems?',
        answer: 'Absolutely! We specialize in integrating AI solutions with existing business systems, databases, and workflows. Our team ensures seamless integration while maintaining data security and system performance.'
      }
    ]
  },
  {
    name: 'Cloud Services',
    icon: HelpCircle,
    questions: [
      {
        question: 'What cloud platforms do you support?',
        answer: 'We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud environments. We help you choose the best platform for your specific needs and ensure optimal performance and cost efficiency.'
      },
      {
        question: 'How do you ensure cloud security?',
        answer: 'We implement comprehensive cloud security measures including encryption, access controls, network security, compliance monitoring, and regular security audits. Our team follows industry best practices and compliance standards to protect your data.'
      },
      {
        question: 'Can you help with cloud migration?',
        answer: 'Yes, we provide end-to-end cloud migration services including assessment, planning, execution, and optimization. We ensure zero-downtime migration and provide ongoing support to maximize the benefits of your cloud infrastructure.'
      },
      {
        question: 'What is your cloud support model?',
        answer: 'We offer 24/7 cloud support with different tiers based on your needs. Our support includes monitoring, maintenance, troubleshooting, optimization, and proactive issue resolution to ensure maximum uptime and performance.'
      }
    ]
  },
  {
    name: 'Pricing & Billing',
    icon: HelpCircle,
    questions: [
      {
        question: 'How do you price your services?',
        answer: 'Our pricing is based on project scope, complexity, timeline, and specific requirements. We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Contact us for a customized quote based on your needs.'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment plans for larger projects. We can structure payments based on project milestones or provide monthly payment options. We work with you to find a payment structure that fits your budget.'
      },
      {
        question: 'Are there any hidden costs?',
        answer: 'No hidden costs! We provide transparent pricing with detailed breakdowns of all costs upfront. Any additional work or changes to the project scope will be discussed and approved before implementation.'
      },
      {
        question: 'Do you offer discounts for long-term contracts?',
        answer: 'Yes, we offer competitive discounts for long-term contracts and retainer agreements. Contact us to discuss our long-term partnership options and pricing benefits.'
      }
    ]
  },
  {
    name: 'Support & Maintenance',
    icon: HelpCircle,
    questions: [
      {
        question: 'What support do you provide after project completion?',
        answer: 'We provide comprehensive post-project support including bug fixes, updates, maintenance, monitoring, and optimization. Our support packages are tailored to your needs and can include 24/7 monitoring and response.'
      },
      {
        question: 'How quickly do you respond to support requests?',
        answer: 'Response times vary by support tier. For critical issues, we respond within 1 hour. For standard support requests, we respond within 4-8 hours during business hours. We also offer 24/7 support for critical systems.'
      },
      {
        question: 'Do you provide training for our team?',
        answer: 'Yes, we provide comprehensive training for your team on all systems and solutions we implement. Training includes documentation, hands-on sessions, and ongoing support to ensure your team can effectively use and maintain the systems.'
      },
      {
        question: 'Can you help with system updates and upgrades?',
        answer: 'Absolutely! We provide regular system updates, security patches, and feature upgrades. We also help plan and execute major system upgrades with minimal disruption to your business operations.'
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = React.useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredCategories = selectedCategory === 'All' 
    ? faqCategories 
    : faqCategories.filter(cat => cat.name === selectedCategory);

  const filteredQuestions = filteredCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <Layout 
      title="FAQ - Zion Tech Group"
      description="Find answers to frequently asked questions about our AI services, cloud solutions, pricing, and support. Get the information you need to make informed decisions."
      keywords="FAQ, frequently asked questions, AI services, cloud computing, pricing, support, help"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Find answers to common questions about our services, pricing, and support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === 'All'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  All Categories
                </button>
                {faqCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {filteredQuestions.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <HelpCircle className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredQuestions.map((category, categoryIndex) => (
                    <div key={category.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center">
                          <category.icon className="w-6 h-6 mr-3 text-blue-600" />
                          {category.name}
                        </h2>
                      </div>
                      
                      <div className="divide-y divide-gray-200">
                        {category.questions.map((item, questionIndex) => {
                          const key = `${categoryIndex}-${questionIndex}`;
                          const isOpen = openItems[key];
                          
                          return (
                            <div key={questionIndex} className="p-6">
                              <button
                                onClick={() => toggleItem(categoryIndex, questionIndex)}
                                className="w-full text-left flex items-center justify-between group"
                              >
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
                                  {item.question}
                                </h3>
                                {isOpen ? (
                                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                )}
                              </button>
                              
                              <motion.div
                                initial={false}
                                animate={{ height: isOpen ? 'auto' : 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 text-gray-600 leading-relaxed">
                                  {item.answer}
                                </div>
                              </motion.div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
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
=======
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our expert team is here to help. Contact us for personalized assistance with your specific needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                  <p className="text-blue-100 mb-4">Get instant answers to your questions</p>
                  <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                    Start Chat
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Phone Support</h3>
                  <p className="text-blue-100 mb-4">Speak directly with our experts</p>
                  <a 
                    href="tel:+13024640950"
                    className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
                  >
                    Call Now
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Support</h3>
                  <p className="text-blue-100 mb-4">Send us your detailed questions</p>
                  <a 
                    href="mailto:support@ziontechgroup.com"
                    className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
                  >
                    Send Email
                  </a>
                </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}