import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, BarChart3, ArrowRight, Star, CheckCircle, Clock, Users, Award, TrendingUp, Cpu, Database, Globe, Sparkles, PenTool, Video, Image, FileText } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIContentCreationStudioPage = () => {
  const features = [
    {
      title: "AI-Powered Writing",
      description: "Generate high-quality content for blogs, articles, social media, and marketing materials with advanced AI",
      icon: <PenTool className="w-6 h-6" />,
      benefits: ["SEO-optimized content", "Multiple writing styles", "Plagiarism-free"]
    },
    {
      title: "Video Generation",
      description: "Create professional videos from text prompts with AI-generated visuals, voiceovers, and animations",
      icon: <Video className="w-6 h-6" />,
      benefits: ["Text-to-video", "Multiple formats", "Professional quality"]
    },
    {
      title: "Image Creation",
      description: "Generate stunning images, graphics, and artwork using advanced AI image generation technology",
      icon: <Image className="w-6 h-6" />,
      benefits: ["High-resolution output", "Multiple art styles", "Commercial license"]
    },
    {
      title: "Content Optimization",
      description: "Automatically optimize content for SEO, readability, and engagement across all platforms",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["SEO scoring", "Readability analysis", "Engagement prediction"]
    }
  ];

  const contentTypes = [
    {
      title: "Blog Posts & Articles",
      description: "Create engaging blog posts and articles with AI-powered research and writing",
      impact: "10x faster content creation",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Social Media Content",
      description: "Generate posts, captions, and stories for all major social media platforms",
      impact: "Increase engagement by 200%",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Marketing Materials",
      description: "Create ads, email campaigns, and promotional content with AI optimization",
      impact: "Boost conversions by 150%",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Video Content",
      description: "Produce explainer videos, tutorials, and promotional videos with AI assistance",
      impact: "Reduce production time by 80%",
      icon: <Video className="w-8 h-8" />
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$99",
      period: "per month",
      description: "Perfect for individual creators and small teams",
      features: [
        "Up to 50 content pieces/month",
        "Basic AI writing tools",
        "Standard image generation",
        "Email support",
        "Basic templates",
        "Social media integration"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for content teams and agencies",
      features: [
        "Up to 200 content pieces/month",
        "Advanced AI writing tools",
        "Premium image generation",
        "Priority support",
        "Custom templates",
        "Video generation",
        "Team collaboration",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "per month",
      description: "For large organizations with high content needs",
      features: [
        "Unlimited content pieces",
        "Premium AI writing tools",
        "Unlimited image generation",
        "24/7 dedicated support",
        "Custom AI training",
        "White-label solutions",
        "API access",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Lisa Rodriguez",
      company: "Digital Marketing Agency",
      role: "Content Director",
      content: "The AI content creation studio has revolutionized our workflow. We can now produce 10x more content with the same team, and the quality is consistently high.",
      rating: 5
    },
    {
      name: "Mark Thompson",
      company: "E-commerce Solutions",
      role: "Marketing Manager",
      content: "The video generation feature is incredible. We can create professional product videos in minutes instead of days. It's like having a full production team on demand.",
      rating: 5
    },
    {
      name: "Sarah Kim",
      company: "Tech Blog Network",
      role: "Editor-in-Chief",
      content: "The AI writing tools have helped us maintain consistent quality across all our publications. The SEO optimization features have also improved our search rankings significantly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Content Creation Studio - AI-Powered Content Generation | Zion Tech Group"
        description="Revolutionary AI-powered content creation platform for writing, video generation, image creation, and content optimization. Create professional content 10x faster with AI."
        keywords="AI content creation, content generation, AI writing, video generation, image creation, content marketing, AI content studio"
        canonical="https://ziontechgroup.com/ai-content-creation-studio"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-purple-500/20 border border-green-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">AI-Powered Content Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-purple-400 to-pink-400">
              AI Content Creation Studio
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create professional content 10x faster with our revolutionary AI-powered content creation platform. 
            Generate articles, videos, images, and marketing materials with advanced artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Video className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">10x</div>
              <div className="text-gray-300 text-sm">Faster content creation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">200%</div>
              <div className="text-gray-300 text-sm">Engagement increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">80%</div>
              <div className="text-gray-300 text-sm">Time savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Content formats</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced artificial intelligence capabilities for every type of content creation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Create Any Type of Content
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From blog posts to videos, create professional content for every platform and purpose
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((contentType, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {contentType.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{contentType.title}</h3>
                <p className="text-gray-300 mb-4">{contentType.description}</p>
                <div className="text-green-400 font-semibold">{contentType.impact}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for creators and businesses of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-green-500/50 ring-2 ring-green-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">{plan.price}</div>
                  <div className="text-gray-300">{plan.period}</div>
                  <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full justify-center"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI content creation is transforming businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
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
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-green-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Amazing Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start creating professional content 10x faster with AI-powered tools
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Video className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Contact us: <span className="text-green-400">kleber@ziontechgroup.com</span> | <span className="text-green-400">+1 302 464 0950</span></p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIContentCreationStudioPage;