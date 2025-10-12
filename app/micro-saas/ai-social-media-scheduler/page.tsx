import React from 'react'
import { Link } from 'react-router-dom'

import React from 'react';

import { Link } from 'react-router-dom';
import { ArrowRight, Share2} from 'lucide-react';

import { ArrowRight, Calendar, BarChart3, Users, Zap, CheckCircle, Target, Share2, Star, Shield } from 'lucide-react';

export default function AISocialMediaSchedulerPage() {
  const features = [
      icon: <Calendar className="w-6h-6text-cyan-400" />,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on audience engagement patterns'
    },
      icon: <BarChart3 className="w-6h-6text-emerald-400" />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive performance metrics and ROI tracking across all platforms'
    },
      icon: <Users className="w-6h-6text-purple-400" />,
      title: 'Audience Insights',
      description: 'AI-driven audience analysis and content personalization recommendations'
    },
      icon: <Zap className="w-6h-6text-orange-400" />,
      title: 'Auto-Posting',
      description: 'Seamless cross-platform content distribution with smart formatting'
    },
      icon: <Target className="w-6h-6text-pink-400" />,
      title: 'Content Optimization',
      description: 'AI suggestions for hashtags, captions, and optimal posting times'
    },
      icon: <Shield className="w-6h-6text-red-400" />,

      title: 'Brand Safety',
      description: 'Automated content moderation and brand compliance checking'
  ]

  const pricingPlans = [
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and individuals',
      features: [
        '3 social media accounts',
        '50 posts per month',
        'Basic analytics',
        'Email support',
        'Content calendar',
        'Hashtag suggestions'
      ],
      popular: false
    },
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        'Unlimited posts',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
        'AI content suggestions',
        'Competitor analysis',
        'Custom branding'
      ],
      popular: true
    },
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'Unlimited posts',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced AI features',
        'API access',
        'Custom reporting'
      ],
      popular: false
  ]

  const testimonials = [
      name: 'Sarah Johnson',
      company: 'Digital Marketing Agency',
      content: 'Increased our social media engagement by 300% in just 2 months. The AI scheduling is incredibly accurate.',
      rating: 5,
      avatar: 'SJ'
    },
      name: 'Mike Chen',
      company: 'E-commerce Store',
      content: 'The analytics dashboard gives us insights we never had before. ROI tracking is spot-on.',
      rating: 5,
      avatar: 'MC'
    },
      name: 'Emily Rodriguez',
      company: 'Content Creator',
      content: 'Saves me 10+ hours per week. The AI content suggestions are always on-brand and engaging.',
      rating: 5,
      avatar: 'ER'
  ]

  return (

        <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Social Media Scheduler - Zion Tech Group | Automated Social Media Management</title>

      {/* Hero Section */}
    
            <span>AI-Powered Social Media Management</span>

            AI Social Media
    
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Scheduler
          
            Transform your social media presence with AI-powered scheduling, content optimization, 
            and analytics. Increase engagement by up to 300% with intelligent automation.

              <span>Start Free Trial</span>
              <span>View Pricing</span>

          {/* Key Stats */}

              <div className="text-3 xl font-boldtext-cyan-400mb-2">300%</div>
              <div className="text-gray-300text-sm">Avg. Engagement Increase</div>
              <div className="text-3 xl font-boldtext-purple-400mb-2">10+</div>
              <div className="text-gray-300text-sm">Platforms Supported</div>
              <div className="text-3 xl font-boldtext-pink-400mb-2">50 K+</div>
              <div className="text-gray-300text-sm">Active Users</div>
              <div className="text-3 xl font-boldtext-emerald-400mb-2">99.9%</div>
              <div className="text-gray-300text-sm">Uptime Guarantee</div>

      {/* Features Section */}
    
              Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Social Success</span>

              Everything you need to manage, optimize, and grow your social media presence with AI-powered intelligence.

 (
    
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}

                <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                  {feature.description}
    
            ))}

      {/* Pricing Section */}
    
              Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</span>

              Choose the plan that fits your needs. All plans include our core AI features and 24/7 support.

 (
                {plan.popular && (

                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                )}

                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300text-smmb-4">{plan.description}</p>
                    <span className="text-5 xlfont-boldtext-cyan-400">{plan.price}</span>
                    <span className="text-gray-300ml-2">{plan.period}</span>

 (

                      <span className="text-gray-300">{feature}</span>

                  ))}

                  to="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}

Get Started
    
            ))}

      {/* Testimonials Section */}
    
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">50,000+</span> Users

              See what our customers are saying about their success with our AI social media scheduler.

 (
    
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar}
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-gray-400text-sm">{testimonial.company}</div>

 (
                  ))}

                <p className="text-gray-300italic">"{testimonial.content}"</p>

            ))}

      {/* CTA Section */}
    
                  Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Social Media?</span>
                
                  Join thousands of businesses already using our AI-powered social media scheduler 
                  to increase engagement, save time, and grow their online presence.

                    <span>Start Free Trial</span>
                    <span>View All Plans</span>

                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>

      </>
  );