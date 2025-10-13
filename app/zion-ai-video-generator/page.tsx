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
  Image,
  Mic,
  Edit3,
  Share2,
  BarChart3
} from 'lucide-react';

const ZionAIVideoGeneratorPage = () => {
  const features = [
    {
      title: "AI-Powered Script Generation",
      description: "Generate engaging video scripts from text prompts using advanced AI",
      icon: <Edit3 className="w-6 h-6" />,
      details: "Create compelling scripts for any industry or use case"
    },
    {
      title: "Multi-Language Voice Synthesis",
      description: "Convert text to natural-sounding speech in 50+ languages",
      icon: <Mic className="w-6 h-6" />,
      details: "Professional voice actors and custom voice cloning"
    },
    {
      title: "Smart Video Editing",
      description: "Automated video editing with AI-powered scene detection",
      icon: <Video className="w-6 h-6" />,
      details: "Intelligent cuts, transitions, and effects"
    },
    {
      title: "Stock Footage Integration",
      description: "Access millions of high-quality stock videos and images",
      icon: <Image className="w-6 h-6" />,
      details: "Curated content library with commercial licensing"
    },
    {
      title: "Real-time Collaboration",
      description: "Work with your team on video projects simultaneously",
      icon: <Users className="w-6 h-6" />,
      details: "Comment, review, and approve changes in real-time"
    },
    {
      title: "Analytics & Performance",
      description: "Track video performance with detailed analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      details: "Engagement metrics, view duration, and conversion tracking"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small teams",
      features: [
        "5 videos per month",
        "HD quality (1080p)",
        "Basic AI voices",
        "5GB storage",
        "Email support",
        "Standard templates"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "25 videos per month",
        "4K quality available",
        "Premium AI voices",
        "50GB storage",
        "Priority support",
        "Custom branding",
        "Advanced analytics",
        "Team collaboration"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited videos",
        "4K & 8K quality",
        "Custom voice cloning",
        "Unlimited storage",
        "24/7 phone support",
        "White-label solution",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const useCases = [
    {
      title: "Marketing Videos",
      description: "Create compelling product demos, testimonials, and promotional content",
      icon: <Share2 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Training Content",
      description: "Develop educational videos and training materials for your team",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Social Media",
      description: "Generate engaging content for Instagram, TikTok, and YouTube",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "E-learning",
      description: "Create interactive educational content and online courses",
      icon: <Play className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Video Generator - Create Professional Videos with AI | Zion Tech Group</title>
        <meta name="description" content="Transform your ideas into professional videos with our AI-powered video generator. Create marketing content, training videos, and social media content in minutes." />
        <meta name="keywords" content="AI video generator, video creation, marketing videos, training content, social media videos, automated video editing" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Video Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Video Generator
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your ideas into professional videos in minutes, not hours. Our AI-powered platform 
            creates engaging video content for marketing, training, social media, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
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

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10M+</div>
              <div className="text-gray-300 text-sm">Videos Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4.9/5</div>
              <div className="text-gray-300 text-sm">User Rating</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful Features for Professional Video Creation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-sm text-cyan-400">
                  {feature.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Perfect for Every Use Case
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-white/20 hover:bg-white/20'
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
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
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
              Join thousands of creators, marketers, and businesses who trust Zion AI Video Generator 
              to create professional-quality videos in minutes.
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
                Schedule Demo
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