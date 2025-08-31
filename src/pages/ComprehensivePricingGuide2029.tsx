import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Cpu, Rocket, Zap, ArrowRight, CheckCircle, Star, 
  Users, BarChart3, Heart, Eye, Atom, Activity, Code, Database, 
  Server, Network, Lock, Cloud, Target, TrendingUp, Briefcase, 
  Globe, Phone, Mail, MapPin, Calculator, DollarSign, CreditCard,
  ShoppingCart, Truck, Warehouse, Factory, Building2, Home, Store,
  Bank, Insurance, Law, Gavel, FileText, Calendar, Clock, Timer,
  Stopwatch, Thermometer, Gauge, Compass, Map, Search, Filter,
  SortAsc, SortDesc, ChevronDown, ChevronUp, ExternalLink,
  Download, Upload, Share, Bookmark, MessageCircle, PhoneCall,
  VideoCall, MailOpen, Send, Plus, Minus, TrendingDown
} from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  savings?: string;
  marketPrice?: string;
  roi?: string;
  setupFee?: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  services: {
    name: string;
    description: string;
    tiers: PricingTier[];
    marketComparison: {
      competitor: string;
      price: string;
      savings: string;
    }[];
  }[];
}

const ComprehensivePricingGuide2029: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai-ml');
  const [selectedService, setSelectedService] = useState(0);

  const categories: ServiceCategory[] = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Business Intelligence Elite',
          description: 'Advanced AI-powered analytics platform with real-time insights and predictive analytics',
          tiers: [
            {
              name: 'Starter',
              price: '$2,500',
              period: '/month',
              features: [
                'GPT-4 & Claude 3.5 Integration',
                'Real-time BI Dashboards',
                'Basic Predictive Analytics',
                'Up to 5 users',
                'Email support'
              ],
              marketPrice: '$5,000',
              savings: '50% savings',
              roi: '300% ROI in 6 months'
            },
            {
              name: 'Professional',
              price: '$6,000',
              period: '/month',
              features: [
                'Everything in Starter',
                'Advanced ML Model Training',
                'Multi-source Data Integration',
                'Up to 25 users',
                'Priority support',
                'Custom dashboards'
              ],
              popular: true,
              marketPrice: '$12,000',
              savings: '50% savings',
              roi: '400% ROI in 6 months'
            },
            {
              name: 'Enterprise',
              price: '$12,000',
              period: '/month',
              features: [
                'Everything in Professional',
                'Unlimited users',
                'Custom AI model development',
                '24/7 dedicated support',
                'On-premise deployment',
                'Advanced security features'
              ],
              marketPrice: '$25,000',
              savings: '52% savings',
              roi: '500% ROI in 6 months'
            }
          ],
          marketComparison: [
            {
              competitor: 'Tableau + OpenAI',
              price: '$5,000/month',
              savings: '50% savings'
            },
            {
              competitor: 'Power BI + Azure ML',
              price: '$12,000/month',
              savings: '50% savings'
            },
            {
              competitor: 'Custom Development',
              price: '$25,000/month',
              savings: '52% savings'
            }
          ]
        },
        {
          name: 'AI-Powered IT Asset Management',
          description: 'Intelligent IT asset tracking and lifecycle management using AI',
          tiers: [
            {
              name: 'Basic',
              price: '$1,200',
              period: '/month',
              features: [
                'Automated Asset Discovery',
                'Basic Reporting',
                'Up to 1,000 assets',
                'Email support'
              ],
              marketPrice: '$2,500',
              savings: '52% savings',
              roi: '250% ROI in 12 months'
            },
            {
              name: 'Professional',
              price: '$3,000',
              period: '/month',
              features: [
                'Everything in Basic',
                'Predictive Maintenance',
                'Cost Optimization',
                'Up to 10,000 assets',
                'Priority support'
              ],
              marketPrice: '$5,000',
              savings: '40% savings',
              roi: '300% ROI in 12 months'
            },
            {
              name: 'Enterprise',
              price: '$6,000',
              period: '/month',
              features: [
                'Everything in Professional',
                'Unlimited assets',
                'Advanced analytics',
                '24/7 support',
                'Custom integrations'
              ],
              marketPrice: '$10,000',
              savings: '40% savings',
              roi: '350% ROI in 12 months'
            }
          ],
          marketComparison: [
            {
              competitor: 'ServiceNow',
              price: '$2,500/month',
              savings: '52% savings'
            },
            {
              competitor: 'BMC Helix',
              price: '$5,000/month',
              savings: '40% savings'
            }
          ]
        }
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Military-grade security solutions with AI-powered threat detection',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        {
          name: 'AI Cybersecurity Elite',
          description: 'AI-powered cybersecurity platform with real-time threat detection',
          tiers: [
            {
              name: 'Essential',
              price: '$3,500',
              period: '/month',
              features: [
                'AI Threat Detection',
                'Basic Incident Response',
                'Up to 100 endpoints',
                'Email support'
              ],
              marketPrice: '$7,000',
              savings: '50% savings',
              roi: '400% ROI in 6 months'
            },
            {
              name: 'Professional',
              price: '$8,000',
              period: '/month',
              features: [
                'Everything in Essential',
                'Zero-Day Protection',
                'Automated Response',
                'Up to 500 endpoints',
                'Priority support'
              ],
              popular: true,
              marketPrice: '$18,000',
              savings: '56% savings',
              roi: '500% ROI in 6 months'
            },
            {
              name: 'Enterprise',
              price: '$18,000',
              period: '/month',
              features: [
                'Everything in Professional',
                'Unlimited endpoints',
                'Advanced forensics',
                '24/7 SOC support',
                'Custom integrations'
              ],
              marketPrice: '$35,000',
              savings: '49% savings',
              roi: '600% ROI in 6 months'
            }
          ],
          marketComparison: [
            {
              competitor: 'CrowdStrike',
              price: '$7,000/month',
              savings: '50% savings'
            },
            {
              competitor: 'SentinelOne',
              price: '$18,000/month',
              savings: '56% savings'
            }
          ]
        }
      ]
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      description: 'Scalable cloud solutions and DevOps automation',
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500',
      services: [
        {
          name: 'Cloud Migration Elite',
          description: 'End-to-end cloud migration with cost optimization',
          tiers: [
            {
              name: 'Small Business',
              price: '$15,000',
              period: 'one-time',
              features: [
                'Migration Strategy',
                'Basic Cloud Setup',
                'Up to 10 servers',
                '30 days support'
              ],
              marketPrice: '$25,000',
              savings: '40% savings',
              roi: '200% ROI in 18 months'
            },
            {
              name: 'Mid-Size',
              price: '$75,000',
              period: 'one-time',
              features: [
                'Everything in Small Business',
                'Application Modernization',
                'Up to 50 servers',
                '90 days support'
              ],
              popular: true,
              marketPrice: '$150,000',
              savings: '50% savings',
              roi: '250% ROI in 18 months'
            },
            {
              name: 'Enterprise',
              price: '$250,000',
              period: 'one-time',
              features: [
                'Everything in Mid-Size',
                'Custom Architecture',
                'Unlimited servers',
                '1 year support'
              ],
              marketPrice: '$400,000',
              savings: '37% savings',
              roi: '300% ROI in 18 months'
            }
          ],
          marketComparison: [
            {
              competitor: 'AWS Professional Services',
              price: '$25,000',
              savings: '40% savings'
            },
            {
              competitor: 'Microsoft Consulting',
              price: '$150,000',
              savings: '50% savings'
            }
          ]
        }
      ]
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS',
      description: 'Scalable software-as-a-service solutions',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'Micro-SaaS Platform Elite',
          description: 'Complete platform to launch and scale your micro-SaaS business',
          tiers: [
            {
              name: 'Starter',
              price: '$2,500',
              period: '/month',
              features: [
                'Rapid MVP Development',
                'Basic Payment Processing',
                'Up to 100 users',
                'Email support'
              ],
              marketPrice: '$5,000',
              savings: '50% savings',
              roi: '300% ROI in 12 months'
            },
            {
              name: 'Growth',
              price: '$6,000',
              period: '/month',
              features: [
                'Everything in Starter',
                'AI-Powered Automation',
                'Multi-tenant Architecture',
                'Up to 1,000 users',
                'Priority support'
              ],
              popular: true,
              marketPrice: '$12,000',
              savings: '50% savings',
              roi: '400% ROI in 12 months'
            },
            {
              name: 'Scale',
              price: '$12,000',
              period: '/month',
              features: [
                'Everything in Growth',
                'Unlimited users',
                'Custom integrations',
                '24/7 support',
                'White-label options'
              ],
              marketPrice: '$20,000',
              savings: '40% savings',
              roi: '500% ROI in 12 months'
            }
          ],
          marketComparison: [
            {
              competitor: 'Custom Development',
              price: '$5,000/month',
              savings: '50% savings'
            },
            {
              competitor: 'Enterprise Platforms',
              price: '$12,000/month',
              savings: '50% savings'
            }
          ]
        }
      ]
    }
  ];

  const currentCategory = categories.find(cat => cat.id === activeCategory);
  const currentService = currentCategory?.services[selectedService];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Pricing Guide 2029
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Transparent pricing with market comparisons, ROI calculations, and guaranteed savings on all our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Custom Quote
              </a>
              <a
                href="/comprehensive-services-2029"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setSelectedService(0);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-200 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Selection */}
      {currentCategory && (
        <section className="py-8 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {currentCategory.name}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {currentCategory.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              {currentCategory.services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedService(index)}
                  className={`px-6 py-3 rounded-lg border transition-all duration-200 ${
                    selectedService === index
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Tiers */}
      {currentService && (
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {currentService.name}
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {currentService.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {currentService.tiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    tier.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-lg">
                      <Star className="w-4 h-4 inline mr-1" />
                      Most Popular
                    </div>
                  )}

                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {tier.name}
                    </h4>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">
                          {tier.price}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {tier.period}
                        </span>
                      </div>
                      
                      {tier.marketPrice && (
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg text-gray-500 line-through">
                            Market: {tier.marketPrice}
                          </span>
                          {tier.savings && (
                            <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full">
                              {tier.savings}
                            </span>
                          )}
                        </div>
                      )}

                      {tier.roi && (
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm font-medium">{tier.roi}</span>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/contact"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Market Comparison */}
      {currentService && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Market Comparison
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how our pricing compares to leading competitors in the market
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                          Competitor
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                          Price
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                          Our Savings
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {currentService.marketComparison.map((comp, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                          <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">
                            {comp.competitor}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                            {comp.price}
                          </td>
                          <td className="px-6 py-4">
                            <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full">
                              {comp.savings}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <a
                              href="/contact"
                              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                            >
                              Get Quote
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ROI Calculator */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ROI Calculator
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Calculate your potential return on investment with our services
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Average ROI
                  </h4>
                  <p className="text-3xl font-bold text-green-600">350%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Within 12 months
                  </p>
                </div>
                <div className="text-center">
                  <TrendingDown className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Cost Reduction
                  </h4>
                  <p className="text-3xl font-bold text-red-600">45%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Average savings
                  </p>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Time to Value
                  </h4>
                  <p className="text-3xl font-bold text-purple-600">6</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Months average
                  </p>
                </div>
              </div>
              
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Calculate Your ROI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Save and Scale?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get a custom quote tailored to your business needs and start saving today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Custom Quote
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                <a href="tel:+13024640950" className="hover:text-blue-600 transition-colors">
                  +1 302 464 0950
                </a>
              </p>
            </div>
            <div>
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </p>
            </div>
            <div>
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Address
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2029;