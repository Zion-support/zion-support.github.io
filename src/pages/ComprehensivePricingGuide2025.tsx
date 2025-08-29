import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  Globe, 
  Clock,
  TrendingUp,
  Rocket,
  Crown,
  Sparkles,
  DollarSign,
  BarChart3,
  Network,
  Blockchain,
  Eye,
  Cpu,
  Server,
  Cloud,
  Lock,
  MessageCircle,
  Target,
  PenTool,
  ShoppingCart,
  Heart,
  Building,
  Car,
  Factory,
  Leaf,
  Gamepad2,
  GraduationCap,
  Briefcase,
  Video,
  ShoppingBag,
  Activity,
  Monitor,
  Smartphone,
  Database,
  Wifi,
  Watch,
  Home,
  Phone,
  MapPin
} from 'lucide-react';

export default function ComprehensivePricingGuide2025() {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning Services',
      icon: Brain,
      color: 'from-blue-500 to-indigo-500',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Advanced analytics & ML insights for business decision making',
          pricing: [
            { name: 'Starter', price: '$299', period: '/month', features: ['Up to 10GB data processing', 'Basic ML models', 'Standard dashboards', 'Email support'] },
            { name: 'Professional', price: '$799', period: '/month', features: ['Up to 100GB data processing', 'Advanced ML models', 'Custom dashboards', 'Priority support', 'API access'] },
            { name: 'Enterprise', price: '$1,999', period: '/month', features: ['Unlimited data processing', 'Custom ML model training', 'White-label solutions', 'Dedicated support', 'Custom integrations'] }
          ],
          icon: '📊',
          color: 'from-blue-500 to-indigo-500'
        },
        {
          name: 'AI Blockchain Integration',
          description: 'AI-powered blockchain solutions for DeFi, NFTs, and enterprise applications',
          pricing: [
            { name: 'Starter', price: '$299', period: '/month', features: ['Up to 1,000 transactions/month', 'Basic AI optimization', 'Smart contract templates', 'Email support'] },
            { name: 'Professional', price: '$799', period: '/month', features: ['Up to 10,000 transactions/month', 'Advanced AI optimization', 'Custom smart contracts', 'Priority support', 'Cross-chain integration'] },
            { name: 'Enterprise', price: '$1,999', period: '/month', features: ['Unlimited transactions', 'Custom AI model training', 'White-label solutions', 'Dedicated support', 'Multi-chain deployment'] }
          ],
          icon: '🔗',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'AI Edge Computing Platform',
          description: 'Edge AI for IoT, autonomous systems, and real-time processing',
          pricing: [
            { name: 'Starter', price: '$199', period: '/month', features: ['Up to 100 edge devices', 'Basic AI models', 'Edge analytics dashboard', 'Email support'] },
            { name: 'Professional', price: '$599', period: '/month', features: ['Up to 1,000 edge devices', 'Advanced AI optimization', 'Real-time monitoring', 'Priority support', 'Custom applications'] },
            { name: 'Enterprise', price: '$1,499', period: '/month', features: ['Unlimited edge devices', 'Custom AI training', 'White-label solutions', 'Dedicated support', 'Multi-region deployment'] }
          ],
          icon: '🌐',
          color: 'from-green-500 to-blue-500'
        },
        {
          name: 'AI Metaverse Development',
          description: 'AI-powered virtual world creation and immersive experiences',
          pricing: [
            { name: 'Creator', price: '$399', period: '/month', features: ['Up to 100 concurrent users', 'Basic AI world generation', 'Avatar customization', 'Email support'] },
            { name: 'Professional', price: '$999', period: '/month', features: ['Up to 1,000 concurrent users', 'Advanced AI generation', 'Custom avatars', 'Priority support', 'AI-powered NPCs'] },
            { name: 'Enterprise', price: '$2,499', period: '/month', features: ['Unlimited users', 'Custom AI training', 'White-label solutions', 'Dedicated support', 'Multi-platform deployment'] }
          ],
          icon: '🌍',
          color: 'from-purple-500 to-pink-500'
        }
      ]
    },
    {
      title: 'Cloud & Infrastructure Services',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      services: [
        {
          name: 'Cloud DevOps',
          description: 'Infrastructure automation, scaling, and deployment optimization',
          pricing: [
            { name: 'Starter', price: '$199', period: '/month', features: ['Up to 5 environments', 'Basic CI/CD pipelines', 'Monitoring & alerts', 'Email support'] },
            { name: 'Professional', price: '$599', period: '/month', features: ['Up to 20 environments', 'Advanced CI/CD', 'Performance optimization', 'Priority support', 'Custom integrations'] },
            { name: 'Enterprise', price: '$1,499', period: '/month', features: ['Unlimited environments', 'Custom automation', 'White-label solutions', 'Dedicated support', 'Multi-cloud deployment'] }
          ],
          icon: '☁️',
          color: 'from-cyan-500 to-blue-500'
        },
        {
          name: 'IT Infrastructure',
          description: 'Enterprise infrastructure solutions and management',
          pricing: [
            { name: 'Starter', price: '$299', period: '/month', features: ['Basic infrastructure setup', 'Monitoring & maintenance', 'Security features', 'Email support'] },
            { name: 'Professional', price: '$799', period: '/month', features: ['Advanced infrastructure', 'Performance optimization', 'Custom configurations', 'Priority support', '24/7 monitoring'] },
            { name: 'Enterprise', price: '$1,999', period: '/month', features: ['Custom infrastructure', 'White-label solutions', 'Dedicated support', 'Advanced security', 'Compliance features'] }
          ],
          icon: '🖥️',
          color: 'from-gray-500 to-slate-500'
        }
      ]
    },
    {
      title: 'Cybersecurity & Privacy Services',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        {
          name: 'AI Cybersecurity Platform',
          description: 'Advanced AI-powered security and threat detection',
          pricing: [
            { name: 'Starter', price: '$199', period: '/month', features: ['Basic threat detection', 'Security monitoring', 'Incident response', 'Email support'] },
            { name: 'Professional', price: '$599', period: '/month', features: ['Advanced AI detection', 'Real-time monitoring', 'Custom security rules', 'Priority support', 'Compliance reporting'] },
            { name: 'Enterprise', price: '$1,499', period: '/month', features: ['Custom AI models', 'White-label solutions', 'Dedicated support', 'Advanced compliance', 'Security consulting'] }
          ],
          icon: '🛡️',
          color: 'from-red-500 to-orange-500'
        },
        {
          name: 'Zero Trust Network Access',
          description: 'Modern security architecture with AI-powered access control',
          pricing: [
            { name: 'Starter', price: '$99', period: '/month', features: ['Up to 50 users', 'Basic access control', 'Security policies', 'Email support'] },
            { name: 'Professional', price: '$299', period: '/month', features: ['Up to 500 users', 'Advanced policies', 'Custom integrations', 'Priority support', 'Analytics dashboard'] },
            { name: 'Enterprise', price: '$799', period: '/month', features: ['Unlimited users', 'Custom policies', 'White-label solutions', 'Dedicated support', 'Advanced compliance'] }
          ],
          icon: '🔐',
          color: 'from-red-500 to-pink-500'
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'Micro CRM',
          description: 'Customer relationship management for small businesses',
          pricing: [
            { name: 'Starter', price: '$49', period: '/month', features: ['Up to 1,000 contacts', 'Basic CRM features', 'Email integration', 'Email support'] },
            { name: 'Professional', price: '$149', period: '/month', features: ['Up to 10,000 contacts', 'Advanced features', 'Custom integrations', 'Priority support', 'Analytics dashboard'] },
            { name: 'Enterprise', price: '$399', period: '/month', features: ['Unlimited contacts', 'Custom features', 'White-label solutions', 'Dedicated support', 'Advanced reporting'] }
          ],
          icon: '👥',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          name: 'Website Analytics',
          description: 'Performance tracking and insights for websites',
          pricing: [
            { name: 'Starter', price: '$29', period: '/month', features: ['Up to 10,000 pageviews', 'Basic analytics', 'Standard reports', 'Email support'] },
            { name: 'Professional', price: '$99', period: '/month', features: ['Up to 100,000 pageviews', 'Advanced analytics', 'Custom reports', 'Priority support', 'API access'] },
            { name: 'Enterprise', price: '$299', period: '/month', features: ['Unlimited pageviews', 'Custom analytics', 'White-label solutions', 'Dedicated support', 'Advanced insights'] }
          ],
          icon: '📈',
          color: 'from-blue-500 to-indigo-500'
        }
      ]
    }
  ];

  const enterpriseFeatures = [
    'Custom AI model training and fine-tuning',
    'White-label solutions and branding',
    'Dedicated account manager and support',
    'SLA guarantees and uptime commitments',
    'Advanced security and compliance features',
    'Custom integrations and API access',
    'Multi-language support and localization',
    'Advanced analytics and reporting',
    'Team training and onboarding',
    'Priority feature development requests',
    'Multi-region deployment options',
    'Custom compliance frameworks'
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2025 - Zion Tech Group"
        description="Complete pricing guide for all our AI, IT, and micro SAAS services. Transparent pricing with enterprise solutions for every business size."
        canonical="/comprehensive-pricing-guide-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Comprehensive Pricing Guide 2025
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transparent pricing for our complete suite of AI-powered services, IT solutions, and micro SAAS platforms. 
                Choose the perfect plan for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Custom Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? '' : 'bg-slate-800/30'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${category.color} mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Comprehensive solutions designed to scale with your business needs.
                </p>
              </motion.div>

              <div className="space-y-16">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: serviceIndex * 0.2 }}
                    className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700"
                  >
                    <div className="text-center mb-8">
                      <div className="text-6xl mb-4">{service.icon}</div>
                      <h3 className="text-3xl font-bold text-white mb-4">{service.name}</h3>
                      <p className="text-xl text-gray-300 max-w-2xl mx-auto">{service.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {service.pricing.map((plan, planIndex) => (
                        <motion.div
                          key={planIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: planIndex * 0.1 }}
                          className={`relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 border-2 ${
                            plan.name === 'Professional' 
                              ? 'border-blue-500 shadow-2xl shadow-blue-500/25' 
                              : 'border-slate-600'
                          }`}
                        >
                          {plan.name === 'Professional' && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                Most Popular
                              </span>
                            </div>
                          )}
                          
                          <div className="text-center mb-6">
                            <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                            <div className="flex items-baseline justify-center">
                              <span className="text-3xl font-bold text-white">{plan.price}</span>
                              <span className="text-gray-400 ml-1">{plan.period}</span>
                            </div>
                          </div>

                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center">
                                <Check className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                              plan.name === 'Professional'
                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                                : 'bg-slate-600 text-white hover:bg-slate-500'
                            }`}
                          >
                            Get Started
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Enterprise Features */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Enterprise Features & Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Unlock the full potential of our platform with enterprise-grade features and support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <Crown className="w-6 h-6 text-yellow-400 mr-3" />
                    <span className="text-white font-semibold">{feature}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team for custom pricing and enterprise solutions tailored to your specific needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">{contactInfo.phone}</p>
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 mb-8">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Custom Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}