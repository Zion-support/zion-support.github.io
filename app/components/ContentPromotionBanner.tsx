<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3 } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb

const ContentPromotionBanner: React.FC = () => {
<<<<<<< HEAD
  return (
    <div className="contentpromotionbanner">
      <h2>ContentPromotionBanner</h2>
      <p>ContentPromotionBanner component.</p>
=======
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment with local support and compliance',
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge AI and IT solutions that drive real business results
          </p>
        </div></div></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-10 h-10 text-white" />
              </div></div></div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Our Commitment to Excellence</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div></div></div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI solutions to transform their operations.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center mx-auto lg:mx-0">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        </div>
      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    </div>
  );
};

<<<<<<< HEAD
export default ContentPromotionBanner;
=======
export default ContentPromotionBanner;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

'use client';

interface ContentPromotionBannerProps {title?: string;
=======
import React  from 'react';
import { ArrowRight } from 'lucide-react';
interface ContentPromotionBannerProps {
  title?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  subtitle?: string;
  features?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  variant?: 'default' | 'premium' | 'limited';}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps   /> = ({const title = "Unlock Premium Features",
  subtitle = "Get access to advanced tools and exclusive content",
  features = ["Advanced Analytics",
    "Priority Support",
    "Custom Integrations",
    "24/7 Monitoring"],
  buttonText = "Upgrade Now",
  onButtonClick,
  variant = 'default'}) => {const getVariantStyles = () => {
    switch (variant) {
      case 'premium':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'limited':
        return 'bg-gradient-to-r from-red-600 to-orange-600';
      default: return 'bg-gradient-to-r from-blue-600 to-purple-600';}
  };

<<<<<<< HEAD
export default function ContentPromotionBanner() {return (
=======
  return (
    <div const className = {`relative overflow-hidden rounded-2xll ${getVariantStyles()} p-8 text-white`} />
      {/* Background Pattern */}
      <div className="absoluteinset-0opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparenttransform-skew-x-12"></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796

      {/* Background Pattern */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h3 className="text-2 xl lg: text-3 xlfont-boldmb-2"  >{title}</h3>
            <p className="text-lgtext-white/90mb-4">{subtitle}</p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {features.map((feature, index) => (
                <div key={index} className="flex items-centertext-sm"   /></div>
                  <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                  <span  >{feature}</span>
                </div>
<<<<<<< HEAD
  ))}
            </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <button;
              onClick="{onButtonClick}"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-centergap-2"   /></button>
              {buttonText}
              <ArrowRight className="w-5h-5ml-2"   /></ArrowRight>
            </button>
          </div>
      </div>
=======
              ))}
            </div>

          <div className="flex-shrink-0">
        </div>
            <button
              onClick={onButtonClick}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-centergap-2" />
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  );
};

export default ContentPromotionBanner;
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = () => {
  return (
    <div className="contentpromotionbanner">
      <h2>ContentPromotionBanner</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default ContentPromotionBanner;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
