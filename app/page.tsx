'use client';
import React, { useEffect, useState, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ContentPromotionBanner } from './components/ContentPromotionBanner';
import { ContentCarousel } from './components/ContentCarousel';
import { ContentStatistics } from './components/ContentStatistics';
import { ContentNewsletterSignup } from './components/ContentNewsletterSignup';
import FuturisticHero from './components/FuturisticHero';
import FuturisticServiceCard from './components/FuturisticServiceCard';
import FuturisticBackground from './components/FuturisticBackground';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

// Preload critical components
if (typeof window !== 'undefined') {
  import('./components/ContentPromotionBanner');
  import('./components/ContentCarousel');
}

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-4 bg-white/20 rounded mb-4"></div>
    <div className="h-3 bg-white/20 rounded mb-2"></div>
    <div className="h-3 bg-white/20 rounded"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Use requestAnimationFrame for better performance
    const timer = requestAnimationFrame(() => {
      setIsLoaded(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence to transform your business operations and drive innovation.',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Excellence',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      benefits: ['Threat Detection', 'Data Protection', 'Compliance Management', 'Security Audits']
    },
    {
      icon: Globe,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions to power your digital transformation journey.',
      benefits: ['Cloud Migration', 'Infrastructure Management', 'Scalability', 'Cost Optimization']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platform.',
      benefits: ['Business Intelligence', 'Real-time Analytics', 'Data Visualization', 'Reporting']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Expert guidance to help you make informed technology decisions and optimize your IT strategy.',
      benefits: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization']
    },
    {
      icon: Settings,
      title: 'DevOps Solutions',
      description: 'Streamline your development and operations with our comprehensive DevOps services.',
      benefits: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation']
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Happy Clients', value: '200+', icon: Users },
    { label: 'Years Experience', value: '10+', icon: Clock },
    { label: 'Team Members', value: '50+', icon: Star }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, cybersecurity, cloud computing, digital transformation, technology services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <FuturisticBackground />
        
        {/* Hero Section */}
        <FuturisticHero />
        
        {/* Content Promotion Banner */}
        <ContentPromotionBanner />
        
        {/* Statistics Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our track record speaks for itself. We've helped hundreds of companies transform their digital infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FuturisticServiceCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  benefits={feature.benefits}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Content Carousel */}
        <ContentCarousel />
        
        {/* Content Statistics */}
        <ContentStatistics />
        
        {/* Newsletter Signup */}
        <ContentNewsletterSignup />
        
        {/* CTA Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI and IT solutions can drive your digital transformation and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/demo" className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Schedule Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;