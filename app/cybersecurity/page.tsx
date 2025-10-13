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
  CircleStackIcon,
  EyeIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

export default function CybersecurityPage() {
  const cybersecurityServices = [
    {
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection and response system that identifies and neutralizes cyber threats in real-time.",
      icon: ShieldCheckIcon,
      features: [
        "Real-time threat detection",
        "AI-powered analysis",
        "Automated response",
        "Behavioral analytics",
        "Threat intelligence",
        "Incident response"
      ],
      color: "from-red-500 to-orange-500",
      price: "Starting at $3,500/month",
      benefits: ["99.9% threat detection", "Real-time response", "AI-powered analysis"],
      useCases: ["Enterprise security", "Threat prevention", "Incident response"],
      href: "/advanced-threat-detection"
    },
    {
      title: "Zero Trust Security Architecture",
      description: "Comprehensive zero trust security model that verifies every user and device before granting access.",
      icon: LockClosedIcon,
      features: [
        "Identity verification",
        "Device authentication",
        "Network segmentation",
        "Access controls",
        "Continuous monitoring",
        "Policy enforcement"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $4,200/month",
      benefits: ["Enhanced security", "Reduced risk", "Compliance ready"],
      useCases: ["Enterprise security", "Remote work", "Compliance"],
      href: "/zero-trust-security"
    },
    {
      title: "Cloud Security Management",
      description: "Comprehensive cloud security solutions for AWS, Azure, and Google Cloud with automated monitoring and compliance.",
      icon: CloudIcon,
      features: [
        "Multi-cloud security",
        "Automated compliance",
        "Threat monitoring",
        "Data encryption",
        "Access management",
        "Security automation"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $2,800/month",
      benefits: ["Multi-cloud protection", "Automated compliance", "Cost optimization"],
      useCases: ["Cloud migration", "Compliance", "Multi-cloud security"],
      href: "/cloud-security-management"
    },
    {
      title: "Penetration Testing & Vulnerability Assessment",
      description: "Comprehensive security testing services including penetration testing, vulnerability assessments, and security audits.",
      icon: EyeIcon,
      features: [
        "Penetration testing",
        "Vulnerability scanning",
        "Security audits",
        "Compliance testing",
        "Risk assessment",
        "Remediation guidance"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,500/month",
      benefits: ["Proactive security", "Risk identification", "Compliance assurance"],
      useCases: ["Security audits", "Compliance", "Risk assessment"],
      href: "/penetration-testing"
    },
    {
      title: "Security Operations Center (SOC)",
      description: "24/7 security monitoring and incident response services with dedicated security analysts and advanced tools.",
      icon: ServerIcon,
      features: [
        "24/7 monitoring",
        "Incident response",
        "Threat hunting",
        "Security analytics",
        "Compliance reporting",
        "Dedicated analysts"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $8,500/month",
      benefits: ["24/7 protection", "Expert analysts", "Rapid response"],
      useCases: ["Enterprise security", "Compliance", "Incident response"],
      href: "/security-operations-center"
    },
    {
      title: "Data Loss Prevention (DLP)",
      description: "Advanced data loss prevention solutions that protect sensitive data from unauthorized access and exfiltration.",
      icon: DocumentTextIcon,
      features: [
        "Data classification",
        "Access controls",
        "Encryption",
        "Monitoring & alerting",
        "Compliance reporting",
        "Policy enforcement"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $2,200/month",
      benefits: ["Data protection", "Compliance", "Risk reduction"],
      useCases: ["Data protection", "Compliance", "Sensitive data"],
      href: "/data-loss-prevention"
    },
    {
      title: "Identity & Access Management (IAM)",
      description: "Comprehensive identity and access management solutions for secure user authentication and authorization.",
      icon: UserGroupIcon,
      features: [
        "Single sign-on (SSO)",
        "Multi-factor authentication",
        "Role-based access control",
        "Identity governance",
        "Privileged access management",
        "Audit & compliance"
      ],
      color: "from-teal-500 to-green-500",
      price: "Starting at $1,800/month",
      benefits: ["Enhanced security", "User convenience", "Compliance"],
      useCases: ["User management", "Access control", "Compliance"],
      href: "/identity-access-management"
    },
    {
      title: "Network Security & Firewall Management",
      description: "Advanced network security solutions including next-generation firewalls, intrusion detection, and network monitoring.",
      icon: WifiIcon,
      features: [
        "Next-gen firewalls",
        "Intrusion detection",
        "Network monitoring",
        "Traffic analysis",
        "Threat prevention",
        "Policy management"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $1,500/month",
      benefits: ["Network protection", "Threat prevention", "Performance optimization"],
      useCases: ["Network security", "Threat prevention", "Traffic monitoring"],
      href: "/network-security"
    },
    {
      title: "Security Awareness Training",
      description: "Comprehensive security awareness training programs to educate employees about cybersecurity best practices.",
      icon: LightBulbIcon,
      features: [
        "Interactive training",
        "Phishing simulations",
        "Compliance training",
        "Security policies",
        "Progress tracking",
        "Certification programs"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $800/month",
      benefits: ["Educated workforce", "Reduced risk", "Compliance"],
      useCases: ["Employee training", "Security awareness", "Compliance"],
      href: "/security-awareness-training"
    },
    {
      title: "Compliance & Risk Management",
      description: "Comprehensive compliance and risk management services for GDPR, HIPAA, SOX, and other regulatory requirements.",
      icon: ChartBarIcon,
      features: [
        "Compliance assessment",
        "Risk analysis",
        "Policy development",
        "Audit preparation",
        "Regulatory reporting",
        "Ongoing monitoring"
      ],
      color: "from-gray-500 to-slate-500",
      price: "Starting at $3,000/month",
      benefits: ["Full compliance", "Risk mitigation", "Audit readiness"],
      useCases: ["GDPR compliance", "HIPAA compliance", "SOX compliance"],
      href: "/compliance-risk-management"
    },
    {
      title: "Incident Response & Forensics",
      description: "Rapid incident response and digital forensics services to minimize damage and investigate security breaches.",
      icon: CogIcon,
      features: [
        "Rapid response",
        "Digital forensics",
        "Evidence collection",
        "Damage assessment",
        "Recovery planning",
        "Legal support"
      ],
      color: "from-rose-500 to-pink-500",
      price: "Starting at $5,000/month",
      benefits: ["Rapid response", "Expert forensics", "Minimal damage"],
      useCases: ["Incident response", "Forensics", "Breach recovery"],
      href: "/incident-response-forensics"
    },
    {
      title: "Security Consulting & Strategy",
      description: "Strategic security consulting services to develop comprehensive cybersecurity strategies and roadmaps.",
      icon: LightBulbIcon,
      features: [
        "Security strategy",
        "Risk assessment",
        "Technology evaluation",
        "Implementation planning",
        "Best practices",
        "Ongoing guidance"
      ],
      color: "from-violet-500 to-purple-500",
      price: "Starting at $2,500/month",
      benefits: ["Strategic guidance", "Risk reduction", "Best practices"],
      useCases: ["Security strategy", "Risk management", "Technology planning"],
      href: "/security-consulting"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions including threat detection, zero trust security, cloud security, penetration testing, and compliance management. Protect your business with advanced security." />
        <meta name="keywords" content="cybersecurity, threat detection, zero trust security, cloud security, penetration testing, compliance, data protection" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Advanced cybersecurity solutions to protect your business from evolving threats
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive cybersecurity services including threat detection, zero trust security, 
              cloud protection, compliance management, and incident response to safeguard your digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* Cybersecurity Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {cybersecurityServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105"
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
              Why Choose Our Cybersecurity Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced security technology backed by expert professionals and proven methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Protection</h3>
              <p className="text-gray-300">
                State-of-the-art security technologies and AI-powered threat detection for maximum protection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Monitoring</h3>
              <p className="text-gray-300">
                Round-the-clock security monitoring and rapid incident response to protect your business.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Certified cybersecurity professionals with years of experience in enterprise security.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Compliance Ready</h3>
              <p className="text-gray-300">
                Full compliance with GDPR, HIPAA, SOX, and other regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Maturity Assessment */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security Maturity Assessment
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a comprehensive assessment of your current security posture and receive actionable recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Basic Assessment</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">$2,500<span className="text-lg text-gray-400">/assessment</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Security vulnerability scan</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Basic compliance check</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Written report</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Basic recommendations</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-red-700 hover:to-orange-700 transition-all">
                Get Assessment
              </Link>
            </div>

            <div className="bg-gradient-to-br from-red-800 to-orange-800 p-8 rounded-xl border border-red-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Assessment</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">$5,000<span className="text-lg text-gray-400">/assessment</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Full penetration testing</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Compliance audit</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Detailed report</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Remediation plan</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Follow-up consultation</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-white text-red-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-all">
                Get Assessment
              </Link>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Assessment</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">Custom<span className="text-lg text-gray-400">/assessment</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Full security audit</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Custom testing</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Executive presentation</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Implementation support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Ongoing monitoring</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-red-700 hover:to-orange-700 transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-red-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let our cybersecurity experts help you build a robust defense against evolving threats
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Security Assessment
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Security Demo
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