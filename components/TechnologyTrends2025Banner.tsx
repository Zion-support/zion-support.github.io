import React from 'react';
import Link from 'next/link';
import { 
  CpuChipIcon, 
  CloudIcon, 
  RocketLaunchIcon, 
  LightBulbIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const TechnologyTrends2025Banner = () => {
  const trends = [
    {
      title: "Generative AI Revolution",
      description: "Transform your business with advanced AI models that create, analyze, and optimize content at scale.",
      icon: CpuChipIcon,
      color: "blue",
      stats: "300% ROI"
    },
    {
      title: "Quantum Computing Breakthrough",
      description: "Unlock unprecedented computational power with quantum algorithms solving complex business problems.",
      icon: CloudIcon,
      color: "purple",
      stats: "1000x Speed"
    },
    {
      title: "Neural Interface Technology",
      description: "Bridge the gap between human intelligence and machine capabilities with next-gen interfaces.",
      icon: LightBulbIcon,
      color: "green",
      stats: "95% Accuracy"
    },
    {
      title: "Autonomous Systems",
      description: "Deploy self-managing systems that adapt, learn, and optimize operations without human intervention.",
      icon: RocketLaunchIcon,
      color: "orange",
      stats: "24/7 Operation"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-100",
      purple: "from-purple-500 to-purple-600 text-purple-100",
      green: "from-green-500 to-green-600 text-green-100",
      orange: "from-orange-500 to-orange-600 text-orange-100"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
            <SparklesIcon className="w-4 h-4 mr-2" />
            Technology Trends 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future is
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-4">
              Here
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the revolutionary technologies that are reshaping industries and 
            creating unprecedented opportunities for growth and innovation.
          </p>
        </div>

        {/* Trends Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trends.map((trend, index) => {
            const IconComponent = trend.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${getColorClasses(trend.color)} mb-6`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {trend.title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {trend.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-400">
                    {trend.stats}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <ArrowRightIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already leveraging these 
              cutting-edge technologies to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <RocketLaunchIcon className="w-5 h-5 mr-2" />
                Start Your Transformation
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyTrends2025Banner;