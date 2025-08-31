import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, Star, Download, Eye, Code, Database, Shield, Zap, CheckCircle } from 'lucide-react';

const Products: NextPage = () => {
  const products = [
    {
      title: 'ZionAI Platform',
      description: 'Enterprise-grade AI platform for building, deploying, and managing machine learning models at scale.',
      category: 'AI & Machine Learning',
      features: [
        'Model Training & Deployment',
        'AutoML Capabilities',
        'Real-time Inference',
        'Model Monitoring',
        'A/B Testing',
        'API Integration'
      ],
      pricing: 'Starting at $999/month',
      rating: 4.8,
      reviews: 156,
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      href: '/products/zion-ai-platform'
    },
    {
      title: 'CloudSync Pro',
      description: 'Advanced cloud migration and management platform for seamless infrastructure transitions.',
      category: 'Cloud Solutions',
      features: [
        'Multi-cloud Management',
        'Automated Migration',
        'Cost Optimization',
        'Security Compliance',
        'Performance Monitoring',
        'Disaster Recovery'
      ],
      pricing: 'Starting at $499/month',
      rating: 4.7,
      reviews: 89,
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      href: '/products/cloudsync-pro'
    },
    {
      title: 'SecureShield',
      description: 'Comprehensive cybersecurity platform with advanced threat detection and response capabilities.',
      category: 'Cybersecurity',
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Incident Response',
        'Compliance Management',
        'Security Analytics',
        '24/7 Monitoring'
      ],
      pricing: 'Starting at $799/month',
      rating: 4.9,
      reviews: 203,
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      href: '/products/secureshield'
    },
    {
      title: 'DataFlow Analytics',
      description: 'Real-time data analytics and business intelligence platform for actionable insights.',
      category: 'Data Analytics',
      features: [
        'Real-time Processing',
        'Data Visualization',
        'Predictive Analytics',
        'Custom Dashboards',
        'Data Integration',
        'Advanced Reporting'
      ],
      pricing: 'Starting at $599/month',
      rating: 4.6,
      reviews: 127,
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      href: '/products/dataflow-analytics'
    },
    {
      title: 'IoT Connect Hub',
      description: 'Centralized IoT device management and data collection platform for smart solutions.',
      category: 'IoT Platforms',
      features: [
        'Device Management',
        'Data Collection',
        'Real-time Monitoring',
        'Alert System',
        'Scalable Architecture',
        'API Access'
      ],
      pricing: 'Starting at $399/month',
      rating: 4.5,
      reviews: 78,
      icon: Eye,
      color: 'from-indigo-500 to-purple-500',
      href: '/products/iot-connect-hub'
    },
    {
      title: 'BlockChain Suite',
      description: 'Complete blockchain development and management platform for decentralized applications.',
      category: 'Blockchain',
      features: [
        'Smart Contract Development',
        'DApp Framework',
        'Token Management',
        'Blockchain Analytics',
        'Security Auditing',
        'Deployment Tools'
      ],
      pricing: 'Starting at $699/month',
      rating: 4.4,
      reviews: 92,
      icon: Shield,
      color: 'from-yellow-500 to-orange-500',
      href: '/products/blockchain-suite'
    }
  ];

  const categories = [
    'All Products',
    'AI & Machine Learning',
    'Cloud Solutions',
    'Cybersecurity',
    'Data Analytics',
    'IoT Platforms',
    'Blockchain'
  ];

  const benefits = [
    {
      title: 'Enterprise Ready',
      description: 'Built for scale with enterprise-grade security and reliability.',
      icon: Shield
    },
    {
      title: 'Easy Integration',
      description: 'Seamless integration with your existing systems and workflows.',
      icon: Code
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services.',
      icon: Zap
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored solutions to meet your specific business requirements.',
      icon: Database
    }
  ];

  return (
    <MainLayout
      title="Our Products - Zion Tech Group"
      description="Discover our innovative technology products and platforms designed to transform your business operations and drive digital innovation."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Innovative technology platforms and solutions designed to transform 
              your business operations and drive digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  category === 'All Products'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions built with cutting-edge technology to address 
              your most complex business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`h-32 bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                  <product.icon className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-blue-600">{product.pricing}</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-3">
                    <Link
                      href={product.href}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors flex items-center justify-center"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Learn More
                    </Link>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors flex items-center">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with enterprise-grade technology and designed for real-world business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs and scale as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$299',
                period: '/month',
                description: 'Perfect for small businesses getting started with technology solutions.',
                features: [
                  'Basic Features',
                  'Email Support',
                  '5GB Storage',
                  'Standard Security',
                  'API Access',
                  'Documentation'
                ]
              },
              {
                name: 'Professional',
                price: '$799',
                period: '/month',
                description: 'Ideal for growing businesses with advanced technology needs.',
                features: [
                  'All Starter Features',
                  'Priority Support',
                  '50GB Storage',
                  'Advanced Security',
                  'Custom Integrations',
                  'Training Sessions'
                ],
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                description: 'Tailored solutions for large enterprises with specific requirements.',
                features: [
                  'All Professional Features',
                  '24/7 Dedicated Support',
                  'Unlimited Storage',
                  'Custom Security',
                  'White-label Options',
                  'On-site Training'
                ]
              }
            ].map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500 relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start your journey with our technology products and see the difference 
            they can make for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Free Demo
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;