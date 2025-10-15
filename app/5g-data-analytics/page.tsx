import React from 'react;'
import { Helmet } from 'react-helmet-async;'
import { BarChart3, TrendingUp, Database, Cpu, Zap, Shield } from 'lucide-react;'

const FiveGDataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Monitor 5G network performance with real-time data visualization and insights."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Metrics",
      description: "Track key performance indicators and network optimization opportunities."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Processing",
      description: "Process massive amounts of 5G data with advanced analytics algorithms."
    },
    {
      icon: <Cpu className="w-8 h-8" />,""
      title: "Edge Computing",""
      description: "Leverage edge computing for ultra-low latency data processing and analysis."""
    },
    {
      icon: <Zap className="w-8 h-8" />,""
      title: "Predictive Analytics",""
      description: "Predict network issues and optimize performance before problems occur."""
    },
    {
      icon: <Shield className="w-8 h-8" />,""
      title: "Security Analytics",""
      description: "Monitor and analyze security threats across your 5G network infrastructure."""
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics solutions for network optimization, performance monitoring, and predictive insights. Transform your 5G data into actionable intelligence." />""
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">""
          <div className="text-center mb-16">""
            <h1 className="text-5xl font-bold text-white mb-6">""
              5G Data Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""
              Transform your 5G network data into actionable insights with our advanced analytics platform. 
              Monitor performance, predict issues, and optimize your network for maximum efficiency.
            </p>
            <div className="flex justify-center space-x-4">""
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">""
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">""
                View Demo
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">""
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">""
                <div className="text-purple-400 mb-4">""
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">""
                  {feature.title}
                </h3>
                <p className="text-gray-300">""
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">""
            <h2 className="text-3xl font-bold text-white mb-4">""
              Ready to Optimize Your 5G Network?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">""
              Join leading enterprises using our 5G data analytics to maximize network performance and reduce costs.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-12 rounded-lg transition-colors duration-200 text-lg">""
              Start Analytics Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveGDataAnalyticsPage;
