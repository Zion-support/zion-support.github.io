import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Zap, Star, CheckCircle, ArrowRight, Video, Scissors, Palette, Music, Download, Share2, Clock, Users, Award } from 'lucide-react';
import SEOOptimizer from '../../components/SEOOptimizer';

const ZionAiVideoEditorPage = () => {
  const features = [
    {
      title: "AI-Powered Auto-Editing",
      description: "Automatically edit videos with AI that understands context, pacing, and visual appeal",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Scene Detection",
      description: "Intelligently detect and separate scenes for seamless transitions",
      icon: <Scissors className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Auto Color Grading",
      description: "Professional color correction and grading applied automatically",
      icon: <Palette className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AI Music Sync",
      description: "Automatically sync background music to video rhythm and mood",
      icon: <Music className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Voice Enhancement",
      description: "AI-powered voice clarity, noise reduction, and volume normalization",
      icon: <Users className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Auto Captions",
      description: "Generate and sync captions with 99% accuracy in 50+ languages",
      icon: <Award className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "month",
      description: "Perfect for content creators and small businesses",
      features: [
        "Up to 10 hours of video processing",
        "1080p export quality",
        "Basic AI editing features",
        "5GB cloud storage",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "month",
      description: "Ideal for professional video creators and agencies",
      features: [
        "Unlimited video processing",
        "4K export quality",
        "All AI editing features",
        "100GB cloud storage",
        "Priority support",
        "Team collaboration (up to 5 users)",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "month",
      description: "For large teams and enterprise needs",
      features: [
        "Everything in Professional",
        "Unlimited cloud storage",
        "Advanced analytics",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Digital Marketing Agency",
      role: "Creative Director",
      content: "Zion AI Video Editor has revolutionized our video production workflow. What used to take hours now takes minutes with incredible quality.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      company: "YouTube Creator",
      role: "Content Creator",
      content: "The AI auto-editing is mind-blowing. It understands my style and creates videos that look professionally edited every time.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      company: "E-learning Platform",
      role: "Video Producer",
      content: "Perfect for educational content. The auto-captions and voice enhancement make our courses accessible to everyone.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Zion AI Video Editor - AI-Powered Video Editing Platform | Zion Tech Group"
        description="Transform your video editing with AI-powered automation. Auto-editing, smart scene detection, color grading, and more. Start free trial today."
        keywords="AI video editor, automated video editing, video production, content creation, video marketing, AI video tools"
        canonical="https://ziontechgroup.com/zion-ai-video-editor"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Video className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">AI-Powered Video Editing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Zion AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
              {" "}Video Editor
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your video editing workflow with AI-powered automation. 
            Create professional-quality videos in minutes, not hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">90%</div>
              <div className="text-gray-300 text-sm">Time Saved</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-300 text-sm">Active Users</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-pink-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">99%</div>
              <div className="text-gray-300 text-sm">Accuracy</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Video className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">1M+</div>
              <div className="text-gray-300 text-sm">Videos Edited</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our advanced AI technology handles the complex aspects of video editing, 
              allowing you to focus on creativity and storytelling.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your video editing needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20'
                    : 'border-white/20 hover:border-blue-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Video Creators Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our users say about Zion AI Video Editor
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Video Editing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of creators who are already using AI to create amazing videos. 
            Start your free trial today and experience the future of video editing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAiVideoEditorPage;