import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  DollarSign,
  Clock,
  Target,
  TrendingUp,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  Globe
} from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const ZionAICRMProPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Lead Scoring",
      description: "Automatically score and prioritize leads using machine learning algorithms that analyze behavior patterns, engagement history, and conversion probability.",
      benefit: "Increase conversion rates by 40%"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Intelligent Chat Automation",
      description: "Deploy AI chatbots that understand context, handle complex queries, and seamlessly transfer to human agents when needed.",
      benefit: "Reduce response time by 80%"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Forecast sales trends, identify upsell opportunities, and predict customer churn with advanced predictive modeling.",
      benefit: "Boost revenue by 25%"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Smart Pipeline Management",
      description: "AI-driven pipeline optimization that suggests next best actions, identifies bottlenecks, and automates follow-ups.",
      benefit: "Accelerate deals by 35%"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer 360° View",
      description: "Comprehensive customer profiles with AI-generated insights, interaction history, and personalized recommendations.",
      benefit: "Improve customer satisfaction by 50%"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Advanced dashboards with AI-powered insights, performance metrics, and actionable recommendations for sales teams.",
      benefit: "Make data-driven decisions instantly"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 1,000 contacts",
        "Basic AI lead scoring",
        "Email automation",
        "Standard reporting",
        "Email support",
        "Mobile app access"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 contacts",
        "Advanced AI analytics",
        "Custom automation workflows",
        "Advanced reporting & dashboards",
        "Priority support",
        "API access",
        "Team collaboration tools"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited contacts",
        "Full AI suite",
        "Custom integrations",
        "White-label options",
        "Dedicated support",
        "Advanced security",
        "Custom training"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const integrations = [
    { name: "Salesforce", logo: "🔗" },
    { name: "HubSpot", logo: "🔗" },
    { name: "Microsoft Dynamics", logo: "🔗" },
    { name: "Pipedrive", logo: "🔗" },
    { name: "Zendesk", logo: "🔗" },
    { name: "Slack", logo: "🔗" },
    { name: "Microsoft Teams", logo: "🔗" },
    { name: "Google Workspace", logo: "🔗" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Zion AI CRM Pro - AI-Powered Customer Relationship Management | Zion Tech Group"
        description="Transform your sales process with Zion AI CRM Pro. Advanced AI lead scoring, predictive analytics, intelligent automation, and comprehensive customer insights. Start your free trial today!"
        keywords="AI CRM, customer relationship management, lead scoring, sales automation, predictive analytics, CRM software"
        canonicalUrl="https://ziontechgroup.com/zion-ai-crm-pro"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8">
              <Brain className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">AI-Powered CRM Solution</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Zion AI CRM Pro
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your sales process with AI-powered customer relationship management. 
              Boost conversions, predict customer behavior, and automate your entire sales pipeline.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Free 14-day trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Setup in 5 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to transform your sales process and drive unprecedented growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-sm text-green-400 font-medium">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core AI features and 24/7 support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/50 ring-2 ring-purple-500/20' 
                    : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'border border-purple-500 text-purple-300 hover:bg-purple-500/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms. Our AI CRM works with 100+ popular business applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {integration.logo}
                </div>
                <span className="text-sm text-gray-300 text-center font-medium">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using Zion AI CRM Pro to boost their sales performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a> or <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">+1 302 464 0950</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAICRMProPage;
