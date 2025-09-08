
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import { 
  Search, HelpCircle, 
  MessageCircle, Phone, 
  Mail, BookOpen, 
  Video, FileText, 
  ChevronDown, ChevronRight,
  CheckCircle, ExternalLink
} from 'lucide-react'}

  ]}
  ];
;
  return (;
    <Layout;
      title="Help & Support - Zion Tech Group";
      description="Get help and support for Zion Tech Group services. Find answers to common questions, contact our support team, and access helpful resources.";
    >;
      {/* Hero Section */}


          </p>
        </div>
      </section>


              />

      ]
    }
  ];


    { title: 'Status Page', href: '/status', icon: CheckCircle }
  ];

  const contactMethods = [

      href: 'tel:+13024640950'
    }, {
      icon: Mail,
      title: 'Email Support', description: 'Send us a detailed message',
      contact: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com'
    }, {
      icon: MessageCircle, title: 'Live Chat',
      description: 'Chat with our support team', contact: 'Available 9 AM - 6 PM EST',
      href: '/contact'
    }
  ];

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle)};

  const helpCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      articles: [
        { title: "How to Get Started with Our Services", description: "Step-by-step guide to begin your technology journey" },
        { title: "Account Setup and Configuration", description: "Learn how to set up your account and configure settings" },
        { title: "Understanding Our Service Portfolio", description: "Overview of all available services and solutions" },
        { title: "Initial Consultation Process", description: "What to expect during your first consultation" }
      ]
    },
    {
      title: "Technical Support",
      icon: "🔧",
      articles: [
        { title: "Troubleshooting Common Issues", description: "Solutions to frequently encountered problems" },
        { title: "System Requirements and Compatibility", description: "Technical specifications and compatibility information" },
        { title: "Performance Optimization", description: "Tips for improving system performance" },
        { title: "Integration and API Documentation", description: "Technical documentation for integrations" }
      ]
    },
    {
      title: "Billing & Account",
      icon: "💳",
      articles: [
        { title: "Understanding Your Bill", description: "How to read and understand your service charges" },
        { title: "Payment Methods and Billing Cycles", description: "Available payment options and billing schedules" },
        { title: "Upgrading or Downgrading Services", description: "How to modify your service plan" },
        { title: "Cancellation and Refund Policy", description: "Information about service cancellation and refunds" }
      ]
    },
    {
      title: "Security & Privacy",
      icon: "🛡️",
      articles: [
        { title: "Security Best Practices", description: "Guidelines for maintaining security" },
        { title: "Data Privacy and Protection", description: "How we protect your data and privacy" },
        { title: "Two-Factor Authentication Setup", description: "How to enable 2FA for your account" },
        { title: "Reporting Security Issues", description: "How to report security concerns" }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help with Zion Tech Group services. Find answers to common questions, troubleshooting guides, and technical support resources." />
        <link rel="canonical" href="https://ziontechgroup.com/help" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Help & <span className="text-blue-600">Support</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Find answers to your questions, get technical support, and access helpful resources. 
                We&apos;re here to help you succeed with our technology solutions.'
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>


            </div>
          </div>
        </section>



                <p className="text-sm text-gray-500">{channel.responseTime}</p>

              </div>

            ))}
          </div>;
        </div>;
      </section>;


                <p className="text-gray-600 text-sm">{resource.description}</p>

              </Link>

            ))}
          </div>;
        </div>;
      </section>;


                  </h3>
                </Link>

              ))}
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Support</h2>
              <p className="text-lg text-gray-600">Get in touch with our support team</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="bg-white rounded-lg p-8 text-center hover: shadow-lg transition-shadow border border-gray-200"
                >
                  <method.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-blue-600 font-medium">{method.contact}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Find answers to common questions</p>
            </div>
            
            <div className="max-w-4xl mx-auto">

                  </button>
                  
                  {expandedCategory === category.title && (
                    <div className="mt-4 space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="bg-white border border-gray-200 rounded-lg p-6">
                          <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}


                </div>
              ))}
            </div>
          </div>
        </section>




            </Link>



            </Link>
          </div>
        </div>
      </section>


              Call Us

            </a>
          </div>
        </div>
      </section>
    </Layout>

              </Link>
              <Link href="/docs" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Documentation
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />


  );



