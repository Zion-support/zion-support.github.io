import React from 'react';
import { Link } from 'react-router-dom';
import { Music, CheckCircle, Star, Clock, DollarSign, Zap, Brain, Headphones, Mic, Volume2, Play, Pause, Download, Share2, Award, ArrowRight, Sparkles, Target, TrendingUp, Users, BarChart3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIMusicCompositionPage = () => {
  const features = [
    {
      title: "AI-Powered Composition",
      description: "Advanced neural networks generate original music in any genre, style, or mood with professional quality arrangements",
      icon: <Brain className="w-6 h-6" />,
      stats: "50+ genres supported"
    },
    {
      title: "Real-time Collaboration",
      description: "Collaborate with AI in real-time, adjusting melodies, harmonies, and rhythms as you compose your masterpiece",
      icon: <Users className="w-6 h-6" />,
      stats: "Live editing"
    },
    {
      title: "Voice-to-Music Conversion",
      description: "Transform your humming, singing, or spoken ideas into fully arranged musical compositions instantly",
      icon: <Mic className="w-6 h-6" />,
      stats: "95% accuracy"
    },
    {
      title: "Professional Mixing & Mastering",
      description: "AI-powered mixing and mastering tools that rival professional studios, with automatic EQ, compression, and spatial effects",
      icon: <Volume2 className="w-6 h-6" />,
      stats: "Studio quality"
    },
    {
      title: "Custom Instrument Library",
      description: "Access to 1000+ virtual instruments, from classical orchestras to modern synthesizers and world music instruments",
      icon: <Music className="w-6 h-6" />,
      stats: "1000+ instruments"
    },
    {
      title: "Lyrics Generation",
      description: "AI-powered lyrics generation in multiple languages with rhyme schemes, emotional tone, and thematic consistency",
      icon: <Headphones className="w-6 h-6" />,
      stats: "20+ languages"
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$29",
      period: "/month",
      description: "Perfect for individual musicians and content creators",
      features: [
        "Up to 10 compositions/month",
        "Basic AI composition",
        "Standard instrument library",
        "MP3 export",
        "Email support",
        "Basic mixing tools",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for professional musicians and producers",
      features: [
        "Unlimited compositions",
        "Advanced AI composition",
        "Full instrument library",
        "High-quality WAV export",
        "Priority support",
        "Professional mixing & mastering",
        "Real-time collaboration",
        "5 user accounts",
        "Commercial license"
      ],
      popular: true
    },
    {
      name: "Studio",
      price: "$199",
      period: "/month",
      description: "Complete solution for music studios and labels",
      features: [
        "Everything in Professional",
        "Custom AI training",
        "White-label solution",
        "API access",
        "Dedicated support",
        "Advanced analytics",
        "Unlimited user accounts",
        "Custom instruments",
        "Priority processing",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "1M+", label: "Songs Created", icon: <Music className="w-6 h-6" /> },
    { number: "50+", label: "Music Genres", icon: <Headphones className="w-6 h-6" /> },
    { number: "95%", label: "User Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "AI Composition", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Alex Rivera",
      company: "Independent Artist",
      role: "Singer-Songwriter",
      content: "This AI music composer is incredible! I can hum a melody and it turns it into a full arrangement with drums, bass, and harmonies. It's like having a whole band at my fingertips.",
      rating: 5,
      avatar: "AR"
    },
    {
      name: "Sarah Kim",
      company: "Film Production",
      role: "Music Director",
      content: "We use this for film scoring and it's revolutionized our workflow. The AI understands emotional context and creates perfect soundtracks that match our scenes.",
      rating: 5,
      avatar: "SK"
    },
    {
      name: "Marcus Johnson",
      company: "Podcast Studio",
      role: "Audio Producer",
      content: "The voice-to-music feature is amazing for podcast intros and outros. We can create custom music that perfectly matches our brand in minutes instead of hours.",
      rating: 5,
      avatar: "MJ"
    }
  ];

  const useCases = [
    {
      title: "Content Creators",
      description: "Create original background music for YouTube videos, podcasts, and social media content",
      icon: <Play className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Independent Artists",
      description: "Compose and produce professional-quality songs without expensive studio time",
      icon: <Music className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Film & TV",
      description: "Generate custom soundtracks and background music for films, TV shows, and commercials",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Game Developers",
      description: "Create dynamic, adaptive music that responds to gameplay and enhances player experience",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Music Composition - Zion Tech Group | AI-Powered Music Creation"
        description="Create professional-quality music with AI-powered composition tools. Voice-to-music conversion, real-time collaboration, and studio-quality mixing for musicians and creators."
        keywords="AI music composition, music generation, voice to music, music production, AI composer, music creation software, background music"
        canonical="https://ziontechgroup.com/ai-music-composition"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 AI Music Composition Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Music Composition
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create professional-quality music with AI-powered composition tools. Transform your voice into full arrangements, 
            collaborate with AI in real-time, and produce studio-quality tracks in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Creating Music
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Try Free Demo
              <Play className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Music Creation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to create professional-quality music with AI assistance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                    {feature.stats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Creator
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're a content creator, musician, or developer, our AI music composer adapts to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Creative Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start creating music today with our flexible pricing plans
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-cyan-500/20 scale-105'
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Loved by Musicians Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what creators are saying about our AI music composition platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Create Your Next Hit?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of musicians and creators who are already using AI to compose amazing music. 
            Start your free trial today and unleash your creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Pricing
              <DollarSign className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMusicCompositionPage;