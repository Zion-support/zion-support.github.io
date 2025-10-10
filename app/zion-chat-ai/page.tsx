'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Brain, 
  Users, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Shield, 
  Globe, 
  Smartphone,
  Database,
  Target,
  Settings,
  Bell,
  Filter,
  Search,
  RefreshCw,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  RotateCcw,
  Save,
  Upload,
  Trash2,
  Edit3,
  Copy,
  ExternalLink,
  Lock,
  Unlock,
  AlertCircle,
  Info,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  User,
  UserCheck,
  UserX,
  UserPlus,
  Users2,
  UserCog,
  UserSearch,
  UserMinus,
  UserEdit,
  UserSettings,
  UserShield,
  UserStar,
  UserHeart,
  UserCheck2,
  UserX2,
  UserPlus2,
  UserMinus2,
  UserEdit2,
  UserSettings2,
  UserShield2,
  UserStar2,
  UserHeart2,
  UserCheck3,
  UserX3,
  UserPlus3,
  UserMinus3,
  UserEdit3,
  UserSettings3,
  UserShield3,
  UserStar3,
  UserHeart3,
  Bot,
  MessageCircle,
  Send,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Heart,
  TrendingUp,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Download,
  Share2,
  RotateCcw as RotateCcwIcon,
  Save as SaveIcon,
  Upload as UploadIcon,
  Trash2 as Trash2Icon,
  Edit3 as Edit3Icon,
  Copy as CopyIcon,
  ExternalLink as ExternalLinkIcon,
  Lock as LockIcon,
  Unlock as UnlockIcon,
  AlertCircle as AlertCircleIcon,
  Info as InfoIcon,
  HelpCircle as HelpCircleIcon,
  MessageCircle as MessageCircleIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  User as UserIcon,
  UserCheck as UserCheckIcon,
  UserX as UserXIcon,
  UserPlus as UserPlusIcon,
  Users2 as Users2Icon,
  UserCog as UserCogIcon,
  UserSearch as UserSearchIcon,
  UserMinus as UserMinusIcon,
  UserEdit as UserEditIcon,
  UserSettings as UserSettingsIcon,
  UserShield as UserShieldIcon,
  UserStar as UserStarIcon,
  UserHeart as UserHeartIcon,
  UserCheck2 as UserCheck2Icon,
  UserX2 as UserX2Icon,
  UserPlus2 as UserPlus2Icon,
  UserMinus2 as UserMinus2Icon,
  UserEdit2 as UserEdit2Icon,
  UserSettings2 as UserSettings2Icon,
  UserShield2 as UserShield2Icon,
  UserStar2 as UserStar2Icon,
  UserHeart2 as UserHeart2Icon,
  UserCheck3 as UserCheck3Icon,
  UserX3 as UserX3Icon,
  UserPlus3 as UserPlus3Icon,
  UserMinus3 as UserMinus3Icon,
  UserEdit3 as UserEdit3Icon,
  UserSettings3 as UserSettings3Icon,
  UserShield3 as UserShield3Icon,
  UserStar3 as UserStar3Icon,
  UserHeart3 as UserHeart3Icon
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const ZionChatAIPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'GPT-4 Powered AI',
      description: 'Advanced natural language processing with the latest GPT-4 technology for human-like conversations.',
      benefits: ['Natural conversations', 'Context understanding', 'Multi-turn dialogues', 'Intent recognition']
    },
    {
      icon: MessageSquare,
      title: 'Multi-channel Support',
      description: 'Deploy your AI chatbot across websites, mobile apps, social media, and messaging platforms.',
      benefits: ['Website integration', 'Mobile app SDK', 'Social media bots', 'Messaging platforms']
    },
    {
      icon: Heart,
      title: 'Sentiment Analysis',
      description: 'Understand customer emotions and respond appropriately with advanced sentiment analysis.',
      benefits: ['Emotion detection', 'Mood tracking', 'Response adaptation', 'Escalation triggers']
    },
    {
      icon: Users,
      title: 'Live Agent Handoff',
      description: 'Seamlessly transfer complex conversations to human agents when needed.',
      benefits: ['Smart escalation', 'Context transfer', 'Agent notifications', 'Seamless transition']
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Communicate with customers in over 100 languages with automatic translation.',
      benefits: ['100+ languages', 'Auto-detection', 'Cultural adaptation', 'Regional dialects']
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Connect with your existing CRM systems for personalized customer experiences.',
      benefits: ['Salesforce integration', 'HubSpot support', 'Custom CRM APIs', 'Data synchronization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses starting with AI customer support',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Website integration',
        'Email support',
        'Standard analytics',
        '1 language'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with advanced AI needs',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI responses',
        'Multi-channel support',
        'Priority support',
        'Advanced analytics',
        '5 languages',
        'CRM integration',
        'Live agent handoff'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'Complete solution for large organizations with complex requirements',
      features: [
        'Unlimited conversations',
        'Premium AI responses',
        'All channels supported',
        '24/7 dedicated support',
        'Custom analytics',
        'Unlimited languages',
        'Full CRM integration',
        'Advanced handoff',
        'Custom training',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'E-commerce Plus',
      role: 'Customer Success Manager',
      content: 'Zion Chat AI reduced our response time by 80% and increased customer satisfaction by 60%. Our customers love the instant, helpful responses.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'TechFlow Solutions',
      role: 'Support Director',
      content: 'The sentiment analysis feature is incredible. We can now proactively address customer concerns before they become problems.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'Global Retail Co.',
      role: 'VP of Customer Experience',
      content: 'Multi-language support helped us expand to 15 new markets. The AI understands cultural nuances and responds appropriately.',
      rating: 5
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Provide instant, 24/7 customer support with AI-powered responses and seamless human handoff.',
      metrics: ['80% faster response time', '60% increase in satisfaction', '24/7 availability']
    },
    {
      title: 'Lead Generation',
      description: 'Qualify leads automatically and route them to the right sales team members based on their needs.',
      metrics: ['300% more qualified leads', '50% higher conversion rate', '90% time savings']
    },
    {
      title: 'Sales Assistance',
      description: 'Help customers find products, answer questions, and guide them through the purchase process.',
      metrics: ['40% increase in sales', '35% higher average order value', '70% reduction in cart abandonment']
    }
  ];

  const integrations = [
    { name: 'Salesforce', icon: Database, description: 'Full CRM integration' },
    { name: 'HubSpot', icon: Target, description: 'Marketing automation' },
    { name: 'Zendesk', icon: MessageSquare, description: 'Support ticketing' },
    { name: 'Slack', icon: Users, description: 'Team communication' },
    { name: 'WhatsApp', icon: Smartphone, description: 'Messaging platform' },
    { name: 'Facebook', icon: Globe, description: 'Social media' },
    { name: 'WordPress', icon: Settings, description: 'Website integration' },
    { name: 'Shopify', icon: Target, description: 'E-commerce platform' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Chat AI - Advanced AI Customer Support Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your customer support with Zion Chat AI - the most advanced AI-powered chatbot platform. GPT-4 powered, multi-channel support, and seamless human handoff." />
        <meta name="keywords" content="AI chatbot, customer support, GPT-4, multi-channel support, sentiment analysis, CRM integration, live chat, automated responses" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Bot className="w-4 h-4 mr-2" />
                AI-Powered Customer Support
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Zion Chat AI
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                The most advanced AI customer support platform powered by GPT-4. Provide instant, 
                intelligent responses across all channels with seamless human handoff.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-lg"
                >
                  Watch Demo
                </a>
              </div>
              <div className="flex items-center justify-center space-x-8 text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to provide exceptional customer support with AI-powered intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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

        {/* Integrations Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing tools and platforms for a unified customer experience.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                  <p className="text-sm text-gray-400">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features and 14-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-500/50 scale-105 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/10 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="text-center mb-6">
                      <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Trusted by Businesses Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how companies are using Zion Chat AI to transform their customer support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-3">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-green-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have transformed their customer support with Zion Chat AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your free 14-day trial today and see how Zion Chat AI can help you provide 
                better customer support, faster. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-lg"
                >
                  Call (302) 464-0950
                </a>
              </div>
              <div className="flex items-center justify-center space-x-8 text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ZionChatAIPage;