import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  SignalIcon, 
  CpuChipIcon, 
  ShieldCheckIcon, 
  BoltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CloudIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const NetworkInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: SignalIcon,
      title: 'Network Design & Architecture',
      description: 'Scalable network architectures designed for performance, security, and future growth.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Network Security',
      description: 'Comprehensive security solutions including firewalls, VPNs, and intrusion detection systems.'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Networking',
      description: 'Hybrid and multi-cloud network solutions for modern distributed applications.'
    },
    {
      icon: BoltIcon,
      title: 'Performance Optimization',
      description: 'Network optimization and monitoring to ensure maximum throughput and minimal latency.'
    },
    {
      icon: CogIcon,
      title: 'Network Automation',
      description: 'AI-powered network automation for configuration management and optimization.'
    },
    {
      icon: ChartBarIcon,
      title: 'Monitoring & Analytics',
      description: 'Real-time network monitoring with advanced analytics and predictive insights.'
    }
  ];

  const technologies = [
    'Cisco Networking',
    'Juniper Networks',
    'Fortinet Security',
    'SD-WAN Solutions',
    '5G Networks',
    'Wi-Fi 6/6E',
    'Load Balancers',
    'CDN Services',
    'VPN Solutions',
    'Network Monitoring'
  ];

  const features = [
    'High Availability',
    'Load Balancing',
    'Traffic Management',
    'Quality of Service (QoS)',
    'Bandwidth Optimization',
    'Network Segmentation',
    'Disaster Recovery',
    'Remote Access',
    'Multi-site Connectivity',
    'Performance Analytics'
  ];

  const benefits = [
    {
      title: 'Enhanced Performance',
      description: 'Up to 500% improvement in network performance and reliability.',
      icon: BoltIcon
    },
    {
      title: 'Improved Security',
      description: 'Enterprise-grade security with advanced threat protection.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce network costs by up to 60% through optimization.',
      icon: ChartBarIcon
    },
    {
      title: 'Scalability',
      description: 'Easily scale your network infrastructure as your business grows.',
      icon: GlobeAltIcon
    }
  ];

  return (
    <>
      <SEOHead 
        title="Network Infrastructure Services - Zion Tech Group"
        description="Professional network infrastructure design, implementation, and management. Secure, scalable, and high-performance network solutions."
        keywords="network infrastructure, network design, network security, SD-WAN, cloud networking, network optimization, Cisco, Juniper"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <SignalIcon className="w-5 h-5 text-indigo-400 mr-2" />
                <span className="text-indigo-300 text-sm font-medium">Network Infrastructure</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Build Robust
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent block">
                  Network Infrastructure
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Design, implement, and manage secure, scalable network infrastructure solutions that power your business operations and enable digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Network Assessment
                  <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
                </button>
                <button className="border-2 border-indigo-400 text-indigo-300 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300">
                  View Solutions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Network Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive network infrastructure solutions for modern businesses and organizations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Supported <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Technologies</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                We work with leading network technology vendors and solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircleIcon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Infrastructure <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced features and capabilities for modern network infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircleIcon className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Why Choose Our <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Network Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Proven benefits that help you achieve better performance, security, and reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-300 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Upgrade Your Network Infrastructure?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Let our network experts help you build a robust, secure, and scalable infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Free Network Assessment
                <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Contact Our Experts
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NetworkInfrastructurePage;