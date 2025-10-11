
'use client'
import React from 'react';
const ContentPromotionBanner: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence for your business needs'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance standards'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Industry-leading solutions and support'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals at your service'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join thousands of companies already using our cutting-edge solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-cyan-100 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
        
        <div className="text-center">
          <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors duration-300 flex items-center justify-center mx-auto">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
      </div>
    </div>
  );
};

export default ContentPromotionBanner;