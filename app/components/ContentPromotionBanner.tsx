'use client';
<<<<<<< HEAD
import React from 'react'
import  Helmet  from 'react-helmet-async'
import Navigation  } from '/components/Navigation'
import EnhancedFooter from '/components/EnhancedFooter'

const ContentPromotionBanner: React.FC = () => {
  return (
    <>
    
  </>
      <Helmet></Helmet>
        <title>ContentPromotionBanner</title>
        <meta name="description" content="Advanced ContentPromotionBanner solution for modern businesses." /></meta>
        <meta name="keywords" content="AI, artificial intelligence, ContentPromotionBanner, AI solutions, intelligent automation" /></meta>
      </Helmet>
      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div>
        {/* Hero Section */}</div>
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              ContentPromotionBanner</h1>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Advanced ContentPromotionBanner solution for modern businesses.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"></button>
                Get Started</button>
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Learn More</button>
              </button>
            </div>
          </div>
        </section>,
,
        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Discover the powerful features that make ContentPromotionBanner the perfect solution for your business.</p>
              </p>
            </div>
            <div className="grid md:grid-cols-2 l,
  g:grid-cols-4 gap-8"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered</h3>
                <p className="text-gray-300">Advanced AI algorithms for intelligent automation.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3">Scalable</h3>
                <p className="text-gray-300">Grows with your business needs and requirements.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3">Secure</h3>
                <p className="text-gray-300">Enterprise-grade security and data protection.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3">Efficient</h3>
                <p className="text-gray-300">Optimized performance for maximum productivity.</p>
              </div>
            </div>
          </div>
        </section>,
,
        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Join thousands of businesses already using ContentPromotionBanner to transform their operations.</p>
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
              Start Your Free Trial</button>
            </button>
          </div>
        </section>
      </div>
      <EnhancedFooter /></Footer>
    </>;
=======
import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white py-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <Star className="w-5 h-5 animate-pulse" />
            <span className="font-semibold text-sm sm:text-base">
              <span className="sr-only">Screen reader: </span>New AI Solutions Available
            </span>
            <Star className="w-4 h-4 text-yellow-300 animate-bounce" />
          </div>
          
          <div className="flex items-center space-x-4 ml-0 sm:ml-6">
            <span className="text-sm sm:text-base">
              <span className="sr-only">Screen reader: </span>
              Transform your business with cutting-edge AI technology
            </span>
            <a
              href="/services"
              className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <span><span className="sr-only">Screen reader: </span>Learn More</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/main
  );
};

export default ContentPromotionBanner;
