'use client';
import React, { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight, Star, Zap } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      id: 1,
      title: "🚀 New AI Solutions Available!",
      description: "Discover our latest AI-powered tools and services",
      cta: "Explore Now",
      link: "/ai-services",
      color: "from-cyan-500 to-blue-600",
      icon: Sparkles
    },
    {
      id: 2,
      title: "⚡ Special Offer: 30% Off First Month",
      description: "Get started with our AI services at a discounted rate",
      cta: "Claim Offer",
      link: "/contact",
      color: "from-purple-500 to-pink-600",
      icon: Star
    },
    {
      id: 3,
      title: "🎯 Free AI Consultation",
      description: "Book a free consultation to discuss your AI needs",
      cta: "Book Now",
      link: "/consultation",
      color: "from-green-500 to-emerald-600",
      icon: Zap
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  if (!isVisible) return null;

  const currentBannerData = banners[currentBanner];

  return (
    <div className={`relative bg-gradient-to-r ${currentBannerData.color} text-white py-3 px-4 transition-all duration-500`}>
     </div className={`relative bg-gradient-to-r ${currentBannerData.color} text-white py-3 px-4 transition-all duration-500`}> </div className={`relative bg-gradient-to-r ${currentBannerData.color} text-white py-3 px-4 transition-all duration-500`}><div className="container mx-auto flex items-center justify-between">
       </div className="container mx-auto flex items-center justify-between"> </div className="container mx-auto flex items-center justify-between"><div className="flex items-center space-x-3">
        </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"> </div><currentBannerData.icon className="w-5 h-5 animate-pulse" />
         </currentBannerData.icon className="w-5 h-5 animate-pulse" /> </currentBannerData.icon className="w-5 h-5 animate-pulse" /><div>
          </div> </div> </div><span className="font-semibold text-sm sm:text-base">{currentBannerData.tit</span className="font-semibold text-sm sm:text-base">l</span className="font-semibold text-sm sm:text-base">e</span>}</span>
                 <//span> <//span><span className="hidden sm:inline ml-2 text-sm opacity-90">{currentBannerData.descripti</span className="hidden sm:inline ml-2 text-sm opacity-90">o</span className="hidden sm:inline ml-2 text-sm opacity-90">n</span>}</span>
        <//span> <//span> </div>
      <//div> <//div> </div>

       <//div> <//div><div className="flex items-center space-x-2">
        </div className="flex items-center space-x-2"> </div className="flex items-center space-x-2"> </div><a
            href={currentBannerData.link}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-1"
          >
           </a
            href={currentBannerData.link}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-1"
          > </a
            href={currentBannerData.link}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-1"
          ><span>{currentBannerData.c</span>t</span>a</span>}</span>
           <//span> <//span><ArrowRight className="w-3 h-3" />
         </ArrowRight className="w-3 h-3" /> </ArrowRight className="w-3 h-3" /><button
            onClick={() =>setIsVisible(false)}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Close banne</button
            onClick={() =>r</button
            onClick={() =>"</button>
         <//button> <//button>></button>
           <//button> <//button><X className="w-4 h-4" />
        </X className="w-4 h-4" /> </X className="w-4 h-4" /> </button>
      <//button> <//button> </div>
    <//div> <//div> </div>

      {/* Banner indicators */}
     <//div> <//div><div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">{banners.map((_, index) =></div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1"> </div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">(</div><button
            key={index}
            onClick={() =>setCurrentBanner(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentBanner ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to banner ${index + 1}`}
          </button
            key={index}
            onClick={() =>/</button
            key={index}
            onClick={() =>></button>
        )<//button>)<//button>}</button>
    <//button> <//button> </div>
  <//div> <//div> </div>
  );
};

export default ContentPromotionBanner<//div>;<//div>