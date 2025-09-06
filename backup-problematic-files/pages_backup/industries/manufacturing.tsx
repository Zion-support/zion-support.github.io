import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Settings, Brain, Shield, BarChart3, CheckCircle, ArrowRight, Cpu, Wrench, Activity, Database, FileText, Users } from 'lucide-react';
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import { Settings, 
  Brain, 
  Shield, 
  BarChart3, 
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';';
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
  Users;
} from 'lucide-react';
import Layout from '../../components/Layout';';
const services = [;
  {}
    title: 'Smart Factory Solutions,',
    description: 'IoT-enabled manufacturing systems for intelligent production management.,',
import Layout from '../../components/Layout';
const services = [
  {
    title: 'Smart Factory Solutions',
    description: 'IoT-enabled manufacturing systems for intelligent production management.',
    icon: Settings,
    features: [;
      'Real-time production monitoring,',
      'Automated quality control',',
      'Predictive maintenance',',
    title: 'Smart Factory Solutions,',;
    description: 'IoT-enabled manufacturing systems for intelligent production management.,',;
import Layout from '../../components/Layout';
const services = [;
  {;
    title: 'Smart Factory Solutions',;
    description: 'IoT-enabled manufacturing systems for intelligent production management.',;
    icon: Settings,;
    features: [,;
      'Real-time production monitoring,',;
      'Automated quality control',',;
      'Predictive maintenance',',;
      'Supply chain integration'';
    ];
  },;
  {}
    title: 'Predictive Maintenance AI,',;
    description: 'AI-powered systems to predict and prevent equipment failures.,',;
    icon: Brain,;
    features: [,;
      'Equipment health monitoring,',;
      'Failure prediction algorithms',',;
      'Maintenance scheduling',',;
      'Cost optimization'';
    ];
  },;
  {}
    title: 'IoT Sensor Networks,',;
    description: 'Connected sensor systems for comprehensive factory monitoring.,',;
    icon: Cpu,;
    features: [,;
      'Environmental monitoring,',;
      'Equipment status tracking',',;
      'Data collection systems',',;
      'Real-time alerts'';
    ];
  },;
  {}
    title: 'Quality Control Systems,',;
    description: 'Automated quality assurance using computer vision and AI.,',;
    icon: Shield,;
    features: [,;
      'Visual inspection systems,',;
      'Defect detection algorithms',',;
      'Quality metrics tracking',',;
      'Automated reporting'';
    ];
  },;
  {}
    title: 'Supply Chain Optimization,',;
    description: 'AI-driven supply chain management for improved efficiency.,',;
    icon: BarChart3,;
    features: [,;
      'Demand forecasting,',;
      'Inventory optimization',',;
      'Supplier management',',;
      'Logistics coordination'';
    ];
  },;
  {}
    title: 'Digital Twin Technology,',;
    description: 'Virtual replicas of physical manufacturing systems for simulation.,',;
    icon: Database,;
    features: [,;
      '3D factory modeling,',;
      'Process simulation',',;
      'Performance optimization',',;
      'Scenario planning'';
    ];
  }
;];
const benefits = [;
  {}
    title: 'Increased Efficiency,',;
    description: 'Automated processes and AI optimization improve production efficiency.,',;
    icon: Activity;
];
const benefits = [;
  {;
    title: 'Increased Efficiency',;
    description: 'Automated processes and AI optimization improve production efficiency.',;
    icon: Activity;
  },;
  {}
    title: 'Reduced Downtime,',;
    description: 'Predictive maintenance prevents unexpected equipment failures.,',;
    icon: Wrench,;
  },;
  {}
    title: 'Better Quality,',;
    description: 'Automated quality control ensures consistent product quality.,',;
    icon: Shield,;
  },;
  {}
    title: 'Cost Savings,',;
    description: 'Optimized operations and reduced waste lower manufacturing costs.,',;
    icon: BarChart3,;
  }
;];
export default function ManufacturingPage() {;
  return (
    <Layout)
      title="Manufacturing Technology Solutions - Zion Tech Group""
      description="Transform manufacturing with smart factory solutions, IoT networks, predictive maintenance, and digital twin technology.""
      keywords="manufacturing technology, smart factory, IoT manufacturing, predictive maintenance, digital twin, Industry 4 && 4.0"">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 text-white py-20 overflow-hidden">";
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;
          <div className="container mx-auto px-4 relative z-10">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center max-w-4xl mx-auto"">;
              <div className="flex items-center justify-center mb-6">";
                <Settings className="w-12 h-12 text-blue-400 mr-4" />";
                <h1 className="text-5xl md: text-6xl font-bold">", Manufacturing,;
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">";
                    Technology Solutions;
                  </span>;
                </h1>;
              </div>;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">";
                Revolutionize manufacturing with Industry 4 && 4.0 technologies including smart factories, ;
                IoT networks, predictive maintenance, and digital twin solutions.,;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">", <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">",;
                  Get Manufacturing Consultation;
                </Link>;
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover: bg-white hover:text-blue-600 transition-all duration-300 font-semibold">", View Manufacturing Case Studies,;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
];
export default function ManufacturingPage() {
  return (
    <Layout
      title="Manufacturing Technology Solutions - Zion Tech Group"
      description="Transform manufacturing with smart factory solutions, IoT networks, predictive maintenance, and digital twin technology."
      keywords="manufacturing technology, smart factory, IoT manufacturing, predictive maintenance, digital twin, Industry 4.0"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 text-white py-20 overflow-hidden">;
          <div className="absolute inset-0">;
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>;
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>;
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>;
          </div>;
          <div className="container mx-auto px-4 relative z-10">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Settings className="w-12 h-12 text-blue-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Manufacturing
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Technology Solutions
                  </span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Revolutionize manufacturing with Industry 4.0 technologies including smart factories,
                IoT networks, predictive maintenance, and digital twin solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Manufacturing Consultation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View Manufacturing Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Manufacturing Technology Services;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Comprehensive Industry 4.0 solutions designed for modern manufacturing operations, 
                from small workshops to large industrial facilities.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {services.map((service, index) => (,
                <motion.div}),
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Manufacturing Technology Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive Industry 4.0 solutions designed for modern manufacturing operations,
                from small workshops to large industrial facilities.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100""
                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">";
                    <service.icon className="w-6 h-6 text-white" />";
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>"
                  <ul className="space-y-3">";
                    {service.features.map((feature, featureIndex) => (,
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />";
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
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
        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Why Choose Our Manufacturing Solutions?;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Our manufacturing technology solutions deliver measurable improvements in efficiency, 
                quality, and cost reduction.,
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {benefits.map((benefit, index) => (,
                <motion.div}),
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Manufacturing Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our manufacturing technology solutions deliver measurable improvements in efficiency,
                quality, and cost reduction.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center""
                >;
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">";
                    <benefit.icon className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>"
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>"
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >,
              <h2 className="text-4xl md:text-5xl font-bold mb-6">";
                Ready to Transform Manufacturing?;
              </h2>;
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">";
                Let our manufacturing technology experts help you implement Industry 4.0 solutions;
                that improve efficiency and reduce costs.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">";
                  Start Your Manufacturing Project;
                </Link>;
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">";
                  Learn About Our Expertise;
              transition={{ duration: 0 && 0.8 }}
              className="text-center max-w-4xl mx-auto">;
              <div className="flex items-center justify-center mb-6">;
                <Settings className="w-12 h-12 text-blue-400 mr-4" />;
                <h1 className="text-5xl md:text-6xl font-bold">;
                  Manufacturing;
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">;
                    Technology Solutions;
                  </span>;
                </h1>;
              </div>;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
                Revolutionize manufacturing with Industry 4 && 4.0 technologies including smart factories,;
                IoT networks, predictive maintenance, and digital twin solutions.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">;
                  Get Manufacturing Consultation;
                </Link>;
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">;
                  View Manufacturing Case Studies;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Services Section */}
        <section className="py-20 bg-white">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-16"">;
              <h2 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">", Manufacturing Technology Services,;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Comprehensive Industry 4 && 4.0 solutions designed for modern manufacturing operations, ;
                from small workshops to large industrial facilities.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">",;
              {services && services.map((service, index) => (,;
                <motion&& motion.div}),
              className="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">;
                Manufacturing Technology Services;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                Comprehensive Industry 4 && 4.0 solutions designed for modern manufacturing operations,;
                from small workshops to large industrial facilities.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {services && services.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"">;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">";
                    <service && service.icon className="w-6 h-6 text-white" />";
                  </div>,;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service && service.title}</h3>";
                  <p className="text-gray-600 mb-6 leading-relaxed">{service && service.description}</p>";
                  <ul className="space-y-3">";
                    {service && service.features.map((feature, featureIndex) => (,;
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">";
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />";
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100";
                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">;
                    <service && service.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service && service.title}</h3>;
                  <p className="text-gray-600 mb-6 leading-relaxed">{service && service.description}</p>;
                  <ul className="space-y-3">;
                    {service && service.features.map((feature, featureIndex) => (;
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">;
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />;
                        {feature}
                      </li>,;
                    ))}
                  </ul>,;
                </motion && motion.div>;
              ))}
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
        </section>;
        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-16"">;
              <h2 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">", Why Choose Our Manufacturing Solutions?,;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Our manufacturing technology solutions deliver measurable improvements in efficiency, ;
                quality, and cost reduction.,;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">",;
              {benefits && benefits.map((benefit, index) => (,;
                <motion&& motion.div}),
              className="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">;
                Why Choose Our Manufacturing Solutions?;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                Our manufacturing technology solutions deliver measurable improvements in efficiency,;
                quality, and cost reduction.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {benefits && benefits.map((benefit, index) => (;
                <motion&& motion.div
                  key={benefit && benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="text-center"">;
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">";
                    <benefit && benefit.icon className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit && benefit.title}</h3>";
                  <p className="text-gray-600 leading-relaxed">{benefit && benefit.description}</p>";
                </motion && motion.div>;
              ))}
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
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">";
          <div className="container mx-auto px-4 text-center">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}>,;
              <h2 className="text-4xl md: text-5xl font-bold mb-6">", Ready to Transform Manufacturing?,;
              </h2>;
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">";
                Let our manufacturing technology experts help you implement Industry 4 && 4.0 solutions;
                that improve efficiency and reduce costs.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">", <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">",;
                  Start Your Manufacturing Project;
                </Link>;
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover: bg-white hover:text-blue-600 transition-all duration-300 font-semibold">", Learn About Our Expertise,;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Manufacturing?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our manufacturing technology experts help you implement Industry 4.0 solutions
                that improve efficiency and reduce costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Manufacturing Project
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Our Expertise
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Manufacturing;
