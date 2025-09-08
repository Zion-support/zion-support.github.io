import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Heart, DollarSign, Settings, ShoppingCart, BookOpen, Building, ArrowRight, CheckCircle, Users, Shield, Cloud, Brain } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

  Brain;
} from 'lucide-react';
  Brain;
} from 'lucide-react';    href: '/industries/finance,',
    features: ['Blockchain Solutions, 'Fraud Detection', 'Trading Systems', 'Regulatory Compliance'],',
    color: 'from-green-500 to-emerald-500'';
  },
          </div>          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;
          <div className="container mx-auto px-4 relative z-10">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;

                Industry-Specific{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We understand the unique challenges and requirements of different industries. Our specialized solutions 
                are designed to address sector-specific needs while ensuring compliance, security, and scalability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Industry Consultation
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Industries Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
            <motion.div;
              className="text-center mb-16"";
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Industry Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Specialized technology solutions tailored to meet the unique challenges and opportunities across different industries.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Industries Grid */}
        <section className="py-20 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              className="text-center"">;

                Industry-Specific{' '}',;
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";
                  Technology Solutions;
                </span>;
              </h1>;

                are designed to address sector-specific needs while ensuring compliance, security, and scalability.,;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">", <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">",;
                  Get Industry Consultation;
                </Link>;
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover: bg-white hover:text-gray-900 transition-all duration-300 font-semibold">", View All Solutions,;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Industries Grid */}
        <section className="py-20 bg-gray-50">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              className="text-center mb-16""
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Industry Solutions;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
                Specialized technology solutions tailored to meet the unique challenges and opportunities across different industries.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Industries Grid */}
        <section className=py-20>

          <div className="container mx-auto px-4">
            <motion.div
              className=text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                return (
                  <motion&& motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">,;
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">";
                Industries We Serve;
              </h2>;
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">";
                Our deep industry expertise allows us to deliver tailored solutions that address specific sector challenges;
                and drive measurable business outcomes.;
              </p>;
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our deep industry expertise allows us to deliver tailored solutions that address specific sector challenges 
                and drive measurable business outcomes.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div;
              className="text-center mb-16"";
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}              <motion.div
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cloud className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>
                <p className="text-gray-600">
                  whileInView={{ opacity: 1, y: 0 }}                >,
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">";
                    {stat.number}
                  </div>,
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>;
              ))}
            </div>,
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">;
                    {stat && stat.number}
                  </div>;
                  <div className="text-gray-600 font-medium">{stat && stat.label}</div>;
                </motion && motion.div>;
              ))}
            </div>;
