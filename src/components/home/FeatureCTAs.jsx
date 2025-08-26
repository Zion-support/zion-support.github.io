import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Download, Users, Zap, ArrowRight } from 'lucide-react';

const FeatureCTAs = () => {
  const ctaItems = [
    {
      title: "Watch Demo",
      description: "See our solutions in action",
      icon: Play,
      href: "/demo",
      color: "from-blue-600 to-cyan-600",
      hoverColor: "from-blue-700 to-cyan-700"
    },
    {
      title: "Download Brochure",
      description: "Get detailed information",
      icon: Download,
      href: "/brochure",
      color: "from-green-600 to-teal-600",
      hoverColor: "from-green-700 to-teal-700"
    },
    {
      title: "Meet Our Team",
      description: "Connect with experts",
      icon: Users,
      href: "/team",
      color: "from-purple-600 to-pink-600",
      hoverColor: "from-purple-700 to-pink-700"
    },
    {
      title: "Get Started",
      description: "Start your project today",
      icon: Zap,
      href: "/contact",
      color: "from-orange-600 to-red-600",
      hoverColor: "from-orange-700 to-red-700"
    }
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your next step and begin your journey with Zion Tech Group
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ctaItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="group bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}>
                <item.icon className="w-8 h-8 text-white"/>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
                {item.description}
              </p>
              
              <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} text-white font-medium rounded-lg hover:bg-gradient-to-r ${item.hoverColor} transition-all duration-300`}>
                Get Started
                <ArrowRight className="w-4 h-4 ml-2"/>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Need help choosing? Our experts are here to guide you.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Talk to an Expert
            <ArrowRight className="w-5 h-5 ml-2"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureCTAs;
