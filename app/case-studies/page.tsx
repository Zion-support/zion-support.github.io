import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  BarChart3, 
  Clock, 
  CheckCircle,
  Star,
  Target,
  Globe,
  Shield,
  Users,
  Award
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
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
        "35% increase in sales"
      ],
      image: "/api/placeholder/600/400",
      duration: "6 months",
      services: ["AI Analytics", "AI Customer Support", "Data Analytics"],
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Implementation",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Complex patient data analysis and treatment optimization",
      solution: "Advanced AI analytics platform for predictive healthcare insights",
      results: [
        "45% improvement in diagnosis accuracy",
        "30% reduction in treatment costs",
        "50% faster data processing",
        "25% increase in patient outcomes"
      ],
      duration: "8 months",
      services: ["AI Analytics", "Data Engineering", "Machine Learning"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 3,
      title: "Manufacturing Process Automation",
      company: "Industrial Corp",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and quality control issues",
      solution: "AI-driven process optimization and automated quality monitoring",
      results: [
        "55% increase in production efficiency",
        "70% reduction in defects",
        "40% decrease in downtime",
        "25% cost savings"
      ],
      duration: "10 months",
      services: ["AI Automation", "IoT Solutions", "Process Optimization"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "Financial Services Risk Management",
      company: "FinanceFirst",
      industry: "Financial Services",
      challenge: "Manual fraud detection and risk assessment processes",
      solution: "AI-powered fraud detection and real-time risk analysis",
      results: [
        "85% improvement in fraud detection",
        "60% reduction in false positives",
        "90% faster risk assessment",
        "50% decrease in financial losses"
      ],
      duration: "7 months",
      services: ["AI Fraud Detection", "Risk Analytics", "Cybersecurity"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 5,
      title: "Retail Customer Experience Enhancement",
      company: "RetailMax",
      industry: "Retail",
      challenge: "Personalized customer experience and inventory management",
      solution: "AI-driven personalization and demand forecasting",
      results: [
        "65% increase in customer engagement",
        "40% improvement in inventory turnover",
        "50% boost in average order value",
        "30% increase in customer retention"
      ],
      duration: "5 months",
      services: ["AI Marketing", "Recommendation Engine", "Data Analytics"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 6,
      title: "Logistics Optimization with 5G",
      company: "LogiTech",
      industry: "Logistics",
      challenge: "Real-time tracking and route optimization challenges",
      solution: "5G-enabled IoT network with AI-powered route optimization",
      results: [
        "45% reduction in delivery times",
        "35% decrease in fuel costs",
        "80% improvement in tracking accuracy",
        "25% increase in customer satisfaction"
      ],
      duration: "9 months",
      services: ["5G Solutions", "IoT Integration", "AI Analytics"],
      image: "/api/placeholder/600/400",
      featured: false
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Reduction", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "60%", label: "Average Efficiency Gain", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies. See how we've helped businesses transform with cutting-edge technology." />
        <meta name="keywords" content="case studies, AI solutions, IT services, business transformation, success stories" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Success
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {' '}Stories
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries transform their operations 
                with cutting-edge AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
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
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from real businesses. See how our solutions have transformed 
                operations across various industries.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border ${
                    study.featured 
                      ? 'border-cyan-500/40 shadow-lg shadow-cyan-500/10' 
                      : 'border-gray-700/50 hover:border-cyan-500/30'
                  } transition-all duration-300 group`}
                >
                  {study.featured && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-center">
                      <span className="text-white font-semibold flex items-center justify-center">
                        <Star className="w-4 h-4 mr-2 fill-current" />
                        Featured Case Study
                      </span>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {study.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-300 mb-3">
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {study.company}
                          </span>
                          <span className="flex items-center">
                            <Globe className="w-4 h-4 mr-1" />
                            {study.industry}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {study.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge:</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution:</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-2">Results:</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-purple-400 mb-2">Services Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.services.map((service, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-700/50">
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the growing list of businesses that have transformed their operations 
              with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
              >
                <Target className="w-5 h-5" />
                <span>Start Your Project</span>
              </Link>
              <Link
                to="/services"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;