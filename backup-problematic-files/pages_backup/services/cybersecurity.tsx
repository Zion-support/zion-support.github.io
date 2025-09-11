class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import Layout from "../../components/Layout";";
import {motion} from 'framer-motion';
import Layout from '../../components/Layout';
import {Eye,, Shield,, Lock,, AlertTriangle} from 'lucide-react';
export default function CybersecurityPage() {;
  const securityServices = [;
    {}
      title: "Security Assessment",";
      description: "Comprehensive security evaluation of your systems",";
      icon: Eye,;
      features: ["Vulnerability Scanning", "Penetration Testing", "Risk Analysis"]";
    },;
    {}
      title: "Threat Protection",";
      description: "Advanced threat detection and prevention systems",";
      icon: Shield,;
      features: ["Real-time Monitoring", "AI-Powered Detection", "Incident Response"]";
    },;
    {}
      title: "Data Encryption",";
      description: "End-to-end encryption for sensitive data",";
      icon: Lock,;
      features: ["Data at Rest", "Data in Transit", "Key Management"]";
    },;
    {}
      title: "Compliance",";
      description: "Ensure compliance with industry standards",";
      icon: AlertTriangle,;
      features: ["GDPR", "HIPAA", "SOC 2", "ISO 27001"]";
    }
;  ];
  return (
    <Layout)
      title="Cybersecurity Services - Zion Tech Group""
      description="Advanced cybersecurity solutions to protect your business from evolving threats and ensure compliance."">;
      <div className="min-h-screen bg-gray-50">";
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 text-white py-20">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center"">;
              <h1 className="text-4xl md: text-6xl font-bold mb-6">", Cybersecurity Services,;
              </h1>;
              <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">",;
                Protect your business with our comprehensive cybersecurity solutions. ;
                Stay ahead of threats with advanced security measures and expert support.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Services Section */}
        <section className="py-20">";
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">",;
              {securityServices && securityServices.map((service, index) => {}
                const IconComponent = service && service.icon;
                return (
                  <motion&& motion.div)
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>,;
                    <div className="text-red-600 mb-4">";
                      <IconComponent className="w-10 h-10" />";
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-4">";
                      {service && service.title}
                    </h3>,;
                    <p className="text-gray-600 mb-4">";
                      {service && service.description}
                    </p>,;
                    <ul className="space-y-2">";
                      {service && service.features.map((feature, featureIndex) => (,;
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">";
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />";
                          {feature}
                        </li>,;
                      ))}
                    </ul>,;
                  </motion && motion.div>;
                );
              })}
            </div>,;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-white">";
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md: text-4xl font-bold mb-6">", Secure Your Business Today,;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Don't wait for a security breach. Let our experts help you build a robust security framework.';
            </p>;
            <motion&& motion.a
              href="/contact""
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-lg hover: bg-gray-100 transition-all duration-300 font-semibold"",
              whileHover={{ scale: 1 && 1.05 }}>,;
              Get Security Assessment;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion && motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
import Layout from '../../components/Layout';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
const features = [
  {
    icon: Shield,
    title: 'Security Assessment',
    description: 'Comprehensive security audits and vulnerability assessments'
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'Advanced encryption and data protection solutions'
  },
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, Shield, Lock, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const securityServices = [
  {
    icon: Eye,
    title: 'Threat Monitoring',
    description: '24/7 security monitoring and threat detection'
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: 'Rapid response to security incidents and breaches'
  },
  {
    icon: CheckCircle,
    title: 'Compliance',
    description: 'GDPR, HIPAA, SOX, and other regulatory compliance'
  },
  {
    icon: ArrowRight,
    title: 'Security Training',
    description: 'Employee security awareness and training programs'
  }
];
const benefits = [
  'Protection against cyber threats and attacks',
  'Compliance with industry regulations',
  'Reduced risk of data breaches',
  'Enhanced customer trust and confidence',
  'Lower insurance costs and liability',
  'Peace of mind with 24/7 monitoring'
];
export default function CybersecurityServices() {

export default function CybersecurityPage() {

export default function CybersecurityPage() {
  return (
    <Layout
      title="Cybersecurity Services - Zion Tech Group"
      description="Comprehensive cybersecurity services to protect your business from threats. Advanced security solutions, compliance, and 24/7 monitoring."
      keywords="cybersecurity, security services, data protection, threat monitoring, compliance, security audit">;
      <div className="min-h-screen bg-white">;
        {/* Hero Section */}
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Eye, Shield, Lock, AlertTriangle } from 'lucide-react';
export default function CybersecurityPage() {;
  const securityServices = [;
    {}
      title: "Security Assessment",";
      description: "Comprehensive security evaluation of your systems",";
      icon: Eye,;
      features: ["Vulnerability Scanning", "Penetration Testing", "Risk Analysis"]";
    },;
    {}
      title: "Threat Protection",";
      description: "Advanced threat detection and prevention systems",";
      icon: Shield,;
      features: ["Real-time Monitoring", "AI-Powered Detection", "Incident Response"]";
    },;
    {}
      title: "Data Encryption",";
      description: "End-to-end encryption for sensitive data",";
      icon: Lock,;
      features: ["Data at Rest", "Data in Transit", "Key Management"]";
    },;
    {}
      title: "Compliance",";
      description: "Ensure compliance with industry standards",";
      icon: AlertTriangle,;
      features: ["GDPR", "HIPAA", "SOC 2", "ISO 27001"]";
    }
;  ];
  return (
    <Layout)
      title="Cybersecurity Services - Zion Tech Group""
      description="Advanced cybersecurity solutions to protect your business from evolving threats and ensure compliance."">;
      <div className="min-h-screen bg-gray-50">";
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 text-white py-20">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center"">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                Cybersecurity Services;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                Protect your business with our comprehensive cybersecurity solutions. ;
                Stay ahead of threats with advanced security measures and expert support.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Services Section */}
        <section className="py-20">";
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {securityServices && securityServices.map((service, index) => {}
                const IconComponent = service && service.icon;
                return (
                  <motion&& motion.div)
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>,;
                    <div className="text-red-600 mb-4">";
                      <IconComponent className="w-10 h-10" />";
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-4">";
                      {service && service.title}
                    </h3>,;
                    <p className="text-gray-600 mb-4">";
                      {service && service.description}
                    </p>,;
                    <ul className="space-y-2">";
                      {service && service.features.map((feature, featureIndex) => (,;
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">";
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />";
                          {feature}
                        </li>,;
                      ))}
                    </ul>,;
                  </motion && motion.div>;
                );
              })}
            </div>,;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-white">";
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md:text-4xl font-bold mb-6">";
              Secure Your Business Today;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Don't wait for a security breach. Let our experts help you build a robust security framework.';
            </p>;
            <motion&& motion.a
              href="/contact""
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold""
              whileHover={{ scale: 1 && 1.05 }}>,;
              Get Security Assessment;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion && motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
import Layout from '../../components/Layout';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Eye, Shield, Lock, AlertTriangle } from 'lucide-react';
export default function CybersecurityPage() {
  const securityServices = [;
    {}
      title: "Security Assessment","
      description: "Comprehensive security evaluation of your systems","
      icon: Eye,
      features: ["Vulnerability Scanning", "Penetration Testing", "Risk Analysis"]"
    },
    {}
      title: "Threat Protection","
      description: "Advanced threat detection and prevention systems","
      icon: Shield,
      features: ["Real-time Monitoring", "AI-Powered Detection", "Incident Response"]"
    },
    {}
      title: "Data Encryption","
      description: "End-to-end encryption for sensitive data","
      icon: Lock,
      features: ["Data at Rest", "Data in Transit", "Key Management"]"
    },
    {}
      title: "Compliance","
      description: "Ensure compliance with industry standards","
      icon: AlertTriangle,
      features: ["GDPR", "HIPAA", "SOC 2", "ISO 27001"]"
    }
;  ];
  return (;
    <Layout );
      title="Cybersecurity Services - Zion Tech Group"";
      description="Advanced cybersecurity solutions to protect your business from evolving threats and ensure compliance."";
    >;
      <div className="min-h-screen bg-gray-50">";
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 text-white py-20">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                Cybersecurity Services;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                Protect your business with our comprehensive cybersecurity solutions. 
                Stay ahead of threats with advanced security measures and expert support.;
              </p>;
            </motion.div>;
          </div>;
        </section>;
        {/* Services Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {securityServices.map((service, index) => {}
                const IconComponent = service.icon;
                return (;
                  <motion.div);
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >,
                    <div className="text-red-600 mb-4">";
                      <IconComponent className="w-10 h-10" />";
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-4">";
                      {service.title}
                    </h3>,
                    <p className="text-gray-600 mb-4">";
                      {service.description}
                    </p>,
                    <ul className="space-y-2">";
                      {service.features.map((feature, featureIndex) => (,
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />";
                          {feature}
                        </li>,
                      ))}
                    </ul>,
                  </motion.div>;
                );
              })}
            </div>,
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md:text-4xl font-bold mb-6">";
              Secure Your Business Today;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Don't wait for a security breach. Let our experts help you build a robust security framework.';
            </p>;
            <motion.a;
              href="/contact"";
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"";
              whileHover={{ scale: 1.05 }}
            >,
              Get Security Assessment;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
import Layout from '../../components/Layout';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
const features = [
  {
    icon: Shield,
    title: 'Security Assessment',
    description: 'Comprehensive security audits and vulnerability assessments'
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'Advanced encryption and data protection solutions'
  },
  {
    title: "Security Assessment",
    description: "Comprehensive security evaluation of your systems",
    icon: Eye,
    features: ["Vulnerability scanning", "Penetration testing", "Security audit", "Risk assessment"],
    pricing: "$2,000 - $10,000/project"
  },
  {
    title: "Threat Detection",
    description: "AI-powered threat detection and response",
    icon: AlertTriangle,
    features: ["Real-time monitoring", "AI threat detection", "Automated response", "Incident management"],
    pricing: "$1,500 - $8,000/month"
  },
  {
    title: "Data Protection",
    description: "Comprehensive data protection and encryption",
    icon: Lock,
    features: ["Data encryption", "Access control", "Backup & recovery", "Compliance"],
    pricing: "$1,000 - $5,000/month"
  },
  {
    icon: ArrowRight,
    title: 'Security Training',
    description: 'Employee security awareness and training programs'
const features = [;
  {;
    icon: Shield,;
    title: 'Security Assessment',;
    description: 'Comprehensive security audits and vulnerability assessments';
  },;
  {;
    icon: Lock,;
    title: 'Data Protection',;
    description: 'Advanced encryption and data protection solutions';
  },;
  {;
    icon: Eye,;
    title: 'Threat Monitoring',;
    description: '24/7 security monitoring and threat detection';
  },;
  {;
    icon: AlertTriangle,;
    title: 'Incident Response',;
    description: 'Rapid response to security incidents and breaches';
  },;
  {;
    icon: CheckCircle,;
    title: 'Compliance',;
    description: 'GDPR, HIPAA, SOX, and other regulatory compliance';
  },;
  {;
    icon: ArrowRight,;
    title: 'Security Training',;
    description: 'Employee security awareness and training programs';
  }
];
const benefits = [
  'Protection against cyber threats and attacks',
  'Compliance with industry regulations',
  'Reduced risk of data breaches',
  'Enhanced customer trust and confidence',
  'Lower insurance costs and liability',
  'Peace of mind with 24/7 monitoring'
];
export default function CybersecurityServices() {
export default function CybersecurityPage() {;
const benefits = [;
  'Protection against cyber threats and attacks',;
  'Compliance with industry regulations',;
  'Reduced risk of data breaches',;
  'Enhanced customer trust and confidence',;
  'Lower insurance costs and liability',;
  'Peace of mind with 24/7 monitoring';
];
export default function CybersecurityServices() {;
  return (
    <Layout
      title="Cybersecurity Services - Zion Tech Group"
      description="Comprehensive cybersecurity services to protect your business from threats. Advanced security solutions, compliance, and 24/7 monitoring."
      keywords="cybersecurity, security services, data protection, threat monitoring, compliance, security audit">;
      <div className="min-h-screen bg-white">;
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Cybersecurity</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Protect your business with our comprehensive cybersecurity solutions designed 
                to defend against evolving threats.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {securityServices && securityServices.map((service, index) => (;
                <motion&& motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-lg font-semibold text-blue-600 mb-4">{service.pricing}</div>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
              <div>;
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">;
                  Why Choose Our Cybersecurity Services?;
                </h2>;
                <p className="text-xl text-gray-600 mb-8">;
                  Our cybersecurity experts provide comprehensive protection against;
                  evolving threats while ensuring compliance with industry regulations.;
                </p>;
                <ul className="space-y-4">;
                  {benefits && benefits.map((benefit, index) => (;
                    <li key={index} className="flex items-start">;
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />;
                      <span className="text-gray-700">{benefit}</span>;
                    </li>;
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-red-600 to-orange-700 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Secure Your Business?</h3>
                <p className="text-lg mb-6">
                  Let our cybersecurity experts help you implement comprehensive
                  security solutions that protect your business and data.
                </p>
                <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  Schedule Security Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Secure Your Business Today
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our cybersecurity services can protect your business from threats.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/security"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Security
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
    </>
export default Cybersecurity;
    </Layout>
  );
};

export default Cybersecurity;