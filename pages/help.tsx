import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, BookOpen, MessageCircle, Phone, Mail, FileText, Video, Download, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';

const faqCategories = [
  {
    title: 'Getting Started',
    icon: BookOpen,
    faqs: [
      {
        question: 'How do I get started with Zion Tech Group services?',
        answer: 'Getting started is easy! Simply contact us through our contact form, call us at +1 302 464 0950, or email us at kleber@ziontechgroup.com. We\'ll schedule a consultation to understand your needs and provide a customized solution.'
      },
      {
        question: 'What services do you offer?',
        answer: 'We offer comprehensive AI solutions, IT services, and Micro SaaS products. This includes machine learning, computer vision, cloud infrastructure, cybersecurity, data analytics, and custom software development.'
      },
      {
        question: 'Do you work with small businesses?',
        answer: 'Yes! We work with businesses of all sizes, from startups to large enterprises. We have flexible pricing and solutions tailored to different business needs and budgets.'
      }
    ]
  },
  {
    title: 'AI Services',
    icon: HelpCircle,
    faqs: [
      {
        question: 'What AI technologies do you specialize in?',
        answer: 'We specialize in machine learning, natural language processing, computer vision, predictive analytics, quantum AI, autonomous systems, and custom AI solutions for various industries.'
      },
      {
        question: 'How long does it take to implement an AI solution?',
        answer: 'Implementation time varies depending on complexity. Simple AI integrations can take 2-4 weeks, while complex custom solutions may take 3-6 months. We provide detailed timelines during consultation.'
      },
      {
        question: 'Do you provide AI training for our team?',
        answer: 'Yes! We offer comprehensive training programs to help your team understand and effectively use the AI solutions we implement. This includes documentation, workshops, and ongoing support.'
      }
    ]
  },
  {
    title: 'IT Services',
    icon: MessageCircle,
    faqs: [
      {
        question: 'What IT infrastructure services do you provide?',
        answer: 'We provide cloud infrastructure management, network setup and security, server administration, data backup and recovery, cybersecurity solutions, and 24/7 monitoring and support.'
      },
      {
        question: 'Do you offer cloud migration services?',
        answer: 'Yes! We help businesses migrate to cloud platforms like AWS, Azure, and Google Cloud. Our migration process is designed to minimize downtime and ensure data security.'
      },
      {
        question: 'What cybersecurity measures do you implement?',
        answer: 'We implement comprehensive cybersecurity measures including firewalls, intrusion detection, data encryption, security audits, compliance management, and employee training programs.'
      }
    ]
  },
  {
    title: 'Micro SaaS',
    icon: FileText,
    faqs: [
      {
        question: 'What is Micro SaaS and how can it help my business?',
        answer: 'Micro SaaS refers to small, focused software solutions that solve specific business problems. Our Micro SaaS products include AI-powered tools, automation platforms, analytics dashboards, and productivity solutions.'
      },
      {
        question: 'Can Micro SaaS solutions be customized?',
        answer: 'Absolutely! All our Micro SaaS solutions can be customized to fit your specific business needs, branding, and workflows. We work closely with you to ensure the solution aligns with your requirements.'
      },
      {
        question: 'Do you provide ongoing support for Micro SaaS products?',
        answer: 'Yes! We provide comprehensive support including updates, maintenance, feature enhancements, and technical support. Our support packages are designed to keep your solutions running smoothly.'
      }
    ]
  }
];

const supportChannels = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Call us for immediate assistance',
    value: '+1 302 464 0950',
    available: 'Mon-Fri 9AM-6PM EST',
    action: 'Call Now'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us an email anytime',
    value: 'kleber@ziontechgroup.com',
    available: '24/7 Response',
    action: 'Send Email'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team',
    value: 'Available 24/7',
    available: 'Instant Response',
    action: 'Start Chat'
  }
];

const resources = [
  {
    title: 'API Documentation',
    description: 'Complete API reference and integration guides',
    icon: BookOpen,
    link: '/api-docs',
    type: 'Documentation'
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video guides for our services',
    icon: Video,
    link: '/tutorials',
    type: 'Video'
  },
  {
    title: 'Download Center',
    description: 'SDKs, tools, and resources for developers',
    icon: Download,
    link: '/downloads',
    type: 'Download'
  },
  {
    title: 'Case Studies',
    description: 'Real-world examples of our successful projects',
    icon: FileText,
    link: '/case-studies',
    type: 'Case Study'
  }
];

export default function Help() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleFaqToggle = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const filteredFaqs = faqCategories[selectedCategory].faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout
      title="Help & Support - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. Find answers to frequently asked questions, access documentation, and contact our support team."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Help & Support
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Find answers to your questions, access documentation, and get support 
              for all Zion Tech Group services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, and documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred way to get help
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-2">{channel.description}</p>
                <p className="text-lg text-blue-600 font-semibold mb-2">{channel.value}</p>
                <p className="text-sm text-gray-500 mb-4">{channel.available}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  {channel.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {faqCategories.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5 inline mr-2" />
                {category.title}
              </button>
            ))}
          </div>
          
          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg mb-4"
              >
                <button
                  onClick={() => handleFaqToggle(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resources & Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive resources and documentation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 font-semibold">{resource.type}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Call Support
              <Phone className="ml-2 w-5 h-5" />
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Email Support
              <Mail className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}