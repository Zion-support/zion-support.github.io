import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Smartphone, Zap, Shield, Cloud, Wifi, BarChart3 } from 'lucide-react';

export default function FiveGMobileApplicationsPage() {
  const features = [
    {
      title: "Ultra-Fast Mobile Apps",
      description: "Build mobile applications that leverage 5G's high-speed connectivity for enhanced user experience",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "Real-time Streaming",
      description: "Enable high-quality video streaming and real-time communication in mobile apps",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Enhanced Security",
      description: "Implement advanced security features for mobile applications using 5G capabilities",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Cloud Integration",
      description: "Seamlessly integrate mobile apps with cloud services and edge computing",
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: "Network Optimization",
      description: "Optimize mobile app performance based on 5G network conditions and availability",
      icon: <Wifi className="w-8 h-8" />
    },
    {
      title: "Analytics & Insights",
      description: "Advanced analytics and user behavior tracking for mobile applications",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Mobile Applications - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G mobile application solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            5G Mobile Applications
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Develop next-generation mobile applications powered by 5G technology
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
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Why Choose Our 5G Mobile Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Enhanced Performance</h3>
              <p className="text-gray-300 mb-4">
                Build mobile apps that take full advantage of 5G's speed and low latency for superior user experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Real-time Features</h3>
              <p className="text-gray-300 mb-4">
                Implement real-time features like live streaming, AR/VR, and instant collaboration in your mobile apps.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Scalable Architecture</h3>
              <p className="text-gray-300 mb-4">
                Design mobile applications that can scale with 5G network growth and user demand.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Future-Ready</h3>
              <p className="text-gray-300 mb-4">
                Build mobile apps that are ready for the future of 5G technology and emerging use cases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}