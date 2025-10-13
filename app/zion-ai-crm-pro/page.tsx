import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BarChart3, 
  Mail, 
  Phone, 
  Calendar, 
  Target, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Brain,
  Database,
  Globe,
  Clock,
  Award,
  Sparkles
} from 'lucide-react';

const ZionAICrmProPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Lead Scoring',
      description: 'Automatically score and prioritize leads using machine learning algorithms',
      icon: <Target className="w-6 h-6" />,
      benefits: ['95% accuracy in lead qualification', '40% increase in conversion rates', 'Real-time scoring updates']
    },
    {
      title: 'Intelligent Contact Management',
      description: 'Smart contact organization with automatic data enrichment and deduplication',
      icon: <Users className="w-6 h-6" />,
      benefits: ['Auto-enrichment from 50+ sources', 'Duplicate detection & merging', 'Contact relationship mapping']
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Advanced analytics with AI-driven insights and forecasting',
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ['Sales forecasting with 85% accuracy', 'Pipeline health monitoring', 'Custom KPI tracking']
    },
    {
      title: 'Automated Email Sequences',
      description: 'AI-powered email campaigns that adapt based on customer behavior',
      icon: <Mail className="w-6 h-6" />,
      benefits: ['Personalized content generation', 'Optimal send time detection', 'A/B testing automation']
    },
    {
      title: 'Smart Task Management',
      description: 'AI-driven task prioritization and automated follow-up reminders',
      icon: <Calendar className="w-6 h-6" />,
      benefits: ['Priority-based task sorting', 'Automated follow-up scheduling', 'Team collaboration tools']
    },
    {
      title: 'Advanced Reporting Suite',
      description: 'Comprehensive reporting with AI insights and custom dashboards',
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ['Real-time performance metrics', 'Custom report builder', 'Data visualization tools']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 1,000 contacts',
        'Basic AI lead scoring',
        'Email automation (500/month)',
        'Standard reporting',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI analytics',
        'Unlimited email automation',
        'Custom dashboards',
        'Phone & email support',
        'API access',
        'Advanced integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'AI-powered forecasting',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Custom integrations',
        'Advanced security'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Sales Director',
      content: 'Zion AI CRM Pro increased our lead conversion by 60% in just 3 months. The AI insights are incredibly accurate.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'VP Sales',
      content: 'The predictive analytics helped us identify our best prospects. Our sales team productivity has doubled.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Solutions',
      role: 'Sales Manager',
      content: 'Finally, a CRM that actually helps instead of just storing data. The AI features are game-changing.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '60%', label: 'Average Conversion Increase', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '95%', label: 'Lead Scoring Accuracy', icon: <Target className="w-6 h-6" /> },
    { number: '24/7', label: 'AI-Powered Support', icon: <Brain className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI CRM Pro - AI-Powered Customer Relationship Management | Zion Tech Group</title>
        <meta name="description" content="Transform your sales process with Zion AI CRM Pro. AI-powered lead scoring, predictive analytics, automated email sequences, and intelligent contact management. Start your free trial today!" />
        <meta name="keywords" content="AI CRM, customer relationship management, lead scoring, sales automation, predictive analytics, contact management, sales forecasting" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-crm-pro" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI CRM Pro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {' '}Powered by AI
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most intelligent CRM platform that uses AI to automate your sales process, 
              predict customer behavior, and maximize your revenue potential. 
              Transform your sales team with cutting-edge artificial intelligence.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Watch Demo</span>
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Features That Drive Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our advanced AI technology automates complex sales processes and provides 
                insights that help you close more deals faster.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl p-8 relative ${
                    plan.popular 
                      ? 'border-blue-500/50 ring-2 ring-blue-500/20' 
                      : 'border-white/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
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
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Sales Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See what our customers say about Zion AI CRM Pro
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
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
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Sales Process?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of sales teams already using Zion AI CRM Pro to close more deals.
                Start your free 14-day trial today - no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
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

export default ZionAICrmProPage;