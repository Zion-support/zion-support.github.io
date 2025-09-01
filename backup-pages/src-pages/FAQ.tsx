import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Search,
  Zap,
  Shield,
  Cloud,
  Brain,
  MessageCircle,
  Phone,
  Mail,
  Globe,
} from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: React.ComponentType<any>;
}

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqData: FAQItem[] = [
    {
      id: 'ai-services',
      question: 'What AI services does Zion Tech Group offer?',
      answer:
        'We offer a comprehensive suite of AI services including machine learning model development, natural language processing, computer vision, predictive analytics, and AI-powered automation solutions. Our team specializes in custom AI implementations tailored to your specific business needs.',
      category: 'AI & Machine Learning',
      icon: Brain,
    },
    {
      id: 'security-approach',
      question: 'How do you ensure cybersecurity in your solutions?',
      answer:
        'Security is at the core of everything we do. We implement zero-trust architecture, end-to-end encryption, regular security audits, and comply with industry standards like SOC 2, ISO 27001, and GDPR. Our security team continuously monitors for threats and updates our protocols.',
      category: 'Cybersecurity',
      icon: Shield,
    },
    {
      id: 'cloud-migration',
      question: 'Can you help with cloud migration?',
      answer:
        'Absolutely! We provide comprehensive cloud migration services including assessment, strategy development, implementation, and ongoing optimization. We work with all major cloud providers (AWS, Azure, GCP) and ensure minimal downtime during the migration process.',
      category: 'Cloud Services',
      icon: Cloud,
    },
    {
      id: 'project-timeline',
      question: 'What is the typical timeline for a project?',
      answer:
        'Project timelines vary based on complexity and scope. Simple implementations may take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed project timelines during the initial consultation and maintain transparent communication throughout.',
      category: 'General',
      icon: HelpCircle,
    },
    {
      id: 'pricing-model',
      question: 'How does your pricing work?',
      answer:
        'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project complexity, timeline, and required resources. We provide detailed quotes after understanding your specific requirements.',
      category: 'Pricing',
      icon: Zap,
    },
    {
      id: 'support-availability',
      question: 'What kind of support do you provide?',
      answer:
        'We offer 24/7 technical support for enterprise clients, business hours support for standard plans, and comprehensive documentation. Our support includes bug fixes, performance monitoring, security updates, and consultation for optimization.',
      category: 'Support',
      icon: MessageCircle,
    },
    {
      id: 'data-privacy',
      question: 'How do you handle data privacy and compliance?',
      answer:
        'We are fully GDPR compliant and follow strict data privacy protocols. All data is encrypted in transit and at rest, access is controlled through role-based permissions, and we maintain detailed audit logs. We sign comprehensive NDAs and data processing agreements.',
      category: 'Security & Privacy',
      icon: Shield,
    },
    {
      id: 'quantum-computing',
      question: 'Do you work with quantum computing technologies?',
      answer:
        'Yes, we have a dedicated quantum computing research division. We develop quantum algorithms for optimization problems, financial modeling, and cryptography. While quantum computers are still emerging, we help prepare businesses for the quantum advantage.',
      category: 'Advanced Technologies',
      icon: Brain,
    },
    {
      id: 'scalability',
      question: 'How do you ensure solutions are scalable?',
      answer:
        'All our solutions are designed with scalability in mind. We use microservices architecture, containerization, auto-scaling cloud infrastructure, and efficient database design. We conduct performance testing and provide scaling strategies for future growth.',
      category: 'Technical',
      icon: Cloud,
    },
    {
      id: 'integration',
      question: 'Can you integrate with our existing systems?',
      answer:
        'Yes, we specialize in seamless integrations. Our team has experience with various enterprise systems, APIs, databases, and legacy applications. We conduct thorough compatibility assessments and develop custom integration solutions as needed.',
      category: 'Integration',
      icon: Zap,
    },
  ];

  const categories = [
    'All',
    ...Array.from(new Set(faqData.map(item => item.category))),
  ];

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Frequently Asked
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {' '}
                Questions
              </span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Find answers to common questions about our services, processes, and
            technologies
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 border-cyan-500 text-white'
                      : 'border-white/20 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left hover:bg-white/5 transition-colors duration-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <item.icon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white">
                    {item.question}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full">
                    {item.category}
                  </span>
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-16">
                      <p className="text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-16">
            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              No questions found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-300 mb-6">
            Our expert team is here to help. Get in touch for personalized
            assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Start Live Chat
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
