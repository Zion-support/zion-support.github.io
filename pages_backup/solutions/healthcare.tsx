import Layout from '../../components/Layout';
import { Heart, Shield, Database, Users, Activity } from 'lucide-react';
import React from 'react';
import Layout from '../../components/Layout';';
import { Heart, Shield, Database, Users, Activity, CheckCircle, ArrowRight } from 'lucide-react';
const features = [;
  {}
    icon: Heart,
    title: 'Patient Data Management,',
    description: 'Secure, HIPAA-compliant systems for managing patient records and medical data.',
  },
    icon: Shield,
    title: 'Healthcare Security,',
    description: 'Advanced cybersecurity solutions designed specifically for healthcare environments.'';
    icon: Database,
    title: 'Electronic Health Records,',
    description: 'Custom EHR solutions that integrate seamlessly with existing healthcare workflows.'';
    icon: Users,
    title: 'Telemedicine Platforms,',
    description: 'Remote consultation and patient monitoring systems for modern healthcare delivery.'';
    icon: Activity,
    title: 'Health Analytics,',
    description: 'AI-powered analytics for population health management and predictive insights.'';
import { Heart, Shield, Activity, Users, FileText, CheckCircle, ArrowRight } from 'lucide-react';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
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
  ArrowRight ;
} from 'lucide-react';

ursor/fix-syntax-push-and-merge-to-main-40de
ursor/add-new-services-and-deploy-updates-0462
const features = [
  {
    title: 'Patient Management',
    description: 'Comprehensive patient data management and care coordination'
    title: 'HIPAA Compliance',
    description: 'Full compliance with healthcare data protection regulations'
    title: 'Health Analytics',
    description: 'Advanced analytics for patient outcomes and operational efficiency'
    title: 'Provider Portal',
    description: 'Streamlined workflows for healthcare providers and staff'
    icon: FileText,
    title: 'Electronic Records',
    description: 'Secure electronic health records management system'
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
              </div>;
        </section>;
        {/* Features Section */}
        <section className="py-20">"
            <div className="text-center mb-16">";
              <h2 className="text-4xl font-bold text-white mb-4">";
                Comprehensive Healthcare Technology Solutions;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
                Our healthcare solutions are designed to improve patient outcomes, 
                streamline operations, and ensure compliance with healthcare regulations.,
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {features.map((feature, index) => (,
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">"
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">";
                    <feature.icon className="w-6 h-6 text-white" />";
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>"
                  <p className="text-gray-300">{feature.description}</p>"
const benefits = [
  'Improved patient care and outcomes',
  'Reduced administrative burden',
  'Enhanced data security and compliance',
  'Streamlined clinical workflows',
  'Better resource utilization',
  'Real-time health monitoring and alerts'
];
export default function HealthcareSolutions() {
    title: 'Provider Management',
    description: 'Comprehensive provider and staff management solutions',
    benefits: ['Provider profiles', 'Scheduling', 'Communication', 'Performance tracking']

  return (
    <Layout
      title="Healthcare Solutions - Zion Tech Group"
      description="Advanced healthcare technology solutions for hospitals, clinics, and healthcare providers. HIPAA compliant and patient-focused."
      keywords="healthcare solutions, HIPAA compliance, electronic health records, patient management, healthcare technology">;
      <div className="min-h-screen bg-white">;

    >
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Healthcare Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform healthcare delivery with secure, compliant, and intelligent technology solutions
                designed for modern healthcare providers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  View Demo
              </div>
        </section>
        <section className="py-20 bg-gray-50">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Healthcare-Focused Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built specifically for healthcare organizations with compliance, security, and patient care in mind.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}

    </Layout>;
        {/* Benefits Section */}
        <section className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Improving Healthcare Delivery
                <p className="text-xl text-gray-600 mb-8">
                  Our healthcare solutions are designed to improve patient outcomes, streamline operations,
                  and ensure compliance with healthcare regulations.
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              <div className="bg-gradient-to-r from-green-600 to-blue-700 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Transform Healthcare?</h3>
                <p className="text-lg mb-6">
                  Let our healthcare technology experts help you implement solutions that improve
                  patient care and operational efficiency.
                <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Improve Healthcare Delivery?
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our healthcare solutions team to discuss your specific requirements
              and discover how we can help transform your healthcare organization.
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Contact Healthcare Team
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Healthcare Brochure
    </Layout>
    </>
  );
