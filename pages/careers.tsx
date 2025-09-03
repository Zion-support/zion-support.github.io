import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import { Heart, Zap, Users, Globe } from 'lucide-react';

const Careers: NextPage = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance initiatives.'
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Regular team events, professional development, and collaborative culture.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on projects that make a difference worldwide.'
    }
  ];

  return (
    <Layout
      title="Careers - Zion Tech Group"
      description="Join our team and help shape the future of technology. Explore career opportunities at Zion Tech Group."
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Join Our Team
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;