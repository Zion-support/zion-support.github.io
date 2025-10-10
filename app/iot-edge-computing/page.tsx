'use client';
import React from 'react';
import { Globe, Cpu, Zap, Shield, Target, Users, BarChart, Settings, CheckCircle, ArrowRight, Brain, Code, Database, Cloud, Smartphone, DollarSign, Clock, Star, Award, TrendingUp, Heart, Wifi, HardDrive, Monitor, Wrench, Lightbulb, Activity, Wifi as Network, HardDrive as Storage, Monitor as Display, Wrench as Tools, Lightbulb as Innovation, Activity as Performance, TrendingUp as Growth, Heart as Love } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const IoTEdgeComputingPage: React.FC = () => {
  const services = [
    {
      title: 'IoT Device Development',
      description: 'Custom IoT devices and sensors for data collection and monitoring',
      icon: Globe,
      price: 'Custom Pricing',
      features: [
        'Sensor integration',
        'Wireless connectivity',
        'Power management',
        'Data encryption',
        'Remote monitoring',
        'Firmware development'
      ],
      benefits: [
        'Real-time data collection',
        'Reduced latency',
        'Lower bandwidth usage',
        'Enhanced security'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400/30',
      category: 'Hardware'
    },
    {
      title: 'Edge Computing Infrastructure',
      description: 'Distributed computing infrastructure for processing data at the edge',
      icon: Cpu,
      price: 'Custom Pricing',
      features: [
        'Edge servers deployment',
        'Container orchestration',
        'Load balancing',
        'Auto-scaling',
        'Fault tolerance',
        'Monitoring systems'
      ],
      benefits: [
        'Ultra-low latency',
        'Reduced cloud costs',
        'Offline capability',
        'Improved performance'
      ],
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-400/30',
      category: 'Infrastructure'
    },
    {
      title: 'Real-time Data Processing',
      description: 'Stream processing and analytics for immediate insights and actions',
      icon: BarChart,
      price: 'Custom Pricing',
      features: [
        'Stream processing engines',
        'Real-time analytics',
        'Event-driven architecture',
        'Data pipelines',
        'Machine learning inference',
        'Alert systems'
      ],
      benefits: [
        'Instant decision making',
        'Predictive maintenance',
        'Anomaly detection',
        'Operational efficiency'
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-400/30',
      category: 'Analytics'
    },
    {
      title: 'IoT Security Solutions',
      description: 'Comprehensive security for IoT devices and edge computing networks',
      icon: Shield,
      price: 'Custom Pricing',
      features: [
        'Device authentication',
        'Encrypted communications',
        'Secure boot',
        'Threat detection',
        'Access control',
        'Compliance management'
      ],
      benefits: [
        'Protection against attacks',
        'Data privacy',
        'Regulatory compliance',
        'Trusted operations'
      ],
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-400/30',
      category: 'Security'
    },
    {
      title: 'Edge AI & Machine Learning',
      description: 'AI models deployed at the edge for intelligent decision making',
      icon: Brain,
      price: 'Custom Pricing',
      features: [
        'Model optimization',
        'Edge inference',
        'Federated learning',
        'Model versioning',
        'A/B testing',
        'Performance monitoring'
      ],
      benefits: [
        'Intelligent automation',
        'Reduced latency',
        'Privacy preservation',
        'Cost optimization'
      ],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-400/30',
      category: 'AI/ML'
    },
    {
      title: 'IoT Platform Integration',
      description: 'Seamless integration with existing systems and cloud platforms',
      icon: Settings,
      price: 'Custom Pricing',
      features: [
        'API development',
        'Protocol translation',
        'Data synchronization',
        'Cloud connectivity',
        'Legacy system integration',
        'Custom dashboards'
      ],
      benefits: [
        'Unified data view',
        'Simplified management',
        'Scalable architecture',
        'Future-proof design'
      ],
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-400/30',
      category: 'Integration'
    }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      icon: Settings,
      color: 'text-blue-400',
      description: 'Smart factories with predictive maintenance and quality control',
      applications: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Worker safety']
    },
    {
      name: 'Healthcare',
      icon: Heart,
      color: 'text-red-400',
      description: 'Remote patient monitoring and medical device management',
      applications: ['Patient monitoring', 'Medical devices', 'Drug management', 'Telemedicine']
    },
    {
      name: 'Agriculture',
      icon: Globe,
      color: 'text-green-400',
      description: 'Precision farming and environmental monitoring',
      applications: ['Crop monitoring', 'Soil analysis', 'Weather tracking', 'Livestock management']
    },
    {
      name: 'Smart Cities',
      icon: Building,
      color: 'text-purple-400',
      description: 'Connected infrastructure and citizen services',
      applications: ['Traffic management', 'Energy optimization', 'Waste management', 'Public safety']
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      color: 'text-yellow-400',
      description: 'Inventory management and customer experience',
      applications: ['Inventory tracking', 'Customer analytics', 'Supply chain', 'Store optimization']
    },
    {
      name: 'Energy',
      icon: Zap,
      color: 'text-orange-400',
      description: 'Smart grids and renewable energy management',
      applications: ['Grid monitoring', 'Renewable integration', 'Demand response', 'Asset management']
    }
  ];

  const technologies = [
    {
      name: 'Edge Computing Platforms',
      description: 'Kubernetes, Docker, and container orchestration',
      icon: Cpu,
      examples: ['K3s', 'OpenShift', 'Azure IoT Edge', 'AWS Greengrass']
    },
    {
      name: 'IoT Protocols',
      description: 'Communication protocols for device connectivity',
      icon: Wifi,
      examples: ['MQTT', 'CoAP', 'LoRaWAN', 'Zigbee', 'Bluetooth']
    },
    {
      name: 'Edge AI Frameworks',
      description: 'Machine learning frameworks optimized for edge deployment',
      icon: Brain,
      examples: ['TensorFlow Lite', 'ONNX Runtime', 'OpenVINO', 'NVIDIA Jetson']
    },
    {
      name: 'Time Series Databases',
      description: 'Specialized databases for IoT data storage and analysis',
      icon: Database,
      examples: ['InfluxDB', 'TimescaleDB', 'Prometheus', 'ClickHouse']
    }
  ];

  const stats = [
    { label: 'IoT Devices Deployed', value: '10,000+', icon: Globe },
    { label: 'Edge Nodes Managed', value: '500+', icon: Cpu },
    { label: 'Data Points Processed', value: '1B+', icon: BarChart },
    { label: 'Uptime Achieved', value: '99.9%', icon: Shield },
    { label: 'Latency Reduction', value: '90%', icon: Zap },
    { label: 'Cost Savings', value: '60%', icon: DollarSign }
  ];

  const benefits = [
    {
      title: 'Ultra-Low Latency',
      description: 'Process data locally for instant response times',
      icon: Zap,
      color: 'text-yellow-400'
    },
    {
      title: 'Reduced Bandwidth',
      description: 'Minimize data transmission and cloud costs',
      icon: Wifi,
      color: 'text-blue-400'
    },
    {
      title: 'Enhanced Security',
      description: 'Keep sensitive data local and encrypted',
      icon: Shield,
      color: 'text-red-400'
    },
    {
      title: 'Offline Capability',
      description: 'Continue operations without internet connectivity',
      icon: Globe,
      color: 'text-green-400'
    },
    {
      title: 'Real-time Insights',
      description: 'Get immediate analytics and decision support',
      icon: BarChart,
      color: 'text-purple-400'
    },
    {
      title: 'Scalable Architecture',
      description: 'Easily expand as your needs grow',
      icon: TrendingUp,
      color: 'text-cyan-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            IoT & <span className="text-cyan-400">Edge Computing</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with intelligent IoT devices and edge computing solutions. 
            Process data locally for faster insights and better performance.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our IoT & Edge Computing Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${service.borderColor}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.title}</h3>
                    <div className={`text-sm font-semibold ${service.color}`}>{service.category}</div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-pink-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className={`text-lg font-bold mb-4 neon-text ${service.color}`}>
                    {service.price}
                  </div>
                  <a 
                    href="/contact" 
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                  >
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Industries We Serve
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <industry.icon className={`w-8 h-8 ${industry.color} mr-3`} />
                  <h3 className="text-xl font-bold text-white neon-text">{industry.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Applications:</h4>
                  <ul className="space-y-1">
                    {industry.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Technologies We Use
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <tech.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white neon-text">{tech.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.examples.map((example, exampleIndex) => (
                      <span key={exampleIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Edge Computing?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <benefit.icon className={`w-16 h-16 ${benefit.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Build Your IoT Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your IoT and edge computing needs. We'll help you build a connected, intelligent system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IoTEdgeComputingPage;