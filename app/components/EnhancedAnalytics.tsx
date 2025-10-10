'use client';
import React, { useEffect, useState } from 'react';
import { BarChart3, TrendingUp, Users, Target, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

const EnhancedAnalytics: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [analyticsData, setAnalyticsData] = useState({
    pageViews: 0,
    users: 0,
    conversions: 0,
    revenue: 0
  });

  useEffect(() => {
    // Initialize analytics
    initializeAnalytics();
    
    // Track page view
    trackPageView();
    
    // Set up real-time updates
    const interval = setInterval(updateAnalytics, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const initializeAnalytics = () => {
    // Initialize Google Analytics or other analytics tools
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  };

  const trackPageView = () => {
    // Track page view
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  };

  const updateAnalytics = () => {
    // Simulate real-time analytics updates
    setAnalyticsData(prev => ({
      pageViews: prev.pageViews + Math.floor(Math.random() * 10),
      users: prev.users + Math.floor(Math.random() * 5),
      conversions: prev.conversions + Math.floor(Math.random() * 2),
      revenue: prev.revenue + Math.floor(Math.random() * 100)
    }));
  };

  const trackEvent = (eventName: string, parameters: Record<string, unknown> = {}) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', eventName, parameters);
    }
  };

  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Monitor your website performance with live data and insights.',
      benefits: ['Live dashboards', 'Real-time reporting', 'Instant notifications', 'Custom metrics']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Track key performance indicators and business metrics.',
      benefits: ['KPI monitoring', 'Trend analysis', 'Performance alerts', 'ROI tracking']
    },
    {
      icon: Users,
      title: 'User Behavior',
      description: 'Understand your users with detailed behavior analytics.',
      benefits: ['User journeys', 'Heatmaps', 'Session recordings', 'A/B testing']
    },
    {
      icon: Target,
      title: 'Conversion Optimization',
      description: 'Optimize your conversion rates with data-driven insights.',
      benefits: ['Funnel analysis', 'Conversion tracking', 'Goal optimization', 'Revenue attribution']
    }
  ];

  const benefits = [
    'Real-time data visualization and reporting',
    'Advanced user behavior tracking and analysis',
    'Custom dashboard creation and management',
    'Automated alerts and notifications',
    'Integration with popular marketing tools',
    'Comprehensive performance monitoring'
  ];

  if (!children) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Enhanced Analytics
                  </span>
                  <br />
                  <span className="text-white">Solutions</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Transform your business with our advanced analytics solutions. 
                  Powered by cutting-edge AI technology and industry expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                    onClick={() => trackEvent('cta_click', { cta_type: 'get_started' })}
                  >
                    Get Started
                  </button>
                  <button 
                    className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                    onClick={() => trackEvent('cta_click', { cta_type: 'learn_more' })}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Analytics Stats */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{analyticsData.pageViews.toLocaleString()}</div>
                  <div className="text-gray-300">Page Views</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{analyticsData.users.toLocaleString()}</div>
                  <div className="text-gray-300">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{analyticsData.conversions.toLocaleString()}</div>
                  <div className="text-gray-300">Conversions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">${analyticsData.revenue.toLocaleString()}</div>
                  <div className="text-gray-300">Revenue</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Analytics Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive analytics solutions designed to give you deep insights into your business performance.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
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
                  Why Choose Our Analytics?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the power of our enhanced analytics solutions for your business.
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
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let our analytics experts help you unlock the power of data-driven decision making.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                    onClick={() => trackEvent('phone_click')}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                    onClick={() => trackEvent('email_click')}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default EnhancedAnalytics;