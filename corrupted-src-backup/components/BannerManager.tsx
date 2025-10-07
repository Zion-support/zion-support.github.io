import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';



interface Banner {
  id: string;
  title: string;
  description: string;
  type: 'info' | 'success' | 'warning' | 'promotion';
  ctaText?: string;
  ctaLink?: string;
  icon?: string;
}

const BannerManager: React.FC = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const banners: Banner[] = [
    {
      id: 'ai-solutions',
      title: '🚀 Revolutionary AI Solutions',
      description:
        'Transform your business with cutting-edge artificial intelligence and machine learning technologies.',
      type: 'promotion',
      ctaText: 'Learn More',
      ctaLink: '/services',
      icon: '🤖',
    },
    {
      id: 'cloud-migration',
      title: '☁️ Cloud Migration Services',
      description:
        'Seamlessly migrate to the cloud with our expert guidance and proven methodologies.',
      type: 'info',
      ctaText: 'Get Started',
      ctaLink: '/contact',
      icon: '☁️',
    },
    {
      id: 'digital-transformation',
      title: '🚀 Digital Transformation',
      description:
        'Accelerate your digital journey with our comprehensive transformation strategies.',
      type: 'success',
      ctaText: 'Explore Solutions',
      ctaLink: '/services',
      icon: '🚀',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(prev => (prev + 1) % banners.length);
    }, 8000); // Change banner every 8 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  const getBannerStyles = (type: Banner['type']) => {
    switch (type) {
      case 'promotion':
        return 'bg-gradient-to-r from-blue-500 to-purple-600 text-white';
      case 'success':
        return 'bg-gradient-to-r from-green-500 to-blue-600 text-white';
      case 'warning':
        return 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white';
      case 'info':
      default:
        return 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white';
    }
  };

  const currentBanner = banners[currentBannerIndex];

  if (!isVisible) return null;

  if (!currentBanner) return null;

  return (
    <div className='relative overflow-hidden'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentBanner.id}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className={`${getBannerStyles(currentBanner.type)} py-4 px-6`}
        >
          <div className='container mx-auto flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <div className='text-2xl'>{currentBanner.icon}</div>
              <div>
                <h3 className='text-lg font-bold'>{currentBanner.title}</h3>
                <p className='text-sm opacity-90'>
                  {currentBanner.description}
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              {currentBanner.ctaText && (
                <button className='bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all duration-200'>
                  {currentBanner.ctaText}
                </button>
              )}
              <button
                onClick={() => setIsVisible(false)}
                className='text-white hover:text-gray-200 transition-colors'
              >
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Banner Indicators */}
      <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBannerIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentBannerIndex
                ? 'bg-white'
                : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerManager;
