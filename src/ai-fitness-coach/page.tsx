import React from 'react'
import { Heart, Play, Download, Share, Star, CheckCircle, Zap, Clock, Users, Award, ArrowRight, Sparkles } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
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
  ]

  const benefits = [
    'Better results',
    '24/7 guidance',
    'Personalized approach',
    'Health insights',
    'Motivation support',
    'Cost-effective'
  ]

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$99',
      period: '/month',
      features: ['Basic plans', 'Progress tracking', 'Email support', 'Mobile app'],
      popular: false
    },
    {
      name: 'Premium',
      price: '$149',
      period: '/month',
      features: ['Personalized plans', 'Nutrition analysis', 'Video workouts', 'Wearable sync', 'Priority support'],
      popular: true
    },
    {
      name: 'Pro',
      price: '$249',
      period: '/month',
      features: ['Everything in Premium', '1-on-1 coaching', 'Custom programs', 'Advanced analytics', 'Dedicated support'],
      popular: false
    }

  ]

  return (
    <React />
      <SEOOptimizer />
        title="AI Fitness Coach - Personalized Fitness & Nutrition Plans | Zion Tech Group"
        description="Get personalized fitness and nutrition plans powered by AI analysis. Track progress, get 24/7 guidance, and achieve your health goals starting at $99/month."
        keywords={['AI fitness coach', 'personalized fitness', 'nutrition plans', 'health tracking', 'AI health', 'fitness automation']}

        canonicalUrl="https://ziontechgroup.com/ai-fitness-coach"
      />
      <div>
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}

          <section className="text-center mb-16">
            <div>
          <div>
                <div>
                  <Heart />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white neon-text">
                  AI Fitness Coach
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Personalized fitness and nutrition plans powered by AI analysis
  
              <div>
                <$2 />
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Free Trial
  
                <$2 />
                  href="#demo"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  <Play />
                  Watch Demo,
  
              </div>
            </div>
          </section>
          {/* Features Section */}

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">AI Fitness Features
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
              Why Choose AI Fitness Coach?
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
                Ready to Transform Your Health?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of users achieving their fitness goals with AI
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

export default AIFitnessCoachPage</a>
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