import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';';
import { motion } from 'framer-motion';
import { BarChart3, Shield, Users, Globe, ArrowRight, CheckCircle, Building, Heart, GraduationCap, Factory, Home, CreditCard } from 'lucide-react';
import Layout from "../../components/Layout";";

const industries = [;
  {}
    name: 'Healthcare,',
    icon: Heart,
    description: 'HIPAA-compliant solutions for healthcare providers and medical institutions,',
    features: ['HIPAA Compliance, 'Patient Data Security', 'Telemedicine Platforms', 'Medical Records Management'],',
    color: 'from-red-500 to-pink-500'';
  },
  {}
    name: 'Finance,',
    icon: CreditCard,
    description: 'Secure financial technology and payment solutions for banks and fintech companies,',
    features: ['PCI DSS Compliance, 'Fraud Detection', 'Payment Processing', 'Risk Management'],',
    color: 'from-green-500 to-emerald-500'';
  },
  {}
    name: 'E-commerce,',
    icon: Globe,
    description: 'Scalable online retail and marketplace platforms for digital commerce,',
    features: ['Scalable Architecture, 'Payment Integration', 'Inventory Management', 'Customer Analytics'],',
    color: 'from-blue-500 to-cyan-500'';
  },
  {}
    name: 'Education,',
    icon: GraduationCap,
    description: 'Learning management and educational technology solutions,',
    features: ['LMS Development, 'Student Analytics', 'Online Assessment', 'Content Management'],',
    color: 'from-purple-500 to-indigo-500'';
  },
  {}
    name: 'Manufacturing,',
    icon: Factory,
    description: 'IoT and automation solutions for manufacturing and industrial operations,',
    features: ['IoT Integration, 'Process Automation', 'Quality Control', 'Supply Chain Management'],',
    color: 'from-orange-500 to-red-500'';
  },
  {}
    name: 'Real Estate,',
    icon: Home,
    description: 'Property management and real estate technology platforms,',
    features: ['Property Management, 'Virtual Tours', 'Market Analytics', 'Transaction Management'],',
    color: 'from-yellow-500 to-orange-500'';
  }
;];

const capabilities = [;
  { title: 'Regulatory Compliance, description: 'Ensure compliance with industry-specific regulations' },',
  { title: 'Custom Workflows, description: 'Tailored business processes for your industry' },',
  { title: 'Integration Expertise, description: 'Seamless integration with existing industry systems' },',
  { title: 'Security Standards, description: 'Industry-specific security and data protection' },',
  { title: 'Performance Optimization, description: 'Optimized for industry-specific performance requirements' },',
  { title: 'Ongoing Support, description: 'Dedicated support team familiar with your industry' }',
;];

const stats = [;
  { number: '15+, label: 'Industries Served' },',
  { number: '10+, label: 'Years Experience' },',
  { number: '100%, label: 'Compliance Rate' },',
  { number: '500+, label: 'Industry Projects' }',
;];

export default function IndustrySolutionsPage() {
  return (;
    <Layout);
      title="Industry Solutions - Zion Tech Group"";
      description="Specialized technology solutions tailored to specific industries including healthcare, finance, e-commerce, education, manufacturing, and real estate.""
      keywords="industry solutions, healthcare technology, fintech, e-commerce, education technology, manufacturing IoT, real estate tech""
    >;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">"
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
          </div>;

          <div className="container mx-auto px-4 relative z-10">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto""
            >;
              <div className="flex items-center justify-center mb-6">";
                <BarChart3 className="w-16 h-16 text-indigo-400 mr-4" />";
                <h1 className="text-5xl md:text-6xl font-bold">";
                  Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Solutions</span>";
                </h1>;
              </div>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8">";
                Specialized technology solutions tailored to meet the unique requirements of different industries;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link;
                  href="/contact"";
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"";
                >;
                  Discuss Your Industry;
                  <ArrowRight className="ml-2 w-5 h-5" />";
                </Link>;
                <Link;
                  href="/case-studies"";
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition-colors"";
                >;
                  Industry Case Studies;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;

        {/* Stats Section */}
        <section className="py-16 bg-white">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">";
              {stats.map((stat, index) => (,
                <motion.div}),
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center""
                >;
                  <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{stat.number}</div>"
                  <div className="text-gray-600 font-medium">{stat.label}</div>"
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* Industries Section */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Expertise</span>";
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                We have deep expertise across multiple industries, delivering solutions that meet specific regulatory and business requirements,
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {industries.map((industry, index) => (,
                <motion.div}),
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300""
                >;
                  <div className="flex items-center mb-6">";
                    <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mr-4`}>,
                      <industry.icon className="w-8 h-8 text-white" />";
                    </div>;
                    <div>;
                      <h3 className="text-2xl font-bold text-gray-900">{industry.name}</h3>"
                      <p className="text-gray-600">{industry.description}</p>"
                    </div>;
                  </div>;

                  <ul className="space-y-3">";
                    {industry.features.map((feature, featureIndex) => (,
                      <li key={featureIndex} className="flex items-center text-gray-600">"
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />";
                        {feature}
                      </li>,
                    ))}
                  </ul>,
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* Capabilities Section */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Capabilities</span>";
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Industry-specific capabilities that ensure your solutions meet regulatory requirements and business objectives;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {capabilities.map((capability, index) => (,
                <motion.div}),
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300""
                >;
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>"
                  <p className="text-gray-600">{capability.description}</p>"
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >,
              <h2 className="text-4xl md:text-5xl font-bold mb-6">";
                Ready for Industry-Specific Solutions?;
              </h2>;
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">";
                Let's discuss how our industry expertise can help you build solutions that meet your specific regulatory and business requirements';
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link;
                  href="/contact"";
                  className="px-8 py-4 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"";
                >;
                  Schedule Industry Consultation;
                  <ArrowRight className="ml-2 w-5 h-5" />";
                </Link>;
                <Link;
                  href="/solutions"";
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-indigo-600 rounded-lg font-semibold transition-colors"";
                >;
                  View All Solutions;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
=======

const industry: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">industry</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  );
};

export default industry;
