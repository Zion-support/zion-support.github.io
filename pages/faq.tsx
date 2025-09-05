import React, { useState } from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Zap
} from 'lucide-react';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'services', name: 'Services' },
    { id: 'billing', name: 'Billing' },
    { id: 'technical', name: 'Technical' },
    { id: 'support', name: 'Support' }
  ];

  const faqs = [
    {
      id: 1,
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer a comprehensive range of technology services including AI and machine learning solutions, cloud infrastructure, cybersecurity, custom software development, database solutions, and digital transformation consulting. Our services are designed to help businesses of all sizes leverage technology for growth and efficiency.',
      category: 'general',
      tags: ['services', 'overview', 'technology']
    },
    {
      id: 2,
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply contact us through our contact form, call us directly, or schedule a consultation. We\'ll discuss your needs, assess your current technology stack, and recommend the best solutions for your business. Our team will guide you through the entire process from initial consultation to implementation.',
      category: 'general',
      tags: ['getting-started', 'consultation', 'process']
    },
    {
      id: 3,
      question: 'Do you offer custom development services?',
      answer: 'Yes! We specialize in custom software development tailored to your specific business needs. Our team can build web applications, mobile apps, APIs, microservices, and more. We work with modern technologies and follow best practices to ensure scalable, maintainable, and secure solutions.',
      category: 'services',
      tags: ['custom-development', 'software', 'applications']
    },
    {
      id: 4,
      question: 'What is your response time for support requests?',
      answer: 'We aim to respond to all support requests within 24 hours during business days. For critical issues, we provide 24/7 emergency support for our enterprise clients. Our support team is available via email, phone, and live chat to help you resolve any issues quickly.',
      category: 'support',
      tags: ['support', 'response-time', 'emergency']
    },
    {
      id: 5,
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security measures including end-to-end encryption, secure data centers, regular security audits, and compliance with industry standards like SOC 2 and ISO 27001. We also follow OWASP security guidelines and conduct regular penetration testing to ensure the highest level of security.',
      category: 'technical',
      tags: ['security', 'encryption', 'compliance']
    },
    {
      id: 6,
      question: 'Can I integrate your services with my existing systems?',
      answer: 'Absolutely! We provide comprehensive integration services and APIs that allow you to seamlessly connect our solutions with your existing business systems and workflows. Our team has experience with a wide range of technologies and can help you integrate with virtually any system.',
      category: 'technical',
      tags: ['integration', 'APIs', 'existing-systems']
    },
    {
      id: 7,
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models to suit different business needs. Our pricing is based on project scope, complexity, and ongoing support requirements. We provide transparent pricing with no hidden fees and offer both fixed-price and time-and-materials options. Contact us for a detailed quote tailored to your specific needs.',
      category: 'billing',
      tags: ['pricing', 'cost', 'billing']
    },
    {
      id: 8,
      question: 'Do you provide training for your solutions?',
      answer: 'Yes! We provide comprehensive training for all our solutions to ensure your team can effectively use and maintain them. Our training includes documentation, video tutorials, hands-on workshops, and ongoing support. We also offer customized training programs based on your specific requirements.',
      category: 'support',
      tags: ['training', 'documentation', 'workshops']
    },
    {
      id: 9,
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of modern technologies including React, Node.js, Python, Java, .NET, AWS, Azure, Google Cloud, Docker, Kubernetes, and more. Our team stays up-to-date with the latest technologies and best practices to provide you with cutting-edge solutions.',
      category: 'technical',
      tags: ['technologies', 'programming', 'cloud']
    },
    {
      id: 10,
      question: 'How do you ensure project quality?',
      answer: 'We follow rigorous quality assurance processes including code reviews, automated testing, manual testing, and continuous integration. Our team uses industry-standard tools and methodologies to ensure high-quality deliverables. We also provide regular project updates and involve you in the review process.',
      category: 'services',
      tags: ['quality', 'testing', 'process']
    },
    {
      id: 11,
      question: 'Do you offer maintenance and support after project completion?',
      answer: 'Yes! We provide ongoing maintenance and support services to ensure your solutions continue to perform optimally. Our support includes bug fixes, updates, security patches, performance monitoring, and technical assistance. We offer various support packages to meet your specific needs.',
      category: 'support',
      tags: ['maintenance', 'support', 'updates']
    },
    {
      id: 12,
      question: 'Can you help with digital transformation?',
      answer: 'Absolutely! Digital transformation is one of our core services. We help businesses modernize their processes, adopt new technologies, and create digital-first strategies. Our approach includes assessment, strategy development, implementation, and change management to ensure successful transformation.',
      category: 'services',
      tags: ['digital-transformation', 'modernization', 'strategy']
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const popularQuestions = faqs.filter(faq => 
    faq.tags.includes('getting-started') || 
    faq.tags.includes('services') || 
    faq.tags.includes('pricing')
  );

  return (
    <MainLayout
      title="Frequently Asked Questions - Zion Tech Group"
      description="Find answers to common questions about our AI services, IT solutions, pricing, and support. Get the information you need to make informed decisions."
      keywords="FAQ, frequently asked questions, AI services, IT support, pricing, help"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <HelpCircle className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Find answers to common questions about our services, pricing, and support. Can't find what you're looking for? Contact us directly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {categories.map((category, categoryIndex) => {
                const categoryFaqs = faqs.filter(faq => faq.category === category.id);
                return (
                  <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                    className="mb-12"
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                      {category.name}
                    </h2>
                    
                    <div className="space-y-4">
                      {categoryFaqs.map((faq, questionIndex) => {
                      const key = `${categoryIndex}-${questionIndex}`;
                      const isOpen = expandedItems.has(key);
                      
                      return (
                        <div
                          key={questionIndex}
                          className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(categoryIndex, questionIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-lg font-semibold text-gray-900">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-4"
                            >
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help. Contact us directly for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Call: +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}