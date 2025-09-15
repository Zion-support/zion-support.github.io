import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Star, 
  Gift, 
  Clock, 
  ArrowRight,
  Sparkles,
  TrendingUp
} from 'lucide-react';

interface PromotionalBannerProps {
  variant?: 'default' | 'limited-time' | 'new-feature';
  className?: string;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({ 
  variant = 'default',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getBannerContent = () => {
    switch (variant) {
      case 'limited-time':
        return {
          icon: <Clock className="w-5 h-5" />,
          title: "Limited Time Offer",
          message: "Get 50% off your first year + Free AI Analytics Dashboard",
          bgColor: "bg-gradient-to-r from-red-500 to-pink-500",
          textColor: "text-white",
          cta: "Claim Offer",
          ctaLink: "/pricing?discount=50off"
        };
      case 'new-feature':
        return {
          icon: <Sparkles className="w-5 h-5" />,
          title: "New Feature Alert",
          message: "Introducing AI-Powered Business Intelligence - Try it free for 30 days",
          bgColor: "bg-gradient-to-r from-purple-500 to-indigo-500",
          textColor: "text-white",
          cta: "Explore Now",
          ctaLink: "/features/ai-business-intelligence"
        };
      default:
        return {
          icon: <TrendingUp className="w-5 h-5" />,
          title: "Special Promotion",
          message: "Transform your business with our AI solutions - Start your free trial today",
          bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
          textColor: "text-white",
          cta: "Start Free Trial",
          ctaLink: "/signup?trial=true"
        };
    }
  };

  const content = getBannerContent();

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className={`${content.bgColor} ${content.textColor} py-3 px-4 relative overflow-hidden ${className}`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {content.icon}
              <span className="font-semibold text-sm">{content.title}</span>
            </div>
            <span className="text-sm opacity-90">{content.message}</span>
          </div>

          <div className="flex items-center space-x-4">
            {variant === 'limited-time' && (
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <span>Ends in:</span>
                <div className="flex items-center space-x-1">
                  <span className="bg-white/20 px-2 py-1 rounded font-mono">
                    {timeLeft.days.toString().padStart(2, '0')}d
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded font-mono">
                    {timeLeft.hours.toString().padStart(2, '0')}h
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded font-mono">
                    {timeLeft.minutes.toString().padStart(2, '0')}m
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded font-mono">
                    {timeLeft.seconds.toString().padStart(2, '0')}s
                  </span>
                </div>
              </div>
            )}

            <motion.a
              href={content.ctaLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm"
            >
              <span>{content.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Animated elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: '50%',
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromotionalBanner;