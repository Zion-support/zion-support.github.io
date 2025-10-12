'use client'
import React from 'react'
import SEOHead from '../../components/SEOHead'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Eye, 
  Download, 
  Share2, 
  Settings,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Zap,
  Brain,
  Database,
  PieChart,
  Activity,
  Target,
  Award
} from 'lucide-react'
import { Link } from 'react-router-dom'

const AnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Real-time Dashboards',
      description: 'Monitor your business metrics with live, interactive dashboards that update in real-time.',
      benefits: ['Live data updates', 'Customizable widgets', 'Mobile responsive', 'Export capabilities']
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on your data patterns.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Smart alerts']
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Data Integration',
      description: 'Connect to multiple data sources and APIs for comprehensive business intelligence.',
      benefits: ['API integrations', 'Database connections', 'File uploads', 'Cloud sync']
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'Custom Reports',
      description: 'Create and schedule custom reports tailored to your specific business needs.',
      benefits: ['Report builder', 'Scheduled delivery', 'Multiple formats', 'White-label options']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started with analytics',
      features: [
        'Up to 5 dashboards',
        'Basic AI insights',
        '3 data sources',
        'Email support',
        'Standard reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses with advanced analytics needs',
      features: [
        'Unlimited dashboards',
        'Advanced AI insights',
        'Unlimited data sources',
        'Priority support',
        'Custom reports',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Everything in Professional',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        'Training & onboarding'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'The AI Analytics Dashboard has transformed how we make business decisions. The insights are incredibly accurate and actionable.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataCorp Solutions',
      role: 'Data Analyst',
      content: 'Finally, a dashboard that actually understands our data. The AI recommendations have saved us hours of analysis time.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'GrowthCo',
      role: 'Marketing Director',
      content: 'The real-time dashboards help us track campaign performance instantly. Our ROI has improved by 40% since implementation.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Analytics Dashboard Pro - Real-time Business Intelligence | Zion Tech Group"
        description="Advanced AI-powered analytics dashboard with real-time insights, predictive analytics, and custom reporting. Starting at $29/month. Contact us at +1 302 464 0950"
        keywords="analytics dashboard, business intelligence, AI insights, real-time data, predictive analytics, custom reports"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              📊 AI-Powered Analytics Solution
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            AI Analytics
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Dashboard Pro
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your data into actionable insights with our AI-powered analytics dashboard. 
            Get real-time business intelligence, predictive analytics, and custom reporting.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="#pricing" 
              className="group border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              View Pricing
              <DollarSign className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to turn your data into business intelligence and actionable insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/40 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:scale-105">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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
      <section id="pricing" className="py-24 px-4 bg-gradient-to-r from-gray-900/50 to-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Simple Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl transform hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-400/40 shadow-2xl shadow-blue-500/10' 
                  : 'border-white/10 hover:border-blue-400/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
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
                <Link 
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25'
                      : 'border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-gray-900'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                What Our Customers Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of businesses already using our AI Analytics Dashboard to drive growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/40 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/30 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your 14-day free trial today. No credit card required. 
                Get in touch with our team for a personalized demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Now
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Request Demo
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AnalyticsDashboardPage
