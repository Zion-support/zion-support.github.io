import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Share2, 
  BarChart3, 
  Brain, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Smartphone,
  Monitor,
  Calendar,
  Users,
  Target,
  TrendingUp,
  Image,
  Video,
  MessageCircle,
  Hash,
  Clock,
  Award,
  Play
} from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';
import FuturisticCard from '../../components/FuturisticCard';
import FuturisticButton from '../../components/FuturisticButton';
import ResponsiveContainer from '../../components/ResponsiveContainer';

const ZionAISocialMediaManagerPage = () => {
  const features = [
    {
      title: "AI Content Generation",
      description: "Create engaging posts, captions, and hashtags using advanced AI algorithms",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Auto Scheduling",
      description: "Intelligent scheduling based on optimal posting times and audience engagement",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive analytics and insights to optimize your social media strategy",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-Platform Management",
      description: "Manage all your social media accounts from one unified dashboard",
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$189",
      period: "per month",
      description: "Perfect for small businesses and individual creators",
      features: [
        "Up to 5 social accounts",
        "Basic content generation",
        "Standard scheduling",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$389",
      period: "per month",
      description: "Ideal for growing businesses and marketing agencies",
      features: [
        "Up to 20 social accounts",
        "Advanced content generation",
        "Smart scheduling",
        "Priority support",
        "Advanced analytics",
        "Hashtag optimization",
        "Competitor analysis"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$789",
      period: "per month",
      description: "For large organizations with complex social media needs",
      features: [
        "Unlimited social accounts",
        "Premium content generation",
        "AI-powered scheduling",
        "24/7 dedicated support",
        "Enterprise analytics",
        "Custom integrations",
        "Team collaboration",
        "White-label solution"
      ],
      popular: false
    }
  ];

  const platforms = [
    {
      name: "Facebook",
      description: "Create and schedule posts, manage pages, and analyze performance",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Instagram",
      description: "Post photos, stories, reels, and IGTV with AI-optimized captions",
      icon: <Image className="w-6 h-6" />,
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "Twitter",
      description: "Tweet, retweet, and engage with followers using AI-generated content",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "LinkedIn",
      description: "Professional content creation and networking optimization",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "TikTok",
      description: "Create viral content with AI-powered video suggestions and trends",
      icon: <Video className="w-6 h-6" />,
      color: "from-pink-500 to-red-500"
    },
    {
      name: "YouTube",
      description: "Optimize video titles, descriptions, and thumbnails for maximum reach",
      icon: <Play className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    }
  ];

  const contentTypes = [
    {
      title: "Text Posts",
      description: "AI-generated captions, tweets, and status updates optimized for engagement",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Image Content",
      description: "Create stunning visuals with AI-generated images and graphics",
      icon: <Image className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Video Content",
      description: "Generate video ideas, scripts, and optimize for different platforms",
      icon: <Video className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Hashtag Strategy",
      description: "AI-powered hashtag research and optimization for maximum reach",
      icon: <Hash className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Digital Marketing Agency",
      role: "Social Media Manager",
      content: "Zion AI Social Media Manager has increased our client engagement by 75% while reducing our content creation time by 60%.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      company: "E-commerce Brand",
      role: "Marketing Director",
      content: "The AI content generation is incredible. We can now maintain consistent posting across all platforms without a large team.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "Personal Brand",
      role: "Content Creator",
      content: "As a solo creator, this tool has been a game-changer. The scheduling and analytics help me stay organized and grow my following.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Social Media Manager - AI-Powered Social Media Management"
        description="Transform your social media strategy with Zion AI Social Media Manager. AI content generation, auto scheduling, and multi-platform management for maximum engagement."
        keywords="social media manager, ai content generation, social media scheduling, social media analytics, content creation, social media automation"
        canonical="https://ziontechgroup.com/zion-ai-social-media-manager"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Globe className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">AI-Powered Social Media</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Zion AI Social Media Manager
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Revolutionize your social media strategy with AI-powered content generation, 
            intelligent scheduling, and comprehensive analytics across all platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Globe className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Social Media Preview Placeholder */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <p className="text-white text-lg">AI Social Media Dashboard</p>
                  <p className="text-gray-400 text-sm">Manage all platforms from one place</p>
                </div>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Social Media Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Take your social media game to the next level with our comprehensive suite of AI-powered tools.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support for All Major Platforms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage your entire social media presence from one unified dashboard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {platform.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {platform.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Generated Content Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create engaging content across all formats with our AI-powered content generation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((contentType, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contentType.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {contentType.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {contentType.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {contentType.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your social media management needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-blue-500/50 hover:shadow-blue-500/25' 
                    : 'border-white/20 hover:shadow-blue-500/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
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

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who are growing their social media presence with our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Start your free trial today and discover the power of AI-driven social media management. 
            No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <Globe className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAISocialMediaManagerPage;