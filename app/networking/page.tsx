import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Shield, Zap, Wifi, ArrowRight, CheckCircle, Server, Globe } from 'lucide-react';

const NetworkingPage: React.FC = () => {
  const services = [
    {
      title: 'Network Design & Architecture',
      description: 'Design robust and scalable network infrastructure tailored to your business requirements.',
      icon: Network,
      color: 'text-blue-400',
      features: [
        'LAN/WAN design and implementation',
        'Network topology optimization',
        'Bandwidth planning and capacity management',
        'Redundancy and failover design'
      ],
      pricing: 'Starting at $2,000/month'
    },
    {
      title: 'Network Security',
      description: 'Comprehensive security solutions to protect your network from threats and vulnerabilities.',
      icon: Shield,
      color: 'text-red-400',
      features: [
        'Firewall configuration and management',
        'Intrusion detection and prevention',
        'VPN setup and management',
        'Network access control (NAC)'
      ],
      pricing: 'Starting at $1,500/month'
    },
    {
      title: 'Wireless Solutions',
      description: 'Enterprise-grade wireless networking solutions for seamless connectivity.',
      icon: Wifi,
      color: 'text-green-400',
      features: [
        'Wi-Fi 6 and 6E implementation',
        'Wireless site surveys and optimization',
        'Guest network management',
        'Wireless security and monitoring'
      ],
      pricing: 'Starting at $1,200/month'
    },
    {
      title: 'Network Monitoring',
      description: '24/7 network monitoring and management to ensure optimal performance and uptime.',
      icon: Zap,
      color: 'text-yellow-400',
      features: [
        'Real-time network monitoring',
        'Performance analytics and reporting',
        'Proactive issue detection',
        'Network capacity planning'
      ],
      pricing: 'Starting at $800/month'
    }
  ];

  const technologies = [
    { name: 'Cisco', category: 'Switches & Routers', icon: '🔵' },
    { name: 'Juniper', category: 'Network Equipment', icon: '🟢' },
    { name: 'Fortinet', category: 'Security', icon: '🟠' },
    { name: 'Palo Alto', category: 'Firewalls', icon: '🔴' },
    { name: 'Aruba', category: 'Wireless', icon: '🟣' },
    { name: 'Meraki', category: 'Cloud Networking', icon: '⚡' },
    { name: 'Ubiquiti', category: 'Enterprise WiFi', icon: '📡' },
    { name: 'VMware', category: 'SD-WAN', icon: '🌐' }
  ];

  const benefits = [
    {
      title: 'Improved Performance',
      description: 'Faster and more reliable network connections',
      icon: Zap,
      metric: '99.9% uptime'
    },
    {
      title: 'Enhanced Security',
      description: 'Protect your network from cyber threats',
      icon: Shield,
      metric: '100% secure'
    },
    {
      title: 'Better Scalability',
      description: 'Scale your network as your business grows',
      icon: Network,
      metric: 'Unlimited scale'
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce network costs through optimization',
      icon: Server,
      metric: '30% savings'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Networking Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build a robust, secure, and scalable network infrastructure with our comprehensive networking solutions. 
            From design to monitoring, we ensure your network performs at its best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get Network Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/cybersecurity"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Cybersecurity
            </Link>
          </div>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Networking Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <service.icon className={`w-12 h-12 ${service.color} flex-shrink-0`} />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-lg mb-4">{service.description}</p>
                    <div className="text-cyan-400 font-semibold text-lg">{service.pricing}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="cyber-button inline-flex items-center w-full justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8 neon-text">
              Network Technologies
            </h2>
            <p className="text-gray-300 text-center mb-8 text-lg">
              We work with leading network equipment vendors and technologies to deliver the best solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-white font-semibold mb-1">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Network Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Network Process */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8 neon-text">
              Our Network Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Assessment</h3>
                <p className="text-gray-300">Analyze your current network infrastructure and requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Design</h3>
                <p className="text-gray-300">Design optimal network architecture and topology</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Implement</h3>
                <p className="text-gray-300">Deploy and configure your network infrastructure</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Monitor</h3>
                <p className="text-gray-300">Continuous monitoring and optimization of network performance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cyber-card p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Upgrade Your Network?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our networking experts help you build a robust, secure, and scalable network infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Start Your Network Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/it-services"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              IT Services
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default NetworkingPage;