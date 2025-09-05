import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
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
  ChevronRight
} from 'lucide-react';
const helpCategories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    articles: [
      {
        title: "Welcome to Zion Tech Group",
        description: "Learn the basics of our platform and services",
        type: "Guide",
        readTime: "5 min"
      },
      {"
        title: "Setting Up Your Account"
        description: "Step-by-step guide to create and configure your account"
        type: "Tutorial"
        readTime: "10 min""
      },
      {"
        title: "First Steps with AI Services"
        description: "How to get started with our AI solutions"
        type: "Tutorial"
        readTime: "15 min""
      }]
    ]
  },
  {"
    title: "AI Services",
    icon: HelpCircle,
    articles: [
      {"
        title: "Understanding AI Models"
        description: "Learn about different AI models and their applications"
        type: "Guide"
        readTime: "8 min""
      },
      {"
        title: "Integrating AI APIs"
        description: "How to integrate our AI services into your applications"
        type: "Tutorial"
        readTime: "20 min""
      },
      {"
        title: "AI Best Practices"
        description: "Tips and best practices for using AI effectively"
        type: "Guide"
        readTime: "12 min""
      }]
    ]
  },
  {"
    title: "Cloud Services",
    icon: MessageCircle,
    articles: [
      {"
        title: "Cloud Migration Guide"
        description: "Complete guide to migrating to our cloud platform"
        type: "Guide"
        readTime: "25 min""
      },
      {"
        title: "Managing Cloud Resources"
        description: "How to efficiently manage your cloud infrastructure"
        type: "Tutorial"
        readTime: "18 min""
      },
      {"
        title: "Security Best Practices"
        description: "Keep your cloud environment secure"
        type: "Guide"
        readTime: "15 min""
      }]
    ]
  },
  {"
    title: "Billing & Account",
    icon: FileText,
    articles: [
      {"
        title: "Understanding Your Bill"
        description: "Learn how to read and understand your billing statement"
        type: "Guide"
        readTime: "5 min""
      },
      {"
        title: "Payment Methods"
        description: "How to add and manage payment methods"
        type: "Tutorial"
        readTime: "8 min""
      },
      {"
        title: "Account Settings"
        description: "Manage your account preferences and settings"
        type: "Tutorial"
        readTime: "10 min""
      }]
    ]
  }
];

const quickLinks = [
  { title: 'API Documentation', href: '/docs/api' },
  { title: 'Video Tutorials', href: '/tutorials' },
  { title: 'Download Resources', href: '/downloads' },
  { title: 'Community Forum', href: '/community' }
]

const faqs = [
  {"
    question: "How do I get started with your AI services?"
    answer: "Getting started is easy! First, create an account, then choose a plan that fits your needs. You can start with our free trial to explore our AI capabilities before committing to a paid plan.""
  },
  {"
    question: "What programming languages do you support?"
    answer: "We support all major programming languages including Python, JavaScript, Java, C#, Go, and more. Our APIs are language-agnostic and can be integrated with any technology stack.""
  },
  {"
    question: "How secure is my data?"
    answer: "Security is our top priority. We use enterprise-grade encryption, comply with industry standards like SOC 2 and GDPR, and implement strict access controls to protect your data.""
  },
  {"
    question: "Can I cancel my subscription anytime?"
    answer: "Yes, you can cancel your subscription at any time. There are no cancellation fees, and you'll continue to have access to your services until the end of your current billing period.""
  }]
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');'
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
</string>'
    <div className="min-h-screen bg-gray-50">"
</div>
      <Head>
</Head>
        <title>Help Center - Zion Tech Group</title>"
        <meta name="description" content="Get help with Zion Tech Group services. Find guides, tutorials, and support resources." />"
</meta>
      </$1>
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">"
</section>
        <div className="container mx-auto px-4">"
</div>
          <div className="max-w-4xl mx-auto text-center">"
</div>
            <HelpCircle className="w-16 h-16 mx-auto mb-6" />"
</$1>
            <h1 className="text-5xl font-bold mb-6">"
</h1>
            </h1>
            <p className="text-xl text-blue-100 mb-8">"
</p>
            </p>
            <div className="relative max-w-2xl mx-auto">"
</div>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
</Search>
              <input;"
                type="text"""
                placeholder="Search for help articles, guides, and tutorials...""
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
</input>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">"
</section>
        <div className="container mx-auto px-4">"
</div>
          <div className="max-w-6xl mx-auto">"
</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">"
</h2>
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">"
</div>
                <motion.a,
                  key={index}
                  href={link.href}"
                  className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 hover:shadow-lg transition-all group"
                  whileHover={{ y: -2 }}
                >
</motion>"
                  <link.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:text-blue-700" />"
</link>"
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">"
</h3>
                  </h3>
                </motion.a>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="py-16">"
</section>
        <div className="container mx-auto px-4">"
</div>
          <div className="max-w-6xl mx-auto">"
</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">"
</h2>
            </h2>
            "
            <div className="space-y-6">"
</div>
                <motion.div;
                  key={categoryIndex}"
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
</motion>
                  <button;
                    onClick={() => toggleCategory(category.title)}
</button>"
                    <div className="flex items-center gap-4">"
</div>
                      <category.icon className="w-6 h-6 text-blue-600" />"
</category>"
                      <h3 className="text-xl font-semibold text-gray-900">"
</h3>
                      </h3>
                    </div>
                      <ChevronDown className="w-5 h-5 text-gray-500" />"
</$1>
                      <ChevronRight className="w-5 h-5 text-gray-500" />"
</ChevronRight>
                  </button>
                  
                  <AnimatePresence>
</AnimatePresence>
                      <motion.div;
                        initial={{ height: 0, opacity: 0 }}"
                        animate={{ height: 'auto', opacity: 1 }}'
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}'
                        className="overflow-hidden"
                      >
</motion>"
                        <div className="px-6 pb-6">"
</div>
                          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">"
</div>
                              <motion.div,
                                key={articleIndex}"
                                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                                whileHover={{ y: -2 }}
                              >
</motion>"
                                <div className="flex items-start justify-between mb-2">"
</div>
                                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">"
</span>
                                  </span>
                                  <span className="text-xs text-gray-500">"
</span>
                                  </span>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">"
</h4>
                                </h4>"
                                <p className="text-sm text-gray-600">"
</p>
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">"
</section>
        <div className="container mx-auto px-4">"
</div>
          <div className="max-w-4xl mx-auto">"
</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">"
</h2>
            </h2>
            "
            <div className="space-y-6">"
</div>
                <motion.div;
                  key={index}"
                  className="bg-gray-50 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
</motion>"
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">"
</h3>
                  </h3>
                  <p className="text-gray-600">"
</p>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-blue-600">"
</section>
        <div className="container mx-auto px-4">"
</div>
          <div className="max-w-4xl mx-auto text-center">"
</div>
            <h2 className="text-3xl font-bold text-white mb-6">"
</h2>
            </h2>
            <p className="text-xl text-blue-100 mb-8">"
</p>
            </p>
            "
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6">"
</div>
              <div className="bg-white/10 rounded-lg p-6">"
</div>
                <Mail className="w-8 h-8 text-white mx-auto mb-4" />"
</$1>
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-blue-100 mb-4">Get help via email</p>
                <a,"
                  href="mailto:support@ziontechgroup.com"
                  className="text-white hover:text-blue-200 font-medium"
                >
</a>
                </a>
              </div>
              "
              <div className="bg-white/10 rounded-lg p-6">"
</div>
                <Phone className="w-8 h-8 text-white mx-auto mb-4" />"
</$1>
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-blue-100 mb-4">Call us directly</p>
                <a,"
                  href="tel:+15551234567"
                  className="text-white hover:text-blue-200 font-medium"
                >
</a>
                </a>
              </div>
              "
              <div className="bg-white/10 rounded-lg p-6">"
</div>
                <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />"
</$1>
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-blue-100 mb-4">Chat with our team</p>
                <button className="text-white hover:text-blue-200 font-medium">"
</button>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
}