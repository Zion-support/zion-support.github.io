import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  Clock,
  Leaf,
  FileText as FileTextIcon,
  Atom,
  PenTool,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Phone,
  MapPin,
  DollarSign,
  Target,
  Award,
  Lightbulb,
  Gauge,
  Activity,
  Thermometer,
  Stethoscope,
  Pill,
  Microscope,
  Recycle,
  Sun,
  Wind,
  Droplets,
  Factory,
  Store,
  Bank,
  Hospital,
  Building2,
  Gavel,
  Scale,
  BookOpen,
  Video,
  GraduationCap,
  Handshake,
  MessageCircle,
  HelpCircle,
  Settings,
  PieChart,
  LineChart,
  Wrench,
  Tool,
  Palette,
  Camera,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Truck,
  Warehouse,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  Volcano,
  Cave,
  Canyon,
  Valley,
  Hill,
  Cliff,
  Rock,
  Sand,
  Soil,
  Grass,
  Tree,
  Flower,
  Bush,
  Vine,
  Moss,
  Algae,
  Coral,
  Shell,
  Fish,
  Bird,
  Mammal,
  Reptile,
  Amphibian,
  Insect,
  Arachnid,
  Crustacean,
  Mollusk,
  Worm,
  Bacteria,
  Virus,
  Fungus,
  Protozoa
} from 'lucide-react';

const ComprehensivePricingGuide2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    {
      title: 'AI-Powered Legal & Compliance',
      description: 'Intelligent legal technology solutions that streamline operations and reduce risks',
      icon: Gavel,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'AI Intelligent Contract Analyzer',
          description: 'Advanced AI-powered contract analysis, risk assessment, and compliance monitoring',
          href: '/services/ai-intelligent-contract-analyzer',
          starter: {
            price: '$299',
            features: ['Up to 50 contracts/month', 'Basic AI analysis', 'Risk scoring', 'Email support', 'Standard compliance checks']
          },
          professional: {
            price: '$799',
            features: ['Up to 500 contracts/month', 'Advanced AI analysis', 'Custom risk models', 'Priority support', 'Advanced compliance monitoring', 'API access', 'Custom integrations']
          },
          enterprise: {
            price: 'Custom',
            features: ['Unlimited contracts', 'Custom AI models', 'Dedicated support', 'On-premise deployment', 'Custom compliance frameworks', 'Advanced analytics', 'White-label options']
          },
          marketPrice: '$500-2000/month',
          benefits: ['Reduce legal review time by 80%', 'Identify risks automatically', 'Ensure regulatory compliance', 'Save on legal costs']
        }
      ]
    },
    {
      title: 'AI Sustainability & ESG',
      description: 'Environmental impact monitoring and sustainability analytics platforms',
      icon: Leaf,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'AI Sustainability Analytics Platform',
          description: 'Comprehensive environmental monitoring, carbon footprint analysis, and ESG compliance',
          href: '/services/ai-sustainability-analytics-platform',
          starter: {
            price: '$499',
            features: ['Up to 5 facilities', 'Basic environmental metrics', 'Carbon footprint tracking', 'Email support', 'Standard reporting']
          },
          professional: {
            price: '$1,299',
            features: ['Up to 25 facilities', 'Advanced AI analytics', 'ESG compliance tracking', 'Priority support', 'Custom dashboards', 'API access', 'Supply chain monitoring']
          },
          enterprise: {
            price: 'Custom',
            features: ['Unlimited facilities', 'Custom AI models', 'Dedicated support', 'On-premise deployment', 'Advanced analytics', 'White-label options', 'Custom integrations']
          },
          marketPrice: '$800-3000/month',
          benefits: ['Reduce carbon emissions by 25%', 'Achieve ESG compliance', 'Optimize resource usage', 'Improve brand reputation']
        }
      ]
    },
    {
      title: 'AI Healthcare & Life Sciences',
      description: 'Next-generation healthcare analytics and predictive medicine solutions',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      services: [
        {
          name: 'AI Healthcare Predictive Analytics',
          description: 'Predictive disease modeling, patient monitoring, and treatment optimization',
          href: '/services/ai-healthcare-predictive-analytics',
          starter: {
            price: '$799',
            features: ['Up to 100 patients', 'Basic AI predictions', 'Email support']
          },
          professional: {
            price: '$2,499',
            features: ['Up to 10,000 patients', 'Advanced AI models', 'Priority support', 'Custom integrations']
          },
          enterprise: {
            price: 'Custom',
            features: ['Unlimited patients', 'Custom AI models', 'Dedicated support', 'On-premise deployment']
          },
          marketPrice: '$1200-5000/month',
          benefits: ['Improve patient outcomes by 30%', 'Reduce readmission rates', 'Optimize resource allocation', 'Enable preventive care']
        }
      ]
    },
    {
      title: 'AI Content & Marketing',
      description: 'Revolutionary content creation and marketing automation solutions',
      icon: PenTool,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Content Creation Studio Pro',
          description: 'Advanced AI-powered content creation, optimization, and marketing automation',
          href: '/services/AI-Content-Creation-Studio-Pro',
          starter: {
            price: '$199',
            features: ['Basic AI content generation', 'SEO optimization', 'Email support', 'Standard templates']
          },
          professional: {
            price: '$599',
            features: ['Advanced AI models', 'Custom branding', 'Priority support', 'API access', 'Custom integrations']
          },
          enterprise: {
            price: 'Custom',
            features: ['Custom AI models', 'Dedicated support', 'White-label options', 'Advanced analytics']
          },
          marketPrice: '$400-1500/month',
          benefits: ['Increase content output by 500%', 'Improve SEO rankings', 'Maintain brand consistency', 'Reduce marketing costs']
        }
      ]
    },
    {
      title: 'Quantum AI & Advanced Computing',
      description: 'Cutting-edge quantum computing and AI hybrid solutions',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      services: [
        {
          name: 'Quantum AI Trading Platform',
          description: 'Next-generation quantum-enhanced trading and financial analytics',
          href: '/services/Quantum-AI-Trading-Platform',
          starter: {
            price: '$1,999',
            features: ['Basic quantum algorithms', 'AI predictions', 'Email support', 'Standard analytics']
          },
          professional: {
            price: '$4,999',
            features: ['Advanced quantum models', 'Real-time analytics', 'Priority support', 'Custom integrations']
          },
          enterprise: {
            price: 'Custom',
            features: ['Custom quantum models', 'Dedicated support', 'On-premise deployment', 'Advanced risk management']
          },
          marketPrice: '$3000-10000/month',
          benefits: ['Improve trading accuracy by 40%', 'Reduce risk exposure', 'Enable real-time decisions', 'Gain competitive advantage']
        }
      ]
    },
    {
      title: 'AI Business Intelligence',
      description: 'Intelligent business analytics and decision-making platforms',
      icon: BarChart3,
      color: 'from-indigo-500 to-blue-500',
      services: [
        {
          name: 'AI Business Intelligence Platform',
          description: 'Comprehensive business analytics with AI-powered insights and predictions',
          href: '/services/ai-business-intelligence',
          starter: {
            price: '$599',
            features: ['Basic predictive analytics', 'Standard dashboards', 'Email support', 'Basic reporting']
          },
          professional: {
            price: '$1,499',
            features: ['Advanced AI models', 'Custom dashboards', 'Priority support', 'API access', 'Custom integrations']
          },
          enterprise: {
            price: 'Custom',
            features: ['Custom AI models', 'Dedicated support', 'On-premise deployment', 'Advanced analytics', 'White-label options']
          },
          marketPrice: '$1000-4000/month',
          benefits: ['Improve decision making by 60%', 'Identify growth opportunities', 'Optimize operations', 'Reduce costs by 25%']
        }
      ]
    }
  ];

  const allServices = serviceCategories.flatMap(category => category.services);

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : serviceCategories.find(cat => cat.title === activeCategory)?.services || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              2025 Comprehensive Pricing Guide
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent AI Service Pricing
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Get competitive pricing on our cutting-edge AI solutions. Compare our rates with market standards 
              and discover why thousands of organizations choose Zion Tech Group for their AI transformation needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              All Services
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(category.title)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.title
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.map((service, serviceIndex) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.name}</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">{service.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                  Market Price Range: {service.marketPrice}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Starter Plan */}
                <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{service.starter.price}</span>
                      <span className="text-gray-400 ml-1">/month</span>
                    </div>
                    <p className="text-gray-400">Perfect for small businesses</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {service.starter.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <a
                      href={service.href}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href="/contact"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                    >
                      <span>Get Started</span>
                      <DollarSign className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>

                {/* Professional Plan */}
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/50 scale-105">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{service.professional.price}</span>
                      <span className="text-gray-400 ml-1">/month</span>
                    </div>
                    <p className="text-gray-400">Ideal for growing companies</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {service.professional.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <a
                      href={service.href}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href="/contact"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                    >
                      <span>Start Trial</span>
                      <Star className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>

                {/* Enterprise Plan */}
                <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{service.enterprise.price}</span>
                    </div>
                    <p className="text-gray-400">For large organizations</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {service.enterprise.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <a
                      href={service.href}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href="/contact"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                    >
                      <span>Contact Sales</span>
                      <Phone className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Benefits */}
              <div className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Business Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <div key={benefit} className="flex items-center text-gray-300">
                      <Star className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our sales team to discuss your specific needs and get a customized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2025;