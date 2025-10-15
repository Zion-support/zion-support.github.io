import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Brain, Camera, CheckCircle, Hash, Image, Mail, MessageCircle, Phone, Play, Shield, Star } from 'lucide-react';

const AISocialMediaManagerProPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Content",
      description: "Intelligent content creation and curation with AI-powered optimization for maximum engagement.",
      benefits: ["Content generation", "Trend analysis", "Engagement optimization", "Brand consistency"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Visual Content",
      description: "AI-powered image and video creation with automated editing and optimization.",
      benefits: ["Image generation", "Video editing", "Visual optimization", "Brand templates"]
    },
    {
      icon: <Hash className="w-8 h-8" />,
      title: "Hashtag Optimization",
      description: "Intelligent hashtag research and optimization for maximum reach and engagement.",
      benefits: ["Hashtag research", "Trend analysis", "Reach optimization", "Engagement tracking"]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Community Management",
      description: "AI-powered community management with automated responses and engagement optimization.",
      benefits: ["Auto-responses", "Sentiment analysis", "Community insights", "Engagement tracking"]
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Comprehensive social media analytics with AI-powered insights and recommendations.",
      benefits: ["Performance metrics", "Audience insights", "Content analysis", "ROI tracking"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Brand Protection",
      description: "AI-powered brand monitoring and protection across all social media platforms.",
      benefits: ["Brand monitoring", "Crisis management", "Reputation tracking", "Competitive analysis"]
    }
  ];

  const useCases = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "E-commerce",
      description: "Complete social media management for online stores and e-commerce brands.",
      benefits: ["Product promotion", "Customer engagement", "Sales tracking", "Influencer marketing"]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "B2B Marketing",
      description: "Professional social media management for B2B companies and enterprise brands.",
      benefits: ["Thought leadership", "Lead generation", "Professional networking", "Industry engagement"]
    },
    {
      icon: <Hash className="w-8 h-8" />,
      title: "Personal Brands",
      description: "AI-powered personal branding and social media management for influencers and professionals.",
      benefits: ["Personal branding", "Content strategy", "Audience growth", "Engagement optimization"]
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Agencies",
      description: "Comprehensive social media management platform for marketing agencies and consultants.",
      benefits: ["Client management", "Campaign tracking", "Team collaboration", "Performance reporting"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      description: "Basic social media management for small businesses",
      price: "$79",
      period: "month",
      features: [
        "Up to 3 social accounts",
        "Basic AI features",
        "Content scheduling",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Advanced social media management for growing businesses",
      price: "$199",
      period: "month",
      features: [
        "Up to 10 social accounts",
        "Advanced AI features",
        "Content creation",
        "Priority support",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Complete social media platform for large organizations",
      price: "$399",
      period: "month",
      features: [
        "Unlimited social accounts",
        "All AI features",
        "24/7 support",
        "Custom development",
        "API access",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      content: "AI Social Media Manager Pro has increased our social media engagement by 200% and improved our brand visibility significantly.",
      name: "Lisa Thompson",
      role: "Social Media Manager",
      company: "Fashion Forward",
      rating: 5
    },
    {
      content: "The AI-powered content creation has saved us hours of work and improved our content quality dramatically.",
      name: "Mark Davis",
      role: "Marketing Director",
      company: "Tech Innovations",
      rating: 5
    },
    {
      content: "The analytics and insights have helped us understand our audience better and create more targeted content.",
      name: "Sarah Wilson",
      role: "Brand Manager",
      company: "Creative Agency",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Social Media Manager Pro - Advanced Social Media Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize social media management with AI-powered content creation, automation, and analytics. Increase engagement by 200% and improve brand visibility." />
        <meta name="keywords" content="AI social media, social media automation, content creation, social media management, brand management, social media AI" />
        <meta property="og:title" content="AI Social Media Manager Pro - Advanced Social Media Platform" />
        <meta property="og:description" content="Revolutionize social media management with AI-powered content creation, automation, and analytics." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Social Media Manager Pro - Advanced Social Media Platform" />
        <meta name="twitter:description" content="Revolutionize social media management with AI-powered content creation, automation, and analytics." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI Social Media Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Social Media Manager Pro
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Revolutionize social media management with AI-powered content creation, automation, and analytics. 
                  Increase engagement by 200% and improve brand visibility.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Advanced Social Media Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to create and manage successful social media campaigns with AI-powered automation and insights.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Use Cases Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Social Media Solutions
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI social media platform is designed for various industries and business types.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-white">{useCase.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300 mb-6">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Pricing Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Flexible Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your social media management needs and budget.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Testimonials Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Social Media Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how businesses are transforming their social media with AI Social Media Manager Pro.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Social Media?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join leading businesses that are revolutionizing social media management with AI-powered solutions and intelligent automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Trial
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AISocialMediaManagerProPage;