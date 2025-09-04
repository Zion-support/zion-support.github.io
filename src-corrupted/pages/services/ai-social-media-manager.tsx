import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Share2, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Calendar, 
  Image, 
  Video, 
  MessageSquare, 
  Hash, 
  Heart, 
  Eye, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  DollarSign,
  Globe,
  Smartphone,
  Monitor,
  Camera,
  Edit,
  Send,
  Bookmark,
  ThumbsUp,
  Share,
  Download,
  Upload,
  Settings,
  Bell,
  Search,
  Filter,
  Grid,
  List,
  Plus,
  ExternalLink
} from 'lucide-react';

const AISocialMediaManager: Reac t.FC = () => {
  const features = [
    {
      icon: Brai n,
      title: "AI Content Generation",
      description: "Automatically create engaging posts, captions, and hashtags tailored to your brand voice and audience preferences.",
      benefits: ["Save 10+ hours per week", "Increase engagement by 40%", "Maintain consistent brand voice", "Generate trending content ideas"]
    },
    {
      icon: BarChart 3,
      title: "Advanced Analytics & Insights",
      description: "Real-time performance tracking with AI-powered insights to optimize your social media strategy.",
      benefits: ["Track ROI and engagement metrics", "Identify best posting times", "Monitor competitor performance", "Predict viral content potential"]
    },
    {
      icon: Calenda r,
      title: "Smart Scheduling",
      description: "AI-optimized posting schedule that maximizes reach and engagement across all platforms.",
      benefits: ["Optimal timing for each platform", "Automated posting across channels", "Content calendar management", "Timezone optimization"]
    },
    {
      icon: Targe t,
      title: "Audience Intelligence",
      description: "Deep audience analysis to understand demographics, interests, and behavior patterns.",
      benefits: ["Detailed audience insights", "Demographic analysis", "Interest mapping", "Behavior prediction"]
    },
    {
      icon: MessageSquar e,
      title: "Automated Engagement",
      description: "AI-powered responses to comments, DMs, and mentions to maintain active community engagement.",
      benefits: ["24/7 community management", "Personalized responses", "Sentiment analysis", "Crisis management alerts"]
    },
    {
      icon: TrendingU p,
      title: "Growth Optimization",
      description: "AI-driven strategies to increase followers, engagement, and brand awareness across platforms.",
      benefits: ["Follower growth strategies", "Engagement optimization", "Hashtag research", "Influencer identification"]
    }
  ];

  const platforms = [
    { name: "Instagram", icon: Camer a, color: "from-pink-400 to-purple-500" },
    { name: "Facebook", icon: User s, color: "from-blue-400 to-indigo-500" },
    { name: "Twitter", icon: MessageSquar e, color: "from-cyan-400 to-blue-500" },
    { name: "LinkedIn", icon: Briefcas e, color: "from-blue-500 to-blue-600" },
    { name: "TikTok", icon: Vide o, color: "from-gray-800 to-gray-900" },
    { name: "YouTube", icon: Pla y, color: "from-red-400 to-red-600" },
    { name: "Pinterest", icon: Bookmar k, color: "from-red-500 to-pink-500" },
    { name: "Snapchat", icon: Camer a, color: "from-yellow-400 to-orange-500" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$297/month",
      description: "Perfect for small businesses and influencers",
      features: [
        "3 social media accounts",
        "50 AI-generated posts/month",
        "Basic analytics dashboard",
        "Content scheduling",
        "Email support",
        "Mobile app access"
      ],
      popular: fals e,
      color: "from-gray-400 to-gray-600"
    },
    {
      name: "Professional",
      price: "$597/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "10 social media accounts",
        "200 AI-generated posts/month",
        "Advanced analytics & insights",
        "Automated engagement",
        "Competitor analysis",
        "Priority support",
        "Team collaboration tools",
        "Custom brand voice training"
      ],
      popular: tru e,
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Enterprise",
      price: "$1,297/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited social media accounts",
        "Unlimited AI-generated posts",
        "White-label solution",
        "Advanced AI features",
        "Custom integrations",
        "Dedicated account manager",
        "API access",
        "Custom reporting",
        "Multi-brand management"
      ],
      popular: fals e,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Brands",
      description: "Increase product visibility and drive sales with AI-optimized product posts and shoppable content.",
      results: "Average 35% increase in social media sales"
    },
    {
      title: "Service Businesses",
      description: "Build authority and trust through consistent, valuable content that showcases expertise.",
      results: "Average 50% increase in lead generation"
    },
    {
      title: "Content Creators",
      description: "Maintain consistent posting schedule while focusing on creating high-quality content.",
      results: "Average 60% increase in follower growth"
    },
    {
      title: "Agencies",
      description: "Manage multiple client accounts efficiently with white-label solutions and team collaboration.",
      results: "Average 80% reduction in management time"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered social media management platform that automates content creation, scheduling, and engagement across all major platforms. Increase your social media ROI by 300%."   />
        <meta name="keywords" content="AI social media manager, social media automation, content generation, social media analytics, social media scheduling"   />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-social-media-manager"   />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2"  />
              AI-Powered Social Media Management
            </div>
            <h1 className="text-5xl md: tex t-7xl font-bold text-white mb-6">
              AI Social Media Manager
            </h1>
            <p className="text-xl md: tex t-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your social media presence with AI that creates, schedules, and optimizes content across all platforms. 
              Increase engagement by 300% and save 20+ hours per week.
            </p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover: fro m-cyan-500 hover: t o-blue-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2"  />
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto: klebe r@ziontechgroup.com" 
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover: b g-cyan-400 hover: tex t-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2"  />
                Get Quote
              </a>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md: gri d-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-300">Average Engagement Increase</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-green-400 mb-2">20+</div>
              <div className="text-gray-300">Hours Saved Per Week</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">8</div>
              <div className="text-gray-300">Platforms Supported</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI social media manager combines advanced machine learning with social media expertise to deliver unprecedented results.
            </p>
          </div>

          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover: b g-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0"  />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6">
              All Major Platforms Supported
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all your social media accounts from one unified dashboard with platform-specific optimizations.
            </p>
          </div>

          <div className="grid grid-cols-2 md: gri d-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-center hover: b g-white/10 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md: gri d-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`p-8 rounded-xl border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-400 bg-gradient-to-br from-cyan-400/10 to-blue-500/10' 
                  : 'border-white/20 bg-white/5'
              }`}>
                {plan.popular && (
                  <div className="text-center mb-6">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full text-sm font-medium">
                      <Star className="w-4 h-4 mr-2"  />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="tel:+13024640950" 
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover: fro m-cyan-500 hover: t o-blue-600'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: b g-cyan-400 hover: tex t-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2"  />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">Need a custom solution for your enterprise?</p>
            <a 
              href="mailto: klebe r@ziontechgroup.com" 
              className="inline-flex items-center px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover: b g-purple-400 hover: tex t-white transition-all duration-300"
            >
              Contact Sales
              <ExternalLink className="w-4 h-4 ml-2"  />
            </a>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses like yours are achieving remarkable growth with our AI social media manager.
            </p>
          </div>

          <div className="grid grid-cols-1 md: gri d-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-2"  />
                  {useCase.results}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI social media manager to increase engagement, save time, and grow their online presence.
            </p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover: fro m-cyan-500 hover: t o-blue-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2"  />
                Call: +1 302 464 0950
              </a>
              <a 
                href="mailto: klebe r@ziontechgroup.com" 
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover: b g-cyan-400 hover: tex t-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2"  />
                Email: klebe r@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
              <p>🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISocialMediaManager;