"use client";
import React from "react";
import { Helmet } from "react-helmet-async";

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
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Success stories and case studies from our clients" />
        <meta property="og:title" content="Case Studies | Zion Tech Group" />
        <meta property="og:description" content="Success stories and case studies from our clients" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve remarkable results.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-6xl mb-6 text-center">{study.image}</div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {study.industry}
                    </span>
                    {study.featured && (
                      <span className="ml-2 inline-block px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{study.company}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Results:</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-gray-300">
                          <span className="text-cyan-400 font-semibold">{study.results.performance}</span>
                        </div>
                        <div className="text-gray-300">
                          <span className="text-cyan-400 font-semibold">{study.results.conversion}</span>
                        </div>
                        <div className="text-gray-300">
                          <span className="text-cyan-400 font-semibold">{study.results.revenue}</span>
                        </div>
                        <div className="text-gray-300">
                          <span className="text-cyan-400 font-semibold">{study.results.satisfaction}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let us help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;