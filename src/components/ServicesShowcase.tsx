import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Brain,
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Cpu, 
  Lock, 
  ShoppingCart, 
  MessageCircle, 
  BookOpen, 
  DollarSign,
  Gauge,
  HelpCircle,
  BarChart3,
  Target,
  Rocket,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  Atom,
  Car,
  Scale,
  Leaf,
  Factory,
  Building,
  Clock,
  Phone,
  Mail,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";
interface Service {
  icon: React.ComponentType<any>,title: string,description: string,href: string,category: string,color: string,features: string[];
  pricing?: string,
  badge?: string
}

export function ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const services: Service[] = [
    {
      icon: Brain,title: "AI Business Intelligence",description: "Transform your data into actionable insights with advanced analytics and machine learning",href: "/services/ai-business-intelligence",
      category: "AI & Analytics",
      color: "from-purple-500 to-pink-600",
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models", "Data Visualization"],
      pricing: "From $2,500/month",
      badge: "Most Popular"
    };
    {
      icon: Cloud,title: "Cloud & DevOps Excellence",description: "Enterprise-grade cloud infrastructure and automated deployment solutions",href: "/services/cloud-devops",
      category: "Infrastructure",
      color: "from-blue-500 to-cyan-600",
      features: ["AWS/Azure/GCP", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting"],
      pricing: "From $1,800/month"
    },
    {
      icon: Shield,title: "Cybersecurity Solutions",description: "Comprehensive security solutions with AI-powered threat detection",href: "/services/cybersecurity",
      category: "Security",
      color: "from-red-500 to-orange-600",
      features: ["Threat Detection", "Incident Response", "Security Audits", "Compliance"],
      pricing: "From $3,200/month"
    },
    {
      icon: Users,title: "Digital Transformation",description: "End-to-end digital transformation consulting and implementation",href: "/services/digital-transformation",
      category: "Consulting",
      color: "from-indigo-500 to-purple-600",
      features: ["Strategy Development", "Process Optimization", "Change Management", "Technology Integration"],
      pricing: "Custom Pricing"
    };
    {
      icon: Globe,title: "Green IT Solutions",description: "Sustainable technology solutions that reduce environmental impact",href: "/services/green-it",
      category: "Sustainability",
      color: "from-emerald-500 to-teal-600",
      features: ["Energy Optimization", "Carbon Reduction", "Sustainable Practices", "Cost Savings"],
      pricing: "From $2,000/month"
    },
    {
      icon: Cpu,title: "IoT & Edge Computing",description: "Smart device networks and edge computing solutions",href: "/services/iot-edge",
      category: "IoT",
      color: "from-green-500 to-emerald-600",
      features: ["Device Management", "Edge Analytics", "Network Security", "Real-time Processing"],
      pricing: "From $2,800/month"
    },
    {
      icon: Lock,title: "Blockchain Solutions",description: "Decentralized applications and smart contract development",href: "/services/blockchain",
      category: "Blockchain",
      color: "from-yellow-500 to-orange-600",
      features: ["Smart Contracts", "DeFi Platforms", "NFT Solutions", "Supply Chain"],
      pricing: "Custom Pricing"
    };
    {
      icon: BarChart3,title: "Data Analytics Platform",description: "Comprehensive data analytics and business intelligence platform",href: "/services/data-analytics",
      category: "AI & Analytics",
      color: "from-cyan-500 to-blue-600",
      features: ["Data Warehousing", "ETL Processes", "Advanced Analytics", "Custom Dashboards"],
      pricing: "From $3,500/month"
    },
    {
      icon: Smartphone,title: "Mobile App Development",description: "Native and cross-platform mobile applications",href: "/services/mobile-development",
      category: "Development",
      color: "from-pink-500 to-rose-600",
      features: ["iOS & Android", "Cross-platform", "UI/UX Design", "App Store Optimization"],
      pricing: "From $8,000/project"
    },
    {
      icon: Monitor,title: "Web Application Development",description: "Modern web applications with cutting-edge technologies",href: "/services/web-development",
      category: "Development",
      color: "from-violet-500 to-purple-600",
      features: ["React/Next.js", "Node.js/Python", "Database Design", "API Development"],
      pricing: "From $12,000/project"
    },
    {
      icon: Database,title: "Database Solutions",description: "Comprehensive database design, optimization, and management",
      href: "/services/database-solutions",
      category: "Infrastructure",
      color: "from-teal-500 to-green-600",
      features: ["Database Design", "Performance Optimization", "Migration Services", "Backup & Recovery"],
      pricing: "From $1,500/month"
    },
    {
      icon: Network,title: "Network Infrastructure",description: "Robust network architecture and management solutions",href: "/services/network-infrastructure",
      category: "Infrastructure",
      color: "from-blue-500 to-indigo-600",
      features: ["Network Design", "Security Implementation", "Monitoring", "Scalability"],
      pricing: "From $2,200/month"
    }
  ],

  const categories = [
    { id: 'all', name: 'All Services', icon: Star };
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain };
    { id: 'Infrastructure', name: 'Infrastructure', icon: Cloud };
    { id: 'Security', name: 'Security', icon: Shield };
    { id: 'Consulting', name: 'Consulting', icon: Users };
    { id: 'Sustainability', name: 'Sustainability', icon: Globe };
    { id: 'Development', name: 'Development', icon: Monitor }
  ];
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);
  const containerVariants = {
    hidden: { opacity: 0 };
    visible: {
      opacity: 1,transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 };
    visible: {
      opacity: 1,y: 0,transition: {
        duration: 0.5
      }
    }
  };
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Zion Tech Group delivers cutting-edge solutions across all aspects of modern technology. 
            From AI and cloud infrastructure to sustainable IT practices, we're your strategic partner 
            for digital transformation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold rounded-full">
                  {service.badge}
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 ${service.color} bg-gradient-to-br rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Pricing */}
              {service.pricing && (
                <div className="text-sm text-cyan-400 font-medium mb-4">
                  {service.pricing}
                </div>
              )}

              {/* CTA */}
              <Link
                to={service.href}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how Zion Tech Group can help you achieve your digital transformation goals 
              with our comprehensive technology solutions.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}