'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, TrendingUp, Users, Award, Clock, Target, CheckCircle, Star, BarChart3, Shield, Zap, Globe } from "lucide-react";

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      client: 'RetailCorp',
      industry: 'E-commerce',
      challenge: 'Legacy system causing 40% cart abandonment rate',
      solution: 'Implemented AI-powered recommendation engine and modern cloud infrastructure',
      results: [
        '60% increase in conversion rate',
        '45% reduction in page load time',
        '80% improvement in user engagement',
        '50% increase in average order value'
      ],
      image: '/images/case-studies/ecommerce.jpg',
      duration: '6 months',
      team: '12 developers'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data across multiple systems',
      solution: 'Built unified data platform with AI-powered analytics and predictive modeling',
      results: [
        '90% reduction in data processing time',
        '75% improvement in diagnostic accuracy',
        '60% cost savings in data management',
        '100% compliance with HIPAA regulations'
      ],
      image: '/images/case-studies/healthcare.jpg',
      duration: '8 months',
      team: '15 developers'
    },
    {
      id: 3,
      title: 'Financial Services Automation',
      client: 'FinTech Global',
      industry: 'Financial Services',
      challenge: 'Manual processes causing delays and errors',
      solution: 'Implemented RPA and AI-driven automation for loan processing and risk assessment',
      results: [
        '85% reduction in processing time',
        '95% accuracy in risk assessment',
        '70% cost reduction in operations',
        '50% increase in customer satisfaction'
      ],
      image: '/images/case-studies/fintech.jpg',
      duration: '10 months',
      team: '20 developers'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: TrendingUp },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Industry Awards', value: '25+', icon: Award }
  ];

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing: AI-Powered Predictive Maintenance",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Unplanned equipment downtime costing $2M annually",
      solution: "AI-powered predictive maintenance system with IoT sensors",
      results: [
        "85% reduction in unplanned downtime",
        "$1.7M annual cost savings",
        "99.2% equipment uptime achieved",
        "ROI of 340% in first year"
      ],
      duration: "6 months",
      team: "8 specialists",
      technologies: ["AI/ML", "IoT", "Predictive Analytics", "Cloud Infrastructure"],
      featured: true,
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Healthcare Provider: AI-Driven Patient Care Optimization",
      company: "Regional Healthcare System",
      industry: "Healthcare",
      challenge: "Patient wait times and resource allocation inefficiencies",
      solution: "AI analytics platform for patient flow optimization",
      results: [
        "40% reduction in patient wait times",
        "25% improvement in resource utilization",
        "95% patient satisfaction score",
        "30% increase in patient capacity"
      ],
      duration: "4 months",
      team: "6 specialists",
      technologies: ["AI Analytics", "Machine Learning", "Data Visualization", "Cloud Computing"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Financial Services: Advanced Fraud Detection System",
      company: "National Bank",
      industry: "Financial Services",
      challenge: "Increasing fraud incidents and false positives",
      solution: "AI-powered fraud detection with real-time monitoring",
      results: [
        "92% fraud detection accuracy",
        "60% reduction in false positives",
        "$3.2M prevented fraud losses",
        "99.8% system uptime"
      ],
      duration: "5 months",
      team: "10 specialists",
      technologies: ["AI/ML", "Real-time Analytics", "Cybersecurity", "Blockchain"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "E-commerce Platform: AI-Powered Personalization",
      company: "Online Retail Giant",
      industry: "E-commerce",
      challenge: "Low conversion rates and customer engagement",
      solution: "AI recommendation engine and personalized shopping experience",
      results: [
        "45% increase in conversion rates",
        "35% boost in average order value",
        "60% improvement in customer engagement",
        "28% increase in customer retention"
      ],
      duration: "3 months",
      team: "7 specialists",
      technologies: ["AI/ML", "Recommendation Engine", "Big Data", "Cloud Infrastructure"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Logistics Company: 5G-Enabled Smart Fleet Management",
      company: "International Logistics Corp",
      industry: "Logistics",
      challenge: "Fleet efficiency and real-time tracking limitations",
      solution: "5G-enabled IoT fleet management with AI optimization",
      results: [
        "30% improvement in fuel efficiency",
        "50% reduction in delivery times",
        "Real-time tracking accuracy of 99.5%",
        "25% increase in delivery capacity"
      ],
      duration: "8 months",
      team: "12 specialists",
      technologies: ["5G", "IoT", "AI/ML", "Edge Computing", "Cloud Platform"],
      featured: false,
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Government Agency: Cybersecurity Transformation",
      company: "Federal Government Agency",
      industry: "Government",
      challenge: "Cybersecurity vulnerabilities and compliance requirements",
      solution: "Comprehensive cybersecurity suite with AI monitoring",
      results: [
        "99.9% threat detection accuracy",
        "Zero security breaches in 12 months",
        "100% compliance achievement",
        "50% reduction in security incidents"
      ],
      duration: "10 months",
      team: "15 specialists",
      technologies: ["Cybersecurity", "AI/ML", "Compliance", "Cloud Security", "SIEM"],
      featured: false,
      image: "/api/placeholder/600/400"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
    { number: "99.9%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Industries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const industries = [
    "Manufacturing",
    "Healthcare",
    "Financial Services",
    "E-commerce",
    "Logistics",
    "Government",
    "Education",
    "Retail",
    "Technology",
    "Energy"
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta
          name="description"
          content="Explore our success stories and case studies. See how Zion Tech Group has helped businesses achieve remarkable results with AI, technology, and digital transformation solutions."
        />
        <meta
          name="keywords"
          content="case studies, success stories, client results, AI implementation, digital transformation, technology solutions, business outcomes"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Case Studies</h1>
          <p className="text-lg text-gray-300 mb-8">
            Success stories and case studies coming soon.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg p-6 mb-4">
                      <Icon className="w-12 h-12 text-purple-400 mx-auto" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                    <p className="text-gray-300">{stat.label}</p>
                  </div>
                );
              })}
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
              through innovative AI solutions, digital transformation, and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've delivered measurable impact for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <div className="text-6xl">📊</div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                      
                      <h4 className="text-white font-semibold mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>Team: {study.team}</span>
                      <span>Duration: {study.duration}</span>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
        {/* Featured Case Study */}
        {caseStudies.find(cs => cs.featured) && (
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
                return (
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                          <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                            {featured.industry}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                          {featured.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          <strong>Challenge:</strong> {featured.challenge}
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          <strong>Solution:</strong> {featured.solution}
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center text-gray-300">
                            <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                            <span className="text-sm">{featured.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Users className="w-4 h-4 mr-2 text-cyan-400" />
                            <span className="text-sm">{featured.team} specialists</span>
                          </div>
                        </div>
                        <Link
                          to={`/case-studies/${featured.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                        >
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl h-64 flex items-center justify-center">
                        <BarChart3 className="w-16 h-16 text-cyan-400" />
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </section>
        )}

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  All Case Studies
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive portfolio of successful implementations across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-48 flex items-center justify-center mb-4">
                    <BarChart3 className="w-12 h-12 text-cyan-400" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full text-xs font-medium">
                      {caseStudy.industry}
                    </span>
                    {caseStudy.featured && (
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                    <strong>Challenge:</strong> {caseStudy.challenge}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {caseStudy.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="flex items-center text-green-400 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {caseStudy.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {caseStudy.team}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Link
                      to={`/case-studies/${caseStudy.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                  Start Your Project
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Explore Our Services
                </button>
              </div>
        {/* Industries Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Industries We Serve
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We have successfully delivered solutions across diverse industries, 
                helping organizations achieve their digital transformation goals.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-gray-300 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of successful businesses that have transformed their operations with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
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
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
