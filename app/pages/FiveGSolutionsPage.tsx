import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CloudIcon,
  ServerIcon,
  CogIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

export default function FiveGSolutionsPage() {
  const fiveGServices = [
    {
      title: "5G Network Planning & Design",
      description: "Comprehensive 5G network planning and design services to optimize coverage, capacity, and performance for your specific requirements.",
      icon: GlobeAltIcon,
      features: [
        "Network coverage analysis",
        "Capacity planning and optimization",
        "Site selection and planning",
        "Interference analysis",
        "Performance modeling",
        "Cost optimization"
      ],
      pricing: {
        basic: { price: 499, period: "month", features: ["Basic planning", "Standard analysis", "Email support"] },
        professional: { price: 1299, period: "month", features: ["Advanced planning", "Detailed analysis", "Priority support"] },
        enterprise: { price: 2999, period: "month", features: ["Full network design", "Custom solutions", "Dedicated team"] }
      },
      color: "from-blue-500 to-cyan-500",
      href: "/5g-network-planning",
      marketPrice: "$499-2,999/month",
      benefits: [
        "Optimize network performance",
        "Reduce deployment costs",
        "Improve coverage and capacity",
        "Ensure future scalability"
      ]
    },
    {
      title: "5G IoT Solutions",
      description: "Connect and manage IoT devices with 5G technology for real-time data collection, analysis, and control across various industries.",
      icon: CpuChipIcon,
      features: [
        "IoT device connectivity",
        "Real-time data processing",
        "Edge computing integration",
        "Device management platform",
        "Data analytics and insights",
        "Security and compliance"
      ],
      pricing: {
        basic: { price: 199, period: "month", features: ["100 devices", "Basic analytics", "Email support"] },
        professional: { price: 599, period: "month", features: ["1,000 devices", "Advanced analytics", "Priority support"] },
        enterprise: { price: 1499, period: "month", features: ["Unlimited devices", "Custom solutions", "Dedicated team"] }
      },
      color: "from-green-500 to-emerald-500",
      href: "/5g-iot-solutions",
      marketPrice: "$199-1,499/month",
      benefits: [
        "Enable real-time IoT applications",
        "Reduce latency and improve reliability",
        "Scale IoT deployments efficiently",
        "Drive operational insights"
      ]
    },
    {
      title: "5G Edge Computing",
      description: "Deploy edge computing solutions with 5G to process data closer to the source, reducing latency and improving performance.",
      icon: ServerIcon,
      features: [
        "Edge infrastructure setup",
        "Application deployment",
        "Data processing optimization",
        "Network slicing",
        "Performance monitoring",
        "Security implementation"
      ],
      pricing: {
        basic: { price: 299, period: "month", features: ["Basic edge setup", "Standard monitoring", "Email support"] },
        professional: { price: 799, period: "month", features: ["Advanced edge services", "Custom applications", "Priority support"] },
        enterprise: { price: 1999, period: "month", features: ["Full edge platform", "Custom solutions", "Dedicated team"] }
      },
      color: "from-purple-500 to-pink-500",
      href: "/5g-edge-computing",
      marketPrice: "$299-1,999/month",
      benefits: [
        "Reduce latency by 90%",
        "Improve application performance",
        "Enable real-time processing",
        "Reduce bandwidth costs"
      ]
    },
    {
      title: "5G Smart City Solutions",
      description: "Transform cities with 5G-powered smart city solutions including traffic management, public safety, and environmental monitoring.",
      icon: ChartBarIcon,
      features: [
        "Smart traffic management",
        "Public safety systems",
        "Environmental monitoring",
        "Smart lighting and utilities",
        "Citizen engagement platforms",
        "Data analytics and insights"
      ],
      pricing: {
        basic: { price: 999, period: "month", features: ["Basic smart city", "Standard features", "Email support"] },
        professional: { price: 2499, period: "month", features: ["Advanced features", "Custom integrations", "Priority support"] },
        enterprise: { price: 4999, period: "month", features: ["Full smart city", "Custom solutions", "Dedicated team"] }
      },
      color: "from-yellow-500 to-orange-500",
      href: "/5g-smart-city",
      marketPrice: "$999-4,999/month",
      benefits: [
        "Improve city efficiency",
        "Enhance public safety",
        "Reduce environmental impact",
        "Improve citizen quality of life"
      ]
    },
    {
      title: "5G Private Networks",
      description: "Deploy dedicated 5G private networks for enterprises requiring ultra-reliable, low-latency connectivity for critical applications.",
      icon: ShieldCheckIcon,
      features: [
        "Private network design",
        "Dedicated spectrum allocation",
        "Ultra-low latency optimization",
        "High reliability configuration",
        "Security and compliance",
        "Performance monitoring"
      ],
      pricing: {
        basic: { price: 799, period: "month", features: ["Basic private network", "Standard SLA", "Email support"] },
        professional: { price: 1999, period: "month", features: ["Advanced features", "High SLA", "Priority support"] },
        enterprise: { price: 3999, period: "month", features: ["Full private network", "Custom SLA", "Dedicated team"] }
      },
      color: "from-red-500 to-pink-500",
      href: "/5g-private-networks",
      marketPrice: "$799-3,999/month",
      benefits: [
        "Ensure ultra-reliable connectivity",
        "Achieve ultra-low latency",
        "Enhance security and control",
        "Support critical applications"
      ]
    },
    {
      title: "5G Mobile Applications",
      description: "Develop and deploy mobile applications that leverage 5G capabilities for enhanced performance, real-time features, and immersive experiences.",
      icon: RocketLaunchIcon,
      features: [
        "5G-optimized app development",
        "Real-time features implementation",
        "AR/VR integration",
        "Edge computing integration",
        "Performance optimization",
        "Cross-platform deployment"
      ],
      pricing: {
        basic: { price: 399, period: "month", features: ["Basic app development", "Standard features", "Email support"] },
        professional: { price: 999, period: "month", features: ["Advanced features", "Custom development", "Priority support"] },
        enterprise: { price: 2499, period: "month", features: ["Full app suite", "Custom solutions", "Dedicated team"] }
      },
      color: "from-indigo-500 to-purple-500",
      href: "/5g-mobile-apps",
      marketPrice: "$399-2,499/month",
      benefits: [
        "Leverage 5G capabilities",
        "Enable real-time features",
        "Improve user experience",
        "Support immersive applications"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions including network planning, IoT solutions, edge computing, smart cities, private networks, and mobile applications." />
        <meta name="keywords" content="5G solutions, 5G network planning, 5G IoT, edge computing, smart cities, private networks, 5G mobile apps" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Unlock the power of 5G technology with comprehensive solutions for next-generation connectivity
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our 5G solutions enable ultra-fast, low-latency connectivity for IoT, edge computing, 
              smart cities, and mobile applications that transform how businesses operate.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {fiveGServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.marketPrice}</div>
                      <div className="text-sm text-gray-400">Starting price</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <StarIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(service.pricing).map(([plan, details]) => (
                      <div key={plan} className="text-center p-3 bg-slate-700 rounded-lg">
                        <div className="text-lg font-bold text-white">${details.price}</div>
                        <div className="text-xs text-gray-400">/{details.period}</div>
                        <div className="text-xs text-gray-300 capitalize">{plan}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.href}
                    className={`inline-flex items-center gap-2 text-${service.color.split(' ')[1].split('-')[1]}-400 hover:text-${service.color.split(' ')[1].split('-')[1]}-300 font-semibold group-hover:gap-3 transition-all`}
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5G Capabilities Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose 5G?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              5G technology offers unprecedented speed, reliability, and connectivity 
              that enables new applications and business models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <RocketLaunchIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Ultra-Fast Speed</h3>
              <p className="text-gray-300">
                Up to 100x faster than 4G, enabling real-time applications and instant data transfer.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Ultra-Low Latency</h3>
              <p className="text-gray-300">
                Sub-millisecond latency enables real-time control and immersive experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Massive IoT</h3>
              <p className="text-gray-300">
                Connect millions of devices per square kilometer for comprehensive IoT deployments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Ultra-Reliable</h3>
              <p className="text-gray-300">
                99.999% reliability for critical applications and mission-critical operations.
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
              Ready to Embrace 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how 5G solutions can transform your business and unlock new opportunities
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free 5G Consultation
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