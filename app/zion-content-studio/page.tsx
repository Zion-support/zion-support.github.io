import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Brain, 
  PenTool, 
  Image, 
  Video, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  DollarSign,
  Globe,
  Smartphone,
  Monitor,
  Server,
  Target,
  Zap,
  Users,
  Database,
  BarChart3,
  Upload,
  Download,
  Share2,
  Palette
} from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const ZionContentStudioPage = () => {
  const features = [
    {
      title: "AI Content Generation",
      description: "Generate high-quality content using advanced AI models trained on your brand voice",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Brand voice training", "Multiple content types", "SEO optimization", "Tone consistency"]
    },
    {
      title: "Multi-Format Export",
      description: "Export content in various formats including blog posts, social media, and marketing materials",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["Blog posts", "Social media", "Email campaigns", "Marketing copy"]
    },
    {
      title: "Visual Content Creation",
      description: "Create stunning visuals with AI-powered image and video generation tools",
      icon: <Image className="w-6 h-6" />,
      benefits: ["AI image generation", "Video creation", "Template library", "Custom branding"]
    },
    {
      title: "SEO Optimization",
      description: "Automatically optimize content for search engines with built-in SEO tools",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Keyword research", "SEO scoring", "Meta tag generation", "Content optimization"]
    },
    {
      title: "Team Collaboration",
      description: "Collaborate with your team on content creation and approval workflows",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Real-time collaboration", "Approval workflows", "Version control", "Comment system"]
    },
    {
      title: "Content Analytics",
      description: "Track content performance with detailed analytics and insights",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Performance tracking", "Engagement metrics", "ROI analysis", "Content insights"]
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$19",
      period: "per month",
      description: "Perfect for individual content creators and freelancers",
      features: [
        "50 AI-generated articles",
        "Basic templates",
        "Standard export formats",
        "Email support",
        "1 user account"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$49",
      period: "per month",
      description: "Ideal for small teams and growing businesses",
      features: [
        "200 AI-generated articles",
        "Premium templates",
        "All export formats",
        "Priority support",
        "Up to 5 user accounts",
        "Team collaboration",
        "Advanced analytics"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "per month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited content generation",
        "Custom templates",
        "API access",
        "24/7 dedicated support",
        "Unlimited user accounts",
        "Custom integrations",
        "White-label solution"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const contentTypes = [
    {
      title: "Blog Posts",
      description: "Create engaging blog content with AI assistance",
      icon: <FileText className="w-8 h-8" />,
      capabilities: ["Long-form articles", "SEO optimization", "Research assistance", "Fact-checking"]
    },
    {
      title: "Social Media",
      description: "Generate social media content for all platforms",
      icon: <Share2 className="w-8 h-8" />,
      capabilities: ["Platform-specific content", "Hashtag suggestions", "Visual content", "Scheduling"]
    },
    {
      title: "Marketing Copy",
      description: "Create compelling marketing materials and campaigns",
      icon: <Target className="w-8 h-8" />,
      capabilities: ["Ad copy", "Email campaigns", "Landing pages", "Product descriptions"]
    },
    {
      title: "Visual Content",
      description: "Generate images, videos, and graphics with AI",
      icon: <Palette className="w-8 h-8" />,
      capabilities: ["AI image generation", "Video creation", "Infographics", "Brand assets"]
    }
  ];

  const testimonials = [
    {
      name: "Amanda Foster",
      company: "Digital Marketing Agency",
      role: "Content Manager",
      content: "Zion Content Studio has revolutionized our content creation process. We can now produce 10x more content with the same team, and the quality is consistently high.",
      rating: 5,
      avatar: "AF"
    },
    {
      name: "James Rodriguez",
      company: "E-commerce Store",
      role: "Marketing Director",
      content: "The AI content generation is incredibly accurate and matches our brand voice perfectly. The SEO optimization features have improved our search rankings significantly.",
      rating: 5,
      avatar: "JR"
    },
    {
      name: "Lisa Chen",
      company: "Tech Blog",
      role: "Editor-in-Chief",
      content: "The team collaboration features are fantastic. We can now work together on content creation in real-time, and the approval workflow keeps everything organized.",
      rating: 5,
      avatar: "LC"
    }
  ];

  const stats = [
    { number: "10x", label: "Faster Content Creation", icon: <Zap className="w-6 h-6" /> },
    { number: "95%", label: "Content Quality Score", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Content Templates", icon: <FileText className="w-6 h-6" /> },
    { number: "24/7", label: "AI Assistance", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Content Studio - AI-Powered Content Creation Platform</title>
        <meta name="description" content="Create amazing content with Zion Content Studio - AI-powered content creation platform with multi-format export, SEO optimization, and team collaboration starting from $19/month." />
        <meta name="keywords" content="content creation, AI writing, content marketing, blog writing, social media content, content automation, SEO content" />
        <meta property="og:title" content="Zion Content Studio - AI-Powered Content Creation" />
        <meta property="og:description" content="AI-powered content creation platform with multi-format export and team collaboration features." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-content-studio" />
        <meta property="og:image" content="https://ziontechgroup.com/og-content-studio.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <SEOOptimizer
          title="Zion Content Studio - AI-Powered Content Creation Platform"
          description="Create amazing content with Zion Content Studio - AI-powered content creation platform with multi-format export, SEO optimization, and team collaboration starting from $19/month."
          keywords="content creation, AI writing, content marketing, blog writing, social media content, content automation, SEO content, content studio"
          canonical="https://ziontechgroup.com/zion-content-studio"
        />

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
              <Brain className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">AI-Powered Content Creation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion Content
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 animate-pulse">
                {" "}Studio
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              AI-powered content creation platform with multi-format export, SEO optimization, 
              and team collaboration designed for modern content teams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Content Creation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, optimize, and distribute amazing content.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Create Any Type of Content
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From blog posts to social media, create content for every platform and purpose.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contentTypes.map((contentType, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      {contentType.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                        {contentType.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {contentType.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {contentType.capabilities.map((capability, capabilityIndex) => (
                      <div key={capabilityIndex} className="text-sm bg-green-500/20 text-green-300 px-3 py-2 rounded">
                        {capability}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Content Creation Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that matches your content creation needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-green-500/50 shadow-green-500/20' 
                    : 'border-white/20 hover:border-green-500/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
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
                    to={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-green-500/25'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Content Creators
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what content creators say about Zion Content Studio
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Creating Amazing Content
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of content creators already using Zion Content Studio to produce high-quality content at scale. 
              Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionContentStudioPage;