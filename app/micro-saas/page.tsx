import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, BarChart3, Shield, Cloud, ArrowRight } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const products = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced analytics dashboard with real-time insights',
      icon: <BarChart3 className="w-8 h-8" />,
      path: '/zion-analytics-pro',
      price: '$29/month'
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive security monitoring and threat detection',
      icon: <Shield className="w-8 h-8" />,
      path: '/zion-security-shield',
      price: '$39/month'
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage and file management solution',
      icon: <Cloud className="w-8 h-8" />,
      path: '/zion-cloud-vault',
      price: '$19/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SAAS solutions designed for modern businesses." />
      </Helmet>

      <div className="min-h-screen pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Innovative micro software solutions designed to solve specific business challenges
                with powerful, easy-to-use tools.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                    <Link
                      to={product.path}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
