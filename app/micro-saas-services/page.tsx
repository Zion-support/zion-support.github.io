import React from 'react';
import { CheckCircle, Star, Brain, BarChart3, Users, Settings, ArrowRight, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation tool with SEO optimization and brand voice matching.',
      features: ['SEO-optimized content', 'Brand voice training', 'Multi-language support', 'Content analytics'],
      pricing: 'Starting at $29/month',
      link: '/micro-saas-services/ai-content-writer',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated reporting.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      pricing: 'Starting at $49/month',
      link: '/micro-saas-services/ai-analytics-dashboard',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'AI Lead Generation',
      description: 'Automated lead scoring and qualification with CRM integration and follow-up automation.',
      features: ['Lead scoring', 'CRM integration', 'Email automation', 'Performance tracking'],
      pricing: 'Starting at $39/month',
      link: '/micro-saas-services/ai-lead-generation',
      popular: false
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with automated responses, scheduling, and priority handling.',
      features: ['Smart responses', 'Email scheduling', 'Priority filtering', 'Template library'],
      pricing: 'Starting at $19/month',
      link: '/micro-saas-services/ai-email-assistant',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Social Media Manager',
      description: 'Automated social media posting, engagement, and analytics across all platforms.',
      features: ['Auto-posting', 'Engagement tracking', 'Content suggestions', 'Analytics reports'],
      pricing: 'Starting at $35/month',
      link: '/micro-saas-services/ai-social-media-manager',
      popular: false
    },
    {
      icon: <Brain className="w-8 h-8 text-red-500" />,
      title: 'AI Code Assistant',
      description: 'AI-powered code generation, debugging, and optimization for developers.',
      features: ['Code generation', 'Bug detection', 'Code optimization', 'Documentation'],
      pricing: 'Starting at $45/month',
      link: '/micro-saas-services/ai-code-assistant',
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Affordable Pricing',
      description: 'Start with low monthly costs and scale as your business grows. No long-term contracts required.'
    },
    {
      title: 'Easy Setup',
      description: 'Get up and running in minutes with our intuitive setup process and comprehensive documentation.'
    },
    {
      title: '24/7 Support',
      description: 'Get help when you need it with our dedicated support team available around the clock.'
    },
    {
      title: 'Regular Updates',
      description: 'Benefit from continuous improvements and new features added regularly to all our tools.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Basic AI features',
        'Email support',
        'Standard templates',
        'Basic analytics',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI features',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        '5 user accounts',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'All AI features',
        'Dedicated support',
        'White-label options',
        'Custom integrations',
        'Unlimited users',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Affordable AI-powered micro SAAS tools for modern businesses. From content creation to analytics, boost your productivity with our intelligent solutions." />
        <meta name="keywords" content="micro SAAS, AI tools, business software, productivity tools, automation, affordable software" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Micro SAAS Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, affordable AI-powered tools designed for modern businesses. Boost your productivity and efficiency with our intelligent micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Services Grid */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SAAS Tools</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our suite of AI-powered productivity tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'border-purple-500 bg-white/15' : 'border-white/20'
                }`}>
                  {service.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </div>
                    </div>
                  )}
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-400 font-semibold text-sm mb-4">{service.pricing}</div>
                  <Link 
                    to={service.link}
                    className="text-white text-sm hover:text-blue-400 transition-colors flex items-center"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS Tools?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built for modern businesses that need powerful, affordable solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  tier.popular ? 'border-purple-500 bg-white/15' : 'border-white/20'
                }`}>
                  {tier.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our micro SAAS tools to work smarter and faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSaasServicesPage;