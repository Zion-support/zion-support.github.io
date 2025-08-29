import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  ShoppingCart, 
  MessageCircle, 
  Users, 
  BookOpen, 
  DollarSign,
  Star,
  TrendingUp,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Target,
  Globe,
  Lock,
  Database,
  Network,
  Atom,
  Bot,
  Heart,
  BarChart3,
  Cog,
  Leaf,
  Satellite
} from 'lucide-react';

const ComprehensivePricingGuide2027 = () => {
  const serviceCategories = [
    {
      name: "AI & Machine Learning Services",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      services: [
        {
          name: "AI Business Intelligence Platform",
          description: "Advanced analytics and business intelligence powered by AI",
          starter: "$2,500/month",
          professional: "$8,500/month",
          enterprise: "$25,000/month",
          features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models", "Data Visualization"],
          href: "/services/ai-business-intelligence",
          popular: true
        },
        {
          name: "AI Sales Copilot",
          description: "Intelligent sales automation and lead management",
          starter: "$1,200/month",
          professional: "$4,500/month",
          enterprise: "$12,000/month",
          features: ["Lead Scoring", "Sales Forecasting", "CRM Integration", "Performance Analytics"],
          href: "/services/ai-sales-copilot"
        },
        {
          name: "AI Compliance Assistant",
          description: "Automated regulatory compliance and risk management",
          starter: "$1,800/month",
          professional: "$6,000/month",
          enterprise: "$18,000/month",
          features: ["Regulatory Monitoring", "Risk Assessment", "Compliance Reporting", "Audit Trails"],
          href: "/services/ai-compliance-assistant"
        },
        {
          name: "LLM Content Studio",
          description: "AI-powered content creation and management platform",
          starter: "$800/month",
          professional: "$2,500/month",
          enterprise: "$8,000/month",
          features: ["Content Generation", "SEO Optimization", "Brand Voice Consistency", "Multi-language Support"],
          href: "/services/llm-content-studio"
        },
        {
          name: "AI Healthcare Analytics",
          description: "Healthcare data insights and predictive medicine",
          starter: "$3,000/month",
          professional: "$10,000/month",
          enterprise: "$30,000/month",
          features: ["Patient Risk Assessment", "Treatment Optimization", "Clinical Decision Support", "Population Health Analytics"],
          href: "/services/ai-healthcare-analytics"
        },
        {
          name: "AI Autonomous Business Operations",
          description: "Fully autonomous business operations platform",
          starter: "$2,500/month",
          professional: "$8,500/month",
          enterprise: "$25,000/month",
          features: ["AI Decision Making", "Process Automation", "Performance Optimization", "Intelligent Security"],
          href: "/services/ai-autonomous-business-operations"
        }
      ]
    },
    {
      name: "Cloud & DevOps Solutions",
      icon: Cloud,
      color: "from-blue-600 to-cyan-600",
      services: [
        {
          name: "Cloud DevOps Platform",
          description: "End-to-end cloud infrastructure and automation",
          starter: "$2,000/month",
          professional: "$8,000/month",
          enterprise: "$25,000/month",
          features: ["Infrastructure as Code", "CI/CD Pipelines", "Monitoring & Alerting", "Auto-scaling"],
          href: "/services/cloud-devops",
          popular: true
        },
        {
          name: "Cloud FinOps Optimizer",
          description: "Cloud cost optimization and financial management",
          starter: "$1,500/month",
          professional: "$5,000/month",
          enterprise: "$15,000/month",
          features: ["Cost Analysis", "Resource Optimization", "Budget Management", "ROI Tracking"],
          href: "/services/cloud-finops-optimizer"
        },
        {
          name: "FinOps Advisor",
          description: "Strategic cloud financial operations consulting",
          starter: "$2,500/month",
          professional: "$8,000/month",
          enterprise: "$20,000/month",
          features: ["Cost Strategy", "Vendor Management", "Performance Optimization", "Compliance"],
          href: "/services/finops-advisor"
        }
      ]
    },
    {
      name: "Cybersecurity & Compliance",
      icon: Shield,
      color: "from-red-600 to-orange-600",
      services: [
        {
          name: "AI Cybersecurity Suite",
          description: "Advanced AI-powered security solutions",
          starter: "$3,500/month",
          professional: "$12,000/month",
          enterprise: "$35,000/month",
          features: ["Threat Detection", "Behavioral Analysis", "Incident Response", "Security Automation"],
          href: "/services/ai-cybersecurity-suite",
          popular: true
        },
        {
          name: "Zero Trust Network Architecture",
          description: "Modern security framework implementation",
          starter: "$4,000/month",
          professional: "$15,000/month",
          enterprise: "$40,000/month",
          features: ["Identity Verification", "Micro-segmentation", "Continuous Monitoring", "Access Control"],
          href: "/services/zero-trust-network-architecture"
        },
        {
          name: "AI Compliance Copilot",
          description: "Intelligent compliance automation platform",
          starter: "$2,000/month",
          professional: "$7,000/month",
          enterprise: "$20,000/month",
          features: ["Regulatory Updates", "Policy Management", "Compliance Monitoring", "Audit Preparation"],
          href: "/services/ai-compliance-copilot"
        }
      ]
    },
    {
      name: "Digital Transformation",
      icon: Rocket,
      color: "from-green-600 to-emerald-600",
      services: [
        {
          name: "Digital Twin Platform",
          description: "Virtual representation of physical systems",
          starter: "$5,000/month",
          professional: "$20,000/month",
          enterprise: "$50,000/month",
          features: ["Real-time Monitoring", "Predictive Maintenance", "Simulation", "Performance Optimization"],
          href: "/services/digital-twin",
          popular: true
        },
        {
          name: "Digital Transformation Consulting",
          description: "Strategic digital transformation guidance",
          starter: "$3,000/month",
          professional: "$10,000/month",
          enterprise: "$25,000/month",
          features: ["Strategy Development", "Process Optimization", "Technology Selection", "Change Management"],
          href: "/services/digital-transformation"
        },
        {
          name: "IT Infrastructure Modernization",
          description: "Legacy system modernization and optimization",
          starter: "$4,000/month",
          professional: "$15,000/month",
          enterprise: "$40,000/month",
          features: ["System Assessment", "Migration Planning", "Performance Optimization", "Scalability"],
          href: "/services/it-infrastructure"
        }
      ]
    },
    {
      name: "IoT & Edge Computing",
      icon: Cpu,
      color: "from-indigo-600 to-purple-600",
      services: [
        {
          name: "IoT Edge Platform",
          description: "Intelligent edge computing and IoT management",
          starter: "$2,500/month",
          professional: "$10,000/month",
          enterprise: "$30,000/month",
          features: ["Edge Analytics", "Device Management", "Real-time Processing", "Security"],
          href: "/services/iot-edge"
        },
        {
          name: "Smart City Solutions",
          description: "IoT infrastructure for smart city development",
          starter: "$10,000/month",
          professional: "$50,000/month",
          enterprise: "$150,000/month",
          features: ["Traffic Management", "Environmental Monitoring", "Public Safety", "Energy Management"],
          href: "/services/iot-edge"
        }
      ]
    },
    {
      name: "Emerging Technologies",
      icon: Star,
      color: "from-yellow-600 to-orange-600",
      services: [
        {
          name: "Quantum Computing Solutions",
          description: "Next-generation quantum computing access",
          starter: "$15,000/month",
          professional: "$50,000/month",
          enterprise: "$150,000/month",
          features: ["Quantum Processing", "AI Integration", "Quantum Security", "Quantum Databases"],
          href: "/services/quantum-computing-solutions",
          popular: true
        },
        {
          name: "Blockchain Enterprise Solutions",
          description: "Enterprise blockchain and DeFi platforms",
          starter: "$5,000/month",
          professional: "$20,000/month",
          enterprise: "$60,000/month",
          features: ["Smart Contracts", "DeFi Protocols", "Enterprise Integration", "Security"],
          href: "/services/blockchain-enterprise-solutions"
        },
        {
          name: "Space Technology Solutions",
          description: "Satellite and space technology applications",
          starter: "$20,000/month",
          professional: "$100,000/month",
          enterprise: "$300,000/month",
          features: ["Satellite Data", "Space Analytics", "Earth Observation", "Navigation"],
          href: "/services/space-tech"
        }
      ]
    },
    {
      name: "Micro SaaS Solutions",
      icon: ShoppingCart,
      color: "from-pink-600 to-rose-600",
      services: [
        {
          name: "AI Auto Email Responder",
          description: "Intelligent email automation and CRM integration",
          starter: "$200/month",
          professional: "$800/month",
          enterprise: "$2,500/month",
          features: ["Smart Responses", "CRM Integration", "Analytics", "Customization"],
          href: "/services/ai-auto-email-responder"
        },
        {
          name: "Customer Feedback Surveys",
          description: "AI-powered feedback collection and analysis",
          starter: "$150/month",
          professional: "$600/month",
          enterprise: "$2,000/month",
          features: ["Survey Creation", "AI Analysis", "Insights Dashboard", "Integration"],
          href: "/services/mobile-feedback-surveys"
        },
        {
          name: "Micro SaaS Platform",
          description: "Scalable software solutions for niche markets",
          starter: "$1,000/month",
          professional: "$5,000/month",
          enterprise: "$15,000/month",
          features: ["Custom Development", "Scalability", "Maintenance", "Support"],
          href: "/services/micro-saas-solutions"
        }
      ]
    },
    {
      name: "Industry-Specific Solutions",
      icon: Target,
      color: "from-teal-600 to-blue-600",
      services: [
        {
          name: "Healthcare Technology",
          description: "Digital health and medical technology solutions",
          starter: "$5,000/month",
          professional: "$20,000/month",
          enterprise: "$60,000/month",
          features: ["Patient Management", "Telemedicine", "Medical Analytics", "Compliance"],
          href: "/services/healthcare-tech"
        },
        {
          name: "Green IT Solutions",
          description: "Sustainable technology and energy optimization",
          starter: "$2,000/month",
          professional: "$8,000/month",
          enterprise: "$25,000/month",
          features: ["Energy Monitoring", "Carbon Tracking", "Sustainability Reporting", "Optimization"],
          href: "/services/green-it"
        },
        {
          name: "Manufacturing Solutions",
          description: "Industry 4.0 and smart manufacturing",
          starter: "$8,000/month",
          professional: "$30,000/month",
          enterprise: "$100,000/month",
          features: ["Process Automation", "Quality Control", "Predictive Maintenance", "Supply Chain"],
          href: "/services/manufacturing-solutions"
        }
      ]
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Complete pricing information for all our AI, IT, and technology services. Transparent pricing with detailed features and benefits for every service tier."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-400 text-sm font-semibold rounded-full border border-blue-500/30">
              <DollarSign className="w-4 h-4 mr-2" />
              2027 Pricing Guide
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pricing Guide
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transparent pricing for all our technology services. Choose the plan that fits your business 
            needs and scale as you grow with our flexible pricing options.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Sales
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Categories & Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete service portfolio with transparent pricing across all tiers
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{category.name}</h3>
                </div>

                <div className="space-y-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      className={`bg-slate-700/50 rounded-xl p-6 border ${
                        service.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-600'
                      } hover:border-blue-400 transition-all duration-300`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    >
                      {service.popular && (
                        <div className="flex items-center mb-3">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          <span className="text-sm font-semibold text-yellow-400">Most Popular</span>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <div className="lg:col-span-2">
                          <h4 className="text-xl font-semibold text-white mb-3">{service.name}</h4>
                          <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                          
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h5>
                            <ul className="space-y-1">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="lg:col-span-2">
                          <div className="bg-slate-600/50 rounded-lg p-4">
                            <h5 className="text-sm font-semibold text-gray-200 mb-3 text-center">Pricing Tiers</h5>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-300">Starter:</span>
                                <span className="text-blue-400 font-semibold">{service.starter}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-300">Professional:</span>
                                <span className="text-purple-400 font-semibold">{service.professional}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-300">Enterprise:</span>
                                <span className="text-green-400 font-semibold">{service.enterprise}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <Link
                              to={service.href}
                              className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </div>
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
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Custom Pricing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our team to discuss your specific requirements and get a customized solution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="p-4 bg-blue-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-400 font-semibold">{contactInfo.phone}</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="p-4 bg-purple-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-purple-400 font-semibold">{contactInfo.email}</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="p-4 bg-green-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-green-400 font-semibold text-sm">{contactInfo.address}</p>
            </motion.div>
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Request Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
