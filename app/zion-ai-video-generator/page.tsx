import { ArrowRight, Video, Sparkles, Zap, CheckCircle, Star, Brain, Play, Camera, Edit3 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiVideoGenerator() {
  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "AI Video Creation",
      description: "Generate professional videos from text prompts using advanced AI technology"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Auto Voiceover",
      description: "Natural-sounding voice synthesis in 50+ languages with emotion control"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "One-Click Templates",
      description: "Hundreds of professional templates for different industries and use cases"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Smart Editing",
      description: "AI-powered video editing with automatic scene detection and transitions"
    },
    {
      icon: <Edit3 className="w-6 h-6" />,
      title: "Brand Customization",
      description: "Apply your brand colors, fonts, and logos automatically to all videos"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Content Optimization",
      description: "AI analyzes your content and suggests improvements for better engagement"
    }
  ];

  const useCases = [
    "Marketing Videos",
    "Product Demos",
    "Training Content",
    "Social Media Posts",
    "Explainer Videos",
    "Testimonials",
    "Webinars",
    "Educational Content",
    "Sales Presentations",
    "Brand Stories"
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$39",
      period: "/month",
      description: "Perfect for content creators",
      features: [
        "10 videos per month",
        "HD quality export",
        "Basic templates",
        "Standard voiceover",
        "Email support",
        "5GB storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Most popular for businesses",
      features: [
        "50 videos per month",
        "4K quality export",
        "Premium templates",
        "Advanced voiceover",
        "Priority support",
        "50GB storage",
        "Brand customization",
        "API access"
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
        "8K quality export",
        "Custom templates",
        "Premium voiceover",
        "24/7 dedicated support",
        "Unlimited storage",
        "White-label solution",
        "Custom integrations",
        "Team collaboration"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Maria Garcia",
      company: "Digital Marketing Agency",
      role: "Creative Director",
      content: "Zion AI Video Generator has revolutionized our content creation process. We can now produce high-quality videos 10x faster than before.",
      rating: 5
    },
    {
      name: "Tom Wilson",
      company: "E-learning Platform",
      role: "Content Manager",
      content: "The AI voiceover feature is incredibly realistic. Our students can't tell the difference from human narration.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      company: "SaaS Startup",
      role: "Marketing Manager",
      content: "Perfect for creating product demos and explainer videos. The templates are professional and easy to customize.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Video Generator - Create Professional Videos with AI | Zion Tech Group</title>
        <meta
          name="description"
          content="Create stunning professional videos with AI in minutes. Zion AI Video Generator offers automated video creation, voiceover, and editing for businesses and creators."
        />
        <meta
          name="keywords"
          content="AI video generator, video creation, automated video, video editing, voiceover, content creation, video marketing"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Play className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">AI-Powered Video Creation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Zion AI Video Generator
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create professional videos in minutes with AI. Generate engaging content, add natural voiceovers, 
              and customize with your brand - all powered by cutting-edge artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
                <div className="text-gray-300">Videos Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
                <div className="text-gray-300">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Languages Supported</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Video Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional videos with artificial intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Every Use Case
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Create videos for any purpose with our versatile AI video generator.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-gray-300 text-center font-medium">{useCase}</span>
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
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your video creation needs. All plans include 7-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-purple-400 bg-gradient-to-br from-purple-500/10 to-pink-500/10'
                      : 'border-white/20 hover:border-purple-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
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
                See what our users say about Zion AI Video Generator
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
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
              Join thousands of creators using Zion AI Video Generator to produce professional content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
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