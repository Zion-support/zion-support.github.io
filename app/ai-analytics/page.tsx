import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Database, 
  Zap, 
  Shield, 
  CheckCircle,
  Star,
  Users,
  Clock,
  Award
} from "lucide-react";

export default function AiAnalytics() {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Get instant insights from your data with our advanced AI-powered analytics engine."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Predictive Modeling",
      description: "Forecast future trends and behaviors using machine learning algorithms."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Identify opportunities for growth and optimization across your business."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Integration",
      description: "Seamlessly connect and analyze data from multiple sources and platforms."
    }
  ];

  const benefits = [
    "Increase revenue by up to 25% through data-driven insights",
    "Reduce operational costs by 30% with predictive analytics",
    "Improve customer satisfaction by 40% with personalized experiences",
    "Accelerate decision-making with real-time dashboards",
    "Enhance risk management with predictive modeling"
  ];

  const useCases = [
    {
      title: "E-commerce Optimization",
      description: "Analyze customer behavior to optimize product recommendations and increase sales.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Financial Forecasting",
      description: "Predict market trends and optimize investment strategies with AI analytics.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Customer Segmentation",
      description: "Identify high-value customer segments and tailor marketing strategies accordingly.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Supply Chain Analytics",
      description: "Optimize inventory management and predict demand patterns for better efficiency.",
      icon: <Database className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your business with advanced AI analytics solutions. Get real-time insights, predictive modeling, and data-driven decision making from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="AI analytics, business intelligence, predictive analytics, data science, machine learning, data visualization"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Analytics</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced AI-powered analytics solutions. 
                Make smarter decisions, predict future trends, and optimize your business performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive AI analytics platform provides everything you need to unlock the full potential of your data.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose Our AI Analytics?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our AI analytics solutions are designed to deliver measurable results and drive business growth.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Key Statistics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Data Processing Speed</span>
                    <span className="text-2xl font-bold text-cyan-400">10x Faster</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Accuracy Rate</span>
                    <span className="text-2xl font-bold text-green-400">99.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Cost Reduction</span>
                    <span className="text-2xl font-bold text-purple-400">30%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">ROI Improvement</span>
                    <span className="text-2xl font-bold text-yellow-400">250%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI analytics solutions are trusted by businesses across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-300">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-md border border-white/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with our AI analytics solutions today and unlock the full potential of your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}