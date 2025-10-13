import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CpuChipIcon, 
  WifiIcon, 
  ClockIcon, 
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const IoTDevelopmentPage = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: "Smart Device Development",
      description: "Custom IoT devices and sensors with embedded systems, real-time data collection, and edge computing capabilities."
    },
    {
      icon: CloudIcon,
      title: "IoT Cloud Platforms",
      description: "Scalable cloud infrastructure for device management, data processing, and analytics with 99.9% uptime guarantee."
    },
    {
      icon: WifiIcon,
      title: "Connectivity Solutions",
      description: "Secure wireless communication protocols including WiFi, Bluetooth, LoRaWAN, and cellular connectivity options."
    },
    {
      icon: ChartBarIcon,
      title: "Real-time Analytics",
      description: "Advanced data processing and analytics dashboards for monitoring device performance and extracting insights."
    },
    {
      icon: ShieldCheckIcon,
      title: "Security & Compliance",
      description: "End-to-end security implementation including device authentication, data encryption, and regulatory compliance."
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile Applications",
      description: "Cross-platform mobile apps for device control, monitoring, and management with intuitive user interfaces."
    }
  ];

  const industries = [
    "Smart Manufacturing",
    "Healthcare & Medical Devices",
    "Agriculture & Precision Farming",
    "Smart Cities & Infrastructure",
    "Energy & Utilities",
    "Retail & Supply Chain",
    "Automotive & Transportation",
    "Home Automation",
    "Environmental Monitoring",
    "Fleet Management"
  ];

  const pricingPlans = [
    {
      name: "Prototype Development",
      price: "$10,000",
      period: "starting from",
      description: "Proof of concept and MVP",
      features: [
        "Basic device development",
        "Simple cloud integration",
        "Mobile app prototype",
        "Documentation",
        "4-6 weeks delivery"
      ]
    },
    {
      name: "Production Solution",
      price: "$35,000",
      period: "starting from",
      description: "Complete IoT ecosystem",
      features: [
        "Production-ready devices",
        "Full cloud platform",
        "Advanced analytics",
        "Security implementation",
        "Mobile applications",
        "8-12 weeks delivery"
      ]
    },
    {
      name: "Enterprise Platform",
      price: "$100,000",
      period: "starting from",
      description: "Large-scale IoT deployment",
      features: [
        "Custom hardware design",
        "Scalable cloud infrastructure",
        "Advanced AI integration",
        "Comprehensive security",
        "Multi-tenant architecture",
        "Ongoing support",
        "16-24 weeks delivery"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IoT Development Services - Zion Tech Group</title>
        <meta name="description" content="Expert IoT development services including smart devices, cloud platforms, mobile apps, and complete IoT ecosystems for various industries." />
        <meta name="keywords" content="IoT development, smart devices, IoT cloud platform, connected devices, industrial IoT, smart manufacturing" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <CpuChipIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            IoT Development
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build the future with connected devices. From smart sensors to complete IoT ecosystems, we create intelligent solutions that transform industries and improve lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Get Free Consultation
            </button>
            <button className="border border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Complete IoT Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-800/30 rounded-lg p-4">
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Flexible Development Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                plan.name === 'Production Solution' 
                  ? 'border-purple-500 ring-2 ring-purple-500/20' 
                  : 'border-slate-700'
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.name === 'Production Solution'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : 'border border-slate-600 text-gray-300 hover:border-purple-500 hover:text-white'
                }`}>
                  {plan.name === 'Production Solution' ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Connect Your World?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's build an IoT solution that transforms your business and creates new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Start Your Project
            </button>
            <button className="border border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              Contact Us
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Free consultation • Custom solutions • 24/7 support
          </p>
        </div>
      </div>
    </div>
  );
};

export default IoTDevelopmentPage;