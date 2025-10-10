'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Shield, 
  Globe, 
  Smartphone,
  Database,
  Target,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Download,
  Share2,
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
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock as ClockIcon,
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
  UserHeart3
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const ZionAnalyticsProPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards that update automatically.',
      benefits: ['Live data updates', 'Customizable widgets', 'Drag-and-drop interface', 'Mobile responsive']
    },
    {
      icon: TrendingUp,
      title: 'AI Predictions',
      description: 'Get AI-powered predictions and forecasts based on your historical data and market trends.',
      benefits: ['Predictive analytics', 'Trend forecasting', 'Risk assessment', 'Opportunity identification']
    },
    {
      icon: Users,
      title: 'Multi-source Integration',
      description: 'Connect all your data sources including CRM, ERP, social media, and web analytics in one platform.',
      benefits: ['100+ integrations', 'Real-time sync', 'Data transformation', 'Unified view']
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Access your analytics anywhere with our native mobile app for iOS and Android.',
      benefits: ['Native performance', 'Offline access', 'Push notifications', 'Touch-optimized']
    },
    {
      icon: Database,
      title: 'Custom Reports',
      description: 'Create detailed, professional reports with automated scheduling and distribution.',
      benefits: ['Automated generation', 'Custom templates', 'Multiple formats', 'Scheduled delivery']
    },
    {
      icon: Target,
      title: 'API Access',
      description: 'Integrate our analytics into your existing systems with our comprehensive REST API.',
      benefits: ['RESTful API', 'Webhook support', 'SDK libraries', 'Rate limiting']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$89',
      period: '/month',
      description: 'Perfect for small businesses getting started with analytics',
      features: [
        'Up to 5 data sources',
        '3 custom dashboards',
        'Basic AI predictions',
        'Email support',
        'Mobile app access',
        'Standard reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses with advanced analytics needs',
      features: [
        'Up to 25 data sources',
        'Unlimited dashboards',
        'Advanced AI predictions',
        'Priority support',
        'Mobile app access',
        'Custom reports',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'Complete solution for large organizations with complex requirements',
      features: [
        'Unlimited data sources',
        'Unlimited dashboards',
        'Premium AI predictions',
        '24/7 dedicated support',
        'Mobile app access',
        'Custom reports',
        'Full API access',
        'Advanced team features',
        'White-label options',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion Analytics Pro transformed how we understand our business. The AI predictions helped us increase revenue by 40% in just 3 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataCorp Solutions',
      role: 'Data Analyst',
      content: 'The real-time dashboards and multi-source integration saved us hours every day. Now we can focus on insights instead of data preparation.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Growth Marketing Co.',
      role: 'Marketing Director',
      content: 'The mobile app is incredible. I can check our key metrics anywhere, anytime. The AI predictions for marketing campaigns are spot-on.',
      rating: 5
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Analytics',
      description: 'Track sales, customer behavior, and inventory with real-time insights and AI-powered demand forecasting.',
      metrics: ['40% increase in conversion rate', '25% reduction in inventory costs', '60% faster decision making']
    },
    {
      title: 'SaaS Performance',
      description: 'Monitor user engagement, churn rates, and revenue metrics with predictive analytics and automated alerts.',
      metrics: ['35% reduction in churn rate', '50% improvement in user retention', '30% increase in MRR']
    },
    {
      title: 'Marketing ROI',
      description: 'Measure campaign performance across all channels with unified analytics and AI-powered optimization recommendations.',
      metrics: ['200% improvement in ROI tracking', '45% increase in campaign effectiveness', '80% time savings on reporting']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - Advanced Business Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Analytics Pro - the most advanced AI-powered business intelligence platform. Real-time dashboards, predictive analytics, and multi-source integration." />
        <meta name="keywords" content="business intelligence, analytics platform, AI predictions, real-time dashboards, data visualization, business metrics, ROI tracking" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BarChart className="w-4 h-4 mr-2" />
                AI-Powered Business Intelligence
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Zion Analytics Pro
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                The most advanced business intelligence platform powered by AI. Get real-time insights, 
                predictive analytics, and automated reporting to drive your business forward.
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
                  <span>No credit card required</span>
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
                Powerful Features for Modern Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform your data into actionable insights and drive business growth.
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
                See how companies are using Zion Analytics Pro to drive growth and make data-driven decisions.
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
                Join thousands of satisfied customers who have transformed their business with Zion Analytics Pro.
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your free 14-day trial today and see how Zion Analytics Pro can help you make better decisions, 
                faster. No credit card required.
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

export default ZionAnalyticsProPage;