import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { 
  Brain, 
  Link as LinkIcon, 
  Smartphone, 
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  BarChart3
} from 'lucide-react';

const ProductsIndex: NextPage = () => {
  const products = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced AI platform that transforms raw data into actionable business insights.',
      features: [
        'Real-time data processing',
        'Machine learning algorithms',
        'Predictive analytics',
        'Custom dashboard creation',
        'API integration'
      ],
      color: 'blue'
    }, {
      icon: LinkIcon,
      title: 'Blockchain Solutions',
      description: 'Secure, scalable blockchain solutions for enterprise applications.',
      features: [
        'Smart contract development',
        'DeFi applications',
        'NFT marketplace',
        'Supply chain tracking',
        'Digital identity management'
      ],
      color: 'green'
    }, {
      icon: Smartphone,
      title: 'IoT Management Platform',
      description: 'Comprehensive IoT platform for managing connected devices and data.',
      features: [
        'Device management',
        'Real-time monitoring',
        'Data visualization',
        'Alert systems',
        'Scalable architecture'
      ],
      color: 'purple'
    }, {
      icon: Shield,
      title: 'Cybersecurity Suite',
      description: 'Advanced security solutions to protect your digital assets.',
      features: [
        'Threat detection',
        'Vulnerability assessment',
        'Incident response',
        'Compliance monitoring',
        'Security training'
      ],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      red: 'bg-red-100 text-red-600'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-600'};

  return (
    <MainLayout 
      title="Our Products - Zion Tech Group"
      description="Explore our innovative technology products including AI platforms, blockchain solutions, IoT management, and cybersecurity tools."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Innovative technology products designed to solve complex business challenges and drive digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mr-6 ${getColorClasses(product.color)}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                      <p className="text-gray-600 text-lg">{product.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                    <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                      Request Demo
                    </button>
                  </div>
                </div>
              )})}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built with Modern Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products are built using cutting-edge technologies and best practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-gray-600">TensorFlow, PyTorch, Scikit-learn</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LinkIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Blockchain</h3>
              <p className="text-gray-600">Ethereum, Solana, Hyperledger</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Data Analytics</h3>
              <p className="text-gray-600">Apache Spark, Kafka, Elasticsearch</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Security</h3>
              <p className="text-gray-600">OAuth 2.0, JWT, Encryption</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Explore Our Products?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our products and how they can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )};

export default ProductsIndex;