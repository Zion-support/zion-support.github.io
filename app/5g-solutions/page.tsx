import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Cpu, 
  Smartphone, 
  Globe, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Clock,
  Users,
  TrendingUp,
  Settings,
  Shield,
  Database,
  Monitor,
  Award,
  Target,
  Rocket,
  Building,
  Car
} from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
  const fiveGServices = [
    {
      id: '5g-implementation',
      name: '5G Implementation',
      price: 'From $5,999',
      description: 'Complete 5G network implementation with planning, deployment, and optimization',
      features: [
        'Network planning and design',
        'Equipment installation and configuration',
        'Testing and optimization',
        'Performance monitoring',
        'Security implementation',
        'Staff training',
        'Documentation and support',
        'Compliance certification'
      ],
      benefits: [
        'Ultra-fast data speeds up to 10 Gbps',
        'Ultra-low latency under 1ms',
        'Support for massive IoT connectivity',
        'Enhanced mobile broadband experience'
      ],
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      popular: true,
      duration: '4-8 weeks'
    },
    {
      id: '5g-network-infrastructure',
      name: '5G Network Infrastructure',
      price: 'From $4,999',
      description: 'Comprehensive 5G infrastructure setup including core network and RAN deployment',
      features: [
        'Core network setup',
        'RAN deployment',
        'Backhaul solutions',
        'Edge computing integration',
        'Network slicing',
        'Quality of Service (QoS)',
        'Traffic management',
        'Network monitoring'
      ],
      benefits: [
        'Scalable and flexible infrastructure',
        'Improved network efficiency',
        'Better resource utilization',
        'Future-proof technology'
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600',
      popular: false,
      duration: '6-10 weeks'
    },
    {
      id: '5g-iot-solutions',
      name: '5G IoT Solutions',
      price: 'From $3,999',
      description: '5G-powered IoT solutions for smart devices and industrial applications',
      features: [
        'Device connectivity management',
        'Data analytics and processing',
        'Edge computing capabilities',
        'Real-time monitoring',
        'Predictive maintenance',
        'Asset tracking',
        'Environmental monitoring',
        'Integration with existing systems'
      ],
      benefits: [
        'Connect millions of devices simultaneously',
        'Real-time data processing',
        'Improved operational efficiency',
        'Reduced maintenance costs'
      ],
      icon: <Settings className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      popular: true,
      duration: '3-6 weeks'
    },
    {
      id: '5g-smart-city-solutions',
      name: '5G Smart City Solutions',
      price: 'From $7,999',
      description: 'Comprehensive 5G solutions for smart city infrastructure and services',
      features: [
        'Traffic management systems',
        'Public safety applications',
        'Environmental monitoring',
        'Smart lighting and utilities',
        'Citizen services platform',
        'Emergency response systems',
        'Data analytics dashboard',
        'Integration with city systems'
      ],
      benefits: [
        'Improved city efficiency',
        'Enhanced public safety',
        'Better resource management',
        'Improved quality of life'
      ],
      icon: <Building className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      popular: false,
      duration: '8-16 weeks'
    },
    {
      id: '5g-edge-computing',
      name: '5G Edge Computing',
      price: 'From $2,999',
      description: '5G edge computing solutions for low-latency applications and real-time processing',
      features: [
        'Edge server deployment',
        'Low-latency processing',
        'Real-time analytics',
        'Distributed computing',
        'Content delivery optimization',
        'AR/VR support',
        'Autonomous vehicle support',
        'Industrial automation'
      ],
      benefits: [
        'Ultra-low latency processing',
        'Improved application performance',
        'Reduced bandwidth usage',
        'Enhanced user experience'
      ],
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600',
      popular: false,
      duration: '2-4 weeks'
    },
    {
      id: '5g-private-networks',
      name: '5G Private Networks',
      price: 'From $6,999',
      description: 'Dedicated 5G private networks for enterprise and industrial applications',
      features: [
        'Dedicated spectrum allocation',
        'Enhanced security features',
        'Custom application development',
        'Network slicing',
        'Quality of Service guarantees',
        'Integration with existing systems',
        '24/7 monitoring and support',
        'Compliance and certification'
      ],
      benefits: [
        'Complete network control',
        'Enhanced security and privacy',
        'Customized performance',
        'Reliable connectivity'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-600',
      popular: true,
      duration: '6-12 weeks'
    }
  ];

  const useCases = [
    { name: 'Smart Manufacturing', icon: <Cpu className="w-6 h-6" />, description: 'Industrial automation and monitoring' },
    { name: 'Autonomous Vehicles', icon: <Car className="w-6 h-6" />, description: 'Connected and autonomous transportation' },
    { name: 'Healthcare', icon: <Users className="w-6 h-6" />, description: 'Remote surgery and telemedicine' },
    { name: 'Entertainment', icon: <Monitor className="w-6 h-6" />, description: 'AR/VR and immersive experiences' },
    { name: 'Smart Cities', icon: <Building className="w-6 h-6" />, description: 'Urban infrastructure and services' },
    { name: 'Agriculture', icon: <Target className="w-6 h-6" />, description: 'Precision farming and monitoring' }
  ];

  const technologies = [
    { name: '5G NR', icon: <Wifi className="w-6 h-6" />, description: 'New Radio technology' },
    { name: 'MEC', icon: <Cpu className="w-6 h-6" />, description: 'Multi-Access Edge Computing' },
    { name: 'Network Slicing', icon: <Settings className="w-6 h-6" />, description: 'Virtual network segmentation' },
    { name: 'Massive MIMO', icon: <Globe className="w-6 h-6" />, description: 'Multiple Input Multiple Output' },
    { name: 'Beamforming', icon: <Target className="w-6 h-6" />, description: 'Directional signal transmission' },
    { name: 'SDN/NFV', icon: <Database className="w-6 h-6" />, description: 'Software-defined networking' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Next-Generation 5G Technology
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                5G Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with ultra-fast 5G connectivity. From smart cities to industrial IoT, 
              we provide comprehensive 5G solutions that enable the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center"
              >
                <Wifi className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Our 5G Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of 5G solutions designed to meet your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fiveGServices.map((service) => (
              <div key={service.id} className={`group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border rounded-3xl p-8 hover:border-green-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 ${service.popular ? 'border-green-500/40 ring-2 ring-green-500/20' : 'border-green-500/20'}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-green-400">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-400 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-green-400 text-sm">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-lg font-semibold text-white">Benefits:</h4>
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={`/${service.id}`}
                    className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center group/btn shadow-lg hover:shadow-green-500/25"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                5G Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how 5G technology is transforming industries and enabling new possibilities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="group text-center p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-green-400">{useCase.icon}</div>
                </div>
                <h3 className="text-white font-semibold mb-2">{useCase.name}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                5G Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with cutting-edge 5G technologies to deliver superior performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group text-center p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-green-400">{tech.icon}</div>
                </div>
                <h3 className="text-white font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-3xl p-12 border border-green-500/20 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Ready to Embrace 5G?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the 5G revolution and transform your business with ultra-fast connectivity. 
                Start your 5G transformation journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center"
                >
                  <Wifi className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-green-400 text-green-400 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  View All Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGSolutionsPage;