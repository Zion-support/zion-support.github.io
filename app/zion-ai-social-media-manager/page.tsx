import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Globe, 
  BarChart3, 
  Calendar, 
  Hash, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Zap,
  Target,
  MessageSquare,
  Image,
  Video,
  Share2
} from "lucide-react";

const ZionAiSocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Multi-Platform Scheduling",
      description: "Schedule posts across Facebook, Instagram, Twitter, LinkedIn, and TikTok with one click",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Hash className="w-6 h-6" />,
      title: "Hashtag Optimization",
      description: "AI-powered hashtag research and optimization for maximum reach and engagement",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Comprehensive analytics and insights to track your social media performance",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Content Calendar",
      description: "Plan and organize your content with our intuitive calendar interface",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience Insights",
      description: "Understand your audience better with detailed demographic and behavioral data",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Auto-Posting",
      description: "Automatically post content at optimal times for maximum engagement",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    "Save 10+ hours per week on social media management",
    "Increase engagement by up to 300%",
    "Grow your following organically",
    "Track ROI and performance metrics",
    "Automate repetitive tasks",
    "Access to premium templates and content ideas"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$29/month",
      features: ["3 social accounts", "30 posts/month", "Basic analytics", "Email support"]
    },
    {
      name: "Professional",
      price: "$79/month",
      features: ["10 social accounts", "Unlimited posts", "Advanced analytics", "Priority support"]
    },
    {
      name: "Enterprise",
      price: "$199/month",
      features: ["Unlimited accounts", "Team collaboration", "Custom integrations", "24/7 support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Social Media Manager - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered social media management tool that automates posting, optimizes content, and grows your following." />
        <meta name="keywords" content="social media manager, AI social media, content scheduling, social media automation, social media analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-8">
              <Globe className="w-4 h-4 mr-2" />
              AI Social Media Manager
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion AI <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Social Media Manager</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Automate your social media presence with AI-powered content creation, scheduling, and analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white/60 transition-all duration-300 backdrop-blur-sm">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage your social media presence effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Solution?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your social media strategy with proven benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                  plan.name === 'Professional' ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {plan.name === 'Professional' && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-sm font-semibold text-yellow-400">Most Popular</span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                
                <div className="text-3xl font-bold text-white mb-6">
                  {plan.price}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-6 rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Start your free trial today and see the difference AI can make in your social media strategy.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

export default ZionAiSocialMediaManagerPage;