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
        <title>Iot Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Iot Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            iot-solutions services Transform your business with our expert solutions. services coming soon.
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

import {ArrowRight, Zap, Shield, Globe, Database, Cloud, Cpu, Rocket, Network, BarChart3, CheckCircle, DollarSign, TrendingUp, Wrench, Heart} from 'lucide-react';

export default function IoTSolutionsPage() {const iotServices = [{
      icon: <Network className="w-5h-5ml-2"   />,
      title: 'IoT Device Management',
      description: 'Comprehensive platform for managing, monitoring, and maintaining IoT devices across your entire network.',
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Health diagnostics'],
      price: 'Starting at $299/month'},
    {icon: <Database className="w-5h-5ml-2"   />,
      title: 'IoT Data Analytics',
      description: 'Advanced analytics platform to process, analyze, and derive insights from IoT sensor data.',
      features: ['Real-time processing', 'Predictive analytics', 'Data visualization', 'Custom dashboards'],
      price: 'Starting at $399/month'},
    {icon: <Shield className="w-5h-5ml-2"   />,
      title: 'IoT Security Suite',
      description: 'End-to-end security solutions to protect your IoT infrastructure from cyber threats.',
      features: ['Device authentication', 'Data encryption', 'Threat detection', 'Compliance monitoring'],
      price: 'Starting at $499/month'},
    {icon: <Cloud className="w-5h-5ml-2"   />,
      title: 'IoT Cloud Platform',
      description: 'Scalable cloud infrastructure designed specifically for IoT applications and workloads.',
      features: ['Auto-scaling', 'Global edge locations', '99.9% uptime', 'Multi-cloud support'],
      price: 'Starting at $199/month'},
    {icon: <Cpu className="w-5h-5ml-2"   />,
      title: 'Edge Computing Solutions',
      description: 'Process data at the edge for faster response times and reduced latency in IoT applications.',
      features: ['Local processing', 'Real-time decisions', 'Bandwidth optimization', 'Offline capability'],
      price: 'Starting at $349/month'},
    {icon: <BarChart3 className="w-5h-5ml-2"   />,
      title: 'IoT Integration Services',
      description: 'Seamlessly integrate IoT devices with existing systems and third-party applications.',
      features: ['API development', 'System integration', 'Data synchronization', 'Legacy compatibility'],
      price: 'Starting at $249/month'}
  ]

  const industries = [{name: 'Manufacturing',
      description: 'Smart factories with predictive maintenance and quality control',
      icon: <Wrench className="w-5h-5ml-2"   /></Wrench&gt;},
    {name: 'Healthcare',
      description: 'Medical device monitoring and patient care optimization',
      icon: <Heart className="w-5h-5ml-2"   /></Heart&gt;},
    {name: 'Agriculture',
      description: 'Precision farming with soil and crop monitoring',
      icon: <Globe className="w-5h-5ml-2"   /></Globe&gt;},
    {name: 'Smart Cities',
      description: 'Traffic management, waste optimization, and public safety',
      icon: <Building className="w-5h-5ml-2"   /></Building&gt;},
    {name: 'Retail',
      description: 'Inventory management and customer experience enhancement',
      icon: <ShoppingCart className="w-5h-5ml-2"   /></ShoppingCart&gt;},
    {name: 'Energy',
      description: 'Smart grid management and renewable energy optimization',
      icon: <Zap className="w-5h-5ml-2"   /></Zap&gt;}]

  const benefits = [{icon: <TrendingUp className="w-5h-5ml-2">,
      title: 'Increased Efficiency',
      description: 'Automate processes and optimize operations with real-time data insights'},
    {icon: <DollarSign className="w-5h-5ml-2"   />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through predictive maintenance and resource optimization'},
    {icon: <Shield className="w-5h-5ml-2"   />,
      title: 'Enhanced Security',
      description: 'Protect your IoT infrastructure with enterprise-grade security solutions'},
    {icon: <Rocket className="w-5h-5ml-2"   />,
      title: 'Scalability',
      description: 'Scale your IoT solutions as your business grows with our flexible platform'}]

  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>IoT Solutions - Zion Tech Group | Smart Device Management & Analytics</title>

                    Ready to Connect Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">World?</span>

                    Transform your business with our comprehensive IoT solutions. Get started today and unlock the power of connected devices.

                      <span>Get Started</span>
                      <span>View Pricing</span>

      <  />
  );

  );
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
