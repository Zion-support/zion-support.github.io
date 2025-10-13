import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Star, Globe, CheckCircle, Clock } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered E-commerce Transformation",
      client: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Low conversion rates and poor customer experience",
      solution: "Implemented AI-powered recommendation engine and chatbot",
      results: [
        "40% increase in conversion rates",
        "60% reduction in customer service tickets",
        "25% increase in average order value"
      ],
      image: "/images/case-studies/ecommerce-ai.jpg",
      duration: "6 months",
      services: ["AI Analytics", "AI Customer Support", "Data Analytics"],
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Platform",
      client: "MediCare Solutions",
      industry: "Healthcare",
      challenge: "Fragmented patient data and inefficient reporting",
      solution: "Centralized data platform with AI-powered insights",
      results: [
        "50% faster diagnosis times",
        "30% reduction in readmission rates",
        "90% improvement in data accuracy"
      ],
      image: "/images/case-studies/healthcare-data.jpg",
      duration: "8 months",
      services: ["Data Analytics", "AI Healthcare", "Cloud Infrastructure"],
      featured: true
    },
    {
      id: 3,
      title: "Financial Services Automation",
      client: "SecureBank Ltd.",
      industry: "Financial Services",
      challenge: "Manual processes and compliance requirements",
      solution: "Automated workflow system with AI fraud detection",
      results: [
        "70% reduction in processing time",
        "95% accuracy in fraud detection",
        "45% cost savings on compliance"
      ],
      image: "/images/case-studies/finance-automation.jpg",
      duration: "10 months",
      services: ["AI Automation", "Cybersecurity", "Compliance"],
      featured: false
    },
    {
      id: 4,
      title: "Manufacturing IoT Integration",
      client: "Industrial Corp",
      industry: "Manufacturing",
      challenge: "Equipment downtime and maintenance inefficiencies",
      solution: "IoT sensors with predictive maintenance AI",
      results: [
        "35% reduction in downtime",
        "25% increase in production efficiency",
        "60% reduction in maintenance costs"
      ],
      image: "/images/case-studies/manufacturing-iot.jpg",
      duration: "12 months",
      services: ["IoT Solutions", "AI Analytics", "Cloud Infrastructure"],
      featured: false
    },
    {
      id: 5,
      title: "Educational Platform Modernization",
      client: "EduTech Academy",
      industry: "Education",
      challenge: "Outdated learning management system",
      solution: "Modern cloud-based platform with AI personalization",
      results: [
        "80% improvement in user engagement",
        "50% increase in course completion rates",
        "90% reduction in technical issues"
      ],
      image: "/images/case-studies/education-platform.jpg",
      duration: "7 months",
      services: ["Web Development", "AI Personalization", "Cloud Migration"],
      featured: false
    },
    {
      id: 6,
      title: "Real Estate Market Analysis",
      client: "PropertyPro Group",
      industry: "Real Estate",
      challenge: "Manual market analysis and pricing",
      solution: "AI-powered market analysis and pricing optimization",
      results: [
        "45% improvement in pricing accuracy",
        "30% faster property valuations",
        "25% increase in sales volume"
      ],
      image: "/images/case-studies/real-estate-ai.jpg",
      duration: "5 months",
      services: ["AI Analytics", "Data Visualization", "Machine Learning"],
      featured: false
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "150+", icon: CheckCircle },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Industries Served", value: "25+", icon: Globe },
    { label: "Success Rate", value: "95%", icon: Target }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT solutions implementations across various industries. Real results from real clients." />
        <meta name="keywords" content="case studies, success stories, AI implementation, IT solutions, client results" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Success
              </span>
              <br />
              <span className="text-white">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Featured Case Studies
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {caseStudies.filter(study => study.featured).map((study) => (
                <div key={study.id} className="group">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center text-sm text-gray-400 mb-4">
                        <Clock className="w-4 h-4 mr-2" />
                        {study.duration}
                        <span className="mx-2">•</span>
                        <span className="capitalize">{study.industry}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        <strong>Client:</strong> {study.client}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300 mb-4">{study.challenge}</p>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.services.map((service, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                            {service}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              All Case Studies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="group">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      {study.featured && (
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-400 mb-3">
                        <Clock className="w-4 h-4 mr-2" />
                        {study.duration}
                        <span className="mx-2">•</span>
                        <span className="capitalize">{study.industry}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        <strong>Client:</strong> {study.client}
                      </p>
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {study.challenge}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.services.slice(0, 2).map((service, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                            {service}
                          </span>
                        ))}
                        {study.services.length > 2 && (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs">
                            +{study.services.length - 2} more
                          </span>
                        )}
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-all"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;