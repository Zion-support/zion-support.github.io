'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Phone, Mail, MapPin, Music, Headphones, Download, Upload, Settings, Brain, Sparkles, Play, Pause, Volume2 } from 'lucide-react';

const AIMusicCompositionPage: React.FC = () => {
  const features = [
    {
      icon: Music,
      title: 'AI Music Generation',
      description: 'Create original music compositions in any genre, style, or mood using advanced AI algorithms',
      benefits: ['Multiple genres', 'Style transfer', 'Mood-based generation', 'Original compositions']
    },
    {
      icon: Headphones,
      title: 'Intelligent Arrangement',
      description: 'AI-powered music arrangement with automatic instrumentation and structure optimization',
      benefits: ['Auto instrumentation', 'Structure optimization', 'Harmony generation', 'Rhythm patterns']
    },
    {
      icon: Volume2,
      title: 'Mastering & Mixing',
      description: 'Professional-grade audio mastering and mixing with AI-powered optimization',
      benefits: ['Auto mastering', 'EQ optimization', 'Dynamic range', 'Professional quality']
    },
    {
      icon: Settings,
      title: 'Custom Training',
      description: 'Train custom AI models on your specific musical style or brand sound',
      benefits: ['Brand consistency', 'Style learning', 'Custom models', 'Personalized output']
    }
  ];

  const pricingPlans = [
    {
      name: 'Composer',
      price: '$149/month',
      description: 'Perfect for individual musicians and content creators',
      features: [
        'Up to 50 tracks/month',
        'Standard quality (44.1kHz)',
        'Basic genres',
        'MP3 export',
        'Email support',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$399/month',
      description: 'Ideal for music studios and production companies',
      features: [
        'Up to 500 tracks/month',
        'High quality (48kHz)',
        'All genres & styles',
        'Multiple export formats',
        'Priority support',
        'Custom training',
        'Collaboration tools',
        'Advanced mixing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299/month',
      description: 'For record labels and large production houses',
      features: [
        'Unlimited tracks',
        'Studio quality (96kHz)',
        'Custom genres',
        'All export formats',
        '24/7 dedicated support',
        'White-label solution',
        'Custom AI training',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Content Creation',
      description: 'Generate background music for videos, podcasts, and social media content',
      icon: '🎬',
      examples: ['YouTube videos', 'Podcast intros', 'Social media posts', 'Marketing content']
    },
    {
      title: 'Game Development',
      description: 'Create dynamic soundtracks and ambient music for games',
      icon: '🎮',
      examples: ['Game soundtracks', 'Ambient music', 'Dynamic scoring', 'Character themes']
    },
    {
      title: 'Commercial Use',
      description: 'Generate royalty-free music for commercials, presentations, and corporate content',
      icon: '📺',
      examples: ['TV commercials', 'Corporate videos', 'Presentations', 'Training materials']
    },
    {
      title: 'Education',
      description: 'Create educational music content and learning materials',
      icon: '🎓',
      examples: ['Music education', 'Learning apps', 'Tutorial content', 'Practice tracks']
    }
  ];

  const genres = [
    { name: 'Classical', description: 'Symphonic and orchestral compositions' },
    { name: 'Jazz', description: 'Swing, bebop, and modern jazz styles' },
    { name: 'Rock', description: 'Alternative, indie, and classic rock' },
    { name: 'Electronic', description: 'EDM, ambient, and electronic music' },
    { name: 'Hip-Hop', description: 'Rap beats and urban music' },
    { name: 'Pop', description: 'Contemporary pop and mainstream music' },
    { name: 'Country', description: 'Traditional and modern country music' },
    { name: 'Blues', description: 'Traditional and electric blues' }
  ];

  const technicalSpecs = [
    { spec: 'Audio Quality', value: 'Up to 96kHz/32-bit' },
    { spec: 'Generation Speed', value: '30-60 seconds per track' },
    { spec: 'Track Length', value: 'Up to 10 minutes' },
    { spec: 'Genres Supported', value: '50+ genres' },
    { spec: 'Instruments', value: '100+ virtual instruments' },
    { spec: 'API Response Time', value: '< 2 minutes' },
    { spec: 'Uptime SLA', value: '99.9%' },
    { spec: 'Royalty Status', value: '100% royalty-free' }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Time Saving',
      description: 'Generate complete musical compositions in minutes instead of hours',
      value: '90% faster'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Eliminate expensive studio time and session musicians',
      value: '80% cheaper'
    },
    {
      icon: Star,
      title: 'Professional Quality',
      description: 'Studio-grade audio quality with professional mastering',
      value: '99% quality'
    },
    {
      icon: Zap,
      title: 'Unlimited Creativity',
      description: 'Explore new musical styles and combinations effortlessly',
      value: '∞ possibilities'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Music Composition & Generation - Zion Tech Group</title>
        <meta name="description" content="Create original music with AI. Generate compositions in any genre, style, or mood. Perfect for content creators, game developers, and musicians. Starting at $149/month." />
        <meta name="keywords" content="ai music generation, music composition, ai music, music ai, background music, royalty free music, music production" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionary Music AI Technology
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Music Composition
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create original music compositions in any genre, style, or mood using advanced AI. Perfect for content creators, game developers, and musicians.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Genres</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">30-60s</div>
              <div className="text-gray-300">Generation Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-gray-300">Instruments</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-gray-300">Royalty-Free</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced Music AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose AI Music Generation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genres Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Supported Music Genres
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {genres.map((genre, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">{genre.name}</h3>
                <p className="text-sm text-gray-300">{genre.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Use Cases & Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="text-left space-y-1">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm text-gray-400">• {example}</li>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <div className="text-gray-400">per month</div>
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
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Music AI Plan`}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{spec.value}</div>
                <div className="text-gray-300">{spec.spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Creating Music with AI
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transform your musical ideas into professional compositions with our advanced AI technology. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMusicCompositionPage;