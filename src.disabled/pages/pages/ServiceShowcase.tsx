import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Globe, 
  Cpu, 
  Zap, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Filter,
  Search,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function ServiceShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Zap className="w-5 h-5" /> },
    { id: 'ai', name: 'AI & ML', icon: <Brain className="w-5 h-5" /> },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'cloud', name: 'Cloud & DevOps', icon: <Cloud className="w-5 h-5" /> },
    { id: 'data', name: 'Data & Analytics', icon: <Database className="w-5 h-5" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Cpu className="w-5 h-5" /> },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: <Globe className="w-5 h-5" /> }
  ];

  const services = [
    {
      id: 1,
      title: "AI-Powered Business Process Automation Suite",
      category: "ai",
      price: "$299/month",
      marketPrice: "$500-800/month",
      description: "Revolutionary AI automation that reduces operational costs by 40-60% and increases productivity by 300%",
      features: [
        "Automated workflow optimization",
        "Intelligent document processing",
        "Predictive analytics dashboard",
        "Custom AI model training",
        "Real-time performance monitoring"
      ],
      benefits: [
        "40-60% cost reduction",
        "300% productivity increase",
        "ROI within 3 months",
        "24/7 automated operations"
      ],
      rating: 4.9,
      reviews: 127,
      popular: true
    },
    {
      id: 2,
      title: "Enterprise AI Content Generation Platform",
      category: "ai",
      price: "$199/month",
      marketPrice: "$300-600/month",
      description: "Advanced AI content creation platform that saves 80% on content creation time and improves SEO rankings",
      features: [
        "Multi-language content generation",
        "SEO optimization engine",
        "Brand voice customization",
        "Plagiarism-free content",
        "Content calendar management"
      ],
      benefits: [
        "80% time savings",
        "200% SEO improvement",
        "Consistent brand messaging",
        "Scalable content production"
      ],
      rating: 4.8,
      reviews: 89,
      popular: false
    },
    {
      id: 3,
      title: "Zero-Trust Security Architecture Implementation",
      category: "security",
      price: "$2,500",
      marketPrice: "$5,000-15,000",
      description: "Comprehensive security framework that reduces security incidents by 90% and ensures compliance",
      features: [
        "Multi-factor authentication",
        "Behavioral analytics",
        "Network segmentation",
        "Compliance reporting",
        "Threat intelligence integration"
      ],
      benefits: [
        "90% incident reduction",
        "Full compliance coverage",
        "Insider threat protection",
        "Automated security monitoring"
      ],
      rating: 4.9,
      reviews: 156,
      popular: true
    },
    {
      id: 4,
      title: "Multi-Cloud Management & Optimization Platform",
      category: "cloud",
      price: "$399/month",
      marketPrice: "$800-2000/month",
      description: "Unified cloud management platform that reduces costs by 30-40% with improved security posture",
      features: [
        "Multi-cloud orchestration",
        "Cost optimization algorithms",
        "Security compliance monitoring",
        "Automated scaling",
        "Performance analytics"
      ],
      benefits: [
        "30-40% cost reduction",
        "Unified management interface",
        "Improved security posture",
        "Automated optimization"
      ],
      rating: 4.7,
      reviews: 203,
      popular: false
    },
    {
      id: 5,
      title: "Quantum Financial Risk Assessment Platform",
      category: "quantum",
      price: "$3,500/month",
      marketPrice: "$5,000-12,000/month",
      description: "Next-generation quantum computing solution for advanced financial risk modeling and portfolio optimization",
      features: [
        "Quantum risk modeling",
        "Portfolio optimization algorithms",
        "Real-time market analysis",
        "Monte Carlo simulations",
        "Risk scenario modeling"
      ],
      benefits: [
        "85% accuracy improvement",
        "30% volatility reduction",
        "Real-time risk assessment",
        "Advanced portfolio optimization"
      ],
      rating: 4.9,
      reviews: 67,
      popular: true
    },
    {
      id: 6,
      title: "Blockchain Supply Chain Transparency Platform",
      category: "blockchain",
      price: "$1,600/month",
      marketPrice: "$3,200-6,500/month",
      description: "End-to-end supply chain traceability with product authentication and sustainability tracking",
      features: [
        "End-to-end traceability",
        "Product authentication",
        "Sustainability tracking",
        "Smart contract automation",
        "Real-time monitoring"
      ],
      benefits: [
        "100% visibility improvement",
        "90% counterfeit reduction",
        "Enhanced compliance",
        "Improved efficiency"
      ],
      rating: 4.8,
      reviews: 134,
      popular: false
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "Zion Tech Group's AI automation suite transformed our operations. We achieved 45% cost reduction in just 3 months.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "FinanceFlow",
      role: "Risk Manager",
      content: "The quantum risk assessment platform is revolutionary. Our portfolio optimization improved by 85% accuracy.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "SecureNet Solutions",
      role: "Security Director",
      content: "Their zero-trust security implementation reduced our security incidents by 92%. Outstanding service!",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <SEO 
        title="Service Showcase - Zion Tech Group" 
        description="Explore our comprehensive portfolio of cutting-edge technology services including AI, cybersecurity, cloud solutions, and quantum computing." 
        keywords="technology services, AI solutions, cybersecurity, cloud computing, quantum computing, blockchain" 
        canonical="https://ziontechgroup.com/service-showcase" 
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Revolutionary Technology Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Discover cutting-edge solutions that transform businesses worldwide. 
              From AI automation to quantum computing, we deliver the future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                View All Services
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-3 h-3 bg-white/25 rounded-full animate-pulse delay-2000"></div>
      </section>

      {/* Filter and Search */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:-translate-y-2"
                >
                  {service.popular && (
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 text-sm font-semibold">
                      ⭐ Most Popular
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({service.reviews})</span>
                      </div>
                      <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {service.category.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
                        <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                      </div>
                      <div className="text-xs text-green-600 font-semibold">
                        Save up to 70% vs market rates
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, index) => (
                          <span
                            key={index}
                            className="text-xs bg-cyan-50 text-cyan-700 px-2 py-1 rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105">
                        Get Started
                      </button>
                      <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse all services.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have transformed their businesses with our solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with our revolutionary technology solutions today. 
              Schedule a free consultation and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}