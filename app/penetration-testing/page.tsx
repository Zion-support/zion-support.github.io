'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Search, AlertTriangle, CheckCircle, ArrowRight, Phone, Mail, Target, Lock, Eye } from 'lucide-react';

const PenetrationTestingPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Comprehensive Testing',
      description: 'Thorough security assessment of your entire infrastructure including networks, applications, and systems'
    },
    {
      icon: Target,
      title: 'Real-World Attacks',
      description: 'Simulate actual attack scenarios to identify vulnerabilities before malicious actors do'
    },
    {
      icon: Shield,
      title: 'Expert Analysis',
      description: 'Certified ethical hackers with years of experience in penetration testing and security assessment'
    },
    {
      icon: Lock,
      title: 'Detailed Reporting',
      description: 'Comprehensive reports with actionable recommendations and remediation guidance'
    }
  ];

  const testingTypes = [
    'Network Penetration Testing',
    'Web Application Security Testing',
    'Mobile Application Testing',
    'Wireless Network Assessment',
    'Social Engineering Testing',
    'Physical Security Assessment',
    'Cloud Infrastructure Testing',
    'API Security Testing'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Penetration Testing | Zion Tech Group</title>
        <meta name="description" content="Professional penetration testing services by Zion Tech Group. Identify vulnerabilities before attackers do with our comprehensive security assessments." />
        <meta name="keywords" content="penetration testing, security assessment, vulnerability testing, ethical hacking, security audit, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Penetration
              </span>
              <br />
              <span className="text-white">Testing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Identify vulnerabilities before attackers do with our comprehensive penetration testing services. 
              Protect your business with expert security assessments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center">
                Get Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Penetration Testing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our certified ethical hackers deliver comprehensive security assessments with actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Testing Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security testing across all your digital assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testingTypes.map((type, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PenetrationTestingPage;
