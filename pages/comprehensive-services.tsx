import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  ArrowRight, 
  Award, 
  BarChart3, 
  Brain, 
  CheckCircle, 
  Clock, 
  Cloud, 
  Code, 
  Database, 
  Globe, 
  Network, 
  Phone, 
  Mail, 
  MapPin,
  Shield, 
  Star, 
  TrendingUp, 
  Users, 
  Zap,
  Target,
  Settings,
  FileText,
  Bot,
  Mic,
  Eye,
  Cpu,
  Link2,
  Carbon,
  Building,
  ShoppingCart,
  GraduationCap,
  Heart,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Palette,
  Lock,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  ShieldCheck,
  Workflow,
  Sparkles,
  Atom,
  Gamepad2 as Gaming,
  Coins as Finance,
  Satellite as Space,
  Activity as Health,
  MessageCircle as Communication,
  Search as SearchIcon,
  BarChart as Analytics,
  Users2 as Team,
  Settings as Configuration,
  Palette as Design
} from 'lucide-react';

export default function ComprehensiveServices() {
  const title = 'Comprehensive Services — Zion Tech Group';
  const description = 'Complete technology solutions including AI services, IT infrastructure, micro SaaS development, and innovative digital transformation services.';

  const serviceCategories = [
    {
      title: 'AI & Machine Learning Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Content Intelligence Platform',
          description: 'Advanced content creation and optimization with AI-powered insights',
          pricing: '$2,500 - $8,000/month',
          features: ['SEO optimization', 'Multi-language support', 'Brand consistency'],
          delivery: '3-5 weeks'
        }, {
          name: 'AI Customer Success Automation',
          description: 'Intelligent customer success with automated engagement and churn prediction',
          pricing: '$4,000 - $12,000/month',
          features: ['Churn prediction', 'Automated campaigns', 'Health scoring'],
          delivery: '5-7 weeks'
        }, {
          name: 'AI Financial Forecasting Engine',
          description: 'Advanced financial planning with machine learning predictions',
          pricing: '$6,000 - $20,000/month',
          features: ['Risk assessment', 'Cash flow optimization', 'Real-time dashboards'],
          delivery: '6-8 weeks'
        }, {
          name: 'AI Healthcare Diagnostic Platform',
          description: 'Medical diagnostic assistance with AI-powered image analysis',
          pricing: '$8,000 - $25,000/month',
          features: ['Image analysis', 'HIPAA compliance', 'EHR integration'],
          delivery: '8-12 weeks'
        }
      ]
    }, {
      title: 'IT Infrastructure & Security',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Zero Trust Security Architecture',
          description: 'Comprehensive zero trust security implementation and management',
          pricing: '$5,000 - $30,000/month',
          features: ['IAM systems', 'Micro-segmentation', 'Continuous monitoring'],
          delivery: '6-12 weeks'
        }, {
          name: 'Edge Computing Solutions',
          description: 'Distributed computing infrastructure for IoT and real-time applications',
          pricing: '$6,000 - $35,000/month',
          features: ['IoT integration', 'Real-time processing', 'Latency optimization'],
          delivery: '6-12 weeks'
        }, {
          name: 'Quantum Computing Integration',
          description: 'Next-generation quantum computing solutions for complex problem solving',
          pricing: '$15,000 - $100,000/month',
          features: ['Quantum algorithms', 'ML implementations', 'Security enhancements'],
          delivery: '12-24 weeks'
        }, {
          name: 'Blockchain & Web3 Infrastructure',
          description: 'Decentralized infrastructure and blockchain development services',
          pricing: '$8,000 - $50,000/month',
          features: ['Smart contracts', 'DeFi protocols', 'NFT marketplaces'],
          delivery: '8-16 weeks'
        }
      ]
    }, {
      title: 'Micro SaaS Solutions',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'Smart Inventory Management System',
          description: 'AI-driven inventory optimization with predictive analytics',
          pricing: '$3,000 - $10,000/month',
          features: ['Demand forecasting', 'Automated reordering', 'Cost optimization'],
          delivery: '4-6 weeks'
        }, {
          name: 'Blockchain Supply Chain Tracker',
          description: 'Transparent supply chain management with blockchain verification',
          pricing: '$5,000 - $15,000/month',
          features: ['End-to-end visibility', 'Product authentication', 'Compliance tracking'],
          delivery: '6-10 weeks'
        }, {
          name: 'Smart Energy Management Platform',
          description: 'AI-powered energy optimization with sustainability tracking',
          pricing: '$3,500 - $12,000/month',
          features: ['Energy monitoring', 'Carbon tracking', 'Cost savings'],
          delivery: '4-7 weeks'
        }, {
          name: 'AI-Powered E-commerce Return Manager',
          description: 'Intelligent return processing with fraud detection',
          pricing: '$1,500 - $5,000/month',
          features: ['Fraud detection', 'Automated processing', 'Analytics dashboard'],
          delivery: '3-5 weeks'
        }
      ]
    }, {
      title: 'Specialized Industry Solutions',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      services: [
        {
          name: 'Healthcare Technology Solutions',
          description: 'Comprehensive healthcare IT solutions with AI integration',
          pricing: '$10,000 - $50,000/month',
          features: ['EHR integration', 'Telemedicine platforms', 'Patient monitoring'],
          delivery: '10-20 weeks'
        }, {
          name: 'Financial Services Technology',
          description: 'Advanced fintech solutions with compliance and security',
          pricing: '$12,000 - $60,000/month',
          features: ['Payment processing', 'Risk management', 'Regulatory compliance'],
          delivery: '12-24 weeks'
        }, {
          name: 'E-commerce Platform Development',
          description: 'Custom e-commerce solutions with AI-powered features',
          pricing: '$8,000 - $40,000/month',
          features: ['Personalization', 'Inventory management', 'Analytics'],
          delivery: '8-16 weeks'
        }, {
          name: 'Education Technology Solutions',
          description: 'Innovative EdTech platforms with learning analytics',
          pricing: '$6,000 - $30,000/month',
          features: ['LMS integration', 'Learning analytics', 'Student engagement'],
          delivery: '6-14 weeks'
        }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { number: '500+', label: 'Projects Completed' }, { number: '50+', label: 'Happy Clients' }, { number: '99.9%', label: 'Uptime Guarantee' }, { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Technology
                <span className="text-blue-600"> Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your business with our complete suite of AI services, IT infrastructure, 
                micro SaaS development, and innovative digital transformation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: {contactInfo.phone}
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to drive your business forward
              </p>
            </div>

            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className={`bg-gradient-to-r ${category.color} p-8`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                        <p className="text-white/80">Innovative solutions for modern businesses</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h4>
                          <p className="text-gray-600 mb-4">{service.description}</p>
                          
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-500">Pricing:</span>
                              <span className="text-lg font-bold text-green-600">{service.pricing}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-500">Delivery:</span>
                              <span className="text-sm text-blue-600 font-medium">{service.delivery}</span>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h5>
                            <ul className="space-y-1">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex space-x-3">
                            <a 
                              href={`tel:${contactInfo.phone}`}
                              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-blue-700 transition-colors"
                            >
                              Get Quote
                            </a>
                            <a 
                              href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                              className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Contact us today for a free consultation and discover how our technology solutions 
                can drive your success.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Phone className="w-8 h-8 text-blue-200 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Mail className="w-8 h-8 text-blue-200 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <MapPin className="w-8 h-8 text-blue-200 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                  <p className="text-blue-200">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now for Free Consultation
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email Inquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )}