import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Building, TrafficCone, Zap, Shield, Wifi, BarChart3 } from 'lucide-react';

export default function FiveGSmartCitySolutionsPage() {
  const features = [
    {
      title: "Smart Traffic Management",
      description: "Optimize traffic flow with real-time data and AI-powered traffic management systems",
      icon: <TrafficCone className="w-8 h-8" />
    },
    {
      title: "Connected Infrastructure",
      description: "Connect city infrastructure with 5G for real-time monitoring and control",
      icon: <Building className="w-8 h-8" />
    },
    {
      title: "Energy Management",
      description: "Optimize energy consumption across the city with smart grid technologies",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Public Safety",
      description: "Enhance public safety with connected surveillance and emergency response systems",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Citizen Services",
      description: "Deliver enhanced digital services to citizens through 5G connectivity",
      icon: <Wifi className="w-8 h-8" />
    },
    {
      title: "Data Analytics",
      description: "Analyze city data to improve services and make data-driven decisions",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Smart City Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G smart city solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            5G Smart City Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform cities with 5G-powered smart infrastructure and citizen services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Why Choose Our 5G Smart City Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Comprehensive Integration</h3>
              <p className="text-gray-300 mb-4">
                Integrate all city systems and services into a unified 5G-powered smart city platform.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Real-time Monitoring</h3>
              <p className="text-gray-300 mb-4">
                Monitor city infrastructure and services in real-time for proactive management and maintenance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Citizen Engagement</h3>
              <p className="text-gray-300 mb-4">
                Enhance citizen engagement through digital services and real-time communication channels.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Sustainability</h3>
              <p className="text-gray-300 mb-4">
                Promote sustainable urban development through smart resource management and environmental monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}