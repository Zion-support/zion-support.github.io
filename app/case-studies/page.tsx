import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered E-commerce Transformation",
      client: "TechRetail Corp",
      industry: "E-commerce",
      challenge: "Low conversion rates and poor customer experience",
      solution: "Implemented AI-powered recommendation engine and personalized shopping experience",
      results: [
        "45% increase in conversion rates",
        "60% improvement in customer satisfaction",
        "35% boost in average order value"
      ],
      image: "/images/case-studies/ecommerce-ai.jpg",
      duration: "6 months",
      team: "12 specialists"
    },
    {
      id: 2,
      title: "Cloud Migration for Financial Services",
      client: "SecureBank Ltd",
      industry: "Financial Services",
      challenge: "Legacy systems causing performance issues and high maintenance costs",
      solution: "Complete cloud migration with enhanced security and scalability",
      results: [
        "70% reduction in infrastructure costs",
        "99.9% uptime achieved",
        "50% faster transaction processing"
      ],
      image: "/images/case-studies/cloud-migration.jpg",
      duration: "8 months",
      team: "15 specialists"
    },
    {
      id: 3,
      title: "Cybersecurity Overhaul for Healthcare",
      client: "MediCare Systems",
      industry: "Healthcare",
      challenge: "Vulnerable systems and compliance requirements",
      solution: "Comprehensive cybersecurity framework with compliance automation",
      results: [
        "100% compliance with HIPAA regulations",
        "90% reduction in security incidents",
        "Zero data breaches in 2 years"
      ],
      image: "/images/case-studies/healthcare-security.jpg",
      duration: "4 months",
      team: "8 specialists"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta
          name="description"
          content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and technology solutions."
        />
        <meta
          name="keywords"
          content="case studies, success stories, AI solutions, cloud migration, cybersecurity, business transformation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Star className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Case Studies
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI and technology solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-cyan-400 font-semibold">{study.client}</p>
                      <p className="text-gray-400 text-sm">{study.industry}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Duration</div>
                      <div className="text-white font-semibold">{study.duration}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{study.team}</span>
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our Impact in Numbers
                </h2>
                <p className="text-xl text-gray-300">
                  The results speak for themselves
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">95%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-300">Countries Served</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">200+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
                  <div className="text-gray-300">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you achieve similar results. Contact us today to discuss your project.
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
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}