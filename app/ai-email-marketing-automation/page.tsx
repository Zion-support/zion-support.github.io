'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, 
  Target, 
  BarChart3, 
  Users, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Clock,
  DollarSign,
  Globe,
  Smartphone,
  Monitor,
  Bot,
  Sparkles,
  TrendingUp,
  Send,
  Eye,
  MousePointer,
  Calendar,
  Filter,
  Settings,
  Brain,
  PieChart,
  Activity,
  MessageSquare,
  Share2,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  Headphones,
  Languages,
  FileText,
  Image,
  Video,
  Music,
  Palette,
  Code,
  Database,
  Server,
  Cloud,
  Shield,
  Lock,
  Key,
  User,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserShield,
  UserCheck2,
  UserX2,
  UserPlus2,
  UserMinus2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserHeart2,
  UserStar2,
  UserShield2,
  ShoppingCart,
  Package
} from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AIEmailMarketingAutomationPage() {
  const features = [
    'AI-powered email content generation',
    'Advanced segmentation and personalization',
    'Automated drip campaigns and workflows',
    'A/B testing with AI optimization',
    'Predictive analytics and send time optimization',
    'Dynamic content based on user behavior',
    'Multi-channel campaign orchestration',
    'Advanced deliverability management',
    'Real-time performance tracking',
    'Custom template builder with AI',
    'Lead scoring and qualification',
    'Integration with 500+ tools and platforms'
  ];

  const automationWorkflows = [
    {
      title: 'Welcome Series',
      description: 'Automatically onboard new subscribers with personalized welcome emails',
      icon: <UserPlus className="w-8 h-8 text-green-400" />,
      steps: ['Welcome email', 'Value proposition', 'Resource library', 'Product demo']
    },
    {
      title: 'Abandoned Cart Recovery',
      description: 'Re-engage customers who left items in their cart',
      icon: <ShoppingCart className="w-8 h-8 text-orange-400" />,
      steps: ['Cart reminder', 'Discount offer', 'Social proof', 'Final chance']
    },
    {
      title: 'Re-engagement Campaign',
      description: 'Win back inactive subscribers with targeted campaigns',
      icon: <RefreshCw className="w-8 h-8 text-blue-400" />,
      steps: ['Inactivity detection', 'Re-engagement email', 'Special offer', 'Unsubscribe option']
    },
    {
      title: 'Post-Purchase Follow-up',
      description: 'Nurture customers after purchase with relevant content',
      icon: <Package className="w-8 h-8 text-purple-400" />,
      steps: ['Thank you email', 'Product tips', 'Upsell offers', 'Review request']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '1,000 contacts',
        'Unlimited emails',
        'Basic automation',
        'Email templates',
        'Basic analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10,000 contacts',
        'Advanced automation',
        'A/B testing',
        'Advanced segmentation',
        'Predictive analytics',
        'Priority support',
        'Team collaboration (5 users)',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited contacts',
        'Advanced AI features',
        'White-label solution',
        'Custom workflows',
        'Dedicated account manager',
        'Advanced security',
        'Compliance features',
        'Unlimited team members',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '100,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '2.5B+', label: 'Emails Sent', icon: <Send className="w-6 h-6" /> },
    { number: '45%', label: 'Average Open Rate', icon: <Eye className="w-6 h-6" /> },
    { number: '300%', label: 'ROI Increase', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const integrations = [
    { name: 'Salesforce', icon: '☁️', description: 'CRM integration' },
    { name: 'HubSpot', icon: '🟠', description: 'Marketing automation' },
    { name: 'Shopify', icon: '🛍️', description: 'E-commerce sync' },
    { name: 'WooCommerce', icon: '🛒', description: 'WordPress integration' },
    { name: 'Zapier', icon: '⚡', description: '500+ app connections' },
    { name: 'Slack', icon: '💬', description: 'Team notifications' },
    { name: 'Google Analytics', icon: '📊', description: 'Advanced tracking' },
    { name: 'Facebook Ads', icon: '📘', description: 'Social media sync' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Email Marketing Automation - Zion Tech Group | Intelligent Email Campaigns</title>
        <meta name="description" content="Transform your email marketing with AI-powered automation, personalization, and analytics. Increase open rates by 45% and ROI by 300%. Starting at $39/month." />
        <meta name="keywords" content="ai email marketing, email automation, email campaigns, marketing automation, email personalization, drip campaigns" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-email-marketing-automation" />
      </Helmet>

      <FuturisticBackground variant="service">
        <div className="pt-20 px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  AI Email Marketing Automation
                </h1>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Supercharge your email marketing with AI-powered automation, personalization, and analytics. 
                Increase open rates by 45% and ROI by 300% with intelligent campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="ghost"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Watch Demo
                </FuturisticButton>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <FuturisticCard key={index} variant="stat" className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </FuturisticCard>
              ))}
            </div>

            {/* Features Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Powerful AI Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <FuturisticCard key={index} variant="feature">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  </FuturisticCard>
                ))}
              </div>
            </div>

            {/* Automation Workflows */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Pre-Built Automation Workflows
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {automationWorkflows.map((workflow, index) => (
                  <FuturisticCard key={index} variant="workflow">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {workflow.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-3">{workflow.title}</h3>
                        <p className="text-gray-300 mb-4">{workflow.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {workflow.steps.map((step, stepIndex) => (
                            <span key={stepIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full">
                              {step}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FuturisticCard>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Seamless Integrations
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {integrations.map((integration, index) => (
                  <FuturisticCard key={index} variant="integration" className="text-center">
                    <div className="text-4xl mb-3">{integration.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                    <p className="text-sm text-gray-400">{integration.description}</p>
                  </FuturisticCard>
                ))}
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Simple, Transparent Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard 
                    key={index} 
                    variant={plan.popular ? "pricing-popular" : "pricing"} 
                    className="relative"
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <FuturisticButton
                      variant={plan.popular ? "primary" : "secondary"}
                      size="lg"
                      className="w-full"
                      onClick={() => window.open('/contact', '_blank')}
                    >
                      Get Started
                    </FuturisticButton>
                  </FuturisticCard>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <FuturisticCard variant="feature" className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Email Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 100,000+ businesses using AI to create, automate, and optimize their email campaigns. 
                Start your free trial today and see the difference AI can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Schedule Demo
                </FuturisticButton>
              </div>
              <div className="mt-8 text-white/80 text-sm">
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </FuturisticCard>
          </div>
        </div>
      </FuturisticBackground>
    </>
  );
}