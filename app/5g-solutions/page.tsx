import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Globe, 
  CheckCircle, 
  Star, 
  Users, 
  TrendingUp, 
  Zap, 
  Smartphone, 
  Mail, 
  Phone, 
  MapPin,
  Play,
  Shield,
  BarChart3,
  Settings,
  FileText,
  Target,
  Calendar,
  Database,
  Eye,
  Cpu,
  Network,
  Award,
  Clock,
  Sparkles,
  Bot,
  Code,
  Image,
  Mic,
  Search,
  Layers,
  Activity,
  Wifi,
  Server,
  HardDrive,
  Monitor
} from 'lucide-react';

export default function FiveGSolutions() {
  const fiveGServices = [
    {
      id: '5g-data-analytics',
      name: '5G Data Analytics',
      description: 'High-speed data processing and analytics with 5G connectivity for real-time insights and decision making.',
      icon: <BarChart3 className="w-8 h-8" />,
      price: '$299/month',
      originalPrice: '$599/month',
      features: [
        'Real-time Data Processing',
        'High-speed Analytics',
        'Edge Computing',
        'IoT Integration',
        'Custom Dashboards',
        'API Access'
      ],
      category: 'Data Analytics',
      color: 'from-cyan-500 to-blue-500',
      popular: true,
      link: '/5g-data-analytics',
      benefits: [
        'Process data 10x faster',
        'Real-time insights',
        'Edge computing capabilities',
        'Seamless IoT integration'
      ]
    },
    {
      id: '5g-edge-computing',
      name: '5G Edge Computing',
      description: 'Ultra-low latency edge computing solutions with 5G connectivity for mission-critical applications.',
      icon: <Cpu className="w-8 h-8" />,
      price: '$399/month',
      originalPrice: '$799/month',
      features: [
        'Ultra-low Latency',
        'Edge Processing',
        'Real-time Applications',
        'Distributed Computing',
        'Auto-scaling',
        'Global Edge Network'
      ],
      category: 'Edge Computing',
      color: 'from-purple-500 to-pink-500',
      popular: true,
      link: '/5g-edge-computing',
      benefits: [
        'Reduce latency by 90%',
        'Process data at the edge',
        'Enable real-time applications',
        'Global edge network coverage'
      ]
    },
    {
      id: '5g-implementation',
      name: '5G Implementation',
      description: 'Complete 5G network deployment and management services for enterprises and smart cities.',
      icon: <Settings className="w-8 h-8" />,
      price: 'Custom Pricing',
      features: [
        'Network Planning',
        'Infrastructure Setup',
        'Device Integration',
        'Performance Optimization',
        'Monitoring & Maintenance',
        'Training & Support'
      ],
      category: 'Network Implementation',
      color: 'from-green-500 to-emerald-500',
      popular: true,
      link: '/5g-implementation',
      benefits: [
        'Complete 5G deployment',
        'Expert implementation',
        'Ongoing support',
        'Performance optimization'
      ]
    },
    {
      id: '5g-mobile-applications',
      name: '5G Mobile Applications',
      description: 'Next-generation mobile applications optimized for 5G networks with enhanced performance and capabilities.',
      icon: <Smartphone className="w-8 h-8" />,
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        '5G-optimized Apps',
        'High-speed Streaming',
        'AR/VR Support',
        'Real-time Features',
        'Cross-platform',
        'Performance Monitoring'
      ],
      category: 'Mobile Development',
      color: 'from-orange-500 to-red-500',
      popular: true,
      link: '/5g-mobile-applications',
      benefits: [
        'Leverage 5G capabilities',
        'Enhanced user experience',
        'Real-time features',
        'Future-proof applications'
      ]
    },
    {
      id: '5g-network-infrastructure',
      name: '5G Network Infrastructure',
      description: 'Comprehensive 5G network infrastructure design, deployment, and management for enterprise environments.',
      icon: <Network className="w-8 h-8" />,
      price: '$499/month',
      originalPrice: '$999/month',
      features: [
        'Network Architecture',
        'Infrastructure Design',
        'Security Implementation',
        'Performance Monitoring',
        'Scalability Planning',
        'Disaster Recovery'
      ],
      category: 'Network Infrastructure',
      color: 'from-indigo-500 to-purple-500',
      popular: true,
      link: '/5g-network-infrastructure',
      benefits: [
        'Robust network architecture',
        'Enterprise-grade security',
        'Scalable infrastructure',
        'High availability'
      ]
    },
    {
      id: '5g-private-networks',
      name: '5G Private Networks',
      description: 'Dedicated 5G private networks for enterprises with enhanced security, control, and customization.',
      icon: <Shield className="w-8 h-8" />,
      price: '$599/month',
      originalPrice: '$1,199/month',
      features: [
        'Private Network Setup',
        'Enhanced Security',
        'Custom Configuration',
        'Dedicated Resources',
        'Isolated Environment',
        '24/7 Monitoring'
      ],
      category: 'Private Networks',
      color: 'from-red-500 to-pink-500',
      popular: true,
      link: '/5g-private-networks',
      benefits: [
        'Enhanced security',
        'Complete control',
        'Customized configuration',
        'Dedicated resources'
      ]
    },
    {
      id: '5g-smart-city-solutions',
      name: '5G Smart City Solutions',
      description: 'Comprehensive smart city infrastructure powered by 5G technology for urban development and management.',
      icon: <Globe className="w-8 h-8" />,
      price: 'Custom Pricing',
      features: [
        'Smart Infrastructure',
        'IoT Integration',
        'Traffic Management',
        'Environmental Monitoring',
        'Public Safety',
        'Citizen Services'
      ],
      category: 'Smart Cities',
      color: 'from-teal-500 to-cyan-500',
      popular: true,
      link: '/5g-smart-city-solutions',
      benefits: [
        'Transform urban infrastructure',
        'Improve citizen services',
        'Optimize city operations',
        'Enable smart governance'
      ]
    },
    {
      id: '5g-iot-solutions',
      name: '5G IoT Solutions',
      description: 'Massive IoT connectivity solutions with 5G technology for industrial and consumer applications.',
      icon: <Wifi className="w-8 h-8" />,
      price: '$179/month',
      originalPrice: '$359/month',
      features: [
        'Massive IoT Connectivity',
        'Low Power Consumption',
        'Real-time Communication',
        'Device Management',
        'Data Analytics',
        'Security Features'
      ],
      category: 'IoT Solutions',
      color: 'from-blue-500 to-indigo-500',
      popular: true,
      link: '/5g-iot-solutions',
      benefits: [
        'Connect millions of devices',
        'Ultra-low power consumption',
        'Real-time data transmission',
        'Comprehensive device management'
      ]
    },
    {
      id: '5g-cloud-integration',
      name: '5G Cloud Integration',
      description: 'Seamless integration of 5G networks with cloud services for enhanced performance and scalability.',
      icon: <Cloud className="w-8 h-8" />,
      price: '$249/month',
      originalPrice: '$499/month',
      features: [
        'Cloud Integration',
        'Edge-to-Cloud Connectivity',
        'Auto-scaling',
        'Load Balancing',
        'Data Synchronization',
        'Performance Optimization'
      ],
      category: 'Cloud Integration',
      color: 'from-slate-500 to-gray-500',
      popular: true,
      link: '/5g-cloud-integration',
      benefits: [
        'Seamless cloud integration',
        'Enhanced performance',
        'Auto-scaling capabilities',
        'Optimized data flow'
      ]
    },
    {
      id: '5g-security-solutions',
      name: '5G Security Solutions',
      description: 'Advanced security solutions specifically designed for 5G networks and applications.',
      icon: <Shield className="w-8 h-8" />,
      price: '$349/month',
      originalPrice: '$699/month',
      features: [
        'Network Security',
        'Threat Detection',
        'Encryption Services',
        'Access Control',
        'Compliance Monitoring',
        'Incident Response'
      ],
      category: 'Security',
      color: 'from-red-500 to-orange-500',
      popular: true,
      link: '/5g-security-solutions',
      benefits: [
        'Comprehensive 5G security',
        'Advanced threat protection',
        'Regulatory compliance',
        '24/7 security monitoring'
      ]
    },
    {
      id: '5g-enterprise-solutions',
      name: '5G Enterprise Solutions',
      description: 'Tailored 5G solutions for enterprise environments with custom configurations and dedicated support.',
      icon: <Server className="w-8 h-8" />,
      price: 'Custom Pricing',
      features: [
        'Custom Configuration',
        'Dedicated Support',
        'Enterprise Integration',
        'Performance Optimization',
        'Training & Consulting',
        'SLA Guarantees'
      ],
      category: 'Enterprise',
      color: 'from-violet-500 to-purple-500',
      popular: true,
      link: '/5g-enterprise-solutions',
      benefits: [
        'Customized solutions',
        'Dedicated support',
        'Enterprise-grade reliability',
        'Comprehensive training'
      ]
    },
    {
      id: '5g-testing-services',
      name: '5G Testing Services',
      description: 'Comprehensive testing and validation services for 5G networks, devices, and applications.',
      icon: <Settings className="w-8 h-8" />,
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Network Testing',
        'Device Validation',
        'Performance Testing',
        'Compatibility Testing',
        'Security Testing',
        'Compliance Testing'
      ],
      category: 'Testing Services',
      color: 'from-yellow-500 to-orange-500',
      popular: true,
      link: '/5g-testing-services',
      benefits: [
        'Comprehensive testing',
        'Quality assurance',
        'Performance validation',
        'Compliance verification'
      ]
    }
  ];

  const stats = [
    { number: '10x', label: 'Faster Speeds', icon: <Zap className="w-6 h-6" /> },
    { number: '1ms', label: 'Ultra-low Latency', icon: <Clock className="w-6 h-6" /> },
    { number: '1M+', label: 'Devices per km²', icon: <Wifi className="w-6 h-6" /> },
    { number: '99.9%', label: 'Reliability', icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Next-Generation Connectivity | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive 5G solutions including edge computing, IoT connectivity, smart city infrastructure, and enterprise networks."
        />
        <meta
          name="keywords"
          content="5G solutions, edge computing, IoT connectivity, smart cities, network infrastructure, mobile applications, private networks, 5G implementation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
              <Globe className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-400 text-sm font-medium">Next-Generation Connectivity</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">
                5G Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with next-generation 5G connectivity. From edge computing to smart cities, 
              we provide comprehensive 5G solutions for the future of digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-orange-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Complete 5G Solutions Suite
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of 5G solutions designed to address every aspect of next-generation connectivity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fiveGServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full border border-orange-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-400 font-bold text-lg">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Key Benefits */}
                    <div className="space-y-2 mb-6">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Deploy 5G Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your 5G transformation journey today. Contact us for personalized recommendations 
                and implementation support for your connectivity needs.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-orange-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-orange-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-orange-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-orange-500/25 hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}