import React from 'react';
import { Link } from 'react-router-dom';
// Metadata handled by React Helmet
import { 
  Brain, 
  Code, 
  Cloud, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  MessageSquare, 
  FileText, 
  Smartphone, 
  Globe, 
  Lock, 
  Monitor, 
  Database, 
  Cpu,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Innovative Services Catalog | Zion Tech Group - Cutting-Edge Solutions',
  description: 'Explore our latest micro SaaS, AI, and IT services including autonomous operations, quantum computing, and next-generation business intelligence solutions.',
  keywords: 'micro SaaS, AI services, IT solutions, autonomous systems, quantum computing, business intelligence, cloud services',
};

export default function NewServicesCatalogPage() {
  const serviceCategories = [
    {
      id: 'micro-saas',
      title: 'Micro SaaS Solutions',
      icon: Code,
      color: 'orange',
      description: 'Specialized SaaS applications designed for specific business needs',
      services: [
        {
          name: 'AI-Powered Email Marketing Suite',
          description: 'Intelligent email campaigns with predictive analytics and automated personalization',
          icon: MessageSquare,
          features: [
            'AI-driven subject line optimization',
            'Predictive send time optimization',
            'Automated A/B testing with ML',
            'Advanced segmentation algorithms',
            'Real-time engagement scoring'
          ],
          pricing: '$299 - $1,999/month',
          delivery: '2-3 weeks',
          marketPrice: '$500 - $2,500/month',
          benefits: [
            'Increase open rates by 40%',
            'Reduce unsubscribe rates by 60%',
            'Automated campaign optimization',
            'Advanced analytics and reporting'
          ],
          href: '/services/ai-email-marketing'
        },
        {
          name: 'Healthcare Appointment AI Scheduler',
          description: 'Intelligent scheduling system for healthcare providers with patient preference learning',
          icon: Users,
          features: [
            'AI-powered appointment optimization',
            'Patient preference learning',
            'Automated rescheduling and reminders',
            'Provider availability optimization',
            'HIPAA-compliant communication'
          ],
          pricing: '$899 - $4,999/month',
          delivery: '3-4 weeks',
          marketPrice: '$1,200 - $6,000/month',
          benefits: [
            'Reduce no-show rates by 50%',
            'Optimize provider schedules',
            'Improve patient satisfaction',
            'Automated compliance reporting'
          ],
          href: '/services/healthcare-scheduler'
        },
        {
          name: 'Smart Inventory Management System',
          description: 'AI-driven inventory optimization with demand forecasting and automated reordering',
          icon: Database,
          features: [
            'Predictive demand forecasting',
            'Automated reorder point calculation',
            'Multi-location inventory tracking',
            'Supplier performance analytics',
            'Real-time stock level monitoring'
          ],
          pricing: '$599 - $3,499/month',
          delivery: '2-4 weeks',
          marketPrice: '$800 - $4,500/month',
          benefits: [
            'Reduce inventory costs by 30%',
            'Eliminate stockouts and overstock',
            'Automated supplier management',
            'Real-time visibility and control'
          ],
          href: '/services/smart-inventory'
        },
        {
          name: 'AI Content Moderation Platform',
          description: 'Automated content moderation with real-time filtering and policy enforcement',
          icon: Shield,
          features: [
            'Real-time content analysis',
            'Multi-language support',
            'Custom policy configuration',
            'Human-in-the-loop workflows',
            'Compliance reporting and analytics'
          ],
          pricing: '$799 - $5,999/month',
          delivery: '3-5 weeks',
          marketPrice: '$1,000 - $7,500/month',
          benefits: [
            'Reduce moderation costs by 70%',
            'Improve response time to 99.9%',
            'Customizable policy enforcement',
            'Comprehensive audit trails'
          ],
          href: '/services/content-moderation'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'Advanced AI Services',
      icon: Brain,
      color: 'blue',
      description: 'Cutting-edge artificial intelligence solutions for enterprise transformation',
      services: [
        {
          name: 'Autonomous Business Process Orchestrator',
          description: 'Self-managing AI system that autonomously optimizes and executes business processes',
          icon: Cpu,
          features: [
            'Autonomous process discovery and mapping',
            'Self-optimizing workflow execution',
            'Predictive process failure prevention',
            'Dynamic resource allocation',
            'Continuous learning and adaptation'
          ],
          pricing: '$4,999 - $24,999/month',
          delivery: '6-10 weeks',
          marketPrice: '$7,500 - $35,000/month',
          benefits: [
            'Reduce process execution time by 80%',
            'Eliminate human errors in routine tasks',
            'Continuous optimization and improvement',
            'Predictive maintenance and scaling'
          ],
          href: '/services/autonomous-orchestrator'
        },
        {
          name: 'Quantum-Enhanced Business Intelligence',
          description: 'Next-generation BI platform leveraging quantum computing principles for advanced analytics',
          icon: BarChart3,
          features: [
            'Quantum-inspired optimization algorithms',
            'Advanced pattern recognition',
            'Multi-dimensional data analysis',
            'Real-time predictive modeling',
            'Quantum-safe data encryption'
          ],
          pricing: '$8,999 - $49,999/month',
          delivery: '8-12 weeks',
          marketPrice: '$15,000 - $75,000/month',
          benefits: [
            'Process complex data 1000x faster',
            'Uncover hidden business insights',
            'Quantum-level security and encryption',
            'Future-proof analytics platform'
          ],
          href: '/services/quantum-bi'
        },
        {
          name: 'AI-Powered Cybersecurity Guardian',
          description: 'Advanced threat detection and response system with autonomous security operations',
          icon: Lock,
          features: [
            'Autonomous threat hunting and detection',
            'Real-time attack simulation and testing',
            'Predictive vulnerability assessment',
            'Automated incident response',
            'Zero-trust architecture implementation'
          ],
          pricing: '$6,999 - $34,999/month',
          delivery: '6-8 weeks',
          marketPrice: '$10,000 - $50,000/month',
          benefits: [
            'Reduce security incidents by 95%',
            'Automated threat response in seconds',
            'Predictive security posture management',
            'Continuous compliance monitoring'
          ],
          href: '/services/ai-cybersecurity'
        },
        {
          name: 'Multimodal AI Communication Platform',
          description: 'Advanced AI system that processes and responds across text, voice, and visual inputs',
          icon: MessageSquare,
          features: [
            'Cross-modal understanding and generation',
            'Real-time voice and video processing',
            'Contextual conversation management',
            'Emotional intelligence and sentiment analysis',
            'Multi-language natural interaction'
          ],
          pricing: '$5,999 - $29,999/month',
          delivery: '7-10 weeks',
          marketPrice: '$9,000 - $45,000/month',
          benefits: [
            'Unified communication across all channels',
            'Enhanced user experience and engagement',
            'Reduced communication barriers',
            'Intelligent conversation routing'
          ],
          href: '/services/multimodal-ai'
        }
      ]
    },
    {
      id: 'it-services',
      title: 'Next-Generation IT Services',
      icon: Cloud,
      color: 'green',
      description: 'Modern IT infrastructure and platform engineering solutions',
      services: [
        {
          name: 'Autonomous Cloud Infrastructure Platform',
          description: 'Self-managing cloud infrastructure that automatically scales and optimizes resources',
          icon: Cloud,
          features: [
            'Autonomous resource provisioning and scaling',
            'Intelligent cost optimization',
            'Predictive infrastructure maintenance',
            'Multi-cloud orchestration',
            'Zero-downtime deployments'
          ],
          pricing: '$9,999 - $49,999/month',
          delivery: '8-12 weeks',
          marketPrice: '$15,000 - $75,000/month',
          benefits: [
            'Reduce infrastructure costs by 40%',
            'Eliminate manual scaling operations',
            'Predictive maintenance and optimization',
            'Multi-cloud redundancy and failover'
          ],
          href: '/services/autonomous-cloud'
        },
        {
          name: 'Edge Computing Intelligence Network',
          description: 'Distributed computing platform that brings AI processing to the edge',
          icon: Monitor,
          features: [
            'Edge AI model deployment and management',
            'Distributed processing orchestration',
            'Real-time data streaming and processing',
            'Edge-to-cloud synchronization',
            'Autonomous edge device management'
          ],
          pricing: '$7,999 - $39,999/month',
          delivery: '6-10 weeks',
          marketPrice: '$12,000 - $60,000/month',
          benefits: [
            'Reduce latency by 90%',
            'Process data at the source',
            'Reduce bandwidth costs significantly',
            'Enhanced privacy and security'
          ],
          href: '/services/edge-computing'
        },
        {
          name: 'Blockchain-Integrated Data Platform',
          description: 'Secure, immutable data platform with blockchain integration for enterprise use',
          icon: Database,
          features: [
            'Blockchain-based data integrity verification',
            'Smart contract automation',
            'Decentralized data storage and access',
            'Immutable audit trails',
            'Cross-organization data sharing'
          ],
          pricing: '$12,999 - $64,999/month',
          delivery: '10-16 weeks',
          marketPrice: '$20,000 - $100,000/month',
          benefits: [
            'Guaranteed data integrity and immutability',
            'Automated compliance and auditing',
            'Enhanced data security and privacy',
            'Transparent and verifiable transactions'
          ],
          href: '/services/blockchain-data'
        },
        {
          name: 'AI-Driven DevOps Automation Suite',
          description: 'Intelligent DevOps platform that automates the entire software delivery pipeline',
          icon: Zap,
          features: [
            'Autonomous CI/CD pipeline optimization',
            'Intelligent code quality analysis',
            'Predictive deployment risk assessment',
            'Automated testing and validation',
            'Self-healing infrastructure management'
          ],
          pricing: '$5,999 - $29,999/month',
          delivery: '6-8 weeks',
          marketPrice: '$9,000 - $45,000/month',
          benefits: [
            'Reduce deployment time by 85%',
            'Eliminate human errors in deployments',
            'Predictive failure prevention',
            'Automated quality assurance'
          ],
          href: '/services/ai-devops'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Star className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-lg font-semibold text-blue-100">Innovation First</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Next-Generation Services
          </h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Discover our revolutionary micro SaaS, AI, and IT solutions that are transforming 
            industries and driving unprecedented business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Custom Quote
            </a>
          </div>
          <div className="text-sm text-blue-200">
            <p>📍 {contactInfo.address}</p>
            <p>🌐 {contactInfo.website}</p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative solutions span across micro SaaS, advanced AI, and next-generation IT services, 
              each designed to deliver measurable business transformation.
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                {/* Category Header */}
                <div className={`bg-gradient-to-r from-${category.color}-600 to-${category.color}-700 p-8 text-white`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-xl">
                      <category.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{category.title}</h3>
                      <p className="text-lg text-${category.color}-100">{category.description}</p>
                    </div>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {category.services.map((service, index) => (
                      <div key={index} className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`p-3 bg-${category.color}-100 rounded-lg`}>
                            <service.icon className={`h-6 w-6 text-${category.color}-600`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h4>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <h5 className="font-semibold text-gray-900 mb-3">Key Features:</h5>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className={`w-4 h-4 text-${category.color}-500 mr-2 flex-shrink-0`} />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div className="mb-6">
                          <h5 className="font-semibold text-gray-900 mb-3">Business Benefits:</h5>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                                <ArrowRight className={`w-4 h-4 text-${category.color}-500 mr-2 flex-shrink-0`} />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Pricing and Delivery */}
                        <div className="flex items-center justify-between mb-4 p-4 bg-white rounded-lg border border-gray-200">
                          <div className="flex items-center gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <DollarSign className="h-4 w-4 text-green-600" />
                                <span className="font-bold text-green-600">{service.pricing}</span>
                              </div>
                              <p className="text-xs text-gray-500">Our Pricing</p>
                            </div>
                            <div className="w-px h-8 bg-gray-300"></div>
                            <div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-blue-600" />
                                <span className="font-semibold text-blue-600">{service.delivery}</span>
                              </div>
                              <p className="text-xs text-gray-500">Delivery Time</p>
                            </div>
                          </div>
                        </div>

                        {/* Market Comparison */}
                        <div className="mb-6 p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-sm text-blue-800">
                            <span className="font-semibold">Market Average:</span> {service.marketPrice}
                          </p>
                          <p className="text-xs text-blue-600 mt-1">
                            Save up to 25% compared to industry standards
                          </p>
                        </div>

                        {/* CTA */}
                        <Link
                          href={service.href}
                          className={`inline-flex items-center justify-center w-full py-3 px-6 bg-${category.color}-600 text-white font-semibold rounded-lg hover:bg-${category.color}-700 transition-colors group`}
                        >
                          <span>Get Started</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Innovation Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge solutions have delivered transformative results across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-700 font-semibold">Innovation Success Rate</p>
              <p className="text-sm text-gray-600 mt-2">Breakthrough solutions delivered</p>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">$5.2B</div>
              <p className="text-gray-700 font-semibold">Value Generated</p>
              <p className="text-sm text-gray-600 mt-2">For our clients worldwide</p>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
              <p className="text-gray-700 font-semibold">Average ROI</p>
              <p className="text-sm text-gray-600 mt-2">Within first year</p>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
              <p className="text-gray-700 font-semibold">Innovation Projects</p>
              <p className="text-sm text-gray-600 mt-2">Successfully delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative solutions can accelerate your growth and drive unprecedented results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="text-sm text-blue-200">
            <p>📍 {contactInfo.address}</p>
            <p>🌐 {contactInfo.website}</p>
          </div>
        </div>
      </section>
    </div>
  );
}