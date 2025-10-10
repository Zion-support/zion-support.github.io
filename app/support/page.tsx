'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, ArrowRight, HelpCircle, BookOpen, Users } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const supportChannels = [
    {
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      contact: '+1 (302) 464-0950',
      availability: '24/7 Available',
      color: 'text-blue-400'
    },
    {
      name: 'Email Support',
      description: 'Get detailed responses to your questions',
      icon: Mail,
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 24 hours',
      color: 'text-green-400'
    },
    {
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'text-purple-400'
    }
  ];

  const faqCategories = [
    {
      name: 'General',
      questions: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer comprehensive AI and IT solutions including AI development, cloud migration, cybersecurity, data analytics, and custom software development.'
        },
        {
          question: 'How can I get started with your services?',
          answer: 'You can contact us through our website, call us at (302) 464-0950, or email us at kleber@ziontechgroup.com for a free consultation.'
        },
        {
          question: 'Do you offer custom solutions?',
          answer: 'Yes, we specialize in creating custom AI and IT solutions tailored to your specific business needs and requirements.'
        }
      ]
    },
    {
      name: 'Technical',
      questions: [
        {
          question: 'What technologies do you work with?',
          answer: 'We work with a wide range of technologies including Python, React, Node.js, AWS, Azure, Google Cloud, TensorFlow, PyTorch, and many more.'
        },
        {
          question: 'Do you provide ongoing support?',
          answer: 'Yes, we offer comprehensive ongoing support and maintenance services to ensure your solutions continue to perform optimally.'
        },
        {
          question: 'How long does a typical project take?',
          answer: 'Project timelines vary depending on complexity, but most projects range from 2-6 months. We provide detailed timelines during the consultation phase.'
        }
      ]
    },
    {
      name: 'Billing',
      questions: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including project-based, retainer, and subscription options. Contact us for a customized quote.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for larger projects to help manage your budget effectively.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and can accommodate other payment methods as needed.'
        }
      ]
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: BookOpen,
      link: '/docs'
    },
    {
      title: 'Knowledge Base',
      description: 'Search our extensive knowledge base',
      icon: Search,
      link: '/knowledge-base'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      icon: Users,
      link: '/community'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: HelpCircle,
      link: '/tutorials'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Get Help & Support</title>
        <meta name="description" content="Get comprehensive support for all your AI and IT needs. Contact our expert team for technical assistance, billing questions, and more." />
        <meta name="keywords" content="support, help, technical support, customer service, AI support, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Support</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our expert support team is here to help you succeed. Get assistance with technical issues, billing questions, and more.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Contact Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you. We're here to help 24/7.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <channel.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{channel.name}</h3>
                      <p className="text-gray-400 text-sm">{channel.availability}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className={`${channel.color} font-medium`}>{channel.contact}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our services and support.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {faqCategories.map((category, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-6">{category.name}</h3>
                  <div className="space-y-4">
                    {category.questions.map((faq, idx) => (
                      <div key={idx} className="border-b border-white/10 pb-4 last:border-b-0">
                        <h4 className="text-white font-medium mb-2">{faq.question}</h4>
                        <p className="text-gray-300 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Helpful Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access our comprehensive resources to help you get the most out of our services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  to={resource.link}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{resource.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  Contact Support
                </Link>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;