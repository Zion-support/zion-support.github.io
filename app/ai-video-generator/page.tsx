import React from 'react';
import { Video, Brain, Zap, Shield, BarChart3, Clock, Users, CheckCircle, ArrowRight, Star, DollarSign, Globe, Play, Camera, Mic, Edit3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIVideoGeneratorPage = () => {
  const features = [
    {
      title: "AI-Powered Video Creation",
      description: "Generate professional videos from text prompts, images, or audio with advanced AI technology",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multiple Video Formats",
      description: "Create videos in any format - social media, presentations, marketing, or educational content",
      icon: <Video className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Voice Synthesis",
      description: "Generate natural-sounding voiceovers in multiple languages with customizable voices",
      icon: <Mic className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Smart Editing Tools",
      description: "AI-powered editing with automatic scene detection, color correction, and transitions",
      icon: <Edit3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$39",
      period: "/month",
      description: "Perfect for content creators and small businesses",
      features: [
        "Up to 10 videos/month",
        "Basic AI video generation",
        "HD quality output",
        "Basic templates",
        "Voice synthesis (5 voices)",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for agencies and marketing teams",
      features: [
        "Up to 50 videos/month",
        "Advanced AI features",
        "4K quality output",
        "Custom templates",
        "Voice synthesis (20 voices)",
        "Brand customization",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited videos",
        "Custom AI models",
        "8K quality output",
        "White-label solution",
        "Unlimited voices",
        "API access",
        "Dedicated support",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "Digital Marketing Agency",
      role: "Creative Director",
      content: "Zion AI Video Generator has revolutionized our content creation process. We can now produce high-quality videos 10x faster than before, saving us thousands of hours monthly.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Maria Rodriguez",
      company: "E-learning Platform",
      role: "Content Manager",
      content: "The voice synthesis feature is incredible. We can create educational videos in multiple languages without hiring voice actors, making our content accessible globally.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "John Smith",
      company: "Tech Startup",
      role: "Marketing Manager",
      content: "The AI-powered editing tools are game-changing. It automatically detects the best moments and creates engaging transitions, making our product demos look professional.",
      rating: 5,
      avatar: "JS"
    }
  ];

  const stats = [
    { number: "10x", label: "Faster Creation", icon: <Clock className="w-6 h-6" /> },
    { number: "95%", label: "Cost Reduction", icon: <DollarSign className="w-6 h-6" /> },
    { number: "15,000+", label: "Videos Created", icon: <Video className="w-6 h-6" /> },
    { number: "50+", label: "Languages Supported", icon: <Globe className="w-6 h-6" /> }
  ];

  const useCases = [
    {
      title: "Social Media Content",
      description: "Create engaging posts for Instagram, TikTok, YouTube, and other platforms",
      icon: <Camera className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Marketing Videos",
      description: "Generate product demos, explainer videos, and promotional content",
      icon: <Play className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Educational Content",
      description: "Create training videos, tutorials, and educational materials",
      icon: <Edit3 className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Presentation Videos",
      description: "Transform presentations into engaging video content",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Video Generator - Create Videos with AI | Zion Tech Group"
        description="Generate professional videos from text, images, or audio using advanced AI technology. Create content 10x faster with voice synthesis, smart editing, and multiple formats."
        keywords="AI video generator, video creation, video editing, voice synthesis, content creation, social media videos, marketing videos, AI video tools"
        canonical="https://ziontechgroup.com/ai-video-generator"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Video className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">AI-Powered Video Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
              Zion AI Video Generator
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create professional videos from text, images, or audio using advanced AI technology. 
            Generate content 10x faster with voice synthesis, smart editing, and multiple output formats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Video Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI video generator combines cutting-edge technology with intuitive design 
              to create professional videos in minutes, not hours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Use Case
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From social media content to educational videos, our AI video generator adapts to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  {useCase.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your video creation needs. All plans include our core AI features and 24/7 support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-purple-500/10' 
                    : 'border-white/20 hover:border-purple-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </FuturisticButton>
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
              Trusted by Content Creators
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about Zion AI Video Generator
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Create Amazing Videos?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of content creators who have revolutionized their video production with Zion AI Video Generator. 
            Start your free trial today and experience the future of video creation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVideoGeneratorPage;