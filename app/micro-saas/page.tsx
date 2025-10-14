import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Cloud, 
  BarChart3, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Globe, 
  Smartphone, 
  Monitor,
  Brain,
  Code,
  Database,
  Mail,
  Clock,
  DollarSign,
  TrendingUp,
  Target,
  Settings
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      title: "AI-Powered CRM Pro",
      description: "Intelligent customer relationship management with AI insights and automation",
      icon: <Users className="w-8 h-8" />,
      price: "From $29/month",
      link: "/zion-ai-crm-pro",
      features: ["AI lead scoring", "Automated follow-ups", "Predictive analytics", "Multi-channel integration"],
      featured: true
    },
    {
      title: "Smart Inventory Manager",
      description: "AI-driven inventory optimization with predictive restocking and demand forecasting",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $49/month",
      link: "/zion-inventory-smart",
      features: ["Predictive analytics", "Auto-reordering", "Cost optimization", "Real-time tracking"],
      featured: true
    },
    {
      title: "Content Studio Pro",
      description: "AI-powered content creation and management platform for marketing teams",
      icon: <Brain className="w-8 h-8" />,
      price: "From $39/month",
      link: "/zion-content-studio",
      features: ["AI content generation", "Brand voice consistency", "Multi-platform publishing", "Performance analytics"],
      featured: true
    },
    {
      title: "Financial Analytics Suite",
      description: "Advanced financial reporting and analysis with AI-powered insights",
      icon: <DollarSign className="w-8 h-8" />,
      price: "From $59/month",
      link: "/ai-financial-analytics-pro",
      features: ["Real-time reporting", "Predictive modeling", "Risk assessment", "Compliance monitoring"],
      featured: false
    },
    {
      title: "Performance Monitor",
      description: "Employee performance tracking and analytics with AI-driven insights",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $34/month",
      link: "/zion-performance-monitor",
      features: ["Goal tracking", "Performance analytics", "Team insights", "Automated reports"],
      featured: false
    },
    {
      title: "Email Automation Pro",
      description: "Intelligent email marketing automation with AI optimization",
      icon: <Mail className="w-8 h-8" />,
      price: "From $24/month",
      link: "/zion-email-automation",
      features: ["Smart segmentation", "A/B testing", "Behavioral triggers", "ROI tracking"],
      featured: false
    }
  ];

  const features = [
    {
      title: "AI-Powered Automation",
      description: "Leverage artificial intelligence to automate repetitive tasks and optimize workflows",
      icon: <Brain className="w-6 h-6" />,
      stats: "90% time savings"
    },
    {
      title: "Real-time Analytics",
      description: "Get instant insights with comprehensive dashboards and reporting tools",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "Real-time data"
    },
    {
      title: "Cloud-Based Security",
      description: "Enterprise-grade security with end-to-end encryption and compliance standards",
      icon: <Shield className="w-6 h-6" />,
      stats: "99.9% uptime"
    },
    {
      title: "Scalable Solutions",
      description: "Grow with your business with flexible, scalable micro SAAS solutions",
      icon: <Cloud className="w-6 h-6" />,
      stats: "Unlimited scaling"
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 users',
        'Basic AI features',
        'Email support',
        'Standard integrations',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 25 users',
        'Advanced AI features',
        'Priority support',
        'Custom integrations',
        'Real-time analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited users',
        'Full AI capabilities',
        '24/7 dedicated support',
        'White-label options',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive micro SAAS solutions including AI-powered CRM, inventory management, content creation, and financial analytics tools for modern businesses." />
        <meta name="keywords" content="micro SAAS, business software, AI tools, CRM, inventory management, content creation, financial analytics, business automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Cloud className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Micro SAAS Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
            From CRM to inventory management, we provide the tools you need to succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="#services"
              variant="primary"
              size="lg"
              icon={<Cloud className="w-5 h-5" />}
            >
              Explore Solutions
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Built with modern technology and designed for business success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive business tools designed to streamline your operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <FuturisticCard
                key={index}
                className={`group hover:scale-105 transition-all duration-300 ${
                  service.featured ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-2 -right-2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="text-center mb-4">
                  <span className="text-purple-400 font-semibold text-lg">{service.price}</span>
                </div>
                <FuturisticButton
                  href={service.link}
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  Learn More
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-2 -right-2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to streamline operations and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Cloud className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Free 14-day trial • No credit card required • Cancel anytime</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default MicroSaasPage;