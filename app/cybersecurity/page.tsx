'use client';
import React from 'react';
<<<<<<< HEAD
import { Shield, Lock, Eye, CheckCircle, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CybersecurityPage: React.FC = () => {,
  const features = [,
    'Threat Detection & Prevention',
    'Vulnerability Assessment',
    'Security Monitoring',
    'Incident Response',
    'Penetration Testing',
    'Security Audits',
    'Compliance Management',
    '24/7 Security Operations Center'
  ];

  const benefits = [
    '99.9% threat detection accuracy',
    '60% reduction in security incidents',
    '100% compliance achievement',
    '24/7 security monitoring'
  ];

  const services = [
    {
      title: 'Network Security',
      description: 'Comprehensive network protection with firewalls, intrusion detection, and monitoring',
      icon: Shield;
    },
    {
      title: 'Endpoint Protection',
      description: 'Advanced endpoint security for all devices and workstations',
      icon: Lock;
    },
    {
      title: 'Security Training',
      description: 'Employee security awareness training and phishing simulation',
      icon: Eye;
    }
  ];

<<<<<<< HEAD
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
      <Navigation />
<<<<<<< HEAD

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</main>
        <section className="text-center mb-16">
<<<<<<< HEAD
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Cybersecurity">Cybersecurity<p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">Advanced security solutions with threat detection, prevention, and comprehensive protection for your digital assets.<div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $1,599/month</div>
=======
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Cybersecurity">
            Cybersecurity;
          </h1>,
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">,
            Advanced security solutions with threat detection, prevention, and comprehensive protection for your digital assets.
          </p>
          <div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $1,599/month</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Cybersecurity">Cybersecurity</h1><p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">Advanced security solutions with threat detection, prevention, and comprehensive protection for your digital assets.</p><div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $1,599/month</section>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
        </section>

        {/* Features */}
        <section className="mb-16">
<<<<<<< HEAD
          <div className="cyber-card p-8">
<<<<<<< HEAD
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Features<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (</div>
=======
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">)
              Security Features;)
            </h2>)
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">),
              {features.map((feature, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                <div key={index} className="flex items-center space-x-3">
=======
          <div className="cyber-card p-8"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (</div>
                <div key={index} className="flex items-center space-x-3"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
<<<<<<< HEAD
          <div className="cyber-card p-8">
<<<<<<< HEAD
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Benefits<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
=======
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Security Benefits;
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
              {benefits.map((benefit, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}<p className="text-gray-300 text-sm">{benefit}</p>
=======
          <div className="cyber-card p-8"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Benefits</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
                <div key={index} className="text-center"></div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}</div><p className="text-gray-300 text-sm">{benefit}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
<<<<<<< HEAD
<<<<<<< HEAD
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our Security Services<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{services.map((service, index) => (</div>
=======
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our Security Services;
          </h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {services.map((service, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              <div key={index} className="cyber-card p-6 text-center">
=======
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our Security Services</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{services.map((service, index) => (</section>
              <div key={index} className="cyber-card p-6 text-center"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                <service.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3><p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto"></section>
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Secure Your Business?</h2><p className="text-lg text-gray-300 mb-8">Contact us today for a comprehensive security assessment and custom protection plan.</p>
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a;
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
<<<<<<< HEAD
              >Get Free Security Assessment</a>
=======
              >
                Get Free Security Assessment;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              </a>
              <a;
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
<<<<<<< HEAD
                <Phone className="w-5 h-5" >Call +1 302 464 0950</Phone>
              </Phone>
=======
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950;
              </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            </div>
          </div>
        </section>
      </main>

      <Footer />,
    </div>,
=======
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CybersecurityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business from threats. Advanced security measures and 24/7 monitoring." />
        <meta name="keywords" content="cybersecurity, security solutions, threat protection, network security, data protection" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-red-400 mb-8">
              Protect your business with advanced security measures
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Security Protection</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Our cybersecurity solutions provide multi-layered protection against evolving threats, 
                ensuring your data and systems remain secure 24/7.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <span className="text-red-400 mr-3">✓</span>
                  Advanced threat detection
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-3">✓</span>
                  Real-time monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-3">✓</span>
                  Incident response
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-3">✓</span>
                  Compliance management
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Security Services</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Network Security</h4>
                  <p className="text-gray-300">Protect your network infrastructure from intrusions</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Data Protection</h4>
                  <p className="text-gray-300">Encrypt and secure your sensitive data</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Security Audits</h4>
                  <p className="text-gray-300">Regular assessments and vulnerability testing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Secure Your Business Today</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300"
              >
                Get Security Assessment
              </a>
              <a
                href="/cybersecurity-suite"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300"
              >
                View Security Suite
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  );
};

export default CybersecurityPage;