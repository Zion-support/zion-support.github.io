import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  CogIcon,
  DocumentTextIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

export default function CybersecurityPage() {
  const securityServices = [
    {
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection and response systems that identify and neutralize cyber threats in real-time.",
      icon: ShieldCheckIcon,
      features: [
        "Real-time threat monitoring",
        "AI-powered analysis",
        "Automated incident response",
        "24/7 security operations center",
        "Threat intelligence integration",
        "Behavioral analytics"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $2,500/month",
      benefits: ["99.9% threat detection", "Sub-second response", "Zero false positives"],
      useCases: ["Enterprise security", "Financial services", "Healthcare compliance"]
    },
    {
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities before attackers do.",
      icon: LockClosedIcon,
      features: [
        "Web application testing",
        "Network infrastructure testing",
        "Social engineering assessments",
        "Mobile app security testing",
        "Cloud security evaluation",
        "Compliance testing"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $1,500/test",
      benefits: ["Detailed vulnerability reports", "Remediation guidance", "Follow-up testing"],
      useCases: ["Pre-deployment testing", "Compliance audits", "Security validation"]
    },
    {
      title: "Security Monitoring",
      description: "Continuous monitoring and analysis of your security posture with real-time alerts.",
      icon: EyeIcon,
      features: [
        "SIEM implementation",
        "Log analysis and correlation",
        "Security event monitoring",
        "Incident response coordination",
        "Compliance reporting",
        "Threat hunting"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $1,800/month",
      benefits: ["24/7 monitoring", "Rapid incident response", "Compliance reporting"],
      useCases: ["SOC operations", "Compliance requirements", "Risk management"]
    },
    {
      title: "Vulnerability Management",
      description: "Systematic approach to identifying, classifying, and remediating security vulnerabilities.",
      icon: ExclamationTriangleIcon,
      features: [
        "Automated vulnerability scanning",
        "Risk assessment and prioritization",
        "Patch management coordination",
        "Vulnerability tracking",
        "Remediation verification",
        "Compliance reporting"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $1,200/month",
      benefits: ["Comprehensive scanning", "Risk prioritization", "Automated tracking"],
      useCases: ["Asset management", "Compliance", "Risk reduction"]
    },
    {
      title: "Security Training",
      description: "Comprehensive security awareness training to educate your team on cybersecurity best practices.",
      icon: LightBulbIcon,
      features: [
        "Phishing simulation",
        "Security awareness training",
        "Incident response training",
        "Compliance training",
        "Executive security briefings",
        "Custom training programs"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $500/month",
      benefits: ["Reduced human error", "Improved security culture", "Compliance readiness"],
      useCases: ["Employee education", "Compliance training", "Security awareness"]
    },
    {
      title: "Compliance & Audit",
      description: "Ensure your organization meets industry security standards and regulatory requirements.",
      icon: DocumentTextIcon,
      features: [
        "SOC 2 Type II compliance",
        "ISO 27001 certification",
        "PCI DSS compliance",
        "HIPAA compliance",
        "GDPR compliance",
        "Custom compliance frameworks"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $3,000/month",
      benefits: ["Regulatory compliance", "Audit readiness", "Risk mitigation"],
      useCases: ["Regulatory requirements", "Customer trust", "Business continuity"]
    }
  ];

  const securityStats = [
    { label: "Threats Blocked", value: "1M+", color: "text-red-400" },
    { label: "Response Time", value: "< 5min", color: "text-green-400" },
    { label: "Uptime", value: "99.9%", color: "text-blue-400" },
    { label: "Client Satisfaction", value: "100%", color: "text-purple-400" }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions including threat detection, penetration testing, security monitoring, and compliance services." />
        <meta name="keywords" content="cybersecurity, threat detection, penetration testing, security monitoring, compliance, SOC 2, ISO 27001" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Protect your business with advanced cybersecurity solutions designed to defend against evolving threats
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our comprehensive security services provide 24/7 protection, threat detection, 
              and compliance solutions to keep your digital assets secure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
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
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {securityStats.map((stat, _index) => (
              <div key={stat.label} className="text-center">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions tailored to protect your business from evolving threats
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {securityServices.map((service, _index) => {
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
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">Starting price</div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Link 
                      to="/contact" 
                      className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 text-center"
                    >
                      Get Started
                    </Link>
                    <Link 
                      to="/demo" 
                      className="w-full border border-red-400 text-red-300 py-3 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Security */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-red-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Security Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide enterprise-grade security solutions with proven results and expert support
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Proven Expertise</h3>
                <p className="text-gray-300">
                  Our team has successfully protected 100+ organizations from cyber threats with a 100% success rate.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ClockIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">24/7 Monitoring</h3>
                <p className="text-gray-300">
                  Round-the-clock security monitoring and incident response to protect your business at all times.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CogIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
                <p className="text-gray-300">
                  Tailored security solutions designed specifically for your business needs and industry requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Get a free security assessment and discover how we can protect your digital assets
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Assessment
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
          </div>
        </div>
      </section>
    </>
  );
}