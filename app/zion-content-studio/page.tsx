import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PenTool, 
  Image, 
  Video, 
  FileText, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Brain,
  Palette,
  Camera,
  Mic,
  Edit,
  Target,
  Award,
  Clock,
  Smartphone,
  Monitor,
  Users,
  Settings,
  Download,
  Upload,
  Share2,
  Sparkles
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionContentStudio = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Content Generation",
      description: "Generate high-quality content using advanced AI models trained on millions of successful campaigns",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Visual Design Tools",
      description: "Professional design tools with templates, stock photos, and custom branding options",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Production",
      description: "Create engaging videos with AI-powered editing, auto-captions, and professional templates",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Content Optimization",
      description: "AI-powered SEO optimization and performance analytics to maximize content reach",
      color: "from-orange-500 to-red-500"
    }
  ];

  const contentTypes = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Blog Posts & Articles",
      description: "AI-generated blog content with SEO optimization and research-backed insights",
      price: "From $19/month"
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Social Media Graphics",
      description: "Eye-catching social media posts, stories, and ads with brand consistency",
      price: "From $29/month"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Content",
      description: "Professional video creation with AI editing, captions, and effects",
      price: "From $49/month"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Marketing Copy",
      description: "Compelling ad copy, email campaigns, and landing page content",
      price: "From $39/month"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Audio Content",
      description: "Podcast scripts, voice-overs, and audio content with AI voice synthesis",
      price: "From $39/month"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photography",
      description: "AI-enhanced photo editing, background removal, and professional retouching",
      price: "From $29/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$29",
      period: "per month",
      description: "Perfect for individual creators and freelancers",
      features: [
        "50 AI-generated content pieces",
        "Basic design templates",
        "Standard video editing",
        "Social media scheduling",
        "Email support",
        "1 brand kit"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Advanced features for growing businesses",
      features: [
        "Unlimited AI content generation",
        "Premium design templates",
        "Advanced video editing",
        "Multi-platform publishing",
        "Priority support",
        "5 brand kits",
        "Team collaboration",
        "Analytics dashboard"
      ],
      popular: true,
      color: "from-cyan-500 to-purple-500"
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "per month",
      description: "Complete content solution for large teams",
      features: [
        "Unlimited everything",
        "Custom AI models",
        "White-label solution",
        "Advanced analytics",
        "24/7 dedicated support",
        "Unlimited brand kits",
        "Custom integrations",
        "Dedicated account manager",
        "API access"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const tools = [
    {
      icon: <Edit className="w-6 h-6" />,
      title: "AI Writing Assistant",
      description: "Advanced writing tools with grammar check, tone adjustment, and style suggestions",
      status: "Available"
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Image Generator",
      description: "Create stunning visuals from text descriptions using AI image generation",
      status: "Available"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Editor",
      description: "Professional video editing with AI-powered features and auto-captions",
      status: "Available"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice Synthesis",
      description: "Convert text to speech with natural-sounding AI voices in multiple languages",
      status: "Available"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "SEO Optimizer",
      description: "AI-powered SEO optimization for better search engine rankings",
      status: "Available"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Social Scheduler",
      description: "Schedule and publish content across all major social media platforms",
      status: "Available"
    }
  ];

  const stats = [
    { number: "10M+", label: "Content Pieces Created", icon: <FileText className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Content Templates", icon: <Palette className="w-6 h-6" /> },
    { number: "24/7", label: "AI Content Generation", icon: <Zap className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Alex Rivera",
      company: "Digital Marketing Agency",
      role: "Content Manager",
      content: "Zion Content Studio has increased our content production by 300%. The AI quality is incredible.",
      rating: 5,
      avatar: "AR"
    },
    {
      name: "Emma Chen",
      company: "E-commerce Brand",
      role: "Marketing Director",
      content: "The video editing tools are amazing. We create professional content in minutes, not hours.",
      rating: 5,
      avatar: "EC"
    },
    {
      name: "James Wilson",
      company: "SaaS Startup",
      role: "Growth Manager",
      content: "The AI writing assistant has transformed our blog. Our organic traffic increased by 150%.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion Content Studio - AI-Powered Content Creation Platform | Zion Tech Group"
        description="Create stunning content with AI-powered tools for writing, design, video, and social media. Boost your content marketing with Zion Content Studio."
        keywords="content creation, AI writing, video editing, social media content, content marketing, design tools, content automation"
        canonical="https://ziontechgroup.com/zion-content-studio"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">AI-Powered Content Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Zion Content Studio
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create stunning content with AI-powered tools for writing, design, video, and social media. 
            Boost your content marketing with professional-quality content in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<PenTool className="w-5 h-5" />}
            >
              Start Creating
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
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
              Powerful Content Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to create, edit, and publish professional content across all platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Content Types We Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create any type of content you need with our comprehensive suite of AI-powered tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((content, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {content.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {content.description}
                </p>
                <div className="text-purple-400 font-semibold">{content.price}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Content Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI-powered tools for every aspect of content creation and management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-300 mb-3 text-sm">{tool.description}</p>
                <span className="text-green-400 text-sm font-medium">{tool.status}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-800/50 to-pink-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Content Creation Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your content creation needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-purple-500/50 ring-2 ring-purple-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                  icon={<ArrowRight className="w-5 h-5" />}
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
              See what content creators and marketers say about Zion Content Studio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold mr-3">
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
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Creating Amazing Content
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of creators using Zion Content Studio to produce professional content at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<PenTool className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="tel:+13024640950"
                variant="outline"
                size="lg"
                icon={<Smartphone className="w-5 h-5" />}
              >
                Call +1 302 464 0950
              </FuturisticButton>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionContentStudio;