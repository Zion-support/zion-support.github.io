import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Circle, Right, Star } from 'lucide-react';

interface MicroSaasProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const products: MicroSaasProduct[] = [
    {
      id: 1,
      name: 'Analytics Dashboard',
      description: 'Real-time analytics and reporting dashboard for small businesses.',
      price: '$29/month',
      features: [
        'Real-time data visualization',
        'Custom reports',
        'Email notifications',
        'API access'
      ],
      category: 'Analytics'
    },
    {
      id: 2,
      name: 'Task Manager Pro',
      description: 'Advanced task management and team collaboration tool.',
      price: '$19/month',
      features: [
        'Team collaboration',
        'Project tracking',
        'Time management',
        'Mobile app'
      ],
      category: 'Productivity'
    },
    {
      id: 3,
      name: 'Email Marketing Suite',
      description: 'Complete email marketing solution for growing businesses.',
      price: '$39/month',
      features: [
        'Email templates',
        'Automation workflows',
        'Analytics tracking',
        'A/B testing'
      ],
      category: 'Marketing'
    }
  ];

  const categories = ['All', 'Analytics', 'Productivity', 'Marketing', 'Finance', 'Communication'];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed for modern businesses." />
        <meta name="keywords" content="micro saas, software solutions, business tools, productivity apps" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our collection of micro SaaS solutions designed to solve specific business problems efficiently.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product) => (
              <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <Circle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <Link
                    to={`/micro-saas/${product.id}`}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    Learn More
                    <Right className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-xl text-gray-300 mb-8">
                We can build a custom micro SaaS solution tailored to your specific business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started
                  <Right className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasPage;