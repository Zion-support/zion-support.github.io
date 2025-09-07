import React from 'react';''
import Head from 'next/head';''
import Link from 'next/link';''
import { motion } from 'framer-motion';''
import MainLayout from '../components/layout/MainLayout';'
import {
  // TODO: Implement
}
  Video, 
  Palette, 
  QrCode, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin;'
} from 'lucide-react';'
const microSaasServices = [
  {'
    title: 'Video Analytics Platform',''
    description: 'AI-powered video analysis for business insights and security monitoring.','
    icon: Video,]'
    features: ['Real-time analysis', 'Object detection', 'Behavior tracking', 'Custom dashboards'],''
    price: '$299/month',''
    benefits: ['Enhanced security', 'Business insights', 'Automated monitoring', 'Cost savings']'
  },
  {'
    title: 'Design System Builder',''
    description: 'Create and manage consistent design systems for your products.','
    icon: Palette,'
    features: ['Component library', 'Style guide', 'Version control', 'Team collaboration'],''
    price: '$199/month',''
    benefits: ['Consistent design', 'Faster development', 'Team efficiency', 'Brand consistency']'
  },
  {'
    title: 'QR Code Generator Pro',''
    description: 'Advanced QR code generation and analytics for marketing campaigns.','
    icon: QrCode,'
    features: ['Custom designs', 'Analytics tracking', 'Bulk generation', 'API integration'],''
    price: '$99/month',''
    benefits: ['Marketing insights', 'Easy tracking', 'Professional appearance', 'Scalable solution']'
  }
];
export default function MicroSAASPage() {
  return (
    <MainLayout;'
      title="Micro SaaS Services - Zion Tech Group"""
      description="Specialized micro SaaS solutions for modern businesses. Streamlined, focused, and powerful tools."""
      keywords="micro SaaS, specialized tools, business solutions, video analytics, design systems, QR codes""
    >
</MainLayout>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
</div>"
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
</h1>
              </h1>"
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">"
</p>
              </p>
            </motion.div>
          </div>
        </section>"
        <section className="py-20 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center mb-16""
            >
</motion>"
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Micro SaaS Solutions</h2>""
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
</p>
              </p>
            </motion.div>
"
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
</div>
                  <motion.div;
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}"
                    className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300""
                  >
</motion>"
                    <div className="flex items-center mb-4">"
</div>"
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">"
</div>"
                        <IconComponent className="w-6 h-6 text-blue-600" />"
</IconComponent>
                      </div>
                      <div>
</div>"
                        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>""
                        <p className="text-2xl font-bold text-blue-600">{service.price}</p>"
                      </div>
                    </div>
                    "
                    <p className="text-gray-600 mb-6">{service.description}</p>""
                    <div className="mb-6">"
</div>"
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>""
                      <ul className="space-y-1">"
</ul>"
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
</li>"
                            <CheckCircle className="w-3 h-3 mr-2 text-green-500" />"
</CheckCircle>
                          </li>
                      </ul>
                    </div>
                    "
                    <div className="mb-6">"
</div>"
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>""
                      <ul className="space-y-1">"
</ul>"
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">"
</li>"
                            <CheckCircle className="w-3 h-3 mr-2 text-green-500" />"
</CheckCircle>
                          </li>
                      </ul>
                    </div>
                    "
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">"
</button>
                    </button>
                  </motion.div>)
                );
              })}
            </div>
          </div>
        </section>"
        <section className="py-20 bg-gray-50">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center""
            >
</motion>"
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>""
              <p className="text-xl text-gray-600 mb-8">"
</p>
              </p>
              "
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">"
</div>"
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">"
</div>"
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">"
</div>"
                    <Phone className="w-8 h-8 text-blue-600" />"
</Phone>
                  </div>"
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>""
                  <p className="text-gray-600 mb-4">Call us for immediate assistance</p>""
                  <a href="tel:+13024640950" className="text-blue-600 font-semibold hover:text-blue-800">"
</a>
                  </a>
                </div>
"
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">"
</div>"
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">"
</div>"
                    <Mail className="w-8 h-8 text-green-600" />"
</Mail>
                  </div>"
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>""
                  <p className="text-gray-600 mb-4">Send us a message anytime</p>""
                  <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 font-semibold hover:text-green-800">"
</a>
                  </a>
                </div>
"
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">"
</div>"
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">"
</div>"
                    <MapPin className="w-8 h-8 text-purple-600" />"
</MapPin>
                  </div>"
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>""
                  <p className="text-gray-600 mb-4">Visit our office</p>""
                  <p className="text-purple-600 font-semibold">"
</p>
                    364 E Main St STE 1008<br />
</br>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>"
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">"
</section>"
          <div className="container mx-auto px-4 text-center">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>""
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">"
</p>
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>"
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">"
</Link>
                </Link>"
                <Link href="/ai-services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">"
</Link>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>"