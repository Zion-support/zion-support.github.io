import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Server, 
  Cloud, 
  Shield, 
  Database, 
  Cpu, 
  Network, 
  Smartphone, 
  Monitor, 
  HardDrive, 
  Wifi, 
  Lock, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Phone, 
  MapPin,
  ShoppingCart
} from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud infrastructure setup, migration, and optimization services.',
    icon: Cloud,
    features: ['Cloud Migration', 'Auto-scaling', 'Cost Optimization', 'Security Hardening'],
    pricing: '$5,000 - $50,000/setup',
    category: 'Cloud',
    popular: true
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Advanced security solutions to protect your digital assets and data.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
    pricing: '$10,000 - $100,000/setup',
    category: 'Security',
    popular: true
  },
  {
    title: 'Database Management',
    description: 'Expert database design, optimization, and maintenance services.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'],
    pricing: '$3,000 - $30,000/setup',
    category: 'Database',
    popular: false
  },
  {
    title: 'Network Infrastructure',
    description: 'Complete network design, implementation, and management solutions.',
    icon: Network,
    features: ['Network Design', 'VPN Setup', 'Load Balancing', 'Monitoring'],
    pricing: '$8,000 - $80,000/setup',
    category: 'Network',
    popular: false
  },
  {
    title: 'Server Management',
    description: 'Comprehensive server setup, configuration, and ongoing management.',
    icon: Server,
    features: ['Server Setup', 'OS Configuration', 'Performance Monitoring', 'Maintenance'],
    pricing: '$2,000 - $20,000/month',
    category: 'Infrastructure',
    popular: true
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile application development services.',
    icon: Smartphone,
    features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Deployment'],
    pricing: '$15,000 - $150,000/project',
    category: 'Development',
    popular: false
  },
  {
    title: 'Desktop Application Development',
    description: 'Custom desktop applications for Windows, macOS, and Linux.',
    icon: Monitor,
    features: ['Windows Apps', 'macOS Apps', 'Linux Apps', 'Cross-platform'],
    pricing: '$20,000 - $200,000/project',
    category: 'Development',
    popular: false
  },
  {
    title: 'Data Storage Solutions',
    description: 'Scalable and secure data storage solutions for any business size.',
    icon: HardDrive,
    features: ['Cloud Storage', 'On-premise Storage', 'Backup Solutions', 'Data Archiving'],
    pricing: '$1,000 - $10,000/month',
    category: 'Storage',
    popular: false
  },
  {
    title: 'Wireless Solutions',
    description: 'Complete wireless network setup and management services.',
    icon: Wifi,
    features: ['WiFi Setup', 'Mesh Networks', 'Security Configuration', 'Performance Optimization'],
    pricing: '$3,000 - $30,000/setup',
    category: 'Network',
    popular: false
  },
  {
    title: 'Compliance & Governance',
    description: 'Ensure your IT infrastructure meets industry compliance standards.',
    icon: Lock,
    features: ['SOC 2 Compliance', 'GDPR Compliance', 'HIPAA Compliance', 'Audit Support'],
    pricing: '$25,000 - $250,000/project',
    category: 'Compliance',
    popular: true
  },
  {
    title: 'AI-Powered IT Operations (AIOps)',
    description: 'Intelligent IT operations using AI and machine learning for predictive maintenance and automation.',
    icon: Cpu,
    features: ['Predictive Analytics', 'Automated Incident Response', 'Anomaly Detection', 'Self-healing Systems'],
    pricing: '$15,000 - $75,000/setup',
    category: 'AIOps',
    popular: true
  },
  {
    title: 'Quantum Computing Solutions',
    description: 'Quantum computing solutions and hybrid classical-quantum systems.',
    icon: Cpu,
    features: ['Quantum Algorithm Development', 'Hybrid Systems', 'Quantum Security', 'Performance Optimization'],
    pricing: '$50,000 - $250,000/project',
    category: 'Quantum',
    popular: false
  }
];

const technologies = [
  { name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
  { name: 'Operating Systems', icon: Monitor, description: 'Windows, Linux, macOS, Unix' },
  { name: 'Databases', icon: Database, description: 'MySQL, PostgreSQL, MongoDB, Redis' },
  { name: 'Security Tools', icon: Shield, description: 'Firewalls, VPNs, Encryption, SIEM' },
  { name: 'Monitoring', icon: Zap, description: 'Nagios, Zabbix, Prometheus, Grafana' },
  { name: 'Virtualization', icon: Server, description: 'VMware, Hyper-V, Docker, Kubernetes' }
];

const industries = [
  {
    name: 'Healthcare',
    description: 'HIPAA-compliant IT solutions for healthcare organizations',
    icon: Shield
  },
  {
    name: 'Finance',
    description: 'Secure and compliant IT infrastructure for financial services',
    icon: Lock
  },
  {
    name: 'Manufacturing',
    description: 'Industrial IT solutions and automation systems',
    icon: Cpu
  },
  {
    name: 'Education',
    description: 'Educational technology and campus IT solutions',
    icon: Monitor
  },
  {
    name: 'Retail',
    description: 'E-commerce and retail IT infrastructure solutions',
    icon: ShoppingCart
  },
  {
    name: 'Government',
    description: 'Secure government IT solutions and compliance',
    icon: Shield
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '200+', label: 'Happy Clients' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' }
];

export default function ITServicesPage() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud infrastructure, cybersecurity, database management, and custom development solutions."
      keywords="IT services, cloud infrastructure, cybersecurity, database management, network solutions, custom development"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Comprehensive IT solutions to power your business with cutting-edge technology, 
              robust security, and scalable infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                View Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-100 font-semibold rounded-lg hover:border-blue-300 hover:text-white transition-all duration-200"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our IT Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              From cloud infrastructure to cybersecurity, we provide comprehensive IT solutions 
              tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              We work with the latest and most reliable technologies to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              We have experience working with organizations across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our expert team help you build a robust, secure, and scalable IT infrastructure 
              that grows with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}