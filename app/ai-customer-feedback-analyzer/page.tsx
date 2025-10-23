"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { MessageSquare, BarChart, TrendingUp, ArrowRight } from "lucide-react";

const AiCustomerFeedbackAnalyzerPage: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Feedback Analysis",
      description: "Advanced AI-powered analysis of customer feedback and reviews.",
      benefits: [
        "Sentiment analysis",
        "Topic extraction",
        "Quality scoring",
        "Trend identification",
      ],
    },
    {
      icon: BarChart,
      title: "Insights Dashboard",
      description: "Comprehensive dashboard for feedback insights and analytics.",
      benefits: [
        "Real-time metrics",
        "Performance tracking",
        "Trend analysis",
        "Custom reports",
      ],
    },
    {
      icon: TrendingUp,
      title: "Actionable Insights",
      description: "AI-driven actionable insights for business improvement.",
      benefits: [
        "Improvement recommendations",
        "Priority scoring",
        "Success metrics",
        "ROI tracking",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Feedback Analyzer - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Advanced AI-powered customer feedback analyzer for insights and business improvement." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Customer Feedback{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Analyzer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered customer feedback analyzer for insights and business improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View All Services
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-300">
                Everything you need for success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 group hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm text-gray-300">
                          <MessageSquare className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Analyze Customer Feedback?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you implement advanced AI customer feedback analysis for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiCustomerFeedbackAnalyzerPage;