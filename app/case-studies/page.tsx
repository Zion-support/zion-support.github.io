'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building, Users, TrendingUp } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Service for E-commerce',
      client: 'ShopTech Solutions',
      industry: 'E-commerce',
      duration: '3 months',
      image: '/api/placeholder/600/400',
      description: 'Implemented AI chatbots and automated customer service solutions resulting in 40% reduction in response time and 60% cost savings.',
      results: ['40% faster response time', '60% cost reduction', '95% customer satisfaction'],
      technologies: ['AI Chatbots', 'NLP', 'Machine Learning', 'API Integration']
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      duration: '6 months',
      image: '/api/placeholder/600/400',
      description: 'Migrated legacy banking systems to cloud infrastructure with enhanced security and 99.9% uptime guarantee.',
      results: ['99.9% uptime', '50% faster processing', 'Enhanced security', 'Scalable infrastructure'],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Microservices']
    },
    {
      title: 'Data Analytics Dashboard for Healthcare',
      client: 'MedCare Systems',
      industry: 'Healthcare',
      duration: '4 months',
      image: '/api/placeholder/600/400',
      description: 'Developed real-time analytics dashboard for patient data analysis and predictive healthcare insights.',
      results: ['Real-time insights', '30% faster diagnosis', 'Improved patient outcomes', 'Cost optimization'],
      technologies: ['React', 'D3.js', 'Python', 'Machine Learning']
    },
    {
      title: 'Mobile App for Logistics Company',
      client: 'LogiFlow Inc',
      industry: 'Logistics',
      duration: '5 months',
      image: '/api/placeholder/600/400',
      description: 'Built cross-platform mobile application for fleet management and real-time tracking with GPS integration.',
      results: ['Real-time tracking', '25% efficiency gain', 'Reduced fuel costs', 'Better customer service'],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'GPS APIs']
    },
    {
      title: 'AI Content Generation for Marketing',
      client: 'MarketPro Agency',
      industry: 'Marketing',
      duration: '2 months',
      image: '/api/placeholder/600/400',
      description: 'Implemented AI-powered content generation system for automated marketing campaigns and social media posts.',
      results: ['80% time savings', '3x content output', 'Consistent branding', 'Higher engagement'],
      technologies: ['OpenAI GPT', 'Python', 'Content APIs', 'Social Media Integration']
    },
    {
      title: 'Cybersecurity Implementation for Manufacturing',
      client: 'ManufactureCorp',
      industry: 'Manufacturing',
      duration: '4 months',
      image: '/api/placeholder/600/400',
      description: 'Comprehensive cybersecurity solution including threat monitoring, incident response, and compliance management.',
      results: ['Zero security breaches', '100% compliance', '24/7 monitoring', 'Reduced risk'],
      technologies: ['SIEM', 'Firewall', 'Intrusion Detection', 'Compliance Tools']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful projects and case studies showcasing how we've helped businesses transform with AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-cyan-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI and IT solutions.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-cyan-400 font-semibold">{study.industry}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {study.duration}
                    </span>
                    <span className="text-gray-400 text-sm">{study.client}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-slate-800/50 text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">200+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>View Pricing</span>
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;