import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      title: "Threat Detection & Response",
      description: "Advanced threat detection and incident response services to protect your organization from cyber attacks.",
      icon: ShieldCheckIcon,
      features: [
        "24/7 threat monitoring",
        "Real-time incident response",
        "Advanced threat intelligence",
        "Automated threat hunting",
        "Forensic analysis",
        "Recovery planning"
      ],
      price: "Starting at $2,500/month"
    },
    {
      title: "Security Assessment",
      description: "Comprehensive security assessments to identify vulnerabilities and strengthen your security posture.",
      icon: EyeIcon,
      features: [
        "Vulnerability scanning",
        "Penetration testing",
        "Security audits",
        "Compliance assessments",
        "Risk analysis",
        "Remediation planning"
      ],
      price: "Starting at $1,800/month"
    },
    {
      title: "Identity & Access Management",
      description: "Secure identity and access management solutions to control who has access to your systems and data.",
      icon: LockClosedIcon,
      features: [
        "Multi-factor authentication",
        "Single sign-on (SSO)",
        "Privileged access management",
        "Identity governance",
        "Access monitoring",
        "Compliance reporting"
      ],
      price: "Starting at $1,200/month"
    },
    {
      title: "Security Training",
      description: "Comprehensive security awareness training to educate your team about cybersecurity best practices.",
      icon: ExclamationTriangleIcon,
      features: [
        "Phishing simulation",
        "Security awareness training",
        "Compliance training",
        "Incident response training",
        "Regular assessments",
        "Custom training programs"
      ],
      price: "Starting at $800/month"
    }
  ];

  const features = [
    "24/7 Security Monitoring",
    "Advanced Threat Detection",
    "Rapid Incident Response",
    "Compliance Management",
    "Security Training",
    "Expert Support"
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business from cyber threats. Advanced threat detection, incident response, and security consulting." />
        <meta name="keywords" content="cybersecurity, threat detection, security assessment, identity management, security training, cyber protection" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business from cyber threats with our comprehensive cybersecurity solutions. 
              Advanced threat detection, incident response, and security consulting services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Security Assessment
              </Link>
              <Link 
                to="/demo" 
                className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Cybersecurity Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <p className="text-red-400 font-semibold text-lg">{service.price}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className="text-red-400 hover:text-red-300 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Cybersecurity Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <ShieldCheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-pink-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a cyber attack. Get comprehensive cybersecurity protection today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Security Assessment
              </Link>
              <Link 
                to="/demo" 
                className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300 mt-12">
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
        </section>
      </div>
    </>
  );
};

export default CybersecurityPage;
