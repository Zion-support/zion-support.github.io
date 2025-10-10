>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
    }
  ],

  useEffect(() => {
    const interval = setInterval(() => {
  return (
    <div className={`relative bg-gradient-to-r ${currentBannerData.color} text-white py-3 px-4 transition-all duration-500`}></div>
      <div className="container mx-auto flex items-center justify-between"></div>
        <div className="flex items-center space-x-3"></div>
          <currentBannerData.icon className="w-5 h-5 animate-pulse" />
          <div></div>
            <span className="font-semibold text-sm sm:text-base">{currentBannerData.title}</span><span className="hidden sm:inline ml-2 text-sm opacity-90">{currentBannerData.description}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            </span>
          </div>
        </div>

            <span>{currentBannerData.cta}</span>
            <ArrowRight className="w-3 h-3" />
            }`}
            aria-label={`Go to banner ${index + 1}`}
          /></button>
        ))}</button>
>>>>>>> origin/main
import React from 'react';
import { Star, Zap, ArrowRight } from 'lucide-react',

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-cyan-400/20 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">New AI Solutions Available</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-400"></div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">300% Average ROI</span>
            </div>
          </div>
          <a
            href="/services"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            Explore Now <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
      </div>
    </div>
  ),
},

