import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Award,
  Target,
  Zap,
  Shield,
  Rocket,
  Brain,
  Lock,
  Globe,
  Users,
  Database,
  Cpu,
  Code,
  BookOpen,
  MessageCircle,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '@/data/innovativeMicroSaasServices2025';

export function PricingShowcase() {
  const [selectedPricingTier, setSelectedPricingTier] = useState('all');

  const pricingTiers = [
    { id: 'all', name: 'All Pricing', range: 'All Services', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.length },
    { id: 'budget', name: 'Budget Solutions', range: '$100 - $1,000/month', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.price <= 1000).length },
    { id: 'mid-range', name: 'Mid-Range Solutions', range: '$1,000 - $5,000/month', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.price > 1000 && s.price <= 5000).length },
    { id: 'enterprise', name: 'Enterprise Solutions', range: '$5,000+/month', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.price > 5000).length }
  ];

  const filteredServices = selectedPricingTier === 'all' 
    ? INNOVATIVE_MICRO_SAAS_SERVICES_2025 
    : INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => {
        if (selectedPricingTier === 'budget') return service.price <= 1000;
        if (selectedPricingTier === 'mid-range') return service.price > 1000 && service.price <= 5000;
        if (selectedPricingTier === 'enterprise') return service.price > 5000;
        return true;
      });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'AI': Brain,
      'FinTech': DollarSign,
      'Healthcare': Shield,
      'Quantum': Rocket,
      'Blockchain': Lock,
      'Cybersecurity': Shield,
      'IoT': Cpu,
      'Content': Code,
      'HR': Users,
      'Sustainability': Globe,
      'Digital Twin': Database,
      'Legal Tech': BookOpen,
      'EdTech': BookOpen,
      'Marketing': TrendingUp,
      'Sales': Users,
      'Customer Support': MessageCircle,
      'Project Management': Rocket,
      'Inventory': Database
    };

    for (const [key, icon] of Object.entries(iconMap)) {
      if (category.includes(key)) return icon;
    }
    return Zap;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI': 'from-zion-cyan to-zion-purple',
      'FinTech': 'from-zion-green to-zion-cyan',
      'Healthcare': 'from-zion-red to-zion-purple',
      'Quantum': 'from-zion-blue to-zion-cyan',
      'Blockchain': 'from-zion-purple to-zion-blue',
      'Cybersecurity': 'from-zion-purple to-zion-red',
      'IoT': 'from-zion-green to-zion-cyan',
      'Content': 'from-zion-orange to-zion-purple',
      'HR': 'from-zion-pink to-zion-purple',
      'Sustainability': 'from-zion-green to-zion-blue',
      'Digital Twin': 'from-zion-blue to-zion-purple',
      'Legal Tech': 'from-zion-blue to-zion-purple',
      'EdTech': 'from-zion-orange to-zion-blue',
      'Marketing': 'from-zion-pink to-zion-cyan',
      'Sales': 'from-zion-green to-zion-purple',
      'Customer Support': 'from-zion-cyan to-zion-blue',
      'Project Management': 'from-zion-purple to-zion-orange',
      'Inventory': 'from-zion-blue to-zion-green'
    };

    for (const [key, color] of Object.entries(colorMap)) {
      if (category.includes(key)) return color;
    }
    return 'from-zion-cyan to-zion-blue';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
      <div className="container-responsive">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-responsive font-bold mb-6">
            <span className="text-gradient">Competitive Pricing</span>
            <br />
            <span className="text-white">Market-Leading Solutions</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Discover our transparent, competitive pricing for cutting-edge technology solutions. 
            Our micro SAAS services offer exceptional value with enterprise-grade features at accessible price points.
          </p>
          
          {/* Market Statistics */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-zion-cyan/10 rounded-xl border border-zion-cyan/20">
              <div className="text-2xl font-bold text-zion-cyan mb-2">
                ${Math.min(...INNOVATIVE_MICRO_SAAS_SERVICES_2025.map(s => s.price)).toLocaleString()}
              </div>
              <div className="text-sm text-zion-slate-light">Starting Price</div>
            </div>
            <div className="text-center p-4 bg-zion-purple/10 rounded-xl border border-zion-purple/20">
              <div className="text-2xl font-bold text-zion-purple mb-2">
                ${Math.max(...INNOVATIVE_MICRO_SAAS_SERVICES_2025.map(s => s.price)).toLocaleString()}
              </div>
              <div className="text-sm text-zion-slate-light">Premium Tier</div>
            </div>
            <div className="text-center p-4 bg-zion-green/10 rounded-xl border border-zion-green/20">
              <div className="text-2xl font-bold text-zion-green mb-2">
                {Math.round(INNOVATIVE_MICRO_SAAS_SERVICES_2025.reduce((acc, s) => acc + s.price, 0) / INNOVATIVE_MICRO_SAAS_SERVICES_2025.length).toLocaleString()}
              </div>
              <div className="text-sm text-zion-slate-light">Average Price</div>
            </div>
            <div className="text-center p-4 bg-zion-blue/10 rounded-xl border border-zion-blue/20">
              <div className="text-2xl font-bold text-zion-blue mb-2">
                {INNOVATIVE_MICRO_SAAS_SERVICES_2025.length}+
              </div>
              <div className="text-sm text-zion-slate-light">Total Services</div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Tiers Navigation */}
        <motion.div 
          className="flex flex-wrap gap-3 mb-12 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {pricingTiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedPricingTier(tier.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedPricingTier === tier.id
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg'
                  : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              {tier.name}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {tier.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="card-futuristic group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Price Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  ${service.price.toLocaleString()}/mo
                </div>
              </div>

              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                    <getCategoryIcon(service.category) className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-zion-cyan font-medium text-sm">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-zion-slate-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Details */}
              <div className="space-y-4 mb-6">
                {/* Innovation Level & ROI */}
                <div className="flex items-center justify-between text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    service.innovationLevel === 'Cutting-edge' 
                      ? 'bg-zion-cyan/20 text-zion-cyan' 
                      : 'bg-zion-purple/20 text-zion-purple'
                  }`}>
                    {service.innovationLevel}
                  </span>
                  <div className="flex items-center gap-1 text-zion-green">
                    <TrendingUp className="w-4 h-4" />
                    <span>ROI: {service.roi}</span>
                  </div>
                </div>

                {/* Market Price Comparison */}
                <div className="p-3 bg-zion-slate-light/10 rounded-lg border border-zion-cyan/20">
                  <div className="text-center text-sm">
                    <div className="text-zion-slate-light mb-1">Market Price Range</div>
                    <div className="text-zion-cyan font-bold">{service.marketPrice}</div>
                    <div className="text-zion-green text-xs mt-1">
                      Save up to 40% with Zion Tech Group
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan" />
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-zion-cyan" />
                    <span>{service.supportLevel}</span>
                  </div>
                </div>
                
                <Link
                  to={`/services/${service.id}`}
                  className="btn-futuristic px-4 py-2 text-sm"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Contact CTA */}
              <div className="mt-4 p-3 bg-zion-cyan/10 rounded-lg border border-zion-cyan/20">
                <div className="text-center text-sm">
                  <p className="text-zion-slate-light mb-2">Ready to get started?</p>
                  <div className="flex gap-2 justify-center">
                    <a
                      href="tel:+13024640950"
                      className="flex items-center gap-1 text-zion-cyan hover:text-white transition-colors text-xs"
                    >
                      <Phone className="w-3 h-3" />
                      Call Now
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex items-center gap-1 text-zion-cyan hover:text-white transition-colors text-xs"
                    >
                      <Mail className="w-3 h-3" />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Benefits */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center p-6 bg-zion-cyan/10 rounded-xl border border-zion-cyan/20">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Competitive Pricing</h3>
            <p className="text-zion-slate-light">
              Our services are priced 20-40% below market rates while maintaining enterprise-grade quality and features.
            </p>
          </div>

          <div className="text-center p-6 bg-zion-purple/10 rounded-xl border border-zion-purple/20">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Value Guarantee</h3>
            <p className="text-zion-slate-light">
              We guarantee a minimum 200% ROI on all our services, with most clients achieving 300-500% returns.
            </p>
          </div>

          <div className="text-center p-6 bg-zion-green/10 rounded-xl border border-zion-green/20">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-green to-zion-green-dark rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Scalable Solutions</h3>
            <p className="text-zion-slate-light">
              Start small and scale up as your business grows. Flexible pricing models that adapt to your needs.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center p-12 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10 rounded-2xl border border-zion-cyan/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Get Custom Pricing for Your Business
          </h3>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Contact us for personalized pricing and custom solutions tailored to your specific business requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="btn-futuristic px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Link>
            
            <a
              href="tel:+13024640950"
              className="btn-neon px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for Pricing: +1 302 464 0950
            </a>
          </div>
          
          <div className="text-zion-slate-light">
            <p className="mb-2">📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">kleber@ziontechgroup.com</a></p>
            <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}