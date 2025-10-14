import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon,
  CheckIcon,
  ChartBarIcon,
  TrendingUpIcon,
  ClockIcon,
  CurrencyDollarIcon } from '@heroicons/react/24/outline';
const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        { metric: 'Conversion Rate', value: '+45%', icon: TrendingUpIcon },
        { metric: 'Cart Abandonment', value: '-30%', icon: TrendingUpIcon },
        { metric: 'Revenue Growth', value: '+60%', icon: CurrencyDollarIcon;
      ],
      description: 'Our AI-powered quality control system revolutionized AutoParts Manufacturing\'s production line, dramatically reducing defects while increasing throughput.;'"
    },
    {
title: 'Cloud Migration & Optimization',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      challenge: 'On-premise infrastructure limiting scalability and performance',
      solution: 'Migrated to cloud infrastructure with auto-scaling and performance optimization',
      results: [
        { metric: 'Performance', value: '+200%', icon: TrendingUpIcon },
        { metric: 'Cost Savings', value: '-40%', icon: CurrencyDollarIcon },
        { metric: 'Uptime', value: '99.9%', icon: CheckIcon;
      ],
      description: 'SecureBank Ltd. successfully migrated to the cloud, achieving unprecedented scalability and performance while reducing operational costs.;'"
    }
  ];
const CaseStudiesPage: React.FC = () => {
  return (
<>    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">"
      <Helmet></Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI and IT solutions that transformed businesses across various industries." />"
        <meta name="keywords" content="case studies, success stories, AI implementation, IT solutions, business transformation" />"
      </Helmet>
      <div className="container mx-auto px-4 py-16">"
        {/* Hero Section */}
        <div className="text-center mb-16">"
          <h1 className="text-5xl font-bold text-white mb-6">"
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Stories</span>"
          </h1>
          <p>"
            Discover how we"ve helped businesses across various industries transform"
            their operations with cutting-edge AI and IT solutions.;
          </p>
        </div>
<div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Real Results for Real Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Discover how we've helped businesses across various industries transform their operations 
              and achieve remarkable growth with our technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our solutions have transformed businesses across different industries
            </p>
          </div>
          
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-slate-800 rounded-xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                        {study.industry;
                      </span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-purple-400 font-semibold mb-6">{study.client}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                                <result.icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="text-2xl font-bold text-white">{result.value}</div>
                              <div className="text-gray-400 text-sm">{result.metric}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                { /* Results */ }
                <div></div>
                  <h4 className="text-lg font-semibold text-white mb-4">Results</h4>"
                  <div className="grid grid-cols-2 gap-4">"
                    {study.results.map((result, resultIndex) => {
                      const Icon = result.icon;
                      return (
<>                        <div key={resultIndex} className="bg-white/5 rounded-lg p-4 text-center">"
                          <Icon className="w-8 h-8 text-violet-400 mx-auto mb-2" />"
                          <div className="text-2xl font-bold text-white mb-1">{result.value}</div>"
                          <div className="text-sm text-gray-400">{result.metric}</div>"
                        </div>
                      )}
                    }
                  </div>
                </div>
              </div>
            </div>
          )})
        </div>;
              Let us help you achieve similar results with our proven AI and IT solutions.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">"
                Start Your Project;
                <ArrowRight className="w-5 h-5 ml-2" />"
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">"
                View More Cases;
const CaseStudiesPage: React.FC = () => {
  return (
<>    <div></div>
      <Helmet></Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies at Zion Tech Group." />"
      </Helmet>
      <div className="min-h-screen bg-white">"
        <div className="container mx-auto px-4 py-16">"
          <div className="text-center">"
            <h1>"
              Case Studies;
            </h1>
            <p>"
              Discover how we've helped businesses transform with our AI and IT solutions.'
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">"
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">"
                <h3 className="text-lg font-semibold text-blue-900 mb-2">"
                  AI Implementation;
                </h3>
                <p>"
                  How we helped a Fortune 500 company implement AI solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">"
                <h3 className="text-lg font-semibold text-green-900 mb-2">"
                  Cloud Migration;
                </h3>
                <p>"
                  Successful cloud infrastructure migration for a growing startup.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">"
                <h3 className="text-lg font-semibold text-purple-900 mb-2">"
                  Cybersecurity;
                </h3>
                <p>"
                  Comprehensive security overhaul for a financial services company.
                </p>
              </div>
            </div>
            <div className="mt-12">"
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">"
                View All Case Studies;
              </button>
            </div>
          </div>;
const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>CaseStudiesPage - Zion Tech Group</title>
        <meta name="description" content="CaseStudiesPage - Zion Tech Group" />"
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">"
        <div className="text-center">"
          <h1>CaseStudiesPage</h1>"
          <p>This page is under construction.</p>"
        </div>
      </div>;
    </div>;  );
export default CaseStudiesPage;
    </div>
  )}
export default CaseStudiesPage;
"use client;
import React from 'react';
export default function CaseStudiesPage() {
  return (
<>    <div></div>;
      <h1>CaseStudiesPage</h1>;
      <p>This page is under development.</p>;
    </div>;
  )};
}