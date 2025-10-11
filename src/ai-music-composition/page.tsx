import React from 'react'
import { Music, Play, Download, Share, Star, CheckCircle, Zap, Clock, Users, Award, ArrowRight, Sparkles } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
const AIMusicCompositionPage: React.FC = () => {
  const features = [
    'AI Composition',
    'Multiple Genres',
    'Custom Length',
    'Royalty-free',
    'Commercial Use',
    'High Quality',
    'Mood Selection',
    'Instrument Selection',
    'Tempo Control',
    'Export Options'
  ]
  const benefits = [
    'Unlimited music',
    'No copyright issues',
    'Custom compositions',
    'Professional quality',
    'Fast generation',
    'Cost-effective'
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: ['10 tracks/month', 'MP3 export', 'Basic genres', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      features: ['Unlimited tracks', 'WAV/MP3 export', 'All genres', 'API access', 'Priority support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      features: ['Everything in Pro', 'Custom genres', 'White-label', 'Dedicated support', 'Commercial license'],
      popular: false
    }
  ]
  return (
    <React.Fragment>
      <SEOOptimizer
        title="AI Music Composer - Generate Royalty-Free Music with AI | Zion Tech Group"
        description="Create professional, royalty-free music and soundtracks with AI Music Composer. Generate custom compositions in any genre starting at $99/month."
        keywords={['AI music composition', 'royalty-free music', 'AI music generation', 'background music', 'music automation', 'AI composer']}
        canonicalUrl="https://ziontechgroup.com/ai-music-composition"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <Music className="w-8 h-8 text-white" />
                <h1 className="text-4xl md:text-5xl font-bold text-white neon-text">
                  AI Music Composer
              <p className="text-xl text-gray-300 mb-8">
                Generate royalty-free music and soundtracks with AI composition technology
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <$2 />
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Free Trial
                <$2 />
                  href="#demo"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  <Play className="w-5 h-5" />
                  Listen to Samples
          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              AI Music Generation Features
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}
              ))}
          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose AI Music Composer?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}
              ))}
          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Simple, Transparent Pricing
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}
                      <span className="text-gray-400 ml-1">{plan.period}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                    ))}
                  <$2 />
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
              ))}
          {/* CTA Section */}
          <section className="text-center mb-16">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Create Amazing Music?
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of creators using AI music technology</span>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <$2 />
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Your Free Trial
                <$2 />
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  <span>Call +1 302 464 0950
        <Footer />
      </div>
    </React.Fragment>
  ),
}
export default AIMusicCompositionPage</a>
  </p>
  </a>
  </h2>
  </h2>
  </a>
  </a>
  </p>
  </h1>
  </div>
  </SEOOptimizer>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></h2></h2></h3></h3></h3></ul></li></main></section></section></section></section></section>