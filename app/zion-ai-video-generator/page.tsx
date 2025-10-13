import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Video, 
  Play, 
  Download, 
  Sparkles, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  Brain,
  Target,
  BarChart3,
  Shield,
  Globe
} from 'lucide-react';

const ZionAIVideoGeneratorPage = () => {
  const features = [
    "AI-Powered Video Creation",
    "Text-to-Video Generation", 
    "Voice Synthesis & Lip Sync",
    "Multiple Video Formats (MP4, MOV, AVI)",
    "4K & HD Quality Output",
    "Custom Branding & Watermarks",
    "Background Music Library",
    "Auto Subtitle Generation",
    "Multi-language Support",
    "Cloud Rendering",
    "API Integration",
    "White-label Options"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses and content creators",
      features: [
        "10 videos per month",
        "HD quality (1080p)",
        "Basic templates",
        "5-minute max duration",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month", 
      description: "Ideal for marketing agencies and growing businesses",
      features: [
        "50 videos per month",
        "4K quality available",
        "Premium templates",
        "15-minute max duration",
        "Custom branding",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations with high-volume needs",
      features: [
        "Unlimited videos",
        "4K quality included",
        "Custom templates",
        "No duration limits",
        "White-label options",
        "API access",
        "Dedicated support"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Marketing Videos",
      description: "Create engaging promotional content for social media and advertising campaigns",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Training Content",
      description: "Generate educational videos and training materials for your team",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Product Demos",
      description: "Showcase your products with professional demonstration videos",
      icon: <Play className="w-6 h-6" />
    },
    {
      title: "Social Media",
      description: "Create viral content for TikTok, Instagram, YouTube, and other platforms",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Video Generator - AI-Powered Video Creation | Zion Tech Group</title>
        <meta name="description" content="Create professional videos with AI. Text-to-video generation, voice synthesis, 4K quality, and custom branding. Perfect for marketing, training, and social media content." />
        <meta name="keywords" content="AI video generator, text to video, video creation, AI video maker, automated video, video marketing, content creation" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Video Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Video Generator
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your ideas into stunning videos with our AI-powered video generator. 
            Create professional-quality content in minutes, not hours. Perfect for marketing, 
            training, social media, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
            <p className="text-gray-300 text-sm">Advanced AI algorithms create natural-looking videos</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Fast Creation</h3>
            <p className="text-gray-300 text-sm">Generate videos in minutes, not hours</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Video className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">4K Quality</h3>
            <p className="text-gray-300 text-sm">Professional-grade video output</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Easy to Use</h3>
            <p className="text-gray-300 text-sm">No technical skills required</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Powerful Features
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Perfect For
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Simple Pricing
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
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
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Amazing Videos?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of content creators, marketers, and businesses who are already 
              using Zion AI Video Generator to create professional videos effortlessly.
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
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionAIVideoGeneratorPage;