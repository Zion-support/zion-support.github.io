'use client';
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';
=======
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, BarChart, CheckCircle, ArrowRight, Zap, Shield, Target, Eye, Camera, Image } from 'lucide-react';
=======
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, BarChart, Eye, Target, CheckCircle, ArrowRight, Zap, Shield, Camera, Image } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-7175

const AiComputerVisionPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Object Detection',
      description: 'Advanced AI algorithms for real-time object detection and recognition.',
      benefits: ['Real-time detection', 'High accuracy', 'Multiple object types', 'Custom models']
    },
    {
      icon: Camera,
      title: 'Image Analysis',
      description: 'Comprehensive image analysis and processing capabilities.',
      benefits: ['Image classification', 'Feature extraction', 'Pattern recognition', 'Quality assessment']
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
<<<<<<< HEAD
      description: 'Machine learning models that continuously improve accuracy.',
      benefits: ['Deep learning', 'Neural networks', 'Continuous learning', 'Adaptive algorithms']
=======
      description: 'Advanced AI algorithms that provide intelligent computer vision insights and recommendations.',
      benefits: ['Object detection', 'Image classification', 'Pattern recognition', 'Predictive analysis']
    },
    {
      icon: Eye,
      title: 'Advanced Vision',
      description: 'State-of-the-art computer vision capabilities for image and video analysis.',
      benefits: ['Real-time processing', 'High accuracy detection', 'Multi-modal analysis', 'Edge computing']
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
<<<<<<< HEAD
      description: 'Real-time analytics and insights from visual data.',
      benefits: ['Real-time metrics', 'Data visualization', 'Performance tracking', 'Custom reports']
    }
  ];

<<<<<<< HEAD
  const benefits = [
    'Enhanced visual recognition accuracy',
    'Real-time processing capabilities',
    'Scalable AI solutions',
    'Custom model training',
    'Integration with existing systems',
    'Cost-effective implementation'
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7

const PagePage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Page
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>
=======
<Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900"></div></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section></section>
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center"></div></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1></h1>
              Ai Computer Vision
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p></p>
              Advanced AI-powered ai computer vision solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
                View Demo
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
=======
        {/* Features Section */}
        <section className="py-20 px-4"></section></section>
        </section>
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2></h2>
                Key Features
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
<<<<<<< HEAD
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
=======
      <Helmet>
        <title>AI Computer Vision - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered computer vision solutions for modern businesses. Object detection, image analysis, and visual intelligence." />
        <meta name="keywords" content="AI computer vision, object detection, image analysis, machine learning, visual intelligence" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Computer Vision
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered computer vision solutions for modern businesses.
=======
      description: 'Comprehensive analytics dashboard with real-time computer vision insights.',
      benefits: ['Visual analytics', 'Performance metrics', 'Trend analysis', 'Custom reports']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific visual elements and objects with precision and accuracy.',
      benefits: ['Object tracking', 'Feature detection', 'Spatial analysis', 'Custom models']
    }
  ];

  const benefits = [
    'Increase visual processing accuracy by up to 98%',
    'Reduce processing time by 70% with AI optimization',
    'Improve decision-making with visual insights',
    'Enable real-time image and video analysis',
    'Seamless integration with existing systems',
    'Scalable solutions for any industry'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
      <Helmet>
        <title>AI Computer Vision - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered computer vision solutions. Object detection, image analysis, and visual intelligence for modern businesses." />
        <meta name="keywords" content="AI computer vision, artificial intelligence, image analysis, object detection, visual intelligence" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-6">
              AI Computer Vision
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with advanced AI-powered computer vision and visual intelligence solutions.
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
<<<<<<< HEAD
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
              <button className="border border-amber-400 text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 hover:text-white transition-all duration-300">
                Learn More
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
              </button>
            </div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
      
=======

        {/* Features Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that sees and understands
              </p>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Advanced AI technology for visual intelligence</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300">
                  <div className="text-amber-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
<<<<<<< HEAD
=======
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4"></h3></h3>{feature.title}</h3>
                  <p className="text-gray-300 mb-4"></p></p>{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
<<<<<<< HEAD
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-amber-400 mr-2" />
=======
                        <li key={idx} className="flex items-center text-sm text-gray-400"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
=======
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-amber-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
=======
        <section className="py-20 px-4"></section></section>
        </section>
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2></h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that enhance your visual capabilities
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div></div>
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium"></p></p>{benefit}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Computer Vision?</h2>
              <p className="text-xl text-gray-300">Transform your visual processing with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-amber-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
=======
        <section className="py-20 px-4"></section></section>
        </section>
          <div className="max-w-4xl mx-auto text-center"></div></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2></h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your computer vision requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to See the Future?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of visual intelligence with our AI-powered computer vision solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
            </div>
          </div>
        </section>
      </main>

<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
      <Footer />
    </>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default PagePage;
=======
export default AiComputerVisionPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
export default AiComputerVisionPage;
      {/* CTA Section */}
      <section className="py-20 px-4"></section></section>
        </section>< className="$2 />
          </div><h2 className="text-4xl font-bold text-white mb-6"></h2></h2>Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8"></p></p>
            Transform your business with our page solutions today
  
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div></div>
            </div><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
              Start Free Trial
  
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300" /></button>
              Contact Sales
  
          </div>
        </div>
      </section>

        <div className="max-w-4xl mx-auto text-center"></div></div>
          <h2 className="text-4xl font-bold text-white mb-6"></h2></h2>Ready to Get Started?
          <p className="text-xl text-gray-300 mb-8"></p></p>Transform your business with our page solutions today
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>Start Free Trial
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>Contact Sales
      <Footer />
  )
}

export default AiComputerVisionPage
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
=======
      <Footer />
    </div>
  );
};

export default AiComputerVisionPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-7175
