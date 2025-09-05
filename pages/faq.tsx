<<<<<<< HEAD
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
=======
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "We offer comprehensive AI services, IT solutions, micro SaaS development, cloud migration, cybersecurity, and custom software development. Our services are designed to help businesses leverage cutting-edge technology for growth and efficiency."
      },
      {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on complexity and scope. Simple websites can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the consultation phase."
      },
      {
        question: "Do you work with small businesses?",
        answer: "Absolutely! We work with businesses of all sizes, from startups to large enterprises. We tailor our solutions to fit your budget and requirements."
      },
      {
        question: "What makes Zion Tech Group different?",
        answer: "We combine deep technical expertise with business acumen, ensuring our solutions not only work technically but also drive real business value. Our team has experience across multiple industries and technologies."
      }
    ]
  },
  {
    category: "AI Services",
    questions: [
      {
        question: "What AI technologies do you work with?",
        answer: "We work with machine learning, natural language processing, computer vision, predictive analytics, and custom AI solutions. We stay current with the latest AI frameworks and technologies."
      },
      {
        question: "How do you ensure AI model accuracy?",
        answer: "We use rigorous testing methodologies, cross-validation, and continuous monitoring. Our AI models undergo extensive training and validation before deployment."
      },
      {
        question: "Can you integrate AI into existing systems?",
        answer: "Yes, we specialize in AI integration with existing systems. We ensure seamless integration while maintaining system stability and performance."
      }
    ]
  },
  {
    category: "IT Services",
    questions: [
      {
        question: "Do you provide 24/7 support?",
        answer: "Yes, we offer 24/7 monitoring and support for critical systems. Our support packages include different levels of coverage based on your needs."
      },
      {
        question: "What cloud platforms do you work with?",
        answer: "We work with all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud solutions. We help you choose the best platform for your needs."
      },
      {
        question: "How do you handle cybersecurity?",
        answer: "We implement comprehensive security measures including encryption, access controls, monitoring, and regular security audits. We follow industry best practices and compliance standards."
      }
    ]
  },
  {
    category: "Pricing & Contracts",
    questions: [
      {
        question: "How do you price your services?",
        answer: "Our pricing is based on project scope, complexity, and timeline. We offer fixed-price projects, hourly rates, and retainer agreements. We provide detailed quotes with no hidden costs."
      },
      {
        question: "Do you offer maintenance contracts?",
        answer: "Yes, we offer various maintenance and support contracts to keep your systems running smoothly. These include updates, monitoring, and technical support."
      },
      {
        question: "What is your payment structure?",
        answer: "We typically require a deposit to start projects, with milestone-based payments. For ongoing services, we offer monthly or annual billing options."
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

  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68

const Page = () => {
  return (
<<<<<<< HEAD
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
=======
    <Layout title="FAQ - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Find answers to common questions about our services and solutions
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {filteredData.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    {category.category}
                  </h2>
                  
                  <div className="space-y-4">
                    {category.questions.map((item, index) => {
                      const globalIndex = faqData
                        .slice(0, categoryIndex)
                        .reduce((acc, cat) => acc + cat.questions.length, 0) + index;
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">
                              {item.question}
                            </h3>
                            {openItems.includes(globalIndex) ? (
                              <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            )}
                          </button>
                          
                          {openItems.includes(globalIndex) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-4"
                            >
                              <p className="text-gray-700 leading-relaxed">
                                {item.answer}
                              </p>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
              
              {filteredData.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No questions found matching your search.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our team is here to help you find the answers you need.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us
            </motion.button>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
  );
};

export default Page;
