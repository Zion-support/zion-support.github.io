import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Zap, 
  BarChart3, 
  Target, 
  ArrowRight, 
  Star, 
  Brain,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Eye,
  PenTool,
  BookOpen
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIContentGeneratorPage = () => {
  const features = [
    {
      title: "AI Content Creation",
      description: "Generate high-quality content for any purpose with advanced AI writing",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multiple Formats",
      description: "Create blogs, articles, social media posts, emails, and more",
      icon: <FileText className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "SEO Optimization",
      description: "AI-powered SEO optimization for better search rankings",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tone & Style",
      description: "Customize content tone and style to match your brand voice",
      icon: <PenTool className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Plagiarism Check",
      description: "Ensure originality with built-in plagiarism detection",
      icon: <Shield className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Content Analytics",
      description: "Track content performance with detailed analytics and insights",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const contentTypes = [
    { name: "Blog Posts", icon: "📝", color: "from-blue-500 to-cyan-500" },
    { name: "Articles", icon: "📄", color: "from-green-500 to-emerald-500" },
    { name: "Social Media", icon: "📱", color: "from-purple-500 to-violet-500" },
    { name: "Emails", icon: "📧", color: "from-orange-500 to-amber-500" },
    { name: "Product Descriptions", icon: "🛍️", color: "from-pink-500 to-rose-500" },
    { name: "Ad Copy", icon: "📢", color: "from-red-500 to-pink-500" },
    { name: "Press Releases", icon: "📰", color: "from-indigo-500 to-purple-500" },
    { name: "Web Content", icon: "🌐", color: "from-cyan-500 to-blue-500" }
  ];

  const pricingPlans = [
    {
      name: "Writer",
      price: "$29",
      period: "per month",
      description: "Perfect for individual writers",
      features: [
        "Up to 10,000 words/month",
        "Basic AI features",
        "5 content types",
        "Email support",
        "Standard templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Most popular for content teams",
      features: [
        "Up to 50,000 words/month",
        "Advanced AI features",
        "All content types",
        "Priority support",
        "Custom templates",
        "SEO optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited words",
        "Custom AI models",
        "Advanced analytics",
        "API access",
        "Dedicated support",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Emma Wilson",
      company: "Content Marketing Agency",
      role: "Content Director",
      content: "Zion AI Content Generator has increased our content production by 300%. The quality is exceptional and saves us hours every day.",
      rating: 5
    },
    {
      name: "James Chen",
      company: "E-commerce Store",
      role: "Marketing Manager",
      content: "The SEO optimization feature has been a game-changer. Our content now ranks higher and drives more organic traffic.",
      rating: 5
    },
    {
      name: "Sarah Rodriguez",
      company: "Tech Blog",
      role: "Editor",
      content: "The tone and style customization is perfect. We can maintain our brand voice while scaling content production significantly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Content Generator - AI-Powered Content Creation | Zion Tech Group"
        description="Generate high-quality content with AI-powered writing, SEO optimization, and multiple formats. Increase content production by 300% with intelligent content generation."
        keywords="AI content generator, content creation, AI writing, SEO optimization, content marketing, automated content"
        canonical="https://ziontechgroup.com/zion-ai-content-generator"
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <ResponsiveContainer className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <FileText className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Content Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Zion AI Content Generator
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Generate high-quality content with AI-powered writing, SEO optimization, 
              and multiple formats. Increase content production by 300% with intelligent content generation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <FuturisticButton
                href="#pricing"
                variant="primary"
                size="lg"
                icon={<Zap className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="#demo"
                variant="outline"
                size="lg"
                icon={<FileText className="w-5 h-5" />}
              >
                Watch Demo
              </FuturisticButton>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300 text-sm">More Content</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">8</div>
                <div className="text-gray-300 text-sm">Content Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">SEO</div>
                <div className="text-gray-300 text-sm">Optimized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">AI Writing</div>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Content Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Create Any Type of Content
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Generate high-quality content for any purpose with our AI-powered writing engine.
              </p>
            </div>
            
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-5xl mx-auto">
              {contentTypes.map((type, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl">{type.icon}</span>
                  </div>
                  <div className="text-white font-medium text-sm">{type.name}</div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to create high-quality content with AI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content creation needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
                >
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
                      <span className="text-gray-300 ml-1">{plan.period}</span>
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
                  
                  <FuturisticButton
                    href="/contact"
                    variant={plan.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    Get Started
                  </FuturisticButton>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Content Creators
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Content Generator
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <ResponsiveContainer>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Create Amazing Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of content creators already using Zion AI Content Generator to scale their content production.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<Zap className="w-5 h-5" />}
                >
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton
                  href="/demo"
                  variant="outline"
                  size="lg"
                  icon={<FileText className="w-5 h-5" />}
                >
                  Schedule Demo
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
};

export default ZionAIContentGeneratorPage;