'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BarChart, MessageSquare, FileText, Users, CheckCircle, ArrowRight } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
=======
  const products = [
    {
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      icon: BarChart,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Reporting'],
      price: '$299/month'
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Intelligent chatbot solution for customer service and support automation.',
      features: ['Natural Language Processing', 'Multi-channel Support', 'Custom Training', 'Analytics Dashboard'],
      price: '$199/month'
    },
    {
      icon: FileText,
      title: 'Zion Document AI',
      description: 'Automated document processing and analysis with intelligent data extraction.',
      features: ['Document Classification', 'Text Extraction', 'Form Processing', 'Data Validation'],
      price: '$399/month'
    },
    {
      icon: Users,
      title: 'Zion CRM Pro',
      description: 'Customer relationship management with AI-powered insights and automation.',
      features: ['Lead Management', 'Sales Automation', 'Customer Analytics', 'Integration Hub'],
      price: '$249/month'
    }
  ];

<<<<<<< HEAD
  const categories = [
=======
<<<<<<< HEAD
  const categories = const categories = const categories = [
>>>>>>> main
    { id: 'all', name: 'All Tools', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: products.filter(p => p.category === 'Customer Service').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length },
    { id: 'Productivity', name: 'Productivity', count: products.filter(p => p.category === 'Productivity').length },
    { id: 'CRM', name: 'CRM', count: products.filter(p => p.category === 'CRM').length },
    { id: 'Data', name: 'Data', count: products.filter(p => p.category === 'Data').length },
    { id: 'Project Management', name: 'Project Management', count: products.filter(p => p.category === 'Project Management').length },
    { id: 'Content', name: 'Content', count: products.filter(p => p.category === 'Content').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
>>>>>>> cursor/website-audit-and-update-with-deployment-26c5

  return (
    <>
      <Helmet>
        <title>Micro SaaS Tools - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta name="description" content="Comprehensive suite of micro SaaS tools including analytics, CRM, automation, and AI-powered business solutions. Transform your operations today." />
        <meta name="keywords" content="micro SaaS, business tools, AI automation, analytics, CRM, productivity tools" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS Tools</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful AI-driven micro SaaS tools designed to streamline your business operations and boost productivity
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-4 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{product.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                        <span className="text-gray-400 text-sm line-through">{product.marketPrice}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {product.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {product.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <a href="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                      Get Started
                    </a>
=======
  const benefits = [
    'Quick Setup',
    'Scalable Solutions',
    '24/7 Support',
    'Regular Updates',
    'Easy Integration',
    'Cost Effective'
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS | Zion Tech Group - Specialized Software Solutions</title>
        <meta name="description" content="Discover our micro SaaS products designed for specific business needs. Analytics, chatbots, document processing, and CRM solutions." />
        <meta name="keywords" content="micro SaaS, software as a service, analytics, chatbots, document processing, CRM, business tools" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Products
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Specialized software solutions designed to solve specific business challenges with focused functionality.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Focused solutions that deliver specific value without the complexity of large enterprise software.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-cyan-600">
                      {product.price}
                    </span>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                      Try Free
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Choose from our comprehensive suite of Micro SaaS tools or get a custom solution built for your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                    Get Free Consultation
                  </a>
                  <a href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                    Call: (302) 464-0950
                  </a>
=======
        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Micro SaaS?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Micro SaaS products offer focused solutions that are easier to implement and maintain.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit}
                  </h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Makes Our Micro SaaS Different?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our micro SaaS products are built with modern technology and designed for ease of use.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Modern Technology Stack</h3>
                <p className="text-gray-600 mb-6">
                  Built with the latest technologies including React, Node.js, and cloud-native architecture for optimal performance and scalability.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Cloud-native architecture
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    API-first design
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Real-time updates
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Easy Integration</h3>
                <p className="text-gray-600 mb-6">
                  Seamlessly integrate with your existing tools and workflows through our comprehensive API and pre-built connectors.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    RESTful APIs
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Webhook support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Third-party integrations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Try Our Micro SaaS Products?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start with a free trial and experience the power of focused software solutions.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Free Trial
            </button>
          </div>
        </section>
      </main>
<<<<<<< HEAD
      
      <Footer />
    </>
<<<<<<< HEAD
=======
<<<<<<< HEAD
      )},
    {/* All Products */}
      <section className="py-16 px-4 bg-white/5" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="flex flex-col md:flex-row gap-4 mb-12" /></div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map()
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
            {filteredProducts.map((product) => ()
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{product.category}</p>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-white mb-4">{product.price}</div>

                <ul className="space-y-2 mb-6" /></ul>
                  {product.features.slice(0, 3).map((feature, index) => ()
                  ))}
                </ul>

                <button className="w-full text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center justify-center gap-2" /></button>
                  Learn More
                  <ArrowRight className="w-4 h-4" / /></ArrowRight>
                </button>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && ()
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="text-center mb-16" /></div>
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Micro SaaS Tools?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
              Each tool is designed to solve a specific problem with maximum efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" /></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center" /></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6" /></div>
                <Zap className="w-8 h-8 text-white" / /></Zap>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
              <p className="text-gray-300" /></p>
                Get up and running in minutes with our intuitive setup process and comprehensive documentation.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center" /></div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6" /></div>
                <TrendingUp className="w-8 h-8 text-white" / /></TrendingUp>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Immediate ROI</h3>
              <p className="text-gray-300" /></p>
                See results from day one with tools designed to deliver immediate business value and efficiency gains.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center" /></div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6" /></div>
                <Rocket className="w-8 h-8 text-white" / /></Rocket>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300" /></p>
                Start small and scale up as your business grows with flexible pricing and feature options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" /></section>
        <div className="max-w-4xl mx-auto text-center" /></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12" /></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" /></h2>
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8" /></p>
              Start with any of our micro SaaS tools and see immediate improvements in your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105" /></button>
                Start Free Trial
                <ArrowRight className="inline-block ml-2 w-5 h-5" / /></ArrowRight>
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300" /></button>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-26c5
=======

      <Footer />
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
>>>>>>> main
  );
};

export default MicroSaasPage;