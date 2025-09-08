import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {}
  // TODO: Implement;
};
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Video,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronRight;'
} from 'lucide-react;
const helpCategories = []
  {'}
    title: "Getting Started",
    icon: BookOpen,
    articles: []
      {}
        title: "Welcome to Zion Tech Group",
        description: "Learn the basics of our platform and services",
        type: "Guide",
        readTime: "5 min"
      },
      {}
        title: "Setting Up Your Account",
        description: "Step-by-step guide to create and configure your account",
        type: "Tutorial",
        readTime: "10 min"
      },
      {}
        title: "First Steps with AI Services",
        description: "How to get started with our AI solutions",
        type: "Tutorial",
        readTime: "15 min"
      }];
    ];
  },
  {}
    title: "AI Services",
    icon: HelpCircle,
    articles: []
      {}
        title: "Understanding AI Models",
        description: "Learn about different AI models and their applications",
        type: "Guide",
        readTime: "8 min"
      },
      {}
        title: "Integrating AI APIs",
        description: "How to integrate our AI services into your applications",
        type: "Tutorial",
        readTime: "20 min"
      },
      {}
        title: "AI Best Practices",
        description: "Tips and best practices for using AI effectively",
        type: "Guide",
        readTime: "12 min"
      }];
    ];
  },
  {}
    title: "Cloud Services",
    icon: MessageCircle,
    articles: []
      {}
        title: "Cloud Migration Guide",
        description: "Complete guide to migrating to our cloud platform",
        type: "Guide",
        readTime: "25 min"
      },
      {}
        title: "Managing Cloud Resources",
        description: "How to efficiently manage your cloud infrastructure",
        type: "Tutorial",
        readTime: "18 min"
      },
      {}
        title: "Security Best Practices",
        description: "Keep your cloud environment secure",
        type: "Guide",
        readTime: "15 min"
      }];
    ];
  },
  {}
    title: "Billing & Account",
    icon: FileText,
    articles: []
      {}
        title: "Understanding Your Bill",
        description: "Learn how to read and understand your billing statement",
        type: "Guide",
        readTime: "5 min"
      },
      {}
        title: "Payment Methods",
        description: "How to add and manage payment methods",
        type: "Tutorial",
        readTime: "8 min"
      },
      {}
        title: "Account Settings",
        description: "Manage your account preferences and settings",
        type: "Tutorial",
        readTime: "10 min"
      }];
    ];
  };
];

const HelpCenter: NextPage = () => {
  const faqCategories = [
    {
      title: 'Getting Started',
      icon: Book,
      questions: [
        {
          question: 'How do I get started with Zion Tech Group services?',
          answer: 'Getting started is easy! Simply contact us through our contact form or call us directly. We\'ll schedule a free consultation to understand your needs and provide a customized solution.'
        }, {
          question: 'What services do you offer?',
          answer: 'We offer comprehensive technology solutions including AI development, cloud migration, custom software development, digital transformation, and IT consulting services.'
        }, {
          question: 'How long does a typical project take?',
          answer: 'Project timelines vary based on complexity and scope. Simple projects may take 2-4 weeks, while complex enterprise solutions can take 6-12 months. We provide detailed timelines during the consultation phase.'
        }
      ]
    }, {
      title: 'Technical Support',
      icon: HelpCircle,
      questions: [
        {
          question: 'Do you provide ongoing technical support?',
          answer: 'Yes! We offer 24/7 technical support for all our clients. Our support team is available via phone, email, and live chat to assist with any technical issues.'
        }, {
          question: 'What is your response time for support requests?',
          answer: 'We guarantee response times of 2 hours for critical issues, 4 hours for high priority issues, and 24 hours for standard support requests.'
        }, {
          question: 'Do you offer training for new systems?',
          answer: 'Absolutely! We provide comprehensive training sessions for all new systems and technologies we implement. This includes user training, administrator training, and documentation.'
        }
      ]
    }, {
      title: 'Billing & Pricing',
      icon: FileText,
      questions: [
        {
          question: 'How do you structure your pricing?',
          answer: 'Our pricing is flexible and depends on project scope, complexity, and timeline. We offer fixed-price projects, hourly rates, and retainer agreements. Contact us for a customized quote.'
        }, {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for larger projects. We typically require a deposit upfront and then milestone-based payments throughout the project.'
        }, {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and corporate purchase orders. We also accept cryptocurrency payments for certain projects.'
        }
      ]
    }
  ];

  const supportOptions = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us directly for immediate assistance',
      contact: '+1 302 464 0950',
      availability: '24/7 Available'
    }, {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond quickly',
      contact: 'kleber@ziontechgroup.com',
      availability: 'Response within 2-4 hours'
    }, {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Business hours'
    }
  ];

  const resources = [
    {
      icon: Book,
      title: 'Documentation',
      description: 'Comprehensive guides and technical documentation',
      link: '/documentation'
    }, {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for common tasks',
      link: '/tutorials'
    }, {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      link: '/knowledge-base'
    }, {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and get peer support',
      link: '/community'
    }
  ];

  return (
    <MainLayout
      title="Help Center - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. Find answers to common questions, access documentation, and contact our support team."
      keywords="help center, support, FAQ, documentation, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <HelpCircle className="w-16 h-16 text-blue-400" />
            </div>
          </div>
        </div>
      </section>"
      <section className="py-12 bg-white">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-6xl mx-auto">"
</div>"
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">"
</h2>
            </h2>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">"
</div>
                <motion.a;
                  key={index};
                  href={link.href};
                  className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 hover:shadow-lg transition-all group"
                  whileHover={{ y: -2 }};
                >
</motion>"
                  <link.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:text-blue-700" />"
</link>"
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">"
</h3>
                  </h3>
                </motion.a>
              ))};
            </div>
          </div>
        </div>
      </section>"
      <section className="py-16">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-6xl mx-auto">"
</div>"
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">"
</h2>
            </h2>
            "
            <div className="space-y-6">"
</div>
                <motion.div;
                  key={categoryIndex};
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }};
                  animate={{ opacity: 1, y: 0 }};
                  transition={{ delay: categoryIndex * 0.1 }};
                >
</motion>
                  <button;
                    onClick={() => toggleCategory(category.title)};
</button>"
                    <div className="flex items-center gap-4">"
</div>"
                      <category.icon className="w-6 h-6 text-blue-600" />"
</category>"
                      <h3 className="text-xl font-semibold text-gray-900">"
</h3>
                      </h3>
                    </div>"
                      <ChevronDown className="w-5 h-5 text-gray-500" />"
</ChevronDown>"
                      <ChevronRight className="w-5 h-5 text-gray-500" />"
</ChevronRight>
                  </button>
                  
                  <AnimatePresence>
</AnimatePresence>
                      <motion.div;
                        initial={{ height: 0, opacity: 0 }};
                        animate={{ height: 'auto', opacity: 1 }}'
                        exit={{ height: 0, opacity: 0 }};
                        transition={{ duration: 0.3 }}'
                        className="overflow-hidden"
                      >
</motion>"
                        <div className="px-6 pb-6">"
</div>"
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">"
</div>
                              <motion.div;
                                key={articleIndex};
                                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                                whileHover={{ y: -2 }};
                              >
</motion>"
                                <div className="flex items-start justify-between mb-2">"
</div>"
                                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">"
</span>
                                  </span>"
                                  <span className="text-xs text-gray-500">"
</span>
                                  </span>
                                </div>"
                                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">"
</h4>
                                </h4>"
                                <p className="text-sm text-gray-600">"
</p>
                                </p>
                              </motion.div>
                            ))};
                          </div>
                        </div>
                      </motion.div>
                    )};
                  </AnimatePresence>
                </motion.div>
              ))};
            </div>
          </div>
        </div>
      </section>"
      <section className="py-16 bg-white">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-4xl mx-auto">"
</div>"
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">"
</h2>
            </h2>
            "
            <div className="space-y-6">"
</div>
                <motion.div;
                  key={index};
                  className="bg-gray-50 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }};
                  animate={{ opacity: 1, y: 0 }};
                  transition={{ delay: index * 0.1 }};
                >
</motion>"
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">"
</h3>
                  </h3>"
                  <p className="text-gray-600">"
</p>
                  </p>
                </motion.div>
              ))};
            </div>
          </div>
        </div>
      </section>"
      <section className="py-16 bg-blue-600">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-4xl mx-auto text-center">"
</div>"
            <h2 className="text-3xl font-bold text-white mb-6">"
</h2>
            </h2>"
            <p className="text-xl text-blue-100 mb-8">"
</p>
            </p>
            "
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">"
</div>"
              <div className="bg-white/10 rounded-lg p-6">"
</div>"
                <Mail className="w-8 h-8 text-white mx-auto mb-4" />"
</Mail>"
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>"
                <p className="text-blue-100 mb-4">Get help via email</p>"
                <a;"
                  href="mailto:support@ziontechgroup.com"
                  className="text-white hover:text-blue-200 font-medium"
                >
</a>
                </a>
              </div>
              "
              <div className="bg-white/10 rounded-lg p-6">"
</div>"
                <Phone className="w-8 h-8 text-white mx-auto mb-4" />"
</Phone>"
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>"
                <p className="text-blue-100 mb-4">Call us directly</p>"
                <a;"
                  href="tel:+15551234567"
                  className="text-white hover:text-blue-200 font-medium"
                >
</a>
                </a>
              </div>
              "
              <div className="bg-white/10 rounded-lg p-6">"
</div>"
                <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />"
</MessageCircle>"
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>"
                <p className="text-blue-100 mb-4">Chat with our team</p>"
                <button className="text-white hover:text-blue-200 font-medium">"
</button>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Support</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the support option that works best for you. Our team is here to help 24/7.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg text-center hover:bg-blue-50 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <option.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="text-blue-600 font-medium mb-2">{option.contact}</div>
                  <div className="text-sm text-gray-500">{option.availability}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find quick answers to the most common questions about our services and support.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className="mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources to help you succeed with our solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-50 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <resource.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                  <Link href={resource.link} className="text-blue-600 hover:text-blue-700 font-medium">
                    Access Resource →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="group">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors flex items-center gap-2">
                  Contact Support
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </Link>
              <Link href="tel:+13024640950" className="group">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-medium transition-colors flex items-center gap-2">
                  Call Now
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )};

export default HelpCenter;