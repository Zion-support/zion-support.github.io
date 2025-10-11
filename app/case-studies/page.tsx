import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Zap } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce AI Transformation",
      company: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Low conversion rates and poor customer experience",
      solution: "Implemented AI-powered recommendation engine and chatbot",
      results: [
        "40% increase in conversion rates",
        "60% reduction in customer service queries",
        "35% increase in average order value"
      ],
      image: "/api/placeholder/600/400",
      duration: "3 months",
      team: "8 developers"
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Platform",
      company: "MediCare Solutions",
      industry: "Healthcare",
      challenge: "Fragmented patient data and inefficient reporting",
      solution: "Built comprehensive data analytics and visualization platform",
      results: [
        "50% faster diagnosis times",
        "30% reduction in operational costs",
        "95% improvement in data accuracy"
      ],
      image: "/api/placeholder/600/400",
      duration: "6 months",
      team: "12 developers"
    },
    {
      id: 3,
      title: "Manufacturing IoT Integration",
      company: "AutoParts Manufacturing",
      industry: "Manufacturing",
      challenge: "Manual quality control and equipment monitoring",
      solution: "Implemented IoT sensors and AI-powered quality control",
      results: [
        "25% reduction in defects",
        "40% improvement in equipment uptime",
        "20% increase in production efficiency"
      ],
      image: "/api/placeholder/600/400",
      duration: "4 months",
      team: "10 developers"
    },
    {
      id: 4,
      title: "Financial Services Automation",
      company: "FinTech Global",
      industry: "Financial Services",
      challenge: "Manual loan processing and risk assessment",
      solution: "Developed AI-powered loan processing and risk analysis system",
      results: [
        "70% faster loan processing",
        "45% reduction in default rates",
        "60% improvement in customer satisfaction"
      ],
      image: "/api/placeholder/600/400",
      duration: "5 months",
      team: "15 developers"
    },
    {
      id: 5,
      title: "Education Learning Management System",
      company: "EduTech Academy",
      industry: "Education",
      challenge: "Outdated learning platform and poor student engagement",
      solution: "Created modern LMS with AI-powered personalized learning",
      results: [
        "80% increase in student engagement",
        "50% improvement in learning outcomes",
        "90% reduction in administrative tasks"
      ],
      image: "/api/placeholder/600/400",
      duration: "7 months",
      team: "20 developers"
    },
    {
      id: 6,
      title: "Real Estate Property Management",
      company: "PropertyMax Realty",
      industry: "Real Estate",
      challenge: "Inefficient property management and tenant communication",
      solution: "Built comprehensive property management platform with AI features",
      results: [
        "35% increase in tenant satisfaction",
        "25% reduction in maintenance costs",
        "50% improvement in operational efficiency"
      ],
      image: "/api/placeholder/600/400",
      duration: "4 months",
      team: "8 developers"
    }
  ];

  const stats = [
    { icon: Users, label: "Happy Clients", value: "150+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
    { icon: Zap, label: "Projects Completed", value: "200+" },
    { icon: Star, label: "Client Rating", value: "4.9/5" }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects across various industries." />
        <meta name="keywords" content="case studies, success stories, technology implementation, digital transformation, AI solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations with AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 text-sm px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <div className="text-sm text-gray-400">
                        {study.duration}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{study.company}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Team: {study.team}</span>
                    <button className="text-cyan-400 hover:text-cyan-300 flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and see how we can help you achieve similar results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Your Project
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;