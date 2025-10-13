import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Zap, Database, Globe, Users, Award } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Transformation",
      client: "TechRetail Inc.",
      industry: "E-Commerce",
      challenge: "Legacy system causing 40% cart abandonment rate",
      solution: "Complete platform rebuild with AI-powered recommendations",
      results: [
        "60% increase in conversion rate",
        "45% reduction in page load time",
        "80% improvement in user satisfaction"
      ],
      technologies: ["React", "Node.js", "AI/ML", "Cloud Infrastructure"],
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Healthcare Data Security Overhaul",
      client: "MedSecure Health",
      industry: "Healthcare",
      challenge: "HIPAA compliance and data breach prevention",
      solution: "Comprehensive security framework with real-time monitoring",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security incidents in 18 months",
        "50% faster data processing"
      ],
      technologies: ["Cybersecurity", "Blockchain", "AI Monitoring", "Cloud Security"],
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Manufacturing IoT Integration",
      client: "SmartManufacturing Co.",
      industry: "Manufacturing",
      challenge: "Manual processes causing 30% efficiency loss",
      solution: "IoT sensors and AI-powered predictive maintenance",
      results: [
        "35% increase in production efficiency",
        "60% reduction in equipment downtime",
        "25% cost savings on maintenance"
      ],
      technologies: ["IoT", "AI/ML", "5G", "Edge Computing"],
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Financial Services Digital Banking",
      client: "FinTech Solutions",
      industry: "Financial Services",
      challenge: "Outdated banking system limiting growth",
      solution: "Modern digital banking platform with AI fraud detection",
      results: [
        "200% increase in mobile app usage",
        "90% reduction in fraud incidents",
        "40% improvement in customer satisfaction"
      ],
      technologies: ["React Native", "Blockchain", "AI/ML", "Microservices"],
      icon: <Database className="w-8 h-8" />
    },
    {
      id: 5,
      title: "Smart City Infrastructure",
      client: "MetroCity Government",
      industry: "Government",
      challenge: "Inefficient city services and resource management",
      solution: "Comprehensive smart city platform with real-time analytics",
      results: [
        "30% reduction in energy consumption",
        "50% improvement in traffic flow",
        "25% increase in citizen satisfaction"
      ],
      technologies: ["5G", "IoT", "AI Analytics", "Cloud Infrastructure"],
      icon: <Globe className="w-8 h-8" />
    },
    {
      id: 6,
      title: "Educational Platform Modernization",
      client: "EduTech University",
      industry: "Education",
      challenge: "Outdated learning management system",
      solution: "AI-powered personalized learning platform",
      results: [
        "45% improvement in student engagement",
        "60% increase in course completion rates",
        "35% reduction in administrative overhead"
      ],
      technologies: ["React", "AI/ML", "Cloud Computing", "Analytics"],
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and client transformations across various industries." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our successful projects and client transformations across various industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                    {study.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{study.title}</h3>
                    <p className="text-cyan-400 font-semibold">{study.client}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-gray-300 font-semibold mb-1">Challenge:</h4>
                    <p className="text-gray-400 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-300 font-semibold mb-1">Solution:</h4>
                    <p className="text-gray-400 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-gray-300 font-semibold mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="text-green-400 text-sm flex items-center">
                        <Award className="w-4 h-4 mr-2 text-green-500" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-gray-300 font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with cutting-edge technology solutions.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 inline-flex items-center space-x-2 text-lg"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}