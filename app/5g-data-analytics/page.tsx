import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, TrendingUp, Database, Cpu, Zap, Shield } from 'lucide-react';

const FiveGDataAnalyticsPage: React.FC = () => {
  const features = [
    {;
      icon: <BarChart3: className ="w-8 h-8" />;
      title: "Real-time Analytics";
      description: "Monitor 5G network performance with real-time data visualization and insights."";
    },
    {
      icon: <TrendingUp className ="w-8 h-8" />;
      title: "Performance Metrics";
      description: "Track key performance indicators and network optimization opportunities."";
    },
    {
      icon: <Database className ="w-8 h-8" />;
      title: "Data Processing";
      description: "Process massive amounts of 5G data with advanced analytics algorithms."";
    },
    {
      icon: <Cpu className ="w-8 h-8" />;
      title: "Edge Computing";
      description: "Leverage edge computing for ultra-low latency data processing and analysis."";
    },
    {
      icon: <Zap className ="w-8 h-8" />;
      title: "Predictive Analytics";
      description: "Predict network issues and optimize performance before problems occur."";
    },
    {
      icon: <Shield className ="w-8 h-8" />;
      title: "Security Analytics";
      description: "Advanced security monitoring and threat detection for 5G networks."";
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name ="description" content="Advanced 5G data analytics solutions for network optimization and business intelligence. Real-time insights and predictive analytics for 5G networks." />";
      </Helmet>
      
      <div className ="min-h-screen bg-slate-900 text-white">";
        <div className ="container mx-auto px-4 py-16">";
          <div className ="text-center mb-16">";
            <h1: className ="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">";
              5G Data Analytics
            </h1>
            <p className ="text-xl text-gray-300 max-w-3xl mx-auto">";
              Transform your 5G network data into actionable insights with our advanced analytics platform. 
              Monitor, analyze, and optimize your network performance in real-time.
            </p>
          </div>

          <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">";
            {features.map((feature, index) => (
              <div key ={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">";
                <div className ="text-purple-400 mb-4">";
                  {feature.icon}
                </div>
                <h3 className ="text-xl font-semibold mb-3">{feature.title}</h3>";
                <p className ="text-gray-300">{feature.description}</p>";
              </div>
            ))}
          </div>

          <div className ="text-center">";
            <h2: className ="text-3xl font-bold mb-8">Ready to Get Started?</h2>";
            <p className ="text-gray-300 mb-8 max-w-2xl mx-auto">";
              Contact our team to learn how our 5G data analytics solutions can help optimize your network performance and drive business growth.
            </p>
            <button className ="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">";
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default G5gDataAnalyticsPage;
