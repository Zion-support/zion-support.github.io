import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
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
} from "lucide-react"
interface Service {
  ic,
  o: n: React.ComponentType<any>,tit,
  l: e: string,descripti,
  o: n: string,hr,
  e: f: string,catego,
  r: y: string,col,
  o: r: string,featur,
  e: s: string[]
  pricing?: string,
  badge?: string
}

export function ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
const,
  service: s: Service[] = [
    {
      ico,
  n: Brain,tit,
  l: e: "AI Business Intelligence",descripti,
  o: n: "Transform your data into actionable insights with advanced analytics and machine learning",hr,
  e: f: "/services/ai-business-intelligence",
      catego,
  r: y: "AI & Analytics",
      col,
  o: r: "from-purple-500 to-pink-600",
      featur,
  e: s: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models", "Data Visualization"],
      prici,
  n: g: "From $2,500/month",
      bad,
  g: e: "Most Popular"
    }, {
      ic,
  o: n: Cloud,tit,
  l: e: "Cloud & DevOps Excellence",descripti,
  o: n: "Enterprise-grade cloud infrastructure and automated deployment solutions",hr,
  e: f: "/services/cloud-devops",
      catego,
  r: y: "Infrastructure",
      col,
  o: r: "from-blue-500 to-cyan-600",
      featur,
  e: s: ["AWS/Azure/GCP", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting"],
      prici,
  n: g: "From $1,800/month"
    },
    {
      ic,
  o: n: Shield,tit,
  l: e: "Cybersecurity Solutions",descripti,
  o: n: "Comprehensive security solutions with AI-powered threat detection",hr,
  e: f: "/services/cybersecurity",
      catego,
  r: y: "Security",
      col,
  o: r: "from-red-500 to-orange-600",
      featur,
  e: s: ["Threat Detection", "Incident Response", "Security Audits", "Compliance"],
      prici,
  n: g: "From $3,200/month"
    },
    {
      ic,
  o: n: Users,tit,
  l: e: "Digital Transformation",descripti,
  o: n: "End-to-end digital transformation consulting and implementation",hr,
  e: f: "/services/digital-transformation",
      catego,
  r: y: "Consulting",
      col,
  o: r: "from-indigo-500 to-purple-600",
      featur,
  e: s: ["Strategy Development", "Process Optimization", "Change Management", "Technology Integration"],
      prici,
  n: g: "Custom Pricing"
    }, {
      ic,
  o: n: Globe,tit,
  l: e: "Green IT Solutions",descripti,
  o: n: "Sustainable technology solutions that reduce environmental impact",hr,
  e: f: "/services/green-it",
      catego,
  r: y: "Sustainability",
      col,
  o: r: "from-emerald-500 to-teal-600",
      featur,
  e: s: ["Energy Optimization", "Carbon Reduction", "Sustainable Practices", "Cost Savings"],
      prici,
  n: g: "From $2,000/month"
    },
    {
      ic,
  o: n: Cpu,tit,
  l: e: "IoT & Edge Computing",descripti,
  o: n: "Smart device networks and edge computing solutions",hr,
  e: f: "/services/iot-edge",
      catego,
  r: y: "IoT",
      col,
  o: r: "from-green-500 to-emerald-600",
      featur,
  e: s: ["Device Management", "Edge Analytics", "Network Security", "Real-time Processing"],
      prici,
  n: g: "From $2,800/month"
    },
    {
      ic,
  o: n: Lock,tit,
  l: e: "Blockchain Solutions",descripti,
  o: n: "Decentralized applications and smart contract development",hr,
  e: f: "/services/blockchain",
      catego,
  r: y: "Blockchain",
      col,
  o: r: "from-yellow-500 to-orange-600",
      featur,
  e: s: ["Smart Contracts", "DeFi Platforms", "NFT Solutions", "Supply Chain"],
      prici,
  n: g: "Custom Pricing"
    }, {
      ic,
  o: n: BarChart3,tit,
  l: e: "Data Analytics Platform",descripti,
  o: n: "Comprehensive data analytics and business intelligence platform",hr,
  e: f: "/services/data-analytics",
      catego,
  r: y: "AI & Analytics",
      col,
  o: r: "from-cyan-500 to-blue-600",
      featur,
  e: s: ["Data Warehousing", "ETL Processes", "Advanced Analytics", "Custom Dashboards"],
      prici,
  n: g: "From $3,500/month"
    },
    {
      ic,
  o: n: Smartphone,tit,
  l: e: "Mobile App Development",descripti,
  o: n: "Native and cross-platform mobile applications",hr,
  e: f: "/services/mobile-development",
      catego,
  r: y: "Development",
      col,
  o: r: "from-pink-500 to-rose-600",
      featur,
  e: s: ["iOS & Android", "Cross-platform", "UI/UX Design", "App Store Optimization"],
      prici,
  n: g: "From $8,000/project"
    },
    {
      ic,
  o: n: Monitor,tit,
  l: e: "Web Application Development",descripti,
  o: n: "Modern web applications with cutting-edge technologies",hr,
  e: f: "/services/web-development",
      catego,
  r: y: "Development",
      col,
  o: r: "from-violet-500 to-purple-600",
      featur,
  e: s: ["React/Next.js", "Node.js/Python", "Database Design", "API Development"],
      prici,
  n: g: "From $12,000/project"
    },
    {
      ic,
  o: n: Database,tit,
  l: e: "Database Solutions",descripti,
  o: n: "Comprehensive database design, optimization, and management",
      hr,
  e: f: "/services/database-solutions",
      catego,
  r: y: "Infrastructure",
      col,
  o: r: "from-teal-500 to-green-600",
      featur,
  e: s: ["Database Design", "Performance Optimization", "Migration Services", "Backup & Recovery"],
      prici,
  n: g: "From $1,500/month"
    },
    {
      ic,
  o: n: Network,tit,
  l: e: "Network Infrastructure",descripti,
  o: n: "Robust network architecture and management solutions",hr,
  e: f: "/services/network-infrastructure",
      catego,
  r: y: "Infrastructure",
      col,
  o: r: "from-blue-500 to-indigo-600",
      featur,
  e: s: ["Network Design", "Security Implementation", "Monitoring", "Scalability"],
      prici,
  n: g: "From $2,200/month"
    },
  ],

  const categories = [
    { id: 'all', na,
  m: e: 'All Services', ic,
  o: n: Star }, { id: 'AI & Analytics', na,
  m: e: 'AI & Analytics', ic,
  o: n: Brain }, { id: 'Infrastructure', na,
  m: e: 'Infrastructure', ic,
  o: n: Cloud }, { id: 'Security', na,
  m: e: 'Security', ic,
  o: n: Shield }, { id: 'Consulting', na,
  m: e: 'Consulting', ic,
  o: n: Users }, { id: 'Sustainability', na,
  m: e: 'Sustainability', ic,
  o: n: Globe }, { id: 'Development', na,
  m: e: 'Development', ic,
  o: n: Monitor },
  ]
const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)
const containerVariants = {
    hidd,
  e: n: { opacit,
  y: 0 }
    visib,
  l: e: {
      opacit,
  y: 1,transiti,
  o: n: {
        staggerChildre,
  n: 0.1
      },
  },
  }
const itemVariants = {
    hidd,
  e: n: { opacit,
  y: 0, y: 20 }
    visib,
  l: e: {
      opacit,
  y: 1,y: 0,transiti,
  o: n: {
        duratio,
  n: 0.5
      },
  },
  }
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6 l,
  g:px-8">
        {/* Header */}
        <motion.div 
          initial={ opaci,
  t: y: 0, y: 30 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          transition={ durati,
  o: n: 0.8 },
  }
          viewport={ on,
  c: e: true },
  }
          className="text-center mb-16"
        >
          <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
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
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          transition={ durati,
  o: n: 0.6 },
  }
          viewport={ on,
  c: e: true },
  }
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) () => {
            const IconComponent = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300,
  hove: r:bg-white/20 border border-white/20'
                }`}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            )
})}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={ on,
  c: e: true },
  }
          className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={ y: -10, sca,
  l: e: 1.02 },
  }
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6,
  hove: r:border-cyan-500/50 transition-all duration-300"
            >
              {/* Badge */},
  {service.badge && (
                <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold rounded-full">
                  {service.badge}
                </div>
              )},
  {/* Icon */}
              <div className={`w-16 h-16 ${service.color} bg-gradient-to-br rounded-2xl flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hov,
  e: r:text-cyan-400 transition-colors duration-300">
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

              {/* Pricing */},
  {service.pricing && (
                <div className="text-sm text-cyan-400 font-medium mb-4">
                  {service.pricing}
                </div>
              )},
  {/* CTA */}
              <Link
                to={service.href}
                className="inline-flex items-center text-cyan-400,
  hove: r: text-cyan-300 font-medium group-hove,
  r:translate-x-1 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={ opaci,
  t: y: 0, y: 30 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          transition={ durati,
  o: n: 0.8 },
  }
          viewport={ on,
  c: e: true },
  }
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
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full,
  hove: r:from-cyan-600,
  hove: r:to-blue-600,
  transform: hover:scale-105 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-full hove,
  r:bg-cyan-500/10 transition-all duration-300"
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