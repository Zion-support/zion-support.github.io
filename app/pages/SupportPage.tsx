import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

const SupportPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [isTicketSubmitted, setIsTicketSubmitted] = useState(false);

  const supportOptions = [
    {
      title: '24/7 Phone Support',
      description: 'Get immediate help from our technical experts',
      icon: PhoneIcon,
      contact: '+1 (555) 123-4567',
      availability: '24/7',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      icon: EnvelopeIcon,
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      icon: ChatBubbleLeftRightIcon,
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const faqCategories = [
    {
      id: 'general',
      name: 'General',
      questions: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer comprehensive AI solutions, IT services, cloud infrastructure, cybersecurity, digital transformation, and micro SaaS solutions tailored to your business needs.'
        },
        {
          question: 'How do I get started with your services?',
          answer: 'You can get started by contacting us through our contact form, calling our support line, or scheduling a free consultation. We\'ll assess your needs and provide a customized solution.'
        },
        {
          question: 'Do you offer 24/7 support?',
          answer: 'Yes, we provide 24/7 phone support for all our clients. Our technical experts are always available to help you with any issues or questions.'
        }
      ]
    },
    {
      id: 'technical',
      name: 'Technical',
      questions: [
        {
          question: 'What technologies do you work with?',
          answer: 'We work with a wide range of technologies including React, Node.js, Python, AWS, Azure, Google Cloud, Docker, Kubernetes, and various AI/ML frameworks.'
        },
        {
          question: 'Do you provide cloud migration services?',
          answer: 'Yes, we offer comprehensive cloud migration services including assessment, planning, execution, and ongoing optimization for AWS, Azure, and Google Cloud platforms.'
        },
        {
          question: 'What security measures do you implement?',
          answer: 'We implement industry-standard security measures including encryption, multi-factor authentication, regular security audits, and compliance with SOC 2, GDPR, and other relevant standards.'
        }
      ]
    },
    {
      id: 'billing',
      name: 'Billing',
      questions: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including monthly subscriptions, project-based pricing, and custom enterprise solutions. Contact us for a detailed quote based on your specific needs.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer a 30-day money-back guarantee for all our services. If you\'re not satisfied with our work, we\'ll provide a full refund within 30 days of project completion.'
        },
        {
          question: 'Can I change my plan anytime?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we\'ll prorate any differences.'
        }
      ]
    }
  ];

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTicketSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsTicketSubmitted(false);
    }, 3000);
  };

  const selectedCategoryData = faqCategories.find(cat => cat.id === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. 24/7 phone support, email support, live chat, and comprehensive FAQ." />
        <meta name="keywords" content="support, help, FAQ, technical support, customer service" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Support Center
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're here to help you succeed. Get the support you need with our comprehensive 
                help resources and expert assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support option that works best for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{option.title}</h3>
                  <p className="text-gray-300 mb-6">{option.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300">
                      <span className="font-semibold mr-2">Contact:</span>
                      {option.contact}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      {option.availability}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-300">
                  Find answers to common questions about our services
                </p>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {selectedCategoryData?.questions.map((faq, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg border border-slate-700">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-start">
                        <QuestionMarkCircleIcon className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        {faq.question}
                      </h3>
                      <p className="text-gray-300 ml-8">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support Ticket Form */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Submit a Support Ticket
                </h2>
                <p className="text-xl text-gray-300">
                  Can't find what you're looking for? Send us a detailed message
                </p>
              </div>

              {isTicketSubmitted ? (
                <div className="bg-green-900/20 border border-green-500 rounded-lg p-8 text-center">
                  <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Ticket Submitted!</h3>
                  <p className="text-gray-300">
                    Your support ticket has been submitted successfully. We'll get back to you within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleTicketSubmit} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Brief description of your issue"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Priority
                      </label>
                      <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option value="low">Low - General inquiry</option>
                        <option value="medium">Medium - Minor issue</option>
                        <option value="high">High - Service disruption</option>
                        <option value="urgent">Urgent - Critical issue</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Description *
                      </label>
                      <textarea
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
                        placeholder="Please provide detailed information about your issue or question..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Submit Ticket
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-gradient-to-r from-red-900 to-orange-900">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <ExclamationTriangleIcon className="w-16 h-16 text-red-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Emergency Support
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                For critical issues affecting your production systems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15551234567"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call Emergency Line
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-900 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;