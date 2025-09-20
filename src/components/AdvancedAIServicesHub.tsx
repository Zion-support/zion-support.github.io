import React, { useState } from "react"
import { motion, AnimatePresence   } from "framer-motion";
import {
  Brain,
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Cpu, 
  Database,
  ArrowRight,
  Star,
  CheckCircle,
  Rocket;
}
}
 } from "lucide-react";
import { Link   } from "react-router-dom";
interface AIService {
  id: string,na,
  m: e: string,descripti,
  o: n: string,catego,
  r: y: string,featur,
  e: s: string[],prici,
  n: g: {
    starte,
  r: number,profession,
  a: l: number,enterpri,
  s: e: number;
}
}
  }
  ic,
  o: n: React.ComponentType<any>,rou,
  t: e: string,stat,
  u: s: 'active' | 'beta' | 'coming-soon'
}

const,
  AdvancedAIServicesHu: b: React.FC = () () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [searchQuery, setSearchQuery] = useState('')
const [sortBy, setSortBy] = useState<'name' | 'category' | 'status'>('name'),

  const,
  aiService: s: AIService[] = [
    {
      i,
  d: 'ai-project-management',na,
  m: e: 'AI-Powered Project Management',descripti,
  o: n: 'Intelligent project planning, resource allocation, and progress tracking with AI-driven insights.',
      catego,
  r: y: 'Project Management',featur,
  e: s: ['Smart Task PrioritizationResource Optimization', 'Predictive AnalyticsRisk Assessment'],
      prici,
  n: g: { starte,
  r: 99, profession,
  a: l: 299, enterpri,
  s: e: 599 }
      ic,
  o: n: Brain,rou,
  t: e: '/services/ai-project-management',stat,
  u: s: 'active'
    }, {
      id: 'ai-customer-support',na,
  m: e: 'AI Customer Support Automation',descripti,
  o: n: '24/7 intelligent customer support with automated responses and sentiment analysis.',catego,
  r: y: 'Customer Support',featur,
  e: s: ['Intelligent ChatbotsTicket Routing', 'Sentiment AnalysisMulti-language Support'],
      prici,
  n: g: { starte,
  r: 79, profession,
  a: l: 199, enterpri,
  s: e: 399 }
      ic,
  o: n: Users,rou,
  t: e: '/services/ai-customer-support-automation',stat,
  u: s: 'active'
    }, {
      id: 'ai-financial-analytics',na,
  m: e: 'AI Financial Analytics Platform',descripti,
  o: n: 'Advanced financial forecasting, risk assessment, and compliance monitoring.',
      catego,
  r: y: 'Financial Services',featur,
  e: s: ['Financial ForecastingRisk Assessment', 'Compliance MonitoringReal-time Analytics'],
      prici,
  n: g: { starte,
  r: 149, profession,
  a: l: 399, enterpri,
  s: e: 799 }
      ic,
  o: n: TrendingUp,rou,
  t: e: '/services/ai-financial-analytics',stat,
  u: s: 'active'
    }, {
      id: 'ai-marketing-automation',na,
  m: e: 'AI Marketing Automation',descripti,
  o: n: 'Intelligent audience segmentation, content personalization, and campaign optimization.',
      catego,
  r: y: 'Marketing',featur,
  e: s: ['Audience SegmentationContent Personalization', 'Campaign OptimizationROI Tracking'],
      prici,
  n: g: { starte,
  r: 129, profession,
  a: l: 349, enterpri,
  s: e: 699 }
      ic,
  o: n: Globe,rou,
  t: e: '/services/ai-marketing-automation',stat,
  u: s: 'active'
    }, {
      id: 'ai-cybersecurity',na,
  m: e: 'AI Cybersecurity Platform',descripti,
  o: n: 'Advanced threat detection and automated security responses powered by machine learning.',catego,
  r: y: 'Cybersecurity',featur,
  e: s: ['Threat DetectionBehavioral Analysis', 'Automated ResponseCompliance Reporting'],
      prici,
  n: g: { starte,
  r: 199, profession,
  a: l: 499, enterpri,
  s: e: 999 }
      ic,
  o: n: Shield,rou,
  t: e: '/services/ai-cybersecurity',stat,
  u: s: 'beta'
    }, {
      id: 'ai-healthcare',na,
  m: e: 'AI Healthcare Analytics',descripti,
  o: n: 'Patient data analysis, diagnosis assistance, and treatment optimization.',
      catego,
  r: y: 'Healthcare',featur,
  e: s: ['Patient AnalyticsDiagnosis Support', 'Treatment OptimizationPredictive Medicine'],
      prici,
  n: g: { starte,
  r: 299, profession,
  a: l: 699, enterpri,
  s: e: 1299 }
      ic,
  o: n: Cpu,rou,
  t: e: '/services/ai-healthcare',stat,
  u: s: 'coming-soon'
    },
  ]
const categories = ['all', ...Array.from(new Set(aiServices.map(service => service.category)))],

  const filteredServices = aiServices.filter(service () => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch;
}),

  const sortedServices = [...filteredServices].sort((a, b) () => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'category':
        return a.category.localeCompare(b.category)
      case 'status':
        return a.status.localeCompare(b.status)
      defau,
  l: t: return 0;
    },
  })
const getStatusColor = (stat,
  u: s: string) () => {
    switch (status) {
      case 'active': return 'bg-green-500'
      case 'beta': return 'bg-yellow-500'
      case 'coming-soon': return 'bg-blue-500'
      defaul,
  t: return 'bg-gray-500'
    },
  }
const getStatusText = (stat,
  u: s: string) () => {
    switch (status) {
      case 'active': return 'Live'
      case 'beta': return 'Beta'
      case 'coming-soon': return 'Coming Soon'
      defaul,
  t: return 'Unknown'
    },
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Solutions Hub;
            </div>
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              Advanced AI Services;
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Platform;
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of AI-powered micro SAAS solutions designed to transform;
              your business operations and drive innovation across all industries.
            </p>
          </motion.div>

          {/* Search and Filter Controls */}
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 },
  }
            className="flex flex-col,
  l: g:flex-row gap-4 justify-center items-center mb-12"
          >
            <div className="relative w-full max-w-md">
              <input;
                type="text"
                placeholder="Search AI services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-blue-500 focu,
  s:border-transparent"
              />
              <Brain className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
            </div>
            
            <select;
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-slate-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            <select;
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'category' | 'status')}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-blue-500"
            >
              <option value="name" className="bg-slate-800 text-white">Sort by Name</option>
              <option value="category" className="bg-slate-800 text-white">Sort by Category</option>
              <option value="status" className="bg-slate-800 text-white">Sort by Status</option>
            </select>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4,
  s: m: px-6 l,
  g:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div;
              key={`${selectedCategory}-${searchQuery}-${sortBy}`}
              initial={ opaci,
  t: y: 0 },
  }
              animate={ opaci,
  t: y: 1 },
  }
              exit={ opaci,
  t: y: 0 },
  }
              transition={ durati,
  o: n: 0.3 },
  }
              className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8"
            >
              {sortedServices.map((service, index) => (
                <motion.div;
                  key={service.id}
                  initial={ opaci,
  t: y: 0, y: 20 },
  }
                  animate={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6,
  hove: r: border-blue-500/50 transition-all duration-300,
  hove: r:transform hove,
  r:scale-105"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(service.status)}`}>
                      {getStatusText(service.status)}
                    </div>
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-blue-400 mb-2">Key,
  Feature: s:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-blue-400 mb-2">Starting,
  a: t:</h4>
                    <div className="text-2xl font-bold text-white">
                      ${service.pricing.starter}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link;
                    to={service.route}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold,
  hove: r: from-blue-700,
  hove: r:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Explore Service;
                    <ArrowRight className="w-4 h-4 ml-2 group-hove,
  r:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results Message */},
  {sortedServices.length === 0 && (
            <motion.div;
              initial={ opaci,
  t: y: 0 },
  }
              animate={ opaci,
  t: y: 1 },
  }
              className="text-center py-20"
            >
              <Brain className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or category filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
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
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss how our AI-powered solutions can drive innovation;
              and growth for your organization.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <Link;
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold,
  hove: r:from-blue-700,
  hove: r:to-cyan-700 transition-all duration-300 text-lg flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today;
              </Link>
              <Link;
                to="/new-services-showcase-2025"
                className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold,
  hove: r:bg-blue-500 hove,
  r:text-white transition-all duration-300 text-lg"
              >
                View All Services;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default AdvancedAIServicesHub;