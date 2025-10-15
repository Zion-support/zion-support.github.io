import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Share2, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Zap,
  Shield,
  Clock,
  Award,
  BarChart3,
  Users,
  Heart,
  MessageCircle
} from 'lucide-react';

const AiSocialMediaManagerProPage: React.FC = () => {
  const features = [
    "AI-Powered Content Generation",
    "Automated Post Scheduling",
    "Intelligent Hashtag Optimization",
    "Sentiment Analysis & Monitoring",
    "Competitor Analysis & Insights",
    "Engagement Rate Optimization",
    "Multi-Platform Management",
    "Real-time Performance Analytics",
    "Influencer Identification & Outreach",
    "Crisis Management & Alerts"
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 3 social accounts",
        "Basic AI content generation",
        "Email support",
        "Standard analytics",
        "Basic scheduling"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing brands",
      features: [
        "Up to 10 social accounts",
        "Advanced AI insights",
        "Priority support",
        "Advanced analytics",
        "Influencer outreach",
        "Custom content templates"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited social accounts",
        "Full AI suite & custom models",
        "24/7 dedicated support",
        "White-label solution",
        "Custom development",
        "Advanced team collaboration"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increase Engagement by 300%",
      description: "AI-optimized content and posting times dramatically boost your social media engagement rates."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Save 20+ Hours Weekly",
      description: "Automated content generation and scheduling free up your time for strategic planning."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Grow Followers by 150%",
      description: "Intelligent hashtag optimization and content strategies help you reach the right audience."
    }
  ];

  const stats = [
    { number: "10M+", label: "Posts Managed", icon: <Share2 className="w-6 h-6" /> },
    { number: "300%", label: "Engagement Increase", icon: <Heart className="w-6 h-6" /> },
    { number: "150%", label: "Follower Growth", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Shield className="w-6 h-6" /> }
  ];

  const platforms = [
    { name: "Facebook", color: "from-blue-600 to-blue-800" },
    { name: "Instagram", color: "from-pink-600 to-purple-600" },
    { name: "Twitter", color: "from-cyan-500 to-blue-500" },
    { name: "LinkedIn", color: "from-blue-700 to-blue-900" },
    { name: "TikTok", color: "from-gray-800 to-gray-900" },
    { name: "YouTube", color: "from-red-600 to-red-800" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Social Media Manager Pro - Zion Tech Group | Intelligent Social Media Management</title>
        <meta name="description" content="Revolutionize your social media with AI-powered content generation, automated scheduling, and intelligent analytics. Increase engagement and grow your audience." />
        <meta name="keywords" content="AI social media, content generation, social media automation, engagement optimization, social media analytics, influencer marketing" />
        <meta property="og:title" content="AI Social Media Manager Pro - Intelligent Social Media Management" />
        <meta property="og:description" content="AI-powered social media management platform for enhanced engagement and growth." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-6xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                AI-Powered Social Media Management
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Social Media
                </span>
                <br />
                <span className="text-white">Manager Pro</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Transform your social media presence with AI-powered content generation, 
                automated scheduling, and intelligent analytics. Increase engagement and grow your audience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Supported Platforms</h2>
              <p className="text-gray-300">Manage all your social media accounts from one intelligent dashboard</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Share2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{platform.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Advanced AI capabilities that revolutionize your social media management.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Proven Results</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered social media management delivers measurable business impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your social media needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  tier.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-cyan-500/20'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Social Media?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact us today to schedule a free demo and see how AI Social Media Manager Pro can revolutionize your social presence.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiSocialMediaManagerProPage;