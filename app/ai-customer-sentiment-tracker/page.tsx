import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  TrendingUp, 
  BarChart3, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Target,
  Award,
  MessageSquare,
  Send,
  Filter,
  Search,
  Settings,
  Bell,
  FileText,
  Calendar,
  DollarSign,
  Smile,
  Frown,
  Meh,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  Zap,
  Eye,
  Activity,
  PieChart,
  LineChart,
  Database
} from 'lucide-react';

const AICustomerSentimentTrackerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Sentiment Analysis',
      description: 'Advanced natural language processing analyzes customer feedback, reviews, and interactions to determine emotional sentiment in real-time.',
      benefits: ['Real-time Analysis', 'Multi-language Support', 'Context Understanding', 'Emotion Detection']
    },
    {
      icon: TrendingUp,
      title: 'Trend Monitoring',
      description: 'Track sentiment trends over time with predictive analytics and automated alerts for significant changes in customer satisfaction.',
      benefits: ['Historical Tracking', 'Predictive Analytics', 'Trend Alerts', 'Performance Metrics']
    },
    {
      icon: BarChart3,
      title: 'Comprehensive Dashboard',
      description: 'Visualize customer sentiment data with interactive dashboards, custom reports, and actionable insights for business improvement.',
      benefits: ['Interactive Dashboards', 'Custom Reports', 'Data Visualization', 'Export Capabilities']
    },
    {
      icon: Zap,
      title: 'Automated Actions',
      description: 'Trigger automated responses based on sentiment scores, including follow-up actions, escalations, and customer retention campaigns.',
      benefits: ['Auto-Responses', 'Escalation Rules', 'Retention Campaigns', 'Workflow Automation']
    }
  ];

  const sentimentSources = [
    {
      source: 'Social Media',
      icon: MessageSquare,
      description: 'Monitor sentiment across all major social media platforms',
      platforms: ['Twitter', 'Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'YouTube'],
      accuracy: '94.2%'
    },
    {
      source: 'Review Sites',
      icon: Star,
      description: 'Track customer reviews and ratings from major platforms',
      platforms: ['Google Reviews', 'Yelp', 'Trustpilot', 'G2', 'Capterra', 'App Store'],
      accuracy: '96.8%'
    },
    {
      source: 'Customer Support',
      icon: Users,
      description: 'Analyze support tickets, chat logs, and email interactions',
      platforms: ['Zendesk', 'Intercom', 'Freshdesk', 'Help Scout', 'LiveChat', 'Email'],
      accuracy: '97.5%'
    },
    {
      source: 'Surveys & Feedback',
      icon: FileText,
      description: 'Process survey responses and direct customer feedback',
      platforms: ['SurveyMonkey', 'Typeform', 'Google Forms', 'Qualtrics', 'Custom Forms'],
      accuracy: '98.1%'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5,000 mentions/month',
        'Basic sentiment analysis',
        'Standard dashboard',
        'Email alerts',
        'Basic reporting',
        'Email support'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25,000 mentions/month',
        'Advanced sentiment analysis',
        'Custom dashboard',
        'Real-time alerts',
        'Advanced reporting',
        'API access',
        'Priority support',
        'Custom integrations'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited mentions',
        'Full AI suite',
        'White-label dashboard',
        'Custom workflows',
        '24/7 dedicated support',
        'Advanced security',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const sentimentMetrics = [
    {
      metric: 'Overall Sentiment Score',
      value: '8.7/10',
      change: '+12%',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      metric: 'Customer Satisfaction',
      value: '92%',
      change: '+8%',
      icon: Smile,
      color: 'text-green-400'
    },
    {
      metric: 'Net Promoter Score',
      value: '67',
      change: '+15%',
      icon: ThumbsUp,
      color: 'text-blue-400'
    },
    {
      metric: 'Response Rate',
      value: '89%',
      change: '+5%',
      icon: MessageSquare,
      color: 'text-purple-400'
    }
  ];

  const testimonials = [
    {
      name: 'Lisa Wang',
      company: 'E-commerce Plus',
      role: 'Customer Experience Manager',
      content: 'Zion AI Sentiment Tracker has transformed how we understand our customers. We\'ve increased our NPS score by 25 points in just 6 months.',
      rating: 5,
      avatar: 'LW'
    },
    {
      name: 'James Rodriguez',
      company: 'TechStart Solutions',
      role: 'Head of Marketing',
      content: 'The real-time alerts help us catch negative sentiment before it becomes a crisis. Our customer retention has improved by 40%.',
      rating: 5,
      avatar: 'JR'
    },
    {
      name: 'Sarah Kim',
      company: 'Digital Agency Pro',
      role: 'Client Success Director',
      content: 'The dashboard is incredibly intuitive and the insights are actionable. We can now predict customer churn with 85% accuracy.',
      rating: 5,
      avatar: 'SK'
    }
  ];

  const integrations = [
    { name: 'Slack', icon: MessageSquare, status: 'Available' },
    { name: 'Microsoft Teams', icon: Users, status: 'Available' },
    { name: 'Zendesk', icon: Users, status: 'Available' },
    { name: 'HubSpot', icon: Target, status: 'Available' },
    { name: 'Salesforce', icon: Users, status: 'Available' },
    { name: 'Google Analytics', icon: BarChart3, status: 'Available' },
    { name: 'Mailchimp', icon: Send, status: 'Available' },
    { name: 'Zapier', icon: Zap, status: 'Available' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Sentiment Tracker - Real-time Sentiment Analysis | Zion Tech Group</title>
        <meta name="description" content="Track customer sentiment in real-time with AI-powered analysis. Monitor reviews, social media, and feedback to improve customer satisfaction and retention." />
        <meta name="keywords" content="customer sentiment analysis, sentiment tracking, customer satisfaction, NPS tracking, social media monitoring, customer feedback analysis" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-sentiment-tracker" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-6">
                <Heart className="w-4 h-4 text-pink-400 mr-2" />
                <span className="text-pink-400 text-sm font-medium">Customer Experience Intelligence</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Sentiment Tracker</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Understand your customers like never before with AI-powered sentiment analysis. Track emotions, 
                monitor satisfaction trends, and take proactive action to improve customer experience and retention.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-pink-500/25 hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Monitor className="w-5 h-5" />
                  <span>Watch Demo</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">97.5%</div>
                  <div className="text-gray-300 text-sm">Analysis Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">25</div>
                  <div className="text-gray-300 text-sm">NPS Points Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                  <div className="text-gray-300 text-sm">Better Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">Real-time</div>
                  <div className="text-gray-300 text-sm">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sentiment Sources */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Sentiment Sources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Monitor customer sentiment across all touchpoints and channels
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sentimentSources.map((source, index) => {
                const IconComponent = source.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-300 group">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                          {source.source}
                        </h3>
                        <div className="text-green-400 font-semibold">Accuracy: {source.accuracy}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {source.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-pink-400 mb-2">Supported Platforms:</h4>
                      <div className="flex flex-wrap gap-2">
                        {source.platforms.map((platform, platformIndex) => (
                          <span key={platformIndex} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven insights to understand and improve customer experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Metrics Dashboard Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Real-time Sentiment Metrics
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Track key performance indicators and sentiment trends
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sentimentMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-pink-400/50 transition-all duration-300 text-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                      {metric.metric}
                    </h3>
                    <div className="text-2xl font-bold text-pink-400 mb-1">{metric.value}</div>
                    <div className={`text-sm font-semibold ${metric.color}`}>{metric.change}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing tools and workflows
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {integrations.map((integration, index) => {
                const IconComponent = integration.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-500/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-gray-300 group-hover:text-pink-400 transition-colors" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{integration.name}</h3>
                    <span className="text-green-400 text-sm">{integration.status}</span>
                  </div>
                );
              })}
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
                Choose the plan that fits your business needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-pink-500/50 ring-2 ring-pink-500/20 relative'
                      : 'border-white/20 hover:border-pink-400/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-pink-500/25'
                        : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-900'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
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
                Trusted by Customer Experience Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Customer Sentiment Tracker
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-pink-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-2xl p-12 border border-pink-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Start Understanding Your Customers Better
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses who have transformed their customer experience 
                with AI-powered sentiment analysis and insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-pink-500/25 hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Monitor className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICustomerSentimentTrackerPage;