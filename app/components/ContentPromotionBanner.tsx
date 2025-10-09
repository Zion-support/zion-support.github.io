import React from 'react';

const ContentPromotionBanner: React.FC = () => {
<<<<<<< HEAD
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm font-medium">
          🚀 <strong>New:</strong> AI-Powered Business Intelligence Dashboard - 
          <a href="/business-intelligence" className="underline hover:no-underline ml-1">
            Learn More →
          </a>
        </p>
=======
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const banners: PromotionBanner[] = [
    {
      id: 'ai-transformation',
      title: '🚀 AI Enterprise Transformation Guide',
      subtitle: 'Learn how Fortune 500 companies achieve $50M+ annual savings with our proven AI strategies',
      ctaText: 'Read the Guide',
      ctaLink: '/blog/ai-enterprise-transformation-2025',
      backgroundColor: 'from-indigo-600 to-purple-600',
      textColor: 'text-white',
      icon: '💰',
      stats: [
        { value: '$50M+', label: 'Annual Savings' },
        { value: '95%', label: 'Process Automation' },
        { value: '300%', label: 'ROI' }
      ]
    },
    {
      id: 'ai-trends-2026',
      title: '🌟 AI 2026 Mega Trends Breakthrough',
      subtitle: 'Discover the revolutionary AI trends that will transform enterprise operations in 2026',
      ctaText: 'Explore Trends',
      ctaLink: '/blog/ai-2025-2026-mega-trends-breakthrough',
      backgroundColor: 'from-green-600 to-blue-600',
      textColor: 'text-white',
      icon: '🚀',
      stats: [
        { value: '$100B+', label: 'Market Value' },
        { value: '95%', label: 'Process Automation' },
        { value: '10x', label: 'Efficiency Gains' }
      ]
    },
    {
      id: 'autonomous-architecture',
      title: '🏗️ Autonomous Enterprise Architecture',
      subtitle: 'Revolutionary self-healing systems and predictive infrastructure for 99.9% uptime',
      ctaText: 'Learn More',
      ctaLink: '/blog/ai-2026-autonomous-enterprise-architecture',
      backgroundColor: 'from-purple-600 to-pink-600',
      textColor: 'text-white',
      icon: '🏗️',
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '90%', label: 'Cost Reduction' },
        { value: 'Real-time', label: 'Optimization' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 8000); // Change banner every 8 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;return (
    <div className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className={`bg-gradient-to-r ${banner.backgroundColor} py-12 px-4`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{banner.icon}</span>
                <div>
                  <h2 className={`text-3xl font-bold ${banner.textColor} mb-2`}>
                    {banner.title}
                  </h2>
                  <p className={`text-lg ${banner.textColor} opacity-90`}>
                    {banner.subtitle}
                  </p>
                </div>
              </div>

              {/* Stats */}
              {banner.stats && (
                <div className="flex space-x-8 mb-6">
                  {banner.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold ${banner.textColor}`}>
                        {stat.value}
                      </div>
                      <div className={`text-sm ${banner.textColor} opacity-80`}>
                        {stat.label}
                      </div>
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
        </div>
      </div>

      {/* Banner indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentBanner ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
>>>>>>> resolve-merge-conflicts-1759965566
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
