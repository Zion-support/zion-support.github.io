import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircleIcon, ArrowRightIcon, ChartBarIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

interface SuccessStory {
  id: string;
  title: string;
  industry: string;
  roi: string;
  savings: string;
  timeframe: string;
  keyResults: string[];
  url: string;
  logo: string;
}

const SuccessStoriesBanner2025: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const successStories: SuccessStory[] = [
    {
      id: 'manufacturing-transformation',
      title: 'Manufacturing AI Transformation',
      industry: 'Automotive Parts Manufacturing',
      roi: '340%',
      savings: '$2.8M',
      timeframe: '18 months',
      keyResults: [
        '25% quality improvement',
        '30% reduction in maintenance costs',
        '20% productivity increase',
        '15% reduction in energy costs'
      ],
      url: '/case-studies/manufacturing-ai-transformation',
      logo: '🏭'
    },
    {
      id: 'healthcare-optimization',
      title: 'Healthcare AI Optimization',
      industry: 'Regional Hospital Network',
      roi: '280%',
      savings: '$4.2M',
      timeframe: '24 months',
      keyResults: [
        '40% reduction in diagnostic time',
        '35% improvement in patient outcomes',
        '25% cost reduction in operations',
        '50% faster treatment planning'
      ],
      url: '/case-studies/healthcare-ai-optimization',
      logo: '🏥'
    },
    {
      id: 'retail-personalization',
      title: 'Retail AI Personalization',
      industry: 'E-commerce Platform',
      roi: '420%',
      savings: '$5.1M',
      timeframe: '12 months',
      keyResults: [
        '35% increase in conversion rates',
        '28% improvement in customer satisfaction',
        '40% reduction in cart abandonment',
        '22% increase in average order value'
      ],
      url: '/case-studies/retail-ai-personalization',
      logo: '🛒'
    },
    {
      id: 'financial-services',
      title: 'Financial Services AI',
      industry: 'Regional Bank',
      roi: '380%',
      savings: '$3.7M',
      timeframe: '15 months',
      keyResults: [
        '60% reduction in fraud losses',
        '45% improvement in risk assessment',
        '30% faster loan processing',
        '25% increase in customer retention'
      ],
      url: '/case-studies/financial-services-ai',
      logo: '🏦'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const goToStory = (index: number) => {
    setCurrentStory(index);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <CheckCircleIcon className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">PROVEN SUCCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our AI implementations have delivered measurable results across industries. 
            See how we've helped companies achieve extraordinary ROI and transform their operations.
          </p>
        </div>

        {/* Success Stories Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentStory * 100}%)` }}
            >
              {successStories.map((story, index) => (
                <div key={story.id} className="w-full flex-shrink-0">
                  <div className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Story Content */}
                      <div className="p-12 flex flex-col justify-center">
                        <div className="flex items-center mb-6">
                          <div className="text-4xl mr-4">{story.logo}</div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                              {story.title}
                            </h3>
                            <p className="text-lg text-gray-600">
                              {story.industry}
                            </p>
                          </div>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                          <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl">
                            <div className="flex items-center mb-2">
                              <ChartBarIcon className="w-6 h-6 text-green-600 mr-2" />
                              <span className="text-sm font-medium text-green-800">ROI</span>
                            </div>
                            <div className="text-3xl font-bold text-green-900">
                              {story.roi}
                            </div>
                          </div>
                          
                          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl">
                            <div className="flex items-center mb-2">
                              <CurrencyDollarIcon className="w-6 h-6 text-blue-600 mr-2" />
                              <span className="text-sm font-medium text-blue-800">Annual Savings</span>
                            </div>
                            <div className="text-3xl font-bold text-blue-900">
                              {story.savings}
                            </div>
                          </div>
                        </div>

                        {/* Timeframe */}
                        <div className="flex items-center mb-6 text-gray-600">
                          <ClockIcon className="w-5 h-5 mr-2" />
                          <span className="text-lg">Achieved in {story.timeframe}</span>
                        </div>

                        {/* Key Results */}
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-3">
                            {story.keyResults.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-center">
                                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          href={story.url}
                          className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 w-fit"
                        >
                          Read Full Case Study
                          <ArrowRightIcon className="w-5 h-5 ml-2" />
                        </Link>
                      </div>

                      {/* Visual Element */}
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-6xl">{story.logo}</span>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                              <div className="text-2xl font-bold text-green-600">
                                {story.roi} ROI
                              </div>
                              <div className="text-sm text-gray-600">Return on Investment</div>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg shadow-md">
                              <div className="text-2xl font-bold text-blue-600">
                                {story.savings}
                              </div>
                              <div className="text-sm text-gray-600">Annual Savings</div>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg shadow-md">
                              <div className="text-2xl font-bold text-purple-600">
                                {story.timeframe}
                              </div>
                              <div className="text-sm text-gray-600">Implementation Time</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevStory}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 p-4 rounded-full shadow-lg transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextStory}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 p-4 rounded-full shadow-lg transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {successStories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStory(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentStory
                  ? 'bg-green-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Statistics Summary */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h3>
            <p className="text-lg text-gray-600">
              Across all our AI implementations, we consistently deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$3.2M</div>
              <div className="text-gray-600">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">18</div>
              <div className="text-gray-600">Months Average Payback</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let us help you achieve similar results with a personalized AI strategy 
              designed for your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Start Your AI Journey
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesBanner2025;