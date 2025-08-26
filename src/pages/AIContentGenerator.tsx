import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  PenTool,
  FileText,
  Brain,
  Zap,
  Target,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Type,
  Video,
  ShoppingBag,
  Mail,
  Check,
  Clock,
  TrendingUp,
  BarChart3,
  MessageSquare,
  Phone,
  MapPin
} from 'lucide-react';

export default function AIContentGenerator() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const features = [
    {
      title: "AI Writing Assistant",
      description: "Generate high-quality content for blogs, social media, and marketing campaigns",
      icon: PenTool,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Format Support",
      description: "Create content in various formats: text, images, videos, and audio",
      icon: FileText,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Brand Voice Consistency",
      description: "Maintain your brand's unique voice across all content pieces",
      icon: Type,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "SEO Optimization",
      description: "AI-powered SEO suggestions to improve content visibility and ranking",
      icon: Target,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Real-time Analytics",
      description: "Track content performance and optimize based on data insights",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Multi-language Support",
      description: "Create content in 100+ languages with native-level quality",
      icon: Globe,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const contentTypes = [
    {
      title: "Blog Posts",
      description: "Long-form articles and blog content optimized for SEO",
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Social Media",
      description: "Posts for all major social platforms with engagement optimization",
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Marketing Copy",
      description: "Ads, landing pages, and promotional content that converts",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Product Descriptions",
      description: "Compelling product and service descriptions that drive sales",
      icon: ShoppingBag,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Email Campaigns",
      description: "Newsletters and email marketing content with personalization",
      icon: Mail,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Video Scripts",
      description: "Scripts for video content and presentations",
      icon: Video,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for individuals and small businesses",
      features: [
        "Up to 50 content pieces/month",
        "Basic AI writing tools",
        "Standard templates",
        "Email support",
        "Basic SEO suggestions"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Advanced content creation for growing businesses",
      features: [
        "Up to 200 content pieces/month",
        "Advanced AI writing tools",
        "Custom templates",
        "Priority support",
        "Advanced SEO optimization",
        "Brand voice training",
        "Multi-language support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "Full-scale content creation for large organizations",
      features: [
        "Unlimited content pieces",
        "Custom AI models",
        "White-label solutions",
        "Dedicated support",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Marketing Director, GrowthBrand",
      content: "Zion's AI Content Generator increased our content output by 300% while maintaining quality. Game-changer!",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Content Creator, TechBlog",
      content: "The AI writing assistant is incredibly intuitive. It understands context and generates engaging content.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "CEO, StartupXYZ",
      content: "We've saved countless hours on content creation. The ROI is immediate and substantial.",
      rating: 5
    }
  ];

  const benefits = [
    "AI-powered content generation for any industry",
    "SEO-optimized content with keyword research",
    "Multiple content formats (blogs, social media, emails)",
    "Brand voice customization and consistency",
    "Plagiarism-free, original content",
    "Real-time content optimization",
    "Multi-language support (100+ languages)",
    "Content calendar and scheduling",
    "Performance analytics and insights",
    "Team collaboration tools",
    "API access for enterprise integration",
    "24/7 customer support"
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case 'overview':
        return (
          <div className="space-y-12">
            {/* Features Grid */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Platform Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 p-6 hover:border-zinc-600/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-3 text-center">{feature.title}</h3>
                    <p className="text-zion-slate-light text-sm text-center">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'content-types':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Content Types We Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 p-6 hover:border-zinc-600/50 transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`bg-gradient-to-r ${type.color} w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <type.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{type.title}</h3>
                  <p className="text-zion-slate-light text-sm">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'pricing':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`relative ${plan.popular ? 'border-blue-500 scale-105' : 'border-zinc-700'} bg-zinc-800/50 rounded-lg border p-6 transition-all duration-300 hover:shadow-2xl`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl text-white font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-zion-slate-light">{plan.period}</span>
                    </div>
                    <p className="text-zion-slate-light">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Content Generator</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your content creation with AI-powered writing tools. Generate engaging blogs, social media posts, 
              marketing copy, and more in seconds while maintaining your brand voice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Start Free Trial
              </Link>
              <Link to="/demo" className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors">
                Try Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'overview', name: 'Overview', icon: Brain },
              { id: 'content-types', name: 'Content Types', icon: FileText },
              { id: 'pricing', name: 'Pricing', icon: TrendingUp }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTab === tab.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {renderContent()}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Trusted by Content Creators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-zion-slate-light">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-zion-slate-light text-center mb-6">
              Join thousands of creators already using AI to scale their content production and engage their audience
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Phone</p>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Email</p>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Address</p>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300">
                Start Your Free Trial Today
                <ArrowRight className="w-5 h-5 ml-2"/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
