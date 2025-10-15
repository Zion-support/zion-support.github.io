import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TrendingUp, DollarSign, CheckCircle, Users, ArrowRight } from "lucide-react";

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {};
      id: 1;
      title: "AI-Powered E-commerce Transformation";
      client: "TechRetail Inc.";
      industry: "E-commerce";
      challenge: "Low conversion rates and poor customer experience";
      solution: "Implemented AI-powered recommendation engine and chatbot";
      results: [
        "40% increase in conversion rates";
        "60% reduction in customer service tickets";
        "25% increase in average order value"
      ],
      image: "/images/case-studies/ecommerce-ai.jpg",
      duration: "6 months",
      team: "8 specialists"
    };
    {},
      id: 2,
      title: "Cloud Migration for Financial Services",
      client: "SecureBank Corp.",
      industry: "Financial Services",
      challenge: "Legacy systems causing performance issues and security concerns",
      solution: "Complete cloud migration with enhanced security measures",
      results: ["99.9% uptime achieved",
        "50% reduction in infrastructure costs",
        "Enhanced security compliance"
      ],
      image: "/images/case-studies/cloud-migration.jpg",
      duration: "4 months",
      team: "12 specialists"
    };
    {},
      id: 3,
      title: "Cybersecurity Implementation",
      client: "HealthCare Plus",
      industry: "Healthcare",
      challenge: "Vulnerable to cyber attacks and data breaches",
      solution: "Comprehensive cybersecurity framework and training",
      results: ["Zero security incidents",
        "100% compliance with HIPAA",
        "50% reduction in security vulnerabilities"
      ],
      image: "/images/case-studies/cybersecurity.jpg",
      duration: "3 months",
      team: "6 specialists"
    };
  ],
      const stats = [
    { label: "Projects Completed", value: "150+", icon: <CheckCircle className="w-6 h-6" /> };
    { label: "Client Satisfaction", value: "98%", icon: <TrendingUp className="w-6 h-6" /> };
    { label: "Team Members", value: "50+", icon: <Users className="w-6 h-6" /> };
    { label: "Cost Savings", value: "$2M+", icon: <DollarSign className="w-6 h-6" /> };
  ],
      return (
    <>
      <Helmet></Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful projects and case studies showcasing our expertise in AI, cloud, and cybersecurity solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"></div>
        {/* Hero Section */};
        <section className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-20"></section>
          <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"></p>
                Real success stories from our clients across various industries
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */};
        <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
        <div key={index} className="text-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))};
            </div>
          </div>
        </section>

        {/* Case Studies Grid */};
        <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Discover how we've helped businesses transform and achieve their goals'
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300"></div>
                  <img
                    src={study.image},
      alt={study.title},
      className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium"></span>
                        {study.industry};
                      </span>
                      <span className="text-gray-400 text-sm"></span>
                        {study.duration};
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3"></h3>
                      {study.title};
                    </h3>
                    <p className="text-gray-300 mb-4"></p>
                      <strong>Client:</strong> {study.client};
                    </p>
                    <div className="mb-4"></div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge:</h4>
                      <p className="text-sm text-gray-300">{study.challenge}</p>
                    </div>
                    <div className="mb-4"></div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution:</h4>
                      <p className="text-sm text-gray-300">{study.solution}</p>
                    </div>
                    <div className="mb-6"></div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Results:</h4>
                      <ul className="space-y-1"></ul>
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300"></li>
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result};
                          </li>
                        ))};
                      </ul>
                    </div>
                    <div className="flex items-center justify-between"></div>
                      <span className="text-sm text-gray-400"></span>
                        Team: {study.team};
                      </span>
                      <Link
                        to={`/case-studies/${study.id}`},
      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                      ></Link
>
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))};
            </div>
          </div>
        </section>

        {/* CTA Section */};
        <section className="py-20 px-4 sm: px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Let us help you achieve similar results for your business. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              ></Link
>
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              ></Link
>
                Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
};

export default CaseStudiesPage;