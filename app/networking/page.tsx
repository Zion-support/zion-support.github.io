import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Network, 
  Shield, 
  Zap, 
  Globe, 
  Server, 
  Wifi, 
  Router, 
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Award,
  BarChart,
  Settings,
  Cpu,
  Database,
  Cloud
} from 'lucide-react';

const NetworkingPage: React.FC = () => {
  const features = [
    {
      icon: Network,
      title: 'Enterprise Network Design',
      description: 'Custom network architectures designed for scalability, security, and performance.',
      benefits: ['High availability', 'Load balancing', 'Redundancy planning']
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Comprehensive security solutions to protect your network infrastructure.',
      benefits: ['Firewall management', 'Intrusion detection', 'VPN solutions']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize network performance for maximum efficiency and speed.',
      benefits: ['Bandwidth optimization', 'Traffic analysis', 'QoS implementation']
    },
    {
      icon: Globe,
      title: 'Wide Area Networks',
      description: 'Connect multiple locations with secure and reliable WAN solutions.',
      benefits: ['Site-to-site connectivity', 'Cloud integration', 'Global reach']
    }
  ];

  const services = [
    {
      title: 'Network Assessment',
      description: 'Comprehensive analysis of your current network infrastructure',
      price: 'Starting at $2,500',
      features: ['Infrastructure audit', 'Performance analysis', 'Security review', 'Recommendations report']
    },
    {
      title: 'Network Design & Implementation',
      description: 'Complete network design and deployment services',
      price: 'Starting at $15,000',
      features: ['Custom architecture', 'Hardware procurement', 'Installation', 'Testing & validation']
    },
    {
      title: 'Network Management',
      description: 'Ongoing monitoring and management of your network',
      price: 'Starting at $1,200/month',
      features: ['24/7 monitoring', 'Proactive maintenance', 'Performance optimization', 'Security updates']
    },
    {
      title: 'Network Security Services',
      description: 'Advanced security solutions for network protection',
      price: 'Starting at $3,500',
      features: ['Firewall configuration', 'Intrusion prevention', 'Security policies', 'Compliance support']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Network Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional network solutions including design, implementation, security, and management services for enterprise environments." />
        <meta name="keywords" content="network solutions, enterprise networking, network security, WAN, LAN, network management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Network className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Professional
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  {' '}Network Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Design, implement, and manage enterprise-grade network infrastructure 
                with our comprehensive networking services and solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Get Network Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Network Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From design to deployment, we provide end-to-end network solutions 
                tailored to your business requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Network Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our range of professional network services designed 
                to meet your specific business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                    <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full cyber-button py-3">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Networks Deployed</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">50%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Network Infrastructure?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Get a free network assessment and discover how we can optimize 
              your network for better performance and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NetworkingPage;