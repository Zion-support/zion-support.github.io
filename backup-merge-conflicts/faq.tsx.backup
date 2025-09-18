<<<<<<< HEAD

const faqs = [;
  {}
    category: "General","
    questions: [;
      {}
        question: "What services does Zion Tech Group offer?","
        answer: "We offer comprehensive AI solutions, IT services, cloud computing, cybersecurity, and micro SaaS solutions. Our services include machine learning, natural language processing, cloud infrastructure, and custom software development.""
      },
      {}
        question: "How can I get started with your services?","
        answer: "Getting started is easy! Simply contact us through our contact form, schedule a consultation, or call us directly. We'll assess your needs and provide a customized solution plan.""
      },
      {}
        question: "Do you offer 24/7 support?","
        answer: "Yes, we provide 24/7 support for all our clients. Our dedicated support team is always available to help with any technical issues or questions you may have.""
      }
    ];
  },
  {}
    category: "AI Services","
    questions: [;
      {}
        question: "What AI technologies do you specialize in?","
        answer: "We specialize in machine learning, natural language processing, computer vision, predictive analytics, and AI automation. Our team has extensive experience with various AI frameworks and platforms.""
      },
      {}
        question: "How long does it take to implement an AI solution?","
        answer: "Implementation time varies depending on the complexity of the project. Simple AI solutions can be deployed in 2-4 weeks, while more complex enterprise solutions may take 3-6 months.""
      },
      {}
        question: "Do you provide AI training for our team?","
        answer: "Yes, we offer comprehensive AI training programs for your team, including hands-on workshops, documentation, and ongoing support to ensure successful adoption.""
import MainLayout from '../components/layout/MainLayout';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { motion } from 'framer-motion';
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
=======
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Head from 'next/head';
import { Plus, Minus, HelpCircle, Search } from 'lucide-react';

const faqs = [
  {
    category: "General",
>>>>>>> main
    questions: [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "We offer comprehensive AI solutions, IT services, cloud computing, cybersecurity, and micro SaaS solutions. Our services include machine learning, natural language processing, cloud infrastructure, and custom software development."
      },
      {
        question: "How can I get started with your services?",
        answer: "Getting started is easy! Simply contact us through our contact form, schedule a consultation, or call us directly. We'll assess your needs and provide a customized solution plan."
      },
      {
        question: "Do you offer 24/7 support?",
        answer: "Yes, we provide 24/7 support for all our clients. Our dedicated support team is always available to help with any technical issues or questions you may have."
      }
    ]
  },
  {
    category: "AI Services",
    questions: [
      {
        question: "What AI technologies do you specialize in?",
        answer: "We specialize in machine learning, natural language processing, computer vision, predictive analytics, and custom AI solutions. Our team has expertise in various AI frameworks and technologies."
      },
      {
        question: "How long does it take to implement an AI solution?",
        answer: "Implementation time varies depending on the complexity of the project. Simple AI solutions can be deployed in 2-4 weeks, while complex enterprise solutions may take 3-6 months."
      },
      {
        question: "Do you provide AI training and consultation?",
        answer: "Yes, we offer comprehensive AI training programs and consultation services to help your team understand and implement AI technologies effectively."
      }
    ]
  },
  {
    category: "IT Services",
    questions: [
      {
        question: "What IT infrastructure services do you provide?",
        answer: "We provide cloud infrastructure setup, network configuration, cybersecurity solutions, database management, system administration, and DevOps services."
      },
      {
        question: "Do you work with specific cloud providers?",
        answer: "Yes, we work with all major cloud providers including AWS, Azure, Google Cloud, and can help you choose the best platform for your needs."
      },
      {
<<<<<<< HEAD
        question: "What cybersecurity measures do you implement?",
        answer: "We implement comprehensive cybersecurity measures including firewalls, intrusion detection systems, encryption, access controls, security monitoring, and compliance management. We also provide security audits, penetration testing, and ongoing security monitoring services."
      },
      {
        question: "Do you provide ongoing IT support?",
        answer: "Yes, we offer various levels of ongoing IT support including basic support, managed services, and dedicated IT teams. Our support services cover monitoring, maintenance, updates, troubleshooting, and proactive problem prevention."
      }
    ];
  },
=======
        question: "How do you ensure data security?",
        answer: "We implement comprehensive security measures including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA."
      }
    ]
  },
  {
    category: "Pricing",
    questions: [
      {
        question: "How do you price your services?",
        answer: "Our pricing is based on project complexity, scope, and duration. We offer flexible pricing models including fixed-price projects, hourly rates, and subscription-based services."
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes, we provide free initial consultations to understand your needs and provide recommendations. This helps us create accurate project estimates."
      },
      {
        question: "Are there any hidden costs?",
        answer: "No, we believe in transparent pricing. All costs are clearly outlined in our proposals, and we'll discuss any potential additional costs upfront."
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <>
      <Head>
        <title>FAQ - Zion Tech Group</title>
        <meta name="description" content="Find answers to frequently asked questions about Zion Tech Group's AI services, IT solutions, and technology consulting." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked <span className="text-blue-600">Questions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Find answers to common questions about our services, pricing, and how we can help transform your business.
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
>>>>>>> main
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
              </div>
            </div>
          </div>
        </section>
=======
        {/* FAQ Sections */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <HelpCircle className="w-6 h-6 mr-2 text-blue-600" />
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div
                        key={faqIndex}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900">{faq.question}</span>
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-blue-600" />
                          ) : (
                            <Plus className="w-5 h-5 text-blue-600" />
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
                              <div className="px-6 pb-4 text-gray-600">
                                {faq.answer}
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
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Contact our team and we'll be happy to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> main
  );
}