import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  Search,
  MessageCircle,
  Mail,
  Phone
} from 'lucide-react';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';

const faqCategories = [
  {
    title: 'General',
    icon: 'ℹ️',
    questions: [
      {
        question: 'What is Zion Tech Group?',
        answer: 'Zion Tech Group is a leading technology solutions provider specializing in AI services, IT services, and micro SaaS solutions. We help businesses transform their digital presence with cutting-edge technology.'
      },
      {
        question: 'How long has Zion Tech Group been in business?',
        answer: 'We have been providing technology solutions for over 5 years, helping hundreds of businesses achieve their digital transformation goals.'
      },
      {
        question: 'Where is Zion Tech Group located?',
        answer: 'We are headquartered in Delaware, United States, with a global team of remote professionals serving clients worldwide.'
      },
      {
        question: 'What industries do you serve?',
        answer: 'We serve a wide range of industries including healthcare, financial services, manufacturing, retail, education, and government sectors.'
      }
    ]
  },
  {
    title: 'Services',
    icon: '🔧',
    questions: [
      {
        question: 'What AI services do you offer?',
        answer: 'We offer comprehensive AI services including AI-powered email responders, predictive analytics platforms, intelligent chatbot systems, computer vision solutions, AI content generation, voice AI assistants, AI fraud detection, and AI drug discovery.'
      },
      {
        question: 'What IT services are available?',
        answer: 'Our IT services include cloud infrastructure management, cybersecurity solutions, network infrastructure, database management, DevOps & CI/CD, data center migration, IT asset management, and backup & disaster recovery.'
      },
      {
        question: 'What micro SaaS solutions do you provide?',
        answer: 'We offer various micro SaaS solutions including Cloud Cost Guard, LLM Evaluation Suite, Customer Feedback App, API Rate Limiting, Content Moderation AI, Workflow Automation, AI Lead Scoring, and Social Media Scheduler.'
      },
      {
        question: 'Do you offer custom development?',
        answer: 'Yes, we provide custom development services tailored to your specific business requirements. Our team can build bespoke solutions from scratch or customize existing platforms.'
      }
    ]
  },
  {
    title: 'Pricing',
    icon: '💰',
    questions: [
      {
        question: 'How do you price your services?',
        answer: 'Our pricing is based on project scope, complexity, and requirements. We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Contact us for a custom quote.'
      },
      {
        question: 'Do you offer free consultations?',
        answer: 'Yes, we provide free initial consultations to understand your needs and provide recommendations. This helps us create accurate project estimates and timelines.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods including bank transfers, credit cards, and digital payments. Payment terms are typically net 30 days for established clients.'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, for larger projects, we can arrange payment plans that align with project milestones. This helps manage cash flow while ensuring project delivery.'
      }
    ]
  },
  {
    title: 'Technical',
    icon: '⚙️',
    questions: [
      {
        question: 'What technologies do you use?',
        answer: 'We use modern technologies including React, Node.js, Python, Java, C#, Go, AWS, Azure, Google Cloud, Docker, Kubernetes, PostgreSQL, MongoDB, and various AI/ML frameworks.'
      },
      {
        question: 'Do you provide API documentation?',
        answer: 'Yes, we provide comprehensive API documentation including endpoints, authentication, code examples, and SDKs for developers.'
      },
      {
        question: 'What security measures do you implement?',
        answer: 'We implement enterprise-grade security including SOC 2 Type II compliance, ISO 27001, GDPR compliance, end-to-end encryption, and regular security audits.'
      },
      {
        question: 'Do you offer 24/7 support?',
        answer: 'Yes, we provide 24/7 support for our enterprise clients with dedicated support teams and SLA guarantees.'
      }
    ]
  },
  {
    title: 'Project Management',
    icon: '📋',
    questions: [
      {
        question: 'How do you manage projects?',
        answer: 'We use agile methodology with regular sprints, progress updates, and client demos. Each project has a dedicated project manager and development team.'
      },
      {
        question: 'What is your typical project timeline?',
        answer: 'Project timelines vary based on complexity. Simple projects can take 4-8 weeks, while complex enterprise solutions may take 6-12 months. We provide detailed timelines during consultation.'
      },
      {
        question: 'How do you handle project changes?',
        answer: 'We have a structured change management process. Changes are evaluated for impact on timeline and budget, and we work with clients to implement changes efficiently.'
      },
      {
        question: 'Do you provide project updates?',
        answer: 'Yes, we provide regular project updates through our project management platform, including progress reports, milestone achievements, and upcoming deliverables.'
      }
    ]
  }
];

const contactMethods = [
  {
    title: 'Email Support',
    description: 'Get help via email within 24 hours',
    icon: Mail,
    contact: 'kleber@ziontechgroup.com',
    action: 'Send Email'
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our support team',
    icon: Phone,
    contact: '+1 302 464 0950',
    action: 'Call Now'
  },
  {
    title: 'Live Chat',
    description: 'Chat with us in real-time',
    icon: MessageCircle,
    contact: 'Available 24/7',
    action: 'Start Chat'
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <MainLayout
      title="FAQ - Zion Tech Group"
      description="Frequently asked questions about our services, pricing, technical capabilities, and project management processes."
      keywords="FAQ, frequently asked questions, help, support, services, pricing, technical"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Find answers to common questions about our services, pricing, 
                and how we can help your business succeed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers organized by topic to quickly locate the information you need.
              </p>
            </motion.div>

            <div className="space-y-12">
              {filteredCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center mb-8">
                    <span className="text-3xl mr-4">{category.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => {
                      const key = `${categoryIndex}-${questionIndex}`;
                      const isOpen = openItems[key];
                      
                      return (
                        <div
                          key={questionIndex}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(categoryIndex, questionIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-semibold text-gray-900">
                              {item.question}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                  <p className="text-gray-700 leading-relaxed">
                                    {item.answer}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredCategories.length === 0 && searchTerm && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No results found
                </h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any FAQ items matching "{searchTerm}". Try a different search term.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-indigo-600 hover:text-indigo-700 font-semibold"
                >
                  Clear search
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {method.description}
                  </p>
                  <div className="text-indigo-600 font-semibold mb-6">
                    {method.contact}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                  >
                    {method.action}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
                Have more questions or ready to start your project? 
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact">
                  <span className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Contact Us
                  </span>
                </Link>
                <Link href="/services">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    View Services
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}