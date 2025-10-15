import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      name: "Security Assessment",
      description: "Comprehensive security audits to identify vulnerabilities and assess your current security posture.",
      features: ["Vulnerability scanning", "Penetration testing", "Risk assessment", "Compliance review"],
      icon: <Eye className="w-8 h-8" />
    },
    {
      name: "Threat Detection",
      description: "Advanced threat detection and response systems to protect against cyber attacks in real-time.",
      features: ["24/7 monitoring", "AI-powered detection", "Incident response", "Threat intelligence"],
      icon: <AlertTriangle className="w-8 h-8" />
    },
    {
      name: "Data Protection",
      description: "Comprehensive data encryption and protection solutions to secure your sensitive information.",
      features: ["Data encryption", "Access controls", "Backup security", "Compliance management"],
      icon: <Lock className="w-8 h-8" />
    },
    {
      name: "Security Training",
      description: "Employee security awareness training to prevent social engineering and phishing attacks.",
      features: ["Security awareness", "Phishing simulation", "Best practices", "Incident reporting"],
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const complianceFrameworks = [
    { name: "SOC 2 Type II", description: "Security and availability controls for service organizations" },
    { name: "ISO 27001", description: "International standard for information security management" },
    { name: "GDPR", description: "General Data Protection Regulation compliance" },
    { name: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
    { name: "PCI DSS", description: "Payment Card Industry Data Security Standard" },
    { name: "NIST", description: "National Institute of Standards and Technology framework" }
  ];

  const securityStats = [
    { number: "99.9%", label: "Threat Detection Rate" },
    { number: "< 5 min", label: "Response Time" },
    { number: "24/7", label: "Security Monitoring" },
    { number: "0", label: "Successful Breaches" }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity - Zion Tech Group | Advanced Security Solutions</title>
        <meta name="description" content="Protect your business with our comprehensive cybersecurity solutions. Threat detection, data protection, compliance, and security training services." />
        <meta name="keywords" content="cybersecurity, security solutions, threat detection, data protection, compliance, SOC 2, ISO 27001, security training" />
        <meta property="og:title" content="Cybersecurity - Zion Tech Group" />
        <meta property="og:description" content="Advanced cybersecurity solutions and protection" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <Shield className="w-16 h-16 inline-block mr-4 text-cyan-400" />
                Cybersecurity
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Protect your business with advanced cybersecurity solutions. Comprehensive threat detection, 
                data protection, and compliance services to keep your organization secure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Security Assessment
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Security Report
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Security Stats */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {securityStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Cybersecurity Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security solutions designed to protect your business from evolving threats
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Compliance & Certifications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We help you meet industry standards and regulatory requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center hover:border-cyan-500/40 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{framework.name}</h3>
                  <p className="text-gray-300">{framework.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Security Solutions?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We provide comprehensive security solutions backed by industry expertise and cutting-edge technology
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <Shield className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Expert Security Team</h3>
                      <p className="text-gray-300">Certified security professionals with years of experience in threat detection and incident response.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Zap className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Advanced Technology</h3>
                      <p className="text-gray-300">AI-powered threat detection and automated response systems for real-time protection.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Lock className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">24/7 Monitoring</h3>
                      <p className="text-gray-300">Round-the-clock security monitoring and incident response to keep your systems protected.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <Eye className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Compliance Ready</h3>
                      <p className="text-gray-300">Help you meet SOC 2, ISO 27001, GDPR, and other regulatory requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Proactive Approach</h3>
                      <p className="text-gray-300">Identify and address security vulnerabilities before they become threats.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Proven Track Record</h3>
                      <p className="text-gray-300">Zero successful breaches for our clients with comprehensive security measures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Secure Your Business Today</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don&apos;t wait for a security breach. Get comprehensive protection with our advanced cybersecurity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Get Security Assessment
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Security Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityPage;