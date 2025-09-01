import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Cloud,
  Database,
  Network,
  Cpu,
  Wifi,
  Lock,
  BarChart3,
  Code,
  Server,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Users,
  Target,
  Lightbulb,
  Atom,
  Rocket,
  Heart,
  Home,
  Truck,
  Search,
  Scale,
  Leaf,
  Coins,
  Satellite,
  GraduationCap,
  Building,
  BookOpen
} from 'lucide-react';
import { comprehensivePricingGuide2025 } from '../data/comprehensive-pricing-guide-2025';

export default function ComprehensivePricingGuide2025() {
  const contactInfo = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Legal Technology': return Scale3;
      case 'Healthcare Technology': return Heart;
      case 'Financial Technology': return Coins;
      case 'Supply Chain': return Truck;
      case 'Sustainability': return Leaf;
      case 'Smart Home': return Home;
      case 'Quantum Computing': return Atom;
      case 'Space Technology': return Satellite;
      case 'Education Technology': return GraduationCap;
      case 'Real Estate Technology': return Building;
      case 'Logistics': return Truck;
      case 'Digital Marketing': return Search;
      case 'Fintech': return Coins;
      default: return Brain;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Legal Technology': return 'from-blue-500 to-indigo-600';
      case 'Healthcare Technology': return 'from-red-500 to-pink-600';
      case 'Financial Technology': return 'from-yellow-500 to-orange-600';
      case 'Supply Chain': return 'from-green-500 to-emerald-600';
      case 'Sustainability': return 'from-emerald-500 to-green-600';
      case 'Smart Home': return 'from-blue-500 to-cyan-600';
      case 'Quantum Computing': return 'from-purple-500 to-indigo-600';
      case 'Space Technology': return 'from-gray-500 to-blue-600';
      case 'Education Technology': return 'from-green-500 to-teal-600';
      case 'Real Estate Technology': return 'from-orange-500 to-red-600';
      case 'Logistics': return 'from-blue-500 to-indigo-600';
      case 'Digital Marketing': return 'from-purple-500 to-pink-600';
      case 'Fintech': return 'from-yellow-500 to-orange-600';
      default: return 'from-gray-500 to-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Comprehensive Pricing Guide 2025 | Zion Tech Group</title>
        <meta name="description" content="Complete pricing guide for all our innovative micro SAAS services. Compare features, pricing tiers, and ROI across legal, healthcare, finance, supply chain, and more." />
        <meta name="keywords" content="pricing guide, micro SAAS pricing, AI services pricing, legal technology pricing, healthcare analytics pricing, financial risk management pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-pricing-guide-2025" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Complete pricing information for all our innovative micro SAAS services. 
              Compare features, pricing tiers, and ROI to find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#pricing"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Get Custom Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Need a Custom Quote?</h3>
              <p className="text-green-100">Contact our experts for personalized pricing</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Service Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for all our innovative micro SAAS services. 
              Choose the plan that fits your business needs and budget.
            </p>
          </motion.div>

          <div className="space-y-16">
            {comprehensivePricingGuide2025.map((service, serviceIndex) => {
              const CategoryIcon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden"
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${categoryColor} p-8 text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <CategoryIcon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{service.name}</h3>
                    <p className="text-lg text-white/90 max-w-3xl">{service.description}</p>
                  </div>

                  {/* Pricing Tiers */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                      {service.pricing.map((tier, tierIndex) => (
                        <div
                          key={tier.name}
                          className={`relative bg-gray-50 rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                            tier.popular 
                              ? 'border-blue-500 bg-blue-50 shadow-lg' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {tier.popular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                Most Popular
                              </span>
                            </div>
                          )}
                          
                          <div className="text-center mb-6">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h4>
                            <div className="text-3xl font-bold text-blue-600 mb-1">{tier.price}</div>
                            <div className="text-sm text-gray-500 mb-2">per {tier.billing}</div>
                            {tier.savings && (
                              <div className="text-sm text-green-600 font-medium">{tier.savings}</div>
                            )}
                          </div>
                          
                          <ul className="space-y-3 mb-6">
                            {tier.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                            tier.popular
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                              : 'bg-gray-800 text-white hover:bg-gray-700'
                          }`}>
                            Get Started
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Service Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Features */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-green-500" />
                          Business Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-2 text-gray-700">
                              <Star className="w-4 h-4 text-yellow-500" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">{service.roi}</div>
                          <div className="text-sm text-gray-500">ROI</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">{service.trialDays}</div>
                          <div className="text-sm text-gray-500">Trial Days</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600 mb-1">{service.setupTime}</div>
                          <div className="text-sm text-gray-500">Setup Time</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600 mb-1">{service.competitors.length}</div>
                          <div className="text-sm text-gray-500">Competitors</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 text-center">
                      <a
                        href={`tel:${contactInfo.mobile}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        <Phone className="w-5 h-5" />
                        Get Custom Quote
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're not just another technology company. We're your strategic partner in digital transformation, 
              delivering innovative solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Rocket,
                title: "Innovation First",
                description: "Cutting-edge AI, quantum computing, and emerging technologies that keep you ahead of the competition."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security, compliance certifications, and robust data protection for your peace of mind."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Seasoned professionals with deep expertise in AI, cloud computing, and digital transformation."
              },
              {
                icon: Target,
                title: "Proven Results",
                description: "Track record of delivering measurable ROI and transforming businesses across industries."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how our innovative micro SAAS services can transform your business. 
              Our experts are ready to help you choose the right solutions and get you up and running quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-1">{contactInfo.mobile}</p>
                    <p className="text-sm text-gray-500">Available 24/7 for urgent inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-1">{contactInfo.email}</p>
                    <p className="text-sm text-gray-500">We'll respond within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-600 mb-1">{contactInfo.address}</p>
                    <p className="text-sm text-gray-500">Schedule an in-person meeting</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Start Consultation</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Free initial consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Custom solution design</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Implementation roadmap</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Ongoing support & optimization</span>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Schedule Free Consultation
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Send Detailed Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Business Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already leveraging our innovative micro SAAS services 
              to gain competitive advantages and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2 text-lg"
              >
                <Phone className="w-6 h-6" />
                Start Your Transformation
              </a>
              <a
                href={contactInfo.website}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center gap-2 text-lg"
              >
                <Globe className="w-6 h-6" />
                Visit Our Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}