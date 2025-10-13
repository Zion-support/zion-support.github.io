import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Video, 
  Play, 
  Download, 
  Upload, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap, 
  Clock, 
  Users, 
  Award,
  BarChart3,
  Settings,
  Palette,
  Music,
  Camera,
  Film,
  Mic,
  Edit3,
  Share2,
  Globe,
  Smartphone,
  Monitor,
  Laptop
} from 'lucide-react';

const ZionAIVideoGeneratorPage = () => {
  const features = [
    {
      title: "AI-Powered Video Creation",
      description: "Generate professional videos from text prompts using advanced AI technology",
      icon: <Video className="w-6 h-6" />,
      details: [
        "Text-to-video generation",
        "Multiple video styles and templates",
        "Custom branding and logos",
        "HD and 4K output quality"
      ]
    },
    {
      title: "Smart Content Adaptation",
      description: "Automatically adapt content for different platforms and audiences",
      icon: <Smartphone className="w-6 h-6" />,
      details: [
        "Platform-specific formatting",
        "Aspect ratio optimization",
        "Social media templates",
        "Mobile-first design"
      ]
    },
    {
      title: "Voice & Audio Integration",
      description: "Add professional voiceovers and background music to your videos",
      icon: <Mic className="w-6 h-6" />,
      details: [
        "AI voice synthesis",
        "Multiple language support",
        "Background music library",
        "Audio synchronization"
      ]
    },
    {
      title: "Advanced Editing Tools",
      description: "Professional-grade editing capabilities with AI assistance",
      icon: <Edit3 className="w-6 h-6" />,
      details: [
        "Auto-cut and trim",
        "Color correction",
        "Transition effects",
        "Text and subtitle overlay"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small businesses",
      features: [
        "10 videos per month",
        "HD quality output",
        "Basic templates",
        "Standard voice options",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses and content creators",
      features: [
        "50 videos per month",
        "4K quality output",
        "Premium templates",
        "Custom voice options",
        "Priority support",
        "Brand customization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited videos",
        "4K and 8K output",
        "All templates and styles",
        "Custom AI training",
        "24/7 support",
        "White-label options",
        "API access"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Marketing Videos",
      description: "Create compelling promotional content for social media and websites",
      icon: <BarChart3 className="w-8 h-8" />,
      examples: ["Product demos", "Brand stories", "Social media ads", "Explainer videos"]
    },
    {
      title: "Educational Content",
      description: "Develop engaging training and educational materials",
      icon: <Users className="w-8 h-8" />,
      examples: ["Online courses", "Tutorials", "How-to guides", "Training modules"]
    },
    {
      title: "Corporate Communications",
      description: "Professional videos for internal and external communications",
      icon: <Award className="w-8 h-8" />,
      examples: ["Company updates", "Announcements", "Presentations", "Reports"]
    },
    {
      title: "Social Media Content",
      description: "Eye-catching content optimized for various social platforms",
      icon: <Share2 className="w-8 h-8" />,
      examples: ["Instagram stories", "TikTok videos", "YouTube shorts", "LinkedIn posts"]
    }
  ];

  const stats = [
    { number: "10,000+", label: "Videos Generated", icon: <Video className="w-6 h-6" /> },
    { number: "500+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Zion AI Video Generator - AI-Powered Video Creation Platform | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Create professional videos instantly with our AI-powered video generator. Text-to-video, voice synthesis, and advanced editing tools for businesses and content creators." 
        />
        <meta 
          name="keywords" 
          content="AI video generator, video creation, text to video, video editing, content creation, marketing videos, social media content" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Video Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Video Generator
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your ideas into stunning videos with our AI-powered video generation platform. 
            Create professional content in minutes, not hours, with advanced AI technology and intuitive tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Creating Videos
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful AI Video Creation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create professional videos with AI assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Perfect for Every Use Case
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From marketing to education, create videos that engage and convert
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {useCase.description}
                </p>
                <div className="space-y-1">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="text-xs text-cyan-400">
                      • {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your video creation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative ${
                  plan.popular 
                    ? 'border-cyan-500/50 hover:shadow-cyan-500/25' 
                    : 'border-white/20 hover:shadow-cyan-500/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Amazing Videos?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators and businesses using our AI video generator to produce professional content at scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Live Demo
              <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIVideoGeneratorPage;