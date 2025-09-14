import React from 'react';
import Link from 'next/link';
ArrowRightStarBookOpenPlayZapBrainTrendingUpUsersTargetCheckCircleAwardDollarSign

interface RevolutionaryContentPromotionBanner2025Props {
  variant?: 'featured' | 'compact' | 'hero';
  className?: string;
}

export default function RevolutionaryContentPromotionBanner2025({ 
  variant = 'featured'
  className = '' 
}: RevolutionaryContentPromotionBanner2025Props) {
  const content = {
    featured: {
      title: "🚀 Revolutionary AI Content 2025",
      subtitle: "Discover the Future of Enterprise Automation",
      description: "Explore cutting-edge AI solutionsreal success storiesand implementation guides that are transforming businesses worldwide.",
      bgColor: "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600",
      textColor: "text-white",
      buttonText: "Explore Now",
      buttonHref: "/blog/ai-2025-enterprise-automation-revolution",
      stats: [
        { label: "15,000% ROI"value: "Achieved" },
        { label: "$2.3B Revenue"value: "Generated" },
        { label: "500+ Clients"value: "Transformed" }
      ]
    },
    compact: {
      title: "New AI Content 2025",
      subtitle: "Latest Insights & Case Studies",
      description: "Discover how AI is revolutionizing enterprise operations with real-world success stories.",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      textColor: "text-white",
      buttonText: "Read More",
      buttonHref: "/case-studies/ai-2025-global-enterprise-transformation-ultimate-success"
    },
    hero: {
      title: "🌟 The AI Revolution is Here",
      subtitle: "Transform Your Business with Cutting-Edge AI Solutions",
      description: "Join 500+ enterprises that have achieved unprecedented success through our AI-powered automation solutions. Discover real case studiesimplementation guidesand the latest AI innovations.",
      bgColor: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900",
      textColor: "text-white",
      buttonText: "Start Your Journey",
      buttonHref: "/contact",
      secondaryButtonText: "View Success Stories",
      secondaryButtonHref: "/case-studies"
    }
  };

  const currentContent = content[variant];

  if (variant === 'hero') {
    return (
      <section className={`py-20 ${currentContent.bgColor} ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Star className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-sm font-semibold">NEW CONTENT 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              {currentContent.title}
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/90 mb-4 max-w-4xl mx-auto">
              {currentContent.subtitle}
            </p>
            
            <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
              {currentContent.description}
            </p>

            {/* Featured Content Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Link 
                href="/blog/ai-2025-enterprise-automation-revolution"
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-cyan-400 mr-2" />
                  <h3 className="text-lg font-semibold">AI Enterprise Revolution</h3>
                </div>
                <p className="text-white/80 text-sm mb-4">
                  Discover how AI is transforming enterprise operations with real-world insights and implementation strategies.
                </p>
                <div className="flex items-center text-cyan-400 text-sm font-medium">
                  Read Article <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link 
                href="/case-studies/ai-2025-global-enterprise-transformation-ultimate-success"
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-purple-400 mr-2" />
                  <h3 className="text-lg font-semibold">15,000% ROI Success</h3>
                </div>
                <p className="text-white/80 text-sm mb-4">
                  Real case study: How a Fortune 500 company achieved unprecedented results through AI transformation.
                </p>
                <div className="flex items-center text-purple-400 text-sm font-medium">
                  View Case Study <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link 
                href="/resources/ai-2025-implementation-quick-start-guide"
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <Zap className="h-6 w-6 text-pink-400 mr-2" />
                  <h3 className="text-lg font-semibold">Quick Start Guide</h3>
                </div>
                <p className="text-white/80 text-sm mb-4">
                  Step-by-step implementation guide to start your AI transformation journey today.
                </p>
                <div className="flex items-center text-pink-400 text-sm font-medium">
                  Get Started <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-white/80 text-sm">Enterprises Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">15,000%</div>
                <div className="text-white/80 text-sm">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">$50B+</div>
                <div className="text-white/80 text-sm">Value Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href={currentContent.buttonHref}
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center"
              >
                {currentContent.buttonText}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link 
                href={currentContent.secondaryButtonHref}
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 flex items-center"
              >
                {currentContent.secondaryButtonText}
                <Play className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'compact') {
    return (
      <section className={`py-8 ${currentContent.bgColor} ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{currentContent.title}</h3>
              <p className="text-white/90 text-sm">{currentContent.description}</p>
            </div>
            <Link 
              href={currentContent.buttonHref}
              className="ml-6 px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center"
            >
              {currentContent.buttonText}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 ${currentContent.bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-4">
            <Star className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-sm font-semibold">FEATURED CONTENT</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {currentContent.title}
          </h2>
          
          <p className="text-lg text-white/90 mb-6 max-w-3xl mx-auto">
            {currentContent.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {currentContent.stats?.map((statindex) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white mb-1">{stat.label}</div>
                <div className="text-white/80 text-sm">{stat.value}</div>
              </div>
            ))}
          </div>

          <Link 
            href={currentContent.buttonHref}
            className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            {currentContent.buttonText}
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}