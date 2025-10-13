import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle, Star, BarChart3, Shield, Cloud, Users } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time dashboards and predictive analytics.',
      icon: <BarChart3 className="w-8 h-8" />,
      link: '/zion-analytics-pro',
      price: 'From $299/month',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'API Integration'],
      featured: true
    },
    {
      title: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection with AI-powered threat detection and automated response.',
      icon: <Shield className="w-8 h-8" />,
      link: '/zion-security-shield',
      price: 'From $499/month',
      features: ['Threat Detection', 'Automated Response', '24/7 Monitoring', 'Compliance Reports'],
      featured: true
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with end-to-end encryption and unlimited scalability.',
      icon: <Cloud className="w-8 h-8" />,
      link: '/zion-cloud-vault',
      price: 'From $99/month',
      features: ['End-to-end Encryption', 'Unlimited Storage', 'File Sharing', 'Version Control'],
      featured: true
    },
    {
      title: 'Zion AI CRM Pro',
      description: 'AI-powered customer relationship management with intelligent lead scoring and automation.',
      icon: <Users className="w-8 h-8" />,
      link: '/zion-ai-crm-pro',
      price: 'From $199/month',
      features: ['Lead Scoring', 'Automation', 'Pipeline Management', 'Integration Hub'],
      featured: true
    },
    {
      title: 'Project Management Pro',
      description: 'Comprehensive project management tool with AI-powered task prioritization and resource allocation.',
      icon: <Zap className="w-8 h-8" />,
      link: '/project-management-tool',
      price: 'From $149/month',
      features: ['Task Management', 'Resource Planning', 'Time Tracking', 'Collaboration Tools']
    },
    {
      title: 'Inventory Management Smart',
      description: 'Intelligent inventory management system with predictive restocking and demand forecasting.',
      icon: <BarChart3 className="w-8 h-8" />,
      link: '/inventory-management-system',
      price: 'From $179/month',
      features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location', 'Analytics Dashboard']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Tools"
        description="Discover our comprehensive suite of micro SAAS solutions including analytics, security, CRM, project management, and more. Ready-to-deploy software tools for immediate business impact."
        keywords="micro SAAS, software solutions, business tools, analytics, CRM, project management, inventory management, cloud storage, cybersecurity"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ready-to-use software solutions that can transform your business operations immediately. 
            No complex setup, no lengthy implementation - just powerful tools that work out of the box.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {product.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-cyan-400 font-medium">{product.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Deploy Your First Micro SAAS?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with any of our solutions in minutes. No setup required, no technical expertise needed.
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
              View Demo
              <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;
