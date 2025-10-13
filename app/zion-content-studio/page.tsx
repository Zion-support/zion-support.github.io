import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PenTool, 
  Image, 
  Video, 
  Music, 
  Zap, 
  CheckCircle, 
  Globe, 
  Brain,
  ArrowRight,
  Star,
  Clock,
  Target,
  Smartphone,
  Monitor,
  Server,
  Users,
  Award,
  Palette,
  Type,
  Camera
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionContentStudio = () => {
  const features = [
    {
      title: "AI Content Generation",
      description: "Generate high-quality content using advanced AI models trained on millions of successful campaigns.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multi-Media Creation",
      description: "Create stunning visuals, videos, and audio content with our integrated creative suite.",
      icon: <Palette className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Brand Consistency",
      description: "Maintain brand consistency across all content with automated style guides and templates.",
      icon: <Type className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time with live editing and commenting features.",
      icon: <Users className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const contentTypes = [
    {
      title: "Blog Posts",
      description: "AI-generated blog posts with SEO optimization",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      title: "Social Media",
      description: "Engaging social media posts for all platforms",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Video Content",
      description: "Professional video creation and editing tools",
      icon: <Video className="w-6 h-6" />
    },
    {
      title: "Graphics & Images",
      description: "Stunning visuals and infographics",
      icon: <Image className="w-6 h-6" />
    },
    {
      title: "Audio Content",
      description: "Podcasts, voiceovers, and music creation",
      icon: <Music className="w-6 h-6" />
    },
    {
      title: "Presentations",
      description: "Dynamic presentations and slideshows",
      icon: <Monitor className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$49",
      period: "/month",
      description: "Perfect for individual creators",
      features: [
        "100 AI-generated pieces/month",
        "Basic templates",
        "Standard quality exports",
        "Email support",
        "1 user account",
        "5GB storage"
      ],
      popular: false
    },
    {
      name: "Studio",
      price: "$149",
      period: "/month",
      description: "Ideal for creative teams",
      features: [
        "500 AI-generated pieces/month",
        "Premium templates",
        "High-quality exports",
        "Priority support",
        "5 user accounts",
        "50GB storage",
        "Team collaboration",
        "Brand kit"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited AI generation",
        "Custom templates",
        "4K exports",
        "24/7 phone support",
        "Unlimited users",
        "Unlimited storage",
        "API access",
        "White-label solution"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "1M+", label: "Content Pieces Created", icon: <PenTool className="w-6 h-6" /> },
    { number: "95%", label: "Time Saved", icon: <Zap className="w-6 h-6" /> },
    { number: "50+", label: "Content Templates", icon: <Type className="w-6 h-6" /> },
    { number: "10K+", label: "Happy Creators", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion Content Studio - AI-Powered Content Creation Platform | Zion Tech Group"
        description="Create stunning content with Zion Content Studio. AI-powered content generation, multi-media creation tools, and brand consistency features for modern creators."
        keywords="content creation, AI content, video editing, graphic design, content marketing, creative tools, Zion Content Studio"
        canonical="https://ziontechgroup.com/zion-content-studio"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <PenTool className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">#1 Content Platform 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Zion Content Studio
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Create stunning content with our AI-powered creative suite. 
            Generate, design, and collaborate on content that converts.
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
              href="/demo"
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
              Creative Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to create professional content that engages and converts.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Content Types Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Content Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create any type of content with our comprehensive creative tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((content, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {content.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {content.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {content.description}
                </p>
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
              Creative Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your creative needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Creating Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of creators using Zion Content Studio to produce amazing content. 
            Start your free trial and unleash your creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<PenTool className="w-5 h-5" />}
            >
              Start Creating
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionContentStudio;