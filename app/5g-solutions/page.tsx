import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  WifiIcon,
  ServerIcon,
  LightBulbIcon,
  DocumentTextIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';

export default function FiveGSolutionsPage() {
  const fiveGServices = [
    {
      title: "5G Network Infrastructure",
      description: "Complete 5G network infrastructure design, deployment, and optimization for ultra-fast connectivity.",
      icon: WifiIcon,
      features: [
        "5G network design",
        "Infrastructure deployment",
        "Performance optimization",
        "Coverage analysis",
        "Capacity planning",
        "Network monitoring"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $15,000/month",
      benefits: ["Ultra-fast speeds", "Low latency", "High capacity"],
      useCases: ["Network deployment", "Infrastructure upgrade", "Performance optimization"],
      href: "/5g-network-infrastructure"
    },
    {
      title: "5G IoT Solutions",
      description: "Comprehensive IoT solutions powered by 5G for massive device connectivity and real-time data processing.",
      icon: GlobeAltIcon,
      features: [
        "Massive IoT connectivity",
        "Real-time data processing",
        "Device management",
        "Edge computing",
        "Security implementation",
        "Analytics & insights"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $8,500/month",
      benefits: ["Massive connectivity", "Real-time processing", "Edge computing"],
      useCases: ["Smart cities", "Industrial IoT", "Connected devices"],
      href: "/5g-iot-solutions"
    },
    {
      title: "5G Edge Computing",
      description: "Edge computing solutions leveraging 5G for ultra-low latency applications and real-time processing.",
      icon: ServerIcon,
      features: [
        "Edge server deployment",
        "Ultra-low latency processing",
        "Real-time analytics",
        "Distributed computing",
        "Content delivery",
        "Performance optimization"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $12,000/month",
      benefits: ["Ultra-low latency", "Real-time processing", "Distributed computing"],
      useCases: ["Gaming", "AR/VR", "Autonomous vehicles"],
      href: "/5g-edge-computing"
    },
    {
      title: "5G Mobile Applications",
      description: "Next-generation mobile applications designed to leverage 5G capabilities for enhanced user experiences.",
      icon: PhoneIcon,
      features: [
        "5G-optimized apps",
        "Real-time streaming",
        "AR/VR integration",
        "Cloud gaming",
        "Performance optimization",
        "Cross-platform support"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $6,500/month",
      benefits: ["Enhanced performance", "Real-time features", "Future-ready apps"],
      useCases: ["Mobile apps", "Streaming services", "Gaming platforms"],
      href: "/5g-mobile-applications"
    },
    {
      title: "5G Data Analytics",
      description: "Advanced data analytics platform powered by 5G for real-time insights and predictive analytics.",
      icon: ChartBarIcon,
      features: [
        "Real-time analytics",
        "Predictive modeling",
        "Data visualization",
        "Machine learning",
        "Edge analytics",
        "Custom dashboards"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $7,200/month",
      benefits: ["Real-time insights", "Predictive analytics", "Edge processing"],
      useCases: ["Business intelligence", "Predictive analytics", "Real-time monitoring"],
      href: "/5g-data-analytics"
    },
    {
      title: "5G Smart City Solutions",
      description: "Comprehensive smart city solutions powered by 5G for urban infrastructure and citizen services.",
      icon: GlobeAltIcon,
      features: [
        "Smart infrastructure",
        "Traffic management",
        "Environmental monitoring",
        "Public safety",
        "Citizen services",
        "Data integration"
      ],
      color: "from-teal-500 to-green-500",
      price: "Starting at $25,000/month",
      benefits: ["Smart infrastructure", "Efficient services", "Data-driven decisions"],
      useCases: ["Smart cities", "Urban planning", "Public services"],
      href: "/5g-smart-city-solutions"
    },
    {
      title: "5G Private Networks",
      description: "Dedicated 5G private networks for enterprises with enhanced security and customized configurations.",
      icon: ShieldCheckIcon,
      features: [
        "Private network setup",
        "Enhanced security",
        "Custom configurations",
        "Dedicated resources",
        "Compliance support",
        "24/7 monitoring"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $18,000/month",
      benefits: ["Enhanced security", "Dedicated resources", "Custom solutions"],
      useCases: ["Enterprise networks", "Manufacturing", "Healthcare"],
      href: "/5g-private-networks"
    },
    {
      title: "5G Implementation Services",
      description: "End-to-end 5G implementation services from planning to deployment and ongoing support.",
      icon: CogIcon,
      features: [
        "Implementation planning",
        "Network deployment",
        "Testing & validation",
        "Performance optimization",
        "Training & support",
        "Ongoing maintenance"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $20,000/month",
      benefits: ["Complete implementation", "Expert support", "Ongoing maintenance"],
      useCases: ["5G deployment", "Network upgrade", "Implementation support"],
      href: "/5g-implementation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions including network infrastructure, IoT, edge computing, mobile applications, and smart city solutions. Transform your business with next-generation connectivity." />
        <meta name="keywords" content="5G solutions, 5G network, edge computing, IoT, smart cities, mobile applications, ultra-fast connectivity" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Next-generation connectivity solutions powered by 5G technology
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Transform your business with ultra-fast 5G connectivity, edge computing, IoT solutions, 
              and smart city technologies that deliver unprecedented speed, reliability, and innovation.
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
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
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
                        <span key={useCaseIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
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
                      className={`flex-1 inline-flex items-center justify-center gap-2 text-${service.color.split(' ')[1].split('-')[1]}-400 hover:text-${service.color.split(' ')[1].split('-')[1]}-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg`}
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-cyan-700 transition-all"
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
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our 5G Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge 5G technology backed by expert implementation and ongoing support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <WifiIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ultra-Fast Speeds</h3>
              <p className="text-gray-300">
                Experience lightning-fast 5G speeds up to 10 Gbps for unprecedented performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ultra-Low Latency</h3>
              <p className="text-gray-300">
                Sub-millisecond latency for real-time applications and instant responsiveness.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with encryption, compliance, and advanced threat protection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored 5G solutions designed specifically for your business needs and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5G Implementation Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our 5G Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful 5G deployment and optimization
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Assessment & Planning</h3>
              <p className="text-gray-300">
                We assess your current infrastructure and create a comprehensive 5G implementation plan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Network Design</h3>
              <p className="text-gray-300">
                We design your 5G network architecture optimized for your specific use cases and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Deployment & Testing</h3>
              <p className="text-gray-300">
                We deploy your 5G infrastructure and conduct comprehensive testing to ensure optimal performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Optimization & Support</h3>
              <p className="text-gray-300">
                We optimize your 5G network and provide ongoing support, monitoring, and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Embrace the 5G Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let our 5G experts help you transform your business with next-generation connectivity solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free 5G Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule 5G Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-blue-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}