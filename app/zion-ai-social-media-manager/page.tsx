import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  BarChart3, 
  TrendingUp, 
  Sparkles, 
  Clock, 
  Target, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Eye,
  Heart,
  MessageSquare,
  ShoppingCart,
  CreditCard,
  Award,
  Bell,
  Calendar,
  Settings,
  PieChart,
  Activity,
  Send,
  Inbox,
  Archive,
  Trash2,
  Filter,
  Search,
  AlertTriangle,
  CheckCircle2,
  DollarSign,
  TrendingDown,
  FileText,
  Calculator,
  Bug,
  GitBranch,
  Terminal,
  Users,
  Camera,
  Image,
  Video
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAISocialMediaManagerPage = () => {
  const features = [
    {
      title: "AI Content Generation",
      description: "Generate engaging social media posts automatically using advanced AI",
      icon: <Brain className="w-6 h-6" />,
      stats: "95% engagement boost"
    },
    {
      title: "Multi-Platform Management",
      description: "Manage all social media accounts from one unified dashboard",
      icon: <Globe className="w-6 h-6" />,
      stats: "15+ platforms"
    },
    {
      title: "Optimal Posting Times",
      description: "AI determines the best times to post for maximum engagement",
      icon: <Clock className="w-6 h-6" />,
      stats: "40% more reach"
    },
    {
      title: "Hashtag Optimization",
      description: "Automatically suggest trending and relevant hashtags",
      icon: <Target className="w-6 h-6" />,
      stats: "60% more visibility"
    },
    {
      title: "Content Calendar",
      description: "Plan and schedule posts weeks in advance with AI suggestions",
      icon: <Calendar className="w-6 h-6" />,
      stats: "Automated scheduling"
    },
    {
      title: "Analytics & Insights",
      description: "Track performance and get actionable insights for improvement",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "Real-time analytics"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "/month",
      description: "Perfect for small businesses and influencers",
      features: [
        "Up to 5 social accounts",
        "Basic AI content generation",
        "5 platforms",
        "Email support",
        "Basic analytics",
        "30-day data retention"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 20 social accounts",
        "Advanced AI content generation",
        "All platforms",
        "Priority support",
        "Advanced analytics",
        "1-year data retention",
        "API access",
        "Team collaboration"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large organizations with complex social media needs",
      features: [
        "Unlimited accounts",
        "Custom AI models",
        "Advanced integrations",
        "24/7 phone support",
        "White-label options",
        "Unlimited data retention",
        "Dedicated account manager",
        "Custom reporting"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "Digital Marketing Agency",
      role: "Social Media Manager",
      content: "Zion AI Social Media Manager has transformed our social media strategy. We've increased engagement by 150% and saved 20 hours per week on content creation.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "Ryan Chen",
      company: "E-commerce Brand",
      role: "Marketing Director",
      content: "The AI content generation is incredible. It understands our brand voice perfectly and creates posts that consistently perform well across all platforms.",
      rating: 5,
      avatar: "RC"
    },
    {
      name: "Amanda Wilson",
      company: "Personal Brand",
      role: "Influencer",
      content: "As a content creator, this tool has been a game-changer. The optimal posting times feature alone has doubled my reach and engagement rates.",
      rating: 5,
      avatar: "AW"
    }
  ];

  const benefits = [
    {
      title: "Engagement Boost",
      description: "Increase social media engagement significantly",
      icon: <Heart className="w-8 h-8" />,
      stat: "150% increase"
    },
    {
      title: "Time Savings",
      description: "Automate content creation and scheduling",
      icon: <Clock className="w-8 h-8" />,
      stat: "20 hours/week saved"
    },
    {
      title: "Reach Expansion",
      description: "Expand your social media reach and visibility",
      icon: <Globe className="w-8 h-8" />,
      stat: "40% more reach"
    },
    {
      title: "ROI Improvement",
      description: "Improve return on investment for social media",
      icon: <DollarSign className="w-8 h-8" />,
      stat: "200% better ROI"
    }
  ];

  const metrics = [
    { label: "Engagement Rate", value: "8.5%", improvement: "+150%" },
    { label: "Content Creation", value: "50 posts", improvement: "+300%" },
    { label: "Reach", value: "2.5M", improvement: "+40%" },
    { label: "Time Saved", value: "20h/week", improvement: "+80%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Social Media Manager - Automated Social Media Management | Zion Tech Group"
        description="Manage all social media accounts with AI. Generate content, schedule posts, and optimize engagement across 15+ platforms. Perfect for businesses and influencers. Start free trial today!"
        keywords="AI social media management, social media automation, content generation, social media scheduling, social media analytics, multi-platform management"
        canonical="https://ziontechgroup.com/zion-ai-social-media-manager"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Share2 className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Social Media Management Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI-Powered Social Media
            </span>
            <br />
            <span className="text-white">Management</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Automate your social media strategy with AI. Generate engaging content, schedule posts, 
            and optimize engagement across 15+ platforms from one unified dashboard.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Share2 className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">150%</div>
              <div className="text-gray-300 text-sm">Engagement Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-300 text-sm">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">20h</div>
              <div className="text-gray-300 text-sm">Time Saved/Week</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4.9/5</div>
              <div className="text-gray-300 text-sm">User Rating</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Social Media Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven features to optimize your social media presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <div className="text-cyan-400 text-sm font-medium">{feature.stats}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your social media strategy with measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-2">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the impact of AI-powered social media management
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-300 text-sm mb-1">{metric.label}</div>
                <div className="text-green-400 text-sm font-medium">{metric.improvement}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scale your social media management as your presence grows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Social Media Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are transforming their social media with AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses who are already using Zion AI Social Media Manager 
            to grow their social media presence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Share2 className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAISocialMediaManagerPage;