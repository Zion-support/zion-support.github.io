'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mic, Volume2, Zap, CheckCircle, ArrowRight, Brain, Users, Globe, Clock, Shield, Star, Play } from 'lucide-react';

const AiSpeechSynthesisPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Speech Synthesis - Natural Voice Generation | Zion Tech Group</title>
        <meta name="description" content="Create natural-sounding speech with AI voice synthesis. Multiple languages, emotions, and voice styles. Perfect for content creation, accessibility, and automation." />
        <meta name="keywords" content="AI speech synthesis, text-to-speech, voice generation, natural voice, TTS, voice cloning, multilingual voices" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Mic className="w-4 h-4 mr-2" />
                AI Voice Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Speech Synthesis
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform text into natural, human-like speech with our advanced AI voice synthesis technology. 
                Support for 100+ languages, emotions, and voice styles for any application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Try Free Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#features" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Voice <span className="text-cyan-400">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI speech synthesis platform delivers natural, expressive voices for any use case.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Volume2,
                  title: 'Natural Voice Quality',
                  description: 'Generate human-like speech with natural intonation, rhythm, and emotion.',
                  features: ['Neural Voice Models', 'Emotional Expression', 'Natural Pauses', 'Voice Cloning']
                },
                {
                  icon: Globe,
                  title: '100+ Languages',
                  description: 'Support for major world languages with native pronunciation and accents.',
                  features: ['Multi-language Support', 'Regional Accents', 'Pronunciation Control', 'Language Detection']
                },
                {
                  icon: Zap,
                  title: 'Real-time Processing',
                  description: 'Generate speech in real-time with low latency for live applications.',
                  features: ['Streaming Synthesis', 'Low Latency', 'Batch Processing', 'Cloud & Edge']
                },
                {
                  icon: Users,
                  title: 'Voice Customization',
                  description: 'Customize voice characteristics including age, gender, and speaking style.',
                  features: ['Voice Parameters', 'Style Transfer', 'Custom Voices', 'Brand Voice']
                },
                {
                  icon: Shield,
                  title: 'Enterprise Security',
                  description: 'Secure voice generation with enterprise-grade security and compliance.',
                  features: ['Data Encryption', 'API Security', 'Compliance Ready', 'Audit Logs']
                },
                {
                  icon: Clock,
                  title: '24/7 Availability',
                  description: 'Always-on voice synthesis service with 99.9% uptime guarantee.',
                  features: ['High Availability', 'Auto-scaling', 'Global CDN', 'SLA Support']
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Every <span className="text-cyan-400">Application</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From content creation to accessibility, our voice synthesis powers diverse applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Content Creation',
                  description: 'Generate voiceovers for videos, podcasts, and multimedia content.',
                  icon: '🎬',
                  benefits: ['Video Voiceovers', 'Podcast Production', 'Audiobook Creation', 'Social Media Content']
                },
                {
                  title: 'Accessibility',
                  description: 'Make content accessible with high-quality text-to-speech conversion.',
                  icon: '♿',
                  benefits: ['Screen Readers', 'Reading Assistance', 'Language Learning', 'Visual Impairment Support']
                },
                {
                  title: 'Customer Service',
                  description: 'Create natural-sounding IVR systems and automated customer support.',
                  icon: '📞',
                  benefits: ['IVR Systems', 'Chatbot Voices', 'Automated Calls', 'Customer Support']
                },
                {
                  title: 'Education',
                  description: 'Enhance learning with interactive voice content and language training.',
                  icon: '🎓',
                  benefits: ['Language Learning', 'Interactive Lessons', 'Audiobooks', 'Educational Content']
                },
                {
                  title: 'Gaming & VR',
                  description: 'Create immersive voice experiences for games and virtual reality.',
                  icon: '🎮',
                  benefits: ['Character Voices', 'Narration', 'Interactive Dialogue', 'Immersive Experiences']
                },
                {
                  title: 'E-commerce',
                  description: 'Enhance product descriptions and shopping experiences with voice.',
                  icon: '🛒',
                  benefits: ['Product Descriptions', 'Shopping Assistance', 'Voice Commerce', 'Customer Engagement']
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="text-cyan-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your voice synthesis needs. Pay only for what you use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: '$49',
                  period: '/month',
                  description: 'Perfect for small projects and testing',
                  features: [
                    'Up to 100,000 characters',
                    '10 voice options',
                    '5 languages',
                    'Standard quality',
                    'Email support'
                  ],
                  popular: false
                },
                {
                  name: 'Professional',
                  price: '$199',
                  period: '/month',
                  description: 'Ideal for content creators and businesses',
                  features: [
                    'Up to 1M characters',
                    '50+ voice options',
                    '25+ languages',
                    'Premium quality',
                    'Priority support',
                    'API access'
                  ],
                  popular: true
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  period: '',
                  description: 'Tailored solutions for large organizations',
                  features: [
                    'Unlimited characters',
                    'Custom voices',
                    'All languages',
                    'Highest quality',
                    'Dedicated support',
                    'SLA guarantees'
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Creating Amazing Voices
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your text into natural, expressive speech. 
              Try our AI voice synthesis today and hear the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
              >
                Try Free Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiSpeechSynthesisPage;