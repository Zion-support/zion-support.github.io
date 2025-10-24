<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function Page() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
=======
    <div>
      <Head>
        <title>Ai Inventory Manager - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Inventory Manager
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            ai-inventory-manager services Transform your business with our expert solutions. services coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
import React from 'react'
import {Link} from 'react-router-dom'

import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

import {ArrowRight, Package, BarChart3, Zap, CheckCircle, Target, Smartphone, Shield, Bot, Star, Smartphone as Mobile, DollarSign, Activity} from 'lucide-react';

export default function AIInventoryManagerPage() {const features = [{
      icon: <Bot className="w-5h-5ml-2"   />,
      title: 'AI Demand Forecasting',
      description: 'Predict inventory needs with 95% accuracy using machine learning algorithms'},
    {icon: <Package className="w-5h-5ml-2"   />,
      title: 'Smart Reorder Points',
      description: 'Automatically trigger reorders based on sales velocity and lead times'},
    {icon: <BarChart3 className="w-5h-5ml-2"   />,
      title: 'Real-time Analytics',
      description: 'Comprehensive inventory insights with predictive analytics and trend analysis'},
    {icon: <Zap className="w-5h-5ml-2"   />,
      title: 'Automated Workflows',
      description: 'Streamline inventory processes with intelligent automation and alerts'},
    {icon: <Target className="w-5h-5ml-2"   />,
      title: 'Multi-location Sync',
      description: 'Seamlessly manage inventory across multiple warehouses and stores'},
    {icon: <Shield className="w-5h-5ml-2"   />,
      title: 'Loss Prevention',
      description: 'AI-powered theft detection and shrinkage analysis with real-time alerts'}]

  const pricingPlans = [{name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 SKUs',
        'Basic AI forecasting',
        'Mobile app access',
        'Email support',
        'Basic reporting',
        '1 warehouse location'],
      popular: false;},
    {name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['Up to 10,000 SKUs',
        'Advanced AI features',
        'Multi-location support',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Barcode scanning',
        'Supplier integration'],
      popular: true;},
    {name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: ['Unlimited SKUs',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee'],
      popular: false;}
  ]

  const testimonials = [{name: 'Jennifer Walsh',
      company: 'Retail Chain Owner',
      content: 'Reduced our inventory costs by 25% and eliminated stockouts completely. The AI forecasting is incredibly accurate.',
      rating: 5,
      avatar: 'JW'},
    {name: 'Michael Torres',
      company: 'E-commerce Store',
      content: 'The automated reorder system saves us hours every week. Never run out of stock again.',
      rating: 5,
      avatar: 'MT'},
    {name: 'Sarah Kim',
      company: 'Manufacturing Company',
      content: 'Multi-location sync is a game-changer. We can see inventory across all our facilities in real-time.',
      rating: 5,
      avatar: 'SK'}]

  const benefits = [{icon: <DollarSign className="w-5h-5ml-2"   />,
      title: '25% Cost Reduction',
      description: 'Optimize inventory levels and reduce carrying costs'},
    {icon: <Target className="w-5h-5ml-2"   />,
      title: '95% Accuracy',
      description: 'AI forecasting with industry-leading accuracy rates'},
    {icon: <Activity className="w-5h-5ml-2"   />,
      title: 'Zero Stockouts',
      description: 'Smart reorder points prevent stockouts completely'},
    {icon: <Zap className="w-5h-5ml-2"   />,
      title: 'Real-time Sync',
      description: 'Instant updates across all locations and devices'}]

  const integrations = [{name: 'Shopify', icon: '🛍️'},
    {name: 'WooCommerce', icon: '🛒'},
    {name: 'Amazon', icon: '📦'},
    {name: 'eBay', icon: '🏪'},
    {name: 'QuickBooks', icon: '📊'},
    {name: 'Xero', icon: '💰'},
    {name: 'Sage', icon: '📈'},
    {name: 'NetSuite', icon: '☁️'},
    {name: 'Salesforce', icon: '⚡'},
    {name: 'Zapier', icon: '🔗'}]

  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Inventory Manager - Zion Tech Group | Smart Inventory Management</title>

                    <span>Start Free Trial</span>
                    <span>View All Plans</span>

                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiinventorymanagerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Inventory Manager - Zion Tech Group</title>
        <meta name="description" content="Professional ai inventory manager services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Inventory Manager</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai inventory manager services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
