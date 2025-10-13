import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Clock, Star } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      client: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Legacy system causing 40% cart abandonment and poor performance",
      solution: "Implemented modern cloud infrastructure with AI-powered recommendations",
      results: [
        "60% reduction in cart abandonment",
        "3x faster page load times",
        "45% increase in conversion rates",
        "99.9% uptime achieved"
      ],
      duration: "6 months",
      team: "8 developers",
      technologies: ["React", "Node.js", "AWS", "AI/ML", "MongoDB"]
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Platform",
      client: "MediCare Solutions",
      industry: "Healthcare",
      challenge: "Fragmented patient data across multiple systems affecting care quality",
      solution: "Built unified analytics platform with real-time data processing",
      results: [
        "50% faster diagnosis times",
        "30% reduction in readmission rates",
        "95% data accuracy improvement",
        "Compliance with HIPAA standards"
      ],
      duration: "8 months",
      team: "12 developers",
      technologies: ["Python", "TensorFlow", "PostgreSQL", "Docker", "Kubernetes"]
    },
    {
      id: 3,
      title: "Financial Services Automation",
      client: "FinTech Global",
      industry: "Financial Services",
      challenge: "Manual processes causing delays and errors in loan processing",
      solution: "Implemented AI-driven automation with blockchain integration",
      results: [
        "80% reduction in processing time",
        "99.5% accuracy in risk assessment",
        "60% cost reduction",
        "Full regulatory compliance"
      ],
      duration: "10 months",
      team: "15 developers",
      technologies: ["Java", "Spring Boot", "Blockchain", "AI/ML", "Microservices"]
    },
    {
      id: 4,
      title: "Manufacturing IoT Integration",
      client: "SmartManufacturing Co.",
      industry: "Manufacturing",
      challenge: "Inefficient production monitoring and quality control",
      solution: "Deployed IoT sensors with real-time analytics and predictive maintenance",
      results: [
        "25% increase in production efficiency",
        "40% reduction in equipment downtime",
        "35% improvement in quality control",
        "Real-time production monitoring"
      ],
      duration: "7 months",
      team: "10 developers",
      technologies: ["IoT", "Python", "React", "Time Series DB", "Machine Learning"]
    },
    {
      id: 5,
      title: "Educational Platform Modernization",
      client: "EduTech Academy",
      industry: "Education",
      challenge: "Outdated learning management system affecting student engagement",
      solution: "Built modern, interactive learning platform with AI tutoring",
      results: [
        "70% increase in student engagement",
        "45% improvement in learning outcomes",
        "90% student satisfaction rate",
        "Scalable to 100k+ users"
      ],
      duration: "9 months",
      team: "14 developers",
      technologies: ["React", "Node.js", "AI/ML", "MongoDB", "WebRTC"]
    },
    {
      id: 6,
      title: "Logistics Optimization System",
      client: "LogiFlow Solutions",
      industry: "Logistics",
      challenge: "Inefficient route planning and inventory management",
      solution: "Developed AI-powered optimization system with real-time tracking",
      results: [
        "30% reduction in delivery times",
        "25% decrease in fuel costs",
        "50% improvement in inventory accuracy",
        "Real-time tracking capabilities"
      ],
      duration: "5 months",
      team: "9 developers",
      technologies: ["Python", "AI/ML", "React", "PostgreSQL", "GPS Integration"]
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Industries Served", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and client transformations across various industries. See how we've helped businesses achieve their digital transformation goals." />
        <meta name="keywords" content="case studies, project portfolio, client success stories, digital transformation, technology solutions, business results" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Success Stories
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses across various industries achieve their digital transformation goals and drive measurable results.
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
                Our Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Real projects, real results. See how we've transformed businesses across different industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{study.client}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {study.team}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-white/10 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="bg-white/10 px-2 py-1 rounded text-xs">
                          +{study.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
              Join the ranks of successful businesses that have transformed their operations with our technology solutions.
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
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
