'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
const AIMusicCompositionPage: React.FC = () => {
  const features = [
    'Generate original music in any genre or style',
    'Create custom melodies, harmonies, and rhythms',
    'Emotional analysis and mood-based composition',
    'Instrument synthesis and arrangement',
    'Lyrics generation with rhyme and meter',
    'Style transfer between different musical genres',
    'Real-time music generation and playback',
    'MIDI export for professional editing',
    'Collaborative composition tools',
    'Copyright-free original compositions'
  ];
  const benefits = [
    'Create original music without musical training',
    'Reduce music production costs by 70%',
    'Generate unlimited royalty-free tracks',
    'Accelerate content creation workflows',
    'Explore new musical styles and genres',
    'Create personalized music experiences',
    'Scale music production instantly',
    'Enable non-musicians to create professional tracks'
  ];
  const genres = [
    { name: 'Classical', description: 'Symphonic and orchestral compositions', icon: '🎼' },
    { name: 'Jazz', description: 'Improvisational and complex harmonies', icon: '🎷' },
    { name: 'Rock', description: 'Electric guitars and powerful rhythms', icon: '🎸' },
    { name: 'Electronic', description: 'Synthesized sounds and electronic beats', icon: '🎛️' },
    { name: 'Hip-Hop', description: 'Beats, samples, and urban rhythms', icon: '🎤' },
    { name: 'Pop', description: 'Catchy melodies and mainstream appeal', icon: '⭐' },
    { name: 'Ambient', description: 'Atmospheric and meditative soundscapes', icon: '🌊' },
    { name: 'Folk', description: 'Acoustic instruments and storytelling', icon: '🪕' }
  ];
  const useCases = [
    {
      title: 'Content Creation',
      description: 'Generate background music for videos, podcasts, and presentations',
      icon: '🎬',
      examples: ['YouTube videos', 'Podcast intros', 'Presentation music', 'Social media content']
    },
    {
      title: 'Game Development',
      description: 'Create dynamic soundtracks and ambient music for games',
      icon: '🎮',
      examples: ['Game soundtracks', 'Menu music', 'Ambient sounds', 'Dynamic scoring']
    },
    {
      title: 'Marketing & Advertising',
      description: 'Produce jingles, commercial music, and brand soundtracks',
      icon: '📢',
      examples: ['Commercial jingles', 'Brand anthems', 'Product demos', 'Social media ads']
    },
    {
      title: 'Education & Training',
      description: 'Create educational music and learning soundtracks',
      icon: '📚',
      examples: ['Learning modules', 'Training videos', 'Educational content', 'Language learning']
    },
    {
      title: 'Therapy & Wellness',
      description: 'Generate therapeutic and relaxation music',
      icon: '🧘',
      examples: ['Meditation music', 'Sleep sounds', 'Therapy sessions', 'Wellness apps']
    },
    {
      title: 'Live Performance',
      description: 'Create backing tracks and accompaniment for live shows',
      icon: '🎭',
      examples: ['Backing tracks', 'Live accompaniment', 'Performance music', 'Karaoke tracks']
    }
  ];
  const pricing = [
    {
      name: 'Creator',
      price: '$99/month',
      description: 'Perfect for individual creators',
      features: [
        'Up to 50 tracks/month',
        'Basic genre support',
        'Standard quality output',
        'Email support',
        'MIDI export',
        'MP3 downloads'
      ],
      popular: false
    },
    {
      name: 'Producer',
      price: '$299/month',
      description: 'Ideal for music producers',
      features: [
        'Up to 200 tracks/month',
        'All genre support',
        'High quality output',
        'Priority support',
        'Advanced editing tools',
        'WAV/FLAC export',
        'Lyrics generation',
        'Style transfer'
      ],
      popular: true
    },
    {
      name: 'Studio',
      price: '$799/month',
      description: 'For professional studios',
      features: [
        'Unlimited tracks',
        'Premium quality output',
        'Dedicated support',
        'Custom model training',
        'API access',
        'White-label solution',
        'Commercial licensing',
        'SLA guarantee'
      ],
      popular: false
    }
  ];
  const technologies = [
    'MuseNet', 'Jukebox', 'Magenta', 'MIDI Processing',
    'Neural Audio Synthesis', 'Style Transfer', 'Custom Music Models',
    'Deep Learning', 'Generative AI', 'Audio Processing'
  ];
  const workflow = [
    {
      step: 1,
      title: 'Choose Style & Mood',
      description: 'Select genre, mood, and musical parameters',
      icon: '🎵'
    },
    {
      step: 2,
      title: 'AI Composition',
      description: 'Our AI generates original music and arrangements',
      icon: '🤖'
    },
    {
      step: 3,
      title: 'Review & Customize',
      description: 'Listen, edit, and refine your composition',
      icon: '🎧'
    },
    {
      step: 4,
      title: 'Export & Use',
      description: 'Download in your preferred format and integrate',
      icon: '📤'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Music Composition - Zion Tech Group</title>
        <meta name="description" content="Generate original music with AI. Create custom compositions, lyrics, and arrangements in any genre. Starting at $99/month." />
        <meta name="keywords" content="AI music, music generation, composition, lyrics, soundtrack, background music" />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Music className="w-4 h-4 mr-2" />
            Revolutionary Music Technology
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Music Composition
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create original music, lyrics, and arrangements with our advanced AI technology. 
            Generate professional-quality tracks in any genre without musical training.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">70%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">5min</div>
              <div className="text-gray-300">Generation Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">8+</div>
              <div className="text-gray-300">Genres</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
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
            Powerful Music Generation Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Music AI?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Genres */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Supported Musical Genres
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {genres.map((genre, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">{genre.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{genre.name}</h3>
                <p className="text-gray-300 text-sm">{genre.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Workflow */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Simple 4-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  Step {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Use Cases */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Applications & Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyan-400">Examples:</h4>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-gray-400 flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{plan.price}</div>
                  <p className="text-gray-500">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Music Composition Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technologies */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Compose Music?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start creating original music with our AI-powered composition technology.
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