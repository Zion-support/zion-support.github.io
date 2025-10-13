import React from 'react';
import { Brain, Cloud, Shield, BarChart3, Zap, Globe } from 'lucide-react';

export default function PageClean() {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "40% efficiency boost",
      link: "/ai-services"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions that grow with your business, featuring advanced automation and 99.9% uptime guarantee",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "99.9% uptime",
      link: "/cloud-services"
    },
    {
      title: "Cybersecurity Suite",
      description: "Comprehensive security solutions protecting your digital assets with advanced threat detection and real-time monitoring",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      stats: "Zero breaches",
      link: "/cybersecurity"
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our advanced analytics platform and machine learning algorithms",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      stats: "300% ROI",
      link: "/data-analytics"
    },
    {
      title: "Performance Optimization",
      description: "Boost your application performance with our cutting-edge optimization techniques and real-time monitoring",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-red-500",
      stats: "50% faster",
      link: "/performance"
    },
    {
      title: "Global Reach",
      description: "Worldwide presence with local expertise, serving clients across 50+ countries with 24/7 support",
      icon: <Globe className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      stats: "50+ countries",
      link: "/global"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Zion Tech Group
        </h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Advanced AI and IT Solutions for the Future
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-green-400">{feature.stats}</span>
                <a
                  href={feature.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}