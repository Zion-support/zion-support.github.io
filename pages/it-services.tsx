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
  Rocket,
  Sprout,
  Eye,
  Bot,
  Package,
  Heart,
  FileText,
  Truck,
  Video
} from 'lucide-react';

const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery'],
    pricing: '$6,000 - $30,000/project',
    category: 'Cloud',
    popular: true
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Advanced security measures including threat detection, vulnerability assessment, and incident response.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Audits'],
    pricing: '$8,000 - $40,000/setup',
    category: 'Security',
    popular: true
  },
  {
    title: 'Database Management',
    description: 'Database design, optimization, migration, and maintenance services for all major database systems.',
    icon: Database,
    features: ['Database Design', 'Performance Optimization', 'Migration Services', '24/7 Monitoring'],
    pricing: '$5,000 - $25,000/project',
    category: 'Database'
  },
  {
    title: 'Network Infrastructure',
    description: 'Complete network design, implementation, and management for enterprise environments.',
    icon: Network,
    features: ['Network Design', 'Implementation', 'Performance Monitoring', 'Troubleshooting'],
    pricing: '$10,000 - $50,000/project',
    category: 'Networking'
  },
  {
    title: 'IT Support & Maintenance',
    description: 'Comprehensive IT support services including help desk, maintenance, and system administration.',
    icon: Monitor,
    features: ['24/7 Help Desk', 'System Maintenance', 'User Support', 'Remote Management'],
    pricing: '$2,000 - $10,000/month',
    category: 'Support',
    popular: true
  },
  {
    title: 'System Integration',
    description: 'Seamless integration of disparate systems and applications for improved efficiency.',
    icon: Settings,
    features: ['API Integration', 'Data Synchronization', 'Workflow Automation', 'Custom Solutions'],
    pricing: '$15,000 - $75,000/project',
    category: 'Integration'
  },
  {
    title: 'IT Consulting',
    description: 'Strategic IT consulting to help businesses align technology with business objectives.',
    icon: Users,
    features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Vendor Management'],
    pricing: '$150 - $300/hour',
    category: 'Consulting'
  },
  {
    title: 'Data Backup & Recovery',
    description: 'Comprehensive data protection solutions including backup, disaster recovery, and business continuity.',
    icon: HardDrive,
    features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Recovery Testing'],
    pricing: '$3,000 - $15,000/setup',
    category: 'Data Protection'
  },
  {
    title: 'Mobile Device Management',
    description: 'Complete mobile device management including security, app deployment, and device monitoring.',
    icon: Smartphone,
    features: ['Device Security', 'App Management', 'Remote Wipe', 'Compliance Monitoring'],
    pricing: '$5 - $15/device/month',
    category: 'Mobile'
  },
  {
    title: 'IT Cost Optimization Platform',
    description: 'AI-powered IT cost optimization with resource right-sizing and waste reduction.',
    icon: DollarSign,
    features: ['Cost Analysis', 'Resource Right-sizing', 'Waste Detection', 'Optimization Recommendations'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Cost Optimization'
  },
  {
    title: 'AI-Powered Business Process Automation',
    description: 'Comprehensive AI automation solutions for enterprise processes, document processing, and workflow optimization.',
    icon: Cpu,
    features: ['Process Automation', 'Document Processing', 'Workflow Optimization', 'RPA Integration'],
    pricing: '$25,000 - $150,000/project',
    category: 'AI Automation',
    popular: true
  },
  {
    title: 'AI Cybersecurity Operations Center',
    description: 'AI-powered security operations center with advanced threat detection and automated response.',
    icon: Shield,
    features: ['AI Threat Detection', 'Automated Response', 'Security Analytics', '24/7 Monitoring'],
    pricing: '$50,000 - $300,000/setup',
    category: 'AI Security',
    popular: true
  },
  {
    title: 'AI Data Analytics Platform',
    description: 'Advanced AI-powered data analytics platform for business intelligence and predictive insights.',
    icon: BarChart3,
    features: ['Predictive Analytics', 'Real-time Insights', 'Data Visualization', 'Machine Learning'],
    pricing: '$30,000 - $200,000/setup',
    category: 'AI Analytics'
  },
  {
    title: 'AI Customer Experience Platform',
    description: 'AI-driven customer experience solutions including chatbots, personalization, and sentiment analysis.',
    icon: Users,
    features: ['AI Chatbots', 'Personalization', 'Sentiment Analysis', 'Customer Insights'],
    pricing: '$20,000 - $100,000/setup',
    category: 'AI Customer Experience'
  },
  {
    title: 'AI Financial Technology Solutions',
    description: 'AI-powered fintech solutions including fraud detection, risk assessment, and automated trading.',
    icon: DollarSign,
    features: ['Fraud Detection', 'Risk Assessment', 'Automated Trading', 'Compliance Monitoring'],
    pricing: '$40,000 - $250,000/setup',
    category: 'AI Fintech'
  },
  {
    title: 'AI Healthcare IT Solutions',
    description: 'AI-powered healthcare technology solutions including patient management and medical imaging analysis.',
    icon: Heart,
    features: ['Patient Management', 'Medical Imaging', 'Diagnostic Support', 'Health Analytics'],
    pricing: '$35,000 - $200,000/setup',
    category: 'AI Healthcare'
  },
  {
    title: 'AI Legal Technology Platform',
    description: 'AI-powered legal technology solutions including document analysis, contract review, and case management.',
    icon: FileText,
    features: ['Document Analysis', 'Contract Review', 'Case Management', 'Legal Research'],
    pricing: '$25,000 - $150,000/setup',
    category: 'AI Legal'
  },
  {
    title: 'AI Supply Chain Management',
    description: 'AI-powered supply chain optimization including demand forecasting and logistics management.',
    icon: Truck,
    features: ['Demand Forecasting', 'Logistics Optimization', 'Inventory Management', 'Risk Assessment'],
    pricing: '$30,000 - $180,000/setup',
    category: 'AI Supply Chain'
  },
  {
    title: 'AI Human Resources Platform',
    description: 'AI-powered HR solutions including recruitment, performance management, and employee analytics.',
    icon: Users,
    features: ['AI Recruitment', 'Performance Analytics', 'Employee Insights', 'Talent Management'],
    pricing: '$20,000 - $120,000/setup',
    category: 'AI HR'
  },
  {
    title: 'AI Real Estate Technology',
    description: 'AI-powered real estate solutions including property valuation, market analysis, and virtual tours.',
    icon: Building,
    features: ['Property Valuation', 'Market Analysis', 'Virtual Tours', 'Investment Analytics'],
    pricing: '$25,000 - $150,000/setup',
    category: 'AI Real Estate'
  },
  {
    title: 'AI E-commerce Solutions',
    description: 'AI-powered e-commerce solutions including recommendation engines, pricing optimization, and customer analytics.',
    icon: ShoppingCart,
    features: ['Recommendation Engines', 'Pricing Optimization', 'Customer Analytics', 'Inventory Management'],
    pricing: '$30,000 - $200,000/setup',
    category: 'AI E-commerce'
  },
  {
    title: 'AI Education Technology',
    description: 'AI-powered educational technology including personalized learning and automated assessment.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Automated Assessment', 'Learning Analytics', 'Content Generation'],
    pricing: '$25,000 - $150,000/setup',
    category: 'AI Education'
  },
  {
    title: 'AI Manufacturing Solutions',
    description: 'AI-powered manufacturing solutions including predictive maintenance and quality control.',
    icon: Settings,
    features: ['Predictive Maintenance', 'Quality Control', 'Production Optimization', 'Supply Chain Integration'],
    pricing: '$40,000 - $250,000/setup',
    category: 'AI Manufacturing'
  },
  {
    title: 'AI Energy Management Systems',
    description: 'AI-powered energy management including consumption optimization and renewable energy integration.',
    icon: Zap,
    features: ['Consumption Optimization', 'Renewable Integration', 'Energy Analytics', 'Smart Grid Management'],
    pricing: '$35,000 - $200,000/setup',
    category: 'AI Energy'
  },
  {
    title: 'AI Transportation Solutions',
    description: 'AI-powered transportation solutions including route optimization and fleet management.',
    icon: Truck,
    features: ['Route Optimization', 'Fleet Management', 'Traffic Analysis', 'Predictive Maintenance'],
    pricing: '$30,000 - $180,000/setup',
    category: 'AI Transportation'
  },
  {
    title: 'AI Retail Technology',
    description: 'AI-powered retail solutions including inventory management and customer behavior analysis.',
    icon: ShoppingCart,
    features: ['Inventory Management', 'Customer Analytics', 'Price Optimization', 'Demand Forecasting'],
    pricing: '$25,000 - $150,000/setup',
    category: 'AI Retail'
  },
  {
    title: 'AI Government Solutions',
    description: 'AI-powered government technology including citizen services and policy analysis.',
    icon: Building,
    features: ['Citizen Services', 'Policy Analysis', 'Resource Optimization', 'Compliance Monitoring'],
    pricing: '$50,000 - $300,000/setup',
    category: 'AI Government'
  },
  {
    title: 'AI Non-Profit Solutions',
    description: 'AI-powered solutions for non-profits including donor management and impact measurement.',
    icon: Heart,
    features: ['Donor Management', 'Impact Measurement', 'Volunteer Coordination', 'Grant Management'],
    pricing: '$20,000 - $100,000/setup',
    category: 'AI Non-Profit'
  },
  {
    title: 'AI Entertainment Technology',
    description: 'AI-powered entertainment solutions including content recommendation and audience analytics.',
    icon: Video,
    features: ['Content Recommendation', 'Audience Analytics', 'Content Generation', 'Personalization'],
    pricing: '$30,000 - $200,000/setup',
    category: 'AI Entertainment'
  }
];

export default function ITServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>IT Services & Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services and AI-powered solutions for modern businesses" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT services and AI-powered solutions designed to transform your business operations and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {service.category}
                </span>
                {service.popular && (
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
                    Popular
                  </span>
                )}
              </div>
              
              <div className="text-2xl font-bold text-gray-900 mb-4">
                {service.pricing}
              </div>
              
              <Link href="/contact">
                <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}