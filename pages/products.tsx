import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Database, Network, Brain, Cloud } from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function Products() {
  const products = [
    {
      title: 'AI Business Intelligence Platform', description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform.',
      features: [
        'Real-time data visualization', 'Predictive analytics',
        'Custom dashboard creation', 'Automated reporting',
        'Multi-source data integration'
      ], pricing: 'Starting at $299/month',
      category: 'AI & Analytics', rating: 4.9,
      users: '500+', image: '/products/ai-bi-platform.jpg'
    },
    {
      title: 'Cloud Migration Suite', description: 'Seamlessly migrate your infrastructure to the cloud with our comprehensive migration tools.',
      features: [
        'Automated migration planning', 'Zero-downtime migration',
        'Cost optimization analysis', 'Security compliance checks',
        '24/7 migration support'
      ], pricing: 'Starting at $199/month',
      category: 'Cloud Computing', rating: 4.8,
      users: '300+', image: '/products/cloud-migration.jpg'
    },
    {
      title: 'Cybersecurity Monitoring System', description: 'Protect your business with our advanced threat detection and response platform.',
      features: [
        'Real-time threat monitoring', 'Automated incident response',
        'Compliance reporting', 'Security awareness training',
        '24/7 SOC support'
      ], pricing: 'Starting at $399/month',
      category: 'Cybersecurity', rating: 4.9,
      users: '200+', image: '/products/cybersecurity-monitoring.jpg'
    },
    {
      title: 'Micro SaaS Development Kit', description: 'Build and launch your own micro SaaS products with our comprehensive development framework.',
      features: [
        'Pre-built templates', 'Payment integration',
        'User management system', 'Analytics dashboard',
        'Deployment automation'
      ], pricing: 'Starting at $149/month',
      category: 'SaaS Development', rating: 4.7,
      users: '150+', image: '/products/micro-saas-kit.jpg'
    },
    {
      title: 'Digital Transformation Hub', description: 'Accelerate your digital transformation with our integrated suite of modernization tools.',
      features: [
        'Process automation', 'Legacy system integration',
        'Workflow optimization', 'Change management tools',
        'ROI tracking'
      ], pricing: 'Starting at $249/month',
      category: 'Digital Transformation', rating: 4.8,
      users: '400+', image: '/products/digital-transformation.jpg'
    },
    {
      title: 'IoT Edge Computing Platform', description: 'Connect and manage your IoT devices with our powerful edge computing solution.',
      features: [
        'Device management', 'Edge analytics',
        'Real-time processing', 'Data synchronization',
        'Remote monitoring'
      ], pricing: 'Starting at $179/month',
      category: 'IoT & Edge Computing', rating: 4.6,
      users: '100+', image: '/products/iot-edge-platform.jpg'
    }
  ];

  const categories = [
    'All Products', 'AI & Analytics',
    'Cloud Computing', 'Cybersecurity',
    'SaaS Development', 'Digital Transformation',
    'IoT & Edge Computing'
  ];
      id: 1,
      name: "AI-Powered Analytics Platform",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      icon: Brain,
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom dashboards",
        "API integrations",
        "Automated reporting"
      ],
      category: "AI Solutions",
      pricing: "Starting at $2,999/month"
    },
    {
      id: 2,
      name: "Cloud Infrastructure Suite",
      description: "Scalable, secure, and reliable cloud infrastructure tailored to your business needs.",
      icon: Cloud,
      features: [
        "Multi-cloud deployment",
        "Auto-scaling capabilities",
        "99.9% uptime guarantee",
        "24/7 monitoring",
        "Disaster recovery"
      ],
      category: "Cloud Solutions",
      pricing: "Starting at $1,999/month"
    },
    {
      id: 3,
      name: "Cybersecurity Shield",
      description: "Comprehensive security solution protecting your digital assets from modern threats.",
      icon: Shield,
      features: [
        "Threat detection",
        "Vulnerability scanning",
        "Incident response",
        "Compliance monitoring",
        "Security training"
      ],
      category: "Security",
      pricing: "Starting at $1,499/month"
    },
    {
      id: 4,
      name: "IoT Management Platform",
      description: "Connect, monitor, and manage your IoT devices with our intelligent platform.",
      icon: Network,
      features: [
        "Device management",
        "Data visualization",
        "Remote monitoring",
        "Predictive maintenance",
        "Custom integrations"
      ],
      category: "IoT Solutions",
      pricing: "Starting at $2,499/month"
    },
    {
      id: 5,
      name: "Blockchain Solutions",
      description: "Leverage blockchain technology for secure, transparent, and efficient operations.",
      icon: Database,
      features: [
        "Smart contracts",
        "Decentralized applications",
        "Tokenization",
        "Supply chain tracking",
        "Digital identity"
      ],
      category: "Blockchain",
      pricing: "Custom pricing"
    },
    {
      id: 6,
      name: "Global Connectivity Suite",
      description: "Seamless global connectivity and communication solutions for modern businesses.",
      icon: Globe,
      features: [
        "Global network access",
        "Low-latency connections",
        "Load balancing",
        "CDN integration",
        "Performance optimization"
      ],
      category: "Networking",
      pricing: "Starting at $999/month"
    }
  ];

  const categories = ["All", "AI Solutions", "Cloud Solutions", "Security", "IoT Solutions", "Blockchain", "Networking"];

  return (
    <PageTransition>
      <Head>
        <title>Products & Solutions — Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive suite of technology products and solutions designed to transform your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/products" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Products</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Powerful, scalable solutions designed to transform your business and drive innovation.
          </p>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Innovative Technology Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover our comprehensive suite of products designed to accelerate your digital 
              transformation and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

          {/* Products Grid */}
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover: shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
      {/* Products Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <product.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-blue-600">
                      {product.pricing}
                    </span>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link 
                      href={`/products/${product.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex-1 bg-blue-600 hover: bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Solutions?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Built with cutting-edge technology and designed for enterprise-grade performance
            </p>
          </div>
          
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High Performance</h3>
              <p className="text-gray-600">
                Optimized for speed and efficiency with enterprise-grade infrastructure and cutting-edge technology.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-level security with encryption, compliance, and advanced threat protection.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock expert support to ensure your systems run smoothly at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our solutions can help you achieve your technology goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
          >
            Get Started Today
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}