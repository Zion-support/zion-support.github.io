import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, CheckCircle, Zap, Users, Globe } from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Threat Detection',
      description: 'Advanced threat detection and response systems to identify and neutralize cyber threats in real-time.',
      price: 'From $2,999',
      features: ['Real-time monitoring', 'AI-powered detection', 'Automated response'],
      color: 'from-red-500 to-red-600',
      path: '/threat-detection'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security audits to identify vulnerabilities and provide remediation strategies.',
      price: 'From $1,999',
      features: ['Security audits', 'Penetration testing', 'Compliance checks'],
      color: 'from-orange-500 to-orange-600',
      path: '/vulnerability-assessment'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response to protect your business around the clock.',
      price: 'From $3,999',
      features: ['24/7 monitoring', 'Incident response', 'Security alerts'],
      color: 'from-blue-500 to-blue-600',
      path: '/security-monitoring'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Security Consulting',
      description: 'Expert security consulting to help you develop and implement robust security strategies.',
      price: 'From $500/hr',
      features: ['Security strategy', 'Risk assessment', 'Compliance guidance'],
      color: 'from-purple-500 to-purple-600',
      path: '/security-consulting'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Security Training',
      description: 'Comprehensive security training programs to educate your team on cybersecurity best practices.',
      price: 'From $999',
      features: ['Team training', 'Security awareness', 'Best practices'],
      color: 'from-green-500 to-green-600',
      path: '/security-training'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Compliance Management',
      description: 'Help you achieve and maintain compliance with industry standards and regulations.',
      price: 'From $2,499',
      features: ['SOC 2 compliance', 'ISO 27001', 'GDPR compliance'],
      color: 'from-indigo-500 to-indigo-600',
      path: '/compliance-management'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Advanced cybersecurity solutions including threat detection, vulnerability assessment, and security consulting services."
        keywords="cybersecurity, security solutions, threat detection, vulnerability assessment, security consulting"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Advanced Security Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-300 bg-clip-text text-transparent">
              Cybersecurity
              <span className="block text-4xl md:text-5xl text-red-400 mt-2">Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect your digital assets with our comprehensive cybersecurity solutions. 
              From threat detection to compliance management, we secure your business against evolving cyber threats.
            </p>
            
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

      {/* Services Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Security Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions tailored to your business needs
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't wait for a security breach. Get professional cybersecurity assessment and protection today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Now
            </Link>
            <Link
              to="/consultation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CybersecurityPage;