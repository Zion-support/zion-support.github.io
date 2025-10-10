'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Award } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const promotions = [
    {
      title: 'Free AI Consultation',
      description: 'Get expert advice on AI implementation for your business',
      cta: 'Schedule Now',
      link: '/consultation',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: '50+ Micro SaaS Tools',
      description: 'Discover our comprehensive suite of AI-powered business tools',
      cta: 'Explore Tools',
      link: '/micro-saas',
      icon: <Award className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Client Success Stories',
      description: 'See how we\'ve helped businesses transform with AI',
      cta: 'View Cases',
      link: '/case-studies',
      icon: <Star className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotions.map((promotion, index) => (
            <Link
              key={index}
              to={promotion.link}
              className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${promotion.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  {promotion.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {promotion.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {promotion.description}
                  </p>
                  <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                    {promotion.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentPromotionBanner;