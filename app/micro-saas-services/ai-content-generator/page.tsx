import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Users,
  BarChart3,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  CreditCard,
  Play,
  Download,
  Share2,
  Settings,
  Target,
  TrendingUp,
  Award,
  MessageSquare,
  FileText,
  Image,
  Video,
  Hash,
  Calendar
} from 'lucide-react';

const AIContentGeneratorPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Blog Content Generation',
      description: 'Create engaging blog posts with SEO optimization and proper structure',
      benefits: ['SEO-optimized content', 'Multiple writing styles', 'Keyword integration', 'Readability optimization']
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Social Media Posts',
      description: 'Generate platform-specific content for Twitter, LinkedIn, Instagram, and Facebook',
      benefits: ['Platform-specific formatting', 'Hashtag suggestions', 'Engagement optimization', 'Visual content ideas']
    },
    {
      icon: <Hash className="w-6 h-6" />,
      title: 'Marketing Copy',
      description: 'Create compelling ad copy, email campaigns, and promotional content',
      benefits: ['A/B test variations', 'Call-to-action optimization', 'Audience targeting', 'Conversion-focused copy']
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: 'Visual Content Ideas',
      description: 'Generate ideas for infographics, social media visuals, and presentation content',
      benefits: ['Visual concept generation', 'Color scheme suggestions', 'Layout recommendations', 'Brand consistency']
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Video Scripts',
      description: 'Create engaging video scripts for YouTube, TikTok, and other platforms',
      benefits: ['Platform-specific formats', 'Hook optimization', 'Story structure', 'Call-to-action placement']
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Content Calendar',
      description: 'Plan and schedule content across all your marketing channels',
      benefits: ['Automated scheduling', 'Content themes', 'Seasonal planning', 'Cross-platform coordination']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and content creators',
      features: [
        '1,000 words per month',
        '5 content types',
        'Basic SEO optimization',
        'Email support',
        'Standard templates',
        '1 user account'
      ],
      limitations: [
        'Limited to 1 brand voice',
        'Basic analytics',
        'Standard support'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$59',
      period: '/month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        '10,000 words per month',
        'All content types',
        'Advanced SEO optimization',
        'Priority support',
        'Custom templates',
        '5 user accounts',
        'Brand voice customization',
        'Advanced analytics',
        'API access',
        'Content scheduling'
      ],
      limitations: [],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited words',
        'All content types',
        'Premium SEO optimization',
        '24/7 dedicated support',
        'Custom integrations',
        'Unlimited user accounts',
        'Multiple brand voices',
        'Advanced analytics & reporting',
        'White-label options',
        'Custom AI training',
        'SLA guarantee'
      ],
      limitations: [],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      content: 'AI Content Generator has revolutionized our content strategy. We\'ve increased our blog traffic by 300% and reduced content creation time by 80%.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      role: 'Content Manager',
      company: 'Digital Agency Pro',
      content: 'The quality of generated content is outstanding. Our clients love the consistency and SEO optimization. It\'s like having a team of expert writers.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Social Media Manager',
      company: 'Creative Solutions',
      content: 'Managing social media content across 5 platforms used to take me 20 hours a week. Now it takes 4 hours. The AI understands our brand voice perfectly.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const stats = [
    { number: '2.5K+', label: 'Active Users' },
    { number: '1M+', label: 'Content Pieces Generated' },
    { number: '95%', label: 'User Satisfaction' },
    { number: '80%', label: 'Time Saved' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-pink-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <Helmet>
        <title>AI Content Generator - Micro SAAS Service | Zion Tech Group</title>
        <meta name="description" content="Generate high-quality content for blogs, social media, and marketing materials using advanced AI. Save 80% time on content creation with our AI Content Generator." />
        <meta name="keywords" content="AI content generator, content creation, blog writing, social media content, marketing copy, SEO content" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  AI Content Generator
                </span>
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-xl opacity-30 animate-pulse"></div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Generate high-quality content for blogs, social media, and marketing materials using advanced AI. 
              <span className="text-cyan-300 font-semibold"> Save 80% time on content creation!</span>
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.number}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
              <button className="group border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Powerful Content Generation Features
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Create any type of content with AI-powered intelligence and human-like quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300 group-hover:text-white transition-colors duration-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your content creation needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={plan.name} className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-500 relative overflow-hidden ${
                plan.popular 
                  ? 'border-purple-500/50 scale-105' 
                  : 'border-white/10 hover:border-white/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Choose Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                What Our Customers Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their content strategy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] animate-pulse"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4 relative">
                  <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    Ready to Transform Your Content Strategy?
                  </span>
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Start your free trial today and experience the power of AI-driven content generation. 
                  <span className="text-cyan-200 font-semibold"> No credit card required!</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </button>
                  <Link 
                    to="/contact" 
                    className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10">Contact Sales</span>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentGeneratorPage;