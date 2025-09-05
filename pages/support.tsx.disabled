import React, { useState } from 'react';''
import MainLayout from '../components/layout/MainLayout';''
import Link from 'next/link';''
import { motion } from 'framer-motion';'
import {
  // TODO: Implement
}
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Search,
  HelpCircle,
  FileText,
  Video,
  BookOpen,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Code;'
} from 'lucide-react';'
const supportChannels = [
  {'
    title: "Live Chat",""
    description: "Get instant help from our support team","
    icon: MessageCircle,"
    availability: "24/7",""
    responseTime: "< 2 minutes",""
    color: "from-blue-500 to-blue-600""
  },
  {"
    title: "Phone Support",""
    description: "Speak directly with our technical experts","
    icon: Phone,"
    availability: "Mon-Fri 9AM-6PM EST",""
    responseTime: "Immediate",""
    color: "from-green-500 to-green-600""
  },
  {"
    title: "Email Support",""
    description: "Send us detailed questions and get comprehensive answers","
    icon: Mail,"
    availability: "24/7",""
    responseTime: "< 4 hours",""
    color: "from-purple-500 to-purple-600""
  }]
];

const supportTopics = [
  {"
    title: "Technical Issues",""
    description: "Problems with our services, APIs, or integrations","
    icon: Zap,
    articles: 25,"
    color: "from-red-500 to-red-600""
  },
  {"
    title: "Account & Billing",""
    description: "Account management, billing questions, and payments","
    icon: Users,
    articles: 15,"
    color: "from-blue-500 to-blue-600""
  },
  {"
    title: "Getting Started",""
    description: "Onboarding guides and getting started tutorials","
    icon: BookOpen,
    articles: 20,"
    color: "from-green-500 to-green-600""
  },
  {"
    title: "API & Integration",""
    description: "API documentation, integration guides, and examples","
    icon: FileText,
    articles: 30,"
    color: "from-purple-500 to-purple-600""
  }]
];

const faqItems = [
  {"
    question: "How do I get started with your services?",""
    answer: "Getting started is easy! Contact our team for a free consultation, and we'll help you choose the right solution for your needs. We'll guide you through the entire onboarding process.""
  },
  {"
    question: "What are your support hours?",""
    answer: "We offer 24/7 support through live chat and email. Phone support is available Monday through Friday, 9 AM to 6 PM EST. Enterprise clients have dedicated support channels.""
  },
  {"
    question: "How quickly do you respond to support requests?",""
    answer: "Response times vary by channel: Live chat responses are typically under 2 minutes, email responses within 4 hours, and phone support is immediate during business hours.""
  },
  {"
    question: "Do you provide training for your services?",""
    answer: "Yes! We offer comprehensive training programs including documentation, video tutorials, webinars, and hands-on workshops to help you get the most out of our services.""
  }]
];

const resources = [
  {"
    title: "Documentation",""
    description: "Comprehensive guides and technical documentation","
    icon: FileText,"
    href: "/docs",""
    count: "50+ articles""
  },
  {"
    title: "Video Tutorials",""
    description: "Step-by-step video guides and walkthroughs","
    icon: Video,"
    href: "/tutorials",""
    count: "25+ videos""
  },
  {"
    title: "API Reference",""
    description: "Complete API documentation with examples","
    icon: Code,"
    href: "/api-docs",""
    count: "15+ APIs""
  },
  {"
    title: "Community Forum",""
    description: "Connect with other users and get peer support","
    icon: Users,"
    href: "/community",""
    count: "500+ members""
  }]
];

export default function SupportPage() {"
  const [searchQuery, setSearchQuery] = useState('');''
  const [selectedTopic, setSelectedTopic] = useState('');'
  return (
    <MainLayout;'
      title="Support - Zion Tech Group"""
      description="Get help and support for Zion Tech Group services. Live chat, phone support, documentation, and comprehensive resources.""
    >
</MainLayout>"
      <div className="min-h-screen bg-gray-50">"
</div>"
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center max-w-4xl mx-auto""
            >
</motion>"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">"
</h1>"
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">"
</span>
                </span>
              </h1>"
              <p className="text-xl md:text-2xl text-gray-300 mb-8">"
</p>
              </p>
            </motion.div>
          </div>
        </section>"
        <section className="py-12 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="max-w-4xl mx-auto">"
</div>
              <motion.div;"
                className="text-center mb-8""
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
</motion>"
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Search Support</h2>""
                <p className="text-gray-600">Find answers quickly with our search functionality</p>"
              </motion.div>
"
              <div className="relative">"
</div>"
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
</Search>
                <input;"
                  type="text"""
                  placeholder="Search for help articles, guides, or solutions...""
                  value={searchQuery})
                  onChange={(e) => setSearchQuery(e.target.value)}
</input>
              </div>
            </div>
          </div>
        </section>"
        <section className="py-20">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;"
              className="text-center mb-16""
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>"
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">"
</p>
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
</div>
                  <motion.div;
                    key={index}"
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
</motion>"
                    <div className="text-center">"
</div>
                      <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
</div>"
                        <IconComponent className="w-8 h-8 text-white" />"
</IconComponent>
                      </div>"
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">"
</h3>
                      </h3>"
                      <p className="text-gray-600 mb-6">"
</p>
                      </p>"
                      <div className="space-y-2 mb-6">"
</div>"
                        <div className="flex items-center justify-center text-sm text-gray-500">"
</div>"
                          <Clock className="w-4 h-4 mr-2" />"
</Clock>
                        </div>"
                        <div className="flex items-center justify-center text-sm text-gray-500">"
</div>"
                          <Zap className="w-4 h-4 mr-2" />"
</Zap>
                        </div>
                      </div>"
                      <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">"
</button>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>"
        <section className="py-20 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;"
              className="text-center mb-16""
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>"
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">"
</p>
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">"
</div>
                  <motion.div;
                    key={index}"
                    className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer group""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedTopic(topic.title)}
</motion>"
                    <div className="flex items-center mb-4">"
</div>
                      <div className={`w-12 h-12 bg-gradient-to-r ${topic.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
</div>"
                        <IconComponent className="w-6 h-6 text-white" />"
</IconComponent>
                      </div>
                      <div>
</div>"
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">"
</h3>
                        </h3>"
                        <p className="text-sm text-gray-500">"
</p>
                        </p>
                      </div>
                    </div>"
                    <p className="text-gray-600 text-sm">"
</p>
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>"
        <section className="py-20">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;"
              className="text-center mb-16""
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>"
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">"
</p>
              </p>
            </motion.div>
"
            <div className="max-w-4xl mx-auto">"
</div>"
              <div className="space-y-6">"
</div>
                  <motion.div;
                    key={index}"
                    className="bg-white p-6 rounded-lg shadow-md""
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
</motion>"
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">"
</h3>
                    </h3>"
                    <p className="text-gray-600 leading-relaxed">"
</p>
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>"
        <section className="py-20 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;"
              className="text-center mb-16""
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>"
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">"
</p>
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">"
</div>
                  <motion.div;
                    key={index}"
                    className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
</motion>"
                    <div className="text-center">"
</div>"
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">"
</div>"
                        <IconComponent className="w-6 h-6 text-white" />"
</IconComponent>
                      </div>"
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">"
</h3>
                      </h3>"
                      <p className="text-gray-600 text-sm mb-3">"
</p>
                      </p>"
                      <div className="text-xs text-gray-500 mb-4">"
</div>
                      </div>
                      <Link;
                        href={resource.href}"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm""
                      >
</Link>
                        <span>Explore</span>"
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />"
</ArrowRight>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>"
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="max-w-4xl mx-auto text-center">"
</div>
              <motion.div;
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
</motion>"
                <h2 className="text-3xl md:text-4xl font-bold mb-6">"
</h2>
                </h2>"
                <p className="text-xl text-blue-100 mb-8">"
</p>
                </p>
                "
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
</div>"
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">"
</div>"
                    <Phone className="w-8 h-8 text-white mx-auto mb-4" />"
</Phone>"
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>""
                    <p className="text-blue-100 mb-4">+1 302 464 0950</p>""
                    <p className="text-sm text-blue-200">Mon-Fri 9AM-6PM EST</p>"
                  </div>
                  "
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">"
</div>"
                    <Mail className="w-8 h-8 text-white mx-auto mb-4" />"
</Mail>"
                    <h3 className="text-lg font-semibold mb-2">Email</h3>""
                    <p className="text-blue-100 mb-4">kleber@ziontechgroup.com</p>""
                    <p className="text-sm text-blue-200">24/7 Support</p>"
                  </div>
                  "
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">"
</div>"
                    <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />"
</MessageCircle>"
                    <h3 className="text-lg font-semibold mb-2">Live Chat</h3>""
                    <p className="text-blue-100 mb-4">Available Now</p>""
                    <p className="text-sm text-blue-200">Instant Response</p>"
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>"