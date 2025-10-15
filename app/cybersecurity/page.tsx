'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { ShieldCheckIcon, LockClosedIcon, EyeIcon, ExclamationTriangleIcon, CheckCircleIcon, ClockIcon, StarIcon, ArrowRightIcon, RocketLaunchIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const CybersecurityPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const securityServices = [
    {
      name: 'Security Audit',
      description: 'Comprehensive security assessment of your systems and infrastructure',
      icon: ShieldCheckIcon,
      features: ['Vulnerability Assessment', 'Penetration Testing', 'Compliance Review', 'Risk Analysis'],
      pricing: { basic: 299, pro: 599, enterprise: 1299 },
      status: 'active'
    },
    {
      name: 'Threat Detection',
      description: 'Advanced AI-powered threat detection and response systems',
      icon: EyeIcon,
      features: ['Real-time Monitoring', 'AI Threat Analysis', 'Automated Response', 'Incident Management'],
      pricing: { basic: 199, pro: 399, enterprise: 899 },
      status: 'active'
    },
    {
      name: 'Data Encryption',
      description: 'End-to-end encryption solutions for data protection',
      icon: LockClosedIcon,
      features: ['Data at Rest Encryption', 'Data in Transit Encryption', 'Key Management', 'Compliance Support'],
      pricing: { basic: 149, pro: 299, enterprise: 699 },
      status: 'active'
    },
    {
      name: 'Compliance Management',
      description: 'Automated compliance monitoring and reporting',
      icon: CheckCircleIcon,
      features: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Automated Reporting'],
      pricing: { basic: 249, pro: 499, enterprise: 999 },
      status: 'active'
    }
  ];

  const securityFeatures = [
    {
      icon: ShieldCheckIcon,
      title: 'Advanced Threat Protection',
      description: 'AI-powered threat detection and prevention systems',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: LockClosedIcon,
      title: 'Data Security',
      description: 'Comprehensive data encryption and protection',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: EyeIcon,
      title: '24/7 Monitoring',
      description: 'Continuous security monitoring and alerting',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Incident Response',
      description: 'Rapid response to security incidents and breaches',
      gradient: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Cybersecurity Solutions - Enterprise Security | Zion Tech Group"
        description="Comprehensive cybersecurity solutions including security audits, threat detection, data encryption, and compliance management for enterprise protection."
        keywords="cybersecurity, security audit, threat detection, data encryption, compliance management, enterprise security"
      />
      
      {/* Enhanced Animated Background */}
      <div className="futuristic-bg"></div>
      <div className="cyber-grid-enhanced"></div>
      <div className="quantum-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="quantum-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>
      <div className="scan-lines"></div>

      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 holographic-text cyber-glitch" data-text="Cybersecurity Solutions">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect your business with our comprehensive cybersecurity solutions. Advanced threat detection, 
              data encryption, compliance management, and 24/7 security monitoring.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="glass-card px-6 py-3 text-cyan-400">
                <CheckCircleIcon className="h-5 w-5 inline mr-2" />
                Enterprise Grade Security
              </div>
              <div className="glass-card px-6 py-3 text-green-400">
                <ClockIcon className="h-5 w-5 inline mr-2" />
                24/7 Monitoring
              </div>
              <div className="glass-card px-6 py-3 text-purple-400">
                <StarIcon className="h-5 w-5 inline mr-2" />
                AI-Powered Protection
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Security Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive cybersecurity services designed to protect your business from evolving threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.name}
                  className={`glass-card p-8 card-hover transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 p-4 mx-auto mb-4 icon-bounce">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-cyan-400">
                        <CurrencyDollarIcon className="h-5 w-5 mr-1" />
                        <span className="text-2xl font-bold">${service.pricing.basic}</span>
                        <span className="text-sm ml-1">/month</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Starting from</div>
                        <div className="text-xs text-gray-500">Basic Plan</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to="/contact"
                    className="w-full btn-neon text-center py-3 text-sm font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Why Choose Our Security Solutions?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep security expertise to protect your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.title}
                  className={`glass-card p-8 text-center hover-lift transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${feature.gradient} p-6 mx-auto mb-6 icon-bounce`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 holographic-text">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't wait for a security breach. Protect your business with our comprehensive 
              cybersecurity solutions and expert support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="btn-neon hover-glow focus-neon px-8 py-4 text-lg font-semibold"
              >
                Get Security Assessment
                <RocketLaunchIcon className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link 
                to="/pricing" 
                className="glass-card hover-lift px-8 py-4 text-lg font-semibold text-cyan-400 border-cyan-400/30"
              >
                View Pricing
                <CurrencyDollarIcon className="ml-2 h-5 w-5 inline" />
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityPage;