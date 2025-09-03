import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Cloud, Shield, BarChart3, Globe, Smartphone, Cpu, Zap } from 'lucide-react';

const Products: NextPage = () => {
  const products = [
    {
      icon: Brain,
      title: 'ZionAI Platform',
      category: 'AI Solutions',
      description: 'Enterprise-grade AI platform for machine learning, natural language processing, and predictive analytics.',
      features: [
        'Pre-trained AI models',
        'Custom model training',
        'Real-time inference',
        'Scalable infrastructure',
        'API-first architecture',
        'Comprehensive analytics'
      ],
      pricing: 'Starting at $2,999/month',
      href: '/products/ai-solutions',
      color: 'from-purple-500 to-pink-500',
      badge: 'Popular'
    },
    {
      icon: Cloud,
      title: 'ZionCloud Suite',
      category: 'Cloud Platforms',
      description: 'Integrated cloud platform for application deployment, management, and scaling.',
      features: [
        'Multi-cloud support',
        'Auto-scaling',
        'Load balancing',
        'Monitoring & alerting',
        'Cost optimization',
        'Security compliance'
      ],
      pricing: 'Starting at $1,499/month',
      href: '/products/cloud-platforms',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'ZionAnalytics',
      category: 'Analytics Tools',
      description: 'Advanced business intelligence and data analytics platform for actionable insights.',
      features: [
        'Real-time dashboards',
        'Data visualization',
        'Predictive modeling',
        'Custom reporting',
        'Data integration',
        'Mobile access'
      ],
      pricing: 'Starting at $999/month',
      href: '/products/analytics-tools',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'ZionSecure',
      category: 'Security Suite',
      description: 'Comprehensive cybersecurity platform for threat detection, prevention, and response.',
      features: [
        'Threat intelligence',
        'Vulnerability scanning',
        'Incident response',
        'Compliance reporting',
        '24/7 monitoring',
        'Security training'
      ],
      pricing: 'Starting at $1,999/month',
      href: '/products/security-suite',
      color: 'from-red-500 to-pink-500',
      badge: 'Enterprise'
    },
    {
      icon: Globe,
      title: 'ZionWeb Builder',
      category: 'Web Development',
      description: 'No-code/low-code platform for building modern web applications and websites.',
      features: [
        'Drag & drop interface',
        'Responsive templates',
        'SEO optimization',
        'Performance monitoring',
        'Content management',
        'E-commerce integration'
      ],
      pricing: 'Starting at $299/month',
      href: '/products/web-builder',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'ZionMobile Studio',
      category: 'Mobile Development',
      description: 'Cross-platform mobile app development platform for iOS and Android.',
      features: [
        'Cross-platform development',
        'Native performance',
        'App store deployment',
        'Push notifications',
        'Analytics integration',
        'Offline support'
      ],
      pricing: 'Starting at $499/month',
      href: '/products/mobile-studio',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Cpu,
      title: 'ZionIoT Hub',
      category: 'IoT Platforms',
      description: 'Centralized IoT platform for device management, data collection, and analytics.',
      features: [
        'Device management',
        'Data collection',
        'Real-time monitoring',
        'Edge computing',
        'API integration',
        'Scalable architecture'
      ],
      pricing: 'Starting at $799/month',
      href: '/products/iot-hub',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'ZionAutomation',
      category: 'Process Automation',
      description: 'Intelligent automation platform for business process optimization and workflow management.',
      features: [
        'Workflow automation',
        'RPA capabilities',
        'Process mining',
        'Integration tools',
        'Analytics dashboard',
        'Custom workflows'
      ],
      pricing: 'Starting at $1,299/month',
      href: '/products/automation-platform',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const categories = [
    'All Products',
    'AI Solutions',
    'Cloud Platforms',
    'Analytics Tools',
    'Security Suite',
    'Web Development',
    'Mobile Development',
    'IoT Platforms',
    'Process Automation'
  ];

  return (
    <>
      <Head>
        <title>Our Products - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's innovative technology products and platforms designed to transform your business operations and drive growth." />
        <meta name="keywords" content="technology products, AI platform, cloud solutions, analytics tools, security suite, Zion Tech Group" />
      </Head>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Innovative technology platforms and solutions designed to empower businesses 
              with cutting-edge capabilities and drive digital transformation.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
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
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Technology Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our product portfolio spans across all major technology domains, 
                providing comprehensive solutions for modern businesses.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative">
                    <div className={`h-32 bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                      <product.icon className="w-16 h-16 text-white" />
                    </div>
                    {product.badge && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {product.badge}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-lg font-semibold text-blue-600">{product.pricing}</p>
                    </div>
                    
                    <div className="flex gap-3">
                      <Link 
                        href={product.href}
                      >
                        <span className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-center transition-colors">
                          Learn More
                        </span>
                      </Link>
                      <Link href="/contact"><span className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-semibold text-center transition-colors">
                        Get Demo
                      </span></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Compare Our Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find the perfect solution for your business needs with our comprehensive 
                product comparison and selection guide.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 font-semibold text-gray-800">Feature</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-800">Starter</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-800">Professional</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-800">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-gray-600">Users</td>
                      <td className="py-4 px-4 text-center text-gray-800">Up to 10</td>
                      <td className="py-4 px-4 text-center text-gray-800">Up to 100</td>
                      <td className="py-4 px-4 text-center text-gray-800">Unlimited</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-gray-600">Storage</td>
                      <td className="py-4 px-4 text-center text-gray-800">100 GB</td>
                      <td className="py-4 px-4 text-center text-gray-800">1 TB</td>
                      <td className="py-4 px-4 text-center text-gray-800">Unlimited</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 text-gray-600">Support</td>
                      <td className="py-4 px-4 text-center text-gray-800">Email</td>
                      <td className="py-4 px-4 text-center text-gray-800">Email + Chat</td>
                      <td className="py-4 px-4 text-center text-gray-800">24/7 Phone</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-gray-600">Customization</td>
                      <td className="py-4 px-4 text-center text-gray-800">Basic</td>
                      <td className="py-4 px-4 text-center text-gray-800">Advanced</td>
                      <td className="py-4 px-4 text-center text-gray-800">Full</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Explore our products, request a demo, or speak with our team to find 
              the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><span className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Sales
              </span></Link>
              <Link href="/services"><span className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Services
              </span></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;