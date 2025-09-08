import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Building, Shield, Users, CheckCircle, ArrowRight, Globe, BarChart3, FileText, Lock, Database, Phone, Mail } from 'lucide-react';
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';import Layout from '../../components/Layout';
const services = [
  {
    title: Citizen Service Portals,
    description: 'Comprehensive digital platforms for citizen-government interaction and service delivery.',
    icon: Globe,
    features: [;

    title: 'Digital Identity Solutions,',
    description: 'Secure digital identity verification and management systems for citizens.,',
    icon: Users,
    features: [;
      'Biometric authentication,',
      'Digital ID cards',',
      'Identity verification',',
      'Fraud prevention'';
      'Fraud prevention';
    ];
  },
  {}
    ];
    ];
  }];
  },
  {}
    title: 'Government Analytics,',
    description: 'Data analytics platforms for informed policy-making and resource allocation.,',
    icon: BarChart3,
    features: [;
      'Performance metrics,',
      'Trend analysis',',
      'Predictive modeling',',
      'Resource optimization'';
      Resource optimization';
    ];
  },
  {}
;];
const benefits = [;
  {}
    title: 'Enhanced Security,',,
  description: 'Government-grade security measures protect sensitive citizen and government data.,',;
    icon: Shield;  {}
    title: 'Improved Efficiency,',
    description: 'Digital processes streamline government operations and reduce administrative burden.,',
    icon: BarChart3;
  },
  {}
    title: 'Better Citizen Experience,',
    description: 'User-friendly digital services make government more accessible to citizens.,',
    icon: Users;
  },
  {}
    title: 'Transparency & Accountability,',
    description: 'Digital systems provide transparency and enable better accountability.,',
    icon: Globe;

    title: 'Improved Efficiency,',

    description: Digital processes streamline government operations and reduce administrative burden.,,
    icon: BarChart3;
  },
  {}'
    title: 'Better Citizen Experience,,
    description: 'User-friendly digital services make government more accessible to citizens.,',
    icon: Users;
  },
  {}
    title: Transparency & Accountability,','
    description: 'Digital systems provide transparency and enable better accountability.,',
    icon: Globe;
  }
;];
export default function GovernmentPage() {
  return (;
    <Layout );
      title="Government Technology Solutions - Zion Tech Group"";
      description="Transform government operations with citizen service portals, secure data management, digital identity solutions, and public safety systems.""
      keywords="government technology, citizen services, digital government, public safety, government security, civic tech""
    >;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 text-white py-20 overflow-hidden">"
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;
          <div className="container mx-auto px-4 relative z-10">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;              className="text-center mb-16"
            >

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6>
                Government Technology Services;
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive government technology solutions designed for federal, state,
                and local government agencies.
              </p>
            </motion.div>
            <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div;
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100""
                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">";
                    <service.icon className="w-6 h-6 text-white" />";
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>"
                  <ul className="space-y-3">";
                    {service && service.features.map((feature, featureIndex) => (,;
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">";
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />";                        {feature}
                      </li>,
                    ))}
                  </ul>,
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;
            </div>
          </div>
        </section>
            </div>,;
          </div>;
        </section>;
            </div>,;
          </div>;
        </section>;
            </div>,;
          </div>;
        </section>;
            </div>;
          </div>;
        </section>;              className="text-center mb-16"
            >

              <h2 className=text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Government Solutions?
              </h2>"
              <p className=text-xl text-gray-600 max-w-3xl mx-auto>
                Our government technology solutions deliver enhanced security, improved efficiency,
                and better citizen services.
              </p>
            </motion.div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>
              {benefits.map((benefit, index) => (
                <motion.div;
                  key={benefit.title}
            </motion && motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">",;
              {benefits && benefits.map((benefit, index) => (,;
                <motion&& motion.div}),
              className="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">;
                Why Choose Our Government Solutions?;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                Our government technology solutions deliver enhanced security, improved efficiency,;
                and better citizen services.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {benefits && benefits.map((benefit, index) => (;
                <motion&& motion.div
                  key={benefit && benefit.title}        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">"
          <div className="container mx-auto px-4 text-center">";

