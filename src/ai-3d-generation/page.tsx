import React from 'react'
import { Camera, Play, Download, Share, Star, CheckCircle, Zap, Clock, Users, Award, ArrowRight, Sparkles } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
const AI3DGenerationPage: React.FC  = () => {
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
  ]
  const benefits = [
    'Professional 3D content',
    'Time savings',
    'No 3D skills needed',
    'High quality output',
    'Cost-effective',
    'Scalable production'
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      features: ['5 models/month', 'Basic textures', 'Standard quality', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      features: ['Unlimited models', 'Premium textures', '4K rendering', 'API access', 'Priority support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      features: ['Everything in Pro', 'Custom models', 'White-label', 'Dedicated support', 'Commercial license'],
      popular: false
    }
  ]
  return (
    <React.Fragment></React.Fragment>
      <SEOOptimizer
        title="AI 3D Generation Studio - Create 3D Models & Animations with AI | Zion Tech Group"
        description="Create professional 3D models, animations, and virtual environments with AI 3D Generation Studio. No 3D skills needed, starting at $299/month."
        keywords={['AI 3D generation', '3D models', '3D animation', 'VR AR content', '3D automation', 'AI 3D']}
        canonicalUrl="https://ziontechgroup.com/ai-3d-generation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24"></main>
                {/* Hero Section */}
                <section className="text-center mb-16"></section>
            <div className="max-w-4xl mx-auto"></div>
              <div className="flex items-center justify-center mb-6"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4"></div>
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md: text-5xl font-bold text-white neon-text"></h1>
                  AI 3D Generation Studio,
  
              </div>
              <p className="text-xl text-gray-300 mb-8"></p>
                Create 3D models, animations, and virtual environments with AI
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
                <$2 />
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Free Trial
  
                <$2 />
                  href="#demo"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  <Play className="w-5 h-5" />
                  View Gallery,
  
              </div>
                </div>
          </section>
                {/* Features Section */}
                <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">AI 3D Generation Features
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
                {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                  <div className="flex items-center mb-4"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white"></h3>
                {feature}
              ))}
          {/* Benefits Section */}
                <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"></h2>
              Why Choose AI 3D Generation Studio?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {benefits.map((benefit, index) => (
                <div key={index} className="text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <Zap className="w-8 h-8 text-white" />
                  <h3 className="text-lg font-semibold text-white mb-2"></h3>
                {benefit}
              ))}
          {/* Pricing Section */}
                <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Simple, Transparent Pricing
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
                {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}></div>
                {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular
                  )}
                <div className="text-center mb-6"></div>
                    <h3 className="text-2xl font-bold text-white mb-2"></h3>
                {plan.name}
                <div className="flex items-baseline justify-center"></div>
                      <span className="text-4xl font-bold text-cyan-400"></span>
                {plan.price}
                <span className="text-gray-400 ml-1"></span>
                {plan.period}
                <ul className="space-y-3 mb-8"></ul>
                {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300"></li>
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
                <section className="text-center mb-16"></section>
            <div className="cyber-card p-12 max-w-4xl mx-auto"></div>
              <h2 className="text-3xl font-bold text-white mb-4 neon-text"></h2>
                Ready to Create Amazing 3D Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8"></p>
                Join leading companies using AI 3D generation technology
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
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
  ),
}
export default AI3DGenerationPage</a>
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
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></span>
                </span></h2>
                </h3></h3>
                </h3></ul>
                </li></section>
                </section></section>
;