import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BannerData {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl?: string;
  category: string;
  priority: number;
  isActive: boolean;
  startDate?: string;
  endDate?: string;
}

interface BannerManagerProps {
  banners: BannerData[];
  rotationInterval?: number;
  maxVisibleBanners?: number;
}

const BannerManager: React.FC<BannerManagerProps> = ({
  banners,
  rotationInterval = 10000,
  maxVisibleBanners = 3
}) => {
  const [currentBanners, setCurrentBanners] = useState<BannerData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter active banners and sort by priority
  const activeBanners = banners
    .filter(banner => {
      if (!banner.isActive) return false;
      
      const now = new Date();
      if (banner.startDate && new Date(banner.startDate) > now) return false;
      if (banner.endDate && new Date(banner.endDate) < now) return false;
      
      return true;
    })
    .sort((a, b) => b.priority - a.priority)
    .slice(0, maxVisibleBanners);

  useEffect(() => {
    if (activeBanners.length === 0) return;
    
    setCurrentBanners(activeBanners);
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % activeBanners.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [activeBanners, rotationInterval]);

  if (activeBanners.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-8 rounded-lg shadow-lg"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {activeBanners[currentIndex].title}
                </motion.h2>
                
                {activeBanners[currentIndex].subtitle && (
                  <motion.h3 
                    className="text-xl md:text-2xl mb-4 text-blue-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {activeBanners[currentIndex].subtitle}
                  </motion.h3>
                )}
                
                <motion.p 
                  className="text-lg mb-6 text-blue-50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {activeBanners[currentIndex].description}
                </motion.p>
                
                <motion.a
                  href={activeBanners[currentIndex].ctaLink}
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeBanners[currentIndex].ctaText}
                </motion.a>
              </div>
              
              {activeBanners[currentIndex].imageUrl && (
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <img 
                    src={activeBanners[currentIndex].imageUrl} 
                    alt={activeBanners[currentIndex].title}
                    className="w-full h-64 object-cover rounded-lg shadow-xl"
                  />
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Banner indicators */}
      {activeBanners.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {activeBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BannerManager;