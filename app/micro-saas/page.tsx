import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle, Star, Users, BarChart3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time dashboards and predictive analytics.',
      price: 'From $299/month',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Integration'],
      link: '/zion-analytics-pro',
      featured: true
    },
    {
      title: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection with AI-powered threat detection and automated response.',
      price: 'From $499/month',
      icon: <Zap className="w-8 h-8" />,
      features: ['Threat Detection', 'Automated Response', 'Compliance Monitoring', 'Security Analytics'],
      link: '/zion-security-shield',
      featured: true
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with end-to-end encryption and unlimited scalability.',
      price: 'From $99/month',
      icon: <Zap className="w-8 h-8" />,
      features: ['End-to-end Encryption', 'Unlimited Storage', 'File Sharing', 'Version Control'],
      link: '/zion-cloud-vault',
      featured: true
    },
    {
      title: 'Zion AI CRM Pro',
      description: 'AI-powered customer relationship management with intelligent lead scoring and automation.',
      price: 'From $199/month',
      icon: <Users className="w-8 h-8" />,
      features: ['Lead Scoring', 'Automation', 'Pipeline Management', 'Customer Insights'],
      link: '/zion-ai-crm-pro',
      featured: false
    },
    {
      title: 'Zion AI Marketing Automation',
      description: 'AI-powered marketing automation with predictive content generation and multi-channel orchestration.',
      price: 'From $149/month',
      icon: <Zap className="w-8 h-8" />,
      features: ['Content Generation', 'Multi-channel', 'A/B Testing', 'Performance Analytics'],
      link: '/zion-ai-marketing-automation',
      featured: false
    },
    {
      title: 'Zion AI Project Manager Pro',
      description: 'AI-powered project management with intelligent task prioritization and resource allocation.',
      price: 'From $99/month',
      icon: <Zap className="w-8 h-8" />,
      features: ['Task Prioritization', 'Resource Allocation', 'Progress Tracking', 'Team Collaboration'],
      link: '/zion-ai-project-manager-pro',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS - Zion Tech Group | Ready-to-Use Software Solutions"
        description="Discover our comprehensive suite of micro SAAS solutions designed to streamline your business operations and boost productivity."
        keywords="micro saas, software solutions, business tools, productivity software, AI-powered tools, business automation"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use software solutions that can transform your business operations immediately. 
              No complex setup, no lengthy implementation - just powerful tools that work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 group relative ${
                  product.featured ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {product.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
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
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={product.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose from our suite of micro SAAS solutions and start seeing results immediately. 
              All our tools are designed to work seamlessly together for maximum efficiency.
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
                Try Free Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;
