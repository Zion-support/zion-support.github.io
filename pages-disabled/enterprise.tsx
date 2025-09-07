import Head from 'next/head';''
import Link from 'next/link';''
import { motion } from 'framer-motion';'
import {
  // TODO: Implement
}
  Building, 
  Users, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Globe,
  Database,
  Lock;'
} from 'lucide-react';''
import MainLayout from '../components/layout/MainLayout';'
const features = [
  {
    icon: Building,'
    title: 'Scalable Architecture',''
    description: 'Enterprise-grade solutions designed to scale with your business growth and requirements.''
  },
  {
    icon: Shield,'
    title: 'Security & Compliance',''
    description: 'Comprehensive security measures and compliance with industry standards and regulations.''
  },
  {
    icon: Users,'
    title: 'Team Collaboration',''
    description: 'Advanced collaboration tools and workflows to enhance team productivity and communication.''
  },
  {
    icon: Zap,'
    title: 'Performance Optimization',''
    description: 'High-performance solutions optimized for speed, reliability, and efficiency.'']
];

const solutions = [
  {'
    title: 'Enterprise Resource Planning',''
    description: 'Comprehensive ERP solutions integrating all business processes and departments.',']'
    features: ['Financial Management', 'Supply Chain', 'Human Resources', 'Customer Relations'],''
    pricing: 'Starting at $50,000''
  },
  {'
    title: 'Customer Relationship Management',''
    description: 'Advanced CRM systems to manage customer relationships and sales processes.',''
    features: ['Lead Management', 'Sales Pipeline', 'Customer Analytics', 'Marketing Automation'],''
    pricing: 'Starting at $25,000''
  },
  {'
    title: 'Business Intelligence',''
    description: 'Data analytics and reporting solutions for informed business decision making.',''
    features: ['Data Visualization', 'Real-time Dashboards', 'Predictive Analytics', 'Custom Reports'],''
    pricing: 'Starting at $30,000''
  },
  {'
    title: 'Cloud Migration',''
    description: 'Seamless migration of enterprise systems to cloud infrastructure.',''
    features: ['Infrastructure Migration', 'Data Migration', 'Security Implementation', 'Performance Optimization'],''
    pricing: 'Starting at $40,000''
];

const stats = ['
  { number: '200+', label: 'Enterprise Clients' },''
  { number: '500+', label: 'Large-scale Projects' },''
  { number: '99.9%', label: 'Uptime Guarantee' },''
  { number: '24/7', label: 'Enterprise Support' }']
];

export default function EnterprisePage() {
  return (
    <MainLayout;'
      title="Enterprise Solutions - Zion Tech Group"""
      description="Comprehensive enterprise solutions including ERP, CRM, business intelligence, and cloud migration services for large organizations."""
      keywords="enterprise solutions, ERP, CRM, business intelligence, cloud migration, large-scale systems"""
      canonical="https://ziontechgroup.com/enterprise""
    >
</MainLayout>"
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="text-center max-w-4xl mx-auto">"
</div>
            <motion.h1;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-5xl md:text-6xl font-bold mb-6""
            >
</motion>
            </motion.h1>
            <motion.p;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}"
              className="text-xl md:text-2xl mb-8 text-gray-200""
            >
</motion>
            </motion.p>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}"
              className="flex flex-col sm:flex-row gap-4 justify-center""
            >
</motion>"
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">"
</Link>
              </Link>"
              <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">"
</Link>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>"
      <section className="py-16 bg-white">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">"
</div>
              <motion.div;
                key={index}"
                className="text-center""
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
</motion>"
                <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>""
                <div className="text-gray-600">{stat.label}</div>"
              </motion.div>)
            ))}
          </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Capabilities</h2>""
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
</p>
            </p>
          </motion.div>
          "
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">"
</div>
                <motion.div;
                  key={index}"
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow""
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
</motion>"
                  <div className="text-indigo-600 mb-4">"
</div>"
                    <IconComponent className="w-12 h-12 mx-auto" />"
</IconComponent>
                  </div>"
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>""
                  <p className="text-gray-600">{feature.description}</p>"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>""
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
</p>
            </p>
          </motion.div>
          "
          <div className="grid md:grid-cols-2 gap-8">"
</div>
              <motion.div;
                key={index}"
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow""
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
</motion>"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>""
                <p className="text-gray-600 mb-6">{solution.description}</p>""
                <div className="mb-6">"
</div>"
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>""
                  <ul className="space-y-2">"
</ul>"
                      <li key={idx} className="flex items-center text-gray-600">"
</li>"
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-3" />"
</CheckCircle>
                      </li>
                  </ul>
                </div>
                "
                <div className="flex justify-between items-center">"
</div>"
                  <span className="text-2xl font-bold text-indigo-600">{solution.pricing}</span>"
                  <Link;"
                    href="/contact"""
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors""
                  >
</Link>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>"
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">"
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>""
            <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">"
</p>
            </p>"
            <div className="flex flex-col sm:flex-row justify-center gap-4">"
</div>"
              <Link href="/contact" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">"
</Link>
              </Link>"
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">"
</a>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>"