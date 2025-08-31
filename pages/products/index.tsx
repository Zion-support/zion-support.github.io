import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Award,
  Globe,
  Zap as ZapIcon,
  Monitor,
  Smartphone as Mobile,
  Laptop,
  Server as ServerIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Shield as ShieldIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  BarChart as BarChartIcon,
  Code as CodeIcon,
  Palette as PaletteIcon,
  Smartphone as SmartphoneIcon,
  Globe as GlobeIcon,
  Zap as ZapIcon2,
  Lock as LockIcon,
  Eye as EyeIcon,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  Settings as SettingsIcon,
  FileText as FileTextIcon,
  MessageCircle as MessageCircleIcon,
  Search as SearchIcon,
  BarChart as BarChartIcon2,
  Users2 as Users2Icon,
  Settings as SettingsIcon2,
  Palette as PaletteIcon2,
  TrendingUp as TrendingUpIcon2,
  Award as AwardIcon,
  Globe as GlobeIcon2,
  Zap as ZapIcon3
} from 'lucide-react';

const Products: NextPage = () => {
  const productCategories = [
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      icon: Rocket,
      color: 'from-purple-500 to-pink-600',
      description: 'Ready-to-deploy software solutions for immediate business value',
      products: [
        {
          name: 'ZionTask Pro',
          description: 'Advanced project management and task tracking platform',
          price: '$29/month',
          features: ['Task automation', 'Team collaboration', 'Time tracking', 'Progress analytics'],
          icon: Target,
          category: 'Productivity',
          link: 'https://ziontechgroup.com/products/ziontask-pro'
        },
        {
          name: 'ZionCRM Hub',
          description: 'Customer relationship management with AI-powered insights',
          price: '$49/month',
          features: ['Lead scoring', 'Sales pipeline', 'Customer analytics', 'Automated follow-ups'],
          icon: Users2,
          category: 'Sales & Marketing',
          link: 'https://ziontechgroup.com/products/zioncrm-hub'
        },
        {
          name: 'ZionAnalytics',
          description: 'Real-time business intelligence and reporting dashboard',
          price: '$39/month',
          features: ['Custom dashboards', 'Data visualization', 'Automated reports', 'KPI tracking'],
          icon: BarChart3,
          category: 'Analytics',
          link: 'https://ziontechgroup.com/products/zionanalytics'
        }
      ]
    },
    {
      id: 'ai-services',
      name: 'AI-Powered Services',
      icon: Brain,
      color: 'from-blue-500 to-cyan-600',
      description: 'Intelligent automation and machine learning solutions',
      products: [
        {
          name: 'ZionAI Assistant',
          description: 'AI-powered customer support and chatbot solution',
          price: '$199/month',
          features: ['Natural language processing', '24/7 availability', 'Multi-language support', 'Integration APIs'],
          icon: Bot,
          category: 'Customer Support',
          link: 'https://ziontechgroup.com/products/zionai-assistant'
        },
        {
          name: 'ZionPredict',
          description: 'Predictive analytics and forecasting platform',
          price: '$299/month',
          features: ['Machine learning models', 'Data forecasting', 'Trend analysis', 'Custom algorithms'],
          icon: TrendingUp,
          category: 'Analytics',
          link: 'https://ziontechgroup.com/products/zionpredict'
        },
        {
          name: 'ZionVision',
          description: 'Computer vision and image recognition API',
          price: '$149/month',
          features: ['Object detection', 'Face recognition', 'OCR capabilities', 'Custom training'],
          icon: Eye,
          category: 'Computer Vision',
          link: 'https://ziontechgroup.com/products/zionvision'
        }
      ]
    },
    {
      id: 'cloud-solutions',
      name: 'Cloud Infrastructure',
      icon: Cloud,
      color: 'from-green-500 to-emerald-600',
      description: 'Scalable cloud platforms and infrastructure services',
      products: [
        {
          name: 'ZionCloud Platform',
          description: 'Multi-cloud management and orchestration platform',
          price: '$199/month',
          features: ['AWS/Azure/GCP integration', 'Cost optimization', 'Security compliance', 'Auto-scaling'],
          icon: Cloud,
          category: 'Cloud Management',
          link: 'https://ziontechgroup.com/products/zioncloud-platform'
        },
        {
          name: 'ZionKubernetes',
          description: 'Managed Kubernetes clusters with monitoring',
          price: '$299/month',
          features: ['Cluster management', 'Auto-scaling', 'Monitoring & alerting', 'Security policies'],
          icon: Server,
          category: 'Container Orchestration',
          link: 'https://ziontechgroup.com/products/zionkubernetes'
        },
        {
          name: 'ZionServerless',
          description: 'Serverless computing platform with auto-scaling',
          price: '$99/month',
          features: ['Function hosting', 'Event-driven architecture', 'Pay-per-use pricing', 'Global deployment'],
          icon: Zap,
          category: 'Serverless Computing',
          link: 'https://ziontechgroup.com/products/zionserverless'
        }
      ]
    },
    {
      id: 'security-solutions',
      name: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      description: 'Enterprise-grade security and compliance solutions',
      products: [
        {
          name: 'ZionGuard',
          description: 'Advanced threat detection and response platform',
          price: '$399/month',
          features: ['Real-time monitoring', 'AI threat detection', 'Incident response', 'Compliance reporting'],
          icon: ShieldCheck,
          category: 'Threat Detection',
          link: 'https://ziontechgroup.com/products/zionguard'
        },
        {
          name: 'ZionComply',
          description: 'Automated compliance and audit management',
          price: '$299/month',
          features: ['GDPR compliance', 'SOC 2 automation', 'Audit trails', 'Policy management'],
          icon: Lock,
          category: 'Compliance',
          link: 'https://ziontechgroup.com/products/zioncomply'
        },
        {
          name: 'ZionSecure',
          description: 'Zero-trust network access and VPN solution',
          price: '$199/month',
          features: ['Zero-trust architecture', 'Multi-factor authentication', 'Device management', 'Access control'],
          icon: Network,
          category: 'Network Security',
          link: 'https://ziontechgroup.com/products/zionsecure'
        }
      ]
    },
    {
      id: 'development-tools',
      name: 'Development & DevOps',
      icon: Code,
      color: 'from-indigo-500 to-purple-600',
      description: 'Tools and platforms for modern software development',
      products: [
        {
          name: 'ZionDevOps',
          description: 'Complete CI/CD pipeline and automation platform',
          price: '$249/month',
          features: ['Build automation', 'Testing frameworks', 'Deployment pipelines', 'Monitoring integration'],
          icon: Workflow,
          category: 'DevOps',
          link: 'https://ziontechgroup.com/products/ziondevops'
        },
        {
          name: 'ZionAPI Gateway',
          description: 'API management and developer portal platform',
          price: '$179/month',
          features: ['API documentation', 'Rate limiting', 'Authentication', 'Analytics dashboard'],
          icon: Globe,
          category: 'API Management',
          link: 'https://ziontechgroup.com/products/zionapi-gateway'
        },
        {
          name: 'ZionCode Quality',
          description: 'Static code analysis and quality assurance platform',
          price: '$129/month',
          features: ['Code review automation', 'Security scanning', 'Performance analysis', 'Quality metrics'],
          icon: Code,
          category: 'Code Quality',
          link: 'https://ziontechgroup.com/products/zioncode-quality'
        }
      ]
    },
    {
      id: 'data-solutions',
      name: 'Data & Analytics',
      icon: Database,
      color: 'from-yellow-500 to-orange-600',
      description: 'Data management, analytics, and business intelligence',
      products: [
        {
          name: 'ZionData Lake',
          description: 'Scalable data lake and warehouse platform',
          price: '$399/month',
          features: ['Data ingestion', 'ETL pipelines', 'Real-time processing', 'Advanced analytics'],
          icon: Database,
          category: 'Data Management',
          link: 'https://ziontechgroup.com/products/ziondata-lake'
        },
        {
          name: 'ZionBI Studio',
          description: 'Business intelligence and data visualization platform',
          price: '$249/month',
          features: ['Interactive dashboards', 'Report builder', 'Data modeling', 'Collaborative analytics'],
          icon: BarChart,
          category: 'Business Intelligence',
          link: 'https://ziontechgroup.com/products/zionbi-studio'
        },
        {
          name: 'ZionData Sync',
          description: 'Real-time data synchronization and integration platform',
          price: '$179/month',
          features: ['Multi-source integration', 'Real-time sync', 'Data validation', 'Error handling'],
          icon: Activity,
          category: 'Data Integration',
          link: 'https://ziontechgroup.com/products/ziondata-sync'
        }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Head>
        <title>Products & Solutions - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive portfolio of micro SAAS solutions, AI services, cloud infrastructure, and cybersecurity products." />
        <meta name="keywords" content="micro SAAS, AI services, cloud solutions, cybersecurity, development tools, data analytics" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Innovative Solutions
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready-to-Deploy
              </span>
              <br />
              <span className="text-white">Solutions for</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              From micro SAAS applications to enterprise AI solutions, our products deliver immediate value 
              and scale with your business needs. Built with cutting-edge technology and designed for success.
            </p>

            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
              
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {productCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="scroll-mt-20"
                id={category.id}
              >
                {/* Category Header */}
                <div className="text-center mb-16">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {category.name}
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Products Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {category.products.map((product, productIndex) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: productIndex * 0.1 }}
                      className="group relative"
                    >
                      <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                        {/* Product Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                            <product.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-right">
                            <span className="inline-block px-3 py-1 bg-slate-700 text-cyan-400 text-xs font-medium rounded-full">
                              {product.category}
                            </span>
                            <div className="text-2xl font-bold text-cyan-400 mt-2">
                              {product.price}
                            </div>
                          </div>
                        </div>

                        {/* Product Info */}
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-3 mb-8">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-slate-300">
                              <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 inline" />
                          </a>
                          <a
                            href={`mailto:${contactInfo.email}?subject=Inquiry about ${product.name}`}
                            className="px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                          >
                            Get Quote
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Our team of experts can build tailored solutions that perfectly fit your business requirements. 
                Let's discuss your project and create something amazing together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Project Discussion
                </Link>
                
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;