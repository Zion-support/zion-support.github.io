import React from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Hash, BarChart3, Target, Users, Globe, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react';

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
      title: "Engagement Tracking",
      description: "Monitor likes, comments, shares, and mentions across all platforms",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Brand Monitoring",
      description: "Track brand mentions and sentiment across social media platforms",
      color: "from-cyan-500 to-blue-500"
    }
  ];

const pricing = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "3 Social Media Accounts",
        "30 Posts per Month",
        "Basic Analytics",
        "Hashtag Research",
        "Content Calendar"]
        "Email Support"]],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "10 Social Media Accounts",
        "Unlimited Posts",
        "Advanced Analytics",
        "AI Content Suggestions",
        "Team Collaboration",
        "Priority Support",
        "Brand Monitoring"]
        "Competitor Analysis"]],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited Accounts",
        "Unlimited Posts",
        "Custom Analytics",
        "White-label Options",
        "API Access",
        "Dedicated Support",
        "Advanced Automation"]
        "Custom Integrations"]],
      popular: false
    }
  ];

const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Digital Marketing Agency",
      content: "Zion AI Social Media Manager has transformed our social media strategy. The AI-powered insights have increased our engagement by 150%.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Mike Chen",
      company: "E-commerce Store",
      content: "The scheduling feature saves us hours every week. The hashtag optimization alone has doubled our reach.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Emily Rodriguez",
      company: "Tech Startup",
      content: "The analytics are incredibly detailed and help us make data-driven decisions. Highly recommended!",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    }
  ];
  return (
    <>
      <Helmet>
        <title>Zion AI Social Media Manager - Advanced Social Media Management Platform</title>
        <meta name="description" content="Comprehensive social media management with AI-powered content scheduling, hashtag optimization, and performance tracking across all platforms. Start your free trial today!" />
        <meta name="keywords" content="social media management, AI social media, content scheduling, hashtag optimization, social media analytics, social media automation" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-social-media-manager" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          
        <div className="max-w-7xl mx-auto text-center">
            
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8">
              <Zap className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Most Popular Social Media Tool</span>
            </div>
            
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI <span className="text-cyan-400">Social Media Manager</span>
            </h1>
            
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive social media management with AI-powered content scheduling, hashtag optimization, 
              and performance tracking across all platforms. <span className="text-cyan-400 font-semibold">Save 10+ hours per week</span> with our intelligent automation.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
    to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
    to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            {/* Stats */}
            
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              
        <div className="text-center">
                
        <div className="text-3xl font-bold text-cyan-400 mb-2">22,000+</div>
                
        <div className="text-gray-300 text-sm">Active Users</div>
              </div>
              
        <div className="text-center">
                
        <div className="text-3xl font-bold text-cyan-400 mb-2">150%</div>
                
        <div className="text-gray-300 text-sm">Avg. Engagement Increase</div>
              </div>
              
        <div className="text-center">
                
        <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                
        <div className="text-gray-300 text-sm">Platforms Supported</div>
              </div>
              
        <div className="text-center">
                
        <div className="text-3xl font-bold text-cyan-400 mb-2">4.7/5</div>
                
        <div className="text-gray-300 text-sm">User Rating</div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Social Media Success
              </h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your social media presence effectively
              </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
    const key = {index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  
          <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              
          <p className="text-xl text-gray-300">
                Choose the plan that fits your business needs
              </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div
    const key = {index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    
        <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
        <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    
          <p className="text-gray-300 mb-4">{plan.description}</p>
                    
        <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
    to="/contact"
                    const className = {`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
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
              
          <p className="text-xl text-gray-300">
                Join thousands of satisfied customers
              </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
    const key = {index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  
        <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
          <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  
        <div className="flex items-center">
                    <img
    const src = {testimonial.avatar} alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      
        <div className="font-semibold text-white">{testimonial.name}</div>
                      
        <div className="text-sm text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          
        <div className="max-w-4xl mx-auto text-center">
            
        <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Social Media?
              </h2>
              
          <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and see the difference AI-powered social media management can make.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
    to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
    to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ZionAiSocialMediaManagerPage;