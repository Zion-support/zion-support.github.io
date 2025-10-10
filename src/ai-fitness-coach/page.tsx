import React from 'react';
import { Heart Play Download Share Star CheckCircle Zap Clock Users Award ArrowRight Sparkles } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
const AIFitnessCoachPage: React.FC = () => {
  const features = [
    'Personalized Plans',
    'Progress Tracking',
    'Nutrition Analysis',
    'Workout Videos',
    'Health Monitoring',
    'Goal Setting',
    'Real-time Feedback',
    'Exercise Library',
    'Meal Planning',
    'Wearable Integration'
  ];
  const benefits = [
    'Better results',
    '24/7 guidance',
    'Personalized approach',
    'Health insights',
    'Motivation support',
    'Cost-effective'
  ];
  const pricingPlans = [
      name: 'Basic',
      price: '$99',
      period: '/month',
      features: ['Basic plans', 'Progress tracking', 'Email support', 'Mobile app'],
      popular: false;
      name: 'Premium',
      price: '$149',
      period: '/month',
      features: ['Personalized plans', 'Nutrition analysis', 'Video workouts', 'Wearable sync', 'Priority support'],
      popular: true;
      name: 'Pro',
      price: '$249',
      period: '/month',
      features: ['Everything in Premium', '1-on-1 coaching', 'Custom programs', 'Advanced analytics', 'Dedicated support'],
      popular: false;
  ];
  return (
    <React.Fragment></React.Fragment>
      <SEOOptimizer;
        title="AI Fitness Coach - Personalized Fitness & Nutrition Plans | Zion Tech Group"
        description="Get personalized fitness and nutrition plans powered by AI analysis. Track progress, get 24/7 guidance, and achieve your health goals starting at $99/month."
        keywords={['AI fitness coach', 'personalized fitness', 'nutrition plans', 'health tracking', 'AI health', 'fitness automation']}
        canonicalUrl="https://ziontechgroup.com/ai-fitness-coach"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24"></main>
          <section className="text-center mb-16"></section>
            <div className="max-w-4xl mx-auto"></div>
              <div className="flex items-center justify-center mb-6"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4"></div>
                  <Heart className="w-8 h-8 text-white" />
                <h1 className="text-4xl md:text-5xl font-bold text-white neon-text"/>
                  AI Fitness Coach;</h1>
              <p className="text-xl text-gray-300 mb-8"></p>
                Personalized fitness and nutrition plans powered by AI analysis;
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a;
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Free Trial;</a>
                <a;
                  href="#demo"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  <Play className="w-5 h-5" />
                  Watch Demo;
          <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"></h2>
              AI Fitness Features;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
                <div, key={inde, x} classNam, e="cybe, r-card, p-6, hover:scal, e-105, transition-all, duration-30, 0"></di, v>
                  <div className="flex items-center mb-4"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <h3, className="tex, t-lg, font-semibold, text-whit, e">{featur, e}</h, 3>
              ))}
          <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"></h2>
              Why Choose AI Fitness Coach?
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
                Ready to Transform Your Health?
              <p className="text-xl text-gray-300 mb-8"></p>
                Join thousands of users achieving their fitness goals with AI;
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
export default AIFitnessCoachPage;