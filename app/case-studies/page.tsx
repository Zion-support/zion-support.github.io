import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Star, Globe, Shield, CheckCircle, TrendingUp, Zap, BarChart3, Clock } from 'lucide-react';

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
        "40% reduction in inventory costs",
        "60% improvement in customer satisfaction",
        "80% reduction in response time",
        "25% increase in sales"
      ],
      duration: "6 months",
      team: "8 developers",
      technologies: ["AI/ML", "Cloud Computing", "Automation"],
      image: "/case-studies/ecommerce-ai.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Financial Services Cybersecurity Overhaul",
      company: "Global Finance Corp",
      industry: "Financial Services",
      challenge: "Increasing cyber threats and compliance requirements",
      solution: "Comprehensive cybersecurity framework and AI-powered threat detection",
      results: [
        "99.9% security uptime",
        "Zero security breaches",
        "50% reduction in false positives",
        "100% compliance achievement"
      ],
      duration: "4 months",
      team: "12 security experts",
      technologies: ["Cybersecurity", "AI", "Compliance"],
      image: "/case-studies/cybersecurity-finance.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Manufacturing IoT and Analytics Platform",
      company: "Industrial Solutions Ltd",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and lack of real-time insights",
      solution: "IoT sensors, data analytics, and predictive maintenance",
      results: [
        "30% increase in production efficiency",
        "45% reduction in downtime",
        "20% decrease in maintenance costs",
        "Real-time production monitoring"
      ],
      duration: "8 months",
      team: "15 engineers",
      technologies: ["IoT", "Data Analytics", "Cloud Computing"],
      image: "/case-studies/manufacturing-iot.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Healthcare AI Diagnostics System",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Manual diagnostic processes and limited specialist availability",
      solution: "AI-powered diagnostic system with image recognition",
      results: [
        "85% diagnostic accuracy",
        "70% faster diagnosis",
        "24/7 availability",
        "Reduced specialist workload"
      ],
      duration: "10 months",
      team: "20 developers and medical experts",
      technologies: ["AI/ML", "Computer Vision", "Healthcare"],
      image: "/case-studies/healthcare-ai.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Retail Chain Cloud Migration",
      company: "RetailMax Corporation",
      industry: "Retail",
      challenge: "Legacy systems and scalability issues",
      solution: "Complete cloud migration with microservices architecture",
      results: [
        "90% improvement in system performance",
        "99.9% uptime achievement",
        "60% reduction in infrastructure costs",
        "Seamless scalability"
      ],
      duration: "12 months",
      team: "25 cloud architects",
      technologies: ["Cloud Computing", "Microservices", "DevOps"],
      image: "/case-studies/retail-cloud.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Government Digital Transformation",
      company: "City of Innovation",
      industry: "Government",
      challenge: "Outdated citizen services and inefficient processes",
      solution: "Digital platform with AI-powered citizen services",
      results: [
        "50% reduction in service delivery time",
        "80% citizen satisfaction increase",
        "40% cost savings",
        "24/7 digital services"
      ],
      duration: "18 months",
      team: "30 developers and consultants",
      technologies: ["Digital Transformation", "AI", "Cloud Computing"],
      image: "/case-studies/government-digital.jpg",
      featured: false
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta
          name="description"
          content="Explore our successful projects and case studies. See how we've helped businesses transform with AI, cybersecurity, and cloud solutions."
        />
        <meta
          name="keywords"
          content="case studies, success stories, AI projects, cybersecurity solutions, cloud migration, digital transformation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our most impactful projects and see the results we've achieved for our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.filter(study => study.featured).map((study) => (
                <div
                  key={study.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-cyan-400 font-medium">{study.company}</p>
                      <p className="text-gray-400 text-sm">{study.industry}</p>
                    </div>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    <h4 className="text-white font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-300 mb-4">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        <span>{study.team}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Browse through our complete portfolio of successful projects.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-cyan-400 font-medium">{study.company}</p>
                      <p className="text-gray-400 text-sm">{study.industry}</p>
                    </div>
                    {study.featured && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{study.challenge}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Results:</h4>
                    <div className="space-y-1">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-3 h-3" />
                      <span>{study.team}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}