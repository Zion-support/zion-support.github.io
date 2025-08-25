import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Star, 
  DollarSign, 
  Clock, 
  Users, 
  Shield, 
 
  Zap, 
  Brain, 
  Heart, 
  Link, 
  Cpu, 
  Scale, 
  TrendingUp, 
  Leaf, 
  Settings,
  Phone,
  Mail,
  Globe,
  MapPin,
  BarChart3,
  Target,
  Lock,
  Smartphone,
  ArrowRight
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_SERVICES_2025 } from '../data/advancedInnovativeServices2025';

const ComprehensivePricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', count: ADVANCED_INNOVATIVE_SERVICES_2025.length },
    { id: 'AI & FinTech', name: 'AI & FinTech', count: ADVANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'AI & FinTech').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: ADVANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Cybersecurity').length },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: ADVANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'AI & Healthcare').length },
    { id: 'Blockchain', name: 'Blockchain', count: ADVANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Blockchain').length },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', count: ADVANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'IoT & Edge Computing').length },
    { id: 'AI & Legal Tech', name: 'AI & Legal Tech', count: ADVANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'AI & Legal Tech').length },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: ADVANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'AI & Marketing').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: ADVANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Quantum Computing').length },
    { id: 'AI & Sustainability', name: 'AI & Sustainability', count: ADVANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'AI & Sustainability').length },
    { id: 'AI & DevOps', name: 'AI & DevOps', count: ADVANCED_INNOVATIVE_SERVICES_2025.filter(s => s.category === 'AI & DevOps').length }
  ];

  const pricingModels = [
    { id: 'all', name: 'All Models' },
    { id: 'monthly', name: 'Monthly Subscription' },
    { id: 'annual', name: 'Annual Subscription' },
    { id: 'enterprise', name: 'Enterprise Custom' }
  ];

  const filteredServices = ADVANCED_INNOVATIVE_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricingModel === 'all' || service.pricingModel === selectedPricingModel;
    return matchesCategory && matchesPricing;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & FinTech':
        return <Brain className="w-6 h-6 text-blue-600" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6 text-red-600" />;
      case 'AI & Healthcare':
        return <Heart className="w-6 h-6 text-pink-600" />;
      case 'Blockchain':
        return <Link className="w-6 h-6 text-purple-600" />;
      case 'IoT & Edge Computing':
        return <Cpu className="w-6 h-6 text-green-600" />;
      case 'AI & Legal Tech':
        return <Scale className="w-6 h-6 text-indigo-600" />;
      case 'AI & Marketing':
        return <TrendingUp className="w-6 h-6 text-orange-600" />;
      case 'Quantum Computing':
        return <Zap className="w-6 h-6 text-yellow-600" />;
      case 'AI & Sustainability':
        return <Leaf className="w-6 h-6 text-emerald-600" />;
      case 'AI & DevOps':
        return <Settings className="w-6 h-6 text-gray-600" />;
      default:
        return <Star className="w-6 h-6 text-blue-600" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & FinTech':
        return 'from-blue-500 to-blue-600';
      case 'Cybersecurity':
        return 'from-red-500 to-red-600';
      case 'AI & Healthcare':
        return 'from-pink-500 to-pink-600';
      case 'Blockchain':
        return 'from-purple-500 to-purple-600';
      case 'IoT & Edge Computing':
        return 'from-green-500 to-green-600';
      case 'AI & Legal Tech':
        return 'from-indigo-500 to-indigo-600';
      case 'AI & Marketing':
        return 'from-orange-500 to-orange-600';
      case 'Quantum Computing':
        return 'from-yellow-500 to-yellow-600';
      case 'AI & Sustainability':
        return 'from-emerald-500 to-emerald-600';
      case 'AI & DevOps':
        return 'from-gray-500 to-gray-600';
      default:
        return 'from-blue-500 to-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Pricing 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Transparent, competitive pricing for Zion Tech Group's cutting-edge micro SAAS solutions. 
              Choose the plan that fits your business needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Flexible Plans</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600">
                <Star className="w-5 h-5" />
                <span className="font-semibold">30-Day Money Back</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need Custom Pricing?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>https://ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Category Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-3">Filter by Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Pricing Model Filter */}
              <div className="lg:w-64">
                <label className="block text-sm font-medium text-gray-700 mb-3">Pricing Model</label>
                <select
                  value={selectedPricingModel}
                  onChange={(e) => setSelectedPricingModel(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-xl text-gray-600">
              {selectedCategory !== 'all' && `Showing ${categories.find(c => c.id === selectedCategory)?.name} services`}
              {selectedPricingModel !== 'all' && ` with ${pricingModels.find(p => p.id === selectedPricingModel)?.name}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} text-white p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    {getCategoryIcon(service.category)}
                    <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    {service.title}
                  </h3>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">${service.price.toLocaleString()}</span>
                    <span className="text-white/80">/month</span>
                  </div>
                </div>

                {/* Service Description */}
                <div className="p-6 border-b border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="p-6 border-b border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Business Benefits */}
                <div className="p-6 border-b border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    Business Benefits
                  </h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Details */}
                <div className="p-6 border-b border-gray-100">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium text-gray-500">ROI</div>
                      <div className="text-lg font-bold text-green-600">{service.roi}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium text-gray-500">Implementation</div>
                      <div className="text-lg font-bold text-blue-600">{service.implementationTime}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Market Price Range:</span>
                      <span className="font-semibold text-gray-900">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Uptime:</span>
                      <span className="font-semibold text-gray-900">{service.uptime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Support Level:</span>
                      <span className="font-semibold text-gray-900 capitalize">{service.supportLevel}</span>
                    </div>
                  </div>
                </div>

                {/* Technology & Capabilities */}
                <div className="p-6">
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Technology Stack:</h5>
                    <div className="flex flex-wrap gap-1">
                      {service.technology.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {service.technology.length > 4 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{service.technology.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {service.apiAccess && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        API Access
                      </span>
                    )}
                    {service.mobileApp && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center gap-1">
                        <Smartphone className="w-3 h-3" />
                        Mobile App
                      </span>
                    )}
                    {service.whiteLabel && (
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        White Label
                      </span>
                    )}
                    {service.customBranding && (
                      <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        Custom Branding
                      </span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="space-y-3">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Pricing Inquiry for ${service.title}`}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center block"
                    >
                      Get Custom Quote
                    </a>
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Demo Request for ${service.title}`}
                      className="w-full bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded-lg hover:bg-gray-200 transition-all duration-200 text-center block"
                    >
                      Request Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Enterprise Solutions & Custom Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Need a custom solution or enterprise pricing? Our team will work with you to create 
              a tailored package that meets your specific requirements and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-blue-600" />,
                title: "Custom Development",
                description: "Tailored solutions built specifically for your business needs and workflows.",
                features: ["Custom features", "Integration with existing systems", "Dedicated development team", "Flexible timeline"]
              },
              {
                icon: <Shield className="w-12 h-12 text-green-600" />,
                title: "Enterprise Security",
                description: "Advanced security features and compliance certifications for enterprise requirements.",
                features: ["SOC 2 Type II", "ISO 27001", "GDPR compliance", "Custom security protocols"]
              },
              {
                icon: <Zap className="w-12 h-12 text-purple-600" />,
                title: "Scalable Infrastructure",
                description: "Infrastructure designed to grow with your business and handle increased demand.",
                features: ["Auto-scaling", "Load balancing", "High availability", "Performance optimization"]
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200"
              >
                <div className="flex justify-center mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Calculate Your Return on Investment
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our services deliver measurable returns. See how much you could save and earn with our solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">300-600%</div>
              <div className="text-gray-600">Average ROI within 12 months</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">50-80%</div>
              <div className="text-gray-600">Cost reduction in operations</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">4-8 weeks</div>
              <div className="text-gray-600">Average implementation time</div>
            </div>
          </div>

          <a
            href="mailto:kleber@ziontechgroup.com?subject=ROI Calculation Request"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-lg"
          >
            <BarChart3 className="w-5 h-5" />
            Get Your Custom ROI Analysis
          </a>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team today to discuss your needs and get a custom quote tailored to your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Free consultation and demo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Custom pricing options</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Pricing Consultation Request"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg"
            >
              <Mail className="w-5 h-5" />
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricing2025;