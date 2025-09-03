import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ModernHeader } from '../src/components/header/ModernHeader';
import { SimpleFooter } from '../src/components/layout/SimpleFooter';
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Search,
  FileText,
  Video,
  BookOpen,
  Users,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat Support',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed assistance via email',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'bg-purple-500'
    },
    {
      icon: Video,
      title: 'Video Call Support',
      description: 'Screen sharing and remote assistance',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Scheduled',
      color: 'bg-orange-500'
    }
  ];

  const faqCategories = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer AI services, IT services, cloud platforms, cybersecurity, data analytics, and custom software development solutions.'
        },
        {
          question: 'How do I get started with your services?',
          answer: 'You can contact us through our contact form, schedule a consultation, or call us directly at +1 302 464 0950.'
        },
        {
          question: 'Do you offer 24/7 support?',
          answer: 'Yes, we provide 24/7 support for critical issues and have live chat available around the clock.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What technologies do you work with?',
          answer: 'We work with a wide range of technologies including AWS, Azure, Google Cloud, React, Node.js, Python, and many others.'
        },
        {
          question: 'Do you provide cloud migration services?',
          answer: 'Yes, we specialize in cloud migration and can help you move your infrastructure to AWS, Azure, or Google Cloud.'
        },
        {
          question: 'What is your response time for technical issues?',
          answer: 'We respond to critical issues within 2 minutes via live chat and within 4 hours via email.'
        }
      ]
    },
    {
      category: 'Billing',
      questions: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including hourly rates, project-based pricing, and retainer agreements.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes, we provide free initial consultations to understand your needs and provide recommendations.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and can work with corporate purchase orders.'
        }
      ]
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and webinars',
      link: '/training'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable articles and troubleshooting guides',
      link: '/help'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and our experts',
      link: '/community'
    }
  ];

  return (
    <>
      <Head>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. 24/7 live chat, phone support, and comprehensive resources." />
        <meta name="keywords" content="support, help, customer service, technical support, documentation" />
      </Head>

      <ModernHeader />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Support Center
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're here to help you succeed. Get the support you need, when you need it.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Can We Help You?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the support option that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 ${option.color} rounded-lg mr-4`}>
                      <option.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="font-medium">Available:</span>
                      <span className="ml-1">{option.availability}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Zap className="h-4 w-4 mr-2" />
                      <span className="font-medium">Response:</span>
                      <span className="ml-1">{option.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Common support tasks and resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.link}
                  className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                      <resource.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
                  </div>
                  <p className="text-gray-600">{resource.description}</p>
                  <div className="mt-4 flex items-center text-blue-600 font-medium">
                    Access Resource
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions
              </p>
            </div>

            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">{category.category}</h3>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="bg-white rounded-lg shadow-sm p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our support team is ready to assist you with any questions or issues
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                Call Now
                <Phone className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>
  );
}