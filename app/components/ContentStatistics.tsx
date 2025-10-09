import React, { useState, useEffect } from 'react';
import { Users, Award, TrendingUp, Zap, Shield, Globe, Star, CheckCircle } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      number: "50+",
      label: "Successful Projects",
      description: "Completed implementations",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average ROI",
      description: "Return on investment",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "System reliability",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Security Compliance",
      description: "Enterprise-grade security",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries Served",
      description: "Global presence",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-800/30 to-purple-900/30 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Measurable results that speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-slate-800/70 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-cyan-400 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional achievements */}
        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">$50M+</div>
              <div className="text-sm text-gray-300">Annual Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">95%</div>
              <div className="text-sm text-gray-300">Process Automation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support Availability</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">ISO 27001</div>
              <div className="text-sm text-gray-300">Security Certification</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;