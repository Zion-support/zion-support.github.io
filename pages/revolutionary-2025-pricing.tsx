import React, { useState } from 'react',
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity, Check, X, AlertTriangle, Info, Zap as ZapIcon, Shield as ShieldIcon, Users as UsersIcon, Globe as GlobeIcon, Cpu as CpuIcon, Database as DatabaseIcon, Cloud as CloudIcon, Smartphone as SmartphoneIcon, Palette as PaletteIcon, Search as SearchIcon, MessageSquare as MessageSquareIcon, FileText as FileTextIcon, Calendar as CalendarIcon, CreditCard as CreditCardIcon, BarChart3 as BarChart3Icon, Settings as SettingsIcon, Code as CodeIcon, BookOpen as BookIcon, Activity as ActivityIcon, Database as DatabaseIcon2, Play as PlayIcon, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Filter as FilterIcon, Grid as GridIcon, List as ListIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, Sparkles as SparklesIcon, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Brain as BrainIcon, Atom as AtomIcon, Globe2 as Globe2Icon, Bot as BotIcon, ChevronRight as ChevronRightIcon, Eye, Heart, Share2, Download, Bookmark, ThumbsUp, MessageCircle, Share, Users as UsersIcon2, Target as TargetIcon, Zap as ZapIcon2 } from 'lucide-react',

import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground'
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation'
import { revolutionaryAI2025Services } from '../data/revolutionary-2025-ai-services'
import { revolutionaryITInfrastructure2025Services } from '../data/revolutionary-2025-it-infrastructure'
import { revolutionary2025MicroSaasServices } from '../data/revolutionary-2025-micro-saas'
export default function Revolutionary2025Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly'),
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

  // Combine all revolutionary services
  const _allRevolutionaryServices = [
    ...revolutionaryAI2025Services,
    ...revolutionaryITInfrastructure2025Services,
    ...revolutionary2025MicroSaasServices
  ],

  // Service categories
  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: revolutionaryAI2025Services.length },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, count: revolutionaryITInfrastructure2025Services.length },
          { id: 'saas', name: 'Micro SaaS', icon: Zap, count: revolutionary2025MicroSaasServices.length }
  ],

  // Filter services based on selected category
  const _filteredServices = selectedCategory === 'all' 
    ? allRevolutionaryServices 
    : allRevolutionaryServices.filter(service => {
        if (selectedCategory === 'ai') return service.category.includes('AI'),
        if (selectedCategory === 'infrastructure') return service.category.includes('IT') || service.category.includes('Network') || service.category.includes('Computing'),
        if (selectedCategory === 'saas') return service.category.includes('AI') || service.category.includes('Virtual') || service.category.includes('Creative'),
        return true
      }),

  // Calculate pricing with billing cycle
  const getPrice = (service: any) => {
    const basePrice = parseInt(service.price.replace('$', '').replace(, '')),
    if (billingCycle === 'yearly') {
      return Math.floor(basePrice * 0.8), // 20% discount for yearly
    }
    return basePrice
  },

  // Pricing tiers for comparison
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: billingCycle === 'monthly' ? 99 : 79,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 25+ Core ServicesBasic AI IntegrationStandard Support (24/7)30-Day Free TrialBasic Analytics DashboardEmail Support99.5% Uptime GuaranteeStandard Security Features'
      ],
      icon: <Sparkles className=&quot;w-8 h-8&quot; />,
      variant: 'quantum' as const,
      popular: false,
      cta: 'Start Free Trial',
      ctaVariant: 'secondary' as const
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billingCycle === 'monthly' ? 299 : 239,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 50+ ServicesAdvanced AI IntegrationPriority Support (24/7)60-Day Free TrialAdvanced Analytics DashboardPhone & Email Support99.9% Uptime GuaranteeAdvanced Security Features',
        'Custom IntegrationsPerformance Monitoring'
      ],
      icon: <Rocket className=&quot;w-8 h-8&quot; />,
      variant: 'ai-futuristic' as const,
      popular: true,
      cta: 'Start Free Trial',
      ctaVariant: 'primary' as const
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: billingCycle === 'monthly' ? 999 : 799,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to ALL ServicesFull AI & Quantum IntegrationDedicated Support Team90-Day Free TrialEnterprise Analytics Suite24/7 Dedicated Support99.99% Uptime GuaranteeEnterprise Security Features',
        'Custom DevelopmentWhite-label SolutionsAPI AccessSLA Guarantees'
      ],
      icon: <Crown className=&quot;w-8 h-8&quot; />,
      variant: 'quantum-futuristic' as const,
      popular: false,
      cta: 'Contact Sales',
      ctaVariant: 'primary' as const
    }
  ],

  // Market analysis
  const marketAnalysis = {
    totalMarketSize: '$150B+',
    growthRate: '250% annually',
    customerSatisfaction: '98%',
    averageROI: '500%',
    timeToValue: '< 30 days',
    globalReach: '150+ countries'
  },

  return (
    <UltraQuantumHolographicBackground intensity={2.0}>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Revolutionary 2025 Pricing - Zion Tech Group | Competitive AI & IT Solutions</title>
          <meta name=&quot;description&quot; content=&quot;Explore competitive pricing for Zion Tech Group's revolutionary 2025 services. AI consciousness simulation, quantum computing, zero trust security, and innovative micro SaaS solutions. Contact: +1 302 464 0950&quot; />
          <meta name=&quot;keywords&quot; content=&quot;AI pricing, quantum computing pricing, zero trust security pricing, edge computing pricing, 5G pricing, neuromorphic computing pricing, AI branding pricing, holographic events pricing&quot; />
          <meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
          <meta name=&quot;robots&quot; content=&quot;index, follow&quot; />
          <meta property=&quot;og:title&quot; content=&quot;Revolutionary 2025 Pricing - Zion Tech Group&quot; />
          <meta property=&quot;og:description&quot; content=&quot;Competitive pricing for cutting-edge AI, quantum computing, and IT infrastructure services. Contact: +1 302 464 0950&quot; />
          <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/revolutionary-2025-pricing&quot; />
          <meta property=&quot;og:type&quot; content=&quot;website&quot; />
          <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/revolutionary-2025-pricing&quot; />
        </Head>

        <UltraAdvancedNavigation />

        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;>
                Revolutionary 2025 Pricing
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
                Experience the future of technology at competitive prices. Our revolutionary services 
                deliver 10x better performance at 50% lower costs than traditional solutions.
              </p>

              {/* Billing Toggle */}
              <div className=&quot;flex items-center justify-center gap-4 mb-12&quot;>
                <span className=&quot;text-gray-400&quot;>Monthly</span>
                <button
                  onClick={_() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className={_`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                    billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-600'}`}
                >
                  <span
                    className={_`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'}`}
                  />
                </button>
                <span className=&quot;text-gray-400&quot;>Yearly (Save 20%)</span>
              </div>

              {/* Market Analysis */}
              <div className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12&quot;>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }} className=&quot;bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30&quot;>
                  <div className=&quot;text-2xl font-bold text-blue-400&quot;>{marketAnalysis.totalMarketSize}</div>
                  <div className=&quot;text-xs text-gray-400&quot;>Market Size</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }} className=&quot;bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-4 border border-green-500/30&quot;>
                  <div className=&quot;text-2xl font-bold text-green-400&quot;>{marketAnalysis.growthRate}</div>
                  <div className=&quot;text-xs text-gray-400&quot;>Growth Rate</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }} className=&quot;bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/30&quot;>
                  <div className=&quot;text-2xl font-bold text-purple-400&quot;>{marketAnalysis.customerSatisfaction}</div>
                  <div className=&quot;text-xs text-gray-400&quot;>Satisfaction</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }} className=&quot;bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-4 border border-orange-500/30&quot;>
                  <div className=&quot;text-2xl font-bold text-orange-400&quot;>{marketAnalysis.averageROI}</div>
                  <div className=&quot;text-xs text-gray-400&quot;>Average ROI</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }} className=&quot;bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/30&quot;>
                  <div className=&quot;text-2xl font-bold text-cyan-400&quot;>{marketAnalysis.timeToValue}</div>
                  <div className=&quot;text-xs text-gray-400&quot;>Time to Value</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }} className=&quot;bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm rounded-2xl p-4 border border-pink-500/30&quot;>
                  <div className=&quot;text-2xl font-bold text-pink-400&quot;>{marketAnalysis.globalReach}</div>
                  <div className=&quot;text-xs text-gray-400&quot;>Global Reach</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Choose Your Transformation Plan
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Start with our starter plan and scale up as you grow. All plans include 
                our revolutionary AI and quantum computing services.
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8&quot;>
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.2}}
                  viewport={_{ once: true}}
                  className={_`relative ${
                    tier.popular 
                      ? 'scale-105 border-2 border-blue-500' 
                      : 'border border-gray-700'} bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8`}
                >
                  {tier.popular && (
                    <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                      <div className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold&quot;>
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className=&quot;text-center mb-8&quot;>
                    <div className=&quot;inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4&quot;>
                      {tier.icon}
                    </div>
                    <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{tier.name}</h3>
                    <p className=&quot;text-gray-400 mb-6&quot;>{tier.description}</p>
                    
                    <div className=&quot;mb-4&quot;>
                      <span className=&quot;text-4xl font-bold text-white&quot;>${tier.price}</span>
                      <span className=&quot;text-gray-400&quot;>{tier.period}</span>
                    </div>
                    
                    {tier.savings && (
                      <div className=&quot;text-green-400 text-sm font-semibold mb-6&quot;>
                        {tier.savings}
                      </div>
                    )}
                  </div>

                  <ul className=&quot;space-y-4 mb-8&quot;>
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-start gap-3&quot;>
                        <Check className=&quot;w-5 h-5 text-green-400 mt-0.5 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300&quot;>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className=&quot;w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200&quot;>
                    {tier.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Pricing Grid */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Individual Service Pricing
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Choose individual services or bundle them for maximum savings. 
                All services include free trials and comprehensive support.
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;>
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={_() => setSelectedCategory(category.id)}
                  className={_`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500 text-white'
                      : 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400'}`}
                >
                  <category.icon className=&quot;w-5 h-5&quot; />
                  {category.name}
                  <span className=&quot;bg-white/20 px-2 py-1 rounded-full text-xs&quot;>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }} className=&quot;group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105&quot;>
                  {/* Service Header */}
                  <div className=&quot;flex items-start justify-between mb-4&quot;>
                    <div className=&quot;flex items-center gap-3&quot;>
                      <div className=&quot;text-3xl&quot;>{service.icon}</div>
                      <div>
                        <h3 className=&quot;text-xl font-bold text-white group-hover:text-blue-400 transition-colors&quot;>
                          {service.name}
                        </h3>
                        <p className=&quot;text-gray-400 text-sm&quot;>{service.tagline}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <div className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1&quot;>
                        <Star className=&quot;w-3 h-3&quot; />
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Service Description */}
                  <p className=&quot;text-gray-300 mb-4 line-clamp-3&quot;>{service.description}</p>

                  {/* Price and Rating */}
                  <div className=&quot;flex items-center justify-between mb-4&quot;>
                    <div className=&quot;flex items-center gap-2&quot;>
                      <span className=&quot;text-2xl font-bold text-blue-400&quot;>
                        ${getPrice(service)}
                      </span>
                      <span className=&quot;text-gray-400&quot;>{service.period}</span>
                    </div>
                    <div className=&quot;flex items-center gap-1&quot;>
                      <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                      <span className=&quot;text-white&quot;>{service.rating}</span>
                      <span className=&quot;text-gray-400 text-sm&quot;>({service.reviews})</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className=&quot;mb-4&quot;>
                    <h4 className=&quot;text-sm font-semibold text-gray-300 mb-2&quot;>Key Features:</h4>
                    <div className=&quot;grid grid-cols-1 gap-1&quot;>
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className=&quot;flex items-center gap-2 text-sm text-gray-400&quot;>
                          <div className=&quot;w-1.5 h-1.5 bg-blue-500 rounded-full&quot;></div>
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className=&quot;text-xs text-gray-500 mt-1&quot;>
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Market Position */}
                  <div className=&quot;mb-4 p-3 bg-gray-800/50 rounded-lg&quot;>
                    <h4 className=&quot;text-xs font-semibold text-gray-300 mb-1&quot;>Market Position:</h4>
                    <p className=&quot;text-xs text-gray-400 line-clamp-2&quot;>{service.marketPosition}</p>
                  </div>

                  {/* Actions */}
                  <div className=&quot;flex items-center gap-3&quot;>
                    <button className=&quot;flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700&quot;>
                      <ExternalLink className=&quot;w-4 h-4 mr-2&quot; />
                      Learn More
                    </button>
                    <button className=&quot;border-blue-500 text-blue-400 hover:bg-blue-500/20&quot;>
                      <Phone className=&quot;w-4 h-4&quot; />
                    </button>
                  </div>

                  {/* Hover Effects */}
                  <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none&quot;></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Ready to Get Started?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Contact our team to discuss your specific needs and get a custom quote. 
                We offer flexible pricing and payment options to fit your budget.
              </p>
              
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-8&quot;>
                <div className=&quot;bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30&quot;>
                  <Phone className=&quot;w-8 h-8 text-blue-400 mx-auto mb-3&quot; />
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Call Us</h3>
                  <p className=&quot;text-blue-400 font-mono&quot;>{contactInfo.mobile}</p>
                </div>
                
                <div className=&quot;bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30&quot;>
                  <Mail className=&quot;w-8 h-8 text-green-400 mx-auto mb-3&quot; />
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Email Us</h3>
                  <p className=&quot;text-green-400&quot;>{contactInfo.email}</p>
                </div>
                
                <div className=&quot;bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30&quot;>
                  <MapPin className=&quot;w-8 h-8 text-purple-400 mx-auto mb-3&quot; />
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Visit Us</h3>
                  <p className=&quot;text-purple-400 text-sm&quot;>{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Phone className="w-5 h-5 mr-2" />
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <button className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700&quot;>
                  <Phone className=&quot;w-5 h-5 mr-2&quot; />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  Get Custom Quote
                </button>
                <button className=&quot;border-blue-500 text-blue-400 hover:bg-blue-500/20&quot;>
                  <BookOpen className=&quot;w-5 h-5 mr-2&quot; />
                  Download Pricing Guide
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraQuantumHolographicBackground>
  )
}