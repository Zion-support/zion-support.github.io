'use client';
import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Palette, 
  Code, 
  Smartphone, 
  Search, 
  Zap, 
  Settings, 
  Shield, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Users, 
  Clock, 
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Monitor,
  Tablet,
  Smartphone as Mobile,
  Eye,
  Download,
  Upload,
  Share
} from 'lucide-react';

const AIWebsiteBuilderPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBuilding, setIsBuilding] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('business');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Palette,
      title: 'AI Design Suggestions',
      description: 'Intelligent design recommendations based on your industry and brand',
      benefits: ['Color palette generation', 'Layout optimization', 'Typography suggestions', 'Brand consistency']
    },
    {
      icon: Code,
      title: 'Drag & Drop Builder',
      description: 'Intuitive visual editor with real-time preview and instant updates',
      benefits: ['Visual editing', 'Real-time preview', 'Component library', 'Custom elements']
    },
    {
      icon: Search,
      title: 'Auto SEO Optimization',
      description: 'Automatic SEO optimization with meta tags, sitemaps, and performance tuning',
      benefits: ['Meta tag generation', 'Sitemap creation', 'Performance optimization', 'Schema markup']
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first design that looks perfect on all devices and screen sizes',
      benefits: ['Mobile optimization', 'Tablet compatibility', 'Desktop enhancement', 'Cross-browser support']
    },
    {
      icon: Zap,
      title: 'E-commerce Integration',
      description: 'Built-in e-commerce features with payment processing and inventory management',
      benefits: ['Payment gateways', 'Product management', 'Order tracking', 'Inventory sync']
    },
    {
      icon: Shield,
      title: 'Security & Performance',
      description: 'Enterprise-grade security with SSL certificates and CDN optimization',
      benefits: ['SSL certificates', 'CDN delivery', 'Security scanning', 'Performance monitoring']
    }
  ];

  const templates = [
    {
      name: 'Business',
      category: 'Corporate',
      description: 'Professional business website with modern design',
      features: ['About page', 'Services', 'Contact form', 'Blog', 'Team section'],
      price: 'Free',
      popular: true
    },
    {
      name: 'E-commerce',
      category: 'Online Store',
      description: 'Complete online store with shopping cart and checkout',
      features: ['Product catalog', 'Shopping cart', 'Payment processing', 'Order management', 'Inventory'],
      price: '$29',
      popular: true
    },
    {
      name: 'Portfolio',
      category: 'Creative',
      description: 'Stunning portfolio for creatives and professionals',
      features: ['Gallery', 'Project showcase', 'Resume', 'Contact', 'Social links'],
      price: 'Free',
      popular: false
    },
    {
      name: 'Restaurant',
      category: 'Food & Dining',
      description: 'Beautiful restaurant website with menu and reservations',
      features: ['Menu display', 'Online ordering', 'Reservations', 'Location', 'Reviews'],
      price: '$19',
      popular: false
    },
    {
      name: 'SaaS',
      category: 'Technology',
      description: 'Modern SaaS landing page with features and pricing',
      features: ['Hero section', 'Features', 'Pricing', 'Testimonials', 'CTA'],
      price: '$39',
      popular: true
    },
    {
      name: 'Nonprofit',
      category: 'Charity',
      description: 'Engaging nonprofit website with donation features',
      features: ['Mission statement', 'Donation form', 'Events', 'Volunteer signup', 'Impact stories'],
      price: 'Free',
      popular: false
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for personal websites and small businesses',
      features: [
        'Up to 5 websites',
        '10GB storage',
        'Custom domain',
        'SSL certificate',
        'Email support',
        'Basic templates',
        'Mobile optimization'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25 websites',
        '50GB storage',
        'Custom domains',
        'SSL certificates',
        'Priority support',
        'Premium templates',
        'E-commerce features',
        'Analytics dashboard',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited websites',
        'Unlimited storage',
        'Custom domains',
        'SSL certificates',
        '24/7 dedicated support',
        'All templates',
        'Advanced e-commerce',
        'Custom integrations',
        'White-label options',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '5,200+', label: 'Active Users' },
    { number: '50+', label: 'Templates' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  const integrations = [
    { name: 'Google Analytics', icon: '📊' },
    { name: 'Facebook Pixel', icon: '📘' },
    { name: 'Mailchimp', icon: '📧' },
    { name: 'Stripe', icon: '💳' },
    { name: 'PayPal', icon: '💰' },
    { name: 'Zapier', icon: '🔗' },
    { name: 'HubSpot', icon: '🎯' },
    { name: 'Salesforce', icon: '⚡' }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 matrix-bg">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Website Builder Pro
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed neon-glow-cyan">
              Build professional websites in minutes with AI-powered design suggestions, 
              drag-and-drop editor, and automatic SEO optimization. No coding required.
            </p>
            
            {/* Interactive Demo */}
            <div className="bg-slate-800/50 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <button
                  onClick={() => setIsBuilding(!isBuilding)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isBuilding 
                      ? 'bg-green-500 hover:bg-green-600 animate-pulse' 
                      : 'bg-cyan-500 hover:bg-cyan-600'
                  }`}
                >
                  {isBuilding ? <CheckCircle className="w-8 h-8 text-white" /> : <Globe className="w-8 h-8 text-white" />}
                </button>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {isBuilding ? 'Building Website...' : 'Ready to Build'}
                  </div>
                  <div className="text-sm text-gray-300">
                    {isBuilding ? 'AI is generating your website' : 'Choose a template to start'}
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
                  <Upload className="w-4 h-4 inline mr-2" />
                  Upload
                </button>
                <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                  <Download className="w-4 h-4 inline mr-2" />
                  Download
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                  <Share className="w-4 h-4 inline mr-2" />
                  Publish
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-cyan-400 font-semibold">Build in Minutes</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-purple-400 font-semibold">Auto SEO</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-pink-400 font-semibold">Mobile-First</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful Website Building Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to create professional websites with AI-powered assistance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card hover-lift p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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

      {/* Templates Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Professional Templates
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose from 50+ professionally designed templates for every industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div
                key={index}
                className={`futuristic-card hover-lift p-6 cursor-pointer transition-all ${
                  selectedTemplate === template.name.toLowerCase() ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setSelectedTemplate(template.name.toLowerCase())}
              >
                {template.popular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <div className="mb-4">
                  <div className="w-full h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg mb-4 flex items-center justify-center">
                    <Globe className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{template.name}</h3>
                    <span className="text-cyan-400 font-bold">{template.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{template.category}</p>
                  <p className="text-gray-300 text-sm">{template.description}</p>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {template.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Responsive Design Preview
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how your website looks on all devices with real-time preview
            </p>
          </div>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="w-16 h-20 bg-slate-700 rounded-lg mb-2 flex items-center justify-center">
                <Mobile className="w-8 h-8 text-gray-400" />
              </div>
              <div className="text-sm text-gray-300">Mobile</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-16 bg-slate-700 rounded-lg mb-2 flex items-center justify-center">
                <Tablet className="w-8 h-8 text-gray-400" />
              </div>
              <div className="text-sm text-gray-300">Tablet</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-16 bg-slate-700 rounded-lg mb-2 flex items-center justify-center">
                <Monitor className="w-8 h-8 text-gray-400" />
              </div>
              <div className="text-sm text-gray-300">Desktop</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and services for a complete website solution
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="futuristic-card hover-lift p-4 text-center">
                <div className="text-3xl mb-2">{integration.icon}</div>
                <div className="text-sm text-gray-300">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your website building needs. All plans include our core features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`futuristic-card hover-lift p-8 relative ${
                  plan.popular ? 'ring-2 ring-purple-500 neon-glow-purple' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join 5,200+ businesses already using our AI Website Builder Pro. Start building today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Building
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-gray-200 text-sm">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIWebsiteBuilderPage;