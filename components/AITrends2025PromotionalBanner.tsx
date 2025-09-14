import React from 'react';
import Link from 'next/link';
import { 
  ArrowRightIcon
  SparklesIcon
  TrendingUpIcon
  LightBulbIcon,
  RocketLaunchIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const AITrends2025PromotionalBanner: React.FC = () => {
  const trends = [
    {
      title: 'Generative AI Revolution',
      description: 'Transform content creation with advanced AI models',
      icon: SparklesIcon,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing AI systems for enterprise operations',
      icon: RocketLaunchIcon,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Predictive Analytics',
      description: 'AI-driven insights for strategic decision making',
      icon: ChartBarIcon,
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-white border-opacity-30">
            <TrendingUpIcon className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">AI TRENDS 2025</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
            The Future of AI is
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
              Here Today
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI trends that are reshaping industries
            transforming businessesand creating unprecedented opportunities for growth and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/ai-trends-2025"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center text-lg"
            >
              <LightBulbIcon className="w-6 h-6 mr-3" />
              Explore AI Trends
            </Link>
            <Link
              href="/ai-implementation-guide-2025"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 backdrop-blur-sm flex items-center justify-center text-lg"
            >
              <RocketLaunchIcon className="w-6 h-6 mr-3" />
              Implementation Guide
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-4xl font-bold text-yellow-400 mb-2">85%</div>
              <div className="text-sm opacity-90">Companies Adopting AI</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">$2.3T</div>
              <div className="text-sm opacity-90">AI Market Value by 2025</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-400 mb-2">340%</div>
              <div className="text-sm opacity-90">Average ROI Increase</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-4xl font-bold text-green-400 mb-2">50M+</div>
              <div className="text-sm opacity-90">AI Jobs Created</div>
            </div>
          </div>
        </div>

        {/* Trending Topics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trends.map((trendindex) => {
            const IconComponent = trend.icon;
            return (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${trend.bgColor} rounded-2xl mb-6`}>
                  <IconComponent className={`w-8 h-8 ${trend.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {trend.title}
                </h3>
                
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {trend.description}
                </p>
                
                <Link
                  href={`/ai-trends/${trend.title.toLowerCase().replace(/\s+/g'-')}`}
                  className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to Lead the AI Revolution?
            </h3>
            <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
              Join the elite group of forward-thinking companies that are already transforming 
              their operations with cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                Start Your AI Journey
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
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

export default AITrends2025PromotionalBanner;