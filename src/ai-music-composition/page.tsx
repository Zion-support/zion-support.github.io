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
    <React />
      <SEOOptimizer />
        title="AI Music Composer - Generate Royalty-Free Music with AI | Zion Tech Group"
        description="Create professional, royalty-free music and soundtracks with AI Music Composer. Generate custom compositions in any genre starting at $99/month."
        keywords={['AI music composition', 'royalty-free music', 'AI music generation', 'background music', 'music automation', 'AI composer']}

        canonicalUrl="https://ziontechgroup.com/ai-music-composition"
      />
      <div>
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}

          <section className="text-center mb-16">
            <div>
          <div>
                <div>
                  <Music />
                <h1 className="text-4xl md:text-5xl font-bold text-white neon-text">
                  AI Music Composer
              <p className="text-xl text-gray-300 mb-8">
                Generate royalty-free music and soundtracks with AI composition technology
              <div>
                <$2 />
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Free Trial
                <$2 />
                  href="#demo"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  <Play />
                  Listen to Samples
          {/* Features Section */}

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              AI Music Generation Features
            <div>
              {features.map((feature, index) => (
                <div>
          <div>
                    <CheckCircle />
                    <h3 className="text-lg font-semibold text-white">{feature}

              ))}

          {/* Benefits Section */}

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose AI Music Composer?
            <div>
              {benefits.map((benefit, index) => (
                <div>
          <div>
                    <Zap />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}

              ))}

          {/* Pricing Section */}

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Simple, Transparent Pricing
            <div>
              {pricingPlans.map((plan, index) => (
                <div>
                  {plan.popular && (
                    <div>
          <div>
                        Most Popular
                  )}

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}

                    <div>
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}

                      <span className="text-gray-400 ml-1">{plan.period}

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle />
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
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Create Amazing Music?
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of creators using AI music technology</span>
              <div>
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
  ) }

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