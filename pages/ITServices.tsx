import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  CheckCircle, 
  ArrowRight,
  Network,
  Headphones,
  Code,
  Users,
  HardDrive,
  Smartphone,
  Package,
  Phone,
  MapPin,
  Mail as MailIcon
} from 'lucide-react';

const itServices = [
  {
    title: 'Cloud Infrastructure & Migration',
    description: 'Comprehensive cloud solutions including migration, optimization, and management across AWS, Azure, and Google Cloud.',
    icon: Cloud,
    features: [
      'Multi-cloud architecture design',
      'Cloud migration and modernization',
      'Cost optimization and monitoring',
      'Auto-scaling and load balancing',
      'Disaster recovery planning',
      '24/7 cloud monitoring'
    ],
    pricing: '$1,500 - $5,000/month',
    category: 'Cloud Services',
    popular: true,
    marketPrice: '$2,500 - $8,000/month',
    benefits: [
      'Reduce infrastructure costs by 30%',
      'Improve scalability and performance',
      'Enhanced security and compliance',
      'Automated backup and recovery'
    ]
  },
  {
    title: 'Advanced Cybersecurity Solutions',
    description: 'Comprehensive security services including threat detection, incident response, and compliance management.',
    icon: Shield,
    features: [
      'Security assessment and auditing',
      'Penetration testing and vulnerability scanning',
      'Zero-trust architecture implementation',
      'Threat detection and response',
      'Compliance management (SOC2, GDPR, HIPAA)',
      'Security awareness training'
    ],
    pricing: '$2,000 - $8,000/month',
    category: 'Cybersecurity',
    popular: true,
    marketPrice: '$3,500 - $12,000/month',
    benefits: [
      'Protect against 99.9% of cyber threats',
      'Reduce security incidents by 85%',
      'Ensure regulatory compliance',
      '24/7 security monitoring'
    ]
  },
  {
    title: 'Database Management & Optimization',
    description: 'Expert database administration, optimization, and migration services for all major database platforms.',
    icon: Database,
    features: [
      'Database performance tuning',
      'Backup and disaster recovery',
      'Data migration and consolidation',
      'Query optimization',
      'Database security hardening',
      'Monitoring and maintenance'
    ],
    pricing: '$1,000 - $4,000/month',
    category: 'Database Services',
    popular: true,
    marketPrice: '$1,800 - $6,000/month',
    benefits: [
      'Improve database performance by 60%',
      'Reduce downtime by 90%',
      'Automated backup and recovery',
      'Expert database administration'
    ]
  },
  {
    title: 'Network Infrastructure & Security',
    description: 'Complete network design, implementation, and security services for enterprise environments.',
    icon: Network,
    features: [
      'Network design and architecture',
      'Firewall configuration and management',
      'VPN and remote access solutions',
      'Network monitoring and optimization',
      'Wireless network deployment',
      'Network security assessment'
    ],
    pricing: '$1,200 - $4,500/month',
    category: 'Network Services',
    popular: true,
    marketPrice: '$2,000 - $7,000/month',
    benefits: [
      'Improve network performance by 50%',
      'Enhanced security and monitoring',
      'Reduced network downtime',
      'Scalable network architecture'
    ]
  },
  {
    title: 'IT Support & Help Desk',
    description: 'Comprehensive IT support services including help desk, technical support, and user training.',
    icon: Headphones,
    features: [
      '24/7 technical support',
      'Remote desktop assistance',
      'Software installation and updates',
      'Hardware troubleshooting',
      'User training and onboarding',
      'IT asset management'
    ],
    pricing: '$800 - $3,000/month',
    category: 'IT Support',
    popular: true,
    marketPrice: '$1,500 - $5,000/month',
    benefits: [
      'Reduce IT support tickets by 70%',
      'Faster issue resolution',
      'Improved user productivity',
      'Proactive system maintenance'
    ]
  },
  {
    title: 'DevOps & CI/CD Implementation',
    description: 'Modern DevOps practices including continuous integration, deployment automation, and infrastructure as code.',
    icon: Code,
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as Code (IaC)',
      'Container orchestration (Kubernetes)',
      'Automated testing and deployment',
      'Monitoring and logging solutions',
      'DevOps culture transformation'
    ],
    pricing: '$2,500 - $6,000/month',
    category: 'DevOps',
    popular: true,
    marketPrice: '$4,000 - $10,000/month',
    benefits: [
      'Reduce deployment time by 80%',
      'Improve code quality and reliability',
      'Faster time to market',
      'Automated testing and deployment'
    ]
  },
  {
    title: 'Data Center Services',
    description: 'Complete data center solutions including colocation, managed hosting, and disaster recovery.',
    icon: Server,
    features: [
      'Data center colocation',
      'Managed hosting services',
      'Disaster recovery solutions',
      'Power and cooling management',
      'Physical security monitoring',
      'Compliance and certification'
    ],
    pricing: '$3,000 - $10,000/month',
    category: 'Data Center',
    popular: true,
    marketPrice: '$5,000 - $15,000/month',
    benefits: [
      '99.99% uptime guarantee',
      'Enhanced security and compliance',
      'Scalable infrastructure',
      'Expert data center management'
    ]
  },
  {
    title: 'IT Consulting & Strategy',
    description: 'Strategic IT consulting services to align technology with business objectives and digital transformation.',
    icon: Users,
    features: [
      'IT strategy and planning',
      'Technology assessment and recommendations',
      'Digital transformation consulting',
      'IT governance and compliance',
      'Vendor management and procurement',
      'IT budget planning and optimization'
    ],
    pricing: '$150 - $300/hour',
    category: 'IT Consulting',
    popular: true,
    marketPrice: '$200 - $500/hour',
    benefits: [
      'Align IT with business goals',
      'Optimize IT investments',
      'Reduce technology risks',
      'Strategic technology roadmap'
    ]
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Comprehensive backup and disaster recovery solutions to protect your critical business data.',
    icon: HardDrive,
    features: [
      'Automated backup solutions',
      'Disaster recovery planning',
      'Business continuity testing',
      'Data replication and synchronization',
      'Recovery time optimization',
      'Compliance and audit support'
    ],
    pricing: '$500 - $2,500/month',
    category: 'Backup & Recovery',
    popular: true,
    marketPrice: '$800 - $4,000/month',
    benefits: [
      'Minimize data loss risk',
      'Faster recovery times',
      'Automated backup processes',
      'Compliance with regulations'
    ]
  },
  {
    title: 'IT Security Training & Awareness',
    description: 'Comprehensive security training programs to educate employees and reduce security risks.',
    icon: Shield,
    features: [
      'Security awareness training',
      'Phishing simulation and testing',
      'Compliance training programs',
      'Security policy development',
      'Incident response training',
      'Regular security assessments'
    ],
    pricing: '$200 - $800/month',
    category: 'Security Training',
    popular: true,
    marketPrice: '$400 - $1,200/month',
    benefits: [
      'Reduce human error by 60%',
      'Improve security awareness',
      'Compliance with regulations',
      'Reduced security incidents'
    ]
  },
  {
    title: 'Mobile Device Management',
    description: 'Complete mobile device management solutions for secure and efficient mobile workforce management.',
    icon: Smartphone,
    features: [
      'Mobile device enrollment and provisioning',
      'App management and distribution',
      'Security policy enforcement',
      'Remote device management',
      'Lost device tracking and wiping',
      'Compliance monitoring and reporting'
    ],
    pricing: '$300 - $1,200/month',
    category: 'Mobile Management',
    popular: true,
    marketPrice: '$500 - $2,000/month',
    benefits: [
      'Enhanced mobile security',
      'Simplified device management',
      'Improved productivity',
      'Compliance with mobile policies'
    ]
  },
  {
    title: 'IT Asset Management',
    description: 'Comprehensive IT asset lifecycle management including procurement, deployment, and disposal.',
    icon: Package,
    features: [
      'Asset inventory and tracking',
      'Software license management',
      'Hardware lifecycle management',
      'Procurement and vendor management',
      'Asset disposal and recycling',
      'Cost optimization and reporting'
    ],
    pricing: '$400 - $1,500/month',
    category: 'Asset Management',
    popular: true,
    marketPrice: '$700 - $2,500/month',
    benefits: [
      'Reduce IT costs by 25%',
      'Improve asset visibility',
      'Ensure compliance',
      'Optimize asset utilization'
    ]
  }
];

const stats = [
  { number: "500+", label: "IT Projects Completed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" }
];

const categories = [...new Set(itServices.map(service => service.category))];

export default function ITServices() {
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group | 70+ Comprehensive IT Solutions</title>
        <meta name="description" content="Discover 70+ comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, database management, and technical support. Competitive pricing starting at $200/month." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, DevOps, database management, technical support, IT consulting, Zion Tech Group" />
      </Head>

      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              70+ Comprehensive IT Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive IT solutions to keep your business running smoothly, securely, and efficiently.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg text-gray-300 mb-4">Contact Information</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <MailIcon className="w-5 h-5 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose from 70+ comprehensive IT services across multiple categories, all designed to support your business technology needs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  {service.popular && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500 ml-7">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Our Pricing:</span>
                    <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Market Average:</span>
                    <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link href="/contact" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium text-center transition-colors">
                    Get Started
                  </Link>
                  <Link href="/quote" className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium text-center transition-colors">
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive IT solutions that are reliable, secure, and designed to meet your specific business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with years of experience in enterprise IT solutions.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security with comprehensive protection and compliance.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">Flexible IT infrastructure that grows with your business needs.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support to ensure your systems run smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Contact us today for a free consultation and discover how our IT services can optimize your technology infrastructure and drive business growth.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600">+1 302 464 0950</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MailIcon className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">kleber@ziontechgroup.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Address</p>
                        <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link href="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors">
                      Request Free Consultation
                    </Link>
                    <Link href="/quote" className="block w-full border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-center transition-colors">
                      Get Custom Quote
                    </Link>
                    <a href="tel:+13024640950" className="block w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors">
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}