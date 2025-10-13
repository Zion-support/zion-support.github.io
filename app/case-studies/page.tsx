import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Globe, Zap } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered E-commerce Transformation",
      company: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Low conversion rates and poor customer experience",
      solution: "Implemented AI-powered recommendation engine and personalized shopping experience",
      results: [
        "40% increase in conversion rates",
        "60% improvement in customer satisfaction",
        "35% boost in average order value"
      ],
      image: "/images/case-study-1.jpg",
      duration: "3 months",
      team: "8 developers"
    },
    {
      id: 2,
      title: "Cybersecurity Infrastructure Overhaul",
      company: "FinanceCorp",
      industry: "Financial Services",
      challenge: "Outdated security systems vulnerable to modern threats",
      solution: "Deployed comprehensive cybersecurity suite with real-time monitoring",
      results: [
        "99.9% security incident reduction",
        "50% faster threat detection",
        "Zero data breaches in 12 months"
      ],
      image: "/images/case-study-2.jpg",
      duration: "6 months",
      team: "12 specialists"
    },
    {
      id: 3,
      title: "Cloud Migration & Optimization",
      company: "ManufacturingPro",
      industry: "Manufacturing",
      challenge: "On-premise infrastructure limiting scalability",
      solution: "Complete cloud migration with automated scaling and monitoring",
      results: [
        "70% reduction in infrastructure costs",
        "300% improvement in scalability",
        "99.5% uptime achieved"
      ],
      image: "/images/case-study-3.jpg",
      duration: "4 months",
      team: "10 engineers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Case Studies - Zion Tech Group | Success Stories & Client Results"
        description="Explore our successful client case studies showcasing AI solutions, cybersecurity implementations, and digital transformations that delivered measurable business results."
        keywords="case studies, success stories, client results, AI implementation, cybersecurity, cloud migration, digital transformation, business outcomes"
        canonical="https://ziontechgroup.com/case-studies"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Real results from real clients. See how we've helped businesses transform their operations with cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-cyan-400 bg-cyan-400/20 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Award className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">Success</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{study.company}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-white/10">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {study.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {study.team}
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our growing list of satisfied clients and transform your business with our proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
