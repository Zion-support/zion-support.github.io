'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  WifiIcon,
  CpuChipIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  DocumentTextIcon,
  LightBulbIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  ServerIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function FiveGSolutionsPage() {
  const fiveGServices = [
    {
      title: "5G Network Infrastructure",
      description: "Complete 5G network infrastructure design, deployment, and optimization for enhanced connectivity and performance.",
      icon: WifiIcon,
      features: [
        "5G network design",
        "Infrastructure deployment",
        "Performance optimization",
        "Coverage planning",
        "Capacity management",
        "Network monitoring"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $50,000",
      benefits: ["Ultra-fast speeds", "Low latency", "High capacity"],
      useCases: ["Urban deployment", "Rural connectivity", "Enterprise networks"],
      href: "/5g-network-infrastructure"
    },
    {
      title: "5G IoT Solutions",
      description: "Comprehensive 5G IoT solutions for smart cities, industrial automation, and connected devices.",
      icon: CpuChipIcon,
      features: [
        "IoT device management",
        "Real-time data processing",
        "Edge computing",
        "Device connectivity",
        "Data analytics",
        "Remote monitoring"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $25,000",
      benefits: ["Massive IoT", "Low power", "Real-time processing"],
      useCases: ["Smart cities", "Industrial IoT", "Connected devices"],
      href: "/5g-iot-solutions"
    },
    {
      title: "5G Edge Computing",
      description: "5G edge computing solutions for ultra-low latency applications and real-time data processing.",
      icon: ServerIcon,
      features: [
        "Edge server deployment",
        "Latency optimization",
        "Real-time processing",
        "Data caching",
        "Load balancing",
        "Performance monitoring"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $30,000",
      benefits: ["Ultra-low latency", "Real-time processing", "Edge optimization"],
      useCases: ["Autonomous vehicles", "AR/VR", "Real-time gaming"],
      href: "/5g-edge-computing"
    },
    {
      title: "5G Mobile Applications",
      description: "5G-optimized mobile applications that leverage high-speed connectivity and low latency capabilities.",
      icon: GlobeAltIcon,
      features: [
        "5G-optimized apps",
        "Real-time streaming",
        "AR/VR integration",
        "High-bandwidth features",
        "Low-latency gaming",
        "Mobile analytics"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $15,000",
      benefits: ["High-speed apps", "Real-time features", "Enhanced UX"],
      useCases: ["Mobile gaming", "AR/VR apps", "Streaming apps"],
      href: "/5g-mobile-applications"
    },
    {
      title: "5G Data Analytics",
      description: "Advanced 5G data analytics solutions for network optimization, user behavior analysis, and performance insights.",
      icon: ChartBarIcon,
      features: [
        "Network analytics",
        "User behavior analysis",
        "Performance insights",
        "Predictive analytics",
        "Real-time dashboards",
        "Custom reporting"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $20,000",
      benefits: ["Network insights", "User analytics", "Performance optimization"],
      useCases: ["Network optimization", "User analytics", "Performance monitoring"],
      href: "/5g-data-analytics"
    },
    {
      title: "5G Private Networks",
      description: "Dedicated 5G private networks for enterprises, campuses, and specialized applications requiring secure connectivity.",
      icon: ShieldCheckIcon,
      features: [
        "Private network design",
        "Security implementation",
        "Dedicated infrastructure",
        "Custom configurations",
        "Network isolation",
        "Performance guarantees"
      ],
      color: "from-red-500 to-orange-500",
      price: "Starting at $75,000",
      benefits: ["Dedicated network", "Enhanced security", "Custom configuration"],
      useCases: ["Enterprise networks", "Campus networks", "Critical infrastructure"],
      href: "/5g-private-networks"
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions including network infrastructure, IoT solutions, edge computing, and mobile applications. Next-generation connectivity for modern businesses." />
        <meta name="keywords" content="5G solutions, 5G network, 5G IoT, edge computing, mobile applications, private networks, data analytics" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Next-generation 5G technology solutions for enhanced connectivity and ultra-low latency
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From 5G network infrastructure to IoT solutions and edge computing, our expert team 
              delivers cutting-edge 5G technology solutions that transform how businesses connect and operate.
            </p>
          </div>
        </div>
      </section>

      {/* 5G Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {fiveGServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-indigo-900/30 text-indigo-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={service.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-indigo-700 hover:to-purple-700 transition-all"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our 5G Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our 5G Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert 5G technology services backed by years of experience and cutting-edge infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <WifiIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">5G Experts</h3>
              <p className="text-gray-300">
                Certified 5G professionals with expertise in network design, deployment, and optimization.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ultra-Low Latency</h3>
              <p className="text-gray-300">
                Ultra-low latency solutions for real-time applications and mission-critical operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security measures and compliance with industry standards and regulations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300">
                Scalable 5G solutions that grow with your business and adapt to changing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Deploy 5G Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let our 5G experts help you build a next-generation connectivity infrastructure
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get 5G Assessment
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule 5G Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-indigo-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-indigo-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}