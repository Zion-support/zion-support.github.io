import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Target, Lightbulb, Users, Zap, Shield, Brain, Cloud, Cpu, Heart, PenTool, TrendingUp, Award, Globe } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Transformation",
      company: "MetroHealth Systems",
      industry: "Healthcare",
      challenge: "MetroHealth needed to improve patient outcomes and reduce readmission rates while managing increasing patient volumes.",
      solution: "Implemented our AI Healthcare Platform with predictive analytics and real-time monitoring capabilities.",
      results: [
        "85% improvement in diagnostic accuracy",
        "60% reduction in patient readmission rates",
        "40% decrease in operational costs",
        "70% improvement in patient satisfaction scores"
      ],
      services: ["AI Healthcare Platform", "Predictive Analytics", "Real-time Monitoring"],
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Financial Services AI Security Enhancement",
      company: "GlobalTrust Bank",
      industry: "Financial Services",
      challenge: "GlobalTrust Bank faced increasing cybersecurity threats and needed to improve fraud detection capabilities.",
      solution: "Deployed our AI Cybersecurity platform with advanced threat detection and automated response systems.",
      results: [
        "90% faster threat detection",
        "85% reduction in false positives",
        "95% improvement in fraud prevention",
        "60% decrease in security incident response time"
      ],
      services: ["AI Cybersecurity", "Threat Detection", "Fraud Prevention"],
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 3,
      title: "Manufacturing IoT Edge Computing Implementation",
      company: "TechManufacturing Inc.",
      industry: "Manufacturing",
      challenge: "TechManufacturing needed to optimize production processes and implement predictive maintenance.",
      solution: "Implemented IoT Edge Computing solution with real-time data processing and AI-powered analytics.",
      results: [
        "95% improvement in equipment reliability",
        "70% reduction in unplanned downtime",
        "45% decrease in maintenance costs",
        "80% improvement in production efficiency"
      ],
      services: ["IoT Edge Computing", "Predictive Maintenance", "Real-time Analytics"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "E-commerce AI Content Creation Scale-up",
      company: "ShopSmart Online",
      industry: "E-commerce",
      challenge: "ShopSmart needed to scale content creation for thousands of products while maintaining quality and SEO optimization.",
      solution: "Deployed our AI Content Creation platform with automated content generation and optimization.",
      results: [
        "300% increase in content production",
        "65% improvement in SEO rankings",
        "50% reduction in content creation costs",
        "75% enhancement in customer engagement"
      ],
      services: ["AI Content Creation", "SEO Optimization", "Content Automation"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 5,
      title: "Cloud DevOps Transformation",
      company: "InnovateTech Solutions",
      industry: "Technology",
      challenge: "InnovateTech needed to accelerate software development and improve deployment reliability.",
      solution: "Implemented comprehensive Cloud DevOps solution with CI/CD pipelines and infrastructure automation.",
      results: [
        "10x faster deployment cycles",
        "99.9% system reliability improvement",
        "40% reduction in infrastructure costs",
        "80% decrease in manual operations"
      ],
      services: ["Cloud DevOps", "CI/CD Pipelines", "Infrastructure Automation"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 6,
      title: "AI Business Intelligence Implementation",
      company: "DataCorp Enterprises",
      industry: "Data Analytics",
      challenge: "DataCorp needed to transform raw data into actionable insights for strategic decision-making.",
      solution: "Deployed our AI Business Intelligence platform with advanced analytics and predictive modeling.",
      results: [
        "40% increase in operational efficiency",
        "60% reduction in decision-making time",
        "85% improvement in forecast accuracy",
        "30% decrease in operational costs"
      ],
      services: ["AI Business Intelligence", "Predictive Analytics", "Data Visualization"],
      image: "/api/placeholder/600/400",
      featured: false
    }
  ];

  const industries = [
    "All Industries",
    "Healthcare",
    "Financial Services",
    "Manufacturing",
    "E-commerce",
    "Technology",
    "Data Analytics"
  ];

  const services = [
    "All Services",
    "AI Healthcare Platform",
    "AI Cybersecurity",
    "IoT Edge Computing",
    "AI Content Creation",
    "Cloud DevOps",
    "AI Business Intelligence"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Award className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">Success Stories</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Case Studies
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                & Success Stories
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how our technology solutions have transformed businesses across industries. 
              Real results, measurable impact, and proven success stories.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most impactful implementations that demonstrate the power of our technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.filter(cs => cs.featured).map((caseStudy) => (
              <div key={caseStudy.id} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {caseStudy.industry}
                    </span>
                    {caseStudy.featured && (
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{caseStudy.title}</h3>
                  <p className="text-lg text-cyan-400 mb-4">{caseStudy.company}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge</h4>
                      <p className="text-gray-400">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution</h4>
                      <p className="text-gray-400">{caseStudy.solution}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Results</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {caseStudy.results.map((result, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Services Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.services.map((service, index) => (
                        <span key={index} className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={`/case-studies/${caseStudy.id}`}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              All Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our complete collection of case studies across all industries and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {caseStudy.industry}
                    </span>
                    {caseStudy.featured && (
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                  <p className="text-cyan-400 mb-3">{caseStudy.company}</p>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{caseStudy.challenge}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Results</h4>
                    <div className="space-y-1">
                      {caseStudy.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={`/case-studies/${caseStudy.id}`}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 via-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the companies that have already transformed their operations with our technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

