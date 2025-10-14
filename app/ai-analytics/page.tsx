import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Brain, Zap, Users, Target, ArrowRight, Star } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import Footer from '../components/Footer';
import FuturisticBackground from '../components/FuturisticBackground';

const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      title: "Predictive Analytics",
      description: "Leverage machine learning algorithms to predict future trends and customer behavior with high accuracy.",
      icon: <Brain className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Real-time Dashboards",
      description: "Monitor your business performance in real-time with interactive dashboards that update automatically.",
      icon: <BarChart3 className="w-12 h-12 text-purple-400" />
    },
    {
      title: "Customer Insights",
      description: "Understand your customers better with AI-powered segmentation and behavioral analysis.",
      icon: <Users className="w-12 h-12 text-yellow-400" />
    },
    {
      title: "Performance Optimization",
      description: "Identify bottlenecks and optimization opportunities across all your business processes.",
      icon: <Zap className="w-12 h-12 text-green-400" />
    }
  ];

  const metrics = [
    { label: "Data Points Analyzed", value: "10 M+", icon: <BarChart3 className="w-8 h-8 text-cyan-400" /> },
    { label: "Predictive Accuracy", value: "95%", icon: <Target className="w-8 h-8 text-purple-400" /> },
    { label: "Time Saved", value: "80%", icon: <TrendingUp className="w-8 h-8 text-yellow-400" /> },
    { label: "Client Satisfaction", value: "98%", icon: <Users className="w-8 h-8 text-green-400" /> }
  ];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="AI Analytics - Zion Tech Group | Advanced Data Analytics Solutions"
        description="Transform your data into actionable insights with our AI-powered analytics platform. Get predictive analytics, real-time dashboards, and intelligent business intelligence solutions."
        keywords="AI analytics, data analytics, business intelligence, predictive analytics, data visualization, machine learning analytics"
        canonical="https://ziontechgroup.com/ai-analytics"
      />
      
      <FuturisticBackground />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7 xl mx-auto text-center">
          <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6">
            AI Analytics
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
            Transform your data into actionable insights with our advanced AI-powered analytics platform. 
            Make smarter decisions with predictive analytics and real-time intelligence.
          </p>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7 xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  {metric.icon}
                </div>
                <div className="text-3 xl md:text-4 xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-300">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4">
              Advanced Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Powerful AI-driven analytics tools that help you understand your data and make informed decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-4">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4 xl mx-auto text-center">
          <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI analytics platform transform your data into actionable insights. 
            Get started with a free consultation and see the power of intelligent analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Analytics Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
