import { ArrowRight, Share2, Calendar, BarChart3, Users, Zap, Globe, Star, CheckCircle, Mail, Smartphone, MapPin, TrendingUp, Image } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSocialScheduler() {
  const features = [
    {
      title: "Multi-Platform Publishing",
      description: "Schedule and publish content across Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube with one click",
      icon: <Share2 className="w-6 h-6" />,
      benefit: "Save 10+ hours/week"
    },
    {
      title: "AI Content Optimization",
      description: "AI-powered content suggestions, hashtag recommendations, and optimal posting times for maximum engagement",
      icon: <Zap className="w-6 h-6" />,
      benefit: "3x higher engagement"
    },
    {
      title: "Visual Content Creator",
      description: "Built-in design tools with templates, stock photos, and video editing for stunning social media content",
      icon: <Image className="w-6 h-6" />,
      benefit: "Professional designs"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive social media analytics with engagement metrics, reach analysis, and ROI tracking",
      icon: <BarChart3 className="w-6 h-6" />,
      benefit: "Data-driven strategy"
    },
    {
      title: "Team Collaboration",
      description: "Multi-user accounts with approval workflows, content calendars, and team management features",
      icon: <Users className="w-6 h-6" />,
      benefit: "Seamless teamwork"
    },
    {
      title: "Global Scheduling",
      description: "Schedule posts for different time zones and automatically adjust for optimal engagement times",
      icon: <Globe className="w-6 h-6" />,
      benefit: "24/7 presence"
    }
  ];

  const platforms = [
    {
      name: "Facebook & Instagram",
      description: "Posts, stories, reels, and carousel ads",
      icon: <Share2 className="w-8 h-8" />,
      reach: "2.9B"
    },
    {
      name: "Twitter & LinkedIn",
      description: "Tweets, threads, and professional content",
      icon: <Users className="w-8 h-8" />,
      reach: "800M"
    },
    {
      name: "TikTok & YouTube",
      description: "Short videos, long-form content, and live streams",
      icon: <Image className="w-8 h-8" />,
      reach: "2.7B"
    },
    {
      name: "Pinterest & Snapchat",
      description: "Pins, stories, and visual content",
      icon: <Calendar className="w-8 h-8" />,
      reach: "500M"
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$29",
      period: "per month",
      description: "Perfect for individual creators",
      features: [
        "Up to 5 social accounts",
        "30 posts per month",
        "Basic analytics",
        "Content calendar",
        "Email support",
        "Mobile app"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$79",
      period: "per month",
      description: "Ideal for small businesses",
      features: [
        "Up to 20 social accounts",
        "Unlimited posts",
        "Advanced analytics",
        "Team collaboration",
        "Priority support",
        "AI content suggestions",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Agency",
      price: "$199",
      period: "per month",
      description: "For agencies and enterprises",
      features: [
        "Unlimited social accounts",
        "White-label options",
        "Advanced reporting",
        "Dedicated support",
        "24/7 phone support",
        "Custom integrations",
        "Client management"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jessica Park",
      company: "Digital Marketing Agency",
      role: "Social Media Manager",
      content: "Zion Social Scheduler has revolutionized our social media management. We're managing 50+ accounts effortlessly.",
      rating: 5,
      avatar: "JP"
    },
    {
      name: "Marcus Johnson",
      company: "E-commerce Brand",
      role: "Marketing Director",
      content: "The AI content suggestions are incredible. Our engagement rates have increased by 300% since using this platform.",
      rating: 5,
      avatar: "MJ"
    },
    {
      name: "Sofia Rodriguez",
      company: "Content Creator",
      role: "Influencer",
      content: "The visual content creator is amazing. I can create professional posts without any design experience.",
      rating: 5,
      avatar: "SR"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Social Scheduler - AI-Powered Social Media Management | Zion Tech Group</title>
        <meta
          name="description"
          content="Manage all your social media accounts with Zion Social Scheduler. AI-powered content optimization, multi-platform publishing, and advanced analytics for maximum engagement."
        />
        <meta
          name="keywords"
          content="social media management, social media scheduling, content creation, social media analytics, multi-platform publishing, social media automation"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-social-scheduler" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 mb-6">
              <Share2 className="w-4 h-4 text-violet-400 mr-2" />
              <span className="text-violet-400 text-sm font-medium">Social Media Management</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400">
                Zion Social Scheduler
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The ultimate social media management platform powered by AI. Schedule, publish, and optimize 
              content across all platforms with intelligent automation and advanced analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-violet-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-violet-400 text-violet-400 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Share2 className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-400 mb-2">10+</div>
                <div className="text-gray-300 text-sm">Social Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">3x</div>
                <div className="text-gray-300 text-sm">Higher Engagement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300 text-sm">Hours Saved/Week</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Automated Publishing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Connect All Your Social Platforms
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Manage all your social media accounts from one powerful dashboard.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {platform.description}
                  </p>
                  <div className="flex items-center justify-center text-violet-400 text-sm font-medium">
                    <Users className="w-4 h-4 mr-2" />
                    {platform.reach} Users
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Social Media Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to dominate social media and grow your audience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-violet-400 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Scale Your Social Media
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that matches your social media management needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-violet-500/50 shadow-2xl shadow-violet-500/20' 
                      : 'border-white/20 hover:border-violet-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-violet-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-violet-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700 shadow-lg hover:shadow-violet-500/25'
                        : 'border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Social Media Managers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what social media professionals say about Zion Social Scheduler
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-violet-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Master Your Social Media Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of social media managers using Zion Social Scheduler to grow their audience and engagement. 
              Start your free trial today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-violet-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-violet-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-violet-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-violet-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-violet-400 text-violet-400 px-8 py-4 rounded-lg font-semibold hover:bg-violet-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Share2 className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}