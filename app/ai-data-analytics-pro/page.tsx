import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, BarChart3, Brain, CheckCircle, TrendingUp, PieChart, Activity, Target } from "lucide-react";

const AIDataAnalyticsPro = () => {
  const features = [
    {
      title: "Real-time Analytics",
      description: "Process and analyze data in real-time with advanced AI algorithms",
      icon: <Activity className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Modeling",
      description: "Build accurate predictive models using machine learning",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Advanced Visualizations",
      description: "Create stunning interactive dashboards and reports",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations and automated insights",
      icon: <Brain className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Increase data processing speed by 10x",
    "Improve decision accuracy by 85%",
    "Reduce analysis time by 70%",
    "Generate actionable insights automatically",
    "Scale analytics across all departments",
    "Predict future trends with 90% accuracy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Data Analytics Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI-powered data analytics platform. Advanced insights, predictive modeling, and real-time analytics for enterprise businesses." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI Data Analytics Pro</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Unlock the full potential of your data with our professional AI-powered analytics platform. 
            Get advanced insights, predictive modeling, and real-time analytics for enterprise success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              <BarChart3 className="mr-2 w-5 h-5" />
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Professional Analytics Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enterprise-grade analytics tools designed for professional data teams
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
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Pro Analytics?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our professional analytics platform is designed for enterprise teams that need 
                advanced capabilities, security, and scalability for their data operations.
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
                <Target className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Go Pro?</h3>
                <p className="text-gray-300 mb-6">
                  Join enterprise teams using our platform to drive data-driven decisions.
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Start Pro Trial
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
            <h2 className="text-4xl font-bold text-white mb-6">Transform Your Data Strategy</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't let valuable insights hide in your data. Let our professional analytics 
              platform reveal opportunities and drive enterprise growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Pro Trial
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

export default AIDataAnalyticsPro;</Activity></TrendingUp></BarChart3></BarChart3></Brain></meta></ArrowRight></ArrowRight></ArrowRight></CheckCircle></Target>