import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle, Star, Users, Award, BarChart3, Shield, Cloud, Code, Package, Clock, Mail, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time dashboards and predictive analytics.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      price: 'From $299/month',
      link: '/zion-analytics-pro',
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      title: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection with AI-powered threat detection and automated response.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat detection', 'Automated responses', 'Real-time monitoring', 'Security reports'],
      price: 'From $499/month',
      link: '/zion-security-shield',
      color: 'from-red-500 to-orange-500',
      featured: true
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with end-to-end encryption and unlimited scalability.',
      icon: <Cloud className="w-8 h-8" />,
      features: ['End-to-end encryption', 'Unlimited storage', 'File sharing', 'Version control'],
      price: 'From $99/month',
      link: '/zion-cloud-vault',
      color: 'from-green-500 to-emerald-500',
      featured: true
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
      icon: <Code className="w-8 h-8" />,
      features: ['AI content generation', 'Multi-platform publishing', 'SEO optimization', 'Brand consistency'],
      price: 'From $149/month',
      link: '/zion-content-studio',
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      title: 'Project Management Tool',
      description: 'Comprehensive project management solution with AI-powered task optimization.',
      icon: <Package className="w-8 h-8" />,
      features: ['Task management', 'Team collaboration', 'Time tracking', 'Progress analytics'],
      price: 'From $79/month',
      link: '/project-management-tool',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Customer Relationship Manager',
      description: 'AI-enhanced CRM system for managing customer relationships and sales pipelines.',
      icon: <Users className="w-8 h-8" />,
      features: ['Lead management', 'Sales pipeline', 'Customer insights', 'Automated follow-ups'],
      price: 'From $199/month',
      link: '/customer-relationship-manager',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Inventory Management System',
      description: 'Smart inventory tracking with AI-powered demand forecasting and optimization.',
      icon: <Package className="w-8 h-8" />,
      features: ['Real-time tracking', 'Demand forecasting', 'Automated reordering', 'Analytics dashboard'],
      price: 'From $129/month',
      link: '/inventory-management-system',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Email Marketing Platform',
      description: 'Advanced email marketing automation with AI-powered personalization and analytics.',
      icon: <Mail className="w-8 h-8" />,
      features: ['Email automation', 'Personalization', 'A/B testing', 'Analytics & reporting'],
      price: 'From $89/month',
      link: '/email-marketing-platform',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const benefits = [
    {
      title: 'Ready to Use',
      description: 'Deploy immediately with pre-built solutions',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Scalable',
      description: 'Grow with your business needs',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Cost Effective',
      description: 'Affordable monthly pricing',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance',
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group"
        description="Ready-to-use software solutions for immediate deployment. From analytics to security, discover our comprehensive suite of micro SAAS products designed to accelerate your business growth."
        keywords="micro SAAS, software as a service, business tools, analytics, security, cloud storage, project management, CRM, inventory management"
        canonical="/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Deploy powerful software solutions instantly with our comprehensive suite of micro SAAS products. 
            From analytics to security, we have everything you need to accelerate your business growth.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured Products
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our most popular micro SAAS solutions, trusted by thousands of businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasProducts.filter(product => product.featured).map((product, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                </div>
                <Link to={product.link} className="block">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                    {product.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-cyan-400 font-semibold text-lg">{product.price}</span>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* All Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Micro SAAS Products
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete range of micro SAAS solutions designed for every business need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <Link to={product.link} className="block">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {product.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="text-cyan-400 font-semibold text-sm mb-3">{product.price}</div>
                  <div className="text-center">
                    <span className="inline-flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our proven micro SAAS platform with instant deployment and expert support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive suite of micro SAAS solutions and start transforming your business today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default MicroSaasPage;
