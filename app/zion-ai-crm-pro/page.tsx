import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Brain, 
  BarChart3, 
  Zap, 
  Shield, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Clock, 
  Award, 
  Target, 
  Mail, 
  Phone, 
  Globe,
  TrendingUp,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  Database,
  Smartphone,
  Monitor,
  Headphones
} from 'lucide-react';

const ZionAiCrmProPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Lead Scoring',
      description: 'Automatically score and prioritize leads using machine learning algorithms that analyze customer behavior, engagement patterns, and conversion probability.',
      icon: <Target className="w-6 h-6" />,
      benefits: ['95% accuracy in lead prediction', '40% increase in conversion rates', 'Automated lead qualification']
    },
    {
      title: 'Intelligent Contact Management',
      description: 'Smart contact organization with AI-driven insights, automatic data enrichment, and relationship mapping across all touchpoints.',
      icon: <Users className="w-6 h-6" />,
      benefits: ['Unified contact view', 'Automatic data updates', 'Relationship intelligence']
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Advanced analytics and forecasting tools that predict sales trends, customer lifetime value, and optimal engagement timing.',
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ['Sales forecasting', 'Customer insights', 'Performance optimization']
    },
    {
      title: 'Automated Workflow Engine',
      description: 'Create complex automation workflows that trigger based on customer actions, time-based events, and AI-detected patterns.',
      icon: <Zap className="w-6 h-6" />,
      benefits: ['Custom automation rules', 'Multi-channel campaigns', 'Smart follow-ups']
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot that handles customer inquiries, schedules meetings, and provides instant support 24/7.',
      icon: <MessageSquare className="w-6 h-6" />,
      benefits: ['24/7 customer support', 'Instant responses', 'Meeting scheduling']
    },
    {
      title: 'Advanced Security & Compliance',
      description: 'Enterprise-grade security with GDPR compliance, data encryption, and comprehensive audit trails.',
      icon: <Shield className="w-6 h-6" />,
      benefits: ['GDPR compliant', 'End-to-end encryption', 'Audit trails']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 1,000 contacts',
        'Basic AI lead scoring',
        'Email integration',
        'Mobile app access',
        'Standard support',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI analytics',
        'All integrations',
        'Custom workflows',
        'Priority support',
        'Advanced reporting',
        'AI chat assistant',
        'API access'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'Custom integrations',
        'Advanced automation',
        'Dedicated support',
        'Custom dashboards',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Sales Director',
      content: 'Zion AI CRM Pro increased our sales conversion by 45% in just 3 months. The AI lead scoring is incredibly accurate.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'CEO',
      content: 'The automation features saved us 20 hours per week. Our team can now focus on building relationships instead of data entry.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Solutions',
      role: 'Marketing Manager',
      content: 'The predictive analytics helped us identify our best customers and optimize our marketing spend. ROI increased by 60%.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const integrations = [
    { name: 'Salesforce', logo: 'SF' },
    { name: 'HubSpot', logo: 'HS' },
    { name: 'Mailchimp', logo: 'MC' },
    { name: 'Slack', logo: 'SL' },
    { name: 'Microsoft Teams', logo: 'MT' },
    { name: 'Zapier', logo: 'ZP' },
    { name: 'Google Workspace', logo: 'GW' },
    { name: 'Shopify', logo: 'SH' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI CRM Pro - AI-Powered Customer Relationship Management | Zion Tech Group</title>
        <meta name="description" content="Transform your sales process with Zion AI CRM Pro. Advanced AI-powered lead scoring, predictive analytics, and automated workflows. Start your free trial today!" />
        <meta name="keywords" content="AI CRM, customer relationship management, lead scoring, sales automation, predictive analytics, CRM software, business intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-crm-pro" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion AI CRM Pro",
            "description": "AI-powered customer relationship management platform with advanced analytics and automation",
            "url": "https://ziontechgroup.com/zion-ai-crm-pro",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "199",
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
                <Brain className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">AI-Powered CRM Solution</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion <span className="text-cyan-400">AI CRM Pro</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your sales process with the most advanced AI-powered CRM platform. 
                Boost conversions by 45% with intelligent lead scoring, predictive analytics, and automated workflows.
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
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">45%</div>
                  <div className="text-gray-300 text-sm">Increase in Conversions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">20h</div>
                  <div className="text-gray-300 text-sm">Saved Per Week</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                  <div className="text-gray-300 text-sm">Lead Scoring Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">AI Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to transform your customer relationships and boost sales performance.
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

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 14-day free trial.
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Sales Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses are transforming their sales process with Zion AI CRM Pro
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and platforms. Zion AI CRM Pro integrates with 100+ applications.
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
                Ready to Transform Your Sales Process?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of sales teams already using Zion AI CRM Pro to boost their performance. 
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

export default ZionAiCrmProPage;