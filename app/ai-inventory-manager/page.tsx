import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Package, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  DollarSign,
  Calendar,
  BarChart3,
  Target,
  Users,
  Globe,
  Lock,
  Download,
  Upload,
  Bell,
  Settings,
  CreditCard,
  Smartphone,
  Shield,
  PieChart,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Edit,
  Trash2,
  Copy,
  Eye,
  Plus,
  Minus,
  Calculator,
  Truck,
  Warehouse,
  AlertTriangle,
  RefreshCw,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Database,
  Cpu,
  Activity
} from 'lucide-react';

export default function AIInventoryManagerPage() {
  const features = [
    {
      icon: Cpu,
      title: 'AI Demand Forecasting',
      description: 'Machine learning algorithms predict demand patterns with 95% accuracy, optimizing stock levels',
      benefit: 'Reduce stockouts by 80% and overstock by 60%'
    },
    {
      icon: Package,
      title: 'Smart Reorder Points',
      description: 'AI automatically calculates optimal reorder points based on lead times and demand patterns',
      benefit: 'Never run out of stock or over-order again'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboard with live inventory tracking, turnover rates, and profitability analysis',
      benefit: 'Make data-driven decisions instantly'
    },
    {
      icon: Truck,
      title: 'Supply Chain Optimization',
      description: 'AI optimizes supplier relationships, delivery routes, and warehouse operations',
      benefit: 'Reduce logistics costs by 25-40%'
    },
    {
      icon: AlertTriangle,
      title: 'Predictive Alerts',
      description: 'Get notified about potential stockouts, slow-moving items, and quality issues before they happen',
      benefit: 'Prevent costly inventory problems'
    },
    {
      icon: Smartphone,
      title: 'Mobile Management',
      description: 'Native mobile apps with barcode scanning, real-time updates, and offline sync',
      benefit: 'Manage inventory anywhere, anytime'
    }
  ];

  const pricingPlans = [
    {
      name: 'Startup',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 SKUs',
        'Basic AI forecasting',
        'Mobile app access',
        'Basic analytics',
        'Email support',
        '2 user accounts',
        'Standard integrations'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI forecasting',
        'Multi-location support',
        'Advanced analytics & reporting',
        'Barcode scanning',
        'API access',
        'Priority support',
        '5 user accounts',
        'Advanced integrations',
        'Custom alerts'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$249',
      period: '/month',
      description: 'For large organizations and warehouses',
      features: [
        'Unlimited SKUs',
        'Custom AI models',
        'Multi-warehouse management',
        'Advanced supply chain optimization',
        'Custom integrations',
        'Dedicated support',
        'Unlimited users',
        'White-label options',
        'Advanced compliance tools',
        'Custom reporting'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Operations Manager, Retail Chain',
      content: 'AI Inventory Manager reduced our stockouts by 85% and improved our cash flow by $200K annually. The demand forecasting is incredibly accurate.',
      rating: 5,
      company: 'Retail Plus Chain'
    },
    {
      name: 'John Chen',
      role: 'CEO, E-commerce Company',
      content: 'The predictive alerts saved us from a major stockout during peak season. Our inventory turnover improved by 40% in just 3 months.',
      rating: 5,
      company: 'TechGear E-commerce'
    },
    {
      name: 'Sarah Johnson',
      role: 'Warehouse Manager, Manufacturing',
      content: 'The multi-location support and supply chain optimization features transformed our operations. We reduced logistics costs by 35%.',
      rating: 5,
      company: 'Johnson Manufacturing'
    }
  ];

  const integrations = [
    { name: 'Shopify', logo: 'S' },
    { name: 'WooCommerce', logo: 'W' },
    { name: 'Amazon', logo: 'A' },
    { name: 'eBay', logo: 'E' },
    { name: 'QuickBooks', logo: 'QB' },
    { name: 'Xero', logo: 'X' },
    { name: 'Sage', logo: 'S' },
    { name: 'NetSuite', logo: 'NS' }
  ];

  const industries = [
    {
      title: 'E-commerce',
      description: 'Optimize inventory across multiple sales channels and marketplaces',
      icon: Globe,
      benefits: ['Multi-channel sync', 'Marketplace integration', 'Seasonal forecasting']
    },
    {
      title: 'Manufacturing',
      description: 'Manage raw materials, work-in-progress, and finished goods efficiently',
      icon: Package,
      benefits: ['BOM management', 'Production planning', 'Quality control']
    },
    {
      title: 'Retail',
      description: 'Optimize store inventory and prevent stockouts during peak seasons',
      icon: Users,
      benefits: ['Store-level tracking', 'Seasonal planning', 'Customer analytics']
    },
    {
      title: 'Wholesale',
      description: 'Manage large-scale inventory operations with advanced forecasting',
      icon: Warehouse,
      benefits: ['Bulk management', 'Supplier optimization', 'Cost analysis']
    }
  ];

  const benefits = [
    {
      metric: '95%',
      label: 'Forecast Accuracy',
      description: 'AI-powered demand prediction'
    },
    {
      metric: '80%',
      label: 'Reduced Stockouts',
      description: 'Smart reorder point optimization'
    },
    {
      metric: '60%',
      label: 'Less Overstock',
      description: 'Precise inventory planning'
    },
    {
      metric: '40%',
      label: 'Cost Reduction',
      description: 'Optimized supply chain operations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Inventory Manager - Smart Inventory & Supply Chain Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered inventory management with demand forecasting, smart reorder points, and supply chain optimization. Start your free trial today!" />
        <meta name="keywords" content="AI inventory management, demand forecasting, supply chain optimization, inventory tracking, warehouse management" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-inventory-manager" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="absolute inset-0 cyber-grid-enhanced"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-pulse">
              AI Inventory Manager
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary AI-powered inventory management that predicts demand, optimizes stock levels, 
              and transforms your supply chain with intelligent automation and real-time insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">95% Forecast Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">40% Cost Reduction</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="neon-button-enhanced hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/demo"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-bold hover:bg-cyan-400 hover:text-slate-900 transition-colors inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See the measurable impact AI Inventory Manager delivers
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">{benefit.metric}</span>
                </div>
                <div className="text-2xl font-bold text-white mb-2">{benefit.label}</div>
                <div className="text-gray-300 text-sm">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Intelligent Inventory Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Powered by advanced AI to transform your inventory management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card-enhanced p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <p className="text-cyan-400 text-sm font-medium">{feature.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From e-commerce to manufacturing, AI Inventory Manager adapts to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="futuristic-card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <div className="space-y-2">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`futuristic-card-enhanced p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
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
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-bold transition-all ${
                    plan.popular
                      ? 'neon-button-enhanced'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by 8,000+ Businesses
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what our customers say about AI Inventory Manager
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="futuristic-card-enhanced p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite e-commerce and accounting platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="futuristic-card p-6 text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">{integration.logo}</span>
                </div>
                <div className="text-white font-medium">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already reducing costs and improving efficiency with AI-powered inventory management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Package className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-300">
            <p className="mb-4">
              <strong>Contact us:</strong> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a> | 
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-2">kleber@ziontechgroup.com</a>
            </p>
            <p className="text-sm">
              364 E Main St STE 1008, Middletown, DE 19709 | <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}