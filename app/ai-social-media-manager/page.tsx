'use client';
import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Share2, 
  Target, 
  Zap, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  Brain, 
  ArrowRight,
  Star,
  Download,
  Play,
  Pause,
  RotateCcw,
  Settings,
  Bell,
  Search,
  PieChart,
  Activity,
  Award,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Tiktok,
  Hash,
  Heart,
  Eye,
  Share,
  ThumbsUp,
  MessageCircle,
  Calendar,
  Image,
  Video,
  Music,
  Sparkles,
  Globe,
  Shield
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AISocialMediaManagerPro: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [demoData, setDemoData] = useState({
    postsScheduled: 1247,
    engagementRate: 89,
    reach: 156000,
    followers: 45000,
    timeSaved: 280,
    platforms: 8
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Content Creation',
      description: 'Generate engaging social media posts with AI that understands your brand voice and audience',
      benefits: ['200% engagement increase', 'Brand voice consistency', 'Trend-aware content', 'Multi-platform optimization']
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times and automated scheduling across all platforms',
      benefits: ['Optimal timing', 'Cross-platform posting', 'Content calendar', 'Automated workflows']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics and insights to track performance and optimize strategy',
      benefits: ['Real-time metrics', 'ROI tracking', 'Audience insights', 'Competitor analysis']
    },
    {
      icon: Target,
      title: 'Audience Intelligence',
      description: 'AI-driven audience analysis and targeting for maximum engagement and reach',
      benefits: ['Audience segmentation', 'Behavior analysis', 'Interest mapping', 'Demographic insights']
    },
    {
      icon: Hash,
      title: 'Hashtag Optimization',
      description: 'Smart hashtag research and optimization to increase discoverability and reach',
      benefits: ['Trending hashtags', 'Niche targeting', 'Performance tracking', 'Auto-suggestions']
    },
    {
      icon: Shield,
      title: 'Brand Safety',
      description: 'AI-powered content moderation and brand safety checks to protect your reputation',
      benefits: ['Content filtering', 'Tone analysis', 'Compliance checking', 'Risk prevention']
    }
  ];

  const platforms = [
    {
      icon: Facebook,
      name: 'Facebook',
      color: 'text-blue-500',
      features: ['Posts', 'Stories', 'Reels', 'Live Videos', 'Groups', 'Events']
    },
    {
      icon: Instagram,
      name: 'Instagram',
      color: 'text-pink-500',
      features: ['Posts', 'Stories', 'Reels', 'IGTV', 'Live', 'Shopping']
    },
    {
      icon: Twitter,
      name: 'Twitter',
      color: 'text-blue-400',
      features: ['Tweets', 'Threads', 'Spaces', 'Fleets', 'Polls', 'Moments']
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      color: 'text-blue-600',
      features: ['Posts', 'Articles', 'Videos', 'Events', 'Polls', 'Stories']
    },
    {
      icon: Youtube,
      name: 'YouTube',
      color: 'text-red-500',
      features: ['Videos', 'Shorts', 'Live', 'Community', 'Stories', 'Premieres']
    },
    {
      icon: Tiktok,
      name: 'TikTok',
      color: 'text-black',
      features: ['Videos', 'Live', 'Stories', 'Effects', 'Challenges', 'Shopping']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$69',
      period: '/month',
      originalPrice: '$99',
      features: [
        '3 social accounts',
        '30 posts/month',
        'Basic analytics',
        'Email support',
        'Mobile app',
        '2 team members'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      originalPrice: '$199',
      features: [
        '10 social accounts',
        'Unlimited posts',
        'Advanced analytics',
        'Priority support',
        'API access',
        '10 team members',
        'Content calendar',
        'Hashtag research'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      originalPrice: '$399',
      features: [
        'Unlimited accounts',
        'Unlimited posts',
        'Custom analytics',
        'Dedicated support',
        'White-label options',
        'Unlimited team members',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Social Media Manager',
      company: 'Creative Agency',
      content: 'AI Social Media Manager Pro has increased our client engagement by 200%. The AI content suggestions are spot-on, and the scheduling features save us hours every week.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'James Wilson',
      role: 'Marketing Director',
      company: 'Tech Startup',
      content: 'We went from posting 3 times a week to daily content across 6 platforms. Our follower growth increased by 300% in just 3 months. This tool is a game-changer.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Sarah Chen',
      role: 'Founder',
      company: 'E-commerce Brand',
      content: 'The AI understands our brand voice perfectly and creates content that resonates with our audience. Our conversion rate from social media has increased by 150%.',
      rating: 5,
      avatar: 'SC'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="cyber-grid absolute inset-0"></div>
        <div className="neural-network-bg absolute inset-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Social Media Management</span>
            </div>
            
            <h1 className="cyber-text-3d text-5xl md:text-7xl font-bold mb-6">
              AI Social Media Manager Pro
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Automate your social media with AI-powered content creation, smart scheduling, and audience intelligence. 
              Increase engagement by 200% and save 20+ hours per week.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <a
                href="#demo"
                className="cyber-button px-8 py-4 text-lg flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Try Live Demo</span>
              </a>
              <a
                href="#pricing"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg rounded-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Start Free Trial</span>
              </a>
            </div>
            
            {/* Live Demo Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400">{demoData.postsScheduled.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Posts Scheduled</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">{demoData.engagementRate}%</div>
                <div className="text-sm text-gray-400">Engagement Rate</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-green-400">{demoData.reach.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Total Reach</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-orange-400">{demoData.timeSaved}h</div>
                <div className="text-sm text-gray-400">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Manage All Platforms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect and manage all your social media accounts from one powerful dashboard
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <platform.icon className={`w-8 h-8 ${platform.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{platform.name}</h3>
                </div>
                <div className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI technology that understands your audience and optimizes your social media strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Try It Live
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI Social Media Manager Pro with our interactive demonstration
            </p>
          </div>
          
          <div className="cyber-card p-8 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Content Creator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Platform</label>
                    <select className="w-full p-3 bg-slate-700 border border-gray-600 rounded-lg text-white">
                      <option>Instagram</option>
                      <option>Facebook</option>
                      <option>Twitter</option>
                      <option>LinkedIn</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Content Type</label>
                    <select className="w-full p-3 bg-slate-700 border border-gray-600 rounded-lg text-white">
                      <option>Post</option>
                      <option>Story</option>
                      <option>Reel</option>
                      <option>Live Video</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Topic</label>
                    <input 
                      type="text" 
                      placeholder="Enter your topic..."
                      className="w-full p-3 bg-slate-700 border border-gray-600 rounded-lg text-white"
                      defaultValue="Sustainable Fashion Tips"
                    />
                  </div>
                  <button className="cyber-button w-full py-3 px-6 flex items-center justify-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span>Generate Content</span>
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Generated Post</h3>
                <div className="bg-slate-800 p-6 rounded-lg border border-gray-600">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                        B
                      </div>
                      <div>
                        <div className="font-semibold">Your Brand</div>
                        <div className="text-sm text-gray-400">2h ago</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-300">
                        🌱 5 Sustainable Fashion Tips That Actually Make a Difference! 
                        
                        💚 1. Choose quality over quantity - invest in timeless pieces
                        ♻️ 2. Shop second-hand and vintage - give clothes a second life
                        🌿 3. Support eco-friendly brands - look for sustainable materials
                        🔄 4. Learn to repair and upcycle - extend your clothes' lifespan
                        📱 5. Use apps to track your fashion footprint
                        
                        What's your favorite sustainable fashion tip? Share below! 👇
                        
                        #SustainableFashion #EcoFriendly #FashionTips #GreenLiving #SlowFashion #EcoStyle #SustainableLiving #FashionRevolution
                      </p>
                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>24</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>8</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Share className="w-4 h-4" />
                          <span>12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your social media needs. All plans include 14-day free trial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="text-sm text-gray-500 line-through mt-1">
                      {plan.originalPrice}{plan.period}
                    </div>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Trusted by Social Media Managers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about AI Social Media Manager Pro
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="cyber-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of social media managers already using AI Social Media Manager Pro to grow their audience and engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Start Free Trial</span>
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg rounded-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">15,000+</div>
                <div className="text-gray-400">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">200%</div>
                <div className="text-gray-400">Engagement Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">20+</div>
                <div className="text-gray-400">Hours Saved/Week</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300">Ready to get started? Contact our team today.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-white transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-white transition-colors">
                {contactInfo.email}
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISocialMediaManagerPro;