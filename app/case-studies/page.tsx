import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, TrendingUp, Shield, Zap, Globe, BarChart3, CheckCircle, Star } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      client: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Legacy system causing 40% cart abandonment and poor user experience",
      solution: "Implemented AI-powered recommendation engine and modernized checkout process",
      results: [
        "60% reduction in cart abandonment",
        "35% increase in conversion rate",
        "50% improvement in page load speed",
        "25% increase in average order value"
      ],
      technologies: ["React", "Node.js", "AI/ML", "AWS", "MongoDB"],
      duration: "6 months",
      team: "8 developers",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Platform",
      client: "MediCare Solutions",
      industry: "Healthcare",
      challenge: "Fragmented patient data across multiple systems affecting care quality",
      solution: "Built comprehensive data analytics platform with AI-powered insights",
      results: [
        "40% improvement in patient outcomes",
        "30% reduction in readmission rates",
        "50% faster diagnosis time",
        "95% data accuracy improvement"
      ],
      technologies: ["Python", "TensorFlow", "PostgreSQL", "Docker", "Kubernetes"],
      duration: "8 months",
      team: "12 developers",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Financial Services Security Enhancement",
      client: "SecureBank",
      industry: "Financial Services",
      challenge: "Increasing cyber threats and compliance requirements",
      solution: "Implemented advanced cybersecurity suite with real-time threat detection",
      results: [
        "99.9% threat detection accuracy",
        "80% reduction in security incidents",
        "100% compliance with regulations",
        "60% faster incident response time"
      ],
      technologies: ["AI/ML", "Blockchain", "AWS", "Python", "React"],
      duration: "4 months",
      team: "6 developers",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Manufacturing IoT Integration",
      client: "SmartManufacturing Co.",
      industry: "Manufacturing",
      challenge: "Manual processes leading to inefficiencies and quality issues",
      solution: "Deployed IoT sensors and AI-powered predictive maintenance system",
      results: [
        "45% reduction in downtime",
        "30% increase in production efficiency",
        "25% decrease in maintenance costs",
        "90% improvement in quality control"
      ],
      technologies: ["IoT", "AI/ML", "Edge Computing", "Python", "Azure"],
      duration: "10 months",
      team: "10 developers",
      image: "/api/placeholder/600/400"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Industries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group Success Stories</title>
        <meta name="description" content="Explore our successful case studies and client success stories. See how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, client projects, AI solutions, IT services, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've helped businesses achieve their goals.
              </p>
            </div>
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                          <Users className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                          <p className="text-cyan-400">{study.client} • {study.industry}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-gray-300 text-sm">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                          <p className="text-gray-300 text-sm">{study.solution}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center text-gray-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>Duration: {study.duration}</span>
                        <span>Team: {study.team}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-8 h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <TrendingUp className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2">Project Success</h4>
                        <p className="text-gray-300 text-sm">
                          This project demonstrates our expertise in delivering 
                          measurable results for our clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
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
