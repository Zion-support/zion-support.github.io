import React from 'react';
import SEOHead from '../../components/SEOHead';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Database,
  Target,
  BarChart,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';

const AIAnalyticsDashboardPro: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your data to provide actionable insights and predictions.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Analytics',
      description: 'Monitor your business performance with live dashboards that update in real-time.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards tailored to your specific business needs and KPIs.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Integration',
      description: 'Connect with 100+ data sources including CRM, ERP, social media, and more.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and advanced encryption.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automated Reports',
      description: 'Generate and schedule automated reports to keep stakeholders informed.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 dashboards',
        '10 data sources',
        'Basic AI insights',
        'Email support',
        '1 user account',
        '30-day data retention'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Unlimited dashboards',
        '50 data sources',
        'Advanced AI insights',
        'Priority support',
        'Up to 10 user accounts',
        '1-year data retention',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Unlimited data sources',
        'Premium AI insights',
        '24/7 dedicated support',
        'Unlimited user accounts',
        'Unlimited data retention',
        'White-label options',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CEO',
      content: 'AI Analytics Dashboard Pro has transformed how we understand our business data. The AI insights are incredibly accurate and actionable.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      role: 'CTO',
      content: 'The real-time analytics capabilities are outstanding. We can now make data-driven decisions instantly.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'GrowthMetrics',
      role: 'Head of Analytics',
      content: 'The custom dashboard builder is intuitive and powerful. We created exactly what we needed in minutes.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Analytics Dashboard Pro - Advanced Business Intelligence | Zion Tech Group"
        description="Transform your business with AI-powered analytics dashboard. Real-time insights, predictive analytics, and custom dashboards. Starting at $99/month."
        keywords="AI analytics, business intelligence, data visualization, real-time analytics, predictive analytics, dashboard, business insights"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 animated-bg cyber-grid">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                #1 AI Analytics Platform
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 futuristic-text">
                AI Analytics Dashboard Pro
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business data into actionable insights with our advanced AI-powered analytics platform. 
                Get real-time dashboards, predictive analytics, and intelligent recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#pricing"
                  className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#demo"
                  className="group glass-morphism text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
                >
                  View Demo
                  <Activity className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Free 14-day trial
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Cancel anytime
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-morphism p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <TrendingUp className="w-6 h-6 text-white" />
                      <span className="text-white text-sm">+24.5%</span>
                    </div>
                    <p className="text-white text-sm">Revenue Growth</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Users className="w-6 h-6 text-white" />
                      <span className="text-white text-sm">1,234</span>
                    </div>
                    <p className="text-white text-sm">Active Users</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <DollarSign className="w-6 h-6 text-white" />
                      <span className="text-white text-sm">$45.2K</span>
                    </div>
                    <p className="text-white text-sm">Monthly Revenue</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Target className="w-6 h-6 text-white" />
                      <span className="text-white text-sm">89%</span>
                    </div>
                    <p className="text-white text-sm">Goal Achievement</p>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg flex items-center justify-center">
                  <BarChart className="w-12 h-12 text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 neon-text">
              Powerful Features for Modern Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform your data into actionable business insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-morphism p-8 rounded-xl hover-glow group">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 futuristic-text">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`glass-morphism p-8 rounded-xl hover-glow relative ${
                plan.popular ? 'ring-2 ring-purple-500' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white hover-glow'
                      : 'glass-morphism text-white hover:bg-slate-700/50'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 neon-text">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses that trust AI Analytics Dashboard Pro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-morphism p-8 rounded-xl hover-glow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 futuristic-text">
            Ready to Transform Your Analytics?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and see the power of AI-driven insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13024640950"
              className="group glass-morphism text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
            >
              Call: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIAnalyticsDashboardPro;
