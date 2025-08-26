import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Code, 
  Network, 
  Lock,
  ArrowRight,
  Star,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react';
// Sample featured services data
const featuredServices = [
  {
    id: "ai-automation-suite",
    title: "AI Process Automation Suite",
    description: "Complete workflow automation solution using AI to streamline business processes, reduce manual tasks by 80%, and increase operational efficiency.",
    category: "AI Solutions",
    price: 2999,
    currency: "$",
    tags: ["Process Automation", "RPA", "Workflow Optimization"],
    rating: 4.9,
    reviewCount: 156,
    availability: "2-3 Weeks",
    aiScore: 96,
    icon: Brain,
    color: "from-zion-cyan to-zion-blue"
  },
  {
    id: "multi-cloud-orchestration",
    title: "Multi-Cloud Orchestration Platform",
    description: "Unified management platform for AWS, Azure, and Google Cloud with automated cost optimization, security compliance monitoring, and disaster recovery.",
    category: "Cloud Management",
    price: 4499,
    currency: "$",
    tags: ["Multi-Cloud", "Cost Optimization", "Security"],
    rating: 4.9,
    reviewCount: 78,
    availability: "3-4 Weeks",
    aiScore: 94,
    icon: Cloud,
    color: "from-zion-blue to-zion-purple"
  },
  {
    id: "cybersecurity-suite",
    title: "Advanced Cybersecurity Suite",
    description: "Comprehensive security solution including threat detection, incident response, and compliance management for enterprise environments.",
    category: "Cybersecurity",
    price: 5999,
    currency: "$",
    tags: ["Threat Detection", "Incident Response", "Compliance"],
    rating: 4.8,
    reviewCount: 234,
    availability: "1-2 Weeks",
    aiScore: 95,
    icon: Shield,
    color: "from-zion-purple to-zion-cyan"
  },
  {
    id: "data-analytics-platform",
    title: "AI-Powered Data Analytics Platform",
    description: "Intelligent data analysis platform that provides real-time insights, predictive analytics, and automated reporting capabilities.",
    category: "Data Engineering",
    price: 3499,
    currency: "$",
    tags: ["Data Analytics", "Predictive Insights", "Automation"],
    rating: 4.7,
    reviewCount: 189,
    availability: "2-3 Weeks",
    aiScore: 93,
    icon: TrendingUp,
    color: "from-zion-cyan to-zion-purple"
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence Dashboard",
    description: "Comprehensive BI solution with interactive dashboards, KPI tracking, and automated insights for data-driven decision making.",
    category: "Business Intelligence",
    price: 2499,
    currency: "$",
    tags: ["BI Dashboard", "KPI Tracking", "Insights"],
    rating: 4.8,
    reviewCount: 145,
    availability: "1-2 Weeks",
    aiScore: 91,
    icon: TrendingUp,
    color: "from-zion-blue to-zion-cyan"
  },
  {
    id: "developer-tools",
    title: "AI-Enhanced Developer Tools",
    description: "Advanced development toolkit with AI-powered code review, automated testing, and intelligent debugging capabilities.",
    category: "Developer Tools",
    price: 1999,
    currency: "$",
    tags: ["Code Review", "Testing", "Debugging"],
    rating: 4.9,
    reviewCount: 267,
    availability: "Immediate",
    aiScore: 97,
    icon: Code,
    color: "from-zion-purple to-zion-cyan"
  }
];
const serviceCategories = [
  { name: 'AI & Machine Learning', icon: Brain, count: 25, color: 'from-zion-cyan to-zion-blue' },
  { name: 'Cybersecurity', icon: Shield, count: 18, color: 'from-zion-purple to-zion-cyan' },
  { name: 'Cloud & DevOps', icon: Cloud, count: 22, color: 'from-zion-blue to-zion-purple' },
  { name: 'Data & Analytics', icon: TrendingUp, count: 20, color: 'from-zion-cyan to-zion-purple' },
  { name: 'IoT & Edge Computing', icon: Network, count: 15, color: 'from-zion-purple to-zion-blue' },
  { name: 'Quantum Computing', icon: Rocket, count: 8, color: 'from-zion-blue to-zion-cyan' }
];
export function EnhancedServicesShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #22ddd2 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Featured Technology Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our most popular and innovative services designed to transform your business operations
          </p>
        </motion.div>
        {/* Featured Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Service Header */}
              <div className="p-6 border-b border-zion-cyan/20">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">
                      {service.currency}{service.price?.toLocaleString()}
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      {service.availability}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  {service.description.substring(0, 120)}...
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-white font-medium">{service.rating}</span>
                    <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <TrendingUp className="w-4 h-4" />
                    AI Score: {service.aiScore}
                  </div>
                </div>
              </div>
              {/* Service Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-zion-cyan/10 border border-zion-cyan/30 text-zion-cyan text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Service Categories Overview */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Explore Our Service Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div 
                key={category.name}
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-white font-medium text-sm group-hover:text-zion-cyan transition-colors">
                  {category.name}
                </h4>
                <p className="text-zion-slate-light text-xs mt-1">{category.count} services</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-zion-slate-dark/30 to-zion-purple-dark/30 border border-zion-cyan/20 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Discover how our AI and IT solutions can drive innovation, 
              increase efficiency, and give you a competitive edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white font-semibold rounded-lg transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
