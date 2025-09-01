import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Globe, 
  Brain, 
  Shield, 
  Cpu, 
  Network, 
  Zap, 
  ArrowRight,
  Play,
  Award,
  Clock,
  DollarSign,
  Target,
  Rocket,
  ShoppingCart,
  Heart,
  Factory,
  GraduationCap,
  Building2,
  Car,
  Leaf,
  Palette,
  Briefcase,
  Lightbulb,
  Wrench,
  ChevronRight,
  ExternalLink,
  Calendar,
  Users2,
  Globe2,
  ShieldCheck,
  Zap2,
  Database2,
  Network2,
  Code2,
  Rocket2,
  Brain2,
  Cloud2,
  BarChart3
} from 'lucide-react';

const ComprehensiveMarketingPage2026: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe, count: 25 },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, count: 4 },
    { id: 'finance', name: 'Financial Services', icon: DollarSign, count: 3 },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory, count: 3 },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart, count: 2 },
    { id: 'legal', name: 'Legal Services', icon: Shield, count: 2 },
    { id: 'technology', name: 'Technology', icon: Brain, count: 6 },
    { id: 'education', name: 'Education', icon: GraduationCap, count: 2 },
    { id: 'real-estate', name: 'Real Estate', icon: Building2, count: 1 },
    { id: 'marketing', name: 'Marketing', icon: Target, count: 2 },
    { id: 'transportation', name: 'Transportation', icon: Car, count: 2 },
    { id: 'energy', name: 'Energy & Utilities', icon: Lightbulb, count: 2 },
    { id: 'agriculture', name: 'Agriculture', icon: Leaf, count: 1 }
  ];

  const services = [
    // AI Services
    {
      id: 'ai-legal-tech-platform',
      title: 'AI Legal Tech Platform',
      description: 'Revolutionary AI-powered legal document analysis and contract review platform. Reduce legal review time by 85% and improve accuracy by 70%.',
      category: 'AI & Legal Tech',
      price: 3499,
      marketPrice: '$3,499 - $9,999/month',
      roi: '280-450%',
      features: ['AI-powered contract analysis', 'Legal document classification', 'Risk assessment automation', 'Compliance monitoring'],
      benefits: ['Reduce legal review time by 85%', 'Improve accuracy by 70%', 'Lower legal costs by 60%'],
      industries: ['legal', 'finance', 'technology'],
      innovationLevel: 'Advanced',
      estimatedDelivery: '6-8 weeks',
      contactInfo: { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com' }
    },
    {
      id: 'ai-content-creation-platform',
      title: 'AI Content Creation Platform',
      description: 'Generate high-quality text, images, videos, and multimedia content 24/7. Reduce content creation time by 80% and improve quality by 60%.',
      category: 'AI & Content Creation',
      price: 1899,
      marketPrice: '$1,899 - $5,999/month',
      roi: '200-350%',
      features: ['AI text generation', 'Image generation and editing', 'Video creation and editing', 'Content optimization'],
      benefits: ['Reduce content creation time by 80%', 'Improve content quality by 60%', '24/7 content generation'],
      industries: ['retail', 'technology', 'finance'],
      innovationLevel: 'Advanced',
      estimatedDelivery: '4-6 weeks',
      contactInfo: { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com' }
    },
    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics Platform',
      description: 'Predictive diagnostics and patient care optimization platform. Improve diagnostic accuracy by 75% and reduce healthcare costs by 40%.',
      category: 'AI & Healthcare',
      price: 4999,
      marketPrice: '$4,999 - $12,999/month',
      roi: '300-500%',
      features: ['Predictive diagnostics', 'Patient care optimization', 'Medical research insights', 'Clinical decision support'],
      benefits: ['Improve diagnostic accuracy by 75%', 'Reduce healthcare costs by 40%', 'Enhance patient outcomes'],
      industries: ['healthcare', 'technology'],
      innovationLevel: 'Advanced',
      estimatedDelivery: '8-12 weeks',
      contactInfo: { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com' }
    },
    // IT Services
    {
      id: 'cloud-infrastructure-devops',
      title: 'Cloud Infrastructure & DevOps Services',
      description: 'Comprehensive cloud infrastructure management and DevOps automation. Reduce infrastructure costs by 40% and improve deployment speed by 80%.',
      category: 'Cloud & DevOps',
      price: 2999,
      marketPrice: '$2,999 - $8,999/month',
      roi: '250-400%',
      features: ['Multi-cloud infrastructure management', 'CI/CD pipeline automation', 'Container orchestration', 'Infrastructure as Code'],
      benefits: ['Reduce infrastructure costs by 40%', 'Improve deployment speed by 80%', 'Enhanced scalability'],
      industries: ['technology', 'finance', 'retail', 'manufacturing'],
      innovationLevel: 'Advanced',
      estimatedDelivery: '4-8 weeks',
      contactInfo: { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com' }
    },
    {
      id: 'advanced-cybersecurity-suite',
      title: 'Advanced Cybersecurity Suite',
      description: 'Zero-trust architecture with advanced threat detection. Reduce security incidents by 90% and achieve 99.99% threat detection rate.',
      category: 'Cybersecurity',
      price: 3999,
      marketPrice: '$3,999 - $9,999/month',
      roi: '300-500%',
      features: ['Advanced threat detection', 'Zero-trust architecture', '24/7 security monitoring', 'Incident response automation'],
      benefits: ['Reduce security incidents by 90%', '99.99% threat detection rate', 'Meet all compliance requirements'],
      industries: ['finance', 'healthcare', 'technology', 'manufacturing'],
      innovationLevel: 'Advanced',
      estimatedDelivery: '6-10 weeks',
      contactInfo: { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com' }
    },
    // Micro SAAS Services
    {
      id: 'blockchain-supply-chain',
      title: 'Blockchain Supply Chain Platform',
      description: 'Transparent supply chain management with end-to-end traceability. Improve transparency by 95% and reduce fraud by 80%.',
      category: 'Blockchain & Web3',
      price: 2499,
      marketPrice: '$2,499 - $6,999/month',
      roi: '250-400%',
      features: ['End-to-end traceability', 'Smart contract automation', 'Compliance reporting', 'Real-time monitoring'],
      benefits: ['Improve transparency by 95%', 'Reduce fraud by 80%', 'Streamline compliance'],
      industries: ['manufacturing', 'retail', 'healthcare'],
      innovationLevel: 'Advanced',
      estimatedDelivery: '8-12 weeks',
      contactInfo: { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com' }
    },
    {
      id: 'quantum-computing-services',
      title: 'Quantum Computing Services',
      description: 'Access to quantum computing resources for solving previously impossible problems. Accelerate research by 1000x.',
      category: 'Quantum Computing',
      price: 5999,
      marketPrice: '$5,999 - $15,999/month',
      roi: '400-600%',
      features: ['Quantum algorithm development', 'Quantum machine learning', 'Optimization problems', 'Research collaboration'],
      benefits: ['Solve previously impossible problems', 'Accelerate research by 1000x', 'Future-proof technology'],
      industries: ['technology', 'healthcare', 'finance'],
      innovationLevel: 'Cutting Edge',
      estimatedDelivery: '12-16 weeks',
      contactInfo: { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com' }
    }
  ];

  const filteredServices = selectedIndustry === 'all' 
    ? services 
    : services.filter(service => service.industries.includes(selectedIndustry));

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '99.9%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '50+', label: 'Enterprise Clients', icon: Users }
  ];

  const whyChooseUs = [
    {
      title: 'Proven Track Record',
      description: 'Over 500 successful projects delivered across industries with 99.9% client satisfaction rate.',
      icon: Award
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Latest AI, quantum computing, and blockchain technologies to give you competitive advantage.',
      icon: Rocket
    },
    {
      title: 'Expert Team',
      description: 'Certified professionals with deep expertise in emerging technologies and industry best practices.',
      icon: Users
    },
    {
      title: 'ROI Focused',
      description: 'Every solution designed to deliver measurable business value and rapid return on investment.',
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Transform Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Discover our comprehensive portfolio of innovative micro SAAS services, cutting-edge IT solutions, 
              and AI-powered platforms designed to drive growth, efficiency, and competitive advantage.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View All Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Selection */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Industry</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Select your industry to see tailored solutions and services designed specifically for your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <motion.button
                key={industry.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white'
                }`}
              >
                <div className="flex flex-col items-center">
                  <industry.icon className="w-8 h-8 mb-2" />
                  <div className="text-sm font-medium text-center">{industry.name}</div>
                  <div className="text-xs text-gray-500 mt-1">({industry.count})</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {selectedIndustry === 'all' ? 'Featured Services' : `${industries.find(i => i.id === selectedIndustry)?.name} Solutions`}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover our most popular and innovative solutions designed to transform your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">
                      {service.category}
                    </span>
                    <span className="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded">
                      {service.innovationLevel}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Starting Price:</span>
                    <span className="text-2xl font-bold text-cyan-400">
                      ${service.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Market Range:</span>
                    <span className="text-sm text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">ROI:</span>
                    <span className="text-sm text-green-400 font-semibold">{service.roi}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-white">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-white">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-blue-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-400">Delivery:</span>
                    <span className="text-sm text-white">{service.estimatedDelivery}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Clear, competitive pricing with no hidden fees. All our services include comprehensive support and regular updates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-xl font-bold mb-4 text-white">Starter</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$1,999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Basic Implementation
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Email Support
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Monthly Updates
                </li>
              </ul>
              <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                Choose Starter
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl p-6 border-2 border-cyan-400 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Professional</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$3,999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Full Implementation
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Priority Support
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Weekly Updates
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Custom Features
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                Choose Professional
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-xl font-bold mb-4 text-white">Enterprise</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$5,999<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Custom Development
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  24/7 Dedicated Support
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Daily Updates
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  White-label Solutions
                </li>
              </ul>
              <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                Choose Enterprise
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative solutions can drive growth and efficiency in your organization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-3" />
                <div className="text-lg font-semibold text-white">Call Us</div>
                <div className="text-gray-300">+1 302 464 0950</div>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-cyan-400 mb-3" />
                <div className="text-lg font-semibold text-white">Email Us</div>
                <div className="text-gray-300">kleber@ziontechgroup.com</div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-3" />
                <div className="text-lg font-semibold text-white">Visit Us</div>
                <div className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
              >
                Schedule a Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Request Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveMarketingPage2026;
