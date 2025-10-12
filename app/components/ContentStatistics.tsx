import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Clock, TrendingUp } from 'lucide-react';

const statistics = [
  {
    icon: Users,
    value: '500+',
    label: 'Happy Clients',
    description: 'Satisfied customers worldwide'
  },
  {
    icon: Award,
    value: '50+',
    label: 'Awards Won',
    description: 'Industry recognition'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support',
    description: 'Round-the-clock assistance'
  },
  {
    icon: TrendingUp,
    value: '99.9%',
    label: 'Uptime',
    description: 'Reliable service delivery'
  }
];

export default function ContentStatistics() {
  return (
    <>
      <Helmet>
        <title>Our Statistics - Zion Tech Group</title>
        <meta name="description" content="Discover our impressive track record in AI and IT solutions." />
      </Helmet>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that speak for themselves - our commitment to excellence in AI and IT solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}