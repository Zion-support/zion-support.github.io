'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Shield, FileText, Lock, Award, Users, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const CompliancePage: React.FC = () => {
  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls for service organizations',
      status: 'Certified',
      icon: Shield
    },
      name: 'ISO 27001',
      description: 'Information security management system certification',
      icon: Lock
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data',
      status: 'Compliant',
      icon: FileText
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance',
      icon: Users
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      icon: Award
      name: 'CCPA',
      description: 'California Consumer Privacy Act compliance',
      icon: Globe
    }
  ];

  const features = [
      title: 'Comprehensive Auditing',
      description: 'Regular internal and external audits to ensure ongoing compliance with all standards.'
      title: 'Data Protection',
      description: 'Advanced encryption and security measures to protect sensitive data and privacy.'
      title: 'Documentation',
      description: 'Complete documentation of policies, procedures, and compliance measures.'
      title: 'Training Programs',
      description: 'Regular training for all staff on compliance requirements and best practices.'

  const benefits = [
    'Reduced risk of data breaches and security incidents',
    'Enhanced customer trust and confidence',
    'Competitive advantage in regulated industries',
    'Reduced legal and regulatory risks',
    'Improved operational efficiency',
    'Better data governance and management',
    'Streamlined audit processes',
    'Continuous compliance monitoring'

  return (
    <>
      <Helmet>
        <title>Compliance - Security & Regulatory Compliance | Zion Tech Group</title>
        <meta name="description" content="Learn about our comprehensive compliance program. SOC 2, ISO 27001, GDPR, HIPAA, and other regulatory standards." />
        <meta name="keywords" content="compliance, security standards, SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, data protection" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Compliance &
                </span>
                <br />
                <span className="text-white">Security Standards</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                  View Certifications
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Learn More
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Compliance Certifications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We maintain compliance with the most stringent security and regulatory standards.
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <standard.icon className="h-8 w-8 text-purple-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{standard.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        standard.status === 'Certified' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-blue-500 text-white'
                      }`}>
                        {standard.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300">{standard.description}</p>
                </div>
              ))}

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
                Our Compliance Program
                Comprehensive approach to maintaining the highest standards of security and compliance.
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>

        {/* Benefits Section */}
                Benefits of Our Compliance Program
                Experience the advantages of working with a fully compliant technology partner.
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                  <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-300">{benefit}</p>

        {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Our Compliance?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our compliance team to learn more about our security standards and certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <Shield className="mr-2 h-5 w-5" />
                View Certifications
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                <FileText className="mr-2 h-5 w-5" />
                Download Report
      </div>
    </>
  );
};

export default CompliancePage;