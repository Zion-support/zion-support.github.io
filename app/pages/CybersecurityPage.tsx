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
  EyeIcon,
  LockClosedIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export default function CybersecurityPage() {
  const securityServices = [
    {
      title: "Security Assessment & Auditing",
      description: "Comprehensive security assessments to identify vulnerabilities and provide actionable recommendations for improvement.",
      icon: EyeIcon,
      features: [
        "Vulnerability scanning and testing",
        "Penetration testing",
        "Security policy review",
        "Compliance assessment",
        "Risk analysis and reporting",
        "Remediation planning"
      ],
      pricing: {
        basic: { price: 299, period: "assessment", features: ["Basic vulnerability scan", "Standard report", "Email support"] },
        professional: { price: 799, period: "assessment", features: ["Comprehensive testing", "Detailed report", "Priority support"] },
        enterprise: { price: 1999, period: "assessment", features: ["Full security audit", "Custom recommendations", "Dedicated team"] }
      },
      color: "from-red-500 to-pink-500",
      href: "/security-assessment",
      marketPrice: "$299-1,999/assessment",
      benefits: [
        "Identify security vulnerabilities",
        "Meet compliance requirements",
        "Improve security posture",
        "Reduce risk of breaches"
      ]
    },
    {
      title: "Managed Security Services",
      description: "24/7 security monitoring and management to protect your infrastructure from evolving cyber threats.",
      icon: ShieldCheckIcon,
      features: [
        "24/7 security monitoring",
        "Threat detection and response",
        "Incident management",
        "Security updates and patches",
        "Log analysis and correlation",
        "Compliance reporting"
      ],
      pricing: {
        basic: { price: 199, period: "month", features: ["Basic monitoring", "Email alerts", "Standard SLA"] },
        professional: { price: 599, period: "month", features: ["Advanced monitoring", "Real-time alerts", "Priority SLA"] },
        enterprise: { price: 1499, period: "month", features: ["Full SOC services", "Dedicated team", "Custom SLA"] }
      },
      color: "from-blue-500 to-cyan-500",
      href: "/managed-security",
      marketPrice: "$199-1,499/month",
      benefits: [
        "Protect against cyber threats",
        "Reduce security incidents",
        "Improve response times",
        "Ensure compliance"
      ]
    },
    {
      title: "Identity & Access Management",
      description: "Secure user authentication and authorization solutions to control access to your systems and data.",
      icon: LockClosedIcon,
      features: [
        "Multi-factor authentication",
        "Single sign-on (SSO)",
        "Role-based access control",
        "Privileged access management",
        "Identity governance",
        "Audit and compliance"
      ],
      pricing: {
        basic: { price: 149, period: "month", features: ["Basic IAM", "Standard MFA", "Email support"] },
        professional: { price: 399, period: "month", features: ["Advanced IAM", "SSO integration", "Priority support"] },
        enterprise: { price: 999, period: "month", features: ["Full IAM suite", "Custom policies", "Dedicated support"] }
      },
      color: "from-green-500 to-emerald-500",
      href: "/identity-management",
      marketPrice: "$149-999/month",
      benefits: [
        "Secure user access",
        "Reduce unauthorized access",
        "Improve compliance",
        "Streamline user management"
      ]
    },
    {
      title: "Data Protection & Encryption",
      description: "Comprehensive data protection solutions to secure sensitive information at rest and in transit.",
      icon: ServerIcon,
      features: [
        "Data encryption at rest",
        "Encryption in transit",
        "Key management",
        "Data loss prevention",
        "Backup encryption",
        "Compliance reporting"
      ],
      pricing: {
        basic: { price: 99, period: "month", features: ["Basic encryption", "Standard key management", "Email support"] },
        professional: { price: 299, period: "month", features: ["Advanced encryption", "DLP features", "Priority support"] },
        enterprise: { price: 799, period: "month", features: ["Full data protection", "Custom policies", "Dedicated support"] }
      },
      color: "from-purple-500 to-pink-500",
      href: "/data-protection",
      marketPrice: "$99-799/month",
      benefits: [
        "Protect sensitive data",
        "Meet compliance requirements",
        "Prevent data breaches",
        "Secure data sharing"
      ]
    },
    {
      title: "Security Training & Awareness",
      description: "Comprehensive security training programs to educate your team and reduce human error risks.",
      icon: UserGroupIcon,
      features: [
        "Security awareness training",
        "Phishing simulation",
        "Incident response training",
        "Compliance training",
        "Custom training modules",
        "Progress tracking"
      ],
      pricing: {
        basic: { price: 49, period: "user/month", features: ["Basic training", "Standard modules", "Email support"] },
        professional: { price: 99, period: "user/month", features: ["Advanced training", "Custom modules", "Priority support"] },
        enterprise: { price: 199, period: "user/month", features: ["Full training suite", "Custom content", "Dedicated support"] }
      },
      color: "from-yellow-500 to-orange-500",
      href: "/security-training",
      marketPrice: "$49-199/user/month",
      benefits: [
        "Reduce human error risks",
        "Improve security awareness",
        "Meet compliance requirements",
        "Build security culture"
      ]
    },
    {
      title: "Incident Response & Recovery",
      description: "Rapid response and recovery services to minimize damage and restore operations after security incidents.",
      icon: ExclamationTriangleIcon,
      features: [
        "24/7 incident response",
        "Forensic analysis",
        "System recovery",
        "Data restoration",
        "Communication management",
        "Post-incident review"
      ],
      pricing: {
        basic: { price: 199, period: "incident", features: ["Basic response", "Standard recovery", "Email support"] },
        professional: { price: 599, period: "incident", features: ["Advanced response", "Fast recovery", "Priority support"] },
        enterprise: { price: 1499, period: "incident", features: ["Full response team", "Custom recovery", "Dedicated support"] }
      },
      color: "from-indigo-500 to-purple-500",
      href: "/incident-response",
      marketPrice: "$199-1,499/incident",
      benefits: [
        "Minimize damage from incidents",
        "Restore operations quickly",
        "Reduce downtime",
        "Learn from incidents"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity services including security assessment, managed security, identity management, data protection, and incident response." />
        <meta name="keywords" content="cybersecurity, security assessment, managed security, identity management, data protection, incident response" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Protect your business from evolving cyber threats with comprehensive security solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our cybersecurity experts provide end-to-end protection to safeguard your data, 
              systems, and reputation from malicious actors.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {securityServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105"
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

      {/* Security Capabilities Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Security Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive security solutions across all major domains 
              to protect your business from cyber threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <EyeIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Threat Detection</h3>
              <p className="text-gray-300">
                Advanced threat detection and response capabilities to identify and neutralize cyber threats.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Compliance</h3>
              <p className="text-gray-300">
                Help you meet industry compliance requirements including SOC2, GDPR, and HIPAA.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <LockClosedIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data Protection</h3>
              <p className="text-gray-300">
                Comprehensive data protection solutions to secure your sensitive information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ExclamationTriangleIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Incident Response</h3>
              <p className="text-gray-300">
                Rapid response and recovery services to minimize damage from security incidents.
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
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's assess your security posture and develop a comprehensive protection strategy
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
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