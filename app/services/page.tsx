import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';

export const metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Comprehensive technology services for modern businesses.',
  keywords: 'services, technology, business, solutions'
};

const services = [
  {
    name: 'AI Solutions',
    description: 'Custom AI models, automation, and intelligent systems that transform your business operations.',
    icon: LightBulbIcon,
    color: 'blue',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'AI Automation',
      'Predictive Analytics',
      'Chatbots & Virtual Assistants'
    ],
    pricing: 'Starting at $15k',
    timeline: '4-8 weeks',
    href: '/services/ai-services'
  },
  {
    name: 'Micro SaaS',
    description: 'Scalable, secure micro SaaS products that solve specific business challenges.',
    icon: CpuChipIcon,
    color: 'purple',
    features: [
      'Custom Web Applications',
      'API Development',
      'Database Design',
      'User Management',
      'Payment Integration',
      'Analytics Dashboard'
    ],
    pricing: 'Starting at $25k',
    timeline: '6-12 weeks',
    href: '/services/micro-saas'
  },
  {
    name: 'IT Services',
    description: 'Cloud migration, DevOps, SRE, and infrastructure management for enterprise scale.',
    icon: GlobeAltIcon,
    color: 'green',
    features: [
      'Cloud Migration',
      'DevOps & SRE',
      'Infrastructure Management',
      'Security Consulting',
      'Monitoring & Alerting',
      'Disaster Recovery'
    ],
    pricing: 'Starting at $10k',
    timeline: '2-6 weeks',
    href: '/services/it-services'
  },
  {
    name: 'Blockchain Solutions',
    description: 'Smart contracts, DeFi platforms, and blockchain integration for secure, transparent operations.',
    icon: ShieldCheckIcon,
    color: 'indigo',
    features: [
      'Smart Contract Development',
      'DeFi Protocols',
      'NFT Marketplaces',
      'Token Economics',
      'Security Auditing',
      'Blockchain Integration'
    ],
    pricing: 'Starting at $30k',
    timeline: '8-16 weeks',
    href: '/services/blockchain'
  },
  {
    name: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization tools.',
    icon: ChartBarIcon,
    color: 'emerald',
    features: [
      'Data Warehousing',
      'Business Intelligence',
      'Real-time Dashboards',
      'Predictive Modeling',
      'Data Visualization',
      'Custom Analytics'
    ],
    pricing: 'Starting at $12k',
    timeline: '6-12 weeks',
    href: '/services/analytics'
  },
  {
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    icon: ShieldCheckIcon,
    color: 'red',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Compliance Consulting',
      'Incident Response',
      'Security Training',
      'Vulnerability Assessment'
    ],
    pricing: 'Starting at $8k',
    timeline: '2-6 weeks',
    href: '/services/security'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements and create a detailed project roadmap.',
    icon: LightBulbIcon
  },
  {
    step: '02',
    title: 'Design & Development',
    description: 'Our team builds your solution using cutting-edge technologies.',
    icon: CpuChipIcon
  },
  {
    step: '03',
    title: 'Testing & Deployment',
    description: 'Rigorous testing ensures your solution works perfectly in production.',
    icon: ShieldCheckIcon
  },
  {
    step: '04',
    title: 'Support & Maintenance',
    description: 'Ongoing support and updates to keep your solution running smoothly.',
    icon: UserGroupIcon
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Comprehensive technology services designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From AI solutions to cloud services, we provide end-to-end technology solutions for modern businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
                <p className="text-gray-600 mb-6">
                  Machine learning, natural language processing, computer vision, and AI automation solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Machine Learning Models</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• AI Automation</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
                <p className="text-gray-600 mb-6">
                  Custom software development, web applications, and scalable SaaS solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Web Applications</li>
                  <li>• Mobile Apps</li>
                  <li>• API Development</li>
                  <li>• Cloud Integration</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Cloud migration, cybersecurity, DevOps, and enterprise infrastructure solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cloud Migration</li>
                  <li>• Cybersecurity</li>
                  <li>• DevOps Automation</li>
                  <li>• Infrastructure Management</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Business intelligence, data visualization, and predictive analytics solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Business Intelligence</li>
                  <li>• Data Visualization</li>
                  <li>• Predictive Analytics</li>
                  <li>• Real-time Dashboards</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Consulting</h3>
                <p className="text-gray-600 mb-6">
                  Strategic technology consulting and digital transformation guidance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Technology Strategy</li>
                  <li>• Digital Transformation</li>
                  <li>• Process Optimization</li>
                  <li>• Technology Assessment</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <ArrowRight className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Support</h3>
                <p className="text-gray-600 mb-6">
                  Ongoing support, maintenance, and optimization services.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 24/7 Support</li>
                  <li>• Maintenance</li>
                  <li>• Performance Optimization</li>
                  <li>• Training & Documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let's discuss how our services can help transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Get Started Today
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}