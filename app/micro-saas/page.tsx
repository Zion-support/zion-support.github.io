'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Clock, Users, Award } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const products = [
    {
      name: 'AI Content Generator',
      description: 'Generate high-quality content using advanced AI technology',
      price: '$29/month',
      users: 'Up to 5 users',
      features: ['AI-powered content creation', 'Multiple content types', 'SEO optimization', 'Brand voice customization'],
      popular: true
    },
    {
      name: 'Smart Analytics Dashboard',
      description: 'Real-time analytics and insights for your business',
      price: '$49/month',
      users: 'Up to 10 users',
      features: ['Real-time data visualization', 'Custom reports', 'Automated insights', 'Team collaboration'],
      popular: false
    },
    {
      name: 'Automated Email Marketing',
      description: 'AI-driven email campaigns that convert',
      price: '$39/month',
      users: 'Up to 15 users',
      features: ['Smart segmentation', 'A/B testing', 'Personalization', 'Performance tracking'],
      popular: true
    },
    {
      name: 'Social Media Manager',
      description: 'Automate and optimize your social media presence',
      price: '$59/month',
      users: 'Up to 20 users',
      features: ['Multi-platform posting', 'Content scheduling', 'Engagement tracking', 'Trend analysis'],
      popular: false
    },
    {
      name: 'Customer Support Bot',
      description: 'Intelligent chatbot for 24/7 customer support',
      price: '$79/month',
      users: 'Unlimited',
      features: ['Natural language processing', 'Multi-language support', 'Integration APIs', 'Analytics dashboard'],
      popular: false
    },
    {
      name: 'Project Management AI',
      description: 'Smart project planning and resource optimization',
      price: '$69/month',
      users: 'Up to 25 users',
      features: ['AI task prioritization', 'Resource allocation', 'Progress tracking', 'Risk assessment'],
      popular: false
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered',
      description: 'Leverage cutting-edge artificial intelligence to automate and optimize your business processes.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Lightning Fast',
      description: 'Built for speed and performance to handle your growing business needs.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Scalable',
      description: 'Grows with your business from startup to enterprise scale.'
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '10,000+', label: 'Active Users' },
    { icon: <Award className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Clock className="w-8 h-8 text-purple-500" />, value: '24/7', label: 'Support' },
    { icon: <Star className="w-8 h-8 text-orange-500" />, value: '4.9/5', label: 'Rating' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SAAS - Zion Tech Group | Powerful Business Solutions</title>
        <meta name="description" content="Discover our collection of micro SAAS products designed to streamline your business operations. AI-powered tools for modern businesses." />
        <meta name="keywords" content="micro saas, business software, AI tools, productivity, automation, business solutions" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Powerful, focused software solutions that solve specific business problems. 
              Built with AI and designed for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#products" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Explore Products
              </a>
              <a href="#contact" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Our Micro SAAS?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Micro SAAS Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${product.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {product.popular && (
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      <Star className="w-4 h-4 inline mr-1" />
                      Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{product.price}</div>
                    <div className="text-sm text-gray-500">{product.users}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Choose from our collection of micro SAAS products or let us build a custom solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/consultation"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;
