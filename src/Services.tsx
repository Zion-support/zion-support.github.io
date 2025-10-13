import React, { useState } from 'react';';
import { useState, useMemo } from 'react';';
import { useState } from 'react';';
import { motion } from 'framer-motion';';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES } from '../data/comprehensiveServices';';
import React, { useState, useEffect } from 'react';';
import { SEO } from "@/components/SEO";
import React from 'react';';
import { motion } from 'framer-motion';';
import { SEO } from '@/components/SEO';';
import { Link } from 'react-router-dom';';
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Brain,
  Cpu,
  Cloud,
  Shield,
  Rocket,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Globe,
  Settings,
  Database,
  Network
} from 'lucide-react';';
export default function Services() {;
const [searchQuery, setSearchQuery] = useState('');';
const [selectedCategory, setSelectedCategory] = useState('all');';
const serviceCategories = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'ai-ml','
      title: 'AI & Machine Learning','
      icon: Brain,
      color: 'from-purple-500 to-pink-500','
      description: 'Intelligent solutions powered by artificial intelligence','
      services: [
  // TODO: Add items
]
  // TODO: Add items
]
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'AI Autonomous Systems','
          path: '/services/ai-autonomous-systems','
          description: 'Advanced autonomous AI systems that operate independently','
          icon: Brain,
          features: ['Self-learning algorithms', 'Predictive analytics', 'Automated decision making'],'
          pricing: 'Starting from $5,000/month''
        },
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'AI Research Assistant','
          path: '/ai-autonomous-research-assistant','
          description: 'AI-powered research automation and insights','
          icon: Brain,
          features: ['Data analysis', 'Literature review', 'Trend identification'],'
          pricing: 'Starting from $3,000/month''
        },
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'AI Business Intelligence','
          path: '/services/ai-business-intelligence','
          description: 'Advanced analytics and business insights','
          icon: BarChart3,
          features: ['Real-time dashboards', 'Predictive modeling', 'Performance tracking'],'
          pricing: 'Starting from $4,000/month''
        },
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'AI Marketing Automation','
          path: '/services/ai-marketing-automation','
          description: 'Smart marketing optimization and automation','
          icon: Target,
          features: ['Customer segmentation', 'Campaign optimization', 'ROI tracking'],'
          pricing: 'Starting from $2,500/month''
        }
      ]
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'quantum','
      title: 'Quantum Technology','
      icon: Brain,
      color: 'from-blue-500 to-cyan-500','
      description: 'Next-generation quantum computing solutions','
      services: [
  // TODO: Add items
]
  // TODO: Add items
]
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'Quantum Neural Networks','
          path: '/quantum-neural-network-platform','
          description: 'Quantum-powered neural networks for complex problems','
          icon: Brain,
          features: ['Quantum algorithms', 'Superior performance', 'Future-proof technology'],'
          pricing: 'Starting from $15,000/month''
        },
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'Quantum Computing','
          path: '/services/quantum-technology','
          description: 'Quantum computing platforms and solutions','
          icon: Cpu,
          features: ['Quantum supremacy', 'Complex simulations', 'Cryptography'],'
          pricing: 'Starting from $20,000/month''
        }
      ]
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'cybersecurity','
      title: 'Cybersecurity','
      icon: Shield,
      color: 'from-red-500 to-pink-500','
      description: 'Comprehensive security and compliance solutions','
      services: [
  // TODO: Add items
]
  // TODO: Add items
]
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'Cybersecurity Services','
          path: '/services/cybersecurity','
          description: 'Complete security solutions for your business','
          icon: Shield,
          features: ['Threat detection', 'Vulnerability assessment', 'Incident response'],'
          pricing: 'Starting from $3,500/month''
        },
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'SOC2 Compliance Automation','
          path: '/soc2-compliance-automation','
          description: 'Automated compliance management and monitoring','
          icon: Lock,
          features: ['Automated audits', 'Real-time monitoring', 'Compliance reporting'],'
          pricing: 'Starting from $4,500/month''
        }
      ]
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'infrastructure','
      title: 'Cloud & Infrastructure','
      icon: Cpu,
      color: 'from-blue-500 to-indigo-500','
      description: 'Scalable cloud solutions and infrastructure management','
      services: [
  // TODO: Add items
]
  // TODO: Add items
]
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'Cloud DevOps','
          path: '/cloud-devops','
          description: 'Cloud development and operations automation','
          icon: Cloud,
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting'],'
          pricing: 'Starting from $3,000/month''
        },
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'IT Infrastructure','
          path: '/services/it-infrastructure','
          description: 'Complete IT infrastructure solutions','
          icon: Network,
          features: ['Network design', 'Hardware management', 'Performance optimization'],'
          pricing: 'Starting from $2,500/month''
        },
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: '5 G Enterprise Solutions','
          path: '/5 g-enterprise-solutions','
          description: 'High-speed 5 G connectivity solutions','
          icon: Network,
          features: ['Ultra-fast connectivity', 'Low latency', 'High bandwidth'],'
          pricing: 'Starting from $5,000/month''
        }
      ]
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'business','
      title: 'Business Operations','
      icon: Building,
      color: 'from-green-500 to-emerald-500','
      description: 'Streamlined business process automation','
      services: [
  // TODO: Add items
]
  // TODO: Add items
]
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'Autonomous Business Platform','
          path: '/autonomous-business-operations-platform','
          description: 'Self-operating business systems and automation','
          icon: Building,
          features: ['Process automation', 'Workflow optimization', 'Performance analytics'],'
          pricing: 'Starting from $6,000/month''
        },
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'AI Asset Management','
          path: '/ai-powered-it-asset-management','
          description: 'Intelligent IT asset management and tracking','
          icon: Database,
          features: ['Asset tracking', 'Lifecycle management', 'Cost optimization'],'
          pricing: 'Starting from $2,000/month''
        }
      ]
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'industry','
      title: 'Industry Solutions','
      icon: Target,
      color: 'from-orange-500 to-yellow-500','
      description: 'Tailored solutions for specific industries','
      services: [
  // TODO: Add items
]
  // TODO: Add items
]
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'Healthcare Technology','
          path: '/solutions/healthcare','
          description: 'Technology solutions for healthcare industry','
          icon: Heart,
          features: ['Patient management', 'Medical analytics', 'Compliance'],'
          pricing: 'Starting from $8,000/month''
        },
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'Financial Services','
          path: '/services/financial-services','
          description: 'Fintech solutions and financial technology','
          icon: DollarSign,
          features: ['Risk management', 'Fraud detection', 'Compliance'],'
          pricing: 'Starting from $7,000/month''
        },
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'Manufacturing Intelligence','
          path: '/services/manufacturing-intelligence','
          description: 'Smart manufacturing and Industry 4.0 solutions','
          icon: Cpu,
          features: ['Predictive maintenance', 'Quality control', 'Supply chain optimization'],'
          pricing: 'Starting from $6,500/month''
        }
      ]
    }
  ];
const filteredCategories = selectedCategory === 'all' '
    ? serviceCategories
    : serviceCategories.filter(cat => cat.id === selectedCategory);
const filteredServices = filteredCategories.flatMap(cat =>
    cat.services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  )
  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20"py-20 px-4 sm:px-6 lg:px-8"
<div className="
<h1 className="text-4 xl md:text-6 xl font-bold mb-6"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
              {"}Micro SAAS Services"
            </span></h1>
<div className="
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20"container mx-auto px-4 sm:px-6 lg:px-8"
<div className="
<h1 className="text-5 xl md:text-6 xl font-bold mb-6"text-xl md:text-2 xl text-zion-slate-light mb-8 leading-relaxed"
              Comprehensive technology solutions designed to transform your business
              and drive sustainable growth in the digital age.
            </p>
<div className="
<$2 />
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"/request-quote" "inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
              >
                Request Quote
              </Link></div>
<div className="
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"max-w-7 xl mx-auto text-center"
<h1 className="
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent"text-xl text-zion-slate-light max-w-3 xl mx-auto mb-8"
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>;
import React from 'react';';
import React from 'react';';
import { motion } from 'framer-motion';';
import { Link } from 'react-router-dom';';
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Brain,
  Cloud,
  Shield,
  Zap,
  Globe,
  Database,
  Smartphone,
          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }
            animate={{ opacity: 1, y: 0 }
            transition={{ duration: 0.8, delay: 0.4 }
            className="
          >
<$2 />
              onClick={() => handleCategorySelect('all')}'
              className={`px-6 py-3 rounded-full font-medium transition-all ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                selectedCategory === 'all''
                  ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30''
                  : 'bg-white/10 text-zion-slate-light hover:bg-white/20 border border-zion-cyan/30''
              }`}
            >
              Get Started
            </Link>
<$2 />
              to="/pricing"
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"py-20"
<div className="
<div className="text-center mb-16"text-4 xl font-bold text-zion-blue-dark mb-4"
              Service Categories
            </h2>
<p className="
              Explore our comprehensive range of technology services designed to meet
              every aspect of your digital transformation journey.
            </p></div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
<div className="
<category.icon className="w-16 h-16 text-zion-cyan"text-2 xl font-bold text-zion-blue-dark mb-3 text-center"
                  {category.title}
                </h3>
<p className="
      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"max-w-7 xl mx-auto"
<h2 className="
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white"
      {/* Animated Background Elements */}
      <div className="
<div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3 xl animate-float"absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3 xl animate-float"
<div className="
<div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-purple/5 rounded-full blur-3 xl animate-float"relative z-10"
        {/* Hero Section */}
        <section className="
<motion.div
            className="text-center"min-h-screen bg-zion-blue-dark text-white"
      {/* Hero Section */}
      <section className="
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden"absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3 xl animate-pulse"
<div className="
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3 xl animate-pulse delay-500"max-w-7 xl mx-auto text-center relative z-10"
<motion.div
            initial={{ opacity: 0, y: 30 }
            animate={{ opacity: 1, y: 0 }
            transition={{ duration: 0.8 }
          >
                className="
              />
<Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6"text-xl text-gray-300 max-w-3 xl mx-auto mb-8"
            Comprehensive AI-powered technology solutions designed to transform your business and drive innovation across all industries.
          </p>

          {/* Search and Filter */}
          <div className="
<div className="relative"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
<input
                type=""
                placeholder=""
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
              />
</div></div>
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                  selectedCategory === category
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30''
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20 border border-zion-cyan/30''
                }`}
              >
                {category.name}
          <div className="flex flex-wrap justify-center gap-3 mb-8"text-5 xl md:text-7 xl font-bold mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent"
              Revolutionary Technology Services
            </h1>
<p className="
              Discover our cutting-edge portfolio of innovative technology solutions designed to transform your business.
              From AI-powered analytics to quantum computing platforms, we're building the future today.'
            </p>
<div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-zion-slate-light"flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
<Zap className="
                {services.length}+ Revolutionary Services
              </span>
<span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"w-4 h-4 text-zion-cyan"
                99.9% Uptime Guarantee
              </span>
<span className="
<Brain className="w-4 h-4 text-zion-cyan"flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
<Star className="
                Competitive Pricing
              </span></div>
</motion.div></div>
</section>

      {/* Filters and Search */}
      <section className="py-16 px-6 bg-zion-blue-dark/50"max-w-6 xl mx-auto"
<motion.div
            initial={{ opacity: 0, y: 20 }
            animate={{ opacity: 1, y: 0 }
            transition={{ duration: 0.6 }
            className="
          >
<div className="grid md:grid-cols-4 gap-6"block text-sm font-medium text-zion-slate-light mb-2"
<select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="
          className="mb-12"bg-zion-blue-light/20 backdrop-blur-md border border-zion-purple/30 rounded-2 xl p-6"
            {/* Search Bar */}
            <div className="
<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5"text""Search services, features, or use cases...""w-full pl-12 pr-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
</div>

            {/* Filters */}
            <div className="
              {/* Category Filter */}
              <div className="flex-1 min-w-48"block text-zion-slate-light text-sm font-medium mb-2"
<select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="
                >
                  {categories.map(category => (
  // TODO: Add parameters
)
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select></div>

              {/* Pricing Filter */}
              <div className="flex-1 min-w-48"block text-zion-slate-light text-sm font-medium mb-2"
<select
                  value={selectedPricing}
                  onChange={(e) => setSelectedPricing(e.target.value)}
                  className="
                >
                  {pricingModels.map(model => (
  // TODO: Add parameters
)
                    <option key={model} value={model}>{model.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>'
                  ))}
                </select></div>
<section className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 py-24"hidden""visible""grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {filteredServices.map((service) => (
  // TODO: Add parameters
)
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="
              >
                {/* Service Header */}
                <div className="mb-6"flex items-center justify-between mb-4"
<span className="
                      {service.category}
                    </span>
                    {service.badge && (
  // TODO: Add parameters
)
                      < className={`px-3 py-1 text-xs font-medium rounded-full border ${$2 />
                        service.badge === 'Popular' ? 'bg-zion-purple/20 text-zion-purple border-zion-purple/30' :'
                        service.badge === 'New' ? 'bg-green-500/20 text-green-400 border-green-500/30' :'
                        service.badge === 'Featured' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :'
                        service.badge === 'Premium' ? 'bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30' :'
                        'bg-zion-purple/20 text-zion-purple border-zion-purple/30''
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>
<h3 className="text-2 xl font-bold mb-2 text-white group-hover:text-zion-cyan transition-colors duration-300"text-zion-slate-light leading-relaxed mb-4"
                    {service.description}
                  </p></div>

                {/* Pricing */}
                <div className="
<div className="flex items-center justify-between mb-2"text-2 xl font-bold text-zion-cyan"
                      {service.price.currency}{service.price.monthly.toLocaleString()}
                    </span>
<span className="
                  {service.price.yearly && (
  // TODO: Add parameters
)
                    <div className="text-zion-slate-light text-sm"mb-4"
<h4 className="
<ul className="space-y-1"text-xs text-zion-slate-light flex items-center gap-2"
<div className="
                        {feature}
                      </li>
                    ))}
                  </ul></div>
<motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }
                animate={{ opacity: 1, y: 0 }
                transition={{ duration: 0.6, delay: index * 0.1 }
                className="bg-white/5 backdrop-blur-xl rounded-2 xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:shadow-2 xl hover:shadow-zion-cyan/20"flex items-start justify-between mb-4"
<div className="
<service.icon className="w-6 h-6 text-white"flex gap-2"
                    {service.popular && (
  // TODO: Add parameters
)
                      <span className="
                    )}
                    {service.new && (
  // TODO: Add parameters
)
                      <span className="bg-zion-purple text-white text-xs px-2 py-1 rounded-full font-medium"text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors"
                  {service.name}
                </h3>
<p className="
                  {service.description}
                </p>

                {/* Price Comparison */}
                <div className="mb-4"text-2 xl font-bold text-zion-cyan"
                    {service.price}
                  </div>
<div className="
                    Market: {service.marketPrice}
                  </div></div>

                {/* Key Benefits */}
                <div className="mb-4"text-sm font-semibold text-white mb-2 flex items-center gap-2"
<TrendingUp className="
                    Key Benefits:
                  </h4>
<ul className="space-y-1"text-sm text-zion-slate-light flex items-center gap-2"
<CheckCircle className="
                        {benefit}
                      </li>
                    ))}
                  </ul></div>

                {/* Tags */}
                <div className="mb-4"flex flex-wrap gap-2"
                    {service.tags.slice(0, 4).map((tag, idx) => (
  // TODO: Add parameters
)
                      <$2 />
                        key={idx}
                        className="
                      >
                        {tag}
                      </span>
                    ))}
          initial={{ opacity: 0 }
          animate={{ opacity: 1 }
          transition={{ duration: 0.8, delay: 0.2 }
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"group bg-white/10 backdrop-blur-md border border-white/20 rounded-2 xl p-6 hover:border-blue-400/50 hover:bg-white/20 transition-all duration-300 hover:shadow-2 xl hover:shadow-blue-400/20"
              >
<div className="
<IconComponent className="w-8 h-8"text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors"
                  {service.name}
                </h3>
<p className="
                  {service.description}
                </p>
<ul className="space-y-2 mb-6"flex items-center text-sm text-gray-400"
<div className="
                      {feature}
                    </li>
                  ))}
                </ul>
<$2 />
                  to={service.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300"w-4 h-4"
</motion.div>
            )
          })}
        </motion.div>
<div className="
          {filteredServices.map((service, idx) => (
  // TODO: Add parameters
)
            <$2 />
              key={idx}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"flex items-start space-x-4 mb-4"
<div className="
<service.icon className="w-6 h-6 text-white"flex-1"
<h3 className="
                    {service.name}
                  </h3>
<p className="text-gray-400 text-sm leading-relaxed"mb-4"
<h4 className="
<ul className="space-y-1"flex items-center space-x-2 text-sm text-gray-400"
<CheckCircle className="
<span>{feature}</span></li>
                  ))}
                </ul></div>

              {/* Pricing */}
              <div className="mb-4 p-3 bg-gray-700/50 rounded-lg"flex items-center space-x-2 text-sm text-gray-300"
<DollarSign className="
<span>{service.pricing}</span></div>
</div>

              {/* CTA Button */}
              <$2 />
                to={service.path}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105"w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
</div>
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
  // TODO: Add parameters
)
          <div className="
<Search className="w-16 h-16 text-gray-600 mx-auto mb-4"text-xl font-semibold text-gray-400 mb-2"
<p className="
        )}

        {/* Enhanced Services Section */}
        <div className="mt-16 mb-16"bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2 xl p-8"
<div className="
<div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-4"h-5 w-5 text-purple-400"
<span className="
<h2 className="text-3 xl font-bold text-white mb-4"text-xl text-gray-300 mb-8 max-w-2 xl mx-auto"
                Let our AI experts help you implement the right technology solutions to drive growth and innovation.
              </p>
<div className="
<$2 />
                  to="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"/innovative-services-showcase""px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                >
                  View All Innovative Services
                </Link>
<$2 />
                  to=""
                  className="
                >
                  Request Custom Quote
                </Link></div>
</div></div>
</div>

        {/* Additional Services Links */}
        <section className="py-16 px-4"container mx-auto text-center"
<h2 className="
<p className="text-xl text-zion-slate-light mb-8 max-w-2 xl mx-auto"grid md:grid-cols-2 gap-6 max-w-4 xl mx-auto mb-8"
<$2 />
                to=""
                className="
              >
<h3 className="text-xl font-bold text-white mb-3"text-zion-slate-light mb-4"
                  Explore our complete portfolio of micro SAAS and IT solutions with transparent pricing and detailed features.
                </p>
<div className="
                  View All Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/services/innovative-showcase""bg-zion-blue-light/20 rounded-lg p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
<h3 className="
<p className="text-zion-slate-light mb-4"text-zion-cyan hover:text-zion-cyan-light flex items-center justify-center group"
                  Explore Innovations <ArrowRight className="
</Link></div>
</div></section>

        {/* CTA Section */}
        <div className="text-center mt-16"bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2 xl p-8"
<h2 className="
              Ready to Transform Your Business?
            </h2>
<p className="text-xl text-zion-slate-light mb-8 max-w-3 xl mx-auto"flex flex-col sm:flex-row gap-4 justify-center"
<$2 />
                to=""
                className="
              >
                Get Started Today
              </Link>
<$2 />
                to="/comprehensive-services-showcase"
                className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"Healthcare", icon: ", description: "HIPAA compliant solutions for healthcare providers"
    { name: "Finance"🏦", description: " },"
    { name: ", icon: "🛍️"E-commerce and retail technology platforms" },"Manufacturing", icon: ", description: "Industry 4.0 and smart manufacturing"
    { name: "Education"🎓", description: " },"
    { name: ", icon: "🏛️"Secure government technology solutions" }"min-h-screen relative"
<SEO
        title=""
        description=""
        url=""
        keywords=""
        ogImage=""
        twitterCard=""
      />

      {/* Background Elements */}
      <div className="
<div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3 xl animate-pulse animate-quantum-float"absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3 xl animate-pulse animate-quantum-float animation-delay-1000"
<div className="
</div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden"relative z-10 container mx-auto text-center"
<div className={`animate-fade-in-up transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>'
<h1 className="
<span className="neon-text"text-xl md:text-2 xl text-gray-300 max-w-4 xl mx-auto leading-relaxed mb-8"
              Comprehensive technology solutions designed to transform your business and drive innovation.
              From AI to cybersecurity, we deliver the expertise you need to succeed.
            </p>

            {/* Search and Filter */}
            <div className="
<div className="relative"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
<input
                  type=""
                  placeholder=""
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="
                />
</div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mt-4"relative py-16 px-4"
<div className="
<div className="text-center mb-12"text-3 xl md:text-4 xl font-bold text-white mb-4"
              What We <span className="
<p className="text-gray-300"grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            {filteredServices.map((service, index) => (
  // TODO: Add parameters
)
              <$2 />
                key={index}
                className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2 xl hover:shadow-cyan-500/20 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }
              >
                {/* Service Header */}
                <div className="
<div className="text-3 xl"text-right"
< className={`px-3 py-1 rounded-full text-xs font-medium ${$2 />
                      service.serviceType === 'Micro SAAS' && (service as any).pricing === 'Freemium' ? 'bg-green-500/20 text-green-400' :'
                      service.serviceType === 'Micro SAAS' && (service as any).pricing === 'Professional' ? 'bg-blue-500/20 text-blue-400' :'
                      'bg-purple-500/20 text-purple-400''
                    }`}>
                      {service.serviceType === 'Micro SAAS' ? (service as any).pricing : service.serviceType}'
                    </span></div>
                )}

                <div className="
                  {service.icon}
                </div>

                {/* Service Title and Description */}
                <h3 className="text-xl font-semibold text-white mb-3"text-gray-300 mb-4 text-sm leading-relaxed"

                {/* Pricing */}
                <div className="
<div className="text-2 xl font-bold text-blue-400"text-sm text-gray-400"
                    Market Price: {service.marketPrice}
                  </div>
                  {service.serviceType !== 'Micro SAAS' && ('
                    <div className="
                      {service.serviceType}
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4"flex items-center"
                    {[...Array(5)].map((_, i) => (
  // TODO: Add parameters
)
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} '
                      />
                    ))}
                  </div>
<span className="

                {/* Features */}
                <div className="mb-6"text-sm font-medium text-white mb-3"
<ul className="
                    {service.features.slice(0, 4).map((feature, idx) => (
  // TODO: Add parameters
)
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"w-4 h-4 text-cyan-400 flex-shrink-0"
                        {feature}
                      </li>
                    ))}
                  </ul></div>

                {/* Benefits */}
                <div className="
<h4 className="text-sm font-semibold text-green-400 mb-3"space-y-1"
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
  // TODO: Add parameters
)
                      <div key={idx} className="
<span className="w-2 h-2 bg-green-400 rounded-full mr-2"mb-6 space-y-2 text-sm"
                  {service.serviceType === 'Micro SAAS' ? ('
                    <>
<div className="
<span className="text-gray-400"text-white"
<div className="
<span className="text-gray-400"text-green-400"
<div className="
<span className="text-gray-400"text-white"
</>
                  ) : service.serviceType === 'IT Service' ? ('
                    <>
<div className="
<span className="text-gray-400"text-white"
<div className="
<span className="text-gray-400"text-green-400"
<div className="
<span className="text-gray-400"text-white"
</>
                  ) : (
  // TODO: Add parameters
)
                    <>
<div className="
<span className="text-gray-400"text-green-400"
<div className="
<span className="text-gray-400"text-white"
<div className="
<span className="text-gray-400"text-white"
</>
                  )}
                </div>

                {/* Tags */}
                <div className="
                  {service.tags.map((tag, idx) => (
  // TODO: Add parameters
)
                    <$2 />
                      key={idx}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                >
                  Learn More
                  <ArrowRight className="
</div>
            ))}
          </div>

          {filteredServices.length === 0 && (
  // TODO: Add parameters
)
            <div className="text-center py-12"text-6 xl mb-4"
<h3 className="
<p className="text-gray-400"flex flex-col md:flex-row items-center justify-between gap-4 mb-8"
          >
<div className="
<$2 />
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-zion-slate-light rounded-lg transition-colors"w-4 h-4"
                Filters
              </button>

              {Object.keys(filters).length > 0 && (
  // TODO: Add parameters
)
                <$2 />
                  onClick={clearFilters}
                  className="
                >
                  Clear Filters
                </button>
              )}
            </div>
<div className="flex items-center gap-2"text-zion-slate-light text-sm"
<$2 />
                onClick={() => handleSort('title')}'
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                  sortBy === 'title' ? 'bg-zion-cyan/20 text-zion-cyan' : 'bg-white/10 text-zion-slate-light hover:bg-white/20''
                }`}
              >
                Name
                {sortBy === 'title' && ('
                  sortOrder === 'asc' ? <SortAsc className="w-4 h-4" />"
                )}
              </button>
<$2 />
                onClick={() => handleSort('price')}'
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                  sortBy === 'price' ? 'bg-zion-cyan/20 text-zion-cyan' : 'bg-white/10 text-zion-slate-light hover:bg-white/20''
                }`}
              >
                Price
                {sortBy === 'price' && ('
                  sortOrder === 'asc' ? <SortAsc className="w-4 h-4" />"'"bg-white/10 backdrop-blur-sm border border-zion-cyan/30 rounded-xl p-6 mb-8"
            >
<div className="
<div>
<label className="block text-zion-slate-light text-sm font-medium mb-2"w-full px-3 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
<option value=""
<option value=">Monthly</option>"
<option value=">One-time</option>"
<option value=">Custom</option></select>"
</div>
<div>
<label className="
<select
                    value={filters.supportLevel || '}''
                    onChange={(e) => setFilter('supportLevel', e.target.value || ')}''
                    className="w-full px-3 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan">All Levels</option>""basic">Basic</option>"premium">Premium</option>"enterprise">Enterprise</option></select>"block text-zion-slate-light text-sm font-medium mb-2"
<div className="
<input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice || '}''
                      onChange={(e) => setFilter('minPrice', e.target.value ? Number(e.target.value) : ')}''
                      className="flex-1 px-3 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"number""Max""flex-1 px-3 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    />
</div></div>
</div></motion.div>
          )}
        </div></section>;
const Services = () => {;
const services = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Brain,
      title: ","
      description: ","
      features: [", "NLP Solutions"Computer Vision", "],"
      price: ","
      color: ","
      link: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Cpu,
      title: ","
      description: ","
      features: [", "Workflow Automation"CRM Systems", "],"
      price: ","
      color: ","
      link: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Cloud,
      title: ","
      description: ","
      features: [", "DevOps Automation"Kubernetes", "],"
      price: ","
      color: ","
      link: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Shield,
      title: ","
      description: ","
      features: [", "Enterprise Security"System Integration", "],"
      price: ","
      color: ","
      link: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Rocket,
      title: ","
      description: ","
      features: [", "Process Optimization"Change Management", "],"
      price: ","
      color: ","
      link: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Zap,
      title: ","
      description: ","
      features: [", "Blockchain Solutions"IoT Platforms", "],"
      price: ","
      color: ","
      link: ""
    }
  ];
const benefits = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Target,
      title: ","
      description: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Award,
      title: ","
      description: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Globe,
      title: ","
      description: ""
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Shield,
      title: ","
      description: ""
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Award
} from 'lucide-react';';
export default function Services() {;
const services = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Brain,
      title: 'AI Solutions & Machine Learning','
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.','
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Machine Learning Models','
        'Natural Language Processing','
        'Computer Vision','
        'Predictive Analytics','
        'AI-Powered Automation','
        'Custom AI Solutions''
      ],
      href: '/services/ai','
      color: 'from-purple-500 to-pink-500','
      bgColor: 'bg-purple-500/10','
      borderColor: 'border-purple-500/30''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps','
      description: 'Scalable cloud solutions and automated deployment pipelines for modern applications.','
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'AWS, Azure & GCP Migration','
        'Container Orchestration','
        'Serverless Architecture','
        'CI/CD Pipelines','
        'Infrastructure as Code','
        'Cloud Security & Compliance''
      ],
      href: '/services/cloud','
      color: 'from-blue-500 to-cyan-500','
      bgColor: 'bg-blue-500/10','
      borderColor: 'border-blue-500/30''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Shield,
      title: 'Cybersecurity & Compliance','
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.','
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Zero Trust Security','
        'Penetration Testing','
        'Security Audits','
        'Compliance Management','
        'Incident Response','
        'Security Training''
      ],
      href: '/services/security','
      color: 'from-green-500 to-emerald-500','
      bgColor: 'bg-green-500/10','
      borderColor: 'border-green-500/30''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Zap,
      title: 'Digital Transformation','
      description: 'End-to-end business process modernization and digital strategy implementation.','
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Process Automation','
        'Legacy System Modernization','
        'API Integration','
        'Data Migration','
        'Change Management','
        'Digital Strategy Consulting''
      ],
      href: '/services/transformation','
      color: 'from-yellow-500 to-orange-500','
      bgColor: 'bg-yellow-500/10','
      borderColor: 'border-yellow-500/30''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Smartphone,
      title: 'Web & Mobile Development','
      description: 'Custom web and mobile applications built with modern technologies and best practices.','
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'React & Next.js Development','
        'Mobile App Development','
        'Progressive Web Apps','
        'E-commerce Solutions','
        'API Development','
        'Performance Optimization''
      ],
      href: '/services/development','
      color: 'from-indigo-500 to-purple-500','
      bgColor: 'bg-indigo-500/10','
      borderColor: 'border-indigo-500/30''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: BarChart3,
      title: 'Data Analytics & BI','
      description: 'Transform your data into actionable insights with advanced analytics and visualization.','
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Data Warehousing','
        'Business Intelligence','
        'Real-time Analytics','
        'Data Visualization','
        'Predictive Modeling','
        'Data Governance''
      ],
      href: '/services/analytics','
      color: 'from-red-500 to-pink-500','
      bgColor: 'bg-red-500/10','
      borderColor: 'border-red-500/30''
    }
  ];
const stats = [
  // TODO: Add items
]
  // TODO: Add items
]
        {/* No Results */}
        {sortedServices.length === 0 && (
  // TODO: Add parameters
)
          <motion.div
            initial={{ opacity: 0 }
            animate={{ opacity: 1 }
            className="
          >
<div className="text-6 xl mb-4"text-2 xl font-bold text-white mb-2"
<p className="
<$2 />
              onClick={() => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
                setSearchTerm(')''
                setSelectedCategory('all')'
                setSelectedSubcategory('all')'
              }
              className="futuristic-btn neon-glow neon-cyan"text-lg font-semibold text-white mb-4"
<div className="
<p>📱 +1 (302) 464-0950</p>
<p>✉️ kleber@ziontechgroup.com</p>
<p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p></div>
<h3 className="text-xl font-semibold text-white mb-2"text-gray-300"
<div className="
<div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"w-8 h-8 text-white"
<h3 className="
<p className="text-gray-300"text-center"
<div className="
<Users className="w-8 h-8 text-white"text-xl font-semibold text-white mb-2"
<p className="
</div>
<div className="border-t border-zion-blue-light mt-8 pt-8 text-center"text-zion-slate-light text-sm"
                © 2024 Zion Tech Group. All rights reserved. |
                <a href=" className="ml-2 hover:text-zion-cyan transition-colors"/contact" className="
</div></div>
</div></div>
</motion.div></div>
</div>

                {/* Rating and Reviews */}
                <div className="flex items-center justify-between mb-6"flex items-center space-x-1"
                    {[...Array(5)].map((_, i) => (
  // TODO: Add parameters
)
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                          i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light''
                        }`}
                      />
                    ))}
                    <span className="
                      {service.rating} ({service.reviewCount} reviews)
                    </span></div>
<div className="text-zion-cyan text-sm font-medium"mb-6 p-4 bg-zion-blue-light/5 rounded-lg border border-zion-cyan/20"
<h4 className="
<p>📧 {service.author.name}</p>
<p>📱 {service.author.id}</p></div>

                {/* Action Buttons */}
                <div className="flex space-x-3"flex-1 px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium text-center hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
<$2 />
                    to=""
                    className="
                  >
                    Get Quote
                  </Link></div>
</motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
  // TODO: Add parameters
)
            <motion.div
              initial={{ opacity: 0, y: 20 }
              animate={{ opacity: 1, y: 0 }
              className="text-center py-20"text-6 xl mb-4"
<h3 className="
<p className="text-zion-slate-light mb-6"px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                {/* Technology Stack */}
                <div className="
<h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2"w-4 h-4 text-zion-cyan"
                    Technology:
                  </h4>
<div className="
                    {service.technology.slice(0, 3).map((tech, idx) => (
  // TODO: Add parameters
)
                      <span key={idx} className="bg-white/10 text-zion-slate-light text-xs px-2 py-1 rounded-full"_blank""noopener noreferrer""w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-3 px-4 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 transform"
                >
<span>Learn More</span>
<ArrowRight className="
</motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
  // TODO: Add parameters
)
            <motion.div
              initial={{ opacity: 0 }
              animate={{ opacity: 1 }
              className="text-center py-16"text-zion-slate-light text-lg mb-4"
<$2 />
                onClick={() => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
                  setSelectedCategory('All')'
                  setSearchTerm('')'
                  setPriceRange('all')'
                }
                className="
              >
                Clear Filters
              </button></motion.div>
          )}
      {/* Featured Services */}
      <section className="py-20 bg-white"container mx-auto px-4 sm:px-6 lg:px-8"
<div className="
<h2 className="text-4 xl font-bold text-zion-blue-dark mb-4"text-xl text-zion-slate max-w-3 xl mx-auto"
              Our most popular and impactful solutions that are transforming businesses worldwide.
    { value: '200+', label: 'Projects Delivered', icon: CheckCircle, color: 'text-green-400' },'
    { value: '99.99%', label: 'Uptime Guarantee', icon: Shield, color: 'text-blue-400' },'
    { value: '24/7', label: 'Support Available', icon: Clock, color: 'text-purple-400' },'
    { value: '15+', label: 'Years Experience', icon: Award, color: 'text-yellow-400' }'
  ];
const process = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      step: '01','
      title: 'Discovery & Analysis','
      description: 'We analyze your requirements and business objectives to understand your needs.','
      icon: Globe
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      step: '02','
      title: 'Solution Design','
      description: 'Our experts design a tailored solution that aligns with your goals and budget.','
      icon: Brain
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      step: '03','
      title: 'Development & Testing','
      description: 'We build and thoroughly test your solution using industry best practices.','
      icon: Zap
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      step: '04','
      title: 'Deployment & Support','
      description: 'Smooth deployment followed by ongoing support and maintenance.','
      icon: Cloud
    }
  ]
  return (
  // TODO: Add parameters
)
    <div className="
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6"max-w-7 xl mx-auto text-center"
<motion.div
            initial={{ opacity: 0, y: 30 }
            animate={{ opacity: 1, y: 0 }
            transition={{ duration: 0.8 }
          >
<h1 className="
              Our Services
            </h1>
<p className="text-xl text-white/80 max-w-3 xl mx-auto mb-8"grid lg:grid-cols-3 gap-8"
            {featuredServices.map((service, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<div className="flex justify-center mb-6"w-16 h-16 text-zion-cyan"
      {/* Services Grid */}
      <section className="
<div className="container mx-auto px-4"text-center mb-12"
<p className="
              {isLoading ? 'Searching...' : `Showing ${totalResults} services`}'
              {query && ` for "${query}"
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}'
            </p></div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"group bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm rounded-xl overflow-hidden border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2 xl hover:shadow-zion-cyan/20"
                  {/* Service Image */}
                  <div className="
<OptimizedImage
                      src={`https://images.unsplash.com/photo-1451187580459-43490279 c0 fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
<div className="
<span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full"p-6"
<h3 className="
                      {service.title}
                    </h3>
<p className="text-zion-slate-light text-sm mb-4 leading-relaxed"flex flex-wrap gap-2 mb-4"
                      {service.tags.slice(0, 3).map((tag, index) => (
  // TODO: Add parameters
)
                        <span key={index} className="
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Service Details */}
                    <div className="space-y-2 mb-4 text-sm text-zion-slate-light"flex items-center gap-2"
<Clock className="
<span>Delivery: {service.estimatedDelivery}</span></div>
<div className="flex items-center gap-2"w-4 h-4 text-zion-cyan"
<span>Support: {service.supportLevel}</span></div>
</div>

                    {/* Price and CTA */}
                    <div className="
<div className="text-2 xl font-bold text-zion-cyan"text-sm text-zion-slate-light font-normal"
<button className="
                        Get Quote
                      </button></div>
</div></div>
<h3 className="text-2 xl font-bold mb-4 text-center"text-zion-slate-light mb-6 text-center leading-relaxed"
                  {service.description}
                </p>
<ul className="
                  {service.features.map((feature, featureIndex) => (
  // TODO: Add parameters
)
                    <li key={featureIndex} className="flex items-center text-zion-slate-light"w-2 h-2 bg-zion-cyan rounded-full mr-3"
                      {feature}
                    </li>
                  ))}
                </ul>
<div className="
<$2 />
                    to={service.link}
                    className="inline-flex items-center px-6 py-2 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"flex justify-center items-center gap-2"
<$2 />
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={!paginatedResults.hasPrevPage}
                className="
              >
                Previous
              </button>
<span className="px-4 py-2 text-zion-slate-light"px-4 py-2 bg-white/10 text-zion-slate-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
              >
                Next
              </button></div>
          )}
        </div></section>
</div>
  )
}
export default Services;
          transition={{ duration: 0.8, delay: 0.8 }
          className="
        >
<div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 border border-blue-400/30 rounded-2 xl p-12 backdrop-blur-md"text-3 xl md:text-5 xl font-bold mb-4 text-white"
              Ready to Get Started?
            </h2>
<p className="
              Let's discuss how our services can transform your business and drive growth.'
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"/contact""px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Free Consultation
                <ArrowRight className="
<$2 />
                to="/request-quote"
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"flex items-center gap-2 text-sm text-zion-slate-light"
<div className="
                      {service}
                    </li>
                  ))}
                </ul>
<$2 />
                  to={category.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light font-semibold text-sm transition-colors"w-4 h-4"none"currentColor" viewBox=">"
<path strokeLinecap=" strokeLinejoin="round"M9 5 l7 7-7 7" /></svg>"py-16 px-4 sm:px-6 lg:px-8"
<div className="
<h2 className="text-3 xl font-bold text-white text-center mb-12"grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            {emergingTech.map((tech, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center text-zion-cyan mx-auto mb-4"text-lg font-bold text-white mb-2"
<p className="
                  {tech.description}
                </p></div>
            ))}
          </div></div>
</section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"max-w-7 xl mx-auto"
<div className="
<div>
<h2 className="text-3 xl font-bold text-white mb-6"space-y-4"
<div className="
<div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center flex-shrink-0"w-5 h-5 text-white"
<div>
<h3 className="
<p className="text-zion-slate-light"flex items-start gap-4"
<div className="
<CheckCircle className="w-5 h-5 text-white"text-lg font-semibold text-white mb-1"
<p className="
</div>
<div className="flex items-start gap-4"w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center flex-shrink-0"
<CheckCircle className="
<div>
<h3 className="text-lg font-semibold text-white mb-1"text-zion-slate-light"
</div>
<div className="
<div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center flex-shrink-0"w-5 h-5 text-white"
<div>
<h3 className="
<p className="text-zion-slate-light"bg-white/10 backdrop-blur-sm rounded-2 xl p-8 border border-white/20"
<h3 className="
<p className="text-zion-slate-light mb-6"space-y-4"
<$2 />
                  to=""
                  className="
                >
                  Schedule a Consultation
                </Link>
<$2 />
                  to="/request-quote"
                  className="w-full border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center block"py-16 px-4 sm:px-6 lg:px-8"
<div className="
<h2 className="text-3 xl font-bold text-white mb-6"text-lg text-zion-slate-light mb-8"
            Join hundreds of companies already leveraging our technology solutions to achieve unprecedented growth.
          </p>
<div className="
<$2 />
              to="/contact"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"/about" "border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call: +1 302 464 0950
            </a></div>
<div className="
<$2 />
              to="/enhanced-services"
              className="inline-flex items-center px-6 py-2 text-blue-400 hover:text-blue-300 border border-blue-400 rounded-lg transition-all duration-300"py-16 bg-zion-blue-dark"
<div className="
<div className="grid grid-cols-2 md:grid-cols-4 gap-8"text-center"
                >
<div className="
<IconComponent className="w-8 h-8 text-white"text-3 xl font-bold text-white mb-2"
<div className="
              )
            })}
          </div></div>
</section>

      {/* Services Section */}
      <section className="py-20 bg-zion-blue"container mx-auto px-4 sm:px-6 lg:px-8"
<motion.div
            initial={{ opacity: 0, y: 20 }
            whileInView={{ opacity: 1, y: 0 }
            transition={{ duration: 0.6 }
            className="
          >
<h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6"text-xl text-zion-slate-light max-w-3 xl mx-auto"
              Comprehensive solutions designed to drive innovation and transform your business
            </p></motion.div>
<div className="
            {services.map((service, index) => {;
const IconComponent = service.icon
              return (
  // TODO: Add parameters
)
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }
                  whileInView={{ opacity: 1, y: 0 }
                  transition={{ duration: 0.6, delay: index * 0.1 }
                  className="bg-zion-blue-dark border border-zion-blue-light rounded-2 xl p-6 hover:border-zion-cyan/50 transition-all duration-300"w-8 h-8 text-white"
<h3 className="
<p className="text-zion-slate-light mb-6"mb-6"
<h4 className="
<ul className="space-y-2"flex items-center text-sm text-zion-slate-light"
<CheckCircle className="
                          {feature}
                        </li>
                      ))}
                    </ul></div>
<div className="text-center"text-2 xl font-bold text-zion-cyan mb-4"
<$2 />
                      to={service.link}
                      className="
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4"py-20 bg-zion-blue-dark"
<div className="
<motion.div
            initial={{ opacity: 0, y: 20 }
            whileInView={{ opacity: 1, y: 0 }
            transition={{ duration: 0.6 }
            className="text-center mb-16"text-4 xl md:text-5 xl font-bold text-white mb-6"
              Industries We Serve
            </h2>
<p className="
              Proven expertise across diverse industries and business sectors
            </p></motion.div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
<div className="
<h3 className="text-xl font-semibold text-white mb-3"text-zion-slate-light"
            ))}
          </div></div>
</section>

      {/* Benefits Section */}
      <section className="
<div className="container mx-auto px-4 sm:px-6 lg:px-8"text-center mb-16"
          >
<h2 className="
              Why Choose Our Services?
            </h2>
<p className="text-xl text-zion-slate-light max-w-3 xl mx-auto"grid grid-cols-1 md:grid-cols-2 gap-8"
            {benefits.map((benefit, index) => {;
const IconComponent = benefit.icon
              return (
  // TODO: Add parameters
)
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }
                  whileInView={{ opacity: 1, x: 0 }
                  transition={{ duration: 0.6, delay: index * 0.1 }
                  className="
                >
<div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0"w-8 h-8 text-white"
<div>
<h3 className="
<p className="text-zion-slate-light"py-20 bg-gradient-to-r from-zion-cyan to-zion-blue"
<div className="
<motion.div
            initial={{ opacity: 0, y: 20 }
            whileInView={{ opacity: 1, y: 0 }
            transition={{ duration: 0.6 }
          >
<h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6"text-xl text-white/90 max-w-3 xl mx-auto mb-8"
              Let's discuss how our technology services can drive innovation and growth for your organization'
            </p>
<div className="
<$2 />
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-xl hover:shadow-lg transition-all duration-300"ml-2 w-5 h-5"
<$2 />
                to=""
                className="
              >
                Get Free Quote
              </Link></div>
</section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan relative overflow-hidden"absolute inset-0 overflow-hidden"
<div className="
<div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3 xl animate-pulse"absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3 xl animate-pulse delay-1000"
</div>
<div className="
<motion.div
            initial={{ opacity: 0, y: 30 }
            animate={{ opacity: 1, y: 0 }
            transition={{ duration: 0.8, delay: 0.8 }
          >
<h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6"text-xl text-white/90 mb-8 max-w-3 xl mx-auto leading-relaxed"
              Let's discuss how our technology services can help you achieve your goals and stay ahead of the competition. '
              Our team of experts is ready to guide you through the digital transformation journey.
            </p>
<div className="
<$2 />
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white text-zion-purple font-semibold py-4 px-8 rounded-lg hover:bg-zion-slate-light transition-all duration-300 flex items-center justify-center space-x-2 group"w-5 h-5 group-hover:translate-x-1 transition-transform"
<$2 />
                href=""
                className="
              >
<span>Call Now</span>
<Phone className="w-5 h-5 group-hover:scale-110 transition-transform"bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-zion-cyan/50 transition-all duration-300"
<div className="
                  {category.icon}
                </div>
<h3 className="text-xl font-semibold text-white mb-3"text-zion-slate-light mb-4"
<ul className="
                  {category.services.map((service, serviceIndex) => (
  // TODO: Add parameters
)
                    <li key={serviceIndex} className="flex items-start gap-2 text-zion-slate-light text-sm"w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"
                      {service}
                    </li>
                  ))}
                </ul>
<$2 />
                  to={category.link}
                  className="
                >
                  Learn More
                  <svg className="w-4 h-4" stroke="currentColor"0 0 24 24">"round" strokeLinejoin=" strokeWidth={2} d="M9 5 l7 7-7 7"
</Link></div>
            ))}
          </div></div>
</section>

      {/* Emerging Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm"max-w-7 xl mx-auto"
<h2 className="
<p className="text-lg text-zion-slate-light text-center max-w-3 xl mx-auto mb-12"grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            {emergingTechServices.map((service, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white"text-lg font-semibold text-white mb-2"
<p className="
            ))}
          </div></div>
</section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"max-w-7 xl mx-auto"
<h2 className="
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"text-center"
<div className="
<Users className="w-8 h-8 text-white"text-xl font-semibold text-white mb-3"
<p className="
                Our team of experienced professionals brings 15+ years of expertise
                in cutting-edge technologies and industry best practices.
              </p></div>
<div className="text-center"w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4"
<BarChart3 className="
<h3 className="text-xl font-semibold text-white mb-3"text-zion-slate-light"
                We've successfully delivered 500+ projects across various industries, '
                consistently exceeding client expectations and driving measurable results.
              </p></div>
<div className="
<div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4"w-8 h-8 text-white"
<h3 className="
<p className="text-zion-slate-light"text-center"
<div className="
<Rocket className="w-8 h-8 text-white"text-xl font-semibold text-white mb-3"
<p className="
                We stay at the forefront of technology trends, continuously innovating
                to deliver cutting-edge solutions that give you a competitive advantage.
              </p></div>
<div className="text-center"w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4"
<Globe className="
<h3 className="text-xl font-semibold text-white mb-3"text-zion-slate-light"
                Serving clients worldwide with 24/7 support and localized expertise
                to ensure your success regardless of your location.
              </p></div>
<div className="
<div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4"w-8 h-8 text-white"
<h3 className="
<p className="text-zion-slate-light"py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm"
<div className="
<h2 className="text-3 xl font-bold text-white text-center mb-12"grid md:grid-cols-4 gap-8"
<div className="
<div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"text-xl font-semibold text-white mb-3"
<p className="
                We analyze your requirements, understand your business goals,
                and design a tailored solution strategy.
              </p></div>
<div className="text-center"w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                2
              </div>
<h3 className="
<p className="text-zion-slate-light"text-center"
<div className="
                3
              </div>
<h3 className="text-xl font-semibold text-white mb-3"text-zion-slate-light"
                Agile development with regular updates, testing, and quality
                assurance to deliver exceptional results.
              </p></div>
<div className="
<div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"text-xl font-semibold text-white mb-3"
<p className="
                Smooth deployment, comprehensive training, and ongoing support
                to ensure long-term success.
              </p></div>
</div></div>
</section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"max-w-4 xl mx-auto text-center"
<h2 className="
<p className="text-lg text-zion-slate-light mb-8"flex flex-wrap justify-center gap-4"
<$2 />
              to=" "
              className="
            >
              Start Your Project
            </Link>
<$2 />
              to="/request-quote"
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"flex items-end"
<span className="
                  {filteredServices.length} services found
                </span></div>
</div></div>
</motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }
          animate={{ opacity: 1, y: 0 }
          transition={{ duration: 0.8, delay: 0.4 }
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2 xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2 xl hover:shadow-zion-cyan/20"
            >
              {/* Service Header */}
              <div className="
<div className="flex items-center gap-3"p-2 bg-zion-purple/20 rounded-lg text-zion-cyan"
                    {getCategoryIcon(service.category)}
                  </div>
<div>
<h3 className="
                      {service.title}
                    </h3>
<p className="text-zion-slate-light text-sm"text-right"
<div className="
                    {getPricingDisplay(service)}
                  </div>
<div className="text-xs text-zion-slate-light capitalize"text-zion-slate-light mb-4 line-clamp-3"
                {service.description}
              </p>

              {/* Key Features */}
              <div className="
<h4 className="text-white font-medium mb-2 flex items-center gap-2"w-4 h-4 text-zion-cyan"
                  Key Features
                </h4>
<div className="
                  {service.features.slice(0, 3).map((feature, idx) => (
  // TODO: Add parameters
)
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light"w-3 h-3 text-zion-cyan flex-shrink-0"
<span className="
                  ))}
                </div></div>

              {/* Service Details */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm"flex items-center gap-2 text-zion-slate-light"
<Clock className="
<span>{service.estimatedDelivery}</span></div>
<div className="flex items-center gap-2 text-zion-slate-light"w-4 h-4 text-zion-cyan"
<span className="
</div>

              {/* Market Price */}
              <div className="mb-4 p-3 bg-zion-blue-dark/30 rounded-lg"text-xs text-zion-slate-light mb-1"
<div className="

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4"px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-xs text-zion-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contact Info */}
              <div className="
<div className="flex items-center justify-between"text-sm text-zion-slate-light"
<div>📧 {service.contactInfo.email}</div>
<div>📱 {service.contactInfo.phone}</div></div>
<motion.button
                    whileHover={{ scale: 1.05 }
                    whileTap={{ scale: 0.95 }
                    className="
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4"mt-20 text-center"
        >
<div className="
<h2 className="text-3 xl md:text-4 xl font-bold mb-4 text-white"text-xl text-zion-slate-light mb-8 max-w-2 xl mx-auto"
              Let's discuss how our cutting-edge solutions can drive innovation and growth for your organization.'
            </p>
<div className="
<motion.button
                whileHover={{ scale: 1.05 }
                whileTap={{ scale: 0.95 }
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Case Studies
              </motion.button></div>
</div></motion.div>
</div></div>
  )
}
</div></div>
</div></div>
</div></div>
</div></p>
</p></p>
</p></section>
</section></section>
</section></section>