import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Cloud, 
  Shield, 
  Network, 
  Database, 
  Settings, 
  Users, 
  Server, 
  Smartphone, 
  Globe, 
  Lock, 
  Zap, 
  BarChart3, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Monitor, 
  Smartphone as Mobile, 
  Building, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  TrendingUp,
  Award,
  Target,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Globe2,
  Layers,
  Activity,
  Wrench,
  Headphones,
  FileText,
  PieChart,
  GitBranch,
  Code,
  Terminal,
  Database as DB,
  Server as ServerIcon,
  Network as NetworkIcon,
  Cloud as CloudIcon,
  Shield as ShieldIcon,
  Settings as SettingsIcon,
  Users as UsersIcon,
  Smartphone as SmartphoneIcon,
  Globe as GlobeIcon,
  Lock as LockIcon,
  Zap as ZapIcon,
  BarChart3 as BarChart3Icon,
  Cpu as CpuIcon,
  HardDrive as HardDriveIcon,
  Wifi as WifiIcon,
  Monitor as MonitorIcon,
  Building as BuildingIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  Star as StarIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  TrendingUp as TrendingUpIcon,
  Award as AwardIcon,
  Target as TargetIcon,
  Lightbulb as LightbulbIcon,
  Rocket as RocketIcon,
  ShieldCheck as ShieldCheckIcon,
  Globe2 as Globe2Icon,
  Layers as LayersIcon,
  Activity as ActivityIcon,
  Wrench as WrenchIcon,
  Headphones as HeadphonesIcon,
  FileText as FileTextIcon,
  PieChart as PieChartIcon,
  GitBranch as GitBranchIcon,
  Code as CodeIcon,
  Terminal as TerminalIcon
} from 'lucide-react';
import Layout from './components/Layout';

const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery'],
    pricing: '$6,000 - $30,000/project',
    category: 'Cloud',
    popular: true,
    benefits: ['Reduced Infrastructure Costs', 'Improved Scalability', 'Enhanced Security', '24/7 Monitoring'],
    marketPrice: '$8,000 - $35,000/project',
    link: 'https://ziontechgroup.com/cloud-infrastructure-management'
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Enterprise-grade security services to protect your digital assets and data.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
    pricing: '$5,000 - $40,000/project',
    category: 'Security',
    popular: true,
    benefits: ['Enhanced Security Posture', 'Compliance Assurance', 'Risk Mitigation', 'Peace of Mind'],
    marketPrice: '$7,000 - $45,000/project',
    link: 'https://ziontechgroup.com/cybersecurity-solutions'
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implementation, and management of robust network infrastructure.',
    icon: Network,
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting'],
    pricing: '$120 - $220/hour',
    category: 'Networking',
    benefits: ['Improved Performance', 'Enhanced Reliability', 'Better Security', 'Cost Efficiency'],
    marketPrice: '$150 - $250/hour',
    link: 'https://ziontechgroup.com/network-infrastructure'
  },
  {
    title: 'Database Management',
    description: 'Comprehensive database solutions including design, optimization, and maintenance.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services'],
    pricing: '$2,000 - $15,000/project',
    category: 'Database',
    benefits: ['Optimized Performance', 'Data Security', 'Reduced Downtime', 'Scalable Solutions'],
    marketPrice: '$3,000 - $18,000/project',
    link: 'https://ziontechgroup.com/database-management'
  },
  {
    title: 'System Administration',
    description: '24/7 system administration and maintenance services for your IT infrastructure.',
    icon: Settings,
    features: ['Server Management', 'User Administration', 'System Monitoring', 'Patch Management'],
    pricing: '$2,000 - $8,000/month',
    category: 'Administration',
    benefits: ['Proactive Maintenance', 'Reduced Downtime', 'Enhanced Security', 'Cost Savings'],
    marketPrice: '$2,500 - $10,000/month',
    link: 'https://ziontechgroup.com/system-administration'
  },
  {
    title: 'IT Consulting',
    description: 'Strategic IT consulting to align technology with business objectives.',
    icon: Users,
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support'],
    pricing: '$150 - $300/hour',
    category: 'Consulting',
    benefits: ['Strategic Alignment', 'Cost Optimization', 'Technology Roadmap', 'Expert Guidance'],
    marketPrice: '$175 - $350/hour',
    link: 'https://ziontechgroup.com/it-consulting'
  },
  {
    title: 'Mobile App Development',
    description: 'Custom mobile applications for iOS and Android platforms.',
    icon: Smartphone,
    features: ['Native Development', 'Cross-platform Solutions', 'UI/UX Design', 'App Store Optimization'],
    pricing: '$15,000 - $100,000/project',
    category: 'Development',
    benefits: ['Increased User Engagement', 'Brand Visibility', 'Revenue Generation', 'Competitive Advantage'],
    marketPrice: '$20,000 - $120,000/project',
    link: 'https://ziontechgroup.com/mobile-app-development'
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive web applications and websites.',
    icon: Globe,
    features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security Implementation'],
    pricing: '$5,000 - $50,000/project',
    category: 'Development',
    benefits: ['Enhanced Online Presence', 'Better User Experience', 'Improved SEO', 'Mobile Optimization'],
    marketPrice: '$7,000 - $60,000/project',
    link: 'https://ziontechgroup.com/web-development'
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics solutions.',
    icon: BarChart3,
    features: ['Data Visualization', 'Predictive Analytics', 'Business Intelligence', 'Custom Dashboards'],
    pricing: '$3,000 - $25,000/project',
    category: 'Analytics',
    benefits: ['Data-Driven Decisions', 'Improved Efficiency', 'Competitive Insights', 'Cost Reduction'],
    marketPrice: '$4,000 - $30,000/project',
    link: 'https://ziontechgroup.com/data-analytics'
  },
  {
    title: 'IT Support',
    description: 'Comprehensive technical support for all your IT needs.',
    icon: Headphones,
    features: ['24/7 Support', 'Remote Assistance', 'Hardware Support', 'Software Troubleshooting'],
    pricing: '$50 - $150/hour',
    category: 'Support',
    benefits: ['Minimized Downtime', 'Expert Assistance', 'Cost-Effective Solutions', 'Peace of Mind'],
    marketPrice: '$75 - $175/hour',
    link: 'https://ziontechgroup.com/it-support'
  },
  {
    title: 'Quantum Computing Infrastructure',
    description: 'Cutting-edge quantum computing solutions for complex problem-solving and optimization.',
    icon: Cpu,
    features: ['Quantum Algorithm Development', 'Quantum Hardware Integration', 'Quantum Software Solutions', 'Quantum Security'],
    pricing: '$50,000 - $500,000/project',
    category: 'Quantum',
    popular: true,
    benefits: ['Exponential Processing Power', 'Revolutionary Problem Solving', 'Future-Proof Technology', 'Competitive Edge'],
    marketPrice: '$75,000 - $750,000/project',
    link: 'https://ziontechgroup.com/quantum-computing-infrastructure'
  },
  {
    title: 'Edge Computing Solutions',
    description: 'Distributed computing infrastructure for real-time data processing and low-latency applications.',
    icon: Zap,
    features: ['Edge Server Deployment', 'Real-time Processing', 'IoT Integration', 'Latency Optimization'],
    pricing: '$10,000 - $100,000/project',
    category: 'Edge Computing',
    benefits: ['Ultra-Low Latency', 'Improved Performance', 'Reduced Bandwidth Costs', 'Enhanced Security'],
    marketPrice: '$15,000 - $125,000/project',
    link: 'https://ziontechgroup.com/edge-computing-solutions'
  },
  {
    title: '5G Network Implementation',
    description: 'Next-generation 5G network infrastructure for ultra-fast connectivity and IoT applications.',
    icon: Wifi,
    features: ['5G Network Design', 'Infrastructure Deployment', 'IoT Integration', 'Performance Optimization'],
    pricing: '$25,000 - $200,000/project',
    category: '5G',
    benefits: ['Ultra-Fast Speeds', 'Massive IoT Support', 'Low Latency', 'Future-Ready Infrastructure'],
    marketPrice: '$35,000 - $250,000/project',
    link: 'https://ziontechgroup.com/5g-network-implementation'
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Secure and scalable blockchain solutions for decentralized applications and smart contracts.',
    icon: Lock,
    features: ['Blockchain Development', 'Smart Contract Creation', 'DeFi Solutions', 'NFT Platforms'],
    pricing: '$20,000 - $150,000/project',
    category: 'Blockchain',
    benefits: ['Enhanced Security', 'Transparency', 'Decentralization', 'Innovation'],
    marketPrice: '$30,000 - $200,000/project',
    link: 'https://ziontechgroup.com/blockchain-infrastructure'
  },
  {
    title: 'IoT Platform Development',
    description: 'Comprehensive Internet of Things solutions for connected devices and smart systems.',
    icon: Activity,
    features: ['IoT Device Integration', 'Data Collection & Analysis', 'Real-time Monitoring', 'Predictive Maintenance'],
    pricing: '$15,000 - $100,000/project',
    category: 'IoT',
    benefits: ['Operational Efficiency', 'Predictive Insights', 'Cost Reduction', 'Automation'],
    marketPrice: '$20,000 - $125,000/project',
    link: 'https://ziontechgroup.com/iot-platform-development'
  },
  {
    title: 'AI Infrastructure Setup',
    description: 'Complete AI infrastructure including GPU clusters, ML pipelines, and model deployment.',
    icon: Brain,
    features: ['GPU Cluster Setup', 'ML Pipeline Development', 'Model Deployment', 'AI Monitoring'],
    pricing: '$30,000 - $200,000/project',
    category: 'AI Infrastructure',
    benefits: ['Scalable AI Solutions', 'High Performance', 'Cost Optimization', 'Future-Ready'],
    marketPrice: '$40,000 - $250,000/project',
    link: 'https://ziontechgroup.com/ai-infrastructure-setup'
  },
  {
    title: 'Digital Twin Infrastructure',
    description: 'Virtual replicas of physical systems for simulation, monitoring, and optimization.',
    icon: Layers,
    features: ['3D Modeling', 'Real-time Synchronization', 'Predictive Analytics', 'Simulation Engine'],
    pricing: '$25,000 - $150,000/project',
    category: 'Digital Twin',
    benefits: ['Predictive Maintenance', 'Optimized Operations', 'Risk Reduction', 'Innovation'],
    marketPrice: '$35,000 - $200,000/project',
    link: 'https://ziontechgroup.com/digital-twin-infrastructure'
  },
  {
    title: 'AR/VR Infrastructure',
    description: 'Immersive technology solutions including virtual and augmented reality applications.',
    icon: Monitor,
    features: ['VR/AR Development', '3D Content Creation', 'Hardware Integration', 'User Experience Design'],
    pricing: '$20,000 - $100,000/project',
    category: 'AR/VR',
    benefits: ['Immersive Experiences', 'Enhanced Training', 'Innovative Solutions', 'Competitive Advantage'],
    marketPrice: '$25,000 - $125,000/project',
    link: 'https://ziontechgroup.com/ar-vr-infrastructure'
  },
  {
    title: 'High-Performance Computing',
    description: 'Supercomputing solutions for complex calculations and data-intensive applications.',
    icon: Server,
    features: ['HPC Cluster Setup', 'Parallel Processing', 'Performance Optimization', 'Scalable Architecture'],
    pricing: '$40,000 - $300,000/project',
    category: 'HPC',
    benefits: ['Massive Processing Power', 'Faster Results', 'Cost Efficiency', 'Scalability'],
    marketPrice: '$50,000 - $400,000/project',
    link: 'https://ziontechgroup.com/high-performance-computing'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Comprehensive security framework based on zero trust principles for maximum protection.',
    icon: ShieldCheck,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Detection'],
    pricing: '$15,000 - $100,000/project',
    category: 'Security',
    benefits: ['Enhanced Security', 'Reduced Risk', 'Compliance', 'Peace of Mind'],
    marketPrice: '$20,000 - $125,000/project',
    link: 'https://ziontechgroup.com/zero-trust-security-architecture'
  }
];

export default function ITServicesPage() {
  return (
    <Layout 
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and cutting-edge technology solutions."
    >
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Professional IT services including cloud infrastructure, cybersecurity, network management, and cutting-edge technology solutions." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, network management, system administration, IT consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                IT Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Comprehensive technology solutions to power your business forward
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <span className="text-sm font-medium">Cloud Infrastructure</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <span className="text-sm font-medium">Cybersecurity</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <span className="text-sm font-medium">Network Management</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <span className="text-sm font-medium">AI Infrastructure</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From traditional IT infrastructure to cutting-edge quantum computing, we provide comprehensive technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6" />
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">{service.pricing}</span>
                      <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Let our experts help you build a robust, scalable, and secure technology foundation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 py-4 px-8 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/pricing"
                  className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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