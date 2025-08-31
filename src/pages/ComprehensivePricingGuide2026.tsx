import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Check,
  Star,
  Zap,
  Shield,
  Users,
  Globe,
  CreditCard,
  Clock,
  Headphones,
  Rocket,
  Award,
  Lock,
  Brain,
  Atom,
  Factory,
  Database,
  BarChart3,
  Workflow,
  MessageCircle,
  TrendingUp,
  Cpu,
  Cloud,
  Network,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Target,
  Eye,
  Search,
  Code,
  Microchip,
  Settings,
  Wifi,
  Activity,
  Monitor,
  Cog,
  Wrench,
  Truck,
  Package,
  Gauge,
  AlertTriangle,
  Server,
  Lock,
  BarChart,
  Users2,
  Palette,
  ExternalLink
} from 'lucide-react';

const ComprehensivePricingGuide2026 = () => {
  const serviceCategories = [
    {
      name: "AI & Automation Services",
      icon: Brain,
      color: "from-purple-500 to-cyan-500",
      services: [
        {
          name: "AI Enterprise Resource Planning",
          description: "AI-powered ERP platform with intelligent automation and real-time analytics",
          startingPrice: "$299",
          marketPrice: "$1,200",
          savings: "75%",
          features: [
            "AI-powered forecasting with 95% accuracy",
            "Intelligent process automation",
            "Real-time analytics dashboard",
            "Unified data management",
            "Enterprise security (SOC 2 Type II)",
            "Cloud-native architecture"
          ],
          link: "/services/ai-enterprise-resource-planning",
          popular: true
        },
        {
          name: "AI Autonomous Manufacturing",
          description: "Smart manufacturing platform with AI quality control and automation",
          startingPrice: "$499",
          marketPrice: "$2,500",
          savings: "80%",
          features: [
            "AI-powered production planning",
            "Autonomous quality control (99.9% accuracy)",
            "Smart process automation",
            "Real-time analytics dashboard",
            "Cybersecurity & compliance",
            "Edge computing integration"
          ],
          link: "/services/ai-autonomous-manufacturing-platform",
          popular: false
        },
        {
          name: "AI Project Management Platform",
          description: "AI-driven project management with intelligent resource allocation",
          startingPrice: "$199",
          marketPrice: "$800",
          savings: "75%",
          features: [
            "AI-powered insights and analytics",
            "Automated workflow optimization",
            "Intelligent resource allocation",
            "Real-time collaboration tools",
            "Predictive risk management",
            "Mobile app access"
          ],
          link: "/services/ai-project-management-platform",
          popular: false
        }
      ]
    },
    {
      name: "Quantum & Advanced Computing",
      icon: Atom,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "AI Quantum Computing Solutions",
          description: "Revolutionary quantum computing platform with AI integration",
          startingPrice: "$1,999",
          marketPrice: "$15,000",
          savings: "87%",
          features: [
            "Quantum AI processing (1000x faster)",
            "Quantum neural networks",
            "Hybrid quantum-classical integration",
            "Quantum database optimization",
            "Quantum cryptography",
            "Quantum internet capabilities"
          ],
          link: "/services/ai-quantum-computing-solutions",
          popular: true
        },
        {
          name: "Quantum Edge Computing Solutions",
          description: "Quantum-enhanced edge computing for distributed processing",
          startingPrice: "$899",
          marketPrice: "$3,500",
          savings: "74%",
          features: [
            "Quantum-enhanced edge processing",
            "Distributed quantum computing",
            "Real-time quantum optimization",
            "Edge AI integration",
            "Low-latency quantum networks",
            "Scalable quantum infrastructure"
          ],
          link: "/services/quantum-edge-computing-solutions",
          popular: false
        }
      ]
    },
    {
      name: "IT & Infrastructure Services",
      icon: Server,
      color: "from-green-500 to-cyan-500",
      services: [
        {
          name: "IT Infrastructure Management",
          description: "Comprehensive IT infrastructure management with AI optimization",
          startingPrice: "$399",
          marketPrice: "$1,500",
          savings: "73%",
          features: [
            "AI-powered infrastructure monitoring",
            "Automated performance optimization",
            "Predictive maintenance",
            "24/7 system monitoring",
            "Advanced security features",
            "Cloud integration"
          ],
          link: "/services/it-infrastructure-management",
          popular: false
        },
        {
          name: "Cloud DevOps Solutions",
          description: "Modern cloud DevOps with AI automation and optimization",
          startingPrice: "$299",
          marketPrice: "$1,200",
          savings: "75%",
          features: [
            "AI-powered CI/CD automation",
            "Cloud cost optimization",
            "Infrastructure as code",
            "Automated testing",
            "Performance monitoring",
            "Security compliance"
          ],
          link: "/services/cloud-devops",
          popular: false
        },
        {
          name: "Cybersecurity Platform",
          description: "Advanced cybersecurity with AI threat detection and response",
          startingPrice: "$199",
          marketPrice: "$800",
          savings: "75%",
          features: [
            "AI threat detection",
            "Real-time monitoring",
            "Automated incident response",
            "Vulnerability assessment",
            "Compliance reporting",
            "24/7 security operations"
          ],
          link: "/services/cybersecurity",
          popular: false
        }
      ]
    },
    {
      name: "Micro SaaS Solutions",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      services: [
        {
          name: "AI Customer Support Automation",
          description: "Intelligent customer support with AI chatbots and automation",
          startingPrice: "$99",
          marketPrice: "$400",
          savings: "75%",
          features: [
            "AI-powered chatbots",
            "Multi-language support",
            "Ticket automation",
            "Knowledge base management",
            "Analytics and reporting",
            "Integration capabilities"
          ],
          link: "/services/ai-customer-support-automation",
          popular: false
        },
        {
          name: "AI Marketing Automation Platform",
          description: "Comprehensive marketing automation with AI insights",
          startingPrice: "$149",
          marketPrice: "$600",
          savings: "75%",
          features: [
            "AI content optimization",
            "Email marketing automation",
            "Social media management",
            "Lead scoring and nurturing",
            "Analytics and reporting",
            "Multi-channel campaigns"
          ],
          link: "/services/ai-marketing-automation-platform",
          popular: false
        },
        {
          name: "AI HR Management Platform",
          description: "Intelligent HR management with AI recruitment and analytics",
          startingPrice: "$199",
          marketPrice: "$800",
          savings: "75%",
          features: [
            "AI-powered recruitment",
            "Employee performance analytics",
            "Automated onboarding",
            "Talent management",
            "Compliance tracking",
            "Mobile app access"
          ],
          link: "/services/ai-hr-platform",
          popular: false
        }
      ]
    }
  ];

  const pricingComparison = [
    {
      feature: "AI Integration",
      zion: "Advanced AI/ML",
      competitor: "Basic AI",
      advantage: "3x more intelligent"
    },
    {
      feature: "Security",
      zion: "Enterprise-grade",
      competitor: "Standard",
      advantage: "Bank-level security"
    },
    {
      feature: "Support",
      zion: "24/7 Expert",
      competitor: "Business hours",
      advantage: "Always available"
    },
    {
      feature: "Customization",
      zion: "Fully customizable",
      competitor: "Limited options",
      advantage: "Tailored solutions"
    },
    {
      feature: "Scalability",
      zion: "Unlimited scaling",
      competitor: "Limited scaling",
      advantage: "Grow without limits"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4" />
              2026 Comprehensive Pricing Guide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Pricing Guide 2026
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover our comprehensive suite of AI-powered services and solutions with transparent pricing. 
              Save up to 87% compared to market rates while getting enterprise-grade technology and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+1 302 464 0950"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                Call +1 302 464 0950
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Complete Service Portfolio
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI-powered services and solutions, 
              each designed to deliver exceptional value and competitive advantage.
            </p>
          </motion.div>

          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                      service.popular 
                        ? 'border-purple-500 shadow-2xl shadow-purple-500/25' 
                        : 'border-slate-700'
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{service.startingPrice}</div>
                          <div className="text-sm text-gray-400">Zion Price</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg text-gray-400 line-through">{service.marketPrice}</div>
                          <div className="text-sm text-gray-400">Market Price</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                          Save {service.savings}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={service.link}
                      className="w-full block text-center py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how our services compare to competitors and why we're the smart choice for your business.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 bg-slate-700/50 p-4 font-semibold text-white">
                <div>Feature</div>
                <div className="text-center">Zion Tech Group</div>
                <div className="text-center">Competitors</div>
                <div className="text-center">Advantage</div>
              </div>
              
              {pricingComparison.map((row, index) => (
                <div key={index} className="grid grid-cols-4 p-4 border-t border-slate-700">
                  <div className="text-gray-300 font-medium">{row.feature}</div>
                  <div className="text-center text-green-400 font-semibold">{row.zion}</div>
                  <div className="text-center text-gray-400">{row.competitor}</div>
                  <div className="text-center text-cyan-400 font-medium">{row.advantage}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your specific needs and get a customized quote. 
              Our experts are ready to help you choose the perfect solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:+1 302 464 0950"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                Call +1 302 464 0950
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                <span>Custom Pricing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+1 302 464 0950" className="text-gray-300 hover:text-purple-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">
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

export default ComprehensivePricingGuide2026;
