import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Brain
  Shield
  Rocket
  Lock
  Cpu
  Code
  Users
  Globe
  Heart
  TrendingUp
  Zap
  Database
  Network
  Server
  Cloud
  FileText
  BarChart3
  MessageCircle
  Phone
  Mail
  MapPin
  ArrowRight
  Star
  CheckCircle
  Clock
} from "lucide-react"
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025, SPECIALIZED_SERVICES } from "@/data/innovativeMicroSaasServices2025"
export function ServicesOverview() {
  const serviceCategories = [
    {
      id: 'ai-analytics',na,
  m: e: 'AI & Analytics',ic,
  o: n: Brain,col,
  o: r: 'from-zion-cyan to-zion-purple',descripti,
  o: n: 'Cutting-edge artificial intelligence and advanced analytics solutions',servic,
  e: s: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('AI'))
    }, {
      id: 'quantum-computing',na,
  m: e: 'Quantum Computing',ic,
  o: n: Rocket,col,
  o: r: 'from-zion-blue to-zion-cyan',descripti,
  o: n: 'Next-generation quantum computing and quantum machine learning',servic,
  e: s: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Quantum'))
    }, {
      id: 'blockchain',na,
  m: e: 'Blockchain & Web3',ic,
  o: n: Lock,col,
  o: r: 'from-zion-purple to-zion-blue',descripti,
  o: n: 'Decentralized solutions and blockchain technology platforms',servic,
  e: s: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Blockchain'))
    }, {
      id: 'iot-edge',na,
  m: e: 'IoT & Edge Computing',ic,
  o: n: Cpu,col,
  o: r: 'from-zion-green to-zion-cyan',descripti,
  o: n: 'Internet of Things and edge computing solutions',servic,
  e: s: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('IoT'))
    }, {
      id: 'cybersecurity',na,
  m: e: 'Cybersecurity',ic,
  o: n: Shield,col,
  o: r: 'from-zion-purple to-zion-red',descripti,
  o: n: 'Advanced security and threat protection solutions',servic,
  e: s: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Cybersecurity'))
    }, {
      id: 'digital-twin',na,
  m: e: 'Digital Twin',ic,
  o: n: Server,col,
  o: r: 'from-zion-blue to-zion-purple',descripti,
  o: n: 'Virtual replicas and simulation platforms',servic,
  e: s: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Digital Twin'))
    }, {
      id: 'sustainability',na,
  m: e: 'Sustainability',ic,
  o: n: Globe,col,
  o: r: 'from-zion-green to-zion-blue',descripti,
  o: n: 'Environmental monitoring and sustainability solutions',servic,
  e: s: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Sustainability'))
    }, {
      id: 'hr-talent',na,
  m: e: 'HR & Talent',ic,
  o: n: Users,col,
  o: r: 'from-zion-pink to-zion-purple',descripti,
  o: n: 'Human resources and talent management platforms',servic,
  e: s: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('HR'))
    }, {
      id: 'content-creation',na,
  m: e: 'Content Creation',ic,
  o: n: Code,col,
  o: r: 'from-zion-orange to-zion-purple',descripti,
  o: n: 'AI-powered content generation and management',servic,
  e: s: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Content'))
    }, {
      id: 'legal-tech',na,
  m: e: 'Legal Tech',ic,
  o: n: FileText,col,
  o: r: 'from-zion-purple to-zion-cyan',descripti,
  o: n: 'Legal technology and compliance solutions',servic,
  e: s: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Legal'))
    }, {
      id: 'fintech',na,
  m: e: 'FinTech',ic,
  o: n: BarChart3,col,
  o: r: 'from-zion-green to-zion-blue',descripti,
  o: n: 'Financial technology and advisory platforms',servic,
  e: s: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('FinTech'))
    }, {
      id: 'healthcare-ai',na,
  m: e: 'Healthcare AI',ic,
  o: n: Heart,col,
  o: r: 'from-zion-pink to-zion-purple',descripti,
  o: n: 'Healthcare artificial intelligence solutions',servic,
  e: s: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Healthcare'))
    }
  ]
  return (
    <div className="py-20 bg-futuristic relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="cyber-grid w-full h-full"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Header */}
        <motion.div
          className="className="text-center mb-16";"
          initial={ opaci,
  t: y: 0, y: 20 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.6 }
        >
          <h1 className="heading-responsive font-bold mb-6">
            <span className="text-gradient neon-text-cyan">Comprehensive Technology</span>
            <br />
            <span className="text-white">Services Portfolio</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Discover our complete range of innovative micro SAAS services, IT solutions, and AI platforms.
            From cutting-edge quantum computing to practical business applications, we provide the technology
            solutions your business needs to thrive in the digital age.
          </p>
        </motion.div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-3 x,
  l:grid-cols-4 gap-6 mb-16">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="className="group";"
              initial={ opaci,
  t: y: 0, y: 30 }
              whileInView={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
              whileHover={ y: -10 }
            >
              <Link to={`/services/${category.id}`} className="block">
                <div className="card-futuristic h-full,
  hove: r:border-zion-cyan/50 transition-all duration-300">
                  {/* Category Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Category Info */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hov,
  e: r:text-zion-cyan transition-colors duration-300 text-center">
                    {category.name}
                  </h3>

                  <p className="text-zion-slate-light text-sm text-center mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Service Count */}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan mb-1">
                      {category.services.length}
                    </div>
                    <div className="text-xs text-zion-slate-light">
                      Services Available
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hov,
  e: r:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-zion-cyan" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Services */}
        <motion.div
          className="className="mb-16";"
          initial={ opaci,
  t: y: 0, y: 20 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.6 }
        >
          <h2 className="heading-responsive font-bold mb-8 text-center">
            <span className="text-gradient neon-text-purple">Featured Services</span>
          </h2>

          <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-8">
            {INNOVATIVE_MICRO_SAAS_SERVICES_2025.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                className="className="card-futuristic group";"
                initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -30 : 30 }
                whileInView={ opaci,
  t: y: 1, x: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                whileHover={ y: -5 }
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hov,
  e: r:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light leading-relaxed mb-3">
                      {service.description}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                    <div className="text-sm text-zion-slate-light">per month</div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-cyan font-medium">{service.category}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      service.innovationLevel === 'Cutting-edge'
                        ? 'bg-zion-cyan/20 text-zion-cyan'
                        : 'bg-zion-purple/20 text-zion-purple'
                    }`}>
                      {service.innovationLevel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-zion-green">
                      <TrendingUp className="w-4 h-4" />
                      <span>R,
  O: I: {service.roi}</span>
                    </div>
                    <div className="text-zion-slate-light">
                      Mark,
  e: t: {service.marketPrice}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-zion-cyan" />
                      <span>{service.supportLevel}</span>
                    </div>
                  </div>

                  <Link
                    to={`/services/${service.id}`}
                    className="className="btn-futuristic px-4 py-2 text-sm";"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="className="text-center";"
          initial={ opaci,
  t: y: 0, y: 30 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.8 }
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10 rounded-2xl p-12 border border-zion-cyan/20">
            <h2 className="heading-responsive font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Get in touch with our technology experts to discuss your specific needs and discover
              how our innovative solutions can drive your business forward.
            </p>

            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="className="btn-futuristic px-8 py-4 text-lg";"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>

              <a
                href="t,
  e: l:+13024640950"
                className="className="btn-neon px-8 py-4 text-lg";"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call No,
  w: +1 302 464 0950
              </a>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1,
  m: d: grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 rounded-xl bg-zion-slate-light/5 border border-zion-cyan/20">
                <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <p className="font-medium text-white mb-1">Address</p>
                <p className="text-sm text-zion-slate-light">364 E Main St STE 1008</p>
                <p className="text-sm text-zion-slate-light">Middletown DE 19709</p>
              </div>

              <div className="text-center p-4 rounded-xl bg-zion-slate-light/5 border border-zion-purple/20">
                <Mail className="w-8 h-8 text-zion-purple mx-auto mb-2" />
                <p className="font-medium text-white mb-1">Email</p>
                <a href="mail,
  t: o:kleber@ziontechgroup.com" className="text-zion-cyan,
  hove: r:text-zion-purple transition-colors duration-300 text-sm">
                  kleber@ziontechgroup.com
                </a>
              </div>

              <div className="text-center p-4 rounded-xl bg-zion-slate-light/5 border border-zion-blue/20">
                <Globe className="w-8 h-8 text-zion-blue mx-auto mb-2" />
                <p className="font-medium text-white mb-1">Website</p>
                <a href="htt,
  p: s://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hove,
  r:text-zion-blue transition-colors duration-300 text-sm">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}