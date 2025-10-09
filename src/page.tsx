import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

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
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
        <section
          className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded && isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          aria-labelledby="hero-heading"
        >
          <h1 
            id="hero-heading" 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium" role="doc-subtitle">
            Advanced AI and IT Solutions
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
            Transform your business with our cutting-edge technology and achieve unprecedented growth.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12">
            <div className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
            </div>
            <div className="p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="cyber-button w-full sm:w-auto text-center"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>

        <section className="mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
            Comprehensive AI and IT solutions designed to transform your business operations
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <article className="p-4 sm:p-6">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🤖</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Services</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
              </p>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">Starting at $1,500/month</div>
                <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-all duration-300">
                  Learn More →
                </a>
              </div>
            </article>

            <article className="p-4 sm:p-6">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📢</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Marketing</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                Revolutionary AI-powered marketing automation, ad optimization, and content generation.
              </p>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">Starting at $199/month</div>
                <a href="/ai-marketing" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base transition-all duration-300">
                  Learn More →
                </a>
              </div>
            </article>

            <article className="p-4 sm:p-6">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">⚙️</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Automation</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                Intelligent automation of business processes with decision-making capabilities and exception handling.
              </p>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">Starting at $399/month</div>
                <a href="/ai-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base transition-all duration-300">
                  Learn More →
                </a>
              </div>
            </article>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <article className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤖</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Harness the power of artificial intelligence to drive innovation and efficiency in your organization.
              </p>
              <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                <li>• Machine Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
              </ul>
            </article>

            <article className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔄</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Transform your business processes with cutting-edge technology and expert consultation.
              </p>
              <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                <li>• Process Automation</li>
                <li>• Legacy System Modernization</li>
                <li>• Workflow Optimization</li>
                <li>• Change Management</li>
              </ul>
            </article>

            <article className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">☁️</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cloud Services</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Scale your infrastructure with secure, reliable, and efficient cloud solutions.
              </p>
              <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                <li>• Cloud Migration</li>
                <li>• Infrastructure as Code</li>
                <li>• Auto-scaling</li>
                <li>• Disaster Recovery</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
