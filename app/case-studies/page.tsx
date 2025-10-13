import React from 'react';
import { ArrowRight, TrendingUp, BarChart3, Zap, Users, Award, Clock, CheckCircle, Star, Globe, Shield, Brain } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Supply Chain Optimization",
      client: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Inefficient supply chain management leading to 30% waste and delayed deliveries",
      solution: "Implemented AI-driven demand forecasting and automated inventory management",
      results: [
        "40% reduction in inventory costs",
        "60% improvement in delivery times",
        "25% increase in customer satisfaction",
        "$2.5M annual savings"
      ],
      technologies: ["AI/ML", "Predictive Analytics", "IoT Sensors", "Cloud Computing"],
      duration: "6 months",
      team: "8 specialists",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Quantum-Enhanced Financial Risk Analysis",
      client: "Fortune 500 Bank",
      industry: "Financial Services",
      challenge: "Complex risk modeling taking weeks to process with traditional methods",
      solution: "Deployed quantum computing algorithms for real-time risk assessment",
      results: [
        "95% faster risk calculations",
        "99.9% accuracy in predictions",
        "50% reduction in false positives",
        "Real-time decision making"
      ],
      technologies: ["Quantum Computing", "Machine Learning", "Blockchain", "Advanced Analytics"],
      duration: "8 months",
      team: "12 specialists",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Smart City IoT Infrastructure",
      client: "Metropolitan City Council",
      industry: "Government",
      challenge: "Outdated city infrastructure and inefficient resource management",
      solution: "Comprehensive IoT network with AI-powered analytics and automation",
      results: [
        "35% reduction in energy consumption",
        "45% improvement in traffic flow",
        "60% faster emergency response",
        "80% citizen satisfaction increase"
      ],
      technologies: ["IoT", "5G Networks", "Edge Computing", "AI Analytics"],
      duration: "12 months",
      team: "15 specialists",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Blockchain-Based Healthcare Records",
      client: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "Fragmented patient records and security vulnerabilities",
      solution: "Secure blockchain platform for unified patient data management",
      results: [
        "100% data security compliance",
        "70% reduction in administrative costs",
        "90% faster data access",
        "Zero data breaches"
      ],
      technologies: ["Blockchain", "Smart Contracts", "Encryption", "Cloud Storage"],
      duration: "10 months",
      team: "10 specialists",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "AI-Driven Customer Service Automation",
      client: "E-commerce Giant",
      industry: "Retail",
      challenge: "High customer service costs and inconsistent support quality",
      solution: "Intelligent chatbot system with natural language processing",
      results: [
        "80% reduction in support tickets",
        "24/7 customer availability",
        "95% customer satisfaction",
        "60% cost reduction"
      ],
      technologies: ["AI/NLP", "Machine Learning", "API Integration", "Cloud Computing"],
      duration: "4 months",
      team: "6 specialists",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Cybersecurity AI Defense System",
      client: "Technology Corporation",
      industry: "Technology",
      challenge: "Increasing cyber threats and manual security monitoring",
      solution: "AI-powered threat detection and automated response system",
      results: [
        "99.9% threat detection accuracy",
        "90% faster incident response",
        "Zero successful breaches",
        "50% reduction in security costs"
      ],
      technologies: ["AI/ML", "Cybersecurity", "Real-time Monitoring", "Automation"],
      duration: "7 months",
      team: "9 specialists",
      image: "/api/placeholder/600/400"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Reduction", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "60%", label: "Average Efficiency Gain", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta
          name="description"
          content="Explore our successful case studies showcasing AI, quantum computing, blockchain, and IoT solutions that transformed businesses across industries."
        />
        <meta
          name="keywords"
          content="case studies, success stories, AI solutions, quantum computing, blockchain, IoT, business transformation, client results"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Award className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Success Stories</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              Case
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Studies
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI, quantum computing, blockchain, and IoT solutions.
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Projects
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from real clients across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                    <Globe className="w-12 h-12 text-cyan-400" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    <strong>Client:</strong> {study.client}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {study.challenge}
                    </p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      {study.team}
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our growing list of satisfied clients and transform your business 
              with cutting-edge technology solutions.
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
                Explore Services
                <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}