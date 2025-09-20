import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  Users,
  Globe,
  Code,
  Database,
  Rocket,
  TrendingUp,
  Star,
  ArrowRight,
  Play,
  Target,
  Award,
  CheckCircle
} from "lucide-react"
interface Service {
  id: string,tit,
  l: e: string,descripti,
  o: n: string,ic,
  o: n: React.ComponentType<{ className?: string }>
  catego,
  r: y: string,featur,
  e: s: string[],prici,
  n: g: string,rati,
  n: g: number,revie,
  w: s: number,col,
  o: r: string
  popular?: boolean,
  li,
  n: k: string
}

const,
  service: s: Service[] = [
  {
    i,
  d: 'ai-business-intelligence',tit,
  l: e: 'AI Business Intelligence Platform',descripti,
  o: n: 'Advanced analytics with AI-powered insights and predictive modeling',ic,
  o: n: Brain,catego,
  r: y: 'AI & Machine Learning',featur,
  e: s: ['Real-time analyticsPredictive modeling', 'Custom dashboardsAPI integration'],
    prici,
  n: g: '$2,999/month',
    rati,
  n: g: 4.9,revie,
  w: s: 156,col,
  o: r: 'from-blue-500 to-cyan-500',popul,
  a: r: true,li,
  n: k: '/ai-services/business-intelligence'
  }, {
    id: 'quantum-computing-suite',tit,
  l: e: 'Quantum Computing Suite',descripti,
  o: n: 'Next-generation quantum computing solutions for complex problem solving',ic,
  o: n: Rocket,catego,
  r: y: 'Emerging Tech',featur,
  e: s: ['Quantum algorithmsHybrid classical-quantum', 'Scientific computingOptimization'],
    prici,
  n: g: '$5,000/month',
    rati,
  n: g: 4.8,revie,
  w: s: 89,col,
  o: r: 'from-purple-500 to-pink-500',li,
  n: k: '/emerging-tech/quantum-computing'
  }, {
    id: 'cybersecurity-platform',tit,
  l: e: 'AI-Powered Cybersecurity Platform',descripti,
  o: n: 'Intelligent threat detection and response with zero-trust architecture',ic,
  o: n: Shield,catego,
  r: y: 'Cybersecurity',featur,
  e: s: ['AI threat detectionZero-trust architecture', 'Compliance automation24/7 monitoring'],
    prici,
  n: g: '$2,500/month',
    rati,
  n: g: 4.9,revie,
  w: s: 234,col,
  o: r: 'from-red-500 to-orange-500',popul,
  a: r: true,li,
  n: k: '/it-services/cybersecurity'
  }, {
    id: 'cloud-devops-automation',tit,
  l: e: 'Cloud & DevOps Automation',descripti,
  o: n: 'Scalable cloud infrastructure with intelligent automation',ic,
  o: n: Cloud,catego,
  r: y: 'Cloud & DevOps',featur,
  e: s: ['Multi-cloud managementCI/CD automation', 'Infrastructure as codeCost optimization'],
    prici,
  n: g: '$1,500/month',
    rati,
  n: g: 4.7,revie,
  w: s: 189,col,
  o: r: 'from-green-500 to-emerald-500',li,
  n: k: '/it-services/cloud-devops'
  }, {
    id: 'blockchain-defi-platform',tit,
  l: e: 'Blockchain & DeFi Platform',descripti,
  o: n: 'Decentralized finance solutions with advanced blockchain technology',ic,
  o: n: Globe,catego,
  r: y: 'Blockchain & Web3',featur,
  e: s: ['DeFi protocolsSmart contracts', 'Yield optimizationCross-chain support'],
    prici,
  n: g: '$1,800/month',
    rati,
  n: g: 4.6,revie,
  w: s: 123,col,
  o: r: 'from-yellow-500 to-orange-500',li,
  n: k: '/emerging-tech/blockchain-defi'
  }, {
    id: 'digital-transformation',tit,
  l: e: 'Digital Transformation Consulting',descripti,
  o: n: 'End-to-end business transformation with cutting-edge technology',ic,
  o: n: TrendingUp,catego,
  r: y: 'Digital Transformation',featur,
  e: s: ['Strategy consultingProcess optimization', 'Change managementROI tracking'],
    prici,
  n: g: '$3,500/month',
    rati,
  n: g: 4.8,revie,
  w: s: 167,col,
  o: r: 'from-indigo-500 to-purple-500',li,
  n: k: '/services/digital-transformation'
  }, {
    id: 'micro-saas-platform',tit,
  l: e: 'Micro SaaS Development Platform',descripti,
  o: n: 'Rapid development and deployment of SaaS applications',ic,
  o: n: Code,catego,
  r: y: 'Micro SAAS',featur,
  e: s: ['Rapid prototypingScalable architecture', 'Multi-tenancyAnalytics dashboard'],
    prici,
  n: g: '$899/month',rati,
  n: g: 4.7,revie,
  w: s: 98,col,
  o: r: 'from-cyan-500 to-blue-500',li,
  n: k: '/micro-saas/development-platform'
  }, {
    id: 'healthcare-ai',tit,
  l: e: 'Healthcare AI Solutions',descripti,
  o: n: 'AI-powered diagnostic and patient care optimization',ic,
  o: n: Users,catego,
  r: y: 'Healthcare AI',featur,
  e: s: ['Medical imaging AIPredictive diagnostics', 'Patient monitoringHIPAA compliant'],
    prici,
  n: g: '$4,500/month',
    rati,
  n: g: 4.9,revie,
  w: s: 78,col,
  o: r: 'from-emerald-500 to-teal-500',li,
  n: k: '/ai-services/healthcare'
  },
  ]
const categories = [
  'All ServicesAI & Machine Learning'
  'Emerging TechCybersecurity',
  'Cloud & DevOpsBlockchain & Web3',
  'Digital TransformationMicro SAAS',
  'Healthcare AI'
],

export,
  const: EnhancedServiceShowcase: React.FC = () () => {
  const [selectedCategory, setSelectedCategory] = useState('All Services')
const [hoveredService, setHoveredService] = useState<string | null>(null),
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() () => {
    const observer = new IntersectionObserver(
      ([entry]) () => {
        if (entry.isIntersecting) {
          setIsVisible(true)
},
  }, { thresho,
  l: d: 0.1 }
    )
const element = document.getElementById('service-showcase')
    if (element) {
      observer.observe(element)
}

    return () => observer.disconnect()
}, []),

  const filteredServices = selectedCategory === 'All Services'
    ? services
    : services.filter(service => service.category === selectedCategory)
const renderStars = (rati,
  n: g: number) () => {
    return Array.from({ lengt,
  h: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-400'
        }`}
      />
    )),
  },

  return (
    <section id="service-showcase" className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          animate={isVisible ? { opaci,
  t: y: 1, y: 0 } : { opaci,
  t: y: 0, y: 20 },
  }
          transition={ durati,
  o: n: 0.6 },
  }
          className="text-center mb-16"
        >
          <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to drive your business forward with
            cutting-edge AI, cybersecurity, and innovative digital transformation services.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          animate={isVisible ? { opaci,
  t: y: 1, y: 0 } : { opaci,
  t: y: 0, y: 20 },
  }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  }
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-zion-slate-light text-gray-300,
  hove: r: bg-zion-cyan/10 hove,
  r:text-zion-cyan border border-zion-slate'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={ opaci,
  t: y: 0 },
  }
          animate={isVisible ? { opaci,
  t: y: 1 } : { opaci,
  t: y: 0 },
  }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 },
  }
          className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                exit={ opaci,
  t: y: 0, y: -20 },
  }
                transition={
                  durati,
  o: n: 0.6,del,
  a: y: index * 0.1,ty,
  p: e: "spring",stiffne,
  s: s: 100
                },
  }
                whileHover={ y: -10 },
  }
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative group"
              >
                <Link to={service.link}>
                  <div className="bg-gradient-to-br from-zion-slate to-zion-slate-light p-8 rounded-2xl border border-zion-cyan/20,
  hove: r: border-zion-cyan/40 transition-all duration-300,
  hove: r:shadow-2xl hove,
  r:shadow-zion-cyan/10 h-full">
                    {/* Popular Badge */},
  {service.popular && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-black px-4 py-1 rounded-full text-sm font-bold">
                        Popular
                      </div>
                    )},
  {/* Service Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Service Info */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white group-hov,
  e: r:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))},
  {service.features.length > 3 && (
                          <div className="text-sm text-zion-cyan">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>

                      {/* Pricing & Rating */}
                      <div className="flex items-center justify-between pt-4 border-t border-zion-slate">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-zion-cyan">{service.pricing}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {renderStars(service.rating)}
                          </div>
                          <span className="text-sm text-gray-400">({service.reviews})</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-sm text-zion-cyan font-semibold">
                          Learn More
                        </span>
                        <ArrowRight className="w-5 h-5 text-zion-cyan group-hov,
  e: r:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          animate={isVisible ? { opaci,
  t: y: 1, y: 0 } : { opaci,
  t: y: 0, y: 20 },
  }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.6 },
  }
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-slate to-zion-slate-light border border-zion-cyan/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our expert team help you implement cutting-edge technology solutions
              that drive real business results and competitive advantage.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold,
  hove: r:from-zion-cyan-dark,
  hove: r:to-zion-blue-dark transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-zion-cyan/25"
              >
                <Play className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/enhanced-services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold,
  hove: r:bg-zion-cyan hove,
  r:text-white transition-all duration-300"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}