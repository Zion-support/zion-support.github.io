import React from 'react'
import { Music, Mic, Play, Download, Share, Star, CheckCircle, Zap, Clock, Users, Award, ArrowRight, Sparkles } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
const AIVoiceCloningPage: React.FC = () => {
  
  const features = [
    'Voice Cloning',
    'Text-to-Speech',
    'Emotion Control',
    'Multi-language Support',
    'Voice Training',
    'API Integration',
    'Real-time Processing',
    'High Quality Audio',
    'Custom Voice Models',
    'Batch Processing'
  ]

  const benefits = [
    'Natural voice quality',
    'Cost-effective solution',
    'Scalable technology',
    'Custom voices',
    'Multi-language support',
    'Easy integration'
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      features: ['5 voice clones', '10 hours/month', 'Basic emotions', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      features: ['Unlimited clones', '50 hours/month', 'Full emotions', 'API access', 'Priority support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      features: ['Everything in Pro', 'Unlimited hours', 'Custom training', 'Dedicated support', 'White-label'],
      popular: false
    }

  ]

  return (
    <React />
      <SEOOptimizer />
        title="AI Voice Cloning Studio - Create Realistic Voice Clones | Zion Tech Group"
        description="Create realistic voice clones for content, presentations, and customer service with AI Voice Cloning Studio. Professional voice synthesis technology starting at $199/month."
        keywords={['AI voice cloning', 'voice synthesis', 'text to speech', 'voice generation', 'AI voices', 'voice automation']}

        canonicalUrl="https://ziontechgroup.com/ai-voice-cloning"
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
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white neon-text">
                  AI Voice Cloning Studio,
  
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Create realistic voice clones for content, presentations, and customer service with cutting-edge AI technology
              <div>
                <$2 />
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Free Trial
  
                <$2 />
                  href="#demo"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  <Play />
                  Listen to Samples,
  
              </div>
            </div>
          </section>
          {/* Features Section */}

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Advanced Voice Cloning Features
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
              Why Choose AI Voice Cloning Studio?
            <div>
              {benefits.map((benefit, index) => (
                <div>
          <div>
                    <Zap />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}

              ))}

          {/* Pricing Section */}

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Simple, Transparent Pricing
            <div>
              {pricingPlans.map((plan, index) => (
                <div>
                  {plan.popular && (
                    <div>
                      <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular
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
                Ready to Create Amazing Voice Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using AI voice technology
              <div>
                <$2 />
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Your Free Trial
  
                <$2 />
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  <span>Call +1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  ) }

export default AIVoiceCloningPage</a>
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
</div></div></div></div></div></div></div></div></div></div></div></span></span></h2></h3></h3></h3></ul></li></section></section></section>