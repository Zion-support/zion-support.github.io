import React from 'react';''
import Link from 'next/link';''
import { motion } from 'framer-motion';'
import {
  // TODO: Implement
}
  Heart, 
  DollarSign, 
  Settings, 
  ShoppingCart, 
  BookOpen, 
  Building,
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  Cloud,
  Brain;'
} from 'lucide-react';''
import Layout from '../../components/Layout';'
const industries = [
  {'
    name: 'Healthcare',''
    description: 'Transform healthcare delivery with AI-powered diagnostics, telemedicine platforms, and patient management systems.','
    icon: Heart,'
    href: '/industries/healthcare',']'
    features: ['AI Diagnostics', 'Telemedicine', 'Patient Management', 'HIPAA Compliance'],''
    color: 'from-red-500 to-pink-500''
  },
  {'
    name: 'Finance',''
    description: 'Secure financial services with blockchain technology, fraud detection, and automated trading systems.','
    icon: DollarSign,'
    href: '/industries/finance',''
    features: ['Blockchain Solutions', 'Fraud Detection', 'Trading Systems', 'Regulatory Compliance'],''
    color: 'from-green-500 to-emerald-500''
  },
  {'
    name: 'Manufacturing',''
    description: 'Optimize production with IoT sensors, predictive maintenance, and smart factory solutions.','
    icon: Settings,'
    href: '/industries/manufacturing',''
    features: ['IoT Integration', 'Predictive Maintenance', 'Smart Factories', 'Quality Control'],''
    color: 'from-blue-500 to-cyan-500''
  },
  {'
    name: 'Retail',''
    description: 'Enhance customer experience with personalized recommendations, inventory management, and omnichannel solutions.','
    icon: ShoppingCart,'
    href: '/industries/retail',''
    features: ['Personalization', 'Inventory Management', 'Omnichannel', 'Customer Analytics'],''
    color: 'from-purple-500 to-violet-500''
  },
  {'
    name: 'Education',''
    description: 'Revolutionize learning with AI tutoring, virtual classrooms, and personalized education platforms.','
    icon: BookOpen,'
    href: '/industries/education',''
    features: ['AI Tutoring', 'Virtual Classrooms', 'Personalized Learning', 'Assessment Tools'],''
    color: 'from-orange-500 to-yellow-500''
  },
  {'
    name: 'Government',''
    description: 'Modernize public services with secure citizen portals, data analytics, and digital transformation.','
    icon: Building,'
    href: '/industries/government',''
    features: ['Citizen Portals', 'Data Analytics', 'Digital Services', 'Security Compliance'],''
    color: 'from-gray-500 to-slate-500''
  }
];

const stats = ['
  { number: '500+', label: 'Industry Projects' },''
  { number: '50+', label: 'Fortune 500 Clients' },''
  { number: '99.9%', label: 'Uptime Guarantee' },''
  { number: '24/7', label: 'Industry Support' }']
];

export default function IndustriesPage() {
  return (
    <Layout;'
      title="Industry Solutions - Zion Tech Group"""
      description="Specialized technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors."""
      keywords="industry solutions, healthcare technology, fintech, manufacturing IoT, retail technology, education technology, government services""
    >
</Layout>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
</div>"
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">"
</section>"
          <div className="absolute inset-0">"
</div>"
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>""
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>""
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>"
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
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>"
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">"
</Link>
                </Link>"
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">"
</Link>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>"
        <section className="py-20 bg-gray-50">"
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>"
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">"
</p>
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
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
</motion>
                    <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
</div>"
                      <IconComponent className="w-8 h-8 text-white" />"
</IconComponent>
                    </div>
                    "
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">"
</h3>
                    </h3>
                    "
                    <p className="text-gray-600 mb-6 leading-relaxed">"
</p>
                    </p>
                    "
                    <div className="mb-6">"
</div>"
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Solutions:</h4>""
                      <div className="flex flex-wrap gap-2">"
</div>
                          <span;
                            key={idx}"
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full""
                          >
</span>
                          </span>
                      </div>
                    </div>
                    
                    <Link;
                      href={industry.href}"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors""
                    >
</Link>
                      <span>Learn More</span>"
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />"
</ArrowRight>
                    </Link>
                  </motion.div>)
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>"
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">"
</p>
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
</div>
              <motion.div;"
                className="text-center p-8""
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
</motion>"
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">"
</div>"
                  <Users className="w-8 h-8 text-blue-600" />"
</Users>
                </div>"
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>""
                <p className="text-gray-600">"
</p>
                </p>
              </motion.div>

              <motion.div;"
                className="text-center p-8""
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
</motion>"
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">"
</div>"
                  <Shield className="w-8 h-8 text-green-600" />"
</Shield>
                </div>"
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance & Security</h3>""
                <p className="text-gray-600">"
</p>
                </p>
              </motion.div>

              <motion.div;"
                className="text-center p-8""
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
</motion>"
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">"
</div>"
                  <Cloud className="w-8 h-8 text-purple-600" />"
</Cloud>
                </div>"
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>""
                <p className="text-gray-600">"
</p>
                </p>
              </motion.div>
            </div>
          </div>
        </section>"
        <section className="py-20 bg-gray-50">"
</section>"
          <div className="container mx-auto px-4">"
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
</div>"
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">"
</Link>
                </Link>"
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">"
</Link>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>"