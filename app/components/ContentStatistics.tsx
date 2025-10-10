'use client';

import React from 'react';
import { TrendingUp, Users, Zap, Shield, Star, Globe, Award, Target } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      value: '10,000+',
      label: 'Happy Customers',
      description: 'Businesses trust our solutions worldwide'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service guarantee'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      value: '4.9/5',
      label: 'Rating',
      description: 'Highly rated by clients'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      value: '50+',
      label: 'Countries',
      description: 'Global presence and support'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-400" />,
      value: '24/7',
      label: 'Support',
      description: 'Round-the-clock assistance'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      value: '100%',
      label: 'Secure',
      description: 'Enterprise-grade security'
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      title: 'Industry Leader',
      description: 'Recognized as a top AI solutions provider'
    },
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: 'Proven Results',
      description: 'Consistent delivery of measurable business value'
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: 'Global Reach',
      description: 'Serving clients across multiple continents'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. See why thousands of businesses choose Zion Tech Group.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Our Achievements</h3>
            <p className="text-gray-300">Recognition and awards that validate our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results with our proven AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;