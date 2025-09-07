import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Rocket, 
  Shield, 
  Heart, 
  Cpu, 
  Lock, 
  ShoppingCart, 
  BookOpen, 
  Users, 
  MessageCircle, 
  DollarSign,
  ArrowRight,
  Globe,
  MessageSquare,
  Phone,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const ComprehensivePricingGuide2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState('all');
  
  const services = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  const pricingModels = [
    { id: 'all', name: 'All Models' },
    { id: 'monthly', name: 'Monthly Subscription' },
    { id: 'one-time', name: 'One-time Projects' },
    { id: 'enterprise', name: 'Enterprise Solutions' }
  ];

  const serviceCategories = [
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'Digital Transformation', name: 'Digital Transformation', icon: Rocket },
    { id: 'Quantum Technology', name: 'Quantum Technology', icon: Zap },
    { id: 'IoT & Edge', name: 'IoT & Edge', icon: Cpu },
    { id: 'Blockchain', name: 'Blockchain', icon: Lock },
    { id: 'Healthcare IoT', name: 'Healthcare IoT', icon: Heart },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'Sustainability', name: 'Sustainability', icon: Globe },
    { id: '5G Technology', name: '5G Technology', icon: Zap },
    { id: 'Content Marketing', name: 'Content Marketing', icon: BookOpen },
    { id: 'Supply Chain', name: 'Supply Chain', icon: Users },
    { id: 'Customer Experience', name: 'Customer Experience', icon: Users },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: ShoppingCart }
  ];

  const filteredServices = services.filter(service => {
    const categoryMatch = selectedCategory === 'all' || service.category === selectedCategory;
    const pricingMatch = selectedPricingModel === 'all' || service.pricingModel === selectedPricingModel;
    return categoryMatch && pricingMatch;
  });

  const pricingTiers = [
    {
      name: 'Micro SaaS Solutions',
      description: 'Productized SaaS for specific business needs',
      priceRange: '$39 - $299/month',
      setupCost: '$1,000 - $10,000',
      features: [
        'Quick setup and deployment',
        'Monthly billing cycles',
        'Standard support included',
        'Core feature set',
        'Regular updates',
        'Basic customization'
      ],
      bestFor: 'Small to medium businesses, startups, specific use cases',
      examples: ['AI Content Optimizer', 'Customer Feedback Surveys', 'Meeting Notes Copilot']
    },
    {
      name: 'AI & Analytics Projects',
      description: 'Custom AI solutions and analytics platforms',
      priceRange: '$5,000 - $60,000+',
      setupCost: 'Included in project cost',
      features: [
        'Custom AI model development',
        'Data pipeline architecture',
        'Enterprise-grade security',
        'Full source code ownership',
        'Comprehensive documentation',
        'Training and support'
      ],
      bestFor: 'Medium to large enterprises, data-driven organizations',
      examples: ['AI Business Intelligence', 'AI Sales Copilot', 'AI Compliance Copilot']
    },
    {
      name: 'IT Infrastructure & DevOps',
      description: 'Enterprise infrastructure and automation',
      priceRange: '$10,000 - $120,000+',
      setupCost: 'Included in project cost',
      features: [
        'Architecture design and planning',
        'Implementation and deployment',
        '24/7 monitoring and support',
        'Compliance and security',
        'Performance optimization',
        'Disaster recovery planning'
      ],
      bestFor: 'Large enterprises, regulated industries, high-availability needs',
      examples: ['Cloud & DevOps', 'IT Infrastructure', 'Digital Transformation']
    },
    {
      name: 'Emerging Technology',
      description: 'Quantum, blockchain, and cutting-edge solutions',
      priceRange: '$15,000 - $100,000+',
      setupCost: 'Included in project cost',
      features: [
        'Research and development',
        'Proof of concept development',
        'Expert consultation',
        'Future-proof technology',
        'Patent assistance',
        'Long-term support'
      ],
      bestFor: 'Innovation leaders, research institutions, forward-thinking enterprises',
      examples: ['Quantum Computing', 'Blockchain DeFi', 'Space Technology']
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group" 
        description="Complete pricing guide for AI, Micro SaaS, Cloud/DevOps, and emerging technology solutions. Transparent pricing for all business sizes and budgets."
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Pricing Guide 2027
            </span>
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Transparent pricing for comprehensive AI, Micro SaaS, Cloud/DevOps, and emerging technology solutions. 
            Choose the right plan for your business transformation journey.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center text-cyan-400">
              <Check className="w-5 h-5 mr-2" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center text-blue-400">
              <Check className="w-5 h-5 mr-2" />
              <span>Flexible Plans</span>
            </div>
            <div className="flex items-center text-green-400">
              <Check className="w-5 h-5 mr-2" />
              <span>Enterprise Ready</span>
            </div>
            <div className="flex items-center text-purple-400">
              <Check className="w-5 h-5 mr-2" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Pricing Tiers</h2>
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/60 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{tier.name}</h3>
                <p className="text-slate-300 text-sm mb-4">{tier.description}</p>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-1">{tier.priceRange}</div>
                  {tier.setupCost && (
                    <div className="text-sm text-slate-400">Setup: {tier.setupCost}</div>
                  )}
                </div>

                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-xs text-slate-400 mb-4">
                  <strong>Best for:</strong> {tier.bestFor}
                </div>

                <div className="text-xs text-cyan-300">
                  <strong>Examples:</strong> {tier.examples.join(', ')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-slate-800 border border-slate-600 text-white rounded-lg px-4 py-2 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {serviceCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Pricing Model</label>
              <select
                value={selectedPricingModel}
                onChange={(e) => setSelectedPricingModel(e.target.value)}
                className="bg-slate-800 border border-slate-600 text-white rounded-lg px-4 py-2 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {pricingModels.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Available Services</h2>
            <div className="text-slate-400">
              Showing {filteredServices.length} of {services.length} services
            </div>
          </div>
          
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-400/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs uppercase tracking-wide text-cyan-300/70">{service.category}</div>
                  {service.innovationLevel && (
                    <div className={`text-xs px-2 py-1 rounded ${
                      service.innovationLevel === 'Cutting-edge' ? 'bg-purple-500/20 text-purple-300' :
                      service.innovationLevel === 'Advanced' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-green-500/20 text-green-300'
                    }`}>
                      {service.innovationLevel}
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold group-hover:text-cyan-300 transition-colors mb-3">{service.title}</h3>
                <p className="text-sm text-slate-300 line-clamp-3 mb-4">{service.description}</p>
                
                {service.features && service.features.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs text-slate-400 mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-slate-800 px-2 py-1 rounded text-cyan-300">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">Price:</span>
                    <span className="text-lg font-bold text-cyan-400">{service.currency}{service.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">Model:</span>
                    <span className="text-sm text-slate-300 capitalize">{service.pricingModel}</span>
                  </div>
                  {service.marketPrice && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">Market Range:</span>
                      <span className="text-sm text-slate-300">{service.marketPrice}</span>
                    </div>
                  )}
                  {service.roi && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">ROI:</span>
                      <span className="text-sm text-green-400">{service.roi}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-xs text-slate-400">
                    Delivery: {service.estimatedDelivery}
                  </div>
                  <div className="text-xs text-slate-400">
                    Support: {service.supportLevel}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We deliver exceptional value through cutting-edge technology, expert implementation, and ongoing support.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cutting-Edge Technology</h3>
              <p className="text-slate-300">Access to the latest AI, quantum computing, and emerging technologies before they become mainstream.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Implementation</h3>
              <p className="text-slate-300">Experienced team with deep expertise in AI, cloud infrastructure, and digital transformation.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-slate-300">SOC 2, ISO 27001, and industry-leading security practices for enterprise-grade protection.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-slate-300">Round-the-clock support and monitoring to ensure your systems run smoothly.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">ROI Focused</h3>
              <p className="text-slate-300">Every solution is designed to deliver measurable business value and rapid return on investment.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Future Ready</h3>
              <p className="text-slate-300">Scalable solutions that grow with your business and adapt to emerging technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 mb-12">
              Let's discuss how our solutions can accelerate your digital transformation and drive business growth.
            </p>
            
            <div className="bg-slate-900/60 border border-cyan-400/20 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Contact Us
                  </h3>
                  <div className="space-y-3 text-slate-300">
                    <a href={`mailto:${contactInfo.email}`} className="block hover:text-cyan-300 transition-colors">
                      {contactInfo.email}
                    </a>
                    <a href={`tel:${contactInfo.phone}`} className="block hover:text-cyan-300 transition-colors">
                      {contactInfo.phone}
                    </a>
                    <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-300 transition-colors">
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Office Location
                  </h3>
                  <div className="text-slate-300">
                    <p>{contactInfo.address}</p>
                    <p>United States</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link 
                      to="/request-quote" 
                      className="block w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity text-center font-medium"
                    >
                      Request Custom Quote
                    </Link>
                    <Link 
                      to="/contact" 
                      className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors text-center font-medium"
                    >
                      Schedule Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-slate-400 space-y-2">
              <p>
                <strong>Blended rates:</strong> $110–$220/hr | <strong>Fixed scope projects:</strong> Available
              </p>
              <p>
                <strong>Payment terms:</strong> Flexible options available | <strong>Support:</strong> 24/7 enterprise support included
              </p>
              <p>
                All services include comprehensive documentation, training, and ongoing maintenance options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
