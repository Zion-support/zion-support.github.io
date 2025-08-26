import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, TrendingUp, Brain, ArrowRight, CheckCircle, Zap, Shield, Database } from 'lucide-react';
const AIAnalyticsCopilot: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Analytics Copilot - Zion Tech Group</title>
        <meta name="description" content="Intelligent analytics copilot that transforms raw data into actionable insights with AI-powered analysis and visualization." />
        <meta name="keywords" content="AI analytics, data insights, business intelligence, analytics copilot, data visualization" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-purple-800/20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 rounded-full px-6 py-3 mb-6">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-medium">AI Analytics Copilot</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Transform Data Into
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Actionable Insights
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Your intelligent analytics companion that understands your data, identifies patterns,
                and delivers insights that drive business decisions with confidence.
              </p>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Copilot Features</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Advanced AI capabilities that work alongside your team to unlock data insights
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Brain,
                  title: "Natural Language Queries",
                  description: "Ask questions about your data in plain English and get instant, accurate answers"
                },
                {
                  icon: TrendingUp,
                  title: "Predictive Analytics",
                  description: "Forecast trends and identify opportunities with advanced machine learning models"
                },
                {
                  icon: Database,
                  title: "Multi-Source Integration",
                  description: "Connect and analyze data from multiple sources with seamless data harmonization"
                },
                {
                  icon: Shield,
                  title: "Data Security",
                  description: "Enterprise-grade security with encryption, access controls, and compliance features"
                },
                {
                  icon: Zap,
                  title: "Real-time Insights",
                  description: "Get instant insights with real-time data processing and automated anomaly detection"
                },
                {
                  icon: CheckCircle,
                  title: "Automated Reporting",
                  description: "Generate comprehensive reports and dashboards automatically based on your requirements"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-colors">
                  <feature.icon className="w-12 h-12 text-blue-400 mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Business Benefits</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Accelerate decision-making and drive growth with AI-powered analytics
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "10x Faster Analysis",
                  description: "Reduce analysis time from days to minutes with automated insights"
                },
                {
                  title: "95% Accuracy",
                  description: "Achieve high accuracy in predictions and pattern recognition"
                },
                {
                  title: "24/7 Monitoring",
                  description: "Continuous monitoring and alerting for critical business metrics"
                },
                {
                  title: "Cost Reduction",
                  description: "Reduce analytics costs by up to 60% with automated processes"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start using AI Analytics Copilot today and unlock the full potential of your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all">
                View Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AIAnalyticsCopilot;