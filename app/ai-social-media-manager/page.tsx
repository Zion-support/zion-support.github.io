import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Share2, BarChart3, Calendar, Users, TrendingUp, CheckCircle, ArrowRight, Star, Zap, Target, Clock, Shield, Globe } from 'lucide-react';

const AiSocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Multi-Platform Management",
      description: "Manage all your social media accounts from one unified dashboard",
      benefits: ["Facebook", "Instagram", "Twitter", "LinkedIn", "TikTok", "YouTube", "Pinterest", "Snapchat"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Comprehensive analytics and insights to track your social media performance",
      benefits: ["Engagement metrics", "Reach analysis", "Follower growth", "Content performance", "ROI tracking", "Competitor analysis"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Scheduling",
      description: "AI-powered content scheduling for optimal engagement times",
      benefits: ["Optimal timing", "Content calendar", "Bulk scheduling", "Time zone management", "Auto-posting", "Queue management"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Audience Insights",
      description: "Deep understanding of your audience demographics and behavior",
      benefits: ["Demographics", "Interests", "Behavior patterns", "Engagement preferences", "Peak activity times", "Content preferences"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Optimization",
      description: "AI-driven strategies to increase followers and engagement",
      benefits: ["Growth strategies", "Engagement optimization", "Content recommendations", "Hashtag suggestions", "Trend analysis", "Viral content detection"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Content Generation",
      description: "AI-powered content creation for posts, captions, and hashtags",
      benefits: ["Post generation", "Caption writing", "Hashtag research", "Image suggestions", "Video ideas", "Story content"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79/month",
      description: "Perfect for small businesses and influencers",
      features: [
        "Up to 5 social accounts",
        "Basic analytics",
        "Content scheduling",
        "AI content suggestions",
        "Email support",
        "Basic templates"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 15 social accounts",
        "Advanced analytics",
        "Team collaboration",
        "AI content generation",
        "Priority support",
        "Custom templates",
        "Competitor analysis",
        "Advanced scheduling"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited social accounts",
        "White-label solution",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom reporting",
        "API access",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Save 10+ Hours Weekly",
      description: "Automate your social media management and focus on growing your business"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Increase Engagement by 300%",
      description: "AI-optimized content and timing for maximum engagement"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and data encryption"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Manage multiple time zones and languages for international audiences"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Social Media Manager Pro - Zion Tech Group | Automated Social Media Management</title>
        <meta name="description" content="Transform your social media presence with AI-powered content creation, scheduling, and analytics. Increase engagement by 300% and save 10+ hours weekly." />
        <meta name="keywords" content="social media management, AI content creation, social media automation, social media analytics, content scheduling, social media marketing" />
        <meta property="og:title" content="AI Social Media Manager Pro - Zion Tech Group" />
        <meta property="og:description" content="AI-powered social media management platform for modern businesses" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Social Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Manager Pro</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your social media presence with AI-powered content creation, scheduling, and analytics. 
                Increase engagement by 300% and save 10+ hours weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage and grow your social media presence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                    <p className="text-gray-400">Billed monthly</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Platform?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using our AI-powered social media management
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Social Media?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free trial today and see the difference AI-powered social media management can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiSocialMediaManagerPage;
