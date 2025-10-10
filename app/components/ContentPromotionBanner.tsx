'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Star, Users } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = const features = const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge AI to automate and optimize your business processes.',
      icon: Zap
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance to protect your data and operations.',
      icon: Shield
    },
    {
      title: 'Proven Results',
      description: 'Join 500+ companies that have transformed their operations with our solutions.',
      icon: Star
    },
    {
      title: 'Expert Support',
      description: '24/7 support from our team of AI and IT specialists.',
      icon: Users;
    };
  ];
  const benefits = const benefits = const benefits = [
    'Easy integration with existing systems',;
    'Cost-effective pricing plans',;
    'Proven track record of success';
  ];

  return() {features.map((feature, index) => ()
        ))}
      </div>

      <div className="text-center" /></div>
        <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center" /></button>
          Get Started Now
          <ArrowRight className="w-5 h-5 ml-2" / /></ArrowRight>
        </button>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
