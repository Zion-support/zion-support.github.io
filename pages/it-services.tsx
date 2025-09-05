import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Shield, 
  Database, 
  Network, 
  Monitor, 
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Server,
  Settings,
  Lock,
  Zap,
  Users,
  Globe,
  Wrench as WrenchIcon,
  Cog as CogIcon,
  Layers as LayersIcon,
  GitBranch as GitBranchIcon,
  Terminal as TerminalIcon
} from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    title: 'Cloud Migration & Management',
    description: 'Seamless migration to cloud platforms with ongoing management and optimization.',
    icon: Cloud,
    features: ['AWS/Azure/GCP Migration', 'Cost Optimization', 'Security Implementation', '24/7 Monitoring'],
    pricing: '$5,000 - $50,000 project',
    category: 'Cloud Services',
    popular: true,
    benefits: ['Reduced Infrastructure Costs', 'Improved Scalability', 'Enhanced Security', 'Better Performance']
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security measures to protect your digital assets and ensure compliance.',
    icon: Shield,
    features: ['Security Assessment', 'Threat Detection', 'Compliance Management', 'Incident Response'],
    pricing: '$3,000 - $25,000/month',
    category: 'Security',
    popular: true,
    benefits: ['Enhanced Security', 'Compliance Assurance', 'Risk Mitigation', 'Peace of Mind']
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implement, and maintain robust network infrastructure for optimal performance.',
    icon: Network,
    features: ['Network Design', 'Hardware Installation', 'Configuration', 'Monitoring'],
    pricing: '$2,000 - $15,000 project',
    category: 'Infrastructure',
    popular: false,
    benefits: ['Reliable Connectivity', 'Improved Performance', 'Scalable Architecture', 'Reduced Downtime']
  },
  {
    title: 'Database Management',
    description: 'Expert database administration and optimization for peak performance and security.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
    pricing: '$1,500 - $12,000/month',
    category: 'Data Management',
    popular: false,
    benefits: ['Optimized Performance', 'Data Protection', 'Compliance', 'Reduced Downtime']
  },
  {
    title: 'IT Support & Helpdesk',
    description: '24/7 technical support and helpdesk services to keep your business running smoothly.',
    icon: Monitor,
    features: ['24/7 Support', 'Remote Assistance', 'Issue Resolution', 'User Training'],
    pricing: '$500 - $5,000/month',
    category: 'Support',
    popular: true,
    benefits: ['Minimized Downtime', 'Quick Resolution', 'User Satisfaction', 'Proactive Support']
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Streamline development and deployment processes with modern DevOps practices.',
    icon: GitBranchIcon,
    features: ['CI/CD Pipelines', 'Automated Testing', 'Deployment Automation', 'Monitoring'],
    pricing: '$3,000 - $20,000 project',
    category: 'DevOps',
    popular: false,
    benefits: ['Faster Deployments', 'Reduced Errors', 'Better Collaboration', 'Improved Quality']
  },
  {
    title: 'AI-Powered IT Automation',
    description: 'Intelligent automation solutions for IT operations and infrastructure management.',
    icon: Zap,
    features: ['Process Automation', 'Predictive Maintenance', 'Anomaly Detection', 'Self-Healing Systems'],
    pricing: '$8,000 - $40,000/setup',
    category: 'AI & Automation',
    popular: true,
    benefits: ['Reduced Manual Work', 'Proactive Issue Resolution', 'Cost Savings', 'Improved Reliability']
  },
  {
    title: 'Quantum Computing Integration',
    description: 'Cutting-edge quantum computing solutions for complex problem solving and optimization.',
    icon: CogIcon,
    features: ['Quantum Algorithm Development', 'Hybrid Classical-Quantum Systems', 'Optimization Problems', 'Research & Development'],
    pricing: '$50,000 - $500,000/project',
    category: 'Quantum Computing',
    popular: true,
    benefits: ['Exponential Speedup', 'Complex Problem Solving', 'Competitive Advantage', 'Future-Proof Technology']
  },
  {
    title: 'Edge Computing Solutions',
    description: 'Distributed computing infrastructure for real-time processing and reduced latency.',
    icon: LayersIcon,
    features: ['Edge Server Deployment', 'IoT Integration', 'Real-time Processing', 'Data Synchronization'],
    pricing: '$10,000 - $75,000/project',
    category: 'Edge Computing',
    popular: true,
    benefits: ['Reduced Latency', 'Improved Performance', 'Bandwidth Optimization', 'Real-time Analytics']
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Secure blockchain networks and smart contract development for enterprise applications.',
    icon: Lock,
    features: ['Blockchain Development', 'Smart Contracts', 'Consensus Mechanisms', 'Security Audits'],
    pricing: '$15,000 - $100,000/project',
    category: 'Blockchain',
    popular: true,
    benefits: ['Enhanced Security', 'Transparency', 'Decentralization', 'Immutable Records']
  },
  {
    title: '5G Network Implementation',
    description: 'Next-generation 5G network deployment and optimization for ultra-fast connectivity.',
    icon: Network,
    features: ['5G Infrastructure', 'Network Optimization', 'IoT Connectivity', 'Performance Monitoring'],
    pricing: '$25,000 - $200,000/project',
    category: '5G Networks',
    popular: true,
    benefits: ['Ultra-Fast Speeds', 'Low Latency', 'Massive IoT Support', 'Future-Ready Infrastructure']
  },
  {
    title: 'IoT Platform Development',
    description: 'Comprehensive IoT solutions for connected devices and smart systems.',
    icon: Settings,
    features: ['Device Management', 'Data Collection', 'Real-time Analytics', 'Integration APIs'],
    pricing: '$12,000 - $80,000/project',
    category: 'IoT',
    popular: true,
    benefits: ['Connected Systems', 'Data Insights', 'Automation', 'Operational Efficiency']
  },
  {
    title: 'AR/VR Technology Solutions',
    description: 'Immersive augmented and virtual reality applications for business and training.',
    icon: Monitor,
    features: ['AR/VR Development', '3D Modeling', 'Interactive Experiences', 'Hardware Integration'],
    pricing: '$20,000 - $150,000/project',
    category: 'AR/VR',
    popular: true,
    benefits: ['Immersive Experiences', 'Enhanced Training', 'Remote Collaboration', 'Innovative Solutions']
  },
  {
    title: 'Machine Learning Infrastructure',
    description: 'Scalable ML infrastructure and model deployment for AI applications.',
    icon: Server,
    features: ['ML Pipeline Setup', 'Model Training', 'Deployment Automation', 'Monitoring & Scaling'],
    pricing: '$18,000 - $120,000/project',
    category: 'Machine Learning',
    popular: true,
    benefits: ['Scalable AI', 'Automated ML', 'Better Performance', 'Cost Optimization']
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Comprehensive zero trust security model implementation for maximum protection.',
    icon: Shield,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Detection'],
    pricing: '$25,000 - $150,000/setup',
    category: 'Security',
    popular: true,
    benefits: ['Enhanced Security', 'Reduced Risk', 'Compliance', 'Trust Verification']
  },
  {
    title: 'Green IT Solutions',
    description: 'Sustainable and energy-efficient IT infrastructure and practices.',
    icon: Globe,
    features: ['Energy Optimization', 'Carbon Footprint Reduction', 'Sustainable Hardware', 'Green Data Centers'],
    pricing: '$15,000 - $100,000/project',
    category: 'Sustainability',
    popular: false,
    benefits: ['Environmental Impact', 'Cost Savings', 'Compliance', 'Corporate Responsibility']
  },
  {
    title: 'Disaster Recovery & Business Continuity',
    description: 'Comprehensive disaster recovery and business continuity planning and implementation.',
    icon: CheckCircle,
    features: ['Backup Strategies', 'Recovery Testing', 'Business Continuity Planning', 'RTO/RPO Optimization'],
    pricing: '$10,000 - $75,000/setup',
    category: 'Disaster Recovery',
    popular: true,
    benefits: ['Business Protection', 'Minimal Downtime', 'Data Safety', 'Compliance']
  },
  {
    title: 'IT Governance & Compliance',
    description: 'Comprehensive IT governance framework and compliance management.',
    icon: Settings,
    features: ['Policy Development', 'Compliance Monitoring', 'Risk Assessment', 'Audit Support'],
    pricing: '$5,000 - $35,000/month',
    category: 'Governance',
    popular: false,
    benefits: ['Regulatory Compliance', 'Risk Management', 'Policy Enforcement', 'Audit Readiness']
  },
  {
    title: 'Hybrid Cloud Management',
    description: 'Seamless management of hybrid cloud environments across multiple platforms.',
    icon: Cloud,
    features: ['Multi-Cloud Orchestration', 'Cost Optimization', 'Security Management', 'Performance Monitoring'],
    pricing: '$8,000 - $60,000/setup',
    category: 'Cloud Services',
    popular: true,
    benefits: ['Flexibility', 'Cost Optimization', 'Vendor Independence', 'Scalability']
  },
  {
    title: 'API Management & Integration',
    description: 'Comprehensive API lifecycle management and system integration services.',
    icon: GitBranchIcon,
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Monitoring & Analytics'],
    pricing: '$6,000 - $45,000/setup',
    category: 'Integration',
    popular: true,
    benefits: ['Seamless Integration', 'API Security', 'Performance Optimization', 'Developer Experience']
  },
  {
    title: 'IT Asset Management',
    description: 'Complete lifecycle management of IT assets and resources.',
    icon: Monitor,
    features: ['Asset Discovery', 'License Management', 'Lifecycle Tracking', 'Cost Optimization'],
    pricing: '$3,000 - $25,000/setup',
    category: 'Asset Management',
    popular: false,
    benefits: ['Cost Control', 'Compliance', 'Asset Optimization', 'Risk Reduction']
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Strategic guidance for digital transformation initiatives and technology adoption.',
    icon: Users,
    features: ['Strategy Development', 'Technology Roadmap', 'Change Management', 'Implementation Support'],
    pricing: '$10,000 - $100,000/project',
    category: 'Consulting',
    popular: true,
    benefits: ['Strategic Alignment', 'Technology Adoption', 'Change Management', 'Competitive Advantage']
  },
  {
    title: 'IT Training & Certification',
    description: 'Comprehensive IT training programs and certification preparation for teams.',
    icon: Users,
    features: ['Custom Training Programs', 'Certification Prep', 'Hands-on Labs', 'Progress Tracking'],
    pricing: '$2,000 - $15,000/program',
    category: 'Training',
    popular: false,
    benefits: ['Skill Development', 'Certification', 'Team Productivity', 'Knowledge Retention']
  },
  {
    title: 'IT Performance Optimization',
    description: 'Comprehensive performance analysis and optimization for IT systems and applications.',
    icon: Zap,
    features: ['Performance Analysis', 'Bottleneck Identification', 'Optimization Implementation', 'Monitoring'],
    pricing: '$5,000 - $40,000/project',
    category: 'Performance',
    popular: true,
    benefits: ['Improved Performance', 'Better User Experience', 'Cost Optimization', 'System Reliability']
  }
];

const categories = [
  'All Services',
  'Cloud Services',
  'Security',
  'Infrastructure',
  'Data Management',
  'Support',
  'DevOps',
  'AI & Automation',
  'Quantum Computing',
  'Edge Computing',
  'Blockchain',
  '5G Networks',
  'IoT',
  'AR/VR',
  'Machine Learning',
  'Sustainability',
  'Disaster Recovery',
  'Governance',
  'Integration',
  'Asset Management',
  'Consulting',
  'Training',
  'Performance'
];

const industries = [
  {
    name: "Healthcare",
    description: "HIPAA-compliant solutions for healthcare organizations",
    icon: Users
  },
  {
    name: "Finance",
    description: "Secure, compliant solutions for financial services",
    icon: Shield
  },
  {
    name: "Manufacturing",
    description: "IoT and automation solutions for manufacturing",
    icon: Settings
  },
  {
    name: "Retail",
    description: "E-commerce and retail technology solutions",
    icon: Globe
  }
];

const benefits = [
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring"
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Comprehensive security measures and compliance"
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of successful implementations"
  }
];

export default function ITServicesPage() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud migration, cybersecurity, network infrastructure, and 24/7 support. Expert team delivering reliable technology solutions."
      keywords="IT services, cloud migration, cybersecurity, network infrastructure, IT support, DevOps, database management"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                IT Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions to power your digital transformation. 
                From cloud migration to cybersecurity, we've got you covered.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#services"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From cloud migration to cybersecurity, we provide comprehensive IT solutions 
                tailored to your business needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {service.pricing}
                    </div>
                    <a
                      href="/contact"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors block"
                    >
                      Get Started
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver reliable, secure, and scalable IT solutions that drive business growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We have experience across various industries and understand the unique 
                challenges each sector faces.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let our expert team help you build a robust, secure, and scalable IT environment 
                that supports your business goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}