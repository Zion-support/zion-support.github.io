import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, Package, Truck, BarChart3, Users, 
  CreditCard, Globe, Clock, CheckCircle, ArrowRight, 
  Phone, Mail, MapPin, ExternalLink, Zap, Target, 
  Award, Smartphone, Brain, Monitor, Shield
} from 'lucide-react';

export const metadata = {
  title: 'E-commerce Technology Solutions — Zion Tech Group',
  description: 'Comprehensive e-commerce micro SaaS solutions including inventory management, customer service, analytics, and payment processing.',
  keywords: 'e-commerce technology, inventory management, customer service, e-commerce analytics, payment processing, micro SaaS',
};

export default function EcommerceTechnologySolutions() {
  const phoneHref = "tel:+13024640950"
  const emailHref = "mailto:kleber@ziontechgroup.com"
  const websiteHref = "https://ziontechgroup.com"
  const ecommerceServices = [
    {
      name: 'AI-Powered Inventory Management Platform',
      description: 'Intelligent inventory management with demand forecasting, automated reordering, and optimization.',
      price: '$249 - $1,999/month',
      eta: '2-3 weeks',
      features: [
        'AI-powered demand forecasting',
        'Automated reorder point calculations',
        'Multi-channel inventory synchronization',
        'Supplier performance analytics',
        'Cost optimization recommendations'
      ],
      icon: Package,
      category: 'Inventory Management',
      roi: '40% reduction in stockouts and overstock',
      marketPrice: '$500 - $3,500/month',
      savings: 'Save up to 43%'
    },
    {
      name: 'Smart Customer Service Automation',
      description: 'AI-powered customer service with chatbots, ticket routing, and sentiment analysis.',
      price: '$199 - $1,499/month',
      eta: '2-3 weeks',
      features: [
        'AI-powered chatbot with natural language processing',
        'Intelligent ticket routing and prioritization',
        'Sentiment analysis and customer satisfaction tracking',
        'Multi-channel support integration',
        'Automated response suggestions'
      ],
      icon: Users,
      category: 'Customer Service',
      roi: '70% reduction in response time',
      marketPrice: '$400 - $2,800/month',
      savings: 'Save up to 46%'
    },
    {
      name: 'E-commerce Analytics & Insights Platform',
      description: 'Advanced analytics platform for tracking sales, customer behavior, and business performance.',
      price: '$299 - $2,499/month',
      eta: '2-3 weeks',
      features: [
        'Real-time sales and revenue tracking',
        'Customer behavior and journey analytics',
        'Product performance and profitability analysis',
        'Marketing campaign effectiveness tracking',
        'Custom reporting and dashboards'
      ],
      icon: BarChart3,
      category: 'Analytics',
      roi: '35% improvement in conversion rates',
      marketPrice: '$600 - $4,500/month',
      savings: 'Save up to 44%'
    },
    {
      name: 'Multi-Channel E-commerce Platform',
      description: 'Unified platform for managing sales across multiple channels and marketplaces.',
      price: '$399 - $2,999/month',
      eta: '3-4 weeks',
      features: [
        'Multi-marketplace integration (Amazon, eBay, Shopify)',
        'Unified product catalog management',
        'Automated order processing and fulfillment',
        'Cross-channel inventory synchronization',
        'Centralized reporting and analytics'
      ],
      icon: Globe,
      category: 'Multi-Channel',
      roi: '60% increase in sales reach',
      marketPrice: '$800 - $5,500/month',
      savings: 'Save up to 45%'
    },
    {
      name: 'AI-Powered Product Recommendation Engine',
      description: 'Intelligent product recommendation system with personalization and cross-selling.',
      price: '$199 - $1,299/month',
      eta: '2-3 weeks',
      features: [
        'AI-powered product recommendations',
        'Personalized shopping experiences',
        'Cross-selling and upselling automation',
        'Real-time recommendation optimization',
        'A/B testing and performance tracking'
      ],
      icon: ShoppingCart,
      category: 'Recommendations',
      roi: '25% increase in average order value',
      marketPrice: '$400 - $2,300/month',
      savings: 'Save up to 43%'
    },
    {
      name: 'Order Fulfillment & Logistics Platform',
      description: 'Automated order processing with shipping optimization and tracking management.',
      price: '$299 - $1,999/month',
      eta: '2-3 weeks',
      features: [
        'Automated order processing and routing',
        'Shipping rate optimization and comparison',
        'Real-time tracking and notifications',
        'Returns and exchange management',
        'Integration with major shipping carriers'
      ],
      icon: Truck,
      category: 'Fulfillment',
      roi: '50% reduction in fulfillment costs',
      marketPrice: '$600 - $3,500/month',
      savings: 'Save up to 43%'
    }
  ];

  const itServices = [
    {
      name: 'E-commerce Security Suite',
      description: 'Comprehensive security solution protecting customer data and payment information.',
      price: '$399 - $2,499/month',
      eta: '2-3 weeks',
      features: [
        'PCI DSS compliance and monitoring',
        'SSL certificate management',
        'Fraud detection and prevention',
        'Secure payment processing',
        'Data encryption and backup'
      ],
      icon: Shield,
      category: 'Security',
      roi: '99.9% reduction in security incidents',
      marketPrice: '$800 - $4,500/month',
      savings: 'Save up to 44%'
    },
    {
      name: 'E-commerce Cloud Infrastructure',
      description: 'Scalable cloud infrastructure optimized for e-commerce applications and high traffic.',
      price: '$599 - $3,999/month',
      eta: '1-2 weeks',
      features: [
        'High-availability cloud infrastructure',
        'Auto-scaling for traffic spikes',
        'CDN and performance optimization',
        'Automated backup and disaster recovery',
        '24/7 monitoring and support'
      ],
      icon: Monitor,
      category: 'Infrastructure',
      roi: '45% reduction in infrastructure costs',
      marketPrice: '$1,200 - $6,500/month',
      savings: 'Save up to 38%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <Head>
        <title>E-commerce Technology Solutions — Zion Tech Group</title>
        <meta name="description" content="Comprehensive e-commerce micro SaaS solutions including inventory management, customer service, analytics, and payment processing." />
        <meta name="keywords" content="e-commerce technology, inventory management, customer service, e-commerce analytics, payment processing, micro SaaS" />
        <link rel="canonical" href={`${websiteHref}/services/ecommerce-technology-solutions`} />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              E-commerce Technology Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your online business with our comprehensive suite of e-commerce micro SaaS solutions. 
              From inventory management to advanced analytics, we provide enterprise-grade technology for modern e-commerce.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href={phoneHref} className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              <a href={emailHref} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email: kleber@ziontechgroup.com
              </a>
              <a href={websiteHref} className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Visit: ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              E-commerce Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive e-commerce technology solutions designed for modern online businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {ecommerceServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-orange-400 mr-3" />
                  <span className="text-sm text-orange-300 font-semibold">{service.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-orange-400 font-bold text-xl">{service.price}</span>
                    <span className="text-sm text-gray-400">ETA: {service.eta}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-orange-400">Your Savings:</span>
                    <span className="text-orange-400 font-semibold">{service.savings}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Brain className="w-5 h-5 text-orange-400 mr-2" />
                    <span className="text-orange-400 font-semibold">ROI Impact</span>
                  </div>
                  <p className="text-orange-300 text-sm">{service.roi}</p>
                </div>

                <div className="flex gap-3">
                  <a href={phoneHref} className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Get Quote
                  </a>
                  <a href={emailHref} className="flex-1 bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Supporting IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade infrastructure and security solutions for e-commerce applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-red-400 mr-3" />
                  <span className="text-sm text-red-300 font-semibold">{service.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-red-400 font-bold text-xl">{service.price}</span>
                    <span className="text-sm text-gray-400">ETA: {service.eta}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-red-400">Your Savings:</span>
                    <span className="text-red-400 font-semibold">{service.savings}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Brain className="w-5 h-5 text-red-400 mr-2" />
                    <span className="text-red-400 font-semibold">ROI Impact</span>
                  </div>
                  <p className="text-red-300 text-sm">{service.roi}</p>
                </div>

                <div className="flex gap-3">
                  <a href={phoneHref} className="flex-1 bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Get Quote
                  </a>
                  <a href={emailHref} className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your E-commerce Operations?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Contact us today for a free consultation and custom quote for your e-commerce technology needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <Phone className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our e-commerce technology experts</p>
              <a href={phoneHref} className="text-orange-400 font-semibold hover:text-orange-300">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <Mail className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Get detailed information and pricing</p>
              <a href={emailHref} className="text-red-400 font-semibold hover:text-red-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Our headquarters location</p>
              <p className="text-pink-400 font-semibold">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}