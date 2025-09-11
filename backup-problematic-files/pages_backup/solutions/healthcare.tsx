import Layout from '../../components/Layout';
import {Heart,, Shield,, Database,, Users,, Activity} from 'lucide-react';
import React from 'react';
import Layout from '../../components/Layout';';
import {Heart,, Shield,, Database,, Users,, Activity,, CheckCircle,, ArrowRight} from 'lucide-react';
const features = [;
  {}
    icon: Heart,;
    title: 'Patient Data Management,',;
    description: 'Secure, HIPAA-compliant systems for managing patient records and medical data.',;
  },;
  {}
    icon: Shield,;
    title: 'Healthcare Security,',;
    description: 'Advanced cybersecurity solutions designed specifically for healthcare environments.'',;
  },;
  {}
    icon: Database,;
    title: 'Electronic Health Records,',;
    description: 'Custom EHR solutions that integrate seamlessly with existing healthcare workflows.'',;
  },;
  {}
    icon: Users,;
    title: 'Telemedicine Platforms,',;
    description: 'Remote consultation and patient monitoring systems for modern healthcare delivery.'',;
  },;
  {}
    icon: Activity,;
    title: 'Health Analytics,',;
    description: 'AI-powered analytics for population health management and predictive insights.'', import Layout from '../../components/Layout',;
import { Heart, Shield, Activity, Users, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Database, 
  Users, 
  Activity, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Patient Data Management',
    description: 'Secure and efficient management of patient data and medical records',
    benefits: ['Electronic health records', 'Data encryption', 'Access control', 'Audit trails']
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'HIPAA-compliant security solutions for healthcare data',
    benefits: ['HIPAA compliance', 'Data encryption', 'Access control', 'Risk management']
  },
  {
    icon: Activity,
    title: 'Health Analytics',
    description: 'Advanced analytics and reporting for healthcare insights',
    benefits: ['Patient analytics', 'Performance metrics', 'Predictive analytics', 'Reporting']
  },
  {
    icon: Users,
    title: 'Provider Portal',
    description: 'Streamlined workflows for healthcare providers and staff'
  },
  {
    icon: FileText,
    title: 'Electronic Records',
    description: 'Secure electronic health records management system'
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Built-in quality metrics and compliance monitoring'
const features = [;
  {;
    icon: Heart,;
    title: 'Patient Management',;
    description: 'Comprehensive patient data management and care coordination';
  },;
  {;
    icon: Shield,;
    title: 'HIPAA Compliance',;
    description: 'Full compliance with healthcare data protection regulations';
  },;
  {;
    icon: Activity,;
    title: 'Health Analytics',;
    description: 'Advanced analytics for patient outcomes and operational efficiency';
  },;
  {;
    icon: Users,;
    title: 'Provider Portal',;
    description: 'Streamlined workflows for healthcare providers and staff';
  },;
  {;
    icon: FileText,;
    title: 'Electronic Records',;
    description: 'Secure electronic health records management system';
  },;
  {;
    icon: CheckCircle,;
    title: 'Quality Assurance',;
    description: 'Built-in quality metrics and compliance monitoring';
  }
;];
const solutions = [;
  'HIPAA-Compliant Cloud Infrastructure',',;
  'Electronic Health Record (EHR) Systems',',;
  'Telemedicine & Remote Patient Monitoring',',;
  'Healthcare Data Analytics & AI',',;
  'Medical Device Integration',',;
  'Patient Portal Development',',;
  'Healthcare Mobile Applications',',;
  'Interoperability Solutions (FHIR)',',;
  'Healthcare Cybersecurity',',;
  'Population Health Management'',;
  ];
export default function HealthcareSolutionsPage() {;
  return (
    <Layout)
      title="Healthcare Solutions - Zion Tech Group""
      description="Transform healthcare delivery with our HIPAA-compliant solutions, EHR systems, telemedicine platforms, and healthcare analytics."">;
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">";
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto text-center">";
              <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">", Healthcare,;
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">";
                  Solutions;
                </span>;
              </h1>;
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";
                Transform healthcare delivery with our HIPAA-compliant technology solutions. ;
                From EHR systems to telemedicine platforms, we help healthcare organizations;
                deliver better patient care through innovative technology.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">", <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">",;
                  Get Started;
                  <ArrowRight className="w-5 h-5 ml-2" />";
                </button>;
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg hover: bg-gray-800 transition-colors font-medium">", View Case Studies,;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className="py-20">";
          <div className="container mx-auto px-4">";
            <div className="text-center mb-16">";
              <h2 className="text-4xl font-bold text-white mb-4">";
                Comprehensive Healthcare Technology Solutions;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
                Our healthcare solutions are designed to improve patient outcomes, ;
                streamline operations, and ensure compliance with healthcare regulations.,;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">",;
              {features && features.map((feature, index) => (,;
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover: border-blue-500 transition-colors">";
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">";
                    <feature && feature.icon className="w-6 h-6 text-white" />";
                  </div>,;
                  <h3 className="text-xl font-semibold text-white mb-4">{feature && feature.title}</h3>";
                  <p className="text-gray-300">{feature && feature.description}</p>";
                </div>;
const benefits = [;
  'Improved patient care and outcomes',;
  'Reduced administrative burden',;
  'Enhanced data security and compliance',;
  'Streamlined clinical workflows',;
  'Better resource utilization',;
  'Real-time health monitoring and alerts';
];
export default function HealthcareSolutions() {
    title: 'Provider Management',
    description: 'Comprehensive provider and staff management solutions',
    benefits: ['Provider profiles', 'Scheduling', 'Communication', 'Performance tracking']
  }
];

export default function HealthcareSolutionsPage() {
  return (
    <Layout
      title="Healthcare Solutions - Zion Tech Group"
      description="Advanced healthcare technology solutions for hospitals, clinics, and healthcare providers. HIPAA compliant and patient-focused."
      keywords="healthcare solutions, HIPAA compliance, electronic health records, patient management, healthcare technology">;
      <div className="min-h-screen bg-white">;
        {/* Hero Section */}
    title: 'Provider Portal',;
    description: 'Streamlined workflows for healthcare providers and staff';
  },;
  {;
    icon: FileText,;
    title: 'Electronic Records',;
    description: 'Secure electronic health records management system';
  },;
  {;
    icon: CheckCircle,;
    title: 'Quality Assurance',;
    description: 'Built-in quality metrics and compliance monitoring';
  }
;];
const solutions = [;
  'HIPAA-Compliant Cloud Infrastructure',',;
  'Electronic Health Record (EHR) Systems',',;
  'Telemedicine & Remote Patient Monitoring',',;
  'Healthcare Data Analytics & AI',',;
  'Medical Device Integration',',;
  'Patient Portal Development',',;
  'Healthcare Mobile Applications',',;
  'Interoperability Solutions (FHIR)',',;
  'Healthcare Cybersecurity',',;
  'Population Health Management'';
;];
export default function HealthcareSolutionsPage() {;
  return (
    <Layout)
      title="Healthcare Solutions - Zion Tech Group""
      description="Transform healthcare delivery with our HIPAA-compliant solutions, EHR systems, telemedicine platforms, and healthcare analytics."">;
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">";
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto text-center">";
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">";
                Healthcare;
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">";
                  Solutions;
                </span>;
              </h1>;
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";
                Transform healthcare delivery with our HIPAA-compliant technology solutions. ;
                From EHR systems to telemedicine platforms, we help healthcare organizations;
                deliver better patient care through innovative technology.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">";
                  Get Started;
                  <ArrowRight className="w-5 h-5 ml-2" />";
                </button>;
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium">";
                  View Case Studies;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className="py-20">";
          <div className="container mx-auto px-4">";
            <div className="text-center mb-16">";
              <h2 className="text-4xl font-bold text-white mb-4">";
                Comprehensive Healthcare Technology Solutions;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
                Our healthcare solutions are designed to improve patient outcomes, ;
                streamline operations, and ensure compliance with healthcare regulations.,;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {features && features.map((feature, index) => (,;
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">";
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">";
                    <feature && feature.icon className="w-6 h-6 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-4">{feature && feature.title}</h3>";
                  <p className="text-gray-300">{feature && feature.description}</p>";
                </div>;
const benefits = [;
  'Improved patient care and outcomes',;
  'Reduced administrative burden',;
  'Enhanced data security and compliance',;
  'Streamlined clinical workflows',;
  'Better resource utilization',;
  'Real-time health monitoring and alerts';
];
    title: 'Provider Portal',
    description: 'Streamlined workflows for healthcare providers and staff'
  },
  {
    icon: FileText,
    title: 'Electronic Records',
    description: 'Secure electronic health records management system'
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Built-in quality metrics and compliance monitoring'
  }
;];
const solutions = [;
  'HIPAA-Compliant Cloud Infrastructure',',
  'Electronic Health Record (EHR) Systems',',
  'Telemedicine & Remote Patient Monitoring',',
  'Healthcare Data Analytics & AI',',
  'Medical Device Integration',',
  'Patient Portal Development',',
  'Healthcare Mobile Applications',',
  'Interoperability Solutions (FHIR)',',
  'Healthcare Cybersecurity',',
  'Population Health Management'';
;];
export default function HealthcareSolutionsPage() {
  return (;
    <Layout );
      title="Healthcare Solutions - Zion Tech Group"";
      description="Transform healthcare delivery with our HIPAA-compliant solutions, EHR systems, telemedicine platforms, and healthcare analytics.""
    >;
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">"
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto text-center">";
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">";
                Healthcare;
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">";
                  Solutions;
                </span>;
              </h1>;
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";
                Transform healthcare delivery with our HIPAA-compliant technology solutions. 
                From EHR systems to telemedicine platforms, we help healthcare organizations;
                deliver better patient care through innovative technology.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">";
                  Get Started;
                  <ArrowRight className="w-5 h-5 ml-2" />";
                </button>;
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium">";
                  View Case Studies;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="text-center mb-16">";
              <h2 className="text-4xl font-bold text-white mb-4">";
                Comprehensive Healthcare Technology Solutions;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
                Our healthcare solutions are designed to improve patient outcomes, 
                streamline operations, and ensure compliance with healthcare regulations.,
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {features.map((feature, index) => (,
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">"
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">";
                    <feature.icon className="w-6 h-6 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>"
                  <p className="text-gray-300">{feature.description}</p>"
                </div>;
const benefits = [
  'Improved patient care and outcomes',
  'Reduced administrative burden',
  'Enhanced data security and compliance',
  'Streamlined clinical workflows',
  'Better resource utilization',
  'Real-time health monitoring and alerts'
];
export default function HealthcareSolutions() {
export default function HealthcareSolutions() {;
  return (
    <Layout
      title="Healthcare Solutions - Zion Tech Group"
      description="Advanced healthcare technology solutions for hospitals, clinics, and healthcare providers. HIPAA compliant and patient-focused."
      keywords="healthcare solutions, HIPAA compliance, electronic health records, patient management, healthcare technology">;
      <div className="min-h-screen bg-white">;
        {/* Hero Section */}
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Healthcare Solutions</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Secure and compliant healthcare technology solutions designed for healthcare providers. 
                From patient data management to analytics and provider management.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Healthcare Technology Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our healthcare solutions are built with security and compliance in mind.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
        <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Healthcare Solutions;
              </h1>;
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">;
                Transform healthcare delivery with secure, compliant, and intelligent technology solutions;
                designed for modern healthcare providers.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
                  Get Started;
                </button>;
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">;
                  View Demo;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className="py-20 bg-gray-50">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Healthcare-Focused Features;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                Built specifically for healthcare organizations with compliance, security, and patient care in mind.;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {features && features.map((feature, index) => (;
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">;
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">;
                    <feature && feature.icon className="w-6 h-6 text-green-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">;
                    {feature && feature.title}
                  </h3>;
                  <p className="text-gray-600">;
                    {feature && feature.description}
                  </p>;
                </div>;
              ))}
            </div>,;
          </div>;
        </section>;
        {/* Solutions List */}
        <section className="py-20 bg-gray-800/30">";
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto">";
              <h2 className="text-3xl font-bold text-white text-center mb-12">";
                Our Healthcare Solutions;
              </h2>;
              <div className="grid grid-cols-1 md: grid-cols-2 gap-6">",;
                {solutions && solutions.map((solution, index) => (,;
                  <div key={index} className="flex items-center space-x-3">";
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />";
                    <span className="text-gray-300 text-lg">{solution}</span>";
                  </div>;
                ))}
              </div>,;
            </div>;
          </div>;
        </section>;
        {/* Compliance Section */}
        <section className="py-20">";
          <div className="container mx-auto px-4">";
            <div className="bg-gray-800/50 rounded-2xl p-12">";
              <div className="text-center mb-12">";
                <h2 className="text-4xl font-bold text-white mb-4">";
                  HIPAA Compliant & Secure;
                </h2>;
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
                  All our healthcare solutions are built with security and compliance in mind, ;
                  ensuring your patient data is protected and your organization meets regulatory requirements.;
                </p>;
              </div>;
              <div className="grid grid-cols-1 md: grid-cols-3 gap-8">", <div className="text-center">",;
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <Shield className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">HIPAA Compliant</h3>";
                  <p className="text-gray-300">Built to meet all HIPAA requirements for healthcare data protection.</p>";
                </div>;
                <div className="text-center">";
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <Database className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">Secure Infrastructure</h3>";
                  <p className="text-gray-300">Enterprise-grade security measures to protect sensitive healthcare data.</p>";
                </div>;
                <div className="text-center">";
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <Activity className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">Real-time Monitoring</h3>";
                  <p className="text-gray-300">Continuous monitoring and alerting for security and performance.</p>";
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20">";
          <div className="container mx-auto px-4">";
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">";
              <h2 className="text-4xl font-bold text-white mb-6">";
                Ready to Transform Healthcare Delivery?;
              </h2>;
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">";
                Let our healthcare technology experts help you implement solutions that;
                improve patient care while ensuring compliance and security.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">", <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">",;
                  Schedule Consultation;
                </button>;
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover: bg-white hover:text-blue-600 transition-colors font-medium">", Download Healthcare Guide,;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
        {/* Benefits Section */}
        <section className="py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
              <div>;
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">;
                  Improving Healthcare Delivery;
                </h2>;
                <p className="text-xl text-gray-600 mb-8">;
                  Our healthcare solutions are designed to improve patient outcomes, streamline operations,;
                  and ensure compliance with healthcare regulations.;
                </p>;
                <ul className="space-y-4">;
                  {benefits && benefits.map((benefit, index) => (;
                    <li key={index} className="flex items-start">;
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />;
                      <span className="text-gray-700">{benefit}</span>;
                    </li>;
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-blue-700 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Transform Healthcare?</h3>
                <p className="text-lg mb-6">
                  Let our healthcare technology experts help you implement solutions that improve
                  patient care and operational efficiency.
                </p>
                <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </div>;
                    ))}
                  </div>;
                </motion && motion.div>;
              ))}
            </div>
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
                Ready for Healthcare Solutions?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our healthcare solutions can support your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
    </>
<<<<<<< HEAD
  );
};

export default Healthcare;
=======
<<<<<<< HEAD
    </Layout>
  );
};

export default Healthcare;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
