'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cpu, Wifi, Shield, Zap, CheckCircle, ArrowRight, Star, Database, Globe, Settings, Smartphone, BarChart, Clock, Users } from 'lucide-react';

const IoTEdgeComputingPage: React.FC = () => {
  const services = [
    {
      icon: Cpu;
      title: 'Edge AI Processing',
      description: 'Deploy AI models directly on edge devices for real-time decision making and reduced latency.',
      features: ['Real-time AI inference', 'Model optimization', 'Edge training', 'Federated learning'],
      benefits: ['Ultra-low latency', 'Reduced bandwidth', 'Offline capabilities', 'Privacy protection']
    },
    {
      icon: Wifi;
      title: 'IoT Device Management',
      description: 'Comprehensive platform for managing, monitoring, and updating IoT devices at scale.',
      features: ['Device provisioning', 'Remote monitoring', 'OTA updates', 'Fleet management'],
      benefits: ['Centralized control', 'Automated updates', 'Predictive maintenance', 'Cost optimization']
    },
    {
      icon: Shield;
      title: 'Edge Security',
      description: 'Advanced security solutions for edge devices and IoT networks with zero-trust architecture.',
      features: ['Device authentication', 'Encrypted communication', 'Threat detection', 'Compliance management'],
      benefits: ['End-to-end security', 'Real-time monitoring', 'Automated response', 'Regulatory compliance']
    },
    {
      icon: Database;
      title: 'Edge Data Management',
      description: 'Intelligent data processing and storage at the edge with cloud synchronization.',
      features: ['Local data processing', 'Smart filtering', 'Cloud sync', 'Data analytics'],
      benefits: ['Reduced data transfer', 'Faster insights', 'Cost efficiency', 'Real-time analytics']
    },
    {
      icon: Globe;
      title: '5G Integration',
      description: 'Seamless integration with 5G networks for ultra-fast connectivity and low latency.',
      features: ['5G connectivity', 'Network slicing', 'Edge computing', 'Mobile edge computing'],
      benefits: ['Ultra-fast speeds', 'Low latency', 'High reliability', 'Massive connectivity']
    },
    {
      icon: Settings;
      title: 'Edge Infrastructure',
      description: 'Complete edge computing infrastructure setup and management for your IoT ecosystem.',
      features: ['Edge servers', 'Network setup', 'Monitoring systems', 'Backup solutions'],
      benefits: ['Reliable infrastructure', 'Scalable architecture', '24/7 monitoring', 'Disaster recovery']
    }
  ];

  const industries = [
    { name: 'Manufacturing', icon: Settings, description: 'Smart factories and predictive maintenance' },
    { name: 'Healthcare', icon: Shield, description: 'Remote patient monitoring and diagnostics' },
    { name: 'Transportation', icon: Globe, description: 'Connected vehicles and smart traffic' },
    { name: 'Agriculture', icon: Cpu, description: 'Precision farming and crop monitoring' },
    { name: 'Energy', icon: Zap, description: 'Smart grids and renewable energy' },
    { name: 'Retail', icon: Smartphone, description: 'Smart stores and inventory management' }
  ];

  const stats = [
    { number: '10ms', label: 'Ultra-Low Latency', icon: Clock },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '50%', label: 'Bandwidth Reduction', icon: BarChart },
    { number: '1000+', label: 'Devices Managed', icon: Users }
  ];

  const solutions = [
    {
      title: 'Smart Manufacturing',
      description: 'Transform your factory with AI-powered edge computing for predictive maintenance and quality control.',
      features: [,
        'Predictive maintenance',
        'Real-time quality control',
        'Automated defect detection',
        'Production optimization',
        'Energy efficiency monitoring'
      ],
      benefits: [,
        '30% reduction in downtime',
        '25% improvement in quality',
        '20% energy savings',
        'Real-time insights'
      ]
    },
    {
      title: 'Connected Healthcare',
      description: 'Revolutionize patient care with edge computing for remote monitoring and real-time diagnostics.',
      features: [,
        'Remote patient monitoring',
        'Real-time vital signs',
        'AI-powered diagnostics',
        'Emergency alerts',
        'Data privacy compliance'
      ],
      benefits: [,
        'Faster diagnosis',
        'Reduced hospital visits',
        'Better patient outcomes',
        'Cost-effective care'
      ]
    },
    {
      title: 'Smart Cities',
      description: 'Build intelligent cities with edge computing for traffic management, public safety, and resource optimization.',
      features: [,
        'Smart traffic lights',
        'Public safety monitoring',
        'Environmental sensing',
        'Resource optimization',
        'Citizen services'
      ],
      benefits: [,
        'Reduced traffic congestion',
        'Improved public safety',
        'Better resource utilization',
        'Enhanced citizen experience'
      ]
    }
  ];

  return(<>
      <Helmet>
        <title>IoT & Edge Computing - Zion Tech Group | Smart Device Solutions</title>
        <meta name="description" content="Transform your business with IoT and edge computing solutions. Real-time processing, AI at the edge, device management, and smart infrastructure." />
        <meta name="keywords" content="IoT development, edge computing, smart devices, real-time processing, AI at edge, device management, 5G integration" />
        <link rel="canonical" href="https://ziontechgroup.com/iot-edge-computing" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">{/* Hero Section */}</div>
        <link rel="canonical" href="https: //ziontechgroup.com/iot-edge-computing" />,
      </Helmet>,
,
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">,
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20"><div className="relative container mx-auto px-4 py-24">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">IoT & Edge Computing<p className="text-xl text-gray-300 mb-8 leading-relaxed">Transform your business with intelligent IoT solutions and edge computing.</p>
                Real-time processing, AI at the edge, and smart device management for the connected world.<div className="flex flex-wrap justify-center gap-8 mt-12">{stats.map((stat, index) => (</div>
              <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">IoT & Edge Computing</span>,)
              </h1>,)
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">,)
                Transform your business with intelligent IoT solutions and edge computing.),
                Real-time processing, AI at the edge, and smart device management for the connected world.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mx-auto mb-4">
        <div className="relative overflow-hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20"></div><div className="relative container mx-auto px-4 py-24"></div>
            <div className="text-center max-w-4xl mx-auto"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">IoT & Edge Computing</span><p className="text-xl text-gray-300 mb-8 leading-relaxed">Transform your business with intelligent IoT solutions and edge computing.</p>
                Real-time processing, AI at the edge, and smart device management for the connected world.<div className="flex flex-wrap justify-center gap-8 mt-12">{stats.map((stat, index) => (</div>
                  <div key={index} className="text-center"></div>
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mx-auto mb-4"></div>
                      <stat.icon className="w-8 h-8 text-white" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div><div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">IoT & Edge Computing Services<p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive solutions for building and managing intelligent IoT ecosystems with edge computing capabilities.<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{services.map((service, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">{service.title}<p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
            <h2 className="text-4xl font-bold text-white mb-4">IoT & Edge Computing Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for building and managing intelligent IoT ecosystems with edge computing capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover: border-green-400/40 transition-all duration-300 group">,
                <div className="flex items-center mb-6">,
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">,
                    <service.icon className="w-6 h-6 text-white" />,
                  </div>,
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Features: </h4>,
        <div className="container mx-auto px-4 py-20"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">IoT & Edge Computing Services</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive solutions for building and managing intelligent IoT ecosystems with edge computing capabilities.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{services.map((service, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group"></div>
                <div className="flex items-center mb-6"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4"></div>
                    <service.icon className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3><p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                </p>
                <div className="space-y-3"></div>
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Features:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300"></div>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits: </h4>,
                <div className="mt-4 pt-4 border-t border-gray-700"></div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300"></div>
                      <Star className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" >{benefit}</Star>
                    </Star>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="bg-slate-800/30 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Industry Solutions<p className="text-xl text-gray-300 max-w-3xl mx-auto">Tailored IoT and edge computing solutions for different industries and use cases.<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">{industries.map((industry, index) => (</div>
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-8 h-8 text-white" />
                  <h3 className="text-white font-semibold mb-2">{industry.name}<p className="text-gray-400 text-sm">{industry.description}</p>
              <h2 className="text-4xl font-bold text-white mb-4">Industry Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored IoT and edge computing solutions for different industries and use cases.
              </p>
            </div>

            <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-8">,
              {industries.map((industry, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover: scale-110 transition-transform duration-300">,
                    <industry.icon className="w-8 h-8 text-white" />,
                  </div>,
                  <h3 className="text-white font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-400 text-sm">{industry.description}</p>
        <div className="bg-slate-800/30 py-20"></div>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Industry Solutions</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Tailored IoT and edge computing solutions for different industries and use cases.</p><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">{industries.map((industry, index) => (</div>
                <div key={index} className="text-center group"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
                    <industry.icon className="w-8 h-8 text-white" />
                  <h3 className="text-white font-semibold mb-2">{industry.name}</h3><p className="text-gray-400 text-sm">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution Examples */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Solution Examples<p className="text-xl text-gray-300 max-w-3xl mx-auto">Real-world applications of IoT and edge computing across different industries.<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">{solutions.map((solution, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}<p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
        <div className="container mx-auto px-4 py-20"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Solution Examples</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Real-world applications of IoT and edge computing across different industries.</p><div className="grid grid-cols-1 lg:grid-cols-3 gap-8">{solutions.map((solution, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300"></div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3><p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                </p>

                <div className="mb-6"></div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features:<ul className="space-y-2">{solution.features.map((feature, featureIndex) => (</ul>
            <h2 className="text-4xl font-bold text-white mb-4">Solution Examples</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world applications of IoT and edge computing across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">,
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover: border-green-400/40 transition-all duration-300">,
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features: </h4>,
                  <ul className="space-y-2">,
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{feature}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                <div className="mb-6"></div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:<ul className="space-y-2">{solution.benefits.map((benefit, benefitIndex) => (</ul>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits: </h4>,
                  <ul className="space-y-2">,
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" >{benefit}</Star>
                      </Star>
                    ))}
                  <button className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">Learn More</button>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover: from-green-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
                  Learn More;
                  <ArrowRight className="w-4 h-4 ml-2" />,
                </button>,
              </div>,
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-20"></div>
          <div className="bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl p-12 text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your IoT Ecosystem?</h2><p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">Let our IoT and edge computing experts help you build intelligent, connected solutions.</p>
              From concept to deployment, we've got you covered.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a;
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >Start Your Project<a
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >View Case Studies</a>
              >
                Start Your Project;
              </a>
              <a;
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                View Case Studies;
              </a>
            </div>
          </div>
        </div>
      </div>,
    </>,
  );
};

export default IoTEdgeComputingPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Cpu, Cloud, Shield, Zap, CheckCircle, ArrowRight, Database, Globe, Settings, Target, Activity } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IotEdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: "Edge Computing",
      description: "Process data locally at the edge for faster response times and reduced latency",
      benefits: ["Real-time processing", "Reduced bandwidth", "Offline capability"]
    },
    {
      icon: Cpu,
      title: "IoT Device Management",
      description: "Comprehensive management and monitoring of connected devices",
      benefits: ["Device provisioning", "Remote updates", "Health monitoring"]
    },
    {
      icon: Cloud,
      title: "Hybrid Cloud Integration",
      description: "Seamless integration between edge devices and cloud infrastructure",
      benefits: ["Scalable processing", "Data synchronization", "Centralized management"]
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "End-to-end security for IoT devices and edge computing systems",
      benefits: ["Device authentication", "Data encryption", "Secure communication"]
    }
  ];

  const applications = [
    {
      title: "Smart Manufacturing",
      description: "Industrial IoT solutions for predictive maintenance and quality control",
      icon: Settings,
      useCases: ["Predictive maintenance", "Quality monitoring", "Production optimization"]
    },
    {
      title: "Smart Cities",
      description: "Urban IoT infrastructure for traffic, utilities, and public services",
      icon: Globe,
      useCases: ["Traffic management", "Energy optimization", "Environmental monitoring"]
    },
    {
      title: "Healthcare IoT",
      description: "Connected medical devices and patient monitoring systems",
      icon: Activity,
      useCases: ["Patient monitoring", "Remote diagnostics", "Health tracking"]
    },
    {
      title: "Agriculture IoT",
      description: "Precision farming with connected sensors and automated systems",
      icon: Target,
      useCases: ["Crop monitoring", "Irrigation control", "Livestock tracking"]
    }
  ];

  const benefits = [
    "Reduced latency with edge processing",
    "Lower bandwidth costs and usage",
    "Enhanced data privacy and security",
    "Improved reliability and uptime",
    "Real-time decision making",
    "Scalable and flexible architecture"
  ];

  const technologies = [
    "AWS IoT Core",
    "Azure IoT Hub",
    "Google Cloud IoT",
    "Kubernetes Edge",
    "Docker Edge",
    "MQTT Protocol"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IoT & Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Advanced IoT and edge computing solutions for smart devices, real-time processing, and connected systems. Transform your operations with intelligent edge technology." />
        <meta name="keywords" content="IoT, edge computing, smart devices, connected systems, real-time processing, industrial IoT" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IoT & Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Computing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Connect, process, and analyze data at the edge with our advanced IoT and edge computing solutions. Transform your operations with intelligent, connected systems that work in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IoT and edge computing solutions combine the power of connected devices with intelligent processing at the edge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-6 group-hover:text-cyan-300 transition-colors">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Areas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              IoT and edge computing solutions are transforming industries across the globe with intelligent, connected systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <app.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{app.description}</p>
                <ul className="space-y-1">
                  {app.useCases.map((useCase, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 text-cyan-400" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Supported <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with leading IoT and edge computing platforms to deliver robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center group">
                <div className="text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                  <Wifi className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-sm font-semibold text-white">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">IoT & Edge Computing</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                IoT and edge computing offer unprecedented opportunities for real-time processing, reduced latency, and enhanced efficiency. Our solutions are designed to maximize these benefits.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Wifi className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Connect?</h3>
                <p className="text-gray-300 mb-6">
                  Let us help you implement IoT and edge computing solutions that transform your operations.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Implement IoT & Edge Computing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our IoT and edge computing experts to discuss how connected systems can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Get Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IotEdgeComputingPage;
