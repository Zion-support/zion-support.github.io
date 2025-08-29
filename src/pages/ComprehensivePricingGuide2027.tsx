import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  CheckCircle, 
  X, 
  Star, 
  TrendingUp, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Heart, 
  ShoppingCart,
  Truck,
  Package,
  Users,
  MessageCircle,
  BookOpen,
  DollarSign,
  Clock,
  BarChart3,
  Lock,
  Eye,
  Globe,
  Award,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Settings
} from 'lucide-react';

export default function ComprehensivePricingGuide2027() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  const serviceCategories = [
    {
      name: "AI & Machine Learning Solutions",
      description: "Cutting-edge artificial intelligence services for business transformation",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      services: [
        {
          name: "AI Business Intelligence",
          description: "Transform data into actionable insights with machine learning",
          monthlyPrice: 1299,
          yearlyPrice: 12990,
          features: [
            "Predictive analytics & ML models",
            "Real-time dashboards & reporting",
            "Custom algorithm development",
            "API access & integrations",
            "24/7 monitoring & support",
            "Unlimited data processing"
          ],
          benefits: ["25% revenue increase", "60% faster decisions", "95% prediction accuracy"]
        },
        {
          name: "AI Sales Copilot",
          description: "AI-powered sales automation and optimization",
          monthlyPrice: 799,
          yearlyPrice: 7990,
          features: [
            "Intelligent lead scoring",
            "Automated email campaigns",
            "Sales forecasting & analytics",
            "CRM integration",
            "Performance tracking",
            "Custom sales workflows"
          ],
          benefits: ["45% conversion increase", "3x faster deal closure", "Automated follow-ups"]
        },
        {
          name: "AI Workflow Automation",
          description: "Intelligent business process automation",
          monthlyPrice: 299,
          yearlyPrice: 2990,
          features: [
            "Visual workflow builder",
            "AI decision making",
            "24/7 automation",
            "Performance analytics",
            "Team collaboration",
            "Custom integrations"
          ],
          benefits: ["30% cost reduction", "5x faster processes", "Zero manual errors"]
        },
        {
          name: "AI Customer Success Platform",
          description: "AI-powered customer retention and expansion",
          monthlyPrice: 499,
          yearlyPrice: 4990,
          features: [
            "Predictive churn detection",
            "Personalized success plans",
            "Real-time engagement tracking",
            "Automated workflows",
            "Success scoring",
            "Expansion revenue optimization"
          ],
          benefits: ["40% churn reduction", "25% CLV increase", "3x efficiency gain"]
        },
        {
          name: "AI Data Governance Platform",
          description: "AI-powered data discovery and compliance",
          monthlyPrice: 599,
          yearlyPrice: 5990,
          features: [
            "AI data discovery",
            "Compliance automation",
            "Real-time monitoring",
            "Role-based access control",
            "Data lineage tracking",
            "Multi-framework compliance"
          ],
          benefits: ["90% compliance risk reduction", "99.9% security uptime", "70% cost reduction"]
        },
        {
          name: "AI Supply Chain Optimization",
          description: "AI-powered supply chain and logistics optimization",
          monthlyPrice: 799,
          yearlyPrice: 7990,
          features: [
            "Route optimization",
            "Demand forecasting",
            "Global supply chain visibility",
            "Cost optimization",
            "Real-time tracking",
            "Performance analytics"
          ],
          benefits: ["30% transportation savings", "40% faster delivery", "25% inventory reduction"]
        }
      ]
    },
    {
      name: "Cloud & DevOps Solutions",
      description: "Scalable cloud infrastructure and automated deployment",
      icon: Cloud,
      color: "from-blue-600 to-cyan-600",
      services: [
        {
          name: "Cloud DevOps",
          description: "End-to-end cloud infrastructure and CI/CD automation",
          monthlyPrice: 1499,
          yearlyPrice: 14990,
          features: [
            "Multi-cloud deployment",
            "Auto-scaling infrastructure",
            "CI/CD pipeline automation",
            "Monitoring & alerting",
            "Security & compliance",
            "24/7 support"
          ],
          benefits: ["99.9% uptime", "50% faster deployments", "Automated scaling"]
        },
        {
          name: "Cloud FinOps Optimizer",
          description: "AI-powered cloud cost optimization",
          monthlyPrice: 899,
          yearlyPrice: 8990,
          features: [
            "Cost analysis & optimization",
            "Resource management",
            "Budget tracking & alerts",
            "ROI optimization",
            "Cost forecasting",
            "Automated recommendations"
          ],
          benefits: ["40% cost reduction", "Real-time optimization", "Predictive cost management"]
        }
      ]
    },
    {
      name: "Digital Transformation Solutions",
      description: "End-to-end business process modernization",
      icon: Rocket,
      color: "from-green-600 to-emerald-600",
      services: [
        {
          name: "Digital Twin",
          description: "Digital replicas for simulation and optimization",
          monthlyPrice: 2499,
          yearlyPrice: 24990,
          features: [
            "3D modeling & simulation",
            "Real-time monitoring",
            "Predictive maintenance",
            "Performance optimization",
            "IoT integration",
            "Custom development"
          ],
          benefits: ["30% efficiency improvement", "Predictive maintenance", "Real-time optimization"]
        },
        {
          name: "IoT Edge Computing",
          description: "Intelligent edge computing solutions",
          monthlyPrice: 1799,
          yearlyPrice: 17990,
          features: [
            "Edge analytics",
            "Real-time processing",
            "Device management",
            "Security & encryption",
            "Cloud integration",
            "Custom protocols"
          ],
          benefits: ["10x faster processing", "Reduced latency", "Enhanced security"]
        }
      ]
    },
    {
      name: "Cybersecurity & Compliance",
      description: "Advanced security and regulatory compliance",
      icon: Shield,
      color: "from-red-600 to-orange-600",
      services: [
        {
          name: "AI Compliance Assistant",
          description: "Automated regulatory compliance management",
          monthlyPrice: 699,
          yearlyPrice: 6990,
          features: [
            "GDPR, CCPA, HIPAA compliance",
            "Automated compliance monitoring",
            "Real-time risk assessment",
            "Audit trail generation",
            "Policy management",
            "Training & awareness"
          ],
          benefits: ["90% compliance automation", "Real-time monitoring", "Reduced audit time"]
        },
        {
          name: "Zero Trust Network Architecture",
          description: "Modern security framework implementation",
          monthlyPrice: 1999,
          yearlyPrice: 19990,
          features: [
            "Identity verification",
            "Micro-segmentation",
            "Continuous monitoring",
            "Threat detection",
            "Access control",
            "Security analytics"
          ],
          benefits: ["99.9% security uptime", "Real-time threat detection", "Compliance ready"]
        }
      ]
    },
    {
      name: "Industry-Specific Solutions",
      description: "Specialized solutions for healthcare and sustainability",
      icon: Heart,
      color: "from-pink-600 to-purple-600",
      services: [
        {
          name: "Healthcare Technology",
          description: "AI-powered healthcare solutions",
          monthlyPrice: 2999,
          yearlyPrice: 29990,
          features: [
            "AI diagnostics",
            "Patient monitoring",
            "Electronic health records",
            "HIPAA compliance",
            "Telemedicine integration",
            "Custom development"
          ],
          benefits: ["95% diagnostic accuracy", "30% faster diagnosis", "Enhanced patient care"]
        },
        {
          name: "Sustainability Solutions",
          description: "Green IT and environmental impact reduction",
          monthlyPrice: 1299,
          yearlyPrice: 12990,
          features: [
            "Carbon footprint tracking",
            "Energy optimization",
            "Green procurement",
            "ESG reporting",
            "Sustainability analytics",
            "Compliance management"
          ],
          benefits: ["40% energy reduction", "ESG compliance", "Cost savings"]
        }
      ]
    },
    {
      name: "Micro SaaS Solutions",
      description: "Productized SaaS for specific business needs",
      icon: ShoppingCart,
      color: "from-yellow-600 to-orange-600",
      services: [
        {
          name: "AI Auto Email Responder",
          description: "Intelligent email automation platform",
          monthlyPrice: 199,
          yearlyPrice: 1990,
          features: [
            "Smart response generation",
            "CRM integration",
            "Sentiment analysis",
            "Performance tracking",
            "Custom templates",
            "Multi-language support"
          ],
          benefits: ["80% faster responses", "Improved satisfaction", "Automated follow-ups"]
        },
        {
          name: "Customer Feedback Surveys",
          description: "AI-powered feedback collection and analysis",
          monthlyPrice: 149,
          yearlyPrice: 1490,
          features: [
            "Multi-channel surveys",
            "AI insights & analytics",
            "Real-time reporting",
            "Integration APIs",
            "Custom branding",
            "Response optimization"
          ],
          benefits: ["3x response rates", "Actionable insights", "Improved NPS scores"]
        },
        {
          name: "LLM Content Studio",
          description: "AI-powered content generation platform",
          monthlyPrice: 399,
          yearlyPrice: 3990,
          features: [
            "AI content generation",
            "Brand voice training",
            "Multi-format support",
            "SEO optimization",
            "Content management",
            "Performance analytics"
          ],
          benefits: ["10x content production", "Consistent brand voice", "SEO optimization"]
        }
      ]
    }
  ];

  const getPrice = (monthlyPrice: number, yearlyPrice: number) => {
    return billingCycle === 'monthly' ? monthlyPrice : yearlyPrice;
  };

  const getSavings = (monthlyPrice: number, yearlyPrice: number) => {
    const monthlyTotal = monthlyPrice * 12;
    const savings = monthlyTotal - yearlyPrice;
    return Math.round((savings / monthlyTotal) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Explore our complete pricing for AI services, IT solutions, and micro SaaS platforms. Transparent pricing with flexible plans for every business size."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Pricing Guide 2027
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transparent pricing for our comprehensive portfolio of AI-powered services, 
              IT solutions, and innovative micro SaaS platforms.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                {billingCycle === 'yearly' && (
                  <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-600 text-white">
                    Save up to 20%
                  </span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="mb-20"
            >
              <div className="text-center mb-16">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{category.name}</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                    className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="flex items-baseline mb-2">
                        <span className="text-3xl font-bold text-blue-400">
                          ${getPrice(service.monthlyPrice, service.yearlyPrice).toLocaleString()}
                        </span>
                        <span className="text-gray-400 ml-1">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <div className="text-sm text-green-400 mb-4">
                          Save {getSavings(service.monthlyPrice, service.yearlyPrice)}% with yearly billing
                        </div>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Business Impact</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Get Started
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Custom solutions for large organizations with specific requirements
            </p>
            
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Custom Enterprise Packages</h3>
              <p className="text-gray-300 mb-6">
                We offer customized enterprise solutions with dedicated support, custom development, 
                white-label options, and enterprise-grade security.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Dedicated Support</h4>
                  <p className="text-gray-300 text-sm">24/7 dedicated account management and technical support</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Custom Development</h4>
                  <p className="text-gray-300 text-sm">Tailored solutions built specifically for your business needs</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
                  <p className="text-gray-300 text-sm">Advanced security features and compliance certifications</p>
                </div>
              </div>
              
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Contact Sales Team
              </button>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to discuss your specific needs and get a customized quote
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800 p-4 rounded-lg">
                <Phone className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-medium">{contactInfo.phone}</div>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <Mail className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-medium">{contactInfo.email}</div>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-medium text-sm">{contactInfo.address}</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote
              </a>
              <a 
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Visit Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
