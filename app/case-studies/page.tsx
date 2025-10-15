import { Helmet } from 'react-helmet-async';
import { TrendingUp, DollarSign, CheckCircle, Users, ArrowRight } from "lucide-react";

const CaseStudiesPage: React.FC = () => {}
  const caseStudies = [
    {}
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
      team: "8 specialists"
    },
    {}
      id: 2,
      title: "Cloud Migration for Financial Services",
      client: "SecureBank Corp.",
      industry: "Financial Services",
      challenge: "Legacy systems causing performance issues and security concerns",
      solution: "Complete cloud migration with enhanced security measures",
      results: [
        "99.9% uptime achieved",
        "50% reduction in infrastructure costs",
        "Enhanced security compliance"
      ],
      image: "/images/case-studies/cloud-migration.jpg",
      duration: "4 months",
      team: "12 specialists"
    },
    {}
      id: 3,
      title: "Cybersecurity Implementation",
      client: "HealthCare Plus",
      industry: "Healthcare",
      challenge: "Vulnerable to cyber attacks and data breaches",
      solution: "Comprehensive cybersecurity framework and training",
      results: [
        "Zero security incidents",
        "100% compliance with HIPAA",
        "50% reduction in security vulnerabilities"
      ],
      image: "/images/case-studies/cybersecurity.jpg",
      duration: "3 months",
      team: "6 specialists"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "150+", icon: <CheckCircle className="w-6 h-6" /> },
    { label: "Client Satisfaction", value: "98%", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Team Members", value: "50+", icon: <Users className="w-6 h-6" /> },
    { label: "Cost Savings", value: "$2M+", icon: <DollarSign className="w-6 h-6" /> }
  ];

  return ()
    <>{}</>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful projects and case studies showcasing our expertise in AI, cloud, and cybersecurity solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Real success stories from our clients across various industries
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => ()}
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations with cutting-edge technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => ()}
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-6">
                    <div className="text-sm text-cyan-400 font-semibold mb-2">{study.industry}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-300 mb-4">{study.client}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => ()}
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-400 mb-6">
                    <span>Duration: {study.duration}</span>
                    <span>Team: {study.team}</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center">
                    View Details
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you achieve similar results with our proven expertise and cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <>
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200"
              >
                Get Started Today
              </>
              <>
                to="/services"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200"
              >
                View Our Services
              </>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default CaseStudiesPage;