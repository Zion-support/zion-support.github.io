import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Smartphone, 
  Cloud, 
  Database, 
  Building, 
  Users, 
  FileText, 
  Lock,
  Zap,
  Globe,
  ArrowRight,
  ExternalLink,
  Mail,
  Phone,
  TrendingUp,
  CheckCircle,
  Star,
  Award,
  Sparkles,
  Rocket,
  Target,
  Clock,
  DollarSign
} from 'lucide-react';
import { ENHANCED_INNOVATIVE_SERVICES } from '@/data/enhancedInnovativeServices';
import { ADVANCED_MICRO_SAAS_SERVICES_2025 } from '@/data/advancedMicroSaasServices2025';
import { motion } from 'framer-motion';

// Combine all services
const ALL_SERVICES = [...ENHANCED_INNOVATIVE_SERVICES, ...ADVANCED_MICRO_SAAS_SERVICES_2025];

// Service categories with descriptions
const SERVICE_CATEGORIES = {
  'AI & Machine Learning': {
    description: 'Cutting-edge AI solutions that transform business operations and drive innovation',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    services: ALL_SERVICES.filter(service => 
      service.category.includes('AI') && !service.category.includes('Quantum')
    )
  },
  'Quantum Computing': {
    description: 'Next-generation quantum solutions for complex computational challenges',
    icon: Cpu,
    color: 'from-purple-500 to-pink-500',
    services: ALL_SERVICES.filter(service => 
      service.category.includes('Quantum')
    )
  },
  'Blockchain & Security': {
    description: 'Advanced blockchain and cybersecurity solutions for the digital age',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    services: ALL_SERVICES.filter(service => 
      service.category.includes('Blockchain') || service.category.includes('Cybersecurity')
    )
  },
  'IoT & Analytics': {
    description: 'Smart IoT solutions with advanced analytics and predictive capabilities',
    icon: Smartphone,
    color: 'from-orange-500 to-red-500',
    services: ALL_SERVICES.filter(service => 
      service.category.includes('IoT') || service.category.includes('Analytics')
    )
  },
  'Cloud & Infrastructure': {
    description: 'Scalable cloud solutions and infrastructure management platforms',
    icon: Cloud,
    color: 'from-cyan-500 to-blue-500',
    services: ALL_SERVICES.filter(service => 
      service.category.includes('Cloud') || service.category.includes('Infrastructure')
    )
  },
  'Data & Governance': {
    description: 'Comprehensive data management and governance solutions',
    icon: Database,
    color: 'from-teal-500 to-green-500',
    services: ALL_SERVICES.filter(service => 
      service.category.includes('Data') || service.category.includes('Governance')
    )
  },
  'Supply Chain & Logistics': {
    description: 'Intelligent supply chain optimization and logistics management',
    icon: Building,
    color: 'from-indigo-500 to-purple-500',
    services: ALL_SERVICES.filter(service => 
      service.category.includes('Supply Chain') || service.category.includes('Logistics')
    )
  },
  'Customer Experience': {
    description: 'AI-powered customer experience and engagement solutions',
    icon: Users,
    color: 'from-pink-500 to-rose-500',
    services: ALL_SERVICES.filter(service => 
      service.category.includes('Customer Experience') || service.category.includes('Marketing')
    )
  },
  'Legal & Compliance': {
    description: 'Advanced legal technology and compliance automation solutions',
    icon: FileText,
    color: 'from-yellow-500 to-orange-500',
    services: ALL_SERVICES.filter(service => 
      service.category.includes('Legal') || service.category.includes('Compliance')
    )
  },
  'Financial Services': {
    description: 'Innovative fintech solutions for modern financial institutions',
    icon: DollarSign,
    color: 'from-emerald-500 to-teal-500',
    services: ALL_SERVICES.filter(service => 
      service.category.includes('Financial') || service.category.includes('FinTech')
    )
  }
};

export function ComprehensiveServicesOverview2025() {
  const [selectedCategory, setSelectedCategory] = useState<string>('AI & Machine Learning');

  const currentCategory = SERVICE_CATEGORIES[selectedCategory as keyof typeof SERVICE_CATEGORIES];
  const currentServices = currentCategory?.services || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive suite of cutting-edge technology solutions designed to transform businesses and drive innovation across industries.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{ALL_SERVICES.length}</div>
                <div className="text-gray-400">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{Object.keys(SERVICE_CATEGORIES).length}</div>
                <div className="text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <div className="text-gray-400">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center justify-center">
                  <Phone className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-sm">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <Globe className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-sm">ziontechgroup.com</span>
                </div>
              </div>
              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Contact Us Today
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Service Categories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive range of technology solutions designed to address the most pressing challenges in today's digital landscape.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="w-full">
          <div className="grid w-full grid-cols-2 md:grid-cols-5 lg:grid-cols-10 bg-white/10 backdrop-blur-lg border-white/20 rounded-lg p-1">
            {Object.entries(SERVICE_CATEGORIES).map(([category, info]) => (
              <button 
                key={category} 
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <info.icon className="w-4 h-4 mr-2" />
                <span className="hidden lg:inline">{category}</span>
                <span className="lg:hidden">{category.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {Object.entries(SERVICE_CATEGORIES).map(([category, info]) => (
            <div key={category} className={`mt-8 ${selectedCategory === category ? 'block' : 'hidden'}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${info.color} mb-6`}>
                    <info.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category}</h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{info.description}</p>
                  <div className="mt-4">
                    <Badge className="px-4 py-2 text-lg bg-white/10 text-white">
                      {info.services.length} Services Available
                    </Badge>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {info.services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group h-full">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color}`}>
                              <info.icon className="w-6 h-6 text-white" />
                            </div>
                            <Badge className="bg-white/20 text-white">
                              {service.supportLevel}
                            </Badge>
                          </div>
                          
                          <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                            {service.title}
                          </CardTitle>
                          
                          <CardDescription className="text-gray-300 text-sm leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="pb-4 flex-grow">
                          {/* Key Features */}
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-blue-300 mb-2">Key Features</h4>
                            <div className="space-y-1">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="flex items-center text-xs text-gray-300">
                                  <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                              {service.features.length > 3 && (
                                <div className="text-xs text-gray-400 mt-1">
                                  +{service.features.length - 3} more features
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Benefits */}
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-green-300 mb-2">Key Benefits</h4>
                            <div className="space-y-1">
                              {service.benefits.slice(0, 2).map((benefit, idx) => (
                                <div key={idx} className="flex items-center text-xs text-gray-300">
                                  <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technology Stack */}
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-cyan-300 mb-2">Technology Stack</h4>
                            <div className="flex flex-wrap gap-1">
                              {service.technologyStack.slice(0, 3).map((tech, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs bg-white/10 text-gray-300">
                                  {tech}
                                </Badge>
                              ))}
                              {service.technologyStack.length > 3 && (
                                <Badge variant="secondary" className="text-xs bg-white/10 text-gray-300">
                                  +{service.technologyStack.length - 3}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </CardContent>

                        <CardContent className="pt-0">
                          {/* Pricing */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-white">
                                {service.currency}{service.price.toLocaleString()}
                              </div>
                              <div className="text-sm text-gray-400">per {service.pricingModel}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-400">Market Price</div>
                              <div className="text-sm text-white font-semibold">{service.marketPrice}</div>
                            </div>
                          </div>

                          {/* Delivery & SLA */}
                          <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              Delivery: {service.estimatedDelivery}
                            </div>
                            <div className="flex items-center">
                              <Shield className="w-3 h-3 mr-1" />
                              SLA: {service.sla}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="grid grid-cols-2 gap-2">
                            <Button 
                              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                              onClick={() => window.open(service.websiteUrl, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Learn More
                            </Button>
                            <Button 
                              variant="outline" 
                              className="w-full border-white/20 text-white hover:bg-white/10"
                              onClick={() => window.open(service.demoUrl, '_blank')}
                            >
                              <Rocket className="w-4 h-4 mr-2" />
                              Demo
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Category CTA */}
                <div className="text-center mt-12">
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-white mb-4">
                      Ready to Explore {category} Solutions?
                    </h4>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                      Our team of experts is ready to help you implement cutting-edge {category.toLowerCase()} solutions that drive innovation and growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                        onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Schedule Consultation
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                        onClick={() => window.open('https://ziontechgroup.com', '_blank')}
                      >
                        <Globe className="w-5 h-5 mr-2" />
                        Visit Website
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Business with Zion Tech Group
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have already transformed their operations with our cutting-edge technology solutions. 
              From AI and quantum computing to blockchain and IoT, we have the expertise to drive your digital transformation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Proven Track Record</h3>
                <p className="text-gray-300">Successfully delivered 100+ enterprise solutions</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Industry Expertise</h3>
                <p className="text-gray-300">Deep knowledge across 10+ technology domains</p>
              </div>
              <div className="text-center">
                <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Innovation Leader</h3>
                <p className="text-gray-300">Pioneering next-generation technology solutions</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-3"
                onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Your Transformation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
                onClick={() => window.open('https://ziontechgroup.com', '_blank')}
              >
                <Target className="w-5 h-5 mr-2" />
                Explore Solutions
              </Button>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Contact us: +1 302 464 0950 | kleber@ziontechgroup.com | https://ziontechgroup.com</p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ComprehensiveServicesOverview2025;