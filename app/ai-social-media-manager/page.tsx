import React from 'react';
import { Link } from "react-router-dom";
import { 
  Brain, 
  Share2, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Calendar,
  Zap,
  Target,
  MessageSquare,
  Image,
  Video,
  Hash,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Smartphone,
  Monitor,
  Laptop
} from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import FuturisticText from "../components/FuturisticText";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";

const AISocialMediaManagerPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Social Media Manager",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": "AI-powered social media management platform that automates content creation, scheduling, and analytics across all major platforms.",
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Content Generation",
      description: "Generate engaging posts, captions, and hashtags using advanced AI algorithms",
      benefits: ["100+ content templates", "Multi-language support", "Brand voice adaptation"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Scheduling",
      description: "Automatically schedule posts at optimal times for maximum engagement",
      benefits: ["Best time detection", "Cross-platform posting", "Content calendar view"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Track performance with detailed insights and ROI metrics",
      benefits: ["Real-time analytics", "Competitor analysis", "Growth tracking"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Audience Insights",
      description: "Understand your audience with AI-powered demographic analysis",
      benefits: ["Demographic breakdown", "Interest mapping", "Engagement patterns"]
    },
    {
      icon: <Hash className="w-8 h-8" />,
      title: "Hashtag Optimization",
      description: "Find trending hashtags and optimize for maximum reach",
      benefits: ["Trending hashtags", "Relevance scoring", "Competitor hashtags"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Auto-Responses",
      description: "AI-powered automated responses to comments and messages",
      benefits: ["24/7 response", "Sentiment analysis", "Custom response templates"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 29,
      period: "month",
      description: "Perfect for small businesses and influencers",
      features: [
        "3 social media accounts",
        "50 AI-generated posts/month",
        "Basic analytics",
        "1 user",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 79,
      period: "month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "10 social media accounts",
        "200 AI-generated posts/month",
        "Advanced analytics",
        "5 users",
        "Priority support",
        "Custom branding",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 199,
      period: "month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited social media accounts",
        "Unlimited AI-generated posts",
        "Full analytics suite",
        "Unlimited users",
        "24/7 phone support",
        "White-label solution",
        "API access",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const platforms = [
    { name: "Facebook", icon: "📘", users: "2.9B" },
    { name: "Instagram", icon: "📷", users: "2B" },
    { name: "Twitter", icon: "🐦", users: "450M" },
    { name: "LinkedIn", icon: "💼", users: "900M" },
    { name: "TikTok", icon: "🎵", users: "1B" },
    { name: "YouTube", icon: "📺", users: "2.7B" }
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      company: "Digital Marketing Agency",
      role: "Social Media Manager",
      content: "AI Social Media Manager increased our client engagement by 300% and saved us 20 hours per week on content creation.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "David Chen",
      company: "E-commerce Store",
      role: "Marketing Director",
      content: "The AI content generation is incredibly accurate and the scheduling feature is a game-changer for our business.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Emily Rodriguez",
      company: "Fitness Influencer",
      role: "Content Creator",
      content: "This tool has revolutionized how I manage my social media. The analytics insights are incredibly valuable.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Social Media Manager - Automated Social Media Management | Zion Tech Group"
        description="AI-powered social media management platform that automates content creation, scheduling, and analytics. Start your free trial today!"
        keywords="AI social media manager, social media automation, content generation, social media analytics, social media scheduling, AI marketing tools"
        canonical="https://ziontechgroup.com/ai-social-media-manager"
        structuredData={structuredData}
      />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <FuturisticText className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                AI Social Media
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Manager
                </span>
              </FuturisticText>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Automate your social media presence with AI-powered content creation, 
                smart scheduling, and advanced analytics across all major platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <FuturisticButton
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900"
                >
                  Watch Demo
                  <Video className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </div>

              {/* Pricing Highlight */}
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-green-400 mr-2" />
                  <span className="text-3xl font-bold text-white">$29</span>
                  <span className="text-gray-300 ml-2">/month</span>
                </div>
                <p className="text-gray-300">Start with our Professional plan - 14-day free trial, no credit card required</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage and grow your social media presence
              </p>
            </div>
            
            <ResponsiveGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All Major Platforms Supported
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Manage all your social media accounts from one powerful dashboard
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{platform.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{platform.name}</h3>
                  <p className="text-sm text-gray-400">{platform.users} users</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard 
                  key={index} 
                  className={`relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-1">/{plan.period}</span>
                    </div>
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
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
                        : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
                    }`}
                  >
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Thousands
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers are saying about AI Social Media Manager
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-purple-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FuturisticCard className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Social Media?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using AI Social Media Manager to grow their presence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900"
                >
                  Contact Sales
                  <MessageSquare className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>📞 Call us: <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">+1 302 464 0950</a></p>
                <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a></p>
                <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </FuturisticCard>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AISocialMediaManagerPage;