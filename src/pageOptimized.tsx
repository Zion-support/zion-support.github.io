'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

// Import components from the correct path
import Navigation from '../app/components/Navigation';
import Footer from '../app/components/Footer';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('../src/components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('../src/components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('../src/components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('../src/components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('../src/components/ContentNewsletterSignup'));

// Preload critical components with better timing
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        import('../src/components/ContentPromotionBanner');
        import('../src/components/ContentCarousel');
        import('../src/components/DynamicContentShowcase');
      });
    } else {
      setTimeout(() => {
        import('../src/components/ContentPromotionBanner');
        import('../src/components/ContentCarousel');
        import('../src/components/DynamicContentShowcase');
      }, 100);
    }
  }
};

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Preload components after initial render
    preloadComponents();
    
    // Set loaded state after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    // Trigger visibility animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
=======
  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag?.('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number',
      });
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0dd2
  }, []);

  const handleScroll = useCallback(() => {
    // Add scroll-based animations here
    const scrollY = window.scrollY;
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        element.classList.add('animate-fade-in');
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Brain className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Welcome to
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  {' '}Zion Tech Group
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Leading provider of AI-powered enterprise solutions, quantum computing, 
                and digital transformation services.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions to transform your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'AI Solutions',
                  description: 'Advanced artificial intelligence solutions for your business needs.',
                  color: 'text-purple-400',
                  bgColor: 'bg-purple-50'
                },
                {
                  icon: Cloud,
                  title: 'Cloud Services',
                  description: 'Scalable cloud infrastructure and management services.',
                  color: 'text-blue-400',
                  bgColor: 'bg-blue-50'
                },
                {
                  icon: Shield,
                  title: 'Cybersecurity',
                  description: 'Comprehensive security solutions to protect your data.',
                  color: 'text-green-400',
                  bgColor: 'bg-green-50'
                }
              ].map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lazy loaded components */}
        <Suspense fallback={<ServiceCardSkeleton />}>
          <ContentPromotionBanner />
        </Suspense>

        <Suspense fallback={<ServiceCardSkeleton />}>
          <ContentCarousel />
        </Suspense>

        <Suspense fallback={<ServiceCardSkeleton />}>
          <DynamicContentShowcase />
        </Suspense>

        <Suspense fallback={<ServiceCardSkeleton />}>
          <ContentStatistics />
        </Suspense>

        <Suspense fallback={<ServiceCardSkeleton />}>
          <ContentNewsletterSignup />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;