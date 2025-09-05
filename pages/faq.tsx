import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown,
  Search,
  MessageCircle,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  X
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const faqCategories = [
  { name: "All", count: 24 },
  { name: "General", count: 8 },
  { name: "Pricing", count: 5 },
  { name: "Technical", count: 6 },
  { name: "Support", count: 5 }
];

const faqItems = [
  {
    id: 1,
    question: "What services does Zion Tech Group offer?",
    answer: "Zion Tech Group offers comprehensive technology solutions including AI services, IT services, micro SaaS applications, custom development, and consulting. We specialize in helping businesses transform their operations through cutting-edge technology.",
    category: "General",
    tags: ["services", "offerings", "solutions"]
  },
  {
    id: 2,
    question: "How much do your services cost?",
    answer: "Our pricing varies based on the specific services and project requirements. We offer flexible pricing models including fixed-price projects, hourly rates, and subscription-based services. Contact us for a personalized quote based on your needs.",
    category: "Pricing",
    tags: ["pricing", "cost", "quotes"]
  },
  {
    id: 3,
    question: "Do you offer custom development services?",
    answer: "Yes, we specialize in custom development solutions tailored to your specific business requirements. Our team can build web applications, mobile apps, APIs, AI/ML solutions, and cloud infrastructure from scratch.",
    category: "Technical",
    tags: ["custom", "development", "applications"]
  },
  {
    id: 4,
    question: "What technologies do you work with?",
    answer: "We work with a wide range of modern technologies including React, Node.js, Python, TypeScript, AWS, Azure, GCP, Docker, Kubernetes, TensorFlow, PyTorch, and many more. Our team stays current with the latest technology trends.",
    category: "Technical",
    tags: ["technologies", "stack", "tools"]
  },
  {
    id: 5,
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and scope. Simple projects can take 2-4 weeks, while complex enterprise solutions may take 3-12 months. We provide detailed timelines during the planning phase.",
    category: "General",
    tags: ["timeline", "duration", "project"]
  },
  {
    id: 6,
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance services including bug fixes, updates, security patches, performance optimization, and feature enhancements. We have different support tiers to meet your needs.",
    category: "Support",
    tags: ["support", "maintenance", "updates"]
  },
  {
    id: 7,
    question: "Can you help with cloud migration?",
    answer: "Absolutely! We have extensive experience with cloud migration projects across AWS, Azure, and GCP. We can help you migrate your applications, data, and infrastructure to the cloud while ensuring security and performance.",
    category: "Technical",
    tags: ["cloud", "migration", "AWS", "Azure"]
  },
  {
    id: 8,
    question: "What is your development process?",
    answer: "We follow an agile development process with regular communication, iterative development, and continuous testing. Our process includes discovery, design, development, testing, deployment, and ongoing support phases.",
    category: "General",
    tags: ["process", "methodology", "agile"]
  },
  {
    id: 9,
    question: "Do you work with startups?",
    answer: "Yes, we work with businesses of all sizes including startups. We offer special packages and flexible pricing for startups, and our team understands the unique challenges and requirements of growing companies.",
    category: "General",
    tags: ["startups", "small business", "packages"]
  },
  {
    id: 10,
    question: "How do I get started with a project?",
    answer: "Getting started is easy! Contact us through our website, schedule a consultation, or call us directly. We'll discuss your requirements, provide a detailed proposal, and guide you through the entire process from start to finish.",
    category: "General",
    tags: ["getting started", "consultation", "contact"]
  },
  {
    id: 11,
    question: "What security measures do you implement?",
    answer: "We implement comprehensive security measures including data encryption, secure coding practices, regular security audits, compliance with industry standards (SOC 2, ISO 27001), and ongoing security monitoring.",
    category: "Technical",
    tags: ["security", "encryption", "compliance"]
  },
  {
    id: 12,
    question: "Do you offer training for our team?",
    answer: "Yes, we provide training services to help your team understand and effectively use the solutions we build. This includes documentation, video tutorials, hands-on training sessions, and ongoing support.",
    category: "Support",
    tags: ["training", "documentation", "tutorials"]
  },
  {
    id: 13,
    question: "Can you integrate with our existing systems?",
    answer: "Yes, we specialize in system integration and can connect our solutions with your existing software, databases, APIs, and third-party services. We ensure seamless data flow and compatibility.",
    category: "Technical",
    tags: ["integration", "existing systems", "APIs"]
  },
  {
    id: 14,
    question: "What if I need changes after the project is complete?",
    answer: "We understand that requirements can evolve. We offer flexible maintenance contracts and can accommodate changes, updates, and new features. Our team is available for ongoing development and support.",
    category: "Support",
    tags: ["changes", "updates", "maintenance"]
  },
  {
    id: 15,
    question: "Do you provide project management?",
    answer: "Yes, we have dedicated project managers who coordinate all aspects of your project, ensure timely delivery, maintain communication, and keep you updated on progress throughout the development process.",
    category: "General",
    tags: ["project management", "coordination", "communication"]
  }
];

const popularQuestions = [
  "What services does Zion Tech Group offer?",
  "How much do your services cost?",
  "Do you offer custom development services?",
  "How long does a typical project take?",
  "Do you provide ongoing support and maintenance?"
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredItems = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout 
      title="FAQ - Zion Tech Group"
      description="Frequently asked questions about Zion Tech Group's services, pricing, technical capabilities, and support. Find answers to common questions."
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
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <HelpCircle className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Frequently Asked Questions
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to common questions about our services, pricing, 
                and technical capabilities.
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
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {faqCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Questions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Popular Questions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Here are the most commonly asked questions from our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {popularQuestions.map((question, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                      {question}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Items */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                All Questions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Browse through all our frequently asked questions and find the answers you need.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg mb-4 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full mr-3">
                            {item.category}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {item.question}
                          </h3>
                        </div>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openItems.includes(item.id) ? 'rotate-180' : ''
                        }`}
                      />
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
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {item.answer}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Support
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}