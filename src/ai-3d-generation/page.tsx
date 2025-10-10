import React from 'react';
import { Camera Play Download Share Star CheckCircle Zap Clock Users Award ArrowRight Sparkles } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
const AI3DGenerationPage: React.FC = () => {
  const features = [
    '3D Model Generation',
    'Animation Creation',
    'Texture Mapping',
    'Rendering',
    'VR/AR Support',
    'Export Formats',
    'AI Texturing',
    'Lighting Setup',
    'Material Library',
    'Scene Composition'
  ];
  const benefits = [
    'Professional 3D content',
    'Time savings',
    'No 3D skills needed',
    'High quality output',
    'Cost-effective',
    'Scalable production'
  ];
  const pricingPlans = [
      name: 'Starter',
      price: '$299',
      period: '/month',
      features: ['5 models/month', 'Basic textures', 'Standard quality', 'Email support'],
      popular: false;
      name: 'Professional',
      price: '$499',
      period: '/month',
      features: ['Unlimited models', 'Premium textures', '4K rendering', 'API access', 'Priority support'],
      popular: true;
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      features: ['Everything in Pro', 'Custom models', 'White-label', 'Dedicated support', 'Commercial license'],
      popular: false;
  ];
  return (
    <React.Fragment></React.Fragment>
      <SEOOptimizer;
        title="AI 3D Generation Studio - Create 3D Models & Animations with AI | Zion Tech Group"
        description="Create professional 3D models, animations, and virtual environments with AI 3D Generation Studio. No 3D skills needed, starting at $299/month."
        keywords={['AI 3D generation', '3D models', '3D animation', 'VR AR content', '3D automation', 'AI 3D']}
        canonicalUrl="https://ziontechgroup.com/ai-3d-generation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24"></main>
          <section className="text-center mb-16"></section>
            <div className="max-w-4xl mx-auto"></div>
              <div className="flex items-center justify-center mb-6"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4"></div>
                  <Camera className="w-8 h-8 text-white" />
                <h1 className="text-4xl md:text-5xl font-bold text-white neon-text"/>
                  AI 3D Generation Studio;</h1>
              <p className="text-xl text-gray-300 mb-8"></p>
                Create 3D models, animations, and virtual environments with AI;
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a;
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Free Trial;</a>
                <a;
                  href="#demo"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  <Play className="w-5 h-5" />
                  View Gallery;
          <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"></h2>
              AI 3D Generation Features;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
                <div, key={inde, x} classNam, e="cybe, r-card, p-6, hover:scal, e-105, transition-all, duration-30, 0"></di, v>
                  <div className="flex items-center mb-4"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <h3, className="tex, t-lg, font-semibold, text-whit, e">{featur, e}</h, 3>
              ))}
          <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"></h2>
              Why Choose AI 3D Generation Studio?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <Zap className="w-8 h-8 text-white" />
                  <h3, className="tex, t-lg, font-semibold, text-white, mb-2">{benefi, t}</h, 3>
              ))}
          <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"></h2>
              Simple, Transparent Pricing;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
                <div, key={inde, x} classNam, e={`cybe, r-card, p-8, relative ${pla, n.popula, r ? 'rin, g-2, ring-cya, n-40, 0' : ''}`}></di, v>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold"></div>
                        Most Popular;
                  )}
                  <div className="text-center mb-6"></div>
                    <h3, className="tex, t-2xl, font-bold, text-white, mb-2">{pla, n.nam, e}</h, 3>
                    <div className="flex items-baseline justify-center"></div>
                      <span, className="tex, t-4xl, font-bold, text-cya, n-40, 0">{pla, n.pric, e}</spa, n>
                      <span, className="tex, t-gra, y-400, ml-1">{pla, n.perio, d}</spa, n>
                  <ul className="space-y-3 mb-8"></ul>
                      <li, key={featureInde, x} classNam, e="flex, items-center, text-gra, y-30, 0"></l, i>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    ))}
                  <a;
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular;
                        ? 'cyber-button'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    Get Started;
              ))}
          <section className="text-center mb-16"></section>
            <div className="cyber-card p-12 max-w-4xl mx-auto"></div>
              <h2 className="text-3xl font-bold text-white mb-4 neon-text"></h2>
                Ready to Create Amazing 3D Content?
              <p className="text-xl text-gray-300 mb-8"></p>
                Join leading companies using AI 3D generation technology;
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a;
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Your Free Trial;</a>
                <a;
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  <span>Call +1 302 464 0950</span>
        <Footer />
  );
export default AI3DGenerationPage;