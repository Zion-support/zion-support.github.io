'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Globe, Zap, BarChart3, Shield, Clock, Target } from 'lucide-react';
import { Link } from "react-router-dom";

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      client: "RetailMax Inc.",
      industry: "E-commerce",
      challenge: "Legacy system causing 40% cart abandonment and poor user experience",
      solution: "Complete platform rebuild with AI-powered recommendations and real-time analytics",
      results: [
        "85% reduction in cart abandonment",
        "200% increase in conversion rates",
        "60% improvement in page load times",
        "40% increase in average order value"
      ],
      technologies: ["React", "Node.js", "AI/ML", "AWS", "MongoDB"],
      duration: "6 months",
      team: "12 developers",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "AI-Powered Customer Support",
      client: "TechSupport Solutions",
      industry: "Customer Service",
      challenge: "High support ticket volume and long response times affecting customer satisfaction",
      solution: "Implemented AI chatbot with natural language processing and automated ticket routing",
      results: [
        "70% reduction in response time",
        "90% customer satisfaction rate",
        "50% reduction in support costs",
        "24/7 automated support coverage"
      ],
      technologies: ["AI/ML", "NLP", "Python", "TensorFlow", "AWS"],
      duration: "4 months",
      team: "8 developers",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Blockchain Analytics Platform",
      client: "CryptoFinance Corp",
      industry: "Financial Services",
      challenge: "Need for real-time blockchain transaction monitoring and fraud detection",
      solution: "Built comprehensive analytics platform with AI-powered risk assessment",
      results: [
        "99.9% fraud detection accuracy",
        "Real-time transaction monitoring",
        "50% reduction in false positives",
        "Compliance with financial regulations"
      ],
      technologies: ["Blockchain", "AI/ML", "Python", "React", "PostgreSQL"],
      duration: "8 months",
      team: "15 developers",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Smart Inventory Management",
      client: "Manufacturing Plus",
      industry: "Manufacturing",
      challenge: "Inefficient inventory management leading to stockouts and overstocking",
      solution: "AI-powered inventory optimization with predictive analytics and automated reordering",
      results: [
        "30% reduction in carrying costs",
        "95% reduction in stockouts",
        "25% improvement in cash flow",
        "Real-time inventory visibility"
      ],
      technologies: ["AI/ML", "IoT", "Python", "React", "AWS"],
      duration: "5 months",
      team: "10 developers",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Climate Analytics Dashboard",
      client: "GreenTech Industries",
      industry: "Environmental",
      challenge: "Need for comprehensive carbon footprint tracking and sustainability reporting",
      solution: "Built AI-powered climate analytics platform with ESG reporting capabilities",
      results: [
        "40% reduction in carbon footprint",
        "Automated ESG reporting",
        "Real-time sustainability metrics",
        "Compliance with environmental standards"
      ],
      technologies: ["AI/ML", "Data Analytics", "Python", "React", "AWS"],
      duration: "7 months",
      team: "12 developers",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Video Content Generation",
      client: "MediaPro Agency",
      industry: "Media & Marketing",
      challenge: "High cost and time for creating marketing videos and content",
      solution: "AI-powered video generation platform with automated script creation and editing",
      results: [
        "80% reduction in video production time",
        "60% cost savings on content creation",
        "10x increase in content output",
        "Consistent brand messaging"
      ],
      technologies: ["AI/ML", "Computer Vision", "Python", "React", "AWS"],
      duration: "6 months",
      team: "9 developers",
      image: "/api/placeholder/600/400"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Award className="w-8 h-8" /> },
    { number: "95%", label: "Client Satisfaction", icon: <Users className="w-8 h-8" /> },
    { number: "200%", label: "Average ROI", icon: <TrendingUp className="w-8 h-8" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-8 h-8" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Success Stories | Zion Tech Group</title>
        <meta
          name="description"
          content="Explore our successful projects and case studies. See how we've helped businesses transform with AI, blockchain, and cutting-edge technology solutions."
        />
        <meta
          name="keywords"
          content="case studies, success stories, AI projects, blockchain solutions, e-commerce, customer support, inventory management, climate analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with cutting-edge AI, blockchain, 
              and technology solutions. Real results from real clients.
            </p>
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
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've transformed businesses across industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>
                      <div className="flex items-center text-cyan-400 font-semibold mb-2">
                        <Globe className="w-4 h-4 mr-2" />
                        {study.client}
                      </div>
                      <div className="text-gray-400 text-sm">{study.industry}</div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {study.team}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you achieve similar results. Contact us today to discuss your project 
              and discover how we can transform your business.
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
                View Our Services
                <Zap className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;