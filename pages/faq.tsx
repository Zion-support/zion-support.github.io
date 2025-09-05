import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, MessageCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const faqCategories = [
  { name: 'General', count: 8 },
  { name: 'Services', count: 12 },
  { name: 'Pricing', count: 6 },
  { name: 'Technical', count: 10 },
  { name: 'Support', count: 5 }
];

const faqs = [
  {
    category: 'General',
    question: 'What is Zion Tech Group?',
    answer: 'Zion Tech Group is a leading technology company specializing in AI solutions, cloud services, and custom software development. We help businesses transform their operations through innovative technology solutions.'
  },
  {
    category: 'General',
    question: 'How long has Zion Tech Group been in business?',
    answer: 'Zion Tech Group has been serving clients for over 5 years, with a track record of successful projects across various industries including healthcare, finance, e-commerce, and manufacturing.'
  },
  {
    category: 'General',
    question: 'Where is Zion Tech Group located?',
    answer: 'Our headquarters is located at 364 E Main St STE 1008, Middletown, DE 19709. We also have remote team members across the United States and serve clients globally.'
  },
  {
    category: 'Services',
    question: 'What services does Zion Tech Group offer?',
    answer: 'We offer a comprehensive range of services including AI solutions, IT services, micro SaaS development, cloud migration, cybersecurity, custom software development, and technology consulting.'
  },
  {
    category: 'Services',
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we provide comprehensive ongoing support including maintenance, updates, monitoring, and 24/7 technical support to ensure your systems continue to perform optimally.'
  },
  {
    category: 'Services',
    question: 'Can you work with our existing systems?',
    answer: 'Absolutely! We specialize in integrating with existing systems and can work with your current technology stack. We ensure seamless integration and minimal disruption to your operations.'
  },
  {
    category: 'Pricing',
    question: 'How do you determine project pricing?',
    answer: 'Our pricing is based on project scope, complexity, timeline, and specific requirements. We provide detailed quotes after understanding your needs and can offer flexible pricing models including fixed-price, time-and-materials, or retainer-based arrangements.'
  },
  {
    category: 'Pricing',
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment plans to accommodate different budgets. We can structure payments based on project milestones or provide monthly payment options for ongoing services.'
  },
  {
    category: 'Pricing',
    question: 'Is there a free consultation?',
    answer: 'Yes, we offer free initial consultations to discuss your project requirements, provide recommendations, and answer any questions you may have about our services.'
  },
  {
    category: 'Technical',
    question: 'What technologies do you work with?',
    answer: 'We work with a wide range of modern technologies including React, Next.js, Node.js, Python, AWS, Azure, Google Cloud, Docker, Kubernetes, and various AI/ML frameworks like TensorFlow and PyTorch.'
  },
  {
    category: 'Technical',
    question: 'Do you follow security best practices?',
    answer: 'Yes, security is a top priority. We follow industry best practices, implement proper authentication, encryption, and compliance standards. We also conduct security audits and can help with SOC 2, HIPAA, and other compliance requirements.'
  },
  {
    category: 'Technical',
    question: 'How do you ensure code quality?',
    answer: 'We follow strict coding standards, conduct thorough code reviews, implement automated testing, and use continuous integration/continuous deployment (CI/CD) practices to ensure high-quality, maintainable code.'
  },
  {
    category: 'Support',
    question: 'What support options are available?',
    answer: 'We offer multiple support options including email support, phone support, live chat, and dedicated account managers. We also provide 24/7 emergency support for critical systems.'
  },
  {
    category: 'Support',
    question: 'How quickly do you respond to support requests?',
    answer: 'Our response times vary by priority level: Critical issues (1 hour), High priority (4 hours), Medium priority (24 hours), and Low priority (48 hours). We also offer SLA guarantees for enterprise clients.'
  },
  {
    category: 'Support',
    question: 'Do you provide training for our team?',
    answer: 'Yes, we provide comprehensive training for your team on the systems we build. This includes documentation, video tutorials, hands-on training sessions, and ongoing support to ensure your team can effectively use and maintain the solutions.'
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout
      title="FAQ - Zion Tech Group"
      description="Find answers to frequently asked questions about our services, pricing, technical capabilities, and support options."
      keywords="FAQ, frequently asked questions, help, support, services, pricing, technical questions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <HelpCircle className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Find answers to common questions about our services and solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
                    selectedCategory === 'All'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All ({faqs.length})
                </button>
                {faqCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-6 py-3 rounded-full font-medium transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mr-3">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`}
                      />
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
                          <div className="px-6 pb-6 pt-0">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Contact Support
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-colors"
                >
                  Send Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}