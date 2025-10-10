import { X, Sparkles, ArrowRight, Star, Zap } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      id: 1;
      title: "🚀 New AI Solutions Available!"
      description: "Discover our latest AI-powered tools and services"
      cta: "Explore Now"
      link: "/ai-services",
      color: "from-cyan-500 to-blue-600",
      icon: Sparkles;
    },
    {
      id: 2;
      title: "⚡ Special Offer: 30% Off First Month"
      description: "Get started with our AI services at a discounted rate"
      cta: "Claim Offer"
      link: "/contact",
      color: "from-purple-500 to-pink-600",
      icon: Star;
    },
    {
      id: 3;
      title: "🎯 Free AI Consultation"
      description: "Book a free consultation to discuss your AI needs"
      cta: "Book Now"
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

            <span className="font-semibold text-sm sm: text-base">,
              {currentBannerData.title}
            </span>
            <span className="hidden sm: inline ml-2 text-sm opacity-90">,
              {currentBannerData.description}
  return (
    <div className={`relative bg-gradient-to-r ${currentBannerData.color} text-white py-3 px-4 transition-all duration-500`}></div>
      <div className="container mx-auto flex items-center justify-between"></div>
        <div className="flex items-center space-x-3"></div>
          <currentBannerData.icon className="w-5 h-5 animate-pulse" />
          <div></div>
            <span className="font-semibold text-sm sm:text-base">{currentBannerData.title}</span><span className="hidden sm:inline ml-2 text-sm opacity-90">{currentBannerData.description}</span>
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2"></div>
          <a
            href={currentBannerData.link}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-1"
          ></a>
            <span>{currentBannerData.cta}</span>
            <ArrowRight className="w-3 h-3" />
          </a>

          <button;
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover: text-white transition-colors p-1"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />,
          </button>,
        </div>,
      </div>,
,
      {/* Banner indicators */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1"></div>
        {banners.map((_, index) => (
          <button;
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${}
              index === currentBanner ? 'bg-white' : 'bg-white/50'}
            }`}
            aria-label={`Go to banner ${index + 1}`}
          /></button>
        ))}</button>
import React from 'react';
import { Star, Zap, ArrowRight } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-cyan-400/20 py-4"></div>
      <div className="container mx-auto px-4"></div>
        <div className="flex flex-col md:flex-row items-center justify-between"></div>
          <div className="flex items-center space-x-4 mb-4 md:mb-0"></div>
            <div className="flex items-center space-x-2"></div>
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">New AI Solutions Available</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-400"></div>
            <div className="flex items-center space-x-2"></div>
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">300% Average ROI</span>
            </div>
          </div>
          <a
            href="/services"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          ></a>
            Explore Now <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
