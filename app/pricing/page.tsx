'use client';
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Users, 
  Clock, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Award,
  TrendingUp,
  Target,
  BarChart3,
  Settings,
  Globe,
  Lock,
  Sparkles,
  Crown,
  Rocket,
  Diamond
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [billingCycle, setBillingCycle] = useState('monthly');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSaasPlans = [
    {
      name: 'Starter',
      icon: Zap,
      price: { monthly: 29, yearly: 290 },
      originalPrice: { monthly: 49, yearly: 490 },
      description: 'Perfect for individuals and small teams getting started with AI tools',
      features: [
        'Access to 5 AI tools',
        '1,000 AI generations/month',
        'Basic templates',
        'Email support',
        'Mobile app access',
        'Standard analytics'
      ],
      limitations: [
        'Limited to 2 team members',
        'Basic integrations only',
        'Standard response times'
      ],
      popular: false,
      cta: 'Start Free Trial',
      color: 'cyan'
    },
    {
      name: 'Professional',
      icon: Crown,
      price: { monthly: 99, yearly: 990 },
      originalPrice: { monthly: 149, yearly: 1490 },
      description: 'Ideal for growing businesses and professional teams',
      features: [
        'Access to all 25+ AI tools',
        '10,000 AI generations/month',
        'Premium templates',
        'Priority support',
        'API access',
        'Advanced analytics',
        'Team collaboration',
        'Custom integrations',
        'White-label options'
      ],
      limitations: [
        'Up to 10 team members',
        'Standard SLA'
      ],
      popular: true,
      cta: 'Start Free Trial',
      color: 'purple'
    },
    {
      name: 'Enterprise',
      icon: Diamond,
      price: { monthly: 299, yearly: 2990 },
      originalPrice: { monthly: 449, yearly: 4490 },
      description: 'Advanced features for large organizations and enterprises',
      features: [
        'Unlimited AI generations',
        'All premium features',
        'Dedicated support',
        'Custom AI models',
        'On-premise deployment',
        'Advanced security',
        'Unlimited team members',
        'Custom training',
        'SLA guarantee',
        'White-label solutions'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales',
      color: 'gold'
    }
  ];

  const enterpriseServices = [
    {
      category: 'AI Solutions',
      icon: Brain,
      services: [
        {
          name: 'Machine Learning Solutions',
          description: 'Custom ML models for predictive analytics and automation',
          price: { monthly: 1500, yearly: 15000 },
          features: ['Custom model development', 'Data pipeline setup', 'Model monitoring', 'A/B testing'],
          popular: true
        },
        {
          name: 'AI Customer Service Automation',
          description: 'Intelligent customer service with sentiment analysis',
          price: { monthly: 1200, yearly: 12000 },
          features: ['Sentiment analysis', 'Smart routing', 'Auto-response', 'Multi-language support'],
          popular: false
        },
        {
          name: 'AI Supply Chain Optimization',
          description: 'Intelligent supply chain management and optimization',
          price: { monthly: 1800, yearly: 18000 },
          features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Risk assessment'],
          popular: false
        },
        {
          name: 'AI Fraud Detection System',
          description: 'Advanced fraud prevention with real-time monitoring',
          price: { monthly: 2200, yearly: 22000 },
          features: ['Real-time detection', 'Pattern recognition', 'Risk scoring', 'Compliance monitoring'],
          popular: true
        }
      ]
    },
    {
      category: 'IT Services',
      icon: Cloud,
      services: [
        {
          name: 'Cloud Migration Services',
          description: 'Seamless cloud migration with zero downtime',
          price: { monthly: 2000, yearly: 20000 },
          features: ['Zero downtime migration', 'Performance optimization', 'Security hardening', '24/7 support'],
          popular: true
        },
        {
          name: 'Cybersecurity Solutions',
          description: 'Comprehensive cybersecurity and threat protection',
          price: { monthly: 1800, yearly: 18000 },
          features: ['Threat detection', 'Incident response', 'Vulnerability assessment', '24/7 monitoring'],
          popular: true
        },
        {
          name: 'DevOps & CI/CD',
          description: 'Modern DevOps practices and automated deployment',
          price: { monthly: 1500, yearly: 15000 },
          features: ['CI/CD pipeline', 'Infrastructure as code', 'Monitoring & logging', 'Team training'],
          popular: false
        },
        {
          name: 'Database Services',
          description: 'Advanced database management and optimization',
          price: { monthly: 1200, yearly: 12000 },
          features: ['Database optimization', 'Backup & recovery', 'Performance tuning', '24/7 support'],
          popular: false
        }
      ]
    },
    {
      category: 'Specialized Solutions',
      icon: Rocket,
      services: [
        {
          name: 'Quantum Computing Solutions',
          description: 'Cutting-edge quantum computing and algorithms',
          price: { monthly: 5000, yearly: 50000 },
          features: ['Quantum algorithms', 'Optimization problems', 'Research & development', 'Custom solutions'],
          popular: false
        },
        {
          name: 'Autonomous Systems',
          description: 'Advanced autonomous systems and robotics',
          price: { monthly: 4000, yearly: 40000 },
          features: ['Robotics development', 'Drone technology', 'Self-driving systems', 'Safety systems'],
          popular: false
        },
        {
          name: 'Blockchain & Web3',
          description: 'Comprehensive blockchain and Web3 solutions',
          price: { monthly: 2500, yearly: 25000 },
          features: ['Smart contracts', 'DeFi development', 'NFT solutions', 'Web3 integration'],
          popular: true
        },
        {
          name: 'IoT & Edge Computing',
          description: 'Comprehensive IoT solutions and edge computing',
          price: { monthly: 1800, yearly: 18000 },
          features: ['Sensor networks', 'Edge processing', 'Real-time analytics', 'Device management'],
          popular: false
        }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const getPrice = (plan: any) => {
    return billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly;
  };

  const getOriginalPrice = (plan: any) => {
    return billingCycle === 'yearly' ? plan.originalPrice.yearly : plan.originalPrice.monthly;
  };

  const getSavings = (plan: any) => {
    const original = getOriginalPrice(plan);
    const current = getPrice(plan);
    return original - current;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="cyber-grid-enhanced absolute inset-0"></div>
        <div className="neural-network-bg absolute inset-0"></div>
        <div className="quantum-particles absolute inset-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Diamond className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Transparent Pricing</span>
            </div>
            
            <h1 className="cyber-text-3d text-5xl md:text-7xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include 14-day free trial and no setup fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Micro SAAS Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our comprehensive suite of AI-powered micro SAAS applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {microSaasPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${
                    plan.color === 'cyan' ? 'bg-cyan-500/10 border border-cyan-500/20' :
                    plan.color === 'purple' ? 'bg-purple-500/10 border border-purple-500/20' :
                    'bg-yellow-500/10 border border-yellow-500/20'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${
                      plan.color === 'cyan' ? 'text-cyan-400' :
                      plan.color === 'purple' ? 'text-purple-400' :
                      'text-yellow-400'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-4xl font-bold text-cyan-400">
                      ${getPrice(plan).toLocaleString()}
                    </span>
                    <span className="text-gray-400">
                      /{billingCycle === 'yearly' ? 'year' : 'month'}
                    </span>
                  </div>
                  {getOriginalPrice(plan) > getPrice(plan) && (
                    <div className="mt-2">
                      <span className="text-sm text-gray-500 line-through">
                        ${getOriginalPrice(plan).toLocaleString()}
                      </span>
                      <span className="ml-2 text-sm text-green-400 font-medium">
                        Save ${getSavings(plan).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.limitations.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Limitations:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-center space-x-3 text-sm text-gray-500">
                          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button-enhanced'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Services Pricing */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Enterprise Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Custom solutions for large organizations and enterprise clients
            </p>
          </div>
          
          <div className="space-y-16">
            {enterpriseServices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                    <category.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className={`cyber-card p-6 ${service.popular ? 'border-cyan-400' : ''}`}>
                      {service.popular && (
                        <div className="flex items-center space-x-2 mb-4">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-yellow-400">Popular Choice</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                          <p className="text-gray-300 text-sm">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">
                            ${service.price[billingCycle].toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-400">
                            /{billingCycle === 'yearly' ? 'year' : 'month'}
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a
                        href="/contact"
                        className="w-full py-2 px-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-lg text-center transition-all duration-300"
                      >
                        Get Quote
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="cyber-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We deliver exceptional value with our comprehensive AI and IT solutions
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-gray-300">300% average ROI for our clients</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock technical support</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="cyber-button-enhanced px-8 py-4 text-lg flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Custom Quote</span>
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg rounded-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300">Ready to get started? Contact our team today.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-white transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-white transition-colors">
                {contactInfo.email}
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;