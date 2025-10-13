import { ArrowRight, Video, Scissors, Play, Zap, CheckCircle, Star, Brain, Camera, Music, Palette, Upload } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAIVideoEditor() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Auto-Editing",
      description: "Automatically edit videos with AI-powered scene detection and smart cuts"
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Smart Trimming",
      description: "AI identifies and removes silent parts, filler words, and unnecessary content"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Auto Color Correction",
      description: "AI-powered color grading and exposure correction for professional results"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "AI Music Generation",
      description: "Generate royalty-free background music that matches your video content"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Style Transfer",
      description: "Apply artistic styles and filters to transform your videos automatically"
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: "One-Click Export",
      description: "Export to multiple formats and platforms with optimized settings"
    }
  ];

  const capabilities = [
    "AI-powered auto-editing and trimming",
    "Smart scene detection and transitions",
    "Automatic color correction and grading",
    "AI-generated background music",
    "Voice enhancement and noise reduction",
    "Text-to-speech with 50+ voices",
    "Auto-caption generation in 20+ languages",
    "Motion graphics and animations",
    "Green screen removal and replacement",
    "Video stabilization and enhancement",
    "Batch processing for multiple videos",
    "Cloud-based editing and storage",
    "Real-time collaboration",
    "Mobile and desktop apps",
    "4K and 8K video support",
    "Custom branding and watermarks"
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$19",
      period: "/month",
      description: "Perfect for content creators",
      features: [
        "Up to 10 hours of video/month",
        "Basic AI editing features",
        "HD export quality",
        "Email support",
        "1 user account",
        "Standard templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Most popular for professionals",
      features: [
        "Up to 50 hours of video/month",
        "All AI features",
        "4K export quality",
        "Priority support",
        "3 user accounts",
        "Premium templates",
        "Advanced effects",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      description: "For large teams",
      features: [
        "Unlimited video processing",
        "All AI features",
        "8K export quality",
        "24/7 dedicated support",
        "Unlimited users",
        "Custom templates",
        "White-label solution",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Maria Garcia",
      company: "Content Creator",
      role: "YouTube Influencer",
      content: "Zion AI Video Editor has revolutionized my content creation process. What used to take me 4 hours now takes 30 minutes with better results!",
      rating: 5
    },
    {
      name: "Alex Chen",
      company: "Marketing Agency",
      role: "Creative Director",
      content: "The AI auto-editing feature is incredible. It understands the pacing and flow of our videos better than most human editors.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "E-learning Platform",
      role: "Video Producer",
      content: "The automatic caption generation and voice enhancement features have saved us thousands of hours. Our video production is now 5x faster.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Video Editor - Intelligent Video Editing Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Create professional videos with Zion AI Video Editor. AI-powered auto-editing, smart trimming, color correction, and music generation for content creators."
        />
        <meta
          name="keywords"
          content="AI video editor, video editing software, auto-editing, video production, content creation, video optimization, video AI"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 mb-6">
              <Video className="w-4 h-4 text-rose-400 mr-2" />
              <span className="text-rose-400 text-sm font-medium">AI-Powered Video Creation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                Zion AI Video Editor
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create professional videos in minutes with AI-powered editing. Auto-trimming, 
              smart color correction, and intelligent music generation for content creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-rose-400 text-rose-400 px-8 py-4 rounded-lg font-semibold hover:bg-rose-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400 mb-2">10x</div>
                <div className="text-gray-300">Faster Editing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">50,000+</div>
                <div className="text-gray-300">Videos Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Time Saved</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Video Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional videos with AI assistance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card-enhanced rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform pulse-glow-enhanced">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Video Creation Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the tools you need to create stunning videos with AI assistance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center glass-enhanced rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Video Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your video creation needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative glass-card-enhanced rounded-xl p-8 border transition-all duration-500 hover:scale-105 ${
                    plan.popular
                      ? 'border-rose-400 bg-gradient-to-br from-rose-500/10 to-pink-500/10'
                      : 'border-white/20 hover:border-rose-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
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
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700'
                        : 'border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Content Creators
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what creators say about Zion AI Video Editor
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-card-enhanced rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Amazing Videos?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators using Zion AI Video Editor to produce professional content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-rose-400 text-rose-400 px-8 py-4 rounded-lg font-semibold hover:bg-rose-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}