import React from 'react';
import Layout from './components/Layout';
import { motion } from 'framer-motion';
import { Search, MessageCircle, BookOpen, Phone, Mail, Clock, CheckCircle, ArrowRight, Star, Users, Settings, Shield } from 'lucide-react';

const faqCategories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    questions: [
      {
        question: "How do I get started with Zion Tech Group services?",
        answer: "Getting started is easy! Simply contact us through our contact form or call us directly. We'll schedule a free consultation to understand your needs and provide a customized solution."
      },
      {
        question: "What services do you offer?",
        answer: "We offer comprehensive AI services, IT solutions, micro SaaS platforms, cloud solutions, cybersecurity, data analytics, and digital transformation services. Check our services page for detailed information."
      },
      {
        question: "Do you provide free consultations?",
        answer: "Yes! We offer free consultations for all potential clients. This helps us understand your requirements and provide the best possible solution for your business needs."
      }
    ]
  },
  {
    title: "Technical Support",
    icon: Settings,
    questions: [
      {
        question: "What is your response time for technical support?",
        answer: "We provide 24/7 technical support with guaranteed response times: Critical issues within 1 hour, High priority within 4 hours, and Standard requests within 24 hours."
      },
      {
        question: "Do you offer remote support?",
        answer: "Yes, we provide comprehensive remote support services including system monitoring, troubleshooting, and maintenance. Our team can securely access your systems when needed."
      },
      {
        question: "What technologies do you support?",
        answer: "We support all major technologies including cloud platforms (AWS, Azure, GCP), programming languages, databases, AI/ML frameworks, and enterprise software solutions."
      }
    ]
  },
  {
    title: "Billing & Pricing",
    icon: Star,
    questions: [
      {
        question: "What are your pricing models?",
        answer: "We offer flexible pricing models including monthly subscriptions, project-based pricing, and custom enterprise solutions. Contact us for detailed pricing information tailored to your needs."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans for larger projects. We can work with you to create a payment schedule that fits your budget and project timeline."
      },
      {
        question: "Are there any hidden costs?",
        answer: "No, we believe in transparent pricing. All costs are clearly outlined in our proposals, and we'll discuss any additional expenses before they occur."
      }
    ]
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    questions: [
      {
        question: "How do you ensure data security?",
        answer: "We implement industry-standard security measures including encryption, secure data centers, regular security audits, and compliance with GDPR, HIPAA, and other relevant regulations."
      },
      {
        question: "Do you sign NDAs?",
        answer: "Yes, we understand the importance of confidentiality. We're happy to sign NDAs and have strict data protection policies in place to protect your sensitive information."
      },
      {
        question: "What compliance standards do you meet?",
        answer: "We comply with various industry standards including SOC 2, ISO 27001, GDPR, HIPAA, and other relevant compliance requirements based on your industry needs."
      }
    ]
  }
];

const supportChannels = [
  {
    title: "Live Chat",
    description: "Get instant help with our 24/7 live chat support",
    icon: MessageCircle,
    availability: "24/7",
    responseTime: "Instant"
  },
  {
    title: "Email Support",
    description: "Send us detailed queries via email",
    icon: Mail,
    availability: "24/7",
    responseTime: "Within 4 hours"
  },
  {
    title: "Phone Support",
    description: "Speak directly with our technical experts",
    icon: Phone,
    availability: "Business Hours",
    responseTime: "Immediate"
  },
  {
    title: "Documentation",
    description: "Comprehensive guides and tutorials",
    icon: BookOpen,
    availability: "24/7",
    responseTime: "Self-service"
  }
];

const resources = [
  {
    title: "Getting Started Guide",
    description: "Step-by-step guide to begin using our services",
    type: "Guide",
    readTime: "10 min read"
  },
  {
    title: "API Documentation",
    description: "Complete API reference and integration guides",
    type: "Documentation",
    readTime: "30 min read"
  },
  {
    title: "Video Tutorials",
    description: "Video tutorials for common tasks and features",
    type: "Video",
    readTime: "5-15 min each"
  },
  {
    title: "Best Practices",
    description: "Industry best practices and recommendations",
    type: "Guide",
    readTime: "15 min read"
  },
  {
    title: "Troubleshooting Guide",
    description: "Common issues and their solutions",
    type: "Guide",
    readTime: "20 min read"
  },
  {
    title: "Security Guidelines",
    description: "Security best practices and recommendations",
    type: "Guide",
    readTime: "25 min read"
  }
];

export default function HelpPage() {
  return (
    <Layout
      title="Help Center - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. Find answers to common questions, access documentation, and contact our support team."
      keywords="help center, support, FAQ, documentation, technical support, customer service"
      canonical="https://ziontechgroup.com/help"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Help Center
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Find answers to your questions, access documentation, and get the support you need. 
                We're here to help you succeed with our services.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or FAQs..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Can We Help You?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the support channel that works best for you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => {
                const IconComponent = channel.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {channel.description}
                    </p>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Availability:</span>
                        <span className="font-medium">{channel.availability}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Response:</span>
                        <span className="font-medium">{channel.responseTime}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find quick answers to the most common questions about our services.
              </p>
            </motion.div>

            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={categoryIndex}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-50 p-6 border-b">
                      <div className="flex items-center">
                        <IconComponent className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="space-y-6">
                        {category.questions.map((faq, faqIndex) => (
                          <div key={faqIndex} className="border-b border-gray-100 pb-4 last:border-b-0">
                            <h4 className="text-lg font-medium text-gray-900 mb-2">
                              {faq.question}
                            </h4>
                            <p className="text-gray-600">
                              {faq.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Helpful Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access our comprehensive documentation, guides, and tutorials.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {resource.type}
                    </span>
                    <span className="text-sm text-gray-500">{resource.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span className="text-sm">Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Call: +1 302 464 0950
              </a>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center">
                <Clock className="w-6 h-6 mr-2" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center justify-center">
                <Users className="w-6 h-6 mr-2" />
                <span>Expert Technical Team</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                <span>Guaranteed Response Time</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}