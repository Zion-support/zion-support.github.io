import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Atom, 
  Heart, 
  Truck, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  BarChart3,
  Cpu,
  Database,
  Lock,
  Eye,
  Target,
  Rocket,
  DollarSign,
  Clock,
  Phone,
  Mail,
  MapPin,
  Package,
  Stethoscope,
  Factory,
  Cloud,
  Network,
  Server,
  Sparkles,
  Code,
  Palette,
  Camera,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Building2,
  Warehouse,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const ComprehensivePricingGuide2025: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    {
      id: 'ai-quantum-financial',
      name: "AI Quantum Financial Analytics Platform",
      description: "Revolutionary quantum AI platform for financial modeling, risk assessment, and portfolio optimization",
      icon: DollarSign,
      color: "from-blue-500 to-purple-600",
      category: "Financial Services",
      pricing: [
        {
          name: "Starter",
          price: "$2,500",
          period: "/month",
          description: "Perfect for small financial firms and startups",
          features: [
            "Basic quantum AI analytics",
            "5 user licenses",
            "Real-time market data",
            "Basic risk management",
            "Email support"
          ]
        },
        {
          name: "Professional",
          price: "$7,500",
          period: "/month",
          description: "Ideal for growing financial institutions",
          features: [
            "Advanced quantum AI algorithms",
            "25 user licenses",
            "Full market coverage",
            "Advanced risk analytics",
            "Priority support",
            "Custom dashboards"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "$25,000",
          period: "/month",
          description: "For large financial institutions and banks",
          features: [
            "Full quantum computing suite",
            "Unlimited user licenses",
            "Custom AI models",
            "White-label solutions",
            "24/7 dedicated support",
            "On-premise deployment",
            "Custom integrations"
          ]
        }
      ],
      benefits: [
        "Reduce financial risk by up to 85%",
        "Increase portfolio returns by 15-25% annually",
        "Real-time compliance monitoring saves 40+ hours per week",
        "Predict market movements with 95%+ accuracy"
      ]
    },
    {
      id: 'ai-healthcare',
      name: "AI Healthcare Analytics Platform",
      description: "Advanced healthcare AI platform for diagnostics, patient monitoring, and population health management",
      icon: Heart,
      color: "from-green-500 to-emerald-600",
      category: "Healthcare",
      pricing: [
        {
          name: "Clinic",
          price: "$1,500",
          period: "/month",
          description: "Perfect for small clinics and medical practices",
          features: [
            "Basic AI diagnostics",
            "Up to 1,000 patients",
            "Standard analytics dashboard",
            "Email support",
            "Basic integrations"
          ]
        },
        {
          name: "Hospital",
          price: "$5,000",
          period: "/month",
          description: "Ideal for hospitals and medical centers",
          features: [
            "Advanced AI diagnostics",
            "Up to 10,000 patients",
            "Custom analytics dashboard",
            "Priority support",
            "Advanced integrations",
            "Population health analytics"
          ],
          popular: true
        },
        {
          name: "Health System",
          price: "$15,000",
          period: "/month",
          description: "For large health systems and networks",
          features: [
            "Enterprise AI platform",
            "Unlimited patients",
            "Custom AI models",
            "White-label solutions",
            "24/7 dedicated support",
            "On-premise deployment",
            "Custom integrations"
          ]
        }
      ],
      benefits: [
        "Reduce diagnostic errors by up to 75%",
        "Improve patient outcomes by 30%",
        "Reduce hospital readmissions by 40%",
        "Save 25+ hours per week for healthcare providers"
      ]
    },
    {
      id: 'ai-supply-chain',
      name: "AI Supply Chain Optimization Platform",
      description: "Intelligent supply chain management with AI-powered forecasting, route optimization, and risk management",
      icon: Truck,
      color: "from-orange-500 to-red-600",
      category: "Supply Chain",
      pricing: [
        {
          name: "Startup",
          price: "$2,000",
          period: "/month",
          description: "Perfect for small businesses and startups",
          features: [
            "Basic demand forecasting",
            "Up to 5 locations",
            "Standard analytics dashboard",
            "Email support",
            "Basic integrations"
          ]
        },
        {
          name: "Enterprise",
          price: "$8,000",
          period: "/month",
          description: "Ideal for growing companies and mid-size enterprises",
          features: [
            "Advanced AI forecasting",
            "Up to 25 locations",
            "Custom analytics dashboard",
            "Priority support",
            "Advanced integrations",
            "Risk management tools"
          ],
          popular: true
        },
        {
          name: "Global",
          price: "$25,000",
          period: "/month",
          description: "For large multinational corporations",
          features: [
            "Full AI optimization suite",
            "Unlimited locations",
            "Custom AI models",
            "White-label solutions",
            "24/7 dedicated support",
            "On-premise deployment",
            "Custom integrations"
          ]
        }
      ],
      benefits: [
        "Reduce supply chain costs by 20-35%",
        "Improve delivery accuracy by 95%",
        "Reduce inventory carrying costs by 30%",
        "Increase supplier performance by 40%"
      ]
    },
    {
      id: 'ai-content-creation',
      name: "AI Content Creation Studio Pro",
      description: "Professional AI-powered content creation platform for marketing, social media, and creative projects",
      icon: Palette,
      color: "from-purple-500 to-pink-600",
      category: "Content Creation",
      pricing: [
        {
          name: "Creator",
          price: "$500",
          period: "/month",
          description: "Perfect for individual creators and small teams",
          features: [
            "AI writing assistance",
            "Basic visual design tools",
            "Content optimization",
            "Social media templates",
            "Email support"
          ]
        },
        {
          name: "Professional",
          price: "$1,500",
          period: "/month",
          description: "Ideal for marketing agencies and growing businesses",
          features: [
            "Advanced AI writing",
            "Full visual design suite",
            "Multi-platform publishing",
            "Brand management",
            "Priority support",
            "Team collaboration"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "$5,000",
          period: "/month",
          description: "For large organizations and enterprises",
          features: [
            "Custom AI models",
            "White-label solutions",
            "Advanced analytics",
            "24/7 dedicated support",
            "Custom integrations",
            "API access"
          ]
        }
      ],
      benefits: [
        "Create content 10x faster with AI assistance",
        "Improve content quality and engagement",
        "Maintain consistent brand voice",
        "Scale content production efficiently"
      ]
    },
    {
      id: 'quantum-ai-trading',
      name: "Quantum AI Trading Platform",
      description: "Next-generation quantum computing platform for algorithmic trading and market analysis",
      icon: Atom,
      color: "from-orange-500 to-red-600",
      category: "Trading & Finance",
      pricing: [
        {
          name: "Trader",
          price: "$5,000",
          period: "/month",
          description: "Perfect for individual traders and small funds",
          features: [
            "Basic quantum algorithms",
            "Real-time market data",
            "Risk management tools",
            "Basic analytics",
            "Email support"
          ]
        },
        {
          name: "Professional",
          price: "$15,000",
          period: "/month",
          description: "Ideal for hedge funds and trading firms",
          features: [
            "Advanced quantum algorithms",
            "Custom trading strategies",
            "Advanced risk analytics",
            "Priority support",
            "Custom dashboards",
            "API access"
          ],
          popular: true
        },
        {
          name: "Institutional",
          price: "$50,000",
          period: "/month",
          description: "For large financial institutions",
          features: [
            "Full quantum computing suite",
            "Custom AI models",
            "White-label solutions",
            "24/7 dedicated support",
            "On-premise deployment",
            "Custom integrations"
          ]
        }
      ],
      benefits: [
        "Execute trades with quantum speed and accuracy",
        "Reduce trading risks with advanced analytics",
        "Access to cutting-edge quantum algorithms",
        "Scale trading operations efficiently"
      ]
    }
  ];

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full mb-8">
              <DollarSign className="w-4 h-4 mr-2" />
              2025 Comprehensive Pricing Guide
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}Pricing for All Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive pricing for all innovative AI, IT, and micro SAAS services. 
              Choose the plan that fits your business needs and scale as you grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
              >
                <Eye className="w-5 h-5 mr-2" />
                View All Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive range of innovative services
            </p>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden"
              >
                {/* Service Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                        <p className="text-gray-300">{service.description}</p>
                        <span className="inline-block px-3 py-1 bg-white/10 text-blue-400 text-sm font-medium rounded-full mt-2">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleService(service.id)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {expandedService === service.id ? (
                        <ChevronUp className="w-6 h-6 text-white" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-white" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6"
                  >
                    {/* Benefits */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Benefits</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing Plans */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-6">Pricing Plans</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {service.pricing.map((plan, planIndex) => (
                          <div
                            key={planIndex}
                            className={`relative bg-white/5 backdrop-blur-lg border rounded-xl p-6 ${
                              plan.popular ? 'border-blue-500 bg-blue-500/10' : 'border-white/10'
                            }`}
                          >
                            {plan.popular && (
                              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                  Most Popular
                                </span>
                              </div>
                            )}

                            <div className="text-center mb-6">
                              <h5 className="text-xl font-bold text-white mb-2">{plan.name}</h5>
                              <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                              <div className="flex items-baseline justify-center">
                                <span className="text-3xl font-bold text-white">{plan.price}</span>
                                <span className="text-gray-300 ml-1">{plan.period}</span>
                              </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                              {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>

                            <Link
                              to="/contact"
                              className={`w-full inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors ${
                                plan.popular
                                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                              }`}
                            >
                              Get Started
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our sales team to discuss your specific needs and get a customized quote
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Demo
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>

            <div className="mt-8 text-gray-400">
              <p>Contact us: <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></p>
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2025;