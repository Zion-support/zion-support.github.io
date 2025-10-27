'use client'
import React from 'react';
import { CheckCircle, Brain, BarChart, Target, TrendingUp, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Lead Scoring",
      description: "Automatically score and prioritize leads based on behavior, demographics, and engagement patterns."
    },
    {
      icon: <BarChart className="h-8 w-8 text-green-600" />,
      title: "Predictive Analytics",
      description: "Forecast sales outcomes and identify high-value opportunities using machine learning."
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "Automated Follow-ups",
      description: "Send personalized follow-up messages at optimal times to maximize conversion rates."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      title: "Performance Optimization",
      description: "Continuously optimize sales processes based on data-driven insights and performance metrics."
    }
  ];

  const benefits = [
    "Increase conversion rates by up to 40%",
    "Reduce manual follow-up time by 60%",
    "Improve lead qualification accuracy by 85%",
    "Boost sales team productivity by 50%"
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Sales Automation
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your sales process with intelligent automation and AI-powered insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to automate and optimize your sales process
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Sales Automation?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience measurable improvements in your sales performance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Ready to Transform Your Sales?
                </h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of businesses that have already revolutionized their sales process with our AI automation platform.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AISalesAutomationPage;
