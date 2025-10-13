
"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  PenTool, 
  Video, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Brain,
  Target,
  Users,
  Award,
  TrendingUp,
  BarChart3,
  Clock,
  DollarSign,
  MessageSquare,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const AIContentStudioZionTechGroup = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Content Studio Pro",
    "description": "AI-powered content creation platform with automated writing, design, and video generation",
    "url": "https://ziontechgroup.com/ai-content-studio",
    "applicationCategory": "ContentCreationApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "149",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "149",
        "priceCurrency": "USD",
        "unitText": "MONTH"
      }
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const features = [
    {
      title: "AI Writing Assistant",
      description: "Generate high-quality articles, blogs, and marketing copy with advanced AI writing models",
      icon: <PenTool className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Video Generation",
      description: "Create professional videos from text prompts with AI-powered video generation technology",
      icon: <Video className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Image Creation",
      description: "Generate stunning visuals, graphics, and artwork using cutting-edge AI image models",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Content Optimization",
      description: "Optimize content for SEO, engagement, and conversion with AI-powered analysis",
      icon: <FileText className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$79",
      period: "month",
      description: "Perfect for individual content creators",
      features: [
        "100 AI-generated articles per month",
        "50 AI-generated images per month",
        "10 AI-generated videos per month",
        "Basic SEO optimization",
        "Email support",
        "Standard templates"
      ],
      popular: false
    },
    {
      name: "Studio Pro",
      price: "$149",
      period: "month",
      description: "Ideal for content teams and agencies",
      features: [
        "Unlimited AI-generated content",
        "Advanced video generation",
        "Premium image creation",
        "Advanced SEO optimization",
        "Priority support",
        "Team collaboration",
        "Custom brand templates",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "month",
      description: "For large content operations",
      features: [
        "Everything in Studio Pro",
        "Custom AI model training",
        "White-label solution",
        "Dedicated support team",
        "SLA guarantee",
        "Custom integrations",
        "Advanced analytics",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "Content Marketing Agency",
      role: "Creative Director",
      content: "Zion AI Content Studio Pro has transformed our content production. We've increased output by 300% while maintaining quality.",
      rating: 5
    },
    {
      name: "David Kim",
      company: "Digital Media Co.",
      role: "Content Manager",
      content: "The AI video generation is incredible. We can now create professional videos in minutes instead of hours.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      company: "E-commerce Brand",
      role: "Marketing Director",
      content: "Best content creation tool we've used. The AI writing and image generation features are game-changers.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <Helmet>
      <title>Zion AI Content Studio Pro - AI-Powered Content Creation Platform | Zion Tech Group</title>
      <meta name="description" content="Advanced AI-powered content creation platform with automated writing, design, and video generation. Create professional content at scale with cutting-edge AI technology." />
      <meta name="keywords" content="AI content creation, content generation, AI writing, video generation, image creation, content marketing, AI content studio" />
      <link rel="canonical" href="https://ziontechgroup.com/ai-content-studio" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>

          <main id="main-content" role="main" aria-label="Zion AI Content Studio Pro">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <div className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                  <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-purple-400 text-sm font-medium">AI-Powered Content Creation</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion AI Content Studio Pro
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Create professional content at scale with AI-powered writing, design, and video generation. 
                  Transform your content strategy with cutting-edge artificial intelligence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <Link
                    to="#pricing"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </Link>
                  <Link
                    to="#demo"
                    className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Link>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Powerful Content Creation Features
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Harness the power of AI to create stunning content across all formats and channels.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="text-center group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                    >
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true"
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Choose Your Content Plan
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Flexible pricing options to fit your content creation needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <div
                      key={index}
                      className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold text-purple-400 mb-2">
                          {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                        </div>
                        <p className="text-gray-300">{plan.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                            : "border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-900"
                        }`}
                      >
                        Get Started
                        <ArrowRight className="w-5 h-5 ml-2" />
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
                    Trusted by Content Creators
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    See what content creators are saying about Zion AI Content Studio Pro
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
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Create Amazing Content?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of content creators using Zion AI Content Studio Pro to produce 
                  professional content at scale. Start your free trial today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Schedule Demo
                    <Sparkles className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </div>
  );
};

export default AIContentStudioZionTechGroup;
