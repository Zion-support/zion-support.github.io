import React from 'react';''
import Link from 'next/link';''
import { motion } from 'framer-motion';'
import {
  // TODO: Implement
}
  Heart, 
  Brain, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Stethoscope,
  Activity,
  Database,
  Camera,
  FileText;'
} from 'lucide-react';''
import Layout from '../../components/Layout';'
const services = [
  {'
    title: 'AI-Powered Medical Diagnostics',''
    description: 'Advanced machine learning algorithms for accurate disease detection and diagnosis.','
    icon: Brain,
    features: ['
      'Medical image analysis',''
      'Symptom pattern recognition',''
      'Risk assessment algorithms',''
      'Real-time diagnostic support'']
    ]
  },
  {'
    title: 'Telemedicine Platforms',''
    description: 'Comprehensive virtual healthcare delivery systems for remote patient care.','
    icon: Phone,
    features: ['
      'Video consultation systems',''
      'Remote patient monitoring',''
      'Digital prescription management',''
      'Integrated health records'']
    ]
  },
  {'
    title: 'Electronic Health Records (EHR)',''
    description: 'Secure, interoperable health information management systems.','
    icon: Database,
    features: ['
      'Patient data management',''
      'Interoperability standards',''
      'Clinical decision support',''
      'Privacy compliance tools'']
    ]
  },
  {'
    title: 'Medical Imaging AI',''
    description: 'AI-enhanced medical imaging for improved diagnostic accuracy.','
    icon: Camera,
    features: ['
      'Radiology image analysis',''
      'Pathology image processing',''
      '3D imaging reconstruction',''
      'Automated report generation'']
    ]
  },
  {'
    title: 'Healthcare Analytics',''
    description: 'Data-driven insights for improved patient outcomes and operational efficiency.','
    icon: BarChart3,
    features: ['
      'Population health analytics',''
      'Predictive modeling',''
      'Cost optimization analysis',''
      'Quality metrics tracking'']
    ]
  },
  {'
    title: 'Patient Management Systems',''
    description: 'Comprehensive patient care coordination and management platforms.','
    icon: Users,
    features: ['
      'Appointment scheduling',''
      'Care plan management',''
      'Patient communication tools',''
      'Outcome tracking systems'']
    ]
  }
];

const benefits = [
  {'
    title: 'Improved Patient Outcomes',''
    description: 'AI-powered diagnostics and personalized treatment plans lead to better health results.','
    icon: Heart;
  },
  {'
    title: 'Enhanced Efficiency',''
    description: 'Streamlined workflows and automated processes reduce administrative burden.','
    icon: Activity;
  },
  {'
    title: 'Cost Reduction',''
    description: 'Optimized resource allocation and preventive care reduce overall healthcare costs.','
    icon: BarChart3;
  },
  {'
    title: 'Regulatory Compliance',''
    description: 'Built-in compliance tools ensure adherence to healthcare regulations and standards.','
    icon: Shield;
  }]
];

const caseStudies = [
  {'
    title: 'AI Diagnostic System Implementation',''
    description: 'Reduced diagnostic time by 60% and improved accuracy by 25% for a major hospital network.',']'
    results: ['60% faster diagnosis', '25% accuracy improvement', '40% cost reduction']'
  },
  {'
    title: 'Telemedicine Platform Deployment',''
    description: 'Enabled remote care for 50,000+ patients during the pandemic with 99.9% uptime.',''
    results: ['50,000+ patients served', '99.9% uptime', '95% patient satisfaction']'
  },
  {'
    title: 'EHR Integration Project',''
    description: 'Unified health records across 15 healthcare facilities, improving care coordination.',''
    results: ['15 facilities connected', '80% workflow improvement', '100% data accuracy']'
  }
];

export default function HealthcarePage() {
  return (
    <Layout;'
      title="Healthcare Technology Solutions - Zion Tech Group"""
      description="Transform healthcare delivery with AI-powered diagnostics, telemedicine platforms, EHR systems, and medical imaging solutions."""
      keywords="healthcare technology, medical AI, telemedicine, EHR systems, medical imaging, healthcare analytics""
    >
</Layout>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
</div>"
        <section className="relative bg-gradient-to-br from-red-900 via-pink-900 to-rose-900 text-white py-20 overflow-hidden">"
</section>"
          <div className="absolute inset-0">"
</div>"
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>""
            <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>""
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>"
          </div>
"
          <div className="container mx-auto px-4 relative z-10">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center max-w-4xl mx-auto""
            >
</motion>"
              <div className="flex items-center justify-center mb-6">"
</div>"
                <Heart className="w-12 h-12 text-red-400 mr-4" />"
</Heart>"
                <h1 className="text-5xl md:text-6xl font-bold">"
</h1>"
                  <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">"
</span>
                  </span>
                </h1>
              </div>"
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">"
</p>
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>"
                <Link href="/contact" className="px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">"
</Link>
                </Link>"
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold">"
</Link>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>"
        <section className="py-20 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
</div>
                <motion.div;
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100""
                >
</motion>"
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">"
</div>"
                    <service.icon className="w-6 h-6 text-white" />"
</service>
                  </div>
                  "
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>""
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>""
                  <ul className="space-y-3">"
</ul>"
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
</li>"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />"
</CheckCircle>
                      </li>
                  </ul>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
</div>
                <motion.div;
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  className="text-center""
                >
</motion>"
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">"
</div>"
                    <benefit.icon className="w-8 h-8 text-white" />"
</benefit>
                  </div>"
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>""
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>"
                </motion.div>
              ))}
            </div>
          </div>
        </section>"
        <section className="py-20 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300""
                >
</motion>"
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>""
                  <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>""
                  <div className="space-y-2">"
</div>"
                      <div key={resultIndex} className="flex items-center text-sm text-green-600">"
</div>"
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />"
</CheckCircle>
                      </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>"
        <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">"
</section>"
          <div className="container mx-auto px-4 text-center">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
</motion>"
              <h2 className="text-4xl md:text-5xl font-bold mb-6">"
</h2>
              </h2>"
              <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">"
</p>
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>"
                <Link href="/contact" className="px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">"
</Link>
                </Link>"
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold">"
</Link>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>"