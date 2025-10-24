import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, BarChart3, FileText, Clock, TrendingUp, CheckCircle, ArrowRight, Zap, Target, Users } from 'lucide-react';

const AIAutomatedReportingPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligent Data Analysis",
      description: "AI algorithms automatically analyze your data to identify patterns, trends, and insights that matter most to your business."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Dashboards",
      description: "Live dashboards that update automatically with the latest data, providing instant visibility into your business performance."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Automated Report Generation",
      description: "Generate comprehensive reports automatically on schedule or on-demand, saving hours of manual work."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Scheduled Delivery",
      description: "Set up automated report delivery to stakeholders via email, Slack, or other platforms at your preferred intervals."
    }
  ];

  const benefits = [
    "Reduce report generation time by 90%",
    "Eliminate manual data processing errors",
    "Get insights 24/7 without human intervention",
    "Scale reporting across all departments",
    "Improve decision-making speed",
    "Reduce operational costs significantly"
  ];

  return (
    <>
      <Helmet>
        <title>AI Automated Reporting | Zion Tech Group</title>
        <meta name="description" content="Transform your business intelligence with AI-powered automated reporting. Generate insights, analytics, and reports automatically with our advanced AI reporting solutions." />
        <meta name="keywords" content="AI reporting, automated reports, business intelligence, data analytics, smart reporting, AI insights" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
                <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">AI-Powered Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Automated
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Reporting
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business intelligence with AI-powered automated reporting. 
                Generate comprehensive insights, analytics, and reports automatically 
                with our advanced AI reporting solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  Get Started
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate your reporting and gain actionable insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose AI Reporting?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with intelligent automated reporting
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Reporting?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to learn how AI automated reporting can transform your business intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutomatedReportingPage;