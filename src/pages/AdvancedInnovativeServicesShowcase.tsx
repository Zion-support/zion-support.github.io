import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Heart, 
  Link, 
  Cpu, 
  Scale, 
  TrendingUp, 
  Zap, 
  Leaf, 
  Settings,
  Star,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Target,
  BarChart3,
  Globe,
  Lock,
  Smartphone,
  Mail,
  MapPin
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_SERVICES_2025 } from '../data/advancedInnovativeServices2025';

const AdvancedInnovativeServicesShowcase: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

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
              Advanced Innovative Services 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Discover Zion Tech Group's cutting-edge micro SAAS solutions that are revolutionizing industries worldwide. 
              From AI-powered platforms to quantum computing solutions, we deliver innovation that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <Users className="w-5 h-5" />
                <span className="font-semibold">500+ Enterprise Clients</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600">
                <Star className="w-5 h-5" />
                <span className="font-semibold">4.9/5 Customer Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
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

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {ADVANCED_INNOVATIVE_SERVICES_2025.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Service Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getCategoryIcon(service.category)}
                      <div>
                        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        ${service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">per month</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Service Features */}
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

                {/* Service Benefits */}
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

                {/* Service Details */}
                <div className="p-6">
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

                  {/* Technology Stack */}
                  <div className="mt-4">
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

                  {/* Capabilities */}
                  <div className="mt-4 flex flex-wrap gap-2">
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
                  <div className="mt-6">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center block"
                    >
                      Get Started Today
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another technology company. We're your strategic partner in digital transformation, 
              delivering innovative solutions that drive measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="w-12 h-12 text-yellow-500" />,
                title: "Proven Track Record",
                description: "500+ successful implementations across industries with 99.9% client satisfaction rate."
              },
              {
                icon: <Zap className="w-12 h-12 text-blue-500" />,
                title: "Cutting-Edge Innovation",
                description: "First-to-market solutions in AI, quantum computing, and emerging technologies."
              },
              {
                icon: <Shield className="w-12 h-12 text-green-500" />,
                title: "Enterprise Security",
                description: "SOC 2, ISO 27001, and industry-specific compliance certifications."
              },
              {
                icon: <Users className="w-12 h-12 text-purple-500" />,
                title: "24/7 Expert Support",
                description: "Dedicated support team with average response time under 2 hours."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Calculate Your ROI
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of enterprises that have already revolutionized their operations with Zion Tech Group's innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Free consultation and demo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Custom implementation plan</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Ongoing support and optimization</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg"
            >
              <Smartphone className="w-5 h-5" />
              Call Now: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg"
            >
              <Mail className="w-5 h-5" />
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedInnovativeServicesShowcase;