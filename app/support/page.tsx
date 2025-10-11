'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MessageSquare, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const SupportPage: React.FC = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
>>>>>>> cursor/website-audit-and-update-with-deployment-26c5

  const supportChannels = const supportChannels = const supportChannels = [
=======
  const supportOptions = [
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: 'Within 4 hours'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help through our live chat system',
<<<<<<< HEAD
      availability: 'Mon-Fri: 9AM-6PM EST',
      responseTime: 'Immediate',
      contact: 'Start Chat',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Video,
      title: 'Video Support',
      description: 'Schedule a video call for complex technical issues',
      availability: 'By appointment',
      responseTime: 'Within 2 hours',
      contact: 'Schedule Call',
      color: 'from-orange-500 to-red-600'
    };
<<<<<<< HEAD;
  ];
  const filteredFaqs = const filteredFaqs = const filteredFaqs = faqs.filter()
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
=======;
  ];

  const faqCategories = const faqCategories = const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: FileText,
      questions: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer comprehensive AI services, IT solutions, and Micro SaaS tools. Our AI services include chatbots, analytics, computer vision, and automation. IT services cover cloud infrastructure, cybersecurity, DevOps, and custom development. Micro SaaS tools provide ready-to-use business applications.'
        },
        {
          question: 'How do I get started with your services?',
          answer: 'Getting started is easy! Contact us for a free consultation where we assess your needs and recommend the best solutions. You can call us at (302) 464-0950, email kleber@ziontechgroup.com, or fill out our contact form.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes! We provide free consultations for all potential clients. During the consultation, we assess your current setup, discuss your goals, and provide recommendations for AI and IT solutions that can help your business grow.'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: MessageSquare,
      questions: [
        {
          question: 'How long does it take to implement AI solutions?',
          answer: 'Implementation time varies based on complexity. Simple chatbots can be deployed in 2-4 weeks, while complex AI systems may take 3-6 months. We provide detailed timelines during the consultation phase.'
        },
        {
          question: 'Do I need technical expertise to use your AI tools?',
          answer: 'No! Our AI solutions are designed to be user-friendly. We provide comprehensive training and ongoing support to ensure your team can effectively use and manage the AI tools.'
        },
        {
          question: 'Can AI solutions integrate with my existing systems?',
          answer: 'Yes, our AI solutions are designed to integrate seamlessly with existing business systems including CRM, ERP, databases, and other enterprise applications. We handle all integration work as part of our service.'
        }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: Headphones,
      questions: [
        {
          question: 'What cloud platforms do you support?',
          answer: 'We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud solutions. We help you choose the best platform for your specific needs and budget.'
        },
        {
          question: 'Do you provide 24/7 IT support?',
          answer: 'Yes, we offer 24/7 emergency support for critical issues. Our standard support hours are Monday-Friday 9AM-6PM EST, with emergency support available around the clock for urgent technical problems.'
        },
        {
          question: 'How do you ensure data security?',
          answer: 'We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA where applicable.'
        }
      ];
    };
  ];

  const resources = const resources = const resources = [
=======
      availability: 'Business Hours',
      responseTime: 'Immediate'
    }
  ];

  const faqs = [
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our sales team for a free consultation, and we\'ll help you choose the right AI solution for your business needs.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We provide 24/7 support with immediate response for critical issues. Non-critical issues are typically resolved within 4 hours during business hours.'
    },
    {
      question: 'Do you offer training for your products?',
      answer: 'Yes, we provide comprehensive training for all our products, including documentation, video tutorials, and live training sessions.'
    },
    {
<<<<<<< HEAD
      title: 'Status Page',
      description: 'Real-time status of all our services',
      icon: CheckCircle,
      link: '/status';
    };
  ];

  const filteredCategories = const filteredCategories = const filteredCategories = faqCategories.filter();
  );

  const filteredQuestions = const filteredQuestions = const filteredQuestions = filteredCategories.flatMap()
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
>>>>>>> cursor/website-audit-and-update-with-deployment-26c5;
  );

  return() {supportChannels.map((channel, index) => ()
                      {channel.contact.startsWith('+') || channel.contact.includes('@') ? ()
                          href={channel.contact.startsWith('+') ? `tel:${channel.contact}` : `mailto:${channel.contact}`}
                          className="text-cyan-400 hover:text-cyan-300 font-semibold"
                        ></a>
                          {channel.contact}
                        </a>
                      ) : ()
                      )}
=======
      question: 'Can I integrate your solutions with my existing systems?',
      answer: 'Absolutely! Our solutions are designed with integration in mind. We provide APIs, webhooks, and pre-built connectors for popular platforms.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support | Zion Tech Group - Technical Support & Help</title>
        <meta name="description" content="Get technical support and help for our AI and IT solutions. 24/7 support, documentation, and expert assistance for all your needs." />
        <meta name="keywords" content="technical support, help desk, customer service, AI support, IT support, documentation, troubleshooting" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Support Center
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the help you need with our comprehensive support options and expert technical assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Support Options Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Can We Help You?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the support option that works best for you. We're here to help 24/7.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {option.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {option.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-500 mr-3" />
                      <span className="text-sm text-gray-600">
                        <strong>Availability:</strong> {option.availability}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-gray-500 mr-3" />
                      <span className="text-sm text-gray-600">
                        <strong>Response Time:</strong> {option.responseTime}
                      </span>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    Get Support
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
            {/* FAQ Section */}
            <div className="mb-16" /></div>
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
              
              {/* Search and Filter */}
              <div className="mb-8" /></div>
                <div className="flex flex-col md:flex-row gap-4 mb-6" /></div>
                  <div className="flex-1 relative" /></div>
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" / /></Search>
=======
        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our products and services.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our support team is ready to assist you with any questions or issues you may have.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-4" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div>+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div>support@ziontechgroup.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MessageSquare className="w-6 h-6 mr-4" />
                    <div>
                      <div className="font-semibold">Live Chat</div>
                      <div>Available 24/7</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Support Form</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
<<<<<<< HEAD
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {faqCategories.map()
                    ))}
                  </select>
                </div>
              </div>

              {/* FAQ Items */}
              <div className="space-y-6" /></div>
                {filteredQuestions.map((faq, index) => ()
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="mb-16" /></div>
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" /></div>
                {resources.map((resource, index) => ()
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center" /></div>
              <div className="bg-slate-800/50 rounded-lg p-8" /></div>
                <h2 className="text-2xl font-bold text-white mb-4" /></h2>
                  Still Need Help?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto" /></p>
                  Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
                  <a href="tel:+13024640950"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                    <Phone className="w-5 h-5" / /></Phone>
                    <span>Call: (302) 464-0950</span>
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center justify-center space-x-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                    <Mail className="w-5 h-5" / /></Mail>
                    <span>Email Support</span>
                  </a>
                </div>
=======
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Send Message
                  </button>
                </form>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </div>
            </div>
          </div>
        </section>
      </main>
<<<<<<< HEAD
      
      <Footer / /></Footer>
=======

      <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    </>
  );
};

export default SupportPage;