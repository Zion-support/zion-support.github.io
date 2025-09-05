import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  ArrowRight,
  Plus,
  Minus,
  Search,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  Star,
  Shield,
  Zap
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const faqCategories = [
  { name: "All Questions", count: 45, active: true },
  { name: "General", count: 12, active: false },
  { name: "Services", count: 15, active: false },
  { name: "Pricing", count: 8, active: false },
  { name: "Technical", count: 10, active: false }
];

const faqData = [
  {
    category: "General",
    question: "What is Zion Tech Group?",
    answer: "Zion Tech Group is a leading technology company specializing in AI solutions, cloud services, and digital transformation. We help businesses of all sizes leverage cutting-edge technology to achieve their goals and drive growth.",
    popular: true
  },
  {
    category: "General",
    question: "How long has Zion Tech Group been in business?",
    answer: "Zion Tech Group has been serving clients for over 15 years, with a proven track record of delivering innovative technology solutions across various industries.",
    popular: false
  },
  {
    category: "General",
    question: "Where is Zion Tech Group located?",
    answer: "Our headquarters is located at 364 E Main St STE 1008, Middletown, DE 19709. We also have offices and remote teams across the United States and internationally.",
    popular: false
  },
  {
    category: "Services",
    question: "What AI services do you offer?",
    answer: "We offer comprehensive AI services including machine learning model development, natural language processing, computer vision, predictive analytics, AI-powered chatbots, and custom AI solution development tailored to your specific needs.",
    popular: true
  },
  {
    category: "Services",
    question: "Do you provide cloud migration services?",
    answer: "Yes, we offer complete cloud migration services including assessment, planning, execution, and optimization. We work with all major cloud providers including AWS, Azure, and Google Cloud Platform.",
    popular: true
  },
  {
    category: "Services",
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and government. Our solutions are tailored to meet the specific compliance and security requirements of each industry.",
    popular: false
  },
  {
    category: "Services",
    question: "Do you offer 24/7 support?",
    answer: "Yes, we provide 24/7 support for all our enterprise clients. Our support team is available around the clock to ensure your systems run smoothly and address any issues promptly.",
    popular: true
  },
  {
    category: "Pricing",
    question: "How do you price your services?",
    answer: "Our pricing varies based on the scope and complexity of the project. We offer flexible pricing models including project-based, retainer, and subscription options. Contact us for a customized quote based on your specific requirements.",
    popular: true
  },
  {
    category: "Pricing",
    question: "Do you offer free consultations?",
    answer: "Yes, we offer free initial consultations to understand your needs and provide recommendations. This helps us create a tailored solution that fits your budget and requirements.",
    popular: false
  },
  {
    category: "Pricing",
    question: "Are there any hidden costs?",
    answer: "No, we believe in transparent pricing. All costs are clearly outlined in our proposals, and we provide detailed breakdowns of all expenses before starting any project.",
    popular: false
  },
  {
    category: "Technical",
    question: "What technologies do you work with?",
    answer: "We work with a wide range of technologies including Python, JavaScript, Java, C#, cloud platforms (AWS, Azure, GCP), AI/ML frameworks (TensorFlow, PyTorch), databases, and modern web technologies.",
    popular: true
  },
  {
    category: "Technical",
    question: "How do you ensure data security?",
    answer: "We implement multiple layers of security including encryption, access controls, regular security audits, compliance with industry standards (SOC 2, ISO 27001), and following security best practices throughout the development process.",
    popular: true
  },
  {
    category: "Technical",
    question: "Do you provide API documentation?",
    answer: "Yes, we provide comprehensive API documentation including endpoints, authentication methods, request/response examples, and SDKs for various programming languages.",
    popular: false
  },
  {
    category: "Technical",
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely! We specialize in integrating with existing systems and legacy applications. Our team has extensive experience in API integration, data migration, and system modernization.",
    popular: false
  },
  {
    category: "General",
    question: "How do I get started?",
    answer: "Getting started is easy! Simply contact us through our website, schedule a free consultation, and we'll work with you to understand your needs and create a customized solution plan.",
    popular: true
  }
];

const contactMethods = [
  {
    title: "Live Chat",
    description: "Get instant answers to your questions",
    icon: MessageCircle,
    href: "/contact",
    available: "24/7"
  },
  {
    title: "Email Support",
    description: "Send us a detailed message",
    icon: Mail,
    href: "/contact",
    available: "24/7"
  },
  {
    title: "Phone Support",
    description: "Speak directly with our team",
    icon: Phone,
    href: "/contact",
    available: "Business Hours"
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Questions');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Questions' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout 
      title="FAQ - Frequently Asked Questions - Zion Tech Group"
      description="Find answers to frequently asked questions about Zion Tech Group's services, pricing, and technical capabilities. Get help with common questions and concerns."
      keywords="FAQ, frequently asked questions, help, support, questions, answers, services, pricing, technical support"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Find answers to common questions about our services, 
                pricing, and technical capabilities.
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
                    className="w-full bg-gray-800 text-white px-12 py-4 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="#faq-section"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Browse FAQ <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/contact"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-8 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {faqCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq-section" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to the most frequently asked questions about our services and solutions.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-gray-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left hover:bg-gray-700 transition-colors duration-300 flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      {faq.popular && (
                        <Star className="w-5 h-5 text-yellow-400 mr-3" />
                      )}
                      <h3 className="text-lg font-semibold text-white">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-medium mr-4">
                        {faq.category}
                      </span>
                      {openItems.includes(index) ? (
                        <Minus className="w-6 h-6 text-blue-400" />
                      ) : (
                        <Plus className="w-6 h-6 text-blue-400" />
                      )}
                    </div>
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
                        <div className="px-6 pb-6">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Still Have <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Can't find the answer you're looking for? Contact our support team 
                and we'll be happy to help.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300 text-center group"
                >
                  <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {method.description}
                  </p>
                  <div className="flex items-center justify-center text-blue-400 text-sm font-medium mb-6">
                    <Clock className="w-4 h-4 mr-2" />
                    Available {method.available}
                  </div>
                  <Link 
                    href={method.href}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center group"
                  >
                    Get Help <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't see your question answered? Contact us directly and we'll 
                provide you with the information you need.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Contact Us Now <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/services"
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}