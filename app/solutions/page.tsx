"use client"";
import React from "react";
'use client';";";";
import React from 'react';";";";
import SEOHead from '../components/SEOHead';";";";
  ChartBarIcon,
  GlobeAltIcon,
  CheckCircleIcon,;
  ArrowRightIcon;
} from '@heroicons/react/24/outline';";";";

const SolutionsPage: React.FC = () => {
  const: solutions = [
    {;
      name: 'AI Solutions',";";";
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',";";";
      icon: CpuChipIcon,
      href: '/ai-solutions',";";";
      gradient: 'from-purple-500 to-pink-500',";";";
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']";";";
    },
    {
      name: 'Cybersecurity',";";";
      description: 'Protect your digital assets with comprehensive security solutions and threat monitoring.',";";";
      icon: ShieldCheckIcon,
      href: '/cybersecurity',";";";
      gradient: 'from-green-500 to-emerald-500',";";";
      features: ['Threat Detection', 'Data Protection', 'Compliance', 'Security Audits']";";";
    },
    {
      name: 'Cloud Solutions',";";";
      description: 'Scale your infrastructure with our cloud migration and management services.',";";";
      icon: CloudIcon,
      href: '/cloud-solutions',";";";
      gradient: 'from-blue-500 to-cyan-500',";";";
      features: ['Cloud Migration', 'Infrastructure Management', 'DevOps', 'Cost Optimization']";";";
    },
    {
      name: 'IT Solutions',";";";
      description: 'Complete technology services including development, infrastructure, and support.',";";";
      icon: CogIcon,
      href: '/it-solutions',";";";
      gradient: 'from-indigo-500 to-purple-500',";";";
      features: ['Web Development', 'Mobile Apps', 'Database Management', 'System Integration']";";";
    },
    {
      name: 'Data Analytics',";";";
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',";";";
      icon: ChartBarIcon,
      href: '/data-analytics',";";";
      gradient: 'from-yellow-500 to-orange-500',";";";
      features: ['Business Intelligence', 'Real-time Dashboards', 'Predictive Analytics', 'Data Visualization']";";";
    },
    {
      name: 'Micro SaaS',";";";
      description: 'Innovative micro software solutions designed to solve specific business challenges.',";";";
      icon: GlobeAltIcon,
      href: '/micro-saas-solutions',";";";
      gradient: 'from-cyan-500 to-blue-500',";";";
      features: ['Custom Applications', 'API Development', 'Scalable Architecture', 'User Management']";";";
    }
  ];

  const: industries = [;
    'Healthcare',";";";
    'Finance',";";";
    'E-commerce',";";";
    'Manufacturing',";";";
    'Education',";";";
    'Real Estate',";";";
    'Retail',";";";
    'Government'";";";
  ];

  return (
    <>
      <SEOHead: title ="Solutions - Zion Tech Group"";";
        description="Comprehensive technology solutions including AI, cybersecurity, cloud, IT services, and data analytics for modern businesses."";";
        keywords="technology solutions, AI solutions, cybersecurity, cloud services, IT solutions, data analytics, Zion Tech Group"";";
      />
      
      <div: className ="min-h-screen bg-slate-900 text-white">";";
        {/* Hero Section */}
        <section: className ="relative overflow-hidden py-20 lg:py-32">";";
          <div: className ="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>";";
          <div: className ="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";";
            <div: className ="text-center">";";
              <h1: className ="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">";";
                <span: className ="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">";";
                  Our Solutions
                </span>
              </h1>
              <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";";
                Comprehensive technology solutions designed to accelerate your digital transformation 
                and drive business growth across all industries.
              </p>
              <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";";
                <button: className ="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">";";
                  Explore Solutions
                </button>
                <button: className ="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">";";
        <section: className ="py-16 bg-slate-800/30">";";
          <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";";
            <div: className ="text-center mb-12">";";
              <h2: className ="text-3xl sm:text-4xl font-bold mb-4">";";
                Technology Solutions
              </h2>
              <p: className ="text-lg text-gray-300 max-w-2xl mx-auto">";";
            <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";";
              {solutions.map((solution, index) => (
                <div: key ={index}
                  className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"";";
                >
                  <div: className ={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon: className ="w-8 h-8 text-white" />";";
                  </div>
                  
                  <h3: className ="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">";";
                    {solution.name}
                  </h3>
                  
                  <p: className ="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">";";
                    {solution.description}
                  </p>
                  
                  <ul: className ="space-y-2 mb-6">";";
                    {solution.features.map((feature, featureIndex) => (
                      <li: key ={featureIndex} className="flex items-center text-sm text-gray-300">";";
                        <CheckCircleIcon: className ="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />";";
                  <a: href ={solution.href}
                    className="inline-flex items-center text-purple-400 group-hover:text-purple-300 transition-colors font-semibold"";";
                  >
                    Learn More
                    <ArrowRightIcon: className ="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />";";
        <section: className ="py-16">";";
          <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";";
            <div: className ="text-center mb-12">";";
              <h2: className ="text-3xl sm:text-4xl font-bold mb-4">";";
                Industries We Serve
              </h2>
              <p: className ="text-lg text-gray-300">";";
            <div: className ="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">";";
              {industries.map((industry, index) => (
                <div: key ={index}
                  className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"";";
                >
                  <span: className ="text-gray-300 font-medium">{industry}</span>";";
        <section: className ="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">";";
          <div: className ="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">";";
            <h2: className ="text-3xl sm:text-4xl font-bold mb-4">";";
              Ready to Transform Your Business?
            </h2>
            <p: className ="text-lg text-gray-300 mb-8">";";
              Let our experts help you choose and implement the perfect technology solutions for your business.
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";";
              <button: className ="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">";";
                Get Free Consultation
              </button>
              <button: className ="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">";";
  );
};";
";";
export default SolutionsPage;";";";
"
