import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Database, 
  Network, 
  Code, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Globe,
  Lock,
  BarChart3
} from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'AI Copilot Suite',
      category: 'Artificial Intelligence',
      description: 'Comprehensive AI-powered tools for development, operations, and business intelligence.',
      icon: Brain,
      features: [
        'Code generation and optimization',
        'Automated testing and deployment',
        'Intelligent monitoring and alerting',
        'Natural language query interface'
      ],
      pricing: 'Starting at $99/month',
      popular: true
    },
    {
      id: 2,
      name: 'Cloud Infrastructure Platform',
      category: 'Cloud Solutions',
      description: 'Scalable, secure cloud infrastructure with automated management and monitoring.',
      icon: Cloud,
      features: [
        'Multi-cloud deployment support',
        'Auto-scaling and load balancing',
        'Advanced security and compliance',
        '24/7 monitoring and support'
      ],
      pricing: 'Starting at $199/month',
      popular: false
    },
    {
      id: 3,
      name: 'Security Operations Center',
      category: 'Cybersecurity',
      description: 'Enterprise-grade security monitoring and threat detection platform.',
      icon: Shield,
      features: [
        'Real-time threat detection',
        'Automated incident response',
        'Compliance reporting',
        'Security analytics dashboard'
      ],
      pricing: 'Starting at $299/month',
      popular: false
    },
    {
      id: 4,
      name: 'Data Analytics Platform',
      category: 'Data & Analytics',
      description: 'Advanced analytics and business intelligence platform with AI-powered insights.',
      icon: BarChart3,
      features: [
        'Real-time data processing',
        'Machine learning insights',
        'Custom dashboard creation',
        'API integration capabilities'
      ],
      pricing: 'Starting at $149/month',
      popular: false
    },
    {
      id: 5,
      name: 'Mobile App Development Kit',
      category: 'Mobile Solutions',
      description: 'Complete toolkit for building, testing, and deploying mobile applications.',
      icon: Smartphone,
      features: [
        'Cross-platform development',
        'Automated testing suite',
        'App store deployment',
        'Performance monitoring'
      ],
      pricing: 'Starting at $79/month',
      popular: false
    },
    {
      id: 6,
      name: 'IoT Management Platform',
      category: 'Internet of Things',
      description: 'Comprehensive platform for managing and monitoring IoT devices and data.',
      icon: Network,
      features: [
        'Device management and provisioning',
        'Real-time data collection',
        'Edge computing capabilities',
        'Predictive maintenance'
      ],
      pricing: 'Starting at $179/month',
      popular: false
    }
  ];

  const categories = [
    { name: 'All Products', count: products.length },
    { name: 'Artificial Intelligence', count: 1 },
    { name: 'Cloud Solutions', count: 1 },
    { name: 'Cybersecurity', count: 1 },
    { name: 'Data & Analytics', count: 1 },
    { name: 'Mobile Solutions', count: 1 },
    { name: 'Internet of Things', count: 1 }
  ];

  const stats = [
    { number: '500+', label: 'Active Customers' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Support Available' },
    { number: '30+', label: 'Countries Served' }
  ];

  return (
    <>
      <Head>
        <title>Products - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive suite of technology products including AI solutions, cloud platforms, cybersecurity tools, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Our Products
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Comprehensive technology solutions designed to accelerate your digital transformation 
                and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                    Schedule a Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </Link>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-lg text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative ${product.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {product.popular && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 rounded-full p-3 mr-4">
                        <product.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{product.pricing}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
                          Try Free
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Enterprise Solutions</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Need a custom solution? Our enterprise team can help you build, deploy, 
              and scale technology solutions tailored to your specific requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                <p className="text-blue-100">24/7 dedicated support team and account manager</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-blue-100">Advanced security features and compliance certifications</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Integration</h3>
                <p className="text-blue-100">Seamless integration with your existing systems</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Sales
                </button>
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
              <p className="text-lg text-gray-600">
                Our products integrate with the tools you already use
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {['AWS', 'Azure', 'GCP', 'Salesforce', 'Slack', 'Microsoft Teams', 'GitHub', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'Redis'].map((integration, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition-colors">
                  <div className="text-gray-600 font-semibold">{integration}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the perfect solution for your business needs. Start with a free trial 
              or schedule a personalized demo with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </Link>
              <Link href="/pricing-guide">
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}