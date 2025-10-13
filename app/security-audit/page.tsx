import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, Code, Cloud, Shield, Zap, Users, Award, BarChart3 } from 'lucide-react';

const SecurityAuditPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Security Audit - Zion Tech Group | Professional Technology Solutions</title>
        <meta name="description" content="Professional security audit services and solutions. Expert implementation and support for your business needs." />
        <meta name="keywords" content="security audit, professional services, business solutions, technology consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Security Audit
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Professional security audit services and solutions. Expert implementation and support for your business needs.
=======
import { ArrowRight, CheckCircle, Shield, Zap, Users, BarChart3, Settings, TrendingUp, Globe, Database } from 'lucide-react';

const SecurityAuditPage = () => {
  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive security assessment of your systems and infrastructure",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Vulnerability scanning", "Risk assessment", "Compliance check", "Security report"]
    },
    {
      title: "Penetration Testing",
      description: "Simulated cyber attacks to identify security weaknesses",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Network testing", "Application testing", "Social engineering", "Physical security"]
    },
    {
      title: "Compliance Audit",
      description: "Ensure compliance with industry standards and regulations",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["GDPR compliance", "HIPAA compliance", "SOX compliance", "PCI DSS"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Security Audit Services - Zion Tech Group | Cybersecurity Assessment & Testing</title>
        <meta name="description" content="Professional security audit services including vulnerability assessment, penetration testing, and compliance auditing. Secure your business." />
        <meta name="keywords" content="security audit, cybersecurity, penetration testing, vulnerability assessment, compliance audit" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Security Audit Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive security audit services to identify vulnerabilities and ensure compliance. 
            Protect your business with our expert cybersecurity assessments.
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Service",
                description: "Expert security audit solutions tailored to your business needs.",
                icon: <Code className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes to ensure excellence.",
                icon: <Shield className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock support and maintenance for your peace of mind.",
                icon: <Users className="w-8 h-8" />,
                color: "from-purple-500 to-indigo-500"
              }
            ].map((service, index) => (
=======
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Security Audit Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete security audit solutions for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
<<<<<<< HEAD
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
=======
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our expert team to discuss your security audit requirements and get a customized solution.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
=======
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our security experts help you identify and fix vulnerabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default SecurityAuditPage;
=======
export default SecurityAuditPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
