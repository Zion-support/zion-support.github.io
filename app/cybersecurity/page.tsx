import { ArrowRight, Shield, Lock, Eye, AlertTriangle, Users, Database, Mail, Smartphone, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export default function Cybersecurity() {
  const services = [
    {
      title: "AI Cybersecurity Suite",
      description: "Advanced AI-powered threat detection and response system. Real-time monitoring, automated incident response, and compliance reporting.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity-suite-pro",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      features: ["AI Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions including vulnerability assessments, penetration testing, and security architecture design.",
      icon: <Lock className="w-8 h-8" />,
      path: "/cybersecurity-solutions",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      features: ["Vulnerability Assessment", "Penetration Testing", "Security Architecture", "Risk Management"]
    },
    {
      title: "Advanced Security Suite",
      description: "Enterprise-grade security with advanced threat protection, identity management, and security automation capabilities.",
      icon: <AlertTriangle className="w-8 h-8" />,
      path: "/advanced-security-suite",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $499/month",
      features: ["Threat Protection", "Identity Management", "Security Automation", "Incident Response"]
    },
    {
      title: "Security Monitoring",
      description: "Continuous security monitoring with real-time alerts, log analysis, and security event correlation across your entire infrastructure.",
      icon: <Eye className="w-8 h-8" />,
      path: "/security-monitoring-suite",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $249/month",
      features: ["Real-time Monitoring", "Log Analysis", "Event Correlation", "Alert Management"]
    },
    {
      title: "Network Security",
      description: "Comprehensive network security solutions including firewall management, intrusion detection, and network segmentation.",
      icon: <Database className="w-8 h-8" />,
      path: "/network-security",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $199/month",
      features: ["Firewall Management", "Intrusion Detection", "Network Segmentation", "Traffic Analysis"]
    },
    {
      title: "Security Automation",
      description: "Automated security processes including vulnerability scanning, patch management, and security policy enforcement.",
      icon: <Users className="w-8 h-8" />,
      path: "/security-automation",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $179/month",
      features: ["Vulnerability Scanning", "Patch Management", "Policy Enforcement", "Compliance Automation"]
    }
  ];
  return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group | Advanced Security Solutions</title>
        <meta
          name="description"
          content="Comprehensive cybersecurity services including AI-powered threat detection, security monitoring, network security, and security automation. Protect your business with advanced security solutions."
        />
        <meta
          name="keywords"
          content="cybersecurity, security services, threat detection, security monitoring, network security, security automation, AI security, penetration testing, vulnerability assessment"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 animate-pulse">
                  Cybersecurity
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced cybersecurity solutions designed to protect your business from evolving threats. 
              From AI-powered threat detection to comprehensive security monitoring, we provide enterprise-grade protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105"
              >
                Get Protected
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Security Assessment
              </Link>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
                  Security Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of cybersecurity services designed to protect your business from all types of threats.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-red-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Price and Features */}
                    <div className="space-y-3">
                      <div className="text-center">
                        <span className="text-red-400 font-bold text-lg">{service.price}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded-full border border-red-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-red-400 hover:text-red-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Secure Your Business Today
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait for a security breach. Join thousands of businesses already using our cybersecurity solutions to protect their valuable data and assets.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-red-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-red-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-red-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105"
                >
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}