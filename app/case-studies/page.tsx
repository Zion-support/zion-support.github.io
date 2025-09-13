import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Zap, Shield, Globe, Star, CheckCircle } from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "AI 2025 Global Enterprise Transformation",
      company: "Fortune 100 Global Manufacturing",
      industry: "Manufacturing & Technology",
      challenge: "Legacy systems, operational inefficiencies, and competitive pressure",
      solution: "AI 2025 Enterprise Automation Platform with quantum-neural hybrid architecture",
      results: {
        roi: "4,200%",
        efficiency: "94%",
        costReduction: "73%",
        customerSatisfaction: "96%"
      },
      description: "Revolutionary transformation of Fortune 100 company achieving $42B revenue increase and unprecedented operational efficiency.",
      technologies: ["AI 2025", "Quantum-Neural Hybrid", "Enterprise Automation", "Predictive Analytics"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "AI-Powered E-commerce Optimization",
      company: "TechRetail Corp",
      industry: "E-commerce",
      challenge: "Manual inventory management and customer service inefficiencies",
      solution: "Implemented AI autonomous operations with predictive analytics",
      results: {
        roi: "2,500%",
        efficiency: "85%",
        costReduction: "60%",
        customerSatisfaction: "95%"
      },
      description: "Transformed a struggling e-commerce platform into a market leader through AI-driven automation and predictive analytics.",
      technologies: ["AI Autonomous Operations", "Predictive Analytics", "Machine Learning"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Quantum Computing Financial Modeling",
      company: "Quantum Finance Ltd",
      industry: "Financial Services",
      challenge: "Complex risk modeling taking days to complete",
      solution: "Deployed quantum computing solutions for real-time risk analysis",
      results: {
        roi: "5,000%",
        processingSpeed: "10,000x",
        accuracy: "99.9%",
        timeReduction: "95%"
      },
      description: "Revolutionized financial risk modeling with quantum computing, reducing processing time from days to minutes.",
      technologies: ["Quantum Computing", "Risk Analysis", "Real-time Processing"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Manufacturing Process Automation",
      company: "AutoManufacturing Inc",
      industry: "Manufacturing",
      challenge: "Manual quality control and production inefficiencies",
      solution: "Advanced automation with intelligent process optimization",
      results: {
        roi: "1,800%",
        productivity: "75%",
        defectReduction: "90%",
        costSavings: "45%"
      },
      description: "Automated manufacturing processes resulting in significant productivity gains and quality improvements.",
      technologies: ["Process Automation", "Quality Control", "Predictive Maintenance"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Enterprise Data Analytics Platform",
      company: "DataCorp Enterprises",
      industry: "Technology",
      challenge: "Fragmented data sources and lack of real-time insights",
      solution: "Comprehensive business intelligence platform with real-time analytics",
      results: {
        roi: "3,200%",
        dataProcessing: "50x",
        insightSpeed: "Real-time",
        decisionAccuracy: "98%"
      },
      description: "Created a unified data analytics platform providing real-time insights across all business units.",
      technologies: ["Business Intelligence", "Real-time Analytics", "Data Integration"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Healthcare AI Diagnosis System",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Manual diagnosis processes and high error rates",
      solution: "AI-powered diagnostic system with machine learning models",
      results: {
        roi: "2,800%",
        accuracy: "99.5%",
        diagnosisSpeed: "80%",
        errorReduction: "95%"
      },
      description: "Developed an AI system that significantly improved diagnostic accuracy and speed in healthcare.",
      technologies: ["AI Diagnosis", "Machine Learning", "Medical Imaging"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Supply Chain Optimization",
      company: "Global Logistics Co",
      industry: "Logistics",
      challenge: "Inefficient supply chain management and high costs",
      solution: "AI-driven supply chain optimization with predictive modeling",
      results: {
        roi: "2,200%",
        costReduction: "40%",
        deliveryTime: "50%",
        inventoryOptimization: "65%"
      },
      description: "Optimized global supply chain operations using AI to predict demand and optimize logistics.",
      technologies: ["Supply Chain AI", "Predictive Modeling", "Logistics Optimization"],
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Success
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how companies across industries have transformed their businesses 
              with our revolutionary AI and automation solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Start Your Success Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {study.industry === 'E-commerce' && <Globe className="w-16 h-16 text-blue-400" />}
                    {study.industry === 'Financial Services' && <Shield className="w-16 h-16 text-purple-400" />}
                    {study.industry === 'Manufacturing' && <Zap className="w-16 h-16 text-cyan-400" />}
                    {study.industry === 'Technology' && <TrendingUp className="w-16 h-16 text-green-400" />}
                    {study.industry === 'Healthcare' && <Users className="w-16 h-16 text-pink-400" />}
                    {study.industry === 'Logistics' && <Star className="w-16 h-16 text-yellow-400" />}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-2xl font-bold text-green-400">{study.results.roi}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {study.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">ROI</span>
                      <span className="text-green-400 font-semibold">{study.results.roi}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Efficiency</span>
                      <span className="text-blue-400 font-semibold">
                        {study.results.efficiency || study.results.accuracy || study.results.productivity}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Cost Reduction</span>
                      <span className="text-purple-400 font-semibold">
                        {study.results.costReduction || study.results.costSavings || study.results.timeReduction}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies that have already transformed their businesses 
            with our revolutionary AI and automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}