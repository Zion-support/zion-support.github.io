import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle, Zap, Cpu;
  Database, Globe, ArrowRight, CheckCircle, Star, Users
 } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
      icon: Shield
      title: "Quantum-Resistant Encryption"
      description: "Advanced cryptographic algorithms that remain secure even against quantum computers."
      color: "from-blue-500 to-cyan-500"
    }
      icon: Shield,
      title: "Quantum-Resistant Encryption",
      description: "Advanced cryptographic algorithms that remain secure even against quantum computers.",
      color: "from-blue-500 to-cyan-500"
};
    {
      icon: Lock
      title: "Zero-Trust Architecture"
      description: "Verify every user and device before granting access to any resource."
      color: "from-purple-500 to-pink-500"
    }
    {
      icon: Eye
      title: "AI-Powered Threat Detection"
      description: "Machine learning algorithms that identify and respond to threats in real-time."
      color: "from-green-500 to-emerald-500"
    }
    {
      icon: AlertTriangle
      title: "Advanced Threat Intelligence"
      description: "Real-time monitoring and analysis of global cyber threats and vulnerabilities."
      color: "from-red-500 to-orange-500"
    }
    {
      icon: Zap
      title: "Automated Incident Response"
      description: "Instant response and mitigation of security incidents with minimal human intervention."
      color: "from-yellow-500 to-orange-500"
    }
    {
      icon: Cpu
      title: "Secure Cloud Infrastructure"
      description: "Enterprise-grade security for cloud deployments with end-to-end encryption."
      color: "from-indigo-500 to-purple-500"
    }
  ];
  const benefits = [
export default function QuantumCybersecurityPage() {;
  const features = [;
    {;
      icon: Shield,;
      title: "Quantum-Resistant Encryption",,
  description: "Advanced cryptographic algorithms that remain secure even against quantum computers.",;
      color: "from-blue-500 to-cyan-500"
};
    {;
      icon: Lock,;
      title: "Zero-Trust Architecture",,
  description: "Verify every user and device before granting access to any resource.",;
      color: "from-purple-500 to-pink-500"
};
    {;
      icon: Eye,;
      title: "AI-Powered Threat Detection",,
  description: "Machine learning algorithms that identify and respond to threats in real-time.",;
      color: "from-green-500 to-emerald-500"
};
    {;
      icon: AlertTriangle,;
      title: "Advanced Threat Intelligence",,
  description: "Real-time monitoring and analysis of global cyber threats and vulnerabilities.",;
      color: "from-red-500 to-orange-500"
};
    {;
      icon: Zap,;
      title: "Automated Incident Response",,
  description: "Instant response and mitigation of security incidents with minimal human intervention.",;
      color: "from-yellow-500 to-orange-500"
};
    {;
      icon: Cpu,;
      title: "Secure Cloud Infrastructure",,
  description: "Enterprise-grade security for cloud deployments with end-to-end encryption.",;
      color: "from-indigo-500 to-purple-500";
    }
  ];

  return (
    <>;
      <Head>;
        <title>Quantum Cybersecurity - Zion Tech Group</title>;
        <meta name="description" content="Future-proof your security with quantum-resistant encryption and AI-powered threat detection. Protect your business against tomorrow's cyber threats today." />;
        <meta name="keywords" content="quantum cybersecurity, quantum-resistant encryption, AI threat detection, zero-trust security, cybersecurity platform, threat intelligence" />;
        <meta property="og:title" content="Quantum Cybersecurity - Zion Tech Group" />;
        <meta property="og:description" content="Future-proof your security with quantum-resistant encryption and AI-powered threat detection." />;
        <meta property="og:type" content="website" />;
        <meta property="og:url" content="https://ziontechgroup && ziontechgroup.com/quantum-cybersecurity" />;
      </Head>;

      <EnhancedNavigation />;

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        <div className="max-w-7xl mx-auto px-6">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105">;
                Secure Your Business;
              </a>;
              <a
                href="#demo"
      {/* Features */}
      <section className="py-20 bg-white">;
        <div className="max-w-7xl mx-auto px-6">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-2">;
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature && feature.color} flex items-center justify-center mb-6`}>;
                  <feature && feature.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature && feature.title}</h3>;
                <p className="text-slate-600 leading-relaxed">{feature && feature.description}</p>;
              </motion && motion.div>;
            ))}

      {/* Benefits */}
      <section className="py-20 bg-slate-50">;
        <div className="max-w-7xl mx-auto px-6">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">;
            <motion&& motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Quantum Cybersecurity?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our advanced security platform provides comprehensive protection against both current and future threats.
                Stay ahead of the curve with quantum-resistant technology.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                    className="flex items-center space-x-3">;
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />;
                    <span className="text-slate-700">{benefit}</span>;
                  </motion && motion.div>;
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-red-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white text-slate-400 text-base">{service.price}<span >{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400 w-4 h-4 mr-1"><Star />{service.rating.toFixed(1)}</div>
              </div>
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Request Security Assessment<ArrowRight /></a>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2 w-4 h-4 text-cyan-400"><Phone /><span>{service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-purple-400"><Mail /><span>{service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-green-400 text-xs"><MapPin /><span >{service.contactInfo.address}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );

export async function getServerSideProps() {
  return {
    props: {}
  };
}
}

      {/* Compliance */}
      <section className="py-20 bg-slate-900">;
        <div className="max-w-7xl mx-auto px-6">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SOC 2 Type II</h3>
              <p className="text-white/70 text-sm">Service Organization Control compliance for security, availability, and confidentiality</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">GDPR</h3>
              <p className="text-white/70 text-sm">General Data Protection Regulation compliance for EU data privacy</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ISO 27001</h3>
              <p className="text-white/70 text-sm">Information security management system certification</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">HIPAA</h3>
              <p className="text-white/70 text-sm">Health Insurance Portability and Accountability Act compliance</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className="py-20 bg-white">;
        <div className="max-w-7xl mx-auto px-6">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                className={`relative bg-slate-50 rounded-2xl p-8 ${
                  plan && plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}>;
                {plan && plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">;
                    Most Popular;
                  </div>;
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {plan.price}
                    <span className="text-lg text-slate-600">{plan.period}</span>
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan && plan.plan}</h3>;
                  <div className="text-4xl font-bold text-slate-900 mb-2">;
                    {plan && plan.price}
                    <span className="text-lg text-slate-600">{plan && plan.period}</span>;
                  </div>;
                  <p className="text-slate-600">{plan && plan.description}</p>;
                </div>;

                <ul className="space-y-4 mb-8">;
                  {plan && plan.features.map((feature) => (;
                    <li key={feature} className="flex items-center space-x-3">;
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />;
                      <span className="text-slate-700">{feature}</span>;
                    </li>;
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {plan.price}
                    <span className="text-lg text-slate-600">{plan.period}</span>
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>;
                <a
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </a>
              </motion.div>
            ))}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">;
        <div className="max-w-4xl mx-auto px-6 text-center">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.6 }}>;
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Future?</h2>;
            <p className="text-xl text-blue-100 mb-8">;
              Don't wait until it's too late. Protect your business with quantum-resistant cybersecurity today.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105">;
                Security Assessment;
              </a>;
              <a
                href="/contact"
    <>;
      <Head>;
        <title > Quantum Cybersecurity - Zion Tech Group</title>;
        <meta name="description" content="Future - proof your security with quantum - resistant encryption and AI - powered threat detection. Protect your business against tomorrow's cyber threats today." />;
        <meta name="keywords" content="quantum cybersecurity, quantum - resistant encryption, AI threat detection, zero - trust security, cybersecurity platform, threat intelligence" />;
        <meta property="og:title" content="Quantum Cybersecurity - Zion Tech Group" />;
        <meta property="og:description" content="Future - proof your security with quantum - resistant encryption and AI - powered threat detection." />;
        <meta property="og:type" content="website" />;
        <meta property="og:url" content="https://ziontechgroup.com / quantum - cybersecurity" />;
      </Head>;
      <EnhancedNavigation />;
      {/* Hero Section */}
      <section className="pt - 32 pb - 20 bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate-900">;
        <div className="max - w-7xl mx - auto px-6">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
