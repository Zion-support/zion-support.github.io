import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Cloud, Brain, Zap, CheckCircle, Star, Users, Award, BarChart3 } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      client: "TechStart Inc.",
      industry: "E-commerce",
      challenge: "Legacy system struggling with 500% traffic growth during peak seasons",
      solution: "Migrated to cloud-native architecture with AI-powered recommendation engine",
      results: [
        "300% increase in page load speed",
        "99.9% uptime during peak traffic",
        "40% increase in conversion rates",
        "50% reduction in infrastructure costs"
      ],
      technologies: ["React", "Node.js", "AWS", "Machine Learning", "Redis"],
      duration: "6 months",
      teamSize: "8 developers",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Data Security Enhancement",
      client: "MediCare Solutions",
      industry: "Healthcare",
      challenge: "HIPAA compliance requirements and increasing cybersecurity threats",
      solution: "Comprehensive security audit and implementation of zero-trust architecture",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security incidents in 12 months",
        "60% faster threat detection",
        "95% reduction in false positive alerts"
      ],
      technologies: ["Cybersecurity", "Zero Trust", "SIEM", "Encryption", "Compliance"],
      duration: "4 months",
      teamSize: "5 security experts",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 3,
      title: "Manufacturing IoT Integration",
      client: "Global Manufacturing Co.",
      industry: "Manufacturing",
      challenge: "Manual processes causing 20% production inefficiency",
      solution: "IoT sensors and AI analytics for predictive maintenance and automation",
      results: [
        "25% increase in production efficiency",
        "40% reduction in equipment downtime",
        "30% decrease in maintenance costs",
        "Real-time production monitoring"
      ],
      technologies: ["IoT", "Machine Learning", "Cloud Computing", "Analytics", "Automation"],
      duration: "8 months",
      teamSize: "12 engineers",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "Financial Services Digital Transformation",
      client: "FinTech Innovations",
      industry: "Financial Services",
      challenge: "Outdated systems preventing digital banking expansion",
      solution: "Complete digital transformation with microservices architecture",
      results: [
        "200% increase in mobile app usage",
        "50% faster transaction processing",
        "99.99% system reliability",
        "Seamless customer experience"
      ],
      technologies: ["Microservices", "React Native", "Blockchain", "API Gateway", "Kubernetes"],
      duration: "10 months",
      teamSize: "15 developers",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 5,
      title: "Education Platform Modernization",
      client: "EduTech Academy",
      industry: "Education",
      challenge: "Scalability issues with 100,000+ concurrent users",
      solution: "Cloud migration with auto-scaling and AI-powered personalization",
      results: [
        "500% increase in concurrent user capacity",
        "70% improvement in user engagement",
        "90% reduction in server costs",
        "Personalized learning paths for students"
      ],
      technologies: ["Cloud Migration", "AI", "Auto-scaling", "Personalization", "Analytics"],
      duration: "7 months",
      teamSize: "10 developers",
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 6,
      title: "Retail Analytics Platform",
      client: "RetailMax Chain",
      industry: "Retail",
      challenge: "Lack of real-time insights into customer behavior and inventory",
      solution: "Advanced analytics platform with real-time data processing",
      results: [
        "35% increase in sales through better inventory management",
        "Real-time customer behavior insights",
        "60% reduction in stockouts",
        "Predictive demand forecasting"
      ],
      technologies: ["Big Data", "Analytics", "Real-time Processing", "Machine Learning", "Dashboard"],
      duration: "5 months",
      teamSize: "7 data scientists",
      image: "/api/placeholder/600/400",
      featured: false
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Industries Served", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Project Success Rate", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const industries = [
    { name: "E-commerce", count: 25, icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Healthcare", count: 18, icon: <Shield className="w-5 h-5" /> },
    { name: "Finance", count: 22, icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Manufacturing", count: 15, icon: <Zap className="w-5 h-5" /> },
    { name: "Education", count: 12, icon: <Brain className="w-5 h-5" /> },
    { name: "Technology", count: 30, icon: <Cloud className="w-5 h-5" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories and Client Transformations</title>
        <meta name="description" content="Explore our successful projects and client transformations across various industries. See how we've helped businesses achieve their digital goals." />
        <meta name="keywords" content="case studies, success stories, client projects, digital transformation, technology solutions, business results" />
      </Helmet>
      
      <SEOOptimizer
        title="Case Studies - Success Stories and Client Transformations | Zion Tech Group"
        description="Explore our successful projects and client transformations across various industries. See how we've helped businesses achieve their digital goals."
        keywords="case studies, success stories, client projects, digital transformation, technology solutions, business results, project portfolio"
        canonical="https://ziontechgroup.com/case-studies"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Success
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Stories
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries transform their operations, 
              increase efficiency, and achieve remarkable growth through innovative technology solutions.
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
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Services
                <TrendingUp className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expertise spans across multiple industries, delivering tailored solutions for diverse business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="text-center group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-1">{industry.name}</h3>
                  <p className="text-cyan-400 text-sm">{industry.count} projects</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Case Studies
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our most impactful projects and see the transformative results we've achieved for our clients.
              </p>
            </div>
            
            <div className="space-y-16">
              {caseStudies.filter(study => study.featured).map((study, index) => (
                <div
                  key={study.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                            <TrendingUp className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-white font-bold text-lg">{study.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                        <span className="text-gray-400 text-sm">{study.industry}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                      <p className="text-gray-300 mb-2"><strong>Client:</strong> {study.client}</p>
                      <p className="text-gray-300 mb-4"><strong>Duration:</strong> {study.duration}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse through our complete portfolio of successful projects and client transformations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                    {study.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-cyan-400 text-sm font-medium">{study.industry}</span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {study.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the ranks of successful businesses that have transformed their operations with our innovative solutions. 
              Let's discuss how we can help you achieve your goals.
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
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore Services
                <TrendingUp className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}