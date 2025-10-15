import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Smartphone, Zap, Globe, Shield, Users, BarChart3 } from 'lucide-react';

const FiveGMobileApplicationsPage: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Native Apps",
      description: "High-performance native mobile applications optimized for 5G networks."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Ultra-Fast",
      description: "Lightning-fast app performance with 5G's ultra-low latency capabilities."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Seamless connectivity and performance across all 5G networks worldwide."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Apps",
      description: "Enterprise-grade security and data protection for all mobile applications."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Experience",
      description: "Superior user experience with responsive design and real-time features."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics",
      description: "Advanced analytics and insights for app performance and user behavior."
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Mobile Applications - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G mobile application solutions for modern businesses. High-performance apps optimized for 5G networks." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              5G Mobile Applications
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create powerful mobile applications that leverage the full potential of 5G networks. 
              Deliver exceptional user experiences with ultra-fast, responsive, and secure mobile apps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                <div className="text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Build 5G Apps?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your mobile application needs and discover how 5G can transform your app development.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default G5gMobileApplicationsPage;
