import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Cloud, Settings, CheckCircle, ArrowRight, Star, Zap, Users, Lock, Wifi, Building, BarChart3, Code, Search, ShoppingCart, BookOpen, DollarSign, Target, Heart, GraduationCap, Truck, Home, Bot, Phone, Mail, MapPin } from 'lucide-react'
import Layout from '../components/Layout'

const itServices = [
  {
    id: 'ai-business-process-automation', title: 'AI-Powered Business Process Automation', description: 'Transform your business operations with intelligent automation that learns and adapts to your workflows', icon: Bot, features: ['Intelligent Workflow Design', 'Process Mining & Analysis', 'RPA Integration', 'Real-time Monitoring'], ;
    pricing: 'Starting at $1,500/month', ;
    category: 'AI & Automation', benefits: ['Reduce operational costs by 60%', 'Eliminate manual errors', 'Scale processes automatically'], ;
    marketPrice: '$1,000-15, 000/month' },;
  {
    id: 'ai-cybersecurity-operations', title: 'AI Cybersecurity Operations Center', description: 'Advanced threat detection and response with AI-powered security monitoring and incident management', icon: Shield, features: ['AI Threat Detection', 'Automated Response', 'Security Analytics', 'Compliance Monitoring'], ;
    pricing: 'Starting at $1,500/month', ;
    category: 'Cybersecurity', benefits: ['99.9% threat detection accuracy', 'Real-time incident response', 'Reduced security costs'], ;
    marketPrice: '$1,000-25, 000/month' },;
  {
    id: 'ai-data-analytics-platform', title: 'AI Data Analytics Platform', description: 'Unlock insights from your data with advanced AI-powered analytics, machine learning, and predictive modeling', ;
    icon: BarChart3, features: ['Predictive Analytics', 'Machine Learning Models', 'Real-time Dashboards', 'Data Visualization'], ;
    pricing: 'Starting at $1,000/month', ;
    category: 'Data & Analytics', benefits: ['Make data-driven decisions', 'Predict future trends', 'Optimize business performance'], ;
    marketPrice: '$1,000-12, 000/month' },;
  {
    id: 'cloud-infrastructure-management', title: 'Cloud Infrastructure Management', description: 'Comprehensive cloud solutions with automated scaling, monitoring, and cost optimization', ;
    icon: Cloud, features: ['Multi-Cloud Management', 'Auto-Scaling', 'Cost Optimization', 'Disaster Recovery'], ;
    pricing: 'Starting at $1,500/month', ;
    category: 'Cloud Services', benefits: ['Reduce cloud costs by 40%', 'Improve reliability', 'Scale on demand'], ;
    marketPrice: '$1,000-10, 000/month' },;
  {
    id: 'ai-devops-automation', title: 'AI DevOps Automation Platform', description: 'Intelligent CI/CD pipelines with automated testing, deployment, and infrastructure management', ;
    icon: Settings, features: ['AI-Powered Testing', 'Automated Deployment', 'Infrastructure as Code', 'Performance Monitoring'], ;
    pricing: 'Starting at $1,200/month', ;
    category: 'DevOps & Infrastructure', benefits: ['90% faster deployments', 'Zero-downtime updates', 'Automated quality assurance'], ;
    marketPrice: '$1,000-15, 000/month' },;
  {
    id: 'ai-customer-experience', title: 'AI Customer Experience Platform', description: 'Enhance customer satisfaction with AI-powered chatbots, personalization, and omnichannel support', ;
    icon: Heart, features: ['AI Chatbots', 'Personalization Engine', 'Omnichannel Support', 'Sentiment Analysis'], ;
    pricing: 'Starting at $1,800/month', ;
    category: 'Customer Experience', benefits: ['Increase customer satisfaction', 'Reduce support costs', 'Personalized experiences'], ;
    marketPrice: '$1,500-12, 000/month' },;
  {
    id: 'ai-supply-chain-optimization', title: 'AI Supply Chain Optimization', description: 'Optimize your supply chain with AI-powered demand forecasting, inventory management, and logistics optimization', ;
    icon: Truck, features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management'], ;
    pricing: 'Starting at $1,800/month', ;
    category: 'Supply Chain', benefits: ['Reduce inventory costs', 'Improve delivery times', 'Minimize supply chain risks'], ;
    marketPrice: '$1,000-20, 000/month' },;
  {
    id: 'ai-financial-services', title: 'AI Financial Services Platform', description: 'Advanced financial technology solutions with AI-powered risk assessment, fraud detection, and trading algorithms', ;
    icon: DollarSign, features: ['Risk Assessment', 'Fraud Detection', 'Algorithmic Trading', 'Regulatory Compliance'], ;
    pricing: 'Starting at $1,000/month', ;
    category: 'Financial Technology', benefits: ['Reduce financial risks', 'Detect fraud in real-time', 'Optimize trading strategies'], ;
    marketPrice: '$1,000-30, 000/month' },;
  {
    id: 'ai-healthcare-solutions', title: 'AI Healthcare Technology Solutions', description: 'Transform healthcare delivery with AI-powered diagnostics, patient management, and medical research tools', ;
    icon: Heart, features: ['Medical Image Analysis', 'Patient Risk Assessment', 'Drug Discovery', 'Clinical Decision Support'], ;
    pricing: 'Starting at $1,500/month', ;
    category: 'Healthcare Technology', benefits: ['Improve diagnostic accuracy', 'Reduce medical errors', 'Accelerate research'], ;
    marketPrice: '$1,000-25, 000/month' },;
  {
    id: 'ai-education-platform', title: 'AI Education Technology Platform', description: 'Revolutionize learning with AI-powered personalized education, adaptive learning, and intelligent tutoring systems', ;
    icon: GraduationCap, features: ['Personalized Learning', 'Adaptive Assessments', 'Intelligent Tutoring', 'Learning Analytics'], ;
    pricing: 'Starting at $1,200/month', ;
    category: 'Education Technology', benefits: ['Improve learning outcomes', 'Personalize education', 'Track student progress'], ;
    marketPrice: '$1,500-8, 000/month' },;
  {
    id: 'ai-manufacturing-optimization', title: 'AI Manufacturing Optimization', description: 'Optimize manufacturing processes with AI-powered quality control, predictive maintenance, and production planning', ;
    icon: Building, features: ['Predictive Maintenance', 'Quality Control', 'Production Optimization', 'Supply Chain Integration'], ;
    pricing: 'Starting at $1,000/month', ;
    category: 'Manufacturing Technology', benefits: ['Reduce downtime', 'Improve product quality', 'Optimize production efficiency'], ;
    marketPrice: '$1,000-18, 000/month' },;
  {
    id: 'ai-retail-solutions', title: 'AI Retail Technology Solutions', description: 'Enhance retail operations with AI-powered inventory management, customer analytics, and personalized shopping experiences', ;
    icon: ShoppingCart, features: ['Inventory Management', 'Customer Analytics', 'Personalized Recommendations', 'Price Optimization'], ;
    pricing: 'Starting at $1,200/month', ;
    category: 'Retail Technology', benefits: ['Increase sales', 'Optimize inventory', 'Improve customer experience'], ;
    marketPrice: '$1,500-15, 000/month' },;
  {
    id: 'ai-energy-management', title: 'AI Energy Management System', description: 'Optimize energy consumption with AI-powered smart grid management, renewable energy integration, and predictive analytics', ;
    icon: Zap, features: ['Smart Grid Management', 'Energy Forecasting', 'Renewable Integration', 'Cost Optimization'], ;
    pricing: 'Starting at $1,500/month', ;
    category: 'Energy Technology', benefits: ['Reduce energy costs', 'Optimize consumption', 'Integrate renewables'], ;
    marketPrice: '$1,000-15, 000/month' },;
  {
    id: 'ai-transportation-logistics', title: 'AI Transportation & Logistics', description: 'Optimize transportation and logistics with AI-powered route optimization, fleet management, and demand forecasting', ;
    icon: Truck, features: ['Route Optimization', 'Fleet Management', 'Demand Forecasting', 'Real-time Tracking'], ;
    pricing: 'Starting at $1,800/month', ;
    category: 'Transportation Technology', benefits: ['Reduce transportation costs', 'Improve delivery efficiency', 'Optimize routes'], ;
    marketPrice: '$1,000-20, 000/month' },;
  {
    id: 'ai-real-estate-platform', title: 'AI Real Estate Technology Platform', description: 'Transform real estate with AI-powered property valuation, market analysis, and intelligent property management', ;
    icon: Home, features: ['Property Valuation', 'Market Analysis', 'Tenant Screening', 'Maintenance Prediction'], ;
    pricing: 'Starting at $1,800/month', ;
    category: 'Real Estate Technology', benefits: ['Accurate property valuations', 'Optimize rental income', 'Predict maintenance needs'], ;
    marketPrice: '$1,500-12, 000/month' },;
  {
    id: 'ai-legal-tech-platform', title: 'AI Legal Technology Platform', description: 'Streamline legal operations with AI-powered document analysis, contract review, and legal research automation', ;
    icon: BookOpen, features: ['Document Analysis', 'Contract Review', 'Legal Research', 'Compliance Monitoring'], ;
    pricing: 'Starting at $1,500/month', ;
    category: 'Legal Technology', benefits: ['Reduce legal costs', 'Improve accuracy', 'Accelerate research'], ;
    marketPrice: '$1,000-18, 000/month' },;
  {
    id: 'ai-marketing-automation', title: 'AI Marketing Automation Platform', description: 'Maximize marketing ROI with AI-powered campaign optimization, customer segmentation, and personalized content delivery', ;
    icon: Target, features: ['Campaign Optimization', 'Customer Segmentation', 'Content Personalization', 'ROI Analytics'], ;
    pricing: 'Starting at $1,500/month', ;
    category: 'Marketing Technology', benefits: ['Increase marketing ROI', 'Personalize campaigns', 'Optimize customer targeting'], ;
    marketPrice: '$1,000-10, 000/month' },;
  {
    id: 'ai-hr-technology', title: 'AI Human Resources Technology', description: 'Transform HR operations with AI-powered recruitment, employee analytics, and workforce optimization', ;
    icon: Users, features: ['Talent Acquisition', 'Employee Analytics', 'Performance Management', 'Workforce Planning'], ;
    pricing: 'Starting at $1,800/month', ;
    category: 'Human Resources Technology', benefits: ['Improve hiring quality', 'Optimize workforce', 'Reduce HR costs'], ;
    marketPrice: '$1,500-12, 000/month' },;
  {
    id: 'ai-iot-platform', title: 'AI Internet of Things Platform', description: 'Connect and manage IoT devices with AI-powered data processing, device management, and predictive analytics', ;
    icon: Wifi, features: ['Device Management', 'Data Processing', 'Predictive Analytics', 'Edge Computing'], ;
    pricing: 'Starting at $1,200/month', ;
    category: 'IoT Technology', benefits: ['Optimize device performance', 'Predict maintenance needs', 'Process data at scale'], ;
    marketPrice: '$1,500-15, 000/month' },;
  {
    id: 'ai-blockchain-solutions', title: 'AI Blockchain Technology Solutions', description: 'Secure and transparent solutions with AI-powered blockchain applications, smart contracts, and decentralized systems', ;
    icon: Lock, features: ['Smart Contracts', 'Decentralized Applications', 'Cryptocurrency Integration', 'Security Protocols'], ;
    pricing: 'Starting at $1,500/month', ;
    category: 'Blockchain Technology', benefits: ['Enhanced security', 'Transparent transactions', 'Reduce intermediaries'], ;
    marketPrice: '$1,000-25, 000/month' }]

const categories = ['All', ;
  'AI & Automation', ;
  'Cybersecurity', ;
  'Data & Analytics', ;
  'Cloud Services', ;
  'DevOps & Infrastructure', ;
  'Customer Experience', ;
  'Supply Chain', ;
  'Financial Technology', ;
  'Healthcare Technology', ;
  'Education Technology', ;
  'Manufacturing Technology', ;
  'Retail Technology', ;
  'Energy Technology', ;
  'Transportation Technology', ;
  'Real Estate Technology', ;
  'Legal Technology', ;
  'Marketing Technology', ;
  'Human Resources Technology', ;
  'IoT Technology', ;
  'Blockchain Technology']

export default function ITServices() {
  const [selectedCategory, setSelectedCategory] = React.useState('All')
  const [searchTerm, setSearchTerm] = React.useState('')

  const filteredServices = itServices.filter(service => {
    const matchesCategory: selectedCategory === 'All' || service.category === selectedCategory
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch })

  return(<Layout>
      <Head>
        <title>IT Services & Solutions | ZionTech Group</title>
        <meta name="description" content="Comprehensive IT services and solutions powered by AI and cutting-edge technology. Transform your business with our expert IT consulting and implementation services."  />
        <meta name="keywords" content="IT services, technology solutions, AI services, cloud computing, cybersecurity, data analytics"  />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        { /* Hero Section */ }
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 pt-20 pb-16">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
                IT Services &
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  { " " }Solutions;
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth.;
                From AI-powered automation to cloud infrastructure, we deliver cutting-edge IT services.;
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5"  />
                </Link>
                <Link
                  href="/pricing"
                  className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        { /* Search and Filter Section */ }
        <section className="py-12 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6">
              { /* Search */ }
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"  />
                  <input
                    type="text"
                    placeholder="Search IT services and solutions..."
                    value={ searchTerm }
                    onChange={ (e) => setSearchTerm(e.target.value) }
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-300/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              { /* Category Filter */ }
              <div className="lg: w-64">
                <select
                  value={ selectedCategory }
                  onChange={ (e) => setSelectedCategory(e.target.value) }
                  className="w-full px-4 py-3 bg-white/10 border border-gray-300/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-blue-500"
                >
                  { categories.map((category) => (<option key={category } value={ category } className="bg-gray-800 text-white">
                      { category }
                    </option>))}
                </select>
              </div>
            </div>
          </div>
        </section>
        { /* Services Grid */ }
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              { filteredServices.map((service, index) => (;
                <motion.div;
                  key={service.id }
                  initial={{opacity: 0, y: 20 }}
                  whileInView={{opacity: 1, y: 0 }}
                  transition={{duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover: bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white"  />
                    </div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                      { service.category }
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover: text-blue-300 transition-colors">
                    { service.title }
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm">
                    { service.description }
                  </p>
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Features: </h4>
                    <ul className="space-y-1">
                      { service.features.slice(0, 3).map((feature, idx) => (;
                        <li key={idx } className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0"  />
                          { feature }
                        </li>))}
                    </ul>
                  </div>
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Benefits: </h4>
                    <ul className="space-y-1">
                      { service.benefits.map((benefit, idx) => (;
                        <li key={idx } className="flex items-center text-sm text-gray-300">
                          <ArrowRight className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0"  />
                          { benefit }
                        </li>))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-white">{ service.pricing }</div>
                        <div className="text-sm text-gray-400">Market: { service.marketPrice }</div>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="h-4 w-4 fill-current"  />
                        <span className="ml-1 text-sm">4.9/5</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href="/contact"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                      >
                        Get Quote
                      </Link>
                      <Link
                        href="/micro-saas"
                        className="flex-1 border border-gray-300 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        { /* CTA Section */ }
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              whileInView={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our expert team design and implement the perfect technology solution for your business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get Custom Solution
                  <ArrowRight className="ml-2 h-5 w-5"  />
                </Link>
                <Link
                  href="/micro-saas"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Explore Micro SaaS
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        { /* Contact Info */ }
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              whileInView={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid md: grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-3"  />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-3"  />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-3"  />
                  <span className="text-gray-300">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
}