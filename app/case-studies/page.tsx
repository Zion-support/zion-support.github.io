import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Star, Globe, Shield, CheckCircle, TrendingUp, Zap, BarChart3, Clock } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Customer Service Transformation",
      client: "Global E-commerce Giant",
      industry: "E-commerce",
      challenge: "High customer service costs and long response times",
      solution: "Implemented AI chatbots and automated response systems",
      results: [
        "60% reduction in response time",
        "40% cost savings",
        "95% customer satisfaction rate"
      ],
      duration: "6 months",
      services: ["AI Services", "Customer Support", "Automation"],
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "5G Network Infrastructure for Smart City",
      client: "Metropolitan City Government",
      industry: "Government",
      challenge: "Outdated communication infrastructure limiting smart city initiatives",
      solution: "Deployed comprehensive 5G network with edge computing capabilities",
      results: [
        "10x faster data transmission",
        "Real-time IoT device connectivity",
        "Enhanced emergency response systems"
      ],
      duration: "12 months",
      services: ["5G Solutions", "IoT Integration", "Smart City"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Overhaul for Financial Institution",
      client: "Regional Bank",
      industry: "Financial Services",
      challenge: "Increasing cyber threats and compliance requirements",
      solution: "Comprehensive security framework with AI-powered threat detection",
      results: [
        "99.9% threat detection accuracy",
        "Zero security breaches",
        "Full compliance with regulations"
      ],
      duration: "8 months",
      services: ["Cybersecurity", "Compliance", "AI Security"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "Micro SAAS Platform for Small Businesses",
      client: "Local Business Association",
      industry: "Business Services",
      challenge: "Small businesses lacking affordable digital tools",
      solution: "Developed suite of micro SAAS applications for common business needs",
      results: [
        "500+ businesses onboarded",
        "80% cost reduction vs traditional software",
        "95% user satisfaction"
      ],
      duration: "4 months",
      services: ["Micro SAAS", "Business Tools", "Digital Transformation"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 5,
      title: "Cloud Migration for Healthcare Provider",
      client: "Regional Hospital Network",
      industry: "Healthcare",
      challenge: "Legacy systems limiting scalability and data accessibility",
      solution: "Complete cloud migration with HIPAA-compliant infrastructure",
      results: [
        "50% reduction in IT costs",
        "99.9% uptime achieved",
        "Improved patient data access"
      ],
      duration: "10 months",
      services: ["Cloud Migration", "Healthcare IT", "Data Security"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 6,
      title: "AI Analytics for Supply Chain Optimization",
      client: "Manufacturing Company",
      industry: "Manufacturing",
      challenge: "Inefficient supply chain leading to delays and increased costs",
      solution: "AI-powered analytics platform for predictive supply chain management",
      results: [
        "30% reduction in inventory costs",
        "80% improvement in tracking accuracy",
        "25% increase in customer satisfaction"
      ],
      duration: "9 months",
      services: ["5G Solutions", "IoT Integration", "AI Analytics"],
      image: "/api/placeholder/600/400",
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta
          name="description"
          content="Explore our successful technology implementations across various industries. See how Zion Tech Group has helped businesses transform with AI, 5G, cybersecurity, and cloud solutions."
        />
        <meta
          name="keywords"
          content="case studies, success stories, AI implementation, 5G solutions, cybersecurity, cloud migration, micro SAAS, technology transformation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge technology solutions and achieve remarkable results.
            </p>
          </div>
        </section>

        {/* Featured Case Study */}
        {caseStudies.find(study => study.featured) && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured Case Study
                  </span>
                </div>
                {(() => {
                  const featured = caseStudies.find(study => study.featured);
                  return featured ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {featured.title}
                        </h2>
                        <div className="flex items-center space-x-4 mb-6 text-sm text-gray-400">
                          <span className="flex items-center">
                            <Target className="w-4 h-4 mr-2" />
                            {featured.client}
                          </span>
                          <span className="flex items-center">
                            <Globe className="w-4 h-4 mr-2" />
                            {featured.industry}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {featured.duration}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          <strong>Challenge:</strong> {featured.challenge}
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          <strong>Solution:</strong> {featured.solution}
                        </p>
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-white mb-3">Key Results:</h3>
                          <ul className="space-y-2">
                            {featured.results.map((result, index) => (
                              <li key={index} className="flex items-center text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Link
                          to={`/case-studies/${featured.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
                        >
                          Read Full Case Study
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-8 flex items-center justify-center">
                        <BarChart3 className="w-24 h-24 text-cyan-400" />
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
            </div>
          </section>
        )}

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive portfolio of successful technology implementations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <article
                  key={study.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-sm">{study.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    <strong>Client:</strong> {study.client}
                  </p>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {study.challenge}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.services.map((service, index) => (
                      <span
                        key={index}
                        className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let us help you transform your business with our proven technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}