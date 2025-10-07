'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const UltimateBusinessIntelligence2025Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const content = [
    {
      id: 'ultimate-business-intelligence-revolution',
      title: 'AI 2025: The Ultimate Business Intelligence Revolution',
      description:
        'Transform your enterprise with next-generation AI-powered business intelligence that delivers unprecedented insights and competitive advantage.',
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough',
      type: 'Blog Post',
      metrics: {
        roi: '30,000%',
        savings: '$750B+',
        accuracy: '99.99%',
        speed: '5,000% faster'
      },
      readingTime: '35 min read',
      featured: true,
    },
    {
      id: 'fortune-500-business-intelligence-success',
      title: 'Fortune 500 Ultimate Business Intelligence Success',
      description:
        'How a $15.2B manufacturing giant achieved unprecedented business intelligence transformation with AI-powered analytics.',
      url: '/case-studies/fortune-500-ultimate-business-intelligence-30000-roi-success-story',
      type: 'Case Study',
      metrics: {
        roi: '30,000%',
        savings: '$750B',
        company: '$15.2B',
        timeline: '18 months'
      },
      readingTime: '25 min read',
      featured: true,
    },
    {
      id: 'business-intelligence-implementation-guide',
      title: 'AI 2025 Ultimate Business Intelligence Implementation Guide',
      description:
        'Complete roadmap to 30,000% ROI through revolutionary AI-powered business intelligence transformation.',
      url: '/resources/ai-2025-ultimate-business-intelligence-implementation-guide',
      type: 'Implementation Guide',
      metrics: {
        roi: '30,000%',
        success: '99.8%',
        timeline: '18 months',
        adoption: '100%'
      },
      readingTime: '45 min read',
        guide: '60 min read'
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

  return (
    <section className='relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'></section>
      {/* Animated Background Effects */}
      <div className='absolute inset-0'></div>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      <div className='relative z-10 container mx-auto px-4 py-16'></div>
        {/* Header */}
        <div className='text-center mb-16'></div>
          <div className='flex items-center justify-center gap-3 mb-6'></div>
            <span className='text-2xl'>🚀</span>
            <span className='text-cyan-400 font-bold text-xl'></span>
              BREAKING: ULTIMATE BUSINESS INTELLIGENCE REVOLUTION 2025
            </span>
            <span className='text-2xl'>⚡</span>
    const timer = setInterval(() => {
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
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-white/20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent via-blue-500/5 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl">🚀</div>
              <div className="text-yellow-400 font-bold text-sm">
                NEW BREAKTHROUGH
              </div>
              <div className="text-white font-bold text-sm">
                Ultimate Business Intelligence 2025
              </div>
            </div>
          </div>
          <h2 className='text-4xl md:text-6xl font-extrabold text-white mb-6'></h2>
            <span className='bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'></span>
              AI 2025: The Ultimate Business Intelligence Revolution
            </span>
          </h2>
          <p className='text-xl text-gray-300 mb-8 max-w-4xl mx-auto'></p>
            Transform your enterprise with next-generation AI-powered business
            intelligence that delivers unprecedented insights and competitive
            advantage.
          </p>
        </div>
        {/* Featured Content Carousel */}
        <div className='relative mb-16'></div>
          <div className='overflow-hidden rounded-3xl'></div>
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            ></div>
              {content.map((item, index) => (
                <div key={item.id} className='w-full flex-shrink-0'></div>
                  <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20'></div>
                    <div className='grid md:grid-cols-2 gap-12 items-center'></div>
                      {/* Content */}
                      <div></div>
                        <div className='flex items-center gap-3 mb-6'></div>
                          <span className='px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-full'></span>
                            {item.type}
                          </span>
                          <span className='px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-full'></span>
                            🔥 FEATURED
                          </span>
                        </div>
                        <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'></h3>
                          {item.title}
                        </h3>
                        <p className='text-xl text-gray-300 mb-8 leading-relaxed'></p>
                          {item.description}
                        </p>
                        {/* Metrics */}
                        <div className='grid grid-cols-2 gap-4 mb-8'></div>
                          {Object.entries(item.metrics).map(([key, value]) => (
                            <div key={key} className='text-center'></div>
                              <div className='text-2xl font-bold text-cyan-400'></div>
                                {value}
                              </div>
                              <div className='text-gray-400 text-sm capitalize'></div>
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className='flex items-center gap-6'></div>
                          <Link
                            href={item.url}
                            className='group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl'
                          ></Link>
                            <span>Read Full Article</span>
                            <span className='group-hover:translate-x-1 transition-transform'></span>
                              →
                            </span>
                          </Link>
                          <span className='text-gray-400'></span>
                            {item.readingTime}
                          </span>
                        </div>
                      </div>
                      {/* Visual */}
                      <div className='relative'></div>
                        <div className='bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 border border-white/20'></div>
                          <div className='text-center'></div>
                            <div className='text-6xl mb-4'>📊</div>
                            <h4 className='text-2xl font-bold text-white mb-4'></h4>
                              Business Intelligence Dashboard
                            </h4>
                            <div className='space-y-3'></div>
                              <div className='flex justify-between items-center'></div>
                                <span className='text-gray-300'></span>
                                  ROI Improvement
                                </span>
                                <span className='text-cyan-400 font-bold'></span>
                                  30,000%
                                </span>
                              </div>
                              <div className='flex justify-between items-center'></div>
                                <span className='text-gray-300'></span>
                                  Cost Savings
                                </span>
                                <span className='text-green-400 font-bold'></span>
                                  $750B+
                                </span>
                              </div>
                              <div className='flex justify-between items-center'></div>
                                <span className='text-gray-300'>Accuracy</span>
                                <span className='text-purple-400 font-bold'></span>
                                  99.99%
                                </span>
                              </div>
                              <div className='flex justify-between items-center'></div>
                                <span className='text-gray-300'></span>
                                  Speed Increase
                                </span>
                                <span className='text-yellow-400 font-bold'></span>
                                  5,000%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Dots */}
          <div className='flex justify-center gap-3 mt-8'></div>
                  currentSlide === index 
                    ? 'bg-white/20 backdrop-blur-sm border border-white/30' 
                    : 'bg-white/5 hover:bg-white/10 border border-transparent'
                }`}
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8"></div>
  if (!isVisible) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20"></section>
      {/* Animated Background Effects */}
      <div className="absolute inset-0"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        {/* Header */}
        <div className="text-center mb-16"></div>
          <div className="flex items-center justify-center gap-2 mb-6"></div>
            <span className="text-2xl">🚀</span>
            <span className="text-yellow-400 font-bold text-lg"></span>
              ULTIMATE BUSINESS INTELLIGENCE REVOLUTION 2025
            </span>
            <span className="text-2xl">⚡</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6"></h2>
            Transform Your Enterprise with AI-Powered Intelligence
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Discover how Fortune 500 companies achieve 30,000% ROI with revolutionary AI-powered business intelligence solutions
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="relative mb-16"></div>
          <div className="overflow-hidden rounded-2xl"></div>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            ></div>
              {content.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0"></div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"></div>
                    <div className="grid md:grid-cols-2 gap-12 items-center"></div>
                      {/* Content */}
                      <div></div>
                        <div className="flex items-center gap-2 mb-4"></div>
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full"></span>
                            {item.type}
                          </span>
                          <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full"></span>
                            FEATURED
                          </span>
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-6 leading-tight"></h3>
                          {item.title}
                        </h3>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed"></p>
                          {item.description}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-4 mb-8"></div>
                          {Object.entries(item.metrics).map(([key, value]) => (
                            <div key={key} className="text-center"></div>
                              <div className="text-2xl font-bold text-yellow-400">{value}</div>
                              <div className="text-gray-400 text-sm capitalize">{key}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-4"></div>
                          <Link
                            href={item.url}
                            className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
                          ></Link>
                            <span>Read {item.type}</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </Link>
                          <span className="text-gray-400">{item.readingTime}</span>
                        </div>
                      </div>

                      {/* Visual */}
                      <div className="relative"></div>
                        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20"></div>
                          <div className="text-center"></div>
                            <div className="text-6xl mb-4">📊</div>
                            <h4 className="text-2xl font-bold text-white mb-4">Business Intelligence Dashboard</h4>
                            <div className="space-y-3"></div>
                              <div className="flex justify-between items-center"></div>
                                <span className="text-gray-300">ROI Improvement</span>
                                <span className="text-green-400 font-bold">30,000%</span>
                              </div>
                              <div className="flex justify-between items-center"></div>
                                <span className="text-gray-300">Cost Savings</span>
                                <span className="text-blue-400 font-bold">$750B+</span>
                              </div>
                              <div className="flex justify-between items-center"></div>
                                <span className="text-gray-300">Accuracy</span>
                                <span className="text-yellow-400 font-bold">99.99%</span>
                              </div>
                              <div className="flex justify-between items-center"></div>
                                <span className="text-gray-300">Speed Increase</span>
                                <span className="text-purple-400 font-bold">5,000%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center gap-2 mt-6"></div>
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </button></div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20"></div>
          <h3 className="text-3xl font-bold text-white mb-6"></h3>
            Ready to Achieve 30,000% ROI with AI Business Intelligence?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Join Fortune 500 companies transforming their operations with Zion Tech Group's revolutionary AI-powered business intelligence solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4"></div>
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            ></Link>
              <span>Start Your Transformation</span>
            </Link>
            <Link
              href="/blog"
              className="group flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            ></Link>
              <span>Explore All Content</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8"></div>
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentSlide === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </button></div>
        {/* Call-to-Action Section */}
        <div className='text-center bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20 mb-16'></div>
          <h3 className='text-4xl font-bold text-white mb-6'></h3>
            Ready to Transform Your Business Intelligence?
          </h3>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'></p>
            Join 500+ enterprises achieving unprecedented business intelligence
            transformation with AI-powered analytics and insights.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-6'></div>
            <a
              href='tel:+13024640950'
              className='group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl'
            ></a>
              <span className='text-xl'>📞</span>
              <span>Call +1 302 464 0950</span>
            </a>
            <a
              href='mailto:kleber@ziontechgroup.com'
              className='group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30'
            ></a>
              <span className='text-xl'>📧</span>
              <span>Get Expert Consultation</span>
            </a>
          </div>
        </div>
        {/* Stats Section */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'></div>
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '30,000%', label: 'Average ROI' },
            { value: '99.99%', label: 'Accuracy Rate' },
            { value: '5,000%', label: 'Speed Increase' },
          ].map((stat, index) => (
            <div key={index} className='text-center'></div>
              <div className='text-3xl font-bold text-cyan-400 mb-2'></div>
                {stat.value}
              </div>
              <div className='text-gray-300'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default UltimateBusinessIntelligence2025Banner;
