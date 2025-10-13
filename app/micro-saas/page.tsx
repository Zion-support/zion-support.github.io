import React from 'react';
import { ArrowRight, CheckCircle, Star, Package, Shield, BarChart3, Cloud, Users, Zap, Mail } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced analytics platform for data-driven decision making.',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'API integration'],
      price: '$299/month',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity solution for small to medium businesses.',
      features: ['Threat detection', 'Vulnerability scanning', 'Security monitoring', 'Incident response'],
      price: '$199/month',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage and file management solution.',
      features: ['Encrypted storage', 'File sharing', 'Version control', 'Collaboration tools'],
      price: '$99/month',
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: 'Zion AI CRM Pro',
      description: 'AI-powered customer relationship management system.',
      features: ['Lead management', 'Sales automation', 'Customer insights', 'AI recommendations'],
      price: '$399/month',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Zion AI Marketing Automation Pro',
      description: 'Intelligent marketing automation platform.',
      features: ['Email campaigns', 'Social media management', 'Lead nurturing', 'Performance tracking'],
      price: '$249/month',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Zion AI Project Manager Pro',
      description: 'AI-enhanced project management and team collaboration.',
      features: ['Task automation', 'Resource planning', 'Progress tracking', 'Team collaboration'],
      price: '$179/month',
      icon: <Package className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Innovative Software as a Service"
        description="Discover our comprehensive suite of micro SAAS solutions designed to streamline business operations and drive growth."
        keywords="micro SAAS, software as a service, business solutions, productivity tools, cloud software"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, focused software solutions designed to solve specific business challenges and drive operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              Explore Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
              Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Products
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Specialized tools designed to enhance your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {product.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold text-xl">
                    {product.price}
                  </span>
                  <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors duration-300">
                    Start Free Trial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of our micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                <Mail className="w-5 h-5 inline mr-2" />
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;