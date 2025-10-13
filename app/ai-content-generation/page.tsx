import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Image, 
  Video, 
  Music, 
  Code, 
  Globe, 
  Zap, 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Sparkles,
  Target,
  BarChart3,
  Users,
  Clock,
  Shield,
  RefreshCw,
  Download,
  Share2
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const AIContentGenerationPage = () => {
  const contentTypes = [
    {
      name: "Blog Posts & Articles",
      description: "AI-generated blog posts, articles, and long-form content optimized for SEO",
      icon: <FileText className="w-8 h-8" />,
      features: ["SEO Optimization", "Multiple Formats", "Research Integration", "Tone Customization"],
      examples: ["Tech articles", "Industry insights", "Product reviews", "How-to guides"]
    },
    {
      name: "Social Media Content",
      description: "Engaging social media posts, captions, and content for all platforms",
      icon: <Share2 className="w-8 h-8" />,
      features: ["Platform Optimization", "Hashtag Generation", "Engagement Focus", "Visual Integration"],
      examples: ["Twitter threads", "LinkedIn posts", "Instagram captions", "Facebook updates"]
    },
    {
      name: "Marketing Copy",
      description: "Compelling marketing copy for ads, emails, and promotional materials",
      icon: <Target className="w-8 h-8" />,
      features: ["Conversion Focus", "A/B Testing", "Brand Voice", "Call-to-Action"],
      examples: ["Email campaigns", "Ad copy", "Landing pages", "Sales letters"]
    },
    {
      name: "Technical Documentation",
      description: "Comprehensive technical documentation and user guides",
      icon: <Code className="w-8 h-8" />,
      features: ["Code Examples", "API Documentation", "User Manuals", "Troubleshooting"],
      examples: ["API docs", "User guides", "Technical specs", "Tutorial content"]
    },
    {
      name: "Video Scripts",
      description: "Professional video scripts for marketing, training, and educational content",
      icon: <Video className="w-8 h-8" />,
      features: ["Story Structure", "Visual Cues", "Timing Optimization", "Engagement Hooks"],
      examples: ["Product demos", "Training videos", "Marketing ads", "Educational content"]
    },
    {
      name: "Email Campaigns",
      description: "Personalized email campaigns and automated sequences",
      icon: <Mail className="w-8 h-8" />,
      features: ["Personalization", "Segmentation", "Automation", "Performance Tracking"],
      examples: ["Newsletters", "Welcome series", "Promotional emails", "Follow-up sequences"]
    }
  ];

  const features = [
    {
      title: "Multi-Format Support",
      description: "Generate content in various formats including text, images, videos, and interactive content",
      icon: <FileText className="w-6 h-6" />,
      stats: "15+ formats"
    },
    {
      title: "Brand Voice Consistency",
      description: "Maintain consistent brand voice and tone across all generated content",
      icon: <Brain className="w-6 h-6" />,
      stats: "100% consistent"
    },
    {
      title: "SEO Optimization",
      description: "Automatically optimize content for search engines and improve rankings",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "40% better SEO"
    },
    {
      title: "Real-time Generation",
      description: "Generate high-quality content in real-time with instant delivery",
      icon: <Zap className="w-6 h-6" />,
      stats: "5x faster"
    },
    {
      title: "Multi-language Support",
      description: "Generate content in multiple languages with cultural context awareness",
      icon: <Globe className="w-6 h-6" />,
      stats: "50+ languages"
    },
    {
      title: "Content Analytics",
      description: "Track performance and optimize content based on engagement metrics",
      icon: <Target className="w-6 h-6" />,
      stats: "Real-time insights"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99/month",
      description: "Perfect for small businesses and individual creators",
      features: [
        "1,000 content pieces/month",
        "5 content types",
        "Basic templates",
        "Email support",
        "Standard quality"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "10,000 content pieces/month",
        "All content types",
        "Premium templates",
        "Priority support",
        "High quality",
        "Brand voice training",
        "A/B testing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited content",
        "Custom integrations",
        "Dedicated support",
        "Custom templates",
        "API access",
        "White-label options",
        "Advanced analytics"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "1M+", label: "Content Pieces Generated", icon: <FileText className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "5x", label: "Faster Content Creation", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "AI-Powered Generation", icon: <Brain className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Content Marketing Agency",
      role: "Creative Director",
      content: "Zion's AI content generation has revolutionized our workflow. We can now produce 10x more content with the same team.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Platform",
      role: "Marketing Manager",
      content: "The quality of AI-generated content is incredible. It's indistinguishable from human-written content and saves us hours every day.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Tech Startup",
      role: "Content Strategist",
      content: "The brand voice consistency is amazing. Our AI-generated content perfectly matches our brand tone across all channels.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Content Generation - Zion Tech Group | Automated Content Creation"
        description="Transform your content strategy with AI-powered content generation. Create blog posts, social media content, marketing copy, and more with our advanced AI technology."
        keywords="AI content generation, automated content, content creation, blog writing, social media content, marketing copy, AI writing tools"
        canonical="https://ziontechgroup.com/ai-content-generation"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Content Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Content Generation
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your content strategy with our advanced AI-powered content generation platform. 
            Create high-quality, engaging content at scale across all channels and formats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Creating Content
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Video className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Content Types We Generate
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI can create virtually any type of content you need for your business
            </p>
          </div>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {type.name}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {type.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-xs">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2 text-sm">Examples:</h4>
                  <div className="flex flex-wrap gap-1">
                    {type.examples.map((example, idx) => (
                      <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create exceptional content at scale
            </p>
          </div>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {feature.description}
                </p>
                <div className="text-cyan-400 font-bold text-lg">{feature.stats}</div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your content needs
            </p>
          </div>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${
                  plan.popular ? 'ring-2 ring-cyan-500' : ''
                }`}
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
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
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
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI content generation is transforming businesses
            </p>
          </div>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
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
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using AI to create exceptional content at scale. 
            Start generating content that engages, converts, and drives results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Creating Content
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Video className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentGenerationPage;