import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  Calendar, 
  BarChart3, 
  Users, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Smartphone,
  Monitor,
  Globe,
  Heart,
  MessageCircle,
  TrendingUp,
  Target,
  Clock,
  DollarSign,
  Shield,
  Sparkles,
  Bot,
  Image,
  Video,
  Hash,
  AtSign,
  Eye,
  ThumbsUp,
  Share,
  Bookmark
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const ZionAISocialMediaManager = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      title: "AI Content Generation",
      description: "Generate engaging posts, captions, and hashtags using advanced AI algorithms tailored to your brand voice and audience preferences."
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
      title: "Smart Scheduling",
      description: "Automatically schedule posts at optimal times based on your audience's activity patterns and engagement data."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and insights to track performance, engagement rates, and ROI across all social platforms."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Audience Insights",
      description: "Deep audience analysis to understand demographics, interests, and behavior patterns for better targeting."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-400" />,
      title: "Trend Monitoring",
      description: "Real-time trend detection and hashtag monitoring to keep your content relevant and engaging."
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: "Brand Safety",
      description: "AI-powered content moderation to ensure all posts align with your brand guidelines and platform policies."
    }
  ];

  const platforms = [
    { name: "Facebook", icon: <Globe className="w-5 h-5" />, color: "text-blue-500" },
    { name: "Instagram", icon: <Image className="w-5 h-5" />, color: "text-pink-500" },
    { name: "Twitter", icon: <Hash className="w-5 h-5" />, color: "text-blue-400" },
    { name: "LinkedIn", icon: <Users className="w-5 h-5" />, color: "text-blue-600" },
    { name: "TikTok", icon: <Video className="w-5 h-5" />, color: "text-black" },
    { name: "YouTube", icon: <Video className="w-5 h-5" />, color: "text-red-500" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses and individual creators",
      features: [
        "3 Social Media Accounts",
        "50 AI-Generated Posts/Month",
        "Basic Analytics",
        "Content Calendar",
        "1 User Account",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "10 Social Media Accounts",
        "200 AI-Generated Posts/Month",
        "Advanced Analytics & Insights",
        "Team Collaboration",
        "5 User Accounts",
        "Priority Support",
        "Custom Brand Voice",
        "Hashtag Research"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with extensive social media needs",
      features: [
        "Unlimited Social Media Accounts",
        "Unlimited AI-Generated Posts",
        "Full Analytics Suite",
        "White-label Options",
        "Unlimited User Accounts",
        "24/7 Phone Support",
        "Custom Integrations",
        "Dedicated Account Manager"
      ],
      popular: false
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Social Media Manager",
    "description": "AI-powered social media management platform for automated content creation, scheduling, and analytics",
    "url": "https://ziontechgroup.com/zion-ai-social-media-manager",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1247"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Social Media Manager - AI-Powered Social Media Management"
        description="Transform your social media presence with Zion AI Social Media Manager. Automated content creation, smart scheduling, and comprehensive analytics for all major platforms."
        keywords="AI social media manager, social media automation, content generation, social media analytics, social media scheduling"
        structuredData={structuredData}
      />
      
      <ResponsiveContainer className="pt-20 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Social Media Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion AI Social Media Manager
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your social media strategy with AI-powered content creation, 
            smart scheduling, and comprehensive analytics across all major platforms.
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
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">10M+</div>
            <div className="text-gray-400">Posts Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-gray-400">Time Saved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">300%</div>
            <div className="text-gray-400">Engagement Boost</div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Powerful Features for Modern Social Media
          </h2>
          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>

        {/* Supported Platforms */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Connect All Your Social Platforms
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className={`${platform.color} mb-2 flex justify-center`}>
                  {platform.icon}
                </div>
                <div className="text-white font-medium">{platform.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard key={index} className={`p-8 ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
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
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using Zion AI Social Media Manager
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Start Your Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="tel:+13024640950"
              variant="outline"
              size="lg"
              icon={<Phone className="w-5 h-5" />}
            >
              Call +1 302 464 0950
            </FuturisticButton>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default ZionAISocialMediaManager;
