import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Star, Globe, Shield, CheckCircle } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Customer Service Transformation",
      client: "TechCorp Solutions",
      industry: "Technology",
      challenge: "High customer service costs and long response times",
      solution: "Implemented AI-powered chatbot and automated ticketing system",
      results: [
        "60% reduction in customer service costs",
        "80% faster response times",
        "95% customer satisfaction rate",
        "50% increase in ticket resolution efficiency"
      ],
      image: "/api/placeholder/600/400",
      duration: "3 months",
      team: "8 developers"
    },
    {
      id: 2,
      title: "Cloud Migration and Infrastructure Modernization",
      client: "Global Finance Inc",
      industry: "Financial Services",
      challenge: "Legacy systems causing performance issues and security vulnerabilities",
      solution: "Complete cloud migration with microservices architecture",
      results: [
        "99.9% uptime achieved",
        "70% reduction in infrastructure costs",
        "Enhanced security compliance",
        "50% faster application deployment"
      ],
      image: "/api/placeholder/600/400",
      duration: "6 months",
      team: "12 developers"
    },
    {
      id: 3,
      title: "E-commerce Platform Optimization",
      client: "RetailMax",
      industry: "Retail",
      challenge: "Slow website performance and low conversion rates",
      solution: "Performance optimization and AI-powered recommendation engine",
      results: [
        "40% improvement in page load speed",
        "35% increase in conversion rates",
        "25% boost in average order value",
        "60% reduction in bounce rate"
      ],
      image: "/api/placeholder/600/400",
      duration: "4 months",
      team: "6 developers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta
          name="description"
          content="Explore our success stories and case studies. See how Zion Tech Group has helped businesses achieve remarkable results with AI, technology, and digital transformation solutions."
        />
        <meta
          name="keywords"
          content="case studies, success stories, client results, AI implementation, digital transformation, technology solutions, business outcomes"
        />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Success
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Stories
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve 
            remarkable results with our cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                  <Target className="w-16 h-16 text-cyan-400" />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      {study.client}
                    </span>
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {study.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      {study.team}
                    </span>
                  </div>
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you achieve similar results with our proven technology solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;