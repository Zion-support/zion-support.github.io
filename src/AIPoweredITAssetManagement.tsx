import React from 'react';
import { 
  Monitor, 
  Shield, 
  Database, 
  ArrowRight, 
  BarChart3,
  Zap, 
  Cloud, 
  Settings
} from 'lucide-react';

const AIPoweredITAssetManagement = () => {
  const features = [
    {
      icon: Database,
      title: "Intelligent Asset Discovery",
      description: "AI-powered automatic discovery and classification of all IT assets across your network infrastructure."
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of asset performance, health, and utilization with AI-powered insights."
    },
    {
      icon: Shield,
      title: "Security Management",
      description: "Comprehensive security monitoring and threat detection across all IT assets and endpoints."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Advanced analytics and reporting on asset utilization, costs, and performance metrics."
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless integration with cloud platforms and hybrid infrastructure management."
    },
    {
      icon: Settings,
      title: "Automated Management",
      description: "Automated asset lifecycle management, updates, and maintenance scheduling."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-6 py-3 mb-6">
              <Monitor className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">AI-Powered IT Asset Management</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Intelligent{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                IT Asset Management
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Revolutionize your IT infrastructure management with AI-powered asset discovery, 
              monitoring, and optimization tools that maximize efficiency and reduce costs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Management Features</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive IT asset management powered by advanced AI
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-colors">
                <feature.icon className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Asset Management Solutions</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive solutions for every IT infrastructure need
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Enterprise Infrastructure',
                description: 'Complete asset management for large-scale enterprise IT infrastructure and data centers.'
              },
              {
                title: 'Cloud Assets',
                description: 'Comprehensive management of cloud resources, virtual machines, and containerized applications.'
              },
              {
                title: 'Network Devices',
                description: 'Intelligent management of network equipment, switches, routers, and security appliances.'
              },
              {
                title: 'Endpoints & Devices',
                description: 'Centralized management of desktops, laptops, mobile devices, and IoT endpoints.'
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Optimize Your IT Infrastructure
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our AI-Powered IT Asset Management platform and transform your infrastructure management today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredITAssetManagement;