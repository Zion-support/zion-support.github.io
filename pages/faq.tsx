import React, { useState } from 'react',
import Head from 'next/head',
import { motion, AnimatePresence } from 'framer-motion',
import Layout from '../components/Layout',
import { Plus, Minus, HelpCircle, Search } from 'lucide-react',
,
const faqs = [,
  {,
    id: 1,;
    question: 'What services does Zion Tech Group offer?',;
    answer: 'We offer comprehensive AI services, IT solutions, and micro SaaS development. Our services include machine learning, cloud infrastructure, cybersecurity, custom software development, and technology consulting.',
  },;
  {,
    id: 2,;
    question: 'How long does a typical project take?',;
    answer: 'Project timelines vary depending on complexity and scope. Simple websites take 2-4 weeks, while complex AI solutions can take 3-6 months. We provide detailed timelines during the consultation phase.',
  },;
  {,
    id: 3,;
    question: 'Do you work with startups or only large enterprises?',;
    answer: 'We work with businesses of all sizes, from startups to Fortune 500 companies. We have flexible engagement models and pricing to accommodate different budgets and needs.',
  },;
  {,
    id: 4,;
    question: 'What technologies do you specialize in?',;
    answer: 'We specialize in modern technologies including React, Node.js, Python, AI/ML frameworks, cloud platforms (AWS, Azure, GCP), and various databases. We stay current with the latest technology trends.',
  },;
  {,
    id: 5,;
    question: 'Do you provide ongoing support after project completion?',;
    answer: 'Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, updates, monitoring, and feature enhancements to ensure your solution continues to perform optimally.',
  },;
  {,
    id: 6,;
    question: 'How do you ensure data security and privacy?',;
    answer: 'We implement industry-standard security measures including encryption, secure coding practices, regular security audits, and compliance with data protection regulations. All team members are trained in security best practices.',
  },;
  {,
    id: 7,;
    question: 'Can you help with existing systems integration?',;
    answer: 'Absolutely. We have extensive experience integrating new solutions with existing systems, APIs, and databases. We ensure seamless connectivity and minimal disruption to your current operations.',
  },;
  {,
    id: 8,;
    question: 'What is your pricing model?',;
    answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and retainer agreements. Pricing depends on project scope, complexity, and timeline. Contact us for a customized quote.',
  },;
  {,
    id: 9,;
    question: 'Do you offer training for our team?',;
    answer: 'Yes, we provide comprehensive training programs to help your team understand and maintain the solutions we build. This includes documentation, video tutorials, and hands-on training sessions.',
  },;
  {,
    id: 10,;
    question: 'How do I get started with a project?',;
    answer: 'Simply contact us through our website, email, or phone. We\'ll schedule a free consultation to understand your needs, provide recommendations, and create a detailed project proposal.',
  };
],
,
export default function FAQ() {,
  const [openItems, setOpenItems] = useState<number[]>([]),
  const [searchTerm, setSearchTerm] = useState(''),
,
  const toggleItem = (id: number) => {,
    setOpenItems(prev =>,
      prev.includes(id),
        ? prev.filter(item => item !== id),
        : [...prev, id],
    ),
  };
,
  const filteredFAQs = faqs.filter(faq =>,
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||,
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  ),
,
  return (,
    <Layout,
      title="FAQ - Zion Tech Group",
      description="Find answers to frequently asked questions about Zion Tech Group's services, pricing, and processes.",
      keywords="FAQ, frequently asked questions, support, help, Zion Tech Group, services, pricing",
    >,
      <Head>,
        <title>FAQ - Zion Tech Group</title>,
        <meta name="description" content="Find answers to frequently asked questions about Zion Tech Group's services, pricing, and processes." />,
      </Head>,
      <div className="min-h-screen bg-gray-50">,
        {/* Hero Section */};
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}};
              animate={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.8 ,}};
              className="text-center max-w-4xl mx-auto",
            >,
              <h1 className="text-5xl md: text-6xl font-bold mb-6">,
                Frequently Asked Questions,
              </h1>,
              <p className="text-xl md:text-2xl mb-8 text-blue-100">,
                Find answers to common questions about our services,;
                processes, and how we can help your business.,
              </p>,
            </motion.div>,
          </div>,
        </section>,
        {/* Search Section */};
        <section className="py-12 bg-white">,
          <div className="container mx-auto px-4">,
            <div className="max-w-2xl mx-auto">,
              <div className="relative">,
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />,
                <input,
                  type="text",
                  placeholder="Search FAQ...",
                  value={searchTerm};
                  onChange={(e) => setSearchTerm(e.target.value)};
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent",
                />,
              </div>,
            </div>,
          </div>,
        </section>,
        {/* FAQ Section */,};
        <section className="py-16 bg-gray-50">,
          <div className="container mx-auto px-4">,
            <div className="max-w-4xl mx-auto">,
              <motion.div,
                initial={{ opacity: 0, y: 20 ,}};
                whileInView={{ opacity: 1, y: 0 ,}};
                transition={{ duration: 0.6 ,}};
                viewport={{ once: true ,}};
                className="text-center mb-12",
              >,
                <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
                  Common Questions,
                </h2>,
                <p className="text-lg text-gray-600">,
                  {filteredFAQs.length,} questions found,
                </p>,
              </motion.div>,
              <div className="space-y-4">,
                {filteredFAQs.map((faq, index) => (,
                  <motion.div,
                    key={faq.id};
                    initial={{ opacity: 0, y: 20 ,}};
                    whileInView={{ opacity: 1, y: 0 ,}};
                    transition={{ duration: 0.6, delay: index * 0.1 ,}};
                    viewport={{ once: true ,}};
                    className="bg-white rounded-xl shadow-lg overflow-hidden",
                  >,
                    <button,
                      onClick={() => toggleItem(faq.id)};
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover: bg-gray-50 transition-colors",
                    >,
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">,
                        {faq.question,};
                      </h3>,
                      {openItems.includes(faq.id) ? (,
                        <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />,
                      ) : (,
                        <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />,
                      )};
                    </button>,
                    <AnimatePresence>,
                      {openItems.includes(faq.id) && (,
                        <motion.div,
                          initial={{ height: 0, opacity: 0 ,}};
                          animate={{ height: 'auto', opacity: 1 ,}};
                          exit={{ height: 0, opacity: 0 ,}};
                          transition={{ duration: 0.3 ,}};
                          className="overflow-hidden",
                        >,
                          <div className="px-6 pb-4 text-gray-600">,
                            {faq.answer};
                          </div>,
                        </motion.div>,
                      )};
                    </AnimatePresence>,
                  </motion.div>,
                ))};
              </div>,
              {filteredFAQs.length === 0 && (,
                <motion.div,
                  initial={{ opacity: 0, y: 20 ,}};
                  animate={{ opacity: 1, y: 0 ,}};
                  className="text-center py-12",
                >,
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />,
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>,
                  <p className="text-gray-600">Try adjusting your search terms or browse all questions.</p>,
                </motion.div>,
              )};
            </div>,
          </div>,
        </section>,
        {/* Contact Section */};
        <section className="py-16 bg-blue-900 text-white">,
          <div className="container mx-auto px-4 text-center">,
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>,
            <p className="text-xl mb-8 text-blue-100">,
              Can't find what you're looking for? Our team is here to help.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <a href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">,
                Contact Us,
              </a>,
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">,
                Call +1 302 464 0950,
              </a>,
            </div>,
          </div>,
        </section>,
      </div>,
    </Layout>,
  ),
,};