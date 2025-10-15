'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  DocumentTextIcon,
  LightBulbIcon,
  WifiIcon,
  ServerIcon,
  HomeIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

export default function AIIoTSolutionsPage() {
  const iotServices = [
    {
      title: "AI Smart City Platform",
      description: "Comprehensive smart city solution with AI-powered traffic management, environmental monitoring, and citizen services automation.",
      icon: HomeIcon,
      features: [
        "Traffic optimization",
        "Environmental monitoring",
        "Citizen services",
        "Energy management",
        "Public safety",
        "Data analytics"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "$15,000/month",
      setupFee: "$75,000",
      benefits: ["30% efficiency gain", "Cost reduction", "Citizen satisfaction"],
      useCases: ["Municipal management", "Traffic control", "Environmental monitoring"],
      href: "/ai-smart-city"
    },
    {
      title: "AI Industrial IoT",
      description: "Advanced industrial IoT solution with predictive maintenance, quality control, and automated production optimization.",
      icon: CogIcon,
      features: [
        "Predictive maintenance",
        "Quality control",
        "Production optimization",
        "Asset tracking",
        "Energy monitoring",
        "Safety compliance"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$8,500/month",
      setupFee: "$45,000",
      benefits: ["25% downtime reduction", "Quality improvement", "Cost savings"],
      useCases: ["Manufacturing", "Oil & gas", "Automotive"],
      href: "/ai-industrial-iot"
    },
    {
      title: "AI Healthcare IoT",
      description: "Intelligent healthcare IoT platform with patient monitoring, medical device management, and health analytics.",
      icon: ShieldCheckIcon,
      features: [
        "Patient monitoring",
        "Medical device integration",
        "Health analytics",
        "Emergency alerts",
        "Medication tracking",
        "Compliance monitoring"
      ],
      color: "from-red-500 to-pink-500",
      price: "$6,200/month",
      setupFee: "$35,000",
      benefits: ["Improved outcomes", "Reduced costs", "Better care"],
      useCases: ["Hospitals", "Clinics", "Home care"],
      href: "/ai-healthcare-iot"
    },
    {
      title: "AI Agriculture IoT",
      description: "Smart agriculture solution with crop monitoring, automated irrigation, and yield optimization using AI and IoT sensors.",
      icon: GlobeAltIcon,
      features: [
        "Crop monitoring",
        "Automated irrigation",
        "Yield optimization",
        "Weather integration",
        "Pest detection",
        "Soil analysis"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "$4,800/month",
      setupFee: "$25,000",
      benefits: ["20% yield increase", "Water savings", "Reduced waste"],
      useCases: ["Farming", "Greenhouses", "Livestock management"],
      href: "/ai-agriculture-iot"
    },
    {
      title: "AI Fleet Management",
      description: "Intelligent fleet management system with real-time tracking, predictive maintenance, and route optimization.",
      icon: TruckIcon,
      features: [
        "Real-time tracking",
        "Route optimization",
        "Predictive maintenance",
        "Driver behavior analysis",
        "Fuel optimization",
        "Compliance monitoring"
      ],
      color: "from-purple-500 to-pink-500",
      price: "$3,500/month",
      setupFee: "$20,000",
      benefits: ["15% fuel savings", "Reduced maintenance", "Better safety"],
      useCases: ["Logistics", "Transportation", "Delivery services"],
      href: "/ai-fleet-management"
    },
    {
      title: "AI Energy Management",
      description: "Smart energy management system with consumption monitoring, automated optimization, and renewable energy integration.",
      icon: LightBulbIcon,
      features: [
        "Energy monitoring",
        "Consumption optimization",
        "Renewable integration",
        "Peak demand management",
        "Cost analysis",
        "Carbon tracking"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "$2,800/month",
      setupFee: "$15,000",
      benefits: ["30% energy savings", "Carbon reduction", "Cost optimization"],
      useCases: ["Buildings", "Factories", "Data centers"],
      href: "/ai-energy-management"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI IoT Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered IoT solutions for smart cities, industrial automation, healthcare, agriculture, and fleet management. Transform your operations with intelligent connected devices." />
        <meta name="keywords" content="AI IoT, smart city, industrial IoT, healthcare IoT, agriculture IoT, fleet management, energy management, connected devices" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/20 to-cyan-900/20"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-green-200 to-cyan-200 bg-clip-text text-transparent">
              AI IoT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Intelligent connected devices powered by artificial intelligence
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Transform your operations with cutting-edge AI-powered IoT solutions for smart cities, 
              industrial automation, healthcare, agriculture, and fleet management. Experience the future of connected intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* IoT Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {iotServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
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
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-green-400">{service.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Setup fee: <span className="text-yellow-400 font-semibold">{service.setupFee}</span>
                    </div>
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
                      className="flex-1 bg-gradient-to-r from-green-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-green-700 hover:to-cyan-700 transition-all"
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

      {/* Why Choose Our IoT Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI IoT Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge IoT technology combined with advanced AI for maximum efficiency and intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Intelligence</h3>
              <p className="text-gray-300">
                Advanced AI algorithms analyze IoT data in real-time for intelligent decision making.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <WifiIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Seamless Connectivity</h3>
              <p className="text-gray-300">
                Robust connectivity solutions supporting multiple protocols and network types.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                End-to-end security with encryption, authentication, and threat protection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Platform</h3>
              <p className="text-gray-300">
                Cloud-based platform that scales with your business from startup to enterprise.
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
              Ready to Connect with AI IoT?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Transform your operations with intelligent connected devices and AI-powered insights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-green-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-green-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}