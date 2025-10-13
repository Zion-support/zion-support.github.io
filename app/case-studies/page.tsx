import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Shield, Zap } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      client: "TechStart Inc.",
      industry: "E-commerce",
      challenge: "Legacy system causing 40% cart abandonment rate",
      solution: "AI-powered recommendation engine and modern cloud infrastructure",
      results: [
        "60% increase in conversion rate",
        "40% reduction in cart abandonment",
        "99.9% uptime achieved",
        "50% faster page load times"
      ],
      image: "/images/case-studies/ecommerce.jpg",
      duration: "6 months"
    },
    {
      id: 2,
      title: "Healthcare Data Security Enhancement",
      client: "MediCare Solutions",
      industry: "Healthcare",
      challenge: "HIPAA compliance and patient data protection",
      solution: "Advanced cybersecurity suite with AI threat detection",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security breaches",
        "99.8% threat detection accuracy",
        "50% reduction in security incidents"
      ],
      image: "/images/case-studies/healthcare.jpg",
      duration: "4 months"
    },
    {
      id: 3,
      title: "Manufacturing IoT Integration",
      client: "AutoParts Manufacturing",
      industry: "Manufacturing",
      challenge: "Manual processes causing 30% production delays",
      solution: "IoT sensors and AI analytics for predictive maintenance",
      results: [
        "35% increase in production efficiency",
        "25% reduction in maintenance costs",
        "90% decrease in unplanned downtime",
        "Real-time production monitoring"
      ],
      image: "/images/case-studies/manufacturing.jpg",
      duration: "8 months"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Users className="w-6 h-6" /> },
    { number: "50%", label: "Average Cost Reduction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Achieved", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Transformations</title>
        <meta name="description" content="Explore our successful projects and client transformations across various industries. See how we've helped businesses achieve digital transformation." />
        <meta name="keywords" content="case studies, success stories, client projects, digital transformation, AI implementation, cybersecurity solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover how we've helped businesses across various industries achieve digital transformation 
              and drive measurable results through innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/20"
              >
                View Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've transformed businesses across industries.
              </p>
            </div>
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                          <p className="text-cyan-400 font-medium">{study.client} • {study.industry}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-center text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                            Duration: {study.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <TrendingUp className="w-10 h-10 text-white" />
                          </div>
                          <p className="text-white font-medium">Project Visualization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you achieve similar results with our proven technology solutions and expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/20"
              >
                Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;