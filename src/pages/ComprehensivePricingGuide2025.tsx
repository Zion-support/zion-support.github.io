import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  CheckCircle, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Rocket,
  ArrowRight,
  Users,
  Building,
  Globe,
  Cpu,
  Heart,
  Scale,
  PenTool,
  TrendingUp,
  Lock,
  Server,
  Smartphone,
  Atom,
  Leaf,
  Building2,
  Play,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Calculator,
  BarChart3,
  Target,
  Award,
  Clock,
  Calendar,
  FileText,
  Settings,
  Key,
  ShieldCheck,
  Globe2,
  Home,
  Car,
  Factory,
  City,
  GraduationCap,
  ShoppingCart,
  Factory as FactoryIcon,
  City as CityIcon,
  Home as HomeIcon,
  Car as CarIcon,
  Factory as FactoryIcon2,
  City as CityIcon2,
  Home as HomeIcon2,
  Car as CarIcon2
} from 'lucide-react';

export default function ComprehensivePricingGuide2025() {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: 'month',
      description: 'Perfect for small businesses and startups',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'AI Content Creation (5 articles/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Standard Security',
        '5GB Storage',
        'Basic API Access'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/request-quote'
    },
    {
      name: 'Professional',
      price: '$299',
      period: 'month',
      description: 'Ideal for growing businesses',
      color: 'from-purple-500 to-pink-500',
      features: [
        'AI Content Creation (25 articles/month)',
        'Advanced Analytics & Reporting',
        'Priority Support',
        'Enhanced Security',
        '25GB Storage',
        'Full API Access',
        'Custom Integrations',
        'Training Sessions'
      ],
      popular: true,
      cta: 'Get Professional',
      href: '/request-quote'
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: 'month',
      description: 'For large organizations',
      color: 'from-emerald-500 to-green-500',
      features: [
        'Unlimited AI Content Creation',
        'Custom Analytics Platform',
        '24/7 Dedicated Support',
        'Enterprise Security',
        'Unlimited Storage',
        'Custom API Development',
        'White-label Solutions',
        'Dedicated Account Manager',
        'Custom Training Programs',
        'SLA Guarantees'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact'
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Content Creation', price: '$50-500', description: 'Per article or monthly package' },
        { name: 'AI Business Intelligence', price: '$200-2000', description: 'Monthly subscription' },
        { name: 'Machine Learning Models', price: '$500-5000', description: 'Custom development' },
        { name: 'AI Automation', price: '$100-1000', description: 'Per workflow/month' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Cloud Migration', price: '$1000-10000', description: 'One-time project' },
        { name: 'DevOps Automation', price: '$200-2000', description: 'Monthly service' },
        { name: 'Infrastructure Management', price: '$500-5000', description: 'Monthly service' },
        { name: 'Security Audits', price: '$500-3000', description: 'Per audit' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'Security Assessment', price: '$1000-5000', description: 'Per assessment' },
        { name: 'Penetration Testing', price: '$2000-10000', description: 'Per test' },
        { name: 'Security Monitoring', price: '$200-2000', description: 'Monthly service' },
        { name: 'Incident Response', price: '$500-5000', description: 'Per incident' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Data Analytics Platform', price: '$300-3000', description: 'Monthly subscription' },
        { name: 'Business Intelligence', price: '$500-5000', description: 'Monthly service' },
        { name: 'Data Migration', price: '$1000-10000', description: 'One-time project' },
        { name: 'Custom Dashboards', price: '$200-2000', description: 'Per dashboard' }
      ]
    }
  ];

  const industrySolutions = [
    {
      title: 'Healthcare',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      pricing: 'Custom pricing based on patient volume and requirements'
    },
    {
      title: 'Financial Services',
      icon: TrendingUp,
      color: 'from-green-500 to-blue-500',
      pricing: 'Enterprise pricing with compliance requirements'
    },
    {
      title: 'Manufacturing',
      icon: Factory,
      color: 'from-orange-500 to-red-500',
      pricing: 'Volume-based pricing for production scale'
    },
    {
      title: 'Retail & E-commerce',
      icon: ShoppingCart,
      color: 'from-purple-500 to-indigo-500',
      pricing: 'Revenue-based pricing model'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Comprehensive Pricing Guide 2025
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transparent pricing for all our AI-powered technology solutions. 
              Choose the plan that fits your business needs and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Custom Quote
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group ${
                  tier.popular ? 'lg:scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${tier.color} bg-opacity-10 border border-${tier.color.split('-')[1]}-500/20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-6">{tier.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-2">/{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={tier.href}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Pricing */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Service-Specific Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Detailed pricing for individual services and solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-white">{service.name}</h4>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Pricing */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Custom pricing models for different industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{solution.pricing}</p>
                
                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm mt-4"
                >
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator CTA */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl p-12 border border-slate-600/50">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calculator className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6">
                Need a Custom Quote?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our pricing is flexible and can be customized to meet your specific requirements. 
                Contact us for a personalized quote.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/request-quote"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Custom Quote
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
                >
                  Contact Sales Team
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 font-semibold rounded-xl transition-all duration-300"
                >
                  <Play className="w-5 h-5 inline mr-2" />
                  Schedule Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Pricing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is here to help you understand our pricing and find the best solution for your needs.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300 text-sm">
                  {contactInfo.address}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}