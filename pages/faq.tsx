import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  ArrowRight,
  Search,
  Plus,
  Minus,
  CheckCircle,
  Users,
  Settings,
  DollarSign,
  Shield,
  Globe,
  Zap
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const faqCategories = [
  {
    title: "General Questions",
    icon: HelpCircle,
    color: "blue",
    questions: [
      {
        question: "What is Zion Tech Group?",
        answer: "Zion Tech Group is a leading technology solutions provider specializing in AI services, cloud solutions, and digital transformation. We help businesses leverage cutting-edge technology to achieve their goals."
      },
      {
        question: "How long has Zion Tech Group been in business?",
        answer: "We've been providing technology solutions for over 5 years, serving clients across various industries with innovative and reliable services."
      },
      {
        question: "Where is Zion Tech Group located?",
        answer: "Our headquarters is located at 364 E Main St STE 1008, Middletown, DE 19709. We also have remote teams and serve clients globally."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and government sectors."
      }
    ]
  },
  {
    title: "Services & Solutions",
    icon: Settings,
    color: "green",
    questions: [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "We offer AI services, IT services, micro SaaS solutions, custom development, digital transformation, cloud migration, and talent acquisition services."
      },
      {
        question: "Do you provide custom development?",
        answer: "Yes, we specialize in custom software development tailored to your specific business requirements and industry needs."
      },
      {
        question: "What AI services do you offer?",
        answer: "Our AI services include machine learning solutions, natural language processing, computer vision, predictive analytics, and AI-powered automation."
      },
      {
        question: "Do you offer cloud migration services?",
        answer: "Yes, we provide comprehensive cloud migration services including strategy planning, implementation, and ongoing support for AWS, Azure, and Google Cloud."
      }
    ]
  },
  {
    title: "Pricing & Billing",
    icon: DollarSign,
    color: "purple",
    questions: [
      {
        question: "How do you price your services?",
        answer: "Our pricing varies based on project scope, complexity, and requirements. We offer project-based, retainer, and subscription pricing models to fit different needs."
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes, we provide free initial consultations to understand your needs and provide recommendations for the best solutions."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods including credit cards, bank transfers, and corporate purchase orders. Payment terms can be discussed during project planning."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans for larger projects to help manage cash flow and budget requirements."
      }
    ]
  },
  {
    title: "Technical Support",
    icon: Shield,
    color: "orange",
    questions: [
      {
        question: "What kind of support do you provide?",
        answer: "We provide 24/7 technical support through multiple channels including live chat, email, phone, and video calls. Our support team includes certified experts in various technologies."
      },
      {
        question: "How quickly do you respond to support requests?",
        answer: "We guarantee response times of less than 2 minutes for critical issues, and within 4 hours for non-critical requests."
      },
      {
        question: "Do you provide training for your solutions?",
        answer: "Yes, we provide comprehensive training including documentation, video tutorials, hands-on sessions, and ongoing support to ensure your team can effectively use our solutions."
      },
      {
        question: "What if I need help with integration?",
        answer: "Our team specializes in seamless integration with existing systems. We provide full support throughout the integration process and beyond."
      }
    ]
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    color: "red",
    questions: [
      {
        question: "What security measures do you have in place?",
        answer: "We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2 Type II and ISO 27001."
      },
      {
        question: "Do you sign NDAs and confidentiality agreements?",
        answer: "Yes, we understand the importance of confidentiality and are happy to sign NDAs and other confidentiality agreements to protect your sensitive information."
      },
      {
        question: "How do you handle data privacy?",
        answer: "We follow strict data privacy protocols and comply with GDPR, CCPA, and other relevant data protection regulations. Your data is always encrypted and securely stored."
      },
      {
        question: "Are you certified for specific compliance standards?",
        answer: "Yes, we maintain various certifications including SOC 2 Type II, ISO 27001, and other industry-specific compliance standards."
      }
    ]
  },
  {
    title: "Getting Started",
    icon: Zap,
    color: "indigo",
    questions: [
      {
        question: "How do I get started with Zion Tech Group?",
        answer: "Getting started is easy! Contact us through our website, call us directly, or schedule a free consultation. We'll assess your needs and provide a customized solution."
      },
      {
        question: "What information do I need to provide?",
        answer: "We'll need information about your current technology stack, specific requirements, timeline, budget, and any existing systems you want to integrate with."
      },
      {
        question: "How long does the onboarding process take?",
        answer: "The onboarding process typically takes 1-2 weeks, depending on project complexity. We'll provide a detailed timeline during our initial consultation."
      },
      {
        question: "Do you work with startups?",
        answer: "Yes, we work with businesses of all sizes including startups. We offer special packages and flexible solutions designed for growing companies."
      }
    ]
  }
];

const popularQuestions = [
  {
    question: "What is the typical project timeline?",
    answer: "Project timelines vary based on complexity, but most projects range from 2-6 months. We provide detailed timelines during the planning phase.",
    category: "General"
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes, we offer comprehensive maintenance and support packages to ensure your solutions continue to perform optimally.",
    category: "Support"
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely! We work collaboratively with your internal teams and can provide training and knowledge transfer.",
    category: "Services"
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern technologies including React, Node.js, Python, AI/ML, cloud platforms, and various databases.",
    category: "Technical"
  }
];

export default function FAQPage() {
  return (
    <MainLayout 
      title="Frequently Asked Questions - Zion Tech Group"
      description="Find answers to common questions about Zion Tech Group services, pricing, support, and more. Get the information you need quickly."
      keywords="FAQ, frequently asked questions, help, support, services, pricing, technical questions"
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
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Find answers to the most common questions about our services, pricing, support, and more. 
                Can't find what you're looking for? Contact us directly.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQ..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#faq-categories"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Browse FAQ
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Questions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Popular Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The most frequently asked questions from our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularQuestions.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm font-medium">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section id="faq-categories" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers organized by topic for easier navigation.
              </p>
            </motion.div>

            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className={`w-6 h-6 text-${category.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg">
                        <button className="w-full text-left p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </h4>
                            <Plus className="w-5 h-5 text-gray-400" />
                          </div>
                        </button>
                        <div className="px-4 pb-4">
                          <p className="text-gray-600">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Can't find the answer you're looking for? Our support team is here to help you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Contact Support
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/support"
                  className="px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Visit Support Center
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Now that you have the answers you need, let's discuss how we can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}