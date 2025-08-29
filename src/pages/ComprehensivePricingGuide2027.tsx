import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Heart, 
  Globe, 
  ShoppingCart, 
  MessageCircle, 
  Users, 
  BookOpen, 
  DollarSign,
  Zap,
  Truck,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Award,
  Target,
  Cpu,
  Lock,
  Package,
  Warehouse,
  Route,
  AlertTriangle,
  RefreshCw,
  Settings
} from 'lucide-react';

export default function ComprehensivePricingGuide2027() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const serviceCategories = [
    {
      id: 'ai-analytics',
      name: 'AI & Analytics Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Machine Learning & Data Science solutions for business insights',
          monthly: 799,
          yearly: 7990,
          features: [
            'Predictive Analytics',
            'Data Visualization',
            'Machine Learning Models',
            'Real-time Dashboards',
            'Custom Reports',
            'API Access',
            'Priority Support'
          ],
          popular: false,
          href: '/services/ai-business-intelligence'
        },
        {
          name: 'AI Sales Copilot',
          description: 'AI-powered sales automation and optimization',
          monthly: 599,
          yearly: 5990,
          features: [
            'Lead Scoring',
            'Sales Forecasting',
            'Automated Follow-ups',
            'CRM Integration',
            'Performance Analytics',
            'Email Support',
            'Basic Training'
          ],
          popular: false,
          href: '/services/ai-sales-copilot'
        },
        {
          name: 'AI Compliance Assistant',
          description: 'Regulatory compliance automation and monitoring',
          monthly: 699,
          yearly: 6990,
          features: [
            'Compliance Monitoring',
            'Risk Assessment',
            'Automated Reporting',
            'Regulatory Updates',
            'Audit Trails',
            'Email Support',
            'Compliance Training'
          ],
          popular: false,
          href: '/services/ai-compliance-assistant'
        },
        {
          name: 'LLM Content Studio',
          description: 'AI content generation and management platform',
          monthly: 399,
          yearly: 3990,
          features: [
            'Content Generation',
            'Brand Consistency',
            'Multi-language Support',
            'Content Templates',
            'Basic Analytics',
            'Email Support',
            'Content Guidelines'
          ],
          popular: false,
          href: '/services/llm-content-studio'
        },
        {
          name: 'AI Workflow Automation',
          description: 'Intelligent process automation and optimization',
          monthly: 299,
          yearly: 2990,
          features: [
            'Process Mapping',
            'Smart Automation',
            'Performance Analytics',
            'Basic Integrations',
            'Standard Reports',
            'Email Support',
            'Workflow Templates'
          ],
          popular: true,
          href: '/services/ai-workflow-automation'
        },
        {
          name: 'AI Customer Experience Platform',
          description: 'AI-powered customer experience management',
          monthly: 399,
          yearly: 3990,
          features: [
            'Personalization',
            'Sentiment Analysis',
            'Omnichannel Support',
            'Customer Journey Mapping',
            'Basic Analytics',
            'Email Support',
            'CX Templates'
          ],
          popular: false,
          href: '/services/ai-customer-experience-platform'
        },
        {
          name: 'AI Supply Chain Optimization',
          description: 'Intelligent supply chain management and optimization',
          monthly: 599,
          yearly: 5990,
          features: [
            'Demand Forecasting',
            'Route Optimization',
            'Risk Management',
            'Inventory Optimization',
            'Basic Analytics',
            'Email Support',
            'Supply Chain Templates'
          ],
          popular: false,
          href: '/services/ai-supply-chain-optimization'
        }
      ]
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      description: 'Scalable cloud infrastructure and automated deployment solutions',
      services: [
        {
          name: 'Cloud DevOps',
          description: 'Infrastructure & Automation solutions',
          monthly: 899,
          yearly: 8990,
          features: [
            'CI/CD Pipelines',
            'Infrastructure as Code',
            'Monitoring & Alerting',
            'Cloud Migration',
            'Performance Optimization',
            'Priority Support',
            '24/7 Monitoring'
          ],
          popular: false,
          href: '/services/cloud-devops'
        },
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Cloud cost optimization and management',
          monthly: 699,
          yearly: 6990,
          features: [
            'Cost Analysis',
            'Resource Optimization',
            'Budget Management',
            'Cost Alerts',
            'ROI Tracking',
            'Email Support',
            'Cost Reports'
          ],
          popular: false,
          href: '/services/cloud-finops-optimizer'
        },
        {
          name: 'FinOps Advisor',
          description: 'Financial operations optimization',
          monthly: 599,
          yearly: 5990,
          features: [
            'Financial Planning',
            'Cost Control',
            'ROI Analysis',
            'Budget Forecasting',
            'Performance Metrics',
            'Email Support',
            'Financial Reports'
          ],
          popular: false,
          href: '/services/finops-advisor'
        }
      ]
    },
    {
      id: 'digital-solutions',
      name: 'Digital Solutions',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      description: 'End-to-end digital transformation and modernization',
      services: [
        {
          name: 'Digital Twin',
          description: 'Simulation & Monitoring solutions',
          monthly: 1299,
          yearly: 12990,
          features: [
            'Real-time Monitoring',
            'Predictive Maintenance',
            '3D Visualization',
            'IoT Integration',
            'Advanced Analytics',
            'Priority Support',
            'Custom Dashboards'
          ],
          popular: false,
          href: '/services/digital-twin'
        },
        {
          name: 'IT Infrastructure',
          description: 'Enterprise infrastructure solutions',
          monthly: 999,
          yearly: 9990,
          features: [
            'Network Design',
            'Security Implementation',
            'Performance Optimization',
            'Hardware Management',
            'Backup Solutions',
            'Priority Support',
            'Infrastructure Planning'
          ],
          popular: false,
          href: '/services/it-infrastructure'
        },
        {
          name: 'Data Analytics',
          description: 'Business intelligence and analytics',
          monthly: 799,
          yearly: 7990,
          features: [
            'Data Warehousing',
            'Business Intelligence',
            'Advanced Analytics',
            'Data Visualization',
            'Custom Reports',
            'Email Support',
            'Data Strategy'
          ],
          popular: false,
          href: '/services/data-analytics'
        }
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Advanced security protocols and compliance solutions',
      services: [
        {
          name: 'AI Compliance Copilot',
          description: 'AI-Powered Security solutions',
          monthly: 899,
          yearly: 8990,
          features: [
            'Threat Detection',
            'Compliance Monitoring',
            'Incident Response',
            'Security Analytics',
            'Automated Alerts',
            'Priority Support',
            'Security Training'
          ],
          popular: false,
          href: '/services/ai-compliance-copilot'
        },
        {
          name: 'Zero Trust Architecture',
          description: 'Advanced security architecture',
          monthly: 1199,
          yearly: 11990,
          features: [
            'Identity Verification',
            'Access Control',
            'Network Segmentation',
            'Security Monitoring',
            'Compliance Reporting',
            'Priority Support',
            'Security Assessment'
          ],
          popular: false,
          href: '/services/zero-trust-network-architecture'
        }
      ]
    },
    {
      id: 'industry-solutions',
      name: 'Industry Solutions',
      icon: Heart,
      color: 'from-pink-600 to-rose-600',
      description: 'Specialized solutions for specific industries',
      services: [
        {
          name: 'Healthcare Tech',
          description: 'AI Medicine & Diagnostics',
          monthly: 1499,
          yearly: 14990,
          features: [
            'Medical Imaging',
            'Patient Data Management',
            'Clinical Decision Support',
            'HIPAA Compliance',
            'Healthcare Analytics',
            'Priority Support',
            'Medical Training'
          ],
          popular: false,
          href: '/services/healthcare-tech'
        },
        {
          name: 'Sustainability',
          description: 'Green IT Solutions',
          monthly: 799,
          yearly: 7990,
          features: [
            'Energy Optimization',
            'Carbon Tracking',
            'Green Computing',
            'Sustainability Reporting',
            'Environmental Analytics',
            'Email Support',
            'Green Certifications'
          ],
          popular: false,
          href: '/services/sustainability'
        }
      ]
    },
    {
      id: 'micro-saas',
      name: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      color: 'from-indigo-600 to-purple-600',
      description: 'Productized SaaS solutions for specific business needs',
      services: [
        {
          name: 'AI Auto Email Responder',
          description: 'Faster replies, CRM logging',
          monthly: 199,
          yearly: 1990,
          features: [
            'Smart Responses',
            'CRM Integration',
            'Analytics Dashboard',
            'Email Templates',
            'Basic Reporting',
            'Email Support',
            'Setup Assistance'
          ],
          popular: false,
          href: '/services/ai-auto-email-responder'
        },
        {
          name: 'Customer Feedback Surveys',
          description: 'NPS/CSAT with AI insights',
          monthly: 149,
          yearly: 1490,
          features: [
            'Survey Creation',
            'AI Analysis',
            'Actionable Insights',
            'Survey Templates',
            'Basic Analytics',
            'Email Support',
            'Survey Best Practices'
          ],
          popular: false,
          href: '/services/mobile-feedback-surveys'
        }
      ]
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? serviceCategories.flatMap(cat => cat.services)
    : serviceCategories.find(cat => cat.id === selectedCategory)?.services || [];

  const getPrice = (service: any) => {
    return billingCycle === 'monthly' ? service.monthly : service.yearly;
  };

  const getSavings = (monthly: number, yearly: number) => {
    const monthlyTotal = monthly * 12;
    const savings = monthlyTotal - yearly;
    return Math.round((savings / monthlyTotal) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Explore our complete pricing guide for AI services, IT solutions, and micro SaaS platforms. Find the perfect plan for your business needs with transparent pricing."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Complete Pricing Guide
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide 2027
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for all our AI services, IT solutions, and micro SaaS platforms. 
              Choose the perfect plan for your business with confidence.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-4 text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
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
              <span className={`ml-4 text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                {billingCycle === 'yearly' && (
                  <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-600 text-white">
                    Save up to 17%
                  </span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              All Services
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border-2 ${
                  service.popular 
                    ? 'border-blue-500 from-blue-900/20 to-blue-800/20' 
                    : 'border-slate-600'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${getPrice(service)}</span>
                    <span className="text-gray-400 ml-1">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="text-green-400 text-sm mt-1">
                      Save {getSavings(service.monthly, service.yearly)}% annually
                    </div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      service.popular
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                        : 'bg-slate-600 text-white hover:bg-slate-500'
                    }`}
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 px-6 border border-slate-500 text-gray-300 rounded-lg hover:bg-slate-700 transition-all duration-300 text-sm"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need Enterprise Solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              For large organizations with complex requirements, we offer custom enterprise solutions 
              with dedicated support, custom integrations, and SLA guarantees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Contact Enterprise Sales
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Questions About Pricing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our pricing experts are here to help you find the perfect plan for your business needs. 
                Get personalized recommendations and answers to all your questions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Get Pricing Consultation</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500">
                    <option value="">Select Service Category</option>
                    <option value="ai-analytics">AI & Analytics</option>
                    <option value="cloud-devops">Cloud & DevOps</option>
                    <option value="digital-solutions">Digital Solutions</option>
                    <option value="cybersecurity">Cybersecurity & Compliance</option>
                    <option value="industry-solutions">Industry Solutions</option>
                    <option value="micro-saas">Micro SaaS Solutions</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your business needs and budget"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Pricing Consultation
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
