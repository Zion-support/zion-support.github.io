import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  Database, 
  Server, 
  Cpu, 
  Globe, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  DollarSign, 
  Users, 
  Target, 
  TrendingUp, 
  Award, 
  Heart, 
  Building, 
  Rocket, 
  Lightbulb, 
  Handshake
} from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    title: 'AI-Powered IT Operations Center',
    description: 'Intelligent IT operations with AI-driven monitoring, automation, and predictive maintenance.',
    icon: Brain,
    features: [
      'AI-powered monitoring and alerting',
      'Predictive maintenance and issue resolution',
      'Automated incident response',
      'Intelligent capacity planning',
      'Performance optimization',
      'Cost optimization and resource management'
    ],
    benefits: [
      '99.9% uptime guarantee',
      '50% reduction in downtime',
      '30% cost savings',
      'Improved system reliability'
    ],
    marketPrice: '$15,000 - $50,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Enterprise IT, Managed Service Providers, Cloud Providers'
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    description: 'Comprehensive cloud solutions with automated deployment, monitoring, and scaling.',
    icon: Cloud,
    features: [
      'Multi-cloud architecture design',
      'Infrastructure as Code (IaC)',
      'CI/CD pipeline automation',
      'Container orchestration',
      'Auto-scaling and load balancing',
      'Disaster recovery and backup'
    ],
    benefits: [
      'Faster deployment cycles',
      'Improved scalability',
      'Reduced operational costs',
      'Enhanced security'
    ],
    marketPrice: '$10,000 - $40,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Startups, SMBs, Enterprise'
  },
  {
    title: 'Cybersecurity & Compliance',
    description: 'Comprehensive security solutions including threat detection, compliance, and incident response.',
    icon: Shield,
    features: [
      'Zero Trust security architecture',
      'Endpoint Detection and Response (EDR)',
      'Security Operations Center (SOC)',
      'Vulnerability assessment',
      'Compliance management',
      'Security awareness training'
    ],
    benefits: [
      'Enhanced security posture',
      'Reduced security incidents',
      'Compliance with regulations',
      '24/7 security monitoring'
    ],
    marketPrice: '$8,000 - $30,000/month',
    setupTime: '4-10 weeks',
    targetUsers: 'Financial Services, Healthcare, Government, Enterprise'
  },
  {
    title: 'Database & Data Management',
    description: 'Advanced database solutions with optimization, migration, and data analytics capabilities.',
    icon: Database,
    features: [
      'Database design and optimization',
      'Data migration and consolidation',
      'Real-time data processing',
      'Data warehousing and analytics',
      'Backup and recovery solutions',
      'Performance tuning and monitoring'
    ],
    benefits: [
      'Improved data performance',
      'Reduced data storage costs',
      'Enhanced data security',
      'Better business insights'
    ],
    marketPrice: '$5,000 - $25,000/month',
    setupTime: '3-8 weeks',
    targetUsers: 'E-commerce, Analytics Companies, Enterprise'
  },
  {
    title: 'Network Infrastructure',
    description: 'Robust network solutions with high availability, security, and performance optimization.',
    icon: Globe,
    features: [
      'Network design and implementation',
      'SD-WAN and hybrid cloud connectivity',
      'Network security and monitoring',
      'Load balancing and traffic management',
      'Disaster recovery networking',
      'Performance optimization'
    ],
    benefits: [
      'Improved network performance',
      'Enhanced security',
      'Reduced downtime',
      'Cost-effective solutions'
    ],
    marketPrice: '$3,000 - $15,000/month',
    setupTime: '2-6 weeks',
    targetUsers: 'Enterprise, Educational Institutions, Healthcare'
  },
  {
    title: 'IT Service Management (ITSM)',
    description: 'Comprehensive IT service management with ticketing, asset management, and process automation.',
    icon: Server,
    features: [
      'ITIL-compliant service management',
      'Automated ticketing and workflow',
      'Asset and configuration management',
      'Change and release management',
      'Service level management',
      'Knowledge management system'
    ],
    benefits: [
      'Improved service delivery',
      'Process standardization',
      'Better visibility',
      'Cost optimization'
    ],
    marketPrice: '$6,000 - $20,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Enterprise, Managed Service Providers, Government'
  }
];

export default function ITServicesPage() {
  return (
    <Layout 
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including AI operations, cloud infrastructure, cybersecurity, and database management. Transform your technology infrastructure with our expert solutions."
    >
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
                Comprehensive IT services to transform your technology infrastructure. 
                From AI-powered operations to cloud solutions and cybersecurity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  href="/pricing" 
                  className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to meet your business needs and drive digital transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                        <span>Pricing</span>
                        <span className="font-semibold text-gray-900">{service.marketPrice}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                        <span>Setup Time</span>
                        <span className="font-semibold text-gray-900">{service.setupTime}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Target Users:</span> {service.targetUsers}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link 
                      href="/contact" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center block"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let our experts help you build a robust, scalable, and secure IT environment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/pricing" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}