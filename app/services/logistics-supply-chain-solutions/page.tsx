import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Truck, Package, MapPin, BarChart3, Clock, 
  FileText, CheckCircle, ArrowRight, Phone, 
  Mail, ExternalLink, Zap, Target, Award, 
  Globe, Smartphone, Brain, Monitor, Shield, Route
} from 'lucide-react';

export const metadata = {
  title: 'Logistics & Supply Chain Solutions — Zion Tech Group',
  description: 'Comprehensive logistics micro SaaS solutions including route optimization, tracking, warehouse management, and supply chain analytics.',
  keywords: 'logistics technology, supply chain management, route optimization, warehouse management, tracking systems, micro SaaS',
};

export default function LogisticsSupplyChainSolutions() {
  const phoneHref = "tel:+13024640950"
  const emailHref = "mailto:kleber@ziontechgroup.com"
  const websiteHref = "https://ziontechgroup.com"
  const logisticsServices = [
    {
      name: 'AI-Powered Route Optimization Platform',
      description: 'Intelligent route planning and optimization with real-time traffic and delivery constraints.',
      price: '$299 - $2,499/month',
      eta: '3-4 weeks',
      features: [
        'AI-powered route optimization algorithms',
        'Real-time traffic and weather integration',
        'Multi-stop delivery optimization',
        'Driver and vehicle assignment',
        'Fuel cost optimization and tracking'
      ],
      icon: Route,
      category: 'Route Optimization',
      roi: '35% reduction in fuel costs and delivery time',
      marketPrice: '$600 - $4,500/month',
      savings: 'Save up to 44%'
    },
    {
      name: 'Real-Time Tracking & Visibility System',
      description: 'Complete shipment tracking with real-time location updates and delivery notifications.',
      price: '$199 - $1,499/month',
      eta: '2-3 weeks',
      features: [
        'Real-time GPS tracking and monitoring',
        'Automated delivery notifications',
        'Exception handling and alerts',
        'Customer portal and mobile app',
        'Integration with carrier systems'
      ],
      icon: MapPin,
      category: 'Tracking',
      roi: '60% improvement in customer satisfaction',
      marketPrice: '$400 - $2,800/month',
      savings: 'Save up to 46%'
    },
    {
      name: 'Smart Warehouse Management System',
      description: 'Comprehensive warehouse operations with inventory tracking, picking optimization, and space utilization.',
      price: '$399 - $2,999/month',
      eta: '3-4 weeks',
      features: [
        'Automated inventory tracking and management',
        'Optimized picking and packing workflows',
        'Warehouse space utilization analytics',
        'Integration with WMS and ERP systems',
        'Real-time inventory visibility'
      ],
      icon: Package,
      category: 'Warehouse Management',
      roi: '50% improvement in warehouse efficiency',
      marketPrice: '$800 - $5,500/month',
      savings: 'Save up to 45%'
    },
    {
      name: 'Supply Chain Analytics & Intelligence',
      description: 'Advanced supply chain analytics with demand forecasting, risk assessment, and performance optimization.',
      price: '$499 - $3,499/month',
      eta: '3-4 weeks',
      features: [
        'Demand forecasting and planning',
        'Supply chain risk assessment',
        'Performance analytics and KPIs',
        'Cost optimization recommendations',
        'Custom reporting and dashboards'
      ],
      icon: BarChart3,
      category: 'Analytics',
      roi: '40% improvement in supply chain efficiency',
      marketPrice: '$1,000 - $6,000/month',
      savings: 'Save up to 42%'
    },
    {
      name: 'Fleet Management & Maintenance Platform',
      description: 'Complete fleet management with vehicle tracking, maintenance scheduling, and driver management.',
      price: '$249 - $1,799/month',
      eta: '2-3 weeks',
      features: [
        'Vehicle tracking and monitoring',
        'Predictive maintenance scheduling',
        'Driver performance and safety tracking',
        'Fuel consumption monitoring',
        'Compliance and regulatory reporting'
      ],
      icon: Truck,
      category: 'Fleet Management',
      roi: '30% reduction in maintenance costs',
      marketPrice: '$500 - $3,200/month',
      savings: 'Save up to 44%'
    },
    {
      name: 'Last-Mile Delivery Optimization',
      description: 'Specialized last-mile delivery solution with customer preferences and delivery window optimization.',
      price: '$149 - $999/month',
      eta: '2-3 weeks',
      features: [
        'Customer delivery preferences management',
        'Delivery window optimization',
        'Failed delivery handling and rescheduling',
        'Customer communication and notifications',
        'Performance tracking and analytics'
      ],
      icon: Clock,
      category: 'Last-Mile Delivery',
      roi: '45% improvement in delivery success rates',
      marketPrice: '$300 - $1,800/month',
      savings: 'Save up to 44%'
    }
  ];

  const itServices = [
    {
      name: 'Logistics Data Security Suite',
      description: 'Enterprise-grade security protecting sensitive logistics and supply chain data.',
      price: '$399 - $2,499/month',
      eta: '2-3 weeks',
      features: [
        'Supply chain data encryption',
        'Access control and audit logging',
        'Compliance with logistics regulations',
        'Secure data backup and recovery',
        'Privacy monitoring and reporting'
      ],
      icon: Shield,
      category: 'Security',
      roi: '99.9% compliance rate maintained',
      marketPrice: '$800 - $4,500/month',
      savings: 'Save up to 44%'
    },
    {
      name: 'Logistics Cloud Infrastructure',
      description: 'Scalable cloud infrastructure optimized for logistics applications and high-volume data processing.',
      price: '$599 - $3,999/month',
      eta: '1-2 weeks',
      features: [
        'High-availability logistics cloud infrastructure',
        'Automated backup and disaster recovery',
        'Scalable resource allocation',
        '24/7 monitoring and support',
        'Integration with existing logistics systems'
      ],
      icon: Monitor,
      category: 'Infrastructure',
      roi: '45% reduction in infrastructure costs',
      marketPrice: '$1,200 - $6,500/month',
      savings: 'Save up to 38%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <Head>
        <title>Logistics & Supply Chain Solutions — Zion Tech Group</title>
        <meta name="description" content="Comprehensive logistics micro SaaS solutions including route optimization, tracking, warehouse management, and supply chain analytics." />
        <meta name="keywords" content="logistics technology, supply chain management, route optimization, warehouse management, tracking systems, micro SaaS" />
        <link rel="canonical" href={`${websiteHref}/services/logistics-supply-chain-solutions`} />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Logistics & Supply Chain Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Optimize your logistics operations with our comprehensive suite of supply chain micro SaaS solutions. 
              From route optimization to warehouse management, we provide enterprise-grade logistics technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href={phoneHref} className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              <a href={emailHref} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email: kleber@ziontechgroup.com
              </a>
              <a href={websiteHref} className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Logistics Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive logistics technology solutions designed for modern supply chain operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {logisticsServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <span className="text-sm text-cyan-300 font-semibold">{service.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-400 font-bold text-xl">{service.price}</span>
                    <span className="text-sm text-gray-400">ETA: {service.eta}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-cyan-400">Your Savings:</span>
                    <span className="text-cyan-400 font-semibold">{service.savings}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="text-cyan-400 font-semibold">ROI Impact</span>
                  </div>
                  <p className="text-cyan-300 text-sm">{service.roi}</p>
                </div>

                <div className="flex gap-3">
                  <a href={phoneHref} className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Get Quote
                  </a>
                  <a href={emailHref} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Supporting IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade infrastructure and security solutions for logistics applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <span className="text-sm text-blue-300 font-semibold">{service.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-400 font-bold text-xl">{service.price}</span>
                    <span className="text-sm text-gray-400">ETA: {service.eta}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-blue-400">Your Savings:</span>
                    <span className="text-blue-400 font-semibold">{service.savings}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Brain className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="text-blue-400 font-semibold">ROI Impact</span>
                  </div>
                  <p className="text-blue-300 text-sm">{service.roi}</p>
                </div>

                <div className="flex gap-3">
                  <a href={phoneHref} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Get Quote
                  </a>
                  <a href={emailHref} className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
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
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Logistics Operations?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Contact us today for a free consultation and custom quote for your logistics technology needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our logistics technology experts</p>
              <a href={phoneHref} className="text-cyan-400 font-semibold hover:text-cyan-300">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Get detailed information and pricing</p>
              <a href={emailHref} className="text-blue-400 font-semibold hover:text-blue-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <MapPin className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Our headquarters location</p>
              <p className="text-teal-400 font-semibold">
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