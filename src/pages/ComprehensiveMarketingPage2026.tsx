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
  ShoppingCart
} from 'lucide-react';

const ComprehensiveMarketingPage2026: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe },
    { id: 'healthcare', name: 'Healthcare', icon: Users },
    { id: 'finance', name: 'Financial Services', icon: DollarSign },
    { id: 'manufacturing', name: 'Manufacturing', icon: Cpu },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart },
    { id: 'legal', name: 'Legal Services', icon: Shield },
    { id: 'technology', name: 'Technology', icon: Brain }
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
                Cutting-Edge Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Discover Zion Tech Group's comprehensive portfolio of AI, IT, and micro SAAS solutions designed to drive innovation, efficiency, and growth across all industries.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Solutions for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Every Industry
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services are tailored to meet the unique challenges and opportunities of your industry
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.button
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                      : 'border-white/20 bg-white/10 text-white hover:border-cyan-400/50 hover:bg-cyan-400/10'
                  }`}
                >
                  <IconComponent className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-medium">{industry.name}</div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="p-6">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                      {service.category}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-400">ROI:</span>
                      <div className="text-green-400 font-semibold">{service.roi}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Delivery:</span>
                      <div className="text-white">{service.estimatedDelivery}</div>
                    </div>
                  </div>

                  {/* Market Price */}
                  <div className="bg-white/5 rounded-lg p-3 mb-4">
                    <div className="text-sm text-gray-400 mb-1">Market Price Range</div>
                    <div className="text-white font-semibold">{service.marketPrice}</div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <a
                      href={`tel:${service.contactInfo.phone}`}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="w-full bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Get Quote
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length > 6 && (
            <div className="text-center mt-12">
              <a
                href="/comprehensive-services-showcase-2026"
                className="inline-flex items-center bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Current Industry Services */}
      {selectedIndustry !== 'all' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {industries.find(i => i.id === selectedIndustry)?.name} Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized services designed specifically for {industries.find(i => i.id === selectedIndustry)?.name.toLowerCase()} industry challenges
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">
                      {service.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-white">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-green-400 font-semibold">{service.roi}</div>
                    </div>

                    <div className="space-y-3">
                      <a
                        href={`tel:${service.contactInfo.phone}`}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="w-full bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Get Quote
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Zion Tech Group */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Zion Tech Group
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another technology company - we're your strategic partner in digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transparent Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Clear, competitive pricing with no hidden fees. Every service includes comprehensive support and ongoing maintenance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$1,899</div>
              <div className="text-gray-400 mb-6">per month</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <a
                href="tel:+13024640950"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl border border-cyan-400/50 p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$3,499</div>
              <div className="text-gray-400 mb-6">per month</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Phone & email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <a
                href="tel:+13024640950"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$5,999</div>
              <div className="text-gray-400 mb-6">per month</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  All features included
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated account manager
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom development
                </li>
              </ul>
              <a
                href="tel:+13024640950"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have already transformed their operations with our AI-powered solutions. Let's discuss how we can help you achieve your technology goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="mt-8 text-gray-400">
              <p>Available 24/7 for enterprise clients</p>
              <p className="text-sm mt-2">Free consultation and demo available</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveMarketingPage2026;