import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  X,
  Zap,
  Bot,
  BarChart3,
  TrendingUp,
  Star,
} from "lucide-react";

const PromotionalBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentService, setCurrentService] = useState(0);

  const services = [
    {
      icon: Zap,
      title: "AI Workflow Automation",
      description: "Reduce manual tasks by 80%",
      color: "text-blue-400",
    },
    {
      icon: Bot,
      title: "AI Virtual Assistant",
      description: "24/7 intelligent support",
      color: "text-purple-400",
    },
    {
      icon: BarChart3,
      title: "AI Data Analytics",
      description: "Transform data into insights",
      color: "text-green-400",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/90 via-zion-purple/90 to-zion-cyan/90"></div>
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-5 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute -bottom-5 left-1/3 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-white font-semibold text-sm">
                NEW: AI-Powered Micro SAAS Services
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-2 text-white">
              {(() => {
                const Icon = services[currentService].icon;
                return <Icon className={`w-4 h-4 ${services[currentService].color}`} />;
              })()}
              <span className="text-sm font-medium">{services[currentService].title}</span>
              <span className="text-xs text-zion-slate-light">- {services[currentService].description}</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2 text-white">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm">Trusted by 1000+ users</span>
            </div>
            
            <Link
              to="/ai-micro-saas"
              className="bg-white text-zion-blue px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zion-slate-light transition-all duration-300 flex items-center space-x-1 group"
            >
              <span>Explore Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-zion-slate-light transition-colors"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;