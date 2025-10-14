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
        "85% automation of customer inquiries",
        "30% increase in sales conversion"
      ],
      duration: "6 months",
      team: "8 developers",
      technologies: ["AI/ML", "Python", "React", "AWS"],
      image: "/images/case-studies/ecommerce-ai.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Platform",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Fragmented patient data and inefficient treatment planning",
      solution: "Integrated AI-powered analytics platform for patient care optimization",
      results: [
        "50% improvement in treatment outcomes",
        "35% reduction in readmission rates",
        "70% faster diagnosis times",
        "90% increase in data accuracy"
      ],
      duration: "8 months",
      team: "12 developers",
      technologies: ["AI/ML", "Python", "TensorFlow", "PostgreSQL"],
      image: "/images/case-studies/healthcare-analytics.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Financial Services Fraud Detection",
      company: "SecureBank",
      industry: "Financial Services",
      challenge: "Increasing fraud incidents and manual detection processes",
      solution: "Real-time AI-powered fraud detection and prevention system",
      results: [
        "95% accuracy in fraud detection",
        "80% reduction in false positives",
        "60% decrease in fraud losses",
        "Real-time transaction monitoring"
      ],
      duration: "4 months",
      team: "6 developers",
      technologies: ["AI/ML", "Python", "Apache Kafka", "Redis"],
      image: "/images/case-studies/fraud-detection.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Manufacturing Process Optimization",
      company: "Industrial Corp",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and quality control issues",
      solution: "IoT and AI-powered predictive maintenance and quality control",
      results: [
        "25% increase in production efficiency",
        "40% reduction in equipment downtime",
        "50% improvement in product quality",
        "35% reduction in maintenance costs"
      ],
      duration: "10 months",
      team: "15 developers",
      technologies: ["IoT", "AI/ML", "Python", "Edge Computing"],
      image: "/images/case-studies/manufacturing-iot.jpg",
      featured: false
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Reduction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "60%", label: "Average Efficiency Gain", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Success Stories | Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies. See how we've helped businesses transform with AI, cloud solutions, and innovative technology implementations." />
        <meta name="keywords" content="case studies, success stories, AI projects, cloud migration, digital transformation, client results" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <BarChart3 className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Success Stories</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Case Studies
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their operations and achieve remarkable results 
            through innovative technology solutions and strategic implementation.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          {caseStudies.find(study => study.featured) && (
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Featured Case Study</h2>
              <FuturisticCard className="group hover:scale-105 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={caseStudies.find(study => study.featured)?.image || "/images/case-studies/featured.jpg"}
                      alt={caseStudies.find(study => study.featured)?.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-purple-400 text-sm font-medium">
                        {caseStudies.find(study => study.featured)?.industry}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {caseStudies.find(study => study.featured)?.duration}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {caseStudies.find(study => study.featured)?.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      <strong>Challenge:</strong> {caseStudies.find(study => study.featured)?.challenge}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      <strong>Solution:</strong> {caseStudies.find(study => study.featured)?.solution}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Globe className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-gray-300 text-sm">
                          {caseStudies.find(study => study.featured)?.company}
                        </span>
                      </div>
                      <FuturisticButton
                        href={`/case-studies/${caseStudies.find(study => study.featured)?.id}`}
                        variant="outline"
                        size="sm"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Read Full Case Study
                      </FuturisticButton>
                    </div>
                  </div>
                </div>
              </FuturisticCard>
            </div>
          )}
        </ResponsiveContainer>
      </section>

      {/* All Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete portfolio of successful projects and transformations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <FuturisticCard
                key={study.id}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-500/80 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {study.industry}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {study.duration}
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1" />
                    {study.team}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  <strong>Challenge:</strong> {study.challenge}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 3).map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-300 text-sm">{study.company}</span>
                  </div>
                  <FuturisticButton
                    href={`/case-studies/${study.id}`}
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Read More
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let us help you achieve similar results. Contact us today to discuss your project and how we can transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Project
              </FuturisticButton>
              <FuturisticButton
                href="/services"
                variant="outline"
                size="lg"
                icon={<Target className="w-5 h-5" />}
              >
                View Our Services
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
}