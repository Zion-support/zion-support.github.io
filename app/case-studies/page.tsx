import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Zap, BarChart3, Clock, CheckCircle, Target, Star, Globe, Shield, Users, Award, ExternalLink } from 'lucide-react';

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
      ],
      image: "/api/placeholder/600/400",
      duration: "6 months",
      services: ["AI Analytics", "AI Customer Support", "Data Analytics"],
      featured: true,
      description: "A comprehensive AI transformation that revolutionized an e-commerce platform's operations through intelligent automation and predictive analytics."
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
      featured: false,
      description: "Revolutionary healthcare data analytics solution that improved patient care through AI-powered insights and predictive modeling."
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
      featured: false,
      description: "Complete manufacturing transformation through AI automation, resulting in significant efficiency gains and quality improvements."
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
      featured: true,
      description: "Advanced AI-powered risk management system that dramatically improved fraud detection and reduced financial losses."
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
      featured: false,
      description: "AI-powered retail transformation that enhanced customer experience through personalization and intelligent inventory management."
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
      featured: true,
      description: "Next-generation logistics solution leveraging 5G technology and AI for optimal route planning and real-time tracking."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Reduction", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "60%", label: "Average Efficiency Gain", icon: <Zap className="w-6 h-6" /> }
  ];

  const industries = [
    { name: "E-commerce", count: 12, icon: <Globe className="w-5 h-5" /> },
    { name: "Healthcare", count: 8, icon: <Shield className="w-5 h-5" /> },
    { name: "Manufacturing", count: 15, icon: <Zap className="w-5 h-5" /> },
    { name: "Financial Services", count: 10, icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Retail", count: 7, icon: <Users className="w-5 h-5" /> },
    { name: "Logistics", count: 5, icon: <Target className="w-5 h-5" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Success Stories | Zion Tech Group</title>
        <meta
          name="description"
          content="Explore our success stories and case studies showcasing how Zion Tech Group has transformed businesses across various industries with AI and technology solutions."
        />
        <meta
          name="keywords"
          content="case studies, success stories, AI transformation, business results, client testimonials, project outcomes"
        />
      </Helmet>

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
              Discover how we've helped businesses across various industries transform their operations 
              and achieve remarkable results with our AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                View Our Services
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
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Industries We Serve
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We have successfully delivered solutions across multiple industries, 
                helping businesses achieve their digital transformation goals.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-cyan-400">{industry.count} projects</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Case Studies
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our most impactful projects and see how we've helped businesses achieve extraordinary results.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.filter(study => study.featured).map((study) => (
                <div
                  key={study.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative"
                >
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      FEATURED
                    </span>
                  </div>
                  
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <Clock className="w-4 h-4 mr-2" />
                      {study.duration}
                      <span className="mx-2">•</span>
                      <span className="text-cyan-400">{study.industry}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {study.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {study.results.slice(0, 4).map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Read Full Case Study
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                      <div className="flex space-x-2">
                        {study.services.slice(0, 2).map((service, idx) => (
                          <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs border border-cyan-500/30">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                Browse through our complete portfolio of successful projects and transformations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative"
                >
                  {study.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        FEATURED
                      </span>
                    </div>
                  )}
                  
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <Clock className="w-4 h-4 mr-2" />
                      {study.duration}
                      <span className="mx-2">•</span>
                      <span className="text-cyan-400">{study.industry}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {study.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="grid grid-cols-2 gap-1">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                            <span className="truncate">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                      <div className="flex space-x-1">
                        {study.services.slice(0, 1).map((service, idx) => (
                          <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs border border-cyan-500/30">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the growing list of businesses that have transformed their operations with our AI and technology solutions. 
              Let's discuss how we can help you achieve similar results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}