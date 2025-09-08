import React from 'react';

import React from 'react';
import { Zap, Brain, Shield, Cloud, Database, Users, ArrowRight } from 'lucide-react';

export const QuickAccess: React.FC = () => {
  const quickLinks = [
    {
      title: "AI Solutions",
      description: "Transform your business with AI",
      icon: Brain,
      href: "/services/ai-solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets",
      icon: Shield,
      href: "/services/cybersecurity",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud & DevOps",
      description: "Scale your infrastructure",
      icon: Cloud,
      href: "/services/cloud-devops",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Analytics",
      description: "Unlock insights from data",
      icon: Database,
      href: "/solutions/ai-business-intelligence",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Team & Talent",
      description: "Find expert professionals",
      icon: Users,
      href: "/team",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Get Started",
      description: "Start your project today",
      icon: Zap,
      href: "/contact",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quick Access
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get started quickly with our most popular services and solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {link.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {link.description}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
}
