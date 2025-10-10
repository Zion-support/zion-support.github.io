'use client';
import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
<<<<<<< HEAD
      description: 'Worldwide deployment and support for international businesses'
      icon: TrendingUp,
      title: '📈 300% Average ROI',
      description: 'Our clients achieve 300% ROI and $50M+ in annual savings with our solutions.',
      cta: 'See Results',
      href: '/case-studies',
      color: 'from-yellow-400 to-orange-600'
import { X, Sparkles, ArrowRight, Star, Zap } from 'lucide-react';

const $1: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      id: 1,
      title: "🚀 New AI Solutions Available!"
      description: "Discover our latest AI-powered tools and services"
      cta: "Explore Now"
      link: "/ai-services",
      color: "from-cyan-500 to-blue-600",
      icon: Sparkles,
    },
    {
      id: 2,
      title: "⚡ Special Offer: 30% Off First Month"
      description: "Get started with our AI services at a discounted rate"
      cta: "Claim Offer"
      link: "/contact",
      color: "from-purple-500 to-pink-600",
      icon: Star,
    },
    {
      id: 3,
      title: "🎯 Free AI Consultation"
      description: "Book a free consultation to discuss your AI needs"
      cta: "Book Now"
      link: "/consultation",
      color: "from-green-500 to-emerald-600",
      icon: Zap,
      icon: Zap
=======
      description: 'Worldwide deployment with local support and compliance'
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
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
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>ContentPromotionBanner | Zion Tech Group</title>
        <meta name="description" content="Professional ContentPromotionBanner services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ContentPromotionBanner, AI solutions, IT services, Zion Tech Group, contentpromotionbanner" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ContentPromotionBanner
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced contentpromotionbanner solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our ContentPromotionBanner?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our contentpromotionbanner solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our contentpromotionbanner solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your contentpromotionbanner needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-cyan-400/20">
      {/* Animated Background */}</div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10 animate-pulse">
        <div 60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300ffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=">
      </div>

      <div className="relative container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Promotion Content */}</div>
          <div className="flex items-center space-x-4 flex-1">
            <div className={`w-10 h-10 bg-gradient-to-br ${current.color} rounded-lg flex items-center justify-center flex-shrink-0`}></div>
              <current.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-white mb-1 neon-text">
                {current.title}
              </h3>
              <p className="text-sm text-gray-300 hidden sm:block">
                {current.description}
              </p>
            </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a
              href={current.href}
              className="cyber-button text-sm px-4 py-2 inline-flex items-center hover:scale-105 transition-transform"
            >
              {current.cta}
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        {/* Progress Indicator */}
        <div className="flex space-x-1 mt-3">
          {promotions.map((_, index) => (</div>
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentPromo 
                  ? 'bg-cyan-400 w-8' 
                  : 'bg-gray-600 w-2'
              }`}
            />
          ))}</div>
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;return (
    <div className="relative overflow-hidden">
      {/* Background with gradient */}</div>
      <div className={`bg-gradient-to-r ${banner.backgroundColor} py-12 px-4`}></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Content */}</div>
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{banner.icon}</span>
                <div></div>
                  <h2 className={`text-3xl font-bold ${banner.textColor} mb-2`}>
                    {banner.title}
                  </h2>
                  <p className={`text-lg ${banner.textColor} opacity-90`}>
                    {banner.subtitle}
                  </p>
                </div>

              {/* Stats */}
              {banner.stats && (
                <div className="flex space-x-8 mb-6">
                  {banner.stats.map((stat, index) => (</div>
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold ${banner.textColor}`}>
                        {stat.value}</div>
                      <div className={`text-sm ${banner.textColor} opacity-80`}>
                        {stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA Button */}
              <Link
                to={banner.ctaLink}
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                {banner.ctaText}
                <svg className="ml-2 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className={`ml-6 p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors ${banner.textColor}`}
              aria-label="Close banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        <div className="flex items-center space-x-2">
          <a;)
            href={currentBannerData.link})
            className="bg-white/20 hover: bg-white/30 text-white px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-1")
          >),
        <div className="flex items-center space-x-2">
          <a
            href={currentBannerData.link}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-1"
          >
            <span>{currentBannerData.cta}</span>
            <ArrowRight className="w-3 h-3" />
          <button
            onClick={() =>setIsVisible(false)}</button></<<<butto>className</butto></butto>="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Close banner"</button>
          ></button>
            <X className="w-4 h-4" /></X>
          </button>
        </div>

      {/* Banner indicators */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">{banners.map((_, index) => (</div><button
            key={index}
            onClick={() =>setCurrentBanner(index)}</button></<<<butto>className</butto></butto>={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentBanner ? 'bg-white' : 'bg-white/50'
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
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {banners.map((_, index) => (</div>
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
    <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-cyan-400/20 py-4">
=======
    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 py-16">
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Transform Your Business Today
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI and IT solutions to drive growth and innovation.
          </p>
        </div>
<<<<<<< HEAD
=======

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-white/90 mb-6">
                Contact us today for a free consultation and discover how we can help transform your business.
              </p>
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
    </div>
  );
};

export default ContentPromotionBanner;