import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Code,
  Database,
  Lock,
  Cpu,
  Globe,
  BarChart3
} from 'lucide-react';

const EnhancedServicesShowcase = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      icon: <Brain className="w-8 h-8 text-white" />,
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Custom AI model development',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics',
        'AI strategy consulting',
        'Model optimization & deployment'
      ],
      benefits: [
        'Automated decision making',
        'Enhanced customer experience',
        'Improved operational efficiency',
        'Data-driven insights'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'AWS SageMaker'],
      href: '/services/ai'
    },
    {
      id: 'cloud',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions tailored to your business needs.',
      icon: <Cloud className="w-8 h-8 text-white" />,
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Multi-cloud architecture design',
        'Container orchestration',
        'Serverless computing',
        'Database migration',
        'Disaster recovery planning',
        'Cost optimization'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Scalable infrastructure',
        'Reduced operational costs',
        'Enhanced security'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
      href: '/services/cloud'
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      icon: <Shield className="w-8 h-8 text-white" />,
      gradient: 'from-red-500 to-orange-500',
      features: [
        'Security assessment & auditing',
        'Penetration testing',
        'Incident response planning',
        'Compliance management',
        'Security training',
        'Threat monitoring'
      ],
      benefits: [
        'Enterprise-grade protection',
        'Regulatory compliance',
        '24/7 threat monitoring',
        'Reduced security risks'
      ],
      technologies: ['SIEM', 'SOAR', 'EDR', 'XDR', 'Zero Trust'],
      href: '/services/security'
    },
    {
      id: 'quantum',
      title: 'Quantum Computing',
      description: 'Next-generation quantum solutions for complex computational challenges and optimization.',
      icon: <Zap className="w-8 h-8 text-white" />,
      gradient: 'from-indigo-500 to-purple-500',
      features: [
        'Quantum algorithm development',
        'Quantum machine learning',
        'Optimization problems',
        'Cryptography solutions',
        'Quantum simulation',
        'Research & development'
      ],
      benefits: [
        'Exponential speed improvements',
        'Complex problem solving',
        'Future-ready technology',
        'Competitive advantage'
      ],
      technologies: ['Qiskit', 'Cirq', 'PennyLane', 'IBM Quantum', 'Google Quantum'],
      href: '/services/quantum'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Engineers' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Technology Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver comprehensive technology solutions that drive innovation and growth 
            for businesses of all sizes across various industries.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeService === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Service Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Service Info */}
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${services[activeService].gradient} rounded-xl flex items-center justify-center`}>
                      {services[activeService].icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {services[activeService].title}
                      </h3>
                      <p className="text-gray-300 text-lg">
                        {services[activeService].description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {services[activeService].features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-3 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {services[activeService].benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-3 text-gray-300">
                            <ArrowRight className="w-5 h-5 text-blue-400" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Technologies & CTA */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Technologies We Use</h4>
                    <div className="flex flex-wrap gap-2">
                      {services[activeService].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h4>
                    <p className="text-gray-300 mb-6">
                      Let's discuss how our {services[activeService].title.toLowerCase()} solutions 
                      can transform your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={services[activeService].href}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 px-6 py-3 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300 text-center"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations 
              with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase;