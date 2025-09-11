

origin/cursor/integrate-build-improve-and-re-verify-c7b5
import { 
import React from 'react
import dynamic from 'next/dynamic
import Head from 'next/head
import Link from 'next/link
import { motion } from 'framer-motion
import {
  // TODO: Implement
}
pr-12325
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Globe,
  Settings,
  Users
} from 'lucide-react''
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false })"
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false })"
const "CybersecurityPage": React.FC = () => {"
  }
  const services = [{
      }
      "id": 1,
      "title": "Security Assessment","
      "description": "Comprehensive security evaluation to identify vulnerabilities and risks in your systems.","
      "features": ["
        "Vulnerability scanning","
        "Penetration testing","
        "Security audit","
        "Risk assessment","
        "Compliance review""
      ],
      "pricing": "Starting at $2,500","
      "delivery": "1-3 weeks","
      "category": "Assessment","
      "icon": <Shield className="w-8 h-8" />"
    },
    {
      "id": 2,"
      "title": "Data Protection","
      "description": "Advanced data encryption and protection solutions to secure your sensitive information.","
      "features": ["Data encryption","
        "Access control","
        "Data backup","
        "Privacy compliance","
        "Data loss prevention""
      ],
      "pricing": "Starting at $3,000","
      "delivery": "2-4 weeks","
      "category": "Protection","
      "icon": <Lock className="w-8 h-8" />"
    },
    {
      "id": 3,"
      "title": "Threat Monitoring","
      "description": "24/7 security monitoring and threat detection to protect your systems in real-time.","
      "features": ["Real-time monitoring","
        "Threat detection","
        "Incident alerting","
        "Security analytics","
        "Response automation""
      ],
      "pricing": "Starting at $1,500/month","
      "delivery": "Ongoing","
      "category": "Monitoring","
      "icon": <Eye className="w-8 h-8" />"
    },
    {
      "id": 4,"
      "title": "Incident Response","
      "description": "Rapid response and recovery services to minimize damage from security incidents.","
      "features": ["Incident analysis","
        "Containment strategies","
        "Recovery planning","
        "Forensic investigation","
        "Post-incident review""
      ],
      "pricing": "Starting at $5,000","
      "delivery": "Immediate","
      "category": "Response","
      "icon": <AlertTriangle className="w-8 h-8" />"
    },
    {
      "id": 5,"
      "title": "Compliance Management","
      "description": "Ensure compliance with industry standards and regulations for data security.","
      "features": ["Compliance assessment","
        "Policy development","
        "Training programs","
        "Audit support","
        "Documentation""
      ],
      "pricing": "Starting at $4,000","
      "delivery": "2-6 weeks","
      "category": "Compliance","
      "icon": <Settings className="w-8 h-8" />"
    },
    {
      "id": 6,"
      "title": "Security Training","
      "description": "Comprehensive security awareness training for your team to prevent security breaches.","
      "features": ["Security awareness","
        "Phishing simulation","
        "Best practices training","
        "Incident reporting","
        "Regular updates""
      ],
      "pricing": "Starting at $1,000",
      "delivery": "1-2 weeks",
      "category": "Training",
      "icon": <Users className="w-8 h-8"  />
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
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {Shield,, Lock,, Eye,, AlertTriangle,, ArrowRight,, CheckCircle,, Star,, Globe,, Settings,, Users} from 'lucide-react';
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false });
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false });
const "CybersecurityPage": React.FC = () => {;
  const services = [{;
      id: 1,;
      "title": "Security Assessment",;
      "description": "Comprehensive security evaluation to identify vulnerabilities and risks in your systems.",;
      "features": [;
        "Vulnerability scanning",;
        "Penetration testing",;
        "Security audit",;
        "Risk assessment",;
        "Compliance review";
      ],;
      "pricing": "Starting at $2,500",;
      "delivery": "1-3 weeks",;
      "category": "Assessment",;
      "icon": <Shield className="w-8 h-8"  />;
    },;
    {;
      "id": 2,;
      "title": "Data Protection",;
      "description": "Advanced data encryption and protection solutions to secure your sensitive information.",;
      "features": ["Data encryption",;
        "Access control",;
        "Data backup",;
        "Privacy compliance",;
        "Data loss prevention";
      ],;
      "pricing": "Starting at $3,000",;
      "delivery": "2-4 weeks",;
      "category": "Protection",;
      "icon": <Lock className="w-8 h-8"  />;
    },;
    {;
      "id": 3,;
      "title": "Threat Monitoring",;
      "description": "24/7 security monitoring and threat detection to protect your systems in real-time.",;
      "features": ["Real-time monitoring",;
        "Threat detection",;
        "Incident alerting",;
        "Security analytics",;
        "Response automation";
      ],;
      "pricing": "Starting at $1,500/month",;
      "delivery": "Ongoing",;
      "category": "Monitoring",;
      "icon": <Eye className="w-8 h-8"  />;
    },;
    {;
      "id": 4,;
      "title": "Incident Response",;
      "description": "Rapid response and recovery services to minimize damage from security incidents.",;
      "features": ["Incident analysis",;
        "Containment strategies",;
        "Recovery planning",;
        "Forensic investigation",;
        "Post-incident review";
      ],;
      "pricing": "Starting at $5,000",;
      "delivery": "Immediate",;
      "category": "Response",;
      "icon": <AlertTriangle className="w-8 h-8"  />;
    },;
    {;
      "id": 5,;
      "title": "Compliance Management",;
      "description": "Ensure compliance with industry standards and regulations for data security.",;
      "features": ["Compliance assessment",;
        "Policy development",;
        "Training programs",;
        "Audit support",;
        "Documentation";
      ],;
      "pricing": "Starting at $4,000",;
      "delivery": "2-6 weeks",;
      "category": "Compliance",;
      "icon": <Settings className="w-8 h-8"  />;
    },;
    {;
      "id": 6,;
      "title": "Security Training",;
      "description": "Comprehensive security awareness training for your team to prevent security breaches.",;
      "features": ["Security awareness",;
        "Phishing simulation",;
        "Best practices training",;
        "Incident reporting",;
        "Regular updates";
      ],;
      "pricing": "Starting at $1,000",;
      "delivery": "1-2 weeks",;
      "category": "Training",;
      "icon": <Users className="w-8 h-8"  />;
    }
  ];
  const complianceStandards = [{ "name": "SOC 2", "description": "Service Organization Control 2" },;
    { "name": "ISO 27001", "description": "Information Security Management" },;
    { "name": "HIPAA", "description": "Health Insurance Portability" },;
    { "name": "PCI DSS", "description": "Payment Card Industry" },;
    { "name": "GDPR", "description": "General Data Protection Regulation" },;
    { "name": "NIST", "description": "National Institute of Standards" }
  ]
  return (
    <>
      <SEO title="Cybersecurity Services - Zion Tech Group"
        description="Comprehensive cybersecurity services including security assessments, data protection, monitoring, and incident response. Protect your business with our expert security solutions."
        keywords="cybersecurity, security assessment, data protection, threat monitoring, incident response, compliance"
        canonical=""https": //ziontechgroup.com/cybersecurity"
       />
      <PageTransition>
        <main className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6 }}
                className="text-center"
              >
                <h1 className="text-4xl "md": tex t-6xl font-bold text-gray-900 mb-6">
                  Cybersecurity <span className="text-blue-600">Services</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Protect your business with comprehensive cybersecurity solutions including security assessments, data protection, and threat monitoring.
                </p>
                <div className="flex flex-col "sm": fle x-row gap-4 justify-center">
                  <motion.a
                    href="#services"
                    whileHover={{ scale: 1 && 1.05 }}
                    whileTap={{ "scale": 0 && 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2">;
                    <ArrowRight className="w-5 h-5"  />;
                    Explore Services;
                  </motion && motion.a>;
                  <motion&& motion.a
                    href="/contact"
                    whileHover={{ "scale": 1 && 1.05 }}
                    whileTap={{ "scale": 0 && 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2">;
                    <ArrowRight className="w-5 h-5"  />;
                    Get Started;
                  </motion && motion.a>;
                </div>;
              </motion && motion.div>;
            </div>;
          </section>;
          {/* Services Grid */}
          <section id="services" className="py-20">;
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">;
              <motion&& motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0 && 0.6, "delay": 0 && 0.2 }}
                className="text-center mb-16">;
                <h2 className="text-3xl "md": tex t-4xl font-bold text-gray-900 mb-4">;
                  Our Cybersecurity Services;
                </h2>;
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                  Comprehensive security solutions to protect your business from cyber threats and ensure compliance.;
                </p>;
              </motion && motion.div>;
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
                {services && services.map((service, index) => (;
                  <motion&& motion.div
                    key={service && service.id}
                    initial={{ "opacity": 0, "y": 20 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0 && 0.6, "delay": index * 0 && 0.1 }}
                    className="bg-white rounded-xl shadow-lg "hover": shadow-xl transition-shadow duration-300 overflow-hidden">;
                    <div className="p-8">;
                      <div className="flex items-center justify-between mb-4">;
                        <div className="text-blue-600">;
                          {service && service.icon}
                        </div>;
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">;
                          {service && service.category}
                        </span>;
                      </div>;
                      <h3 className="text-xl font-bold text-gray-900 mb-3">;
                        {service && service.title}
                      </h3>;
                      <p className="text-gray-600 mb-6">;
                        {service && service.description}
                      </p>;
                      <div className="mb-6">;
                        <h4 className="font-semibold text-gray-900 mb-3">Key "Features": </h4>;
                        <ul className="space-y-2">;
                          {service && service.features.map((feature, idx) => (;
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">;
                              <CheckCircle className="w-4 h-4 text-green-500"  />;
                              {feature}
                            </li>;
                          ))}
                        </ul>;
                      </div>;
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">;
                        <span className="font-semibold text-green-600">{service && service.pricing}</span>;
                        <span>{service && service.delivery}</span>;
                      </div>;
                      <motion&& motion.button
                        whileHover={{ "scale": 1 && 1.02 }}
                        whileTap={{ "scale": 0 && 0.98 }}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 "hover": b g-blue-700 transition-colors">;
                        <ArrowRight className="w-5 h-5"  />;
                        Learn More;
                      </motion && motion.button>;
                    </div>;
                  </motion && motion.div>;
                ))}
              </div>;
            </div>;
          </section>;
          {/* Compliance Standards */}
          <section className="bg-gray-50 py-20">;
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">;
              <motion&& motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0 && 0.6 }}
                className="text-center mb-16">;
                <h2 className="text-3xl "md": tex t-4xl font-bold text-gray-900 mb-4">;
                  Compliance Standards;
                </h2>;
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                  We help you meet industry standards and regulatory requirements for data security.;
                </p>;
              </motion && motion.div>;
              <div className="grid grid-cols-2 md: gri d-cols-3 lg: gri d-cols-6 gap-8">;
                {complianceStandards && complianceStandards.map((standard, index) => (;
                  <motion&& motion.div
                    key={index}
                    initial={{ "opacity": 0, "y": 20 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0 && 0.6, "delay": index * 0 && 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg "hover": shadow-xl transition-shadow duration-300 text-center">;
                    <h3 className="text-lg font-bold text-gray-900 mb-2">;
                      {standard && standard.name}
                    </h3>;
                    <p className="text-sm text-gray-600">;
                      {standard && standard.description}
                    </p>;
                  </motion && motion.div>;
                ))}
              </div>;
            </div>;
          </section>;
          {/* CTA Section */}
          <section className="py-20">;
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">;
              <motion&& motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0 && 0.6 }}
                className="text-center">;
                <h2 className="text-3xl "md": tex t-4xl font-bold text-gray-900 mb-6">;
                  Secure Your Business Today;
                </h2>;
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">;
                  Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions.;
                </p>;
                <div className="flex flex-col sm: fle x-row gap-4 justify-center">;
                  <motion&& motion.a
                    href="/contact"
                    whileHover={{ scale: 1 && 1.05 }}
                    whileTap={{ "scale": 0 && 0.95 }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2">;
                    <ArrowRight className="w-5 h-5"  />;
                    Get Started Today;
                  </motion && motion.a>;
                  <motion&& motion.a
                    href=""tel": +13024640950"

import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Shield,Lock,Eye,AlertTriangle,ArrowRight,CheckCircle,Star,Globe,Settings,Users } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const CybersecurityPage: React.FC = () => { const services = [ { id: 1,title: "Security Assessment",description: "Comprehensive security evaluation to identify vulnerabilities and risks in your systems.",features: [ "Vulnerability scanning","Penetration testing","Security audit","Risk assessment","Compliance review" ],pricing: "Starting at $2,500",delivery: "1-3 weeks",category: "Assessment",icon: <Shield className="w-8 h-8" /> },{ id: 2,title: "Data Protection",description: "Advanced data encryption and protection solutions to secure your sensitive information.",features: [ "Data encryption","Access control","Data backup","Privacy compliance","Data loss prevention" ],pricing: "Starting at $3,000",delivery: "2-4 weeks",category: "Protection",icon: <Lock className="w-8 h-8" /> },{ id: 3,title: "Threat Monitoring",description: "24/7 security monitoring and threat detection to protect your systems in real-time.",features: [ "Real-time monitoring","Threat detection","Incident alerting","Security analytics","Response automation" ],pricing: "Starting at $1,500/month",delivery: "Ongoing",category: "Monitoring",icon: <Eye className="w-8 h-8" /> },{ id: 4,title: "Incident Response",description: "Rapid response and recovery services to minimize damage from security incidents.",features: [ "Incident analysis","Containment strategies","Recovery planning","Forensic investigation","Post-incident review" ],pricing: "Starting at $5,000",delivery: "Immediate",category: "Response",icon: <AlertTriangle className="w-8 h-8" /> },{ id: 5,title: "Compliance Management",description: "Ensure compliance with industry standards and regulations for data security.",features: [ "Compliance assessment","Policy development","Training programs","Audit support","Documentation" ],pricing: "Starting at $4,000",delivery: "2-6 weeks",category: "Compliance",icon: <Settings className="w-8 h-8" /> },{ id: 6,title: "Security Training",description: "Comprehensive security awareness training for your team to prevent security breaches.",features: [ "Security awareness","Phishing simulation","Best practices training","Incident reporting","Regular updates" ],pricing: "Starting at $1,000",delivery: "1-2 weeks",category: "Training",icon: <Users className="w-8 h-8" /> } ] const complianceStandards = [ { name: "SOC 2",description: "Service Organization Control 2" },{ name: "ISO 27001",description: "Information Security Management" },{ name: "HIPAA",description: "Health Insurance Portability" },{ name: "PCI DSS",description: "Payment Card Industry" },{ name: "GDPR",description: "General Data Protection Regulation" },{ name: "NIST",description: "National Institute of Standards" } ] return ( <> <SEO title="Cybersecurity Services - Zion Tech Group" description="Comprehensive cybersecurity services including security assessments,data protection,monitoring,and incident response. Protect your business with our expert security solutions." keywords="cybersecurity,security assessment,data protection,threat monitoring,incident response,compliance" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6"> Cybersecurity <span className="text-blue-600">Services</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Protect your business with comprehensive cybersecurity solutions including security assessments,data protection,and threat monitoring. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="#services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion.a> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion.a> </div> </motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4"> Our Cybersecurity Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive security solutions to protect your business from cyber threats and ensure compliance. </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {services.map((service,index) => ( <motion.div key={service.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="flex items-center justify-between mb-4"> <div className="text-blue-600"> {service.icon} </div> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"> {service.category} </span> </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {service.title} </h3> <p className="text-gray-600 mb-6"> {service.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <ul className="space-y-2"> {service.features.map((feature,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {feature} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{service.pricing}</span> <span>{service.delivery}</span> </div> <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion.button> </div> </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4"> Compliance Standards </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We help you meet industry standards and regulatory requirements for data security. </p> </motion.div> <div className="grid grid-cols-2 md: gri d-cols-3 lg: gri d-cols-6 gap-8"> {complianceStandards.map((standard,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <h3 className="text-lg font-bold text-gray-900 mb-2"> {standard.name} </h3> <p className="text-sm text-gray-600"> {standard.description} </p> </motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6"> Secure Your Business Today </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion.a> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion.a> </div> </motion.div> </div> </section> </main> </PageTransition> </> ) } export default CybersecurityPage

export default CybersecurityPage
import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Shield,Lock,Eye,AlertTriangle,ArrowRight,CheckCircle,Star,Globe,Settings,Users } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const CybersecurityPage: React.FC = () => { const services = [ { id: 1,title: "Security Assessment",description: "Comprehensive security evaluation to identify vulnerabilities and risks in your systems.",features: [ "Vulnerability scanning","Penetration testing","Security audit","Risk assessment","Compliance review" ],pricing: "Starting at $2,500",delivery: "1-3 weeks",category: "Assessment",icon: <Shield className="w-8 h-8" /> },{ id: 2,title: "Data Protection",description: "Advanced data encryption and protection solutions to secure your sensitive information.",features: [ "Data encryption","Access control","Data backup","Privacy compliance","Data loss prevention" ],pricing: "Starting at $3,000",delivery: "2-4 weeks",category: "Protection",icon: <Lock className="w-8 h-8" /> },{ id: 3,title: "Threat Monitoring",description: "24/7 security monitoring and threat detection to protect your systems in real-time.",features: [ "Real-time monitoring","Threat detection","Incident alerting","Security analytics","Response automation" ],pricing: "Starting at $1,500/month",delivery: "Ongoing",category: "Monitoring",icon: <Eye className="w-8 h-8" /> },{ id: 4,title: "Incident Response",description: "Rapid response and recovery services to minimize damage from security incidents.",features: [ "Incident analysis","Containment strategies","Recovery planning","Forensic investigation","Post-incident review" ],pricing: "Starting at $5,000",delivery: "Immediate",category: "Response",icon: <AlertTriangle className="w-8 h-8" /> },{ id: 5,title: "Compliance Management",description: "Ensure compliance with industry standards and regulations for data security.",features: [ "Compliance assessment","Policy development","Training programs","Audit support","Documentation" ],pricing: "Starting at $4,000",delivery: "2-6 weeks",category: "Compliance",icon: <Settings className="w-8 h-8" /> },{ id: 6,title: "Security Training",description: "Comprehensive security awareness training for your team to prevent security breaches.",features: [ "Security awareness","Phishing simulation","Best practices training","Incident reporting","Regular updates" ],pricing: "Starting at $1,000",delivery: "1-2 weeks",category: "Training",icon: <Users className="w-8 h-8" /> } ] const complianceStandards = [ { name: "SOC 2",description: "Service Organization Control 2" },{ name: "ISO 27001",description: "Information Security Management" },{ name: "HIPAA",description: "Health Insurance Portability" },{ name: "PCI DSS",description: "Payment Card Industry" },{ name: "GDPR",description: "General Data Protection Regulation" },{ name: "NIST",description: "National Institute of Standards" } ] return ( <> <SEO title="Cybersecurity Services - Zion Tech Group" description="Comprehensive cybersecurity services including security assessments,data protection,monitoring,and incident response. Protect your business with our expert security solutions." keywords="cybersecurity,security assessment,data protection,threat monitoring,incident response,compliance" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6"> Cybersecurity <span className="text-blue-600">Services</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Protect your business with comprehensive cybersecurity solutions including security assessments,data protection,and threat monitoring. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="#services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion.a> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion.a> </div> </motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4"> Our Cybersecurity Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive security solutions to protect your business from cyber threats and ensure compliance. </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {services.map((service,index) => ( <motion.div key={service.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="flex items-center justify-between mb-4"> <div className="text-blue-600"> {service.icon} </div> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"> {service.category} </span> </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {service.title} </h3> <p className="text-gray-600 mb-6"> {service.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <ul className="space-y-2"> {service.features.map((feature,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {feature} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{service.pricing}</span> <span>{service.delivery}</span> </div> <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion.button> </div> </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4"> Compliance Standards </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We help you meet industry standards and regulatory requirements for data security. </p> </motion.div> <div className="grid grid-cols-2 md: gri d-cols-3 lg: gri d-cols-6 gap-8"> {complianceStandards.map((standard,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <h3 className="text-lg font-bold text-gray-900 mb-2"> {standard.name} </h3> <p className="text-sm text-gray-600"> {standard.description} </p> </motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6"> Secure Your Business Today </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion.a> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion.a> </div> </motion.div> </div> </section> </main> </PageTransition> </> ) } export default CybersecurityPage
import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Shield,Lock,Eye,AlertTriangle,ArrowRight,CheckCircle,Star,Globe,Settings,Users } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const CybersecurityPage: React.FC = () => { const services = [ { id: 1,title: "Security Assessment",description: "Comprehensive security evaluation to identify vulnerabilities and risks in your systems.",features: [ "Vulnerability scanning","Penetration testing","Security audit","Risk assessment","Compliance review" ],pricing: "Starting at $2,500",delivery: "1-3 weeks",category: "Assessment",icon: <Shield className="w-8 h-8" /> },{ id: 2,title: "Data Protection",description: "Advanced data encryption and protection solutions to secure your sensitive information.",features: [ "Data encryption","Access control","Data backup","Privacy compliance","Data loss prevention" ],pricing: "Starting at $3,000",delivery: "2-4 weeks",category: "Protection",icon: <Lock className="w-8 h-8" /> },{ id: 3,title: "Threat Monitoring",description: "24/7 security monitoring and threat detection to protect your systems in real-time.",features: [ "Real-time monitoring","Threat detection","Incident alerting","Security analytics","Response automation" ],pricing: "Starting at $1,500/month",delivery: "Ongoing",category: "Monitoring",icon: <Eye className="w-8 h-8" /> },{ id: 4,title: "Incident Response",description: "Rapid response and recovery services to minimize damage from security incidents.",features: [ "Incident analysis","Containment strategies","Recovery planning","Forensic investigation","Post-incident review" ],pricing: "Starting at $5,000",delivery: "Immediate",category: "Response",icon: <AlertTriangle className="w-8 h-8" /> },{ id: 5,title: "Compliance Management",description: "Ensure compliance with industry standards and regulations for data security.",features: [ "Compliance assessment","Policy development","Training programs","Audit support","Documentation" ],pricing: "Starting at $4,000",delivery: "2-6 weeks",category: "Compliance",icon: <Settings className="w-8 h-8" /> },{ id: 6,title: "Security Training",description: "Comprehensive security awareness training for your team to prevent security breaches.",features: [ "Security awareness","Phishing simulation","Best practices training","Incident reporting","Regular updates" ],pricing: "Starting at $1,000",delivery: "1-2 weeks",category: "Training",icon: <Users className="w-8 h-8" /> } ] const complianceStandards = [ { name: "SOC 2",description: "Service Organization Control 2" },{ name: "ISO 27001",description: "Information Security Management" },{ name: "HIPAA",description: "Health Insurance Portability" },{ name: "PCI DSS",description: "Payment Card Industry" },{ name: "GDPR",description: "General Data Protection Regulation" },{ name: "NIST",description: "National Institute of Standards" } ] return ( <> <SEO title="Cybersecurity Services - Zion Tech Group" description="Comprehensive cybersecurity services including security assessments,data protection,monitoring,and incident response. Protect your business with our expert security solutions." keywords="cybersecurity,security assessment,data protection,threat monitoring,incident response,compliance" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6"> Cybersecurity <span className="text-blue-600">Services</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Protect your business with comprehensive cybersecurity solutions including security assessments,data protection,and threat monitoring. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="#services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion.a> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion.a> </div> </motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4"> Our Cybersecurity Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive security solutions to protect your business from cyber threats and ensure compliance. </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {services.map((service,index) => ( <motion.div key={service.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="flex items-center justify-between mb-4"> <div className="text-blue-600"> {service.icon} </div> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"> {service.category} </span> </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {service.title} </h3> <p className="text-gray-600 mb-6"> {service.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <ul className="space-y-2"> {service.features.map((feature,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {feature} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{service.pricing}</span> <span>{service.delivery}</span> </div> <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion.button> </div> </motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4"> Compliance Standards </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We help you meet industry standards and regulatory requirements for data security. </p> </motion.div> <div className="grid grid-cols-2 md: gri d-cols-3 lg: gri d-cols-6 gap-8"> {complianceStandards.map((standard,index) => ( <motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6,delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <h3 className="text-lg font-bold text-gray-900 mb-2"> {standard.name} </h3> <p className="text-sm text-gray-600"> {standard.description} </p> </motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0.6 }} className="text-center" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6"> Secure Your Business Today </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion.a> <motion.a href="tel:+13024640950" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion.a> </div> </motion.div> </div> </section> </main> </PageTransition> </> ) } export default CybersecurityPage
;
                    whileTap={{ "scale": 0 && 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2">;
                    <ArrowRight className="w-5 h-5"  />;
                    Call "Us": +1 302 464 0950;
                  </motion && motion.a>;
                </div>;
              </motion && motion.div>;
            </div>;
          </section>;
        </main>;
      </PageTransition>;
    </>;
  );
}
export default CybersecurityPage;
import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Shield,Lock,Eye,AlertTriangle,ArrowRight,CheckCircle,Star,Globe,Settings,Users } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const CybersecurityPage: React.FC = () => { const services = [ { id: 1,title: "Security Assessment",description: "Comprehensive security evaluation to identify vulnerabilities and risks in your systems.",features: [ "Vulnerability scanning","Penetration testing","Security audit","Risk assessment","Compliance review" ],pricing: "Starting at $2,500",delivery: "1-3 weeks",category: "Assessment",icon: <Shield className="w-8 h-8" /> },{ id: 2,title: "Data Protection",description: "Advanced data encryption and protection solutions to secure your sensitive information.",features: [ "Data encryption","Access control","Data backup","Privacy compliance","Data loss prevention" ],pricing: "Starting at $3,000",delivery: "2-4 weeks",category: "Protection",icon: <Lock className="w-8 h-8" /> },{ id: 3,title: "Threat Monitoring",description: "24/7 security monitoring and threat detection to protect your systems in real-time.",features: [ "Real-time monitoring","Threat detection","Incident alerting","Security analytics","Response automation" ],pricing: "Starting at $1,500/month",delivery: "Ongoing",category: "Monitoring",icon: <Eye className="w-8 h-8" /> },{ id: 4,title: "Incident Response",description: "Rapid response and recovery services to minimize damage from security incidents.",features: [ "Incident analysis","Containment strategies","Recovery planning","Forensic investigation","Post-incident review" ],pricing: "Starting at $5,000",delivery: "Immediate",category: "Response",icon: <AlertTriangle className="w-8 h-8" /> },{ id: 5,title: "Compliance Management",description: "Ensure compliance with industry standards and regulations for data security.",features: [ "Compliance assessment","Policy development","Training programs","Audit support","Documentation" ],pricing: "Starting at $4,000",delivery: "2-6 weeks",category: "Compliance",icon: <Settings className="w-8 h-8" /> },{ id: 6,title: "Security Training",description: "Comprehensive security awareness training for your team to prevent security breaches.",features: [ "Security awareness","Phishing simulation","Best practices training","Incident reporting","Regular updates" ],pricing: "Starting at $1,000",delivery: "1-2 weeks",category: "Training",icon: <Users className="w-8 h-8" /> } ] const complianceStandards = [ { name: "SOC 2",description: "Service Organization Control 2" },{ name: "ISO 27001",description: "Information Security Management" },{ name: "HIPAA",description: "Health Insurance Portability" },{ name: "PCI DSS",description: "Payment Card Industry" },{ name: "GDPR",description: "General Data Protection Regulation" },{ name: "NIST",description: "National Institute of Standards" } ] return ( <> <SEO title="Cybersecurity Services - Zion Tech Group" description="Comprehensive cybersecurity services including security assessments,data protection,monitoring,and incident response. Protect your business with our expert security solutions." keywords="cybersecurity,security assessment,data protection,threat monitoring,incident response,compliance" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center" > <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6"> Cybersecurity <span className="text-blue-600">Services</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Protect your business with comprehensive cybersecurity solutions including security assessments,data protection,and threat monitoring. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion && motion.a href="#services" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion && motion.a> <motion && motion.a href="/contact" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion && motion.a> </div> </motion && motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: 0 && 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4"> Our Cybersecurity Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive security solutions to protect your business from cyber threats and ensure compliance. </p> </motion && motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {services && services.map((service,index) => ( <motion && motion.div key={service && service.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: index * 0 && 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="flex items-center justify-between mb-4"> <div className="text-blue-600"> {service && service.icon} </div> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"> {service && service.category} </span> </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {service && service.title} </h3> <p className="text-gray-600 mb-6"> {service && service.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <ul className="space-y-2"> {service && service.features.map((feature,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {feature} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{service && service.pricing}</span> <span>{service && service.delivery}</span> </div> <motion && motion.button whileHover={{ scale: 1 && 1.02 }} whileTap={{ scale: 0 && 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion && motion.button> </div> </motion && motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4"> Compliance Standards </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We help you meet industry standards and regulatory requirements for data security. </p> </motion && motion.div> <div className="grid grid-cols-2 md: gri d-cols-3 lg: gri d-cols-6 gap-8"> {complianceStandards && complianceStandards.map((standard,index) => ( <motion && motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: index * 0 && 0.1 }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <h3 className="text-lg font-bold text-gray-900 mb-2"> {standard && standard.name} </h3> <p className="text-sm text-gray-600"> {standard && standard.description} </p> </motion && motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6"> Secure Your Business Today </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion && motion.a href="/contact" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion && motion.a> <motion && motion.a href="tel:+13024640950" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion && motion.a> </div> </motion ;
import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Shield,Lock,Eye,AlertTriangle,ArrowRight,CheckCircle,Star,Globe,Settings,Users } from 'lucide-react' const SEO = dynamic(() => import('../src/components/SEO'),{ ssr: false }) const PageTransition = dynamic(() => import('../src/components/PageTransition'),{ ssr: false }) const CybersecurityPage: React.FC = () => { const services = [ { id: 1,title: "Security Assessment",description: "Comprehensive security evaluation to identify vulnerabilities and risks in your systems.",features: [ "Vulnerability scanning","Penetration testing","Security audit","Risk assessment","Compliance review" ],pricing: "Starting at $2,500",delivery: "1-3 weeks",category: "Assessment",icon: <Shield className="w-8 h-8" /> },{ id: 2,title: "Data Protection",description: "Advanced data encryption and protection solutions to secure your sensitive information.",features: [ "Data encryption","Access control","Data backup","Privacy compliance","Data loss prevention" ],pricing: "Starting at $3,000",delivery: "2-4 weeks",category: "Protection",icon: <Lock className="w-8 h-8" /> },{ id: 3,title: "Threat Monitoring",description: "24/7 security monitoring and threat detection to protect your systems in real-time.",features: [ "Real-time monitoring","Threat detection","Incident alerting","Security analytics","Response automation" ],pricing: "Starting at $1,500/month",delivery: "Ongoing",category: "Monitoring",icon: <Eye className="w-8 h-8" /> },{ id: 4,title: "Incident Response",description: "Rapid response and recovery services to minimize damage from security incidents.",features: [ "Incident analysis","Containment strategies","Recovery planning","Forensic investigation","Post-incident review" ],pricing: "Starting at $5,000",delivery: "Immediate",category: "Response",icon: <AlertTriangle className="w-8 h-8" /> },{ id: 5,title: "Compliance Management",description: "Ensure compliance with industry standards and regulations for data security.",features: [ "Compliance assessment","Policy development","Training programs","Audit support","Documentation" ],pricing: "Starting at $4,000",delivery: "2-6 weeks",category: "Compliance",icon: <Settings className="w-8 h-8" /> },{ id: 6,title: "Security Training",description: "Comprehensive security awareness training for your team to prevent security breaches.",features: [ "Security awareness","Phishing simulation","Best practices training","Incident reporting","Regular updates" ],pricing: "Starting at $1,000",delivery: "1-2 weeks",category: "Training",icon: <Users className="w-8 h-8" /> } ] const complianceStandards = [ { name: "SOC 2",description: "Service Organization Control 2" },{ name: "ISO 27001",description: "Information Security Management" },{ name: "HIPAA",description: "Health Insurance Portability" },{ name: "PCI DSS",description: "Payment Card Industry" },{ name: "GDPR",description: "General Data Protection Regulation" },{ name: "NIST",description: "National Institute of Standards" } ] return ( <> <SEO title="Cybersecurity Services - Zion Tech Group" description="Comprehensive cybersecurity services including security assessments,data protection,monitoring,and incident response. Protect your business with our expert security solutions." keywords="cybersecurity,security assessment,data protection,threat monitoring,incident response,compliance" canonical="https: /> <PageTransition> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center" > <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6"> Cybersecurity <span className="text-blue-600">Services</span> </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Protect your business with comprehensive cybersecurity solutions including security assessments,data protection,and threat monitoring. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion && motion.a href="#services" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Explore Services </motion && motion.a> <motion && motion.a href="/contact" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started </motion && motion.a> </div> </motion && motion.div> </div> </section> {} <section id="services" className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: 0 && 0.2 }} className="text-center mb-16" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4"> Our Cybersecurity Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive security solutions to protect your business from cyber threats and ensure compliance. </p> </motion && motion.div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {services && services.map((service,index) => ( <motion && motion.div key={service && service.id} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: index * 0 && 0.1 }} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" > <div className="p-8"> <div className="flex items-center justify-between mb-4"> <div className="text-blue-600"> {service && service.icon} </div> <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"> {service && service.category} </span> </div> <h3 className="text-xl font-bold text-gray-900 mb-3"> {service && service.title} </h3> <p className="text-gray-600 mb-6"> {service && service.description} </p> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <ul className="space-y-2"> {service && service.features.map((feature,idx) => ( <li key={idx} className="flex items-center gap-2 text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500" /> {feature} </li> ))} </ul> </div> <div className="flex items-center justify-between text-sm text-gray-500 mb-6"> <span className="font-semibold text-green-600">{service && service.pricing}</span> <span>{service && service.delivery}</span> </div> <motion && motion.button whileHover={{ scale: 1 && 1.02 }} whileTap={{ scale: 0 && 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover: b g-blue-700 transition-colors" > <ArrowRight className="w-5 h-5" /> Learn More </motion && motion.button> </div> </motion && motion.div> ))} </div> </div> </section> {} <section className="bg-gray-50 py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center mb-16" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-4"> Compliance Standards </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We help you meet industry standards and regulatory requirements for data security. </p> </motion && motion.div> <div className="grid grid-cols-2 md: gri d-cols-3 lg: gri d-cols-6 gap-8"> {complianceStandards && complianceStandards.map((standard,index) => ( <motion && motion.div key={index} initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6,delay: index * 0 && 0.1 }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center" > <h3 className="text-lg font-bold text-gray-900 mb-2"> {standard && standard.name} </h3> <p className="text-sm text-gray-600"> {standard && standard.description} </p> </motion && motion.div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <motion && motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ duration: 0 && 0.6 }} className="text-center" > <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6"> Secure Your Business Today </h2> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <motion && motion.a href="/contact" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Get Started Today </motion && motion.a> <motion && motion.a href="tel:+13024640950" whileHover={{ scale: 1 && 1.05 }} whileTap={{ scale: 0 && 0.95 }} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2" > <ArrowRight className="w-5 h-5" /> Call Us: +1 302 464 0950 </motion && motion.a> </div> </motion && motion.div> </div> </section> </main> </PageTransition> </> ) } export default CybersecurityPage
origin/cursor/integrate-build-improve-and-re-verify-c7b5
