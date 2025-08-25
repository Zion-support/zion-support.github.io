import React from 'react';
import { Cpu, Shield, TrendingUp, Database, ArrowRight, Zap, Target, BarChart3 } from 'lucide-react';

const AIPoweredITAssetManagement: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: "Intelligent Asset Discovery",
      description: "AI-powered scanning and discovery of all IT assets across your infrastructure."
    },
    {
      icon: Shield,
      title: "Security Monitoring",
      description: "Continuous security assessment and threat detection for all managed assets."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time performance monitoring and predictive maintenance alerts."
    },
    {
      icon: Database,
      title: "Centralized Management",
      description: "Single dashboard for comprehensive IT asset lifecycle management."
    }
  ];

  const benefits = [
    "Reduce IT asset costs by 35%",
    "Improve security posture by 80%",
    "Automated compliance reporting",
    "Predictive maintenance alerts"
  ];

  const assetTypes = [
    {
      title: "Hardware Assets",
      description: "Servers, workstations, networking equipment, and mobile devices."
    },
    {
      title: "Software Assets",
      description: "Licenses, applications, and digital tools across your organization."
    },
    {
      title: "Cloud Resources",
      description: "Cloud instances, storage, and SaaS applications management."
    },
    {
      title: "Network Infrastructure",
      description: "Switches, routers, firewalls, and network security devices."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              AI-Powered Management
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-6">
              AI-Powered IT Asset Management
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your IT asset management with intelligent automation, 
              predictive analytics, and comprehensive security monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 hover:bg-purple-500/20 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the intelligent capabilities that transform IT asset management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Business Impact</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See measurable improvements in your IT asset management and security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-600/10 rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Cost Reduction</span>
                  <span className="text-purple-400 font-semibold">35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Security Improvement</span>
                  <span className="text-purple-400 font-semibold">80%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Asset Visibility</span>
                  <span className="text-purple-400 font-semibold">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Asset Types Managed</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive coverage of all IT assets across your organization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {assetTypes.map((assetType, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">{assetType.title}</h3>
                <p className="text-gray-400">{assetType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your IT Management?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the AI-powered IT asset management revolution and secure your infrastructure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-purple-500/30 text-purple-400 hover:bg-purple-500/20 rounded-lg font-semibold transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredITAssetManagement;