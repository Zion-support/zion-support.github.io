import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, PieChart, LineChart, Activity, Database, Filter, Download, RefreshCw } from 'lucide-react';

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Real-time Visualization',
      description: 'Interactive dashboards with real-time data visualization and customizable charts for instant insights.'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Predictive Analytics',
      description: 'AI-powered predictive models that forecast trends, customer behavior, and business outcomes.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Custom Reports',
      description: 'Generate automated reports with AI-driven insights and recommendations tailored to your business.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'API Integration',
      description: 'Seamlessly connect with 100+ data sources including Google Analytics, Salesforce, and custom APIs.'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Alert System',
      description: 'Intelligent alerts and notifications when key metrics change or anomalies are detected.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Mobile Responsive',
      description: 'Access your analytics anywhere with our fully responsive mobile-optimized dashboard.'
    }
  ];

  const benefits = [
    'Increase decision speed by 40% with real-time insights',
    'Reduce manual reporting by 80% through automation',
    'Identify trends and opportunities 3x faster',
    'Improve forecasting accuracy by 60%',
    'Save 20+ hours per week on data analysis',
    'Make data-driven decisions with confidence'
  ];

  const integrations = [
    'Google Analytics', 'Google Ads', 'Facebook Ads', 'Salesforce', 'HubSpot', 'Shopify', 'Stripe', 'PayPal', 'Mailchimp', 'Zapier', 'Webhooks', 'REST APIs'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25 data sources',
        'Advanced AI analytics',
        'Custom dashboards',
        'Priority support',
        'Up to 10 user accounts',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Analytics Dashboard Pro - Zion Tech Group</title>
        <meta name="description" content="Real-time business intelligence with predictive analytics, automated insights, and custom reporting. Increase decision speed by 40% and save 20+ hours per week." />
        <meta name="keywords" content="ai analytics, business intelligence, data visualization, predictive analytics, dashboard, reporting" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BarChart className="w-4 h-4" />
            <span>Analytics & BI</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            AI Analytics Dashboard Pro
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Real-time business intelligence with predictive analytics, automated insights, and custom reporting. 
            Transform your data into actionable business intelligence with AI-powered analysis.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300 text-sm">Faster Decisions</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300 text-sm">Less Manual Work</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-gray-300 text-sm">Data Sources</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Monitoring</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Analytics Dashboard Pro Inquiry"
              className="cyber-button w-full sm:w-auto text-center inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Demo
            </a>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2 text-cyan-300">
                <Phone className="w-5 h-5" />
                <span className="font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-300">
                <Mail className="w-5 h-5" />
                <span className="font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-300">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Powerful Analytics Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our AI Analytics Dashboard?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="cyber-card hologram-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Market Comparison</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Our AI Analytics Pro</span>
                  <span className="text-cyan-400 font-bold">$199/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Tableau Creator</span>
                  <span className="text-gray-400">$70/user/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Power BI Pro</span>
                  <span className="text-gray-400">$10/user/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Looker Studio</span>
                  <span className="text-gray-400">$50/user/month</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-600/20 rounded-lg border border-green-500/30">
                <p className="text-green-300 text-sm">
                  <strong>Superior AI capabilities</strong> with predictive analytics and automated insights not available in traditional BI tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Seamless Data Integrations
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-2xl mb-3">🔗</div>
                <div className="text-white font-medium">{integration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Flexible Pricing Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
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
                
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=${plan.name} Plan - AI Analytics Dashboard Pro`}
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Data into Insights?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses using our AI-powered analytics to make better decisions and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAnalyticsDashboardPage;