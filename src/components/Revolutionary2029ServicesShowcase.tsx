import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Cpu, 
  Database, 
  Cloud,
  Brain,
  Network,
  Leaf,
  Heart,
  DollarSign,
  Eye,
  Target,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Rocket,
  Lock,
  ChartBar,
  Cog,
  Lightbulb,
  Atom,
  Satellite,
  Car,
  Building,
  Wifi,
  Server
} from 'lucide-react';
import { revolutionary2029MicroSAASServices } from '../../data/revolutionary-2029-micro-saas-expansion';
import { revolutionary2029ITInfrastructureServices } from '../../data/revolutionary-2029-it-infrastructure-cybersecurity';
import { revolutionary2029EmergingTechServices } from '../../data/revolutionary-2029-emerging-tech-ai-services';

export function Revolutionary2029ServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('revolutionary-2029-services-showcase');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Combine all services
  const allServices = [
    ...revolutionary2029MicroSAASServices,
    ...revolutionary2029ITInfrastructureServices,
    ...revolutionary2029EmergingTechServices
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Sparkles className="h-5 w-5" />, color: 'from-zion-cyan to-zion-purple' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: <Brain className="h-5 w-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Customer Service', name: 'AI & Customer Service', icon: <Users className="h-5 w-5" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Sales', name: 'AI & Sales', icon: <TrendingUp className="h-5 w-5" />, color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Project Management', name: 'AI & Project Management', icon: <Cog className="h-5 w-5" />, color: 'from-orange-500 to-red-500' },
    { id: 'AI & Finance', name: 'AI & Finance', icon: <DollarSign className="h-5 w-5" />, color: 'from-yellow-500 to-amber-500' },
    { id: 'AI & HR', name: 'AI & HR', icon: <Users className="h-5 w-5" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & E-commerce', name: 'AI & E-commerce', icon: <ShoppingCart className="h-5 w-5" />, color: 'from-teal-500 to-cyan-500' },
    { id: 'AI & Education', name: 'AI & Education', icon: <GraduationCap className="h-5 w-5" />, color: 'from-emerald-500 to-green-500' },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', icon: <Scale className="h-5 w-5" />, color: 'from-slate-500 to-gray-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: <Heart className="h-5 w-5" />, color: 'from-red-500 to-pink-500' },
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity', icon: <Shield className="h-5 w-5" />, color: 'from-purple-500 to-indigo-500' },
    { id: 'Cloud & Infrastructure', name: 'Cloud & Infrastructure', icon: <Cloud className="h-5 w-5" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge', icon: <Zap className="h-5 w-5" />, color: 'from-green-500 to-emerald-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: <Network className="h-5 w-5" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'Network Security', name: 'Network Security', icon: <Lock className="h-5 w-5" />, color: 'from-red-500 to-orange-500' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: <Atom className="h-5 w-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'Data Center & Infrastructure', name: 'Data Center', icon: <Server className="h-5 w-5" />, color: 'from-gray-500 to-slate-500' },
    { id: '5G & Telecommunications', name: '5G & Telecom', icon: <Wifi className="h-5 w-5" />, color: 'from-cyan-500 to-blue-500' },
    { id: 'Autonomous Systems & Robotics', name: 'Autonomous Systems', icon: <Car className="h-5 w-5" />, color: 'from-blue-500 to-indigo-500' },
    { id: 'Space Technology', name: 'Space Technology', icon: <Satellite className="h-5 w-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'Biotechnology & Healthcare', name: 'Biotechnology', icon: <Dna className="h-5 w-5" />, color: 'from-green-500 to-emerald-500' },
    { id: 'Climate Technology & Sustainability', name: 'Climate Tech', icon: <Leaf className="h-5 w-5" />, color: 'from-emerald-500 to-teal-500' },
    { id: 'Metaverse & VR/AR', name: 'Metaverse & VR/AR', icon: <Eye className="h-5 w-5" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'Quantum AI & Machine Learning', name: 'Quantum AI & ML', icon: <Brain className="h-5 w-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'Digital Twin & Simulation', name: 'Digital Twin', icon: <RefreshCw className="h-5 w-5" />, color: 'from-cyan-500 to-blue-500' },
    { id: 'Neuromorphic Computing', name: 'Neuromorphic', icon: <Brain className="h-5 w-5" />, color: 'from-pink-500 to-rose-500' }
  ];

  const filteredServices = activeCategory === 'all'
    ? allServices
    : allServices.filter(service => service.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Marketing': return <Brain className="h-6 w-6" />;
      case 'AI & Customer Service': return <Users className="h-6 w-6" />;
      case 'AI & Sales': return <TrendingUp className="h-6 w-6" />;
      case 'AI & Project Management': return <Cog className="h-6 w-6" />;
      case 'AI & Finance': return <DollarSign className="h-6 w-6" />;
      case 'AI & HR': return <Users className="h-6 w-6" />;
      case 'AI & E-commerce': return <ShoppingCart className="h-6 w-6" />;
      case 'AI & Education': return <GraduationCap className="h-6 w-6" />;
      case 'AI & Legal Tech': return <Scale className="h-6 w-6" />;
      case 'AI & Healthcare': return <Heart className="h-6 w-6" />;
      case 'Cybersecurity & Quantum': return <Shield className="h-6 w-6" />;
      case 'Cloud & Infrastructure': return <Cloud className="h-6 w-6" />;
      case 'IoT & Edge Computing': return <Zap className="h-6 w-6" />;
      case 'Blockchain & Web3': return <Network className="h-6 w-6" />;
      case 'Network Security': return <Lock className="h-6 w-6" />;
      case 'Quantum Computing': return <Atom className="h-6 w-6" />;
      case 'Data Center & Infrastructure': return <Server className="h-6 w-6" />;
      case '5G & Telecommunications': return <Wifi className="h-6 w-6" />;
      case 'Autonomous Systems & Robotics': return <Car className="h-6 w-6" />;
      case 'Space Technology': return <Satellite className="h-6 w-6" />;
      case 'Biotechnology & Healthcare': return <Dna className="h-6 w-6" />;
      case 'Climate Technology & Sustainability': return <Leaf className="h-6 w-6" />;
      case 'Metaverse & VR/AR': return <Eye className="h-6 w-6" />;
      case 'Quantum AI & Machine Learning': return <Brain className="h-6 w-6" />;
      case 'Digital Twin & Simulation': return <RefreshCw className="h-6 w-6" />;
      case 'Neuromorphic Computing': return <Brain className="h-6 w-6" />;
      default: return <Sparkles className="h-6 w-6" />;
    }
  };

  return (
    <section id="revolutionary-2029-services-showcase" className="py-20 bg-gradient-to-br from-zion-slate-dark/50 via-zion-slate/30 to-zion-blue-dark/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className="h-8 w-8 text-zion-cyan" />
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Revolutionary 2029 Services
            </h2>
          </div>
          <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
            Discover our cutting-edge micro SAAS, IT infrastructure, and AI services that are transforming industries worldwide. 
            Built with real technology, competitive pricing, and proven ROI.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-zion-cyan/60">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Real Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span>Proven ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Enterprise Grade</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Information Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-6 mb-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Phone className="h-6 w-6 text-zion-cyan" />
                <span className="text-white font-semibold">+1 302 464 0950</span>
                <span className="text-zion-cyan/70 text-sm">24/7 Support</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="h-6 w-6 text-zion-cyan" />
                <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
                <span className="text-zion-cyan/70 text-sm">Expert Consultation</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="h-6 w-6 text-zion-cyan" />
                <span className="text-white font-semibold">364 E Main St STE 1008</span>
                <span className="text-zion-cyan/70 text-sm">Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} border-transparent text-white shadow-lg`
                    : 'border-zion-cyan/30 text-zion-cyan/70 hover:border-zion-cyan/50 hover:text-zion-cyan'
                }`}
              >
                {category.icon}
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-xs font-bold">
                  Popular
                </div>
              )}

              {/* Service Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-zion-cyan/70 text-sm leading-relaxed">
                  {service.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-white mb-1">
                  {service.price}
                  <span className="text-lg text-zion-cyan/70">{service.period}</span>
                </div>
                <div className="text-sm text-zion-cyan/60">
                  {service.trialDays}-day free trial • Setup in {service.setupTime}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-zion-cyan" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="text-sm text-zion-cyan/80 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-zion-cyan/60 text-center">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Market Position */}
              <div className="mb-6 p-4 bg-zion-slate-dark/30 rounded-xl border border-zion-cyan/10">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-zion-cyan" />
                  Market Position
                </h4>
                <p className="text-sm text-zion-cyan/80 leading-relaxed">
                  {service.marketPosition}
                </p>
              </div>

              {/* ROI & Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-zion-slate-dark/30 rounded-xl border border-zion-cyan/10">
                  <div className="text-lg font-bold text-zion-cyan">{service.customers.toLocaleString()}+</div>
                  <div className="text-xs text-zion-cyan/70">Customers</div>
                </div>
                <div className="text-center p-3 bg-zion-slate-dark/30 rounded-xl border border-zion-cyan/10">
                  <div className="text-lg font-bold text-zion-cyan">{service.rating}</div>
                  <div className="text-xs text-zion-cyan/70">Rating ({service.reviews.toLocaleString()})</div>
                </div>
              </div>

              {/* ROI Statement */}
              <div className="mb-6 p-4 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-xl border border-zion-cyan/20">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-zion-cyan" />
                  ROI Impact
                </h4>
                <p className="text-sm text-zion-cyan/90 leading-relaxed">
                  {service.roi}
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-4 border-t border-zion-cyan/20">
                <div className="text-center text-sm text-zion-cyan/60">
                  <p>Questions? Contact our experts</p>
                  <div className="flex items-center justify-center gap-4 mt-2">
                    <a
                      href={`tel:${service.contactInfo.mobile}`}
                      className="flex items-center gap-1 text-zion-cyan hover:text-white transition-colors duration-300"
                    >
                      <Phone className="h-3 w-3" />
                      {service.contactInfo.mobile}
                    </a>
                    <a
                      href={`mailto:${service.contactInfo.email}`}
                      className="flex items-center gap-1 text-zion-cyan hover:text-white transition-colors duration-300"
                    >
                      <Mail className="h-3 w-3" />
                      {service.contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with Revolutionary 2029 Technology?
            </h3>
            <p className="text-zion-cyan/80 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our cutting-edge AI, IT infrastructure, and micro SAAS solutions. 
              Get started with a free trial and see the difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center gap-2 bg-zion-slate-dark/50 border border-zion-cyan/30 text-zion-cyan px-8 py-4 rounded-xl font-semibold hover:bg-zion-slate-dark/70 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
            <div className="mt-6 text-sm text-zion-cyan/60">
              <p>Visit our headquarters: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:text-white transition-colors duration-300">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Missing icon components
const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

const GraduationCap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-1.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-1.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const Scale = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

const Dna = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const RefreshCw = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);