import { Brain, Cloud, Shield, Zap, Database, Cpu, Lock, Globe } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Button from '../components/Button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - AI, Cloud, and Cybersecurity Solutions',
  description: 'Comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, data analytics, and IoT solutions for enterprise transformation.',
  keywords: ['AI services', 'cloud computing', 'cybersecurity', 'data analytics', 'IoT solutions', 'enterprise technology'],
}

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for enterprise automation and decision-making.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure, migration services, and DevOps automation.',
      features: ['Cloud Migration', 'DevOps Automation', 'Container Orchestration', 'Serverless Architecture'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions and comprehensive threat protection strategies.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Auditing', 'Compliance Management'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Digital Innovation',
      description: 'Next-generation technology and digital transformation consulting.',
      features: ['Digital Strategy', 'Process Automation', 'Technology Consulting', 'Innovation Labs'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Advanced data processing, analytics, and business intelligence solutions.',
      features: ['Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Cpu,
      title: 'IoT & Edge Computing',
      description: 'Internet of Things solutions and edge computing infrastructure.',
      features: ['IoT Device Management', 'Edge Analytics', 'Sensor Networks', 'Real-time Processing'],
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Lock,
      title: 'Blockchain Solutions',
      description: 'Secure blockchain technology and distributed ledger solutions.',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Supply Chain Tracking'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Worldwide infrastructure and multi-region deployment services.',
      features: ['Multi-Cloud Strategy', 'Global CDN', 'Regional Compliance', '24/7 Support'],
      color: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                variant="glass"
                hover
                className="p-6 border-white/20"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                      <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          <Card variant="glass" className="p-12 text-center border-white/20">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our technology solutions can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}