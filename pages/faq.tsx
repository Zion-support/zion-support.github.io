import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Search, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Shield,
  Zap,
  Globe,
  Settings,
  MessageSquare,
  Phone,
  Mail
} from 'lucide-react';

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
        answer: 'We offer a comprehensive range of services including AI solutions, IT services, micro SaaS applications, cloud migration, cybersecurity, data analytics, and custom software development. Our services are designed to meet the unique needs of businesses across various industries.'
      },
      {
        question: 'How long has Zion Tech Group been in business?',
        answer: 'Zion Tech Group has been providing technology solutions for over 5 years. We have successfully completed hundreds of projects and have built a strong reputation for delivering high-quality, innovative solutions.'
      },
      {
        question: 'Where is Zion Tech Group located?',
        answer: 'Our headquarters is located at 364 E Main St STE 1008, Middletown, DE 19709. We also have remote teams and serve clients globally.'
      }
    ]
  },
  {
    name: 'Services',
    icon: Settings,
    questions: [
      {
        question: 'What AI services do you provide?',
        answer: 'Our AI services include machine learning model development, natural language processing, computer vision, predictive analytics, intelligent automation, chatbot development, and AI consulting. We help businesses integrate AI into their operations to improve efficiency and decision-making.'
      },
      {
        question: 'Do you offer cloud migration services?',
        answer: 'Yes, we provide comprehensive cloud migration services including assessment, planning, migration execution, and post-migration support. We work with all major cloud providers including AWS, Azure, and Google Cloud Platform.'
      },
      {
        question: 'What is micro SaaS?',
        answer: 'Micro SaaS refers to small, focused software-as-a-service applications that solve specific business problems. We develop custom micro SaaS solutions that are cost-effective, scalable, and tailored to your specific needs.'
      },
      {
        question: 'Do you provide cybersecurity services?',
        answer: 'Yes, we offer comprehensive cybersecurity services including security assessments, penetration testing, compliance audits, security monitoring, incident response, and security training for your team.'
      }
    ]
  },
  {
    name: 'Pricing',
    icon: Star,
    questions: [
      {
        question: 'How do you price your services?',
        answer: 'Our pricing varies based on the scope and complexity of the project. We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Contact us for a customized quote based on your specific requirements.'
      },
      {
        question: 'Do you offer free consultations?',
        answer: 'Yes, we provide free initial consultations to understand your needs and provide recommendations. This helps us create a tailored proposal that addresses your specific challenges and goals.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods including bank transfers, credit cards, and digital payments. Payment terms are typically net 30 days for ongoing projects, with milestone-based payments for larger engagements.'
      },
      {
        question: 'Do you offer discounts for long-term contracts?',
        answer: 'Yes, we offer competitive discounts for long-term contracts and retainer agreements. The specific discount depends on the duration and scope of the engagement.'
      }
    ]
  },
  {
    name: 'Support',
    icon: Users,
    questions: [
      {
        question: 'What support do you provide after project completion?',
        answer: 'We provide comprehensive post-project support including maintenance, updates, bug fixes, and technical support. Our support packages are tailored to your needs and can include 24/7 monitoring, regular updates, and priority support.'
      },
      {
        question: 'How quickly do you respond to support requests?',
        answer: 'Our response times vary based on the support level: Standard support (24-48 hours), Priority support (4-8 hours), and Critical support (1-2 hours). We also offer 24/7 support for critical systems.'
      },
      {
        question: 'Do you provide training for your solutions?',
        answer: 'Yes, we provide comprehensive training for all our solutions including user training, administrator training, and technical documentation. We also offer ongoing training as your team grows and your needs evolve.'
      },
      {
        question: 'Can I get help with third-party integrations?',
        answer: 'Yes, we can help with integrating our solutions with third-party systems and platforms. We have experience with a wide range of APIs and integration methods.'
      }
    ]
  },
  {
    name: 'Technical',
    icon: Zap,
    questions: [
      {
        question: 'What technologies do you work with?',
        answer: 'We work with a wide range of technologies including Python, JavaScript, React, Node.js, AWS, Azure, Google Cloud, Docker, Kubernetes, machine learning frameworks, databases, and more. We stay current with the latest technologies and best practices.'
      },
      {
        question: 'Do you follow security best practices?',
        answer: 'Yes, security is a top priority. We follow industry best practices including secure coding standards, regular security audits, encryption, access controls, and compliance with relevant security standards.'
      },
      {
        question: 'How do you ensure code quality?',
        answer: 'We maintain high code quality through code reviews, automated testing, continuous integration, documentation, and adherence to coding standards. We also use static analysis tools and follow agile development practices.'
      },
      {
        question: 'Do you provide source code?',
        answer: 'Yes, we provide complete source code for all custom developments. You own the intellectual property rights to the code we develop for your project.'
      }
    ]
  }
];

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our team',
    contact: '+1 302 464 0950',
    action: 'Call Now'
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us a detailed message',
    contact: 'kleber@ziontechgroup.com',
    action: 'Send Email'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with us in real-time',
    contact: 'Available 24/7',
    action: 'Start Chat'
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('General');
  const [searchTerm, setSearchTerm] = useState('');
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({});

  const toggleQuestion = (categoryName: string, questionIndex: number) => {
    const key = `${categoryName}-${questionIndex}`;
    setOpenQuestions(prev => ({
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

  const currentCategory = filteredCategories.find(cat => cat.name === activeCategory) || filteredCategories[0];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Find answers to common questions about our services, pricing, and support. 
                Can't find what you're looking for? Contact us directly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
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
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Categories Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-1"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {filteredCategories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <button
                          key={category.name}
                          onClick={() => setActiveCategory(category.name)}
                          className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                            activeCategory === category.name
                              ? 'bg-blue-100 text-blue-700'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <IconComponent className="w-5 h-5 mr-3" />
                          <span className="font-medium">{category.name}</span>
                          <span className="ml-auto text-sm text-gray-500">
                            {category.questions.length}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Questions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-3"
              >
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {currentCategory?.name} Questions
                  </h2>
                  
                  <div className="space-y-4">
                    {currentCategory?.questions.map((faq, index) => {
                      const isOpen = openQuestions[`${currentCategory.name}-${index}`];
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="border border-gray-200 rounded-lg"
                        >
                          <button
                            onClick={() => toggleQuestion(currentCategory.name, index)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            )}
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
                                <div className="px-4 pb-4 text-gray-700">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  {currentCategory?.questions.length === 0 && (
                    <div className="text-center py-8">
                      <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No questions found for this category.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help. 
                Contact us directly and we'll get back to you as soon as possible.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-lg p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-3">{method.description}</p>
                    <p className="text-blue-600 font-semibold mb-4">{method.contact}</p>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                      {method.action}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}