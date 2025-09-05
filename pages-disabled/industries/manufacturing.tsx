import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Settings,
  Brain,
  Shield,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Cpu,
  Wrench,
  Activity,
  Database,
  FileText,
  Users;'
} from 'lucide-react';
import Layout from '../../components/Layout';'
const services = [
  {'
    title: 'Smart Factory Solutions',''
    description: 'IoT-enabled manufacturing systems for intelligent production management.','
    icon: Settings,
    features: [']
      'Real-time production monitoring',''
      'Automated quality control',''
      'Predictive maintenance',''
      'Supply chain integration''];
    ];
  },
  {'}
    title: 'Predictive Maintenance AI',''
    description: 'AI-powered systems to predict and prevent equipment failures.','
    icon: Brain,
    features: [']
      'Equipment health monitoring',''
      'Failure prediction algorithms',''
      'Maintenance scheduling',''
      'Cost optimization''];
    ];
  },
  {'}
    title: 'IoT Sensor Networks',''
    description: 'Connected sensor systems for comprehensive factory monitoring.','
    icon: Cpu,
    features: [']
      'Environmental monitoring',''
      'Equipment status tracking',''
      'Data collection systems',''
      'Real-time alerts''];
    ];
  },
  {'}
    title: 'Quality Control Systems',''
    description: 'Automated quality assurance using computer vision and AI.','
    icon: Shield,
    features: [']
      'Visual inspection systems',''
      'Defect detection algorithms',''
      'Quality metrics tracking',''
      'Automated reporting''];
    ];
  },
  {'}
    title: 'Supply Chain Optimization',''
    description: 'AI-driven supply chain management for improved efficiency.','
    icon: BarChart3,
    features: [']
      'Demand forecasting',''
      'Inventory optimization',''
      'Supplier management',''
      'Logistics coordination''];
    ];
  },
  {'}
    title: 'Digital Twin Technology',''
    description: 'Virtual replicas of physical manufacturing systems for simulation.','
    icon: Database,
    features: [']
      '3D factory modeling',''
      'Process simulation',''
      'Performance optimization',''
      'Scenario planning''];
    ];
  };
];

const benefits = []
  {'}
    title: 'Increased Efficiency',''
    description: 'Automated processes and AI optimization improve production efficiency.','
    icon: Activity,
  },
  {'}
    title: 'Reduced Downtime',''
    description: 'Predictive maintenance prevents unexpected equipment failures.','
    icon: Wrench,
  },
  {'}
    title: 'Better Quality',''
    description: 'Automated quality control ensures consistent product quality.','
    icon: Shield,
  },
  {'}
    title: 'Cost Savings',''
    description: 'Optimized operations and reduced waste lower manufacturing costs.','
    icon: BarChart3,
  }]
];

export default function ManufacturingPage() {
  return (
    <Layout'
      title="Manufacturing Technology Solutions - Zion Tech Group"
      description="Transform manufacturing with smart factory solutions, IoT networks, predictive maintenance, and digital twin technology."
      keywords="manufacturing technology, smart factory, IoT manufacturing, predictive maintenance, digital twin, Industry 4.0""
    >
</$1>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
</div>
        <section className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 text-white py-20 overflow-hidden">"
</section>
          <div className="absolute inset-0">"
</div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
"
          <div className="container mx-auto px-4 relative z-10">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center max-w-4xl mx-auto"
            >
</motion>"
              <div className="flex items-center justify-center mb-6">"
</div>
                <Settings className="w-12 h-12 text-blue-400 mr-4" />"
</$1>
                <h1 className="text-5xl md: text-6xl font-bold">"
</h1>
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">"
</span>
                  </span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">"
</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">"
</Link>
                </$1>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">"
</Link>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-white">"
</section>
          <div className="container mx-auto px-4">"
</div>
            <motion.div,
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center mb-16"
            >
</motion>"
              <h2 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">"
</h2>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
</p>
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
</div>
                <motion.div,
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
                >
</motion>"
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">"
</div>
                    <service.icon className="w-6 h-6 text-white" />"
</service>
                  </div>
                  "
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">"
</ul>"
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
</li>"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />"
</CheckCircle>
                      </li>
                  </ul>
                </motion.div>);
              ))};
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50">"
</section>
          <div className="container mx-auto px-4">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center mb-16"
            >
</motion>"
              <h2 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">"
</h2>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
</p>
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
</div>
                <motion.div,
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  className="text-center"
                >
</motion>"
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">"
</div>
                    <benefit.icon className="w-8 h-8 text-white" />"
</benefit>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))};
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">"
</section>
          <div className="container mx-auto px-4 text-center">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
            >
</motion>"
              <h2 className="text-4xl md:text-5xl font-bold mb-6">"
</h2>
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">"
</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">"
</Link>
                </$1>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">"
</Link>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </$1>
}