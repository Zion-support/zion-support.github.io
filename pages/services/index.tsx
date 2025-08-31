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
  Zap as ZapIcon
} from 'lucide-react';

const Services: NextPage = () => {
  const serviceCategories = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      services: [
        {
          name: 'Custom AI Development',
          description: 'Tailored AI solutions for your specific business needs',
          price: '$15,000 - $50,000',
          features: ['Custom algorithms', 'Data preprocessing', 'Model training', 'API integration'],
          icon: Brain
        },
        {
          name: 'Predictive Analytics',
          description: 'Advanced analytics to forecast trends and behaviors',
          price: '$8,000 - $25,000',
          features: ['Data modeling', 'Statistical analysis', 'Visualization dashboards', 'Real-time insights'],
          icon: BarChart3
        },
        {
          name: 'Natural Language Processing',
          description: 'Text analysis and language understanding systems',
          price: '$12,000 - $35,000',
          features: ['Text classification', 'Sentiment analysis', 'Language translation', 'Chatbot development'],
          icon: MessageCircle
        }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud Architecture',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      description: 'Scalable and resilient cloud infrastructure solutions',
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamless transition to cloud platforms',
          price: '$20,000 - $75,000',
          features: ['Infrastructure assessment', 'Migration planning', 'Data transfer', 'Performance optimization'],
          icon: Cloud
        },
        {
          name: 'Microservices Architecture',
          description: 'Scalable, maintainable service-oriented systems',
          price: '$25,000 - $80,000',
          features: ['Service design', 'API development', 'Container orchestration', 'Load balancing'],
          icon: Server
        },
        {
          name: 'DevOps Automation',
          description: 'Streamlined development and deployment processes',
          price: '$15,000 - $45,000',
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring setup', 'Automated testing'],
          icon: Workflow
        }
      ]
    },
    {
      id: 'security',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      description: 'Comprehensive security and compliance solutions',
      services: [
        {
          name: 'Security Auditing',
          description: 'Comprehensive security assessment and recommendations',
          price: '$10,000 - $30,000',
          features: ['Vulnerability assessment', 'Penetration testing', 'Compliance review', 'Security roadmap'],
          icon: ShieldCheck
        },
        {
          name: 'Threat Detection',
          description: 'Advanced threat monitoring and response systems',
          price: '$18,000 - $55,000',
          features: ['Real-time monitoring', 'AI-powered detection', 'Incident response', 'Forensic analysis'],
          icon: Activity
        },
        {
          name: 'Compliance Management',
          description: 'Regulatory compliance and governance frameworks',
          price: '$12,000 - $40,000',
          features: ['Policy development', 'Risk assessment', 'Training programs', 'Audit support'],
          icon: FileText
        }
      ]
    },
    {
      id: 'data',
      name: 'Data Analytics',
      icon: BarChart3,
      color: 'from-orange-500 to-red-600',
      description: 'Business intelligence and data-driven insights',
      services: [
        {
          name: 'Business Intelligence',
          description: 'Comprehensive data analysis and reporting solutions',
          price: '$15,000 - $50,000',
          features: ['Data warehousing', 'ETL processes', 'Dashboard creation', 'KPI tracking'],
          icon: BarChart3
        },
        {
          name: 'Big Data Processing',
          description: 'Large-scale data processing and analytics',
          price: '$25,000 - $75,000',
          features: ['Data pipeline design', 'Distributed computing', 'Real-time processing', 'Scalable storage'],
          icon: Database
        },
        {
          name: 'Data Visualization',
          description: 'Interactive charts and visual analytics',
          price: '$8,000 - $25,000',
          features: ['Chart libraries', 'Interactive dashboards', 'Custom visualizations', 'Mobile optimization'],
          icon: Palette
        }
      ]
    },
    {
      id: 'transformation',
      name: 'Digital Transformation',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-600',
      description: 'End-to-end business modernization',
      services: [
        {
          name: 'Process Optimization',
          description: 'Streamline and automate business processes',
          price: '$20,000 - $60,000',
          features: ['Process mapping', 'Automation design', 'Workflow implementation', 'Performance metrics'],
          icon: Workflow
        },
        {
          name: 'Legacy System Modernization',
          description: 'Update and integrate legacy systems',
          price: '$30,000 - $100,000',
          features: ['System analysis', 'Modernization planning', 'Integration development', 'Testing & deployment'],
          icon: Server
        },
        {
          name: 'Change Management',
          description: 'Organizational change and adoption support',
          price: '$15,000 - $45,000',
          features: ['Stakeholder engagement', 'Training programs', 'Communication strategies', 'Success metrics'],
          icon: Users2
        }
      ]
    },
    {
      id: 'iot',
      name: 'IoT Solutions',
      icon: Wifi,
      color: 'from-teal-500 to-blue-600',
      description: 'Connected devices and smart infrastructure',
      services: [
        {
          name: 'IoT Platform Development',
          description: 'Custom IoT platforms and device management',
          price: '$25,000 - $80,000',
          features: ['Device connectivity', 'Data collection', 'Real-time monitoring', 'Analytics dashboard'],
          icon: Wifi
        },
        {
          name: 'Edge Computing',
          description: 'Distributed computing at the network edge',
          price: '$20,000 - $60,000',
          features: ['Edge node design', 'Local processing', 'Data filtering', 'Cloud integration'],
          icon: Cpu
        },
        {
          name: 'Smart Infrastructure',
          description: 'Intelligent building and city solutions',
          price: '$35,000 - $120,000',
          features: ['Sensor networks', 'Automation systems', 'Energy optimization', 'Predictive maintenance'],
          icon: Smartphone
        }
      ]
    },
    {
      id: 'blockchain',
      name: 'Blockchain & Web3',
      icon: Coins,
      color: 'from-yellow-500 to-orange-600',
      description: 'Decentralized applications and blockchain infrastructure',
      services: [
        {
          name: 'Smart Contract Development',
          description: 'Ethereum and blockchain smart contract solutions',
          price: '$15,000 - $50,000',
          features: ['Contract design', 'Security auditing', 'Testing & deployment', 'Integration support'],
          icon: Coins
        },
        {
          name: 'DeFi Platform Development',
          description: 'Decentralized finance applications and protocols',
          price: '$30,000 - $100,000',
          features: ['Protocol design', 'Security implementation', 'User interface', 'Audit & testing'],
          icon: TrendingUp
        },
        {
          name: 'NFT Marketplace',
          description: 'Custom NFT creation and trading platforms',
          price: '$20,000 - $60,000',
          features: ['Marketplace design', 'Smart contracts', 'User authentication', 'Payment integration'],
          icon: Palette
        }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      icon: Smartphone,
      color: 'from-pink-500 to-rose-600',
      description: 'Native and cross-platform mobile applications',
      services: [
        {
          name: 'iOS App Development',
          description: 'Native iOS applications with modern design',
          price: '$25,000 - $80,000',
          features: ['UI/UX design', 'Native development', 'App Store optimization', 'Maintenance support'],
          icon: Smartphone
        },
        {
          name: 'Android App Development',
          description: 'Native Android applications for all devices',
          price: '$20,000 - $70,000',
          features: ['Material design', 'Device optimization', 'Google Play optimization', 'Performance tuning'],
          icon: Smartphone
        },
        {
          name: 'Cross-Platform Development',
          description: 'React Native and Flutter applications',
          price: '$15,000 - $60,000',
          features: ['Single codebase', 'Native performance', 'Platform integration', 'Rapid development'],
          icon: Smartphone
        }
      ]
    },
    {
      id: 'consulting',
      name: 'Technology Consulting',
      icon: Lightbulb,
      color: 'from-violet-500 to-purple-600',
      description: 'Strategic technology advisory and planning',
      services: [
        {
          name: 'Technology Strategy',
          description: 'Long-term technology roadmap and planning',
          price: '$5,000 - $25,000',
          features: ['Technology assessment', 'Roadmap development', 'Vendor selection', 'Implementation planning'],
          icon: Lightbulb
        },
        {
          name: 'Digital Innovation',
          description: 'Emerging technology evaluation and adoption',
          price: '$8,000 - $30,000',
          features: ['Technology research', 'Proof of concept', 'Pilot programs', 'Adoption strategies'],
          icon: Sparkles
        },
        {
          name: 'Performance Optimization',
          description: 'System and application performance improvement',
          price: '$10,000 - $40,000',
          features: ['Performance analysis', 'Optimization strategies', 'Implementation support', 'Monitoring setup'],
          icon: Zap
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, cloud, cybersecurity, data analytics, and digital transformation solutions." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Services
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technology Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology services designed to accelerate your business growth and digital transformation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get a Quote
              </Link>
              
              <Link
                href="#services"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center"
              >
                <Eye className="w-5 h-5 mr-2" />
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Service Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of technology services
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-slate-400">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-700/50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <service.icon className="w-5 h-5 text-cyan-400 mr-2" />
                          <h4 className="font-semibold text-white">{service.name}</h4>
                        </div>
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                      </div>
                      
                      <p className="text-slate-300 text-sm mb-3">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-xs text-slate-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-1" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Link
                    href={`/services/${category.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <span className="font-medium">View Details</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We deliver exceptional value through expertise, innovation, and proven results
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Proven Expertise',
                description: '15+ years of experience delivering complex technology solutions'
              },
              {
                icon: Users2,
                title: 'Expert Team',
                description: 'Certified professionals with deep domain knowledge'
              },
              {
                icon: ZapIcon,
                title: 'Fast Delivery',
                description: 'Agile methodologies ensure rapid project completion'
              },
              {
                icon: Shield,
                title: 'Quality Assured',
                description: 'Rigorous testing and quality assurance processes'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our technology solutions can transform your business and drive growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Link>
                
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get a Quote
                </Link>
              </div>
              
              <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free Initial Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Custom Solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Ongoing Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;