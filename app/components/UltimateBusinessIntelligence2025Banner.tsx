import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligence2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const content = [
    {
      id: 'ultimate-business-intelligence-2025',
      title: 'Ultimate Business Intelligence Revolution 2025',
      description:
        'Transform your enterprise with AI-powered business intelligence achieving 30,000% ROI, 70% cost reduction, and 90% efficiency gains.',
      url: '/blog/ultimate-business-intelligence-2025',
      type: 'Blog Post',
      metrics: {
        roi: '30,000%',
        savings: '$750B+',
        accuracy: '99.99%',
        speed: '5,000% faster',
      },
      tags: ['AI', 'Business Intelligence', 'Enterprise', 'ROI', '2025'],
    },
    {
      id: 'ai-dashboard-2025',
      title: 'Revolutionary AI Dashboard 2025',
      description:
        'Experience the future of data visualization with our cutting-edge AI dashboard featuring real-time analytics and predictive insights.',
      url: '/services/ai-dashboard',
      type: 'Service',
      metrics: {
        users: '1M+',
        uptime: '99.9%',
        response: '<100ms',
        insights: 'Real-time',
      },
      tags: ['Dashboard', 'Analytics', 'Real-time', 'AI', '2025'],
    },
    {
      id: 'enterprise-automation-2025',
      title: 'Enterprise Automation Suite 2025',
      description:
        'Automate your entire business process with our comprehensive automation suite, reducing manual work by 95% and increasing productivity by 300%.',
      url: '/services/automation',
      type: 'Service',
      metrics: {
        automation: '95%',
        productivity: '300%',
        efficiency: '400%',
        cost: '80% reduction',
      },
      tags: ['Automation', 'Enterprise', 'Productivity', 'Efficiency', '2025'],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <div className='relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden'>
      <div className='absolute inset-0 bg-black/20'></div>
      <div className='relative z-10 p-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex items-center justify-between'>
            <div className='flex-1'>
              <div className='flex items-center gap-3 mb-2'>
                <span className='bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold'>
                  {currentContent.type}
                </span>
                <span className='text-yellow-400 text-sm font-medium'>
                  NEW 2025
                </span>
              </div>

              <h2 className='text-2xl font-bold mb-2'>
                {currentContent.title}
              </h2>

              <p className='text-gray-200 mb-4 max-w-2xl'>
                {currentContent.description}
              </p>

              <div className='flex flex-wrap gap-4 mb-4'>
                {Object.entries(currentContent.metrics).map(([key, value]) => (
                  <div key={key} className='text-center'>
                    <div className='text-2xl font-bold text-cyan-400'>
                      {value}
                    </div>
                    <div className='text-xs text-gray-300 capitalize'>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              <div className='flex flex-wrap gap-2 mb-4'>
                {currentContent.tags.map(tag => (
                  <span
                    key={tag}
                    className='bg-white/10 text-white px-2 py-1 rounded text-xs'
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className='flex items-center gap-4'>
                <Link
                  href={currentContent.url}
                  className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg'
                >
                  Learn More
                </Link>
                <button
                  onClick={() =>
                    setCurrentSlide(prev => (prev + 1) % content.length)
                  }
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Next →
                </button>
              </div>
            </div>

            <div className='flex items-center gap-2 ml-8'>
              {content.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleClose}
              className='ml-4 text-gray-300 hover:text-white transition-colors'
              aria-label='Close banner'
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessIntelligence2025Banner;
