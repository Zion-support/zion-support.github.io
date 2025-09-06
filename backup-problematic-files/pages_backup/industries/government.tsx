import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Building, Shield, Users, CheckCircle, ArrowRight, Globe, BarChart3, FileText, Lock, Database, Phone, Mail } from 'lucide-react';;
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import { Building, 
  Shield, 
  Users, 
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import {
  Building,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Globe,
  BarChart3,
  FileText,
  Lock,
  Database,
  Phone,
  Mail;
} from 'lucide-react';
import Layout from '../../components/Layout';';
const services = [;
  {}
    title: 'Citizen Service Portals,',
    description: 'Comprehensive digital platforms for citizen-government interaction and service delivery.,',
import Layout from '../../components/Layout';
const services = [
  {
    title: 'Citizen Service Portals',
    description: 'Comprehensive digital platforms for citizen-government interaction and service delivery.',
    icon: Globe,
    features: [;
      'Online service applications,',
      'Digital document submission',',
      'Status tracking systems',',
    title: 'Citizen Service Portals,',;
    description: 'Comprehensive digital platforms for citizen-government interaction and service delivery.,',;
import Layout from '../../components/Layout';
const services = [;
  {;
    title: 'Citizen Service Portals',;
    description: 'Comprehensive digital platforms for citizen-government interaction and service delivery.',;
    icon: Globe,;
    features: [,;
      'Online service applications,',;
      'Digital document submission',',;
      'Status tracking systems',',;
      'Multi-language support'';
    ];
  },;
  {}
    title: 'Secure Data Management,',;
    description: 'Government-grade data security and management systems for sensitive information.,',;
    icon: Shield,;
    features: [,;
      'Encrypted data storage,',;
      'Access control systems',',;
      'Audit trail management',',;
      'Compliance monitoring'';
    ];
  },;
  {}
    title: 'Digital Identity Solutions,',;
    description: 'Secure digital identity verification and management systems for citizens.,',;
    icon: Users,;
    features: [,;
      'Biometric authentication,',;
      'Digital ID cards',',;
      'Identity verification',',;
      'Fraud prevention'';
    ];
  },;
  {}
    title: 'Public Safety Systems,',;
    description: 'Advanced systems for emergency response and public safety management.,',;
    icon: Phone,;
    features: [,;
      'Emergency dispatch systems,',;
      'Real-time monitoring',',;
      'Incident management',',;
      'Resource coordination'';
    ];
  },;
  {}
    title: 'Government Analytics,',;
    description: 'Data analytics platforms for informed policy-making and resource allocation.,',;
    icon: BarChart3,;
    features: [,;
      'Performance metrics,',;
      'Trend analysis',',;
      'Predictive modeling',',;
      'Resource optimization'';
    ];
  },;
  {}
    title: 'Compliance Management,',;
    description: 'Automated systems for regulatory compliance and policy enforcement.,',;
    icon: FileText,;
    features: [,;
      'Regulatory tracking,',;
      'Compliance reporting',',;
      'Policy management',',;
      'Audit automation'';
    ];
  }
;];
const benefits = [;
  {}
    title: 'Enhanced Security,',;
    description: 'Government-grade security measures protect sensitive citizen and government data.,',;
    icon: Shield;
];
const benefits = [;
  {;
    title: 'Enhanced Security',;
    description: 'Government-grade security measures protect sensitive citizen and government data.',;
    icon: Shield;
  },;
  {}
    title: 'Improved Efficiency,',;
    description: 'Digital processes streamline government operations and reduce administrative burden.,',;
    icon: BarChart3,;
  },;
  {}
    title: 'Better Citizen Experience,',;
    description: 'User-friendly digital services make government more accessible to citizens.,',;
    icon: Users,;
  },;
  {}
    title: 'Transparency & Accountability,',;
    description: 'Digital systems provide transparency and enable better accountability.,',;
    icon: Globe,;
  }
;];
export default function GovernmentPage() {;
  return (
    <Layout)
      title="Government Technology Solutions - Zion Tech Group""
      description="Transform government operations with citizen service portals, secure data management, digital identity solutions, and public safety systems.""
      keywords="government technology, citizen services, digital government, public safety, government security, civic tech"">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 text-white py-20 overflow-hidden">";
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;
          <div className="container mx-auto px-4 relative z-10">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center max-w-4xl mx-auto"">;
              <div className="flex items-center justify-center mb-6">";
                <Building className="w-12 h-12 text-indigo-400 mr-4" />";
                <h1 className="text-5xl md: text-6xl font-bold">", Government,;
                  <span className="block bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">";
                    Technology Solutions;
                  </span>;
                </h1>;
              </div>;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">";
                Transform government operations with secure, efficient, and citizen-centric technology solutions. ;
                Enhance service delivery, improve transparency, and ensure public safety.,;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">", <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">",;
                  Get Government Consultation;
                </Link>;
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover: bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">", View Government Case Studies,;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
];
export default function GovernmentPage() {;
  return (
    <Layout
      title="Government Technology Solutions - Zion Tech Group"
      description="Transform government operations with citizen service portals, secure data management, digital identity solutions, and public safety systems."
      keywords="government technology, citizen services, digital government, public safety, government security, civic tech">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 text-white py-20 overflow-hidden">;
          <div className="absolute inset-0">;
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>;
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>;
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>;
          </div>;
          <div className="container mx-auto px-4 relative z-10">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center max-w-4xl mx-auto">;
              <div className="flex items-center justify-center mb-6">;
                <Building className="w-12 h-12 text-indigo-400 mr-4" />;
                <h1 className="text-5xl md:text-6xl font-bold">;
                  Government;
                  <span className="block bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">;
                    Technology Solutions;
                  </span>;
                </h1>;
              </div>;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
                Transform government operations with secure, efficient, and citizen-centric technology solutions.;
                Enhance service delivery, improve transparency, and ensure public safety.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">;
                  Get Government Consultation;
                </Link>;
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">;
                  View Government Case Studies;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
];
export default function GovernmentPage() {
  return (
    <Layout
      title="Government Technology Solutions - Zion Tech Group"
      description="Transform government operations with citizen service portals, secure data management, digital identity solutions, and public safety systems."
      keywords="government technology, citizen services, digital government, public safety, government security, civic tech"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Building className="w-12 h-12 text-indigo-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Government
                  <span className="block bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                    Technology Solutions
                  </span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform government operations with secure, efficient, and citizen-centric technology solutions.
                Enhance service delivery, improve transparency, and ensure public safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Government Consultation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
                  View Government Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-20 bg-white">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Government Technology Services;
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-16"">;
              <h2 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">", Government Technology Services,;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Comprehensive government technology solutions designed for federal, state, ;
                and local government agencies.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {services.map((service, index) => (,
                <motion.div}),
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Government Technology Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive government technology solutions designed for federal, state,
                and local government agencies.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">";
                    <service.icon className="w-6 h-6 text-white" />";
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>"
            </motion && motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">",;
              {services && services.map((service, index) => (,;
                <motion&& motion.div}),
              className="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">;
                Government Technology Services;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                Comprehensive government technology solutions designed for federal, state,;
                and local government agencies.;
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
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">";
                    <service && service.icon className="w-6 h-6 text-white" />";
                  </div>,;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service && service.title}</h3>";
                  <p className="text-gray-600 mb-6 leading-relaxed">{service && service.description}</p>";
                  <ul className="space-y-3">";
                    {service && service.features.map((feature, featureIndex) => (,;
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">";
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />";
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100";
                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">;
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
        </section>;
        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Why Choose Our Government Solutions?;
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-16"">;
              <h2 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">", Why Choose Our Government Solutions?,;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Our government technology solutions deliver enhanced security, improved efficiency, ;
                and better citizen services.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {benefits.map((benefit, index) => (,
                <motion.div}),
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Government Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our government technology solutions deliver enhanced security, improved efficiency,
                and better citizen services.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
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
                  key={benefit && benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="text-center"">;
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">";
                    <benefit && benefit.icon className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit && benefit.title}</h3>";
                  <p className="text-gray-600 leading-relaxed">{benefit && benefit.description}</p>";
                </motion && motion.div>;
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
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">";
          <div className="container mx-auto px-4 text-center">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >,
              <h2 className="text-4xl md:text-5xl font-bold mb-6">";
                Ready to Transform Government?;
              transition={{ duration: 0 && 0.8 }}>,;
              <h2 className="text-4xl md: text-5xl font-bold mb-6">", Ready to Transform Government?,;
              </h2>;
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">";
                Let our government technology experts help you implement solutions that enhance;
                citizen services and improve operational efficiency.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">", <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">",;
                  Start Your Government Project;
                </Link>;
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover: bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">", Learn About Our Expertise,;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Government?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Let our government technology experts help you implement solutions that enhance
                citizen services and improve operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Government Project
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
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

export default Government;
