import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
<<<<<<< HEAD
import { Building, Shield, Users, CheckCircle, ArrowRight, Globe, BarChart3, FileText, Lock, Database, Phone, Mail } from 'lucide-react';;
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import { Building, 
  Shield, 
  Users, import {
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
    description: 'Comprehensive digital platforms for citizen-government interaction and service delivery.,',];
=======
import { Building, Shield, Users, CheckCircle, ArrowRight, Globe, BarChart3, FileText, Lock, Database, Phone, Mail } from 'lucide-react';

const solutions = [
  {
    title: 'Digital Government Platform',
    description: 'Comprehensive digital platform for government services and citizen engagement',
    icon: Building,
    features: ['Citizen Portal', 'Service Automation', 'Document Management', 'Multi-channel Access']
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Advanced security measures to protect government data and systems',
    icon: Shield,
    features: ['Threat Detection', 'Access Control', 'Data Encryption', 'Compliance Monitoring']
  },
  {
    title: 'Data Analytics Platform',
    description: 'AI-powered analytics platform for government decision making',
    icon: BarChart3,
    features: ['Performance Metrics', 'Predictive Analytics', 'Resource Optimization', 'Policy Analysis']
  },
  {
    title: 'Citizen Services Portal',
    description: 'User-friendly portal for citizens to access government services',
    icon: Users,
    features: ['Service Requests', 'Document Submission', 'Status Tracking', 'Mobile Access']
  }
];

>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
const benefits = [
  {
    title: 'Enhanced Security',
    description: 'Advanced security measures protect sensitive government data',
    icon: Lock
  },
  {
    title: 'Improved Efficiency',
    description: 'Automated processes reduce administrative burden and costs',
    icon: CheckCircle
  },
  {
    title: 'Better Citizen Services',
    description: 'Digital services provide better access and convenience for citizens',
    icon: Globe
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Analytics help make informed policy and resource decisions',
    icon: Database
  }
<<<<<<< HEAD
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
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto""
            >;
              <div className="flex items-center justify-center mb-6">";
                <Building className="w-12 h-12 text-indigo-400 mr-4" />";
                <h1 className="text-5xl md:text-6xl font-bold">";
                  Government;
                  <span className="block bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">";
                    Technology Solutions;
                  </span>;
                </h1>;
              </div>;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">";
                Transform government operations with secure, efficient, and citizen-centric technology solutions. 
                Enhance service delivery, improve transparency, and ensure public safety.,
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">";
                  Get Government Consultation;
                </Link>;
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">";
                  View Government Case Studies;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Government Technology Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive government technology solutions designed for federal, state,
                and local government agencies.
=======
];

export default function GovernmentPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Government <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform government operations with digital platforms, cybersecurity solutions, 
                and data analytics that improve citizen services and operational efficiency.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Government Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for government agencies.
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100""
                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">";
                    <service.icon className="w-6 h-6 text-white" />";
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>"
                  <ul className="space-y-3">";
                    {service.features.map((feature, featureIndex) => (,
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />";            </div>
=======
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Why Choose Our Government Solutions?;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Our government technology solutions deliver enhanced security, improved efficiency, 
                and better citizen services.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {benefits.map((benefit, index) => (,
                <motion.div}),            </div>
=======
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Government Solutions?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our solutions are designed to address the unique challenges faced by government agencies.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Government?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our government solutions can help your agency achieve its goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}