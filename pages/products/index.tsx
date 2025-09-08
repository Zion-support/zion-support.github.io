import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Award,
  Globe,
  Zap as ZapIcon,
  Monitor,
  Smartphone as Mobile,
  Laptop,
  Server as ServerIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Shield as ShieldIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  BarChart as BarChartIcon,
  Code as CodeIcon,
  Palette as PaletteIcon,
  Smartphone as SmartphoneIcon,
  Globe as GlobeIcon,
  Zap as ZapIcon2,
  Lock as LockIcon,
  Eye as EyeIcon,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  Settings as SettingsIcon,
  FileText as FileTextIcon,
  MessageCircle as MessageCircleIcon,
  Search as SearchIcon,
  BarChart as BarChartIcon2,
  Users2 as Users2Icon,
  Settings as SettingsIcon2,
  Palette as PaletteIcon2,
  TrendingUp as TrendingUpIcon2,
  Award as AwardIcon,
  Globe as GlobeIcon2,
  Zap as ZapIcon3
} from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'AI Email Responder',
    description: 'Intelligent email automation powered by advanced AI',
    category: 'AI Services',
    icon: Brain,
    price: '$99/month',
    features: [
      'Natural language processing',
      'Context-aware responses',
      'Multi-language support',
      'Custom training models'
    ],
    rating: 4.8,
    users: 1200,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions for modern businesses',
    category: 'Cloud Services',
    icon: Cloud,
    price: '$199/month',
    features: [
      'Auto-scaling infrastructure',
      'Global CDN',
      '99.9% uptime guarantee',
      '24/7 monitoring'
    ],
    rating: 4.7,
    users: 850,
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 3,
    name: 'Security Suite',
    description: 'Comprehensive security solutions for enterprise',
    category: 'Security',
    icon: Shield,
    price: '$299/month',
    features: [
      'Advanced threat detection',
      'Real-time monitoring',
      'Compliance management',
      'Incident response'
    ],
    rating: 4.9,
    users: 650,
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 4,
    name: 'Micro SaaS Platform',
    description: 'Complete SaaS solution for small businesses',
    category: 'SaaS',
    icon: Zap,
    price: '$149/month',
    features: [
      'Multi-tenant architecture',
      'User management',
      'Payment processing',
      'Analytics dashboard'
    ],
    rating: 4.6,
    users: 950,
    color: 'from-purple-500 to-pink-500'
  }
];

const categories = [
  'All',
  'AI Services',
  'Cloud Services',
  'Security',
  'SaaS'
];

export default function ProductsIndex() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Layout
      title="Products - Zion Tech Group"
      description="Discover our comprehensive suite of technology products and services designed for modern businesses."
      keywords="products, AI services, cloud computing, security, SaaS, technology solutions"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Products
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className={`h-48 bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                    <product.icon className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-gray-900">
                        {product.price}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        {product.users} users
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        href={`/products/${product.id}`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Globe className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try selecting a different category.</p>
              </div>
            )}
          </div>
        </section>

            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
              
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {productCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="scroll-mt-20"
                id={category.id}
              >
                {/* Category Header */}
                <div className="text-center mb-16">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {category.name}
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Products Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {category.products.map((product, productIndex) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: productIndex * 0.1 }}
                      className="group relative"
                    >
                      <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                        {/* Product Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                            <product.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-right">
                            <span className="inline-block px-3 py-1 bg-slate-700 text-cyan-400 text-xs font-medium rounded-full">
                              {product.category}
                            </span>
                            <div className="text-2xl font-bold text-cyan-400 mt-2">
                              {product.price}
                            </div>
                          </div>
                        </div>

                        {/* Product Info */}
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-3 mb-8">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-slate-300">
                              <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 inline" />
                          </a>
                          <a
                            href={`mailto:${contactInfo.email}?subject=Inquiry about ${product.name}`}
                            className="px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                          >
                            Get Quote
                          </a>
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
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Our team of experts can build tailored solutions that perfectly fit your business requirements. 
                Let's discuss your project and create something amazing together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Project Discussion
                </Link>
                
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                >
                  Request Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}