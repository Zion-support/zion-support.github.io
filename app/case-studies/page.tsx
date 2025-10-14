import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Star, Globe, Shield, CheckCircle, TrendingUp, Zap, BarChart3, Clock } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

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
        "25% increase in revenue"
      ],
      duration: "6 months",
      team: "8 developers",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Platform",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Fragmented patient data and inefficient diagnosis processes",
      solution: "Unified data platform with AI-powered diagnostic assistance",
      results: [
        "50% faster diagnosis times",
        "30% reduction in misdiagnosis",
        "90% improvement in data accuracy",
        "40% cost savings"
      ],
      duration: "8 months",
      team: "12 developers",
      technologies: ["Python", "PyTorch", "Vue.js", "Azure"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Financial Services Automation",
      company: "FinanceCorp",
      industry: "Financial Services",
      challenge: "Manual loan processing and risk assessment delays",
      solution: "AI-driven loan approval system with real-time risk analysis",
      results: [
        "70% faster loan processing",
        "45% reduction in default rates",
        "85% improvement in accuracy",
        "60% cost reduction"
      ],
      duration: "10 months",
      team: "15 developers",
      technologies: ["Python", "Scikit-learn", "Angular", "GCP"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Manufacturing IoT Integration",
      company: "ManufacturingPro",
      industry: "Manufacturing",
      challenge: "Inefficient production monitoring and quality control",
      solution: "IoT sensors with AI-powered predictive maintenance",
      results: [
        "35% reduction in downtime",
        "50% improvement in quality control",
        "25% increase in production efficiency",
        "40% cost savings"
      ],
      duration: "7 months",
      team: "10 developers",
      technologies: ["Python", "TensorFlow", "React", "AWS IoT"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Retail Customer Experience Enhancement",
      company: "RetailMax",
      industry: "Retail",
      challenge: "Poor customer experience and low conversion rates",
      solution: "AI-powered recommendation engine and personalized shopping experience",
      results: [
        "55% increase in conversion rates",
        "40% improvement in customer retention",
        "30% increase in average order value",
        "50% reduction in cart abandonment"
      ],
      duration: "5 months",
      team: "6 developers",
      technologies: ["Python", "PyTorch", "Next.js", "AWS"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Supply Chain Optimization",
      company: "LogisticsPlus",
      industry: "Logistics",
      challenge: "Inefficient supply chain management and delivery delays",
      solution: "AI-powered route optimization and demand forecasting",
      results: [
        "45% reduction in delivery times",
        "30% decrease in transportation costs",
        "60% improvement in demand accuracy",
        "25% increase in customer satisfaction"
      ],
      duration: "9 months",
      team: "14 developers",
      technologies: ["Python", "Scikit-learn", "Vue.js", "Azure"],
      image: "/api/placeholder/600/400"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Average ROI", value: "300%" },
    { label: "Years Experience", value: "5+" }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and technology implementations across various industries. See how we've helped businesses transform and grow." />
        <meta name="keywords" content="case studies, AI implementation, technology solutions, business transformation, success stories" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="text-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover how we've helped businesses across industries transform their operations 
                with cutting-edge AI and technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <FuturisticCard key={study.id} className="group hover:scale-105 transition-transform duration-300">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-blue-400" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-blue-400 mb-2">
                      <Target className="w-4 h-4" />
                      {study.industry}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{study.company}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge</h4>
                      <p className="text-gray-400 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution</h4>
                      <p className="text-gray-400 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Results</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.slice(0, 4).map((result, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {study.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        {study.team}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link to={`/case-studies/${study.id}`}>
                    <FuturisticButton className="w-full group">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </FuturisticButton>
                  </Link>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let us help you transform your business with our proven AI and technology solutions. 
                Contact us today to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <FuturisticButton size="lg">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </Link>
                <Link to="/services">
                  <FuturisticButton variant="outline" size="lg">
                    View Our Services
                  </FuturisticButton>
                </Link>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
}