import React, { lazy, Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, Globe, Target, Sparkles, TrendingUp } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import AnimatedCounter from './components/AnimatedCounter';
import ScrollReveal from './components/ScrollReveal';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load heavy components
const ROICalculator = lazy(() => import('./components/ROICalculator'));
const StructuredData = lazy(() => import('./components/StructuredData'));
const PerformanceMetrics = lazy(() => import('./components/PerformanceMetrics'));
const TechnologyStack = lazy(() => import('./components/TechnologyStack'));

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description:
    'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-75" />
          <div className="absolute inset-0 bg-pattern-dots opacity-10" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Revolutionizing Business with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced AI & Tech
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Empowering enterprises with cutting-edge AI, robust cloud infrastructure, and innovative micro SaaS solutions for unparalleled growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center justify-center group"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Our Core Strengths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <ScrollReveal origin="bottom" delay={100}>
              <div className="group bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Artificial Intelligence</h3>
                <p className="text-gray-300 text-base">
                  Leverage advanced AI and Machine Learning to automate, predict, and innovate.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal origin="bottom" delay={200}>
              <div className="group bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-300 text-base">
                  Scalable, secure, and resilient cloud solutions tailored for your enterprise needs.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal origin="bottom" delay={300}>
              <div className="group bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Cybersecurity</h3>
                <p className="text-gray-300 text-base">
                  Protect your assets with comprehensive security strategies and advanced threat detection.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal origin="bottom" delay={400}>
              <div className="group bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Micro SaaS</h3>
                <p className="text-gray-300 text-base">
                  Develop and deploy specialized software solutions to streamline specific business processes.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Driving Impact Across Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ScrollReveal origin="bottom" delay={100}>
              <div className="bg-gray-700/50 rounded-2xl p-8 border border-gray-600">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={500} suffix="+" duration={2000} />
                </h3>
                <p className="text-gray-300 text-lg">Enterprise Clients</p>
              </div>
            </ScrollReveal>
            <ScrollReveal origin="bottom" delay={200}>
              <div className="bg-gray-700/50 rounded-2xl p-8 border border-gray-600">
                <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={50} suffix="+" duration={2000} />
                </h3>
                <p className="text-gray-300 text-lg">Countries Served</p>
              </div>
            </ScrollReveal>
            <ScrollReveal origin="bottom" delay={300}>
              <div className="bg-gray-700/50 rounded-2xl p-8 border border-gray-600">
                <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={340} suffix="%" duration={2000} />
                </h3>
                <p className="text-gray-300 text-lg">Average ROI Increase</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <Testimonials />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-10">
            Partner with Zion Tech Group to unlock your full potential with next-generation AI and technology solutions.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 inline-flex items-center justify-center group"
          >
            Schedule a Consultation
            <Sparkles className="ml-3 w-6 h-6 text-blue-500 group-hover:rotate-180 transition-transform duration-500" />
          </Link>
        </div>
      </section>

      <Footer />
      <Suspense fallback={<LoadingSpinner />}>
        <StructuredData />
      </Suspense>
    </div>
  );
}