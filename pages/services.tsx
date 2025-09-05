import React from 'react';''
import Link from 'next/link';''
import { motion } from 'framer-motion';'
import {
  // TODO: Implement
}
  Brain, 
  Shield, 
  Cloud, 
  CheckCircle, 
  Star, 
  Zap, 
  ArrowRight,
  Users,
  Target,
  Award;'
} from 'lucide-react';''
import Layout from '../components/Layout';'
const services = [
  {'
    title: "AI Services",""
    description: "Cutting-edge artificial intelligence solutions including machine learning, natural language processing, computer vision, and predictive analytics.","
    icon: Brain,"
    href: "/ai-services","]"
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "Chatbots & Virtual Assistants", "Data Mining", "Pattern Recognition", "Automated Decision Making"],""
    pricing: "Custom Pricing",""
    count: "25+ Solutions","
    popular: true;
  },
  {"
    title: "IT Services",""
    description: "Comprehensive information technology services including cloud infrastructure, cybersecurity, network management, and system administration.","
    icon: Shield,"
    href: "/it-services",""
    features: ["Cloud Infrastructure", "Cybersecurity", "Network Management", "System Administration", "Database Management", "Backup & Recovery", "Performance Optimization", "Security Audits"],""
    pricing: "Starting at $99/month",""
    count: "35+ Services","
    popular: true;
  },
  {"
    "title": "Micro SaaS",""
    "description": "Innovative software as a service solutions including AI-powered tools, blockchain applications, smart energy management, and specialized business automation platforms.",""
    "icon": Cloud,""
    "href": "/micro-saas",""
    "features": ["AI-Powered Tools", "Blockchain Analytics", "Smart Energy Management", "Voice AI Assistants", "Predictive Maintenance", "Smart Contracts", "Green Technology", "Advanced Automation"],""
    "pricing": "Starting at $29/month",""
    "count": "45+ Products",""
    "popular": true;"
  }
];

const benefits = [
  {
    icon: CheckCircle,"
    title: "Expert Team",""
    description: "50+ certified professionals with years of experience""
  },
  {
    icon: Star,"
    title: "Proven Results",""
    description: "500+ successful projects delivered""
  },
  {
    icon: Zap,"
    title: "Fast Delivery",""
    description: "Agile development with rapid deployment""
  },
  {
    icon: Shield,"
    title: "24/7 Support",""
    description: "Round-the-clock technical support""
  }]
];

const benefits = [
  {
    icon: CheckCircle,"
    title: "Expert Team",""
    description: "50+ certified professionals with years of experience""
  },
  {
    icon: Star,"
    title: "Proven Results",""
    description: "500+ successful projects delivered""
  },
  {
    icon: Zap,"
    title: "Fast Delivery",""
    description: "Agile development with rapid deployment""
  },
  {
    icon: Shield,"
    title: "24/7 Support",""
    description: "Round-the-clock technical support""
  }]
];

const benefits = [
  {
    icon: CheckCircle,"
    title: "Expert Team",""
    description: "50+ certified professionals with years of experience""
  },
  {
    icon: Star,"
    title: "Proven Results",""
    description: "500+ successful projects delivered""
  },
  {
    icon: Zap,"
    title: "Fast Delivery",""
    description: "Agile development with rapid deployment""
  },
  {
    icon: Shield,"
    title: "24/7 Support",""
    description: "Round-the-clock technical support""
  }]
];

const stats = ["
  { number: '500+', label: 'Projects Completed' },''
  { number: '50+', label: 'Expert Team Members' },''
  { number: '99.9%', label: 'Uptime Guarantee' },''
  { number: '24/7', label: 'Support Available' }']
];

export default function ServicesPage() {
  return ('
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
</div>
                  <Head>
</Head>
                  <title>Our Services - Zion Tech Group</title>"
                  <meta name="description" content="Comprehensive technology solutions including AI services, IT services, and Micro SaaS solutions. Expert team delivering innovative results." />"
</meta>"
                  <meta name="keywords" content="AI services, IT services, Micro SaaS, cloud solutions, technology consulting" />"
</meta>
                  </Head>"
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">"
</section>"
        <div className="absolute inset-0">"
</div>"
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>""
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>"
        </div>
"
        <div className="container mx-auto px-4 relative z-10">"
</div>
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="text-center""
          >
</motion>"
            <h1 className="text-4xl md:text-6xl font-bold mb-6">"
</h1>"
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">"
</span>
              </span>
            </h1>"
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">"
</p>
            </p>
          </motion.div>
        </div>
      </section>"
      <section className="py-20 bg-gray-50">"
</section>"
        <div className="container mx-auto px-4">"
</div>
          <motion.div;"
            className="text-center mb-12 md:mb-16""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
</motion>"
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">"
</h2>
            </h2>"
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">"
</p>
            </p>
                  </motion.div>"
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">"
</div>
                <motion.div;
                  key={index}"
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
</motion>"
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">"
</div>"
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">"
</span>
                      </span>
                  </div>"
                  <div className="text-blue-600 mb-6 group-hover:text-purple-600 transition-colors">"
</div>"
                    <IconComponent className="w-12 h-12" />"
</IconComponent>
                  </div>"
                  <div className="flex items-center justify-between mb-4">"
</div>"
                  <h3 className="text-2xl font-bold text-gray-900">"
</h3>
                    </h3>"
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">"
</span>
                    </span>
                  </div>"
                  <p className="text-gray-600 mb-6 leading-relaxed">"
</p>
                  </p>"
                  <div className="mb-6">"
</div>"
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>""
                    <ul className="space-y-2">"
</ul>"
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
</li>"
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />"
</CheckCircle>
                        </li>
                    </ul>
                  </div>"
                  <div className="mb-6">"
</div>"
                  <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>"
                  </div>
                  <Link;
                    href={service.href}"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center group""
                  >
</Link>
                    <span>Learn More</span>"
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />"
</ArrowRight>
                  </Link>
                  </motion.div>)
              );
            })}
    <Layout;"
      title="Services - Zion Tech Group"""
      description="Comprehensive technology services including AI solutions, IT services, and Micro SaaS applications to transform your business."""
      keywords="AI services, IT services, micro SaaS, cloud computing, technology consulting, software development""
    >
</Layout>"
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
        <section className="py-20 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="max-w-6xl mx-auto">"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
</div>
                <motion.div;
                  key={index}"
                  className="text-center""
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
</motion>"
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
</div>"
                  <IconComponent className="w-8 h-8 text-blue-600" />"
</IconComponent>
                  </div>"
                  <h3 className="text-xl font-bold text-gray-900 mb-2">"
</h3>
                  </h3>"
                  <p className="text-gray-600">"
</p>
                  </p>
                  </motion.div>
              );
            })}
          </div>
        </div>
      </section>
"
                      <div className="mb-6">"
</div>"
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>""
                        <ul className="space-y-2">"
</ul>"
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
</li>"
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />"
</CheckCircle>
                            </li>
                        </ul>
                      </div>

                      <Link;
                        href={service.href}"
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center justify-center""
                      >
</Link>"
                        <ArrowRight className="w-4 h-4 ml-2" />"
</ArrowRight>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>"
        <section className="py-20 bg-gray-50">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="max-w-6xl mx-auto">"
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
</div>
                    <motion.div;
                      key={index}"
                      className="text-center p-6""
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
</motion>"
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
</div>"
                        <IconComponent className="w-8 h-8 text-blue-600" />"
</IconComponent>
                      </div>"
                      <h3 className="text-xl font-bold text-gray-900 mb-3">"
</h3>
                      </h3>"
                      <p className="text-gray-600">"
</p>
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>"
        <section className="py-20 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="max-w-4xl mx-auto">"
</div>"
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">"
</div>
                  <motion.div;
                    key={index}"
                    className="text-center""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
</motion>"
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">"
</div>
                    </div>"
                    <div className="text-gray-600 font-medium">{stat.label}</div>"
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>"
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
</section>"
          <div className="container mx-auto px-4 text-center">"
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
              <p className="text-xl mb-8 max-w-2xl mx-auto">"
</p>
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>
                <Link;"
                  href="/contact"""
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold""
                >
</Link>
                </Link>
                <Link;"
                  href="/about"""
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold""
                >
</Link>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
                  </div>
                  </section>"
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
</section>"
<div className="container mx-auto px-4 text-center">"
</div>
                  <motion.div;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
</motion>"
<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>""
            <p className="text-xl mb-8 max-w-2xl mx-auto">"
</p>
            </p>"
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>"
                  <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">"
</Link>
              </Link>"
                  <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">"
</Link>
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>
                  </div>"