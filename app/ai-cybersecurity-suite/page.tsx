'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon,
  CpuChipIcon,
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
  EyeIcon,
  LockClosedIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export default function AICybersecuritySuitePage() {
  const securityServices = [
    {
      title: "AI Threat Detection",
      description: "Advanced AI-powered threat detection system with real-time monitoring, behavioral analysis, and automated response capabilities.",
      icon: EyeIcon,
      features: [
        "Real-time threat monitoring",
        "Behavioral analysis",
        "Automated response",
        "Zero-day detection",
        "Machine learning models",
        "Incident correlation"
      ],
      color: "from-red-500 to-pink-500",
      price: "$4,200/month",
      setupFee: "$18,000",
      benefits: ["99.9% detection rate", "Real-time response", "Zero false positives"],
      useCases: ["Enterprise security", "Critical infrastructure", "Financial services"],
      href: "/ai-threat-detection"
    },
    {
      title: "AI Security Analytics",
      description: "Comprehensive security analytics platform with AI-powered log analysis, threat intelligence, and security posture assessment.",
      icon: ChartBarIcon,
      features: [
        "Log analysis & correlation",
        "Threat intelligence",
        "Security posture assessment",
        "Compliance monitoring",
        "Risk scoring",
        "Automated reporting"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "$3,500/month",
      setupFee: "$15,000",
      benefits: ["360° visibility", "Proactive security", "Compliance ready"],
      useCases: ["SOC operations", "Compliance audits", "Risk management"],
      href: "/ai-security-analytics"
    },
    {
      title: "AI Identity & Access Management",
      description: "Intelligent identity and access management with AI-powered authentication, risk-based access control, and privileged account management.",
      icon: LockClosedIcon,
      features: [
        "AI-powered authentication",
        "Risk-based access control",
        "Privileged account management",
        "Multi-factor authentication",
        "Behavioral analytics",
        "Compliance reporting"
      ],
      color: "from-purple-500 to-pink-500",
      price: "$2,800/month",
      setupFee: "$12,000",
      benefits: ["Enhanced security", "Reduced risk", "Seamless UX"],
      useCases: ["Identity management", "Access control", "Privileged access"],
      href: "/ai-identity-management"
    },
    {
      title: "AI Endpoint Protection",
      description: "Advanced endpoint protection with AI-powered malware detection, device management, and automated threat response.",
      icon: ShieldCheckIcon,
      features: [
        "AI malware detection",
        "Device management",
        "Automated response",
        "Behavioral monitoring",
        "Patch management",
        "Compliance tracking"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$2,200/month",
      setupFee: "$10,000",
      benefits: ["99.8% malware detection", "Automated protection", "Reduced IT overhead"],
      useCases: ["Endpoint security", "Device management", "Malware protection"],
      href: "/ai-endpoint-protection"
    },
    {
      title: "AI Network Security",
      description: "Intelligent network security solution with AI-powered traffic analysis, intrusion detection, and automated threat mitigation.",
      icon: WifiIcon,
      features: [
        "Traffic analysis",
        "Intrusion detection",
        "Automated mitigation",
        "Network segmentation",
        "DDoS protection",
        "VPN management"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "$3,200/month",
      setupFee: "$14,000",
      benefits: ["Real-time protection", "Automated response", "Network optimization"],
      useCases: ["Network security", "DDoS protection", "Traffic monitoring"],
      href: "/ai-network-security"
    },
    {
      title: "AI Cloud Security",
      description: "Comprehensive cloud security platform with AI-powered configuration management, data protection, and compliance monitoring.",
      icon: CloudIcon,
      features: [
        "Configuration management",
        "Data protection",
        "Compliance monitoring",
        "Cloud workload protection",
        "API security",
        "Container security"
      ],
      color: "from-orange-500 to-red-500",
      price: "$3,800/month",
      setupFee: "$16,000",
      benefits: ["Cloud-native security", "Automated compliance", "Data protection"],
      useCases: ["Cloud security", "Data protection", "Compliance"],
      href: "/ai-cloud-security"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions including threat detection, security analytics, identity management, endpoint protection, and cloud security. Protect your business with cutting-edge AI security technology." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security analytics, identity management, endpoint protection, network security, cloud security, AI security" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/20 to-orange-900/20"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-red-200 to-orange-200 bg-clip-text text-transparent">
              AI Cybersecurity Suite
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Advanced AI-powered cybersecurity solutions for comprehensive protection
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Protect your business with cutting-edge AI-powered cybersecurity solutions including threat detection, 
              security analytics, identity management, and cloud security. Stay ahead of evolving threats with intelligent defense.
            </p>
          </div>
        </div>
      </section>

      {/* Security Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {securityServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
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
                      className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-red-700 hover:to-orange-700 transition-all"
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

      {/* Why Choose Our Cybersecurity Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Cybersecurity Suite?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI technology combined with enterprise-grade security expertise for comprehensive protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Defense</h3>
              <p className="text-gray-300">
                Advanced AI algorithms detect and respond to threats faster than traditional security solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Protection</h3>
              <p className="text-gray-300">
                Round-the-clock monitoring and automated response to ensure continuous security coverage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Zero Trust Architecture</h3>
              <p className="text-gray-300">
                Comprehensive zero trust security model with continuous verification and least privilege access.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Automated Response</h3>
              <p className="text-gray-300">
                Intelligent automation reduces response time and minimizes human error in security operations.
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
              Ready to Secure Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Protect your digital assets with our comprehensive AI-powered cybersecurity suite
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Security Assessment
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-red-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-red-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}