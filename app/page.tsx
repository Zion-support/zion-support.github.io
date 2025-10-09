'use client';
import React from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';
import UserExperienceEnhancer from './components/UserExperienceEnhancer';

const HomePage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Zion Tech Group - AI & IT Solutions"
        description="Leading provider of AI-powered solutions and comprehensive IT services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'IT services', 'artificial intelligence', 'business automation', 'cloud services', 'cybersecurity']}
        canonicalUrl="https://ziontechgroup.com"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Solutions for Modern Business
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI technology and comprehensive IT services. 
              We deliver innovative solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                View Services
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-xl text-gray-300">Comprehensive AI and IT solutions for your business</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">AI Solutions</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Advanced AI-powered applications and automation tools to streamline your business processes.
                </p>
                <a href="/ai-services" className="text-blue-400 hover:text-blue-300 font-medium">
                  Learn More →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Cloud className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">IT Services</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Comprehensive IT infrastructure, cloud migration, and cybersecurity solutions.
                </p>
                <a href="/it-services" className="text-green-400 hover:text-green-300 font-medium">
                  Learn More →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Custom Development</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Tailored software solutions and mobile applications built to your specifications.
                </p>
                <a href="/services" className="text-purple-400 hover:text-purple-300 font-medium">
                  Learn More →
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a free consultation and discover how our AI and IT solutions can optimize your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* Enhanced Components */}
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <Analytics />
      <SecurityEnhancer />
      <UserExperienceEnhancer />
    </>
  );
};

export default HomePage;