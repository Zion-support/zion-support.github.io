'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Zap,
  Shield,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  TrendingUp,
  Database,
  Eye,
  Settings,
  Target,
  Award,
  Rocket,
  Brain,
  Cloud,
  Lock,
  MessageSquare,
  Calendar,
  Download,
  Play,
  Code,
  BarChart,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const ZionAnalyticsProPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Data Visualization',
      description: 'Interactive dashboards with live data updates and customizable widgets',
      category: 'Analytics'
    },
    {
      icon: Brain,
      title: 'AI-powered Predictive Analytics',
      description: 'Machine learning algorithms that predict trends and identify opportunities',
      category: 'AI'
    },
    {
      icon: Settings,
      title: 'Custom Dashboard Builder',
      description: 'Drag-and-drop interface to create personalized business dashboards',
      category: 'Customization'
    },
    {
      icon: Database,
      title: 'Advanced Data Connectors',
      description: 'Connect to 100+ data sources including CRM, ERP, and cloud platforms',
      category: 'Integration'
    },
    {
      icon: Zap,
      title: 'Automated Report Generation',
      description: 'Schedule and automate reports with AI-powered insights and recommendations',
      category: 'Automation'
    },
    {
      icon: Users,
      title: 'Multi-tenant Architecture',
      description: 'Secure, scalable platform supporting multiple teams and organizations',
      category: 'Security'
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
        '10 custom dashboards',
        'Basic AI insights',
        'Email support',
        '1GB data storage',
        'Standard reports'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Unlimited data sources',
        'Unlimited dashboards',
        'Advanced AI analytics',
        'Priority support',
        '10GB data storage',
        'Custom reports',
        'API access',
        'Team collaboration'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Everything in Professional',
        'Custom AI models',
        '24/7 dedicated support',
        'Unlimited data storage',
        'White-label solution',
        'Custom integrations',
        'Advanced security',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Zion Analytics Pro transformed our data strategy. We increased our revenue by 40% in just 6 months using their AI insights.',
      rating: 5,
      company: 'TechStart Inc.'
    },
    {
      name: 'Michael Chen',
      role: 'Data Director, GlobalCorp',
      content: 'The real-time dashboards and predictive analytics have given us a competitive edge. Highly recommended!',
      rating: 5,
      company: 'GlobalCorp'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager, GrowthCo',
      content: 'Easy to use, powerful features, and excellent support. Our team productivity increased by 60%.',
      rating: 5,
      company: 'GrowthCo'
    }
  ];

  const stats = [
    { label: 'Active Users', value: '10,000+', icon: Users },
    { label: 'Data Sources', value: '100+', icon: Database },
    { label: 'Uptime', value: '99.9%', icon: Shield },
    { label: 'Customer Satisfaction', value: '4.9/5', icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - Advanced Business Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with Zion Analytics Pro. AI-powered analytics, real-time dashboards, and predictive modeling for modern businesses." />
        <meta name="keywords" content="business intelligence, analytics, AI, data visualization, dashboards, predictive analytics, Zion Analytics Pro" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Micro SAAS Solution</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Zion Analytics Pro
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Advanced real-time business intelligence and analytics platform with AI-powered insights, 
                predictive modeling, and customizable dashboards for data-driven decision making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Free Trial
                </a>
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text-enhanced">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform your data into actionable business insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card-enhanced holographic-card-enhanced p-6 hover:glow transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/20">
                    {feature.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text-enhanced">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card-enhanced holographic-card-enhanced p-8 relative ${plan.popular ? 'glow border-2 border-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center mb-6">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
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
                    href={plan.cta === 'Contact Sales' ? 'mailto:kleber@ziontechgroup.com?subject=Zion Analytics Pro Enterprise Inquiry' : '#contact'}
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white hover:scale-105'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text-enhanced">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that trust Zion Analytics Pro for their data needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card-enhanced holographic-card-enhanced p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card-enhanced holographic-card-enhanced p-12 glow">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text-enhanced">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your free trial today and see how Zion Analytics Pro can revolutionize your business intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Zion Analytics Pro - Free Trial Request"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Call: (302) 464-0950
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>📧 Email: kleber@ziontechgroup.com</p>
                <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
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