import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Cloud, Server, Shield, TrendingUp, Zap } from 'lucide-react';
import Layout from '../layout';

export default function CloudInfrastructureManagement() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Multi-Cloud Management',
      description: 'Seamlessly manage infrastructure across AWS, Azure, Google Cloud, and private clouds'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with automated compliance monitoring and threat detection'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 40% with intelligent resource optimization and right-sizing'
    },
    {
      icon: <Server className="w-6 h-6 text-green-400" />,
      title: '24/7 Monitoring',
      description: 'Proactive monitoring with automated scaling, performance optimization, and incident response'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      title: 'Auto-Scaling',
      description: 'Automatically scale resources based on demand to ensure optimal performance and cost efficiency'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
      title: 'Analytics & Insights',
      description: 'Advanced analytics to optimize infrastructure performance and make data-driven decisions'
    }
  ];

  const managementFeatures = [
    {
      category: 'Infrastructure Management',
      items: ['Server Provisioning', 'Load Balancing', 'Auto Scaling', 'Resource Monitoring', 'Backup & Recovery', 'Disaster Recovery']
    },
    {
      category: 'Security & Compliance',
      items: ['Identity Management', 'Access Control', 'Encryption', 'Vulnerability Scanning', 'Compliance Auditing', 'Security Monitoring']
    },
    {
      category: 'Cost Management',
      items: ['Cost Analysis', 'Resource Optimization', 'Budget Alerts', 'Usage Tracking', 'Cost Forecasting', 'Right-sizing Recommendations']
    },
    {
      category: 'Support & Maintenance',
      items: ['24/7 Support', 'Proactive Monitoring', 'Incident Response', 'Performance Tuning', 'Capacity Planning', 'Health Checks']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Infrastructure Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize your cloud infrastructure with our comprehensive management solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
                {feature.icon}
                <h3 className="text-xl font-semibold text-white mb-2 mt-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Management Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {managementFeatures.map((service, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">{service.category}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-blue-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Optimize Your Cloud?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you manage and optimize your cloud infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}