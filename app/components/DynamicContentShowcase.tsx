import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, TrendingUp, Users, Award } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentContent, setCurrentContent] = useState(0);

  const contentItems = [
    {
      icon: TrendingUp,
      title: 'Performance Metrics',
      description: 'Real-time insights into your business performance with AI-powered analytics.',
      stats: '300% ROI Increase',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'Client Success Stories',
      description: 'See how our solutions have transformed businesses across various industries.',
      stats: '500+ Happy Clients',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning solutions recognized by leading technology organizations.',
      stats: '15+ Awards',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Calendar,
      title: 'Latest Updates',
      description: 'Stay updated with our newest features, case studies, and industry insights.',
      stats: 'Weekly Updates',
      color: 'from-orange-500 to-red-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  const currentItem = contentItems[currentContent];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dynamic Content Showcase</h2>
          <p className="text-xl text-gray-600">Discover what makes us different</p>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${currentItem.color} rounded-lg flex items-center justify-center mr-4`}>
                  <currentItem.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{currentItem.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">{currentItem.description}</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">{currentItem.stats}</div>
              <a
                href="/about"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="grid grid-cols-2 gap-4">
                  {contentItems.map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        index === currentContent
                          ? `bg-gradient-to-r ${item.color} text-white`
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setCurrentContent(index)}
                    >
                      <item.icon className="w-6 h-6 mb-2" />
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;