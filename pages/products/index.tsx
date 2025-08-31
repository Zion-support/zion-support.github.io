import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';
import { Brain, Cloud, Shield, Database, BarChart3, Zap, Globe, Lock, Users, Settings, Monitor, TrendingUp } from 'lucide-react';

const Products: NextPage = () => {
  const products = [
    {
      icon: Brain,
      title: 'ZionAI Platform',
      description: 'Enterprise-grade artificial intelligence platform for building, deploying, and managing AI models at scale.',
      features: ['Model Training & Deployment', 'AutoML Capabilities', 'Real-time Inference', 'Model Monitoring', 'A/B Testing', 'API Integration'],
      category: 'AI & Machine Learning',
      color: 'blue'
    },
    {
      icon: Cloud,
      title: 'ZionCloud Manager',
      description: 'Comprehensive cloud management platform for multi-cloud environments with advanced monitoring and optimization.',
      features: ['Multi-Cloud Management', 'Cost Optimization', 'Performance Monitoring', 'Security Compliance', 'Automated Scaling', 'Disaster Recovery'],
      category: 'Cloud Solutions',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'ZionSecure Suite',
      description: 'Advanced cybersecurity platform providing comprehensive protection for digital assets and compliance management.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Monitoring', 'Incident Response', 'Security Analytics', 'Zero Trust Architecture'],
      category: 'Cybersecurity',
      color: 'red'
    },
    {
      icon: Database,
      title: 'ZionBlock Platform',
      description: 'Enterprise blockchain platform for building secure, scalable, and transparent decentralized applications.',
      features: ['Smart Contract Development', 'DeFi Integration', 'NFT Marketplace', 'Supply Chain Tracking', 'Cross-Chain Interoperability', 'Governance Tools'],
      category: 'Blockchain',
      color: 'yellow'
    },
    {
      icon: BarChart3,
      title: 'ZionAnalytics Pro',
      description: 'Advanced business intelligence and analytics platform for data-driven decision making and insights.',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Data Visualization', 'Custom Reports', 'Data Integration', 'Mobile Analytics'],
      category: 'Data Analytics',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'ZionAutomate',
      description: 'Intelligent automation platform for streamlining business processes and improving operational efficiency.',
      features: ['Process Automation', 'Workflow Management', 'RPA Integration', 'API Orchestration', 'Business Rules Engine', 'Performance Analytics'],
      category: 'Automation',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      purple: 'bg-purple-50 border-purple-200 text-purple-600',
      green: 'bg-green-50 border-green-200 text-green-600',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-600',
      red: 'bg-red-50 border-red-200 text-red-600',
      yellow: 'bg-yellow-50 border-yellow-200 text-yellow-600'
    };
    return colorMap[color] || 'bg-gray-50 border-gray-200 text-gray-600';
  };

  const getIconColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-600',
      purple: 'bg-purple-600',
      green: 'bg-green-600',
      indigo: 'bg-indigo-600',
      red: 'bg-red-600',
      yellow: 'bg-yellow-600'
    };
    return colorMap[color] || 'bg-gray-600';
  };

  return (
    <MainLayout 
      title="Our Products - Zion Tech Group"
      description="Discover Zion Tech Group's innovative technology products including AI platforms, cloud solutions, cybersecurity tools, and blockchain applications."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Innovative technology solutions designed to transform businesses and drive digital innovation across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise-Grade Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products are built with enterprise needs in mind, offering scalability, security, and performance for organizations of all sizes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 ${getIconColorClasses(product.color)} rounded-lg flex items-center justify-center`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getColorClasses(product.color)}`}>
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className={`w-2 h-2 ${getIconColorClasses(product.color)} rounded-full mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link href="/contact">
                      <span className={`flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${getIconColorClasses(product.color)} hover:opacity-90 transition-opacity cursor-pointer`}>
                        Get Demo
                      </span>
                    </Link>
                    <Link href="/contact">
                      <span className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors cursor-pointer">
                        Learn More
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products are organized into specialized categories to meet specific business needs and industry requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI & ML</h3>
              <p className="text-gray-600 text-sm">
                Artificial intelligence and machine learning platforms for intelligent automation and predictive analytics.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
              <p className="text-gray-600 text-sm">
                Cloud management and infrastructure solutions for scalable, secure, and cost-effective operations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive security solutions to protect digital assets and ensure regulatory compliance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics</h3>
              <p className="text-gray-600 text-sm">
                Business intelligence and analytics tools for data-driven decision making and insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products are designed with enterprise needs in mind, offering unmatched performance, security, and scalability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scalable Performance</h3>
              <p className="text-gray-600">
                Built to handle growing business demands with automatic scaling and performance optimization.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-gray-600">
                Industry-leading security features with compliance certifications and advanced threat protection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Integration</h3>
              <p className="text-gray-600">
                Seamless integration with existing systems and third-party applications through robust APIs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Comprehensive monitoring and analytics to track performance, usage, and system health.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock technical support and maintenance to ensure your systems run smoothly.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Availability</h3>
              <p className="text-gray-600">
                Multi-region deployment options with global CDN for optimal performance worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the pricing plan that best fits your business needs and scale as you grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$99<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Up to 5 users
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Basic features
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Email support
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  10GB storage
                </li>
              </ul>
              <Link href="/contact">
                <span className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-center">
                  Get Started
                </span>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$299<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Up to 25 users
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Advanced features
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Priority support
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  100GB storage
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  API access
                </li>
              </ul>
              <Link href="/contact">
                <span className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-center">
                  Get Started
                </span>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Unlimited users
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  All features
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  24/7 support
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Unlimited storage
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Custom integrations
                </li>
              </ul>
              <Link href="/contact">
                <span className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-center">
                  Contact Sales
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey with Zion Tech Group products and experience the power of innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-flex items-center">
                Request Demo
              </span>
            </Link>
            <Link href="/services">
              <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-flex items-center">
                Explore Services
              </span>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;