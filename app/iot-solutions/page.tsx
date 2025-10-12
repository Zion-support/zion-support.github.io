import React from 'react'
import { Link } from 'react-router-dom'

import React from 'react';

import { Link } from 'react-router-dom';
import {Bot} from 'lucide-react';

import {Heart} from 'lucide-react';

export default function IoTSolutionsPage() {
  const iotServices = [
      icon: <Network className="w-8h-8text-cyan-400" />,

      title: 'IoT Device Management',
      description: 'Comprehensive platform for managing, monitoring, and maintaining IoT devices across your entire network.',
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Health diagnostics'],
      price: 'Starting at $299/month'
    },

      icon: <Database className="w-8h-8text-emerald-400" />,

      title: 'IoT Data Analytics',
      description: 'Advanced analytics platform to process, analyze, and derive insights from IoT sensor data.',
      features: ['Real-time processing', 'Predictive analytics', 'Data visualization', 'Custom dashboards'],
      price: 'Starting at $399/month'
    },

      icon: <Shield className="w-8h-8text-red-400" />,

      title: 'IoT Security Suite',
      description: 'End-to-end security solutions to protect your IoT infrastructure from cyber threats.',
      features: ['Device authentication', 'Data encryption', 'Threat detection', 'Compliance monitoring'],
      price: 'Starting at $499/month'
    },

      icon: <Cloud className="w-8h-8text-purple-400" />,

      title: 'IoT Cloud Platform',
      description: 'Scalable cloud infrastructure designed specifically for IoT applications and workloads.',
      features: ['Auto-scaling', 'Global edge locations', '99.9% uptime', 'Multi-cloud support'],
      price: 'Starting at $199/month'
    },

      icon: <Cpu className="w-8h-8text-orange-400" />,

      title: 'Edge Computing Solutions',
      description: 'Process data at the edge for faster response times and reduced latency in IoT applications.',
      features: ['Local processing', 'Real-time decisions', 'Bandwidth optimization', 'Offline capability'],
      price: 'Starting at $349/month'
    },

      icon: <BarChart3 className="w-8h-8text-pink-400" />,

      title: 'IoT Integration Services',
      description: 'Seamlessly integrate IoT devices with existing systems and third-party applications.',
      features: ['API development', 'System integration', 'Data synchronization', 'Legacy compatibility'],
      price: 'Starting at $249/month'
  ]

  const industries = [
      name: 'Manufacturing',
      description: 'Smart factories with predictive maintenance and quality control',

      icon: <Wrench>
    },
      name: 'Healthcare',
      description: 'Medical device monitoring and patient care optimization',

      icon: <Heart>
    },
      name: 'Agriculture',
      description: 'Precision farming with soil and crop monitoring',

      icon: <Globe>
    },
      name: 'Smart Cities',
      description: 'Traffic management, waste optimization, and public safety',

      icon: <Building>
    },
      name: 'Retail',
      description: 'Inventory management and customer experience enhancement',

      icon: <ShoppingCart>
    },
      name: 'Energy',
      description: 'Smart grid management and renewable energy optimization',

      icon: <Zap>
  ]

  const benefits = [
      icon: <TrendingUp className="w-6h-6text-green-400" />,
      title: 'Increased Efficiency',
      description: 'Automate processes and optimize operations with real-time data insights'
    },
      icon: <DollarSign className="w-6h-6text-blue-400" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through predictive maintenance and resource optimization'
    },
      icon: <Shield className="w-6h-6text-red-400" />,
      title: 'Enhanced Security',
      description: 'Protect your IoT infrastructure with enterprise-grade security solutions'
    },
      icon: <Rocket className="w-6h-6text-purple-400" />,

      title: 'Scalability',
      description: 'Scale your IoT solutions as your business grows with our flexible platform'
  ]

  return (

        <title>5G Data Analytics - Zion Tech Group</title>
        {/* Open Graph Meta Tags */
    
        {/* Twitter Card Meta Tags */

        {/* Structured Data */
        <script type="application/ld+json"  />{JSON.stringify({
            "@context": "https: //schema.org",
            "@type": "Service",
            "name": "IoT Solutions",
            "description": "Comprehensive IoT solutions including device management, data analytics, security, and cloud platforms.",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https: //ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "199",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "199",
                "priceCurrency": "USD",
                "unitText": "MONTH"
          })

        {/* Hero Section */
    
              <span>IoT Solutions</span>

              Connect Everything with
    
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-texttext-transparentanimate-pulse">Smart IoT Solutions

              Transform your business with comprehensive IoT solutions that connect, monitor, and optimize your devices and processes.
    
              <span className="text-cyan-400font-semibold">From device management to advanced analytics.</span>

                <span>Get Started</span>
                <span>View Demo</span>

        {/* Services Section */
    
                Complete <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">IoT Solutions</span>
                From device management to advanced analytics, we provide everything you need to build and scale your IoT infrastructure.

 (
    
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{service.icon

                  <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{service.title
                    {service.description

 (
    
                        <span>{feature}</span>

                    ))
    
                  <div className="text-cyan-400font-semiboldtext-lg">{service.price

              ))

        {/* Industries Section */
    
                Industries We <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Transform</span>
                Our IoT solutions are designed to work across various industries, providing tailored solutions for specific needs.

 (
    
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110transition-transformduration-300">{industry.icon
                    <h3 className="text-xl font-bold text-whitegroup-hover:text-cyan-400transition-colors">{industry.name
                    {industry.description

              ))

        {/* Benefits Section */
    
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">IoT Solutions?</span>
                Our IoT solutions deliver measurable results and provide a competitive advantage for your business.

 (
    
                  <div className="flex justify-center mb-4 group-hover:scale-110transition-transformduration-300">{benefit.icon

                  <h3 className="text-xl font-bold text-white mb-3group-hover:text-cyan-400transition-colors">{benefit.title
                    {benefit.description

              ))

        {/* CTA Section */
