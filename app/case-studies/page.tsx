import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, Clock } from "lucide-react";

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform AI Transformation",
      company: "RetailTech Solutions",
      industry: "E-commerce",
      challenge: "Manual inventory management and customer service bottlenecks",
      solution: "Implemented AI-powered inventory optimization and chatbot system",
      results: {
        efficiency: "85%",
        costReduction: "60%",
        customerSatisfaction: "95%",
        timeline: "6 months"
      },
      description: "Transformed a traditional e-commerce platform with AI-driven inventory management and automated customer service, resulting in significant cost savings and improved customer experience."
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Platform",
      company: "MediCare Plus",
      industry: "Healthcare",
      challenge: "Fragmented patient data and inefficient diagnosis processes",
      solution: "Developed comprehensive AI analytics platform for patient data integration",
      results: {
        efficiency: "90%",
        costReduction: "45%",
        customerSatisfaction: "98%",
        timeline: "8 months"
      },
      description: "Created an integrated healthcare analytics platform that streamlined patient data management and improved diagnostic accuracy through AI-powered insights."
    },
    {
      id: 3,
      title: "Financial Services Cybersecurity Overhaul",
      company: "SecureBank Corp",
      industry: "Financial Services",
      challenge: "Outdated security infrastructure and increasing cyber threats",
      solution: "Implemented advanced AI-powered cybersecurity suite and threat detection",
      results: {
        efficiency: "95%",
        costReduction: "40%",
        customerSatisfaction: "99%",
        timeline: "4 months"
      },
      description: "Modernized security infrastructure with AI-driven threat detection and automated response systems, significantly reducing security incidents and improving compliance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta
          name="description"
          content="Explore our successful technology implementations and digital transformation projects. Real results from real clients across various industries."
        />
        <meta
          name="keywords"
          content="case studies, success stories, AI implementation, digital transformation, client results, technology solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge technology solutions. 
              Real results from real clients across various industries.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                    <div className="flex items-center space-x-2 text-cyan-400 text-sm">
                      <span>{study.company}</span>
                      <span>•</span>
                      <span>{study.industry}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Challenge:</h4>
                    <p className="text-gray-400 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Solution:</h4>
                    <p className="text-gray-400 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-300 mb-3">Results:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">{study.results.efficiency}</div>
                        <div className="text-xs text-gray-400">Efficiency Gain</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{study.results.costReduction}</div>
                        <div className="text-xs text-gray-400">Cost Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">{study.results.customerSatisfaction}</div>
                        <div className="text-xs text-gray-400">Satisfaction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-400">{study.results.timeline}</div>
                        <div className="text-xs text-gray-400">Timeline</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Contact Us
                <CheckCircle className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
