import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Monitor, 
  Settings, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Award, 
  Star, 
  Zap, 
  TrendingUp, 
  Users, 
  Lock, 
  Globe, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Smartphone, 
  Laptop, 
  Building, 
  BarChart3, 
  Code, 
  Search, 
  ShoppingCart, 
  BookOpen, 
  Brain, 
  DollarSign, 
  Rocket 
} from 'lucide-react';

const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud infrastructure setup, management, and optimization services',
    icon: Cloud,
    features: ['AWS/Azure/GCP Setup', 'Server Management', 'Auto-scaling', 'Cost Optimization'],
    pricing: '$2,000 - $10,000/month',
    category: 'Cloud Computing',
    popular: true,
    benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced security', '24/7 monitoring'],
    marketPrice: '$5,000/month',
    link: '/contact'
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Advanced cybersecurity services to protect your business from threats',
    icon: Shield,
    features: ['Threat Detection', 'Security Audits', 'Penetration Testing', 'Compliance'],
    pricing: '$1,500 - $8,000/month',
    category: 'Security',
    popular: true,
    benefits: ['Protection from cyber threats', 'Compliance with regulations', 'Peace of mind', 'Expert support'],
    marketPrice: '$4,000/month',
    link: '/contact'
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implementation, and management of enterprise network infrastructure',
    icon: Network,
    features: ['Network Design', 'Router Configuration', 'Switch Management', 'VPN Setup'],
    pricing: '$1,000 - $5,000/month',
    category: 'Networking',
    popular: false,
    benefits: ['Improved connectivity', 'Better performance', 'Enhanced security', 'Reliable network'],
    marketPrice: '$2,500/month',
    link: '/contact'
  },
  {
    title: 'Database Management',
    description: 'Comprehensive database administration and optimization services',
    icon: Database,
    features: ['Database Setup', 'Performance Tuning', 'Backup & Recovery', 'Security'],
    pricing: '$800 - $4,000/month',
    category: 'Database',
    popular: false,
    benefits: ['Optimized performance', 'Data security', 'Reliable backups', 'Expert management'],
    marketPrice: '$2,000/month',
    link: '/contact'
  },
  {
    title: 'System Administration',
    description: 'Complete system administration and maintenance services',
    icon: Settings,
    features: ['Server Maintenance', 'User Management', 'System Updates', 'Monitoring'],
    pricing: '$1,200 - $6,000/month',
    category: 'System Admin',
    popular: true,
    benefits: ['Reduced downtime', 'Improved performance', 'Proactive maintenance', 'Expert support'],
    marketPrice: '$3,000/month',
    link: '/contact'
  },
  {
    title: 'DevOps & CI/CD',
    description: 'DevOps implementation and continuous integration/deployment pipelines',
    icon: Code,
    features: ['CI/CD Pipelines', 'Docker Containers', 'Kubernetes', 'Monitoring'],
    pricing: '$2,500 - $12,000/month',
    category: 'DevOps',
    popular: true,
    benefits: ['Faster deployments', 'Improved reliability', 'Better collaboration', 'Automated processes'],
    marketPrice: '$6,000/month',
    link: '/contact'
  },
  {
    title: 'Data Center Migration',
    description: 'Seamless migration of your infrastructure to modern data centers',
    icon: Building,
    features: ['Migration Planning', 'Data Transfer', 'Testing', 'Go-live Support'],
    pricing: '$5,000 - $25,000/project',
    category: 'Migration',
    popular: false,
    benefits: ['Reduced costs', 'Improved performance', 'Better security', 'Modern infrastructure'],
    marketPrice: '$15,000/project',
    link: '/contact'
  },
  {
    title: 'IT Consulting',
    description: 'Strategic IT consulting to help optimize your technology infrastructure',
    icon: Brain,
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation'],
    pricing: '$150 - $300/hour',
    category: 'Consulting',
    popular: false,
    benefits: ['Expert guidance', 'Cost optimization', 'Technology roadmap', 'Best practices'],
    marketPrice: '$200/hour',
    link: '/contact'
  }
];

const industries = [
  { name: 'Healthcare', icon: Building, description: 'IT solutions for healthcare providers' },
  { name: 'Finance', icon: DollarSign, description: 'Secure IT infrastructure for financial services' },
  { name: 'Manufacturing', icon: Settings, description: 'Industrial IT solutions and automation' },
  { name: 'Retail', icon: ShoppingCart, description: 'E-commerce and retail IT solutions' },
  { name: 'Education', icon: BookOpen, description: 'Educational technology and IT services' },
  { name: 'Government', icon: Globe, description: 'Secure government IT solutions' }
];

export default function ITServices() {
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and system administration. Transform your business with our expert IT solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive IT services to keep your business running smoothly. From cloud infrastructure 
                to cybersecurity, we provide the technology solutions you need.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/micro-saas"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Micro SaaS
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    {service.popular && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Starting at</span>
                      <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Market Price</span>
                      <span className="text-sm text-gray-600">{service.marketPrice}</span>
                    </div>
                    <Link
                      href={service.link}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our IT solutions are tailored for various industries and use cases.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can help you achieve your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}