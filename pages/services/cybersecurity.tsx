import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Shield, ArrowRight, CheckCircle, Zap, Target, Users, 
  TrendingUp, Lock, Cpu, Database, Globe, Star, Eye
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function CybersecurityPage() {
  const services = [
    {
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection and response with real-time monitoring",
      features: [
        'Vulnerability scanning',
        'Penetration testing',
        'Security audit',
        'Risk assessment',
        'Compliance review'
      ]
    }, {
      title: 'Network Security',
      description: 'Protect your network infrastructure from threats',
      icon: Network,
      features: [
        'Firewall configuration',
        'Intrusion detection',
        'Network monitoring',
        'VPN setup',
        'Traffic analysis'
      ]
    }, {
      title: 'Data Protection',
      description: 'Safeguard your sensitive data and information',
      icon: Database,
      features: [
        'Data encryption',
        'Backup solutions',
        'Access controls',
        'Data loss prevention',
        'Privacy compliance'
      ]
    }, {
      title: 'Incident Response',
      description: 'Rapid response to security incidents and breaches',
      icon: AlertTriangle,
      features: [
        '24/7 monitoring',
        'Incident detection',
        'Forensic analysis',
        'Recovery planning',
        'Post-incident review'
      ]
    }
  ];

  const compliance = [
    {
      name: 'SOC 2',
      description: 'Service Organization Control 2 compliance for service providers',
      icon: Shield
    }, {
      name: 'ISO 27001',
      description: 'International standard for information security management',
      icon: Lock
    }, {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      icon: Globe
    }, {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      icon: Users
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Security Uptime', description: 'Continuous protection' }, { number: '24/7', label: 'Monitoring', description: 'Round-the-clock surveillance' }, { number: '< 5min', label: 'Response Time', description: 'Rapid incident response' }, { number: '100%', label: 'Compliance', description: 'Regulatory adherence' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Cybersecurity Services - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity solutions including threat detection, zero-trust architecture, and incident response services." />
        <meta name="keywords" content="cybersecurity, threat detection, zero-trust, incident response, security, Zion Tech Group" />
        <meta property="og:title" content="Cybersecurity Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced cybersecurity solutions for comprehensive protection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services/cybersecurity" />
        <link rel="canonical" href="https://ziontechgroup.com/services/cybersecurity" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-5 mx-auto mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
              Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8">
              Protect your organization with cutting-edge cybersecurity solutions. 
              From advanced threat detection to zero-trust architecture, we keep you secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Security Assessment
              </Link>
              <Link href="/case-studies" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )};

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
              Security Services
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect your digital assets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-red-400/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-red-500/0 via-orange-400/10 to-red-500/0 opacity-0 blur-2xl transition-opacity hover:opacity-100" />
                
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-4 mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-2xl font-bold text-red-400 mb-4">{service.price}</div>
                
                <motion.a
                  href="mailto:kleber@ziontechgroup.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-300"
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
              Why Choose Our Security?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experience the highest level of protection with our proven security approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-4 flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cybersecurity solutions can protect your organization from evolving threats
            </p>
            <motion.a
              href="mailto:kleber@ziontechgroup.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Get Protected</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}