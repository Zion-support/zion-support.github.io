import Layout from '../../components/Layout';
import { ShoppingCart, Users, BarChart, Smartphone, Package } from 'lucide-react';


const features = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Platforms',
    description: 'Custom e-commerce solutions that provide seamless shopping experiences across all devices.'
  },
  {
    icon: Users,
    title: 'Customer Analytics',
    description: 'Advanced customer behavior analytics to optimize marketing and improve conversion rates.'
  },
  {
    icon: BarChart,
    title: 'Inventory Management',
    description: 'Real-time inventory tracking and management systems to optimize stock levels and reduce costs.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Commerce',
    description: 'Mobile-first shopping experiences with native apps and progressive web applications.'
  },
  {
    icon: Package,
    title: 'Supply Chain Optimization',
    description: 'End-to-end supply chain visibility and optimization using AI and machine learning.'
  }
];

const solutions = [
  'E-commerce Platform Development',
  'Mobile Commerce Applications',
  'Inventory Management Systems',
  'Customer Relationship Management',
  'Point of Sale (POS) Systems',
  'Supply Chain Management',
  'Retail Analytics & BI',
  'Personalization Engines',
  'Omnichannel Solutions',
  'Retail Mobile Applications'
];

export default function RetailSolutionsPage() {
  return (
    <Layout 
      title="Retail Solutions - Zion Tech Group"
      description="Transform retail operations with our comprehensive e-commerce, inventory management, customer analytics, and omnichannel solutions."
    >
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Retail
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize retail operations with our comprehensive technology solutions. 
                From e-commerce platforms to inventory management, we help retailers deliver 
                exceptional customer experiences and optimize business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Retail Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our retail solutions are designed to enhance customer experience, 
                optimize operations, and drive business growth across all channels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions List */}
        <section className="py-20 bg-gray-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Our Retail Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Omnichannel Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gray-800/50 rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Omnichannel Retail Experience
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Create seamless shopping experiences across all touchpoints with our 
                  integrated omnichannel retail solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Online Store</h3>
                  <p className="text-gray-300">Custom e-commerce platforms with advanced features and integrations.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Mobile Commerce</h3>
                  <p className="text-gray-300">Native mobile apps and progressive web applications for mobile shopping.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">In-Store Integration</h3>
                  <p className="text-gray-300">POS systems and in-store technology that connects with online channels.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Retail Operations?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let our retail technology experts help you implement solutions that 
                enhance customer experience and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                  Download Retail Guide
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}