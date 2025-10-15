import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Code, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Clock,
  Users,
  TrendingUp,
  Settings,
  Smartphone,
  Globe,
  Database,
  Lock,
  Award,
  Target,
  Rocket,
  Mail
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-analytics-dashboard-pro',
      name: 'AI Analytics Dashboard Pro',
      price: 'From $299/month',
      description: 'Advanced AI-powered analytics platform with real-time insights and predictive capabilities',
      features: [
        'Real-time data visualization',
        'Predictive analytics and forecasting',
        'Custom dashboard creation',
        'Multi-source data integration',
        'Automated reporting',
        'Advanced machine learning models',
        'API integration',
        'Mobile app support'
      ],
      benefits: [
        'Increase decision-making speed by 300%',
        'Reduce manual reporting time by 80%',
        'Improve forecast accuracy by 45%',
        'Real-time business insights'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-600',
      popular: true,
      category: 'Analytics'
    },
    {
      id: 'ai-content-generation-pro',
      name: 'AI Content Generation Pro',
      price: 'From $199/month',
      description: 'Comprehensive AI content creation platform for all your marketing and communication needs',
      features: [
        'Multi-language content generation',
        'SEO-optimized content',
        'Brand voice customization',
        'Content templates library',
        'Plagiarism detection',
        'Content scheduling',
        'Social media integration',
        'Performance analytics'
      ],
      benefits: [
        'Reduce content creation time by 70%',
        'Improve SEO rankings by 60%',
        'Increase engagement rates by 40%',
        'Consistent brand voice across all content'
      ],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      popular: true,
      category: 'Content'
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      price: 'From $99/month',
      description: 'Intelligent project management tool with AI-powered insights and automation',
      features: [
        'Task automation and scheduling',
        'Resource optimization',
        'Risk prediction and mitigation',
        'Team collaboration tools',
        'Progress tracking',
        'Budget management',
        'Timeline optimization',
        'Performance analytics'
      ],
      benefits: [
        'Increase project success rate by 50%',
        'Reduce project delays by 60%',
        'Improve team productivity by 40%',
        'Better resource allocation'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      popular: false,
      category: 'Productivity'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      price: 'From $149/month',
      description: 'Intelligent customer support system with 24/7 availability and multilingual capabilities',
      features: [
        '24/7 automated support',
        'Multi-language support',
        'Sentiment analysis',
        'Ticket routing and prioritization',
        'Knowledge base integration',
        'Live chat handoff',
        'Customer satisfaction tracking',
        'Custom response templates'
      ],
      benefits: [
        'Reduce response time by 90%',
        'Increase customer satisfaction by 50%',
        'Handle 10x more inquiries',
        '24/7 availability'
      ],
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      popular: true,
      category: 'Support'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing',
      price: 'From $99/month',
      description: 'Advanced email marketing platform with AI-powered personalization and optimization',
      features: [
        'AI-powered personalization',
        'A/B testing automation',
        'Deliverability optimization',
        'Segmentation and targeting',
        'Email template library',
        'Performance analytics',
        'Automation workflows',
        'Integration with CRM systems'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Improve click-through rates by 60%',
        'Reduce unsubscribe rates by 30%',
        'Better customer engagement'
      ],
      icon: <Mail className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600',
      popular: false,
      category: 'Marketing'
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      price: 'From $29/month',
      description: 'Smart expense tracking and management with AI-powered categorization and insights',
      features: [
        'Receipt scanning and OCR',
        'Automatic categorization',
        'Budget alerts and notifications',
        'Expense reporting',
        'Tax preparation support',
        'Multi-currency support',
        'Team expense management',
        'Integration with accounting software'
      ],
      benefits: [
        'Save 5+ hours per week on expense tracking',
        'Reduce errors by 90%',
        'Improve budget control',
        'Simplified tax preparation'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-emerald-500 to-green-600',
      popular: false,
      category: 'Finance'
    },
    {
      id: 'ai-password-manager',
      name: 'AI Password Manager',
      price: 'From $19/month',
      description: 'Secure password management with AI-powered security recommendations',
      features: [
        'Secure password storage',
        'Password generation',
        'Breach monitoring',
        'Two-factor authentication',
        'Password sharing',
        'Security audit',
        'Browser integration',
        'Mobile app support'
      ],
      benefits: [
        'Enhance security posture',
        'Reduce password-related risks',
        'Simplify password management',
        'Protect against breaches'
      ],
      icon: <Lock className="w-8 h-8" />,
      color: 'from-red-500 to-pink-600',
      popular: false,
      category: 'Security'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      price: 'From $149/month',
      description: 'Comprehensive social media management with AI-powered content and scheduling',
      features: [
        'Auto-posting and scheduling',
        'Engagement tracking',
        'Trend analysis',
        'Content recommendations',
        'Hashtag optimization',
        'Performance analytics',
        'Multi-platform support',
        'Influencer collaboration tools'
      ],
      benefits: [
        'Increase social media engagement by 80%',
        'Save 10+ hours per week',
        'Improve content performance',
        'Better brand visibility'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-600',
      popular: true,
      category: 'Social Media'
    }
  ];

  const categories = [
    { name: 'Analytics', icon: <BarChart3 className="w-6 h-6" />, count: 3 },
    { name: 'Content', icon: <FileText className="w-6 h-6" />, count: 4 },
    { name: 'Productivity', icon: <Target className="w-6 h-6" />, count: 5 },
    { name: 'Marketing', icon: <TrendingUp className="w-6 h-6" />, count: 6 },
    { name: 'Support', icon: <MessageSquare className="w-6 h-6" />, count: 2 },
    { name: 'Security', icon: <Shield className="w-6 h-6" />, count: 3 }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 users',
        'Basic AI features',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced AI features',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'API access',
        'Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Premium AI features',
        '24/7 support',
        'Custom development',
        'Advanced analytics',
        'Full API access',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Ready-to-Use Software Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Micro SAAS
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Deploy powerful AI-powered software solutions instantly. No setup, no configuration, 
              just immediate value for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solution Categories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of micro SAAS solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group text-center p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-cyan-400">{category.icon}</div>
                </div>
                <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} solutions</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Micro SAAS Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of micro SAAS solutions designed to meet your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service) => (
              <div key={service.id} className={`group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${service.popular ? 'border-cyan-500/40 ring-2 ring-cyan-500/20' : 'border-cyan-500/20'}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                      {service.category}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="text-2xl font-bold text-cyan-400 mb-6">
                    {service.price}
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-cyan-400 text-sm">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-lg font-semibold text-white">Benefits:</h4>
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={`/${service.id}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group/btn shadow-lg hover:shadow-cyan-500/25"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Simple Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include 30-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border rounded-3xl p-8 ${tier.popular ? 'border-cyan-500/40 ring-2 ring-cyan-500/20 scale-105' : 'border-cyan-500/20'}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {tier.price}
                    <span className="text-lg text-gray-400">{tier.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl p-12 border border-cyan-500/20 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Get Started?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
                Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  View All Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;