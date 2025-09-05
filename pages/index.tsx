import React from 'react';''
import Link from 'next/link';''
import { motion } from 'framer-motion';''
import { Brain, Network, Cloud, ArrowRight } from 'lucide-react';''
import MainLayout from '../components/layout/MainLayout';'
const stats = ['
  { number: '99.9%', label: 'Uptime Guarantee' },''
  { number: '24/7', label: 'Support Available' },''
  { number: '500+', label: 'Projects Completed' },''
  { number: '50+', label: 'Expert Team Members' }']
];

const services = [
  {'
    title: "AI Services",""
    description: "Cutting-edge artificial intelligence solutions","
    icon: Brain,"
    href: "/ai-services","
  },
  {"
    title: "IT Services",""
    description: "Comprehensive information technology services","
    icon: Network,"
    href: "/it-services","
  },
  {"
    title: "Micro SaaS",""
    description: "Scalable software as a service solutions","
    icon: Cloud,"
    href: "/micro-saas","
  }]
];

export default function HomePage() {
  return (
    <MainLayout>
</MainLayout>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
</div>"
        <section className="relative py-20 overflow-hidden">"
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
              className="text-center text-white""
            >
</motion>"
              <h1 className="text-5xl md:text-7xl font-bold mb-6">"
</h1>"
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">"
</span>
                </span>
              </h1>"
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">"
</p>
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>
                <Link;"
                  href="/ai-services"""
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold inline-flex items-center""
                >
</Link>"
                  <ArrowRight className="w-5 h-5 ml-2" />"
</ArrowRight>
                </Link>
                <Link;"
                  href="/contact"""
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 font-semibold""
                >
</Link>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>"
        <section className="py-20 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">"
</div>
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}"
                  className="text-center""
                >
</motion>"
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">"
</div>
                  </div>"
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
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center mb-16""
            >
</motion>"
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">"
</h2>
              </h2>"
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
</p>
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
</div>
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}"
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300""
                >
</motion>"
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">"
</div>"
                    <service.icon className="w-8 h-8 text-blue-600" />"
</service>
                  </div>"
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">"
</h3>
                  </h3>"
                  <p className="text-gray-600 mb-6 text-center">"
</p>
                  </p>
                  <Link;
                    href={service.href}"
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold""
                  >
</Link>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>"