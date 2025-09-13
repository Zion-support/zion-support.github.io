import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Users, Zap, Brain } from 'lucide-react';

const AI2025_2030UltimatePredictionsPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    setIsVisible(true);
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 text-yellow-300" />
            EXCLUSIVE CONTENT
            <Star className="w-4 h-4 text-yellow-300" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            🚀 AI 2025-2030 Ultimate Predictions
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Get exclusive access to the most comprehensive AI predictions and breakthrough technologies 
            that will revolutionize every industry over the next 5 years
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Users className="w-5 h-5 text-green-400" />
              <span className="text-lg font-semibold">50,000+ Industry Leaders</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-lg font-semibold">2,500-5,000% ROI</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-lg font-semibold">99.9% Accuracy</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-yellow-300" />
              <span className="text-lg font-semibold text-white">Limited Time Offer</span>
            </div>
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
                <div className="text-sm text-blue-200">Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
                <div className="text-sm text-blue-200">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
                <div className="text-sm text-blue-200">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
                <div className="text-sm text-blue-200">Seconds</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2025-2030-predictions"
              className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Exclusive Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 text-blue-200 text-sm">
            <p>✓ 100% Free Access • ✓ No Credit Card Required • ✓ Instant Download</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025_2030UltimatePredictionsPromotionBanner;