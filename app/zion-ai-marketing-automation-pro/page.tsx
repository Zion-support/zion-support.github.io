import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Target, 
  BarChart3, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Clock, 
  Award, 
  Mail, 
  Phone, 
  Globe,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  Database,
  Smartphone,
  Monitor,
  Headphones,
  TrendingUp,
  PieChart,
  Activity,
  Shield,
  AlertTriangle,
  CheckSquare,
  Timer,
  UserCheck,
  GitBranch,
  Workflow,
  Clipboard,
  Flag,
  Bell,
  Search,
  Filter,
  Download,
  Share,
  Lock,
  Eye,
  Users,
  Send,
  Megaphone,
  Camera,
  Edit,
  Palette,
  MousePointer,
  Layers,
  Compass
} from 'lucide-react';

const ZionAiMarketingAutomationProPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Content Generation',
      description: 'Create compelling marketing content automatically using advanced AI that understands your brand voice and target audience.',
      icon: <Edit className="w-6 h-6" />,
      benefits: ['Brand voice consistency', 'Multi-channel content', 'SEO optimization', 'A/B testing']
    },
    {
      title: 'Intelligent Audience Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement patterns using machine learning.',
      icon: <Users className="w-6 h-6" />,
      benefits: ['Behavioral segmentation', 'Predictive modeling', 'Dynamic lists', 'Personalization']
    },
    {
      title: 'Smart Campaign Optimization',
      description: 'Continuously optimize your marketing campaigns with AI-driven insights, timing, and content recommendations.',
      icon: <Target className="w-6 h-6" />,
      benefits: ['Real-time optimization', 'Performance prediction', 'Budget allocation', 'ROI maximization']
    },
    {
      title: 'Multi-Channel Orchestration',
      description: 'Coordinate campaigns across email, social media, SMS, and web with intelligent cross-channel messaging.',
      icon: <Layers className="w-6 h-6" />,
      benefits: ['Unified messaging', 'Channel coordination', 'Timing optimization', 'Consistent experience']
    },
    {
      title: 'Advanced Lead Scoring',
      description: 'Score and prioritize leads using AI-powered algorithms that analyze engagement, behavior, and conversion probability.',
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ['Behavioral scoring', 'Engagement tracking', 'Conversion prediction', 'Sales alignment']
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Gain deep insights into campaign performance, customer lifetime value, and future trends with AI analytics.',
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ['Performance insights', 'Trend analysis', 'Forecasting', 'Custom dashboards']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5,000 contacts',
        'Basic AI features',
        'Email campaigns',
        'Social media posting',
        'Email support',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25,000 contacts',
        'Advanced AI features',
        'Multi-channel campaigns',
        'Lead scoring',
        'Priority support',
        'Advanced analytics',
        'A/B testing',
        'API access'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'SLA guarantee',
        'Custom development'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Rachel Martinez',
      company: 'E-commerce Solutions',
      role: 'Marketing Director',
      content: 'Zion AI Marketing Automation Pro increased our email open rates by 45% and conversion rates by 60%. The AI content generation is incredibly effective.',
      rating: 5,
      avatar: 'RM'
    },
    {
      name: 'James Wilson',
      company: 'Digital Agency',
      role: 'CEO',
      content: 'The lead scoring feature helped us identify our best prospects automatically. Our sales team efficiency increased by 50% and close rates improved by 35%.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Sarah Kim',
      company: 'SaaS Platform',
      role: 'Growth Manager',
      content: 'The multi-channel orchestration is a game-changer. We can now coordinate campaigns across all platforms seamlessly, resulting in 40% better engagement.',
      rating: 5,
      avatar: 'SK'
    }
  ];

  const keyMetrics = [
    {
      title: 'Email Open Rates',
      value: '45%',
      description: 'Average increase in open rates',
      icon: <Mail className="w-8 h-8" />
    },
    {
      title: 'Conversion Rates',
      value: '60%',
      description: 'Average increase in conversions',
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Lead Quality',
      value: '50%',
      description: 'Improvement in lead quality',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Time Saved',
      value: '20h',
      description: 'Hours saved per week per user',
      icon: <Timer className="w-8 h-8" />
    }
  ];

  const integrations = [
    { name: 'Salesforce', logo: 'SF' },
    { name: 'HubSpot', logo: 'HS' },
    { name: 'Mailchimp', logo: 'MC' },
    { name: 'Facebook Ads', logo: 'FB' },
    { name: 'Google Ads', logo: 'GA' },
    { name: 'LinkedIn', logo: 'LI' },
    { name: 'Twitter', logo: 'TW' },
    { name: 'Instagram', logo: 'IG' }
  ];

  const useCases = [
    {
      title: 'Email Marketing',
      description: 'Create personalized email campaigns with AI-generated content and optimal send times',
      icon: <Mail className="w-6 h-6" />,
      examples: ['Welcome series', 'Product launches', 'Re-engagement', 'Newsletters']
    },
    {
      title: 'Social Media',
      description: 'Automate social media posting with AI-generated content and optimal timing',
      icon: <Megaphone className="w-6 h-6" />,
      examples: ['Content scheduling', 'Hashtag optimization', 'Engagement tracking', 'Influencer outreach']
    },
    {
      title: 'Lead Nurturing',
      description: 'Automatically nurture leads through personalized drip campaigns',
      icon: <Target className="w-6 h-6" />,
      examples: ['Drip campaigns', 'Lead scoring', 'Behavioral triggers', 'Sales handoff']
    },
    {
      title: 'Retargeting',
      description: 'Re-engage website visitors with personalized retargeting campaigns',
      icon: <Compass className="w-6 h-6" />,
      examples: ['Abandoned cart', 'Product views', 'Page visits', 'Form abandonment']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Marketing Automation Pro - AI-Powered Marketing Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your marketing with Zion AI Marketing Automation Pro. AI-powered content generation, audience segmentation, and campaign optimization. Start your free trial today!" />
        <meta name="keywords" content="AI marketing automation, content generation, audience segmentation, campaign optimization, lead scoring, email marketing, social media automation" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-marketing-automation-pro" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion AI Marketing Automation Pro",
            "description": "AI-powered marketing automation platform with content generation and campaign optimization",
            "url": "https://ziontechgroup.com/zion-ai-marketing-automation-pro",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "149",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31"
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">AI-Powered Marketing Automation</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion <span className="text-cyan-400">AI Marketing Automation Pro</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your marketing with AI-powered automation. Generate content, segment audiences, 
                and optimize campaigns automatically to increase conversions by 60% and save 20 hours per week.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free 14-Day Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  <Monitor className="w-5 h-5 mr-2 inline" />
                  Watch Demo
                </Link>
              </div>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {keyMetrics.map((metric, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {metric.icon}
                    </div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                    <div className="text-gray-300 text-sm font-medium mb-1">{metric.title}</div>
                    <div className="text-gray-400 text-xs">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI Marketing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to automate and optimize your marketing campaigns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perfect for Every Marketing Need
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're running email campaigns, social media, or lead nurturing, our AI has you covered.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                  <ul className="space-y-1 text-sm text-cyan-400">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx}>• {example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your marketing needs. All plans include 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20 relative' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Marketing Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how marketing teams are transforming their campaigns with Zion AI Marketing Automation Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
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
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite marketing tools and platforms. Zion AI Marketing Automation Pro integrates with 100+ applications.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-cyan-400 font-bold text-lg">{integration.logo}</span>
                  </div>
                  <div className="text-white text-sm font-medium">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of marketing teams already using Zion AI Marketing Automation Pro to boost their campaigns. 
                Start your free 14-day trial today - no credit card required.
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email Support</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone Support</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Live Chat</h3>
                  <p className="text-cyan-400">24/7 Available</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  <Monitor className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
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

export default ZionAiMarketingAutomationProPage;