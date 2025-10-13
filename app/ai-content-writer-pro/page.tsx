import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Sparkles, Target, Globe, FileText, Search, TrendingUp } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';

const AIContentWriterProPage = () => {
  const features = [
    {
      title: "AI-Powered Content Generation",
      description: "Generate high-quality, engaging content using advanced AI models trained on millions of articles",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["SEO-optimized content", "Multiple content types", "Brand voice consistency"]
    },
    {
      title: "SEO Optimization",
      description: "Automatically optimize content for search engines with keyword research and density analysis",
      icon: <Search className="w-6 h-6" />,
      benefits: ["Keyword research", "Meta tag generation", "Content scoring"]
    },
    {
      title: "Plagiarism Detection",
      description: "Ensure originality with built-in plagiarism detection and content uniqueness scoring",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["100% original content", "Plagiarism reports", "Citation suggestions"]
    },
    {
      title: "Multi-Language Support",
      description: "Create content in 50+ languages with native-level quality and cultural adaptation",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["50+ languages", "Cultural adaptation", "Native quality"]
    },
    {
      title: "Content Templates",
      description: "Access 100+ professionally designed templates for blogs, social media, and marketing",
      icon: <FileText className="w-6 h-6" />,
      benefits: ["100+ templates", "Industry-specific", "Customizable"]
    },
    {
      title: "Analytics & Insights",
      description: "Track content performance with detailed analytics and improvement suggestions",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Performance tracking", "Engagement metrics", "Improvement tips"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small businesses",
      features: [
        "10,000 words/month",
        "5 content templates",
        "Basic SEO optimization",
        "Plagiarism detection",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses and content teams",
      features: [
        "50,000 words/month",
        "All content templates",
        "Advanced SEO tools",
        "Multi-language support",
        "Priority support",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with high content needs",
      features: [
        "Unlimited words",
        "Custom templates",
        "API access",
        "White-label options",
        "Dedicated support",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Digital Marketing Agency",
      role: "Content Manager",
      content: "AI Content Writer Pro has revolutionized our content creation process. We've increased our output by 300% while maintaining quality.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Store",
      role: "Founder",
      content: "The SEO optimization features are incredible. Our organic traffic increased by 150% in just 3 months.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Tech Startup",
      role: "Marketing Director",
      content: "The multi-language support helped us expand globally. We can now create content in 12 different languages effortlessly.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="AI Content Writer Pro - Advanced AI Content Creation | Zion Tech Group"
        description="Create high-quality, SEO-optimized content with AI Content Writer Pro. Features plagiarism detection, multi-language support, and 100+ templates. Starting at $29/month."
        keywords="AI content writer, content creation, SEO optimization, plagiarism detection, content templates, multi-language content, content marketing"
        canonical="https://ziontechgroup.com/ai-content-writer-pro"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 AI Content Creation Tool</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-glow">
            AI Content Writer Pro
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Create high-quality, SEO-optimized content at scale with our advanced AI-powered content creation platform. 
            Perfect for blogs, social media, marketing copy, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/contact" 
              className="cyber-button inline-flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="#demo" 
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10M+</div>
              <div className="text-gray-300 text-sm">Words Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Powerful Features for Content Creation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, optimize, and manage content at scale
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 neon-text">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your content creation needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Trusted by Content Creators Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about AI Content Writer Pro
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="hologram-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-glow">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of content creators who are already using AI Content Writer Pro to create amazing content at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentWriterProPage;