import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, BarChart3, Shield, CheckCircle, TrendingUp, DollarSign, Activity, Target } from "lucide-react";

const AIFinancialAnalysis = () => {
  const features = [
    {
      title: "Predictive Financial Modeling",
      description: "Build accurate financial models and forecasts using AI",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Risk Assessment",
      description: "Advanced risk analysis and portfolio optimization",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Analytics",
      description: "Monitor financial performance with real-time dashboards",
      icon: <Activity className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Investment Insights",
      description: "AI-powered investment recommendations and analysis",
      icon: <Target className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Improve financial forecasting accuracy by 85%",
    "Reduce risk assessment time by 70%",
    "Increase investment returns by 25%",
    "Automate financial reporting processes",
    "Identify market opportunities faster",
    "Ensure regulatory compliance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Financial Analysis - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered financial analysis platform. Predictive modeling, risk assessment, and real-time analytics for better financial decisions." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI Financial Analysis</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Make smarter financial decisions with our AI-powered analysis platform. 
            Get predictive insights, risk assessment, and real-time analytics for better outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Start Analysis
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              <DollarSign className="mr-2 w-5 h-5" />
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Financial Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional-grade financial analysis tools powered by AI
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Platform?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI financial analysis platform combines advanced algorithms with user-friendly 
                interfaces to deliver insights that drive better financial decisions.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Analyze?</h3>
                <p className="text-gray-300 mb-6">
                  Join financial professionals using our platform to make better decisions.
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Start Analysis Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Transform Your Financial Strategy</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't make financial decisions in the dark. Let our AI platform illuminate 
              opportunities and risks with data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Analysis
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialAnalysis;</TrendingUp></Shield></Activity></Target></meta></ArrowRight></ArrowRight></ArrowRight></DollarSign></CheckCircle></BarChart3>