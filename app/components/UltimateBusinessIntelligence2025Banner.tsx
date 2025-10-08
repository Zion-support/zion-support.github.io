import React from 'react';
import Link from 'next/link';

<<<<<<< HEAD
const UltimateBusinessIntelligence2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const content = [
    {
      id: 'ultimate-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution',
      description: 'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      metrics: {
        efficiency: '300%',
        accuracy: '99.7%',
        timeline: '6 months',
        adoption: '95%'
      },
      readingTime: '15 min read',
      featured: true
    },
    {
      id: 'fortune-500-business-intelligence-success',
      title: 'Fortune 500 Ultimate Business Intelligence Success',
      description: 'How a $15.2B manufacturing giant achieved unprecedented business intelligence transformation with AI-powered analytics.',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-30000-roi-success-story',
      type: 'Case Study',
      metrics: {
        efficiency: '250%',
        accuracy: '98.5%',
        timeline: '12 months',
        adoption: '87%'
      },
      readingTime: '30 min read',
      featured: false
    },
    {
      id: 'business-intelligence-implementation-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide',
      description: 'Complete roadmap to 30,000% ROI through revolutionary AI-powered business intelligence transformation.',
      url: '/resources/ai-2025-ultimate-business-intelligence-implementation-guide',
      type: 'Implementation Guide',
      metrics: {
        efficiency: '400%',
        accuracy: '99.9%',
        timeline: '18 months',
        adoption: '100%'
      },
      readingTime: '60 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [content.length]);

  useEffect(() => {
    const dismissed = localStorage.getItem('ultimate-business-intelligence-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ultimate-business-intelligence-2025-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentContent = content[currentSlide];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-cyan-400 font-bold text-xl">
              BREAKING: ULTIMATE BUSINESS INTELLIGENCE REVOLUTION 2025
=======
const UltimateBusinessIntelligence2025Banner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 mb-8">
            <span className="text-indigo-300 text-lg font-semibold">🚀 Ultimate Business Intelligence 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Advanced AI Intelligence
>>>>>>> origin/main
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Unlock unprecedented insights and drive exponential growth with our cutting-edge 
            business intelligence solutions powered by artificial intelligence and machine learning.
          </p>

<<<<<<< HEAD
        {/* Main Content Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {/* Content Type Badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-200 text-sm font-bold rounded-full border border-cyan-400/50">
                  {currentContent.type}
                </span>
                <span className="text-gray-300 text-sm">⏱️ {currentContent.readingTime}</span>
              </div>
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Dismiss banner"
              >
                ✕
              </button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {Object.entries(currentContent.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{value}</div>
                  <div className="text-gray-300 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href={currentContent.url}
                className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="text-xl">📖</span>
                <span>Read {currentContent.type}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10"
              >
                <span className="text-xl">📞</span>
                <span>Call +1 302 464 0950</span>
              </a>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '30,000%', label: 'Average ROI' },
            { value: '99.9%', label: 'Success Rate' },
            { value: '5M+', label: 'Data Points Processed' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
=======
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="/services"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Started Today
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-10 py-5 border-2 border-indigo-400 text-indigo-300 font-bold text-lg rounded-xl hover:bg-indigo-400/10 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">300% ROI</h3>
              <p className="text-gray-300">Average return on investment within the first year of implementation.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">70% Cost Reduction</h3>
              <p className="text-gray-300">Significant operational cost savings through intelligent automation.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">90% Efficiency</h3>
              <p className="text-gray-300">Dramatic improvement in operational efficiency and productivity.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Monitoring</h3>
              <p className="text-gray-300">Continuous monitoring and optimization of your business processes.</p>
            </div>
          </div>
>>>>>>> origin/main
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligence2025Banner;