'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, TrendingUp, Award, Clock, CheckCircle, Zap, Brain, Cloud, Shield, Code, BarChart, Target, Globe, Database, Smartphone, Lock, Settings } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and chatbot',
      results: [
        '300% increase in conversion rates',
        '50% reduction in customer service costs',
        '25% increase in average order value',
        '99.9% uptime achieved'
      ],
      duration: '6 months',
      team: '8 specialists',
      investment: '$150,000',
      roi: '450%',
      icon: Brain
    },
    {
      id: 2,
      title: 'Healthcare AI Implementation',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Manual medical record processing and diagnosis delays',
      solution: 'AI-powered medical imaging and document processing system',
      results: [
        '80% faster diagnosis times',
        '95% accuracy in image analysis',
        '60% reduction in processing errors',
        'HIPAA compliance maintained'
      ],
      duration: '8 months',
      team: '12 specialists',
      investment: '$300,000',
      roi: '320%',
      icon: Shield
    },
    {
      id: 3,
      title: 'Financial Services Automation',
      company: 'FinTech Global',
      industry: 'Financial Services',
      challenge: 'Manual fraud detection and slow loan processing',
      solution: 'AI-powered fraud detection and automated loan processing',
      results: [
        '90% reduction in false positives',
        '70% faster loan processing',
        '99.5% fraud detection accuracy',
        '40% cost reduction'
      ],
      duration: '10 months',
      team: '15 specialists',
      investment: '$500,000',
      roi: '280%',
      icon: BarChart
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered'
    },
    {
      icon: TrendingUp,
      value: '350%',
      label: 'Average ROI',
      description: 'Across all projects'
    },
    {
      icon: Award,
      value: '99.9%',
      label: 'Success Rate',
      description: 'Project completion'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support',
      description: 'Always here to help'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentCaseStudy = caseStudies[currentIndex];

  return (
    <div className="bg-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real projects, real results. See how we've transformed businesses across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="cyber-card hologram-card p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <currentCaseStudy.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{currentCaseStudy.title}</h3>
                <p className="text-cyan-400 font-semibold">{currentCaseStudy.company}</p>
                <p className="text-gray-400">{currentCaseStudy.industry}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
              <p className="text-gray-300 mb-4">{currentCaseStudy.challenge}</p>
              
              <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
              <p className="text-gray-300 mb-4">{currentCaseStudy.solution}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
              <ul className="space-y-2">
                {currentCaseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{currentCaseStudy.duration}</div>
                <div className="text-gray-400 text-xs">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{currentCaseStudy.team}</div>
                <div className="text-gray-400 text-xs">Team Size</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{currentCaseStudy.roi}</div>
                <div className="text-gray-400 text-xs">ROI</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-cyan-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-400 text-xs">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Create Your Success Story?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how we can help transform your business with AI and IT solutions.
              </p>
              <button className="cyber-button w-full">
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;