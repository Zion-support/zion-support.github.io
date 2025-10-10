'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Shield, BarChart, Zap, ArrowRight, Star, Users, Award } from 'lucide-react';

const AiLegalAnalysisPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Document Analysis',
      description: 'AI-powered analysis of legal documents with 99% accuracy and instant insights'
    },
    {
      icon: BarChart,
      title: 'Risk Assessment',
      description: 'Comprehensive risk evaluation and compliance checking across all legal matters'
    },
    {
      icon: Shield,
      title: 'Contract Review',
      description: 'Automated contract analysis and clause identification for faster decision making'
    },
    {
      icon: Zap,
      title: 'Case Research',
      description: 'Intelligent legal research that finds relevant precedents and case law instantly'
    }
  ];

  const benefits = [
    'Reduce legal review time by 80%',
    'Improve accuracy by 95%',
    'Lower legal costs by 60%',
    'Enhance compliance monitoring',
    'Accelerate contract negotiations',
    'Minimize legal risks'
  ];

  const stats = [
    { icon: FileText, value: '80%', label: 'Time Savings' },
    { icon: BarChart, value: '95%', label: 'Accuracy' },
    { icon: Shield, value: '60%', label: 'Cost Reduction' },
    { icon: Users, value: '150+', label: 'Law Firms' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Legal Analysis - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered legal analysis solutions that reduce review time by 80% and improve accuracy by 95% for law firms and legal departments." />
        <meta name="keywords" content="AI legal analysis, legal AI, document analysis, contract review, legal research, law firm technology" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Legal Analysis</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Transform your legal practice with AI-powered analysis that reduces review time by 80% and improves accuracy by 95%.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced Legal AI Features</h2>
            <p className="text-gray-300 text-lg">Cutting-edge technology for modern legal practice</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Revolutionize Your Legal Practice</h2>
              <p className="text-gray-300 text-lg mb-8">
                Our AI-powered legal analysis tools help law firms and legal departments work more efficiently, reduce costs, and deliver better outcomes for their clients.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <FileText className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Schedule a Demo</h3>
              <p className="text-gray-300 mb-6">
                See how our AI legal analysis can transform your practice. Get a personalized demonstration tailored to your specific needs.
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Request Demo
                </button>
                <button className="w-full bg-white/10 text-white py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Download Whitepaper
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Transform Your Legal Practice Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading law firms and legal departments that are leveraging AI to deliver superior legal services and achieve better outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                <ArrowRight className="w-5 h-5" />
                Start Your Legal AI Journey
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Star className="w-5 h-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiLegalAnalysisPage;