import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Shield, 
  Cloud, 
  Brain, 
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  BarChart3
} from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      company: "RetailTech Solutions",
      industry: "E-commerce",
      challenge: "Legacy system migration and performance optimization",
      solution: "Complete cloud migration with microservices architecture",
      results: [
        "300% increase in page load speed",
        "99.9% uptime achieved",
        "50% reduction in infrastructure costs",
        "40% increase in conversion rates"
      ],
      technologies: ["AWS", "React", "Node.js", "MongoDB", "Docker"],
      duration: "6 months",
      teamSize: "8 developers",
      image: "/images/case-studies/ecommerce.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Data Security Enhancement",
      company: "MediCare Systems",
      industry: "Healthcare",
      challenge: "HIPAA compliance and data security improvements",
      solution: "Advanced security implementation with AI-powered monitoring",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security breaches",
        "60% faster threat detection",
        "95% reduction in false positives"
      ],
      technologies: ["Azure", "Python", "AI/ML", "PostgreSQL", "Kubernetes"],
      duration: "4 months",
      teamSize: "6 developers",
      image: "/images/case-studies/healthcare.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Financial Services Automation",
      company: "FinTech Innovations",
      industry: "Financial Services",
      challenge: "Manual process automation and regulatory compliance",
      solution: "AI-powered automation with real-time compliance monitoring",
      results: [
        "80% reduction in manual processes",
        "100% regulatory compliance",
        "45% faster transaction processing",
        "30% cost savings achieved"
      ],
      technologies: ["GCP", "Python", "AI/ML", "PostgreSQL", "Terraform"],
      duration: "8 months",
      teamSize: "12 developers",
      image: "/images/case-studies/fintech.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Manufacturing IoT Integration",
      company: "SmartManufacturing Co.",
      industry: "Manufacturing",
      challenge: "IoT device integration and real-time monitoring",
      solution: "Comprehensive IoT platform with predictive analytics",
      results: [
        "25% increase in production efficiency",
        "35% reduction in downtime",
        "50% improvement in predictive maintenance",
        "20% decrease in operational costs"
      ],
      technologies: ["AWS IoT", "React", "Python", "InfluxDB", "Docker"],
      duration: "5 months",
      teamSize: "10 developers",
      image: "/images/case-studies/manufacturing.jpg",
      featured: false
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Industries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Transformations</title>
        <meta name="description" content="Explore our successful projects and client transformations across various industries. See how we've helped businesses achieve their digital transformation goals." />
        <meta name="keywords" content="case studies, success stories, client projects, digital transformation, technology solutions, business outcomes" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories and client transformations across various industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
        <meta property="og:image" content="https://ziontechgroup.com/og-case-studies.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <SEOOptimizer
          title="Case Studies - Zion Tech Group | Success Stories & Client Transformations"
          description="Explore our successful projects and client transformations across various industries. See how we've helped businesses achieve their digital transformation goals."
          keywords="case studies, success stories, client projects, digital transformation, technology solutions, business outcomes, project portfolio"
          canonical="https://ziontechgroup.com/case-studies"
        />

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
              <BarChart3 className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">Success Stories</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Case
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-pulse">
                {" "}Studies
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Explore our successful projects and client transformations across various industries. 
              See how we've helped businesses achieve their digital transformation goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Services
                <TrendingUp className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've transformed businesses across industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className={`group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  study.featured 
                    ? 'border-purple-500/50 shadow-purple-500/20' 
                    : 'border-white/20 hover:border-purple-500/30'
                }`}>
                  {study.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Featured
                    </div>
                  )}
                  
                  <div className="h-48 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm text-gray-300">{study.industry}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-purple-400 font-medium">{study.company}</span>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge:</h4>
                      <p className="text-sm text-gray-400 mb-3">{study.challenge}</p>
                      
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution:</h4>
                      <p className="text-sm text-gray-400 mb-3">{study.solution}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 3).map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.teamSize}
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group"
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the growing list of successful businesses that have transformed their operations with our technology solutions. 
              Let's discuss your project today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Consultation
                <Users className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;