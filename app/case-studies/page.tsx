<<<<<<< HEAD

import { ArrowRight, TrendingUp, Users, Zap, Shield, BarChart3, Clock, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform AI Transformation",
      company: "TechStart Inc.",
      industry: "E-commerce",
      challenge: "Manual inventory management and customer service bottlenecks",
      solution: "AI-powered inventory optimization and automated customer support",
      results: [
        "60% reduction in inventory costs",
        "40% increase in customer satisfaction",
        "80% faster response times",
        "35% increase in sales"
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Star, Globe, Shield, CheckCircle } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered E-commerce Transformation",
      client: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Low conversion rates and poor customer experience",
      solution: "Implemented AI-powered recommendation engine and chatbot",
      results: [
        "40% increase in conversion rates",
        "60% reduction in customer service tickets",
        "25% increase in average order value"
>>>>>>> cursor/analyze-improve-and-deploy-application-67a4
      ],
      image: "/images/case-studies/ecommerce-ai.jpg",
      duration: "6 months",
<<<<<<< HEAD
      services: ["AI Analytics", "AI Customer Support", "Data Analytics"],
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Implementation",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Complex patient data analysis and treatment optimization",
      solution: "Advanced AI analytics platform for predictive healthcare insights",
      results: [
        "45% improvement in diagnosis accuracy",
        "30% reduction in treatment costs",
        "50% faster data processing",
        "25% increase in patient outcomes"
      ],
      duration: "8 months",
      services: ["AI Analytics", "Data Engineering", "Machine Learning"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 3,
      title: "Manufacturing Process Automation",
      company: "Industrial Corp",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and quality control issues",
      solution: "AI-driven process optimization and automated quality monitoring",
      results: [
        "55% increase in production efficiency",
        "70% reduction in defects",
        "40% decrease in downtime",
        "25% cost savings"
      ],
      duration: "10 months",
      services: ["AI Automation", "IoT Solutions", "Process Optimization"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "Financial Services Risk Management",
      company: "FinanceFirst",
      industry: "Financial Services",
      challenge: "Manual fraud detection and risk assessment processes",
      solution: "AI-powered fraud detection and real-time risk analysis",
      results: [
        "85% improvement in fraud detection",
        "60% reduction in false positives",
        "90% faster risk assessment",
        "50% decrease in financial losses"
      ],
      duration: "7 months",
      services: ["AI Fraud Detection", "Risk Analytics", "Cybersecurity"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 5,
      title: "Retail Customer Experience Enhancement",
      company: "RetailMax",
      industry: "Retail",
      challenge: "Personalized customer experience and inventory management",
      solution: "AI-driven personalization and demand forecasting",
      results: [
        "65% increase in customer engagement",
        "40% improvement in inventory turnover",
        "50% boost in average order value",
        "30% increase in customer retention"
      ],
      duration: "5 months",
      services: ["AI Marketing", "Recommendation Engine", "Data Analytics"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 6,
      title: "Logistics Optimization with 5G",
      company: "LogiTech",
      industry: "Logistics",
      challenge: "Real-time tracking and route optimization challenges",
      solution: "5G-enabled IoT network with AI-powered route optimization",
      results: [
        "45% reduction in delivery times",
        "35% decrease in fuel costs",
        "80% improvement in tracking accuracy",
        "25% increase in customer satisfaction"
      ],
      duration: "9 months",
      services: ["5G Solutions", "IoT Integration", "AI Analytics"],
      image: "/api/placeholder/600/400",
      featured: false
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Reduction", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "60%", label: "Average Efficiency Gain", icon: <Zap className="w-6 h-6" /> }
  ];

=======
      team: "8 specialists"
    },
    {
      id: 2,
      title: "Cloud Migration & Security Enhancement",
      client: "Financial Services Corp",
      industry: "Financial Services",
      challenge: "Legacy systems and security vulnerabilities",
      solution: "Complete cloud migration with advanced security measures",
      results: [
        "99.9% uptime achieved",
        "50% reduction in infrastructure costs",
        "Zero security incidents post-migration"
      ],
      image: "/images/case-studies/cloud-migration.jpg",
      duration: "4 months",
      team: "12 specialists"
    },
    {
      id: 3,
      title: "Digital Transformation for Manufacturing",
      client: "Manufacturing Solutions Ltd",
      industry: "Manufacturing",
      challenge: "Outdated processes and lack of data visibility",
      solution: "IoT integration and real-time analytics dashboard",
      results: [
        "30% improvement in operational efficiency",
        "20% reduction in downtime",
        "Real-time visibility into production metrics"
      ],
      image: "/images/case-studies/manufacturing-iot.jpg",
      duration: "8 months",
      team: "10 specialists"
    }
  ];

>>>>>>> cursor/analyze-improve-and-deploy-application-67a4
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and client transformations across various industries." />
      </Helmet>

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Success
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Stories
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries achieve remarkable results 
              with our AI and technology solutions. Real projects, real outcomes, real success.
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Target className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Success Stories</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Case Studies
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform their operations with cutting-edge technology solutions. 
              Real projects, real results, real impact.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-cyan-400 text-sm font-medium">{study.industry}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>Team: {study.team}</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let us help you achieve similar results. Our team of experts is ready to transform your business 
              with cutting-edge technology solutions.
>>>>>>> cursor/analyze-improve-and-deploy-application-67a4
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Success Story
                </span>
              </h2>
            </div>
            {(() => {
              const featured = caseStudies.find(cs => cs.featured);
              return featured ? (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                        <span className="text-cyan-400 text-sm">{featured.industry}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {featured.title}
                      </h3>
                      <p className="text-gray-300 mb-6 text-lg">
                        <strong>Challenge:</strong> {featured.challenge}
                      </p>
                      <p className="text-gray-300 mb-6 text-lg">
                        <strong>Solution:</strong> {featured.solution}
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">{featured.duration}</div>
                          <div className="text-gray-300 text-sm">Project Duration</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">{featured.results.length}</div>
                          <div className="text-gray-300 text-sm">Key Results</div>
                        </div>
                      </div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    <div>
                      <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-64 flex items-center justify-center mb-4">
                        <BarChart3 className="w-16 h-16 text-cyan-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-4">Key Results:</h4>
                      <ul className="space-y-2">
                        {featured.results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  All Case Studies
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete portfolio of successful projects across various industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.filter(cs => !cs.featured).map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full text-xs font-medium">
                        {caseStudy.industry}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {caseStudy.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {caseStudy.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm">
                      <strong>Challenge:</strong> {caseStudy.challenge}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {caseStudy.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.services.map((service, index) => (
                        <span
                          key={index}
                          className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the growing list of businesses that have transformed their operations with our AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-67a4
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
<<<<<<< HEAD
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
=======
                <Shield className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
>>>>>>> cursor/analyze-improve-and-deploy-application-67a4
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
<<<<<<< HEAD
}

=======
};

export default CaseStudiesPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-67a4
