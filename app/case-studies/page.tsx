"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  ExternalLink,
  Star,
  TrendingUp,
  Users,
  DollarSign,
} from "lucide-react";

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Optimization",
      company: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Slow loading times and poor user experience affecting sales",
      solution: "Implemented AI-powered optimization and cloud infrastructure",
      results: {
        performance: "300% faster load times",
        conversion: "45% increase in conversions",
        revenue: "$2.5M additional revenue",
        satisfaction: "95% customer satisfaction",
      },
      image: "🛒",
      featured: true,
    },
    {
      id: 2,
      title: "Healthcare Data Analytics",
      company: "MediCare Solutions",
      industry: "Healthcare",
      challenge: "Inefficient patient data analysis and reporting",
      solution: "Custom AI analytics platform with real-time insights",
      results: {
        performance: "80% faster data processing",
        conversion: "60% reduction in analysis time",
        revenue: "$1.8M cost savings",
        satisfaction: "98% accuracy rate",
      },
      image: "🏥",
      featured: false,
    },
    {
      id: 3,
      title: "Financial Services Automation",
      company: "FinanceFlow Corp",
      industry: "Financial Services",
      challenge: "Manual processes causing delays and errors",
      solution: "AI-powered automation and workflow optimization",
      results: {
        performance: "90% process automation",
        conversion: "70% faster processing",
        revenue: "$3.2M operational savings",
        satisfaction: "99.5% accuracy rate",
      },
      image: "💼",
      featured: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | AI & IT Solutions</title>
        <meta
          name="description"
          content="Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions."
        />
        <meta
          name="keywords"
          content="case studies, success stories, client results, AI solutions, business transformation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations
              and achieve remarkable results through innovative technology
              solutions.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-4xl">{study.image}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {study.title}
                          </h3>
                          <p className="text-purple-400 font-semibold">
                            {study.company}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {study.industry}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            Challenge
                          </h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            Solution
                          </h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4">
                            Results
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-5 h-5 text-green-400" />
                              <span className="text-gray-300 text-sm">
                                {study.results.performance}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-5 h-5 text-blue-400" />
                              <span className="text-gray-300 text-sm">
                                {study.results.conversion}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-5 h-5 text-yellow-400" />
                              <span className="text-gray-300 text-sm">
                                {study.results.revenue}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="w-5 h-5 text-purple-400" />
                              <span className="text-gray-300 text-sm">
                                {study.results.satisfaction}
                              </span>
                            </div>
                          </div>
                        </div>

                        <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-2xl p-8 h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-8xl mb-4">{study.image}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {study.company}
                        </h3>
                        <p className="text-gray-300">{study.industry}</p>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our AI
              and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View All Case Studies
              </button>{" "}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
