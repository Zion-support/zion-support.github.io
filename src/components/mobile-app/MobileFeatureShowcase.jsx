import React from 'react';
import { Smartphone, Zap, Shield, Users, Globe, BarChart3 } from 'lucide-react';

export const MobileFeatureShowcase = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices with intuitive touch controls and responsive design",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with instant loading and smooth animations",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols to protect your data",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time collaboration tools for seamless team communication",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Access your projects and talent from anywhere in the world",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights and reporting for data-driven decisions",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Powerful Mobile Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the full power of Zion's AI marketplace in the palm of your hand with our feature-rich mobile app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-8 border border-blue-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Mobile Excellence?
            </h3>
            <p className="text-gray-300 mb-6">
              Download the Zion mobile app today and transform how you work with AI talent and projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                Download for iOS
              </button>
              <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};