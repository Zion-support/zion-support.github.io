import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, CheckCircle, Star, Award } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform Optimization",
      client: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Slow loading times and poor user experience affecting sales",
      solution: "Implemented AI-powered optimization and cloud infrastructure",
      results: [
        "60% faster page load times",
        "45% increase in conversion rates",
        "30% reduction in bounce rate",
        "$2M increase in monthly revenue"
      ],
      duration: "3 months",
      team: "8 specialists",
      rating: 5
    },
    {
      title: "Healthcare Data Analytics",
      client: "MediCare Solutions",
      industry: "Healthcare",
      challenge: "Inefficient patient data management and analysis",
      solution: "Deployed AI analytics platform with predictive modeling",
      results: [
        "80% faster data processing",
        "95% accuracy in patient predictions",
        "50% reduction in manual work",
        "40% improvement in patient outcomes"
      ],
      duration: "4 months",
      team: "12 specialists",
      rating: 5
    },
    {
      title: "Financial Services Automation",
      client: "FinTech Global",
      industry: "Financial Services",
      challenge: "Manual processes causing delays and errors",
      solution: "Implemented AI automation and workflow optimization",
      results: [
        "70% reduction in processing time",
        "99.9% accuracy in transactions",
        "60% cost savings",
        "100% compliance achievement"
      ],
      duration: "5 months",
      team: "10 specialists",
      rating: 5
    },
    {
      title: "Manufacturing IoT Integration",
      client: "SmartManufacturing Co.",
      industry: "Manufacturing",
      challenge: "Lack of real-time monitoring and predictive maintenance",
      solution: "Deployed IoT sensors with AI-powered analytics",
      results: [
        "50% reduction in downtime",
        "35% improvement in efficiency",
        "25% cost savings",
        "90% predictive accuracy"
      ],
      duration: "6 months",
      team: "15 specialists",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "99%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Industries Served", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta
          name="description"
          content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and IT solutions. Real results from real clients."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI and IT solutions. Real results from real clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results, real impact
              </p>
            </div>
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                        <div className="flex items-center">
                          {[...Array(study.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-300">
                          <Users className="w-4 h-4 mr-2" />
                          <span className="font-semibold">Client:</span>
                          <span className="ml-2">{study.client}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Award className="w-4 h-4 mr-2" />
                          <span className="font-semibold">Industry:</span>
                          <span className="ml-2">{study.industry}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="font-semibold">Duration:</span>
                          <span className="ml-2">{study.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Users className="w-4 h-4 mr-2" />
                          <span className="font-semibold">Team Size:</span>
                          <span className="ml-2">{study.team}</span>
                        </div>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Results:</h4>
                      <div className="space-y-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the hundreds of businesses that have transformed their operations with our solutions. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;