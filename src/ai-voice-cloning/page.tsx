import React from 'react';
import { Music, Mic, Play, Download, Share, Star, CheckCircle, Zap, Clock, Users, Award, ArrowRight, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
<<<<<<< HEAD
const AIVoiceCloningPage: React.FC = () => {
  const features = [
=======
;
const AIVoiceCloningPage: React.FC = () => {
};
const features = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
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
  ];
<<<<<<< HEAD
  const benefits = [
=======
;
const benefits = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    'Natural voice quality',
    'Cost-effective solution',
    'Scalable technology',
    'Custom voices',
    'Multi-language support',
    'Easy integration'
  ];
<<<<<<< HEAD
  const pricingPlans = [
    {
=======
;
const pricingPlans = [
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
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
    };
  ];
  return (
    <React .Fragment>
      <SEOOptimizer title="AI Voice Cloning Studio - Create Realistic Voice Clones | Zion Tech Group"
        description="Create realistic voice clones for content, presentations, and customer service with AI Voice Cloning Studio. Professional voice synthesis technology starting at $199/month."
        keywords={['AI voice cloning', 'voice synthesis', 'text to speech', 'voice generation', 'AI voices', 'voice automation']};
        canonicalUrl="https://ziontechgroup.com/ai-voice-cloning"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
<<<<<<< HEAD
          {/* Hero Section */}
=======
          {/* Hero Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
<<<<<<< HEAD
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md: text-5xl font-bold text-white neon-text">
                  AI Voice Cloning Studio,
  </
              </div>
=======
                  AI Voice Cloning Studio
                <
              <
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              <p className="text-xl text-gray-300 mb-8">
                Create realistic voice clones for content, presentations, and customer service with cutting-edge AI technology;
  </
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
<<<<<<< HEAD
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Free Trial
  </
                <a
                  href="#demo"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  <Play className="w-5 h-5" />
                  Listen to Samples,
  </
              </div>
            </div>
          </section>
          {/* Features Section */}
          <section className="mb-16">
=======
                <a href="
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Free Trial
                <
                <a href="#demo"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Advanced Voice Cloning Features;
  </
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
<<<<<<< HEAD
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Benefits Section */}
=======
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" 
                    <h3 className="text-lg font-semibold text-white">{feature}<
                  <
                <)
              ))};
            <
          <
          {/* Benefits Section *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose AI Voice Cloning Studio?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
<<<<<<< HEAD
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
=======
                    <Zap className="w-8 h-8 text-white" 
                  <
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}<
                <)
              ))};
            <
          <
          {/* Pricing Section *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Simple, Transparent Pricing;
  </
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
<<<<<<< HEAD
                        Most Popular;
  </
                    </div>
                  )}
=======
                        Most Popular
                      <
                    <
                  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
<<<<<<< HEAD
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started;
  </
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
=======
                    {plan.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-gray-300">
                    Get Started
                  <
                <
              ))};
            <
          <
          {/* CTA Section *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <section className="text-center mb-16">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Create Amazing Voice Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using AI voice technology;
  </
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
<<<<<<< HEAD
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Your Free Trial
  </
                <a
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
export default AIVoiceCloningPage;
  </a>
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
=======
                <a href="
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Your Free Trial
                <
                <a href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hove,
    r:text-slate-900 transition-all duration-300">
                  <span>Call +1 302 464 0950<
                <
              <
            <
          <
        <
        <Footer />
      </div>
    </React.Fragment>
  )};
export default AIVoiceCloningPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
