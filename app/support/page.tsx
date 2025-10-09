import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, Mail, Phone, Clock, Search, HelpCircle, Book, Users, Zap, Shield } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our AI-powered support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: '< 1 minute',
      color: 'bg-green-100 text-green-800'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond within 2 hours',
      icon: Mail,
      availability: '24/7',
      responseTime: '< 2 hours',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      questions: [
        {
          question: 'How do I get started with Zion Tech Group services?',
          answer: 'Getting started is easy! Simply contact us through our website, schedule a free consultation, and we\'ll help you choose the right AI or IT solutions for your business needs.'
        },
        {
          question: 'What is the minimum contract length?',
          answer: 'We offer flexible contract options starting from monthly subscriptions. Most of our services have no minimum contract length, allowing you to scale up or down as needed.'
        },
        {
          question: 'Do you offer free trials?',
          answer: 'Yes! We offer free trials for most of our services. Contact us to learn more about trial periods and how to get started.'
        }
      ]
    },
    {
      title: 'AI Services',
      icon: '🤖',
      questions: [
        {
          question: 'What AI models do you use?',
          answer: 'We use a variety of state-of-the-art AI models including GPT-4, Claude, custom trained models, and specialized models for specific tasks like computer vision and natural language processing.'
        },
        {
          question: 'How accurate are your AI predictions?',
          answer: 'Our AI models achieve 95-99% accuracy depending on the specific task. We continuously monitor and improve our models to maintain high performance standards.'
        },
        {
          question: 'Can I customize the AI models for my specific needs?',
          answer: 'Absolutely! We offer custom model training and fine-tuning services to ensure the AI solutions are perfectly tailored to your business requirements.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: '⚙️',
      questions: [
        {
          question: 'What programming languages do you support?',
          answer: 'We support all major programming languages including Python, JavaScript, Java, C#, PHP, Go, Ruby, and more. Our APIs are language-agnostic and work with any programming language.'
        },
        {
          question: 'Do you provide API documentation?',
          answer: 'Yes! We provide comprehensive API documentation with code examples, interactive testing tools, and SDKs for popular programming languages.'
        },
        {
          question: 'What is your uptime guarantee?',
          answer: 'We guarantee 99.9% uptime for all our services. Our infrastructure is designed with redundancy and failover capabilities to ensure maximum reliability.'
        }
      ]
    },
    {
      title: 'Billing & Pricing',
      icon: '💰',
      questions: [
        {
          question: 'How is pricing calculated?',
          answer: 'Pricing is based on usage, features, and service level. We offer transparent, scalable pricing models that grow with your business needs.'
        },
        {
          question: 'Do you offer enterprise discounts?',
          answer: 'Yes! We offer volume discounts and custom pricing for enterprise clients. Contact our sales team to discuss your specific requirements.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and can accommodate enterprise billing arrangements including purchase orders.'
        }
      ]
    }
  ];

  const knowledgeBase = [
    {
      title: 'API Documentation',
      description: 'Complete API reference with examples',
      icon: Book,
      articles: 45,
      lastUpdated: '2 days ago'
    },
    {
      title: 'Integration Guides',
      description: 'Step-by-step integration tutorials',
      icon: Zap,
      articles: 23,
      lastUpdated: '1 week ago'
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      icon: HelpCircle,
      articles: 67,
      lastUpdated: '3 days ago'
    },
    {
      title: 'Best Practices',
      description: 'Recommended approaches and patterns',
      icon: Shield,
      articles: 34,
      lastUpdated: '1 week ago'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI services and IT solutions. Access our knowledge base, contact support, and find answers to common questions." />
        <meta name="keywords" content="support, help, documentation, FAQ, technical support, customer service" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Support Center
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                We're here to help you succeed with our AI and IT solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Live Chat
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Browse FAQ
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How Can We Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <option.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{option.title}</h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{option.availability}</span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Zap className="w-4 h-4 mr-2" />
                      <span>Response: {option.responseTime}</span>
                    </div>
                  </div>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${option.color} hover:opacity-90`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Search Knowledge Base</h2>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to your questions in our comprehensive knowledge base
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and solutions..."
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">API Issues</span>
              <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Setup Help</span>
              <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Billing</span>
              <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">Troubleshooting</span>
            </div>
          </div>
        </section>

        {/* Knowledge Base */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Knowledge Base</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {knowledgeBase.map((section, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center mb-4">
                    <section.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                      <p className="text-sm text-gray-600">{section.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{section.articles} articles</span>
                    <span>Updated {section.lastUpdated}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center mb-8">
                    <div className="text-3xl mr-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <div className="space-y-6">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="bg-white rounded-lg shadow-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Speak directly with our experts</p>
                <a href="tel:+13024640950" className="text-blue-600 font-semibold">
                  +1 (302) 464-0950
                </a>
                <p className="text-sm text-gray-500 mt-2">Mon-Fri 9AM-6PM EST</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us a detailed message</p>
                <a href="mailto:support@ziontechgroup.com" className="text-green-600 font-semibold">
                  support@ziontechgroup.com
                </a>
                <p className="text-sm text-gray-500 mt-2">Response within 2 hours</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant help 24/7</p>
                <button className="text-purple-600 font-semibold">
                  Start Chat
                </button>
                <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Our support team is ready to help you succeed with our AI and IT solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/docs"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;